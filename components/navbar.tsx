import styles from "../styles/Home.module.css";
import {NavbarLink} from "../navbarLink";

export function Navbar() {
    return <nav className={styles.navBar}>
        <NavbarLink text="Home"/>
        <NavbarLink text="About"/>
        <NavbarLink text="Contact"/>
    </nav>;
}