import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { TProductCategories } from "@/types";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const response = await prisma.productCategory.findMany({
      omit: {
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch product categories: ${error}`);
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as TProductCategories;
    const response = await prisma.productCategory.create({
      data: {
        label: body.label,
        description: body.description,
        products: {
          connect: body.products?.map((product) => ({
            id: product.id,
          })),
        },
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to create product categories: ${error}`);
  }
}
