import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // await prisma.product.deleteMany();

  // Checking if prisma is interacting with my DB [DEBUG]
  const create = await prisma.product.create({
    data: {
      title: 'Example Product',
      description: 'This is an example product',
      price: 2134,
      categories: ['ELECTRONICS', 'FURNITURE'],
    },
  });
  console.log({ create });

  // const find = await prisma.product.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log({ find });
  // const update = await prisma.product.update({
  //   data: {
  //     categories: ['TOYS', 'ELECTRONICS', 'FURNITURE'],
  //     price: 999999,
  //     description: 'UPDATED',
  //     title: 'UPDATED YEASIN ARTA',
  //   },
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log({ update });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
