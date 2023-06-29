import Image from "next/image";
import { Inter } from "next/font/google";
import { PrismaClient } from "@prisma/client";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1>Dd</h1>
    </Layout>
  );
}

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();
//   const categorias = await prisma.categoria.findMany();
//   return {
//     props : {
//       categorias
//     }
//   }
// }
