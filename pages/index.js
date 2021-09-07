import { useRef } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Hero from "../components/hero";

export default function Home() {
  const aboutRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();

  const scrollToView = (ref) =>
    ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Head>
        <title>Event Park</title>
        <meta
          name="description"
          content="Event Park - Celebration never ends"
        />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/event-park.appspot.com/o/logo.png?alt=media"
        />
      </Head>
      <Hero
        aboutRef={aboutRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
        scrollToView={scrollToView}
      />
      <Gallery aboutRef={aboutRef} galleryRef={galleryRef} />
      <Footer contactRef={contactRef} />
    </div>
  );
}
