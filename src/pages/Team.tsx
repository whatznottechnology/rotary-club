import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";

const Team = () => {
  const leaders = [
    {
      name: "John Smith",
      role: "Club President",
      initials: "JS",
      email: "john.smith@rotary.org",
      phone: "+91 98765 43210",
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      initials: "SJ",
      email: "sarah.j@rotary.org",
      phone: "+91 98765 43211",
    },
    {
      name: "Michael Brown",
      role: "Secretary",
      initials: "MB",
      email: "michael.b@rotary.org",
      phone: "+91 98765 43212",
    },
    {
      name: "Emily Davis",
      role: "Treasurer",
      initials: "ED",
      email: "emily.d@rotary.org",
      phone: "+91 98765 43213",
    },
  ];

  const members = [
    { name: "David Wilson", role: "Community Service Director", initials: "DW" },
    { name: "Lisa Anderson", role: "Membership Chair", initials: "LA" },
    { name: "Robert Taylor", role: "Foundation Chair", initials: "RT" },
    { name: "Jennifer Martinez", role: "Public Relations Chair", initials: "JM" },
    { name: "William Garcia", role: "Youth Services Chair", initials: "WG" },
    { name: "Mary Rodriguez", role: "International Services Chair", initials: "MR" },
    { name: "James Lee", role: "Vocational Services Chair", initials: "JL" },
    { name: "Patricia White", role: "Club Administration Chair", initials: "PW" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-primary-foreground/90">
            Meet the dedicated individuals leading our mission
          </p>
        </div>
      </section>

      {/* Club Leaders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Club Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {leaders.map((leader, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4 bg-primary text-primary-foreground text-2xl">
                    <AvatarFallback>{leader.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-accent font-medium mb-4">{leader.role}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{leader.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{leader.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Board Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4 bg-secondary text-secondary-foreground text-xl">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for passionate individuals who want to make a difference in the community.
            Become part of our dedicated team and help us create positive change.
          </p>
          <a href="/join">
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8">
              Apply for Membership
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
