// src/app/page.tsx
'use client';

import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="p-4">Loading products...</p>;
  if (error) return <p className="p-4 text-red-600">Error loading products.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Made in USA Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
