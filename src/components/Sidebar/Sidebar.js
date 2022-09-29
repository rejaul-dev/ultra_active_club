import React from "react";

const Sidebar = ({ cart }) => {
  let total = 0;
  for (const info of cart) {
    total = total + info.time;
  }
  return (
    <div className=" bg-base-100 shadow-xl rounded-xl px-8 ">
      <div className="flex justify-evenly items-center mt-20">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        <div>
          <h2>Rejaul Karim Rabbi</h2>
          <p>Kuala Lumpur</p>
        </div>
      </div>
      <div className="flex justify-evenly bg-slate-300 shadow-lg rounded-lg font-semibold p-4 mt-10">
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
      <div className="mt-10 font-bold mb-2">
        <h1>Take a break</h1>
        <div className="bg-slate-300 shadow-lg rounded-lg font-semibold p-4">
          <button className="rounded-full bg-white py-3 px-2 border-2 border-error hover:bg-error hover:text-white text-sm mr-2">
            10m
          </button>
          <button className="rounded-full bg-white py-3 px-2 border-2 border-error hover:bg-error hover:text-white text-sm mr-2">
            20m
          </button>
          <button className="rounded-full bg-white py-3 px-2 border-2 border-error hover:bg-error hover:text-white text-sm mr-2">
            30m
          </button>
          <button className="rounded-full bg-white py-3 px-2 border-2 border-error hover:bg-error hover:text-white text-sm mr-2">
            40m
          </button>
          <button className="rounded-full bg-white py-3 px-2 border-2 border-error hover:bg-error hover:text-white text-sm mr-2">
            50m
          </button>
        </div>
      </div>
      <div className="mt-10 font-bold mb-2">
        <h1>Exercise Details</h1>
      </div>
      <div className="flex justify-between bg-slate-300 shadow-lg rounded-lg font-bold p-4">
        <h1>Exercise time:</h1>
        <p>{total}m</p>
      </div>
      <div className="flex justify-between bg-slate-300 mt-4 shadow-lg rounded-lg py-4 font-bold p-4">
        <h1>Break time:</h1>
        <p>0 M </p>
      </div>
      <div className="mt-10">
        <button className="btn btn-default hover:bg-accent w-full mb-10">Activety compleated</button>
      </div>
    </div>
  );
};

export default Sidebar;
