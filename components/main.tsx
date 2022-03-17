import styles from "../styles/Home.module.css";
import {HeroSection} from "./heroSection";
import {SimpleSection} from "./simpleSection";
import {SectionModel} from "../model/SectionModel";

interface MainProps {
    sections: SectionModel[]
}

export function Main(props: MainProps) {
    return <main className={styles.main}>
        <HeroSection/>
        {props.sections.map(s => <SimpleSection section={s}/>)}
    </main>;
}