import Link from "next/link"
import Image from 'next/image';

export const EXPERIENCE: ExperienceProps[] = [
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

export const Experience = (props :
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