import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  // Checking if prisma is interacting with my DB [DEBUG]
  const create = await prisma.product.create({
    data: {
      title: 'Example Product',
      description: 'This is an example product',
      price: 2134,
      categories: 'TOYS',
    },
  });

  console.log({ create });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
