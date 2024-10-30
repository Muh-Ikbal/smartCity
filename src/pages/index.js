import Image from "next/image";
import localFont from "next/font/local";
import Hero from "../components/Hero";
import NavbarSection from "@/components/NavbarSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import MapSection from "@/components/MapSection";
import Testimoni from "@/components/Testimoni";
// React
import { motion } from "framer-motion"
// React Server Components
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col overflow-hidden bg-white" style={{ fontFamily:'Axioforma,sans-serif' }}>
            <NavbarSection />
            <Hero />
            <AboutSection id="about" />
            <ServiceSection />
            <BlogSection/>
            <Testimoni/>
            <MapSection/>
            <ContactSection/>
            <FooterSection/>
        </main>
    );
}
