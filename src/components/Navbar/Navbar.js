import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-accent lg:px-16">
          <div className="flex-1">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.icons8.com/ios-filled/344/bull.png"
                    alt=""
                  />
                </div>
              </label>
            <a href="/" className="text-xl font-bold text-white">
              Iron Bull Boxing Club
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1658988253573.png"
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
