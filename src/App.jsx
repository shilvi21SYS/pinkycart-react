
import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import CartList from './components/CartList'
import './App.css'

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("pinkycart")

      return savedCart ? JSON.parse(savedCart): []
    } catch {
      return[]
    }
  })

  useEffect(() => {
    localStorage.setItem('pinkycart', JSON.stringify(cart))
  }, [cart]) 

  // Menambahkan produk baru
  const addProduct = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  // Menghapus produk
  const deleteProduct = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    )
  }

  // Menghitung jumlah barang
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <div className="app">
      <Header cartCount={cartCount} />

      <main className="main-content">
        <h2>Pengelola Keranjang Belanja</h2>
        <p>
          Catat produk belanjaanmu dengan mudah,
          cepat, dan praktis.
        </p>

        <ProductForm onAddProduct={addProduct} />

        <CartList
          cart={cart}
          onDeleteProduct={deleteProduct}
        />
      </main>
    </div>
  )
}

export default App
