import Footer from "@/components/Footer";
import Imprint from "@/components/Imprint";
import Navbar from "@/components/Navbar";

const Imp = () => {
    return (
        <div className={`min-w-screen min-h-screen flex flex-col font-mono text-[#A3C1AD] `}>
            <Navbar />


            {/* IMPRINT SECTION */}
            <Imprint />


            {/* FOOTER SECTION */}
            <div>
                <Footer />
            </div>
        </div>


    )
}

export default Imp;