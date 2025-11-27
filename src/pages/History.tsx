import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp, ChevronDown, Calendar } from "lucide-react";

const History = () => {
  const achievements = [
    {
      icon: Award,
      title: "District Awards 2025",
      description: "3rd Prize in Literacy and 2nd Prize in Thalassemia Awareness & Detection",
    },
    {
      icon: Users,
      title: "21 Charter Members",
      description: "Started with a strong foundation of dedicated members",
    },
    {
      icon: Heart,
      title: "14+ Major Projects",
      description: "Maximum service projects executed in RY 2024-2025",
    },
    {
      icon: TrendingUp,
      title: "Growing Impact",
      description: "Continuous expansion of service initiatives and community reach",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h1>
          <p className="text-xl text-primary-foreground/90">
            History of the Rotary Club of Calcutta New Horizons (Club No. 223497)
          </p>
        </div>
      </section>

      {/* Club Founding */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Card className="mb-16 shadow-2xl border-none bg-gradient-to-br from-white to-secondary/20 backdrop-blur animate-fade-in-up">
            <CardContent className="pt-10 pb-8 px-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-1 w-20 bg-accent rounded"></div>
                <h2 className="text-4xl font-bold text-primary mx-4 text-center">
                  Our Beginning
                </h2>
                <div className="h-1 w-20 bg-accent rounded"></div>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto text-lg">
                <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  The Rotary Club of Calcutta New Horizons was chartered on <strong className="text-primary">28th January 2022</strong>, with <strong className="text-primary">21 members</strong> and <strong className="text-primary">Rtn Luv Agarwal</strong> as the first Charter President.
                </p>
                <div className="animate-fade-in-up bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 p-6 rounded-2xl border-2 border-accent/30 shadow-lg my-6" style={{ animationDelay: '0.3s' }}>
                  <p className="text-primary font-bold text-xl mb-3 flex items-center justify-center gap-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    Remarkable Growth Milestone
                  </p>
                  <p className="text-foreground font-semibold">
                    Membership increased from <strong className="text-accent">21 to 52 members within just 2 months</strong>, creating a sensation across District 3291!
                  </p>
                </div>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  The club was recognized as a leading club in District 3291, confirmed by District Governor Rtn. Prabir Chatterjee, District Administrator, and Regional Public Image Coordinator (RPIC) & Club Advisor Rtn. Anand Kumar Sharma.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="h-1 w-16 bg-accent rounded"></div>
              <h2 className="text-4xl font-bold text-primary mx-4 text-center">
                Key Achievements
              </h2>
              <div className="h-1 w-16 bg-accent rounded"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="group shadow-lg hover:shadow-2xl transition-all duration-500 border-none bg-white hover:scale-105 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:rotate-12">
                        <achievement.icon className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-primary">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Timeline History */}
      <section className="py-20 bg-gradient-to-b from-secondary to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex items-center justify-center mb-16">
            <div className="h-1 w-20 bg-accent rounded"></div>
            <h2 className="text-4xl font-bold text-primary mx-4 text-center">
              Our Journey Through Time
            </h2>
            <div className="h-1 w-20 bg-accent rounded"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-primary to-accent hidden md:block rounded-full shadow-lg"></div>

            {/* Timeline Item 1: Charter Year 2022-2023 */}
            <div className="relative mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-accent hover:scale-[1.02] hover:-translate-y-1">
                    <div className="flex items-center justify-end gap-2 mb-4">
                      <div className="bg-accent/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Calendar className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-bold text-accent text-xl">2022-2023</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">The Beginning</h3>
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                      <p className="hover:text-foreground transition-colors">
                        <strong className="text-primary">Rtn Luv Agarwal</strong> chartered the club on <strong className="text-primary">28th January 2022</strong> with <strong className="text-primary">21 members</strong> as the first Charter President.
                      </p>
                      <p className="hover:text-foreground transition-colors">
                        The club movement grew to 52 members and was recognized as a leading club in District 3291.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full border-4 border-white shadow-xl hidden md:block pulse-ring" style={{ left: '-50px' }}></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-accent/50 bg-gradient-to-br from-accent/10 to-primary/10 p-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img 
                          src="/history/Our Club Journey.pdf-image-000.jpg" 
                          alt="Rtn Luv Agarwal"
                          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover border-4 border-white transition-transform duration-500 group-hover:scale-110 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 md:hidden">
                <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
              </div>
            </div>

            {/* Timeline Item 2: RY 2023-2024 */}
            <div className="relative mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 md:text-left md:pl-12">
                  <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border-r-4 border-primary hover:scale-[1.02] hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-bold text-primary text-xl">2023-2024</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Resilience & Rebuilding</h3>
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                      <p className="hover:text-foreground transition-colors">
                        The club faced a huge turmoil as <strong className="text-primary">Rtn Luv Agarwal</strong> left the club along with 44 members. <strong className="text-primary">Rtn Raja Satyajit Banerjee</strong> became the next Club President.
                      </p>
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border-2 border-orange-200 my-3">
                        <p className="hover:text-foreground transition-colors font-semibold text-orange-900">
                          On <strong className="text-primary">1st July 2023</strong>, membership dropped to just <strong className="text-red-600">6 members</strong> – the most challenging phase in our club's history.
                        </p>
                      </div>
                      <p className="hover:text-foreground transition-colors">
                        Despite the challenges, the club showed remarkable resilience and gradually inducted new members, rebuilding our foundation.
                      </p>
                      <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-xl mt-4 border border-accent/20 group-hover:border-accent/40 transition-colors">
                        <p className="font-semibold text-primary flex items-center gap-2">
                          <Heart className="h-4 w-4 text-accent" />
                          Major Project:
                        </p>
                        <p className="mt-1"><strong className="text-accent">Jeevanam</strong> – Rehabilitation home for Drug Warriors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12 flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute right-0 transform translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-xl hidden md:block pulse-ring" style={{ right: '-50px' }}></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/50 bg-gradient-to-br from-primary/10 to-accent/10 p-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img 
                          src="/history/Our Club Journey.pdf-image-001.jpg" 
                          alt="Rtn Raja Satyajit Banerjee"
                          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover border-4 border-white transition-transform duration-500 group-hover:scale-110 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 md:hidden">
                <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
              </div>
            </div>

            {/* Timeline Item 3: RY 2024-2025 */}
            <div className="relative mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-accent hover:scale-[1.02] hover:-translate-y-1">
                    <div className="flex items-center justify-end gap-2 mb-4">
                      <div className="bg-accent/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Calendar className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-bold text-accent text-xl">2024-2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Maximum Impact Year</h3>
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                      <p className="hover:text-foreground transition-colors">
                        <strong className="text-primary">Rtn Avik Chatterjee</strong> took over as Club President and executed the maximum number of service projects (<strong className="text-accent">14 Projects</strong>).
                      </p>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-300 my-3">
                        <p className="text-foreground font-semibold flex items-center gap-2">
                          <Users className="h-5 w-5 text-green-600" />
                          <span>Membership Recovery: Growing strong with <strong className="text-green-700">15 dedicated members</strong>, demonstrating our resilience and commitment to service.</span>
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 rounded-xl border border-accent/20 group-hover:border-accent/40 transition-colors">
                        <p className="font-semibold text-primary flex items-center gap-2">
                          <Heart className="h-4 w-4 text-accent" />
                          Flagship Project:
                        </p>
                        <p className="mt-1"><strong className="text-accent">Swastha Sudha-I</strong> – Weekly free pathological testing camps</p>
                      </div>
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors">
                        <p className="font-semibold text-primary mb-2">Key Projects Executed:</p>
                        <ul className="text-xs space-y-1.5">
                          <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                            <span className="text-accent mt-0.5">▸</span>
                            Computer Desktops to Eastern Metropolitan Academy
                          </li>
                          <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                            <span className="text-accent mt-0.5">▸</span>
                            Water filters to Haltu High School & Galashia Sevak Sangha
                          </li>
                          <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                            <span className="text-accent mt-0.5">▸</span>
                            Happy School project in Jhargram, West Bengal
                          </li>
                          <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                            <span className="text-accent mt-0.5">▸</span>
                            Seminar on reading books at Dakshin Kolkata Book Fair
                          </li>
                          <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                            <span className="text-accent mt-0.5">▸</span>
                            Mosquito nets, T-shirts & games to Nivarani Smriti Pathshala, Sundarban
                          </li>
                          <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                            <span className="text-accent mt-0.5">▸</span>
                            Blankets & food items for JSSS Foundation, Sagar Islands
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border-l-4 border-yellow-400 shadow-sm">
                        <p className="font-semibold text-primary flex items-center gap-2">
                          <Award className="h-5 w-5 text-yellow-500" />
                          District Awards 2025:
                        </p>
                        <p className="text-xs mt-2 text-amber-900">3rd Prize in Literacy & 2nd Prize in Thalassemia Awareness</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-gradient-to-br from-accent to-yellow-400 rounded-full border-4 border-white shadow-xl hidden md:block pulse-ring" style={{ left: '-50px' }}></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-accent/50 bg-gradient-to-br from-accent/10 to-yellow-400/10 p-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img 
                          src="/history/Our Club Journey.pdf-image-002.jpg" 
                          alt="Rtn Avik Chatterjee"
                          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover border-4 border-white transition-transform duration-500 group-hover:scale-110 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 md:hidden">
                <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
              </div>
            </div>

            {/* Timeline Item 4: RY 2025-2026 */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 md:text-left md:pl-12">
                  <div className="group bg-gradient-to-br from-white via-accent/5 to-primary/5 rounded-2xl shadow-2xl p-8 border-2 border-accent hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full filter blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors">
                          <Calendar className="h-5 w-5 text-accent" />
                        </div>
                        <span className="font-bold text-accent text-xl">2025-2026</span>
                        <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold animate-pulse">Current</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Continuing the Legacy</h3>
                      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p className="hover:text-foreground transition-colors">
                          <strong className="text-primary">Rtn Ranu Gayawer</strong> is the current Club President leading the club forward with vision and dedication.
                        </p>
                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-xl border border-accent/30 group-hover:border-accent/50 transition-colors">
                          <p className="font-semibold text-primary mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-accent" />
                            Current Initiatives (RY 2025-2026):
                          </p>
                          <ul className="text-xs space-y-2">
                            <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                              <span className="text-accent mt-0.5">▸</span>
                              Free Pathology Tests for students of Children's Welfare H. S. School for Girls
                            </li>
                            <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                              <span className="text-accent mt-0.5">▸</span>
                              Free Pathology Tests for needy residents of Phoolbagan Ganesh Temple area
                            </li>
                            <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                              <span className="text-accent mt-0.5">▸</span>
                              Co-funding Ophthalmology Eye Screening Van under Global Grant for Rotary Beldanga Eye Hospital
                            </li>
                            <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                              <span className="text-accent mt-0.5">▸</span>
                              Multiple exciting projects in planning stage
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-xl text-center border-t-2 border-accent">
                          <p className="font-bold text-primary text-lg mb-2">
                            "Service Above Self"
                          </p>
                          <p className="text-xs italic text-muted-foreground">
                            All members actively participate in projects whole-heartedly. The rich legacy moves on!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12 flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute right-0 transform translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-xl hidden md:block pulse-ring animate-pulse" style={{ right: '-50px' }}></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-accent/50 bg-gradient-to-br from-accent/10 to-primary/10 p-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      <div className="absolute inset-0 ring-2 ring-accent/30 rounded-3xl animate-pulse"></div>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img 
                          src="/history/Our Club Journey.pdf-image-003.jpg" 
                          alt="Rtn Ranu Gayawer"
                          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover border-4 border-white transition-transform duration-500 group-hover:scale-110 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default History;
