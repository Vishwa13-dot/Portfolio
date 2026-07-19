import { useState } from "react";
import {
    FaEnvelope,
    FaSearch,
    FaTrash,
} from "react-icons/fa";

function MessagesAdmin() {

    const [search, setSearch] = useState("");

    const [messages, setMessages] = useState([

        {
            id: 1,
            name: "Kavya Patel",
            email: "kavya@gmail.com",
            subject: "Portfolio Project",
            message:
                "I really liked your portfolio. Let's connect.",
            date: "05 July 2026",
        },

        {
            id: 2,
            name: "Rahul Shah",
            email: "rahul@gmail.com",
            subject: "Internship",
            message:
                "We have an internship opportunity for you.",
            date: "04 July 2026",
        },

    ]);

    const deleteMessage = (id) => {

        if (window.confirm("Delete this message?")) {

            setMessages(
                messages.filter(
                    (message) => message.id !== id
                )
            );

        }

    };

    const filteredMessages = messages.filter((message) =>
        message.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <div className="space-y-8">

            {/* Heading */}

            <div>

                <h1 className="text-4xl font-bold">
                    Messages
                </h1>

                <p className="text-slate-400 mt-2">
                    Contact form messages.
                </p>

            </div>

            {/* Search */}

            <div className="relative">

                <FaSearch className="absolute left-5 top-5 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search by Name..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-14 pr-5 outline-none"
                />

            </div>

            {/* Messages Table */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

                <div className="overflow-x-auto">

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

                                        <td className="px-6 py-5 text-slate-300">
                                            {message.email}
                                        </td>

                                        <td className="px-6 py-5">
                                            {message.subject}
                                        </td>

                                        <td className="px-6 py-5 max-w-xs">

                                            <p className="truncate">

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
                                                    className="w-10 h-10 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-400 flex items-center justify-center transition"
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
                                        colSpan="6"
                                        className="text-center py-20"
                                    >

                                        <div className="text-6xl mb-4">

                                            📭

                                        </div>

                                        <h2 className="text-2xl font-bold">

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
        </div>

    );

}

export default MessagesAdmin;