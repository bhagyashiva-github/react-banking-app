import React, { useState, useMemo } from "react";
import { transactions } from "./data";

const pageSize = 5;

const TransactionTable: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let txns = [...transactions];

    if (filterStatus !== "All") {
      txns = txns.filter((t) => t.status === filterStatus);
    }

    txns.sort((a, b) =>
      sortBy === "amount"
        ? b.amount - a.amount
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return txns;
  }, [filterStatus, sortBy]);

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div className="p-6">
      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
  <div className="flex items-center space-x-2">
    <label className="text-sm font-medium text-gray-700">Status:</label>
    <select
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
      className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option>All</option>
      <option>Completed</option>
      <option>Pending</option>
    </select>
  </div>

  <div className="flex items-center space-x-2">
    <label className="text-sm font-medium text-gray-700">Sort by:</label>
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
</div>


      {/* Table */}
      <table className="w-full bg-white border rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">Date</th>
            <th className="text-left px-4 py-2">Description</th>
            <th className="text-left px-4 py-2">Method</th>
            <th className="text-left px-4 py-2">Amount</th>
            <th className="text-left px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((txn) => (
            <tr key={txn.id} className="border-t">
              <td className="px-4 py-2">{txn.date}</td>
              <td className="px-4 py-2">{txn.description}</td>
              <td className="px-4 py-2">{txn.method}</td>
              <td className="px-4 py-2 text-blue-600 font-semibold">
                ₹{txn.amount.toLocaleString()}
              </td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    txn.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {txn.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
