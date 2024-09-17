// 'use client'
// Actions ejecutadas del lado del cliente

import { getCookie, hasCookie, setCookie } from "cookies-next";
import { COOKIE_CART_KEY } from "@/constants";


export const getCartFormCookie = ():{ [id:string]: number } => {

    if( hasCookie(COOKIE_CART_KEY) ){
        const cookieCart = JSON.parse(getCookie(COOKIE_CART_KEY) ?? '{}')
        return cookieCart
    }

    return {}
}


export const addProductToCart = ( id:string ) => {
    
    const cookieCart = getCartFormCookie()

    if(cookieCart[id]){
        cookieCart[id] += 1
    }else {
        cookieCart[id] = 1
    }

    setCookie(COOKIE_CART_KEY, JSON.stringify(cookieCart))
}

export const removeProductToCart = ( id:string ) => {
    
    const cookieCart = getCartFormCookie()

    if( cookieCart[id] ) {
        delete cookieCart[id] 
    } 
    
    setCookie(COOKIE_CART_KEY, JSON.stringify(cookieCart))
}

export const removeSingleProductFromCart = (id: string) => {

    const cookieCart = getCartFormCookie()

    if( !cookieCart[id] ) {
         return
    }

    if( cookieCart[id] > 1 ){
        cookieCart[id] -= 1
    }else {
        delete cookieCart[id]
    }

    setCookie(COOKIE_CART_KEY, JSON.stringify(cookieCart))
}