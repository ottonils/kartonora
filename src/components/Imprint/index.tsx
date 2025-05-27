"use client";
import { Playwrite_DK_Loopet } from 'next/font/google';

const playwriteDKLoopet = Playwrite_DK_Loopet({
    weight: ['100', '200', '300', '400'],
});

const Imprint = () => {
    return (
        <div className="w-full flex-grow flex flex-col items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">

            <h1 
                className={`text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3rem] font-semibold ${playwriteDKLoopet.className} text-[#CA848A] mb-6 sm:mb-8 md:mb-10 border-b border-[#A3C1AD]/50 pb-3 sm:pb-4 text-center`}
            >
                Impressum
            </h1>
            
            {/* Container für den Hauptinhalt mit maximaler Breite */}
            <div className="w-full max-w-3xl space-y-8 md:space-y-10 text-[#151515]">

                <section aria-labelledby="person-details-heading">
                    <h2 
                        id="person-details-heading"
                        className={`${playwriteDKLoopet.className} text-[#CA848A] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        Angaben zur Person
                    </h2>
                    <ul className='text-left space-y-1 text-sm sm:text-base leading-relaxed'>
                        <li>Nora Otto</li>
                        <li>Waldbadstr. 40</li>
                        <li>04924 Bad Liebenwerda OT Zeischa</li>
                        <li>Deutschland</li>
                    </ul>

                    <ul className='text-left space-y-1 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed'> 
                        <li>Telefon: +49 173 9831363</li>
                        <li>E-Mail: <a href="mailto:nora@schlossotto.de" className="text-[#CA848A] hover:text-[#8aa894] underline transition-colors duration-200">nora@schlossotto.de</a></li>
                    </ul>
                </section>

                <section aria-labelledby="legal-details-heading">
                    <h3 
                        id="legal-details-heading"
                        className={`${playwriteDKLoopet.className} text-[#CA848A] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        Rechtliche Angaben
                    </h3>
                    <ul className='text-left space-y-1 text-sm sm:text-base leading-relaxed'>
                        <li>Steuernummer: folgt</li>
                        <li>Kleinunternehmer nach §19 UStG</li>
                    </ul>
                </section>

                <section aria-labelledby="legal-responsibility-heading">
                     <h3 
                        id="legal-responsibility-heading"
                        className={`${playwriteDKLoopet.className} text-[#CA848A] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        Verantwortlich gemäß §18 MStV
                    </h3>
                    <ul className='text-left space-y-1 text-sm sm:text-base leading-relaxed'>
                        {/* Die Überschrift macht diese Zeile ggf. redundant, aber zur Klarheit: */}
                        {/* <li className="font-semibold">Verantwortlich gemäß §18 MStV:</li> */}
                        <li>Nora Otto</li>
                        <li>Waldbadstr. 40</li>
                        <li>04924 Bad Liebenwerda OT Zeischa</li>
                    </ul>
                </section>
                
                <section aria-labelledby="dispute-resolution-heading" className="w-full">
                    <h4 
                        id="dispute-resolution-heading"
                        className={`${playwriteDKLoopet.className} text-[#CA848A] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium text-left sm:text-center`}
                    >
                        Streitschlichtung
                    </h4>
                    <article className="text-sm sm:text-base text-left sm:text-center leading-relaxed">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, 
                        die Sie unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#CA848A] hover:text-[#8aa894] underline transition-colors duration-200">https://ec.europa.eu/consumers/odr</a> finden. 
                        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Imprint;