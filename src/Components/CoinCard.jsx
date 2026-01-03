import { Link } from "react-router-dom"

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="my-2 p-6 bg-black/80 hover:bg-black hover:shadow-[0_0_30px_rgba(255,0,255,0.5),inset_0_0_30px_rgba(255,0,255,0.1)] hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-magenta-500 hover:border-pink-400 flex flex-col items-center justify-center space-y-3 relative group">
 
        <div className="absolute top-2 left-2 text-magenta-400 font-mono text-xs">[</div>
        <div className="absolute top-2 right-2 text-magenta-400 font-mono text-xs">]</div>
        <div className="absolute bottom-2 left-2 text-magenta-400 font-mono text-xs">[</div>
        <div className="absolute bottom-2 right-2 text-magenta-400 font-mono text-xs">]</div>

        <img
          className="h-20 w-20 group-hover:drop-shadow-[0_0_15px_rgba(255,0,255,0.8)] transition-all duration-300"
          src={coin?.large || "/placeholder.svg"}
          alt={coin?.name}
        />
        <h1 className="text-center font-bold text-xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 tracking-wide">
          {coin?.name}
        </h1>
        <h2 className="text-center text-pink-400 font-mono tracking-widest uppercase text-sm">&gt; {coin?.symbol}</h2>
      </div>
    </Link>
  )
}

export default CoinCard
