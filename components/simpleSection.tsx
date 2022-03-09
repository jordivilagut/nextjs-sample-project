interface SimpleSectionProps {
    styles: string
    text: string
}

export function SimpleSection(props: SimpleSectionProps) {
    return <section className={props.styles}>
        <h2>Simple Section</h2>
        <p>I'm a {props.text} section</p>
    </section>;
}