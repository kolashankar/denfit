"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import CanvasImageSequence from "@/components/ui/CanvasImageSequence";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  // Athlete Hero Section (0 - 150vh)
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  // Hero text fades out earlier
  const heroTextOpacity = useTransform(heroScroll, [0, 0.4], [1, 0]);
  const heroTextY = useTransform(heroScroll, [0, 0.4], [0, -50]);
  // Hero background dims towards the end to transition nicely
  const heroBgOpacity = useTransform(heroScroll, [0.8, 1], [1, 0]);
  const heroAnimProgress = useTransform(heroScroll, [0, 0.8], [0, 1]);

  // Dumbbell Section (0 - 150vh)
  const dumbbellRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: dumbbellScroll } = useScroll({
    target: dumbbellRef,
    offset: ["start start", "end start"]
  });
  const dumbellProgress = useTransform(dumbbellScroll, [0, 0.8], [0, 1]);

  // Female Section (0 - 150vh)
  const femaleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: femaleScroll } = useScroll({
    target: femaleRef,
    offset: ["start start", "end start"]
  });
  const femaleProgress = useTransform(femaleScroll, [0, 0.8], [0, 1]);

  return (
    <div className="bg-[#050505]">
      
      {/* 1. HERO ATHLETES (Scrollytelling) */}
      <div ref={heroRef} className="relative h-[150vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Canvas */}
          <motion.div className="absolute inset-0" style={{ opacity: heroBgOpacity }}>
            <CanvasImageSequence
              imagePath="/assets/athletes/ezgif-frame-"
              frameCount={23}
              scrollProgress={heroAnimProgress}
              className="opacity-50"
              objectFit="cover"
              objectPosition="responsive-right"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF6A00] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />
          </motion.div>

          {/* Hero Text */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none"
            style={{ opacity: heroTextOpacity, y: heroTextY }}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl pointer-events-auto mt-20">
              {['Gachibowli Fitness Center', 'Strength Training', 'Zumba Classes', 'Personal Training'].map(badge => (
                <span key={badge} className="text-[10px] uppercase tracking-widest text-white/80 glass-panel px-3 py-1.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6 pointer-events-auto">
              Train <span className="text-gradient">Strong.</span><br />
              Transform <span className="text-gradient">Together.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed pointer-events-auto">
              FRIEND&apos;Z DEN Fitness Center in Gachibowli brings strength training, Zumba, personal coaching, and transformation-focused workouts into one powerful fitness community.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link href="/book-trial" className="bg-gradient-brand text-white px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:scale-105 transition-transform">
                Book Free Trial
              </Link>
              <Link href="/programs" className="glass-panel text-white hover:text-[#FF6A00] hover:border-[#FF6A00] px-8 py-4 rounded-full font-bold transition-all">
                Explore Programs
              </Link>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
              <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRO CONTENT (Normal Scroll) */}
      <div className="relative z-30 bg-[#050505] py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">
            Your Fitness Den<br />in Gachibowli
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
            A place where strength, friendship, coaching, and consistency come together. Whether you are starting your fitness journey or pushing toward your next level, this is your den to train, sweat, and grow stronger.
          </p>
        </div>
      </div>

      {/* 3. WHY FRIEND'Z DEN (Normal Scroll) */}
      <div className="relative z-30 bg-[#050505] pb-10 md:pb-32">
        <div className="w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none">
              Not Just a Gym.<br /><span className="text-gradient">A Training Community.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              At FRIEND&apos;Z DEN, workouts feel personal, energetic, and consistent. From strength machines and free weights to Zumba and trainer-guided sessions, every member gets the environment to keep moving forward.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { t: 'Friendly Atmosphere', d: 'A welcoming gym space for beginners, regular members, women, and serious lifters.' },
              { t: 'Strength & Conditioning', d: 'Train with machines, dumbbells, cable systems, and structured workout zones.' },
              { t: 'Zumba Energy', d: 'Fun group sessions designed for fat loss, stamina, confidence, and consistency.' },
              { t: 'Personal Training', d: 'Trainer support for form correction, motivation, and goal-focused workouts.' }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border-white/5 hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-[#FF6A00]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.t}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. DUMBBELL SHOWCASE (Scrollytelling) */}
      <div ref={dumbbellRef} className="relative h-[150vh] bg-[#050505]">
        <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
          {/* Background Canvas (Full screen on mobile to center the dumbbell) */}
          <div className="absolute inset-0 lg:relative w-full lg:w-1/2 h-full flex-shrink-0">
            <CanvasImageSequence
              imagePath="/assets/dumbel/ezgif-frame-"
              frameCount={30}
              scrollProgress={dumbellProgress}
              className="lg:scale-125 origin-center"
              objectFit="contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/90 via-transparent to-[#050505]" />
          </div>
          
          {/* Content side-by-side on desktop */}
          <div className="hidden lg:flex w-1/2 h-full flex-col justify-center pr-24 pl-12 relative z-10 overflow-y-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Equipment That<br /><span className="text-gradient">Pushes Progress</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl">
              From warm-up sets to serious strength training, FRIEND&apos;Z DEN gives you the tools to train with control, confidence, and intensity.
            </p>
            <div className="flex flex-col gap-6 max-w-xl">
              {[
                { t: 'Free Weights Zone', d: 'Dumbbells, plates, and strength equipment for progressive overload.' },
                { t: 'Cable Training', d: 'Train back, shoulders, arms, core, and functional movements with better control.' }
              ].map((card, i) => (
                <div key={i} className="border-l-2 border-[#FF6A00] pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">{card.t}</h3>
                  <p className="text-white/60">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY: Dumbbell Text - scrolls naturally after dumbbell animation finishes */}
      <div className="lg:hidden relative z-30 bg-[#050505] px-6 py-16">
        <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
          Equipment That<br /><span className="text-gradient">Pushes Progress</span>
        </h2>
        <p className="text-lg text-white/60 mb-8">
          From warm-up sets to serious strength training, FRIEND&apos;Z DEN gives you the tools to train with control, confidence, and intensity.
        </p>
        <div className="flex flex-col gap-6">
          {[
            { t: 'Free Weights Zone', d: 'Dumbbells, plates, and strength equipment for progressive overload.' },
            { t: 'Cable Training', d: 'Train back, shoulders, arms, core, and functional movements with better control.' }
          ].map((card, i) => (
            <div key={i} className="border-l-2 border-[#FF6A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-white mb-2">{card.t}</h3>
              <p className="text-white/60">{card.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FEMALE MOVEMENT SECTION (Scrollytelling) */}
      <div ref={femaleRef} className="relative h-[150vh] bg-[#050505]">
        <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row-reverse overflow-hidden">
          {/* Right/Background Canvas (Full screen on mobile) */}
          <div className="absolute inset-0 lg:relative w-full lg:w-1/2 h-full flex-shrink-0">
            <CanvasImageSequence
              imagePath="/assets/female/ezgif-frame-"
              frameCount={18}
              scrollProgress={femaleProgress}
              className="lg:scale-110 origin-center"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/90 via-black/40 to-transparent lg:to-[#050505]" />
          </div>
          
          {/* Content side-by-side on desktop */}
          <div className="hidden lg:flex w-1/2 h-full flex-col justify-center pl-24 pr-12 relative z-10 overflow-y-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Form First.<br /><span className="text-gradient">Results Follow.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl">
              Correct movement builds strength safely. Trainer-guided workouts help activate the right muscles, improve posture, and make every rep count.
            </p>
            <div className="flex flex-col gap-6 max-w-xl">
              {[
                { t: 'Coach-Guided Form', d: 'Learn how to move correctly and avoid common workout mistakes.' },
                { t: 'Women-Friendly Training', d: 'A supportive environment for women to train strength, fat loss, and confidence.' }
              ].map((card, i) => (
                <div key={i} className="border-l-2 border-[#FF2D2D] pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">{card.t}</h3>
                  <p className="text-white/60">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY: Female Text - scrolls naturally after female animation finishes */}
      <div className="lg:hidden relative z-30 bg-[#050505] px-6 py-16">
        <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
          Form First.<br /><span className="text-gradient">Results Follow.</span>
        </h2>
        <p className="text-lg text-white/60 mb-8">
          Correct movement builds strength safely. Trainer-guided workouts help activate the right muscles, improve posture, and make every rep count.
        </p>
        <div className="flex flex-col gap-6">
          {[
            { t: 'Coach-Guided Form', d: 'Learn how to move correctly and avoid common workout mistakes.' },
            { t: 'Women-Friendly Training', d: 'A supportive environment for women to train strength, fat loss, and confidence.' }
          ].map((card, i) => (
            <div key={i} className="border-l-2 border-[#FF2D2D] pl-6 py-2">
              <h3 className="text-xl font-bold text-white mb-2">{card.t}</h3>
              <p className="text-white/60">{card.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STATIC CONTENT */}
      <div className="relative z-30 bg-[#050505] pt-24 pb-32">
        {/* PROGRAMS PREVIEW */}
        <div className="container mx-auto px-4 lg:px-8 mb-40">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Choose Your<br />Training Path</h2>
            <p className="text-lg text-white/60">Pick the path that matches your goal — fat loss, strength, Zumba, personal training, or full body transformation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Strength Training', desc: 'Build muscle, improve power, and train with progressive overload.' },
              { name: 'Fat Loss Training', desc: 'Burn calories, improve stamina, and build a leaner body through structured workouts.' },
              { name: 'Zumba Classes', desc: 'High-energy dance fitness sessions for fun, sweat, and consistency.' },
              { name: 'Personal Training', desc: 'One-on-one trainer support for form, motivation, and measurable progress.' },
              { name: 'Women’s Fitness', desc: 'Strength, toning, posture, confidence, and fat-loss focused training support.' },
              { name: 'Beginner Fitness', desc: 'Start safely with guided workouts, equipment orientation, and simple plans.' }
            ].map(prog => (
              <Link href="/programs" key={prog.name} className="glass-panel p-8 rounded-2xl group hover:border-[#FF6A00] transition-colors relative overflow-hidden border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF6A00] transition-colors">{prog.name}</h3>
                <p className="text-white/60 mb-6">{prog.desc}</p>
                <div className="flex items-center text-sm font-bold text-white">
                  Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-panel border-[#FF6A00]/30 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF6A00]/20 via-transparent to-transparent opacity-50" />
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 relative z-10">
              Start Your Fitness Journey<br />With FRIEND&apos;Z DEN
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto relative z-10">
              Train with friends, guided by purpose, in the heart of Gachibowli.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/book-trial" className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-bold transition-all w-full sm:w-auto">
                Book Free Trial
              </Link>
              <Link href="tel:+919177733687" className="bg-gradient-brand text-white px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,106,0,0.4)] w-full sm:w-auto">
                Call Now
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/40 uppercase tracking-widest relative z-10">
              Located at Anjaiah Nagar, Gachibowli, Hyderabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
