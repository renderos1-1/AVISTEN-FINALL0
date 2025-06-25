
import React from 'react';

const TechnologiesSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }

      ]
    },
    {
      title: "Mobile",
      technologies: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }
      ]
    },
    {
      title: "Databases",
      technologies: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
      ]
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro <span className="text-gradient">Stack Tecnológico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprovechamos tecnologías y frameworks de vanguardia para crear soluciones sólidas, escalables y preparadas para el futuro de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift"
            >
              <h3 className="text-xl font-bold text-center mb-6 text-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300 group cursor-pointer"
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Y muchas más tecnologías para satisfacer tus requisitos específicos.
          </p>

        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
