
import { useState } from 'react'

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (event) => {
    event.preventDefault()

    const productName = name.trim()
    const productPrice = Number(price)
    const productQuantity = Number(quantity)

    if (
        !productName ||
        !Number.isFinite(productPrice) ||
        productPrice <= 0 ||
        !Number.isInteger(productQuantity) ||
        productQuantity < 1
    ) {
        alert('Masukkan data produk yang valid!')
        return
    }

    const newProduct = {
        id: crypto.randomUUID(),
        name: productName,
        price: productPrice,
        quantity: productQuantity
    }

    onAddProduct(newProduct)

    setName('')
    setPrice('')
    setQuantity(1)
}

return (
    <form className="product-form" onSubmit={handleSubmit}>
        <h3>Tambah Produk</h3>
        <div className="form-group">
        <label htmlFor="product-name">Nama Produk</label>
        <input id="product-name" type="text" placeholder="Masukkan nama produk" value={name} onChange={(e) => setName(e.target.value)} required
        />
        </div>

        <div className="form-group">
        <label htmlFor="product-price">Harga Produk (Rp)</label>
        <input id="product-price" type="number" placeholder="Contoh: 50000" min="1" step="1" value={price} onChange={(e) => setPrice(e.target.value)} required
        />
        </div>

        <div className="form-group">
        <label htmlFor="product-quantity">Jumlah</label>
        <input id="product-quantity" type="number" min="1" step="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required
        />
        </div>
        
        <button type="submit" className="button-addCart">
        <span className="button-icon">+</span>
        Tambah ke Keranjang
        </button>
    </form>
)
}

export default ProductForm
