export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  content?: string;
  category: 'Conceptual' | 'Trends' | 'Designers' | 'Opinions';
  house?: string;
  author: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
  quote?: string;
}

export interface Category {
  name: string;
  slug: string;
  subcategories?: { name: string; slug: string }[];
}
