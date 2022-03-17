import styles from "../styles/Home.module.css";

export const HeroSection = () =>
    <section className={`
                        ${styles.wideSection}
                        ${styles.topPadding}
                        ${styles.innerPadding}`}>
        <h1 className={styles.title}>Sample Project</h1>
        <p className={styles.description}>Welcome to this site</p>
    </section>;