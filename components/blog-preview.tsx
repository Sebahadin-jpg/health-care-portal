import { Card } from "@/components/ui/card";

export function BlogPreview() {
  const posts = [
    { id: 'p1', title: 'Healthy eating tips for busy families', excerpt: 'Simple, affordable tips to nourish your family without the stress.' },
    { id: 'p2', title: 'Managing childhood fevers at home', excerpt: 'When to act and when to seek urgent care.' },
    { id: 'p3', title: 'Mental wellbeing during trying times', excerpt: 'Practical strategies for emotional resilience.' },
  ];

  return (
    <div id="blog">
      <h3 className="text-2xl font-bold">From our health blog</h3>
      <p className="mt-2 text-muted-foreground">Educational articles written by our clinicians.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(p => (
          <Card key={p.id} className="p-4">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
            <div className="mt-3">
              <a href={`/blog/${p.id}`} className="text-sm underline">Read article</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
