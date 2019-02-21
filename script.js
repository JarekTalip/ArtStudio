const mainNavItems =document.querySelectorAll("nav ul li");
const alink = document.querySelectorAll(".main-nav__items a");

const WyborArtykulu = (element) => {
        if (element.target.getAttribute('href') !== null) {
        console.log(element.target);
        const cel = element.target.getAttribute('href');
        console.log(cel);
        const artykul = document.querySelector(cel);
        console.log(artykul);
        artykul.style.display = "none";}
}

alink.forEach(() => {
        addEventListener('click', WyborArtykulu);
})

// let cel = el.getAttribute("href");
// let artykul = document.querySelector(cel);
// console.log(artykul);


// let fajnafunkcja = () => {
//     console.log(this);
// };

// for (var i=0;i<alink.length;i++) {
//     alink[i].addEventListener('click', fajnafunkcja);
//     };

//     document.addEventListener('click', (e) => {
//         e = e || window.event;
//         var target = e.target || e.srcElement,
//             text = target.text || target.innerText;
//             console.log(target);
//             console.log(text);
//     }, false);


