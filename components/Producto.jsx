import Image from "next/image";
import React from "react";
import { formatearMoneda } from "@/helpers";

function Producto({ producto }) {
  const { nombre, precio, imagen } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        width={400}
        height={500}
        alt={`Producto ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">{formatearMoneda(precio)}</p>
      </div>
    </div>
  );
}

export default Producto;
