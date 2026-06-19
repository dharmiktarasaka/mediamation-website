import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowLeft, FiCheck, FiX, FiZap, FiStar, FiTrendingUp,
  FiBriefcase, FiMail, FiChevronDown, FiGlobe, FiLock, FiShield
} from 'react-icons/fi';
import logoImg from '../assets/logo.png';

/* ─────────────── Plan Data ─────────────── */
const plans = [
  {
    id: 'free',
    name: 'Free',
    icon: <FiZap />,
    tagline: 'Try before you commit',
    monthlyUSD: 0,
    monthlyINR: 0,
    annualUSD: 0,
    annualINR: 0,
    highlight: false,
    badge: null,
    cta: 'Get Started Free',
    ctaHref: 'https://mediamation.tarasaka.com/',
    color: 'from-slate-600 to-slate-500',
    borderColor: 'border-white/8',
    features: [
      { label: '1 social account', included: true },
      { label: '10 posts / month', included: true },
      { label: 'AI captions (5/month)', included: true },
      { label: 'Basic scheduling', included: true },
      { label: 'Unlimited posts', included: false },
      { label: 'Per-platform image resize', included: false },
      { label: 'Advanced analytics', included: false },
      { label: 'Best-time-to-post AI', included: false },
      { label: 'Priority support', included: false },
      { label: 'Team seats', included: false },
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    icon: <FiStar />,
    tagline: 'Perfect for creators & solopreneurs',
    monthlyUSD: 9,
    monthlyINR: 249,
    annualUSD: 7,
    annualINR: 199,
    highlight: true,
    badge: 'Launch price — locked',
    cta: 'Start Starter Plan',
    ctaHref: 'https://mediamation.tarasaka.com/',
    color: 'from-brand-indigo to-brand-purple',
    borderColor: 'border-brand-indigo/60',
    features: [
      { label: '5 social accounts', included: true },
      { label: 'Unlimited posts', included: true },
      { label: 'Unlimited AI captions', included: true },
      { label: 'Per-platform image resize', included: true },
      { label: 'Advanced scheduling', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Advanced analytics', included: false },
      { label: 'Best-time-to-post AI', included: false },
      { label: 'Priority support', included: false },
      { label: 'Team seats', included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    icon: <FiTrendingUp />,
    tagline: 'For scaling brands & small teams',
    monthlyUSD: 24,
    monthlyINR: 699,
    annualUSD: 19,
    annualINR: 549,
    highlight: false,
    badge: null,
    cta: 'Start Growth Plan',
    ctaHref: 'https://mediamation.tarasaka.com/',
    color: 'from-brand-cyan to-brand-indigo',
    borderColor: 'border-brand-cyan/30',
    features: [
      { label: '15 social accounts', included: true },
      { label: 'Unlimited posts', included: true },
      { label: 'Unlimited AI captions', included: true },
      { label: 'Per-platform image resize', included: true },
      { label: 'Advanced scheduling', included: true },
      { label: 'Advanced analytics', included: true },
      { label: 'Best-time-to-post AI', included: true },
      { label: '2 team seats', included: true },
      { label: 'Priority support', included: false },
      { label: 'Dedicated account manager', included: false },
    ],
  },
  {
    id: 'agency',
    name: 'Agency',
    icon: <FiBriefcase />,
    tagline: 'For agencies managing multiple brands',
    monthlyUSD: 79,
    monthlyINR: 2499,
    annualUSD: 63,
    annualINR: 1999,
    highlight: false,
    badge: null,
    cta: 'Start Agency Plan',
    ctaHref: 'https://mediamation.tarasaka.com/',
    color: 'from-brand-fuchsia to-brand-purple',
    borderColor: 'border-brand-fuchsia/30',
    features: [
      { label: 'Unlimited social accounts', included: true },
      { label: 'Unlimited posts', included: true },
      { label: 'Unlimited AI captions', included: true },
      { label: 'Per-platform image resize', included: true },
      { label: 'Advanced scheduling', included: true },
      { label: 'Advanced analytics', included: true },
      { label: 'Best-time-to-post AI', included: true },
      { label: '10 team seats', included: true },
      { label: 'Priority support', included: true },
      { label: 'Dedicated account manager', included: true },
    ],
  },
];

const faqs = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. You can upgrade or downgrade at any time from your account settings. Upgrades take effect immediately; downgrades take effect at the end of your current billing period.',
  },
  {
    q: 'What happens when my free trial ends?',
    a: "You'll stay on the Free plan automatically — no credit card required to get started. We'll remind you when you're nearing your free limits.",
  },
  {
    q: 'Is the launch price really locked forever?',
    a: 'As long as your Starter subscription remains continuously active, your early-bird price is locked in. If you cancel and re-subscribe, the then-current price applies.',
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'Indian users can pay via UPI, cards, and net banking through Razorpay. International users pay via Stripe (all major credit/debit cards).',
  },
  {
    q: 'Do you offer refunds?',
    a: "Paid fees are non-refundable except in cases of billing error or a service failure we caused. Indian users retain all rights under the Consumer Protection Act, 2019.",
  },
  {
    q: 'Can I add more social accounts to a plan?',
    a: 'On Growth and Agency plans you can purchase add-on slots. Reach out to our support team and we will set that up for you.',
  },
];

/* ─────────────── Components ─────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-brand-indigo/30' : 'border-white/5'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        <FiChevronDown
          className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-brand-cyan' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

function PlanCard({ plan, isAnnual, isINR, idx }) {
  const price = isINR
    ? isAnnual ? plan.annualINR : plan.monthlyINR
    : isAnnual ? plan.annualUSD : plan.monthlyUSD;

  const currency = isINR ? '₹' : '$';
  const isFree = price === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      className={`relative flex flex-col rounded-3xl border transition-all duration-300 group
        ${plan.highlight
          ? 'border-brand-indigo/70 bg-gradient-to-b from-brand-indigo/15 to-brand-purple/10 shadow-2xl shadow-brand-indigo/20 scale-[1.03]'
          : `${plan.borderColor} bg-slate-950/60 hover:border-white/15`}
        backdrop-blur-sm overflow-hidden`}
    >
      {/* Top gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${plan.color} opacity-80`} />

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-indigo/20 border border-brand-indigo/40 text-brand-cyan text-[10px] font-bold uppercase tracking-widest">
            <FiLock className="text-[9px]" />
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white text-lg shadow-lg`}>
            {plan.icon}
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">{plan.name}</h3>
            <p className="text-[11px] text-slate-400 leading-tight">{plan.tagline}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-5 mb-6">
          {isFree ? (
            <div className="flex items-end gap-1">
              <span className="font-display font-black text-5xl text-white">Free</span>
            </div>
          ) : (
            <div className="flex items-end gap-1">
              <span className="font-display font-black text-5xl text-white">
                {currency}{price}
              </span>
              <span className="text-slate-400 text-sm mb-2">/mo</span>
            </div>
          )}
          {!isFree && isAnnual && (
            <p className="text-[11px] text-brand-cyan mt-1 font-medium">
              Billed annually · Save {isINR ? `₹${(plan.monthlyINR - plan.annualINR) * 12}/yr` : `$${(plan.monthlyUSD - plan.annualUSD) * 12}/yr`}
            </p>
          )}
          {!isFree && !isAnnual && (
            <p className="text-[11px] text-slate-500 mt-1">
              {isINR ? `or ₹${plan.annualINR}/mo billed annually` : `or $${plan.annualUSD}/mo billed annually`}
            </p>
          )}
        </div>

        {/* CTA */}
        <a
          href={plan.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all duration-300 mb-6 block
            ${plan.highlight
              ? 'bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-lg shadow-brand-indigo/30 hover:shadow-brand-indigo/50 hover:-translate-y-0.5'
              : 'bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20'}`}
        >
          {plan.cta}
        </a>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-5" />

        {/* Features */}
        <ul className="space-y-3 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              {f.included ? (
                <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-brand-cyan/15 flex items-center justify-center">
                  <FiCheck className="text-brand-cyan text-[10px]" />
                </span>
              ) : (
                <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
                  <FiX className="text-slate-600 text-[10px]" />
                </span>
              )}
              <span className={f.included ? 'text-slate-200' : 'text-slate-600 line-through decoration-slate-700'}>
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ─────────────── Page ─────────────── */
export default function Pricing({ onBack }) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isINR, setIsINR] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#030712] overflow-x-hidden font-sans">

      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[0%] left-[10%] w-[600px] h-[600px] bg-brand-indigo/6 blur-[140px] rounded-full" />
        <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] bg-brand-purple/6 blur-[130px] rounded-full" />
        <div className="absolute top-[65%] left-[5%] w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full" />
        <div className="absolute top-[80%] right-[10%] w-[350px] h-[350px] bg-brand-fuchsia/5 blur-[120px] rounded-full" />
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* ── Sticky Nav ── */}
      <nav className="sticky top-0 z-50 py-4 bg-[#030712]/80 border-b border-white/5 backdrop-blur-md shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
            aria-label="Back to home"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="flex items-center group">
            <img src={logoImg} alt="Mediamation logo" className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
          </a>
          <a
            href="https://mediamation.tarasaka.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white hover:shadow-lg hover:shadow-brand-indigo/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Free
          </a>
        </div>
      </nav>

      {/* ── Hero Header ── */}
      <header className="relative z-10 text-center pt-20 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/25 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6"
        >
          <FiShield className="text-sm" />
          Simple, transparent pricing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent mb-5 leading-tight"
        >
          Choose your plan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Start free, scale when you're ready. Early subscribers get their launch price locked forever.
        </motion.p>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Billing toggle */}
          <div className="flex items-center gap-3 glass-panel rounded-2xl px-5 py-3">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-brand-indigo' : 'bg-slate-700'}`}
              aria-label="Toggle billing period"
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${isAnnual ? 'left-7' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
              Annual
              <span className="ml-1.5 text-[10px] bg-brand-cyan/15 text-brand-cyan px-2 py-0.5 rounded-full font-bold">-20%</span>
            </span>
          </div>

          {/* Currency toggle */}
          <div className="flex items-center gap-1 glass-panel rounded-2xl p-1">
            <button
              onClick={() => setIsINR(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${isINR ? 'bg-brand-indigo/30 text-white border border-brand-indigo/40' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <span>₹</span> INR
            </button>
            <button
              onClick={() => setIsINR(false)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${!isINR ? 'bg-brand-indigo/30 text-white border border-brand-indigo/40' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <FiGlobe className="text-xs" /> USD
            </button>
          </div>
        </motion.div>
      </header>

      {/* ── Plan Cards ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.id} plan={plan} isAnnual={isAnnual} isINR={isINR} idx={idx} />
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-[11px] text-slate-600 mt-8">
          All prices exclude applicable taxes (GST in India). No credit card required for the Free plan.
        </p>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Full feature comparison</h2>
          <p className="text-slate-400 text-sm">Everything you get on each plan, side by side.</p>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-5 bg-slate-900/60 border-b border-white/5">
            <div className="col-span-1 px-5 py-4 text-[11px] uppercase font-bold text-slate-500 tracking-widest">Feature</div>
            {plans.map(p => (
              <div key={p.id} className={`col-span-1 px-2 py-4 text-center text-sm font-display font-bold ${p.highlight ? 'text-brand-indigo' : 'text-white'}`}>
                {p.name}
              </div>
            ))}
          </div>

          {[
            'Social accounts',
            'Posts per month',
            'AI captions',
            'Per-platform image resize',
            'Advanced scheduling',
            'Analytics',
            'Best-time-to-post AI',
            'Team seats',
            'Priority support',
            'Dedicated manager',
          ].map((feature, rowIdx) => {
            const rowData = [
              ['1', '5', '15', 'Unlimited'],
              ['10', 'Unlimited', 'Unlimited', 'Unlimited'],
              ['5/mo', 'Unlimited', 'Unlimited', 'Unlimited'],
              [false, true, true, true],
              [false, true, true, true],
              ['—', 'Basic', 'Advanced', 'Advanced'],
              [false, false, true, true],
              ['—', '—', '2', '10'],
              [false, false, false, true],
              [false, false, false, true],
            ][rowIdx];

            return (
              <div
                key={feature}
                className={`grid grid-cols-5 border-b border-white/4 hover:bg-white/[0.02] transition-colors ${rowIdx % 2 === 0 ? '' : 'bg-slate-900/20'}`}
              >
                <div className="col-span-1 px-5 py-3.5 text-xs text-slate-300 font-medium">{feature}</div>
                {rowData.map((val, ci) => (
                  <div key={ci} className="col-span-1 px-2 py-3.5 flex items-center justify-center">
                    {typeof val === 'boolean' ? (
                      val
                        ? <FiCheck className="text-brand-cyan text-sm" />
                        : <FiX className="text-slate-700 text-sm" />
                    ) : (
                      <span className={`text-xs font-semibold ${val === '—' ? 'text-slate-700' : 'text-slate-200'}`}>{val}</span>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: <FiLock />, title: 'No credit card required', desc: 'Sign up free with just your email. Upgrade anytime.' },
            { icon: <FiShield />, title: 'Secure payments', desc: 'Razorpay for India · Stripe internationally. We never store card details.' },
            { icon: <FiMail />, title: 'Friendly support', desc: 'Email us at info.tarasaka@gmail.com. We reply within 48 hours.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex gap-4"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-indigo/15 border border-brand-indigo/20 flex items-center justify-center text-brand-cyan">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Frequently asked questions</h2>
          <p className="text-slate-400 text-sm">Still have questions? <a href="mailto:info.tarasaka@gmail.com" className="text-brand-cyan hover:underline">Email us anytime.</a></p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative rounded-3xl overflow-hidden border border-brand-indigo/25 bg-gradient-to-br from-brand-indigo/15 via-brand-purple/10 to-brand-cyan/10 p-12 text-center">
          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-brand-indigo/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">
              Ready to automate your social media?
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8">
              Join early subscribers and lock in your price forever. Start free — no credit card needed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://mediamation.tarasaka.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-semibold text-sm shadow-xl shadow-brand-indigo/30 hover:shadow-brand-indigo/50 hover:-translate-y-1 transition-all duration-300"
              >
                Start for Free
              </a>
              <a
                href="mailto:info.tarasaka@gmail.com"
                className="px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Tarasaka Digital Solutions. All rights reserved.
        <span className="mx-2">·</span>
        <button onClick={onBack} className="hover:text-slate-300 transition-colors underline underline-offset-2">
          Back to Home
        </button>
      </footer>
    </div>
  );
}
