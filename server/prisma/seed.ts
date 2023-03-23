import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // await prisma.product.deleteMany();

  // Checking if prisma is interacting with my DB [DEBUG]
  const create = await prisma.user.create({
    data: {
      username: 'Test',
      email: 'test@gmail.com',
      products: {
        create: [
          {
            title: 'HELLO I AM TEST',
            description: 'TEST TEST',
            price: 8765,
            categories: ['ELECTRONICS', 'FURNITURE'],
          },
          {
            title: 'HELLO I AM TEST 2',
            description: 'TEST TEST 2',
            price: 8765,
            categories: ['ELECTRONICS', 'FURNITURE'],
          },
        ],
      },
    },
  });
  console.log({ create });

  const userWithProducts = await prisma.user.findUnique({
    where: { id: 1 },
    include: {
      products: true,
    },
  });
  console.log({ userWithProducts });

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
