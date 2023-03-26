import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Checking if prisma is interacting with my DB [DEBUG]
  const create = await prisma.user.create({
    data: {
      firstName: 'Walter',
      lastName: 'Hartwell White',
      address: '308 Negra Arroyo Lane, Albuquerque, New Mexico. 87104',
      phone: 505117898,
      // email is unique, change after every seed
      email: 'chemistryislove@white.com',
      password: 'saymyname',
      role: 'ADMIN',
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
