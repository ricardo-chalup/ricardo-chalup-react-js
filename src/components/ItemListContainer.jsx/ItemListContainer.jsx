import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


export const ItemListContainer = (props) => {

    const onAdd = (quantity) => {
        console.log (`Compraste ${quantity} unidades `);
    }

    return (
        <>
        <h1> {props.texto} </h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
        

    );
}

export default ItemListContainer;