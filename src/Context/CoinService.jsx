export const fetchTrendingCoins = async () => {
  const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
  const data = await response.json()
  return data.coins
}

export const fetchCoin = async (id) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const data = await response.json()
 
  return data
}

export const searchCoin = async (searchTerm) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchTerm}`)
  const data = await response.json()
  return data.coins
}
