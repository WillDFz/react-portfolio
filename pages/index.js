import Head from "next/head";
import Header from "../src/components/UI/Header";
import Introduction from "../src/components/Sections/Introduction";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "../src/components/Sections/Skills";

export default function Home() {
    return (
        <>
            <Head>
                <title>Will Front-end Developer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Introduction/>
            <Skills/>
        </>
    );
}
