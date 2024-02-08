
//Citi click to export transactions
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

//Click down arrow for export
$("#export-ums-tooltip-cta").click()
 await sleep(5000)


// Click Export
$("#ums-transaction-tile > ums-export-modal > ums-modal > cds-modal-dialog > div > div.cds-modal.cds-modal-fade.cds-modal-show > div.cds-modal-dialog > div > div.export-modal-component.ng-star-inserted > div.ums-modal-footer > div > button.cds-cta.export-button.ums-footer-primary-button.cds-cta-md.cds-cta-primary").click()
await sleep(5000)

// Click OK
$("#ums-transaction-tile > ums-export-modal > ums-modal > cds-modal-dialog > div > div.cds-modal.cds-modal-fade.cds-modal-show > div.cds-modal-dialog > div > div.export-modal-component.ng-star-inserted > div.ums-modal-footer > button").click()
