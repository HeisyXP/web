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
    <>
      <Head>
        <title>HeisyXP: Helping ease international trade of used vehicles</title>
        <meta
          name="description"
          content="HeisyXP allows you to easily import and export overseas"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32" rel="shortcut icon" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Why HeisyXP?"
        title="Cross-border turn-key solutions">
        User journey made as easy as possible with simple and clear instructions on how to start your own personal trading platform.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <SectionTitle
        pretitle="Challenges"
        title="〝I want to start exporting. Please tell me about exporting〞">
        Voices like this arrive on my YouTube every day - Ayaka Wada, CEO HeisyXP
      </SectionTitle>
      {/* <Testimonials /> 
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />*/}
      <Cta />
      <SectionTitle
        pretitle="Acknowledgements"
        title="People trust us">
        We are really pleased to announce that we have been selected for some of the most prestigious startup accelerator programs.
      </SectionTitle>
      <Container className="flex flex-wrap justify-around items-center">
        <Image
              src={Amelias}
              width="200"
              className={"h-fit my-4"}
              alt="Amelias"
              loading="lazy"
              placeholder="blur"
              style={{borderRadius: "20px"}}
        />
        <Image
              src={Jetro}
              width="300"
              className={"h-fit my-4"}
              alt="Jetro"
              loading="lazy"
              placeholder="blur"
              style={{borderRadius: "20px"}}
            />
      <Image
              src={JetroM}
              width="300"
              className={"h-fit my-4"}
              alt="Jetro Ministry"
              loading="lazy"
              placeholder="blur"
              style={{borderRadius: "20px"}}
            />
      </Container>
      
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}

export default Home;