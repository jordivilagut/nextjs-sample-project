import {SectionModel} from "../../model/SectionModel";
import styles from "./TextSection.module.css";
import {useTranslation} from "react-i18next";

interface SimpleSectionProps {
    section: SectionModel
}

export const TextSection = (props: SimpleSectionProps) => {
    const {t} = useTranslation();
    return (
        <section id={props.section.id} className={props.section.styles.join(' ')}>
            <div className={styles.textArea}>
                <h2>{props.section.title}</h2>
                <p>{t(props.section.text)}</p>
            </div>
        </section>
    )
}
