import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  // Checking if prisma is interacting with my DB [DEBUG]
  // const create = await prisma.user.create({
  //   data: {
  //     firstName: 'Yeasin',
  //     lastName: 'Arafath',
  //     address: 'Tongi',
  //     phone: 1984715553,
  //     // email is unique, change after every seed
  //     email: 'yeasinw@eaw.com',
  //     password: 'patapata',
  //     role: 'ADMIN',
  //   },
  // });
  // console.log({ create });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
