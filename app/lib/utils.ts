import db from "@/db"
import { productTable, TProductGenderEnum } from "@/db/schema"
import { createServerFn } from "@tanstack/react-start"
import { cva } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { eq} from "drizzle-orm"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
)


export const getCategories =  createServerFn({type: "static", method: "GET", response: "data"}).handler(async (data) => {
  console.log("running pregen");

  const genders = await db.selectDistinctOn([productTable.gender]).from(productTable)
  var categories = {

  }
  
  for(var gender in genders) {
    const subCat = await db.selectDistinctOn([productTable.category]).from(productTable).where(eq(productTable.gender, gender as TProductGenderEnum))
    categories[gender] = subCat;
  }

  return categories;
})