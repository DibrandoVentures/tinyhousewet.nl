import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, CheckCircle } from "lucide-react";
const Checklist = () => {
  const checklistItems = ["Beschrijf je plan in één alinea: wie, wat, waar, waarom, hoe lang.", "Check bij de gemeente de bestemming van je perceel.", "Vraag expliciet: onder welke categorie zien jullie mijn plan? (Hoofdwoning / Extra woning op eigen erf / Mantelzorgwoning)", "Informeer of er mogelijkheden zijn binnen bestaande regels of dat er maatwerk nodig is.", "Vraag naar de maximale bebouwing op je erf (m² en hoogte).", "Vraag of er opties zijn voor (deels) vergunningsvrij bouwen en wat daar de voorwaarden voor zijn.", "Leg een schetsplan voor (locatie op het erf, maten, plattegrond, globale stijl).", "Zorg dat je afspraken en reacties zoveel mogelijk op mail krijgt.", "Pas je ontwerp aan op basis van wat wél kan (niet andersom).", "Ga pas contracten aan met leveranciers als je juridisch groen licht hebt."];
  return <section id="checklist" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Checklist: zo pak je het juridisch slim aan</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Gebruik deze checklist voordat je tekent, bestelt of bouwt:
          </p>
          
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {checklistItems.map((item, index) => <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground pt-1">{item}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Checklist;