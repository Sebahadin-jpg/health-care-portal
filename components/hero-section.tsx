/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Compassionate care, close to home</h2>
        <p className="text-lg text-muted-foreground max-w-xl">Afran General Hospital is Addis Ababa&apos;s trusted destination for primary and specialist care. Book appointments, meet our doctors, and access expert health resources tailored for our community.</p>

        <div className="flex gap-3">
          <a href="#booking">
            <Button size="lg">Book an Appointment</Button>
          </a>
          <a href="#services">
            <Button variant="outline" size="lg">Our Services</Button>
          </a>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">Open Mon - Sat · Emergency contacts in the footer · Virtual consultations available</div>
      </div>

      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-tr from-sky-50 to-white p-6">
          <img loading="lazy" src={`https://images.unsplash.com/photo-1587502536263-2a3a4c17d3b5?w=1200&h=800&fit=crop&auto=format`} alt="Healthcare team" className="w-full h-72 object-cover rounded-lg" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="text-sm font-semibold">Virtual Consultations</h4>
              <p className="text-xs text-muted-foreground">Secure video calls with our specialists.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="text-sm font-semibold">Emergency Care</h4>
              <p className="text-xs text-muted-foreground">24/7 urgent support and triage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
