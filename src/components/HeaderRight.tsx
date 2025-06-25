import { BiMenu, BiUser } from "react-icons/bi";
import { MdSettings } from "react-icons/md";

const itemLists = [
  {
    id: 1,
    icon: <BiMenu size={20} />,
  },
  {
    id: 2,
    icon: <BiUser size={20} />,
  },
  {
    id: 3,
    icon: <MdSettings size={20} />,
  },
];

export default function HeaderRight() {
  return (
    <div className="flex gap-x-2 justify-center items-center">
      {itemLists.map((item) => (
        <button
          key={item.id}
          className="border border-gray-200 hover:bg-gray-300 cursor-pointer bg-gray-200 p-1 rounded-sm"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
