interface BirthdayUser {
  id: string;
  name: string;
  age: number;
  date: string;
  image_url: string;
}

// 1. Define props type
interface BirthdayCardProps {
  users: BirthdayUser[];
  onDelete: (id: string) => void;
}

// 2. Accept users as prop, delete the hardcoded const
const BirthdayCard = ({ users, onDelete }: BirthdayCardProps) => {
  return (
    <ul className="space-y-3 sm:space-y-4 mb-4" id="list">
      {users.map((user) => (
        <li key={user.id} className="flex items-start justify-between gap-2 sm:gap-4">
          <div className="flex min-w-0 flex-1 gap-3 sm:gap-4">
            <img
              className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12 shrink-0"
              src={user.image_url}
              alt={user.name}
            />
            <div className="py-1 sm:py-2 min-w-0">
              <p className="font-bold text-sm sm:text-base truncate">{user.name}</p>
              <small className="text-[#7a7a7a] mr-2 text-xs sm:text-sm">{user.age} years</small>
              <small className="text-[#7a7a7a] text-xs sm:text-sm">{user.date}</small>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onDelete(user.id)}
            className="rounded border cursor-pointer px-2 py-1 text-[11px] sm:text-xs text-red-600 shrink-0"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BirthdayCard;
