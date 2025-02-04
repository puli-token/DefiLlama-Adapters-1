
async function sumERC4626Vaults({ api, vaults }) {
  const tokens = await api.multiCall({  abi: 'address:asset', calls: vaults})
  const bals = await api.multiCall({  abi: 'uint256:totalAssets', calls: vaults})
  api.addTokens(tokens, bals)
  return api.getBalances()
}

function sumERC4626VaultsExport({ vaults, ...options}) {
  return async (timestamp, ethBlock, chainBlocks, { api }) => {
    return sumERC4626Vaults({ ...options, api, vaults })
  }
}

module.exports = {
  sumERC4626Vaults,
  sumERC4626VaultsExport,
}