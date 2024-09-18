import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import { Link } from "lucide-react"
import clsx from "clsx"

export const Header = () => {
    return(
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline place-content-between">
                <p className="text-lg font-bold text-primary">
                    Hello !
                </p>
                {/* todo : changeer alignement */}
                <div className="flex items-end">
                {/* copy components from shadcn/ui */}
                    <nav>
                        <ul className="flex items-center gap-2">
                            <a 
                            href="https://github.com/CeliaBillaud"
                            className="size-6 p-0 flex items-center justify-center hover:opacity-80 transition-opacity border border-transparent rounded-md hover:border-slate-500 " >

                                <GithubIcon size={16} className="text-foreground"/>
                            </a>
                        </ul>
                    </nav>
                </div>
            </Section>
        </header>
    )
}