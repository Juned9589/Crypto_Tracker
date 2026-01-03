export const CoinReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRENDING_COINS":
      return {
        ...state,
        TrendingCoins: action.payload,
      }
    case "SEARCH_COINS":
      return {
        ...state,
        searchedCoins: action.payload,
      }
    case "FETCH_COIN":
      return {
        ...state,
        coin: action.payload,
      }

    default:
      return state
  }
}
