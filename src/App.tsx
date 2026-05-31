import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  UtensilsCrossed, 
  Music, 
  Trophy, 
  Sparkles, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Star, 
  Facebook, 
  Instagram, 
  Menu, 
  X, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Bike,
  Flame,
  User,
  Users,
  AlertCircle
} from "lucide-react";
import { servicesData, menuCategories, testimonials, contactInfo } from "./data";

export default function App() {
  const [lang, setLang] = useState<"ar" | "fr">("ar");
  const [activeMenuCategory, setActiveMenuCategory] = useState("gourmet");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Booking Form State
  const [bookingType, setBookingType] = useState("restaurant");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingGuests, setBookingGuests] = useState("4");
  const [bookingNotes, setBookingNotes] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Delivery Modal State
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);

  // Quick reservation modal from Hero CTA
  const [heroModalOpen, setHeroModalOpenOpen] = useState(false);

  // Trigger Dynamic RTL change on Language Switch
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName.trim() || !bookingPhone.trim() || !bookingDate || !bookingTime) {
      alert(lang === "ar" ? "يرجى ملء جميع الحقول المطلوبة!" : "Veuillez remplir tous les champs obligatoires !");
      return;
    }
    // Generate simulated Ticket ID
    const randomId = "LOPERA-" + Math.floor(1000 + Math.random() * 9000);
    setBookingId(randomId);
    setBookingSuccess(true);
  };

  const resetBookingForm = () => {
    setBookingName("");
    setBookingPhone("");
    setBookingDate("");
    setBookingTime("");
    setBookingGuests("4");
    setBookingNotes("");
    setBookingSuccess(false);
    setBookingId("");
  };

  // Translations object for interface strings
  const t = {
    brand: "Parc L'opera",
    slogan: lang === "ar" ? "المتعة العائلية تكتمل في مكان واحد" : "Le plaisir familial réuni en un seul lieu",
    
    // Nav links
    navHome: lang === "ar" ? "الرئيسية" : "Accueil",
    navServices: lang === "ar" ? "خدماتنا" : "Nos Services",
    navMenu: lang === "ar" ? "المنيو" : "Le Menu",
    navReviews: lang === "ar" ? "آراء عملائنا" : "Avis Clients",
    navContact: lang === "ar" ? "الحجز والاتصال" : "Réservation",

    // Hero Section
    heroTitle: lang === "ar" ? "عالم كامل من المذاق الطيب، الرياضة، والأنغام الساحرة" : "Un univers de saveurs, de sport et de mélodies envoûtantes",
    heroSub: lang === "ar" ? "أهلاً بكم في مجمع بارك الأوبرا العائلي. حيث تلتقي فخامة المطعم، حماس الملاعب الرياضية، طرب الليالي الموسيقية الحية، وبهجة عروض الأطفال المميزة تحت سقف واحد ومناسب لجميع أفراد عائلتكم." : "Bienvenue au complexe familial Parc L'opera. Là où la haute gastronomie, la passion du sport, la douceur des soirées lives et la joie des animations pour enfants se rencontrent dans une atmosphère féerique.",
    heroCTA1: lang === "ar" ? "احجز مكانك الآن" : "Réserver une Table/Terrain",
    heroCTA2: lang === "ar" ? "تصفح المنيو الشهي" : "Découvrir le Menu",

    // Quick Stats
    statRestaurant: lang === "ar" ? "مطعم ومقهى فاخر" : "Resto & Café Chic",
    statSports: lang === "ar" ? "ملاعب كرة قدم وتنس" : "Terrains de Football & Tennis",
    statLive: lang === "ar" ? "سهرات فنية حية" : "Soirées Live & Luth",
    statKids: lang === "ar" ? "عروض ترفيهية للأولاد" : "Espace Enfants Animé",

    // Services
    servicesHeader: lang === "ar" ? "ماذا ينتظركم في مجمع بارك الأوبرا؟" : "Que vous réserve Parc L'opera ?",
    servicesSub: lang === "ar" ? "استكشف خدماتنا المصممة لتناسب مختلف أفراد العائلة والأصدقاء لقضاء أسعد اللحظات" : "Découvrez des univers soigneusement aménagés pour toute la famille, assurant des souvenirs mémorables.",

    // Menu Section
    menuHeader: lang === "ar" ? "منيو بارك الأوبرا الفاخر" : "Le Menu Signature de L'opera",
    menuSub: lang === "ar" ? "أطباقنا محضرة بعناية وحب على أيدي نخبة من الطهاة المحترفين للتألق بحاسة التذوق لديكم" : "Des plats d'exception préparés avec amour par nos chefs, sublimant vos papilles à chaque bouchée.",
    popularBadge: lang === "ar" ? "الأكثر طلباً" : "Populaire",
    delBadgeText: lang === "ar" ? "جيبلي معاك / توصيل سريع" : "Livraison à domicile / جيبلي معاك",
    delSubtitle: lang === "ar" ? "خدمة التوصيل السريع للمنازل متاحة!" : "Service de livraison rapide disponible !",

    // Testimonials
    testHeader: lang === "ar" ? "كلمات دافئة من عائلتنا" : "Les mots doux de nos clients",
    testSub: lang === "ar" ? "سعدنا جداً باستضافة آلاف العائلات والرياضيين، إليكم ما يقولونه عن تجربتهم" : "Nous avons eu le privilège d'accueillir des milliers d'invités. Voici leurs retours sincères.",

    // Booking & Contact
    contactHeader: lang === "ar" ? "احجز موعدك وتواصل معنا" : "Contact & Réservations Directes",
    contactSub: lang === "ar" ? "نحن متاحون للرد على اتصالاتكم واستقبال حجوزاتكم الخاصة بالمطعم والملاعب طوال اليوم" : "Notre équipe est à votre disposition 7j/7 pour confirmer vos tables et vos créneaux de sport.",
    hoursTitle: lang === "ar" ? "أوقات العمل واستقبالكم" : "Heures d'Ouverture",
    addressTitle: lang === "ar" ? "موقعنا الجغرافي" : "Adresse du Complexe",
    callSports: lang === "ar" ? "حجز ملاعب التنس وكرة القدم" : "Réservation Terrains (Ténis & Foot)",
    callRestaurant: lang === "ar" ? "حجز المطعم وسهرات الأطفال" : "Réservation Table & Anim. Enfants",
    clickToCall: lang === "ar" ? "اضغط للاتصال المباشر" : "Cliquez pour appeler direct",

    // Booking Form
    formTitle: lang === "ar" ? "أرسل طلب حجز إلكتروني سريع" : "Formulaire de Réservation Rapide",
    formName: lang === "ar" ? "الاسم الثلاثي الموقر" : "Nom Complet",
    formPhone: lang === "ar" ? "رقم الهاتف التونسي (للتأكيد)" : "N° de Téléphone",
    formDate: lang === "ar" ? "تاريخ الحجز المفضل" : "Date de Réservation",
    formTime: lang === "ar" ? "توقيت الحضور والمستحق" : "Heure d'Arrivée",
    formType: lang === "ar" ? "نوع الحجز المطلوب" : "Type de Réservation",
    formTypeRest: lang === "ar" ? "طاولة عشاء أو غداء بالمطعم" : "Table de Restaurant",
    formTypeFoot: lang === "ar" ? "حجز ملعب كرة قدم خماسي" : "Terrain de Football (5vs5)",
    formTypeTennis: lang === "ar" ? "حجز ملعب تنس أرضي" : "Court de Tennis",
    formTypeKids: lang === "ar" ? "حفلة عيد ميلاد / ترفيه أطفال" : "Événement Privé / Anniv. Enfants",
    formGuests: lang === "ar" ? "عدد الأشخاص / المدعوين" : "Nombre de Personnes",
    formNotes: lang === "ar" ? "طلبات وتفضيلات خاصة (مثال: طاولة قرب العود، كرة إضافية...)" : "Notes & Préférences spécifiques (ex: table près du luth, ballon inclus...)",
    formSubmit: lang === "ar" ? "تأكيد وإرسال طلب الحجز" : "Confirmer ma Réservation",
    formSuccessTitle: lang === "ar" ? "تم الحجز بنجاح!" : "Réservation Confirmée !",
    formSuccessSub: lang === "ar" ? "نسعد جداً باستقبالكم وتجهيز حجزكم المميز ببارك الأوبرا." : "Nous sommes ravis de vous accueillir bientôt au complexe !",
    ticketId: lang === "ar" ? "رقم تذكرة الحجز" : "Code du Ticket",
    ticketAlert: lang === "ar" ? "يرجى الاحتفاظ بلقطة شاشة لهذه التذكرة وتجهيزها عند الوصول." : "Veuillez faire une capture de ce ticket pour la présenter à l'accueil.",
    ticketNew: lang === "ar" ? "إجراء حجز جديد" : "Faire une nouvelle réservation",

    // Delivery Content
    deliveryTitle: lang === "ar" ? "خدمة التوصيل السريع (جيبلي معاك)" : "Livraison direct (جيبلي معاك 🛵)",
    deliveryBody: lang === "ar" ? "هل ترغب في تذوق مأكولات بارك الأوبرا الشهيرة والبيتزا الساخنة وأنت في منزلك؟ تواصل معنا مباشرة على الرقم المخصص للمطعم لتلقي طلبك السريع دافئاً ومغطى بالحب!" : "Profitez des délicieuses spécialités et pizzas au feu de bois de Parc L'opera directement chez vous ! Passez votre commande par téléphone et notre livreur s'occupe du reste en un clin d'œil.",
    deliveryBtn: lang === "ar" ? "اتصل للطلب الآن" : "Commander maintenant par Tél",

    footerText: lang === "ar" ? "مجمع عائلي ترفيهي متكامل يجمع بين الطعم الاستثنائي، العشق الرياضي ومحبة الفنون والراحة العائلية." : "Un complexe familial intégré unissant gastronomie, passion du sport et fidélité aux arts.",
    footerRights: "© 2026 Parc L'opera. جميع الحقوق محفوظة | وكل الحب لزبائننا وعائلاتنا."
  };

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navServices, href: "#services" },
    { label: t.navMenu, href: "#menu" },
    { label: t.navReviews, href: "#reviews" },
    { label: t.navContact, href: "#contact" }
  ];

  return (
    <div className={`min-h-screen font-sans ${lang === "ar" ? "rtl" : "ltr"}`}>
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl font-bold font-display tracking-tight bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 bg-clip-text text-transparent hover:opacity-90 transition-all">
              {t.brand} <span className="inline-block animate-pulse">🎵</span><span className="inline-block text-emerald-400">⚽</span>
            </span>
          </a>

          {/* Navigational Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-slate-300 hover:text-amber-400 hover:translate-y-[-1px] active:scale-95 text-sm sm:text-base transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Actions: Language toggle + Book Now direct */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang switch Button */}
            <button
              onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
              className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/50 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <span>🌐</span>
              <span>{lang === "ar" ? "Français" : "العربية"}</span>
            </button>

            {/* CTA action button */}
            <a
              href="#contact"
              className="bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-medium px-5 py-2.5 rounded-full text-sm shadow-md shadow-rose-950/40 hover:shadow-lg hover:shadow-rose-950/55 transition-all flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.heroCTA1}</span>
            </a>
          </div>

          {/* Tablet/Mobile Actions & Burger Menu */}
          <div className="flex md:hidden items-center gap-3">
            {/* Lang switcher icons */}
            <button
              onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
              className="bg-slate-900 text-slate-300 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-800"
            >
              {lang === "ar" ? "FR" : "عربي"}
            </button>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 bg-slate-900/60 rounded-lg border border-slate-800 active:scale-90 transition-transform"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden w-full bg-slate-950 border-b border-slate-800 bg-opacity-98 absolute top-20 left-0"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-200 hover:text-amber-400 font-medium py-2 border-b border-slate-900 block"
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Book direct Link */}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-amber-500 to-rose-600 text-white py-3 px-4 rounded-xl text-center font-bold shadow-md flex items-center justify-center gap-2 shrink-0"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.heroCTA1}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden">
        
        {/* Background Canvas: Generated image / Unsplash fallback */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/parc_lopera_hero_1780240992636.png"
            alt="Parc L'opera Complex Hero"
            className="w-full h-full object-cover object-center select-none"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to beautiful Unsplash lounge picture in case of path issue
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80";
            }}
          />
          {/* Overlays for dark luxury styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/65" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950" />
          {/* Neon Light Gradients */}
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        {/* Hero Inside Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
          
          {/* Pulse Live Sign */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-900 border border-slate-700/60 px-4 py-1.5 rounded-full mb-6 shadow-inner text-amber-400 font-bold text-xs sm:text-sm cursor-default"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span>{t.slogan}</span>
          </motion.div>

          {/* Headline Big */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans text-white leading-tight mb-6"
          >
            {t.heroTitle}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-10"
          >
            {t.heroSub}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            {/* Book Now - Smooth scroll down to form */}
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg shadow-lg shadow-rose-950/40 hover:scale-103 active:scale-98 transition-all flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>{t.heroCTA1}</span>
            </a>

            {/* Browse Menu - Smooth scroll to Menu */}
            <a
              href="#menu"
              className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-slate-200 hover:text-amber-400 font-bold px-8 py-4 rounded-full text-base sm:text-lg shadow-inner hover:border-amber-500/50 hover:scale-103 active:scale-98 transition-all flex items-center justify-center gap-2.5"
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>{t.heroCTA2}</span>
            </a>
          </motion.div>

          {/* Complex Service Badges / Icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-10 border-t border-slate-900/80"
          >
            <div className="flex items-center gap-3 bg-slate-900/40 border border-slate-900/40 py-3 px-4 rounded-2xl justify-center">
              <UtensilsCrossed className="w-5 h-5 text-amber-400" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">{t.statRestaurant}</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/40 border border-slate-900/40 py-3 px-4 rounded-2xl justify-center">
              <Trophy className="w-5 h-5 text-emerald-400" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">{t.statSports}</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/40 border border-slate-900/40 py-3 px-4 rounded-2xl justify-center">
              <Music className="w-5 h-5 text-purple-400" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">{t.statLive}</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-900/40 border border-slate-900/40 py-3 px-4 rounded-2xl justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">{t.statKids}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Curve Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-amber-500 uppercase tracking-widest block mb-2">⭐ {lang === "ar" ? "لماذا نحن مميزون" : "NOTRE COMPLEXE"} ⭐</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight mb-4">{t.servicesHeader}</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">{t.servicesSub}</p>
          </div>

          {/* Grid Layout of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, idx) => {
              // Custom Lucide mapping
              const IconComp = service.id === "restaurant" ? UtensilsCrossed 
                : service.id === "lounge" ? Music 
                : service.id === "sports" ? Trophy 
                : Sparkles;

              return (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 relative overflow-hidden group hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between"
                >
                  {/* Decorative glowing back light */}
                  <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-2xl ${
                    service.id === "restaurant" ? "bg-amber-500" 
                    : service.id === "lounge" ? "bg-purple-500"
                    : service.id === "sports" ? "bg-emerald-500"
                    : "bg-cyan-500"
                  }`} />

                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <span className={`inline-block text-xs font-black tracking-wider px-3 py-1 rounded-full border ${service.colorClass}`}>
                        {lang === "ar" ? service.badgeAr : service.badgeFr}
                      </span>
                      <IconComp className={`w-7 h-7 ${
                        service.id === "restaurant" ? "text-amber-400" 
                        : service.id === "lounge" ? "text-purple-400" 
                        : service.id === "sports" ? "text-emerald-400" 
                        : "text-cyan-400"
                      }`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-sans text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {lang === "ar" ? service.titleAr : service.titleFr}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {lang === "ar" ? service.descriptionAr : service.descriptionFr}
                    </p>
                  </div>

                  {/* Context Actions */}
                  <div className="mt-8 pt-4 border-t border-slate-900 flex justify-between items-center text-xs">
                    <span className="text-slate-500">{lang === "ar" ? "متوفر يومياً" : "Disponible 7j/7"}</span>
                    <a href="#contact" className="text-slate-300 hover:text-amber-400 flex items-center gap-1 font-bold transition-colors">
                      <span>{lang === "ar" ? "احجز الآن" : "Réserver"}</span>
                      {lang === "ar" ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Call Banner inside services */}
          <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-rose-500/15 to-transparent border border-amber-500/20 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {lang === "ar" ? "تخطط لمناسبة خاصة؟ سهرة طربية أم بطولة كرة قدم؟" : "Un événement spécial à fêter ? Soirée privée ?"}
              </h3>
              <p className="text-sm text-slate-400">
                {lang === "ar" ? "اتصل بنا لنجهز لك طاولات خاصة، بطولات رياضية مدهشة، أو ترفيه أطفال متكامل." : "Contactez notre gérant pour une organisation VIP sur mesure (anniversaires, tournois...)"}
              </p>
            </div>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3 rounded-full text-sm sm:text-base shadow-lg transition-transform active:scale-95 whitespace-nowrap"
            >
              {lang === "ar" ? "الحديث مع الإدارة والمسؤول" : "Discuter avec l'Administration"}
            </a>
          </div>

        </div>
      </section>

      {/* INTERACTIVE MENU SECTION */}
      <section id="menu" className="py-24 bg-slate-900/40 border-y border-slate-900 relative">
        
        {/* Floating pulse Delivery Badge ("جيبلي معاك") */}
        <div className="absolute right-4 sm:right-10 top-0 transform -translate-y-1/2 z-20">
          <motion.button
            onClick={() => setDeliveryModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white font-extrabold px-5 py-3 rounded-full shadow-2xl border border-red-500/30 cursor-pointer animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <Bike className="w-5 h-5 text-white animate-pulse" />
            <span className="text-xs sm:text-sm font-sans font-black">{t.delBadgeText} 🛵</span>
          </motion.button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black text-rose-500 uppercase tracking-widest block mb-2">🍽️ {lang === "ar" ? "مذاقات الأوبرا الساحرة" : "MENU DU CHEF"}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white mb-4">{t.menuHeader}</h2>
            <p className="text-sm sm:text-base text-slate-400">{t.menuSub}</p>
          </div>

          {/* Interactive Menu Filtering Bar */}
          <div className="flex justify-center border-b border-slate-800 mb-12 overflow-x-auto scroller-custom-slim py-2">
            <div className="flex gap-2 sm:gap-4 px-2">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveMenuCategory(cat.id)}
                  className={`px-5 py-3 rounded-t-2xl font-bold text-sm sm:text-base cursor-pointer whitespace-nowrap transition-colors border-t-2 ${
                    activeMenuCategory === cat.id
                      ? "text-amber-400 border-amber-500 bg-slate-900/80"
                      : "text-slate-400 border-transparent hover:text-white"
                  }`}
                >
                  {lang === "ar" ? cat.titleAr : cat.titleFr}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {menuCategories
              .find((cat) => cat.id === activeMenuCategory)
              ?.items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 p-4 rounded-3xl flex flex-col sm:flex-row gap-5 hover:bg-slate-950 transition-all shadow-inner relative justify-between overflow-hidden"
                >
                  
                  {item.popular && (
                    <span className="absolute top-2 left-2 z-10 bg-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-lg uppercase tracking-wider flex items-center gap-1">
                      <Flame className="w-3 h-3 text-slate-950" />
                      {t.popularBadge}
                    </span>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    {/* Food Photo Container */}
                    <div className="w-full sm:w-28 h-28 shrink-0 rounded-2xl overflow-hidden bg-slate-900 relative">
                      <img
                        src={item.image}
                        alt={item.nameAr}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meal Text Description */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        {/* Arabic Header */}
                        <h4 className="text-lg sm:text-xl font-extrabold text-white">
                          {lang === "ar" ? item.nameAr : item.nameFr}
                        </h4>
                      </div>
                      
                      {/* Secondary translation */}
                      <p className="text-xs text-amber-500/80 font-bold mb-1.5 font-display">
                        {lang === "ar" ? item.nameFr : item.nameAr}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-1">
                        {lang === "ar" ? item.descriptionAr : item.descriptionFr}
                      </p>
                    </div>
                  </div>

                  {/* Price Tag Details */}
                  <div className="flex sm:flex-col justify-between items-center sm:justify-center p-2.5 bg-slate-900/60 rounded-2xl border border-slate-800/50 sm:min-w-28 mt-2 sm:mt-0 gap-1.5">
                    <span className="text-xs text-slate-500 font-bold">{lang === "ar" ? "السعر" : "Tarif"}</span>
                    <span className="text-lg sm:text-xl font-bold text-amber-400 font-mono tracking-tight">{item.price}</span>
                  </div>

                </motion.div>
              ))}
          </div>

          {/* Delivery Note Action */}
          <div className="mt-16 text-center max-w-xl mx-auto bg-slate-950/40 p-6 rounded-3xl border border-slate-800/50">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
              <Bike className="w-6 h-6 text-red-500" />
              <span>{t.delSubtitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              {lang === "ar" ? "طلبك يوصلك دافئاً أينما كنت في المرسى والضواحي القريبة. بيتزا على الحطب ومشويات الأوبرا السريعة." : "Livraison rapide assurée sur La Marsa et banlieues proches pour toutes nos spécialités et pizzas."}
            </p>
            <button
              onClick={() => setDeliveryModalOpen(true)}
              className="bg-gradient-to-r from-red-600/90 to-amber-500/90 hover:from-red-600 hover:to-amber-500 text-white text-xs font-black px-4 py-2 rounded-full cursor-pointer shadow-lg active:scale-95 transition-all"
            >
              {lang === "ar" ? "تفاصيل التوصيل والطلب" : "Détails de Livraison"}
            </button>
          </div>

        </div>
      </section>

      {/* REVIEWS / TESTIMONIALS SECTION */}
      <section id="reviews" className="py-24 bg-slate-950 relative overflow-hidden">
        
        {/* Neon spotlights */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">💬 {lang === "ar" ? "شهادات نعتز بها" : "TEMOIGNAGES"} 💬</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white mb-4">{t.testHeader}</h2>
            <p className="text-sm sm:text-base text-slate-400">{t.testSub}</p>
          </div>

          {/* Testimonies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl flex flex-col justify-between hover:bg-slate-900 transition-all"
              >
                <div>
                  {/* Stars indicators */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    "{lang === "ar" ? test.commentAr : test.commentFr}"
                  </p>
                </div>

                {/* Sub info */}
                <div className="pt-6 border-t border-slate-950 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{test.name}</h4>
                    <p className="text-xs text-slate-500 font-semibold">
                      {lang === "ar" ? test.roleAr : test.roleFr}
                    </p>
                  </div>
                  <span className="text-slate-700 font-display text-4xl">”</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT & RESERVATION SECTION */}
      <section id="contact" className="py-24 bg-slate-900/20 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2">📞 {lang === "ar" ? "كن ضيفنا المميز" : "RESERVEZ EN DIRECT"} 📞</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white mb-4">{t.contactHeader}</h2>
            <p className="text-sm sm:text-base text-slate-400">{t.contactSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Quick Contacts cards (Left pane - 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Card 1: Sports booking */}
              <div className="bg-slate-900/60 border border-emerald-500/30 rounded-3xl p-6 shadow-lg shadow-emerald-950/10 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{t.callSports}</h3>
                    <p className="text-xs text-slate-400">{lang === "ar" ? "ملاعب كرة قدم خماسي وتنس أرضي" : "Mélange Foot & Tennis"}</p>
                  </div>
                </div>
                
                {/* Visual Direct Click button */}
                <a
                  href={`tel:${contactInfo.sportsPhone.replace(/\s+/g, "")}`}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-3 active:scale-98 transition-all shadow-md mt-6 text-sm"
                >
                  <Phone className="w-5 h-5 text-white animate-pulse" />
                  <div className="text-center flex flex-col">
                    <span className="text-xs font-normal opacity-90">{t.clickToCall}</span>
                    <span className="text-lg font-mono font-black">{contactInfo.sportsPhone}</span>
                  </div>
                </a>
              </div>

              {/* Card 2: Restaurant & Kids entertainer booking */}
              <div className="bg-slate-900/60 border border-amber-500/30 rounded-3xl p-6 shadow-lg shadow-amber-950/10 hover:border-amber-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-amber-600/20 text-amber-400 rounded-2xl border border-amber-500/30">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{t.callRestaurant}</h3>
                    <p className="text-xs text-slate-400">{lang === "ar" ? "حجز الطاولات، السهرات، وعطل نهاية الأسبوع" : "Resto, Live & Ateliers de magie"}</p>
                  </div>
                </div>

                {/* Visual Direct Click button */}
                <a
                  href={`tel:${contactInfo.restaurantPhone.replace(/\s+/g, "")}`}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-slate-950 font-extrabold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-3 active:scale-98 transition-all shadow-md mt-6 text-sm"
                >
                  <Phone className="w-5 h-5 text-slate-950 animate-pulse" />
                  <div className="text-center flex flex-col">
                    <span className="text-xs font-bold text-slate-900/80">{t.clickToCall}</span>
                    <span className="text-lg font-mono font-black">{contactInfo.restaurantPhone}</span>
                  </div>
                </a>
              </div>

              {/* Info Block (Working Hours & Address) */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-3xl p-6 text-sm flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{t.hoursTitle}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      {lang === "ar" ? contactInfo.workingHoursAr : contactInfo.workingHoursFr}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{t.addressTitle}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {lang === "ar" ? contactInfo.addressAr : contactInfo.addressFr}
                    </p>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-4 border-t border-slate-900 flex justify-center items-center gap-4">
                  <span className="text-slate-500 text-xs font-bold">{lang === "ar" ? "تابعنا على:" : "Suivez-nous :"}</span>
                  <a
                    href={contactInfo.socials.facebook}
                    className="p-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 rounded-full transition-colors active:scale-90"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook link"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socials.instagram}
                    className="p-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 rounded-full transition-colors active:scale-90"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram link"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Interactive Booking engine Form (Right pane - 7 Cols) */}
            <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 p-6 sm:p-10 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                
                {!bookingSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleBookingSubmit}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">{t.formTitle}</h3>
                    
                    {/* Booking Category selector */}
                    <div>
                      <label className="text-xs sm:text-sm text-slate-300 font-bold block mb-2">{t.formType}</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setBookingType("restaurant")}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-extrabold text-right flex items-center justify-between transition-all ${
                            bookingType === "restaurant"
                              ? "bg-amber-500/10 border-amber-500 text-amber-400 shadow-md"
                              : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700/60"
                          }`}
                        >
                          <span>{t.formTypeRest}</span>
                          <UtensilsCrossed className="w-4 h-4 shrink-0" />
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setBookingType("football")}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-extrabold text-right flex items-center justify-between transition-all ${
                            bookingType === "football"
                              ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-md"
                              : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700/60"
                          }`}
                        >
                          <span>{t.formTypeFoot}</span>
                          <Trophy className="w-4 h-4 shrink-0 animate-pulse" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setBookingType("tennis")}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-extrabold text-right flex items-center justify-between transition-all ${
                            bookingType === "tennis"
                              ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-md"
                              : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700/60"
                          }`}
                        >
                          <span>{t.formTypeTennis}</span>
                          <Trophy className="w-4 h-4 shrink-0" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setBookingType("kids")}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-extrabold text-right flex items-center justify-between transition-all ${
                            bookingType === "kids"
                              ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-md"
                              : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700/60"
                          }`}
                        >
                          <span>{t.formTypeKids}</span>
                          <Sparkles className="w-4 h-4 shrink-0" />
                        </button>
                      </div>
                    </div>

                    {/* Guest name */}
                    <div>
                      <label className="text-xs sm:text-sm text-slate-300 font-bold block mb-2">{t.formName} *</label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder={lang === "ar" ? "مثال: يوسف الرحالي" : "Ex: Youssef Rahali"}
                        className="w-full bg-slate-950/85 border border-slate-800/80 p-3.5 rounded-2xl block text-slate-100 placeholder-slate-600 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    {/* Numeric inputs flex */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div>
                        <label className="text-xs sm:text-sm text-slate-300 font-bold block mb-2">{t.formPhone} *</label>
                        <input
                          type="tel"
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
                          placeholder="99-123-456"
                          className="w-full bg-slate-950/85 border border-slate-800/80 p-3.5 rounded-2xl block text-slate-100 placeholder-slate-600 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors font-mono"
                        />
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="text-xs sm:text-sm text-slate-300 font-bold block mb-2">{t.formGuests}</label>
                        <select
                          value={bookingGuests}
                          onChange={(e) => setBookingGuests(e.target.value)}
                          className="w-full bg-slate-950/85 border border-slate-800/80 p-3.5 rounded-2xl block text-white text-sm focus:border-amber-500 focus:outline-none transition-colors"
                        >
                          <option value="1">1 {lang === "ar" ? "شخص" : "Personne"}</option>
                          <option value="2">2 {lang === "ar" ? "شخصان" : "Personnes"}</option>
                          <option value="4">4 {lang === "ar" ? "أشخاص عائلية" : "Personnes"}</option>
                          <option value="6">6 {lang === "ar" ? "أشخاص" : "Personnes"}</option>
                          <option value="10">10+ {lang === "ar" ? "مجموعة / بطولة" : "Groupe"}</option>
                        </select>
                      </div>
                    </div>

                    {/* Date Details & Time Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Date */}
                      <div>
                        <label className="text-xs sm:text-sm text-slate-300 font-bold block mb-2">{t.formDate} *</label>
                        <input
                          type="date"
                          required
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-slate-950/85 border border-slate-800/80 p-3.5 rounded-2xl block text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors font-mono"
                        />
                      </div>

                      {/* Time */}
                      <div>
                        <label className="text-xs sm:text-sm text-slate-300 font-bold block mb-2">{t.formTime} *</label>
                        <input
                          type="time"
                          required
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full bg-slate-950/85 border border-slate-800/80 p-3.5 rounded-2xl block text-white text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors font-mono"
                        />
                      </div>
                    </div>

                    {/* Special requests comments */}
                    <div>
                      <label className="text-xs sm:text-sm text-slate-300 font-bold block mb-2">{t.formNotes}</label>
                      <textarea
                        rows={3}
                        value={bookingNotes}
                        onChange={(e) => setBookingNotes(e.target.value)}
                        placeholder={lang === "ar" ? "اكتب تفضيلاتك الإضافية..." : "Notez vos souhaits particuliers ici..."}
                        className="w-full bg-slate-950/85 border border-slate-800/80 p-3.5 rounded-2xl block text-white placeholder-slate-600 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-extrabold text-base py-4 rounded-2xl flex items-center justify-center gap-3 active:scale-98 transition-all shadow-lg shadow-rose-950/30 cursor-pointer"
                    >
                      <span>{t.formSubmit}</span>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </button>
                  </motion.form>
                ) : (
                  
                  // BOOKING SUCCESS TICKET CONFIRMATION
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-6"
                  >
                    {/* Circle Success animated */}
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/40">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white text-center mb-2">{t.formSuccessTitle}</h3>
                    <p className="text-sm text-slate-300 text-center mb-8 max-w-sm leading-relaxed">{t.formSuccessSub}</p>

                    {/* PHYSICAL RESERVATION TICKET */}
                    <div className="w-full max-w-sm bg-slate-950 border border-slate-800 p-6 rounded-3xl relative overflow-hidden shadow-2xl">
                      {/* Ticket side notches */}
                      <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 transform -translate-y-1/2" />
                      <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 transform -translate-y-1/2" />

                      {/* Header L'opera */}
                      <div className="text-center pb-4 border-b border-dashed border-slate-800">
                        <span className="font-display font-bold text-xl text-amber-400 tracking-wider">PARC L'OPERA</span>
                        <p className="text-slate-500 text-[10px] mt-0.5">{lang === "ar" ? "مجمع الرفاهية العائلية" : "Complexe de Loisirs"}</p>
                      </div>

                      {/* Ticket grid info */}
                      <div className="grid grid-cols-2 gap-4 py-5 text-xs">
                        <div>
                          <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "صاحب الحجز" : "Nom"}</span>
                          <span className="font-bold text-white text-sm block truncate">{bookingName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "رقم الهاتف" : "Téléphone"}</span>
                          <span className="font-bold text-white font-mono text-sm block">{bookingPhone}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "التاريخ واليوم" : "Date"}</span>
                          <span className="font-bold text-white font-mono text-sm block">{bookingDate}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "الوقت والموعد" : "Heure"}</span>
                          <span className="font-bold text-white font-mono text-sm block">{bookingTime}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "الحضور" : "Personnes"}</span>
                          <span className="font-bold text-white text-sm block">{bookingGuests}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "طبيعة الحجز" : "Type"}</span>
                          <span className="font-medium text-amber-400 text-xs block px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 max-w-fit mt-0.5">
                            {bookingType === "restaurant" ? t.formTypeRest : bookingType === "football" ? t.formTypeFoot : bookingType === "tennis" ? t.formTypeTennis : t.formTypeKids}
                          </span>
                        </div>
                      </div>

                      {/* Status and Ticket Code */}
                      <div className="pt-4 border-t border-dashed border-slate-800 text-center">
                        <span className="text-slate-500 text-2xs uppercase block mb-1">{t.ticketId}</span>
                        <span className="font-mono font-black text-xl text-white tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-lg block max-w-fit mx-auto mb-4 scale-103 shadow-inner">
                          {bookingId}
                        </span>
                        
                        {/* Decorative simulated Barcode */}
                        <div className="h-10 flex gap-0.5 items-center justify-center opacity-70 mb-2">
                          {[...Array(28)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-white h-full"
                              style={{ width: i % 3 === 0 ? "4px" : i % 5 === 0 ? "1px" : "2px" }}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 block">STATUS: AUTOMATED CONFIRMED SUCCESS</span>
                      </div>
                    </div>

                    {/* Alert info */}
                    <div className="flex gap-2 items-start mt-6 bg-slate-900/40 p-4 rounded-2xl max-w-sm border border-slate-800/80 text-xs">
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-slate-400 leading-normal">{t.ticketAlert}</p>
                    </div>

                    {/* Return switch */}
                    <button
                      onClick={resetBookingForm}
                      className="mt-6 border border-slate-800 hover:border-slate-700 bg-slate-950 font-semibold px-5 py-2.5 rounded-xl cursor-pointer text-xs text-slate-400 hover:text-white transition-all shadow-md active:scale-95"
                    >
                      {t.ticketNew}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Logo / Brand slogan column (Spread in 2 col widths) */}
            <div className="md:col-span-2">
              <span className="text-2xl font-bold font-display tracking-tight bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 bg-clip-text text-transparent block mb-4">
                {t.brand} 🎵⚽
              </span>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md pr-1">
                {t.footerText}
              </p>
              
              {/* Working indicators footer */}
              <div className="mt-6 flex items-center gap-2.5 text-xs text-amber-400/90 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>{lang === "ar" ? "مفتوح الآن لاستقبالكم" : "Actuellement ouvert"}</span>
              </div>
            </div>

            {/* Links columns */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider">{lang === "ar" ? "روابط سريعة" : "Navigation"}</h4>
              <ul className="flex flex-col gap-2.5">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-slate-400 hover:text-amber-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contacts column list */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider">{lang === "ar" ? "أرقام الاستعلام والحجز" : "Réservations rapides"}</h4>
              <div className="flex flex-col gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "الملاعب الرياضية :" : "Courts et Sports :"}</span>
                  <a href={`tel:${contactInfo.sportsPhone.replace(/\s+/g, "")}`} className="font-bold font-mono text-slate-300 hover:text-amber-400 text-sm">
                    {contactInfo.sportsPhone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">{lang === "ar" ? "المطعم والأطفال :" : "Restaurant & Kids :"}</span>
                  <a href={`tel:${contactInfo.restaurantPhone.replace(/\s+/g, "")}`} className="font-bold font-mono text-slate-300 hover:text-amber-400 text-sm">
                    {contactInfo.restaurantPhone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright Bottom Bar Divider */}
          <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <span>{t.footerRights}</span>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-slate-400 transition-colors">{lang === "ar" ? "العودة للأعلى" : "Haut de page"}</a>
            </div>
          </div>

        </div>
      </footer>

      {/* DELIVERY MODAL ("جيبلي معاك") */}
      <AnimatePresence>
        {deliveryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeliveryModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl z-10"
            >
              {/* Close btn */}
              <button
                onClick={() => setDeliveryModalOpen(false)}
                className="absolute top-4 right-4 bg-slate-950/60 text-slate-400 hover:text-white p-2 border border-slate-800 rounded-xl transition-all"
                aria-label="Close delivery details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center mt-3">
                {/* Visual fast delivery icons */}
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-500 flex items-center justify-center mb-4 border border-red-500/30">
                  <Bike className="w-7 h-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{t.deliveryTitle}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{t.deliveryBody}</p>

                {/* Delivery details listing */}
                <div className="w-full bg-slate-950 border border-slate-850 p-4 rounded-2xl text-xs flex flex-col gap-3 text-right mb-6">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">{lang === "ar" ? "مناطق التغطية والوصول" : "Zones de couverture"}</span>
                    <span className="font-bold text-white">{lang === "ar" ? "المرسى وقمرت وسيدي بوسعيد وكل الضواحي القريبة" : "La Marsa, Gammarth, Sidi Bou Said"}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-900">
                    <span className="text-slate-500">{lang === "ar" ? "رسوم التوصيل" : "Tarifs livraison"}</span>
                    <span className="font-extrabold text-emerald-400">{lang === "ar" ? "مجاني للطلبات فوق الـ 50 د.ت" : "Gratuit dès 50 DT"}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-900">
                    <span className="text-slate-500">{lang === "ar" ? "سرعة التوصيل المتوقعة" : "Délai moyen estimé"}</span>
                    <span className="font-bold text-amber-400">{lang === "ar" ? "30 - 45 دقيقة فقط!" : "30 à 45 min max"}</span>
                  </div>
                </div>

                {/* Call-to-Order button direct */}
                <a
                  href={`tel:${contactInfo.restaurantPhone.replace(/\s+/g, "")}`}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-2xl text-center shadow-lg hover:shadow-red-950/30 transition-transform active:scale-98 flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4 text-white animate-pulse" />
                  <span>{t.deliveryBtn} ({contactInfo.restaurantPhone})</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
