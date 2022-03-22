import {SectionModel} from "../../model/SectionModel";
import styles from "../../styles/Home.module.css";

interface SimpleSectionProps {
    section: SectionModel
}

export const SimpleSection = (props: SimpleSectionProps) =>
    <section id={props.section.id} className={props.section.styles.join(' ')}>
        <div className={styles.sectionTextArea}>
            <h2>{props.section.title}</h2>
            <p>I'm a {props.section.text} section</p>
        </div>
    </section>;