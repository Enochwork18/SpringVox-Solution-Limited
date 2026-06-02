import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting SpringVox Solution Limited. We will get back to you within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-20 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Thank You!
        </h1>
        <p className="text-muted text-base mb-2">
          We have received your message and will get back to you within 24
          hours.
        </p>
        <p className="text-muted text-sm mb-8">
          In the meantime, feel free to explore our products and services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/rekall-iq"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#0299b1] border border-[#0299b1]/40 rounded-xl hover:bg-[#0299b1]/10 transition-colors"
          >
            Explore ReKall-IQ
          </Link>
        </div>
      </div>
    </div>
  );
}
