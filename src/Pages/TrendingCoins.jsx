"use client"

import { useContext, useEffect } from "react"
import TrendingCoinCards from "../Components/TrendingCoinCards"
import { fetchTrendingCoins } from "../Context/CoinService"
import CoinContext from "../Context/CoinContext"

const TrendingCoins = () => {
  const { dispatch, TrendingCoins } = useContext(CoinContext)

  const getTrendingCoins = async () => {
    const data = await fetchTrendingCoins()
    dispatch({
      type: "FETCH_TRENDING_COINS",
      payload: data,
    })
  }

  useEffect(() => {
    getTrendingCoins()
  }, [])

  if (!TrendingCoins || TrendingCoins.length === 0) {
    return (
      <h1 className="text-center text-green-400 text-2xl font-bold font-mono tracking-wider animate-pulse">
        [LOADING...]
      </h1>
    )
  }

  return (
    <>
      <h1 className="text-center font-bold text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 mb-8 tracking-widest drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
        &gt;&gt; TRENDING_COINS &lt;&lt;
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-2 mb-6">
        {TrendingCoins.map((coin, index) => (
          <TrendingCoinCards key={index} coin={coin} />
        ))}
      </div>
    </>
  )
}

export default TrendingCoins
