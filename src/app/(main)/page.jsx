import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Research } from '@/components/Research'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      {/* <Schedule /> */}
      <Sponsors />
      <Research />

      <Newsletter />
    </>
  )
}
