import React from "react";

export default function Modal({ show, onClose, onConfirm, message }) {
    if(!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
            <div className="bg-white rounded-xl shadow-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">Konfirmasi Action</h2>
                <p className="text-gray-700 mb-6">{message}</p>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >Batal</button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-lg bg-red-200 hover:bg-red-300"
                    >Hapus</button>
                </div>
            </div>
        </div>
    )
}