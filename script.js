let alink = document.querySelectorAll(".main-nav__items a");

let fajnafunkcja = () => {
    console.log('klik');

};

for (var i=0;i<alink.length;i++) {
    alink[i].addEventListener('click', fajnafunkcja);
    };



