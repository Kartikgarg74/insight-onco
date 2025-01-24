import Hero from '@/components/hero'
import WhatWeDo from '@/components/what-we-do'
import HealthcareAI from '@/components/healthcare-ai'
import SmartTeam from '@/components/smart-team'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <HealthcareAI />
      <SmartTeam />
    </main>
  )
}

