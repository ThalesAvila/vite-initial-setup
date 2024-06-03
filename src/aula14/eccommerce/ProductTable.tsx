import React from "react";

export default function ProductTable({ children }) {
  return (
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 text-center"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 text-center"
                >
                  Action
                </th>
              </tr>
            </thead>
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}
