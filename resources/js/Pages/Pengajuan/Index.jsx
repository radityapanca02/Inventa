import React, { useState } from 'react';
import { Link, usePage, router, Head } from '@inertiajs/react';
import DashboardLayouts from '@/Components/DashboardLayouts';
import Swal from 'sweetalert2';

export default function Index({ peminjaman, alatBahan }) {
    const { props } = usePage();
    const { flash } = props;
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedPeminjaman, setSelectedPeminjaman] = useState(null);
    const [catatanAdmin, setCatatanAdmin] = useState('');
    
    // State untuk form pengajuan peminjaman
    const [formData, setFormData] = useState({
        nama_peminjam: '',
        email: '',
        kontak: '',
        alamat: '',
        instansi: '',
        alasan: '',
        tanggal_pinjam: '',
        tanggal_kembali: '',
        keterangan: '',
        alat_bahan: []
    });
    const [selectedAlat, setSelectedAlat] = useState('');
    const [jumlahPinjam, setJumlahPinjam] = useState('');
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});

    // Handle flash messages
    React.useEffect(() => {
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

    // Safe access to peminjaman data
    const peminjamanData = peminjaman?.data || [];
    const alatBahanData = alatBahan || [];

    // Fungsi untuk form pengajuan peminjaman
    const handleAddAlat = () => {
        if (!selectedAlat || !jumlahPinjam) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Pilih alat dan isi jumlah yang akan dipinjam',
                timer: 3000,
                showConfirmButton: true,
            });
            return;
        }

        const alat = alatBahanData.find(a => a.id_alat == selectedAlat);
        if (!alat) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Alat tidak ditemukan',
                timer: 3000,
                showConfirmButton: true,
            });
            return;
        }

        if (jumlahPinjam > alat.jumlah_tersedia) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: `Jumlah melebihi stok tersedia (${alat.jumlah_tersedia})`,
                timer: 3000,
                showConfirmButton: true,
            });
            return;
        }

        // Cek apakah alat sudah dipilih
        if (formData.alat_bahan.find(item => item.id_alat == selectedAlat)) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Alat sudah dipilih sebelumnya',
                timer: 3000,
                showConfirmButton: true,
            });
            return;
        }

        setFormData(prev => ({
            ...prev,
            alat_bahan: [
                ...prev.alat_bahan,
                {
                    id_alat: parseInt(selectedAlat),
                    jumlah: parseInt(jumlahPinjam),
                    nama_alat: alat.nama_alat,
                    jumlah_tersedia: alat.jumlah_tersedia
                }
            ]
        }));

        setSelectedAlat('');
        setJumlahPinjam('');
    };

    const handleRemoveAlat = (index) => {
        setFormData(prev => ({
            ...prev,
            alat_bahan: prev.alat_bahan.filter((_, i) => i !== index)
        }));
    };

    const handleSubmitPengajuan = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        if (formData.alat_bahan.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Pilih minimal satu alat untuk dipinjam',
                timer: 3000,
                showConfirmButton: true,
            });
            setProcessing(false);
            return;
        }

        router.post('/peminjaman', formData, {
            onSuccess: () => {
                setProcessing(false);
                setShowCreateModal(false);
                resetForm();
            },
            onError: (errors) => {
                setProcessing(false);
                setErrors(errors);
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'Terjadi kesalahan. Silakan periksa form Anda.',
                    timer: 3000,
                    showConfirmButton: true,
                });
            }
        });
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    const resetForm = () => {
        setFormData({
            nama_peminjam: '',
            email: '',
            kontak: '',
            alamat: '',
            instansi: '',
            alasan: '',
            tanggal_pinjam: '',
            tanggal_kembali: '',
            keterangan: '',
            alat_bahan: []
        });
        setSelectedAlat('');
        setJumlahPinjam('');
        setErrors({});
    };

    const openCreateModal = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setShowCreateModal(false);
        resetForm();
    };

    // Fungsi untuk manajemen peminjaman
    const handleApprove = (id) => {
        Swal.fire({
            title: 'Setujui Peminjaman?',
            text: "Apakah Anda yakin ingin menyetujui peminjaman ini?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Setujui!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(`/peminjaman/${id}/approve`);
            }
        });
    };

    const openRejectModal = (peminjaman) => {
        setSelectedPeminjaman(peminjaman);
        setShowRejectModal(true);
    };

    const handleReject = () => {
        if (!catatanAdmin.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Harap berikan alasan penolakan',
                timer: 3000,
                showConfirmButton: true,
            });
            return;
        }

        router.post(`/peminjaman/${selectedPeminjaman.id_peminjaman}/reject`, {
            catatan_admin: catatanAdmin
        }, {
            onSuccess: () => {
                setShowRejectModal(false);
                setCatatanAdmin('');
            },
            onError: () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'Terjadi kesalahan saat menolak peminjaman',
                    timer: 3000,
                    showConfirmButton: true,
                });
            }
        });
    };

    const handleReturn = (id) => {
        Swal.fire({
            title: 'Konfirmasi Pengembalian',
            text: "Apakah alat sudah dikembalikan?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Sudah Dikembalikan!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(`/peminjaman/${id}/return`);
            }
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Hapus Data Peminjaman?',
            text: "Data yang dihapus tidak dapat dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/peminjaman/${id}`, {
                    onSuccess: () => {
                        // Success message akan ditangani oleh flash
                    },
                    onError: (error) => {
                        console.error('Delete error:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Gagal!',
                            text: 'Gagal menghapus data peminjaman',
                            timer: 3000,
                            showConfirmButton: true,
                        });
                    }
                });
            }
        });
    };

    const getStatusBadge = (status) => {
        const statusStyles = {
            menunggu: 'bg-yellow-100 text-yellow-800',
            disetujui: 'bg-blue-100 text-blue-800',
            ditolak: 'bg-red-100 text-red-800',
            dipinjam: 'bg-purple-100 text-purple-800',
            dikembalikan: 'bg-green-100 text-green-800',
            terlambat: 'bg-orange-100 text-orange-800'
        };

        const statusLabels = {
            menunggu: 'Menunggu',
            disetujui: 'Disetujui',
            ditolak: 'Ditolak',
            dipinjam: 'Dipinjam',
            dikembalikan: 'Dikembalikan',
            terlambat: 'Terlambat'
        };

        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
                {statusLabels[status] || status}
            </span>
        );
    };

    // Safe rendering untuk data peminjaman
    const renderPeminjamanTable = () => {
        if (!peminjamanData || peminjamanData.length === 0) {
            return (
                <tr>
                    <td colSpan="7" className="p-4 text-center text-gray-500">
                        Tidak ada data peminjaman
                    </td>
                </tr>
            );
        }

        return peminjamanData.map((p) => (
            <tr key={p.id_peminjaman} className="border-t hover:bg-gray-50">
                <td className="p-3">
                    <div>
                        <p className="font-medium">{p.peminjam?.nama_peminjam || 'N/A'}</p>
                        <p className="text-sm text-gray-600">{p.peminjam?.kontak || 'N/A'}</p>
                        <p className="text-xs text-gray-500">{p.peminjam?.instansi || 'N/A'}</p>
                    </div>
                </td>
                <td className="p-3">
                    <p className="font-medium">{p.alat_bahan?.nama_alat || 'N/A'}</p>
                    <p className="text-sm text-gray-600 capitalize">{p.alat_bahan?.kondisi || 'N/A'}</p>
                </td>
                <td className="p-3">{p.jumlah_pinjam || 0}</td>
                <td className="p-3">
                    {p.tanggal_pinjam ? new Date(p.tanggal_pinjam).toLocaleDateString('id-ID') : 'N/A'}
                </td>
                <td className="p-3">
                    {p.tanggal_kembali ? new Date(p.tanggal_kembali).toLocaleDateString('id-ID') : 'N/A'}
                </td>
                <td className="p-3">{getStatusBadge(p.status)}</td>
                <td className="p-3 space-x-2">
                    {p.status === 'menunggu' && (
                        <>
                            <button
                                onClick={() => handleApprove(p.id_peminjaman)}
                                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                            >
                                Setujui
                            </button>
                            <button
                                onClick={() => openRejectModal(p)}
                                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                            >
                                Tolak
                            </button>
                        </>
                    )}
                    {p.status === 'disetujui' && (
                        <button
                            onClick={() => handleReturn(p.id_peminjaman)}
                            className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                        >
                            Kembalikan
                        </button>
                    )}
                    <button
                        onClick={() => handleDelete(p.id_peminjaman)}
                        className="px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 text-sm"
                    >
                        Hapus
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <DashboardLayouts>
            <Head title="Manajemen Pengajuan Peminjaman" />
            <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Manajemen Pengajuan Peminjaman</h1>
                    <button
                        onClick={openCreateModal}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        + Ajukan Peminjaman
                    </button>
                </div>

                {/* Tabel Peminjaman */}
                <div className="bg-white shadow rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-300 text-left">
                                    <th className="p-3 border">Peminjam</th>
                                    <th className="p-3 border">Alat</th>
                                    <th className="p-3 border">Jumlah</th>
                                    <th className="p-3 border">Tanggal Pinjam</th>
                                    <th className="p-3 border">Tanggal Kembali</th>
                                    <th className="p-3 border">Status</th>
                                    <th className="p-3 border">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderPeminjamanTable()}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination - hanya tampil jika ada data */}
                    {peminjaman?.links && peminjaman.links.length > 0 && (
                        <div className="p-4 border-t">
                            <div className="flex justify-center space-x-2">
                                {peminjaman.links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (link.url) {
                                                router.get(link.url);
                                            }
                                        }}
                                        className={`px-3 py-1 rounded-lg ${
                                            link.active
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={!link.url}
                                    >
                                        {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal Ajukan Peminjaman */}
                {showCreateModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">Ajukan Peminjaman</h2>
                                        <p className="text-gray-600">Isi form untuk mengajukan peminjaman alat</p>
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

                                <form onSubmit={handleSubmitPengajuan} className="space-y-6">
                                    {/* Data Peminjam */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nama Peminjam *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.nama_peminjam}
                                                onChange={(e) => handleInputChange('nama_peminjam', e.target.value)}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.nama_peminjam ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                                placeholder="Masukkan nama lengkap"
                                            />
                                            {errors.nama_peminjam && (
                                                <p className="text-red-500 text-sm mt-1">{errors.nama_peminjam}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Kontak *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.kontak}
                                                onChange={(e) => handleInputChange('kontak', e.target.value)}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.kontak ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                                placeholder="Nomor HP/Telepon"
                                            />
                                            {errors.kontak && (
                                                <p className="text-red-500 text-sm mt-1">{errors.kontak}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Instansi
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.instansi}
                                                onChange={(e) => handleInputChange('instansi', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Nama instansi/sekolah"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Alamat
                                            </label>
                                            <textarea
                                                value={formData.alamat}
                                                onChange={(e) => handleInputChange('alamat', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Alamat lengkap"
                                                rows="3"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Alasan Peminjaman *
                                            </label>
                                            <textarea
                                                value={formData.alasan}
                                                onChange={(e) => handleInputChange('alasan', e.target.value)}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.alasan ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                                placeholder="Jelaskan alasan dan tujuan peminjaman"
                                                rows="3"
                                            />
                                            {errors.alasan && (
                                                <p className="text-red-500 text-sm mt-1">{errors.alasan}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Periode Peminjaman */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Tanggal Pinjam *
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.tanggal_pinjam}
                                                onChange={(e) => handleInputChange('tanggal_pinjam', e.target.value)}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.tanggal_pinjam ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            />
                                            {errors.tanggal_pinjam && (
                                                <p className="text-red-500 text-sm mt-1">{errors.tanggal_pinjam}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Tanggal Kembali *
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.tanggal_kembali}
                                                onChange={(e) => handleInputChange('tanggal_kembali', e.target.value)}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.tanggal_kembali ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            />
                                            {errors.tanggal_kembali && (
                                                <p className="text-red-500 text-sm mt-1">{errors.tanggal_kembali}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Pilihan Alat */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-4">
                                            Alat yang Dipinjam *
                                        </label>
                                        
                                        <div className="flex space-x-4 mb-4">
                                            <select
                                                value={selectedAlat}
                                                onChange={(e) => setSelectedAlat(e.target.value)}
                                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Pilih Alat</option>
                                                {alatBahanData.map(alat => (
                                                    <option key={alat.id_alat} value={alat.id_alat}>
                                                        {alat.nama_alat} (Tersedia: {alat.jumlah_tersedia})
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="number"
                                                value={jumlahPinjam}
                                                onChange={(e) => setJumlahPinjam(e.target.value)}
                                                className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Jumlah"
                                                min="1"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleAddAlat}
                                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                            >
                                                Tambah
                                            </button>
                                        </div>

                                        {/* Daftar Alat yang Dipilih */}
                                        {formData.alat_bahan.length > 0 && (
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <h4 className="font-medium text-gray-700 mb-2">Alat yang akan dipinjam:</h4>
                                                <div className="space-y-2">
                                                    {formData.alat_bahan.map((alat, index) => (
                                                        <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg border">
                                                            <div>
                                                                <p className="font-medium">{alat.nama_alat}</p>
                                                                <p className="text-sm text-gray-600">Jumlah: {alat.jumlah}</p>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveAlat(index)}
                                                                className="text-red-500 hover:text-red-700"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Keterangan Tambahan */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Keterangan Tambahan
                                        </label>
                                        <textarea
                                            value={formData.keterangan}
                                            onChange={(e) => handleInputChange('keterangan', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Keterangan tambahan mengenai peminjaman"
                                            rows="3"
                                        />
                                    </div>

                                    {/* Submit Button */}
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
                                                    Mengajukan...
                                                </>
                                            ) : "Ajukan Peminjaman"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal Tolak Peminjaman */}
                {showRejectModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <h3 className="text-lg font-semibold mb-4">Tolak Peminjaman</h3>
                            <p className="text-gray-600 mb-4">
                                Berikan alasan penolakan untuk peminjaman oleh <strong>{selectedPeminjaman?.peminjam?.nama_peminjam || 'N/A'}</strong>
                            </p>
                            <textarea
                                value={catatanAdmin}
                                onChange={(e) => setCatatanAdmin(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Masukkan alasan penolakan..."
                                rows="4"
                            />
                            <div className="flex justify-end space-x-3 mt-4">
                                <button
                                    onClick={() => setShowRejectModal(false)}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleReject}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    Tolak Peminjaman
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayouts>
    );
}