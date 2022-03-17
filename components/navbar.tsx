import styles from "../styles/Home.module.css";
import {NavbarLink} from "../navbarLink";

interface NavbarProps {
    sections: string[]
}

export const Navbar = (props: NavbarProps) =>
    <nav className={styles.navBar}>
        {props.sections.map(s => <NavbarLink text={s}/>)}
    </nav>;