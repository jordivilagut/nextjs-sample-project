import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/footer";
import {Navbar} from "../components/navbar";
import {Main} from "../components/main";
import {SiteHead} from "../components/siteHead";
import { SectionModel } from '../model/SectionModel';

const sections = [
    new SectionModel("home", "Sample Project", "Welcome to this site", [styles.heroPictureBackground, styles.wideSection]),
    new SectionModel("bio", "Bio", "Lorem Ipsum", [styles.smokeyBg, styles.wideSection]),
    new SectionModel("about", "About", "Lorem Ipsum", [styles.greenBg, styles.wideSection]),
    new SectionModel("contact", "Contact", "Lorem Ipsum", [styles.caobaBg, styles.wideSection])]

const Home: NextPage = () => (
    <div className={styles.container}>
        <SiteHead/>
        <Navbar sections={sections}/>
        <Main sections={sections}/>
        <Footer/>
    </div>
)

export default Home
