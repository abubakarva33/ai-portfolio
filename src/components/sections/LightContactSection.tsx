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

function LightContactSectionInner() {
  const searchParams = useSearchParams();
  const mode = searchParams?.get('mode');
  const service = searchParams?.get('service');

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
    <section className="relative w-full max-w-7xl mx-auto rounded-[2rem] bg-white shadow-2xl p-6 md:p-12 lg:p-14">
      <div className="relative z-10 flex flex-col w-full gap-10 lg:flex-row">

        {/* Left Side: Copy */}
        <div className="lg:w-[45%] w-full flex flex-col pt-2">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/50 text-emerald-400 text-sm font-medium">
              Claim a $199 Consultation, on Us!
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
            Ready to Boost Your Online Presence?
          </h2>

          <div className="space-y-4 mb-12">
            {[
              "Response Within 24 Hours",
              "Confidential Consultation",
              "Tailored Reputation Strategy",
              "Dedicated Reputation Specialists",
              "NDA Available Upon Request"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium text-[15px]">{item}</span>
              </div>
            ))}
          </div>

          {/* Video Thumbnail Placeholder */}
          {/* <div className="mt-auto relative w-full max-w-[19rem] rounded-[1.5rem] overflow-hidden shadow-sm aspect-[1.4]">
            <Image 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              alt="Video Thumbnail" 
              fill
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-5 text-white text-[11px] font-semibold tracking-wide pointer-events-none">
              Interviewed & reviewed by us
            </div>
            <div className="absolute bottom-4 right-5 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-black/60 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            </div>
          </div> */}
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-[55%] w-full flex items-center justify-center">
          {isSuccess ? (
            <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-gray-200 p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Received!</h3>
              <p className="text-gray-600 max-w-sm">
                Thank you for reaching out. A product specialist will review your details and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {errorMsg}
                </div>
              )}

              <div>
                <label htmlFor="fullName" className="block text-[13px] font-bold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register('fullName')}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-gray-50/50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all`}
                />
                {errors.fullName && <span className="text-red-500 text-xs mt-1 block">{errors.fullName.message}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[13px] font-bold text-gray-900 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder="yourmail@gmail.com"
                    className={`w-full px-4 py-3 bg-gray-50/50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all`}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-[13px] font-bold text-gray-900 mb-2">
                    Whatsapp Number (Optional)
                  </label>
                  <div className={`flex bg-gray-50/50 border ${errors.whatsapp ? 'border-red-500' : 'border-gray-200'} rounded-xl focus-within:ring-2 focus-within:ring-purple-500 focus-within:bg-white transition-all relative`}>
                    <CountrySelect value={countryName} onChange={setCountryName} isDark={false} />
                    <div className="flex items-center flex-1 px-3 py-3 bg-transparent rounded-r-xl">
                      <span className="text-gray-900 font-medium mr-1.5 whitespace-nowrap text-[15px]">{COUNTRIES.find(c => c.name === countryName)?.code || "+1"}</span>
                      <input
                        type="tel"
                        id="whatsapp"
                        {...register('whatsapp')}
                        placeholder="123 456 7890"
                        className="w-full bg-transparent text-gray-900 text-[15px] placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  {errors.whatsapp && <span className="text-red-500 text-xs mt-1 block">{errors.whatsapp.message}</span>}
                </div>
              </div>



              <div>
                <label htmlFor="projectDetails" className="block text-[13px] font-bold text-gray-900 mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  rows={5}
                  {...register('projectDetails')}
                  placeholder="I want to strengthen my Trustpilot reputation..."
                  className={`w-full px-4 py-3 bg-gray-50/50 border ${errors.projectDetails ? 'border-red-500' : 'border-gray-200'} rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all resize-none`}
                ></textarea>
                {errors.projectDetails && <span className="text-red-500 text-xs mt-1 block">{errors.projectDetails.message}</span>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 bg-[#6938ef] hover:bg-[#5b2bd1] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Let&apos;s Connect
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export function LightContactSection() {
  return (
    <Suspense fallback={
      <section className="relative w-full max-w-7xl mx-auto rounded-3xl bg-white shadow-2xl p-6 md:p-12 lg:p-14 min-h-[600px] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </section>
    }>
      <LightContactSectionInner />
    </Suspense>
  );
}
