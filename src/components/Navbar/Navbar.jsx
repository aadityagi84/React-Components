import Logo from "../../assets/logo.png";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Eletronices",
    link: "/#",
  },
];
const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  {
    id: 2,
    name: "Best Selling",
    link: "/#services",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upperNavbar */}

      <div className="bg-primary/40 py-10 sm:py-0  md:py-4">
        <div className="container  flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/*search bars and buttons  */}
          <div className="flex items-center justify-between  gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all dark:border-gray-500 dark:bg-gray-800 dark:text-white duration-300 rounded-full border border-gray-300 px-6 py-2 focus:outline-none focus:border-1 focus:border-orange"
              />
              <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering not available yet ")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-1000 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className=" hidden transition-all duration-1000 ease-in group-hover:block">
                Order
              </span>
              <FaBasketShopping className="text-white text-xl drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower navbar */}

      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-700"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown and links  */}

          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-700 group-hover:rotate-180" />
              </span>
            </a>

            <div className=" absolute  top-10 z-[9999] hidden group-hover:block w-[200px] rounded-md shadow-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
