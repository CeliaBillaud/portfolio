import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { PhotoGrid } from "./_components/PhotoGrid";
import { Status } from "./_components/Status";
import { Playlist } from "./_components/Playlist";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>

      <Spacing size="xs"/>
        
      <Hero/>

      <Spacing size="xs"/>

      <PhotoGrid/>

      <Spacing size="xs"/>
      
      <Status/>

      <Spacing size="xs"/>  

      <Playlist playlistId="0rst5hKbtLCDSx5Ca3Axvz"/>

      <Spacing size="sm"/> 

      <Footer/>
        
    </main>
  );
}
