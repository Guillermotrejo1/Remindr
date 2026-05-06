"use client";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import MonthCard from "./components/MonthCard";
import BirthdayModal from "./components/BirthdayModal";
import type { NewBirthdayInput } from "./components/BirthdayModal";
import { API_URL, COGNITO_DOMAIN, cognitoAuthConfig } from "../src/lib/auth";

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
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

  async function handleDeleteBirthday(id: string) {
    try {
      const token = auth.user?.id_token;

      const res = await fetch(`${API_URL}/birthdays/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete birthday");
      }

      setAllUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Failed to delete birthday", err);
    }
  }

  if (auth.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <p className="text-lg sm:text-xl">Loading...</p>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Remindr</h1>
        <p className="text-gray-500 text-sm sm:text-base">Sign in to see your birthdays</p>
        <button
          onClick={() => auth.signinRedirect()}
          className="w-full max-w-xs rounded p-3 px-8 font-bold text-white bg-linear-to-r from-[#f30c0c] to-[#e68c05]"
        >
          Sign In / Sign Up
        </button>
      </div>
    );
  }

  function handleSignOut() {
    const logoutUri = encodeURIComponent(cognitoAuthConfig.redirect_uri);
    auth.removeUser();
    window.location.href = `${COGNITO_DOMAIN}/logout?client_id=${cognitoAuthConfig.client_id}&logout_uri=${logoutUri}`;
  }

  return (
    <div className="mx-auto w-full max-w-400 px-3 py-4 sm:px-5 sm:py-6 lg:px-8">
      <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Remindr</h1>
        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end sm:gap-4">
          <p className="text-gray-600 text-xs sm:text-sm break-all">👋 {auth.user?.profile.email}</p>
          <button
            onClick={handleSignOut}
            className="border rounded px-3 py-1 text-xs sm:text-sm text-gray-600"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="mb-4 flex w-full items-center justify-center sm:mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-sm border rounded-sm p-2 text-center text-sm sm:text-base cursor-pointer bg-linear-to-r from-[#f30c0c] to-[#e68c05] text-white font-bold"
        >
          Add Birthday 🎉
        </button>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 items-start">
        {loading ? (
          <p className="col-span-full text-center text-gray-400 py-8">
            Loading birthdays...
          </p>
        ) : (
          usersByMonth.map(({ monthName, users }) => (
            <MonthCard
              key={monthName}
              monthName={monthName}
              users={users}
              initialShow={3}
              onDelete={handleDeleteBirthday}
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
