import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { PhotoGrid } from "./_components/PhotoGrid";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main>
      <Header/>

      <Spacing size="xs"/>
        
      <Hero/>

      <Spacing size="xs"/>

      <PhotoGrid/>

      <Spacing size="sm"/>
      
      <Status/>
        
      
      
    </main>
  );
}
