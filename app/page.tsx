import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyNatural } from "@/components/why-natural"
import { ProductsSection } from "@/components/products-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyNatural />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
