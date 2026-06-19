import React, { useEffect } from 'react';
import { FiCpu, FiArrowLeft, FiMail, FiShield } from 'react-icons/fi';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of these Terms',
    content: (
      <>
        <p>
          These Terms and Conditions ("Terms") form a binding agreement between you ("you", "User") and <strong className="text-white">Tarasaka Digital Solutions</strong>, a sole proprietorship based in India, operating Mediamation (the "Service"). By creating an account, accessing, or using the Service, you agree to be bound by these Terms and our Privacy Policy, which is incorporated by reference. If you do not agree, do not use the Service.
        </p>
        <p className="mt-3">
          If you are using the Service on behalf of a business or other entity, you represent that you have authority to bind that entity, and "you" refers to both you and that entity.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: '2. Eligibility',
    content: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>You must be at least 18 years old, or the age of majority in your jurisdiction, to create an account.</li>
        <li>You must have the legal right to use and grant access to any social media accounts you connect to the Service.</li>
        <li>You must not be barred from using the Service under the laws of India, your home country, or any other applicable jurisdiction.</li>
      </ul>
    ),
  },
  {
    id: 'description',
    title: '3. Description of the Service',
    content: (
      <p>
        Mediamation allows you to upload images and content, generate captions using AI tools, and schedule and publish posts to third-party social media platforms you connect, including Facebook, Instagram, Pinterest, Tumblr, and Threads (collectively, "Connected Platforms"). Available features depend on your subscription plan, described at <a href="https://mediamation.tarasaka.com/pricing" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">mediamation.tarasaka.com/pricing</a>.
      </p>
    ),
  },
  {
    id: 'account',
    title: '4. Your Account',
    content: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</li>
        <li>You must provide accurate, current information when creating your account and keep it up to date.</li>
        <li>Notify us immediately at <a href="mailto:info.tarasaka@gmail.com" className="text-brand-cyan hover:underline">info.tarasaka@gmail.com</a> if you suspect unauthorized access to your account.</li>
        <li>One account may not be shared across multiple unrelated individuals or businesses except as expressly permitted under a Growth or Agency plan with multiple seats.</li>
      </ul>
    ),
  },
  {
    id: 'third-party',
    title: '5. Connecting Third-Party Platforms',
    content: (
      <>
        <p>To use core scheduling features, you must connect your social media accounts via the official OAuth authorization flow provided by each platform. By connecting an account, you:</p>
        <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
          <li>Grant us permission to access and post content to that account strictly as instructed by you through the Service</li>
          <li>Confirm that connecting the account does not violate that platform's own terms of service</li>
          <li>Acknowledge that your use of each Connected Platform remains subject to that platform's own terms, community guidelines, and policies, which we do not control</li>
        </ul>
        <p className="mt-3">
          Tarasaka Digital Solutions is not responsible for actions taken by Connected Platforms, including suspension, restriction, or termination of your account on that platform, removal of content, or changes to that platform's API that affect functionality. We will make reasonable efforts to adapt to API changes but cannot guarantee uninterrupted compatibility with any third-party platform.
        </p>
      </>
    ),
  },
  {
    id: 'content',
    title: '6. Content You Submit',
    content: (
      <>
        <h4 className="font-semibold text-white mt-2 mb-1">6.1 Ownership</h4>
        <p>You retain all ownership rights to the images, text, and other content you upload or create through the Service ("Your Content"). We do not claim ownership over Your Content.</p>

        <h4 className="font-semibold text-white mt-4 mb-1">6.2 License You Grant Us</h4>
        <p>To operate the Service, you grant us a limited, non-exclusive, royalty-free, worldwide license to host, store, reproduce, and transmit Your Content solely for the purpose of providing the Service to you, including publishing it to the Connected Platforms you select. This license ends when you delete Your Content or close your account, except for content already published to a Connected Platform (which is then governed by that platform's terms) or copies retained in routine backups for a limited period.</p>

        <h4 className="font-semibold text-white mt-4 mb-1">6.3 Your Responsibilities and Prohibited Content</h4>
        <p>You are solely responsible for Your Content and confirm that it does not, and your use of the Service will not:</p>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
          <li>Infringe any copyright, trademark, publicity, privacy, or other right of any third party</li>
          <li>Contain unlawful, defamatory, obscene, hateful, or harassing material</li>
          <li>Violate the community guidelines or terms of any Connected Platform</li>
          <li>Contain malware or any code intended to disrupt the Service or any Connected Platform</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
        </ul>
        <p className="mt-3">We may remove Your Content or suspend your account if we reasonably believe it violates this Section, applicable law, or poses a risk to the Service or others, and will notify you where reasonably practicable.</p>
      </>
    ),
  },
  {
    id: 'ai-captions',
    title: '7. AI-Generated Captions and Suggestions',
    content: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Caption text, hashtag suggestions, and similar outputs generated by our AI tools are provided as drafts for your review and editing — not as final, ready-to-publish content.</li>
        <li>You are solely responsible for reviewing AI-generated content before publishing, including for accuracy, appropriateness, and compliance with the rules of each Connected Platform and applicable law.</li>
        <li>We do not guarantee that AI-generated captions are accurate, original, free of third-party rights, or suitable for your specific use case.</li>
        <li>Publishing AI-generated content through the Service is your decision and your responsibility.</li>
      </ul>
    ),
  },
  {
    id: 'billing',
    title: '8. Subscription Plans, Fees, and Billing',
    content: (
      <>
        <h4 className="font-semibold text-white mt-2 mb-1">8.1 Plans</h4>
        <p>The Service is offered on a freemium basis with a Free plan and paid plans (Starter, Growth, Agency, and any others introduced from time to time), described at <a href="https://mediamation.tarasaka.com/pricing" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">mediamation.tarasaka.com/pricing</a>. Pricing is shown in INR for users billed in India and in USD for users billed elsewhere, determined by your billing address and/or IP-based location at signup.</p>

        <h4 className="font-semibold text-white mt-4 mb-1">8.2 Billing and Renewal</h4>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
          <li>Paid plans are billed in advance on a monthly or annual basis, as selected by you, and automatically renew at the end of each billing period unless cancelled before the renewal date.</li>
          <li>Payments are processed through our third-party payment processors (Razorpay for India, Stripe for international users); we do not store your full payment card or UPI credentials.</li>
          <li>You authorize us (via our payment processor) to charge your chosen payment method for all applicable fees.</li>
        </ul>

        <h4 className="font-semibold text-white mt-4 mb-1">8.3 Price Changes and Locked-In Pricing</h4>
        <p>Where we have offered you a locked-in introductory or early-bird price, that price will remain in effect for your subscription for as long as your subscription remains continuously active, subject to the specific terms of that offer communicated to you at signup. For all other plans, we may change our fees with at least 30 days' advance notice by email or in-product notice; continued use after a price change takes effect constitutes acceptance of the new price.</p>

        <h4 className="font-semibold text-white mt-4 mb-1">8.4 Refunds and Cancellation</h4>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
          <li>You may cancel your subscription at any time through your account settings; cancellation takes effect at the end of the current billing period, and you will retain access until then.</li>
          <li>Fees already paid are non-refundable except where required by applicable consumer protection law, or at our discretion in cases of billing error or service failure attributable to us.</li>
          <li>Indian consumers may additionally have rights under the Consumer Protection Act, 2019 and related e-commerce rules, which this Section does not limit.</li>
        </ul>

        <h4 className="font-semibold text-white mt-4 mb-1">8.5 Taxes</h4>
        <p>Listed prices are exclusive of applicable taxes (including GST in India) unless stated otherwise. You are responsible for any taxes associated with your purchase, which will be added to your invoice where legally required.</p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: '9. Acceptable Use',
    content: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
          <li>Use the Service to spam, mass-post unsolicited content, or engage in coordinated inauthentic behavior on any Connected Platform</li>
          <li>Attempt to reverse-engineer, decompile, or access the Service's source code except as permitted by law</li>
          <li>Use automated means (bots, scrapers) to access the Service outside of our provided API, if any</li>
          <li>Resell or sublicense access to the Service without our prior written consent</li>
          <li>Interfere with or disrupt the integrity or performance of the Service</li>
          <li>Use the Service in any way that violates applicable law, including India's Information Technology Act, 2000 and rules made thereunder</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    title: '10. Intellectual Property',
    content: (
      <p>The Service, including its software, design, branding, and all related intellectual property (excluding Your Content), is owned by Tarasaka Digital Solutions or its licensors and is protected under applicable copyright, trademark, and other intellectual property laws. Except for the limited rights expressly granted to you to use the Service, no rights are transferred to you.</p>
    ),
  },
  {
    id: 'trademarks',
    title: '11. Third-Party Platform Trademarks',
    content: (
      <p>Facebook, Instagram, Pinterest, Tumblr, and Threads are trademarks of their respective owners. Mediamation is an independent service and is not endorsed by, affiliated with, or sponsored by Meta Platforms, Inc., Pinterest, Inc., Automattic Inc., or any other platform owner, except to the extent of formal API partnerships we may hold from time to time.</p>
    ),
  },
  {
    id: 'disclaimers',
    title: '12. Disclaimers',
    content: (
      <>
        <p>The Service is provided "as is" and "as available." To the maximum extent permitted by applicable law:</p>
        <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
          <li>We do not warrant that the Service will be uninterrupted, error-free, or compatible with every Connected Platform at all times</li>
          <li>We do not warrant that AI-generated content will be accurate, original, or appropriate for your purposes</li>
          <li>We are not responsible for the actions, policies, downtime, or API changes of any Connected Platform</li>
          <li>We do not guarantee specific engagement, reach, or business outcomes from using the Service</li>
        </ul>
        <p className="mt-3">Nothing in this Section limits any right that cannot be excluded under applicable consumer protection law, including the Consumer Protection Act, 2019 (India).</p>
      </>
    ),
  },
  {
    id: 'security',
    title: '13. Security Commitments and Incident Response',
    content: (
      <>
        <p>We implement technical and organisational security measures appropriate to the risk, including encrypted storage of platform access tokens, encrypted data transmission, access controls, and automated monitoring designed to detect abnormal posting activity. No security system can guarantee absolute protection against unauthorized access, and you acknowledge that no method of transmission or storage is 100% secure.</p>
        <p className="mt-3">In the event of a confirmed security incident affecting the Service, we will: (a) take reasonably prompt steps to contain the incident, including suspending affected functionality where necessary to prevent further harm; (b) notify affected users and the relevant regulatory authorities within the timeframes required by applicable law (including the Data Protection Board of India and CERT-In under Indian law, and supervisory authorities under GDPR or US state law, as applicable); and (c) provide you with guidance on protective steps you can take, including reviewing or revoking access granted to the Service from within your Connected Platform's own security settings.</p>
        <p className="mt-3">You acknowledge that some protective steps, such as changing your Connected Platform passwords or reviewing that platform's own authorized-app list, are actions only you can take directly on that platform, and that we cannot undo or remove content already visible on a Connected Platform without that platform's cooperation.</p>
      </>
    ),
  },
  {
    id: 'liability',
    title: '14. Limitation of Liability',
    content: (
      <>
        <p>To the maximum extent permitted by applicable law, Tarasaka Digital Solutions's total liability arising out of or related to these Terms or the Service, whether in contract, tort, or otherwise, shall not exceed the amount you paid to us in the 12 months preceding the claim. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunity, even if advised of the possibility of such damages.</p>
        <p className="mt-3">This limitation does not apply to liability that cannot be limited or excluded under applicable law (for example, liability for gross negligence, willful misconduct, or death or personal injury caused by our negligence, where such limitations are not permitted).</p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: '15. Indemnification',
    content: (
      <p>You agree to indemnify and hold harmless Tarasaka Digital Solutions, its owner, and any contractors from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from: (a) Your Content; (b) your violation of these Terms; (c) your violation of any Connected Platform's terms; or (d) your violation of any applicable law or third-party right.</p>
    ),
  },
  {
    id: 'termination',
    title: '16. Suspension and Termination',
    content: (
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>You may close your account at any time through account settings or by emailing <a href="mailto:info.tarasaka@gmail.com" className="text-brand-cyan hover:underline">info.tarasaka@gmail.com</a></li>
        <li>We may suspend or terminate your access if you materially breach these Terms, engage in fraudulent or abusive conduct, or if required to do so by law, with notice where reasonably practicable.</li>
        <li>Upon termination, your right to use the Service ends immediately; provisions that by their nature should survive (ownership, disclaimers, limitation of liability, governing law) will survive termination.</li>
      </ul>
    ),
  },
  {
    id: 'changes',
    title: '17. Changes to the Service and These Terms',
    content: (
      <p>We may modify or discontinue features of the Service, and may update these Terms from time to time. We will provide at least 14–30 days' notice of material changes via email or in-product notice. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.</p>
    ),
  },
  {
    id: 'governing-law',
    title: '18. Governing Law and Dispute Resolution',
    content: (
      <>
        <p>These Terms are governed by the laws of India, without regard to conflict-of-laws principles. Courts at Ahmedabad, Gujarat shall have exclusive jurisdiction over any dispute arising from these Terms or the Service, except where applicable consumer protection law in your jurisdiction grants you the right to bring proceedings in your local courts instead.</p>
        <p className="mt-3">Before initiating formal legal proceedings, you agree to first attempt to resolve any dispute informally by contacting <a href="mailto:info.tarasaka@gmail.com" className="text-brand-cyan hover:underline">info.tarasaka@gmail.com</a>. We will attempt to resolve the dispute informally within 30 days.</p>
      </>
    ),
  },
  {
    id: 'severability',
    title: '19. Severability and Waiver',
    content: (
      <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of that right or provision.</p>
    ),
  },
  {
    id: 'entire-agreement',
    title: '20. Entire Agreement',
    content: (
      <p>These Terms, together with our Privacy Policy and any plan-specific terms presented at checkout, constitute the entire agreement between you and us regarding the Service, and supersede any prior agreements.</p>
    ),
  },
  {
    id: 'contact',
    title: '21. Contact Us',
    content: (
      <div className="mt-2 space-y-2">
        <p className="font-semibold text-white">Tarasaka Digital Solutions</p>
        <p>Email: <a href="mailto:info.tarasaka@gmail.com" className="text-brand-cyan hover:underline">info.tarasaka@gmail.com</a> <span className="text-slate-400">(response within 48 hours)</span></p>
      </div>
    ),
  },
];

export default function PrivacyPolicy({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#030712] overflow-x-hidden font-sans">
      {/* Background radial effects */}
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none z-0">
        <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-brand-indigo/5 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full" />
        <div className="absolute top-[75%] left-[8%] w-[350px] h-[350px] bg-brand-cyan/5 blur-[120px] rounded-full" />
      </div>

      {/* Top Nav Bar */}
      <nav className="sticky top-0 z-50 py-4 bg-[#030712]/85 border-b border-white/5 backdrop-blur-md shadow-lg shadow-black/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
            aria-label="Back to home"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </button>
          <a href="#" onClick={onBack} className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-indigo/35 group-hover:scale-105 transition-transform duration-300">
              <FiCpu className="text-white text-base animate-pulse-slow" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Mediamation
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="relative z-10 pt-16 pb-10 text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/25 text-brand-purple text-xs font-semibold uppercase tracking-widest mb-6">
          <FiShield className="text-sm" />
          Legal Document
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Please read these terms carefully before using Mediamation. Last updated: June 2025.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <FiMail className="text-brand-cyan" />
          Questions? Email us at{' '}
          <a href="mailto:info.tarasaka@gmail.com" className="text-brand-cyan hover:underline ml-1">
            info.tarasaka@gmail.com
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Table of Contents — sticky sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 glass-panel rounded-2xl p-5 space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-3">Contents</p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-[11px] text-slate-400 hover:text-white transition-colors py-1 leading-snug border-l-2 border-transparent hover:border-brand-purple pl-3 truncate"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-3 space-y-6">
            {sections.map((section, idx) => (
              <div
                key={section.id}
                id={section.id}
                className="glass-panel glass-panel-hover rounded-2xl p-7 scroll-mt-28"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo/30 to-brand-purple/30 border border-brand-indigo/20 flex items-center justify-center text-brand-cyan text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h2 className="font-display font-semibold text-lg text-white leading-snug pt-0.5">
                    {section.title}
                  </h2>
                </div>
                <div className="text-slate-300 text-sm leading-relaxed pl-12">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="mt-8 glass-panel rounded-2xl p-8 text-center bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 border border-brand-indigo/20">
              <FiShield className="text-brand-cyan text-3xl mx-auto mb-3" />
              <h3 className="font-display font-bold text-xl text-white mb-2">Have questions about our Terms?</h3>
              <p className="text-slate-400 text-sm mb-5">Our team is happy to clarify anything. Reach out and we'll respond within 48 hours.</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.tarasaka@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-indigo/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FiMail />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Tarasaka Digital Solutions. All rights reserved.
        <span className="mx-2">·</span>
        <button onClick={onBack} className="hover:text-slate-300 transition-colors underline underline-offset-2">
          Back to Mediamation
        </button>
      </footer>
    </div>
  );
}
