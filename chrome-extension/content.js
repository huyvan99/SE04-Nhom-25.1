console.log("Content is running");
var posts = [];
var comments = [];
var users = [];
var seemores = [];
var loadcomment = [];
var scroll = 3000;

function scrollDown() {
    window.scrollBy(0, 10000);
}
function getPost() {
    console.log("getPost running")
    posts = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q");
    console.log(posts.length, " bài post lấy được");
    for (let post of postContent) {
        console.log(posts.textContent);
    }
}
function getComment() {
    console.log("getComment running")
    comments = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
    console.log(comments.length, " số comment");
    for (var i = 0; i < comments.length; i++) {
        if (comments[i].className == 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql') {
            console.log(comments[i].textContent);
        }
    }
}
function getUser() {
    console.log("getUser running")
    users = document.getElementsByClassName("pq6dq46d");
    console.log(users.length, " người comment số bài viết của bạn");
    for (var i = 0; i < users.length; i++) {
        if (users[i].className == 'pq6dq46d') {
            console.log(users[i].textContent);
        }
    }
}
function getUserAndComment() {
    console.log("getUserandComment running")
    tmp = document.getElementsByClassName("tw6a2znq sj5x9vvc d1544ag0 cxgpxx05");
    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i].className == "tw6a2znq sj5x9vvc d1544ag0 cxgpxx05") {
            if (tmp[i].children.length > 1)
                console.log(tmp[i].children[0].textContent, ": ", tmp[i].children[1].textContent);
        }
    }
}
function seeMoreComment() {
    loadcomment = document.getElementsByClassName("gtad4xkn");
    for (let load of loadcomment) {
        load.click();
    }
    seemore = document.getElementsByClassName("j83agx80 fv0vnmcu hpfvmrgz");
    for (let btn of seemore) {
        if (btn.click()) {
            btn.click();
        }
    }
}
function writeToJSON() {
    var saveData = (function () {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        return function (data, fileName) {
            var json = JSON.stringify(data),
                blob = new Blob([json], { type: "octet/stream" }),
                url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        };
    }());

    var data = { x: 42, s: "hello, world", d: new Date() },
        fileName = "my-download.json";

    saveData(data, fileName);
}


function main() {
    console.log("enter main")
    getPost();
    seeMoreComment();
    getUserAndComment();
}
function scrollEvent() {
    window.onscroll = function (event) {
        window.setTimeout(main, 5000);
        console.log("scrolled");
        main();
    };
}
function check() {
    console.log("running");
}
window.addEventListener('wheel', function () {
    if (window.scrollY > scroll) {
        scroll += 3000;
        console.log(scroll);
        main();
    }
});

