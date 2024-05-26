import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";


export default function LandingPage() {
  return (
    <div className="px-16">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
