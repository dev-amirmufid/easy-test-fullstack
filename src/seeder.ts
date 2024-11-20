import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed data for customers
  await prisma.customer.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nama: 'Roy',
      alamat: 'Paris Street',
      nohp: '+6282354672673',
      email: 'roy@mail.com',
    },
  });

  await prisma.customer.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      nama: 'Bambang',
      alamat: 'Bungalow Street',
      nohp: '+628746536478',
      email: 'bambang@mail.com',
    },
  });

  // Seed data for orders
  const orders = [
    { id: 1, customer_id: 1, order_date: new Date('2023-04-02') },
    { id: 2, customer_id: 2, order_date: new Date('2023-04-03') },
    { id: 3, customer_id: 1, order_date: new Date('2023-04-10') },
    { id: 4, customer_id: 1, order_date: new Date('2023-05-15') },
    { id: 5, customer_id: 2, order_date: new Date('2023-06-20') },
    { id: 6, customer_id: 2, order_date: new Date('2023-05-15') },
    { id: 7, customer_id: 2, order_date: new Date('2023-05-15') },
    { id: 8, customer_id: 2, order_date: new Date('2023-06-15') },
    { id: 9, customer_id: 2, order_date: new Date('2023-06-15') },
    { id: 10, customer_id: 1, order_date: new Date('2023-05-15') },
  ];

  await prisma.order.deleteMany({
    where: {
      id: {
        in: orders.map((order) => order.id),
      },
    },
  });
  await prisma.order.createMany({
    data: orders
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
