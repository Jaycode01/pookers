import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { services } from "@/lib/services";

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
              Professional Writing, Editing & Proofreading Services in Lagos
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

            const card = (
              <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col w-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-150">
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
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${service.tagClass}`}
                  >
                    {service.tag}
                  </span>
                  {service.detail && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600">
                      Learn more
                      <IconArrowRight size={14} />
                    </span>
                  )}
                </div>
              </div>
            );

            return service.detail ? (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex"
              >
                {card}
              </Link>
            ) : (
              <div key={service.slug} className="flex">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
