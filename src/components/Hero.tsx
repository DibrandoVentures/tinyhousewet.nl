import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import tinyCommunityImage from "@/assets/tiny-community.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative bg-hero-blue overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-hero-blue to-hero-blue-dark opacity-90"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tiny house en de wet: hoe zit het nou echt?
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Je wilt een tiny house plaatsen – misschien in je tuin, op je eigen kavel of als zorgwoning voor je ouders. 
              Maar zodra je je verdiept in de regels, kom je terecht in een wereld van Omgevingswet, omgevingsplan, 
              bijbehorende bouwwerken en mantelzorgwoningen.
            </p>
            <p className="text-lg mb-8 text-white/80">
              Op deze pagina krijg je een helder overzicht in gewone taal. Geen juridische studie, maar de grote lijnen 
              van hoe de wet naar tiny houses kijkt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={() => scrollToSection("tiny-house-wet")} 
                className="bg-white text-hero-blue hover:bg-white/90 shadow-lg"
              >
                Lees meer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">We behandelen:</h3>
              <div className="flex flex-col gap-2">
                {[
                  "of er een officiële \"tiny house wet\" bestaat",
                  "welke wetten en regels tiny houses raken",
                  "het verschil tussen hoofdwoning, familiewoning op eigen erf en mantelzorgwoning",
                  "wat dit in de praktijk betekent als jij een plan hebt",
                  "een checklist om slimmer met de gemeente in gesprek te gaan"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img 
              src={tinyCommunityImage} 
              alt="Overzicht van een tiny house community met meerdere tiny houses op een veld" 
              className="rounded-3xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>

      <div className="h-12 bg-background rounded-t-[3rem] relative z-10"></div>
    </section>
  );
};

export default Hero;
