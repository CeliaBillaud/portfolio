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
        <span className={cn("font-mono bg-accent/30 border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 m-0.5 rounded-sm text-primary inline-flex items-center", className)} {...props}>
            {Icon && <Icon className="mr-1" />}
            {children}
        </span>
    );
};

export const Hero = () => {
    return (
        <Section className='flex flex-col gap-2'>
            <h1 className="text-3xl md:text-5xl text-primary font-bold font-caption">Célia Billaud • Développeuse web</h1>
            <h2 className="text-xl md:text-3xl font-caption">Coding with a smile 😊 ✨</h2>
            <div>
                <p className="text-base hidden md:block md:text-justify mb-0.5">
                    Le plot twist de ma carrière : passer de la finance au dev ! 
                </p>
                <p className="text-base hidden md:block md:text-justify">
                    Fan de défis et toujours enthousiaste, j&apos;ai troqué mon Master en Finance Internationale et mon ancien job de vidéaste pour me lancer dans l&apos;aventure dev web avec l&apos;
                    <Link href="https://oclock.io/formations/cda-alternance?_gl=1*s7rr7j*_up*MQ..&gclid=CjwKCAiAudG5BhAREiwAWMlSjEVhdmM3Y0HFEaJ7LwlgWSGyutiMBi1q4_Eo0Pb67pacwRh2wQr4CBoCUfYQAvD_BwE" target="_blank">
                        <Code>
                            <Image
                                src="/logooclock.png"
                                width={20}
                                height={20}
                                alt="logo O'clock"
                                className="mr-1"
                                priority
                            />
                            École O&apos;clock
                        </Code>
                    </Link>
                    . Mon truc ? Résoudre des problèmes techniques avec créativité... et le sourire !
                </p>

                <p className="text-base md:text-justify">
                    Après une spécialisation en <Code icon={FaPhp}>PHP</Code> et <Code icon={SiSymfony}>Symfony</Code>,
                    je m&apos;amuse maintenant en explorant <Code icon={FaReact}>React</Code> et <Code icon={SiNextdotjs}>Next.js</Code>. 
                    La nouveauté ? Même pas peur ! Avec une bonne doc et ma motivation sans faille, je transforme chaque obstacle en opportunité d&apos;apprentissage.
                </p>

                <p className="text-base md:hidden md:text-justify mt-1">
                    Je recherche une <strong className='text-primary'>alternance de 20 mois</strong> en Conception et Développement d&apos;Applications &#40;formation Bac+3&#41;, je suis ultra motivée à rejoindre une équipe qui allie travail de qualité et bonne ambiance !
                </p>
                        
                <p className="text-base hidden md:block md:text-justify mt-1">
                    Je recherche une <strong className='text-primary'>alternance de 20 mois</strong> en Conception et Développement d&apos;Applications &#40;formation Bac+3&#41;, je suis ultra motivée à rejoindre une équipe qui allie travail de qualité et bonne ambiance ! 
                </p> 
            </div>
        </Section>
    );
};