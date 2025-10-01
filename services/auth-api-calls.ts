import axios, { AxiosError } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Token management utilities
const TOKEN_KEY = "auth_token";
const USER_KEY = "user_data";

export const tokenManager = {
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },

  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  },

  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }
  },

  setUser: (user: User) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  },

  getUser: (): User | null => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem(USER_KEY);
      return user ? (JSON.parse(user) as User) : null;
    }
    return null;
  },

  removeUser: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(USER_KEY);
    }
  },

  clearAll: () => {
    tokenManager.removeToken();
    tokenManager.removeUser();
  },
};

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add token to every request if available
apiClient.interceptors.request.use(
  (config) => {
    const token = tokenManager.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; error?: string }>) => {
    // Handle unauthorized errors gracefully
    if (error.response?.status === 401) {
      tokenManager.clearAll();

      // Instead of forcing a page reload here,
      // just attach a flag so your components can handle redirect.
      return Promise.reject(
        new Error("Unauthorized. Please log in again.")
      );
    }
    return Promise.reject(error);
  }
);

// Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  role?: string;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SignUpData {
  email: string;
  fullName: string;
  password: string;
  phoneNumber: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
  passwordConfirm?: string;
}

export interface VerifyEmailData {
  token: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: User;
  data?: Record<string, unknown>;
}

// Error handler utility
const handleError = (err: unknown): string => {
  let errorMessage = "An unexpected error occurred";

  if (axios.isAxiosError(err)) {
    errorMessage =
      err.response?.data?.message ||
      err.response?.data?.error ||
      err.message;
  } else if (err instanceof Error) {
    errorMessage = err.message;
  }

  return errorMessage;
};

// Auth API functions
export const authAPI = {
  signUp: async (data: SignUpData): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post("/api/v1/auth/signup", data);

      if (response.data.token) tokenManager.setToken(response.data.token);
      if (response.data.user) tokenManager.setUser(response.data.user);

      return response.data;
    } catch (err) {
      throw new Error(handleError(err));
    }
  },

  signIn: async (data: SignInData): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post("/api/v1/auth/login", data);

      if (response.data.token) tokenManager.setToken(response.data.token);
      if (response.data.user) tokenManager.setUser(response.data.user);

      return response.data;
    } catch (err) {
      throw new Error(handleError(err));
    }
  },

  forgotPassword: async (data: ForgotPasswordData): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post("/api/v1/auth/forgotPassword", data);
      return response.data;
    } catch (err) {
      throw new Error(handleError(err));
    }
  },

  resetPassword: async (data: ResetPasswordData): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post("/api/v1/auth/resetPassword", data);
      return response.data;
    } catch (err) {
      throw new Error(handleError(err));
    }
  },

  verifyEmail: async (data: VerifyEmailData): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post("/api/v1/auth/verify-email", data);

      if (response.data.token) tokenManager.setToken(response.data.token);

      return response.data;
    } catch (err) {
      throw new Error(handleError(err));
    }
  },

  resendVerification: async (email: string): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post(
        "/api/v1/auth/resend-verification",
        { email }
      );
      return response.data;
    } catch (err) {
      throw new Error(handleError(err));
    }
  },

  signOut: async (): Promise<void> => {
    try {
      tokenManager.clearAll();
      // Let React handle redirect with router.push
    } catch (err) {
      tokenManager.clearAll();
      throw new Error(handleError(err));
    }
  },

  getProfile: async (): Promise<User> => {
    try {
      const response = await apiClient.get("/api/v1/auth/profile");

      if (response.data.user) tokenManager.setUser(response.data.user);

      return response.data;
    } catch (err) {
      throw new Error(handleError(err));
    }
  },

  isAuthenticated: (): boolean => {
    return !!tokenManager.getToken();
  },
};

export default authAPI;
