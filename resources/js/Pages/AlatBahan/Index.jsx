import React, { useState } from "react";
import { Link, usePage, router, Head } from "@inertiajs/react";
import DashboardLayouts from "@/Components/DashboardLayouts";
import Modal from "@/Components/Modal";
import toast from "react-hot-toast";

export default function Index({ alat }) {
    const { flash } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    function confirmDelete(id) {
        setSelectedId(id);
        setShowModal(true);
    }

    function handleDelete() {
        if(selectedId) {
            router.delete(`/alat/${selectedId}`);
        }
        setShowModal(false);
    }
    
    return (
        <DashboardLayouts>
            <Head title="Manajemen Alat Bahan" />
            <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Manajemen Alat & Bahan</h1>
                    <Link
                    href="/alat/create"
                    className="px-4 py02 bg-blue-600 text-white rounded-lg hover:bg-blue-700" >+ Tambah Data</Link>
                </div>

                <div className="bg-white shadow rounded-lg">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-300 text-left">
                                <th className="p-2 border">Nama Alat</th>
                                <th className="p-2 border">Jenis</th>
                                <th className="p-2 border">Kondisi</th>
                                <th className="p-2 border">Jumlah</th>
                                <th className="p-2 border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alat.data.map((a) => (
                                <tr key={a.id_alat} className="border-t">
                                    <td className="p-2">{a.nama_alat}</td>
                                    <td className="p-2">{a.jenis}</td>
                                    <td className="p-2 capitalize">{a.kondisi}</td>
                                    <td className="p-2">{a.jumlah}</td>
                                    <td className="p-2 space-x-2">
                                        <Link
                                            href={`/alat/${a.id_alat}/edit`}
                                            className="px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500" >
                                        Edit</Link>
                                        <button
                                            onClick={() => confirmDelete(a.id_alat)}
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" >
                                        Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Modal 
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onConfirm={handleDelete}
                    message={`Apakah yakin ingin menghapus alat ini? Operasi tidak dapat dibatalkan.`}
                />
            </div>
        </DashboardLayouts>
    )
}