// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector('.menu-submit').addEventListener('click', () => {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id,
//                 {
//                     GREAT: "Hello"
//                 });
//         });

//     })
// })

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
})