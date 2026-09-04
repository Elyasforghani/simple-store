'use client'
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const ShortStory = ({ title, img, des, price, disc, myUri }) => {
  const [reading, setReading] = useState(false);

  return (
    <div
      className="p-5 rounded-lg bg-white/70 dark:bg-slate-900/70"
      style={{
        maxWidth: '400px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'sans-serif',
      }}
    >
      <h2 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{title}</h2>
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-3" />

      <p className='text-black dark:text-white'>
        {des}
      </p>

      {reading && (
        <p className="my-3 bg-white dark:bg-slate-800 rounded-3xl text-black dark:text-white flex justify-center items-center text-xl">
          Price: {price}$ <code className="pl-5 text-sm">Discount: {disc}%</code>
        </p>
      )}

      <button
        onClick={() => setReading(!reading)}
        style={{
          marginTop: '10px',
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

      <Link
        href={myUri}
        className="inline-flex items-center ml-4 text-blue-600 dark:text-emerald-400  hover:scale-110"
      >
        <ShoppingCart className="m-2  rounded-[3px] hover:scale-125 transition-transform" />
        see full
      </Link>
    </div>
  );
};

export default ShortStory;
