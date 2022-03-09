import Head from "next/head";

export function SiteHead() {
    return <Head>
        <title>Sample Project</title>
        <meta name="description" content="Sample project in NextJS"/>
        <link rel="icon" href={"/favicon.ico"}/>
    </Head>;
}