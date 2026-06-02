import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SpringVox Solution Limited Privacy Policy - How we collect, use, and protect your personal information in compliance with NDPR and GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 h-1 w-16 bg-[#0299b1] rounded-full" />
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              {COMPANY.name} (&ldquo;SpringVox,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
            <p className="mt-3">
              By using our website and services, you consent to the practices
              described in this policy. If you do not agree, please do not use
              our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <h3 className="text-white font-medium mb-2">
              Personal Information
            </h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fill out a contact or consultation form</li>
              <li>Sign up for our waitlist or pilot program</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
              <li>Submit a testimonial or case study</li>
            </ul>
            <p className="mt-2">
              This information may include your name, email address, phone
              number, company name, and any other details you provide.
            </p>

            <h3 className="text-white font-medium mt-4 mb-2">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we may automatically collect certain
              information including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent</li>
              <li>Device type and operating system</li>
              <li>Referring URL and exit pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your inquiries and service requests</li>
              <li>
                Process consultation bookings and pilot program applications
              </li>
              <li>Improve our website and services</li>
              <li>
                Send relevant communications about our products and services
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Data Protection & Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These measures include
              encryption, access controls, and secure server infrastructure.
            </p>
            <p className="mt-3">
              In compliance with the Nigeria Data Protection Regulation (NDPR),
              we ensure that your data is processed lawfully, fairly, and
              transparently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information only as long as necessary to
              fulfill the purposes for which it was collected, or as required by
              applicable law. When no longer needed, we securely delete or
              anonymize your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Your Rights
            </h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request portability of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#0299b1] hover:underline"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Third-Party Services
            </h2>
            <p>
              We may use third-party services for analytics, hosting, email
              delivery, and payment processing. These service providers have
              their own privacy policies governing the use of your information.
              We encourage you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the updated policy
              on this page with a revised date. We encourage you to review this
              policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#0299b1] hover:underline"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p>Location: {COMPANY.location}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
