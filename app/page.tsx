"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { DoctorsSection } from "@/components/doctors";
import { Testimonials } from "@/components/testimonials";
import { BlogPreview } from "@/components/blog-preview";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navigation />

      <div className="container mx-auto px-6 py-12">
        <HeroSection />

        <section className="mt-16">
          <ServicesSection />
        </section>

        <section className="mt-20">
          <DoctorsSection />
        </section>

        <section className="mt-20">
          <Testimonials />
        </section>

        <section className="mt-20">
          <BlogPreview />
        </section>
      </div>

      <Footer />
    </main>
  );
}
