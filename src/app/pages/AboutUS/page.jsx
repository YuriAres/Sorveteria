import Banner from '@/app/Components/AboutUS_components/Banner/Banner';
import InfoSection from '@/app/Components/AboutUS_components/Info_Section/InfoSection';
import PhotoSection from '@/app/Components/AboutUS_components/Photos_Section/Photos'

export default function AboutUsPage() {
    return (
        <main>
            <Banner />
            <InfoSection />
            <PhotoSection />
        </main>
    );
}