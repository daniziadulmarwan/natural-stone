import { useState } from "react";

function Navbar({ onClick }) {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <div className="mt-10">
      <nav className="relative">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex justify-between items-center">
            <a
              href="/"
              className="brand text-3xl text-slate-900 hover:text-slate-700 leading-9"
            >
              Universal <span className="text-indigo-900">Stone.</span>
            </a>

            <ul className="hidden md:flex flex-col md:flex-row items-center gap-10">
              <li>
                <a href="/" className="nav-item hover:text-slate-700">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-item hover:text-slate-700"
                  onClick={onClick}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-item hover:text-slate-700"
                  onClick={onClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="nav-item hover:text-slate-700"
                  onClick={onClick}
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="nav-item hover:text-slate-700"
                  onClick={onClick}
                >
                  Product
                </a>
              </li>
              <li>
                <a href="" className="nav-item hover:text-slate-700">
                  Contact
                </a>
              </li>
            </ul>

            <button
              className="flex md:hidden"
              onClick={() => setIsDrop(!isDrop)}
            >
              {!isDrop ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Version */}
          <ul
            className={`${
              isDrop ? "block" : "hidden"
            } flex flex-col gap-5 md:hidden bg-white mt-2 w-full py-5 text-center border border-slate-300`}
          >
            <li>
              <a
                href="/"
                className="text-[#AFA798] hover:text-slate-700 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#AFA798] hover:text-slate-700 hover:underline"
                onClick={onClick}
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#AFA798] hover:text-slate-700 hover:underline"
                onClick={onClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#AFA798] hover:text-slate-700 hover:underline"
                onClick={onClick}
              >
                Feature
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#AFA798] hover:text-slate-700 hover:underline"
                onClick={onClick}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#AFA798] hover:underline"
                onClick={onClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
