import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import avatar from "../assets/avatar.png";

function LandingNavbar() {
  return (
    <nav className="flex items-center justify-between px-[80px] py-[34px]">
      <Logo />
      <ul className="flex items-center gap-x-[79px]">
        <NavbarItem>Products</NavbarItem>
        <NavbarItem>Communities</NavbarItem>
        <NavbarItem>Bounties</NavbarItem>
      </ul>
      <img src={avatar} alt="" />
    </nav>
  );
}

export default LandingNavbar;
