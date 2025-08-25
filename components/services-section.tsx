import { Card } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    { title: 'Primary Care', desc: 'General consultations, chronic disease management, immunizations.' },
    { title: 'Pediatrics', desc: 'Comprehensive care for infants, children, and adolescents.' },
    { title: 'Gynecology', desc: 'Women\'s health, prenatal care, and family planning.' },
    { title: 'Mental Health', desc: 'Counseling and psychiatric services.' },
    { title: 'Laboratory', desc: 'On-site diagnostics and imaging.' },
    { title: 'Telemedicine', desc: 'Remote consultations for non-emergency care.' },
  ];

  return (
    <div id="services">
      <h3 className="text-2xl font-bold">Services we provide</h3>
      <p className="mt-2 text-muted-foreground max-w-2xl">A broad range of outpatient and specialist services designed around the needs of our community.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
