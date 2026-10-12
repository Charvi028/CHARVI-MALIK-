import { ProductVariant, Review } from '../types';

// Asset paths
import heroPenImg from '../assets/images/hero_apex_grip_pen_1791695709513.jpg';
import classicPenImg from '../assets/images/pen_variant_classic_1791695725833.jpg';
import premiumPenImg from '../assets/images/pen_variant_premium_1791695739252.jpg';
import proPenImg from '../assets/images/pen_variant_pro_1791695749902.jpg';

export { heroPenImg, classicPenImg, premiumPenImg, proPenImg };

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'classic',
    name: 'Apex-Grip 3000 Classic',
    subtitle: 'Daily Student & Desk Ergonomics',
    tagline: 'Effortless everyday writing with zero finger strain.',
    price: 20,
    originalPrice: 25,
    description: 'Engineered for students, marathon note-taking, and daily productivity. Features a ribbed thermo-elastomer contour grip and balanced polymer casing that guarantees zero fatigue across multi-hour exams.',
    image: classicPenImg,
    accentColor: '#38bdf8', // electric sky blue
    gripType: 'Micro-Ribbed Thermo-Elastomer',
    bodyMaterial: 'Matte Obsidian Poly-Composite',
    tipSpecification: '0.7mm Swiss Ballpoint Core',
    weightGrams: 11.2,
    inkCapacity: '1,800 Meters Continuous Flow',
    idealFor: 'Students, Exams, Daily Note Taking & Office Desks',
    features: [
      'Ergonomic ribbed contour grip for zero finger fatigue',
      'Instant-dry anti-smudge German ink formulation',
      'Featherweight 11.2g body engineered for long exams',
      'Ultra-durable tungsten alloy ball nib'
    ]
  },
  {
    id: 'premium',
    name: 'Apex-Grip 3000 Premium',
    subtitle: 'Aerospace Aluminum & Rollerball Precision',
    tagline: 'Machined metal architecture with magnetic quick-snap cap.',
    price: 50,
    originalPrice: 65,
    badge: 'Most Popular',
    description: 'Precision CNC-machined from aerospace-grade 6061 aluminum with a diamond-knurled tactile grip zone and magnetic closure. Created for corporate executives, engineers, and everyday luxury writing.',
    image: premiumPenImg,
    accentColor: '#00e5ff', // cyan
    gripType: 'Diamond-Knurled Anodized Matrix',
    bodyMaterial: 'Brushed Aerospace 6061 Aluminum',
    tipSpecification: '0.5mm Precision Liquid Rollerball',
    weightGrams: 21.8,
    inkCapacity: '2,400 Meters Precision Flow',
    idealFor: 'Executives, Engineers, Journaling & High-Stakes Signing',
    features: [
      'Brushed aerospace aluminum body with cyan anodized ring',
      'Magnetic click-snap cap with airtight vacuum seal',
      'Diamond-knurled grip zone for tactile micro-control',
      'Ultra-smooth 0.5mm tungsten-carbide liquid rollerball'
    ]
  },
  {
    id: 'pro',
    name: 'Apex-Grip 3000 Pro Edition',
    subtitle: 'Dual-Balanced Titanium & Zero-G Ink Chamber',
    tagline: 'The pinnacle of writing engineering with pressurized core.',
    price: 99,
    originalPrice: 120,
    badge: 'Flagship Edition',
    description: 'The definitive instrument for discerning creators and leaders. Forged with Grade-5 titanium alloy, pressurized zero-gravity nitrogen ink reservoir, and customizable center-of-mass balancing.',
    image: proPenImg,
    accentColor: '#60a5fa', // cobalt electric
    gripType: 'Bio-Adaptive Hex-Grip with Cyan Illuminator',
    bodyMaterial: 'Grade-5 Titanium Alloy & Carbon Fiber Core',
    tipSpecification: '0.38mm Micron Ceramic Roller-Tip',
    weightGrams: 28.4,
    inkCapacity: '3,200 Meters Pressurized Nitrogen Flow',
    idealFor: 'Architects, Designers, Calligraphers & Serious Connoisseurs',
    features: [
      'Grade-5 forged titanium body with carbon fiber reinforcement',
      'Pressurized nitrogen chamber (writes upside-down & in wet conditions)',
      'Dual-counterweight balancing system tailored to your hand posture',
      'Luminous electric blue optical alignment ring'
    ]
  }
];

export const DEMO_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aarav Sharma',
    role: 'Computer Science Undergraduate & Presentation Tester',
    rating: 5,
    title: 'Wrote a 3-hour theoretical exam with zero hand cramp',
    content: 'Normally after 40 minutes of writing fast, my index finger joints start aching. The ribbed grip on the Classic edition completely distributes the pressure. For ₹20, the build quality feels like a ₹200 imported pen.',
    verifiedDemo: true,
    date: 'Oct 2026'
  },
  {
    id: 'rev-2',
    author: 'Priya Nambiar',
    role: 'Lead UX Designer, Studio Synapse',
    rating: 5,
    title: 'The weight distribution on the Premium is pure perfection',
    content: 'As someone who still sketches wireframes and flowcharts on paper every morning, the tactile diamond knurling and instant ink start make a huge difference. The magnetic cap is insanely satisfying.',
    verifiedDemo: true,
    date: 'Sep 2026'
  },
  {
    id: 'rev-3',
    author: 'Rohan Deshmukh',
    role: 'Structural Engineering Consultant',
    rating: 5,
    title: 'Pro Edition titanium construction is unmatched',
    content: 'The zero-gravity nitrogen refill allows me to mark blueprints against vertical walls without the ink stuttering. The titanium body has already survived several site drops without a scratch.',
    verifiedDemo: true,
    date: 'Oct 2026'
  },
  {
    id: 'rev-4',
    author: 'Ananya Roy',
    role: 'Medical Intern & Resident',
    rating: 5,
    title: 'Quick hospital rounds need a pen that never skips',
    content: 'I write patient charts continuously during 12-hour shifts. The quick-drying ink does not smear on glossy prescription papers, and the ergonomic contour prevents calluses.',
    verifiedDemo: true,
    date: 'Oct 2026'
  }
];

export const CORE_FEATURES = [
  {
    id: 'ergonomics',
    title: 'Bio-Contour Ergonomic Grip',
    summary: 'Anatomically molded grip zone designed in collaboration with biomechanical researchers to minimize palm fatigue by 64%.',
    iconName: 'Sparkles',
    metric: '64% Less Strain',
    metricLabel: 'compared to standard cylindrical ballpoint pens'
  },
  {
    id: 'inkflow',
    title: 'Ultra-Smooth Micro-Roller Flow',
    summary: 'Tungsten-carbide micro-sphere suspended in German-formulated quick-drying liquid ink ensures instantaneous line delivery with zero skips.',
    iconName: 'Zap',
    metric: '0.01s Dry Time',
    metricLabel: 'zero smudging for left-handed and right-handed writers'
  },
  {
    id: 'durability',
    title: 'Aerospace-Grade Durability',
    summary: 'Engineered with shock-damped internal cartridges, high-tensile clips, and impact-resistant materials tested for over 10,000 drops.',
    iconName: 'ShieldCheck',
    metric: '10,000+ Drops',
    metricLabel: 'military-spec drop durability without nib deformation'
  },
  {
    id: 'versatility',
    title: 'Engineered for Every Hand',
    summary: 'From ₹20 student essentials to executive titanium instruments, every model shares the same signature Apex balanced center of mass.',
    iconName: 'CheckCircle2',
    metric: '3 Tailored Editions',
    metricLabel: 'priced from ₹20 to ₹99 for accessible universal innovation'
  }
];
