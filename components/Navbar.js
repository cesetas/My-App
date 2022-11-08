import Link from "next/link";
import NavStyles from "../styles/Nav.module.css";
import { ConnectButton } from "@web3uikit/web3";

const Navbar = () => {
  return (
    <div>
      <ul className={NavStyles.navlinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <ConnectButton />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
