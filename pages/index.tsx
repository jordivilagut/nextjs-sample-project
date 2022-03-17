import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/footer";
import {Navbar} from "../components/navbar";
import {Main} from "../components/main";
import {SiteHead} from "../components/siteHead";
import { SectionModel } from '../model/SectionModel';

const sections = [
    new SectionModel("Home", "Lorem Ipsum", [styles.blueBackground, styles.topPadding, styles.wideSection]),
    new SectionModel("About", "Lorem Ipsum", [styles.greenBackground, styles.topPadding, styles.wideSection]),
    new SectionModel("Contact", "Lorem Ipsum", [styles.yellowBackground, styles.topPadding, styles.wideSection])]

const Home: NextPage = () => (
    <div className={styles.container}>
        <SiteHead/>
        <Navbar sections={sections.map(s => s.title)}/>
        <Main sections={sections}/>
        <Footer/>
    </div>
)

export default Home
