import { useEffect, useRef, useState } from "react"
import { NavigationListItem, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { getCategories as getCategoriesFromDB } from "@/lib/utils"
import { useServerFn } from "@tanstack/react-start"

export default function Navbar() {
    const getCategories = useServerFn(getCategoriesFromDB)

    const categoryQuery = 
    return (
        <header>
            <div className="grid grid-cols-3 items-center px-4 sm:px-8 md:px-16 lg:px-40 py-4 sm:py-6 lg:py-10">
                <div className="flex items-center">
                    <div className="relative">
                        <div
                            className="border-b border-gray-200 focus-within:border-gray-700 transition-colors w-16 sm:w-auto flex items-center"
                        >
                            <input
                                type="text"
                                placeholder="SØG"
                                className="bg-transparent focus:outline-none pr-1 text-sm w-full"
                            />
                        </div>
                        <div className="hidden search-container absolute top-full left-0 w-64 bg-white shadow-lg rounded-md mt-1 z-50">
                            <div id="search-results" className="max-h-96 overflow-y-auto"></div>
                        </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 sm:w-5 sm:h-5 -ml-1"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                </div>

                <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center tracking-wider"
                >
                    <a href="/" className="hover:opacity-80 transition-opacity"
                    >ELEGANCE</a>
                </h2>

                <div className="flex items-center justify-end gap-4">
                    <a
                        href="/cart"
                        aria-label="Kurv"
                        className="px-2 py-1 text-sm inline-block transition-colors hover:text-gray-600 relative"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-gray-700 sm:w-6 sm:h-6"
                        >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path
                                d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                            />
                        </svg>
                        <span
                            className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                            id="cart-count"
                        >
                        </span>
                    </a>
                </div>
            </div>
            <div className="border-y border-neutral-200 py-3 mb-8 flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href="/">
                                <NavigationMenuLink>
                                    Hjem
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Butik</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[300px] gap-3 p-4 md:grid-cols-3 ">
                                    <div>
                                        <h3>Mænd</h3>
                                        <ul>

                                            <li>
                                                <a href="/shop?gender=Male&amp;category=Skjorter" className="text-sm text-gray-600 hover:text-black">Skjorter</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Male&amp;category=Bukser" className="text-sm text-gray-600 hover:text-black">Bukser</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Male&amp;category=Sko" className="text-sm text-gray-600 hover:text-black">Sko</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Male&amp;category=Accessories" className="text-sm text-gray-600 hover:text-black">Accessories</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div>
                                        <h3>Kvinder</h3>
                                        <ul>

                                            <li>
                                                <a href="/shop?gender=Female&amp;category=Kjoler" className="text-sm text-gray-600 hover:text-black">Kjoler</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Female&amp;category=Toppe" className="text-sm text-gray-600 hover:text-black">Toppe</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Female&amp;category=Bukser" className="text-sm text-gray-600 hover:text-black">Bukser</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Female&amp;category=Accessories" className="text-sm text-gray-600 hover:text-black">Accessories</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div>
                                        <h3>Unisex</h3>
                                        <ul>
                                            <li>
                                                <a href="/shop?gender=Unisex&amp;category=T-shirts" className="text-sm text-gray-600 hover:text-black">T-shirts</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Unisex&amp;category=Sweatere" className="text-sm text-gray-600 hover:text-black">Sweatere</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Unisex&amp;category=Jakker" className="text-sm text-gray-600 hover:text-black">Jakker</a>
                                            </li>
                                            <li>
                                                <a href="/shop?gender=Unisex&amp;category=Accessories" className="text-sm text-gray-600 hover:text-black">Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="/">
                                <NavigationMenuLink>
                                    Nyheder
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="/">
                                <NavigationMenuLink>
                                    Om Os
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="/">
                                <NavigationMenuLink>
                                    Kontakt
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuIndicator />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}