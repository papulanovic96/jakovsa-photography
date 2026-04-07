export const PORTFOLIO = [
  { id: 1, src: "/photos/wedding-bw-embrace.png", cat: "vencanja", alt: "Crno-beli zagrljaj mladenaca" },
  { id: 2, src: "/photos/wedding-bw-dip.png", cat: "vencanja", alt: "Mladenci u zagrljaju na livadi" },
  { id: 3, src: "/photos/wedding-stairs.png", cat: "vencanja", alt: "Mladenci silaze niz kamene stepenice" },
  { id: 4, src: "/photos/wedding-portrait-smile.png", cat: "vencanja", alt: "Portret mladenaca sa osmehom" },
  { id: 5, src: "/photos/wedding-farm.png", cat: "vencanja", alt: "Venčanje na seoskom imanju sa konjima" },
  { id: 6, src: "/photos/wedding-walk.png", cat: "vencanja", alt: "Mladenci šetaju kaldrmom" },
  { id: 7, src: "/photos/family-baby.png", cat: "porodica", alt: "Porodična fotografija sa bebom" },
  { id: 8, src: "/photos/baptism-church.png", cat: "krstenja", alt: "Krštenje u crkvi", pos: "top" },
  { id: 9, src: "/photos/portrait-redhead.png", cat: "izlozbe", alt: "Portret žene sa crvenom kosom" },
  { id: 10, src: "/photos/prints-christmas.png", cat: "izlozbe", alt: "Štampane fotografije — božićna kolekcija" },
  { id: 11, src: "/photos/photobook-christmas.png", cat: "izlozbe", alt: "Foto album — božićno izdanje" },
];

export const CATEGORIES = [
  { key: "sve", label: "Sve" },
  { key: "vencanja", label: "Venčanja" },
  { key: "krstenja", label: "Krštenja" },
  { key: "porodica", label: "Porodica" },
  { key: "punoletstva", label: "Punoletstva" },
  { key: "izlozbe", label: "Moje izložbe" },
];

export const SERVICES = [
  {
    key: "vencanja",
    icon: "Heart",
    title: "Venčanja",
    desc: "Celodnevno praćenje vašeg venčanja — od pripreme do poslednjeg plesa.",
    packages: [
      {
        name: "Uspomena",
        tag: null,
        price: "Po dogovoru",
        desc: "Za intimna venčanja i parove koji žele kvalitetne fotografije bez komplikacija.",
        features: [
          "Do 4 sata fotografisanja",
          "150+ obrađenih fotografija",
          "Online galerija za preuzimanje",
          "Isporuka za 15 dana",
        ],
      },
      {
        name: "Elegancija",
        tag: "Najpopularniji",
        price: "Po dogovoru",
        desc: "Kompletno praćenje vašeg dana — od pripreme do prvog plesa.",
        features: [
          "Celodnevno fotografisanje (8h)",
          "300+ obrađenih fotografija",
          "Online galerija + USB",
          "Štampani foto album (30 strana)",
          "Isporuka za 10 dana",
        ],
      },
      {
        name: "Bezvremenski",
        tag: "Premium",
        price: "Po dogovoru",
        desc: "Luksuzno iskustvo za parove koji žele da svaki trenutak bude savršeno ovековečen.",
        features: [
          "Celodnevno fotografisanje (12h+)",
          "500+ obrađenih fotografija",
          "Engagement foto sesija uključena",
          "Premium foto album (50 strana)",
          "Uramljene štampane fotografije",
          "Prioritetna isporuka za 7 dana",
        ],
      },
    ],
  },
  {
    key: "krstenja",
    icon: "Sparkles",
    title: "Krštenja",
    desc: "Svečani trenuci u crkvi i intimne porodične fotografije za generacije.",
    packages: [
      {
        name: "Blagoslov",
        tag: null,
        price: "Po dogovoru",
        desc: "Fotografisanje ceremonije krštenja u crkvi.",
        features: [
          "Do 2 sata fotografisanja",
          "80+ obrađenih fotografija",
          "Online galerija",
          "Isporuka za 10 dana",
        ],
      },
      {
        name: "Porodica",
        tag: "Najpopularniji",
        price: "Po dogovoru",
        desc: "Ceremonija plus porodične fotografije posle crkve.",
        features: [
          "Do 4 sata fotografisanja",
          "150+ obrađenih fotografija",
          "Grupne i porodične fotografije",
          "Online galerija + USB",
          "10 štampanih fotografija",
        ],
      },
      {
        name: "Kompletno",
        tag: "Premium",
        price: "Po dogovoru",
        desc: "Celodnevno praćenje — od pripreme do slavlja.",
        features: [
          "Celodnevno fotografisanje",
          "250+ obrađenih fotografija",
          "Foto album (20 strana)",
          "Porodične i grupne fotografije",
          "Dekoracija i detalji",
          "Prioritetna isporuka",
        ],
      },
    ],
  },
  {
    key: "porodica",
    icon: "Users",
    title: "Porodica",
    desc: "Spontane, tople fotografije koje čuvaju porodične uspomene.",
    packages: [
      {
        name: "Mini sesija",
        tag: null,
        price: "Po dogovoru",
        desc: "Kratka sesija idealna za ažuriranje porodičnih fotografija.",
        features: [
          "30 minuta fotografisanja",
          "1 lokacija",
          "30+ obrađenih fotografija",
          "Online galerija",
        ],
      },
      {
        name: "Klasična sesija",
        tag: "Najpopularniji",
        price: "Po dogovoru",
        desc: "Opuštena sesija sa dovoljno vremena za spontane trenutke.",
        features: [
          "1 sat fotografisanja",
          "Do 2 lokacije",
          "60+ obrađenih fotografija",
          "Online galerija + USB",
          "5 štampanih fotografija",
        ],
      },
      {
        name: "Premium sesija",
        tag: "Premium",
        price: "Po dogovoru",
        desc: "Produžena sesija za veće porodice ili posebne prilike.",
        features: [
          "2 sata fotografisanja",
          "Neograničen broj lokacija",
          "100+ obrađenih fotografija",
          "Mini foto album (15 strana)",
          "10 štampanih fotografija",
          "Prioritetna isporuka",
        ],
      },
    ],
  },
  {
    key: "punoletstva",
    icon: "PartyPopper",
    title: "Punoletstva",
    desc: "Obeležite 18. rođendan fotografijama koje će trajati zauvek.",
    packages: [
      {
        name: "Paket 18",
        tag: null,
        price: "Po dogovoru",
        desc: "Fotografisanje proslave punoletstva.",
        features: [
          "Do 3 sata fotografisanja",
          "100+ obrađenih fotografija",
          "Online galerija",
          "Isporuka za 10 dana",
        ],
      },
      {
        name: "Glamur",
        tag: "Najpopularniji",
        price: "Po dogovoru",
        desc: "Proslava plus portret sesija za slavljenicu/slavljenika.",
        features: [
          "Do 5 sati fotografisanja",
          "200+ obrađenih fotografija",
          "Portret sesija pre ili posle proslave",
          "Online galerija + USB",
          "10 štampanih fotografija",
        ],
      },
      {
        name: "Spektakl",
        tag: "Premium",
        price: "Po dogovoru",
        desc: "Kompletno praćenje — priprema, proslava, after party.",
        features: [
          "Celodnevno fotografisanje",
          "300+ obrađenih fotografija",
          "Portret sesija uključena",
          "Foto album (20 strana)",
          "Dekoracija i detalji",
          "Prioritetna isporuka",
        ],
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Milica & Nikola",
    event: "Venčanje, jun 2025",
    text: "Sandra je uhvatila svaki detalj našeg venčanja — od suza radosnica do ludih plesova. Fotografije su toliko autentične da ponovo proživljavamo taj dan svaki put kad ih pogledamo.",
    rating: 5,
  },
  {
    name: "Ana & Marko",
    event: "Venčanje, septembar 2024",
    text: "Profesionalnost, kreativnost i topao pristup — Sandra je sve to u jednom. Naše fotografije su pravo umetničko delo. Ne mogu dovoljno da je preporučim!",
    rating: 5,
  },
  {
    name: "Jelena Petrović",
    event: "Porodično fotografisanje",
    text: "Želeli smo opuštene, spontane fotografije sa decom i Sandra je to izvela savršeno. Deca su je obožavala, a mi smo dobili najlepše porodične slike koje imamo.",
    rating: 5,
  },
];

export const BLOG_POSTS = [
  {
    title: "Kako odabrati savršenu lokaciju za venčanje",
    excerpt: "Vodič kroz najlepše lokacije za fotografisanje u Srbiji — od vojvođanskih salaša do beogradskih skrivenih kutaka.",
    date: "15. mart 2026.",
    tag: "Saveti",
    img: "/photos/wedding-stairs.png",
  },
  {
    title: "Šta obući za foto sesiju: kompletni vodič",
    excerpt: "Praktični saveti za odabir odeće koja izgleda sjajno na fotografijama, bez obzira na godišnje doba.",
    date: "2. februar 2026.",
    tag: "Inspiracija",
    img: "/photos/portrait-redhead.png",
  },
  {
    title: "Zlatni sat: zašto je svetlost sve",
    excerpt: "Otkrijte zašto profesionalni fotografi obožavaju 'zlatni sat' i kako on može transformisati vaše slike.",
    date: "18. januar 2026.",
    tag: "Fotografija",
    img: "/photos/wedding-walk.png",
  },
];

export const NAV_LINKS = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-meni", label: "O meni" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#usluge", label: "Usluge" },
  { href: "#utisci", label: "Utisci" },
  { href: "#blog", label: "Blog" },
  { href: "#kontakt", label: "Kontakt" },
];
