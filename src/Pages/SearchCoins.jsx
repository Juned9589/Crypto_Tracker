"use client"

import { useContext, useState } from "react"
import { searchCoin } from "../Context/CoinService"
import CoinContext from "../Context/CoinContext"
import CoinCard from "../Components/CoinCard"

const SearchCoins = () => {
  const { dispatch, searchedCoins } = useContext(CoinContext)
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!text.trim()) return

    setLoading(true)
    try {
      const data = await searchCoin(text)
      dispatch({
        type: "SEARCH_COINS",
        payload: data,
      })
    } catch (error) {
      console.error("Search error:", error)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <h1 className="text-center text-2xl font-bold font-mono text-green-400 animate-pulse tracking-wider">
        [SEARCHING...]
      </h1>
    )
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="my-4 p-8 bg-black/80 border-2 border-green-500 shadow-[0_0_30px_rgba(0,255,0,0.3)] relative"
      >
        
        <div className="absolute top-2 left-2 text-green-400 font-mono">[</div>
        <div className="absolute top-2 right-2 text-green-400 font-mono">]</div>
        <div className="absolute bottom-2 left-2 text-green-400 font-mono">[</div>
        <div className="absolute bottom-2 right-2 text-green-400 font-mono">]</div>

        <h1 className="text-center my-4 text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 tracking-widest">
          &gt; SEARCH_DATABASE &lt;
        </h1>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="&gt; Enter_Coin_Name..."
          className="bg-black border-2 border-cyan-500 focus:border-green-400 focus:shadow-[0_0_20px_rgba(0,255,0,0.5)] outline-none p-3 w-full text-green-400 font-mono tracking-wide placeholder:text-cyan-600 transition-all duration-300"
        />

        <button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-cyan-500 hover:to-green-500 hover:shadow-[0_0_25px_rgba(0,255,0,0.6)] my-4 text-black font-bold font-mono text-lg p-3 uppercase tracking-widest border-2 border-green-400 transition-all duration-300 hover:scale-[1.02]">
          [EXECUTE_SEARCH]
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-2 mb-6">
        {Array.isArray(searchedCoins) && searchedCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)}
      </div>
    </div>
  )
}

export default SearchCoins
