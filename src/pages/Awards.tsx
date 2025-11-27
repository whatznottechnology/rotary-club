import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { useEffect } from "react";

const Awards = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-scale');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognitions</h1>
          <p className="text-xl text-primary-foreground/90">
            Celebrating our journey of excellence and service
          </p>
        </div>
      </section>

      {/* RY 2021-2023 Section */}
      <section className="py-20 bg-gradient-to-br from-white via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-accent rounded"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">RY: 2021-2023</h2>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-accent rounded"></div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm inline-block px-8 py-4 rounded-2xl shadow-lg border-2 border-accent/20">
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Club President</p>
              <h3 className="text-3xl font-bold text-primary">Rtn. Luv Agarwal</h3>
            </div>
          </div>

          {/* Special Recognition Awards with Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Economic and Community Development */}
            <Card className="scroll-fade-left group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 border-accent hover:border-primary">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-accent/10 via-white to-primary/10">
                <img src="/awards/1.jpg" alt="Economic and Community Development Award" className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  SPECIAL RECOGNITION
                </div>
              </div>
              <CardContent className="p-8 bg-gradient-to-br from-white to-accent/5">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-accent to-accent/80 p-3 rounded-xl shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Special Recognition</h4>
                    <p className="text-muted-foreground leading-relaxed">Economic and Community Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Education & Literacy Support */}
            <Card className="scroll-fade-right group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 border-primary hover:border-accent">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10">
                <img src="/awards/2.jpg" alt="Basic Education & Literacy Support Award" className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  SPECIAL RECOGNITION
                </div>
              </div>
              <CardContent className="p-8 bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-3 rounded-xl shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Special Recognition</h4>
                    <p className="text-muted-foreground leading-relaxed">Basic Education & Literacy Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* EOBO Club - Featured */}
          <div className="mb-12 scroll-scale">
            <Card className="group shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-accent/30 hover:border-accent">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-accent/5 via-white to-primary/5">
                <img src="/awards/3.jpg" alt="EOBO Club Award" className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                  DISTRICT AWARD CEREMONY
                </div>
              </div>
              <CardContent className="p-10 bg-gradient-to-br from-white to-accent/5 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-accent" />
                  <h4 className="text-2xl font-bold text-primary">EOBO Club Recognition</h4>
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground">
                  The Club was recognised in the District Award Ceremony as <strong>EOBO (Each One Bring One) Club</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Recognitions Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Outstanding New Club */}
            <Card className="scroll-fade-in group text-center p-8 bg-gradient-to-br from-accent/10 via-white to-accent/20 border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-br from-accent to-accent/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Outstanding New Club</h4>
              <p className="text-muted-foreground leading-relaxed">
                The Club was awarded in the District Award Ceremony as Outstanding New Club
              </p>
            </Card>

            {/* Gold President */}
            <Card className="scroll-fade-in group text-center p-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 border-2 border-yellow-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Medal className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Gold President</h4>
              <p className="text-muted-foreground leading-relaxed">
                The Club President, <strong>Rtn. Luv Agarwal</strong> was awarded as Gold President
              </p>
            </Card>

            {/* Paul Harris Fellow */}
            <Card className="scroll-fade-in group text-center p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 border-2 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Paul Harris Fellow (PHF)</h4>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Rtn. Luv Agarwal</strong> was recognised as Paul Harris Fellow for his contribution to Rotary Foundation
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* RY 2023-2024 Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-white to-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">RY: 2023-2024</h2>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm inline-block px-8 py-4 rounded-2xl shadow-lg border-2 border-primary/20">
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Club President</p>
              <h3 className="text-3xl font-bold text-primary">Rtn. Raja Satyajit Banerjee</h3>
            </div>
          </div>

          {/* Citation Certificate - Featured */}
          <div className="max-w-4xl mx-auto scroll-scale">
            <Card className="group shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-4 border-primary/20 hover:border-primary/40">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
                <div className="h-[500px] overflow-hidden bg-white flex items-center justify-center p-10">
                  <img 
                    src="/awards/4.png" 
                    alt="Citation Certificate from Rotary International" 
                    className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 shadow-2xl rounded-lg" 
                  />
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary via-accent to-primary text-white px-8 py-3 rounded-full shadow-2xl">
                    <span className="text-sm font-bold tracking-wider">ROTARY INTERNATIONAL</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-10 bg-gradient-to-br from-primary/5 to-white text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-xl shadow-lg">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-primary">Citation Certificate</h4>
                  <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-xl shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  The Club received <strong>Citation Certificate from Rotary International</strong> in recognition of outstanding service and commitment to Rotary's mission
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RY 2024-2025 Section */}
      <section className="py-20 bg-gradient-to-br from-white via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-accent rounded"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">RY: 2024-2025</h2>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-accent rounded"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm inline-block px-8 py-4 rounded-2xl shadow-lg border-2 border-accent/20">
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Club President</p>
              <h3 className="text-3xl font-bold text-primary">Rtn. Avik Chatterjee</h3>
            </div>
          </div>

          {/* Major Awards Grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Thalassemia Award */}
            <Card className="scroll-fade-left group shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-t-4 border-yellow-400 hover:border-yellow-500">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50">
                <img 
                  src="/awards/5.jpg" 
                  alt="Thalassemia Awareness Award" 
                  className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  GROUP A
                </div>
              </div>
              <CardContent className="p-8 bg-gradient-to-br from-yellow-50/50 to-white">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-6 rounded-2xl mb-6 shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Trophy className="h-8 w-8" />
                    <span className="font-bold text-3xl">2ND POSITION</span>
                    <Trophy className="h-8 w-8" />
                  </div>
                  <p className="text-center text-sm font-semibold uppercase tracking-wide">Thalassemia Awareness and Detection</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The Club was adjudged <strong>2nd best in Group A</strong> in the Thalassemia Awareness and Detection category for the <strong>SWASTHA SUDHA project</strong> – Free Pathological Tests once every week at two locations for citizens below poverty level.
                </p>
              </CardContent>
            </Card>

            {/* Literacy Award */}
            <Card className="scroll-fade-right group shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-t-4 border-orange-400 hover:border-orange-500">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
                <img 
                  src="/awards/6.jpg" 
                  alt="Literacy Award" 
                  className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  GROUP A
                </div>
              </div>
              <CardContent className="p-8 bg-gradient-to-br from-orange-50/50 to-white">
                <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white p-6 rounded-2xl mb-6 shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Trophy className="h-8 w-8" />
                    <span className="font-bold text-3xl">3RD POSITION</span>
                    <Trophy className="h-8 w-8" />
                  </div>
                  <p className="text-center text-sm font-semibold uppercase tracking-wide">Literacy (Other than District Project)</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The Club was adjudged <strong>3rd best in Group A</strong> in the Literacy category for the <strong>Gyanankur project</strong> – Initiatives to inculcate the habit of book reading among young generation who are losing the habit due to abundance of eBooks and soft books.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Outstanding President - Hero Section */}
          <div className="scroll-scale mb-16">
            <Card className="group shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-white border-4 border-yellow-300">
              <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 p-1">
                <div className="bg-white p-10">
                  <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-56 h-56 rounded-full overflow-hidden ring-8 ring-yellow-400 group-hover:ring-yellow-500 transition-all duration-500 shadow-2xl">
                          <img 
                            src="/awards/7.jpg" 
                            alt="Rtn. Avik Chatterjee" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
                        <Award className="h-7 w-7" />
                        <span className="font-bold text-xl uppercase tracking-wide">Outstanding President</span>
                        <Award className="h-7 w-7" />
                      </div>
                      
                      <h3 className="text-4xl font-bold text-primary mb-4">RTN. AVIK CHATTERJEE</h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        The Club President, <strong>Rtn. Avik Chatterjee</strong> was adjudged an <strong>Outstanding President</strong> for his eventful tenure in RY: 2024-2025.
                      </p>
                      
                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
                        <Star className="h-6 w-6" />
                        <div className="text-left">
                          <p className="font-bold text-sm">Paul Harris Fellow (PHF)</p>
                          <p className="text-xs opacity-90">Qualified: 18th July, 2025</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mt-4 italic">
                        Recognized for his contribution to Rotary Foundation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Award Certificates with Content */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Thalassemia Award Trophy */}
            <Card className="scroll-fade-left group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 border-yellow-400">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex items-center justify-center p-8">
                <img 
                  src="/awards/8.jpg" 
                  alt="Thalassemia Awareness Trophy" 
                  className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-yellow-50/50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-3 rounded-xl shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Group A: Thalassemia Awareness</h4>
                    <p className="text-sm text-yellow-600 font-semibold">2nd Position Trophy</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Club was adjudged <strong>2nd best in Group A</strong> in the <strong>Thalassemia Awareness and Detection</strong> category for the <strong>SWASTHA SUDHA</strong> initiative - Free Pathological Tests once every week at two locations serving citizens below poverty level.
                </p>
              </CardContent>
            </Card>

            {/* Literacy Award Trophy */}
            <Card className="scroll-fade-right group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 border-orange-400">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-8">
                <img 
                  src="/awards/9.jpg" 
                  alt="Literacy Award Trophy" 
                  className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-orange-50/50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-400 to-red-400 p-3 rounded-xl shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Group A: Literacy Project</h4>
                    <p className="text-sm text-orange-600 font-semibold">3rd Position Trophy</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Club was adjudged <strong>3rd best in Group A</strong> in the <strong>Literacy (Other than District Project)</strong> category for the <strong>Gyanankur project</strong> – Initiatives to inculcate the habit of book reading among young generation who are losing the habit due to abundance of eBooks and soft books.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
