import { useState } from "react";
import "../components/Calende.css";
// import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "../datepicker.css";
import { LuCalendarDays } from "react-icons/lu";

const CheckIn = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  const showingNav = () => {
    setIsNavShowing((prev) => !prev);
  };

  return (
    <>
      <div>
        <div onClick={showingNav} className="relative flex items-center h-[60px] w-full justify-between px-3 lg:h-[70px] bg-white">
          <h3>Check In</h3>
          <LuCalendarDays className="text-accent text-base cursor-pointer" />
        </div>
      </div>
      <div
        className={`Calendar ${ isNavShowing ? 'Calendar_eye' : 'Calendar_no_eye' }`}
      >
        <Calendar className={'w-[420px] lg:w-[239.2px] px-2'} />
      </div>
    </>
  );
};

export default CheckIn;