import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { PhotoGrid } from "./_components/PhotoGrid";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing height={32}/>
      <Hero/>
      <Spacing height={32}/>
      <PhotoGrid/>
      
      
    </main>
  );
}
