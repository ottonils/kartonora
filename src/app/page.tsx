import Footer from '@/components/Footer';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Playwrite_DK_Loopet } from 'next/font/google';

//Kartonora Font
const playwriteDKLoopet = Playwrite_DK_Loopet({ 
  weight: ['100', '200', '300', '400'], // Wähle die Gewichte, die du tatsächlich brauchst
});

const Home = () => {
  return (
    <div className={`min-w-screen min-h-screen flex flex-col font-mono
      text-[#A3C1AD] 
    `}>

      {/* NAVBAR SECTION */}
      <section className="w-full flex border-b-2 border-b-[#A3C1AD]">
        <header className={`w-[35%] text-[2rem] font-bold p-3 flex items-baseline`}>
            <h1 className={`${playwriteDKLoopet.className} ml-[2rem]`}>Kartonora</h1>
            <FontAwesomeIcon className='ml-[1rem]' icon={faHeart} />
        </header>

        <div className="w-[65%] flex justify-evenly items-center">
          <span className="hover:border-b-[0.1rem] hover:cursor-pointer transition-all duration-150">
            Dorfliebe
          </span> 
          <span className="hover:border-b-[0.1rem] hover:cursor-pointer transition-all duration-150">
            Zeischa
          </span>
          <span className="hover:border-b-[0.1rem] hover:cursor-pointer transition-all duration-150">
            Über mich
          </span>
        </div>
      </section>

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
