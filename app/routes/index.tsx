// app/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import backgroundImg from "../public/background.jpg?url"
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
	component: Home,
})

function Home() {


	return (
		<main>
			<section className="flex justify-center mx-auto relative md:p-8">
				<figure className="overflow-clip h-96 md:h-auto mt-4 md:mt-auto">
					<img
						src={backgroundImg}
						alt="Baggrund"
						className="w-full max-w-7xl mx-auto py-4 sm:py-6 lg:py-10 md:rounded-br-full md:rounded-tl-full md:scale-100 scale-200"
					/>
				</figure>
				<div
					className="bg-neutral-100 md:h-36 md:w-96 absolute bottom-2 flex justify-center items-center flex-col rounded-md"
				>
					<h1 className="text-2xl font-medium p-2">
						VORES FORETRUKNE MÆRKER
					</h1>
					<button
						aria-label="køb nu"
						className="underline underline-offset-8"
					>
						KØB NU
					</button>
				</div>
			</section>

			<section
				className="items-center px-4 sm:px-8 md:px-16 lg:px-40 relative"
			>
				<div
					className="w-full border-b-2 border-neutral-200 py-2 sm:py-4"
				></div>
				<div
					className="flex flex-col lg:flex-row justify-between md:max-w-5xl py-10 md:py-20 gap-8 md:gap-12 mx-auto"
				>
					<div className="space-y-4">
						<h2 className="text-2xl md:text-3xl font-medium">
							VORES HISTORIE
						</h2>
						<p className="text-xs md:text-sm text-balance">
							Vores rejse begyndte med en simpel idé: at skabe
							tøj, der udstråler elegance, uden at gå på kompromis
							med kvalitet eller bæredygtighed. Som et passioneret
							tøjfirma med en stærk online tilstedeværelse, har vi
							siden vores begyndelse stræbt efter at levere
							tidløse designs til den moderne kvinde og mand. Vi
							kombinerer klassisk stil med innovative materialer
							og teknikker, og vi er stolte af at tilbyde en
							shoppingoplevelse, der er både bekvem og personlig.
						</p>
						<p className="text-xs md:text-sm text-balance">
							Vores historie er også en historie om ansvar. Fra
							starten har vi arbejdet hårdt på at sikre, at alle
							vores produkter er fremstillet med omtanke for
							miljøet. Vi har valgt at samarbejde med leverandører
							og producenter, der deler vores værdier om
							bæredygtighed og etik. Vi bruger materialer, der
							både er holdbare og skånsomme mod planeten, og vi er
							konstant på jagt efter nye måder at forbedre vores
							produktion på. For os handler det ikke kun om mode –
							det handler om at skabe en bedre fremtid gennem
							bevidste valg.
						</p>

						<button
							className="bg-black py-2 px-6 text-white rounded-md hover:bg-gray-800 transition-colors"
						>
							LÆS MERE
						</button>
					</div>

					<img
						src="https://placehold.co/400x400"
						className="w-full md:w-auto object-cover rounded-lg shadow-md"
						alt="Vores Historie Billede"
					/>
				</div>
			</section>
		</main>
	)
}