import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { PhotoGrid } from "./_components/PhotoGrid";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="sm"/>
      <Hero/>
      <Spacing size="xs"/>
      <PhotoGrid/>
      
      
    </main>
  );
}
