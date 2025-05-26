import { NextResponse } from "next/server";
import { PrismaClient, Products } from "@/generated/prisma";

const prisma = new PrismaClient();

const validateProduct = (product: Products) => {
  if (!product.label) {
    return { success: false, message: `Label is required`, status: 400 };
  }

  if (typeof product.price !== "number" || product.price <= 0) {
    return {
      success: false,
      message: `Price must be a positive number`,
      status: 400,
    };
  }

  return null;
};

const validateCategoryId = async (categoryId: string) => {
  const existingCategoryId = await prisma.productCategory.findUnique({
    where: {
      id: categoryId,
    },
  });

  if (!existingCategoryId) {
    return { success: false, message: `Category ID not found`, status: 404 };
  }

  return null;
};

const validateProductLabel = async (label: string) => {
  const existingProduct = await prisma.products.findFirst({
    where: {
      label: label,
    },
  });

  if (existingProduct) {
    return { success: false, message: `Label is already in use`, status: 409 };
  }

  return null;
};

const validateProductId = async (productId: string) => {
  const existingProductId = await prisma.products.findUnique({
    where: {
      id: productId,
    },
  });

  if (!existingProductId) {
    return { success: false, message: `Product ID not found`, status: 404 };
  }

  return null;
};

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
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch products: ${error}`);
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Products;
    const { label, description, price, categoryId } = body;

    const validationError = validateProduct(body);
    if (validationError) {
      return NextResponse.json(validationError, {
        status: validationError.status,
      });
    }

    const categoryIdError = await validateCategoryId(categoryId);
    if (categoryIdError) {
      return NextResponse.json(categoryIdError, {
        status: categoryIdError.status,
      });
    }

    const labelError = await validateProductLabel(label);
    if (labelError) {
      return NextResponse.json(labelError, { status: labelError.status });
    }

    const response = await prisma.products.create({
      data: {
        label: label,
        description: description,
        category: {
          connect: {
            id: categoryId,
          },
        },
        price: price,
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
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to create product: ${error}`);
  }
}

export async function PATCH(req: Request) {
  try {
    const body = (await req.json()) as Products;
    const { id, label, description, price, categoryId } = body;

    const validationError = validateProduct(body);
    if (validationError) {
      return NextResponse.json(validationError, {
        status: validationError.status,
      });
    }

    const categoryIdError = await validateCategoryId(categoryId);
    if (categoryIdError) {
      return NextResponse.json(categoryIdError, {
        status: categoryIdError.status,
      });
    }

    const labelError = await validateProductLabel(label);
    if (labelError) {
      return NextResponse.json(labelError, { status: labelError.status });
    }

    const productIdError = await validateProductId(id);
    if (productIdError) {
      return NextResponse.json(productIdError, {
        status: productIdError.status,
      });
    }

    const response = await prisma.products.update({
      where: {
        id,
      },
      data: {
        label: label,
        description: description,
        price: price,
        categoryId: categoryId,
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

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to product update: ${error}`);
  }
}

export async function DELETE(req: Request) {
  try {
    const body = (await req.json()) as Products;
    const { id } = body;

    const productIdError = await validateProductId(id);
    if (productIdError) {
      return NextResponse.json(productIdError, {
        status: productIdError.status,
      });
    }

    const response = await prisma.products.delete({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to delete product: ${error}`);
  }
}
