import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavDropdownProps } from "../types";

const NavDropdown: React.FC<NavDropdownProps> = ({
  obj,
  index,
  setActiveIndex,
  activeIndex,
}) => {
  const pathname = usePathname();

  return (
    <div>
      <div
        className={`${
          pathname === obj?.path ? "text-white font-bold" : "text-stone-300"
        } self-stretch flex justify-center items-center my-5 md:my-0`}
        onClick={() => setActiveIndex(index)}
      >
        {Array.isArray(obj.path) ? (
          <>
            {obj.title}
            <div className="-rotate-90 ml-1">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform={`scale(1)`}>
                  <path
                    d="M14.121 17.243a.997.997 0 0 1-.707-.293l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 1.414L11.293 12l3.535 3.536a1 1 0 0 1-.707 1.707Z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </div>
          </>
        ) : (
          <Link href={obj.path}>{obj.title}</Link>
        )}
      </div>
      <div
        className={`z-10 ${
          activeIndex === index ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-1/3 md:left-auto`}
      >
        {Array.isArray(obj.path) && (
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left">
            {obj.path.map((val) => (
              <li key={val.title}>
                <Link
                  href={val.path}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {val.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavDropdown;
