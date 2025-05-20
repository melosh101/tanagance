// app/routes/__root.tsx
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import appCss from "../styles/app.css?url"
import { Footer } from 'app/components/Footer'
import { getCategories } from "@/lib/utils"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Tanagance | Dit Tøjmærke',
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  loader: async () => await getCategories,
})



function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}
const RQClient = new QueryClient();
function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const categories = Route.useLoaderData()
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <QueryClientProvider>
        <body>

          {children}
          <Footer />
          <Scripts />
        </body>
      </QueryClientProvider>
    </html>
  )
}