"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
};

const DOCTORS: Doctor[] = [
  {
    id: 'dr-adenike',
    name: 'Dr. Adenike Njoroge',
    specialty: 'Family Medicine',
    bio: 'Experienced in community health and chronic disease management. Fluent in English and Kiswahili.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 'dr-mogaka',
    name: 'Dr. Kofi Mogaka',
    specialty: 'Pediatrics',
    bio: 'Child health specialist focused on preventive care and growth monitoring.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 'dr-adeleke',
    name: 'Dr. Amina Adeleke',
    specialty: 'Gynecology',
    bio: 'Providing compassionate reproductive health and prenatal services.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&auto=format',
  },
];

export function DoctorsSection() {
  const [selected, setSelected] = useState<Doctor | null>(null);

  return (
    <div id="doctors">
      <h3 className="text-2xl font-bold">Meet our doctors</h3>
      <p className="mt-2 text-muted-foreground max-w-2xl">Qualified specialists committed to high-quality, patient-centered care.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOCTORS.map((d) => (
          <Card key={d.id} className="p-4 hover:shadow-md cursor-pointer" onClick={() => setSelected(d)}>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={d.image} alt={d.name} />
              </Avatar>
              <div>
                <h4 className="font-semibold">{d.name}</h4>
                <p className="text-sm text-muted-foreground">{d.specialty}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{d.bio}</p>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={selected.image} alt={selected.name} />
              </Avatar>
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{selected.name}</h4>
                <p className="text-sm text-muted-foreground">{selected.specialty}</p>
                <p className="mt-3 text-sm">{selected.bio}</p>

                <div className="mt-4 flex gap-3">
                  <a href="#book-appointment">
                    <Button onClick={() => { const el = document.getElementById('book-appointment'); el?.scrollIntoView({behavior: 'smooth'}); }}>Book with {selected.name.split(' ')[0]}</Button>
                  </a>
                  <Button variant="outline" onClick={() => setSelected(null)}>Close</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="book-appointment" className="mt-10">
        <h4 className="text-lg font-bold">Book an appointment</h4>
        <p className="text-sm text-muted-foreground">Choose a doctor, select a date and time, and tell us about your concern.</p>

        <Card className="mt-4 p-6">
          <AppointmentForm doctors={DOCTORS} />
        </Card>
      </div>
    </div>
  );
}

function AppointmentForm({ doctors }: { doctors: Doctor[] }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [doctorId, setDoctorId] = useState(doctors[0]?.id || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      alert('Please complete required fields (name, phone, date, time).');
      return;
    }

    const doctor = doctors.find((d) => d.id === doctorId) || doctors[0];
    const booking = { id: `${Date.now()}`, name, email, phone, doctor: doctor.name, date, time, reason };

    // persist to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('afya_bookings') || '[]');
      existing.push(booking);
      localStorage.setItem('afya_bookings', JSON.stringify(existing));
      setConfirmed(true);
      // In a real app we'd notify the clinic via backend/email
    } catch (error) {
      console.error(error);
      alert('Failed to save booking locally.');
    }
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {confirmed ? (
        <div className="col-span-full p-4 bg-emerald-50 rounded-md">
          <h5 className="font-semibold">Appointment confirmed</h5>
          <p className="text-sm text-muted-foreground">Thank you, {name}. We have confirmed your appointment with {doctors.find(d => d.id === doctorId)?.name} on {date} at {time}. A confirmation has been saved locally.</p>
          <div className="mt-3">
            <Button onClick={() => { setConfirmed(false); setName(''); setEmail(''); setPhone(''); setReason(''); setDate(''); setTime(''); }}>Book another</Button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <label className="text-sm font-medium">Patient name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
          </div>

          <div>
            <label className="text-sm font-medium">Phone number</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +254712345678" />
          </div>

          <div>
            <label className="text-sm font-medium">Email (optional)</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div>
            <label className="text-sm font-medium">Doctor</label>
            <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="w-full rounded-md border px-3 py-2">
              {doctors.map(d => <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Date</label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-medium">Time</label>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Reason for visit (brief)</label>
            <Input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. cough, follow-up" />
          </div>

          <div className="md:col-span-2 flex gap-3">
            <Button type="submit">Confirm Appointment</Button>
            <Button variant="outline" onClick={() => { setName(''); setEmail(''); setPhone(''); setReason(''); setDate(''); setTime(''); }}>Reset</Button>
          </div>
        </>
      )}
    </form>
  );
}
