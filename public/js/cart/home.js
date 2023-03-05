let items = [];
var table1 = jQuery('#example1').DataTable();
var setBtn = document.getElementById('settings');

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var d = new Date();
var n = month[d.getMonth()];
var y = d.getFullYear();
var m = d.getDate();

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image}></td>`
        var balance = `<td class="btn-balance">${data.balance}</td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
        var account = `<td>${data.account}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        
        table1.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            website,      
        ]).draw();
    });

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    updateCartTotal();


    for(var i = 0; i < items.length; i++) {
        var cartRow = document.createElement('tr');
        var cartCol = document.createElement('div');
        var cartRow2 = document.createElement('li');
        cartRow.classList.add('table-warning');
        cartCol.classList.add('alert','alert-warning','alert-dismissible');
        cartRow2.classList.add('total','bg-black');
        var cartItems =  document.getElementsByClassName('champez')[0];
        var cartColItems = document.getElementsByClassName('cart-alerts')[0];
        var cartColContents = `
            Pending Sale <strong>${items[i].account}</strong>, ${items[i].balance}
            <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
        `
        var cartRowContents = `
            <td>
                <span class="label label-warning">Pending<i class="fas fa-spin fa-sync-alt spinner-bordez"></i></span>
            </td>
            <td class="btn-balance">${(items[i].balance).replace('Balance: ','')}</td>
            <td><img src=${items[i].image}></td>
            <td id=${'name-on-table' + items.indexOf(items[i])} style="filter: blur(0px);"></td> 
            <td>${items[i].account}</td>
            <td class="btn-price">${(items[i].price).replace('Price: ','')}</td>
            <td>${items[i].info1}</td>
            <td>${items[i].info2}</td>
            <td>${items[i].info3}</td>
            <td>${items[i].info4}</td>
            <td>${items[i].info5}</td>
            <td>${items[i].info6}</td>
            <td>${items[i].website}</td>
        `;
        cartCol.innerHTML = cartColContents;
        cartRow.innerHTML = cartRowContents;

        cartColItems.prepend(cartCol);
        cartItems.prepend(cartRow);
        updateCartTotal();
    }
} else {
    document.getElementById('cartlength').style.display = 'none';
    setBtn.innerHTML = `Cart: $0 <img src="img/partners/bitcoin.png">`;
    setBtn.style.left = '27%';
    setBtn.style.right = '27%';

    var profileModal = document.getElementById('profileModal');
    var modalDialog = profileModal.getElementsByClassName('modal-dialog')[0];

    if (window.innerWidth > 1092) {
        modalDialog.style.top = '5vh';
        modalDialog.style.minWidth = '85vw';
    } 
}
if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 3)){
    var profileModal = document.getElementById('profileModal');
    profileModal.getElementsByClassName('dataTables_paginate')[0].style.display = 'block';
    profileModal.getElementsByClassName('dataTables_length')[0].style.display = 'block'
    
}

document.getElementById('alert-1').innerHTML = `
    Added <strong>Chime Bank [SPENDING]</strong>, Balance: ${localStorage.getItem('chime2')}
    <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
`;
document.getElementById('alert-2').innerHTML = `
    Added <strong>Bank of America [CHECKING]</strong>, Balance: ${localStorage.getItem('boa2')}
    <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
`;
document.getElementById('alert-3').innerHTML = `
    Added <strong>PNC Bank [SAVINGS]</strong>, Balance: ${localStorage.getItem('pnc2')}
    <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
`;
document.getElementById('alert-4').innerHTML = `
    Added <strong>Huntington Bank [CHECKING]</strong>, Balance: ${localStorage.getItem('hunt2')}
    <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
`;
document.getElementById('alert-5').innerHTML = `
    Added <strong>Wells Fargo [SAVINGS]</strong>, Balance: ${localStorage.getItem('wells2')}
    <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
`;

function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[11].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;
    var info5 = cartItem.children[9].innerText;
    var info6 = cartItem.children[10].innerText;
    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}

function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    document.getElementById('thetot1').innerHTML = `
        Checkout:  $${total.toLocaleString()}
        <img src="img/partners/bitcoin.png"> 
    `;
    document.getElementById('thetot').innerHTML = `View Cart: $${total.toLocaleString()}`;
    setBtn.innerHTML = `Cart: $${total.toLocaleString()} <img src="img/partners/bitcoin.png">`;
    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();
    localStorage.setItem('time-left',600);


    var profileModal = document.getElementById('profileModal');
    var modalDialog = profileModal.getElementsByClassName('modal-dialog')[0];

    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        if (window.innerWidth > 1092) {
            modalDialog.style.top = '5vh';
            modalDialog.style.minWidth = '85vw';
        } 
    } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {
        if (window.innerWidth > 1092) {
            modalDialog.style.top = '3vh';
            modalDialog.style.minWidth = '92vw';
        } 
    } else if(JSON.parse(localStorage.getItem('banklogs')).length >= 3) {
        if (window.innerWidth > 1092) {
            modalDialog.style.top = '-4vh';
            modalDialog.style.minWidth = '97vw';
        } 
    }
}