import React, { useState, useEffect } from "react";
import { Link, usePage, router, Head } from "@inertiajs/react";
import DashboardLayouts from "@/Components/DashboardLayouts";
import Swal from 'sweetalert2';

export default function Index({ alat }) {
    const { props } = usePage();
    const { flash } = props;
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (flash && flash.success) {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: flash.success,
                timer: 3000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
        }

        if (flash && flash.error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: flash.error,
                timer: 3000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
        }
    }, [flash]);

    function confirmDelete(id, item) {
        setSelectedId(id);
        setSelectedItem(item);
        setShowModal(true);
    }

    function handleDelete() {
        if (selectedId) {
            router.delete(`/alat/${selectedId}`, {
                onSuccess: () => {
                    setShowModal(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil!',
                        text: 'Data berhasil dihapus',
                        timer: 3000,
                        showConfirmButton: false,
                        toast: true,
                        position: 'top-end'
                    });
                },
                onError: () => {
                    setShowModal(false);
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'Gagal menghapus data',
                        timer: 3000,
                        showConfirmButton: false,
                        toast: true,
                        position: 'top-end'
                    });
                }
            });
        }
    }

    return (
        <DashboardLayouts>
            <Head title="Manajemen Alat Bahan" />
            <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Manajemen Alat & Bahan</h1>
                    <Link
                        href="/alat/create"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" >+ Tambah Data</Link>
                </div>
                <div className="bg-white shadow rounded-lg">
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-300 text-left">
                                    <th className="p-2 border">Nama Alat</th>
                                    <th className="p-2 border">Jenis</th>
                                    <th className="p-2 border">Kondisi</th>
                                    <th className="p-2 border">Jumlah</th>
                                    <th className="p-2 border">Deskripsi</th>
                                    <th className="p-2 border">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alat.data.map((a) => (
                                    <tr key={a.id_alat} className="border-t hover:bg-gray-100">
                                        <td className="p-2">{a.nama_alat}</td>
                                        <td className="p-2">{a.jenis}</td>
                                        <td className="p-2 capitalize">{a.kondisi}</td>
                                        <td className="p-2">{a.jumlah}</td>
                                        <td className="p-2">{a.deskripsi}</td>
                                        <td className="p-2 space-x-2">
                                            <Link
                                                href={`/alat/${a.id_alat}/edit`}
                                                className="px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => confirmDelete(a.id_alat, a)}
                                                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="block md:hidden divide-y divide-gray-200">
                        {alat.data.map((a) => (
                            <div key={a.id_alat} className="p-4 hover:bg-gray-50 transition rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="font-semibold text-gray-800">{a.nama_alat}</h2>
                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-200 capitalize">
                                        {a.kondisi}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">
                                    <strong>Jenis:</strong> {a.jenis}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    <strong>Jumlah:</strong> {a.jumlah}
                                </p>
                                {a.deskripsi && (
                                    <p className="text-sm text-gray-500 mb-2">
                                        <strong>Deskripsi:</strong> {a.deskripsi}
                                    </p>
                                )}
                                <div className="flex space-x-2">
                                    <Link
                                        href={`/alat/${a.id_alat}/edit`}
                                        className="flex-1 text-center px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => confirmDelete(a.id_alat, a)}
                                        className="flex-1 text-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">Konfirmasi Hapus</h3>
                                <p className="text-gray-600 mt-2">
                                    Apakah yakin ingin menghapus alat <strong>{selectedItem?.nama_alat}</strong>?
                                    Operasi tidak dapat dibatalkan.
                                </p>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayouts>
    )
}