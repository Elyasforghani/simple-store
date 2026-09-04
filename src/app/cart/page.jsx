'use client'
import React from 'react';
import useStore from '../store/Store';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';

const CartPage = () => {
  const product = useStore((state) => state.product);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateCount = useStore((state) => state.updateCount);

  const total = product.reduce((sum, item) => sum + item.price * item.count, 0);

  if (product.length === 0) {
    return (
      <main className="p-10 text-center">
        <h2 className="text-2xl mb-4">Your cart is empty dear </h2>
        <Link href="/" className="text-red-600 ">Continue shopping</Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <Link href="/" className="text-blue-600 ">Continue shopping</Link>
      </div>

      <div className="flex flex-col gap-4">
        {product.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
            <img src={item.img} alt={item.title} className="w-20 h-20 object-contain bg-white rounded p-1" />

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">${item.price} each</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateCount(item.id, Math.max(1, item.count - 1))}
                  className="px-2.5 py-0.5 bg-gray-300 dark:bg-slate-700 rounded cursor-pointer"
                >
                  -
                </button>
                <span className="font-semibold">{item.count}</span>
                <button
                  onClick={() => updateCount(item.id, item.count + 1)}
                  className="px-2.5 py-0.5 bg-gray-300 dark:bg-slate-700 rounded cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">${(item.price * item.count).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 mt-2 cursor-pointer"
                title="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <Link href="/" className="text-blue-600">Continue shopping</Link>
      </div>
    </main>
  );
};

export default CartPage;
