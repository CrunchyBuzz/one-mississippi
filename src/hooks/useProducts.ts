// src/hooks/useProducts.ts
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/types/Product';


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
  image_url?: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'products'),
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(docs);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { products, loading, error };
};
