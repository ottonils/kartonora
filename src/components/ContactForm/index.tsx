"use client";

import { useState, FormEvent } from 'react';
import { Playwrite_DK_Loopet } from 'next/font/google';
// Optional: Icon für den Sende-Button
// import { FaPaperPlane } from 'react-icons/fa';

const playwriteDKLoopet = Playwrite_DK_Loopet({
    weight: ['100', '200', '300', '400'], // Passende Gewichte für die Nutzung
});

interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('Nachricht wird gesendet...');

        const formData = new FormData(e.currentTarget);
        // FormData muss für Netlify URL-encoded werden, wenn per AJAX gesendet wird
        const body = new URLSearchParams(formData as any).toString();


        try {
            const response = await fetch("/", { // Netlify verarbeitet Formulare an der aktuellen URL
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body,
            });

            if (response.ok) {
                setStatus('Nachricht erfolgreich gesendet! Vielen Dank.');
                setFormValues({ name: '', email: '', subject: '', message: '' });
                // e.currentTarget.reset(); // HTML Form resetten
            } else {
                const errorText = await response.text();
                console.error("Form submission error response:", errorText);
                setStatus(`Fehler beim Senden der Nachricht. (${response.status}) Bitte versuchen Sie es später erneut.`);
            }
        } catch (error) {
            console.error("Network or other error:", error);
            setStatus('Ein Netzwerkfehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
        } finally {
            setIsLoading(false);
        }
    };

    // Basis-Styling für Glaselemente
    const glassInputBaseStyle = "block w-full text-[#151515] bg-white/20 backdrop-blur-md border border-white/40 rounded-lg shadow-sm focus:outline-none transition-all duration-300 ease-in-out placeholder-gray-600/70";
    const glassInputFocusStyle = "focus:border-[#A3C1AD] focus:ring-2 focus:ring-[#A3C1AD]/50";

    return (
        <div className="w-full flex-grow flex flex-col items-center 
                        py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 
                        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

            <h1 
                className={`text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3rem] font-semibold 
                            ${playwriteDKLoopet.className} text-[#A3C1AD] 
                            mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 
                            text-center`}
            >
                Kontaktieren Sie uns
            </h1>
            
            <form
                name="kontakt" // Wichtig für Netlify Forms Identifikation
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field" // Optional: Honeypot gegen Spam
                onSubmit={handleSubmit}
                className="w-full max-w-xl space-y-6 md:space-y-8"
            >
                {/* Versteckte Felder für Netlify */}
                <input type="hidden" name="form-name" value="kontakt" />
                <p className="hidden"> {/* Honeypot Feld */}
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>

                <div>
                    <label 
                        htmlFor="name" 
                        className={`block text-sm sm:text-base font-medium ${playwriteDKLoopet.className} text-[#A3C1AD] mb-1 sm:mb-2`}
                    >
                        Ihr Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Max Mustermann"
                        className={`${glassInputBaseStyle} px-4 py-3 ${glassInputFocusStyle}`}
                    />
                </div>

                <div>
                    <label 
                        htmlFor="email" 
                        className={`block text-sm sm:text-base font-medium ${playwriteDKLoopet.className} text-[#A3C1AD] mb-1 sm:mb-2`}
                    >
                        Ihre E-Mail-Adresse
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="max.mustermann@example.com"
                        className={`${glassInputBaseStyle} px-4 py-3 ${glassInputFocusStyle}`}
                    />
                </div>

                <div>
                    <label 
                        htmlFor="subject" 
                        className={`block text-sm sm:text-base font-medium ${playwriteDKLoopet.className} text-[#A3C1AD] mb-1 sm:mb-2`}
                    >
                        Betreff
                    </label>
                    <input 
                        type="text" 
                        name="subject" 
                        id="subject" 
                        required
                        value={formValues.subject}
                        onChange={handleChange}
                        placeholder="Anfrage zu..."
                        className={`${glassInputBaseStyle} px-4 py-3 ${glassInputFocusStyle}`}
                    />
                </div>

                <div>
                    <label 
                        htmlFor="message" 
                        className={`block text-sm sm:text-base font-medium ${playwriteDKLoopet.className} text-[#A3C1AD] mb-1 sm:mb-2`}
                    >
                        Ihre Nachricht
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        required
                        rows={5}
                        value={formValues.message}
                        onChange={handleChange}
                        placeholder="Geben Sie hier Ihre Nachricht ein..."
                        className={`${glassInputBaseStyle} px-4 py-3 min-h-[120px] resize-y ${glassInputFocusStyle}`}
                    />
                </div>

                <div>
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className={`w-full px-6 py-3 text-base font-medium text-white 
                                    bg-[#A3C1AD]/90 hover:bg-[#A3C1AD] focus:bg-[#A3C1AD]
                                    disabled:bg-gray-400 disabled:cursor-not-allowed
                                    backdrop-blur-md border border-transparent rounded-lg shadow-md 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#8aa894] 
                                    transition-all duration-300 ease-in-out group`}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Senden...
                            </span>
                        ) : (
                            // <span className="flex items-center justify-center">
                            //     Nachricht senden <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            // </span>
                            "Nachricht senden"
                        )}
                    </button>
                </div>
                
                {status && (
                    <p className={`text-center text-sm mt-4 ${status.includes('erfolgreich') ? 'text-green-600' : 'text-red-600'}`}>
                        {status}
                    </p>
                )}
            </form>
             <p className="mt-10 text-center text-xs text-gray-600">
                Alternativ erreichen Sie uns auch direkt per E-Mail unter <a href="mailto:nora@schlossotto.de" className="text-[#A3C1AD] hover:text-[#8aa894] underline">nora@schlossotto.de</a>.
            </p>
        </div>
    );
}

export default ContactForm;