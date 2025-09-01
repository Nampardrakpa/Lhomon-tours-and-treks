import { ExternalLink, Plane, MapPin, DollarSign, Heart, Shield, Car, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TravelGuide = () => {
  const guideData = [
    {
      title: "Visa & Permits",
      icon: Shield,
      content: "Bhutan requires all visitors (except Indian, Bangladeshi, and Maldivian nationals) to obtain a visa. Most tourists can apply for a visa online through the Tourism Council of Bhutan's official portal. Required documents include a valid passport (minimum 6 months validity), passport photos, and completed application form.",
      links: [
        { text: "Official Visa Information", url: "https://example.com/visa-info" },
        { text: "Tourism Council of Bhutan", url: "https://example.com/tcb-official" }
      ]
    },
    {
      title: "Entry Points",
      icon: MapPin,
      content: "Paro International Airport (PBH) is the only international airport in Bhutan. Land entry is possible through Phuentsholing (border with India) and Gelephu. Most international visitors arrive via Paro Airport with connecting flights from Bangkok, Delhi, Kathmandu, or Kolkata.",
      details: [
        "Paro Airport: Main international gateway",
        "Phuentsholing: Land border with India (West Bengal)",
        "Gelephu: Land border with India (Assam)",
        "Samdrup Jongkhar: Land border with India (Assam)"
      ]
    },
    {
      title: "Sustainable Development Fee",
      icon: DollarSign,
      content: "Bhutan implements a Sustainable Development Fee (SDF) to ensure high-value, low-impact tourism. This fee supports environmental conservation and community development projects.",
      note: "Always check official government sources for current rates, as fees are subject to change."
    }
  ];

  const faqData = [
    {
      question: "Do I need a tour operator to visit Bhutan?",
      answer: "While independent travel has become more accessible recently, most visitors still prefer guided tours for the cultural insights and logistical convenience. Tour operators like Lhomon Tours can arrange permits, accommodations, and local guides."
    },
    {
      question: "What's the best time to visit Bhutan?",
      answer: "Spring (March-May) and autumn (September-November) offer the best weather with clear mountain views. Spring brings rhododendron blooms and festival season, while autumn provides crisp air and excellent visibility of the Himalayas."
    },
    {
      question: "What currency is used in Bhutan?",
      answer: "The Bhutanese Ngultrum (BTN) is the official currency, which is pegged to the Indian Rupee. Indian Rupees are also widely accepted. Credit cards are accepted in major hotels and shops in Thimphu and Paro, but cash is recommended for rural areas."
    },
    {
      question: "Are there altitude considerations?",
      answer: "Yes, most of Bhutan lies at high altitude (2000-4000m). Paro and Thimphu are around 2300m. Allow time for acclimatization and stay hydrated. Consult your doctor about altitude sickness prevention if you have concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Guide to Bhutan</h1>
          <p className="text-xl text-primary-foreground/90">
            Everything you need to know before visiting the Last Shangri-La
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Summary */}
        <section className="mb-12">
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" />
                Quick Planning Summary
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Visa Requirements</h3>
                  <p className="text-sm text-muted-foreground">Online visa application required for most nationalities</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sustainable Development Fee</h3>
                  <p className="text-sm text-muted-foreground">Daily fee supporting conservation and development</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                  <p className="text-sm text-muted-foreground">Spring (Mar-May) and autumn (Sep-Nov)</p>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <a href="/contact">Plan Your Trip</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Sections */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          {guideData.map((section, index) => (
            <Card key={index} className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <section.icon className="h-6 w-6 text-accent" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{section.content}</p>
                
                {section.details && (
                  <ul className="space-y-2 mb-4">
                    {section.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.links && (
                  <div className="space-y-2">
                    {section.links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
                
                {section.note && (
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm text-accent-foreground">
                      <strong>Note:</strong> {section.note}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Additional Information Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <Plane className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Airlines</h3>
            <p className="text-sm text-muted-foreground">Druk Air and Bhutan Airlines serve Paro Airport</p>
          </Card>
          
          <Card className="text-center p-6">
            <Car className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Transport</h3>
            <p className="text-sm text-muted-foreground">Private vehicles recommended for comfort and flexibility</p>
          </Card>
          
          <Card className="text-center p-6">
            <Shield className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Health & Safety</h3>
            <p className="text-sm text-muted-foreground">No specific vaccinations required, travel insurance recommended</p>
          </Card>
          
          <Card className="text-center p-6">
            <Calendar className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Festivals</h3>
            <p className="text-sm text-muted-foreground">Plan around major tsechus for cultural experiences</p>
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-semibold text-primary mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Emergency Contacts */}
        <section className="mt-12">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Emergency Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Emergency Numbers</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Police: 113</li>
                    <li>Fire: 110</li>
                    <li>Ambulance: 112</li>
                    <li>Tourist Helpline: +975-2-323251</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lhomon Tours Contact</h3>
                  <ul className="space-y-1 text-sm">
                    <li>24/7 Emergency: +975-XXXX-XXXX</li>
                    <li>Email: emergency@lhomontours.bt</li>
                    <li>Office: +975-2-XXXXXX</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Plan Your Journey?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let our local experts help you navigate the planning process and create your perfect Bhutanese adventure.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Start Planning Your Trip</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TravelGuide;