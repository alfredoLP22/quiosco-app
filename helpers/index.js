export const formatearMoneda = (precio) => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    precio
  ); // '$1
};
