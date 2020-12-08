chrome.runtime.onInstalled.addListener(() => {
    let completeFn = (results) => {
        chrome.storage.local.set({ data: results.data });
    }

    let config = {
        download: true,
        header: false,
        complete: completeFn,
        skipEmptyLines: true
    }

    Papa.parse(chrome.extension.getURL('ethicalhq.csv'), config);
});