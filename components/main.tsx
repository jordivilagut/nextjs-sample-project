import styles from "../styles/Home.module.css";
import {HeroSection} from "./heroSection";
import {SimpleSection} from "./simpleSection";

export function Main() {
    return <main className={styles.main}>
        <HeroSection/>
        <SimpleSection styles={`
                        ${styles.blueBackground} 
                        ${styles.wideSection}
                        ${styles.innerPadding}`}
                       text="blue"/>
        <SimpleSection styles={`
                        ${styles.greenBackground} 
                        ${styles.wideSection}
                        ${styles.innerPadding}`}
                       text="red"/>
    </main>;
}