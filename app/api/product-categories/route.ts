import { NextResponse } from "next/server";
import { PrismaClient, ProductCategory } from "@/generated/prisma";

const prisma = new PrismaClient();

const validateCategory = (category: ProductCategory) => {
  if (!category.label) {
    return { succes: false, message: "Label is required", status: 400 };
  }

  return null;
};

const validateCategoryLabel = async (label: string) => {
  const existingLabel = await prisma.productCategory.findFirst({
    where: {
      label: label,
    },
  });

  if (existingLabel) {
    return { success: false, message: `Label is already in use`, status: 409 };
  }

  return null;
};

const validateCategoryId = async (categoryId: string) => {
  const existingCategoryId = await prisma.productCategory.findUnique({
    where: {
      id: categoryId,
    },
    select: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!existingCategoryId) {
    return { success: false, message: `Category ID not found`, status: 404 };
  }

  if (existingCategoryId.products.length) {
    return {
      succes: false,
      message: `Сategory cannot be deleted because there is a list of products`,
      status: 403,
    };
  }

  return null;
};

export async function GET() {
  try {
    const response = await prisma.productCategory.findMany({
      select: {
        id: true,
        label: true,
        products: {
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
    throw new Error(`Failed to fetch product categories: ${error}`);
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ProductCategory;
    const { label, description } = body;

    const validationError = validateCategory(body);
    if (validationError) {
      return NextResponse.json(validationError, {
        status: validationError.status,
      });
    }

    const labelError = await validateCategoryLabel(label);
    if (labelError) {
      return NextResponse.json(labelError, {
        status: labelError.status,
      });
    }

    const response = await prisma.productCategory.create({
      data: {
        label: label,
        description: description,
      },
      select: {
        id: true,
        label: true,
      },
    });
    return NextResponse.json({ succes: true, data: response }, { status: 201 });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to create product categories: ${error}`);
  }
}

export async function PATCH(req: Request) {
  try {
    const body = (await req.json()) as ProductCategory;
    const { id, label, description } = body;

    const validationError = validateCategory(body);
    if (validationError) {
      return NextResponse.json(validationError, {
        status: validationError.status,
      });
    }

    const categoryIdError = await validateCategoryId(id);
    if (categoryIdError) {
      return NextResponse.json(categoryIdError, {
        status: categoryIdError.status,
      });
    }

    const labelError = await validateCategoryLabel(label);
    if (labelError) {
      return NextResponse.json(labelError, {
        status: labelError.status,
      });
    }

    const response = await prisma.productCategory.update({
      where: {
        id,
      },
      data: {
        label,
        description,
      },
      select: {
        id: true,
        label: true,
        description: true,
      },
    });
    return NextResponse.json({ succes: true, data: response }, { status: 200 });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to update product category: ${error}`);
  }
}

export async function DELETE(req: Request) {
  try {
    const body = (await req.json()) as ProductCategory;
    const { id } = body;

    const categoryIdError = await validateCategoryId(id);
    if (categoryIdError) {
      return NextResponse.json(categoryIdError, {
        status: categoryIdError.status,
      });
    }

    await prisma.productCategory.delete({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({ succes: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to delete product: ${error}`);
  }
}
