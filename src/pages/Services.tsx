import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, BookOpen, Briefcase, Handshake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Community Service",
      description: "Local projects that address community needs including food drives, shelter support, and neighborhood improvement initiatives.",
      activities: [
        "Monthly food distribution drives",
        "Blood donation camps",
        "Community cleanup programs",
        "Support for local shelters"
      ]
    },
    {
      icon: BookOpen,
      title: "Youth Services",
      description: "Empowering the next generation through education, mentorship, and leadership development programs.",
      activities: [
        "Scholarship programs",
        "Interact Club sponsorship",
        "Career guidance workshops",
        "Educational material distribution"
      ]
    },
    {
      icon: Globe,
      title: "International Service",
      description: "Global humanitarian projects addressing critical needs around the world in partnership with Rotary International.",
      activities: [
        "Polio eradication support",
        "Clean water projects",
        "International disaster relief",
        "Global health initiatives"
      ]
    },
    {
      icon: Briefcase,
      title: "Vocational Service",
      description: "Promoting integrity and high ethical standards in business and professions while serving community needs.",
      activities: [
        "Skills training workshops",
        "Entrepreneurship programs",
        "Business mentorship",
        "Job placement assistance"
      ]
    },
    {
      icon: Users,
      title: "Fellowship Activities",
      description: "Building lasting friendships through social events and activities that strengthen our club community.",
      activities: [
        "Weekly club meetings",
        "Annual fellowship dinners",
        "Cultural programs",
        "Family events"
      ]
    },
    {
      icon: Handshake,
      title: "Disaster Relief",
      description: "Rapid response and support during natural disasters and emergencies in our region and beyond.",
      activities: [
        "Emergency relief distribution",
        "Rehabilitation support",
        "Coordination with local authorities",
        "Long-term recovery assistance"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Club Services</h1>
          <p className="text-xl text-primary-foreground/90">
            Serving our community through diverse initiatives and programs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">Key Activities:</h4>
                    <ul className="space-y-1">
                      {service.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Get Involved in Our Services
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you want to volunteer, participate in our programs, or support our initiatives,
            there are many ways to get involved and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8">
                Join as Member
              </button>
            </a>
            <a href="/donate">
              <button className="border border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8">
                Support Our Work
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
