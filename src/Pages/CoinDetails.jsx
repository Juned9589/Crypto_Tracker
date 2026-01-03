"use client"

import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCoin } from "../Context/CoinService"
import CoinContext from "../Context/CoinContext"

const CoinDetails = () => {
  const [loading, setLoading] = useState(false)
  const { dispatch, coin } = useContext(CoinContext)

  const { id } = useParams()

  const getCoin = async (id) => {
    const data = await fetchCoin(id)
    dispatch({
      type: "FETCH_COIN",
      payload: data,
    })
  }

  useEffect(() => {
    setLoading(true)
    getCoin(id)
    setLoading(false)
  }, [id])

  if (!coin || loading) {
    return (
      <h1 className="my-10 text-center font-bold text-2xl font-mono text-cyan-400 animate-pulse tracking-wider">
        [LOADING_DATA...]
      </h1>
    )
  }

  const priceChange24h = coin?.market_data?.price_change_percentage_24h || 0
  const isPositive = priceChange24h >= 0

  return (
    <div>
      <div className="p-8 bg-black/80 border-2 border-cyan-500 shadow-[0_0_40px_rgba(0,255,255,0.4)] flex items-center justify-center flex-col relative">
      
        <div className="absolute top-3 left-3 text-cyan-400 font-mono text-lg">[</div>
        <div className="absolute top-3 right-3 text-cyan-400 font-mono text-lg">]</div>
        <div className="absolute bottom-3 left-3 text-cyan-400 font-mono text-lg">[</div>
        <div className="absolute bottom-3 right-3 text-cyan-400 font-mono text-lg">]</div>

        <img
          className="my-6 h-32 w-32 drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]"
          src={coin?.image?.large || "/placeholder.svg"}
          alt={coin?.name}
        />

        <h1 className="text-5xl font-bold mt-4 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-magenta-400 tracking-wider">
          {coin?.name}
        </h1>

        <div className="flex w-full items-center justify-around flex-col my-8">
          <div className="flex justify-between w-full p-8 border-y-2 border-green-500/50 my-4">
            <h2 className="text-2xl font-semibold font-mono text-green-400 tracking-widest uppercase">
              [{coin?.symbol}]
            </h2>
            <div className="flex flex-col items-end">
              <h2 className="font-bold text-3xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,0,0.8)]">
                ₹ {coin?.market_data?.current_price.inr?.toLocaleString()}
              </h2>
              <span className={`font-mono text-sm mt-2 ${isPositive ? "text-green-400" : "text-red-400"}`}>
                {isPositive ? "▲" : "▼"} {Math.abs(priceChange24h).toFixed(2)}% (24h)
              </span>
            </div>
          </div>

          {coin?.description?.en && (
            <div className="w-full p-6 bg-purple-950/30 border border-magenta-500/50">
              <h3 className="text-white font-mono font-bold mb-3 tracking-wider">&gt; DESCRIPTION:</h3>
              <p
                className="text-sm text-cyan-300 font-mono leading-relaxed"
                dangerouslySetInnerHTML={{ __html: coin?.description?.en.slice(0, 500) + "..." }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoinDetails
