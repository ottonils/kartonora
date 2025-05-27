import { CarouselCollection } from '@/components/CarouselCards';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { faPencil, faBriefcase, faBook, faEarthEurope } from '@fortawesome/free-solid-svg-icons';


const schoolCardData = [
  { id: 1, imgSrc: "/box.png", title: "Für den ersten Start...", description: "Alles, was du für den Schulbeginn brauchst, kompakt und bereit.", adventureText: "Dein Lernabenteuer beginnt!", icon: faPencil },
  { id: 2, imgSrc: "/mappe.png", title: "Wissen festhalten...", description: "Die perfekte Mappe, um deine Notizen und Zeichnungen sicher aufzubewahren.", adventureText: "Sammle deine Gedanken!", icon: faBriefcase },
  { id: 3, imgSrc: "/box.png", title: "Tauche ein in Geschichten...", description: "Spannende Bücher, die deine Fantasie anregen und neue Welten eröffnen.", adventureText: "Entdecke das Lesen!", icon: faBook },
  { id: 4, imgSrc: "/box.png", title: "Kreativität entfesseln...", description: "Ein Set bunter Stifte, um deine Ideen farbenfroh aufs Papier zu bringen.", adventureText: "Male deine Träume!", icon: faPencil },
  { id: 5, imgSrc: "/box.png", title: "Die Welt erkunden...", description: "Lerne spielerisch Kontinente und Länder mit diesem interaktiven Globus kennen.", adventureText: "Dein Horizont wartet!", icon: faEarthEurope },
];

const dorfLoveCardData = [
  { id: 1, imgSrc: "/box.png", title: "Heimatliebe...", description: "Ein liebevoll zusammengestelltes Paket mit allem, was dein Herz für einen guten Start braucht.", adventureText: "Starte frisch und voller Energie!", icon: faPencil  },
  { id: 2, imgSrc: "/box.png", title: "Geschichte festhalten...", description: "Halte deine schönsten Erinnerungen und wichtigen Dokumente sicher und stilvoll fest.", adventureText: "Bewahre, was dir wichtig ist!", icon: faPencil  },
  { id: 3, imgSrc: "/box.png", title: "Wohlfühlen...", description: "Tauche ein in Geschichten, die dich inspirieren und zur Ruhe kommen lassen.", adventureText: "Finde deine Auszeit in Worten!", icon: faPencil },
  { id: 4, imgSrc: "/box.png", title: "Ruhe finden...", description: "Gestalte deine Gedanken und Träume in leuchtenden Farben und schaffe etwas Einzigartiges.", adventureText: "Lass deiner Kreativität freien Lauf!" , icon: faPencil },
  { id: 5, imgSrc: "/box.png", title: "Zeit nutzen...", description: "Erkunde die Welt von zu Hause aus und entdecke neue Kulturen und Orte.", adventureText: "Reise und lerne jeden Tag dazu!", icon: faPencil } ,
];

const Home = () => {
  return (
    <div className={`min-w-screen min-h-screen flex flex-col font-mono text-[#A3C1AD] `}>

      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex flex-col justify-center items-center" > {/* Oder ein div, das den Content umgibt */}
        {/* FIRST SECTION */}
        <section className="w-[80%]"> 
          <CarouselCollection title='Schulkollektion' data={schoolCardData}  />
        </section>

        {/** Trennlinie */}
        <div className="min-w-screen bg-white flex justify-center items-center border-t-2 border-dashed mt-[5%]">

        <section className="w-[80%] mb-[5%]">
          <CarouselCollection title='Dorfliebe' data={dorfLoveCardData}  />
        </section>

        </div>
      </main>

      {/* FOOTER SECTION */}
      <div>
      <Footer/> 
      </div>

    </div>
  );
}

export default Home;
