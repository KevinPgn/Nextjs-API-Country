"use server"
import {prisma} from "@/lib/db"
import {z} from "zod"



export async function putCountryIntoDatabase(name: string, capital: string, region: string, subregion: string, population: number, image: string, cca2: string){
  const country = z.object({
    success: z.boolean(),
    data: z.object({
      name: z.string(),
      capital: z.string(),
      region: z.string(),
      subregion: z.string(),
      population: z.number(),
      image: z.string(),
      cca2: z.string()
    })
  }).parse({
    success: true,
    data: {
      name,
      capital,
      region,
      subregion,
      population,
      image,
      cca2
    }
  })
  
  if(!country.success){
    throw new Error("Invalid country data")
  }

  await prisma.country.create({
    data: country.data
  })
}