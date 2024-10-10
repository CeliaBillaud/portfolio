import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import {Home, LucideIcon, Beer, BriefcaseBusiness, Trophy} from "lucide-react"
import Link from "next/link"
import { IconType } from 'react-icons'
import { FaPhp, FaBootstrap, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiSymfony, SiMysql, SiSass, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { RiNextjsFill } from "react-icons/ri";
import Image from 'next/image';


export const Status = () => {
    return <Section className="flex max-sm:flex-col items-start gap-4">
        <Card className="flex-[3] p-4 flex flex-col gap-2 w-full lg:w-1/2">
            <p className="text-lg text-muted-foreground">Mes projets préférés</p>
            <div className="flex flex-col gap-4">
                {PROJECT.map((project, index) => 
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
        <div className="flex-[2] flex flex-col gap-4 w-full lg:w-1/2">
            <Card className="p-4 flex-1 w-full">
                <p className="text-lg text-muted-foreground">Mon parcours</p>
                <div className="flex flex-col gap-4">
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
                //todo add cv to download
                <p className="flex justify-end text-muted-foreground text-primary">Mon CV par ici...</p>
            </Card>
            <Card className="p-4 flex-1 w-full">
                //todo add contact form
                <p className="text-lg text-muted-foreground">Me contacter</p>
            </Card>

        </div>
    </Section>
};

const PROJECT = [
    {
        Logo: Beer,
        title: "O'MyBeer",
        description: "O’MyBeer est une application dédiée à l'univers de la bière, qui permet aux utilisateurs d’explorer une vaste sélection de bières et de marques du monde entier.", 
        url: "https://www.omybeer.ovh/",
        techno: [SiSass, FaBootstrap, SiJavascript, FaPhp, SiSymfony, SiMysql]
    },
    {
        Logo: Beer,
        title: "MaReco",
        description: "MaReco permet de partager ses recommendations culturelles toutes les semaines à ses amis. En cours de développement...", 
        url: "/",
        techno: [SiTailwindcss, FaReact, FaPhp, SiSymfony, SiMysql]
    },
    {
        Logo: BriefcaseBusiness,
        title: "Mon Portfolio",
        description: "lorem ipsum dolor sit amet consectetur adipisicing", 
        url: "/",
        techno: [RiNextjsFill, FaReact, SiTypescript, SiTailwindcss ]
    },
    {
        Logo: Trophy,
        title: "Rubgy Quizz",
        description: "lorem ipsum dolor sit amet consectetur adipisicing", 
        url: "https://celiabillaud.github.io/rugby-quizz/",
        techno: [FaCss3Alt, SiJavascript]
    }
]

const iconNames = { 
    SiJavascript: "Javascript",
    SiTypescript: "Typescript", 
    SiReact: "React",  
    SiSass: "Sass",
    SiTailwindcss: "Tailwind CSS",
    SiMysql: "MySQL",
    SiSymfony: "Symfony",
    FaPhp: "PHP",
    FaBootstrap: "Bootstrap",
    FaCss3Alt: "CSS",
    RiNextjsFill: "Next.js"
};

type ProjetProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
    techno: IconType[];
};

const Project = (props :
    ProjetProps) => {
    return <div className="flex-col gap-4">
                <Link href={props.url} className="flex items-center  hover:bg-accent/50 transition-color p-1 justify-between" target="alt">
                    <div className="flex items-center gap-4">
                        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                            <props.Logo size={16} />
                        </span>
                        <p className="text-lg font-semibold">{props.title}</p>
                    </div>
                    <div className="flex gap-2">
                        {props.techno.map((Icon, index) => {
                            //todo add title on hover
                            return (
                                <Icon 
                                    key={index} 
                                    className="text-muted-foreground size-6"
                                    role="img" />
                                );
                            })
                        }
                    </div>
                </Link>
                <p className="text-sm text-muted-foreground p-1">{props.description}</p>
            </div>
};

const EXPERIENCE = [
    {   
        image:"/logooclock.png",
        imageAlt: "logo O'clock",
        title: "Formation O'clock",
        description: "lorem ipsum dolor sit amet consectetur adipisicing",
        url: "oclock.io",
        date: "Oct 2023 - Juin 2024", 
    },
    {   
        image:"/logoiae.png",
        imageAlt: "logo IAE Aix",
        title: "Msc International Finance",
        description: " Formation BAC+5 en finance spécialisée en finance internationale",
        url: "oclock.io",
        date: "2020", 
    },
]

type ExperienceProps = {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    url: string;
    date: string;
};

const Experience = (props :
    ExperienceProps) => {
    return <div className="flex-col gap-4">
                <Link href={props.url} className="flex items-center  hover:bg-accent/50 transition-color p-1 justify-between" target="alt">
                    <div className="flex items-center gap-4">
                        <span className="rounded-sm">
                            <Image 
                                src={props.image} 
                                width = "30"
                                height = "30"
                                alt={props.imageAlt}
                                />
                        </span>
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold">{props.title}</p>
                            <p className="text-sm text-muted-foreground">{props.date}</p>
                        </div>
                    </div>
                </Link>
                <p className="text-sm text-muted-foreground p-1">{props.description}</p>
            </div>
}