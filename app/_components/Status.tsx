import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard";
import { Project } from "./Project";
import { PROJECTS } from "./Project";
import { EXPERIENCE } from "./Experience";
import { Experience } from "./Experience";

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <Card className="flex-[4] p-4 flex flex-col gap-2 w-full lg:w-1/2">
            <p className="text-lg text-muted-foreground">Mes projets préférés</p>
            <div className="flex-[2] flex flex-col gap-4">
                {PROJECTS.map((project, index) => 
                <Project 
                    key={index}
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    techno={project.techno}
                />
                )}
            </div>    
        </Card>
        <div className="flex-[3] flex flex-col gap-4 md:gap-2.5 w-full lg:w-1/2">
            <Card className="p-4 flex-1 w-full">
                <p className="text-lg text-muted-foreground">Mon parcours</p>
                <div className=" flex flex-col gap-4">
                {EXPERIENCE.map((experience, index) => 
                <Experience 
                    key={index}
                    image={experience.image}
                    imageAlt= {experience.imageAlt}
                    title= {experience.title}
                    description= {experience.description}
                    url= {experience.url}
                    date= {experience.date}
                />
                )}
                </div>
                <a href="/cv-celiabillaud.pdf" target="_blank" rel="noopener noreferrer" className="flex mt-1 justify-end text-muted-foreground hover:underline">
                Mon CV complet ici !
                </a> 
            </Card>
            <Card className="p-4 flex-1 w-full flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">On en discute ?</p>
                <ContactCard 
                    name="Rendez-vous sur LinkedIn !"
                    image="/profile-pic(8).png"
                    mediumImage="/linkedin-logo.png"
                    description=""
                    url="https://www.linkedin.com/in/celiabillaud/"
                />
                <ContactCard 
                    name="Envoyez-moi un mail !"
                    image="/profile-pic(8).png"
                    mediumImage="/gmail-logo.png"
                    description=""
                    url="mailto:celiabillaud.dev@gmail.com"
                />
            </Card>
        </div>
    </Section>
};

 

