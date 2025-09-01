import { Heart, Users, Award, Leaf, Mountain, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Karma Tenzin',
      role: 'Founder & CEO',
      image: '/src/assets/logo-lhomon.png', // Placeholder
      description: 'Born in Paro, Karma has over 15 years of experience in sustainable tourism and cultural preservation.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'We believe in genuine connections with local culture, not superficial tourist attractions.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Tourism',
      description: 'Every journey supports local communities and environmental conservation efforts.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our guides are born and raised in Bhutan, sharing stories passed down through generations.'
    },
    {
      icon: Mountain,
      title: 'Respectful Travel',
      description: 'We honor Bhutanese traditions and the principle of Gross National Happiness.'
    }
  ];

  const achievements = [
    '500+ Happy Travelers',
    'Carbon-Neutral Operations',
    'Community Tourism Awards',
    'Local Partnership Network'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lhomon Tours</h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Your trusted local partner for authentic Bhutanese adventures
          </p>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-elevated p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be Bhutan's premier cultural and adventure travel specialist, connecting travelers with the authentic 
                spirit of the Last Shangri-La while preserving its pristine environment and rich traditions for future generations.
              </p>
            </Card>
            
            <Card className="card-elevated p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Create transformative travel experiences that honor Bhutanese culture</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Support local communities through responsible tourism practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Provide exceptional service with genuine Bhutanese hospitality</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every journey we craft
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated text-center p-6 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">What Makes Us Unique</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Born-and-Raised Guides</h3>
              <p className="text-muted-foreground text-sm">
                Our team consists entirely of local Bhutanese who grew up hearing the stories and legends 
                of their homeland, providing insights no outsider could offer.
              </p>
            </Card>
            
            <Card className="card-elevated p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Cultural Sensitivity</h3>
              <p className="text-muted-foreground text-sm">
                We approach every sacred site, local interaction, and cultural experience with deep respect 
                and understanding of Bhutanese customs and beliefs.
              </p>
            </Card>
            
            <Card className="card-elevated p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Mountain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Small Group Focus</h3>
              <p className="text-muted-foreground text-sm">
                We deliberately keep group sizes small (maximum 12 travelers) to ensure personalized 
                attention and minimal environmental impact.
              </p>
            </Card>
          </div>
        </section>

        {/* Team Section */}
{/*         <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate locals dedicated to sharing the beauty and wisdom of Bhutan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-elevated text-center overflow-hidden">
                <div className="h-48 bg-gradient-to-b from-accent/20 to-accent/10 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-xs">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Ready to Discover Bhutan?</h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Let our passionate local team design your perfect Bhutanese adventure. 
                Every journey is crafted with care, respect, and deep cultural understanding.
              </p>
              <Link to="/contact#enquiry">
                <Button size="lg" variant="secondary" asChild>
                  <a>Start Your Journey</a>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
