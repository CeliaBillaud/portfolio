import React from 'react';
import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { FaPhp, FaReact } from 'react-icons/fa';
import { SiSymfony, SiNextdotjs } from 'react-icons/si';
import Link from 'next/link';
import Image from "next/image";

const Code = ({ className, children, icon: Icon, ...props }: ComponentPropsWithRef<"span"> & { icon?: React.ElementType }) => {
    return (
        <span className={cn("font-mono bg-accent/30 border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 m-1 rounded-sm text-primary inline-flex items-center", className)} {...props}>
            {Icon && <Icon className="mr-1" />}
            {children}
        </span>
    );
};

export const Hero = () => {
    return (
        <Section className='flex flex-col gap-2'>
            <h1 className="text-5xl text-primary font-bold font-caption">Célia Billaud • Développeuse web</h1>
            <h2 className="text-3xl font-caption">Votre future alternante ?</h2>
            <div>
                <p className="text-base md:text-justify">
                    Après un Master en Finance Internationale et une carrière de vidéaste, je me suis lancée dans le développement web avec l&apos;
                    <Link href="https://oclock.io/" target="_blank">
                    <Code>
                        <Image
                        src="/logooclock.png"
                        width={20}
                        height={20}
                        alt="logo O'clock"
                        className="mr-1"
                        priority
                        />
                        École O'clock
                    </Code>
                    </Link>
                    . Attirée par la résolution de problèmes et la création, j&apos;ai trouvé dans le code une nouvelle passion !
                </p>
                <p className="text-base md:text-justify">
                    Diplômée d&apos;une formation spécialisée en <Code icon={FaPhp}>PHP</Code> et <Code icon={SiSymfony}>Symfony</Code>,
                    je me forme actuellement au monde dynamique de <Code icon={FaReact}>React</Code> et <Code icon={SiNextdotjs}>Next.js</Code>. 
                    Avec une documentation à portée de main, je suis prête à relever tous les défis !
                </p>
               
                <p className="text-base md:text-justify mt-1">
                    Je recherche une <strong>alternance de 20 mois</strong> pour devenir Conceptrice Développeuse d&apos;Applications afin d&apos;approfondir mes compétences et de me lancer pleinement dans cette nouvelle carrière passionnante.
                </p>
                
            </div>
        </Section>
    );
};