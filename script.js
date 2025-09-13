const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const body = document.querySelector(".body");
const lightMobile = document.querySelector(".lightMobile");
const darkMobile = document.querySelector(".darkMobile");
const exit = document.querySelector(".exitBar");
const mobileNav = document.querySelector(".mobileNav");
const menuBar = document.querySelector(".menuBar");
const container2 = document.querySelector(".container2");
const container1 = document.querySelector(".container1");
const stories = document.querySelector(".stories");
const active = document.querySelector(".active");
const goBack = document.querySelector(".goBack");
const react = document.querySelector(".react");


//Modes in PC
dark.addEventListener("click", () => {
    body.classList.add("darkMode");
    body.classList.remove("lightMode");
    dark.style.display = "none";
    light.style.display = "block";
    lightMobile.style.display = "block";
    darkMobile.style.display = "none";
});
light.addEventListener("click", () => {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    light.style.display = "none";
    dark.style.display = "block";
    lightMobile.style.display = "none";
    darkMobile.style.display = "block";
});

//Modes in Mobile
darkMobile.addEventListener("click", () => {
    body.classList.add("darkMode");
    body.classList.remove("lightMode");
    darkMobile.style.display = "none";
    lightMobile.style.display = "block";
    dark.style.display = "none";
    light.style.display = "block";
});
lightMobile.addEventListener("click", () => {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    lightMobile.style.display = "none";
    darkMobile.style.display = "block";
    light.style.display = "none";
    dark.style.display = "block";
});
exit.addEventListener("click", () => {
    mobileNav.style.display = "none";

});
menuBar.addEventListener("click", () => {
    mobileNav.style.display = "flex";
})






// Story Adding
const collection = [
    {
        p: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbjbrS40GcJwhdd3ONXbUsgH23i94bUR8Cw&s"
    },
    {
        p: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SIbiklCNGv6JYP1PdOBPRE0pYN2FM37iqg&s"
    },
    {
        p: "https://media.istockphoto.com/id/2218333101/photo/confident-mature-man-smiling-in-professional-attire-with-a-calm-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=-Nn26lDOKlTW7rICj5U2l2wjaDWYMLbG1uDnqGV-9kE=", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxxuc2fdfgsVAZ099w2NO-NA5QuY3vrLK4jh8DqCwdzy4HQDG6mjvmeUBxoqFsRgw6to&usqp=CAU"
    },
    {
        p: "https://i.pinimg.com/736x/06/9e/00/069e008833a8f421133121e49a5b493a.jpg", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS933uIkwyjFBzSmaQ-w_-NMEDD80_vq0mzIQ&s"
    },
    {
        p: "https://media.istockphoto.com/id/2218333130/photo/confident-businessman-smiling-in-a-casual-suit-and-glasses-indoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=H6ImSogE21cldteIwpMDo2LgYK6Szk7mJC4M1aL8PWU=", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP3pajZePzB74XMXND7gaxdbsmiEOU1dLAg&s"
    },
    {
        p: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVXL2yFfNP9JngLWT7fVaeeE_4tKKm1qPnw&s"
    },
    {
        p: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBNK-44z4yPA77j-4mAXqUp7oeGYozFM7yA&s"
    },
    {
        p: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilH0wNCMsQ6WXd1hqrFP9iNyYvoo50JgEuw&s"
    },
]
let displayStory = " ";
collection.forEach((e, index) => {
    displayStory += `<div class="story">
          <img
          id=${index}
            src="${e.p}"
            alt="Not Found"
            class="stories"
          />
        </div>`
});
container2.innerHTML = displayStory;
console.log(displayStory)


//View Story

container2.addEventListener("click", (e) => {
    let open = e.target.id;
    if (open) {

        container1.classList.add("active");
        container1.style.backgroundImage = `url(${collection[open].s})`;
        container2.style.display = "none";
        goBack.style.display = "flex";
        react.style.display = "flex";
        setTimeout(() => {
            container1.style.backgroundImage = "none";
            container1.classList.remove("active");
            container2.style.display = "flex";
            goBack.style.display = "none";
            react.style.display = "none";
            react.style.color = "white";
        }, 5000)
    }
    if (goBack) {
        goBack.addEventListener("click", () => {
            container1.style.backgroundImage = "none";
            container1.classList.remove("active");
            container2.style.display = "flex";
            goBack.style.display = "none";
            react.style.display = "none";

        })
    }
    if (react) {
        react.addEventListener("click", () => {

            react.style.color = "red";

        })
    }
});