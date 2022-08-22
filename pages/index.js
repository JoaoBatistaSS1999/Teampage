import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className=' scrollbar-thumb-rounded-none  scrollbar-thumb-red-600'>
      <Head>
        <title>BitBrace</title>
        <meta
          name='description'
          content='We are are a fullstack development company focused on web3'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
