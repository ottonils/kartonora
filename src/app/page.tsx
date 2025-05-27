// src/app/page.tsx
import RandomDotsBackground from '@/components/BackgroundDots';
import CarouselCollection from '@/components/CarouselCollection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { faPencil, faBriefcase, faBook, faEarthEurope } from '@fortawesome/free-solid-svg-icons';

const schoolCardData = [
  { id: 1, imgSrc: "/box.webp", title: "Für den ersten Start...", description: "Alles, was du für den Schulbeginn brauchst, kompakt und bereit.", adventureText: "Dein Lernabenteuer beginnt!", icon: faPencil },
  { id: 2, imgSrc: "/mappe.webp", title: "Wissen festhalten...", description: "Die perfekte Mappe, um deine Notizen und Zeichnungen sicher aufzubewahren.", adventureText: "Sammle deine Gedanken!", icon: faBriefcase },
  { id: 3, imgSrc: "/box.webp", title: "Tauche ein in Geschichten...", description: "Spannende Bücher, die deine Fantasie anregen und neue Welten eröffnen.", adventureText: "Entdecke das Lesen!", icon: faBook },
  { id: 4, imgSrc: "/box.webp", title: "Kreativität entfesseln...", description: "Ein Set bunter Stifte, um deine Ideen farbenfroh aufs Papier zu bringen.", adventureText: "Male deine Träume!", icon: faPencil },
  { id: 5, imgSrc: "/box.webp", title: "Die Welt erkunden...", description: "Lerne spielerisch Kontinente und Länder mit diesem interaktiven Globus kennen.", adventureText: "Dein Horizont wartet!", icon: faEarthEurope },
];

const dorfLoveCardData = [
  { id: 1, imgSrc: "/box.webp", title: "Heimatliebe...", description: "Ein liebevoll zusammengestelltes Paket mit allem, was dein Herz für einen guten Start braucht.", adventureText: "Starte frisch und voller Energie!", icon: faPencil  },
  { id: 2, imgSrc: "/box.webp", title: "Geschichte festhalten...", description: "Halte deine schönsten Erinnerungen und wichtigen Dokumente sicher und stilvoll fest.", adventureText: "Bewahre, was dir wichtig ist!", icon: faPencil  },
  { id: 3, imgSrc: "/box.webp", title: "Wohlfühlen...", description: "Tauche ein in Geschichten, die dich inspirieren und zur Ruhe kommen lassen.", adventureText: "Finde deine Auszeit in Worten!", icon: faPencil },
  { id: 4, imgSrc: "/box.webp", title: "Ruhe finden...", description: "Gestalte deine Gedanken und Träume in leuchtenden Farben und schaffe etwas Einzigartiges.", adventureText: "Lass deiner Kreativität freien Lauf!" , icon: faPencil },
  { id: 5, imgSrc: "/box.webp", title: "Zeit nutzen...", description: "Erkunde die Welt von zu Hause aus und entdecke neue Kulturen und Orte.", adventureText: "Reise und lerne jeden Tag dazu!", icon: faPencil } ,
];

const Home = () => {
  return (
    <div 
      className={`min-w-full w-full min-h-screen flex flex-col font-mono text-[#A3C1AD]`}
      // Das 'relative' hier ist nicht mehr zwingend für den Dot-Background, da dieser nun im <main> lebt.
      // Es schadet aber nicht, falls andere absolute Elemente sich auf diesen Div beziehen sollen.
    >
      <Navbar />

      {/* Das <main>-Element wird zum relativen Container für den Punkthintergrund */}
      <main className="relative flex flex-col justify-center items-center flex-grow z-0">
        <RandomDotsBackground 
          dotColor="rgba(255, 0, 0, 0.8)" 
          dotRadius={4} 
          density={0.1} 
        />
        
        {/* Der Inhalt des <main>-Elements. Liegt standardmäßig über dem -z-10 Hintergrund. */}
        <section className="w-[80%] h-full mt-8 sm:mt-12"> 
          <CarouselCollection title='Schulkollektion' data={schoolCardData} />
        </section>

        
        <div className="w-full h-full flex justify-center items-center mt-[5%] py-[2%]  border-t-2 border-b-2 border-dashed border-[#A3C1AD] ">
          <section className="w-[80%]">
            <CarouselCollection title='Dorfliebe' data={dorfLoveCardData} />
          </section>
        </div>
      </main>

      <footer className="z-0">
        <Footer/> 
      </footer>
    </div>
  );
}

export default Home;