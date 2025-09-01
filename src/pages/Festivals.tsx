import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Festival {
  id: string;
  title: string;
  location: string;
  typicalMonth: string;
  duration: string;
  description: string;
  significance: string;
  howToAttend: string;
  imageUrl: string;
  highlights: string[];
  bestViewingSpots: string[];
  relatedTours: string[];
}

const Festivals = () => {
  const festivals: Festival[] = [
    {
      id: 'Thimphu-Tshechu',
      title: 'Thimphu Tsechu',
      location: 'Tashichho Dzong, Thimphu',
      typicalMonth: 'September/October (Autumn)',
      duration: '3 days',
      description: 'The most popular religious festival in Bhutan, attracting thousands of locals and visitors to witness sacred Cham dances performed by monks and laymen in vibrant costumes and masks.',
      significance: 'Instituted by the 4th Desi, Gyalse Tenzin Rabgye, in 1670 to honor Guru Rinpoche (Padmasambhava). The Cham dances depict Buddhist teachings and stories, believed to purify sins, protect from misfortunes, and bring blessings to all attendees. The festival also reinforces Bhutanese cultural identity and devotion.',
      howToAttend: 'No tickets required. Arrive early to secure space in the courtyard or upper galleries. Dress modestly in traditional or respectful attire. Photography is generally allowed but may be restricted during sacred moments.',
      imageUrl: new URL('../assets/ThimphuTshechu.jpg', import.meta.url).href,
      highlights: [
        'Mask and Cham dance performances by monks and laymen',
        'Blessing ceremonies by senior monks',
        'Display of Bhutanese traditional dress and ornaments',
        'Local food stalls and vibrant social gathering',
        'Cultural performances alongside religious events'
      ],
      bestViewingSpots: [
        'Main courtyard of Tashichho Dzong',
        'Upper galleries for elevated views (arrive very early)',
        'Designated local viewing areas around the dzong'
      ],
      relatedTours: [
        'Thimphu Cultural Experience',
        'Bhutan Festival Tour — Thimphu & Beyond',
        'Dochula & Punakha Extension'
      ]
    },
    {
      id: 'Paro-Tshechu',
      title: 'Paro Tsechu',
      location: 'Rinpung Dzong, Paro',
      typicalMonth: 'March/April (Spring)',
      duration: '5 days',
      description: 'One of Bhutan’s most famous and spectacular religious festivals, drawing large crowds of locals and visitors to witness sacred Cham dances and religious rituals.',
      significance: 'Paro Tsechu was introduced by Zhabdrung Ngawang Namgyal and later institutionalized by the first Je Khenpo, Ngawang Chhogyal, in the 17th century. The festival commemorates Guru Rinpoche (Padmasambhava), who brought Buddhism to Bhutan. The unfurling of the giant Thongdrel (religious scroll) is the highlight, believed to cleanse the sins of all who see it.',
      howToAttend: 'Free for all attendees. Arrive early, especially on the final day for the Thongdrel unveiling. Dress respectfully in traditional or modest attire. Photography is generally permitted but restricted during specific sacred rituals.',
      imageUrl: new URL('../assets/ParoTshechu.jpg', import.meta.url).href,
      highlights: [
        'Sacred Cham mask dances performed by monks',
        'Atsara (clown) antics and blessings',
        'Unfurling of the giant Thongdrel on the last day',
        'Folk songs and traditional Bhutanese attire',
        'Local food stalls and handicraft markets'
      ],
      bestViewingSpots: [
        'Courtyard of Rinpung Dzong',
        'Upper balconies for panoramic views',
        'Designated public seating areas'
      ],
      relatedTours: [
        'Classical Bhutan — Paro to Thimphu',
        'Tiger’s Nest & Mountain Trails',
        'Bhutan Festival Highlights Tour'
      ]
    },
    {
      id: 'Haa-Summer-Festival',
      title: 'Haa Summer Festival',
      location: 'Haa Valley, Haa',
      typicalMonth: 'July (Summer)',
      duration: '2 days',
      description: 'A vibrant celebration of Bhutanese nomadic culture in the pristine Haa Valley. The festival showcases the unique lifestyle, traditions, and hospitality of the semi‑nomadic herders of Haa.',
      significance: 'The Haa Summer Festival highlights the harmony between people, livestock, and nature in one of Bhutan’s most unspoiled regions. It preserves the semi‑nomadic traditions of yak herders while promoting cultural exchange and tourism. The festival is also a showcase of Bhutanese resilience and community spirit.',
      howToAttend: 'Open to all visitors. Best experienced with a local guide who can explain the cultural significance. Arrive early to enjoy traditional sports, local cuisine, and cultural performances. Homestay experiences in Haa Valley are highly recommended.',
      imageUrl: new URL('../assets/HaaSummerFestival.jpg', import.meta.url).href,
      highlights: [
        'Traditional sports such as archery and khuru (dart game)',
        'Yak riding and yak herding demonstrations',
        'Cultural performances including folk songs and dances',
        'Traditional Bhutanese cuisine and Ara (local liquor) tasting',
        'Handicraft displays and local market stalls'
      ],
      bestViewingSpots: [
        'Festival ground in Haa Valley',
        'Nearby ridges overlooking the valley',
        'Designated cultural performance areas'
      ],
      relatedTours: [
        'Haa Valley & Western Bhutan Discovery',
        'Cultural Journey through Thimphu, Paro & Haa'
      ]
    },
    {
      id: 'Jomolhari-Mountain-Festival',
      title: 'Jomolhari Mountain Festival',
      location: 'Base of Mount Jomolhari, Thimphu/Paro border region',
      typicalMonth: 'October (Autumn)',
      duration: '2 days',
      description: 'A community‑based eco‑festival held at the foot of the sacred Mount Jomolhari. It celebrates the culture of highland communities and raises awareness about the conservation of the endangered snow leopard.',
      significance: 'The festival highlights the unique traditions of Bhutan’s highland communities living near Mount Jomolhari. It promotes harmony between people and nature, particularly focusing on snow leopard conservation. By blending cultural celebration with environmental advocacy, the festival embodies Bhutan’s values of cultural preservation and environmental stewardship.',
      howToAttend: 'Reaching the festival involves a trek (usually 2 days from Shana in Paro). Best suited for trekkers and adventurers who want to combine cultural immersion with a high‑altitude experience. Guided tours are highly recommended.',
      imageUrl: new URL('../assets/JomolhariMountainFestival.jpg', import.meta.url).href,
      highlights: [
        'Snow leopard conservation awareness programs',
        'Traditional folk dances and songs by highland communities',
        'Exhibitions of yak products and local crafts',
        'Highland sports and games',
        'Spectacular views of Mount Jomolhari'
      ],
      bestViewingSpots: [
        'Festival ground at Jangothang (Jomolhari Base Camp)',
        'Nearby ridges overlooking Mount Jomolhari',
        'Designated cultural performance areas'
      ],
      relatedTours: [
        'Jomolhari Trek & Mountain Festival',
        'Snow Leopard Conservation Trek',
        'Paro & Highland Adventures'
      ]
    },
    {
      id: 'Matsutake-Festival',
      title: 'Matsutake Festival',
      location: 'Ura Valley, Bumthang',
      typicalMonth: 'August (Summer)',
      duration: '2 days',
      description: 'A unique festival dedicated to the prized wild Matsutake mushroom. It celebrates the harmony between people and nature through food, culture, and local traditions in the scenic Ura Valley.',
      significance: 'The Matsutake Festival promotes sustainable harvesting of the valuable mushroom while supporting local livelihoods. It also showcases Bumthang’s rich culture, cuisine, and traditions. The festival connects conservation with community‑based tourism, benefiting both locals and visitors.',
      howToAttend: 'Open to all visitors. Best experienced with a local guide who can explain the cultural significance and arrange homestays in Ura Valley. Arrive early to enjoy mushroom foraging, cooking demonstrations, and cultural performances.',
      imageUrl: new URL('../assets/MatsutakeFestival.jpg', import.meta.url).href,
      highlights: [
        'Matsutake mushroom foraging trips',
        'Traditional Bhutanese cooking demonstrations',
        'Folk songs and mask dances',
        'Local markets with mushroom dishes and crafts',
        'Scenic beauty of Ura Valley'
      ],
      bestViewingSpots: [
        'Festival grounds in Ura Valley',
        'Surrounding forests during mushroom foraging',
        'Designated cultural performance areas'
      ],
      relatedTours: [
        'Bumthang Cultural Journey',
        'Matsutake Mushroom & Nature Experience',
        'Central Bhutan Discovery Tour'
      ]
    },
    {
      id: 'black‑necked‑crane‑festival',
      title: 'Black‑Necked Crane Festival',
      location: 'Gangtey Monastery, Phobjikha Valley',
      typicalMonth: 'November (Autumn)',
      duration: '1 day',
      description: 'A vibrant festival dedicated to the endangered black‑necked cranes that migrate to Bhutan each winter. The festival combines conservation awareness with cultural performances, attracting locals, monks, and visitors alike.',
      significance: 'The festival raises awareness about the importance of protecting the black‑necked cranes, which are considered sacred in Bhutanese culture. It fosters harmony between conservation and community livelihoods, while also offering blessings for a good harvest and well‑being.',
      howToAttend: 'The festival is open to all visitors and usually held on November 11th, coinciding with Bhutan’s National Day. Arrive early to secure a good spot in the courtyard of Gangtey Monastery. Guided tours are recommended for deeper cultural and ecological insight.',
      imageUrl: new URL('../assets/blackneckedcranefestival.jpg', import.meta.url).href,
      highlights: [
        'Cultural dances by local schoolchildren, including the famous crane dance',
        'Mask dances performed by monks',
        'Environmental conservation skits',
        'Community songs and folk dances',
        'Scenic views of Phobjikha Valley with cranes in the background'
      ],
      bestViewingSpots: [
        'Gangtey Monastery courtyard',
        'Surrounding terraces overlooking the valley',
        'Designated areas near the festival stage'
      ],
      relatedTours: [
        'Phobjikha Valley & Black‑Necked Crane Experience',
        'Cultural Tour of Western Bhutan',
        'Nature & Wildlife Tour of Bhutan'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bhutanese Festivals</h1>
          <p className="text-xl text-primary-foreground/90">
            Experience the spiritual heart of Bhutan through its sacred celebrations and cultural festivals
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bhutanese festivals, known as Tsechus, are the most vibrant expressions of the kingdom's spiritual and cultural heritage. 
            These sacred celebrations offer visitors a unique window into the soul of Bhutan, where ancient traditions come alive 
            through masked dances, colorful ceremonies, and community gatherings.
          </p>
        </section>

        {/* Festivals List */}
        <div className="space-y-12">
          {festivals.map((festival, index) => (
            <Card key={festival.id} className="card-elevated overflow-hidden">
              <div className={`grid lg-grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={festival.imageUrl}
                    alt={festival.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-accent text-accent-foreground mb-2">
                      {festival.typicalMonth}
                    </Badge>
                    <h3 className="text-xl font-bold">{festival.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{festival.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{festival.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{festival.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Cultural Significance</h4>
                      <p className="text-sm text-muted-foreground">{festival.significance}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Festival Highlights</h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {festival.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">How to Attend</h4>
                      <p className="text-sm text-muted-foreground">{festival.howToAttend}</p>
                    </div>

                    {festival.relatedTours.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Related Tours</h4>
                        <div className="space-y-1">
                          {festival.relatedTours.map((tour, idx) => (
                            <Button key={idx} variant="outline" size="sm" className="mr-2 mb-1">
                              {tour}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <section className="mt-16">
          <Card className="bg-accent/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Important Festival Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Festival Dates</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Festival dates are based on the lunar calendar and change each year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Always verify exact dates before planning your visit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Book accommodations well in advance during festival seasons</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Respectful Participation</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Dress modestly and remove hats during ceremonies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Photography restrictions may apply during sacred dances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Maintain quiet and respectful behavior during religious ceremonies</span>
                    </li>
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
              <h2 className="text-2xl font-semibold text-primary mb-4">Experience Bhutan's Sacred Festivals</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us for an authentic cultural immersion. Our local guides provide deep insights into the 
                spiritual significance and cultural context of these sacred celebrations.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact#enquiry">Plan Your Festival Journey</Link> 
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Festivals;
