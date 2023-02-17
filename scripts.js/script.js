
new WOW({
    animateClass: 'animate__animate',
}).init();


$('h1').html = "Самая крутая пицца ждет <span> только в нашем ресторане </span>";

$('#products-title').css('color', '#000000');


$('.btn :not(#no-touch)').css({
    backgroundColor: 'transparent',
    border: '1px solid rgb(255, 175, 24)',
    color: 'rgb(255, 175, 24)'
})
let productInput = $('#product-input');
productInput.attr('placeholder', "Имя");


$('.rights span').text = ((new Date()).getFullYear());

let products = $('.product');
for (let i = 0; i < products.length; i++) {
    if (i % 2 === 1){
        let element = products.eq(i).children().eq(1);
        element.text(element.text () + '*');
    }
}


$('#choose-pizza').click (function () {
    $('.products')[0].scrollIntoView({behavior:"smooth"});
});


$('.btn-add-to-card').click((e) => {
    productInput.val($(e.target).parents('.product').find('.product-title').text());
   $('order')[0].scrollIntoView({behavior:"smooth"});

})

$('#create-order').click(function () {
    let addressInput = $('#address-input');
    let phoneInput = $('#phone-input');
    if (!productInput.val()) {
        alert('Заполните пиццу');
        return;
    }
    if (!addressInput.val()) {
        alert('Заполните адресс');
        return;
    }
    if (!phoneInput.val()) {
        alert('Заполните телефон');
        return;
    }
    alert('Спасибо за заказ');
});


let form = document.getElementById("myForm");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
})
