"use client";
import { Playwrite_DK_Loopet } from 'next/font/google';

const playwriteDKLoopet = Playwrite_DK_Loopet({
    weight: ['100', '200', '300', '400'], // Stellen Sie sicher, dass 'font-medium' (500) und 'font-semibold' (600) unterstützt werden oder passen Sie die Klassen an
});

// Beispielhaftes Datum, passen Sie dies an.
const lastUpdatedDate = "27. Mai 2025";

const PrivacyPolicy = () => {
    return (
        <div className="w-full flex-grow flex flex-col items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">

            <h1 
                className={`text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3rem] font-semibold ${playwriteDKLoopet.className} text-[#A3C1AD] mb-6 sm:mb-8 md:mb-10 border-b border-[#A3C1AD]/50 pb-3 sm:pb-4 text-center`}
            >
                Datenschutzerklärung
            </h1>
            
            <div className="w-full max-w-3xl space-y-8 md:space-y-10 text-[#151515]">
                
                <section aria-labelledby="general-intro-heading">
                    <h2 
                        id="general-intro-heading"
                        className={`${playwriteDKLoopet.className} text-[#A3C1AD] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        1. Datenschutz auf einen Blick
                    </h2>
                    <h3 className="text-lg font-semibold text-[#151515] mt-4 mb-2">Allgemeine Hinweise</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                    <h3 className="text-lg font-semibold text-[#151515] mt-4 mb-2">Datenerfassung auf dieser Website</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                        <strong>Wie erfassen wir Ihre Daten?</strong><br/>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder uns per E-Mail senden.
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>
                     <p className="text-sm sm:text-base leading-relaxed mb-2">
                        <strong>Wofür nutzen wir Ihre Daten?</strong><br/>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden (sofern entsprechende Tools eingesetzt und Sie eingewilligt haben).
                    </p>
                     <p className="text-sm sm:text-base leading-relaxed">
                        <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br/>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                    </p>
                </section>

                <section aria-labelledby="controller-heading">
                    <h2 
                        id="controller-heading"
                        className={`${playwriteDKLoopet.className} text-[#A3C1AD] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        2. Verantwortliche Stelle
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <address className="not-italic text-sm sm:text-base leading-relaxed my-2">
                        Nora Otto<br/>
                        Waldbadstr. 40<br/>
                        04924 Bad Liebenwerda OT Zeischa<br/>
                        Deutschland
                    </address>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Telefon: +49 173 9831363<br/>
                        E-Mail: <a href="mailto:nora@schlossotto.de" className="text-[#A3C1AD] hover:text-[#8aa894] underline transition-colors duration-200">nora@schlossotto.de</a>
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mt-2">
                        Die verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                    </p>
                </section>

                <section aria-labelledby="hosting-heading">
                    <h2 
                        id="hosting-heading"
                        className={`${playwriteDKLoopet.className} text-[#A3C1AD] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        3. Hosting und Content Delivery Networks (CDN)
                    </h2>
                    <h3 className="text-lg font-semibold text-[#151515] mt-4 mb-2">Externes Hosting mit Netlify</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Diese Website wird bei Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA (nachfolgend &quot;Netlify&quot;) gehostet.
                        Netlify ist ein Dienst zur Bereitstellung, Verteilung und Verwaltung von Webseiten und Webanwendungen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Wenn Sie unsere Website besuchen, erfasst Netlify verschiedene Logfiles einschließlich Ihrer IP-Adressen. Netlify speichert diese Server-Logfiles nach eigenen Angaben für 30 Tage, um die Sicherheit und Funktionsfähigkeit der Dienste zu gewährleisten. Details hierzu finden Sie in der Datenschutzerklärung von Netlify: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#A3C1AD] hover:text-[#8aa894] underline transition-colors duration-200">https://www.netlify.com/privacy/</a> und Informationen zur DSGVO-Konformität: <a href="https://www.netlify.com/gdpr-ccpa/" target="_blank" rel="noopener noreferrer" className="text-[#A3C1AD] hover:text-[#8aa894] underline transition-colors duration-200">https://www.netlify.com/gdpr-ccpa/</a>.
                    </p>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Die Nutzung von Netlify erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Wir haben mit Netlify einen Vertrag zur Auftragsverarbeitung (Data Processing Agreement, DPA) abgeschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass Netlify die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet. Netlify nutzt für die Datenübertragung in die USA Standardvertragsklauseln (Standard Contractual Clauses – SCC) der Europäischen Kommission, um ein angemessenes Datenschutzniveau sicherzustellen.
                    </p>
                </section>

                <section aria-labelledby="rights-heading">
                    <h2 
                        id="rights-heading"
                        className={`${playwriteDKLoopet.className} text-[#A3C1AD] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        4. Ihre Rechte als betroffene Person
                    </h2>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">Ihnen stehen als betroffene Person nach der DSGVO verschiedene Rechte zu, die nachfolgend erläutert werden:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                        <li>
                            <strong>Auskunftsrecht gemäß Art. 15 DSGVO:</strong> Sie haben das Recht, Auskunft darüber zu verlangen, ob und welche Daten von Ihnen bei uns verarbeitet werden.
                        </li>
                        <li>
                            <strong>Recht auf Berichtigung gemäß Art. 16 DSGVO:</strong> Sie haben das Recht, die unverzügliche Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.
                        </li>
                        <li>
                            <strong>Recht auf Löschung („Recht auf Vergessenwerden“) gemäß Art. 17 DSGVO:</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten Daten zu verlangen, soweit keine gesetzlichen Aufbewahrungspflichten oder andere rechtliche Gründe dem entgegenstehen.
                        </li>
                        <li>
                            <strong>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO:</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen, wenn bestimmte Voraussetzungen erfüllt sind.
                        </li>
                        <li>
                            <strong>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO:</strong> Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                        </li>
                        <li>
                            <strong className="text-red-600">Widerspruchsrecht gemäß Art. 21 DSGVO:</strong> Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.
                        </li>
                         <li>
                            <strong>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO:</strong> Sie haben das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft zu widerrufen.
                        </li>
                        <li>
                            <strong>Recht auf Beschwerde bei einer Aufsichtsbehörde gemäß Art. 77 DSGVO:</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden. (Fügen Sie hier ggf. die Kontaktdaten der für Sie zuständigen Aufsichtsbehörde hinzu.)
                        </li>
                    </ul>
                </section>

                <section aria-labelledby="data-collection-heading">
                    <h2 
                        id="data-collection-heading"
                        className={`${playwriteDKLoopet.className} text-[#A3C1AD] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        5. Datenerfassung auf dieser Website
                    </h2>
                    <h3 className="text-lg font-semibold text-[#151515] mt-4 mb-2">Cookies</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens.
                    </p>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                    </p>
                    {/* Hier ggf. hinzufügen, falls ein Cookie-Consent-Tool verwendet wird */}

                    <h3 className="text-lg font-semibold text-[#151515] mt-6 mb-2">Server-Log-Dateien (durch Netlify)</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Der Provider der Seiten (Netlify, siehe Abschnitt &quot;Hosting&quot;) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns bzw. Netlify übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed mb-3">
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse (wird von Netlify für 30 Tage gespeichert und dient u.a. Sicherheitszwecken)</li>
                    </ul>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Sicherheit seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                    </p>

                    <h3 className="text-lg font-semibold text-[#151515] mt-6 mb-2">Kontaktaufnahme per E-Mail oder Telefon</h3>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                    </p>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                    </p>

                    <h3 className="text-lg font-semibold text-[#151515] mt-6 mb-2">Google Fonts (Lokal gehostet)</h3>
                     <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Einbindung dieser Schriftart (`Playwrite_DK_Loopet`) erfolgt durch `next/font/google`, welches die Schriftart bei der Erstellung der Webseite herunterlädt und lokal auf dem Webserver speichert. Dadurch wird beim Besuch dieser Webseite keine direkte Verbindung zu Servern von Google hergestellt und keine Daten (wie Ihre IP-Adresse) an Google übertragen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                        Die Nutzung von lokal gehosteten Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                    </p>

                </section>

                <section aria-labelledby="security-heading">
                     <h2 
                        id="security-heading"
                        className={`${playwriteDKLoopet.className} text-[#A3C1AD] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        6. SSL/TLS-Verschlüsselung
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>
                </section>


                <section aria-labelledby="changes-heading">
                    <h2 
                        id="changes-heading"
                        className={`${playwriteDKLoopet.className} text-[#A3C1AD] mb-3 sm:mb-4 text-xl sm:text-[1.3rem] font-medium`}
                    >
                        7. Aktualität und Änderung dieser Datenschutzerklärung
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mt-2">
                        Stand: {lastUpdatedDate}
                    </p>
                </section>

            </div>
        </div>
    );
}

export default PrivacyPolicy;