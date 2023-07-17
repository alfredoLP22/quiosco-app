import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const ordenActualizada = await prisma.orden.update({
      where: { id: +req.query.id },
      data: { estado: true },
    });

    res.status(200).json(ordenActualizada);
  }
}
