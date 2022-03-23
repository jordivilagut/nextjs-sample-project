import styles from "../styles/Home.module.css";
import {SimpleSection} from "./simplesection/simpleSection";
import {SectionModel} from "../model/SectionModel";
import {HeroSectionWithPicture} from "./hero/heroSectionWithPicture";
import {TextSection} from "./textsection/textSection";

interface MainProps {
    sections: SectionModel[]
}

export const Main = (props: MainProps) =>
    <main className={styles.main}>
        <HeroSectionWithPicture section={props.sections[0]}/>
        <TextSection section={props.sections[1]}/>
        {props.sections.slice(2, props.sections.length).map(s => <SimpleSection key={s.id} section={s}/>)}
    </main>;