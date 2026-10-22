'use client';

import { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, ArrowRight, Phone, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CountrySelect, COUNTRIES } from '@/components/ui/CountrySelect';

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().optional(),
  projectDetails: z.string().min(5, "Project details are required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactSectionInner() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  const service = searchParams.get('service');

  const [isSuccess, setIsSuccess] = useState(mode === 'strategy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [countryName, setCountryName] = useState("United States");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (service) {
      setValue('projectDetails', `I'm interested in a custom quote for ${service}.`);
    }
  }, [service, setValue]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, reset]);


  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      // Use the actual backend API URL
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

      const utmSource = localStorage.getItem('utm_source');
      const dialCode = COUNTRIES.find(c => c.name === countryName)?.code || "+1";
      const payloadData = { ...data, whatsapp: data.whatsapp ? `${dialCode} ${data.whatsapp}` : undefined };
      const payload = utmSource ? { ...payloadData, utmSource } : payloadData;

      await axios.post(`${API_URL}/contacts`, payload);
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

          {/* Profile Card */}
          {/* <div className="mt-auto">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-xl md:rounded-2xl bg-[#a78bfa] mb-4 md:mb-6 relative overflow-hidden flex items-end justify-center">
              <Image 
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68ba60d9c5b148b316094a05_528b1902db108edb0c76b243a29e624d_misbah%20gunabi.png" 
                alt="Profile" 
                fill
                sizes="(max-width: 768px) 144px, 192px"
                className="object-cover" 
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Hafizul Islam</h3>
            <p className="text-sm text-gray-400 mb-4">COO & Co-founder</p>

            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <Phone className="w-3 h-3" />
              </span>
              <span className="text-sm">+1 (716) 503-6335</span>
            </div>

            <a href="http://designmonks.co/meeting" target="_blank" rel="noopener noreferrer" className="text-[#a78bfa] hover:text-purple-300 text-sm font-semibold transition-colors underline decoration-purple-500/50 underline-offset-4">
              Book a Call Directly
            </a>
          </div> */}
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              {errorMsg && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">
                  {errorMsg}
                </div>
              )}

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register('fullName')}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                />
                {errors.fullName && <span className="text-red-400 text-xs mt-1 block">{errors.fullName.message}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder="yourmail@gmail.com"
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-white mb-2">
                    Whatsapp Number (Optional)
                  </label>
                  <div className={`flex bg-white/5 border ${errors.whatsapp ? 'border-red-500' : 'border-white/10'} rounded-xl focus-within:ring-2 focus-within:ring-purple-500 transition-all relative`}>
                    <CountrySelect value={countryName} onChange={setCountryName} isDark={true} />
                    <div className="flex items-center flex-1 px-3 py-3 bg-transparent rounded-r-xl">
                      <span className="text-white font-medium mr-1.5 whitespace-nowrap">{COUNTRIES.find(c => c.name === countryName)?.code || "+1"}</span>
                      <input
                        type="tel"
                        id="whatsapp"
                        {...register('whatsapp')}
                        placeholder="123 456 7890"
                        className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  {errors.whatsapp && <span className="text-red-400 text-xs mt-1 block">{errors.whatsapp.message}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-white mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  rows={5}
                  {...register('projectDetails')}
                  placeholder="I want to strengthen my Trustpilot reputation..."
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.projectDetails ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none`}
                ></textarea>
                {errors.projectDetails && <span className="text-red-400 text-xs mt-1 block">{errors.projectDetails.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#6938ef] to-[#8b5cf6] hover:from-[#5b2bd1] hover:to-[#7c3aed] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Let&apos;s Connect
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
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
