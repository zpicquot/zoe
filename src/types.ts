export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  content?: string;
  category: 'Conceptual' | 'Archives' | 'Tendances' | 'Designers' | 'Opinions' | 'Défilés';
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
}
