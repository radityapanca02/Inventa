import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Package,
    ClipboardList,
    Clock,
    Users,
} from "lucide-react";

export default function DashboardLayouts({ children }) {
    const { auth } = usePage().props;
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
            <aside className="w-64 bg-white/60 backdrop-blur-md shadow-lg">
                <div className="p-4 border-b">
                    <h1 className="font-bold text-lg">INVENTA</h1>
                    <p className="text-sm text-gray-600">
                        Sistem Manajemen Peminjaman Alat dan Bahan Prakarya Sekolah
                    </p>
                </div>
                <nav className="p-4 space-y-2">
                    <Link
                        href={route("dashboard")}
                        className="flex items-center p-2 rounded-lg hover:bg-blue-100"
                    >
                        <LayoutDashboard className="w-5 h-5 mr-2" />
                        Dashboard
                    </Link>
                    <Link
                        href="/alat"
                        className="flex items-center p-2 rounded-lg hover:bg-blue-100" >
                        <Package className="w-5 h-5 mr-2" />
                        Alat & Bahan
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center p-2 rounded-lg hover:bg-blue-100"
                    >
                        <ClipboardList className="w-5 h-5 mr-2" />
                        Peminjaman
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center p-2 rounded-lg hover:bg-blue-100"
                    >
                        <Clock className="w-5 h-5 mr-2" />
                        Riwayat
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center p-2 rounded-lg hover:bg-blue-100"
                    >
                        <Users className="w-5 h-5 mr-2" />
                        Manajemen
                    </Link>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="flex justify-between items-center bg-white/70 backdrop-blur-md px-6 py-4 shadow-sm">
                    <h2 className="text-xl font-semibold">Dashboard</h2>

                    <div className="relative">
                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200"
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white">
                                {auth.user?.username?.charAt(0).toUpperCase()}
                            </div>
                            <span>{auth.user?.username}</span>
                        </button>

                        {openDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                                <Link
                                    href={route("profile.edit")}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </header>

                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
