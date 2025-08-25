import { Card } from "@/components/ui/card";

export function Testimonials() {
  const items = [
    { quote: "The staff at AfyaCare were kind and professional. My child received excellent care.", author: 'Aisha M.' },
    { quote: "Booking was easy and the virtual consult saved me a long trip.", author: 'John K.' },
    { quote: "Timely follow-up and clear communication. Highly recommended.", author: 'Fatou S.' },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold">What our patients say</h3>
      <p className="mt-2 text-muted-foreground">Real stories from people in our community.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <Card key={i} className="p-4">
            <blockquote className="text-sm">“{t.quote}”</blockquote>
            <cite className="mt-3 block text-xs text-muted-foreground">— {t.author}</cite>
          </Card>
        ))}
      </div>
    </div>
  );
}
