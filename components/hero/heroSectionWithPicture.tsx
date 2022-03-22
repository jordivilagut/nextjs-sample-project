import styles from "../../styles/Home.module.css";
import {SectionModel} from "../../model/SectionModel";

interface HeroSectionProps {
    section: SectionModel
}

export const HeroSectionWithPicture = (props: HeroSectionProps) =>
    <section id={props.section.id} className={props.section.styles.join(' ')}>
        <div className={`${styles.wideSection} ${styles.stainedGlass}`}>
            <div className={styles.heroTextArea}>
                <h1 className={`${styles.title}`}>{props.section.title}</h1>
                <p className={styles.description}>{props.section.text}</p>
            </div>
        </div>
    </section>;