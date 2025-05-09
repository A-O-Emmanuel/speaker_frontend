import { Link } from "react-router-dom";

export default function Header() {
 



  return (
    <>
      <nav className="relative flex flex-row items-center py-6 border bg-[#2E3A87]">
      <div className="text-xl ml-10 text-white font-bold">ScriptReadr</div>
          <ul className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-white">
            <li className="hover:underline decoration-2 decoration-offset-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-offset-2">
              <Link to="about">About</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-offset-2">
              <Link to="pricing">Pricing</Link>
            </li>
            <li className="hover:underline decoration-2 decoration-offset-2">
              <Link to="contact">Contact us</Link>
            </li>
          </ul>
          <div className="ml-auto hidden mr-10 bg-white py-2 px-4 rounded hover:text-[#083B74]">
              <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="ml-auto mr-10 bg-white py-2 px-4 rounded hover:text-[#083B74]">
              <Link to="signin">Login</Link>
          </div>
      </nav>
    </>
  );
}
