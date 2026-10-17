
function Header({ cartCount }) {
    return (
    <header className="header">
    <div className="header-brand">
        <h1>PinkyCart</h1>
        <p>Pengelola Keranjang Belanja Imut Kamu ^-^</p>
    </div>

    <div className="header-cart">
        Keranjang ({cartCount})
    </div>
    </header>
)
}

export default Header
