"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-sky-50 to-white/60 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`/logo.svg`} alt="Afran General Hospital logo" />
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold">Afran General Hospital</h1>
              <p className="text-xs text-muted-foreground">Addis Ababa · Trusted Care</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm hover:underline">Services</a>
          <a href="#doctors" className="text-sm hover:underline">Our Doctors</a>
          <a href="#blog" className="text-sm hover:underline">Health Blog</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <Button onClick={() => { const el = document.getElementById('booking'); el?.scrollIntoView({behavior: 'smooth'}); }}>Book Appointment</Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/80 border-t">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            <a href="#services" className="text-sm">Services</a>
            <a href="#doctors" className="text-sm">Our Doctors</a>
            <a href="#blog" className="text-sm">Health Blog</a>
            <a href="#contact" className="text-sm">Contact</a>
            <Button onClick={() => { const el = document.getElementById('booking'); el?.scrollIntoView({behavior: 'smooth'}); }}>Book Appointment</Button>
          </div>
        </div>
      )}
    </header>
  );
}
