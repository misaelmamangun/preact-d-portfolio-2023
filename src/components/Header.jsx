import { Fragment } from "preact";
import { useState } from "preact/hooks";
// Models
import settings from "src/schemas/settings.json";
// Assets
import logo from "src/assets/img/logo.png";

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The JSX element representing the header.
 */
const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { nav } = settings;

  return (
    <Fragment>
      <header className="dark:bg-dark-600 py-4 border-b-2 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h6 className="text-lg font-semibold dark:text-light-400">
                <a href="/" className="uppercase ">
                  <img src={logo} className="w-10" />
                </a>
              </h6>
            </div>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={(e) => setIsOpen(!isOpen)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <nav
              className={`${
                isOpen ? null : "hidden"
              } md:block md:w-auto w-full`}
            >
              <ul className="md:flex md:gap-6 md:divide-none divide-y">
                {nav.map(({ title, link }) => (
                  <li key={title}>
                    <a
                      href={link}
                      onClick={(e) => setIsOpen(!isOpen)}
                      className="md:p-0 text-light-400 block pt-4 pb-4 pr-4"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default AppHeader;
