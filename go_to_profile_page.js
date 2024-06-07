document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('flag') && urlParams.get('flag') === '2') {
        document.getElementById("profile-button").click();
    }
    // console.log("TRIGGERED");
    // let thisRandom = document.getElementById("profile-content");
    // console.log(thisRandom.id);
    // thisRandom.click();


});