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
    { id: 1, name: "Alisa Bosconovitch", age: 37, date: "01/25", image_url: "https://cdn.dashfight.com/9c019ad3b38050f88f70b5a401181afb8b62ca46_224.png" },
    {
      id: 2,
      name: "Anna Williams",
      age: 32,
      date: "01/18",
      image_url: "https://cdn.dashfight.com/968bb2cc2141166e5b256bcaf4f31515f893c2b6_224.png",
    },
    { id: 3, name: "Asuka Kazama", age: 4, date: "01/26", image_url: "https://cdn.dashfight.com/12562fb3335524932c9afeac82e64e44c6fc7b08_224.png" },
    { id: 4, name: "Azucena", age: 38, date: "01/26", image_url: "https://cdn.dashfight.com/c0568936315b6e0671f7257a0a02a084c85783f0_224.png" },
    { id: 5, name: "Bryan Fury", age: 50, date: "02/25", image_url: "https://cdn.dashfight.com/db2bc319c6a33429831c1ef35516bd194107b241_224.png" },
    { id: 6, name: "Clive Rosfield", age: 10, date: "02/18", image_url: "https://cdn.dashfight.com/84339e94388dde58a0661e226ab82a0c8509c395_224.png" },
    { id: 7, name: "Devil Jin", age: 10, date: "02/18", image_url: "https://cdn.dashfight.com/83f3eb145deb1c60e683c0dd0a78cac4de8680c8_224.png" },
    { id: 8, name: "Eddy Gordo", age: 10, date: "02/18", image_url: "https://cdn.dashfight.com/516805619194598022b3f2cbe5398af16ea126e9_224.png" },
    { id: 9, name: "Feng Wei", age: 10, date: "03/18", image_url: "https://cdn.dashfight.com/751d0d5b518655cc46cfae431bd15bf55c0a43c5_224.png" },
    { id: 10, name: "Heihachi Mishima", age: 10, date: "03/18", image_url: "https://cdn.dashfight.com/10d281eecce5bf345301077b08ae95c48092e5de_224.png" },
    { id: 11, name: "Hwoarang", age: 10, date: "03/18", image_url: "https://cdn.dashfight.com/3392f29dd743fb5ed047e2e548e5b379749d1f26_224.png" },
    { id: 12, name: "Jack-8", age: 10, date: "03/18", image_url: "https://cdn.dashfight.com/990e5336f4011edba0a353b06c47af1c37e04b1f_224.png" },
    { id: 13, name: "Jin Kazama", age: 10, date: "04/18", image_url: "https://cdn.dashfight.com/4e5fc2c40380e5efc6b2e1e3c61dd9e4427e7dd3_224.png" },
    { id: 14, name: "Jun Kazama", age: 10, date: "04/18", image_url: "https://cdn.dashfight.com/7590a0a3c380e33637816a08145d39ab72f7b761_224.png" },
    { id: 15, name: "Kazuya Mishima", age: 10, date: "04/18", image_url: "https://cdn.dashfight.com/1420fac9eeed1e09c4c58c4cd089eaba87fcb72a_224.png" },
    { id: 16, name: "King", age: 10, date: "04/18", image_url: "https://cdn.dashfight.com/c31ec48a6aad7d4d6768792e807ad598204883fe_224.png" },
    { id: 17, name: "Kuma", age: 10, date: "05/18", image_url: "https://cdn.dashfight.com/3d8907fea2e3c0fe413f1b5d5b0665acb7dba49c_224.png" },
    { id: 18, name: "Lars Alexandersson", age: 10, date: "05/18", image_url: "https://cdn.dashfight.com/0f58fa6c0567c6dd1f83c0b49f70b16bf843c58e_224.png" },
    { id: 19, name: "Lee Chaolan", age: 10, date: "05/18", image_url: "https://cdn.dashfight.com/075fed0577cbf9e85beaa7543c2149dd06010010_224.png" },
    { id: 20, name: "Leo Kliesen", age: 10, date: "05/18", image_url: "https://cdn.dashfight.com/fda39e374b5bb2d80865f8ca693859334c471243_224.png" },
    { id: 21, name: "Leroy Smith", age: 10, date: "06/18", image_url: "https://cdn.dashfight.com/6d8d997630a1c092405eb97d8c11a73f569b3f38_224.png" },
    { id: 22, name: "Lili", age: 10, date: "06/18", image_url: "https://cdn.dashfight.com/6e1bfe8ac62cd8a9946ce6ce094eb8a231679d0a_224.png" },
    { id: 23, name: "Ling Xiaoyu", age: 10, date: "06/18", image_url: "https://cdn.dashfight.com/ec2b6c6ebb40b95f0bd5ade006807c6490e1d584_224.png" },
    { id: 24, name: "Marshall Law", age: 10, date: "06/18", image_url: "https://cdn.dashfight.com/d6662798a089933633407018156443fd51db4708_224.png" },
    { id: 25, name: "Nina Williams", age: 10, date: "07/18", image_url: "https://cdn.dashfight.com/8dc719007fdb0463ebb9e6bc833bae5f606f171d_224.png" },
    { id: 26, name: "Panda", age: 10, date: "07/18", image_url: "https://cdn.dashfight.com/330309ee5c940229951cb30bfb11a09454d5534e_224.png" },
    { id: 27, name: "Paul Phoenix", age: 10, date: "07/18", image_url: "https://cdn.dashfight.com/c45abf5a304310539b4f7f8050c7a022be691dae_224.png" },
    { id: 28, name: "Raven", age: 10, date: "07/18", image_url: "https://cdn.dashfight.com/3bafeb32f9a09a494ce80ec6f198385bab255f43_224.png" },
    { id: 29, name: "Reina", age: 10, date: "08/18", image_url: "https://cdn.dashfight.com/2a230a7afdaa8822e2fdddf4906c39aba258894b_224.png" },
    { id: 30, name: "Sergei Dragunov", age: 10, date: "08/18", image_url: "https://cdn.dashfight.com/71f09d555e09d1f62fa2131f2386fbdc75a2f327_224.png" },
    { id: 31, name: "Shaheen", age: 10, date: "08/18", image_url: "https://cdn.dashfight.com/74272486826f9e3e830c9e3036f27e840de4d117_224.png" },
    { id: 32, name: "Steve Fox", age: 10, date: "08/18", image_url: "https://cdn.dashfight.com/93a601e75aac3898fc715147513a6c42d8c1a4a2_224.png" },
    { id: 33, name: "Victor Chevalier", age: 10, date: "09/18", image_url: "https://cdn.dashfight.com/40c096e26de44012c9c8ef6af07febc9534ac96f_224.png" },
    { id: 34, name: "Yoshimitsu", age: 10, date: "09/18", image_url: "https://cdn.dashfight.com/084135e9693289180f1c9e56117dd4119f37886b_224.png" },
    { id: 35, name: "Safina", age: 10, date: "09/18", image_url: "https://cdn.dashfight.com/884d56a2fe38f319b1691cf7dce71fa79f49f596_224.png" },
    { id: 36, name: "Steve Fox", age: 10, date: "09/18", image_url: "https://cdn.dashfight.com/93a601e75aac3898fc715147513a6c42d8c1a4a2_224.png" },
    { id: 37, name: "Victor Chevalier", age: 10, date: "10/18", image_url: "https://cdn.dashfight.com/40c096e26de44012c9c8ef6af07febc9534ac96f_224.png" },
    { id: 38, name: "Yoshimitsu", age: 10, date: "10/18", image_url: "https://cdn.dashfight.com/084135e9693289180f1c9e56117dd4119f37886b_224.png" },
    { id: 39, name: "Safina", age: 10, date: "10/18", image_url: "https://cdn.dashfight.com/884d56a2fe38f319b1691cf7dce71fa79f49f596_224.png" },
    { id: 40, name: "Steve Fox", age: 10, date: "10/18", image_url: "https://cdn.dashfight.com/93a601e75aac3898fc715147513a6c42d8c1a4a2_224.png" },
    { id: 41, name: "Victor Chevalier", age: 10, date: "11/18", image_url: "https://cdn.dashfight.com/40c096e26de44012c9c8ef6af07febc9534ac96f_224.png" },
    { id: 42, name: "Yoshimitsu", age: 10, date: "11/18", image_url: "https://cdn.dashfight.com/084135e9693289180f1c9e56117dd4119f37886b_224.png" },
    { id: 43, name: "Safina", age: 10, date: "11/18", image_url: "https://cdn.dashfight.com/884d56a2fe38f319b1691cf7dce71fa79f49f596_224.png" },
    { id: 44, name: "Steve Fox", age: 10, date: "11/18", image_url: "https://cdn.dashfight.com/93a601e75aac3898fc715147513a6c42d8c1a4a2_224.png" },
    { id: 45, name: "Victor Chevalier", age: 10, date: "12/18", image_url: "https://cdn.dashfight.com/40c096e26de44012c9c8ef6af07febc9534ac96f_224.png" },
    { id: 46, name: "Yoshimitsu", age: 10, date: "12/18", image_url: "https://cdn.dashfight.com/084135e9693289180f1c9e56117dd4119f37886b_224.png" },
    { id: 47, name: "Safina", age: 10, date: "12/18", image_url: "https://cdn.dashfight.com/884d56a2fe38f319b1691cf7dce71fa79f49f596_224.png" },
    { id: 48, name: "Steve Fox", age: 10, date: "12/18", image_url: "https://cdn.dashfight.com/93a601e75aac3898fc715147513a6c42d8c1a4a2_224.png" },
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
