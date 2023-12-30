import { Link } from "react-router-dom";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt="image"
        />
      </div>

      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between w-[90%]">
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <FaExpandArrowsAlt className="text-[15px]" />
            </div>

            <div className="flex gax-x-1">
              <div className="text-[14px]">Size</div>
              <div className="text-[14px]">{size}m2</div>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <IoPeopleSharp className="text-[18px]" />
            </div>

            <div className="flex gap-x-1">
              <div className="text-[14px]">Max People</div>
              <div className="text-[14px]">{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>

      <div className="text-center mt-6">
        <Link
          className="bg-black text-white btn-sm py-3 px-2 hover:opacity-75 transition-all"
          to={`room/${id}`}
        >
          Book now from ${price}
        </Link>
      </div>
    </div>
  );
};

export default Room;
