import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import {Home, LucideIcon, Beer, BriefcaseBusiness, Trophy} from "lucide-react"
import Link from "next/link"



export const Status = () => {
    return <Section className="flex max-sm:flex-col items-start gap-4">
        <Card className="flex-[3] p-4 flex flex-col gap-2 w-1/2">
            <p className="text-lg text-muted-foreground">Mes projets préférés</p>
            <div className="flex flex-col gap-4">
                {PROJECT.map((project, index) => 
                <Project 
                    key={index}
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                
                />
                )}
            </div>    
        </Card>
        <div className="flex-[2] flex flex-col gap-4 w-1/2">
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
        url: "https://www.omybeer.ovh/"
    },
    {
        Logo: BriefcaseBusiness,
        title: "Mon Portfolio",
        description: "lorem ipsum dolor sit amet consectetur adipisicing", 
        url: "/"
    },
    {
        Logo: Trophy,
        title: "Rubgy Quizz",
        description: "lorem ipsum dolor sit amet consectetur adipisicing", 
        url: "https://celiabillaud.github.io/rugby-quizz/"
    },
]

type ProjetProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const Project = (props :
    ProjetProps) => {
    return <div className="flex-col gap-4">
    <Link href={props.url} className="flex items-center gap-4 hover:bg-accent/50 transition-color p-1 " target="alt">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
        </span>
        <p className="text-lg font-semibold">{props.title}</p>
    </Link>
        <p className="text-sm text-muted-foreground p-1">{props.description}</p>
    
    </div>
}