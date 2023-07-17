import Image from "next/image";
import React from "react";
import { formatearMoneda } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

function Producto({ producto }) {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        width={400}
        height={500}
        alt={`Producto ${nombre}`}
        style={{ width: "auto", height: "auto", aspectRatio: "auto" }}
        priority
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearMoneda(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleSetProducto(producto), handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Producto;
