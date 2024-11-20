import { Customer, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findCustomersQuery = async (): Promise<Customer[]> => {
  // Query RAW
  const result : Customer[] = await prisma.$queryRaw`SELECT c.* FROM customers c
  JOIN(SELECT customer_id FROM orders GROUP BY customer_id, YEAR(order_date), MONTH(order_date) HAVING COUNT(*) > 2) o ON c.id = o.customer_id;`

  return result;
};
