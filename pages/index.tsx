import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/footer";
import {Navbar} from "../components/navbar";
import {Main} from "../components/main";
import {SiteHead} from "../components/siteHead";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <SiteHead/>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home
