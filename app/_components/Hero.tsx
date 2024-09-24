import { Section } from "./Section"
import Image from "next/image"

export const Hero = () => {
    return (
        <Section >
            <h1 className="text-5xl font-bold my-2 font-caption">Célia Billaud • Développeuse web</h1>
            <h2 className="text-xl mb-4">Votre future alternante ?</h2>
            <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus, totam voluptas libero modi alias. Dolores illo voluptas modi enim nemo fugiat debitis, minus necessitatibus sapiente quo facilis dicta doloremque?
            </p>
        </Section>
    )
}