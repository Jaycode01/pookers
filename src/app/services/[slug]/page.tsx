import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import Footer from "@/components/footer";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services
    .filter((service) => service.detail)
    .map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service?.detail) return {};

  const { metaTitle, metaDescription } = service.detail;
  const url = `https://pookers.com.ng/services/${slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service?.detail) notFound();

  const {
    headline,
    intro,
    offeringsHeading,
    offerings,
    steps,
    reasons,
    ctaLabel,
  } = service.detail;

  return (
    <>
      <main className="bg-[#f7f6f2] px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <IconArrowLeft size={16} />
            Back to Services
          </Link>

          {/* Headline + intro */}
          <h1 className="font-playfair text-3xl md:text-5xl font-medium text-gray-900 leading-snug mt-8">
            {headline}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-6">
            {intro}
          </p>

          <section className="mt-14">
            <h2 className="text-xl font-medium text-gray-900 mb-5">
              {offeringsHeading}
            </h2>
            <ul className="flex flex-col gap-3">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <IconCheck
                    size={18}
                    color={service.iconColor}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-xl font-medium text-gray-900 mb-5">
              How It Works
            </h2>
            <ol className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium ${service.iconBg}`}
                    style={{ color: service.iconColor }}
                  >
                    {index + 1}
                  </span>
                  <span className="pt-1 text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="text-xl font-medium text-gray-900 mb-5">
              Why Choose Pookers
            </h2>
            <ul className="flex flex-col gap-3">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <IconCheck
                    size={18}
                    color={service.iconColor}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                  />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14">
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:opacity-85 transition-opacity"
            >
              {ctaLabel}
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
