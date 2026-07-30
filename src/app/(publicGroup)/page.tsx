import Banner from "@/app/(publicGroup)/_components/Hero-Banner";
import TopPicks from "./_components/Explore-items";
import CustomerReviews from "./_components/CustomerReview";
import Footer from "@/components/share/Footer";






export default function HomePage() {
  return (
    
    <div>
     <Banner></Banner>
     <TopPicks></TopPicks>
     <CustomerReviews></CustomerReviews>
     <Footer/>
    </div>

  );
}
