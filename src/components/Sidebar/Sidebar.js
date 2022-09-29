import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-base-100 shadow-xl rounded-xl px-8">
      <div className="flex justify-evenly items-center mt-10">
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
      <div className="flex justify-evenly mt-10 bg-slate-300 px-10 py-2 rounded-xl">
        <div>
          <h5>70kg</h5>
          <p>Weight</p>
        </div>
        <div>
          <h5>5.8</h5>
          <p>Height</p>
        </div>
        <div>
          <h5>26</h5>
          <p>Age</p>
        </div>
      </div>
      <div className="mt-10 border-2 border-indigo-500 w-80">
        <h1>Take a break</h1>
        <div className=" bg-slate-300 rounded-xl py-4">
          <button className="rounded-full bg-white py-1 px-1 border-2 border-red-200 text-md mr-2">10m</button>
          <button className="rounded-full bg-white py-1 px-1 border-2 border-red-200 text-md mr-2">20m</button>
          <button className="rounded-full bg-white py-1 px-1 border-2 border-red-200 text-md mr-2">30m</button>
          <button className="rounded-full bg-white py-1 px-1 border-2 border-red-200 text-md mr-2">40m</button>
          <button className="rounded-full bg-white py-1 px-1 border-2 border-red-200 text-md mr-2">50m</button>
        </div>
      </div>
      <div>
        <h1>Exercise Details</h1>
      </div>
      <div className="flex justify-around bg-slate-300 mt-4 rounded-lg py-4">
        <h1>Exercise time:</h1>
        <p>0 M </p>
      </div>
      <div className="flex justify-around bg-slate-300 mt-4 rounded-lg py-4">
        <h1>Break time:</h1>
        <p>0 M </p>
      </div>
      <div className="mt-4">
      <button className="btn btn-primary">Activety compleated</button>
      </div>
    </div>
  );
};

export default Sidebar;
