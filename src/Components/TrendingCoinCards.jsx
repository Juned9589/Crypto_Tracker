import { Link } from "react-router-dom"

const TrendingCoinCards = ({ coin }) => {
  if (!coin || !coin.item) {
    return null
  }

  return (
    <Link to={`/coin/${coin.item.id}`}>
      <div className="my-2 p-6 bg-black/80 hover:bg-black hover:shadow-[0_0_30px_rgba(0,255,255,0.5),inset_0_0_30px_rgba(0,255,255,0.1)] hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-cyan-500 hover:border-green-400 flex flex-col items-center justify-center space-y-3 relative group">
       
        <div className="absolute top-2 left-2 text-cyan-400 font-mono text-xs">[</div>
        <div className="absolute top-2 right-2 text-cyan-400 font-mono text-xs">]</div>
        <div className="absolute bottom-2 left-2 text-cyan-400 font-mono text-xs">[</div>
        <div className="absolute bottom-2 right-2 text-cyan-400 font-mono text-xs">]</div>

        <img
          className="h-20 w-20 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all duration-300"
          src={coin.item.large || "/placeholder.svg"}
          alt={coin.item.name}
        />
        <h1 className="text-center font-bold text-xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 tracking-wide">
          {coin.item.name}
        </h1>
        <h2 className="text-center text-green-400 font-mono tracking-widest uppercase text-sm">
          &gt; {coin.item.symbol}
        </h2>
      </div>
    </Link>
  )
}

export default TrendingCoinCards
