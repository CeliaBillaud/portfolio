import { Button } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"

export const Header = () => {
    return(
        <header className="sticky top-0">
            <Section className="flex items-baseline">
                <p className="text-4xl font-bold text-primary-foreground">
                    Hello !
                </p>
                <nav className="flex-1">
                {/* copy components from shadcn/ui */}
                    <ul>
                        <Button className="size-6svg">
                            <GithubIcon size={16} className="text-foreground"/>
                        </Button>
                    </ul>
                </nav>
            </Section>
        </header>
    )
}