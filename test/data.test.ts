import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.BSC_MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3') // DAI Stablecoin
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.BSC_MAINNET, '0xbA2aE424d960c26247Dd6c32edC70B295c744C43') // Dogecoin (DOGE)
    expect(token.decimals).toEqual(8)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.BSC_MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18) // DAI Stablecoin
    const pair = await Fetcher.fetchPairData(WETH[ChainId.BSC_MAINNET], token)
    expect(pair.liquidityToken.address).toEqual('0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449')
  })
})
