import PrivacyPolicy from "@/components/DataSecure";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Datasecure = () => {
    return (
        <div className={`min-w-screen min-h-screen flex flex-col font-mono text-[#A3C1AD] `}>
            <Navbar />



            {/* MAIN CONTENT SECTION */}
            <PrivacyPolicy />

            {/* FOOTER SECTION */}
            <div>
                <Footer />
            </div>
        </div>


    )
}

export default Datasecure;