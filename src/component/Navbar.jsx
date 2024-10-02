import { useState, useEffect, useRef } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referensi ke menu
  const navigate = useNavigate();

  const handleScrollTo = (section) => {
    navigate(`/${section}`);
  }

  // Fungsi untuk toggle menu saat hamburger di klik
  const toggleMenu = () => {
    setMobileMenuOpen(!MobileMenuOpen);
  };

  // Menutup menu ketika klik di luar area menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false); // Tutup menu jika klik di luar
      }
    };

    // Tambahkan event listener untuk mendeteksi klik di luar
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener ketika komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Fungsi untuk menutup menu saat tautan diklik
  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Menutup menu
  };

  return (
    <>
      <nav className="bg-blue-950 shadow-xl px-10 py-4 relative">
        <div className="flex text-white md:justify-between md:items-center">
          {/* Tampilan menu saat Mobile */}
          {/* <div className="md:flex-row-revers"> */}
          <div className="flex">
            {/* Hamburger/Close icon */}
            <button
              className="text-white md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {MobileMenuOpen ? (
                // Icon Close (X)
                <FaXmark />
              ) : (
                // Icon Hamburger (Menu)
                <FaBars />
              )}
            </button>
            <a href="/" className="font-extrabold content-center sm:ml-52 md:ml-0 ml-28 sm:mr-28 md:mr-0 mr-28">PORTOFOLIO</a>
          </div>
          {/* </div> */}

          {/* Menu */}
          <div ref={menuRef} className={`${MobileMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:w-auto w-full absolute md:static top-16 left-0 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-md rounded-b-lg shadow-mdg md:bg-transparent transition-all duration-300 ease-in-out`}>
            <ul onClick={handleLinkClick} className="flex flex-col items-center justify-center space-y-1 py-0 md:space-y-0 md:py-0 md:flex-row md:justify-center md:space-x-4 font-medium text-white">
              <li>
                <button onClick={() => handleScrollTo("")} className="block text-center px-4 py-2 hover:bg-gradient-to-r from-blue-500 to-pink-500 md:rounded-b-lg">HOME</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("about")} className="block text-center px-4 py-2 hover:bg-gradient-to-r from-blue-500 to-pink-500 md:rounded-b-lg">ABOUT</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("interest")} className="block text-center px-4 py-2 hover:bg-gradient-to-r from-blue-500 to-pink-500 md:rounded-b-lg">INTEREST</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("skills")} className="block text-center px-4 py-2 hover:bg-gradient-to-r from-blue-500 to-pink-500 md:rounded-b-lg">SKILLS</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("experience")} className="block text-center px-4 py-2 hover:bg-gradient-to-r from-blue-500 to-pink-500 md:rounded-b-lg">EXPERIENCE</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("awards")} className="block text-center px-4 py-2 hover:bg-gradient-to-r from-blue-500 to-pink-500 rounded-b-lg">AWARDS</button>
              </li>
            </ul>
          </div>
          <a href="mailto:muazahaladawiyah46@gmail.com" target="link_blink" className="btn btn-sm bg-gradient-to-r from-blue-500 to-pink-500 border-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-bold text-white">CONTACT</a>
        </div>
      </nav>
    </>
  )
}