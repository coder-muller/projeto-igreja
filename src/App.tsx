import { BackgroundCanvas } from "./components/BackgroundCanvas";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Speakers } from "./components/Speakers";
import { Shimmer } from "./components/ui/Shimmer";
import { Schedule } from "./components/Schedule";
import { Footer } from "./components/Footer";
import { TicketPurchase } from "./components/TicketPurchase";

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isTicketsPage = currentPath === "/ingressos";

  if (isTicketsPage) {
    return (
      <>
        <BackgroundCanvas />
        <Header isTicketsPage />
        <TicketPurchase />
        <Footer />
      </>
    );
  }

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
