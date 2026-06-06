export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Interior' | 'Commercial';
  location: string;
  image: string;
  structure: string;
  featured: boolean; // Set to true to include in the Hero slideshow
  size?: 'large' | 'small';
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Khanal Residence",
    category: "Residential",
    location: "Tilottama, Nepal",
    structure: "Exposed Concrete & Steel",
    image: "/images/side view.jpeg",
    featured: true,
    size: "large"
  },
  {
    id: 2,
    title: "The Manigram Villa",
    category: "Residential",
    location: "Tilottama-5, Manigram",
    structure: "Glass, Timber & Stone",
    image: "/images/pro_1.jpeg",
    featured: true,
    size: "large"
  },
  {
    id: 3,
    title: "The Shanti Grove Interior",
    category: "Interior",
    location: "Butwal, Nepal",
    structure: "Bespoke Teak & Travertine",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1974",
    featured: true,
    size: "small"
  }
];
