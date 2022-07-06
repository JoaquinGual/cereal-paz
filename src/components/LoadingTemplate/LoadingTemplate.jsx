import React from 'react'
import loadingCupCake from '../../img/loadingcupcake.gif'

export const LoadingTemplate = () => {
    return (
        <div>
            <h3 className='text-center mt-5'>Cargando...</h3>
            <div className='d-flex justify-content-center'>
                <img src={loadingCupCake} alt="loading" />
            </div>
        </div>
    )
}
