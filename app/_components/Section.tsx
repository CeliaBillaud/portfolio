
import clsx from "clsx"
import { PropsWithChildren } from "react"
// define global width of section 
export const Section= (props: PropsWithChildren<{className?:string}>) => {
    return(
        // on vient étendre les classname grâce au cn
        <section className={clsx("max-w-xl px-4 m-auto", props.className)}>
            {props.children}
        </section>
    )
}