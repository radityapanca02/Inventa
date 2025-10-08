import React, { useState, useEffect } from "react";
import { Link, usePage, router, Head } from "@inertiajs/react";
import DashboardLayouts from "@/Components/DashboardLayouts";
import Swal from 'sweetalert2';

export default function Index({ alat }) {
    const { props } = usePage();
    const { flash } = props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const [formData, setFormData] = useState({
        nama_alat: "",
        jenis: "",
        kondisi: "baik",
        jumlah: "",
        deskripsi: "",
    });
    const [processing, setProcessing] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // useEffect untuk menangani flash message global
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
                timer: 4000,
                showConfirmButton: true,
            });
        }
    }, [flash]);

    function resetForm() {
        setFormData({
            nama_alat: "",
            jenis: "",
            kondisi: "baik",
            jumlah: "",
            deskripsi: "",
        });
        setFormErrors({});
    }

    function handleCreateSubmit(e) {
        e.preventDefault();
        setProcessing(true);
        setFormErrors({});

        router.post('/alat', formData, {
            onSuccess: () => {
                setProcessing(false);
                setShowCreateModal(false);
                resetForm();
                
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Alat/Bahan berhasil ditambahkan',
                    timer: 3000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end'
                });
            },
            onError: (errors) => {
                setProcessing(false);
                setFormErrors(errors);

                if (errors.kondisi) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'Nilai kondisi tidak valid. Pilih opsi yang tersedia.',
                        timer: 4000,
                        showConfirmButton: true,
                    });
                } else if (Object.keys(errors).length > 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'Terjadi kesalahan. Silakan periksa form Anda.',
                        timer: 3000,
                        showConfirmButton: false,
                        toast: true,
                        position: 'top-end'
                    });
                }
            }
        });
    }

    function handleInputChange(field, value) {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        if (formErrors[field]) {
            setFormErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    }

    function openCreateModal() {
        setShowCreateModal(true);
    }

    function closeCreateModal() {
        setShowCreateModal(false);
        resetForm();
    }

    function confirmDelete(id, item) {
        // Validasi client-side: Cek jika jenis adalah bahan
        if (item.jenis === 'bahan') {
            Swal.fire({
                icon: 'error',
                title: 'Tidak Dapat Dihapus',
                text: 'Bahan tidak dapat dihapus/dikembalikan!',
                timer: 4000,
                showConfirmButton: true,
            });
            return;
        }

        setSelectedId(id);
        setSelectedItem(item);
        setShowDeleteModal(true);
    }

    function handleDelete() {
        if (selectedId) {
            router.delete(`/alat/${selectedId}`, {
                onSuccess: () => {
                    setShowDeleteModal(false);
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
                onError: (errors) => {
                    setShowDeleteModal(false);
                    // Error message akan ditangani oleh useEffect flash
                }
            });
        }
    }

    // Fungsi untuk menampilkan badge berdasarkan jenis
    function getJenisBadge(jenis) {
        const styles = {
            alat: "bg-blue-100 text-blue-800",
            bahan: "bg-green-100 text-green-800"
        };
        
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[jenis]}`}>
                {jenis}
            </span>
        );
    }

    return (
        <DashboardLayouts>
            <Head title="Manajemen Alat Bahan" />
            <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Manajemen Alat & Bahan</h1>
                    <button
                        onClick={openCreateModal}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        + Tambah Data
                    </button>
                </div>

                {/* Informasi */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800">Informasi</h3>
                            <div className="mt-1 text-sm text-blue-700">
                                <p>• <strong>Alat</strong> dapat dipinjam dan dikembalikan</p>
                                <p>• <strong>Bahan</strong> tidak dapat dihapus/dikembalikan setelah ditambahkan</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabel data */}
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
                                        <td className="p-2">{getJenisBadge(a.jenis)}</td>
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
                                                className={`px-3 py-1 text-white rounded-lg transition ${
                                                    a.jenis === 'bahan' 
                                                        ? 'bg-gray-400 cursor-not-allowed' 
                                                        : 'bg-red-500 hover:bg-red-600'
                                                }`}
                                                disabled={a.jenis === 'bahan'}
                                                title={a.jenis === 'bahan' ? 'Bahan tidak dapat dihapus' : 'Hapus'}
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile view */}
                    <div className="block md:hidden divide-y divide-gray-200">
                        {alat.data.map((a) => (
                            <div key={a.id_alat} className="p-4 hover:bg-gray-50 transition rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="font-semibold text-gray-800">{a.nama_alat}</h2>
                                    <div className="flex items-center space-x-2">
                                        {getJenisBadge(a.jenis)}
                                        <span className="text-xs px-2 py-1 rounded-full bg-gray-200 capitalize">
                                            {a.kondisi}
                                        </span>
                                    </div>
                                </div>
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
                                        className={`flex-1 text-center px-3 py-2 rounded-lg transition ${
                                            a.jenis === 'bahan' 
                                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                                                : 'bg-red-500 text-white hover:bg-red-600'
                                        }`}
                                        disabled={a.jenis === 'bahan'}
                                        title={a.jenis === 'bahan' ? 'Bahan tidak dapat dihapus' : 'Hapus'}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Tambah Data */}
                {showCreateModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">Tambah Alat/Bahan</h2>
                                        <p className="text-gray-600">Tambahkan alat/bahan baru ke inventaris</p>
                                    </div>
                                    <button
                                        onClick={closeCreateModal}
                                        className="text-gray-400 hover:text-gray-600 transition"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <form onSubmit={handleCreateSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Alat/Bahan *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.nama_alat}
                                            onChange={(e) => handleInputChange("nama_alat", e.target.value)}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${formErrors.nama_alat ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Masukkan nama alat/bahan"
                                        />
                                        {formErrors.nama_alat && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.nama_alat}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Jenis *</label>
                                        <select
                                            value={formData.jenis}
                                            onChange={(e) => handleInputChange("jenis", e.target.value)}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${formErrors.jenis ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        >
                                            <option value="">Pilih Jenis</option>
                                            <option value="alat">Alat (dapat dikembalikan)</option>
                                            <option value="bahan">Bahan (tidak dapat dikembalikan)</option>
                                        </select>
                                        {formErrors.jenis && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.jenis}</p>
                                        )}
                                        <p className="text-xs text-gray-500 mt-1">
                                            Pilih "Alat" untuk barang yang dapat dipinjam-kembalikan, "Bahan" untuk barang habis pakai
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kondisi *</label>
                                        <select
                                            value={formData.kondisi}
                                            onChange={(e) => handleInputChange("kondisi", e.target.value)}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${formErrors.kondisi ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        >
                                            <option value="baik">Baik</option>
                                            <option value="baru">Baru</option>
                                            <option value="rusak">Rusak</option>
                                            <option value="hilang">Hilang</option>
                                        </select>
                                        {formErrors.kondisi && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.kondisi}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah *</label>
                                        <input
                                            type="number"
                                            value={formData.jumlah}
                                            onChange={(e) => handleInputChange("jumlah", e.target.value)}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${formErrors.jumlah ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Masukkan jumlah"
                                            min="0"
                                        />
                                        {formErrors.jumlah && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.jumlah}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                                        <textarea
                                            value={formData.deskripsi}
                                            onChange={(e) => handleInputChange("deskripsi", e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            placeholder="Masukkan deskripsi"
                                            rows="3"
                                        />
                                        {formErrors.deskripsi && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.deskripsi}</p>
                                        )}
                                    </div>

                                    <div className="flex space-x-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={closeCreateModal}
                                            disabled={processing}
                                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
                                        >
                                            Batal
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="flex-1 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center"
                                        >
                                            {processing ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Menyimpan...
                                                </>
                                            ) : "Tambah Data"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal Hapus */}
                {showDeleteModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">Konfirmasi Hapus</h3>
                                <p className="text-gray-600 mt-2">
                                    Apakah yakin ingin menghapus alat <strong>{selectedItem?.nama_alat}</strong>?
                                    Operasi tidak dapat dibatalkan.
                                </p>
                                {selectedItem?.jenis === 'alat' && (
                                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-sm text-yellow-800">
                                            <strong>Perhatian:</strong> Pastikan alat tidak sedang dipinjam sebelum menghapus.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => setShowDeleteModal(false)}
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