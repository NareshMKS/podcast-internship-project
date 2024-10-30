const mobileVideos = ["podcast-video1", "podcast-video2", "podcast-video3", "podcast-video4", "podcast-video5", "podcast-video6"];
let currentVideoMobile = 0;
let videosPlayedMobile = 0;
let timeoutIDMobile;
let resetTimerIDMobile;
const videos = ["video1", "video2", "video3", "video4", "video5", "video6"];
let currentVideo = 0;
let videosPlayed = 0;
let timeoutID;
let resetTimerID;

function playNextVideoMobile() {
    var videoEl = document.getElementById(mobileVideos[currentVideoMobile]);
    currentVideoMobile = (currentVideoMobile + 1) % mobileVideos.length;
    videoEl.style.display = "block";
    videoEl.play();
    timeoutIDMobile = setTimeout(function() {
        videoEl.style.display = "none";
        videosPlayedMobile = videosPlayedMobile + 1;
        if (videosPlayedMobile === mobileVideos.length - 1) {
            videosPlayedMobile = 0;
            resetVideosMobile();
        } else {
            playNextVideoMobile();
        }
    }, 3000);
}

function resetVideosMobile() {
    clearTimeout(resetTimerIDMobile);
    clearTimeout(timeoutIDMobile);
    videosPlayedMobile = 0;
    for (var i = 0; i < mobileVideos.length; i++) {
        let video = document.getElementById(mobileVideos[i]);
        video.currentTime = 0;
        video.style.display = "none";
    }
    playNextVideoMobile();
}
playNextVideoMobile();

function playNextVideo() {
    let video = document.getElementById(videos[currentVideo]);
    currentVideo = (currentVideo + 1) % videos.length;
    video.style.display = "block";
    video.play();
    timeoutID = setTimeout(function() {
        video.style.display = "none";
        videosPlayed = videosPlayed + 1;
        if (videosPlayed === videos.length - 1) {
            videosPlayed = 0;
            resetVideos();
        } else {
            playNextVideo();
        }
    }, 3000);
}

function resetVideos() {
    clearTimeout(timeoutID);
    clearTimeout(resetTimerID);
    videosPlayed = 0;
    for (var i = 0; i < videos.length; i++) {
        let video = document.getElementById(videos[i]);
        video.currentTime = 0;
        video.style.display = "none";
    }
    playNextVideo();
}

playNextVideo();


/*Rare*/
let sectionTrending = document.getElementById("sectionTrending");
let sectionAll = document.getElementById("sectionAll");
let sectionTech = document.getElementById("sectionTech");
let sectionCareer = document.getElementById("sectionCareer");
let sectionCXO = document.getElementById("sectionCXO");
let sectionProductivity = document.getElementById("sectionProductivity");
let sectionGSOC = document.getElementById("sectionGSOC");
let sectionPanel = document.getElementById("sectionPanel");
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');

function trending() {
    button1.classList.add("whiteButton");
    button2.classList.remove("whiteButton");
    button3.classList.remove("whiteButton");
    button4.classList.remove("whiteButton");
    button5.classList.remove("whiteButton");
    button6.classList.remove("whiteButton");
    button7.classList.remove("whiteButton");
    button8.classList.remove("whiteButton");
    sectionTrending.style.display = "flex";
    sectionAll.style.display = "none";
    sectionTech.style.display = "none";
    sectionCareer.style.display = "none";
    sectionCXO.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionGSOC.style.display = "none";
    sectionPanel.style.display = "none";

}

function allfunction() {
    button1.classList.remove("whiteButton");
    button2.classList.add("whiteButton");
    button3.classList.remove("whiteButton");
    button4.classList.remove("whiteButton");
    button5.classList.remove("whiteButton");
    button6.classList.remove("whiteButton");
    button7.classList.remove("whiteButton");
    button8.classList.remove("whiteButton");
    sectionTrending.style.display = "none";
    sectionAll.style.display = "flex";
    sectionTech.style.display = "none";
    sectionCareer.style.display = "none";
    sectionCXO.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionGSOC.style.display = "none";
    sectionPanel.style.display = "none";
}

function tech() {
    button1.classList.remove("whiteButton");
    button2.classList.remove("whiteButton");
    button3.classList.add("whiteButton");
    button4.classList.remove("whiteButton");
    button5.classList.remove("whiteButton");
    button6.classList.remove("whiteButton");
    button7.classList.remove("whiteButton");
    button8.classList.remove("whiteButton");
    sectionTrending.style.display = "none";
    sectionAll.style.display = "none";
    sectionTech.style.display = "flex";
    sectionCareer.style.display = "none";
    sectionCXO.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionGSOC.style.display = "none";
    sectionPanel.style.display = "none";
}

function career() {
    button1.classList.remove("whiteButton");
    button2.classList.remove("whiteButton");
    button3.classList.remove("whiteButton");
    button4.classList.add("whiteButton");
    button5.classList.remove("whiteButton");
    button6.classList.remove("whiteButton");
    button7.classList.remove("whiteButton");
    button8.classList.remove("whiteButton");
    sectionTrending.style.display = "none";
    sectionAll.style.display = "none";
    sectionTech.style.display = "none";
    sectionCareer.style.display = "flex";
    sectionCXO.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionGSOC.style.display = "none";
    sectionPanel.style.display = "none";
}

function cxo() {
    button1.classList.remove("whiteButton");
    button2.classList.remove("whiteButton");
    button3.classList.remove("whiteButton");
    button4.classList.remove("whiteButton");
    button5.classList.add("whiteButton");
    button6.classList.remove("whiteButton");
    button7.classList.remove("whiteButton");
    button8.classList.remove("whiteButton");
    sectionTrending.style.display = "none";
    sectionAll.style.display = "none";
    sectionTech.style.display = "none";
    sectionCareer.style.display = "none";
    sectionCXO.style.display = "flex";
    sectionProductivity.style.display = "none";
    sectionGSOC.style.display = "none";
    sectionPanel.style.display = "none";
}

function productivity() {
    button1.classList.remove("whiteButton");
    button2.classList.remove("whiteButton");
    button3.classList.remove("whiteButton");
    button4.classList.remove("whiteButton");
    button5.classList.remove("whiteButton");
    button6.classList.add("whiteButton");
    button7.classList.remove("whiteButton");
    button8.classList.remove("whiteButton");
    sectionTrending.style.display = "none";
    sectionAll.style.display = "none";
    sectionTech.style.display = "none";
    sectionCareer.style.display = "none";
    sectionCXO.style.display = "none";
    sectionProductivity.style.display = "flex";
    sectionGSOC.style.display = "none";
    sectionPanel.style.display = "none";
}

function gsoc() {
    button1.classList.remove("whiteButton");
    button2.classList.remove("whiteButton");
    button3.classList.remove("whiteButton");
    button4.classList.remove("whiteButton");
    button5.classList.remove("whiteButton");
    button6.classList.remove("whiteButton");
    button7.classList.add("whiteButton");
    button8.classList.remove("whiteButton");
    sectionTrending.style.display = "none";
    sectionAll.style.display = "none";
    sectionTech.style.display = "none";
    sectionCareer.style.display = "none";
    sectionCXO.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionGSOC.style.display = "flex";
    sectionPanel.style.display = "none";
}

function panel() {
    button1.classList.remove("whiteButton");
    button2.classList.remove("whiteButton");
    button3.classList.remove("whiteButton");
    button4.classList.remove("whiteButton");
    button5.classList.remove("whiteButton");
    button6.classList.remove("whiteButton");
    button7.classList.remove("whiteButton");
    button8.classList.add("whiteButton");
    sectionTrending.style.display = "none";
    sectionAll.style.display = "none";
    sectionTech.style.display = "none";
    sectionCareer.style.display = "none";
    sectionCXO.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionGSOC.style.display = "none";
    sectionPanel.style.display = "flex";
}

/*claim podcast*/

let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("nameClaim");
let nameErrMsgEl = document.getElementById("nameErrMsgClaim");

let numberEl = document.getElementById("numberClaim");
let numberErrMsgEl = document.getElementById("numberErrMsgClaim");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
        nameEl.classList.add("redcolorClaim");
    } else {
        nameErrMsgEl.textContent = "";
        nameEl.classList.remove("redcolorClaim");
    }
});

numberEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        numberErrMsgEl.textContent = "Required*";
        numberEl.classList.add("redcolorClaim");
    } else {
        numberErrMsgEl.textContent = "";
        numberEl.classList.remove("redcolorClaim");
    }
});

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameEl.value === "") {
        nameErrMsgEl.textContent = "Required*";
        nameEl.classList.add("redcolorClaim");
    } else {
        nameErrMsgEl.textContent = "";
        nameEl.classList.remove("redcolorClaim");
    }

    if (numberEl.value === "") {
        numberErrMsgEl.textContent = "Required*";
        numberEl.classList.add("redcolorClaim");
    } else {
        numberErrMsgEl.textContent = "";
        numberEl.classList.remove("redcolorClaim");
    }
});