const API = "http://localhost:8080/api";

export const getProductos = async () => {
  const res = await fetch(`${API}/productos`);
  return res.json();
};

export const crearProducto = async (producto) => {
  await fetch(`${API}/productos`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(producto)
  });
};

export const registrarVenta = async (productoId, cantidad) => {
  await fetch(`${API}/venta?productoId=${productoId}&cantidad=${cantidad}`, {
    method: "POST"
  });
};

export const getVentas = async () => {
  const res = await fetch(`${API}/ventas`);
  return res.json();
};

export const getVentaById = async (id) => {
  const res = await fetch(`${API}/ventas/${id}`);
  return res.json();
};