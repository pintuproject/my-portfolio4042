
// import{Link} from 'react-scroll';


// const Navbar = () => {
//   return(
//     <nav className="bg-gray-800">
//   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//     <div className="relative flex h-16 items-center justify-between">
//       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
//         <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//           <span className="absolute -inset-0.5"></span>
//           <span className="sr-only">Open main menu</span>
           
//           <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
         
//           <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
//         <div className="hidden sm:ml-6 sm:block">
//           <div className="flex space-x-4">
//           <Link to="about" smooth={true}  duration={500} offset={-70} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>
//              <Link to ="skills"smooth={true}  duration={500} offset={-70} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Skill</Link>
//             {/* <Link to="projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Project</Link> */}
//             <Link to="projects" smooth={true}  duration={500} offset={-70} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Project</Link>

//             <Link to="contact" smooth={true} outline='none' duration={500} offset={-70} activeClass='active' className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</Link>
//           </div>
//         </div>
//       </div>
//       {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//           <span className="absolute -inset-1.5"></span>
//           <span className="sr-only">View notifications</span>
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//           </svg>
//         </button> */}
        
   
        
//         <div className="relative ml-3">
//           <div>
//             <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//               <span className="absolute -inset-1.5"></span>
//               <span className="sr-only">Open user menu</span>
//               <img className="h-10 w-10 rounded-full" src="myphoto.jpeg" alt=" no "/>
//             </button>
//           {/* </div> */}

          
          
//         </div>
//       </div>
//     </div>
//   </div>

   
//   <div className="sm:hidden" id="mobile-menu">
//     <div className="space-y-1 px-2 pb-3 pt-2">
      
//       <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
//       <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
//       <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
//       <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
//     </div>
//   </div>
// </nav>

//   )
// }

// export default Navbar
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

// Swap this for your name / initials
const BRAND = 'YN';

const NAV_ITEMS = [
  { to: 'about', label: 'About' },
  
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#161A22] border-b border-[#262C39] transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.4)]' : ''
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand mark */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="font-['Space_Grotesk',sans-serif] font-semibold text-lg tracking-wide text-[#F2F0E9] cursor-pointer select-none"
          >
            <span className="text-[#E8A33D]">{'{'}</span>
            &nbsp;{BRAND}&nbsp;
            <span className="text-[#E8A33D]">{'}'}</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-[#F2F0E9] after:scale-x-100"
                className="relative px-3.5 py-2 text-sm font-medium text-[#8B92A3] hover:text-[#F2F0E9] cursor-pointer transition-colors
                  after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-0.5 after:h-[2px]
                  after:bg-[#E8A33D] after:scale-x-0 after:origin-left after:transition-transform after:duration-200
                  hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: status badge + mobile burger */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#E8A33D]/35 bg-[#E8A33D]/10 px-3 py-1.5 font-mono text-xs text-[#E8A33D]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8A33D] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E8A33D]" />
              </span>
              available for work
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-[#8B92A3] hover:bg-[#1F2530] hover:text-[#F2F0E9]"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="sm:hidden border-t border-[#262C39] px-6 pb-4 pt-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-[#E8A33D]"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[#262C39] py-3 text-sm text-[#8B92A3] cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;