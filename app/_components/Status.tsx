import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import {Home, LucideIcon, Beer, BriefcaseBusiness, Trophy} from "lucide-react"
import Link from "next/link"
import { IconType } from 'react-icons'
import { FaPhp, FaBootstrap } from 'react-icons/fa'
import { SiSymfony, SiMysql, SiSass, SiJavascript } from 'react-icons/si'


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
                <p className="text-sm text-muted-foreground">Ancienne étudiante en Finance Internationale et vidéaste, attirée par la résolution de problèmes et la création, je me suis lancée dans le développement web avec l'École O'clock.</p>
            </Card>
            <Card className="p-4 flex-1 w-full">
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
        techno: [FaPhp, SiSymfony, SiMysql, SiSass, FaBootstrap, SiJavascript]
    },
    {
        Logo: BriefcaseBusiness,
        title: "Mon Portfolio",
        description: "lorem ipsum dolor sit amet consectetur adipisicing", 
        url: "/",
        techno: []
    },
    {
        Logo: Trophy,
        title: "Rubgy Quizz",
        description: "lorem ipsum dolor sit amet consectetur adipisicing", 
        url: "https://celiabillaud.github.io/rugby-quizz/",
        techno: []
    }
]

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
                            <props.Logo />
                        </span>
                        <p className="text-lg font-semibold">{props.title}</p>
                    </div>
                    <div className="flex gap-2">
                        {props.techno.map((Icon, index) => (
                            <Icon key={index} className="text-muted-foreground size-6" />
                        ))}
                    </div>
                </Link>
                <p className="text-sm text-muted-foreground p-1">{props.description}</p>
            </div>
}