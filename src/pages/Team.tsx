import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const leaders = [
    {
      name: "Rtn. Priyabrata Sikdar",
      role: "Club Treasurer",
      email: "priyabrata.sikdar@gmail.com",
      phone: "+91 9830483156",
      image: "/team/Club Leadership.pdf-image-000.jpg", // Top left - Treasurer
    },
    {
      name: "Rtn. Jyoti Banerjee",
      role: "Club Secretary",
      email: "jotibanerjee@gmail.com",
      phone: "+91 9830802002",
      image: "/team/Club Leadership.pdf-image-001.jpg", // Top middle - Secretary
    },
    {
      name: "Rtn. Avik Chatterjee",
      role: "IPP & Vice President",
      email: "avikchatterjee05@gmail.com",
      phone: "+91 9830030104",
      image: "/team/Club Leadership.pdf-image-002.png", // Top right - IPP & VP
    },
    {
      name: "Rtn. Ranu Gayawer",
      role: "Club President",
      email: "gayawer@gmail.com",
      phone: "+91 9903737190",
      image: "/team/Club Leadership.pdf-image-004.jpg", // Bottom center - President
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h1>
          <p className="text-xl text-primary-foreground/90">
            Club Leadership for RY: 2025-2026
          </p>
        </div>
      </section>

      {/* Club Leaders */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-12">
            <div className="h-1 w-20 bg-accent rounded"></div>
            <h2 className="text-4xl font-bold text-primary mx-4 text-center">
              Leadership Team
            </h2>
            <div className="h-1 w-20 bg-accent rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {leaders.map((leader, index) => (
              <Card 
                key={index} 
                className="group text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-none bg-white hover:scale-105 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Image Container */}
                    <div className="mb-6 relative">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-accent transition-all duration-300 bg-gradient-to-br from-accent/10 to-primary/10 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      {/* Role Badge */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
                        {leader.role.includes('President') && index === 0 ? 'President' : 
                         leader.role.includes('Secretary') ? 'Secretary' : 
                         leader.role.includes('Vice President') ? 'IPP & VP' : 'Treasurer'}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition-colors mt-4">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">
                      {leader.role}
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-3 text-sm">
                      <a 
                        href={`mailto:${leader.email}`}
                        className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors group/email"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg group-hover/email:bg-primary/20 transition-colors">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs break-all">{leader.email}</span>
                      </a>
                      <a 
                        href={`tel:${leader.phone}`}
                        className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors group/phone"
                      >
                        <div className="bg-accent/10 p-2 rounded-lg group-hover/phone:bg-accent/20 transition-colors">
                          <Phone className="h-4 w-4 text-accent" />
                        </div>
                        <span className="font-mono">{leader.phone}</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-16">
            <div className="h-1 w-20 bg-primary rounded"></div>
            <h2 className="text-4xl font-bold text-primary mx-4 text-center">
              Our Members
            </h2>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Row 1: Ranu, Priyabrata, Tariq */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Rtn. Ranu Gayawer */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-accent">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-000.jpg" alt="Rtn. Ranu Gayawer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Ranu Gayawer</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 11305733</span>
                      <span>•</span>
                      <span className="font-mono">9903737190</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    With over 25 years of professional experience, including 24 years in the Indian tile industry, he has the privilege of working across diverse and rich territories in India, partnering with some of the leading players in the industry. His career has been driven by a strong growth orientation, consistently delivering results that exceed industry benchmarks.
                  </p>
                  <div className="bg-accent/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2021-2023 - Chair RCC</p>
                    <p>RY: 2023-2024 - Chair Membership & President Nominee</p>
                    <p>RY: 2024-2025 - Chair Membership & President Elect</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Club President</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: January, 2022 (Charter Member)</p>
                </CardContent>
              </Card>

              {/* Rtn. Priyabrata Sikdar */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-primary">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-001.jpg" alt="Rtn. Priyabrata Sikdar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Priyabrata Sikdar</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 11351613</span>
                      <span>•</span>
                      <span className="font-mono">9830483156</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    It's quite a bit of a challenge to think yourself as an entrepreneur at the early age of your career. His first association was in the education sector - founder of GATE coaching institute EnterX in 2009 which merged with The GATE Academy. The next venture is Kabuliwala, the Biryani brand. Being a founder member, in little more than four years, Kabuliwala achieved a handful number of loyal food lovers.
                  </p>
                  <div className="bg-primary/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2021-2023 - Vice President</p>
                    <p>RY: 2023-2024 - Chair Service Project & Vice President</p>
                    <p>RY: 2024-2025 - Club Executive Secretary & Treasurer</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Treasurer</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: January, 2022 (Charter Member)</p>
                </CardContent>
              </Card>

              {/* Rtn. Tariq Hussain */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-accent">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-002.png" alt="Rtn. Tariq Hussain" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Tariq Hussain</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 11351112</span>
                      <span>•</span>
                      <span className="font-mono">9831348033</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    He was one of the other founder members of Kabuliwala, a biryani start-up that delivers from noon to midnight in Rajarhat, New Town and Salt Lake. Their tagline? Sinful Biryani!
                  </p>
                  <div className="bg-accent/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2021-2023 - Chair Foundation</p>
                    <p>RY: 2023-2024 - Treasurer</p>
                    <p>RY: 2024-2025 – Vice President</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Honorary Member & Advisor</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: January, 2022 (Charter Member)</p>
                </CardContent>
              </Card>
            </div>

            {/* Row 2: Avik, Piyali, Niher */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Rtn. Avik Chatterjee */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-yellow-400">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-yellow-400/30 group-hover:ring-yellow-400/50 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-007.jpg" alt="Rtn. Avik Chatterjee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Avik Chatterjee</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 11351627</span>
                      <span>•</span>
                      <span className="font-mono">9830030104</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-2 rounded-lg mb-3 flex items-center justify-center gap-1.5">
                    <Award className="h-4 w-4 text-accent" />
                    <p className="text-xs font-bold text-primary">Outstanding President (RY 2024-25)</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    Having 40 years of professional experience in Power Sector with specific expertise in Sales, Marketing and Project Planning & Execution. He has the privilege of working in reputed corporates with assignments in India and abroad. He is a well-known name in Electrical industries in the Eastern India. He earned the distinction of being PHF (Paul Harris Fellow) in July, 2025.
                  </p>
                  <div className="bg-primary/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2021-2023 – Chair Membership</p>
                    <p>RY: 2023-2024 – Club Secretary & President Elect</p>
                    <p>RY: 2024-2025 – Club President</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Club Vice President & Club Thalassemia Chair</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: January, 2022 (Charter Member)</p>
                </CardContent>
              </Card>

              {/* Rtn. Piyali Basak */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-accent">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-008.jpg" alt="Rtn. Piyali Basak" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Piyali Basak</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 11351597</span>
                      <span>•</span>
                      <span className="font-mono">9883289690</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    With a solid background of 16 years of Practice in legal field in Kolkata, Piyali Basak offers expert legal services tailored to client needs. Known for precision, reliability, and a track record of successful cases. She is the founder of Legitimus Advisors, one of the leading multi-disciplinary Indian law firms in Kolkata, West Bengal since 2020. She specializes in civil and criminal law, and has extended her services internationally to solicitor firms since 2017.
                  </p>
                  <div className="bg-accent/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2021-2023 – Club's Newsletter Editor</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Club Service Projects Chair & Club Learning Facilitator</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: January, 2022 (Charter Member), Rejoined: RY 2025-2026</p>
                </CardContent>
              </Card>

              {/* Rtn. Niher Ranjan Paul */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-primary">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-009.jpg" alt="Rtn. Niher Ranjan Paul" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Niher Ranjan Paul</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 11864729</span>
                      <span>•</span>
                      <span className="font-mono">9748753616</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    A thorough Marketing professional in Lubricants, Battery, Transmission and Distribution Industry with 3 decades of association. Marketing of product profiles like Power, Distribution, Solar, Wind, Dry Type Transformers and Compact Substation are his core expertise.
                  </p>
                  <div className="bg-primary/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2023-2024 – Member</p>
                    <p>RY: 2024-2025 – Club Services Chair</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Club's Newsletter Editor</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: April, 2024</p>
                </CardContent>
              </Card>
            </div>

            {/* Row 3: Jyoti, Anwesha, Abhijit */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Rtn. Jyoti Banerjee */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-accent">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-013.jpg" alt="Rtn. Jyoti Banerjee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Jyoti Banerjee</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 12168691</span>
                      <span>•</span>
                      <span className="font-mono">9830802002</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    Son of an indigenous entrepreneur, Rtn. Banerjee started his carrier in the Hospitality industry in hotels like Oberoi Grand. Later on, he shifted his domain to Corporate Houses like Mitsubishi Corporation, Metal One and Nippon Steel. He retired as AGM of Metal One, subsidiary of Japanese company, Mitsubishi Corporation. Currently he is self-employed as Marketing Consultant / Advisor.
                  </p>
                  <div className="bg-accent/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2024-2025 - Chair Club Membership & Chair Club Public Image</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Club Secretary & Club President Elect</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: October, 2024</p>
                </CardContent>
              </Card>

              {/* Rtn. Anwesha Chatterjee */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-primary">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-014.jpg" alt="Rtn. Anwesha Chatterjee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Anwesha Chatterjee</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 12169032</span>
                      <span>•</span>
                      <span className="font-mono">8981030104</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    As of date, she is the youngest member of the club. Still a student, she is pursuing her PhD in Agricultural Biotechnology from Amity University, Kolkata. She is also a gold medallist and University topper in her MSc post-graduation from the same University. She takes lot of interest is Club's Service Projects and other activities.
                  </p>
                  <div className="bg-primary/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p>RY: 2024-2025 - Club Youth Services Chair & Club's Newsletter Editor</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Chair Club Public Image</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: October, 2024</p>
                </CardContent>
              </Card>

              {/* Rtn. Abhijit Dey */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-accent">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-015.jpg" alt="Rtn. Abhijit Dey" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Abhijit Dey</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 12367750</span>
                      <span>•</span>
                      <span className="font-mono">9339725157</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    35+ years of experience in Automobile spares industry, makes him a vivid traveller worldwide. Father of a Dental Surgeon, the club intends to take services of his son to launch projects related to dental health assessment of young children in need.
                  </p>
                  <div className="bg-accent/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Club Membership Chair</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: June, 2025</p>
                </CardContent>
              </Card>
            </div>

            {/* Row 4: Mohim, Sudeshna, Aritra */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Rtn. Mohim Sarkar */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-primary">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-019.jpg" alt="Rtn. Mohim Sarkar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Mohim Sarkar</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 12468523</span>
                      <span>•</span>
                      <span className="font-mono">9830180525</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    Having 40 years of professional experience in Media Network field. After his retirement, he is now fully engaged in social work and other activities.
                  </p>
                  <div className="bg-primary/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Club Foundation Chair & Club Executive Secretary</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: June, 2025</p>
                </CardContent>
              </Card>

              {/* Rtn. Sudeshna Jana */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-accent">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-020.jpg" alt="Rtn. Sudeshna Jana" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Sudeshna Jana</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>ID: 12468543</span>
                      <span>•</span>
                      <span className="font-mono">9830309966</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    Being a part of this esteemed Rotary family, Rtn Jana brings over 20 years of professional experience in the field of finance and management. Currently she is associated with a Japanese multinational company, where she holds a key position in the Finance department. Though her work keeps her stationed in Delhi, Kolkata is her hometown. She frequently shuttles between the two cities, balancing professional commitments with personal roots.
                  </p>
                  <div className="bg-accent/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Member</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: September, 2025</p>
                </CardContent>
              </Card>

              {/* Rtn. Aritra Basak */}
              <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-primary">
                <div className="flex justify-center pt-6 pb-4">
                  <div className="h-40 w-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img src="/members/Our Members.pdf-image-021.png" alt="Rtn. Aritra Basak" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="px-5 pb-5">
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-primary">Rtn. Aritra Basak</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-1">
                      <span className="font-mono">7003254723</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 text-center">
                    He is an independent entrepreneur from the F&B industry and founder of ANUMANU'R RANNAGHAR & CATERERS.
                  </p>
                  <div className="bg-primary/10 p-2.5 rounded-lg text-xs space-y-0.5">
                    <p className="font-semibold text-primary text-center mb-1">Responsibilities</p>
                    <p className="font-bold text-accent pt-1">RY: 2025-2026 – Sergeant at Arms</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">Joined: August, 2025</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Be part of something bigger. Join our community of passionate Rotarians making a real difference 
            in the lives of others. Together, we can achieve more.
          </p>
          <Link to="/join">
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-10 hover:scale-105">
              Apply for Membership
            </button>
          </Link>
          <p className="text-sm mt-4 text-primary-foreground/70">
            Contact any of our members or leaders to learn more about joining Rotary
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
