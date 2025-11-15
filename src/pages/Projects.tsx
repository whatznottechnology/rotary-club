import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Clean Water Initiative",
      status: "Ongoing",
      description: "Providing clean drinking water access to rural communities through sustainable infrastructure.",
      beneficiaries: "5,000+",
      location: "Rural West Bengal",
      startDate: "Jan 2024",
      category: "Community Service",
    },
    {
      title: "Education for All",
      status: "Completed",
      description: "Distributed educational materials and scholarships to underprivileged students.",
      beneficiaries: "1,200+",
      location: "Kolkata Districts",
      startDate: "Aug 2023",
      category: "Youth Services",
    },
    {
      title: "Healthcare Camp",
      status: "Ongoing",
      description: "Monthly free health checkup camps in underserved areas with medical professionals.",
      beneficiaries: "3,500+",
      location: "Multiple Locations",
      startDate: "Mar 2024",
      category: "Health Services",
    },
    {
      title: "Skill Development Program",
      status: "Ongoing",
      description: "Vocational training programs for youth to enhance employability and entrepreneurship.",
      beneficiaries: "800+",
      location: "Jadavpur, Kolkata",
      startDate: "Feb 2024",
      category: "Vocational Services",
    },
    {
      title: "Tree Plantation Drive",
      status: "Completed",
      description: "Planted over 10,000 trees across the district to combat climate change.",
      beneficiaries: "Community Wide",
      location: "District 3291",
      startDate: "Jun 2023",
      category: "Environment",
    },
    {
      title: "Women Empowerment Initiative",
      status: "Ongoing",
      description: "Supporting women entrepreneurs with microfinance and business training.",
      beneficiaries: "500+",
      location: "West Bengal",
      startDate: "Nov 2023",
      category: "Community Service",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-primary-foreground/90">
            Making a lasting impact through dedicated service projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="font-medium">Beneficiaries:</span> {project.beneficiaries}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="font-medium">Location:</span> {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="font-medium">Started:</span> {project.startDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Through our dedicated projects and community initiatives, we've been able to make a
              significant positive impact in the lives of thousands of people across our region.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">120+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">15,000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
