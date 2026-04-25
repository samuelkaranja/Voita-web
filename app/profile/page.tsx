import { Metadata } from 'next';
import Hero from '@/components/profile/Hero';
import AutomotiveClarity from '@/components/profile/AutomotiveClarity';
import Excellence from '@/components/profile/Excellence';

export const metadata: Metadata = {
  title: 'Voita | Your Car\'s Vital Records, Mastered',
  description: 'From gearbox oil specs to license renewals, Voita keeps your automotive life organized in one secure digital archive. Download the app today.',
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <Hero />
      <AutomotiveClarity />
      <Excellence />
    </main>
  );
}
