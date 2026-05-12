import { IconDownload, IconFileText } from "@tabler/icons-react";

export default function WorkSamples() {
  const samples = [
    {
      slug: "change-i-want-to-make",
      title: "The Change I Want to Make",
      description:
        "A reflective essay on Nigeria's student intellectualism and national progress.",
      downloadUrl: "samples/the-change-i-want-to-make.docx",
      tag: "Essay",
      tagClass: "bg-blue-50 text-blue-900",
    },
    {
      slug: "innovative-social-initiative",
      title: "Innovative Social Initiative",
      description:
        "An analytical piece proposing CSR-driven solutions to youth unemployment and social change.",
      downloadUrl: "samples/innovative-social-initiatives.docx",
      tag: "Analysis",
      tagClass: "bg-amber-50 text-amber-900",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 md:py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
            Our work
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-white leading-snug max-w-sm"
            >
              Work samples.
            </h2>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              A glimpse into what we produce — download and see the quality for
              yourself.
            </p>
          </div>
          <div className="mt-6 h-px bg-white/10 w-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {samples.map((sample, i) => (
            <div
              key={sample.slug}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-200"
            >
              {/* Icon + Tag row */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <IconFileText size={18} color="white" strokeWidth={1.5} />
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${sample.tagClass}`}
                >
                  {sample.tag}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-playfair text-xl font-medium text-white leading-snug">
                  {sample.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {sample.description}
                </p>
              </div>

              <div className="h-px bg-white/10 w-full" />

              {/* CTA */}
              <a
                href={sample.downloadUrl}
                download
                className="self-start inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
              >
                <IconDownload size={15} strokeWidth={2} />
                Download sample
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
