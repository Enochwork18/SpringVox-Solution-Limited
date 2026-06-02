import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SpringVox Solution Limited Terms of Service - Terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 h-1 w-16 bg-[#0299b1] rounded-full" />
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website and services provided by{" "}
              {COMPANY.name} (&ldquo;SpringVox,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by
              these Terms of Service. If you do not agree, please do not use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Description of Services
            </h2>
            <p>
              SpringVox provides software development, AI solutions,
              cybersecurity, cloud infrastructure, digital transformation
              consulting, and related technology services. Specific terms for
              each engagement will be outlined in separate service agreements or
              statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content, designs, code, documentation, and materials on our
              website are the intellectual property of SpringVox unless
              otherwise stated. You may not reproduce, distribute, or create
              derivative works without our express written consent.
            </p>
            <p className="mt-3">
              For custom development projects, intellectual property ownership
              will be defined in the applicable service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. User Obligations
            </h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Provide accurate and current information when using our forms or
                services
              </li>
              <li>
                Use our website and services in compliance with applicable laws
              </li>
              <li>
                Not misuse our platform for illegal or unauthorized purposes
              </li>
              <li>Not attempt to disrupt or compromise our systems</li>
              <li>Not upload malicious code or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, SpringVox shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our website or services.
              Our total liability for any claim shall not exceed the amount paid
              by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Disclaimer of Warranties
            </h2>
            <p>
              Our website and services are provided &ldquo;as is&rdquo; without
              warranties of any kind, either express or implied. We do not
              guarantee uninterrupted or error-free operation, and we are not
              responsible for any downtime or data loss.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services.
              We are not responsible for the content, privacy practices, or
              availability of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              website or services at our discretion, without prior notice, for
              conduct that we deem violates these terms or is harmful to our
              users or business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of the Federal Republic of Nigeria. Any disputes arising
              under these terms shall be subject to the exclusive jurisdiction
              of the courts of Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              our website or services after changes constitutes acceptance of
              the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Contact
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#0299b1] hover:underline"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
