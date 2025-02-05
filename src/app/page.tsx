"use client"; 

import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import RomAndClassics from '@/components/RomAndClassics';
import Subscription from '@/components/Subscription';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const CurrentEvents  = dynamic(() => import('@/components/CurrentEvents'), { ssr: false });

export default function Home() {
  return (
    <main className="relative scroll-smooth bg-white h-screen box-border">
      <Header />
      <CurrentEvents />
      <RomAndClassics />
      <Gallery />
      <Subscription />
      <Footer />
    </main>
  );
}
