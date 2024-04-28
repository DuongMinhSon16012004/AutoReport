escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
    createHTML: (to_escape) => to_escape
})

var input = "";
var allQues = document.querySelectorAll('.o3Dpx .Qr7Oae');
var lengthAllQues = allQues.length;
for (var i = 0; i < lengthAllQues; i++) {
    var inputTemp = "";
    var ques = allQues[i];

    //input single ques
    var allAns1 = ques.querySelectorAll('.nWQGrd.zwllIb:not(.zfdaxb)');
    var length1 = allAns1.length;
    if (length1 != 0) {
        for (var j = 0; j < length1; j++) {
            inputTemp += `<input no="${j}" type="radio">`
        }
        input += `
    <div class="menu-ques single">
        <label class="menu-ques-number">${(i + 1).toString().padStart(2, "0")}</label>
        <div class="menu-ques-input">${inputTemp}</div>       
    </div>`
    }

    // checkbox
    var allAns2 = ques.querySelectorAll('.eBFwI:not(.RVLOe)');
    var length2 = allAns2.length;
    if (length2 != 0) {
        for (var j = 0; j < length2; j++) {
            inputTemp += `<input no="${j}" type="radio">`
        }
        input += `
    <div class="menu-ques checkbox">
        <label class="menu-ques-number">${(i + 1).toString().padStart(2, "0")}</label>
        <div class="menu-ques-input">${inputTemp}</div>       
    </div>`
    }

    // input mutiple ques
    var allAns3 = ques.querySelectorAll('.gTGYUd .lLfZXe.fnxRtf.EzyPc');
    var length3 = allAns3.length;
    if (length3 != 0) {
        for (ans3 of allAns3) {
            var temp = "";
            var ans3Detail = ans3.querySelectorAll('.Od2TWd')
            var length3Detail = ans3Detail.length;
            for (var k = 0; k < length3Detail; k++) {
                temp += `<input no="${k}" type="radio">`
            }
            inputTemp += `<div class="menu-ques-muiltiple">${temp}</div>`
        }
        input += `
    <div class="menu-ques mutiple">
        <label class="menu-ques-number">${(i + 1).toString().padStart(2, "0")}</label>
        <div class="menu-ques-input">${inputTemp}</div>       
    </div>`
    }



}

const menuCount = localStorage.getItem('EXTENSION_COUNT') != null ? localStorage.getItem('EXTENSION_COUNT') : '';
const menu = document.querySelector('div[jscontroller="rYNGv"]');
const html = escapeHTMLPolicy.createHTML(`
    <div class="menu">
        <form action="">
            <div class="menu-count">${menuCount}</div>
            <div class="menu-header">
                <h3>MENU</h3>
            </div>
            <div class="menu-content">
                <div class="menu-number">
                    <input type="number" min="1" placeholder="Number">
                </div>
                <div class="menu-input">${input}</div>
            </div>
            <div class="menu-submit">
                <button type="button">SUBMIT</button>
                <div class="menu-save" style="display: none;margin-top: 10px">Save Successfully!</div>
            </div>
        </form>
    </div>
`);
menu.outerHTML = html


const radioButtons = document.querySelectorAll('.menu-ques input[type="radio"]');

// Add click event listener to each radio button
radioButtons.forEach(radioButton => {
    if(radioButton.checked) {
        radioButton.addEventListener('click', () => {
            radioButton.checked = false;
        });
    };
  });