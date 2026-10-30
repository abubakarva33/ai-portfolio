'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, ArrowRight, Loader2, ChevronDown, X } from 'lucide-react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const SERVICE_OPTIONS = [
  'AI Voice Agent',
  'Website Chatbot',
  'Lead Follow-up',
  'Appointment Booking',
  'Complete Business Automation',
  'Not Sure Yet',
] as const;

const contactSchema = z.object({
  full_name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  website: z.string().optional(),
  select_service: z.array(z.string()).min(1, "Please select at least one service"),
  business_challenge: z.string().min(5, "Please describe your business challenge"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/* ─────────────────────────────────────────────
   Multi‑Select Dropdown Component
   ───────────────────────────────────────────── */
function MultiSelectDropdown({
  options,
  selected,
  onChange,
  hasError,
}: {
  options: readonly string[];
  selected: string[];
  onChange: (values: string[]) => void;
  hasError?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const toggle = (value: string) => {
    onChange(
      selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value],
    );
  };

  const remove = (value: string) => {
    onChange(selected.filter((v) => v !== value));
  };

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 px-4 py-3 bg-white/5 border ${hasError ? 'border-red-500' : 'border-white/10'
          } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all min-h-[48px]`}
      >
        {selected.length === 0 ? (
          <span className="text-gray-500">Select the areas you'd like to automate</span>
        ) : (
          <span className="flex flex-wrap gap-1.5">
            {selected.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium"
              >
                {s}
                <X
                  className="w-3 h-3 cursor-pointer hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(s);
                  }}
                />
              </span>
            ))}
          </span>
        )}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute z-50 mt-2 w-full bg-[#1a1820] border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option) => {
            const isSelected = selected.includes(option);
            return (
              <li
                key={option}
                onClick={() => toggle(option)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${isSelected
                  ? 'bg-purple-500/15 text-white'
                  : 'text-gray-300 hover:bg-white/5'
                  }`}
              >
                <span
                  className={`w-4.5 h-4.5 rounded flex items-center justify-center border shrink-0 transition-all ${isSelected
                    ? 'bg-purple-600 border-purple-500'
                    : 'border-white/20 bg-white/5'
                    }`}
                  style={{ width: 18, height: 18 }}
                >
                  {isSelected && (
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  )}
                </span>
                <span className="text-sm font-medium">{option}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Contact Form Inner
   ───────────────────────────────────────────── */
function ContactSectionInner() {
  const searchParams = useSearchParams();
  const mode = searchParams?.get('mode');
  const service = searchParams?.get('service');

  const [isSuccess, setIsSuccess] = useState(mode === 'strategy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      select_service: [],
    },
  });

  // Pre‑fill from query‑string
  useEffect(() => {
    if (service) {
      const match = SERVICE_OPTIONS.find(
        (o) => o.toLowerCase() === service.toLowerCase(),
      );
      if (match) {
        setSelectedServices([match]);
        setValue('select_service', [match], { shouldValidate: true });
      }
    }
  }, [service, setValue]);

  // Keep react‑hook‑form in sync with our multi‑select state
  useEffect(() => {
    setValue('select_service', selectedServices, { shouldValidate: selectedServices.length > 0 });
  }, [selectedServices, setValue]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        reset();
        setSelectedServices([]);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, reset]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const GHL_ENDPOINT = '/api/ghl/contact';

      const utmSource = localStorage.getItem('utm_source');
      const payload = utmSource ? { ...data, utmSource } : data;

      await axios.post(GHL_ENDPOINT, payload);
      setIsSuccess(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMsg(error.response?.data?.message || "Something went wrong. Please try again.");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof ContactFormValues) =>
    `w-full px-4 py-3 bg-white/5 border ${errors[field] ? 'border-red-500' : 'border-white/10'
    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`;

  return (
    <section className="relative w-full max-w-7xl mx-auto rounded-[2rem] md:rounded-[2.5rem] mt-10 md:mt-20 overflow-hidden bg-[#0d0c0f] border border-white/10">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/20 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 p-6 md:p-16">

        {/* Left Side: Copy */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/50 text-emerald-400 text-sm font-medium">
              Claim a $199 Consultation, on Us!
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
            Ready to Boost Your Online Presence?
          </h2>

          <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
            {[
              "Response Within 24 Hours",
              "Confidential Consultation",
              "Tailored Reputation Strategy",
              "Dedicated Reputation Specialists",
              "NDA Available Upon Request"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 my-auto">
          {isSuccess ? (
            <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center bg-white/5 rounded-xl border border-white/10 p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
              <p className="text-gray-300 max-w-sm">
                Thank you for reaching out. A product specialist will review your details and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            // <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
            //   {errorMsg && (
            //     <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">
            //       {errorMsg}
            //     </div>
            //   )}


            //   <div>
            //     <label htmlFor="full_name" className="block text-sm font-medium text-white mb-2">
            //       Full Name
            //     </label>
            //     <input
            //       type="text"
            //       id="full_name"
            //       {...register('full_name')}
            //       placeholder="John Doe"
            //       className={inputClass('full_name')}
            //     />
            //     {errors.full_name && <span className="text-red-400 text-xs mt-1 block">{errors.full_name.message}</span>}
            //   </div>


            //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            //     <div>
            //       <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            //         Email
            //       </label>
            //       <input
            //         type="email"
            //         id="email"
            //         {...register('email')}
            //         placeholder="yourmail@gmail.com"
            //         className={inputClass('email')}
            //       />
            //       {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
            //     </div>

            //     <div>
            //       <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            //         Phone Number <span className="text-gray-500">(Optional)</span>
            //       </label>
            //       <input
            //         type="tel"
            //         id="phone"
            //         {...register('phone')}
            //         placeholder="+1 234 567 8900"
            //         className={inputClass('phone')}
            //       />
            //       {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone.message}</span>}
            //     </div>
            //   </div>


            //   <div>
            //     <label htmlFor="website" className="block text-sm font-medium text-white mb-2">
            //       Website <span className="text-gray-500">(Optional)</span>
            //     </label>
            //     <input
            //       type="url"
            //       id="website"
            //       {...register('website')}
            //       placeholder="https://yourwebsite.com"
            //       className={inputClass('website')}
            //     />
            //     {errors.website && <span className="text-red-400 text-xs mt-1 block">{errors.website.message}</span>}
            //   </div>


            //   <div>
            //     <label className="block text-sm font-medium text-white mb-2">
            //       Select Service
            //     </label>
            //     <MultiSelectDropdown
            //       options={SERVICE_OPTIONS}
            //       selected={selectedServices}
            //       onChange={setSelectedServices}
            //       hasError={!!errors.select_service}
            //     />
            //     {errors.select_service && (
            //       <span className="text-red-400 text-xs mt-1 block">{errors.select_service.message}</span>
            //     )}
            //   </div>


            //   <div>
            //     <label htmlFor="business_challenge" className="block text-sm font-medium text-white mb-2">
            //       Business Challenge
            //     </label>
            //     <textarea
            //       id="business_challenge"
            //       rows={4}
            //       {...register('business_challenge')}
            //       placeholder="Tell me about your business, its biggest challenges, and what you'd like to improve"
            //       className={`${inputClass('business_challenge')} resize-none`}
            //     ></textarea>
            //     {errors.business_challenge && (
            //       <span className="text-red-400 text-xs mt-1 block">{errors.business_challenge.message}</span>
            //     )}
            //   </div>

            //   <button
            //     type="submit"
            //     disabled={isSubmitting}
            //     className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#6938ef] to-[#8b5cf6] hover:from-[#5b2bd1] hover:to-[#7c3aed] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
            //   >
            //     {isSubmitting ? (
            //       <>
            //         <Loader2 className="w-5 h-5 animate-spin" />
            //         Submitting...
            //       </>
            //     ) : (
            //       <>
            //         Let&apos;s Connect
            //         <ArrowRight className="w-5 h-5" />
            //       </>
            //     )}
            //   </button>
            // </form>
            <iframe src="https://links.abubakar375.online/widget/form/hBZwZwdJuDN8mzBXggPa" style={{ "width": "100%", "height": "800px", "border": "none", "borderRadius": "8px", "overflow": "hidden", "backgroundColor": "!transparent" }} id="inline-hBZwZwdJuDN8mzBXggPa" data-layout="{id: 'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Contact Form" data-height="582" data-layout-iframe-id="inline-hBZwZwdJuDN8mzBXggPa" data-form-id="hBZwZwdJuDN8mzBXggPa" data-cookie-consent="true" data-cookie-consent-provider="auto" title="Contact Form"></iframe>

          )}
        </div>

      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <Suspense fallback={
      <section className="relative w-full max-w-7xl mx-auto rounded-[2rem] md:rounded-[2.5rem] mt-10 md:mt-20 overflow-hidden bg-[#0d0c0f] border border-white/10 flex items-center justify-center min-h-[600px]">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </section>
    }>
      <ContactSectionInner />
    </Suspense>
  );
}
