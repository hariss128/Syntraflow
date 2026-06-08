import ArchitectureSection from "@/components/ArchitectureSection/ArchitectureSection";
import ComparisonSection from "@/components/ComparisonSection/ComparisonSection";
import DemoSection from "@/components/DemoSection/DemoSection";
import FeedbackSection from "@/components/FeedbackSection/FeedbackSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import IndustrySection from "@/components/IndustrySection/IndustrySection";
import Navbar from "@/components/Navbar/Navbar";
import PeopleSection from "@/components/PeopleSection/PeopleSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.pageContent}>
        <HeroSection />
        <ArchitectureSection />
        <PeopleSection />
        <DemoSection />
        <FeedbackSection />
        <ComparisonSection />
        <IndustrySection />
      </main>
      <Footer />
    </>
  );
}
