```javascript
/* =========================================================
   YUMMY RESTAURANT - SCRIPT.JS
   ========================================================= */


/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   MOBILE NAVBAR
========================= */

const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

navbarLinks.forEach(link => {

    link.addEventListener("click", () => {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbar);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* =========================
   MENU FILTER
========================= */

const menuButtons = document.querySelectorAll(".menu-btn");
const foodCards = document.querySelectorAll(".food-card");

const menuData = {

    Starters: [
        {
            name: "Greek Salad",
            description: "Fresh vegetables, cheese and herbs.",
            price: "₹249",
            image:
                "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Fresh Soup",
            description: "Healthy vegetable soup with herbs.",
            price: "₹149",
            image:
                "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Veg Spring Roll",
            description: "Crispy rolls filled with fresh vegetables.",
            price: "₹179",
            image:
                "https://images.unsplash.com/photo-1548507200-fdbb4b4c0a8f?auto=format&fit=crop&w=600&q=80"
        }
    ],

    Breakfast: [
        {
            name: "Healthy Breakfast",
            description: "Fresh fruits, eggs and healthy bread.",
            price: "₹199",
            image:
                "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Pancakes",
            description: "Soft pancakes served with fresh fruits.",
            price: "₹229",
            image:
                "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Avocado Toast",
            description: "Toasted bread with creamy avocado.",
            price: "₹249",
            image:
                "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=600&q=80"
        }
    ],

    Lunch: [
        {
            name: "Grilled Chicken",
            description: "Juicy grilled chicken with vegetables.",
            price: "₹399",
            image:
                "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Italian Pasta",
            description: "Homemade pasta with fresh tomato sauce.",
            price: "₹299",
            image:
                "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Chicken Rice",
            description: "Fragrant rice served with spicy chicken.",
            price: "₹329",
            image:
                "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
        }
    ],

    Dinner: [
        {
            name: "Cheese Pizza",
            description: "Freshly baked pizza with premium cheese.",
            price: "₹349",
            image:
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Grilled Fish",
            description: "Fresh grilled fish with herbs.",
            price: "₹449",
            image:
                "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Chocolate Cake",
            description: "Soft and delicious chocolate dessert.",
            price: "₹199",
            image:
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
        }
    ]

};


/* =========================
   DISPLAY MENU
========================= */

function displayMenu(category) {

    const menuContainer = document.querySelector("#menu .row.mt-5");

    if (!menuContainer) {
        return;
    }

    const selectedItems = menuData[category];

    menuContainer.innerHTML = "";

    selectedItems.forEach(item => {

        const card = document.createElement("div");

        card.className = "col-lg-4 col-md-6";

        card.innerHTML = `

            <div class="food-card">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="food-content">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                    <h4>
                        ${item.price}
                    </h4>

                </div>

            </div>

        `;

        menuContainer.appendChild(card);

    });

}


/* =========================
   MENU BUTTON CLICK
========================= */

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.textContent.trim();

        displayMenu(category);

    });

});


/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
    document.querySelector(".reservation-form");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            this.querySelector('input[placeholder="Your Name"]').value;

        const email =
            this.querySelector('input[placeholder="Your Email"]').value;

        const phone =
            this.querySelector('input[placeholder="Your Phone"]').value;

        const date =
            this.querySelector('input[type="date"]').value;

        const time =
            this.querySelector('input[type="time"]').value;

        const people =
            this.querySelector(
                'input[placeholder="Number of People"]'
            ).value;


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            date === "" ||
            time === "" ||
            people === ""
        ) {

            alert("Please fill all required fields.");

            return;
        }


        alert(
            "Thank you " +
            name +
            "! Your table reservation request has been submitted."
        );


        this.reset();

    });

}


/* =========================
   GALLERY IMAGE CLICK
========================= */

const galleryImages =
    document.querySelectorAll(".gallery-image");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const imageURL = image.src;

        const overlay = document.createElement("div");

        overlay.className = "image-overlay";

        overlay.innerHTML = `

            <div class="image-popup">

                <button class="close-image">
                    &times;
                </button>

                <img
                    src="${imageURL}"
                    alt="Gallery Image"
                >

            </div>

        `;

        document.body.append