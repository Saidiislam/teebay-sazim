import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  // Checking if prisma is interacting with my DB [DEBUG]
  const createData = await prisma.product.create({
    data: {
      title: 'Hard Drive',
      description: 'Hard Drive bad for health',
      price: 3950,
    },
  });
  console.log({ createData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
