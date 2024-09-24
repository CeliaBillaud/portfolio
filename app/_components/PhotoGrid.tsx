import { Section } from "./Section"
import Image from 'next/image'

export const PhotoGrid = () => {
    return (
        <div className="max-w-5xl px-4 m-auto grid grid-cols-4 gap-1">
            <div className="-rotate-25 col-span-2 lg:col-span-1 h-64 relative ">
                <Image
                    src="/interrail2.jpg"
                    alt="Mon interrail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="col-span-2 lg:col-span-1 h-64 relative">
                <Image
                    src="/diving.jpg"
                    alt="Célia plonge"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="hidden lg:block lg:col-span-1 h-64 relative">
                <Image
                    src="/skate1.jpg"
                    alt="Célia fait du skate"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="hidden lg:block lg:col-span-1 h-64 relative">
                <Image
                    src="/photography.jpg"
                    alt="Célia fait de la photo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div> 
        </div>
    )
}