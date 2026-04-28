
interface BirthdayUser {
  id: number;
  name: string;
  age: number;
  date: string;
  image_url: string;
}

// 1. Define props type
interface BirthdayCardProps {
  users: BirthdayUser[];
}

// 2. Accept users as prop, delete the hardcoded const
const BirthdayCard = ({ users }: BirthdayCardProps) => { 
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
        </li> 
      ))} 
    </ul> 
  ); 
}; 

export default BirthdayCard;