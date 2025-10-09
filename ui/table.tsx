"use client";
import { ReactNode } from "react";
import { Icon } from "@iconify/react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

type TableProps<T> = {
  tableHead: Array<string>;
  tableData?: T[];
  renderRow: (row: T, index: number) => ReactNode;
  // isStraight?: boolean;
  pagination?: PaginationProps;
};

export default function Table<T>({
  tableHead,
  tableData = [],
  renderRow,
  // isStraight = false,
  pagination,
}: TableProps<T>) {
  return (
    <div className="w-full h-fit overflow-visible rounded-lg">
      {/* Table */}
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="h-[70px] text-[#122231] text-sm font-semibold border-b border-[#233E9733]">
            {tableHead.map((head, index) => (
              <th
                key={index}
                className={`px-6 py-3 whitespace-nowrap`}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr
              key={i}
              className="border-t border-[#233E9733] h-[60px] text-[#222B45]"
            >
              {renderRow(row, i)}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mx-auto border-t border-[#233E9733]">
        {pagination && (
            <div className="flex items-center justify-between px-6 py-3 bg-white w-[480px] gap-4">
            <button
                onClick={() =>
                pagination.onPageChange(Math.max(1, pagination.currentPage - 1))
                }
                disabled={pagination.currentPage === 1}
                className="flex items-center gap-1 text-xs md:text-base text-[#757575] disabled:opacity-50"
            >
                <Icon icon={"fluent:arrow-left-20-filled"} height={14} width={14} color="gray"/>
                Previous
            </button>

            <div className="flex items-center gap-1 text-xs md:text-sm">
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                .slice(
                    Math.max(0, pagination.currentPage - 2),
                    Math.min(pagination.totalPages, pagination.currentPage + 1) + 2
                )
                .map((page, idx, arr) => {
                    if (
                    idx > 0 &&
                    page !== arr[idx - 1] + 1 // if there’s a gap
                    ) {
                    return (
                        <span
                        key={`ellipsis-${page}`}
                        className="px-2 text-gray-400"
                        >
                        ...
                        </span>
                    );
                    }
                    return (
                    <button
                        key={page}
                        onClick={() => pagination.onPageChange(page)}
                        className={`px-3 py-1 sixe-[34px] rounded text-sm ${
                        pagination.currentPage === page
                            ? "bg-[#16A249] text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        {page}
                    </button>
                    );
                })}
            </div>

            <button
                onClick={() =>
                pagination.onPageChange(
                    Math.min(pagination.totalPages, pagination.currentPage + 1)
                )
                }
                disabled={pagination.currentPage === pagination.totalPages}
                className="flex items-center gap-1 text-xs md:text-sm text-[#757575] disabled:opacity-50"
            >
                Next
                <Icon icon={"fluent:arrow-right-20-filled"} height={14} width={14} color="gray"/>
            </button>
            </div>
        )}

      </div>
    </div>
  );
}
