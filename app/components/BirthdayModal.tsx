
"use client";
import { useState } from "react";

export interface NewBirthdayInput {
  name: string;
  age: number;
  date: string;
  image_url: string;
}

interface BirthdayModalProps {
  onClose: () => void;
  onSubmit: (birthday: NewBirthdayInput) => void;
}

const DEFAULT_IMAGE =
  "https://cdn.dashfight.com/db2bc319c6a33429831c1ef35516bd194107b241_224.png";

const BirthdayModal = ({ onClose, onSubmit }: BirthdayModalProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    const parsedAge = Number(age);
    if (!age || !Number.isFinite(parsedAge) || parsedAge < 0 || parsedAge > 100)
      next.age = "Age must be 0–100.";
    if (!month) next.month = "Month is required.";
    const parsedDay = Number(day);
    if (!day || !Number.isFinite(parsedDay) || parsedDay < 1 || parsedDay > 31)
      next.day = "Day must be 1–31.";
    if (imageUrl.trim()) {
      try {
        const url = new URL(imageUrl.trim());
        if (url.protocol !== "http:" && url.protocol !== "https:")
          next.image_url = "URL must start with http or https.";
      } catch {
        next.image_url = "Image URL is not valid.";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    const mm = String(Number(month)).padStart(2, "0");
    const dd = String(Number(day)).padStart(2, "0");
    onSubmit({
      name: name.trim(),
      age: Number(age),
      date: `${mm}/${dd}`,
      image_url: imageUrl.trim() || DEFAULT_IMAGE,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Add Birthday</h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded border px-3 py-1 text-sm"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="bm-name">
              Name
            </label>
            <input
              id="bm-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded border p-2 text-sm"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="bm-age">
              Age
            </label>
            <input
              id="bm-age"
              type="number"
              min={0}
              max={100}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 25"
              className="w-full rounded border p-2 text-sm"
            />
            {errors.age && <p className="mt-1 text-xs text-red-600">{errors.age}</p>}
          </div>

          {/* Month + Day side by side */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1" htmlFor="bm-month">
                Month
              </label>
              <input
                id="bm-month"
                type="number"
                min={1}
                max={12}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="1–12"
                className="w-full rounded border p-2 text-sm"
              />
              {errors.month && <p className="mt-1 text-xs text-red-600">{errors.month}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1" htmlFor="bm-day">
                Day
              </label>
              <input
                id="bm-day"
                type="number"
                min={1}
                max={31}
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="1–31"
                className="w-full rounded border p-2 text-sm"
              />
              {errors.day && <p className="mt-1 text-xs text-red-600">{errors.day}</p>}
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="bm-image">
              Image URL <span className="font-normal text-[#999]">(optional)</span>
            </label>
            <input
              id="bm-image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/photo.png"
              className="w-full rounded border p-2 text-sm"
            />
            {errors.image_url && (
              <p className="mt-1 text-xs text-red-600">{errors.image_url}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded border border-[#ccc] px-4 py-2 text-sm font-semibold text-[#555]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer rounded border-0 bg-linear-to-r from-[#f30c0c] to-[#e68c05] px-4 py-2 text-sm font-bold text-white hover:opacity-90"
            >
              Save Birthday
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BirthdayModal;