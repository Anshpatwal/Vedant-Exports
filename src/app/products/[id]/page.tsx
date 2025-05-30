import { textiles, spices } from '@/app/lib';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface PageProps {
  params: { id: string };
}
const allProducts = [...textiles, ...spices];

export default function ProductDetailsPage({ params }: PageProps) {
  const { id } = params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-indigo-50 w-full text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Product Not Found</h1>
          <Link href="/products" className="text-teal-600 underline hover:text-teal-800">
            &larr; Back to products
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const descriptionParagraphs = product.description.split('\n').filter(Boolean);

  return (
    <>
      <Header />
      <main className="min-h-screen w-full px-6 sm:px-12 md:px-20 lg:px-32 py-16 bg-gradient-to-b from-slate-50 to-indigo-50 flex justify-center">
        <article className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 relative h-80 sm:h-[30rem] lg:h-auto rounded-t-3xl lg:rounded-l-3xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                priority
              />
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">{product.name}</h1>
                <p className="text-teal-700 font-semibold uppercase tracking-wider mb-8">
                  Category: {product.category}
                </p>
                <div
                  className="text-gray-700 text-lg leading-relaxed space-y-6 max-h-[65vh] overflow-y-auto pr-6"
                  style={{ scrollbarGutter: 'stable' }}
                >
                  {descriptionParagraphs.map((para, i) => (
                    <p key={i} className="text-justify">{para}</p>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-12 inline-block bg-teal-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all text-center w-full sm:w-auto"
              >
                Contact Us for More Info
              </Link>
            </div>
          </div>

          {/* Product Highlights */}
          {product.highlights && (
            <section className="px-8 sm:px-12 lg:px-16 py-12 border-t mt-12">
              <h2 className="text-3xl font-bold text-indigo-800 mb-8">Product Highlights</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg">
                {product.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Why Choose Section */}
          {product.whyChoose && (
            <section className="px-8 sm:px-12 lg:px-16 py-12 border-t bg-indigo-50 rounded-b-3xl">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Why Choose {product.name}?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{product.whyChoose}</p>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
