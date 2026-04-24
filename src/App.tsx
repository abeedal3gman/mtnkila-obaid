import { motion } from 'motion/react';
import { Phone, MessageCircle, Wrench, Zap, Cpu, Clock, Award, ShieldCheck, MapPin, CheckCircle2, Menu, X, Download, Settings, Battery, Shield, Star, Gauge } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const SERVICES_DATA = [
  {
    id: 'electrical',
    title: 'الأعطال الكهربائية',
    description: 'صيانة الضفائر، تبديل البطاريات، إصلاح الدينامو، وبرمجة كافة الأنظمة الكهربائية المعقدة في موقعك.',
    image: 'https://i.postimg.cc/htGPzm2n/syant-alsyarat-ʿly-janb-altryq.png',
    icon: Zap,
    seo: 'كهربائي سيارات متنقل الرياض صيانة فورية أمام المنزل',
  },
  {
    id: 'mechanical',
    title: 'الأعطال الميكانيكية',
    description: 'إصلاح المحركات، الجير، المكابح، تبديل الزيوت، وصيانة نظام التبريد بأيدي خبراء ممارسين.',
    image: 'https://i.postimg.cc/Pq4JvpJc/mykanykyan-yʿmlan-ʿly-tʿlyq-almrkbat.png',
    icon: Wrench,
    seo: 'ميكانيكي متنقل فحص وتصليح مكائن وجيربوكس',
  },
  {
    id: 'computer',
    title: 'فحص الكمبيوتر',
    description: 'أحدث أجهزة الفحص الشامل، مسح الأكواد، وبرمجة المفاتيح والأنظمة الذكية للسيارة.',
    image: 'https://i.postimg.cc/nhLcjm3f/mykanyky-yʿml-ʿly-syart-fy-alryad.png',
    icon: Cpu,
    seo: 'برمجة كمبيوتر سيارات متنقل فحص شامل دقيق للسيارة',
  },
  {
    id: 'battery',
    title: 'فحص وتغيير البطارية',
    description: 'خدمة تبديل بطارية السيارة أمام المنزل مع فحص نظام الشحن (الدينامو) وتقديم ضمان حقيقي على البطارية والتركيب.',
    image: 'https://i.postimg.cc/L8s6YPxK/astbdal-btaryt-alsyart-ʿly-altryq.png',
    icon: Zap,
    seo: 'تبديل بطارية متنقل الرياض خدمة سريعة مع الضمان',
  },
];

const trackConversion = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const url = e.currentTarget.href;
  if (typeof window !== 'undefined' && (window as any).gtag) {
    e.preventDefault();
    let fired = false;
    const callback = () => {
      if (!fired) {
        fired = true;
        window.location.href = url;
      }
    };
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18113999403/_oUNCL-pl6IcEKvktr1D',
      'event_callback': callback
    });
    // Fallback if gtag takes too long
    setTimeout(callback, 500);
  }
};

const Logo = ({ className = "w-8 h-8", textColor = "text-white" }: { className?: string, textColor?: string }) => (
  <div className="flex items-center gap-3 group translate-y-[-2px]">
    <div className="relative">
      <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all"></div>
      <div className="bg-gradient-to-br from-primary to-yellow-600 p-2.5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transform group-hover:scale-110 transition-all relative">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`${className} text-secondary`}
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/>
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`${textColor} text-2xl font-black tracking-tighter uppercase flex items-baseline gap-1`}>
        ورشة <span className="text-primary italic">متنقلة</span>
      </span>
      <div className="flex items-center gap-2 mt-1">
        <span className="h-[2px] w-4 bg-primary"></span>
        <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">PROFESSIONAL REPAIR</span>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'الرئيسية', href: '#' },
    { 
      title: 'خدماتنا', 
      href: '#services',
      hasDropdown: true,
      subLinks: SERVICES_DATA.map(s => ({ title: s.title, href: `#${s.id}` }))
    },
    { title: 'مميزاتنا', href: '#features' },
    { title: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary border-b-4 border-primary py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.title} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setServicesDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setServicesDropdownOpen(false)}
            >
              <a
                href={link.href}
                className="font-bold text-sm uppercase transition-colors hover:text-primary text-white py-4"
              >
                {link.title}
              </a>
              
              {link.hasDropdown && servicesDropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-64 bg-secondary border-t-4 border-primary shadow-2xl py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {link.subLinks?.map((sub) => (
                    <a
                      key={sub.title}
                      href={sub.href}
                      className="block px-6 py-3 text-sm font-bold text-white hover:bg-primary hover:text-secondary transition-colors"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="tel:0565219283"
            onClick={trackConversion}
            className="bg-primary text-secondary px-6 py-2 text-sm font-black hover:bg-yellow-400 transition-all shadow-lg"
          >
            اتصل الآن
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-secondary border-t-4 border-primary py-6 flex flex-col items-center gap-2 md:hidden max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link) => (
            <div key={link.title} className="w-full">
              <a
                href={link.href}
                className="text-white font-bold w-full block text-center py-3 hover:bg-accent border-b border-white/5"
                onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
              {link.hasDropdown && (
                <div className="bg-slate-800/50">
                  {link.subLinks?.map((sub) => (
                    <a
                      key={sub.title}
                      href={sub.href}
                      className="text-primary font-bold w-full block text-center py-2 text-xs hover:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-2">
            <a
               href="tel:0565219283"
               onClick={trackConversion}
               className="bg-primary text-secondary px-10 py-3 font-black inline-block"
            >
              اتصل بنا
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/k4mnrnys/Chat-GPT-Image-24-abryl-2026-02-36-25-m.png"
          alt="ورشة متنقلة صيانة سيارات"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay specifically for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/90 via-secondary/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white py-24"
        >
          <span className="bg-primary text-secondary px-4 py-1 text-xs font-black inline-block mb-6 rounded">أفضل ورشة سيارات متنقلة بالمنطقة</span>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 heading-decoration">
            صيانة سيارتك <br />
            <span className="text-primary font-black">أمام منزلك</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-bold">
            نحن نوفر لك خدمة <span className="text-primary font-black italic underline decoration-white font-sans uppercase">ورشة متنقلة</span> متكاملة. نصلك في موقعك لإصلاح كافة الأعطال الميكانيكية والكهربائية وفحص الكمبيوتر بأحدث الأجهزة.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0565219283"
              onClick={trackConversion}
              className="bg-primary text-secondary px-10 py-5 text-lg font-black hover:bg-yellow-400 transition-all flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
            >
              <Phone className="w-6 h-6" />
              احجز موعد الآن
            </a>
            <a
              href="https://wa.me/966565219283"
              onClick={trackConversion}
              className="bg-white text-secondary px-8 py-4 text-lg font-black hover:bg-slate-100 transition-all flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
            >
              <MessageCircle className="w-6 h-6 text-green-600" />
              واتساب مباشر
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { number: '15+', label: 'سنة خبرة طمأنينة', icon: Award },
    { number: '10k+', label: 'سيارة تم صيانتها', icon: ShieldCheck },
    { number: '24/7', label: 'خدمة طريق فورية', icon: Clock },
    { number: '100%', label: 'ضمان قطع الغيار', icon: CheckCircle2 },
  ];

  return (
    <section className="bg-slate-50 py-16 border-y-2 border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="bg-white w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center mb-4 shadow-lg">
                <stat.icon className="text-secondary w-8 h-8" />
              </div>
              <span className="text-4xl font-black text-secondary leading-none">{stat.number}</span>
              <span className="text-xs text-slate-500 font-black uppercase tracking-widest mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 px-4">
          <div className="lg:col-span-8">
            <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary"></span> خدمات الصيانة المتكاملة
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
              حلول تقنية ذكية <br /> <span className="text-primary">تصل إليك فوراً</span>
            </h3>
          </div>
          <div className="lg:col-span-4 lg:text-left">
            <p className="text-slate-400 text-lg">
              خبراتنا تتجاوز 15 عاماً في التعامل مع كافة أنواع السيارات (ألماني، ياباني، كوري، أمريكي).
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              id={service.id}
              whileHover={{ y: -10 }}
              key={idx}
              className="bg-slate-900 border-2 border-slate-800 overflow-hidden flex flex-col group hover:border-primary transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] scroll-mt-32"
            >
              {service.image && (
                <div className="h-64 overflow-hidden relative">
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-1 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary w-12 h-12 rounded-md flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <service.icon className="text-secondary w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-white leading-none">{service.title}</h4>
                </div>
                
                <p className="text-slate-300 mb-8 leading-relaxed text-lg font-medium">{service.description}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-800">
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest">{service.seo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="relative">
               <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-[80px]"></div>
               <img 
                 src="https://i.postimg.cc/4dgJCJ1b/Chat-GPT-Image-24-abryl-2026-02-33-39-m.png" 
                 alt="فني صيانة سيارات محترف" 
                 className="grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-8 border-slate-50 w-full h-auto object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-8 -left-8 bg-secondary text-primary p-12 shadow-2xl border-b-8 border-primary">
                 <span className="text-6xl font-black block leading-none">15</span>
                 <span className="text-xs font-black uppercase tracking-[0.2em] mt-3 block">سنة من الخبرة الميدانية</span>
               </div>
             </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10 py-12">
            <div>
              <h2 className="text-secondary font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-secondary"></span> لماذا نحن الخيار الأول؟
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-secondary leading-none heading-decoration inline-block">
                دقة، أمانة، وحرفية
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              {[
                { t: 'معدات متطورة', d: 'نمتلك أحدث أجهزة الفحص العالمية لضمان تشخيص دقيق.' },
                { t: 'فريق متخصص', d: 'فنيون مدربون على أعلى المستويات للتعامل مع أعقد الأعطال.' },
                { t: 'خدمة منزلية', d: 'نصلك أينما كنت، في البيت، العمل، أو حتى في منتصف الطريق.' },
                { t: 'ضمان الخدمة', d: 'نقدم ضماناً حقيقياً على كافة الخدمات وقطع الغيار المركبة.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="text-primary font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                  <div>
                    <h4 className="text-xl font-black text-secondary mb-2">{f.t}</h4>
                    <p className="text-slate-500 leading-relaxed">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="bg-secondary border-t-8 border-primary p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[200px]"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8">هل تعطلت سيارتك فجأة؟</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              لا داعي للقلق أو استئجار سطحة، فريقنا جاهز للانطلاق إليك الآن. اتصل بنا واحصل على خدمة فورية في موقعك.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="tel:0565219283"
                onClick={trackConversion}
                className="bg-primary text-secondary px-12 py-6 text-2xl font-black flex items-center justify-center gap-4 hover:bg-yellow-400 transition-all shadow-xl"
              >
                <Phone className="w-8 h-8 shrink-0" />
                اتصل بنا: 0565219283
              </a>
              <a
                href="https://wa.me/966565219283"
                onClick={trackConversion}
                className="bg-white text-secondary px-12 py-6 text-2xl font-black flex items-center justify-center gap-4 hover:bg-slate-100 transition-all shadow-xl"
              >
                <MessageCircle className="w-8 h-8 shrink-0 text-green-600" />
                تواصل عبر واتساب
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary font-bold text-sm uppercase tracking-widest">
               <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded">
                 <MapPin className="w-4 h-4" /> جميع أحياء الرياض
               </span>
               <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded">
                 <CheckCircle2 className="w-4 h-4" /> أسعار منافسة
               </span>
               <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded">
                 <Clock className="w-4 h-4" /> متواجدون 24/7
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-500 py-16 border-t-8 border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 px-4">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-lg leading-relaxed max-w-md">
              نحن نقدم حلولاً احترافية لصيانة السيارات المتنقلة بأحدث التقنيات. نعتز بثقتكم ونسعى دائماً لتقديم الخدمة الأمثل في أسرع وقت.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8 border-b-2 border-primary pb-2 inline-block">روابط هامة</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 hover:mr-2 transition-all duration-300"> الرئيسيـة</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors flex items-center gap-2 hover:mr-2 transition-all duration-300"> خدماتنـا</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors flex items-center gap-2 hover:mr-2 transition-all duration-300"> مميزاتنـا</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2 hover:mr-2 transition-all duration-300"> اتصـل بنـا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8 border-b-2 border-primary pb-2 inline-block">كلمات البحث</h4>
            <div className="flex flex-wrap gap-2 pt-2">
              {['ميكانيكي متنقل', 'كهربائي سيارات الرياض', 'تصليح سيارات عند البيت', 'فحص كمبيوتر سيارات', 'برمجة مفاتيح سيارات', 'تبديل بطارية متنقل', 'ورشة متنقلة 24 ساعة'].map((tag) => (
                <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 font-bold rounded-sm uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} ورشة متنقلة لصيانة السيارات - كافة الحقوق محفوظة</p>
            <div className="flex gap-4 text-[10px] text-slate-600 font-black uppercase">
              <button onClick={() => alert('سياسة الخصوصية: نحن نحترم خصوصيتك ولا نجمع أي بيانات شخصية عبر هذا الموقع بشكل تلقائي.')} className="hover:text-primary transition-colors">سياسة الخصوصية</button>
              <span>|</span>
              <button onClick={() => alert('الشروط والأحكام: الخدمات مقدمة في موقع العميل وتخضع لتقدير الفني في الموقع.')} className="hover:text-primary transition-colors">الشروط والأحكام</button>
            </div>
            <p className="text-[9px] text-slate-700 font-bold uppercase leading-relaxed mt-2">
              تنبيه: نحن مقدم خدمة مستقل (independent provider) ولبينا كافة اشتراطات الشفافية، ولسنا وكلاء رسميين لأي علامة تجارية.
            </p>
          </div>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
             <span>صيانة فورية</span>
             <span>•</span>
             <span>جودة معتمدة</span>
             <span>•</span>
             <span>خبرة 15 عاماً</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingAction = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[70] flex flex-col gap-4">
      <motion.a
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/966565219283"
        onClick={trackConversion}
        className="bg-green-500 text-white px-6 py-4 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:bg-green-600 transition-all flex items-center gap-4 border-2 border-white/20 group"
      >
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black uppercase tracking-tighter opacity-80">تراسل معنا</span>
          <span className="font-black text-lg whitespace-nowrap">واتساب الآن</span>
        </div>
        <MessageCircle className="w-8 h-8 shrink-0" />
      </motion.a>
      
      <motion.a
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        href="tel:0565219283"
        onClick={trackConversion}
        className="bg-secondary text-primary px-6 py-4 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:bg-slate-800 transition-all flex items-center gap-4 border-2 border-primary/40 group"
      >
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black uppercase tracking-tighter opacity-80">متاحون 24/7</span>
          <span className="font-black text-lg whitespace-nowrap">اتصل بنا فوراً</span>
        </div>
        <Phone className="w-8 h-8 shrink-0" />
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary selection:text-secondary">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Contact />
      <Footer />
      <FloatingAction />
    </div>
  );
}
