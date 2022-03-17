import {SectionModel} from "../model/SectionModel";

interface SimpleSectionProps {
    section: SectionModel
}

export const SimpleSection = (props: SimpleSectionProps) =>
    <section id={props.section.id} className={props.section.styles.join(' ')}>
        <h2>{props.section.title}</h2>
        <p>I'm a {props.section.text} section</p>
    </section>;