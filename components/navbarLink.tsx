import {SectionModel} from "../model/SectionModel";

interface NavbarProps {
    section: SectionModel
}

export function NavbarLink(props: NavbarProps) {
    return <a href={`#${props.section.id}`}>{props.section.title}</a>;
}