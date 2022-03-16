interface NavbarProps {
    text: String
}

export function NavbarLink(props: NavbarProps) {
    return <p>{props.text}</p>;
}