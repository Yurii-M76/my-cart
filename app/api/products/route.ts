import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { TProduct } from "@/types";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const response = await prisma.products.findMany({
      omit: {
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch products: ${error}`);
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as TProduct;
    const response = await prisma.products.create({
      data: {
        label: body.label,
        description: body.description,
        categoryId: body.categoryId,
        price: body.price,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to create product: ${error}`);
  }
}
