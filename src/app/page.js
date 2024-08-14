import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Footer from "@/app/footer/page";
import Hero from "@/app/hero/page";
import Nav from "@/app/nav/page";
import Services from "@/app/services/page";
import Work from "@/app/work/page";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
