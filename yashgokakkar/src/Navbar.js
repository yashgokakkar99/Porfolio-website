import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white h-14" fixed="top">
      <div className="flex justify-between content-center">
        <div className="logo px-10 pt-3 font-bold text-xl">Yash Gokakkar</div>
        <div className="nav-con logo flex justify-end space-x-11 px-10 content-center pt-3">
          <Link to="/" className="cursor-pointer hover:border-b-4 border-lime-400 font-bold text-xl">Home</Link>
          <Link to="/about" className="cursor-pointer hover:border-b-4 border-lime-400 font-bold text-xl">About</Link>
          <Link to="/projects" className="cursor-pointer hover:border-b-4 border-lime-400 font-bold text-xl">Projects</Link>
          <Link to="/education" className="cursor-pointer hover:border-b-4 border-lime-400 font-bold text-xl">Education</Link>
          <Link to="/contact" className="cursor-pointer hover:border-b-4 border-lime-400 font-bold text-xl">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
