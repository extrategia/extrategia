/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Experience } from "./components/Experience";
import { TargetAudience } from "./components/TargetAudience";
import { Benefits } from "./components/Benefits";
import { Team } from "./components/Team";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Experience />
        <TargetAudience />
        <Benefits />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
