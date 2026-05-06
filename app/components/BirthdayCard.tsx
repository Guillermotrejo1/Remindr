"use client";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

interface BirthdayUser {
  id: string;
  name: string;
  age: number;
  date: string;
  image_url: string;
}

interface BirthdayCardProps {
  users: BirthdayUser[];
  onDelete: (id: string) => void;
}

const BirthdayCard = ({ users, onDelete }: BirthdayCardProps) => {
  const [pendingDelete, setPendingDelete] = useState<BirthdayUser | null>(null);

  function handleDeleteClick(user: BirthdayUser) {
    setPendingDelete(user);  // opens the modal for that user
  }

  function handleConfirm() {
    if (pendingDelete) {
      onDelete(pendingDelete.id);  // actually deletes
      setPendingDelete(null);       // closes modal
    }
  }

  function handleCancel() {
    setPendingDelete(null);  // just closes modal, no delete
  }

  return (
    <>
      <ul className="space-y-4 mb-4" id="list">
        {users.map((user) => (
          <li key={user.id} className="flex gap-4 items-center justify-between">
            <div className="flex gap-4">
              <img
                className="rounded-full object-cover w-12 h-12"
                src={user.image_url}
                alt={user.name}
              />
              <div className="py-2">
                <p className="font-bold">{user.name}</p>
                <small className="text-[#7a7a7a] mr-2">{user.age} years</small>
                <small className="text-[#7a7a7a]">{user.date}</small>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleDeleteClick(user)}
              className="cursor-pointer rounded border border-red-300 px-2 py-1 text-xs text-red-500 hover:bg-red-50"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {pendingDelete && (
        <DeleteModal
          name={pendingDelete.name}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default BirthdayCard;