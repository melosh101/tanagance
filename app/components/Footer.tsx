export const Footer = () => {
    return (

        <footer className="bg-white border-t border-neutral-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    <div className="space-y-4">
                        <h3 className="font-medium uppercase tracking-wider">
                            Kundeservice
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/om-os"
                                    className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
                                >Om os</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/kontakt"
                                    className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
                                >Kontakt</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/nyheder"
                                    className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
                                >Nyheder & Events</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/retur"
                                    className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
                                >Returner</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/fragt"
                                    className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
                                >Fragt & Levering</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/faq"
                                    className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
                                >FAQ</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-medium uppercase tracking-wider">
                            Besøg vores butik
                        </h3>
                        <address className="text-sm not-italic text-gray-600">
                            <p>Østergade 52</p>
                            <p>København K, 1100</p>
                            <p>(+45) 12 34 56 78</p>
                            <p className="mt-2">
                                <a
                                    href="mailto:info@elegance.dk"
                                    className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
                                >info@elegance.dk</a
                                >
                            </p>
                        </address>
                        <div className="text-sm space-y-1 text-gray-600">
                            <p>Mandag-Fredag: 9:00-18:00</p>
                            <p>Lørdag: 10:00-17:00</p>
                            <p>Søndag: 10:00-16:00</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-medium uppercase tracking-wider">
                            Find os her
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
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
                                    className="lucide lucide-instagram"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path
                                        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                    />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
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
                                    className="lucide lucide-facebook"
                                >
                                    <path
                                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
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
                                    className="lucide lucide-twitter"
                                >
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="space-y-4 mt-6">
                            <h3
                                className="font-medium uppercase tracking-wider"
                            >
                                Betalingsmetoder
                            </h3>
                            <div className="flex gap-3 flex-wrap">
                                <img
                                    src="https://placehold.co/40x25/f5f5f5/333333?text=VISA"
                                    alt="Visa"
                                    className="h-6"
                                />
                                <img
                                    src="https://placehold.co/40x25/f5f5f5/333333?text=MC"
                                    alt="Mastercard"
                                    className="h-6"
                                />
                                <img
                                    src="https://placehold.co/40x25/f5f5f5/333333?text=AMEX"
                                    alt="American Express"
                                    className="h-6"
                                />
                                <img
                                    src="https://placehold.co/40x25/f5f5f5/333333?text=APPLE"
                                    alt="Apple Pay"
                                    className="h-6"
                                />
                                <img
                                    src="https://placehold.co/40x25/f5f5f5/333333?text=GPAY"
                                    alt="Google Pay"
                                    className="h-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="border-t border-neutral-200 py-8 text-sm text-center text-gray-600"
                >
                    <p>
                        &copy; 2025 Elegance. Alle rettigheder forbeholdes.
                    </p>
                    <div className="flex justify-center gap-4 mt-2">
                        <a
                            href="/privatlivspolitik"
                            className="hover:underline hover:text-gray-900 transition-colors"
                        >Privatlivspolitik</a
                        >
                        <a
                            href="/vilkaar"
                            className="hover:underline hover:text-gray-900 transition-colors"
                        >Vilkår & Betingelser</a
                        >
                        <a
                            href="/cookies"
                            className="hover:underline hover:text-gray-900 transition-colors"
                        >Cookies</a
                        >
                    </div>
                </div>
            </div>
        </footer>
    )
}