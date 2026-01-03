import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchCoins from "./Pages/SearchCoins"
import CoinDetails from "./Pages/CoinDetails"
import PageNotFound from "./PageNotFound"
import TrendingCoins from "./Pages/TrendingCoins"

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
        <Navbar />
        <div className="p-8 pt-24">
          <Routes>
            <Route path="/Search" element={<SearchCoins />} />
            <Route path="/coin/:id" element={<CoinDetails />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<TrendingCoins />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
