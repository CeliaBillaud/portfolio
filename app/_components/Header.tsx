import Link from 'next/link';
import { Section } from "./Section"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

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
                                className={cn(buttonVariants({ variant: "outline"}),"size-6 p-0")} >                                
                                    <GitHubLogoIcon/>
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/celiabillaud/"
                                className={cn(buttonVariants({ variant: "outline"}),"size-6 p-0")} >                                
                                    <LinkedInLogoIcon/>
                            </Link>
                            
                        </ul>
                    </nav>
                </div>
            </Section>
        </header>
    )
}