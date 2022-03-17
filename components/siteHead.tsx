import Head from "next/head";

export const SiteHead = () => <Head>
    <title>Sample Project</title>
    <meta name="description" content="Sample project in NextJS"/>
    <link rel="icon" href={"/favicon.ico"}/>
</Head>;