import styles from "../../styles/Home.module.css";
import {SectionModel} from "../../model/SectionModel";

interface HeroSectionProps {
    section: SectionModel
}

export const HeroSection = (props: HeroSectionProps) =>
    <section id={props.section.id} className={props.section.styles.join(' ')}>
        <h1 className={`${styles.title} ${styles.topPadding}`}>{props.section.title}</h1>
        <p className={styles.description}>{props.section.text}</p>
    </section>;