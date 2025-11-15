import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Presidential Citation",
      year: "2023-24",
      organization: "Rotary International",
      description: "For outstanding contribution to humanitarian service and community development.",
      icon: Trophy,
      category: "International"
    },
    {
      title: "District Best Club Award",
      year: "2023",
      organization: "District 3291",
      description: "Recognized as the best performing club in District 3291 for exceptional service projects.",
      icon: Award,
      category: "District"
    },
    {
      title: "Excellence in Youth Service",
      year: "2023",
      organization: "Rotary International",
      description: "For exemplary work in youth development and education initiatives.",
      icon: Star,
      category: "International"
    },
    {
      title: "Community Impact Award",
      year: "2022",
      organization: "Local Government",
      description: "Honored for significant positive impact on local community through various service projects.",
      icon: Medal,
      category: "Local"
    },
    {
      title: "Membership Growth Award",
      year: "2022-23",
      organization: "District 3291",
      description: "For achieving highest membership growth in the district.",
      icon: Trophy,
      category: "District"
    },
    {
      title: "Environmental Excellence",
      year: "2022",
      organization: "Rotary International",
      description: "Recognition for outstanding environmental conservation and sustainability projects.",
      icon: Award,
      category: "International"
    },
    {
      title: "Humanitarian Service Award",
      year: "2021",
      organization: "Rotary District 3291",
      description: "For exceptional humanitarian service during pandemic crisis.",
      icon: Star,
      category: "District"
    },
    {
      title: "Water & Sanitation Award",
      year: "2021",
      organization: "Rotary International",
      description: "For outstanding contribution to clean water and sanitation initiatives.",
      icon: Medal,
      category: "International"
    },
  ];

  const certifications = [
    "Certified Rotary Club - Good Standing (2024)",
    "Paul Harris Fellow - Multiple Members",
    "Major Donor Recognition - Multiple Members",
    "Every Rotarian Every Year (EREY) Achievement",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Achievements</h1>
          <p className="text-xl text-primary-foreground/90">
            Recognition of our dedication to service and excellence
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {awards.map((award, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <award.icon className="h-8 w-8 text-accent" />
                    </div>
                    <Badge variant="outline">{award.category}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2">{award.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{award.year}</Badge>
                    <span className="text-sm text-muted-foreground">{award.organization}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Certifications & Recognition</h2>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="h-2 w-2 bg-accent rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Our Achievement Milestones
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center shadow-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">International Recognition</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Good Standing</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
