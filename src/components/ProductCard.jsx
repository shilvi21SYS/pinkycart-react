
function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.name}
                className="product-image"
            />

            <div className="product-info">
                <p className="product-brand">{product.brand}</p>

                <h3>{product.name}</h3>

                <p className="product-price">
                    Rp {product.price.toLocaleString("id-ID")}
                </p>

                <button
                    className="button-addCart"
                    onClick={() => onAddToCart(product)}
                >
                    <span className="button-icon">+</span>
                    <span>Tambah ke Keranjang</span>
                </button>
            </div>
        </div>
    )
}

export default ProductCard
