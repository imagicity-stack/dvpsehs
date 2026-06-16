import {
  Baby,
  Train,
  Star,
  GraduationCap,
  Sun,
  Search,
  Apple,
  TreePine,
  Palette,
  BookOpen,
  Music,
  Sprout,
  Puzzle,
  Drama,
  PartyPopper,
  Sandwich,
  FlaskConical,
  Heart,
  School,
  Backpack,
  Pencil,
  Telescope,
  Flower2,
  Handshake,
  UserRound,
  Mail,
  Sparkles,
  Trophy,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";

export type GlyphName =
  | "play"
  | "nursery"
  | "lkg"
  | "ukg"
  | "preprimary"
  | "primary"
  | "middle"
  | "senior"
  | "graduate"
  | "sun"
  | "search"
  | "apple"
  | "tree"
  | "palette"
  | "book"
  | "music"
  | "sprout"
  | "puzzle"
  | "drama"
  | "festival"
  | "snack"
  | "science"
  | "heart"
  | "school"
  | "backpack"
  | "pencil"
  | "telescope"
  | "flower"
  | "handshake"
  | "teacher"
  | "child"
  | "star"
  | "sparkles"
  | "letter"
  | "outdoor"
  | "image";

const map: Record<GlyphName, LucideIcon> = {
  play: Baby,
  nursery: Train,
  lkg: Star,
  ukg: GraduationCap,
  preprimary: Palette,
  primary: Pencil,
  middle: Telescope,
  senior: BookOpen,
  graduate: GraduationCap,
  sun: Sun,
  search: Search,
  apple: Apple,
  tree: TreePine,
  palette: Palette,
  book: BookOpen,
  music: Music,
  sprout: Sprout,
  puzzle: Puzzle,
  drama: Drama,
  festival: PartyPopper,
  snack: Sandwich,
  science: FlaskConical,
  heart: Heart,
  school: School,
  backpack: Backpack,
  pencil: Pencil,
  telescope: Telescope,
  flower: Flower2,
  handshake: Handshake,
  teacher: UserRound,
  child: Baby,
  star: Star,
  sparkles: Sparkles,
  letter: Mail,
  outdoor: Trophy,
  image: ImageIcon,
};

export function Glyph({
  name,
  className = "h-5 w-5",
  strokeWidth = 2,
}: {
  name: GlyphName;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}
