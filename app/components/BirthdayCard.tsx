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
    <ul className="space-y-4 mb-4" id="list">
      {users.map((user) => (
        <li key={user.id} className="flex gap-4">
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
          <button
            type="button"
            onClick={() => onDelete(user.id)}
            className="rounded border cursor-pointer px-2 py-1 text-xs text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BirthdayCard;
