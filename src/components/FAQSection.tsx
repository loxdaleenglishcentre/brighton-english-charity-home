import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HelpCircle, Home, BookOpen, Plane, Users, GraduationCap, Calendar } from "lucide-react";
const FAQSection = () => {

  const categories = [
    { id: "homestay", label: "Homestay", icon: Home, color: "bg-blue-500" },
    { id: "lessons", label: "Lessons", icon: BookOpen, color: "bg-green-500" },
    { id: "travel", label: "Travel & Arrival", icon: Plane, color: "bg-purple-500" },
    { id: "meals", label: "Meals & Boarding", icon: Users, color: "bg-orange-500" },
    { id: "young", label: "16-17 Year Olds", icon: GraduationCap, color: "bg-red-500" },
  ];

  const faqData = {
    homestay: [
      {
        question: "Can I share a room with my friend if they are also booking a homestay?",
        answer: "Yes, if you both want to share. Normally adult students have single rooms with one of our homestay hosts. However, we also have some hosts who have two bedrooms or one bedroom with two beds. If you want to share with your friend or partner, please tell us their name at the time of booking. We still expect you to try to speak as much English as possible with your host."
      },
      {
        question: "Can I change or leave my homestay if I am not happy?",
        answer: "Yes. Jodie does a marvellous job of matching the right student to the right host but sometimes the connection might not be there. If you have any concerns about living with your host, please talk with Jodie to see if the situation is normal or whether something needs to be changed. If you request to move, you normally have to give one week's notice before the move."
      },
      {
        question: "Who will do my laundry and how often?",
        answer: "Your host will do one load of washing once a week. If you have more, you could discuss with them about paying for them to do more or go to a local laundrette instead."
      },
      {
        question: "How often can I have a bath or shower?",
        answer: "The cost of utilities (gas, electricity and water) is expensive in the UK. It is expected that you will be allowed one bath or one 10-minute shower each day. Please ask your host about the best time for you to have a bath or shower. Always leave baths, showers and toilets clean after use."
      },
      {
        question: "Can I stay out late?",
        answer: "Even though you are an adult, your host will worry about you. They don't mind you coming home late/early (!) but they just want to know you are safe. If you said you were coming home at 11pm but haven't come home by 11:45pm, they will be concerned. Just give them a quick text to let them know you'll be home much later. Always make sure you come in quietly so that you don't wake them when you do return."
      },
      {
        question: "How far is the homestay from the school?",
        answer: "Out of the summer, all host families are within a 28-minute walk of the school. If you are studying on a summer course with our partner school, you may need to take a 15 minute bus to Palmeira Square, Brighton & Hove each day."
      }
    ],
    lessons: [
      {
        question: "What will my first day be like?",
        answer: "Most students are a little nervous on their first day, but you will receive a warm welcome here and all the staff want you to feel happy and relaxed. Classes normally start at 09:00. Please be at school 10 minutes before this so we can get you settled in your classroom. You will have a listening test and a placement test which looks at your grammar and vocabulary knowledge on your first day."
      },
      {
        question: "How many students will be in my class?",
        answer: "There are normally a maximum of 14 students in your English class (12 in summer). There may be certain circumstances where there are 15 but this is rare. We prefer for you to be in the right level class."
      },
      {
        question: "How many English lessons a day do I have?",
        answer: "General English students: 20 lessons (15 hours) each week. Intensive English students: 25 lessons (18 hours, 45 minutes) each week. English Plus students: English 21 lessons (15 hours, 45 minutes) plus subject 4 lessons (3 hours) each week."
      },
      {
        question: "What should I do if my lessons are too easy or too difficult?",
        answer: "During the first week, you may feel that your class is either too difficult or too easy. It can take a little time to settle into a class so please don't worry for the first three days. However, after that, if you still feel the class is not at your level, please talk to your teacher and let him/her know how you are feeling."
      },
      {
        question: "Can I take an exam while I study at Loxdale?",
        answer: "Yes! We offer Cambridge FCE, CAE, CPE (approximately £200), IELTS exam (approximately £225), and LanguageCert exam (£60/£80 per section). If you want to take an exam, we recommend taking the Applied English and/or English Plus exam preparation option."
      }
    ],
    travel: [
      {
        question: "Which is the best airport to fly into?",
        answer: "The best airport to fly into is Gatwick as it is only about 45 minutes away. We also offer taxi transfers from Heathrow (£170), Gatwick (£110), and Stansted (£250)."
      },
      {
        question: "What will I need to show to Immigration?",
        answer: "When you arrive in England you will have to show: Your passport and visa (if needed), the Loxdale English Centre Booking Confirmation letter and invoice, and proof that you have enough money to support yourself while you are in the UK."
      },
      {
        question: "Will I need a visa?",
        answer: "If you come from a country needing a visa from the UK, please arrange this in good time. Loxdale English Centre is accredited by Accreditation UK. Once you have booked our course and paid the deposit, we will email you the paperwork needed for a Short Term Study Visa for up to 11 months."
      },
      {
        question: "Should I get insurance before I travel?",
        answer: "Yes, we strongly recommend that you take out travel and medical insurance before you come to the UK. The School is not liable for loss, damage or injury to persons or property while attending school. We recommend coverage for cancellation, medical expenses, and damage to personal property."
      },
      {
        question: "What's the easiest way to get to my host without a taxi?",
        answer: "From Gatwick: Train direct to Portslade or Hove (35-45 mins) or coach to Brighton (50 mins). From Heathrow: Coach to Brighton (2 hours 15 minutes). From arrival at the train or coach station you'll need a taxi to your accommodation (£8-£20)."
      }
    ],
    meals: [
      {
        question: "What does full board mean?",
        answer: "Homestay students have breakfast and dinner with your homestay host and then have a cooked lunch at school, Mondays to Fridays. At weekends, you will have breakfast and dinner with your host. The evening meal is your opportunity to practise English."
      },
      {
        question: "What is British food like?",
        answer: "The most traditional British meals are fish & chips, sausages and mash potato, pies and mash potato, shepherds pie and our Sunday roasts. However, Britain, and Brighton in particular is very cosmopolitan so we have many different influences on our food. Brighton has a wide range of wonderful places to eat from around the world."
      },
      {
        question: "What happens if I have a special diet?",
        answer: "Please tell us about any dietary requirements before you arrive. It is fine to cater for special diets but it may take longer to match you with an experienced host."
      },
      {
        question: "What does half board mean?",
        answer: "If you choose half board accommodation you have two meals provided each day. You can choose half board lunch (breakfast with host + cooked lunch at school) or half board dinner (breakfast and dinner with hosts each day)."
      }
    ],
    young: [
      {
        question: "Is there a curfew for 16-17 year olds?",
        answer: "Yes, you will have a curfew. Monday to Friday you need to be home for dinner by 6pm. Before you come, your parents will fill in a form which gives them an option to set the evening curfew. We go through this with your host and you must follow this evening curfew at all times."
      },
      {
        question: "Who will I be studying with?",
        answer: "You will be in classes with adults aged 18 years and above."
      },
      {
        question: "Can I drink alcohol?",
        answer: "No. It is illegal for people aged 17 and under to buy alcohol."
      },
      {
        question: "Do I need written permission before I can go away for the night?",
        answer: "If you want to go away for a night, or to stay with friends/family, we must have written permission from your parents at least 3 days in advance. We also need the name, address and phone number of where you will be staying."
      },
      {
        question: "Will I have 24 hour supervision?",
        answer: "We do not provide 24 hour supervision for 16 & 17 year old students. We are ultimately responsible for your safety and welfare whilst you study with us in the UK. If we feel that an activity, trip or situation is unsafe or unsuitable for you, we reserve the right to refuse to let you take part."
      }
    ]
  };

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('hsl(var(--primary))')}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-6 flex justify-center">
            <div className="faq-3d-icon">
              <div className="w-16 h-16 rounded-full bg-gradient-red-3d flex items-center justify-center shadow-red-glow">
                <HelpCircle className="w-9 h-9 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl text-muted-foreground mb-4">Adult Learners</h2>
          <Badge className="mb-6 bg-gradient-primary text-white border-0 px-6 py-2 text-sm font-medium">
            Got Questions?
          </Badge>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-green-metallic">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most common questions about studying at Loxdale English Centre. 
            From homestay arrangements to course details, we've got you covered.
          </p>
        </div>

        {/* FAQ Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="homestay" className="w-full">
            {/* Category Navigation */}
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto p-1 bg-card/50 backdrop-blur-sm border border-border/50 mb-12">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg hover:scale-105"
                >
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                    <category.icon className="w-4 h-4" />
                  </div>
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* FAQ Content for each category */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="glass border-0 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {faqData[category.id as keyof typeof faqData].map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                          <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-muted/30 transition-colors">
                            <span className="text-lg font-semibold">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* 3D Icon Styles */}
      <style>{`
        .faq-3d-icon {
          position: relative;
          display: inline-block;
          transform: perspective(1000px) rotateX(15deg) rotateY(-10deg);
          filter: drop-shadow(0 12px 24px hsl(var(--primary)/0.25));
          transition: transform 0.3s ease;
        }
        
        .faq-3d-icon:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(-5deg) scale(1.1);
        }
        
        .faq-3d-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, hsl(var(--primary)/0.1), hsl(var(--primary)/0.3));
          border-radius: 50%;
          transform: translate(-50%, -50%) translateZ(-10px);
          z-index: -1;
        }
      `}</style>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default FAQSection;