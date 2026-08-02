import ContactForm from "../_components/ContactForm";
import ContactHero from "../_components/ContactHero";
import ContactInfo from "../_components/ContactInfo";
import CTA from "../_components/CTA";
import FAQ from "../_components/FAQ";
import Map from "../_components/Map";


export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Map />
      <FAQ />
      <CTA />
    </>
  );
}
