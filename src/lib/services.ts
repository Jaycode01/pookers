import {
  IconPencil,
  IconFileText,
  IconBook,
  IconSpeakerphone,
  IconEdit,
} from "@tabler/icons-react";

export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  offeringsHeading: string;
  offerings: string[];
  steps: string[];
  reasons: string[];
  ctaLabel: string;
};

export type Service = {
  slug: string;
  icon: typeof IconPencil;
  title: string;
  description: string;
  tag: string;
  tagClass: string;
  iconBg: string;
  iconColor: string;
  detail?: ServiceDetail;
};

export const services: Service[] = [
  {
    slug: "copywriting",
    icon: IconPencil,
    title: "Copywriting",
    description:
      "Persuasive copywriting for Nigerian businesses — website content, ads, landing pages and marketing materials written to connect with your audience and drive action.",
    tag: "Writing",
    tagClass: "bg-blue-50 text-blue-900",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
    // DRAFT: review and edit before publishing
    detail: {
      metaTitle: "Professional Copywriting Services in Nigeria | Pookers",
      metaDescription:
        "Persuasive copywriting for Nigerian businesses: website content, ads, landing pages and marketing materials that connect with your audience and drive action.",
      headline: "Professional Copywriting Services in Nigeria",
      intro:
        "Words on a website, an ad or a landing page have one job: get the right person to act. We write copy for Nigerian businesses that speaks directly to your audience and turns attention into enquiries and sales.",
      offeringsHeading: "What We Write",
      offerings: [
        "Website content",
        "Landing pages",
        "Ads",
        "Service and product descriptions",
        "Marketing materials",
      ],
      steps: [
        "We learn your business, audience and goals",
        "We agree the message and tone",
        "We write the copy",
        "You review and we revise",
        "Final delivery",
      ],
      reasons: [
        "Written for Nigerian audiences",
        "Focused on getting people to act",
        "Clear, error-free copy",
        "Reliable delivery",
      ],
      ctaLabel: "Request Copywriting Service",
    },
  },
  {
    slug: "proofreading-editing",
    icon: IconEdit,
    title: "Proofreading & Editing",
    description:
      "Professional proofreading and editing services in Lagos. We carefully review your documents for grammar, clarity, tone and structure — from business reports to full manuscripts.",
    tag: "Editing",
    tagClass: "bg-green-50 text-green-900",
    iconBg: "bg-green-50",
    iconColor: "#3b6d11",
    // DRAFT: review and edit before publishing
    detail: {
      metaTitle:
        "Professional Proofreading & Editing Services in Lagos | Pookers",
      metaDescription:
        "Professional proofreading and editing in Lagos. We review manuscripts, business documents and articles line by line for grammar, clarity, tone and structure.",
      headline: "Professional Proofreading & Editing Services in Lagos",
      intro:
        "Errors and unclear sentences cost you credibility. We review your writing line by line for grammar, clarity, tone and structure, so it reads the way you meant it to.",
      offeringsHeading: "What We Proofread & Edit",
      offerings: [
        "Full manuscripts and books",
        "Business documents and reports",
        "Blog posts and articles",
      ],
      steps: [
        "You send us your document",
        "We review it line by line",
        "We correct and improve it",
        "You review the changes",
        "Final delivery",
      ],
      reasons: [
        "Experienced editors",
        "Close attention to detail",
        "Your voice stays yours",
        "Fast turnaround",
      ],
      ctaLabel: "Request Editing Service",
    },
  },
  {
    slug: "content-strategy",
    icon: IconFileText,
    title: "Content Strategy",
    description:
      "Clear content strategy for Nigerian brands — topic planning, publishing schedule and distribution approach designed to grow visibility and engage your audience.",
    tag: "Strategy",
    tagClass: "bg-amber-50 text-amber-900",
    iconBg: "bg-amber-50",
    iconColor: "#854f0b",
    // DRAFT: review and edit before publishing
    detail: {
      metaTitle: "Content Strategy Services for Nigerian Brands | Pookers",
      metaDescription:
        "Content strategy for Nigerian brands: topic planning, publishing schedule and a distribution plan built around your brand goals.",
      headline: "Content Strategy Services for Nigerian Brands",
      intro:
        "Posting without a plan wastes time and budget. We build a clear content strategy around your brand goals, covering what to publish, when to publish it and where to share it.",
      offeringsHeading: "What Your Strategy Covers",
      offerings: [
        "Topic planning",
        "Publishing schedule",
        "Distribution plan",
        "Alignment with your brand goals",
      ],
      steps: [
        "We learn your brand, goals and audience",
        "We research topics and channels",
        "We build your content strategy",
        "You review and we refine",
        "Final delivery",
      ],
      reasons: [
        "Built for Nigerian businesses and brands",
        "Tied to your brand goals",
        "A clear, practical plan you can follow",
        "Reliable delivery",
      ],
      ctaLabel: "Request Content Strategy",
    },
  },
  {
    slug: "ghostwriting",
    icon: IconBook,
    title: "Ghostwriting",
    description:
      "Professional ghostwriting services in Nigeria. We write articles, books, speeches and long-form content in your voice — you take full credit.",
    tag: "Writing",
    tagClass: "bg-blue-50 text-blue-900",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
    detail: {
      metaTitle: "Professional Ghostwriting Services in Nigeria | Pookers",
      metaDescription:
        "Professional ghostwriting services in Nigeria. We write books, articles, speeches and memoirs in your voice, and you take full credit.",
      headline: "Professional Ghostwriting Services in Nigeria",
      intro:
        "Have a book, story or idea but not the time, or the words, to finish it? Our ghostwriters turn your thoughts into polished writing in your own voice, from first conversation to final delivery. You take full credit for the finished work.",
      offeringsHeading: "What We Ghostwrite",
      offerings: [
        "Books and manuscripts",
        "Articles and blog posts",
        "Speeches",
        "Personal stories / memoirs",
        "Business and thought-leadership content",
      ],
      steps: [
        "We understand your voice and goals",
        "We research and create an outline",
        "We write the content",
        "You review and we revise",
        "Final delivery",
      ],
      reasons: [
        "100% original and confidential",
        "Written in your voice",
        "Experienced writers",
        "Reliable delivery",
      ],
      ctaLabel: "Request Ghostwriting Service",
    },
  },
  {
    slug: "sop-writing",
    icon: IconFileText, // you can change the icon later if you want
    title: "SOP Writing",
    description:
      "Professional Statement of Purpose writing for university admissions. Compelling, tailored SOPs that help Nigerian students stand out for UK, US, Canadian and other international programmes.",
    tag: "Academic",
    tagClass: "bg-purple-50 text-purple-900",
    iconBg: "bg-purple-50",
    iconColor: "#6b21a8",
    // DRAFT: review and edit before publishing
    detail: {
      metaTitle: "Professional SOP Writing Services in Nigeria | Pookers",
      metaDescription:
        "Professional Statement of Purpose writing for Nigerian students applying to UK, US, Canadian and other international universities.",
      headline: "Professional SOP Writing Services in Nigeria",
      intro:
        "Your Statement of Purpose is often the one part of an application you fully control. We turn your background, goals and reasons for choosing a programme into a focused, personal story for UK, US, Canadian and other international admissions.",
      offeringsHeading: "What We Write",
      offerings: [
        "Statements of Purpose (SOPs)",
        "Letters of Motivation",
        "Applications to UK, US, Canadian and other international programmes",
        "Urgent applications with tight deadlines",
      ],
      steps: [
        "You share your background, goals and target programme",
        "We plan the story of your application",
        "We write your SOP",
        "You review and we revise",
        "Final delivery",
      ],
      reasons: [
        "Tailored to you and your programme",
        "Written by experienced editors",
        "Original and confidential",
        "Fast turnaround",
      ],
      ctaLabel: "Request SOP Writing",
    },
  },
  {
    slug: "seo-content",
    icon: IconFileText,
    title: "SEO Content",
    description:
      "Search-optimised blog posts and landing pages for Nigerian businesses — written to rank on Google and turn visitors into customers.",
    tag: "SEO",
    tagClass: "bg-green-50 text-green-900",
    iconBg: "bg-green-50",
    iconColor: "#3b6d11",
    // DRAFT: review and edit before publishing
    detail: {
      metaTitle: "SEO Content Writing Services in Nigeria | Pookers",
      metaDescription:
        "Search-optimised blog posts and landing pages for Nigerian businesses, written to rank on Google and turn visitors into customers.",
      headline: "SEO Content Writing Services in Nigeria",
      intro:
        "Good content only works if the right people can find it. We write blog posts and landing pages built to rank on Google and turn visitors into paying customers.",
      offeringsHeading: "What We Write",
      offerings: ["Blog posts", "Landing pages", "Service descriptions"],
      steps: [
        "We learn your business, audience and goals",
        "We research keywords and topics",
        "We write search-optimised content",
        "You review and we revise",
        "Final delivery",
      ],
      reasons: [
        "Written for Nigerian audiences",
        "Optimised for Google and for readers",
        "Clear, error-free writing",
        "Reliable delivery",
      ],
      ctaLabel: "Request SEO Content",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
