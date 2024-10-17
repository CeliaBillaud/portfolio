import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import {Home, LucideIcon, Beer, BriefcaseBusiness, Trophy, MessageSquareHeart, ArrowUpRight} from "lucide-react"
import Link from "next/link"
import { IconType } from 'react-icons'
import { FaPhp, FaBootstrap, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiSymfony, SiMysql, SiSass, SiJavascript, SiTypescript, SiTailwindcss, SiLaravel } from 'react-icons/si'
import { RiNextjsFill } from "react-icons/ri";
import Image from 'next/image';



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
                <Link href="/cv-celiabillaud.pdf" target="_blank" className="flex mt-1 justify-end text-muted-foreground opacity-75 hover:opacity-100">Mon CV complet par ici !</Link>
            </Card>
            <Card className="p-4 flex-1 w-full flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Me contacter</p>
                <ContactCard 
                    name="Célia Billaud"
                    image="/profile-pic(8).png"
                    mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg"
                    description="Connectons-nous sur LinkedIn !"
                    url="https://www.linkedin.com/in/celiabillaud/"
                />
                <ContactCard 
                    name="celabillaud.dev@gmail.com"
                    image="/profile-pic(8).png"
                    mediumImage="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
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
            <Link href={props.url} target="alt" className="">
            <Card className="p-3 bg-accent/10 flex gap-6 items-center hover:bg-accent/30 transition-colors group">
                    <div className="relative">
                        <img src={props.image} alt={props.name}  className="w-10 h-10"/>
                        <img src={props.mediumImage} alt={props.name}  className="w-4 h-4 absolute -bottom-1 -right-1 rounded-sm"/>
                    </div>
                    <div className="flex flex-col max-w-3/5">
                        <p className="text-sm font-semibold">{props.name}</p>
                        <p className="text-sm text-muted-foreground">{props.description}</p>
                    </div>
                    <ArrowUpRight size={20} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
                    />
            </Card>
            </Link>
        )
    }

const PROJECTS: ProjectProps[] = [
    {
        Logo: Beer,
        title: "O'MyBeer",
        description: "O’MyBeer est une application dédiée à l'univers de la bière, qui permet aux utilisateurs d’explorer une vaste sélection de bières et de marques du monde entier.", 
        url: "https://www.omybeer.ovh/",
        techno: [FaPhp, SiSymfony, SiMysql, SiSass, FaBootstrap, SiJavascript]
    },
    {
        Logo: MessageSquareHeart,
        title: "MaReco",
        description: "MaReco permet de partager ses recommendations culturelles toutes les semaines à ses amis. En cours de développement...", 
        //todo add link to githubrepo
        url: "/",
        techno: [FaPhp, SiLaravel, SiMysql, SiTailwindcss, FaReact]
    },
    {
        Logo: BriefcaseBusiness,
        title: "Mon Portfolio",
        description: "Ce projet de portfolio m'a permis de découvrir et m'amuser avec Next.js, React, Typescript et Tailwind CSS !", 
        //todo add link when deployed
        url: "/",
        techno: [RiNextjsFill, SiTailwindcss ]
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
                <Link href={props.url} className="flex items-center  hover:bg-accent/50 transition-colors p-1 justify-between" target="alt">
                    <div className="flex items-center gap-4">
                        <span className="bg-accent text-accent-foreground p-3 rounded-md">
                            <props.Logo size={16} />
                        </span>
                        <p className="text-lg font-semibold">{props.title}</p>
                    </div>
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
        description: "Titre Professionnel Développeur web et web mobile soutenu à l'aide de mon projet de fin de formation O'MyBeer. Titre équivalent Bac+2, inscrit au RNCP.",
        url: "https://oclock.io/",
        date: "Oct 2023 - Juin 2024", 
    },
    {   
        image:"/profile-pic(8).png",
        imageAlt: "photo de profil",
        title: "Photographe et Vidéaste",
        //todo mettre un lien?
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
                <Link href={props.url} className="flex items-center  hover:bg-accent/50 transition-colors p-1 justify-between" target="alt">
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