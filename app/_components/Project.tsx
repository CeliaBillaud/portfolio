import {LucideIcon, Beer, BriefcaseBusiness, Trophy, MessageSquareHeart} from "lucide-react"
import Link from "next/link"
import { IconType } from 'react-icons'
import { FaPhp, FaBootstrap, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiSymfony, SiMysql, SiSass, SiJavascript, SiTailwindcss, SiLaravel } from 'react-icons/si'
import { RiNextjsFill } from "react-icons/ri";


    export const PROJECTS: ProjectProps[] = [
    {
        Logo: Beer,
        title: "O'MyBeer",
        description: "Application web dédiée à l'univers de la bière, permettant aux utilisateurs d'explorer une vaste sélection de bières et de marques internationales.",
        url: "https://www.omybeer.ovh/",
        techno: [FaPhp, SiSymfony, SiMysql, SiSass, FaBootstrap, SiJavascript]
    },
    {
        Logo: MessageSquareHeart,
        title: "MaReco",
        description: "Plateforme sociale facilitant le partage hebdomadaire de recommandations culturelles entre amis. En développement.",
        url: "https://github.com/CeliaBillaud/mareco",
        techno: [FaPhp, SiSymfony, SiMysql, FaReact, SiTailwindcss]
    },
    {
        Logo: BriefcaseBusiness,
        title: "Mon Portfolio",
        description: "Vitrine digitale de mes compétences m'ayant permis de découvrir Next.js, React, Typescript et Tailwind CSS.",
        url: "/",
        techno: [RiNextjsFill, SiTailwindcss]
    },
    {
        Logo: Trophy,
        title: "Rugby Quizz",
        description: "Quizz interactif sur le XV de France, démontrant ma capacité à créer des applications web simples avec des technologies de base.",
        url: "https://celiabillaud.github.io/rugby-quizz/",
        techno: [FaCss3Alt, SiJavascript]
    }
]

// const iconNames = { 
//     SiJavascript: "Javascript",
//     SiTypescript: "Typescript", 
//     SiReact: "React",  
//     SiSass: "Sass",
//     SiTailwindcss: "Tailwind CSS",
//     SiMysql: "MySQL",
//     SiSymfony: "Symfony",
//     FaPhp: "PHP",
//     FaBootstrap: "Bootstrap",
//     FaCss3Alt: "CSS",
//     RiNextjsFill: "Next.js"
// };

type ProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
    techno: IconType[];
};

export const Project = (props :
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