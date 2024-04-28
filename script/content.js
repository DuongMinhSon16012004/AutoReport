var count = Number(localStorage.getItem("EXTENSION_COUNT"));
var number = Number(localStorage.getItem("EXTENSION_NUMBER"));
var run = localStorage.getItem("EXTENSION_RUN");
if (Boolean(run) && count < number) {
    var allQues = document.querySelectorAll('.o3Dpx .Qr7Oae');
    for (var index = 0; index < allQues.length; index++) {
        var ques = allQues[index];
        var outputValue = localStorage.getItem(`EXTENSION_QUES${index}`);
        //input single ques
        var allAns1 = ques.querySelectorAll('.nWQGrd.zwllIb:not(.zfdaxb)');
        var length1 = allAns1.length;
        if (length1 != 0) {
            var rand;
            if (outputValue != '') {
                do {
                    rand = Math.floor(Math.random() * length1);
                } while (!outputValue.includes(rand));
            } else rand = Math.floor(Math.random() * length1);
            var ansChoose = allAns1[rand].querySelector('.Od2TWd');
            ansChoose.click();
        }

        // checkbox
        var allAns2 = ques.querySelectorAll('.eBFwI:not(.RVLOe)');
        var length2 = allAns2.length;
        if (length2 != 0) {
            var test = false;
            while (test != true) {
                if (outputValue != '') {
                    for (var i = 0; i < length2; i++) {
                        if (outputValue.includes(i)) {
                            var rand = Math.floor(Math.random() * 2);
                            if (rand == 1) {
                                var ansChoose = allAns2[i].querySelector('.uVccjd.aiSeRd.FXLARc.wGQFbe.BJHAP.oLlshd');
                                ansChoose.click();
                                test = true;
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < length2; i++) {
                        var rand = Math.floor(Math.random() * 2);
                        if (rand == 1) {
                            var ansChoose = allAns2[i].querySelector('.uVccjd.aiSeRd.FXLARc.wGQFbe.BJHAP.oLlshd');
                            ansChoose.click();
                            test = true;
                        }
                    }
                }
            }
        }

        // input mutiple ques
        var allAns3 = ques.querySelectorAll('.gTGYUd .lLfZXe.fnxRtf.EzyPc');
        var length3 = allAns3.length;

        if (allAns3.length != 0) {
            for (var i = 0; i < length3; i++) {
                var ans3 = allAns3[i];
                var outputValue3 = localStorage.getItem(`EXTENSION_QUES${index}_${i}`);
                var ans3Detail = ans3.querySelectorAll('.Od2TWd')
                var length3Detail = ans3Detail.length;
                if (outputValue3 != '') {
                    do {
                        var rand = Math.floor(Math.random() * length3Detail);
                    } while (!outputValue3.includes(rand));
                } else var rand = Math.floor(Math.random() * length3Detail);
                var ansChoose = ans3Detail[rand];
                ansChoose.click();
            }
        }

        // input text
        var textAns = ques.querySelector('.rFrNMe.k3kHxc.RdH0ib.yqQS1.zKHdkd');
        if (textAns != null) {
            var inputText = textAns.querySelector('input[type="text"]');
        }
    }


    // SUBMIT
    setTimeout(function () {
        var btn = document.querySelector('.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd[role="button"]')
        btn.click();
        localStorage.setItem("EXTENSION_COUNT", count + 1);
    }, 1000)
}

if (count == number && count != 0) {
    document.querySelector('.menu-count').innerHTML = 'DONE!';
    document.querySelector('.menu-count').style.color = "GREEN"
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (key.startsWith("EXTENSION")) {
                localStorage.removeItem(key);
            }
        }
    }
}