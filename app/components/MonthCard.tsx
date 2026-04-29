"use client";
import { useState } from 'react';
import BirthdayCard from './BirthdayCard';

interface BirthdayUser { 
  id: number; 
  name: string; 
  age: number; 
  date: string; 
  image_url: string; 
} 

interface MonthCardProps {
  monthName: string;
  users: BirthdayUser[];
  initialShow?: number;
}

const MonthCard = ({ monthName, users, initialShow = 3 }: MonthCardProps) => {
  const [displayCount, setDisplayCount] = useState(initialShow);

  function showMore() {
    setDisplayCount(prev => prev + 1);
  }

  const visibleUsers = users.slice(0, displayCount);

  return (
    <div className="bg-white p-8 w-full rounded-lg shadow-custom min-h-40">
      <h1 className="font-bold text-2xl">{monthName}</h1>
      <h2 className="mb-4 text-[#7a7a7a]">
        {users.length} Birthday{users.length !== 1 ? 's' : ''}
      </h2>
      
      {users.length === 0 ? (
        <p className="text-sm text-[#aaa] italic py-8 text-center">
          No birthdays yet
        </p>
      ) : (
        <>
          <BirthdayCard users={visibleUsers} />
          
          {displayCount < users.length && (
            <button 
              onClick={showMore} 
              className="cursor-pointer w-full rounded-sm border-0 bg-linear-to-r from-[#e23cd9] to-[#f07acc] p-2 text-[0.9rem] font-bold tracking-wide text-white hover:opacity-90"
            > 
              View More ({users.length - displayCount} remaining)
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default MonthCard;