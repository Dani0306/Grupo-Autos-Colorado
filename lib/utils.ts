export const formatToCOP = (price: number): string => {
  return price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

// formatToCOP(42000000) → $ 42.000.000
