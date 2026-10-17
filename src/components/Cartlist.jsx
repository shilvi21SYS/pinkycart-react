
function CartList({ cart, onDeleteProduct }) {
    const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
)

return (
    <div className="cart-list">
        <h3>Daftar Belanja</h3>
        
        {cart.length === 0 ? (
        <p className="empty-cart">
        Belum ada produk di keranjang.
        </p>
        ) : (
        <div className="cart-items">
            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <div className="cart-item-info">
                <h4>{item.name}</h4>

                <p>
                    {item.quantity} x Rp{' '}
                    {item.price.toLocaleString('id-ID')}
                </p>

                <strong>
                    Rp{' '}
                  {(item.price * item.quantity).toLocaleString('id-ID')}
                </strong>
                </div>

            <button type="button" className="delete-btn" onClick={() => onDeleteProduct(item.id)}>
                Hapus
            </button>
            </div>
        ))}
        </div>
    )}
    <div className="cart-total">
        <span>Total Belanja</span>
        <strong>
            Rp {totalPrice.toLocaleString('id-ID')}
        </strong>
        </div>
    </div>
)
}

export default CartList
