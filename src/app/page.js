import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
 <div>
  <Navbar />
  <Hero />
  <Card />
  <Footer />
 </div>
  );
}
