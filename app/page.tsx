"use client"; 
import { useState } from "react"; 
import BirthdayCard from "./components/BirthdayCard"; 

interface BirthdayUser { 
  id: number; 
  name: string; 
  age: number;
  date: string; 
  image_url: string; 
} 

export default function Home() { 
  const initialUsers: BirthdayUser[] = [ 
    { id: 1, name: "Lisseth Trejo", age: 37, date:"04/25", image_url: "https://lh3.googleusercontent.com/a-/ALV-UjVBjorBCGP5DRoapWyKSiIoNxaBn2netwAm3Vg8hN8qRYhc7zf7mg=s40-p" }, 
    { id: 2, name: "Guillermo Trejo", age: 32, date:"04/18", image_url: "https://lh3.googleusercontent.com/a-/ALV-UjVBjorBCGP5DRoapWyKSiIoNxaBn2netwAm3Vg8hN8qRYhc7zf7mg=s40-p" }, 
    { id: 3, name: "Memito Trejo", age: 4,  date:"04/26", image_url: "https://ci3.googleusercontent.com/meips/ADKq_NZrgDcZhKTzdIZOaM7QhZZ4r7eyXpbPf4hlTQpGZ6MdYhEZ1ES60Nv1vxxIARhTERro0jUFQ-PIR9ELnVbj-ax7XfRiSjc3-3R1Z39MPB8z70smG1aMEGjW6p7w7ziiBS2IVIagX1pbQ3Y9Md6ReCWyp4Z6hHLvUS_CAcPfs-a-7pAIPO_GXL9bkSGkF_aOXeTjNPn-=s0-d-e1-ft#https://cdn.glofox.com/platform/kidstronglive/branches/679cf63d82b8c088f00f6340/users/68138101fa97f010420f4bb6.png?v=1776783746" }, 
  ];

  const extraUsers: BirthdayUser[] = [ 
    { id: 4, name: "Jorge Trejo", age: 38, date:"04/26", image_url: "https://lh3.googleusercontent.com/a-/ALV-UjVBjorBCGP5DRoapWyKSiIoNxaBn2netwAm3Vg8hN8qRYhc7zf7mg=s40-p" }, 
    { id: 5, name: "Jose Flores", age: 50, date:"04/25", image_url: "https://lh3.googleusercontent.com/a-/ALV-UjVBjorBCGP5DRoapWyKSiIoNxaBn2netwAm3Vg8hN8qRYhc7zf7mg=s40-p" }, 
    { id: 6, name: "Goku Trejo", age: 10, date:"04/18", image_url: "https://lh3.googleusercontent.com/a-/ALV-UjVBjorBCGP5DRoapWyKSiIoNxaBn2netwAm3Vg8hN8qRYhc7zf7mg=s40-p" }, 
  ]; 

  // Combine all users into one array
  const allUsers = [...initialUsers, ...extraUsers];
  
  // Track how many to show, start with 3
  const [displayCount, setDisplayCount] = useState(3);

  function showMore() {
    setDisplayCount(prev => prev + 1); 
  }

  // Slice the array to only show what's allowed
  const visibleUsers = allUsers.slice(0, displayCount);

  return ( 
    <main className="bg-white p-8 max-w-90 w-full rounded-lg shadow-custom"> 
      <h2 className="mb-4">{allUsers.length} Birthdays Today 🎂</h2> 
      
      <BirthdayCard users={visibleUsers} /> 
      
      {/* Only render button if displayCount < total */}
      {displayCount < allUsers.length && (
        <button 
          onClick={showMore} 
          className="cursor-pointer w-full rounded-sm border-0 bg-linear-to-r from-[#e23cd9] to-[#f07acc] p-2 text-[0.9rem] font-bold tracking-wide text-white hover:opacity-90"
        > 
          View More ({allUsers.length - displayCount} remaining)
        </button>
      )}
    </main> 
  ); 
}