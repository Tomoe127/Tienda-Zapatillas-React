import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";


export const ProductoDetalles = () => {
  const value = useContext(DataContext)
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const params = useParams();
  const [url, setUrl] = useState(0);
  let item = 0;

  useEffect(() => {
    productos.forEach(producto => {
      item = 0;
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto)
        setUrl(0)
      }
    })
  }, [params.id, productos])

  return (
    
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
            <p className="nuevo">Nuevo</p>
            <div className="size">
              <select placeholder="tamaño">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>
          <button onClick={()=>addCarrito(detalle.id)} >Añadir al carrito</button>
          
            <img src={detalle.image} alt={detalle.title}/>
          
          <input type="range" min="1" max="36"  />
          <div className="descripcion">
            <p><b>descripcion:</b>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore
              ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia
              repellendus? Illo natus quam eaque impedit omnis pariatur! <br></br>Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita
              asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat
              aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur! 
            </p>
          </div>
          <br/><br/><br/><br/><br/>
        </div>
      }

      <h2 className="relacionados">Productos relacionados</h2>
      <div className='productos'>
        {
          productos.map(producto => {
            if((item < 6 )&&(detalle.category === producto.category)){
              item ++
              return <ProductoItem
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
            />
            }
          })
        }
      </div>
    </>
  )
}