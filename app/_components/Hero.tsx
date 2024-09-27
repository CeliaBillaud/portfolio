import React from 'react';
import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { FaPhp, FaReact } from 'react-icons/fa';
import { SiSymfony, SiNextdotjs } from 'react-icons/si';

const Code = ({ className, children, icon: Icon, ...props }: ComponentPropsWithRef<"span"> & { icon?: React.ElementType }) => {
    return (
        <span className={cn("font-mono bg-accent/30 border border-accent p-1 m-1 rounded-sm text-primary inline-flex items-center", className)} {...props}>
            {Icon && <Icon className="mr-1" />}
            {children}
        </span>
    );
};

export const Hero = () => {
    return (
        <Section>
            <h1 className="text-5xl text-primary font-bold font-caption">Célia Billaud • Développeuse web</h1>
            <h2 className="text-3xl font-caption">Votre future alternante ?</h2>
            <p>
                J'aime créer des projets en <Code icon={FaPhp}>PHP</Code>/<Code icon={SiSymfony}>Symfony</Code> et je me forme au monde merveilleux de <Code icon={FaReact}>React</Code> et <Code icon={SiNextdotjs}>Next.js</Code>
            </p>
            <br/>
            <p>
                Ancienne étudiante en Finance Internationale et vidéaste, je me suis lancée dans le développement web, attirée par la résolution de problèmes et la création.
            </p>
            <br/>
            <p>
                Je recherche une <strong>alternance de 20 mois</strong> pour devenir Conceptrice Développeuse d'Applications.
            </p>
            <p>
                Passionnée, créative, toujours en quête d'apprentissage !
            </p>
        </Section>
    );
};