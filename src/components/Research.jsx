import Image from 'next/image'

import { Container } from '@/components/Container'

export function Research() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto mb-20 text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Ecosystem Research
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
          Supported by the Web3 foundation we conducted an Ecosystem research
          study and proposed technical implementation designs. You can find the
          article below.
        </p>

        <div className="mt-20 flex justify-center">
          <iframe
            className="aspect-[4/4] w-10/12"
            src="https://hackmd.io/@pifragile/BkQKiNJqA"
          ></iframe>
        </div>
      </Container>
    </section>
  )
}
