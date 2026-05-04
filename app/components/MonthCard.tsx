"use client";
import { useState } from 'react';
import BirthdayCard from './BirthdayCard';

interface BirthdayUser { 
  id: string; 
  name: string; 
  age: number; 
  date: string; 
  image_url: string; 
} 

interface MonthCardProps {
  monthName: string;
  users: BirthdayUser[];
  initialShow?: number;
  onDelete: (id:string) => void;
}

const MonthCard = ({ monthName, users, initialShow = 3, onDelete }: MonthCardProps) => {
  const [displayCount, setDisplayCount] = useState(initialShow);

  function showMore() {
    setDisplayCount(prev => prev + 1);
  }

  function showLess() {
    setDisplayCount(initialShow);
  }

  const visibleUsers = users.slice(0, displayCount);

  return (
    <div className="bg-[#FEFFFC] p-4 sm:p-6 lg:p-8 w-full rounded-lg shadow-custom min-h-40">
      <h1 className="font-bold text-xl sm:text-2xl">{monthName}</h1>
      <h2 className="mb-3 sm:mb-4 text-sm sm:text-base text-[#7a7a7a]">
        {users.length} Birthday{users.length !== 1 ? 's' : ''} 🎂
      </h2>
      
      {users.length === 0 ? (
        <p className="text-sm text-[#aaa] italic py-8 text-center">
          No birthdays yet
        </p>
      ) : (
        <>
          <BirthdayCard users={visibleUsers} onDelete={onDelete} />
          
          {users.length > initialShow && (
            displayCount < users.length ? (
              <button 
                onClick={showMore} 
                className="cursor-pointer w-full rounded-sm border-0 bg-linear-to-r from-[#f30c0c] to-[#e68c05] p-2 text-sm sm:text-[0.9rem] font-bold tracking-wide text-white hover:opacity-90"
              > 
                View More ({users.length - displayCount} remaining)
              </button>
            ) : (
              <button 
                onClick={showLess} 
                className="cursor-pointer w-full rounded-sm border-0 bg-linear-to-r from-[#f30c0c] to-[#e68c05] p-2 text-sm sm:text-[0.9rem] font-bold tracking-wide text-white hover:opacity-90"
              > 
                View Less
              </button>
            )
          )}
        </>
      )}
    </div>
  );
}

export default MonthCard;