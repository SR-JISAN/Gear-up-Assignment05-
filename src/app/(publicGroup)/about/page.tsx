import AboutHero from "../_components/AboutHero";
import CTA from "../_components/CTA";
import Mission from "../_components/Mission";
import Stats from "../_components/Stats";
import Timeline from "../_components/Timeline";
import WhyChoose from "../_components/WhyChoose";


export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <Mission />
      <WhyChoose />
      <Stats />
      <Timeline />
      <CTA />
    </main>
  );
}
