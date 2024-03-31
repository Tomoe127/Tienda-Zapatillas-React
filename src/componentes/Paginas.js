import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";
import { ProductoDetalles } from "./Productos/ProductoDetalles";

export const Paginas = () => {
  return (
    <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<ProductosLista />} />
          <Route path="/Productos/:id" element={<ProductoDetalles />} />
    </Routes>
  )
}