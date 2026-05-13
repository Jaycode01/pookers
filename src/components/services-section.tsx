import {
  IconPencil,
  IconFileText,
  IconBook,
  IconSpeakerphone,
  IconEdit,
  IconArrowRight,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconPencil,
    title: "Copywriting",
    description:
      "Persuasive copywriting for Nigerian businesses — websites, ads, and marketing materials written to speak directly to your audience and drive real action",
    tag: "Writing",
    tagClass: "bg-blue-50 text-blue-900",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
  },
  {
    icon: IconEdit,
    title: "Proofreading & Editing",
    description:
      "Professional proofreading and editing services in Lagos — line-by-line review for clarity, tone, and grammar across blog posts, business documents, and full manuscripts.",
    tag: "Editing",
    tagClass: "bg-green-50 text-green-900",
    iconBg: "bg-green-50",
    iconColor: "#3b6d11",
  },
  {
    icon: IconFileText,
    title: "Content Strategy",
    description:
      "A clear content strategy aligned to your brand goals — topics, publishing schedule, and distribution plan built specifically for Nigerian businesses and brands.",
    tag: "Strategy",
    tagClass: "bg-amber-50 text-amber-900",
    iconBg: "bg-amber-50",
    iconColor: "#854f0b",
  },
  {
    icon: IconBook,
    title: "Ghost Writing",
    description:
      "Professional ghostwriting services in Nigeria — articles, thought-leadership pieces, and long-form content written in your voice, fully credited to you.",
    tag: "Writing",
    tagClass: "bg-blue-50 text-blue-900",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
  },
  {
    icon: IconSpeakerphone,
    title: "Brand Messaging",
    description:
      "Taglines, brand voice guides, and positioning statements for Nigerian businesses and startups that make you instantly recognizable and memorable.",
    tag: "Branding",
    tagClass: "bg-pink-50 text-pink-900",
    iconBg: "bg-pink-50",
    iconColor: "#993556",
  },
  {
    icon: IconFileText,
    title: "SEO Content",
    description:
      "Search-optimised blog posts and landing pages built to rank and convert.Search-optimised blog posts and landing pages for Nigerian businesses — built to rank on Google and convert visitors into paying customers.",
    tag: "SEO",
    tagClass: "bg-green-50 text-green-900",
    iconBg: "bg-green-50",
    iconColor: "#3b6d11",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f7f6f2] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              What We Do
            </p>
            <h2 className="text-3xl font-medium text-gray-900 leading-snug max-w-sm">
              Editorial & Writing Services That Get Your Words Working in
              Nigeria.
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
          >
            Request a Service
            <IconArrowRight size={16} />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col hover:-translate-y-0.5 hover:shadow-md transition-all duration-150"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${service.iconBg}`}
                >
                  <Icon size={20} color={service.iconColor} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>
                <span
                  className={`mt-3 self-start text-xs font-medium px-2.5 py-1 rounded-full ${service.tagClass}`}
                >
                  {service.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
