'use client'

import Image from "next/image";
import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: false },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
    ],
  }
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Diseño de Software
          </li>
          <li>Clase 17 de Octubre 2024</li>
        </ol>
        <button
            type="submit"
            className="block w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Ejemplo Botón
          </button>
          <button
            type="button"
            className="block w-full rounded-md bg-rose-600 px-5.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => window.location.href = 'https://uai.cl/'}
          >
            Acceder a sitio web UAI
          </button>
          {/* Sizes */}
          <fieldset aria-label="Choose a size" className="mt-10">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">Size</div>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Size guide
              </a>
            </div>

            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="mt-4 grid grid-cols-4 gap-4"
            >
              {product.sizes.map((size) => (
                <Radio
                  key={size.name}
                  value={size}
                  disabled={!size.inStock}
                  className={classNames(
                    size.inStock
                      ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                      : 'cursor-not-allowed bg-gray-50 text-gray-200',
                    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1',
                  )}
                >
                  <span>{size.name}</span>
                  {size.inStock ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <svg
                        stroke="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                      >
                        <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                      </svg>
                    </span>
                  )}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
