import { ReactNode, FC, useState, useEffect } from 'react';

type TopbarProps = {
  title: string;
  children?: ReactNode;
};

export const Topbar: FC<TopbarProps> = ({ title }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.pageYOffset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition sticky top-0 z-50 flex flex-wrap items-center justify-between p-4 ${
        scrolled && 'bg-lime-500'
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
          <h1
            className={`transition duration-500 ease-in-out font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white ${
              scrolled ? 'text-md' : 'text-3xl'
            }`}
          >
            {title}
          </h1>
          {/* <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button> */}
        </div>
        {/* <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Setting
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};
