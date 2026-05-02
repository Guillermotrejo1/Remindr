"use client";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import MonthCard from "./components/MonthCard";
import BirthdayModal from "./components/BirthdayModal";
import type { NewBirthdayInput } from "./components/BirthdayModal";
import { API_URL } from "@/lib/auth";

interface BirthdayUser {
  id: string;
  name: string;
  age: number;
  date: string;
  image_url: string;
}

interface ApiBirthday {
  birthdayId: string;
  name: string;
  age: number;
  date: string;
  image_url: string;
}

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

export default function Home() {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<BirthdayUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.isAuthenticated) return;

    async function loadBirthdays() {
      try {
        const token = auth.user?.id_token;
        const res = await fetch(`${API_URL}/birthdays`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = (await res.json()) as ApiBirthday[];
        const normalized = data.map((b) => ({
          ...b,
          id: b.birthdayId,
        }));
        setAllUsers(normalized);
      } catch (err) {
        console.error("Failed to load birthdays:", err);
      } finally {
        setLoading(false);
      }
    }

    loadBirthdays();
  }, [auth.isAuthenticated, auth.user?.id_token]);

  const usersByMonth = months.map((monthName, index) => {
    const monthNumber = String(index + 1).padStart(2, "0");
    const monthUsers = allUsers
      .filter((user) => user.date.startsWith(monthNumber + "/"))
      .sort((a, b) => a.date.localeCompare(b.date));

    return { monthName, users: monthUsers };
  });

  async function handleAddBirthday(birthday: NewBirthdayInput) {
    try {
      const token = auth.user?.id_token;
      const res = await fetch(`${API_URL}/birthdays`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(birthday),
      });
      const saved = (await res.json()) as ApiBirthday;
      setAllUsers((prev) => [...prev, { ...saved, id: saved.birthdayId }]);
      setIsOpen(false);
    } catch (err) {
      console.error("Failed to add birthday:", err);
    }
  }

  if (auth.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-6xl font-bold">Remindr</h1>
        <p className="text-gray-500">Sign in to see your birthdays</p>
        <button
          onClick={() => auth.signinRedirect()}
          className="rounded p-3 px-8 font-bold text-white bg-linear-to-r from-[#f30c0c] to-[#e68c05]"
        >
          Sign In / Sign Up
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex items-center justify-between px-6 mt-4">
        <h1 className="text-6xl font-bold">Remindr</h1>
        <div className="flex items-center gap-4">
          <p className="text-gray-500 text-sm">
            👋 {auth.user?.profile.email}
          </p>
          <button
            onClick={() => auth.removeUser()}
            className="border rounded px-3 py-1 text-sm text-gray-600"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex w-full items-center justify-center mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="max-w-125 border rounded-sm p-2 text-center cursor-pointer bg-linear-to-r from-[#f30c0c] to-[#e68c05] text-white font-bold"
        >
          Add Birthday 🎉
        </button>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 items-start">
        {loading ? (
          <p className="col-span-4 text-center text-gray-400">
            Loading birthdays...
          </p>
        ) : (
          usersByMonth.map(({ monthName, users }) => (
            <MonthCard
              key={monthName}
              monthName={monthName}
              users={users}
              initialShow={3}
            />
          ))
        )}
        {isOpen && (
          <BirthdayModal
            onClose={() => setIsOpen(false)}
            onSubmit={handleAddBirthday}
          />
        )}
      </main>
    </div>
  );
}