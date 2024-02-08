
//Chase 301 click to export transactions
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

//Click down arrow for export
document.querySelector("#downloadActivityIcon").shadowRoot.querySelector("span > button").click()
await sleep(5000)


// Click Download
document.querySelector("#download").shadowRoot.querySelector("span > button").click()
await sleep(5000)

// Click Return
document.querySelector("#backToAccounts").shadowRoot.querySelector("span > button").click()
