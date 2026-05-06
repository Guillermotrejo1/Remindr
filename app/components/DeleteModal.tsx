interface DeleteModalProps {
  name: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteModal = ({ name, onConfirm, onCancel }: DeleteModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-2xl">
        <h2 className="text-xl font-bold mb-2">Delete Birthday</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <span className="font-bold">{name}</span>s birthday? This cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="cursor-pointer rounded border border-[#ccc] px-4 py-2 text-sm font-semibold text-[#555]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="cursor-pointer rounded bg-red-500 px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;