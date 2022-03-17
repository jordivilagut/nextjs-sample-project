import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/footer";
import {Navbar} from "../components/navbar";
import {Main} from "../components/main";
import {SiteHead} from "../components/siteHead";
import { SectionModel } from '../model/SectionModel';

const sections = [
    new SectionModel("home", "Home", "Lorem Ipsum", [styles.blueBackground, styles.wideSection]),
    new SectionModel("about", "About", "Lorem Ipsum", [styles.greenBackground, styles.wideSection]),
    new SectionModel("contact", "Contact", "Lorem Ipsum", [styles.yellowBackground, styles.wideSection])]

const Home: NextPage = () => (
    <div className={styles.container}>
        <SiteHead/>
        <Navbar sections={sections}/>
        <Main sections={sections}/>
        <Footer/>
    </div>
)

export default Home
