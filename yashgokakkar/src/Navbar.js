import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Yash Gokakkar</h1>
            <div className="links text-3xl font-bold underline">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/education'>Education</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;