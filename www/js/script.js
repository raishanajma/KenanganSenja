//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active')
};

// klik di luar side bar untuk menghilangkan nav
const hamburger =document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.targe)){
    navbarNav.classList.remove('active');
  }
})

//Toggle class active
const searchForm = document.querySelector('.search-form');

//ketika search di klik
document.querySelector('#search').onclick = () => {
  searchForm.classList.toggle('active')
};

//Toggle class active
const cartItem = document.querySelector('.cart-item-container');

//ketika shopping cart di klik
document.querySelector('#shopping-cart').onclick = () => {
  cartItem.classList.toggle('active')
};

window.onscroll = () =>{
  navbarNav.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

//db
const db = window.openDatabase('menukeranjang', '8.0', 'menukeranjang', 1*1024*1024);
db.transaction (t => {
  t.executeSql('CREATE TABLE keranjangmenu pilihmenu TEXT amount INTEGER price INTEGER')
  for (let c of coffee) {
    t.executeSql('INSERT INTO keranjangmenu (pilihmenu, amount, price) VALUES (?, ?, ?)', [c.pilihmenu, c.amount, c.price])
  }
})