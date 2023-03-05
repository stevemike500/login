
"use strict";
var toast = localStorage.getItem('banktotal');
var toast2 = localStorage.getItem('divtotal');
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
var toastbitcoin = '';
var toastbitcoin2 = '';
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
    toastbitcoin2 = (toast2 / (parseFloat(stockObject.k.c))).toFixed(5);
}



var i = -1;
var $toastlast;

var getMessage = function() {

    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        for (var i = 0; i < items.length; i++) {
            var msgs = [`
                ${toastbitcoin} Bitcoin payment not detected,
                <hr class="to-hr">
                Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.
            `];
            i++;
            if (i === msgs.length) {
                i = 0;
            }
            return msgs[i];
        }
    } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {        
        for (var i = 0; i < items.length; i++) {
            var msgs = [`
                ${toastbitcoin2} Bitcoin payment not detected.
                <hr class="to-hr">
                Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.
            `];
            i++;
            if (i === msgs.length) {
                i = 0;
            }
            return msgs[i];
        }
    } else if(JSON.parse(localStorage.getItem('banklogs')).length == 3) {        
        for (var i = 0; i < items.length; i++) {
            var msgs = [`
                ${toastbitcoin2} Bitcoin payment not detected.
                <hr class="to-hr">
                Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.
            `];
            i++;
            if (i === msgs.length) {
                i = 0;
            }
            return msgs[i];
        }
    }
};

var toastbut = document.getElementById('anon-check');

$(toastbut).click(function() {
    var shortCutFunction = 'success';
    var msg = '';
    var title = '';
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: true,
        progressBar: true,
        positionClass: 'toast-top-full-width',
        preventDuplicates: true,
        onclick: null
    };
    if (!msg) {
        msg = getMessage();
    }
    var $toast = toastr[shortCutFunction](msg, title);
    $toastlast = $toast;
});
