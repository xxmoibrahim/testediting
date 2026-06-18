import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";

export const CATEGORIES = [
  "All Work",
  "Commercial Ads",
  "YouTube Videos",
  "Reels & Shorts",
  "Motion Graphics",
  "Color Grading",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All Work">;
  year: string;
  client: string;
  thumb: string;
  description: string;
  tools: string[];
  stats: { label: string; value: string }[];
  video: string; // mp4 url
  before?: string;
  after?: string;
};

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const PROJECTS: Project[] = [
  {
    id: "velocity-night-drive",
    title: "Velocity: Night Drive",
    category: "Commercial Ads",
    year: "2024",
    client: "Aurelius Motors",
    thumb: p1,
    description:
      "A 60-second hero spot for the Aurelius GT launch. Cut to a custom score with rhythm-locked transitions and a teal-orange grade built in DaVinci Resolve.",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    stats: [
      { label: "Views", value: "2.4M" },
      { label: "Length", value: "0:60" },
      { label: "Delivery", value: "4K HDR" },
    ],
    video: SAMPLE_VIDEO,
    before: p5,
    after: p1,
  },
  {
    id: "studio-pulse",
    title: "Studio Pulse Episode 14",
    category: "YouTube Videos",
    year: "2024",
    client: "Pulse Network",
    thumb: p2,
    description:
      "Long-form documentary-style edit for a flagship YouTube show. Multi-cam sync, dialog mix, motion lower-thirds, and chapter pacing.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    stats: [
      { label: "Views", value: "812K" },
      { label: "Length", value: "18:42" },
      { label: "Retention", value: "67%" },
    ],
    video: SAMPLE_VIDEO,
  },
  {
    id: "atelier-reel",
    title: "Atelier — Spring Drop",
    category: "Reels & Shorts",
    year: "2024",
    client: "Atelier Studio",
    thumb: p3,
    description:
      "A series of 9:16 fashion reels engineered for Instagram and TikTok. Rapid cuts, beat-mapped text, and a warm golden grade.",
    tools: ["Premiere Pro", "After Effects"],
    stats: [
      { label: "Plays", value: "5.1M" },
      { label: "Length", value: "0:18" },
      { label: "Shares", value: "78K" },
    ],
    video: SAMPLE_VIDEO,
  },
  {
    id: "digital-pulse",
    title: "Digital Pulse — Title Sequence",
    category: "Motion Graphics",
    year: "2024",
    client: "Pulse Network",
    thumb: p4,
    description:
      "Animated title sequence built in After Effects with custom kinetic type and a particle system reacting to the show theme.",
    tools: ["After Effects", "Illustrator", "Cinema 4D Lite"],
    stats: [
      { label: "Length", value: "0:22" },
      { label: "Layers", value: "412" },
      { label: "Render", value: "4K" },
    ],
    video: SAMPLE_VIDEO,
  },
  {
    id: "ember-grade",
    title: "Ember — Color Study",
    category: "Color Grading",
    year: "2023",
    client: "Ember Films",
    thumb: p5,
    description:
      "Full color pipeline for a short film festival entry — node-based grade, LUT design, skin tone protection, and final DCP delivery.",
    tools: ["DaVinci Resolve", "Photoshop"],
    stats: [
      { label: "Length", value: "12:08" },
      { label: "Nodes", value: "38" },
      { label: "Festivals", value: "6" },
    ],
    video: SAMPLE_VIDEO,
    before: p5,
    after: p9,
  },
  {
    id: "artisan-doc",
    title: "The Last Artisan",
    category: "YouTube Videos",
    year: "2023",
    client: "Independent",
    thumb: p6,
    description:
      "A 12-minute documentary cut on a single subject. Interview-driven structure with archival inserts and an emotive grade.",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    stats: [
      { label: "Views", value: "1.2M" },
      { label: "Length", value: "12:14" },
      { label: "Awards", value: "3" },
    ],
    video: SAMPLE_VIDEO,
  },
  {
    id: "kinetic-sport",
    title: "Kinetic — Sportwear",
    category: "Commercial Ads",
    year: "2023",
    client: "Kinetic Athletics",
    thumb: p7,
    description:
      "30-second campaign spot. Slow-motion conform from 120fps source, with speed ramps locked to the kick drum.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    stats: [
      { label: "Length", value: "0:30" },
      { label: "Frame rate", value: "120fps" },
      { label: "Reach", value: "9.4M" },
    ],
    video: SAMPLE_VIDEO,
  },
  {
    id: "typecast",
    title: "Typecast — Brand Loop",
    category: "Motion Graphics",
    year: "2024",
    client: "Typecast Foundry",
    thumb: p8,
    description:
      "Looping brand animation showcasing a new variable type system. Built fully in After Effects with custom expressions.",
    tools: ["After Effects", "Illustrator"],
    stats: [
      { label: "Length", value: "0:12" },
      { label: "Loops", value: "∞" },
      { label: "Render", value: "2K" },
    ],
    video: SAMPLE_VIDEO,
  },
  {
    id: "interior-grade",
    title: "Interior — Mood Grade",
    category: "Color Grading",
    year: "2024",
    client: "Hearth & Co.",
    thumb: p9,
    description:
      "Lifestyle commercial with a complex mixed-light grade. Window pulls, ceiling fixture isolation, and warm key balancing.",
    tools: ["DaVinci Resolve"],
    stats: [
      { label: "Length", value: "0:45" },
      { label: "Shots", value: "32" },
      { label: "Delivery", value: "4K" },
    ],
    video: SAMPLE_VIDEO,
    before: p5,
    after: p9,
  },
];

export const SKILLS = [
  { name: "Adobe Premiere Pro", value: 96 },
  { name: "Adobe After Effects", value: 92 },
  { name: "DaVinci Resolve", value: 94 },
  { name: "Adobe Photoshop", value: 88 },
  { name: "Adobe Illustrator", value: 80 },
];

export const TESTIMONIALS = [
  {
    quote:
      "The cut completely changed the energy of our launch film. Pacing, color, sound design — every frame felt deliberate.",
    name: "Maya Hollis",
    role: "Creative Director, Aurelius Motors",
    rating: 5,
  },
  {
    quote:
      "Fastest turnaround we've ever had on a campaign of this scale, with zero compromise on craft. We'll book again immediately.",
    name: "Daniel Reyes",
    role: "Head of Brand, Kinetic Athletics",
    rating: 5,
  },
  {
    quote:
      "A true colorist's eye. The grade on our short carried it through six festivals and a distribution deal.",
    name: "Imani Okafor",
    role: "Director, Ember Films",
    rating: 5,
  },
];

export const STATS = [
  { label: "Years experience", value: 8 },
  { label: "Projects delivered", value: 240 },
  { label: "Happy clients", value: 90 },
  { label: "Industry awards", value: 12 },
];
