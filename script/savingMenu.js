const btn = document.querySelector('.menu-submit')
const save = document.querySelector('.menu-save');
btn.addEventListener('click', () => {

    if (document.querySelector('.menu-number input').value == '') {
        save.innerHTML = 'Please input number!';
        save.style.display = 'block';
        save.style.color = 'red';
    } else {
        var allMenuQues = document.querySelectorAll('.menu-ques');
        var lengthAllMenuQues = allMenuQues.length;
        for (var i = 0; i < lengthAllMenuQues; i++) {
            var ques = allMenuQues[i];
            //input single ques
            if (ques.classList.contains('single')) {
                var inputQues = ques.querySelectorAll('input');
                var allValue = [];
                for (var j = 0; j < inputQues.length; j++) {
                    if (inputQues[j].checked) allValue.push(inputQues[j].getAttribute('no'));
                }
                localStorage.setItem(`EXTENSION_QUES${i}`, allValue);
            }

            // checkbox
            if (ques.classList.contains('checkbox')) {
                var inputQues = ques.querySelectorAll('input');
                var allValue = [];
                for (var j = 0; j < inputQues.length; j++) {
                    if (inputQues[j].checked) allValue.push(inputQues[j].getAttribute('no'));
                }
                localStorage.setItem(`EXTENSION_QUES${i}`, allValue);
            }

            // input mutiple ques
            if (ques.classList.contains('mutiple')) {
                var quesDetail = ques.querySelectorAll('.menu-ques-muiltiple');
                for (var j = 0; j < quesDetail.length; j++) {
                    var inputQues = quesDetail[j].querySelectorAll('input');
                    var allValue = [];
                    for (var k = 0; k < inputQues.length; k++) {
                        if (inputQues[k].checked) allValue.push(inputQues[k].getAttribute('no'));
                    }
                    localStorage.setItem(`EXTENSION_QUES${i}_${j}`, allValue);
                }
            }
        }


        localStorage.setItem('EXTENSION_NUMBER', document.querySelector('.menu-number input').value)
        if (localStorage.getItem("EXTENSION_COUNT") == null) {
            localStorage.setItem("EXTENSION_COUNT", 0);
        }
        if (localStorage.getItem("EXTENSION_RUN") == null) {
            localStorage.setItem("EXTENSION_RUN", true);
        }
        save.innerHTML = 'Save Successfully!';
        save.style.display = 'block'
        save.style.color = 'green'
    }
})