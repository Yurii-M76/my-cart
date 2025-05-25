import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const response = await prisma.products.findMany({
      select: {
        id: true,
        label: true,
        description: true,
        price: true,
        category: {
          select: {
            id: true,
            label: true,
          },
        },
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
    const body = await req.json();
    const response = await prisma.products.create({
      data: {
        label: body.label,
        description: body.description,
        category: {
          connect: {
            id: body.categoryId,
          },
        },
        price: body.price,
      },
      select: {
        id: true,
        label: true,
        description: true,
        price: true,
        category: {
          select: {
            id: true,
            label: true,
          },
        },
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to create product: ${error}`);
  }
}
