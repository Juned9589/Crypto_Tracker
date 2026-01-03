import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm py-4 px-8 shadow-[0_0_30px_rgba(0,255,255,0.3)] border-b-2 border-cyan-500 flex items-center justify-between font-mono">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 hover:from-green-400 hover:to-cyan-400 transition-all duration-300 tracking-wider">
          [CRYPTO_TRACKER v2.0]
        </h1>
      </Link>
      <Link
        to={"/Search"}
        className="bg-gradient-to-r from-green-500 to-cyan-500 font-bold text-black rounded-none cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-300 p-2 px-6 uppercase tracking-wider border-2 border-cyan-400"
      >
        &gt; Search_Coins
      </Link>
    </nav>
  )
}

export default Navbar
