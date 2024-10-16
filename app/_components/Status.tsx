import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import {Home, LucideIcon, Beer, BriefcaseBusiness, Trophy, MessageSquareHeart, ArrowUpRight} from "lucide-react"
import Link from "next/link"
import { IconType } from 'react-icons'
import { FaPhp, FaBootstrap, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiSymfony, SiMysql, SiSass, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { RiNextjsFill } from "react-icons/ri";
import Image from 'next/image';


export const Status = () => {
    return <Section className="flex max-sm:flex-col items-start gap-4">
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
        <div className="flex-[3] flex flex-col gap-4 w-full lg:w-1/2">
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
                {/* todo add cv to download */}
                <p className="flex justify-end text-muted-foreground text-primary">Mon CV par ici...</p>
            </Card>
            <Card className="p-4 flex-1 w-full flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Me contacter</p>
                <ContactCard 
                    name="Célia Billaud"
                    image="/profile-pic(8).png"
                    mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg"
                    description="Envoyez-moi un message !"
                    url="https://www.linkedin.com/in/celiabillaud/"
                />
                <ContactCard 
                    name="Célia Billaud"
                    image="/profile-pic(8).png"
                    mediumImage=""
                    description="Envoyez-moi un mail !"
                    url="mailto:celiabillaud.dev@gmail.com"
                />

            </Card>

        </div>
    </Section>
};

 const ContactCard = (props:{
    url: string;
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    }) => {
        return(
            <Card className="p-3 bg-accent/10 flex gap-6 items-center">
                    <div className="relative">
                        <img src={props.image} alt={props.name}  className="w-10 h-10"/>
                        <img src={props.mediumImage} alt={props.name}  className="w-4 h-4 absolute -bottom-1 -right-1 rounded-sm"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold">{props.name}</p>
                        <p className="text-sm text-muted-foreground">{props.description}</p>
                    </div>
                    <Link href={props.url} target="alt">
                        <ArrowUpRight size={16}/>
                    </Link>
            </Card>
        )
    }

const PROJECTS: ProjectProps[] = [
    {
        Logo: Beer,
        title: "O'MyBeer",
        description: "O’MyBeer est une application dédiée à l'univers de la bière, qui permet aux utilisateurs d’explorer une vaste sélection de bières et de marques du monde entier.", 
        url: "https://www.omybeer.ovh/",
        techno: [SiSass, FaBootstrap, SiJavascript, FaPhp, SiSymfony, SiMysql]
    },
    {
        Logo: MessageSquareHeart,
        title: "MaReco",
        description: "MaReco permet de partager ses recommendations culturelles toutes les semaines à ses amis. En cours de développement...", 
        //todo add link to githubrepo
        url: "/",
        techno: [SiTailwindcss, FaReact, FaPhp, SiSymfony, SiMysql]
    },
    {
        Logo: BriefcaseBusiness,
        title: "Mon Portfolio",
        description: "Ce projet de portfolio m'a permis de découvrir et m'amuser avec Next.js, React, Typescript et Tailwind CSS !", 
        //todo add link when deployed
        url: "/",
        techno: [RiNextjsFill, FaReact, SiTypescript, SiTailwindcss ]
    },
    {
        Logo: Trophy,
        title: "Rubgy Quizz",
        description: "Un quizz sur les joueurs du XV de France, je m'étais mis le challenge de le réaliser en 2 jours avec seulement des technos de base.", 
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

type ProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
    techno: IconType[];
};

const Project = (props :
    ProjectProps) => {
    return <div className="flex-col gap-4">
                <Link href={props.url} className="flex items-center  hover:bg-accent/50 transition-color p-1 justify-between" target="alt">
                    <div className="flex items-center gap-4">
                        <span className="bg-accent text-accent-foreground p-3 rounded-md">
                            <props.Logo size={16} />
                        </span>
                        <p className="text-lg font-semibold">{props.title}</p>
                    </div>
                    {/* <div className="flex gap-2">
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
                    </div> */}
                </Link>
                <p className="text-sm text-muted-foreground p-1">{props.description}</p>
                <div className="flex gap-2 justify-end">
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
            </div>
};

const EXPERIENCE: ExperienceProps[] = [
    {   
        image:"/logooclock.png",
        imageAlt: "logo O'clock",
        title: "Formation O'clock",
        description: "lorem ipsum dolor sit amet consectetur adipisicing",
        url: "https://oclock.io/",
        date: "Oct 2023 - Juin 2024", 
    },
    {   
        image:"/profile-pic(8).png",
        imageAlt: "photo de profil",
        title: "Photographe et Vidéaste",
        //mettre un lien?
        url: "",
        date: "2021-2023", 
    },
    {   
        image:"/logoiae.png",
        imageAlt: "logo IAE Aix",
        title: "Msc International Finance",
        url: "oclock.io",
        date: "2020", 
    },
]

type ExperienceProps = {
    image: string;
    imageAlt: string;
    title: string;
    description?: string | null;
    url: string;
    date: string;
};

const Experience = (props :
    ExperienceProps) => {
    return <div className="flex-col gap-4">
                <Link href={props.url} className="flex items-center  hover:bg-accent/50 transition-color p-1 justify-between" target="alt">
                    <div className="flex items-center gap-4">
                        <span className="rounded-md">
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
                {
                    props.description && 
                    <p className="text-sm text-muted-foreground p-1">{props.description}</p>
                }
            </div>
}