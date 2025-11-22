import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Heart, Trophy, Calendar, HandHeart, GraduationCap, Globe, Lightbulb, Target, Shield } from "lucide-react";

const Home = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "15+" },
    { icon: Heart, label: "Projects Completed", value: "40+" },
    { icon: Trophy, label: "Awards Won", value: "10+" },
    { icon: Calendar, label: "Years of Service", value: "3+" },
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

  const focusAreas = [
    {
      icon: HandHeart,
      title: "Peace & Conflict Prevention",
      description: "Training to help adults and young leaders prevent and mediate conflict",
    },
    {
      icon: Shield,
      title: "Disease Prevention & Treatment",
      description: "Providing healthcare services and education to communities in need",
    },
    {
      icon: Globe,
      title: "Water & Sanitation",
      description: "Supporting equitable access to clean water and sanitation facilities",
    },
    {
      icon: GraduationCap,
      title: "Basic Education & Literacy",
      description: "Strengthening educational systems and literacy for children and adults",
    },
    {
      icon: Heart,
      title: "Maternal & Child Health",
      description: "Expanding access to quality healthcare for mothers and children",
    },
    {
      icon: Lightbulb,
      title: "Economic Development",
      description: "Creating opportunities for decent and productive work",
    },
  ];

  const upcomingEvents = [
    {
      date: "Dec 15",
      title: "Community Health Camp",
      description: "Free health checkups and medical consultations for underprivileged communities",
    },
    {
      date: "Dec 20",
      title: "Youth Leadership Workshop",
      description: "Empowering young minds with leadership skills and community service values",
    },
    {
      date: "Jan 10",
      title: "Environmental Awareness Drive",
      description: "Tree plantation and awareness campaign on sustainable living",
    },
  ];

  const recentProjects = [
    {
      title: "Digital Literacy Program",
      description: "Trained 500+ students in basic computer skills and digital safety",
      impact: "500+ Students",
    },
    {
      title: "Food Distribution Drive",
      description: "Monthly food distribution to 200+ families in need",
      impact: "200+ Families",
    },
    {
      title: "Clean Water Initiative",
      description: "Installed water purification systems in 5 local schools",
      impact: "5 Schools",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/banner.jpeg)` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ 
            color: '#c4d82e',
            textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
          }}>
            Rotary Club of Calcutta New Horizons
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Service Above Self
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/95">
            Join us in making a positive impact in our community and beyond through fellowship and service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button variant="accent" size="lg" className="px-8 py-6 text-lg">
                Become a Member
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="bg-white/20 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
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
              Welcome to Rotary Club of Calcutta New Horizons
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

      {/* Areas of Focus */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Areas of Focus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As part of Rotary International, we focus on six key areas to create lasting impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <area.icon className="h-10 w-10 text-accent mb-3" />
                  <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Recent Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              See what we've accomplished together
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-primary">{project.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects">
              <Button variant="default" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us in our upcoming initiatives
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 text-center md:text-left">
                      <div className="inline-block bg-accent text-accent-foreground rounded-lg px-4 py-2">
                        <div className="font-bold text-lg">{event.date}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-primary-foreground/90">
                  To provide service to others, promote integrity, and advance world understanding, 
                  goodwill, and peace through our fellowship of business, professional, and community leaders.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-accent-foreground/90">
                  Together, we see a world where people unite and take action to create lasting change 
                  across the globe, in our communities, and in ourselves.
                </p>
              </CardContent>
            </Card>
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
