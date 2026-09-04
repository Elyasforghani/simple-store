import React from 'react';
import Fullstory from '../components/Fullstory';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getData(url) {
  let x = await fetch(url);
  if (!x.ok) return null;
  let data = await x.json();
  return data;
}

export default async function page({ params }) {
  let myId = await params;
  myId = parseInt(myId.slug);

  // If slug is not a number (e.g. /favicon.ico), trigger 404
  if (isNaN(myId)) {
    notFound();
  }

  let temp = await getData(`https://dummyjson.com/products/${myId}`);

  // If product doesn't exist, trigger 404
  if (!temp || !temp.id) {
    notFound();
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <Fullstory
        id={temp.id}
        key={temp.id}
        title={temp.title}
        img={temp.images?.[0] || temp.thumbnail}
        des={temp.description}
        disc={temp.discountPercentage}
        price={temp.price}
      />
      <div className="mt-4 text-center">
        <Link href="/" className="">
          &larr; Back to main page
        </Link>
      </div>
    </main>
  );
}
