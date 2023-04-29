import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Cases from "./components/Cases/Cases";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";

export const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <About />
      <Cases />
      <Blog />
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}