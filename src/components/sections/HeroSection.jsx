import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useLeadForm } from "../../hooks/useLeadForm";

const HeroSection = () => {
  const { form, onSubmit, isSubmitting } = useLeadForm();
  const { register, control, formState: { errors } } = form;

  // Helper for dynamic border colors based on validation errors
  const getBorderStyle = (fieldName) => 
    errors[fieldName] ? "border-red-500/50" : "border-[#2EC5FF]/20";

  const inputStyle = (fieldName) => `
    w-full bg-transparent border ${getBorderStyle(fieldName)} rounded-lg px-4 py-3 text-white text-sm 
    placeholder:text-gray-500 focus:outline-none focus:border-[#2EC5FF]/60 transition-all
  `;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030812]"
    >
      {/* Background Grid & Glow Effects */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#2EC5FF 1px, transparent 1px), linear-gradient(90deg, #2EC5FF 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#1FB6FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 w-full pt-20 pb-32 px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-start">
          
          {/* LEFT CONTENT */}
          <div className="space-y-10 pt-10">
            <h1 className="text-[48px] lg:text-[62px] font-bold text-white leading-[1.1] tracking-tight">
              <span className="text-[#00C2FF]">Build An AI-First,</span>
              <br />
              Future-Ready
              <br />
              Business
            </h1>

            <div className="space-y-6 max-w-lg">
              <p className="text-gray-400 text-lg leading-relaxed">
                Ready to scale your business with intelligent technology and
                advanced digital strategies?
              </p>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                At DigiMantra, we help organisations adopt AI-first thinking,
                intelligent automation, and modern digital systems to stay ahead
                in an increasingly technology-driven world.
              </p>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Share your requirements and our team will connect with you to
                explore how we can accelerate your growth.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative p-8 md:p-12 rounded-2xl bg-[#050C1A] border border-[#2EC5FF]/30 shadow-[0_0_50px_rgba(46,197,255,0.1)]">
            <h2 className="text-white text-xl font-medium mb-8 leading-snug">
              Tell us about your goals and our team will connect with you
              shortly.
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Full Name *"
                  className={inputStyle("fullName")}
                />
                {errors.fullName && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email *"
                  className={inputStyle("email")}
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.email.message}</p>}
              </div>

              {/* International Phone Input */}
              <div className="phone-input-wrapper">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      country={"us"}
                      value={value}
                      onChange={onChange}
                      enableSearch={true}
                      containerClass="!w-full"
                      inputClass={`!w-full !bg-transparent !text-white !text-sm !h-[46px] !rounded-lg !border ${errors.phone ? '!border-red-500/50' : '!border-[#2EC5FF]/20'} !focus:border-[#2EC5FF]/60`}
                      buttonClass="!bg-transparent !border-none !rounded-l-lg hover:!bg-white/5"
                      dropdownClass="!bg-[#050C1A] !text-white !border-[#2EC5FF]/30"
                      searchClass="!bg-[#050C1A] !text-white"
                    />
                  )}
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.phone.message}</p>}
              </div>

              {/* Requirements */}
              <textarea
                {...register("requirements")}
                placeholder="Share Your Requirements"
                rows={4}
                className={`${inputStyle("requirements")} resize-none`}
              />

              {/* Policy Checkbox */}
              <div className="space-y-1">
                <div className="flex items-start gap-3">
                  <input
                    {...register("acceptPolicy")}
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-700 bg-transparent text-[#00C2FF] focus:ring-0 cursor-pointer"
                  />
                  <p className="text-[12px] text-gray-400 leading-tight">
                    By checking this box, you agree that DigiMantra may store and
                    process your information to contact you regarding your
                    request.
                  </p>
                </div>
                {errors.acceptPolicy && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.acceptPolicy.message}</p>}
              </div>

              {/* Captcha */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-white text-[14px] font-medium">
                    6-2=?
                  </span>
                  <input
                    {...register("captchaAnswer")}
                    type="text"
                    placeholder="Answer"
                    className={`bg-transparent border ${getBorderStyle("captchaAnswer")} rounded-md px-3 py-[6px] w-28 text-[13px] text-white placeholder-white/50 focus:outline-none focus:border-[#2EC5FF]/60 transition`}
                  />
                </div>
                {errors.captchaAnswer && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.captchaAnswer.message}</p>}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="group mt-3 px-6 py-2 rounded-full bg-[#00C2FF] text-white text-sm font-medium flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_6px_14px_rgba(0,194,255,0.25)] disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Global CSS for Phone Input Dropdown matching Dark Theme */}
      <style>{`
        .react-tel-input .country-list .country:hover { background-color: #0c1e3a !important; }
        .react-tel-input .country-list .country.highlight { background-color: #1a3a6a !important; }
        .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag.open { background-color: rgba(255,255,255,0.05) !important; }
        .react-tel-input .flag-dropdown { border: none !important; background: transparent !important; }
        .react-tel-input .country-list { background-color: #050C1A !important; border: 1px solid rgba(46, 197, 255, 0.3) !important; color: white !important; }
      `}</style>
    </section>
  );
};

export default HeroSection;