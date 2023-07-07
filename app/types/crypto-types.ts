export type cryptoItemType = {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: any,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
    explorer: string
}

export type cryptoItemsType = {
    items: cryptoItemType[]
}