import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { TiDeleteOutline } from 'react-icons/ti'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from '../../Services/Firebase';
import { FinishForm } from '../FinishForm/FinishForm';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';


export const Cart = () => {

    const { cart, RemoveProduct, GetTotal, ClearCart } = useContext(CartContext)

    function enviarMail(email, detalle, nombre, apellido, direccion, idOrden) {

        const det = detalle.map((d) => { return "<p> -" + d.cantidad + " " + d.nombre + " | $" + d.precio * d.cantidad + "</p>" })
        let values = {
            nombreCompleto: nombre + " " + apellido,
            direccion: direccion,
            detalle: det,
            mail_destino: email,
            idOrden: idOrden,
            total: GetTotal()
        }
        console.log(values)
        emailjs.send('service_oq93onq', 'template_dczlxzm', values, "Svbo-mKAXRJUpa865")
    }

    const CreateOrder = ({ nombre, apellido, email, direccion }) => {
        // Detalle de la compra
        const Orden = {
            comprador: {
                nombre: nombre,
                apellido: apellido,
                email: email,
                direccion: direccion
            },
            productos: cart,
        }

        // Crear Orden
        let order = {
            total: GetTotal(),
            items: Orden,
            date: serverTimestamp()
        };

        // Crear Orden en Firebase
        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderFirestore()
            .then(result => {
                toast.success("Orden Creada Correctamente, se enviara un correo con el detalle de la compra");
                enviarMail(email, cart, nombre, apellido, direccion, result.id);
                ClearCart();
            })
            .catch(err => toast.error("Error al crear la orden"));

        // Actualizar Stock de Productos

        cart.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad)
            });
        });
    }

    return (
        <>
            <div className='text-center mt-4'>
                {cart === undefined ? <h1>No hay productos en el carrito</h1> : cart.length === 0 ? <h1>No hay productos en el carrito</h1> :
                    <div>
                        <h1>Detalle de su pedido:</h1>
                        <div className='d-flex justify-content-center'>
                            <div className='d-flex justify-content-center table-responsive col-10 mt-5'>
                                <table className='table '>
                                    <thead>
                                        <tr className='row align-items-center'>
                                            <th className='col'></th>
                                            <th className='col'>Producto</th>
                                            <th className='col'>Cantidad</th>
                                            <th className='col'>Precio Unitario</th>
                                            <th className='col'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {cart.map(product =>
                                            <tr key={product.id} className="navbarFont row align-items-center">
                                                <td className='col'><button className='btn' onClick={() => { RemoveProduct(product.id) }}><TiDeleteOutline size={30} color="#0b5b67" /></button></td>
                                                <td className='col'>{product.nombre}</td>
                                                <td className='col'>{product.cantidad}</td>
                                                <td className='col'>{product.precio}</td>
                                                <td className='col'>{product.precio * product.cantidad}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className='btn buttonCartBackground text-white mt-3' onClick={() => { ClearCart() }}>Limpiar Carrito</button>
                        <div>
                            <FinishForm CreateOrder={CreateOrder} />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
