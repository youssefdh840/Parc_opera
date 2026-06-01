export interface ServiceItem {
  id: string;
  titleAr: string;
  titleFr: string;
  descriptionAr: string;
  descriptionFr: string;
  icon: string;
  colorClass: string;
  badgeAr: string;
  badgeFr: string;
}

export interface MenuItem {
  id: string;
  nameAr: string;
  nameFr: string;
  descriptionAr: string;
  descriptionFr: string;
  price: string;
  image: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  titleAr: string;
  titleFr: string;
  items: MenuItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  roleAr: string;
  roleFr: string;
  commentAr: string;
  commentFr: string;
  stars: number;
}

export const servicesData: ServiceItem[] = [
  {
    id: "restaurant",
    titleAr: "المطعم والمقهى",
    titleFr: "Restaurant & Café",
    descriptionAr: "تجربة طهي استثنائية تجمع بين مأكولات البحر الأبيض المتوسط والأطباق العالمية الفاخرة، بالإضافة إلى تشكيلة واسعة من البيتزا الإيطالية المطهوة على الحطب والقهوة المختصة والمشروبات المنعشة.",
    descriptionFr: "Une expérience culinaire d'exception mêlant gastronomie méditerranéenne et internationale, pizzas au feu de bois, cafés de spécialité et boissons fraîches.",
    icon: "UtensilsCrossed",
    colorClass: "bg-amber-600/30 text-amber-400 border-amber-500/50",
    badgeAr: "مطبخ راقٍ",
    badgeFr: "Cuisine Fine"
  },
  {
    id: "lounge",
    titleAr: "السهرات الفنية واللاونج",
    titleFr: "Soirées Live & Lounge",
    descriptionAr: "سهرات طربية وموسيقية حية لا تُنسى بمشاركة فنانين مميزين وعزف ساحر على آلتي العود والكمان، في جو عائلي دافئ يمنحكم أوقاتاً ممتعة وراحة تامة.",
    descriptionFr: "Des soirées musicales live inoubliables avec d'incroyables artistes, au son de l'Oud et du Violon, dans une ambiance chaleureuse et familiale.",
    icon: "Music",
    colorClass: "bg-purple-600/30 text-purple-400 border-purple-500/50",
    badgeAr: "ترفيه طربي حَيّ",
    badgeFr: "Live & Acoustic"
  },
  {
    id: "sports",
    titleAr: "الأنشطة الرياضية والملاعب",
    titleFr: "Complexes Sportifs",
    descriptionAr: "ملاعب كرة قدم خماسية مجهزة بعشب اصطناعي من الجيل الجديد وملاعب تنس أرضي ممتازة مع إضاءة ليلية كاشفة متكاملة وغرف تبديل ملابس مريحة، متاحة للحجز اليومي والبطولات.",
    descriptionFr: "Terrains de football à 5 en pelouse synthétique de dernière génération et courts de tennis de premier choix avec éclairage Led nocturne et vestiaires équipés.",
    icon: "Trophy",
    colorClass: "bg-emerald-600/30 text-emerald-400 border-emerald-500/50",
    badgeAr: "نشاط وطاقة",
    badgeFr: "Sports & Fun"
  },
  {
    id: "kids",
    titleAr: "ألعاب وعروض الأطفال",
    titleFr: "Espace Enfants",
    descriptionAr: "ترفيه متكامل لفلذات أكبادكم خلال عطلة نهاية الأسبوع: عروض سحرية شيقة، مهرجون، مسابقات، تلوين على الوجوه، وركن ألعاب خارجي آمن بالكامل تحت إشراف مختصين.",
    descriptionFr: "Animations complètes pour vos enfants le week-end : spectacles de magie, mascottes, jeux gonflables, maquillage et aire de jeux sécurisée sous surveillance.",
    icon: "Sparkles",
    colorClass: "bg-cyan-600/30 text-cyan-400 border-cyan-500/50",
    badgeAr: "عائلي وآمن",
    badgeFr: "Family Friendly"
  }
];

export const menuCategories: MenuCategory[] = [
  {
    id: "gourmet",
    titleAr: "أطباق فاخرة وشوايات",
    titleFr: "Plats Gastronomiques",
    items: [
      {
        id: "plat-1",
        nameAr: "فيليه لحم مشوي بصلصة الفطر",
        nameFr: "Filet de Boeuf Suprême",
        descriptionAr: "قطعة لحم بقري ممتازة مطهوة حسب رغبتكم، تقدم مع أصابع البطاطس المتبلة والخضار السوتيه وصلصة المشروم البري الغنية.",
        descriptionFr: "Tendre filet de bœuf grillé, pommes de terre rôties aux herbes, légumes sautés et sa sauce onctueuse aux cèpes.",
        price: "42 DT",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
        popular: true
      },
      {
        id: "plat-2",
        nameAr: "ميكس غريل الأوبرا المميز",
        nameFr: "Mixed-Grill L'opera",
        descriptionAr: "تشكيلة غنية من المشويات الشرقية اللذيذة: كباب، شقف لحم خروف، وشيش طاووق متبل ببهاراتنا الخاصة، يقدم مع خبز التنور الساخن والحمص والصلصة الحارة.",
        descriptionFr: "Brochettes de porc ou d'agneau grillées, kefta épicée, shish taouk, accompagnés de pain grillé traditionnel, houmous et harissa faite maison.",
        price: "36 DT",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "plat-3",
        nameAr: "قريدس جامبو مشوي على الفحم",
        nameFr: "Crevettes Royales Rôties",
        descriptionAr: "جمبري ملكي كبير متبل بالثوم، الليمون الشامي، وزيت الزيتون البكر، مشوي بإتقان ويقدم مع أرز بسمتي بالزعفران وصلصة الزبدة والليمون.",
        descriptionFr: "Crevettes géantes parfumées à l'ail, citron vert et huile d'olive de Tunisie, grillées sur braise avec riz safrané.",
        price: "48 DT",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "plat-4",
        nameAr: "قرص الدجاج الملكي المحشو",
        nameFr: "Suprême de Volaille Farci",
        descriptionAr: "صدر دجاج رقيق محشو بالموزاريلا، السبانخ الطازجة والطماطم المجففة، مغطى بصلصة الكريمة الذهبية اللذيذة.",
        descriptionFr: "Suprême de poulet garni de mozzarella fondante, épinards frais et tomates séchées, nappe de crème veloutée.",
        price: "29 DT",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "pizzas",
    titleAr: "البيتزا الإيطالية على الفحم",
    titleFr: "Nos Pizzas au Feu de Bois",
    items: [
      {
        id: "pizza-1",
        nameAr: "بيتزا بارك الأوبرا الخاصة",
        nameFr: "La Spéciale L'opéra",
        descriptionAr: "عجينة نابوليتانية أصيلة مخمرة ببطء، صلصة طماطم سان مارزانو، موزاريلا دي بوفالا، شرائح بريزاولا المجففة، جرجير طازج، ورذاذ زيت الكمأ الفاخر والمكسرات.",
        descriptionFr: "Sauce tomate San Marzano, mozzarella di bufala, fines tranches de bresaola, roquette sauvage, copeaux de parmesan et huile de truffe blanche.",
        price: "24 DT",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
        popular: true
      },
      {
        id: "pizza-2",
        nameAr: "بيتزا ثمار البحر المتوسطية",
        nameFr: "Pizza Fruits de Mer",
        descriptionAr: "عجينة هشة تعلوها ثمار البحر الطازجة: قريدس، كلماري، محار متبل بالثوم والبقدونس مع جبن الموزاريلا الغني والصلصة الحمراء الممتازة.",
        descriptionFr: "Garnie de calamars tendres, crevettes décortiquées, moules parfumées à l'ail, persil frais et généreuse couche de mozzarella filante.",
        price: "26 DT",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "pizza-3",
        nameAr: "بيتزا الأجبان الأربعة العميقة",
        nameFr: "Quatre Fromages d'Italie",
        descriptionAr: "مزيج فاخر من جبن الموزاريلا، الجورجونزولا الإيطالية، الريكوتا الطازجة ورقائق البارميزان المعتق مع الزعتر البري وزيت الزيتون.",
        descriptionFr: "Alliances fondantes de Gorgonzola, Mozzarella crémeuse, Ricotta fraîche et Parmesan affiné avec origan sauvage.",
        price: "21 DT",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "desserts",
    titleAr: "الحلويات الشرقية والغربية والمشروبات",
    titleFr: "Desserts & Boissons Signature",
    items: [
      {
        id: "des-1",
        nameAr: "كيك الأوبرا الفرنسي الأصيل",
        nameFr: "Le Classique Gâteau Opéra",
        descriptionAr: "حلوى فرنسية فاخرة مصنوعة من طبقات هشة من بسكويت اللوز المشرب بالقهوة، كريمة الزبدة بالقهوة، وجناش الشوكولاتة الداكنة الناعمة.",
        descriptionFr: "L'authentique entremets parisien : couches de biscuit Joconde au café, ganache chocolat noir intense et crème au beurre café.",
        price: "15 DT",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80",
        popular: true
      },
      {
        id: "des-2",
        nameAr: "بركان الشوكولاتة الساخن (لافا)",
        nameFr: "Fondant au Chocolat Coulant",
        descriptionAr: "كعكة شوكولاتة دافئة بقلب ذائب غني بالشوكولاتة البلجيكية الفاخرة، تقدم مع كرة من مثلجات الفانيليا الطبيعية.",
        descriptionFr: "Gâteau tiède au cœur coulant de chocolat noir de haute qualité, accompagné d'une boule de glace vanille bourbon de Madagascar.",
        price: "13 DT",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "des-3",
        nameAr: "موهيتو الأوبرا المنعش",
        nameFr: "L'opera Mojito Signatures",
        descriptionAr: "عصير الليمون الطازج وأوراق النعناع المهروسة مع نكهات التوت الأحمر البري، والثلج المجروش لمذاق استوائي بارد لا يضاهى.",
        descriptionFr: "Menthe fraîche écrasée, citrons verts juteux, coulis de fruits rouges et glace pilée pour une fraîcheur inégalée.",
        price: "11 DT",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "des-4",
        nameAr: "مشروب كوكتيل الفواكه الاستوائية",
        nameFr: "Cocktail Bien-être Exotique",
        descriptionAr: "مزيج طبيعي معصور على البارد من فاكهة العاطفة (Passion Fruit) الكيوي، المانجو، والبرتقال الطازج بدون سكريات مضافة.",
        descriptionFr: "Mélange tonique pressé à froid de fruit de la passion, mangues, kiwis frais et oranges bio sans sucre ajouté.",
        price: "12 DT",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&auto=format&fit=crop&q=80"
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "ياسين النفطي",
    roleAr: "أب لثلاثة أطفال - عميل دائم",
    roleFr: "Père de famille - Client Fidèle",
    commentAr: "المكان الأفضل بلا منازع لقضاء عطلة نهاية الأسبوع مع العائلة. يستمتع الأطفال باللعب وأكل البيتزا الشهية، بينما نقوم أنا وزوجتي باحتساء القهوة والاستماع للموسيقى الطربية الراقية هادئة البال.",
    commentFr: "Le meilleur endroit pour passer le week-end en famille. Les enfants s'amusent avec les spectacles de magie, pendant que nous profitons de la musique et d'un excellent dîner.",
    stars: 5
  },
  {
    id: "test-2",
    name: "سارة الماجري",
    roleAr: "لاعبة تنس هاوية",
    roleFr: "Joueuse de Tennis Amateur",
    commentAr: "ألاعب صديقاتي في ملعب التنس هنا مرتين أسبوعياً. الملاعب ممتازة ونظيفة جداً والإضاءة الليلية ممتازة، ومطعم المجمع يقدم عصائر غنية ومنعشة تناسب الرياضيين وصحية.",
    commentFr: "Je joue au tennis ici chaque semaine. Les courts sont parfaits, propres et bien éclairés de nuit. Le restaurant sert d'excellents jus de fruits frais et sains.",
    stars: 5
  },
  {
    id: "test-3",
    name: "أنيس بالرحومة",
    roleAr: "عاشق للأجواء الطربية والموسيقى",
    roleFr: "Amateur d'Art & Musique",
    commentAr: "سهرات نهاية الأسبوع هنا ساحرة بكل المقاييس. عزف العود في غاية الرقي والأجواء محترمة ومناسبة للعائلات. المشويات شهية ولذيذة جداً والخدمة في غاية السرعة والأدب.",
    commentFr: "Des soirées de week-end tout simplement magiques. Le joueur de luth est très raffiné, et l'ambiance est parfaite. Les grillades sont à tomber par terre et le service est impeccable.",
    stars: 5
  }
];

export const contactInfo = {
  addressAr: "قصور الساف، طريق سلقطة",
  addressFr: "Ksour Essef, Route de Salakta",
  sportsPhone: "23 717 197",
  restaurantPhone: "99 016 217",
  workingHoursAr: "يومياً من الساعة 08:00 صباحاً حتى 01:00 بعد منتصف الليل",
  workingHoursFr: "7j/7 de 08:00 à 01:00 du matin",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};
