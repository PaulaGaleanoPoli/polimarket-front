import React, { useState } from "react";
import { crearProducto } from "../services/api";

function ProductoForm({ refrescar }) {

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    stock: ""
  });

  const guardar = async () => {

    if (!form.nombre || !form.precio || !form.stock) {
      alert("Todos los campos son obligatorios");
      return;
    }

    await crearProducto({
      nombre: form.nombre,
      precio: parseFloat(form.precio),
      stock: parseInt(form.stock)
    });

    setForm({ nombre: "", precio: "", stock: "" });
    refrescar();
  };

  return (
    <div className="card">
      <h3>Crear Producto</h3>

      <input
        placeholder="Nombre"
        value={form.nombre}
        onChange={e => setForm({ ...form, nombre: e.target.value })}
      />

      <input
        placeholder="Precio"
        type="number"
        value={form.precio}
        onChange={e => setForm({ ...form, precio: e.target.value })}
      />

      <input
        placeholder="Stock"
        type="number"
        value={form.stock}
        onChange={e => setForm({ ...form, stock: e.target.value })}
      />

      <button className="btn-success" onClick={guardar}>
        Guardar Producto
      </button>
    </div>
  );
}

export default ProductoForm;