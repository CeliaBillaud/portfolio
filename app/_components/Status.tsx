import { Card } from "@/components/ui/card"
import { Section } from "./Section"


export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <Card className="flex-[3] p-4 flex flex-col gap-2">
            Mes Projets
        </Card>
        <div className="flex-[2] flex flex-col gap-4">
            <Card className="p-4 flex-1">
                Formations
            </Card>
            <Card className="p-4 flex-1">
                Me contacter
            </Card>

        </div>
    </Section>
}