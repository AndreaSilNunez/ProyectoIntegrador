import Item from '../Item/Item';

export default function ItemList({ productos }) {

    return (
        <>
            <div className='row g-4'>
                {
                    productos.map(prod =>
                        <Item
                            key={prod.id}
                            {...prod}
                        />
                    )
                }
            </div>
        </>
    )
}