import { useState, useEffect } from "react";
import ls from "../../../utils/secureStorage";
import { FaSearch, FaTrash } from "react-icons/fa";

function MessagesAdmin() {
    const [search, setSearch] = useState("");

    const [messages, setMessages] = useState(() => {
        try {
            const data = ls.get("messages");

            if (Array.isArray(data)) {
                return data;
            }

            return [];
        } catch (error) {
            console.error("SecureLS:", error);

            try {
                ls.remove("messages");
            } catch { }

            return [];
        }
    });

    useEffect(() => {
        if (messages.length > 0) {
            ls.set("messages", messages);
        } else {
            ls.remove("messages");
        }
    }, [messages]);

    const deleteMessage = (id) => {
        if (window.confirm("Delete this message?")) {
            setMessages((prev) =>
                prev.filter(
                    (message) => message.id !== id
                )
            );
        }
    };

    const filteredMessages = messages.filter(
        (message) => {
            const searchText = search.toLowerCase();

            return (
                message.name
                    .toLowerCase()
                    .includes(searchText) ||
                message.email
                    .toLowerCase()
                    .includes(searchText) ||
                message.subject
                    .toLowerCase()
                    .includes(searchText) ||
                message.message
                    .toLowerCase()
                    .includes(searchText)
            );
        }
    );

    return (
        <div className="space-y-8 p-4 md:p-6">

            {/* Header */}

            <div>

                <h1 className="text-3xl font-bold text-white">
                    Messages
                </h1>

                <p className="text-slate-400 mt-2">
                    Manage contact form messages.
                </p>

            </div>

            {/* Search */}

            <div className="relative">

                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search name, email, subject or message..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />

            </div>
            {/* Mobile Message Cards */}

            <div className="grid grid-cols-1 gap-5 lg:hidden">

                {filteredMessages.length > 0 ? (
                    filteredMessages.map((message) => (
                        <div
                            key={message.id}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                        >

                            <div>

                                <h2 className="text-xl font-semibold break-words">
                                    {message.name}
                                </h2>

                                <p className="text-blue-400 mt-2 break-all">
                                    {message.email}
                                </p>

                            </div>

                            <div className="mt-5 space-y-3">

                                <div>

                                    <span className="text-slate-400 text-sm">
                                        Subject
                                    </span>

                                    <p className="mt-1 break-words">
                                        {message.subject}
                                    </p>

                                </div>

                                <div>

                                    <span className="text-slate-400 text-sm">
                                        Message
                                    </span>

                                    <p className="mt-1 text-slate-300 break-words">
                                        {message.message}
                                    </p>

                                </div>

                                <div className="flex justify-between items-center pt-2">

                                    <span className="text-slate-400">
                                        Date
                                    </span>

                                    <span>
                                        {message.date}
                                    </span>

                                </div>

                            </div>

                            <div className="flex justify-end mt-6">

                                <button
                                    onClick={() => deleteMessage(message.id)}
                                    className="w-10 h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition"
                                >
                                    <FaTrash />
                                </button>

                            </div>

                        </div>
                    ))
                ) : (

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl py-16 text-center">

                        <div className="text-6xl">
                            📭
                        </div>

                        <h2 className="text-2xl font-bold mt-4">
                            No Messages Found
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Messages from your contact form will appear here.
                        </p>

                    </div>

                )}

            </div>

            {/* Desktop Table */}

            <div className="hidden lg:block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-800">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Name
                            </th>

                            <th className="px-6 py-4 text-left">
                                Email
                            </th>

                            <th className="px-6 py-4 text-left">
                                Subject
                            </th>

                            <th className="px-6 py-4 text-left">
                                Message
                            </th>

                            <th className="px-6 py-4 text-left">
                                Date
                            </th>

                            <th className="px-6 py-4 text-center">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredMessages.length > 0 ? (

                            filteredMessages.map((message) => (

                                <tr
                                    key={message.id}
                                    className="border-t border-slate-800 hover:bg-slate-800 transition"
                                >

                                    <td className="px-6 py-5 font-semibold">
                                        {message.name}
                                    </td>

                                    <td className="px-6 py-5 break-all">
                                        {message.email}
                                    </td>

                                    <td className="px-6 py-5">
                                        {message.subject}
                                    </td>

                                    <td className="px-6 py-5 max-w-md">

                                        <p className="break-words text-slate-300">
                                            {message.message}
                                        </p>

                                    </td>

                                    <td className="px-6 py-5">
                                        {message.date}
                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-center">

                                            <button
                                                onClick={() => deleteMessage(message.id)}
                                                className="w-10 h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition"
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan={6}
                                    className="py-20 text-center"
                                >

                                    <div className="text-6xl">
                                        📭
                                    </div>

                                    <h2 className="text-2xl font-bold mt-4">
                                        No Messages Found
                                    </h2>

                                    <p className="text-slate-400 mt-2">
                                        Messages from your contact form will appear here.
                                    </p>

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default MessagesAdmin;