import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Heart, Trophy, Calendar } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "50+" },
    { icon: Heart, label: "Projects Completed", value: "120+" },
    { icon: Trophy, label: "Awards Won", value: "25+" },
    { icon: Calendar, label: "Years of Service", value: "30+" },
  ];

  const features = [
    {
      title: "Community Service",
      description: "Making a difference through dedicated community service projects",
      icon: Heart,
    },
    {
      title: "Leadership Development",
      description: "Empowering future leaders through mentorship and training",
      icon: Users,
    },
    {
      title: "International Projects",
      description: "Collaborating on global initiatives for lasting impact",
      icon: Trophy,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Service Above Self
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Join us in making a positive impact in our community and beyond through fellowship and service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button variant="accent" size="lg">
                Become a Member
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-primary">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-sm">
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Welcome to Rotary Club
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a community of professionals committed to service above self. Through fellowship,
              leadership, and humanitarian service, we work together to create lasting change in our
              community and around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join our community of dedicated individuals committed to serving others and making the world a better place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button variant="accent" size="lg">
                Join Our Club
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-primary">
                Support Our Cause
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
