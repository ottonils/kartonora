import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Playwrite_DK_Loopet } from 'next/font/google';


//Kartonora Font
const playwriteDKLoopet = Playwrite_DK_Loopet({ 
  weight: ['100', '200', '300', '400'], // Wähle die Gewichte, die du tatsächlich brauchst
});

const Home = () => {
  return (
    <div className={`min-w-screen min-h-screen flex flex-col font-mono text-[#A3C1AD] `}>

      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow"> {/* Oder ein div, das den Content umgibt */}
        {/* FIRST SECTION */}
        <section className="w-full flex"> 
          {/* Dein weiterer Inhalt hier */} 
        </section>
      </main>

      {/* FOOTER SECTION */}
      <div>
      <Footer/> 
      </div>

    </div>
  );
}

export default Home;
