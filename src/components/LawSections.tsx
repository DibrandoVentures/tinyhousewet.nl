import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Home, Users, Heart, FileCheck, HelpCircle } from "lucide-react";
import wetTinyhouseImage from "@/assets/wet-tinyhouse.png";
import kostenTinyhouseImage from "@/assets/kosten-tinyhouse.png";
import mantelzorgImage from "@/assets/mantelzorg.png";
import tinyCommunityImage from "@/assets/tiny-community.jpg";
const LawSections = () => {
  return <>
      {/* Section 1: Is er een aparte tiny house wet? */}
      <section id="tiny-house-wet" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Is er een aparte "tiny house wet"?</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Het korte antwoord: <strong>nee</strong>.
            </p>
            <p className="text-muted-foreground mb-6">
              Er is geen wetsartikel dat letterlijk zegt: "Dit is een tiny house en zó mag het wel of niet."
              In plaats daarvan valt een tiny house onder bestaande kaders, zoals:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>de <strong>Omgevingswet</strong> (hoe we de fysieke leefomgeving in Nederland regelen);</li>
              <li>het <strong>omgevingsplan</strong> van jouw gemeente (de opvolger van het bestemmingsplan);</li>
              <li><strong>bouwtechnische regels</strong> rond veiligheid, gezondheid en gebruik.</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              De wet stelt dus niet: "Tiny houses zijn toegestaan/verboden", maar kijkt naar vragen als:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>Is het een normale woning of een bijgebouw?</li>
              <li>Komt het op een plek met woonbestemming of niet?</li>
              <li>Wordt het gebruikt als hoofdwoning, familiewoning of mantelzorgwoning?</li>
              <li>Is het bedoeld voor permanente bewoning of meer als hulpoplossing?</li>
            </ul>
            <p className="text-muted-foreground font-medium">
              Daarom is de belangrijkste eerste stap: bepaal wat jouw tiny house precies moet zijn en voor wie.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Wet/Law */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img src={wetTinyhouseImage} alt="Rechtershamer op stapel groene mappen - symbolisch voor tiny house wetgeving" className="rounded-2xl shadow-lg w-full h-auto object-fill" />
          </div>
        </div>
      </section>

      {/* Section 2: De drie belangrijkste brillen */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">De drie belangrijkste "brillen" van de wet</h2>
            <p className="text-muted-foreground mb-8">
              Je kunt het zo zien: de wet kijkt niet naar jouw interieurfoto's, maar naar de <strong>functie</strong> van het bouwwerk. 
              In de praktijk kom je bij tiny houses vaak in één van deze drie groepen uit:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <Home className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">1. Hoofdwoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Je tiny house is je normale huis. Je schrijft je in, het is je vaste adres.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">2. Familiewoning op eigen erf</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Er is een hoofdwoning op het perceel en je plaatst een extra, zelfstandige woonruimte voor bijvoorbeeld je ouders of volwassen kind.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">3. Mantelzorgwoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    De extra woning hangt direct samen met een zorgsituatie: iemand heeft langdurige, intensieve zorg nodig en moet dicht bij de mantelzorger wonen.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground mt-6 font-medium">
              Binnen elke categorie gelden andere spelregels. Daarom is het slim om eerst te bepalen: in welke categorie valt mijn plan?
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Hoofdwoning */}
      <section id="hoofdwoning" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Home className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Tiny house als hoofdwoning op eigen kavel</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Wil je je tiny house gebruiken als volwaardige woning op een eigen stuk grond, dan ziet de wet het vrijwel altijd als een <strong>hoofdwoning</strong>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Bestemming van de grond</h3>
            <p className="text-muted-foreground mb-4">
              Alles begint met de bestemming van de grond in het omgevingsplan van de gemeente:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>Staat er "Wonen", dan is er in principe ruimte voor een woning – maar nog niet per se voor meerdere woningen.</li>
              <li>Staat er "Agrarisch", "Recreatie" of "Bedrijventerrein", dan moet er een uitzondering worden gemaakt of de bestemming moet worden gewijzigd.</li>
            </ul>
            <p className="text-muted-foreground mb-8 font-medium">
              Zonder passende bestemming is een tiny house als hoofdwoning meestal niet toegestaan, hoe klein en duurzaam het ook is.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Vergunningsplicht</h3>
            <p className="text-muted-foreground mb-4">
              Een tiny house als hoofdwoning is in de praktijk bijna altijd <strong>vergunningplichtig</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>Je vraagt een omgevingsvergunning voor bouwen aan.</li>
              <li>De gemeente kijkt onder andere naar:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>of er een extra woning mag binnen het plan;</li>
                  <li>de hoogte, oppervlakte en ligging;</li>
                  <li>het straatbeeld (welstand/beeldkwaliteit, als dat van toepassing is);</li>
                  <li>parkeernormen (is er ruimte voor parkeren?).</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Bouwkundige eisen</h3>
            <p className="text-muted-foreground mb-4">
              Ook een kleine woning moet voldoen aan basisregels voor:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>brandveiligheid;</li>
              <li>constructieve veiligheid;</li>
              <li>ventilatie en daglicht;</li>
              <li>minimale gebruikseisen (bijvoorbeeld voor verblijfsruimtes).</li>
            </ul>
            <p className="text-muted-foreground">
              Dat betekent niet dat een tiny house een klassieke rijtjeswoning hoeft te zijn, maar wél dat er een ondergrens is aan veiligheid en gezondheid.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Kosten/Planning */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img src={kostenTinyhouseImage} alt="Modelwoning met rekenmachine en bouwhelm - symbolisch voor bouwplanning en kosten" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Section 4: Familiewoning */}
      <section id="familiewoning" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Extra woning op eigen erf: de familiewoning</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Steeds meer mensen willen een extra, compacte woning op hun erf voor familie:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-4">
              <li>ouders die dichterbij willen wonen;</li>
              <li>volwassen kinderen die (tijdelijk) zelfstandig willen wonen;</li>
              <li>een generatiewoning waarbij jong en oud samen op één erf leven.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Bijgebouw met woonfunctie</h3>
            <p className="text-muted-foreground mb-4">
              Juridisch kom je dan vaak in de categorie <strong>bijbehorend bouwwerk met woonfunctie</strong> terecht:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>De extra woning is een uitbreiding van de bestaande woning, geen volledig losstaande nieuwe woning in planologisch opzicht.</li>
              <li>De gemeente kan voorwaarden koppelen, zoals:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>alleen bewoning door eerstegraads familie;</li>
                  <li>geen apart huisnummer (het blijft één adres);</li>
                  <li>maximale oppervlakte en hoogte.</li>
                </ul>
              </li>
            </ul>
            <p className="text-muted-foreground mb-8">
              De regels per gemeente kunnen verschillen, maar het idee is meestal: wel meer woonruimte voor familie, maar geen "stiekeme extra rij huizen" op één erf.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Vergunningsvrij of met vergunning?</h3>
            <p className="text-muted-foreground mb-4">
              Sommige vormen van bijgebouwen met woonfunctie kunnen (deels) onder vergunningsvrij bouwen vallen, mits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>het binnen het achtererfgebied valt;</li>
              <li>je binnen de maximale bebouwingsoppervlakte blijft;</li>
              <li>je de toegestane hoogte en bouwlaag respecteert.</li>
            </ul>
            <p className="text-muted-foreground">
              Maar: <strong>vergunningsvrij betekent niet "zonder regels"</strong>. De wettelijke voorwaarden blijven gelden.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Mantelzorgwoning */}
      <section id="mantelzorg" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Mantelzorgwoning: tiny house als zorgoplossing</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Een mantelzorgwoning is een woning die er specifiek staat vanwege een zorgrelatie. Denk aan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-4">
              <li>ouders met een zorgbehoefte die bij hun kinderen op het erf wonen;</li>
              <li>iemand die intensieve ondersteuning nodig heeft en dicht bij familie moet zijn;</li>
              <li>een mantelzorger die in een extra unit naast de zorgvrager woont.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Wanneer is er volgens de wet sprake van mantelzorg?</h3>
            <p className="text-muted-foreground mb-4">
              In de regel is er sprake van mantelzorg als:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>het gaat om langdurige, intensieve zorg (dus meer dan af en toe een boodschap doen);</li>
              <li>de zorg onbetaald is en niet alleen door zorgprofessionals wordt geleverd;</li>
              <li>de situatie ook door een deskundige (bijvoorbeeld huisarts of wijkverpleegkundige) te onderbouwen is.</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Veel gemeenten vragen een vorm van verklaring of onderbouwing voordat ze een mantelzorgwoning toestaan.
            </p>

            <div className="my-8">
              <img src={mantelzorgImage} alt="Oudere en jongere handen die elkaar vasthouden - symbolisch voor mantelzorg" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Ruimte in de regels</h3>
            <p className="text-muted-foreground mb-4">
              De wet biedt relatief veel ruimte voor mantelzorgwoningen, omdat het doel duidelijk is: iemand veilig en waardig laten wonen, dicht bij de mantelzorger. Daarom:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-4">
              <li>kan een mantelzorgwoning onder voorwaarden vaak zonder uitgebreide vergunning worden geplaatst;</li>
              <li>gelden er wel regels voor omvang, plaatsing op het erf en gebruik.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Wat als de mantelzorg stopt?</h3>
            <p className="text-muted-foreground mb-4">
              Dit punt wordt vaak onderschat. Het is belangrijk om vooraf duidelijk te hebben:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
              <li>Mag de woning blijven staan?</li>
              <li>Zo ja: mag hij dan nog als woonruimte worden gebruikt, of alleen als berging/atelier?</li>
              <li>Is er een verplichting om de functie of het gebruik aan te passen?</li>
            </ul>
            <p className="text-muted-foreground font-medium">
              Zorg dat je hierover schriftelijke bevestiging hebt van de gemeente (mail, brief of onderdeel van de vergunning). Dat voorkomt discussies achteraf.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Tiny Community */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img src={tinyCommunityImage} alt="Overzicht van een tiny house community met meerdere tiny houses op een veld" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Section 6: Concreet betekent */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Wat betekent dit allemaal concreet voor jouw plan?</h2>
            <p className="text-muted-foreground mb-6">
              De wet kijkt minder naar de hype rond tiny houses en meer naar een paar nuchtere vragen:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Wat is de functie?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Hoofdwoning</li>
                    <li>Familiewoning op eigen erf</li>
                    <li>Mantelzorgwoning</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Waar komt het te staan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Op grond met woonbestemming</li>
                    <li>Op een erf bij een bestaande woning</li>
                    <li>In een gebied met een andere bestemming</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Wie gaat er wonen?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Het gezin zelf</li>
                    <li>Ouders/kinderen</li>
                    <li>Iemand met een zorgindicatie</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is het tijdelijk of vast?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Bedoeld als tijdelijke oplossing of als vaste woonplek?
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground mt-6">
              Zodra je dit duidelijk hebt, kun je met de gemeente gericht in gesprek: je stelt dan niet meer de vraag "Mag een tiny house?", 
              maar <strong>"Mag in deze situatie een extra woning / bijgebouw / mantelzorgwoning?"</strong>.
            </p>
          </div>
        </div>
      </section>
    </>;
};
export default LawSections;