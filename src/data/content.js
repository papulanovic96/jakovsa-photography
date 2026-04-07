export const PORTFOLIO = [
  { id: 1, src: "/photos/wedding-bw-embrace.png", cat: "vencanja", alt: "Crno-beli zagrljaj mladenaca" },
  { id: 2, src: "/photos/wedding-bw-dip.png", cat: "vencanja", alt: "Mladenci u zagrljaju na livadi" },
  { id: 3, src: "/photos/wedding-stairs.png", cat: "vencanja", alt: "Mladenci silaze niz kamene stepenice" },
  { id: 4, src: "/photos/wedding-portrait-smile.png", cat: "vencanja", alt: "Portret mladenaca sa osmehom" },
  { id: 5, src: "/photos/wedding-farm.png", cat: "vencanja", alt: "Venčanje na seoskom imanju sa konjima" },
  { id: 6, src: "/photos/wedding-walk.png", cat: "vencanja", alt: "Mladenci šetaju kaldrmom" },
  { id: 7, src: "/photos/family-baby.png", cat: "porodica", alt: "Porodična fotografija sa bebom" },
  { id: 8, src: "/photos/baptism-church.png", cat: "krstenja", alt: "Krštenje u crkvi", pos: "top" },
  { id: 9, src: "/photos/portrait-redhead.png", cat: "portreti", alt: "Portret žene sa crvenom kosom" },
  { id: 10, src: "/photos/prints-christmas.png", cat: "posebne", alt: "Štampane fotografije na božićnom poklonu" },
  { id: 11, src: "/photos/photobook-christmas.png", cat: "posebne", alt: "Foto album — božićno izdanje" },
];

export const CATEGORIES = [
  { key: "sve", label: "Sve" },
  { key: "vencanja", label: "Venčanja" },
  { key: "krstenja", label: "Krštenja" },
  { key: "portreti", label: "Portreti" },
  { key: "porodica", label: "Porodica" },
  { key: "posebne", label: "Posebne prilike" },
];

export const SERVICES = [
  {
    icon: "Heart",
    title: "Venčanja",
    desc: "Celodnevno praćenje vašeg venčanja — od pripreme do poslednjeg plesa. Autentični trenuci, iskrene emocije.",
    features: ["Priprema mladenaca", "Ceremonija i prijem", "200–400+ fotografija", "Online galerija"],
  },
  {
    icon: "Sparkles",
    title: "Krštenja",
    desc: "Svečani trenuci u crkvi i intimne porodične fotografije koje čuvaju uspomene za generacije.",
    features: ["Fotografisanje u crkvi", "Porodične fotografije", "100–200 fotografija", "Štampane slike"],
  },
  {
    icon: "Camera",
    title: "Portreti",
    desc: "Individualne ili parne foto sesije na lokaciji po vašem izboru. Kreirajte portfolio koji govori vašu priču.",
    features: ["Lokacija po izboru", "1–2h fotografisanja", "50–80 fotografija", "Profesionalna obrada"],
  },
  {
    icon: "Star",
    title: "Posebne prilike",
    desc: "Rođendani, devojačke večeri, godišnjice i svaki poseban trenutak koji zaslužuje da bude zabeležen.",
    features: ["Prilagođen pristup", "Fleksibilno trajanje", "Svi formati", "Brza isporuka"],
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
