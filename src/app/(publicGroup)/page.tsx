import Banner from "@/app/(publicGroup)/_components/Hero-Banner";
import TopPicks from "./_components/Explore-items";
import CustomerReviews from "./_components/CustomerReview";
import AboutPage from "./about/page";
import ContactPage from "../(contactGroup)/contact/page";







export default function HomePage() {
  return (
    
    <div>
     <Banner></Banner>
     <TopPicks></TopPicks>
     <CustomerReviews></CustomerReviews>
     <AboutPage></AboutPage>
     <ContactPage></ContactPage>
    
    </div>

  );
}
