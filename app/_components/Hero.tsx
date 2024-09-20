import { Section } from "./Section"
import Image from "next/image"

export const Hero = () => {
    return (
        <Section className="flex justify-center max-md:flex-col items-center ">
            <div className="flex-[2]">
                <h1 className="text-3xl font-bold mb-2">Célia Billaud - Développeuse web</h1>
                <h2 className="text-xl mb-4">Votre future alternante ?</h2>
                <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus, totam voluptas libero modi alias. Dolores illo voluptas modi enim nemo fugiat debitis, minus necessitatibus sapiente quo facilis dicta doloremque?
                </p>
            </div>
            <div className="flex-1 w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mt-6 lg:mt-0 flex justify-center">
                <Image
                    src="/profile-pic(8).png"
                    alt="Photo de Célia Billaud"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                />
            </div>
        </Section>
    )
}