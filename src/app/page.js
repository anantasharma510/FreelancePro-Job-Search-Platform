import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function Home() {
  return (
 <div>
  <Navbar />
  <Hero />
  <Card />
 </div>
  );
}
