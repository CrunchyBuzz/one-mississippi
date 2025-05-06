export interface Product {
    id: string;
    title: string;
    brand: string;
    category: string;
    price: number;
    amazon_url?: string;
    walmart_url?: string;
    available_on_amazon_prime?: boolean;
    available_on_walmart_plus?: boolean;
    rating?: number;
    review_count?: number;
    location?: string;
    description?: string;
    image_urls?: string;
  }
  