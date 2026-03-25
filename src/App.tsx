import { BackgroundCanvas } from "./components/BackgroundCanvas";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Speakers } from "./components/Speakers";
import { Shimmer } from "./components/ui/Shimmer";
import { Schedule } from "./components/Schedule";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <BackgroundCanvas />
      <Header />
      <Hero />
      <Speakers />
      <Shimmer />
      <Schedule />
      <Footer />
    </>
  );
}
