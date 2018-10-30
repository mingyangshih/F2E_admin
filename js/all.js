$(document).ready(function() {
  // jQuery UI 加日期
  $(".date-start").datepicker();
  $(".date-end").datepicker();
  $(".arrow").addClass("fas fa-caret-right");
  // 下拉選單特效
  $("#date-long").click(function() {
    $(".list").slideToggle("slow");
  });
  $(".list li").click(function() {
    $(".list").slideToggle("slow");
  });
});
// set nav color
function setnavcolor() {
  let headerh2 = document.querySelector("header h2");
  if (headerh2.textContent === "OVERVIEW") {
    let nava = document.querySelector(".nav-list .home");
    nava.setAttribute("style", "color:white; border-bottom: 4px solid white;");
  }
}
setnavcolor();

// date-long 監聽
let opt = document.querySelector("#date-long");
let list = document.querySelector(".list");

//header li 監聽 更改option內容
list.addEventListener("click", function(e) {
  e.stopPropagation();
  let text = e.target.textContent;
  let select = document.querySelector("#date-long");
  select.innerHTML = `<option value="date-long" selected>${text}</option>`;
  list.classList.remove("show");
});

// main li 監聽
let mmoney = document.querySelectorAll(".main .money");
let textcolor = ["#7ed321", "#d0021b", "#4a90e2"];
for (let i = 0; i < mmoney.length; i++) {
  mmoney[i].setAttribute("style", "color:" + textcolor[i]);
}

//percent 監聽
let percent = document.querySelectorAll(".percent");
for (let i = 0; i < percent.length; i++) {
  percent[i].addEventListener("mousemove", function() {
    let detail = document.querySelectorAll(".detail");
    detail[i].classList.add("show");
  });
  percent[i].addEventListener("mouseout", function() {
    let detail = document.querySelectorAll(".detail");
    detail[i].classList.remove("show");
  });
}

//count last week value
let num = document.querySelectorAll(".num");
let lastweek = document.querySelectorAll(".last-week");
let detail_span = document.querySelectorAll(".detail span");
for (let i = 0; i < percent.length; i++) {
  if (i <= 1) {
    let rate = (100 + parseInt(percent[i].textContent)) / 100;
    let lastweeknum = Math.floor(parseInt(num[i].textContent) / rate);
    lastweek[i].textContent = "last week:" + lastweeknum;
    detail_span[i].textContent =
      parseInt(num[i].textContent) -
      Math.floor(parseInt(num[i].textContent) / rate);
  } else {
    let rate = (100 - parseInt(percent[i].textContent)) / 100;
    let lastweeknum = Math.floor(parseInt(num[i].textContent) / rate);
    lastweek[i].textContent = "last week:" + lastweeknum;
    detail_span[i].textContent =
      Math.floor(parseInt(num[i].textContent) / rate) -
      parseInt(num[i].textContent);
  }
}
