import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const aboutMe = () => {
    return (
        <div className={`min-w-screen min-h-screen flex flex-col font-mono text-[#A3C1AD] `}>
            <Navbar />




            {/* FOOTER SECTION */}
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default aboutMe;