import styles from "../styles/Home.module.css";
import {NavbarLink} from "./navbarLink";
import { SectionModel } from "../model/SectionModel";

interface NavbarProps {
    sections: SectionModel[]
}

export const Navbar = (props: NavbarProps) =>
    <nav className={styles.navBar}>
        {props.sections.map(s => <NavbarLink key={s.id} section={s}/>)}
    </nav>;