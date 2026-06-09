import { awards, exhibitions } from "@/lib/cv";

export default function CVList() {
  return (
    <div className="space-y-16">
      {/* Awards */}
      <section>
        <h2 className="font-serif text-2xl text-ink mb-8">Awards &amp; Residencies</h2>
        <div className="space-y-4">
          {awards.map((a, i) => (
            <div key={i} className="flex gap-8 border-b border-line pb-4">
              <span className="text-sm text-graphite w-10 flex-shrink-0">{a.year}</span>
              <p className="text-sm text-ink leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exhibitions */}
      <section>
        <h2 className="font-serif text-2xl text-ink mb-8">Selected Exhibitions</h2>
        <div className="space-y-6">
          {exhibitions.map((group) => (
            <div key={group.year} className="flex gap-8">
              <span className="text-sm text-graphite w-10 flex-shrink-0 pt-0.5">{group.year}</span>
              <ul className="flex-1 space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="text-sm text-ink leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
