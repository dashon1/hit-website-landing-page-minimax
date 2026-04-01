import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Activity, Brain, Music, Eye, Zap, 
  Menu, X, Check, Smartphone, ArrowRight, 
  Lock, Heart, BarChart3, CloudLightning,
  Play, Download, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/Button';
// If Button component doesn't exist, I'll use standard HTML button with tailwind classes

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const URLS = {
    app: "https://hit-real.vercel.app",
  };

  const trackClick = (label: string) => {
    console.log(`Analytics: Clicked ${label}`);
    // Placeholder for actual analytics integration
  };

  const handleExternalRedirect = (url: string, label: string) => {
    trackClick(label);
    if (url.startsWith('#')) {
      scrollToSection(url.slice(1));
    } else {
      window.open(url, '_blank');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety Beacon",
      desc: "Emergency-ready response system with automatic alerts and location sharing."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Intelligence",
      desc: "Real-time correlation analysis between your medications, symptoms, and lifestyle."
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Comprehensive Tracking",
      desc: "Track medications, symptoms, nutrition, and mood in one unified platform."
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "Sonic Therapy",
      desc: "Evidence-based binaural beats and wellness audio for stress and recovery."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Accessibility First",
      desc: "Designed with Zen Mode and high-contrast visuals for all abilities."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Privacy Secured",
      desc: "Your health data stays on your device. Nothing stored on external servers."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Long COVID Warrior",
      quote: "HIT didn't just track my symptoms—it gave me back control. The AI insights revealed patterns I never would have spotted on my own.",
      result: "40% symptom reduction"
    },
    {
      name: "Marcus T.",
      role: "Managing Polypharmacy",
      quote: "The Safety Beacon saved me during a hypertensive crisis. My family got the alert instantly. It's peace of mind I can't put a price on.",
      result: "95% medication adherence"
    },
    {
      name: "David K.",
      role: "Biohacker",
      quote: "I've tried every tracker. HIT is the only one that actually correlates my data to give actionable advice. The sonic therapy is a game changer.",
      result: "Peak performance optimized"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="text-background w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">HIT</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Stories</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Pricing</button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-background font-bold px-6 rounded-full"
              onClick={() => handleExternalRedirect(URLS.app, 'Nav Get App')}
            >
              Get App
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4"
            >
              <button onClick={() => scrollToSection('features')} className="text-left text-lg hover:text-primary">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-lg hover:text-primary">How it Works</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-lg hover:text-primary">Stories</button>
              <Button 
                className="bg-primary text-background font-bold w-full mt-4"
                onClick={() => handleExternalRedirect(URLS.app, 'Mobile Menu Download App')}
              >
                Download App
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary tracking-wide uppercase">Emergency-Ready Health AI</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Your Health. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Secured & Optimized.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                The first comprehensive health platform combining AI-powered insights, emergency response protocols, and sonic therapy for total well-being.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <Button
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-background text-lg font-bold rounded-full w-full sm:w-auto transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
                  onClick={() => handleExternalRedirect(URLS.app, 'Hero Launch App')}
                >
                  Launch HIT Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="h-14 px-8 border-white/20 hover:bg-white/10 text-white text-lg rounded-full w-full sm:w-auto" onClick={() => scrollToSection('how-it-works')}>
                  See How It Works
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" /> Data Stays On Device
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> No Account Required
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-accent" /> Private by Design
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 w-[300px] sm:w-[350px] mx-auto">
                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
                <img 
                  src="/images/mobile.png" 
                  alt="HIT App Interface" 
                  className="rounded-[3rem] border-8 border-gray-900 shadow-2xl relative z-10"
                />
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-12 bg-gray-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl z-20 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Heart Rate Alert</div>
                      <div className="text-sm font-bold text-white">125 BPM</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[85%]" />
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 -left-12 bg-gray-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Insight Unlocked</div>
                      <div className="text-xs text-primary">Sleep correlates with Pain</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Old Way vs. The HIT Way</h2>
            <p className="text-gray-400 text-lg">Stop juggling multiple apps. Upgrade to a unified health command center.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
              <h3 className="text-2xl font-bold mb-6 text-gray-300">Fragmented Health</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>5+ apps for meds, symptoms, sleep, mood</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>Emergency contacts buried in phone settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>No connection between data points</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>Generic, one-size-fits-all advice</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-background text-sm font-bold"><Check className="w-5 h-5" /></span>
                Unified Command
              </h3>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>All-in-one comprehensive tracking dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>One-tap Safety Beacon emergency response</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>AI correlates symptoms with lifestyle triggers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Personalized Sonic Therapy for recovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Built for the <span className="text-primary">Unexpected</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Advanced features designed to protect, analyze, and optimize your health journey.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-secondary/40 border border-white/5 hover:border-primary/50 p-8 rounded-2xl hover:bg-secondary/60 transition-all group"
              >
                <div className="mb-6 p-4 bg-background/50 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="py-24 overflow-hidden">
        {/* Feature 1: Safety Beacon */}
        <div className="container mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
               <div className="relative group">
                <div className="absolute inset-0 bg-red-500/20 blur-[60px] rounded-full group-hover:bg-red-500/30 transition-all duration-500" />
                <img src="/images/safety.png" alt="Safety Beacon" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Safety Beacon: Your Emergency Lifeline</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                When seconds count, HIT is ready. With a single tap, alert your care team, share your live GPS location, and provide first responders with critical medical data.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-500" /> Live GPS Location Sharing
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-500" /> Instant Care Team Notifications
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-500" /> "Home Alone" Safety Check-ins
                </li>
              </ul>
              <Button variant="outline" className="border-red-500/50 text-red-500 hover:bg-red-500/10">Learn about Safety Beacon</Button>
            </div>
          </div>
        </div>

        {/* Feature 2: AI Insights */}
        <div className="container mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">AI That Understands YOU</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Stop guessing what triggers your symptoms. HIT's AI engine analyzes correlations between your sleep, diet, meds, and weather to find hidden patterns.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-gray-400">Pattern Accuracy</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Real-time Analysis</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/30 transition-all duration-500" />
                <img src="/images/ai.png" alt="AI Insights" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Sonic Therapy */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2 order-2 lg:order-1">
               <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full group-hover:bg-accent/30 transition-all duration-500" />
                <img src="/images/sonic.png" alt="Sonic Therapy" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <Music className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Heal with Sound</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Integrated binaural beats and wellness audio designed to lower cortisol, improve sleep, and enhance focus. Science-backed therapy in your pocket.
              </p>
              <Button className="bg-accent text-background hover:bg-accent/90 font-bold">Explore Soundscapes</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">3 Steps to Control</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Log & Track", desc: "Easily log meds, symptoms, and lifestyle factors in seconds." },
              { num: "02", title: "Analyze", desc: "Let AI uncover triggers and correlations hidden in your data." },
              { num: "03", title: "Optimize", desc: "Follow personalized insights to improve health and prevent emergencies." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-white/5 border border-white/5 text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-6xl font-bold text-white/5 mb-6 absolute top-4 right-6 group-hover:text-primary/10 transition-colors">{step.num}</div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-background transition-all">
                  {idx === 0 ? <Activity /> : idx === 1 ? <Brain /> : <Zap />}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Real Stories, Real Impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/30 transition-colors flex flex-col">
                <div className="mb-6 flex text-primary">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-300 mb-6 italic flex-grow">"{t.quote}"</p>
                <div className="flex items-center justify-between mt-4 pt-6 border-t border-white/5">
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                  <div className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Pricing Preview */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 skew-y-3 transform origin-bottom-left scale-110 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-secondary to-background border border-white/10 rounded-3xl p-12 lg:p-20 text-center shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">Ready to take control?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Start using HIT right now — no download, no account required. Early access lifetime pricing available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                className="h-16 px-10 bg-white text-background hover:bg-gray-100 text-xl font-bold rounded-full w-full sm:w-auto"
                onClick={() => handleExternalRedirect(URLS.app, 'Pricing Launch App')}
              >
                Launch HIT Now
              </Button>
              <Button
                className="h-16 px-10 bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl font-bold rounded-full w-full sm:w-auto"
                onClick={() => scrollToSection('pricing')}
              >
                View Pricing
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">Works in any browser. No install required.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Is my health data secure?", a: "Yes. All your data is stored locally on your device — nothing is sent to external servers or sold to third parties. Your data is fully under your control." },
              { q: "How does the Safety Beacon work?", a: "With one tap, Safety Beacon sends an alert to your designated contacts with your location and critical medical info. It also features a 'Home Alone' check-in mode." },
              { q: "Does HIT replace my doctor?", a: "No. HIT is a tool to help you manage your health and provide better data to your healthcare team. Always consult with professionals for medical decisions." },
              { q: "How much does HIT cost?", a: "HIT is available as a lifetime one-time purchase starting at $79. Early access pricing is limited — get in now before the price increases." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-background border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity className="text-primary w-6 h-6" />
                <span className="text-xl font-bold text-white">HIT</span>
              </div>
              <p className="text-gray-500">The first emergency-ready health tracking platform for the modern world.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-3 text-gray-500">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-primary">Features</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:text-primary">Security</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary">Enterprise</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary">Pricing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-500">
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary">How it Works</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-primary">Success Stories</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary">Help Center</button></li>
                <li><a href="mailto:info@aimicrotechlink.com" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="https://aimicrotechlink.com/privacy" target="_blank" rel="noreferrer" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="https://aimicrotechlink.com/privacy" target="_blank" rel="noreferrer" className="hover:text-primary">Terms of Service</a></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary">Medical Disclaimer</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
            © 2025 Health Immune Tracker (HIT). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
