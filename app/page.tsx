"use client";
import MonthCard from "./components/MonthCard";

interface BirthdayUser {
  id: number;
  name: string;
  age: number;
  date: string; // "MM/DD"
  image_url: string;
}

export default function Home() {
  const allUsers: BirthdayUser[] = [
    { id: 1, name: "Alisa Bosconovitch", age: 37, date: "01/25", image_url: "..." },
    {
      id: 2,
      name: "Anna Williams",
      age: 32,
      date: "01/18",
      image_url: "...",
    },
    { id: 3, name: "Asuka Kazama", age: 4, date: "01/26", image_url: "..." },
    { id: 4, name: "Azucena", age: 38, date: "01/26", image_url: "..." },
    { id: 5, name: "Bryan Fury", age: 50, date: "02/25", image_url: "..." },
    { id: 6, name: "Clive Rosfield", age: 10, date: "02/18", image_url: "..." },
    { id: 7, name: "Devil Jin", age: 10, date: "02/18", image_url: "..." },
    { id: 8, name: "Eddy Gordo", age: 10, date: "02/18", image_url: "..." },
    { id: 9, name: "Feng Wei", age: 10, date: "03/18", image_url: "..." },
    { id: 10, name: "Heihachi Mishima", age: 10, date: "03/18", image_url: "..." },
    { id: 11, name: "Hwoarang", age: 10, date: "03/18", image_url: "..." },
    { id: 12, name: "Jack-8", age: 10, date: "03/18", image_url: "..." },
    { id: 13, name: "Jin Kazama", age: 10, date: "04/18", image_url: "..." },
    { id: 14, name: "Jun Kazama", age: 10, date: "04/18", image_url: "..." },
    { id: 15, name: "Kazuya Mishima", age: 10, date: "04/18", image_url: "..." },
    { id: 16, name: "King", age: 10, date: "04/18", image_url: "..." },
    { id: 17, name: "Kuma", age: 10, date: "05/18", image_url: "..." },
    { id: 18, name: "Lars Alexandersson", age: 10, date: "05/18", image_url: "..." },
    { id: 19, name: "Lee Chaolan", age: 10, date: "05/18", image_url: "..." },
    { id: 20, name: "Leo Kliesen", age: 10, date: "05/18", image_url: "..." },
    { id: 21, name: "Leroy Smith", age: 10, date: "06/18", image_url: "..." },
    { id: 22, name: "Lili", age: 10, date: "06/18", image_url: "..." },
    { id: 23, name: "Ling Xiaoyu", age: 10, date: "06/18", image_url: "..." },
    { id: 24, name: "Marshall Law", age: 10, date: "06/18", image_url: "..." },
    { id: 25, name: "Nina Williams", age: 10, date: "07/18", image_url: "..." },
    { id: 26, name: "Panda", age: 10, date: "07/18", image_url: "..." },
    { id: 27, name: "Paul Phoenix", age: 10, date: "07/18", image_url: "..." },
    { id: 28, name: "Raven", age: 10, date: "07/18", image_url: "..." },
    { id: 29, name: "Reina", age: 10, date: "08/18", image_url: "..." },
    { id: 30, name: "Sergei Dragunov", age: 10, date: "08/18", image_url: "..." },
    { id: 31, name: "Shaheen", age: 10, date: "08/18", image_url: "..." },
    { id: 32, name: "Steve Fox", age: 10, date: "08/18", image_url: "..." },
    { id: 33, name: "Victor Chevalier", age: 10, date: "09/18", image_url: "..." },
    { id: 34, name: "Yoshimitsu", age: 10, date: "09/18", image_url: "..." },
    { id: 35, name: "Safina", age: 10, date: "09/18", image_url: "..." },
    { id: 36, name: "Steve Fox", age: 10, date: "09/18", image_url: "..." },
    { id: 37, name: "Victor Chevalier", age: 10, date: "10/18", image_url: "..." },
    { id: 38, name: "Yoshimitsu", age: 10, date: "10/18", image_url: "..." },
    { id: 39, name: "Safina", age: 10, date: "10/18", image_url: "..." },
    { id: 40, name: "Steve Fox", age: 10, date: "10/18", image_url: "..." },
    { id: 41, name: "Victor Chevalier", age: 10, date: "11/18", image_url: "..." },
    { id: 42, name: "Yoshimitsu", age: 10, date: "11/18", image_url: "..." },
    { id: 43, name: "Safina", age: 10, date: "11/18", image_url: "..." },
    { id: 44, name: "Steve Fox", age: 10, date: "11/18", image_url: "..." },
    { id: 45, name: "Victor Chevalier", age: 10, date: "12/18", image_url: "..." },
    { id: 46, name: "Yoshimitsu", age: 10, date: "12/18", image_url: "..." },
    { id: 47, name: "Safina", age: 10, date: "12/18", image_url: "..." },
    { id: 48, name: "Steve Fox", age: 10, date: "12/18", image_url: "..." },
  ];

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

  // Group users by month number from "MM/DD"
  const usersByMonth = months.map((monthName, index) => {
    const monthNumber = String(index + 1).padStart(2, "0"); // "01", "02"... "12"
    const monthUsers = allUsers
      .filter((user) => user.date.startsWith(monthNumber + "/"))
      .sort((a, b) => a.date.localeCompare(b.date)); // sort by day

    return { monthName, users: monthUsers };
  });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 items-start">
      {usersByMonth.map(({ monthName, users }) => (
        <MonthCard
          key={monthName}
          monthName={monthName}
          users={users}
          initialShow={3}
        />
      ))}
    </main>
  );
}

//babe
// "https://lh3.googleusercontent.com/a-/ALV-UjVBjorBCGP5DRoapWyKSiIoNxaBn2netwAm3Vg8hN8qRYhc7zf7mg=s40-p",
//memito
// "https://ci3.googleusercontent.com/meips/ADKq_NZrgDcZhKTzdIZOaM7QhZZ4r7eyXpbPf4hlTQpGZ6MdYhEZ1ES60Nv1vxxIARhTERro0jUFQ-PIR9ELnVbj-ax7XfRiSjc3-3R1Z39MPB8z70smG1aMEGjW6p7w7ziiBS2IVIagX1pbQ3Y9Md6ReCWyp4Z6hHLvUS_CAcPfs-a-7pAIPO_GXL9bkSGkF_aOXeTjNPn-=s0-d-e1-ft#https://cdn.glofox.com/platform/kidstronglive/branches/679cf63d82b8c088f00f6340/users/68138101fa97f010420f4bb6.png?v=1776783746",
