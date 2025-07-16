// Show or hide the back-to-top button
window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    btn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
        ? "block"
        : "none";
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}