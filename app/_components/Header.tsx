import Link from 'next/link';
import { Section } from "./Section"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export const Header = () => {
    return(
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline place-content-between">
                <Link 
                    href="/"
                    className="text-lg font-bold text-foreground">
                    Hello !
                </Link>
                {/* todo : changeer alignement */}
                <div className="flex items-end">
                {/* copy components from shadcn/ui */}
                    <nav>
                        <ul className="flex items-center gap-2">
                            <Link 
                            href="https://github.com/CeliaBillaud"
                            className="size-6 p-0 flex items-center justify-center hover:opacity-80 transition-opacity border border-transparent rounded-md hover:border-slate-500 " >
                                <GitHubLogoIcon/>
                            </Link>
                            <Link 
                            href="https://www.linkedin.com/in/celiabillaud/"
                            className="size-6 p-0 flex items-center justify-center hover:opacity-80 transition-opacity border border-transparent rounded-md hover:border-slate-500 " >
                                <LinkedInLogoIcon/>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </Section>
        </header>
    )
}