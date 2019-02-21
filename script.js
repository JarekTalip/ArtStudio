const mainNavItems =document.querySelectorAll("nav ul li");
const alink = document.querySelectorAll(".main-nav__items a");

const UkryjWszystkie = () => {
        const articles = document.querySelectorAll(".main-container article");
        articles.forEach((article) => {
                article.classList.remove('open');
                article.style.display = "none";
});
}

const WyborArtykulu = (element) => {
        if (element.target.getAttribute('href') !== null) {
                const cel = element.target.getAttribute('href');
                const artykul = document.querySelector(cel);
                UkryjWszystkie();
                artykul.style.display = "flex";
                setTimeout(() => {
                        artykul.classList.add("open");
                        }, 10);
}
};

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


