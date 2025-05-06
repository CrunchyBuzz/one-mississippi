// src/components/ProductCard.tsx
'use client';
import { Product } from '@/hooks/useProducts';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  console.log('Image URL:', product.image_urls); // ✅ LOGGING BEFORE JSX

  const href = product.amazon_url || product.walmart_url || '#';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-64"
    >
     {product.image_urls && (
  <img src={product.image_urls.split(',')[0]?.trim()} alt={product.title} className="w-full h-40 object-cover mb-2 rounded" />
)}

      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-md font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-600">by {product.brand}</p>
        <p className="text-md font-bold">${product.price.toFixed(2)}</p>

        {product.walmart_url && (
          <p className="text-sm text-gray-500">
            Also at Walmart: ${product.price.toFixed(2)}{' '}
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded ml-1">
              W+
            </span>
          </p>
        )}

        <div className="flex items-center text-sm mt-1">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-1 text-gray-600">({product.review_count})</span>
        </div>
      </div>
    </a>
  );
}
