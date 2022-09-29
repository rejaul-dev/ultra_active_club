import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Sidebar = ({ cart }) => {
  let total = 0;
  for (const info of cart) {
    total = total + info.time;
  }
  const handleActivity = () => {
    Swal.fire("Good job!", "Your Activity Completed!", "success");
  };

  const [time, setTime] = useState(0);

  const handleBreakTime = (event) => {
    setTime(event);
    localStorage.setItem("breakTime", event);
    console.log(time);
  };

  const getDataFromLocalStorage = () => {
    const savedTime = localStorage.getItem("breakTime", time);
    return savedTime;
  };

  useEffect(() => {
    const previousTime = getDataFromLocalStorage();
    setTime(previousTime);
  }, []);

  return (
    <div className=" bg-base-100 shadow-xl rounded-xl px-8 ">
      <div className="flex justify-between items-center mt-20">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1658988253573.png"
              alt=""
            />
          </div>
        </label>
        <div className="text-md font-bold">
          <h2>Rejaul Karim Rabbi</h2>
          <p>
            Web Developer from <span className="text-green-600">Bang</span>
            <span className="text-red-500">ladesh</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between bg-slate-300 shadow-lg rounded-lg font-semibold p-4 mt-10">
        <div>
          <h5>70kg</h5>
          <p className="text-sm">Weight</p>
        </div>
        <div>
          <h5>5.8</h5>
          <p className="text-sm">Height</p>
        </div>
        <div>
          <h5>26</h5>
          <p className="text-sm">Age</p>
        </div>
      </div>

      <div className="mt-10 font-bold">
        <h1>Take a break</h1>
        <div className="bg-slate-300 shadow-lg rounded-lg font-semibold p-4  ">
          <button
            onClick={(event) => handleBreakTime(event.target.innerText)}
            className="rounded-full bg-white p-3 border-2 border-error hover:bg-error hover:text-white text-sm mr-5"
          >
            <p>10min</p>
          </button>
          <button
            onClick={(event) => handleBreakTime(event.target.innerText)}
            className="rounded-full bg-white p-3 border-2 border-error hover:bg-error hover:text-white text-sm mr-5"
          >
            <p>20min</p>
          </button>
          <button
            onClick={(event) => handleBreakTime(event.target.innerText)}
            className="rounded-full bg-white p-3 border-2 border-error hover:bg-error hover:text-white text-sm mr-5"
          >
            <p>30min</p>
          </button>
          <button
            onClick={(event) => handleBreakTime(event.target.innerText)}
            className="rounded-full bg-white p-3 border-2 border-error hover:bg-error hover:text-white text-sm "
          >
            <p>40min</p>
          </button>
        </div>
      </div>
      <div className="mt-10 font-bold mb-2">
        <h1>Exercise Details</h1>
      </div>
      <div className="flex justify-between bg-slate-300 shadow-lg rounded-lg font-bold p-4">
        <h1>Exercise time:</h1>
        <p>{total}min</p>
      </div>
      <div className="flex justify-between bg-slate-300 mt-4 shadow-lg rounded-lg py-4 font-bold p-4">
        <h1>Break time:</h1>
        <p>{time}</p>
      </div>
      <div className="mt-10">
        <button
          onClick={handleActivity}
          className="btn btn-default hover:bg-accent w-full mb-10"
        >
          Activity compleated
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
