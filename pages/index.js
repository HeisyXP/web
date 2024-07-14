import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Container from "../components/container";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Image from "next/image";
import Amelias from "../public/img/Amelias.webp";
import Jetro from "../public/img/Jetro.png";
import JetroM from "../public/img/Jetro-ministry.png";

export const runtime = "experimental-edge";

const Home = () => {
  return (
    <div style={{ textAlign: "center", margin: "10rem auto" }}>
      <Head>
        <title>HeisyXP is no more!</title>
      </Head>
      <h1 style={{fontSize: "2rem"}}>Website is down! 🔥</h1>
      <p style={{fontSize: "1rem"}}>The website/product has been put under hold for indefinitely due the cofounders conflicts 💔 <i>- Cofounder and CTO, Akshaya Raghuvanshi</i></p>
    </div>
  );
}

export default Home;