import { Card } from "@/components/ui/card";
import Link from "next/link"
import { ArrowUpRight } from "lucide-react";


export const ContactCard = (props:{
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
                    <div className="flex flex-col w-3/5">
                        <p className="text-sm font-semibold text-wrap">{props.name}</p>
                        <p className="text-sm text-muted-foreground text-wrap">{props.description}</p>
                    </div>
                    <ArrowUpRight size={20} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
                    />
            </Card>
            </Link>
        )
    }