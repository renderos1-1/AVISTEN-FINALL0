
import React from 'react';
import { Building2, Rocket, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Building2 className="h-16 w-16 text-primary" />,
      title: "Soluciones Corporativas",
      description: "Soluciones de software robustas y escalables, diseñadas para grandes organizaciones con requisitos complejos y operaciones de alto volumen.",
      features: [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Business Intelligence & Analytics",
        "Workflow Automation"
      ]
    },
    {
      icon: <Rocket className="h-16 w-16 text-accent" />,
      title: "Transformación Digital",
      description: "Impulsa tu empresa modernizando procesos análogos con soluciones digitales eficientes, ágiles y orientadas al crecimiento.",
      features: [
        "Automatización de procesos",
        "Consultoría de digitalización",
        "Migración a la nube",
        "Desarrollo de portales web y autoservicio"
      ]
    }
  ];

  const benefits = [

  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones <span className="text-gradient">a Medida</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ya seas una empresa consolidada o una startup innovadora, ofrecemos soluciones de software y transformación digital personalizadas que se alinean con tus objetivos y potencian tu éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              onClick={scrollToContact}
              className="hover-lift bg-gradient-to-br from-white to-gray-50 border-none shadow-xl group"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  {solution.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 hover-lift"
            >
              <div className="p-3 rounded-full bg-primary/10">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
