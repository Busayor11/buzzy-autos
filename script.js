/* ==========================================
   BUZZY AUTOS — WEBSITE FUNCTIONALITY
========================================== */

// UPDATE THIS WITH THE DEALER'S WHATSAPP NUMBER
// Use country code without +, spaces, or leading zero.
const WHATSAPP_NUMBER = "234XXXXXXXXXX";


/* ==========================================
   CAR DATABASE
========================================== */

const cars = {
    corolla: {
        name: "Toyota Corolla 2004",
        brand: "Toyota",
        year: "2004",
        price: 5200000,
        priceText: "₦5,200,000",
        location: "Ikotun, Lagos",
        status: "Tokunbo Standard",
        folder: "Toyota",
        count: 8,
        description: `A VERY CLEAN TOKS STANDARD 💯

Toyota Corolla 2004 with good engine, gear and chilling AC. Nothing to fix.

PRICE: ₦5.2M (Slightly negotiable)

DIRECT OWNER DEAL.`,
        features: [
            "Good Engine",
            "Good Gear",
            "Chilling AC",
            "Nothing to Fix",
            "Slightly Negotiable"
        ]
    },

    is250: {
        name: "Lexus IS250 AWD",
        brand: "Lexus",
        year: "2011",
        price: 11800000,
        priceText: "₦11,800,000",
        location: "Ikotun, Lagos",
        status: "Foreign Used",
        folder: "IS250",
        count: 8,
        description: `FOREIGN USED LEXUS IS250 2011 AWD

• Sunroof
• Auto Shade
• Headlight Washer
• 89k Miles
• Two-Tone Interior
• Accident Free

PRICE: ₦11.8M (Slightly Negotiable)`,
        features: [
            "AWD",
            "Sunroof",
            "Auto Shade",
            "Headlight Washer",
            "89k Miles",
            "Two-Tone Interior",
            "Accident Free"
        ]
    },

    rx2015: {
        name: "Lexus RX350 2015",
        brand: "Lexus",
        year: "2015",
        price: 23500000,
        priceText: "₦23,500,000",
        location: "Location to be confirmed",
        status: "Foreign Used",
        folder: "Lexus-RX350",
        count: 10,
        description: `FOREIGN USED 2015 LEXUS RX350 🇺🇸

• Accident Free
• Park Assist
• Blind Spot Monitor
• Mouse Control
• Low Mileage
• Untampered Engine, Gear and AC

PRICE: ₦23.5M`,
        features: [
            "Park Assist",
            "Blind Spot Monitor",
            "Mouse Control",
            "Low Mileage",
            "Untampered Engine",
            "Good Gear and AC"
        ]
    },

    camry: {
        name: "Toyota Camry 2006",
        brand: "Toyota",
        year: "2006",
        price: 7800000,
        priceText: "₦7,800,000",
        location: "Ikotun-Idimu, Lagos",
        status: "Accident Free",
        folder: "Toyota-camry",
        count: 8,
        description: `🔥🇺🇸 TOYOTA CAMRY 2006

2026 on custom!

• Complete Accident Free (100%)
• Chilling AC
• Good Gear
• Good Engine
• Super Clean Interior
• Pristine Clean Exterior
• Noiseless Legs
• Low Mileage

PRICE: ₦7.8M (Slightly Negotiable)

LOCATION: Ikotun-Idimu, Lagos`,
        features: [
            "Chilling AC",
            "Good Gear",
            "Good Engine",
            "Clean Interior",
            "Clean Exterior",
            "Noiseless Legs",
            "Low Mileage"
        ]
    },

    rx2017: {
        name: "Lexus RX350 2017",
        brand: "Lexus",
        year: "2017",
        price: 37500000,
        priceText: "₦37,500,000",
        location: "Ikotun, Lagos",
        status: "Tokunbo",
        folder: "Tokunbo-lexus-RX350",
        count: 15,
        description: `🔥🇺🇸 TOKUNBO 2017 LEXUS RX350 🇺🇸🔥

LUXURY • PERFORMANCE • TECHNOLOGY

✨ 100% Accident Free
✨ Blind Spot Monitor
✨ Parking Assist
✨ Collision Pre-Collision System
✨ Lane Departure Alert
✨ Proximity / Smart Key
✨ Push Start
✨ Reverse Camera
✨ Power Tailgate
✨ Sunroof
✨ Heated & Ventilated Front Seats
✨ Power Memory Driver Seat

PRICE: ₦37.5M (Slightly Negotiable)

LOCATION: Ikotun, Lagos`,
        features: [
            "Blind Spot Monitor",
            "Parking Assist",
            "Collision Warning System",
            "Lane Departure Alert",
            "Smart Key",
            "Push Start",
            "Reverse Camera",
            "Power Tailgate",
            "Sunroof",
            "Heated & Ventilated Seats"
        ]
    },

    glc43: {
        name: "Mercedes-Benz GLC43 AMG Coupe",
        brand: "Mercedes-Benz",
        year: "2018",
        price: 57000000,
        priceText: "₦57,000,000",
        location: "Amuwo Odofin, Lagos",
        status: "Fresh from Sea",
        folder: "GLC43",
        count: 9,
        description: `FRESH FROM SEA 🌊

FOREIGN USED 2018 MERCEDES-BENZ GLC43 AMG COUPE

• Thumbstart
• Sunroof
• 360-Degree Camera
• BSM
• Grey on Black Leather Interior
• Accident Free
• September 2026 Import

PRICE: ₦57M (Quick Deal)

LOCATION: Amuwo Odofin, Lagos`,
        features: [
            "AMG Coupe",
            "Thumbstart",
            "Sunroof",
            "360-Degree Camera",
            "Blind Spot Monitor",
            "Leather Interior",
            "Accident Free"
        ]
    },

    gle350: {
        name: "Mercedes-Benz GLE350 4Matic",
        brand: "Mercedes-Benz",
        year: "Year to be confirmed",
        price: 57000000,
        priceText: "₦57,000,000",
        location: "Location to be confirmed",
        status: "Foreign Used",
        folder: "Mercedes-Benz",
        count: 11,
        description: `FOREIGN USED 🇺🇸

MERCEDES-BENZ GLE350 4MATIC

• Moonroof
• Suction Doors
• Self-Park Assist Active
• Low Mileage
• 360 Camera

PRICE: ₦57M NET`,
        features: [
            "4Matic",
            "Moonroof",
            "Suction Doors",
            "Self-Park Assist",
            "Low Mileage",
            "360 Camera"
        ]
    }
};


/* ==========================================
   IMAGE PATHS
========================================== */

function getImagePath(car, number) {
    return `images/${car.folder}-${number}.jpg`;
}


/* ==========================================
   WHATSAPP ENQUIRIES
========================================== */

function getWhatsAppLink(car) {
    const message =
        `Hello Buzzy Autos! I'm interested in the ${car.name} ` +
        `listed at ${car.priceText}. Is it still available?`;

    if (!/^234\d{10}$/.test(WHATSAPP_NUMBER)) {
        return "";
    }

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function connectWhatsAppButtons() {
    ["whatsappButton", "floatingWhatsapp"].forEach(id => {
        const button = document.getElementById(id);

        if (!button) return;

        button.href = getWhatsAppLink({
            name: "your available cars",
            priceText: ""
        }) || "#contact";

        button.addEventListener("click", event => {
            if (!/^234\d{10}$/.test(WHATSAPP_NUMBER)) {
                event.preventDefault();
                alert("Please add the dealer's correct WhatsApp number in script.js first.");
            }
        });
    });
}


/* ==========================================
   CAR DETAILS AND PHOTO GALLERY
========================================== */

const modal = document.getElementById("carModal");
const detailsContent = document.getElementById("carDetailsContent");

let activeCar = null;
let activePhoto = 1;
let touchStartX = 0;

function openCarDetails(carId) {
    const car = cars[carId];

    if (!car) return;

    activeCar = car;
    activePhoto = 1;

    renderCarDetails();

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    document.getElementById("modalClose").focus();
}

function closeCarDetails() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    activeCar = null;
}

function renderCarDetails() {
    if (!activeCar) return;

    const car = activeCar;

    detailsContent.innerHTML = `
        <div class="gallery-main">
            <img
                id="galleryMainImage"
                class="modal-car-image"
                src="${getImagePath(car, activePhoto)}"
                alt="${car.name} photo ${activePhoto}"
            >
        </div>

        <div class="gallery-controls">
            <button id="previousPhoto" type="button">
                ← Previous
            </button>

            <span class="gallery-counter">
                Photo ${activePhoto} of ${car.count}
            </span>

            <button id="nextPhoto" type="button">
                Next →
            </button>
        </div>

        <div class="gallery-thumbnails" id="galleryThumbnails">
            ${Array.from({ length: car.count }, (_, index) => {
                const number = index + 1;

                return `
                    <img
                        src="${getImagePath(car, number)}"
                        alt="${car.name} thumbnail ${number}"
                        class="${number === activePhoto ? "active" : ""}"
                        data-photo="${number}"
                        loading="lazy"
                    >
                `;
            }).join("")}
        </div>

        <span class="eyebrow">${car.status}</span>

        <h2 id="modalTitle">${car.name}</h2>

        <div class="modal-price">${car.priceText}</div>

        <p class="modal-location">📍 ${car.location}</p>

        <h3>Vehicle Information</h3>

        <p class="modal-description">${car.description}</p>

        <h3>Key Features</h3>

        <div class="feature-tags">
            ${car.features.map(feature => `
                <span>${feature}</span>
            `).join("")}
        </div>

        <a
            class="whatsapp-button modal-whatsapp"
            id="carWhatsApp"
            href="${getWhatsAppLink(car) || "#"}"
            target="_blank"
            rel="noopener noreferrer"
        >
            Enquire About This Car ↗
        </a>
    `;

    document.getElementById("previousPhoto")
        .addEventListener("click", () => changePhoto(-1));

    document.getElementById("nextPhoto")
        .addEventListener("click", () => changePhoto(1));

    document.querySelectorAll("[data-photo]").forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            activePhoto = Number(thumbnail.dataset.photo);
            renderCarDetails();
        });
    });

    const mainImage = document.getElementById("galleryMainImage");

    mainImage.addEventListener("touchstart", event => {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    mainImage.addEventListener("touchend", event => {
        const distance = event.changedTouches[0].clientX - touchStartX;

        if (Math.abs(distance) > 45) {
            changePhoto(distance < 0 ? 1 : -1);
        }
    }, { passive: true });

    const enquiry = document.getElementById("carWhatsApp");

    enquiry.addEventListener("click", event => {
        if (!/^234\d{10}$/.test(WHATSAPP_NUMBER)) {
            event.preventDefault();
            alert("Please add the dealer's correct WhatsApp number in script.js first.");
        }
    });
}

function changePhoto(direction) {
    if (!activeCar) return;

    activePhoto += direction;

    if (activePhoto > activeCar.count) {
        activePhoto = 1;
    }

    if (activePhoto < 1) {
        activePhoto = activeCar.count;
    }

    renderCarDetails();
}


/* ==========================================
   CONNECT VIEW BUTTONS
========================================== */

document.querySelectorAll(".view-car-button").forEach(button => {
    button.addEventListener("click", () => {
        openCarDetails(button.dataset.car);
    });
});


/* ==========================================
   CLOSE POPUP
========================================== */

document.getElementById("modalClose")
    .addEventListener("click", closeCarDetails);

document.getElementById("modalBackdrop")
    .addEventListener("click", closeCarDetails);

document.addEventListener("keydown", event => {
    if (!modal.classList.contains("open")) return;

    if (event.key === "Escape") {
        closeCarDetails();
    }

    if (event.key === "ArrowRight") {
        changePhoto(1);
    }

    if (event.key === "ArrowLeft") {
        changePhoto(-1);
    }
});


/* ==========================================
   SEARCH AND FILTER
========================================== */

const carGrid = document.getElementById("carGrid");
const searchInput = document.getElementById("carSearch");
const brandFilter = document.getElementById("brandFilter");
const priceFilter = document.getElementById("priceFilter");

function filterCars() {
    const query = searchInput.value.toLowerCase().trim();
    const brand = brandFilter.value;

    const cards = Array.from(
        carGrid.querySelectorAll(".car-card")
    );

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        const matchesSearch = text.includes(query);
        const matchesBrand =
            brand === "all" || card.dataset.brand === brand;

        card.hidden = !(matchesSearch && matchesBrand);
    });

    const visibleCards = cards.filter(card => !card.hidden);

    if (priceFilter.value !== "default") {
        visibleCards.sort((a, b) => {
            const priceA = Number(a.dataset.price);
            const priceB = Number(b.dataset.price);

            return priceFilter.value === "low"
                ? priceA - priceB
                : priceB - priceA;
        });

        visibleCards.forEach(card => carGrid.appendChild(card));
    }

    document.getElementById("noResults").hidden =
        visibleCards.length !== 0;
}

searchInput.addEventListener("input", filterCars);
brandFilter.addEventListener("change", filterCars);
priceFilter.addEventListener("change", filterCars);


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
}, { passive: true });

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ==========================================
   FOOTER YEAR
========================================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* ==========================================
   START WEBSITE
========================================== */

connectWhatsAppButtons();

console.log("Buzzy Autos website loaded successfully!");