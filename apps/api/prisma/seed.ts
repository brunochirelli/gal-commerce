import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const departments = [
  {
    name: "Masculino",
  },
  {
    name: "Feminino",
  },
  {
    name: "Infantil",
  },
  {
    name: "Calçados",
  },
];

const data = Array.from({ length: 100 }).map(() => ({
  name: faker.commerce.productName(),
  price: Number(faker.commerce.price(10, 10000, 2)),
  departmentId: faker.datatype.number({ min: 1, max: 4 }),
}));

async function main() {
  await prisma.department.createMany({ data: departments });
  await prisma.product.createMany({ data });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
