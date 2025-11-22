import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from "lucide-react";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    if (category.includes('Health')) return 'bg-pink-50 text-pink-600 border-pink-200';
    if (category.includes('Education') || category.includes('Literacy')) return 'bg-blue-50 text-blue-600 border-blue-200';
    if (category.includes('Water') || category.includes('Sanitation')) return 'bg-cyan-50 text-cyan-600 border-cyan-200';
    if (category.includes('Disease') || category.includes('Treatment')) return 'bg-red-50 text-red-600 border-red-200';
    if (category.includes('Economic')) return 'bg-green-50 text-green-600 border-green-200';
    if (category.includes('Environment')) return 'bg-emerald-50 text-emerald-600 border-emerald-200';
    if (category.includes('Peace') || category.includes('Conflict')) return 'bg-purple-50 text-purple-600 border-purple-200';
    if (category.includes('Legal')) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    return 'bg-orange-50 text-orange-600 border-orange-200';
  };

  const projects = [
    { ry: "2021-2022", date: "06.03.2022", title: "Club Charter", category: "Formal Club Charter Celebration", image: "/projects/project-01.jpg", description: "Charter members attended the Club Charter handing over function at NX Hotel. All 21 Charter members attended. The function was graced by District 3291 officials.", location: "NX Hotel, Kolkata-700105, West Bengal, India", beneficiaries: "21", status: "Completed" },
    { ry: "2021-2022", date: "21.03.2022", title: "Community Economic Development", category: "Supplying one month's ration to an orphanage", image: "/projects/project-02.jpg", description: "500 Kgs of food grains were donated to a 56 inmate orphanage run by Ramakrishna Vedanta Ashram.", location: "P.O- Vivekanandapur, P.S- Kalitala Asuti Police Station, Vivekananda Road, Kolkata-700141", beneficiaries: "56", status: "Completed" },
    { ry: "2022-2023", date: "02.08.2022", title: "Community Economic Development", category: "Supplying one month's ration to an orphanage", image: "/projects/project-03.jpg", description: "Our members visited Udaan Gurukul at Pailan, South 24 Parganas. The gurukul is run with the patronage from Sri Ravishankar for the children of sex workers of a red light area in Kolkata. Currently there were 41 children staying in the gurukul. The club members donated 500 Kgs of food grains.", location: "Amgachhi, Kolkata, West Bengal 700104", beneficiaries: "41", status: "Completed" },
    { ry: "2022-2023", date: "17.08.2022", title: "Water, Sanitation and Hygiene", category: "Distribution of Sanitary Pads", image: "/projects/project-04.jpg", description: "Sanitary pads were handed over to the mothers of 60 school children of Dakshin Garankati village of Kultoli, Sunderban area. Also, educational books, pencil, crayons umbrellas, raincoats, steam vaporiser etc. were also distributed among these school children. Later on, the club members planted 30 saplings in the village.", location: "Dakshin Garankati, Kultali, South 24 Parganas, West Bengal, India", beneficiaries: "120", status: "Completed" },
    { ry: "2022-2023", date: "17.02.2023", title: "Basic Education and Literacy", category: "Distribution of School bags and food materials", image: "/projects/project-05.jpg", description: "Our team members visited Dakshin Garankati village of Kultoli, Sunderban area for the second time to distribute school bags, books, toys and food items to 98 children of the school and the village.", location: "Dakshin Garankati, Kultali, South 24 Parganas, West Bengal, India", beneficiaries: "98", status: "Completed" },
    { ry: "2022-2023", date: "05.09.2022", title: "Basic Education and Literacy", category: "Teacher's Day Celebration", image: "/projects/project-06.jpg", description: "Our club shown our society's respect and love by felicitating 62 teachers and staffs of Bidhannagar Municipal School on the auspicious occasion of Teacher's Day. The club members handed over mementoes and flower boquet to them. The students of the school presented a cultural program.", location: "FE Block, Sector 3, Bidhannagar, Kolkata-700106, West Bengal, India", beneficiaries: "56", status: "Completed" },
    { ry: "2023-2024", date: "31.10.2023", title: "Environment", category: "If I Was Pragyan", image: "/projects/project-07.jpg", description: "The club organised an All-India Essay Competition for school students of 12 years to 17 years age group. The topic was 'If I was Pragyan', the Lunar Rover (Chandrayaan-III) launched by India. A good response was received from various schools. We received 42 entries, out of which 12 entries were shortlist. Out of which, 4 students were declared winners.", location: "Online", beneficiaries: "42", status: "Completed" },
    { ry: "2023-2024", date: "19.02.2024", title: "Peacebuilding and Conflict Prevention", category: "Legal Assistance", image: "/projects/project-08.jpg", description: "The club launched a programme, Free Legal Assistance through weekly webinar. Anybody seeking any kind of legal advice and assistance may contact our legal team through the webinars or email.", location: "Online", beneficiaries: "50+", status: "Ongoing" },
    { ry: "2023-2024", date: "14.10.2023", title: "Disease Prevention and Treatment", category: "Jeevanam", image: "/projects/project-09.jpg", description: "Our club joined hands with Jeevanam foundation and inaugurated a Rehabilitation Centre for Drug Dependent Individuals. The Centre was inaugurated on the Mahalaya day in 2023 in presence of District 3291 officials and local administrative authorities.", location: "Jeevanam Rehabilitation Centre, 251A/58, Near Sisir Studio, Naktala, Bansdroni, Kolkata, West Bengal 700047", beneficiaries: "25+", status: "Completed" },
    { ry: "2024-2025", date: "03.09.2024", title: "Maternal and Child Health", category: "Awareness Programme on 'Cancer in Women'", image: "/projects/project-10.jpg", description: "Our club joined with RC Calcutta Charnock City and other co-hosts and associate hosts had jointly organized a Seminar on Awareness programme on 'Cancer in Women' for the benefit of female students of Lady Brabourne College. DG Rtn Dr Krishnendu Gupta, himself a gynaecologist of repute, was the Chief Guest and talked about the issue, specially emphasising the role of HPV vaccination in preventing cervical cancer.", location: "Lady Brabourne College, Kolkata", beneficiaries: "100+", status: "Completed" },
    { ry: "2024-2025", date: "13.09.2024", title: "Basic Education and Literacy", category: "SIKSHA Labh-2: Distribution of Computer", image: "/projects/project-11.jpg", description: "RC Calcutta New Horizons with assistance from RC Calcutta under their SIKSHA Labh-2 project donated two numbers of Computer Desktop with Monitor, Keyboard and Mouse along with UPS for the Computer class of the school. E M Academy was established in 2003 and it is unaided by government and is managed by private funding.", location: "Eastern Metropolitan Academy, Picnic Garden Road, 700039", beneficiaries: "250", status: "Completed" },
    { ry: "2024-2025", date: "21.09.2024", title: "Disease Prevention and Treatment", category: "Sundari-III: Prevention of Vector-borne Disease", image: "/projects/project-12.jpg", description: "RCCNH executed a Service Project in Kumirmari Island, located in the Sundarbans Coastal region of West Bengal. We distributed Mosquito Nets to 50 mothers of the area. We also distributed T Shirts made of special breathable fabric and sports items (Soccar Ball and Badminton racquets) to 40 children.", location: "Nivarani Smriti Pathshala, Kumirmari Gram Panchayat, Gosaba, Sundarban Coastal Area, West Bengal, 743378", beneficiaries: "100+", status: "Completed" },
    { ry: "2024-2025", date: "04.11.2024", title: "Disease Prevention and Treatment", category: "Swastha Sudha: Health assistance to weaker society", image: "/projects/project-13.jpg", description: "We launched our most prestigious and sustainable project, Swastha Sudha, in collaboration of PdX Research Labs (under CSR assistance from Indian Bank) wherein we provide FREE Pathological tests of any sort to the under-privileged people of the society. Initially, we are conducting the Free Camps at Kasba on Saturdays, 8:00 AM to 12:00 Noon and at Bangur Avenue on Sundays, 8:00 AM to 12:00 Noon.", location: "Kasba and Bangur Avenue, Kolkata, West Bengal, India", beneficiaries: "250+", status: "Ongoing" },
    { ry: "2024-2025", date: "13.12.2024", title: "Basic Education and Literacy", category: "Gyanankur: Education awareness", image: "/projects/project-14.jpg", description: "Some of our members attended the 2nd Dakshin Purba Kolkata Sammilan Book Fair and Rtn. Avik Chatterjee, President-RY 2024-2025 presented a seminar on importance of book reading by young generation in the modern digital times of eBooks and podcast. He also talked about our project Swastha Sudha for the poor people of the area.", location: "Book Fair Ground, Near Dhakuria Railway Station, Kolkata, West Bengal, India", beneficiaries: "50+", status: "Completed" },
    { ry: "2024-2025", date: "13 to 15.12.2024", title: "Peacebuilding and Conflict Prevention", category: "Unmesh – RYLA (Rotary Youth Leadership Award)", image: "/projects/project-15.jpg", description: "RCCNH co-hosted the District RYLA organised by Calcutta Charnock City and held at Chamrusai Premananda Ashram Society, Dhyan Ashram.", location: "Chamrusai Premananda Ashram Society, Dhyan Ashram, Konchowki – 743503, Kolkata, West Bengal, India", beneficiaries: "100+", status: "Completed" },
    { ry: "2024-2025", date: "18.12.2024", title: "Water, Sanitation, and Hygiene", category: "Pranadhara-I: Prevention of water borne disease", image: "/projects/project-16.jpg", description: "1 No. Water Purifier was handed over to the students of Galashia Sevak Sangha Free Primary School. The school is run by some enthusiastic people of the locality and the condition of the school is very precarious. The students were facing difficulty in drinking water and the water purifier will help them get access to pure and clean drinking water.", location: "Galashia, Rajarhat, New Town Action Area 2, Kolkata, West Bengal, India", beneficiaries: "45", status: "Completed" },
    { ry: "2024-2025", date: "28.12.2024", title: "Community Economic Development", category: "Sagar Sangam-I: Child Health care and Literacy support", image: "/projects/project-17.jpg", description: "Our club tied up with JSSS Foundation and has helped the little children of its self-run school by way of distribution of 50 Nos. blankets, Food material and chocolates among the school children. For the purpose, the club members travelled all the way to Sagar Island in the Sunderban areas of West Bengal.", location: "JSSS Foundation, Sagar Island, Sundarban, West Bengal, India", beneficiaries: "48", status: "Completed" },
    { ry: "2024-2025", date: "06.01.2025", title: "Water, Sanitation, and Hygiene", category: "Pranadhara-II: Prevention of water borne disease", image: "/projects/project-18.jpg", description: "1 No. Water Purifier was handed over to the Head master of Haltu High School for Boys. The school is partly aided by Govt. of West Bengal but the condition of the school is very precarious. The students were facing difficulty in drinking water and the water purifier will help them get access to pure and clean drinking water.", location: "1/51, Haltu School Rd, Neli Nagar, Haltu, Kolkata-700078, West Bengal, India", beneficiaries: "200", status: "Completed" },
    { ry: "2024-2025", date: "06.01.2025", title: "Maternal and Child Health", category: "Suswastha: Protection from cold and insect carried disease", image: "/projects/project-19.jpg", description: "Mosquito Nets and Blanket distribution at an orphanage, Universal Smile – Children Care Unit. The orphanage takes care of 37 children, both boys and girls of different age group. All orphanage is taken care by Ms Ankita Roy Chowdhury and her husband and the Children care unit started operation from 23rd July, 2013 at a small rented place in Picnic Garden.", location: "Anandapur, Kolkata-700107, West Bengal, India", beneficiaries: "37", status: "Completed" },
    { ry: "2024-2025", date: "06.01.2025", title: "Disease Prevention and Treatment", category: "Jeevan Dhara-I: Treatment of Thalassemia", image: "/projects/project-20.png", description: "One small girl child at the orphanage is suffering from Thalassemia and need blood transfusion every 3 months. We took up the matter with Rotary District Thalassemia Chair and made special arrangements for the patient at Medical College & Hospital for free treatment.", location: "Anandapur, Kolkata-700107, West Bengal, India", beneficiaries: "1", status: "Completed" },
    { ry: "2024-2025", date: "21.02.2025", title: "Disease Prevention and Treatment", category: "Jeevan Dhara-II: Financial Assistance to a needy person", image: "/projects/project-21.jpg", description: "The beneficiary along with his wife and son had suffered from COVID twice in the year 2020 & 2021 and was admitted in the ICU in both the occassions. He is severely affected with bone detoriation due to heavy steroid doses. So he had to go for Right leg Hip replacement. Our club assisted him with a small contribution during his operation.", location: "Pune, Maharshtra, India", beneficiaries: "1", status: "Completed" },
    { ry: "2025-2026", date: "28.06.2025", title: "Basic Education and Literacy", category: "Happy School: Phase-I", image: "/projects/project-22.jpg", description: "RCCNH co-hosted a Happy School project by contributing in the first phase for sinking of deep tube well and pumping up safe drinking water; Putting up an 1.5 KW solar panel with inverter to run the pump and 5 sets of fan and light; Construction of hand-wash area; Renovation of toilets; Addition of some school benches and desks.", location: "Swami Satyananda Bidyamandir, Lalgarh, Jhargram, West Bengal, India", beneficiaries: "59", status: "Completed" },
    { ry: "2025-2026", date: "01.07.2025", title: "Disease Prevention and Treatment", category: "Blood Donation Camp", image: "/projects/project-23.jpg", description: "RCCNH co-partnered with 52 other clubs under District 3291 in organising a Blood donation camp at Rotary Sadan to mark the starting of new RY:2025-2026.", location: "Rotary Sadan; 94/2 Chowringhee Road, Lala Lajpat Rai Sarani, Kolkata-700020, West Bengal, India", beneficiaries: "100+", status: "Completed" },
    { ry: "2025-2026", date: "28.07.2025", title: "Maternal and Child Health", category: "Rakta Karobi: Preliminary Blood testing", image: "/projects/project-24.jpg", description: "Our club in collaboration of PDxRL organised a Free Blood Sampling Camp for the girls of Children's Welfare Association for Girls HS School to detect their Blood Group, Hemoglobin percentage and Blood Glucose Level. Three students were identified as Thallasemia carriers.", location: "Children's Welfare Association for Girls HS School; 1, Rakhal Mukherjee Road, Sarsuna, Kolkata-700061, West Bengal, India", beneficiaries: "78", status: "Completed" },
    { ry: "2025-2026", date: "14.09.2025", title: "Maternal and Child Health", category: "Rakta Karobi-2: Preliminary Blood testing", image: "/projects/project-25.jpg", description: "RCCNH, in collaboration with PDxRL and Phool bagan Ganesh Temple Trust organised a 2nd of it's sort Free Blood Sampling Camp for the local poor residents at Phool Bagan to detect their Blood Group, Hemoglobin percentage and Blood Glucose Level. The temple authoroties parallelly organised a Free Eye Checking Camp at the same premises.", location: "Phool Bagan Ganesh Temple Trust; Phool Bagan, Kankurgachi, Kolkata-700054, West Bengal, India", beneficiaries: "52", status: "Completed" },
    { ry: "2025-2026", date: "19.09.2025", title: "Peacebuilding and Conflict Prevention", category: "Bastradaan: Distribution of new clothings", image: "/projects/project-26.jpg", description: "RCCNH co-hosting with RC Calcutta Newbies, distributed new sarees and T-shirts to 100 female and 100 male patients who are under treatment at Tata Medical centre fighting the deadly disease of Cancer. This event was organised just before Durga Puja festival wherein everyone enjoys the festival. We tried to bring a little joy in the lives of these cancer warriors.", location: "Premashraya; DC Block, Action Area 1D, New Town, Kolkata-700156, West Bengal, India", beneficiaries: "200", status: "Completed" },
    { ry: "2025-2026", date: "01.10.2025", title: "Peacebuilding and Conflict Prevention", category: "Annadaan: Providing lunch on a special day", image: "/projects/project-27.jpg", description: "In continuation to our Bastradaan Project, our club sponsored the lunch for the 100 Cancer patients who were staying at Premashraya on the Nabami Day of the Bengali festival of Durga Puja. The guests included 18 children and rest of them were adults.", location: "Premashraya; DC Block, Action Area 1D, New Town, Kolkata-700156, West Bengal, India", beneficiaries: "150", status: "Completed" },
    { ry: "2025-2026", date: "12.10.2025", title: "Disease Prevention and Treatment", category: "Vision on Wheels-Beldanga", image: "/projects/project-28.jpg", description: "RCCNH made financial contributin in this Global Grant Project for a Mobile Opthalmic Detection and Treatment Van which was handed over to Rotary Beldanga Eye Hospital.", location: "Rotary Beldanga Eye Hospital; NH34, Near Barua Petrol Pamp, Beldanga, Murshidabad, West Bengal 742189", beneficiaries: "1000+", status: "Completed" },
  ];

  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.ry]) acc[project.ry] = [];
    acc[project.ry].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => {
    const [aStart] = a.split('-').map(Number);
    const [bStart] = b.split('-').map(Number);
    return bStart - aStart; // Descending order
  });

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-primary to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Projects Executed</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl animate-fade-in-up">
            Making a lasting impact through dedicated service projects across multiple Rotary Years
          </p>
        </div>
      </section>

      {sortedYears.map((year, yearIndex) => (
        <section key={year} className={`py-16 ${yearIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-lg px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600">
                Rotary Year {year}
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-2">Projects & Initiatives</h2>
              <p className="text-muted-foreground text-lg">{projectsByYear[year].length} Projects Completed</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsByYear[year].map((project, index) => (
                <Card key={index} className={`scroll-fade-in group shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 ${project.status === 'Ongoing' ? 'border-green-500' : 'border-accent'}`}>
                  <div className="flex flex-col">
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-3 right-3">
                        <Badge variant={project.status === 'Ongoing' ? 'default' : 'secondary'} className="shadow-lg text-xs">{project.status}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <div className="mb-3">
                        <Badge className={`text-xs ${getCategoryColor(project.category)}`}>{project.category}</Badge>
                      </div>

                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                      <div className="space-y-2 text-xs border-t pt-3">
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div><span className="font-semibold text-foreground">Date:</span> {project.date}</div>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <Users className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div><span className="font-semibold text-foreground">Beneficiaries:</span> {project.beneficiaries}</div>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                          <div className="line-clamp-1"><span className="font-semibold text-foreground">Location:</span> {project.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Collective Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center scroll-fade-in">
                <div className="text-5xl font-bold mb-2">{projects.length}</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center scroll-fade-in">
                <div className="text-5xl font-bold mb-2">3000+</div>
                <div className="text-white/80">Lives Impacted</div>
              </div>
              <div className="text-center scroll-fade-in">
                <div className="text-5xl font-bold mb-2">5</div>
                <div className="text-white/80">Rotary Years</div>
              </div>
              <div className="text-center scroll-fade-in">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-white/80">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
