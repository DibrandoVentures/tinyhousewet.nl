import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LawSections from "@/components/LawSections";
import LawFAQ from "@/components/LawFAQ";
import Checklist from "@/components/Checklist";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LawSections className="mb-0" />
      <LawFAQ />
      <Checklist />
      <Footer className="bg-slate-50" />
    </div>;
};
export default Index;