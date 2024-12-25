'use server';

// import { PrismaClient } from "@prisma/client";
import  {prisma} from "@/db/prisma";

import { convertToPlainObj } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "../constants";

// Get the list of all the products
export async function getLatestProduct() {
    // const prisma = new PrismaClient();
    const data = await prisma.product.findMany({ take: LATEST_PRODUCT_LIMIT, orderBy: { createdAt: 'desc' } });
    return convertToPlainObj( data);
}

// Get single product by its slug
export async function getProductBySlug(slug: string) {
    return prisma.product.findFirst({
        where: {slug:slug}
    });
}