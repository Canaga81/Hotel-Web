import { useContext } from "react";

import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);

  const lis = [
    { name: "1 Adult" },
    { name: "2 Adults" },
    { name: "3 Adults" },
    { name: "4 Adults" },
  ];

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-3">
        {adults}
        <IoChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
            onClick={() => setAdults(li.name)}
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white cursor-pointer transition-all p-3"
              as="li"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;