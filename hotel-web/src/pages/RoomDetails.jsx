import { useContext } from "react";
import { useParams } from "react-router-dom";
import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import KidsDropdown from "../components/KidsDropdown";
import { RoomContext } from "../context/RoomContext";
import ScrollToTop from "../components/ScrollToTop";
import { FaCheck } from "react-icons/fa6";
import "../pages/Detail.css";

const RoomDetails = () => {
  const { rooms, handleClick } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  // console.log(room);

  const { name, description, price, facilities, imageLg } = room;

  return (
    <section>
      <ScrollToTop />
      <div className="bgImage relative flex justify-center items-center h-[560px] w-full">
        <div className="absolute w-full h-full bg-black/70"></div>

        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6 ">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />
            <div>
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                voluptates architecto natus, doloribus, quae nihil consequatur
                deserunt nostrum quia impedit, ratione itaque iste fugit
                molestiae voluptatum! Facilis!
              </p>
              <div className="grid grid-cols-3 gap-6 pb-6">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div>
                  <CheckIn />
                </div>
                <div>
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
                <button
                  type="submit"
                  onClick={(e) => handleClick(e)}
                  className="py-3 uppercase mt-5 bg-accent text-white hover:opacity-75 transition-all text-[20px]"
                >
                  book now for ${price}
                </button>
              </div>
            </div>

            <div>
              <h3 className="h3 text-[25px] font-secondary">Hotel Rules</h3>

              <p className="mb-6 font-primary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas magnam, ut pariatur maiores iste ratione! Quo,
                exercitationem consequatur.
              </p>

              <ul className="flex flex-col gap-6">
                <li className="flex items-center gap-x-4 font-primary">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4 font-primary">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4 font-primary">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4 font-primary">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
