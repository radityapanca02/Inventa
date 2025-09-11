// resources/js/Pages/Dashboard.jsx
import React from "react";
import DashboardLayouts from "@/Components/DashboardLayouts";
import { Head } from "@inertiajs/react";

export default function Dashboard({ totalAlat, dipinjam, riwayat }) {
    const Status = ({ status }) => {
        let tanda;

        if(status == "pinjam") {
            tanda = (
                <span className="px-3 py-2 text-xs font-semibold bg-orange-200 rounded-lg">{status}</span>
            );
        } else {
            tanda = (
                <span className="px-3 py-2 text-xs font-semibold bg-green-200 rounded-lg">{status}</span>
            );
        }

        return tanda;
    };
    
    return (
        <DashboardLayouts>
            <div className="space-y-6">
                <Head title="Dashboard Admin" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 transition-transform hover:shadow-lg hover:scale-105">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-3xl font-bold">{totalAlat}</p>
                                <p className="text-blue-100">Alat Tersedia</p>
                            </div>
                            <div className="bg-blue-400 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 transition-transform hover:shadow-lg hover:scale-105">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-3xl font-bold">{dipinjam}</p>
                                <p className="text-purple-100">Sedang Dipinjam</p>
                            </div>
                            <div className="bg-purple-400 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 transition-transform hover:shadow-lg hover:scale-105">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-3xl font-bold">{riwayat.length}</p>
                                <p className="text-green-100">Total Riwayat</p>
                            </div>
                            <div className="bg-green-400 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-800">Riwayat Peminjaman Terbaru</h2>
                        <p className="text-sm text-gray-500">Daftar peminjaman alat yang tercatat</p>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600 text-left text-sm font-medium uppercase tracking-wider">
                                    <th className="px-6 py-4 bg-gray-200">No</th>
                                    <th className="px-6 py-4 bg-gray-200">Nama Peminjam</th>
                                    <th className="px-6 py-4 bg-gray-200">Alat</th>
                                    <th className="px-6 py-4 bg-gray-200 text-center">Jumlah</th>
                                    <th className="px-6 py-4 bg-gray-200">Tanggal</th>
                                    <th className="px-6 py-4 bg-gray-200">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {riwayat.length > 0 ? (
                                    riwayat.map((item, index) => (
                                        <tr key={item.id_transaksi} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{index + 1}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.peminjam?.nama_peminjam || 'N/A'}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.alat?.nama_alat || 'N/A'}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                                                    {item.jumlah_pinjam}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{item.tgl_pinjam}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    <Status status={item.status} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center">
                                            <div className="flex flex-col items-center justify-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                                <p className="text-sm">Belum ada riwayat peminjaman</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    {riwayat.length > 0 && (
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                            <p className="text-xs text-gray-500">
                                Menampilkan {riwayat.length} riwayat peminjaman
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayouts>
    );
}