import { ProductCard } from "@/products";
import { products } from "@/products/data/products";

export default function NamePage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {
                products.map(product => (
                    <ProductCard 
                        key={ product.id }
                        { ...product }
                    />
                ))
            }
        </div>
    );
}