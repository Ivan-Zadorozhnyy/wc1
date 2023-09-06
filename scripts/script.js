document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is connected!");

    function updateContent() {
        const contentParagraph = document.getElementById("content");
        contentParagraph.textContent = "Content updated!";
    }

    document.getElementById("updateButton").addEventListener("click", updateContent);
});
