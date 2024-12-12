import { info } from "autoprefixer";
import { useEffect, useState } from "react";


function TableComponent() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        async function getData() {
            const url = "http://localhost:3000/transactions";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setTransactions(json);
                console.log(json);
            } catch (error) {
                console.error(error.message);
            }
        }
        getData();
    }, []);

    return (
        <div className="w-full mx-auto">
            <div className="w-full mx-auto flex justify-between items-center mb-11 mt-11 font-sans text-gray-600">
                <div className="w-full max-w-sm min-w-[200px] relative">
                    <div className="relative">
                        <input
                            className="bg-white w-full pr-11 h-10 pl-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                            placeholder="Search"
                        />
                        <button
                            className="absolute h-8 w-8 left-1 top-1 my-auto px-2 flex items-center bg-transparent rounded text-slate-400"
                            type="button"
                        >
                            <svg //lup search
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                                stroke="currentColor"
                                className="w-8 h-8 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-x-3 text-sm text-slate-400 font-sans whitespace-nowrap">
                    <span className="font-semibold text-sm text-slate-600 font-sans">Show</span>
                    <div className="flex items-center border rounded px-3 py-1 h-10 cursor-pointer border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md">
                        <span className="text-sm font-sans">Last 10 transaction</span>
                        <svg
                            className="ml-1 h-4 w-4 text-slate-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06-.02L10 10.682l3.71-3.494a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span className="font-semibold text-sm text-slate-600 ml-7">Sort by</span>
                    <div className="flex items-center border rounded px-3 py-1 h-10 cursor-pointer border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md">
                        <span className="text-sm font-sans">Date</span>
                        <svg
                            className="ml-1 h-4 w-4 text-slate-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06-.02L10 10.682l3.71-3.494a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="flex items-center border rounded px-3 py-1 h-10 cursor-pointer border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md">
                        <span className="text-sm font-sans">Descending</span>
                        <svg
                            className="ml-1 h-4 w-4 text-slate-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06-.02L10 10.682l3.71-3.494a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <table className="table-auto text-black mt-5 w-full mb-5 border-collapse border-gray-200">
                <thead className="border-2 border-gray-200 text-left font-bold border-collapse text-[14px]">
                    <tr>
                        <th className="border-2 border-gray-200 px-4 py-3 text-left">Date & Time</th>
                        <th className="border-2 border-gray-200 px-4 py-2 text-left">Type</th>
                        <th className="border-2 border-gray-200 px-4 py-2 text-left">From/To</th>
                        <th className="border-2 border-gray-200 px-4 py-2 text-left">Description</th>
                        <th className="border-2 border-gray-200 px-4 py-2 text-left">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((item) => {
                        return (
                            <tr className="border-collapse border-2 border-gray-200 even:bg-white odd:bg-gray-100 font-sans text-xs">
                                <td className="border-2 border-gray-200 px-4 py-1 text-left">{item.dateTime}</td>
                                <td className="border-2 border-gray-200 px-4 text-left">{item.type}</td>
                                <td className="border-2 border-gray-200 px-4 text-left">{item.fromTo}</td>
                                <td className="border-2 border-gray-200 px-4 text-left">{item.description}</td>
                                <td className={`border-2 border-gray-200 px-4 text-left
                                ${item.type == "CREDIT" ? "text-green-500"
                                        : "text-red-500"
                                    }`}>
                                    {item.type == "CREDIT"
                                        ? `+Rp${item?.amount?.toLocaleString("id-ID")},00`
                                        : `-Rp${item?.amount?.toLocaleString("id-ID")},00`}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;