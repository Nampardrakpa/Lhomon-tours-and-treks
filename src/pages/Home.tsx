import { Link } from 'react-router-dom';
import { ArrowRight, Users, Leaf, Settings, Star, Calendar, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-bhutan.jpg';

const Home = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Bhutan Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-hero mb-6 animate-fade-in-up">
            Discover Bhutan — Handcrafted treks & cultural tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Local guides. Sustainable practices. Life-changing journeys.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link to="/contact#enquiry">
              <Button className="btn-hero">
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="btn-secondary" asChild>
              <Link to="#tours-carousel">View Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-16 bg-mountain-mist">
        <div className="max-w-4xl mx-auto text-center px-4">
          <blockquote className="text-2xl md:text-3xl font-light text-primary italic">
            "Walk softly, travel deeply."
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Ancient Bhutanese wisdom</p>
        </div>
      </section>

      {/* Tours Carousel */}
      <section id="tours-carousel" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-primary mb-4">Featured Journeys</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked adventures that showcase the best of Bhutan's natural beauty and cultural heritage
            </p>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/tours">
                View All Tours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Lhomon */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-primary mb-4">Why Choose Lhomon</h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference of authentic, sustainable travel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elevated text-center p-8 group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Local Guides</h3>
              <p className="text-muted-foreground">
                Born and raised in Bhutan, our guides share authentic stories and deep cultural knowledge that only locals can provide.
              </p>
            </Card>
            
            <Card className="card-elevated text-center p-8 group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Sustainable Travel</h3>
              <p className="text-muted-foreground">
                We practice responsible tourism that respects Bhutan's environment and supports local communities through every journey.
              </p>
            </Card>
            
            <Card className="card-elevated text-center p-8 group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Settings className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Customizable Trips</h3>
              <p className="text-muted-foreground">
                Every traveler is unique. We craft personalized itineraries that match your interests, fitness level, and travel dreams.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;