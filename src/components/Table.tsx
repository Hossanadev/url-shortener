"use client";
import React, { FC, useState } from "react";
import { TableProps } from "../../utilities/types";
import { Clipboard, Share2, Trash2 } from "react-feather";
import Modal from "./Modal";

const CustomTable: FC<TableProps> = ({
  data,
  columns,
  pageSize,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [toBeDeleteRows, setToBeDeletedRows] = useState<Set<number>>(new Set());
  const [deleteSingleRowModal, setDeleteSingleRowModal] =
    useState<boolean>(false);

  const totalPages = Math.ceil(data.length / pageSize);

  const handleRowSelect = (id: number) => {
    const newCheckboxes = new Set(selectedRows);
    newCheckboxes.has(id) ? newCheckboxes.delete(id) : newCheckboxes.add(id);
    setSelectedRows(newCheckboxes);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    let allRowId = data.map((data) => data.id);
    {
      isChecked
        ? setSelectedRows(new Set(allRowId))
        : setSelectedRows(new Set());
    }
  };

  const confirmDeleteSingleRow = (id: number) => {
    setDeleteSingleRowModal(true);
    const deletableRow = new Set(toBeDeleteRows).add(id);
    setToBeDeletedRows(deletableRow);
  };

  const deleteSingleRow = () => {
    data.filter((data) => !toBeDeleteRows.has(data.id));
    setDeleteSingleRowModal(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="rounded bg-white my-5">
      <section className="flex justify-between space-x-5">
        <span className="bg-white text-blue-500 cursor-pointer shadow-md text-sm px-1 md:px-3 py-1 font-medium rounded-tl">
          {selectedRows.size} {"Selected"}
        </span>
        <div className="space-x-0.5">
          {selectedRows.size > 0 && (
            <span className="bg-red-500 hover:bg-red-600 text-white cursor-pointer shadow text-sm px-1 md:px-3 py-1">
              Delete Selected
            </span>
          )}
          <span className="bg-green-500 hover:bg-green-600 text-white cursor-pointer shadow text-sm px-1 md:px-3 py-1 rounded-tr">
            View Deleted
          </span>
        </div>
      </section>
      <div className={`${className} overflow-auto`}>
        <table className="min-w-full table-auto shadow">
          <thead>
            <tr className="bg-[#14344C] text-sm text-white">
              <th className="p-2 text-left">
                {" "}
                <input
                  type="checkbox"
                  checked={
                    selectedRows.size === data.length &&
                    data.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              {columns.map((column) => (
                <th
                  className="font-normal px-2 py-3 items-center text-left whitespace-nowrap"
                  key={column.key}
                > {column.header}
                </th>
              ))}
              <th className="font-normal px-2 py-3 text-left flex items-center space-x-0.5">
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={item.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#e5e5e5]"}`}
              >
                <td className="py-1 px-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                  />
                </td>
                {columns.map((column) => (
                  <td
                    className={`${
                      column.link ? "text-[#2563eb] underline" : ""
                    } p-2 text-sm whitespace-nowrap`}
                    key={column.key}
                  >
                    {column.link ? (
                      <a href={item[column.link]}>{item[column.key]}</a>
                    ) : (
                      item[column.key]
                    )}
                  </td>
                ))}
                <td className="py-1 px-2 text-sm flex items-center space-x-2">
                  <Clipboard
                    size={16}
                    color="#14344c"
                    fill="#FFFFFF"
                    className="cursor-pointer"
                  />
                  <Share2
                    size={16}
                    color="#2563eb"
                    fill="#FFFFFF"
                    className="cursor-pointer"
                  />
                  <span
                    onClick={() => confirmDeleteSingleRow(item.id)}
                    className=""
                  >
                    <Trash2
                      size={16}
                      color="#FF0000"
                      fill="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="pagination flex justify-end px-2 py-4 items-center">
        <span className="mr-2 text-sm">{"Pagination:"}</span>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1 ? "bg-[#14344C] text-white" : "text-sm"
            } px-2 rounded-sm`}
          >
            {index + 1}
          </button>
        ))}
      </section>
      <Modal
        modalOpen={deleteSingleRowModal}
        closeModal={() => {
          setDeleteSingleRowModal(false);
          setToBeDeletedRows(new Set());
        }}
        actionBtn={() => deleteSingleRow()}
        modalMessage={"You're about to delete this row!"}
        actionText="Delete"
      />
    </div>
  );
};

export default CustomTable;
