'use client'
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import useStore from '../store/Store';

const Fullstory = ({ id, title, img, des, price, disc }) => {
  const [reading, setReading] = useState(false);
  const [added, setAdded] = useState(false);
  const updatePro = useStore((state) => state.updatePro);

  const tempPro = {
    title: title,
    id: id,
    price: price,
    img: img,
    count: 1,
  };

  const handleAddToCart = () => {
    updatePro(tempPro);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="p-5 rounded-lg bg-slate-200 dark:bg-slate-800 w-full max-w-2xl mx-auto my-5">
      <h2 style={{ margin: '0 0 10px 0', color: '#2c3e50' }} className="dark:text-white text-2xl font-bold">
        {title}
      </h2>
      <img src={img} alt={title} className="w-64 h-64 object-contain rounded my-3 bg-white p-2" />

      <p style={{ color: '#555', lineHeight: '1.5' }} className="dark:text-slate-300">
        {des}
      </p>

      {reading && (
        <p className="my-3 bg-white dark:bg-slate-700 rounded-3xl text-black dark:text-white flex justify-center items-center text-xl p-2">
          Price: {price}$ <code className="pl-5 text-sm">Discount: {disc}%</code>
        </p>
      )}

      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setReading(!reading)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {reading ? 'hide price' : 'see the price'}
        </button>

        <button
          onClick={handleAddToCart}
          style={{
            padding: '8px 16px',
            backgroundColor: added ? '#27ae60' : '#2ecc71',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <ShoppingCartIcon size={18} />
          {added ? 'Added to Cart!' : 'add to cart'}
        </button>

        <Link
          href="/cart"
          className="bg-black rounded-xs text-white dark:text-blue-400"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default Fullstory;
