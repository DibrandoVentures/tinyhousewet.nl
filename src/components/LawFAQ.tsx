import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import tinyModernDeckImage from "@/assets/tiny-modern-deck.jpg";
const LawFAQ = () => {
  const faqItems = [{
    question: "Is een tiny house automatisch vergunningsvrij omdat het klein is?",
    answer: "Nee. Grootte speelt mee, maar bestemming, functie en locatie zijn minstens zo belangrijk."
  }, {
    question: "Kun je overal op eigen erf een familiewoning plaatsen?",
    answer: "Nee. De gemeente kijkt naar het omgevingsplan, de hoeveelheid bebouwing op je erf en soms ook naar de ruimtelijke kwaliteit van de omgeving. Soms kan er veel, soms is er nauwelijks ruimte."
  }, {
    question: "Kan ik een familiewoning later gewoon verhuren aan iemand buiten de familie?",
    answer: "Dat is meestal niet de bedoeling. Veel regelingen voor familiewoningen zijn echt bedoeld voor verwantschap, niet voor reguliere verhuur."
  }, {
    question: "Wat maakt een mantelzorgwoning anders?",
    answer: "Bij een mantelzorgwoning is de zorgrelatie het uitgangspunt. Dat geeft vaak meer ruimte in de regels, maar ook meer voorwaarden – bijvoorbeeld rondom wat er gebeurt als de zorg stopt."
  }, {
    question: "Verandert de wet de komende jaren nog?",
    answer: "Ja, de discussie over wooncrisis, vergrijzing en nieuwe woonvormen zorgt ervoor dat regels doorlopend worden aangepast. Tiny houses, familiewoningen en mantelzorgwoningen profiteren daar vaak van, maar de invulling verschilt per gemeente."
  }];
  return <section id="faq" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Korte Q&A: tiny house en wet in gewone taal</h2>
              </div>
              <p className="text-muted-foreground">
                De meestgestelde vragen over tiny houses en wetgeving, helder beantwoord.
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src={tinyModernDeckImage} 
                alt="Modern tiny house met houten terras in een groene omgeving" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border border-border px-6">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default LawFAQ;