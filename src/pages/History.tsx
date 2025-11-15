import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl text-primary-foreground/90">
            A legacy of service and fellowship spanning decades
          </p>
        </div>
      </section>

      {/* History Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-8 shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                History of Rotary International
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our 1.2-million-member organization started with the vision of one man - Paul P. Harris.
                  The Chicago attorney formed one of the world's first service organizations, the Rotary Club
                  of Chicago, on 23 February 1905 as a place where professionals with diverse backgrounds
                  could exchange ideas and form meaningful, lifelong friendships.
                </p>
                <p>
                  Rotary's name came from the group's early practice of rotating meetings among the offices
                  of each member. On 23 February 1905, Paul Harris, Gustavus Loehr, Silvester Schiele, and
                  Hiram Shorey gathered at Loehr's office in Room 711 of the Unity Building in downtown Chicago.
                  This was the first Rotary club meeting.
                </p>
                <p>
                  Within five years clubs had formed across the country, from San Francisco to New York. In
                  August 1910, Rotarians held their first convention in Chicago. The 16 clubs that existed at
                  that time united to form the National Association of Rotary Clubs.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Rotary District 3291
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Rotary District 3291, encompassing areas within West Bengal and the Andaman & Nicobar Islands,
                  has a rich and intertwined history with the larger evolution of Rotary in the Indian subcontinent.
                </p>
                <p>
                  Rotary clubs in India, Burma, Ceylon, Malaysia, Java, and Siam were initially grouped as the
                  "IBCMJS" area. This evolved into Provisional District 'A' for India, Burma, and Ceylon, and
                  later became Rotary District No. 89 in 1936 with 16 clubs.
                </p>
                <p>
                  The district underwent several renumbering and reorganizations over the years, eventually
                  becoming District 3290 in 1990, which included specific revenue districts of West Bengal,
                  Andaman & Nicobar Islands, and Nepal. In 2008, a redistricting separated Nepal (forming
                  District 3292) and established District 3291 with the aforementioned areas in West Bengal
                  and the Andaman & Nicobar Islands.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Our Club's Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our club has been a pillar of service in the community for over three decades. Founded with
                  the core principles of fellowship and service, we have grown from a small group of dedicated
                  individuals to a thriving organization making a real difference.
                </p>
                <p>
                  Throughout our history, we have remained committed to Rotary's motto: "Service Above Self."
                  Our members have worked tirelessly on projects ranging from local community initiatives to
                  international humanitarian efforts, always guided by the principle of making the world a
                  better place.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide service to others, promote integrity, and advance world understanding,
                  goodwill, and peace through our fellowship of business, professional, and community
                  leaders.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  Together, we see a world where people unite and take action to create lasting change
                  across the globe, in our communities, and in ourselves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
