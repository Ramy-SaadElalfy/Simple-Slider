var imgs = Array.from(document.querySelectorAll(".item img"));
var lightboxContainer = document.getElementById("lightboxContainer");
var lightobxItem = document.getElementById("lightobxItem");
var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var currentIndex = 0;



// -------------- Displaying the selected image --------------

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {

        currentIndex = imgs.indexOf(e.target);
        console.log(currentIndex);
        let imgSrc = e.target.getAttribute("src");
        lightobxItem.style.backgroundImage = `URL(${imgSrc})`;
        lightboxContainer.style.display = "flex";
    })
}


// -------------- NextSlide Function --------------

function nextSlide() {
    currentIndex++;

    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightobxItem.style.backgroundImage = `URL(${imgSrc})`;

}

nextBtn.addEventListener("click", nextSlide);

// -------------- PreviousSlide Function --------------

function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightobxItem.style.backgroundImage = `URL(${imgSrc})`;
}

prevBtn.addEventListener("click", prevSlide);

// -------------- Close LightBox Function --------------

function closeLightBox() {
    lightboxContainer.style.display = "none";
}

closeBtn.addEventListener("click", closeLightBox);


// -------------- contorling the slider using the Keyboard  --------------

document.addEventListener("keydown", function (e) {

    if (e.code == "ArrowRight") {
        nextSlide();
    }
    else if (e.code == "ArrowLeft") {
        prevSlide();
    }

    else if (e.code == "Escape") {
        closeLightBox();
    }
})

// _________________ End _________________