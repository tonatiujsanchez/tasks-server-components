import { WidgetItem } from "@/components";
import { COOKIE_CART_KEY } from "@/constants";
import { products, type Product } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";


export const metadata = {
    title: 'Carrito de Compras',
    description: 'Carrito de Comprar',
};

interface Cart {
    [id:string]: number
}

interface ProductInCart {
    product: Product,
    quantity: number
}

const getProductsInCart = (cart: Cart):ProductInCart[] => {

    const productsInCart:ProductInCart[] = []

    Object.keys(cart).forEach( idProduct => {
        const product = products.find( prod => prod.id === idProduct )
        const quantity = cart[idProduct]

        if( product ){
            productsInCart.push({
                product,
                quantity
            })
        }
    })

    return productsInCart
}


export default function CartPage() {

    const cookiesStore = cookies()
    const cart = JSON.parse(cookiesStore.get(COOKIE_CART_KEY)?.value ?? '{}' ) as Cart
    const products = getProductsInCart( cart )


    const totalToPay = products.reduce( (total, currentProduct) => {
        const totalProduct = currentProduct.product.price * currentProduct.quantity
        return total + totalProduct
    },0)

    return (
        <div>
            <h1 className="text-4xl">Mi Carrito</h1>
            <hr className="my-2" />

            <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="flex flex-col gap-5 w-full sm:w-8/12">
                    {
                        products.map(({ product, quantity }) => (
                            <ItemCard
                                key={ product.id }
                                product={ product }
                                quantity={ quantity }
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col gap-5 w-full sm:w-4/12">
                    <WidgetItem title="Total" >
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">Total: ${ (totalToPay * 1.16).toFixed(2) }</h3>
                        </div>
                        <span className="font-bold text-center text-gray-500">Inpuestos 16%: { (totalToPay * 0.16).toFixed(2) }</span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    );
}