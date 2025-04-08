export default function Navbar() {


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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                    >ELEGANCE</a
                    >
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
            <nav className="border-y border-neutral-200 py-3 mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mobile menu button (hidden on larger screens) */}
                    <div
                        className="flex items-center justify-between md:hidden py-2"
                    >
                        <a href="/" className="font-medium">Brand</a>
                        <button
                            id="mobile-menu-button"
                            className="text-gray-600 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu (hidden by default) */}
                    <div id="mobile-menu" className="hidden md:hidden mt-2">
                        <div className="flex flex-col space-y-3">
                            <a
                                href="/"
                                className="py-2 text-gray-800 hover:text-black"
                            >Hjem</a
                            >

                            {/* Mobile dropdown */}
                            <div className="relative">
                                <button
                                    id="mobile-dropdown-button"
                                    className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-black"
                                >
                                    Butik
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                </button>
                                <div
                                    id="mobile-dropdown-content"
                                    className="hidden mt-2 bg-white border border-gray-200 rounded-md shadow-lg"
                                >
                                    <div className="p-4">
                                        <div className="mb-4">
                                            <h3 className="font-medium mb-2">
                                                Mænd
                                            </h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Skjorter"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Skjorter</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Bukser"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Bukser</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Sko"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Sko</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Accessories"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Accessories</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="font-medium mb-2">
                                                Kvinder
                                            </h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Kjoler"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Kjoler</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Toppe"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Toppe</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Bukser"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Bukser</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Accessories"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Accessories</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium mb-2">
                                                Unisex
                                            </h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=T-shirts"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >T-shirts</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=Sweatere"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Sweatere</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=Jakker"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Jakker</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=Accessories"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Accessories</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/nyheder"
                                className="py-2 text-gray-800 hover:text-black"
                            >Nyheder</a
                            >
                            <a
                                href="/om-os"
                                className="py-2 text-gray-800 hover:text-black"
                            >Om Os</a
                            >
                            <a
                                href="/kontakt"
                                className="py-2 text-gray-800 hover:text-black"
                            >Kontakt</a
                            >
                        </div>
                    </div>

                    {/* Desktop menu */}
                    <div
                        className="hidden md:flex flex-wrap gap-6 sm:gap-8 md:gap-12 justify-center"
                    >
                        <a href="/" className="relative group">
                            <span
                                className="text-sm sm:text-base hover:text-gray-800 transition-colors"
                            >Hjem</span
                            >
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"
                            ></span>
                        </a>

                        { /* Desktop dropdown */}
                        <div className="relative group">
                            <button
                                data-dropdown-toggle
                                className="flex items-center text-sm sm:text-base text-gray-800 font-medium"
                                aria-expanded="false"
                            >
                                Butik
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="ml-1"
                                >
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

                            <div
                                data-dropdown-content
                                className="absolute hidden top-full pt-2 z-50 left-1/2 transform -translate-x-1/2"
                            >
                                <div
                                    className="bg-white shadow-lg rounded-md border border-gray-200 p-4 w-max max-w-[90vw] sm:max-w-[600px] md:max-w-[800px]"
                                >
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                                    >
                                        <div>
                                            <h3 className="font-medium mb-2">
                                                Mænd
                                            </h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Skjorter"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Skjorter</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Bukser"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Bukser</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Sko"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Sko</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Male&category=Accessories"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Accessories</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium mb-2">
                                                Kvinder
                                            </h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Kjoler"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Kjoler</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Toppe"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Toppe</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Bukser"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Bukser</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Female&category=Accessories"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Accessories</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium mb-2">
                                                Unisex
                                            </h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=T-shirts"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >T-shirts</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=Sweatere"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Sweatere</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=Jakker"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Jakker</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="/shop?gender=Unisex&category=Accessories"
                                                        className="text-sm text-gray-600 hover:text-black"
                                                    >Accessories</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="/nyheder" className="relative group">
                            <span
                                className="text-sm sm:text-base hover:text-gray-800 transition-colors"
                            >Nyheder</span
                            >
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"
                            ></span>
                        </a>
                        <a href="/om-os" className="relative group">
                            <span
                                className="text-sm sm:text-base hover:text-gray-800 transition-colors"
                            >Om Os</span
                            >
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"
                            ></span>
                        </a>
                        <a href="/kontakt" className="relative group">
                            <span
                                className="text-sm sm:text-base hover:text-gray-800 transition-colors"
                            >Kontakt</span
                            >
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"
                            ></span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}