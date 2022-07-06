import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

export const FinishForm = ({ CreateOrder }) => {
    // Valores iniciales de los inputs.
    const initialValues = {
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
    }
    // Esquema de validaciones para los inputs.
    const validationSchema = Yup.object({
        nombre: Yup.string().min(3, "Minimo 3 Caracteres").required('Nombre Requerido'),
        apellido: Yup.string().min(3, "Minimo 3 Caracteres").required('Apellido Requerido'),
        email: Yup.string().email('Email Invalido').required('Email Requerido'),
        direccion: Yup.string().min(3, "Minimo 3 Caracteres").required('Direccion Requerida'),
    })


    return (
        <>  <h4 className='mt-4'>Completa el formulario para finalizar la compra...</h4>
            <Formik initialValues={initialValues} validationSchema={validationSchema}
                onSubmit={async (values, formikBag) => {
                    try {
                        CreateOrder(values)
                    } catch (error) {

                    }
                }}>
                <Form className='d-flex justify-content-center mt-2'>
                    <div className='mt-2 col-5'>
                        <div className=''>
                            <Field name="nombre"
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                            <ErrorMessage
                                name="nombre"
                                component="div"
                                className="field-error text-danger"
                            />
                        </div>
                        <div className='mt-2'>
                            <Field name="apellido"
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                            />
                            <ErrorMessage
                                name="apellido"
                                component="div"
                                className="field-error text-danger"
                            />
                        </div>
                        <div className='mt-2'>
                            <Field name="email"
                                type="text"
                                className="form-control"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="field-error text-danger"
                            />
                        </div>
                        <div className='mt-2'>
                            <Field name="direccion"
                                type="text"
                                className="form-control"
                                placeholder="Dirección"
                            />
                            <ErrorMessage
                                name="direccion"
                                component="div"
                                className="field-error text-danger"
                            />
                        </div>
                        <button className='btn buttonCartBackground text-white mt-3' type='submit' >Finalizar Compra</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
