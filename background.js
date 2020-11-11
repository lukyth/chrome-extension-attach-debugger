"use strict"

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete" && tab.active) {
    console.log("Start attaching debugger...")
    chrome.debugger.attach({ tabId }, "1.3", () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message)
      } else {
        console.log("Debugger attached")
      }
    })
  }
})

console.log("Chrome Extension Attach Debugger: background.js started")
