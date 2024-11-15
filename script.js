let currentImageIndex = 0;
const bannerImages = [
    "Amazon-Clone/s1.jpg",
    "Amazon-Clone/s2.jpg",
    "Amazon-Clone/s3.jpg"
];

// Automatically change banner image every 3 seconds
setInterval(changeBannerImage, 3000);

function changeBannerImage() {
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    document.getElementById("banner-image").src = bannerImages[currentImageIndex];
}

function prevSlide() {
    currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
    document.getElementById("banner-image").src = bannerImages[currentImageIndex];
}

function nextSlide() {
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    document.getElementById("banner-image").src = bannerImages[currentImageIndex];
}
