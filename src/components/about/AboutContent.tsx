import Image from "next/image";
import { bioFacts } from "@/lib/cv";

export default function AboutContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-16">
      {/* Portrait */}
      <div className="flex-shrink-0 lg:w-80">
        <div className="relative aspect-[4/5] overflow-hidden bg-paper">
          <Image
            src="/images/placeholder/portrait.svg"
            alt="Andreas Kopp"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 320px"
            priority
          />
        </div>
      </div>

      {/* Bio */}
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="font-serif text-2xl text-ink mb-4">Biography</h2>
          <div className="space-y-3">
            {bioFacts.map((fact, i) => (
              <p key={i} className="text-sm text-graphite leading-relaxed">
                {fact}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-graphite leading-relaxed">
            Andreas Kopp is a contemporary artist whose practice spans painting,
            installation, sculpture, and works in public space. His work has been
            shown internationally across Europe, the United States, and Japan,
            and has entered permanent collections and public commissions in
            Germany, Ireland, and Switzerland. Kopp is founding dean of the
            St. Moritz Art Academy and has taught at academies in Düsseldorf,
            Dresden, Cologne, and Bonn.
          </p>
        </div>
      </div>
    </div>
  );
}
