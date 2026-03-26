import React, { useState } from "react";
import { registrarVenta } from "../services/api";

function VentaForm({ productos, refrescar }) {

  const [form, setForm] = useState({
    productoId: "",
    cantidad: ""
  });

  const vender = async () => {

    if (!form.productoId || !form.cantidad) {
      alert("Seleccione producto y cantidad");
      return;
    }

    const producto = productos.find(p => p.id === Number(form.productoId));

    if (!producto) {
      alert("Producto inválido");
      return;
    }

    if (producto.stock < form.cantidad) {
      alert("Stock insuficiente");
      return;
    }

    await registrarVenta(form.productoId, form.cantidad);

    setForm({ productoId: "", cantidad: "" });
    refrescar();
  };

  return (
    <div className="card">
      <h3>Registrar Venta</h3>

      <select
        value={form.productoId}
        onChange={e => setForm({ ...form, productoId: e.target.value })}
      >
        <option value="">Seleccione un producto</option>

        {productos.map(p => (
          <option key={p.id} value={p.id}>
            {p.nombre} (Stock: {p.stock})
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Cantidad"
        value={form.cantidad}
        onChange={e => setForm({ ...form, cantidad: e.target.value })}
      />

      <button onClick={vender}>
        Registrar Venta
      </button>
    </div>
  );
}

export default VentaForm;