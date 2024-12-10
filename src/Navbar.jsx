import NavItems from "./components/Navitems";
import logo from "../src/assets/logo.png"

const MENU = [
  {
    title: "Dashboard",
    link: "/Dashboard",
  },
  {
    title: "Transfer",
    link: "/Transfer",
  },
  {
    title: "Topup",
    link: "/Topup",
  },
  {
    title: "Sign Out",
    link: "/signout",
  },
];

function Navbar() {
  return (
    <nav className="flex mx-auto w-screen justify-between items-center px-8 py-6 bg-white">
      <img src={logo} alt="walled logo" />
      <NavItems menu={MENU} />
    </nav>
  );
}

export default Navbar;