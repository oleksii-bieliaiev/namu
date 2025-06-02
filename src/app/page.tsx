"use client"; 

import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import RomAndClassics from '@/components/RomAndClassics';
import Subscription from '@/components/Subscription';
import Header from '@/components/Header';
import CurrentEvents from '@/components/CurrentEvents';

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
