import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import ProductHero from "@/components/Store/ProductHero";
import ProductDetails from "@/components/Store/ProductDetails";
import RelatedProducts from "@/components/Store/RelatedProducts";
import Reveal from "@/components/Reveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const relatedProducts = products
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

return (
    <div className="pt-20 flex flex-col">
    <Reveal>
      <ProductHero product={product} />
    </Reveal>

    <Reveal>
      <ProductDetails product={product} />
    </Reveal>

    <Reveal>
      <RelatedProducts 
        products={products}
        currentSlug={product.slug}
        />
    </Reveal>  
    </div>
  );
}
