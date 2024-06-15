import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/app/Components/Homepage_components/Banner/Banner'
import InfoSection from '@/app/Components/Homepage_components/Info_Section/Info_section'

export default function Home() {
  return (
    <main>
      <Banner />
      <InfoSection />
    </main>
  );
}
