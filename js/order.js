// set nav color
function setnavcolor() {
  let headerh2 = document.querySelector("header h2");
  if (headerh2.textContent === "orders") {
    let nava = document.querySelector(".nav-list .orders");
    nava.setAttribute("style", "color:white; border-bottom: 4px solid white;");
  }
}
setnavcolor();

// left list show and choose effect
let fasdown = document.querySelector(".fa-caret-down");
let fatag = document.querySelector(".fa-tags");
let selectoption_p = document.querySelectorAll(".selectoption p");
let tagoption_p = document.querySelectorAll(".tagoption p");
fasdown.addEventListener("click", function() {
  let seloption = document.querySelector(".selectoption");
  seloption.classList.toggle("show");
});
fatag.addEventListener("click", function() {
  let tagoption = document.querySelector(".tagoption");
  tagoption.classList.toggle("show");
});
// choose all ...................effect下拉
for (let i = 0; i < selectoption_p.length; i++) {
  selectoption_p[i].addEventListener("click", function(e) {
    let seloption = document.querySelector(".selectoption");
    seloption.classList.toggle("show");
    let el = e.target.textContent;
    chooseeffect(el);
  });
}
//use tag change status effect
for (let i = 0; i < tagoption_p.length; i++) {
  tagoption_p[i].addEventListener("click", function(e) {
    let seltagoption = document.querySelector(".tagoption");
    seltagoption.classList.toggle("show");
    let eltag = e.target.textContent;
    tagoptioneffect(eltag);
    checkcolor();
    storestatus();
  });
}

let customer_input = document.querySelectorAll(".customer input");
for (let i = 0; i < customer_input.length; i++) {
  customer_input[i].addEventListener("click", function(e) {
    // e.preventDefault();
    if (customer_input[i].checked == true) {
      customer_input[i].checked = true;
    } else {
      customer_input[i].checked = false;
    }
  });
}

let headerinput = document.querySelector(".headerinput");
headerinput.addEventListener("click", function() {
  let customer_input = document.querySelectorAll(".customer input");
  if (headerinput.checked == true) {
    for (let j = 0; j < customer_input.length; j++) {
      customer_input[j].checked = true;
    }
  } else if (headerinput.checked == false) {
    for (let j = 0; j < customer_input.length; j++) {
      customer_input[j].checked = false;
    }
  }
});
// left choose status
function chooseeffect(el) {
  let customer_input = document.querySelectorAll(".customer input");
  let optiontext = document.querySelectorAll(".status-option option");

  if (el == "Select All") {
    for (let j = 0; j < customer_input.length; j++) {
      customer_input[j].checked = true;
    }
  } else if (el == "Unselect All") {
    for (let j = 0; j < customer_input.length; j++) {
      customer_input[j].checked = false;
    }
  } else if (el == "Paid") {
    for (let j = 0; j < optiontext.length; j++) {
      customer_input[j].checked = false;
      if (optiontext[j].textContent == "paid") {
        customer_input[j].checked = true;
      }
    }
  } else if (el == "Unpaid") {
    for (let j = 0; j < optiontext.length; j++) {
      customer_input[j].checked = false;
      if (optiontext[j].textContent == "unpaid") {
        customer_input[j].checked = true;
      }
    }
  } else if (el == "Shipping") {
    for (let j = 0; j < optiontext.length; j++) {
      customer_input[j].checked = false;
      if (optiontext[j].textContent == "shipping") {
        customer_input[j].checked = true;
      }
    }
  } else if (el == "Done") {
    for (let j = 0; j < optiontext.length; j++) {
      customer_input[j].checked = false;
      if (optiontext[j].textContent == "done") {
        customer_input[j].checked = true;
      }
    }
  }
}

function tagoptioneffect(eltag) {
  let customer_input = document.querySelectorAll(".customer input");
  let optiontext = document.querySelectorAll(".status-option option");
  for (let i = 0; i < customer_input.length; i++) {
    if (customer_input[i].checked == true) {
      if (eltag == "Paid") {
        optiontext[i].innerHTML = "paid";
      } else if (eltag == "Done") {
        optiontext[i].innerHTML = "done";
      } else if (eltag == "Shipping") {
        optiontext[i].innerHTML = "shipping";
      } else if (eltag == "Unpaid") {
        optiontext[i].innerHTML = "unpaid";
      }
    }
  }
}

// right list show effect
let fasdownsecond = document.querySelector(".second");
let editsection = document.querySelector(".editsection");
fasdownsecond.addEventListener("click", function() {
  let editoption = document.querySelector(".editoption");
  editoption.classList.toggle("show");
});
editsection.addEventListener("click", function() {
  let editoption = document.querySelector(".editoption");
  editoption.classList.toggle("show");
});

// right list change table head effect
editcheck();
let editli = document.querySelectorAll(".editoption li input");
for (let i = 0; i < editli.length; i++) {
  editli[i].addEventListener("click", function() {
    editcheck();
  });
}

function editcheck() {
  // 更新表格內容
  let editli = document.querySelectorAll(".editoption li input");
  let tableth = document.querySelectorAll("th");
  let tabletd = document.querySelectorAll("td");
  for (let i = 0; i < editli.length; i++) {
    if (editli[i].checked == true) {
      tableth[editli[i].dataset.num].style.display = "inline-block";
      for (let j = 0; j < tabletd.length; j++) {
        if (editli[i].dataset.num == j % 10) {
          // console.log(j);
          tabletd[j].style.display = "inline-block";
        }
      }
    } else {
      tableth[editli[i].dataset.num].style.display = "none";
      for (let j = 0; j < tabletd.length; j++) {
        if (editli[i].dataset.num == j % 10) {
          // console.log(j);
          tabletd[j].style.display = "none";
        }
      }
    }
  }
}

// status color renew everytime (local storage save change)
// storestatus();
setstatus();
checkcolor();

function checkcolor() {
  let statusopt = document.querySelectorAll(".status-option option");
  for (let i = 0; i < statusopt.length; i++) {
    let statustext = statusopt[i].textContent;
    if (statustext == "unpaid") {
      let statusse = document.querySelectorAll(".status-option");
      statusse[i].setAttribute("style", "background: #9B9B9B;color:white;");
    } else if (statustext == "paid") {
      let statusse = document.querySelectorAll(".status-option");
      statusse[i].setAttribute("style", "background: #7ED321;color:white;");
    } else if (statustext == "shipping") {
      let statusse = document.querySelectorAll(".status-option");
      statusse[i].setAttribute("style", "background: #F5A623;color:white;");
    } else {
      let statusse = document.querySelectorAll(".status-option");
      statusse[i].setAttribute("style", "background: #4A90E2;color:white;");
    }
  }
  statuseffect();
}
//status list show
let statusse = document.querySelectorAll(".status-option");
for (let i = 0; i < statusse.length; i++) {
  statusse[i].addEventListener("click", function() {
    let statusopt = document.querySelectorAll(".status .statuslist");
    statusopt[i].classList.toggle("show");
  });
}
// status list change option content
let statuslist = document.querySelectorAll(".statuslist");
for (let i = 0; i < statuslist.length; i++) {
  statuslist[i].addEventListener("click", function(e) {
    let el = e.target.textContent;
    // console.log(el);
    let statusopt = document.querySelectorAll(".status .statuslist");
    statusopt[i].classList.toggle("show");
    let optiontext = document.querySelectorAll(".status-option option");
    optiontext[i].innerHTML = `${el}`;
    checkcolor();
    storestatus();
  });
}
// effect of status content change(others element)
function statuseffect() {
  let statusopt = document.querySelectorAll(".status-option option");
  let tr = document.querySelectorAll("tr");
  for (let i = 0; i < statusopt.length; i++) {
    if (statusopt[i].textContent == "unpaid") {
      for (let j = 0; j < tr.length; j++) {
        if (i == tr[j].dataset.product) {
          tr[j].style.color = "gray";
          tr[j].classList.remove("done");
        }
      }
    } else if (statusopt[i].textContent == "done") {
      for (let j = 0; j < tr.length; j++) {
        if (i == tr[j].dataset.product) {
          tr[j].style.color = "gray";
          tr[j].classList.add("done");
        }
      }
    } else if (
      statusopt[i].textContent == "shipping" ||
      statusopt[i].textContent == "paid"
    ) {
      for (let j = 0; j < tr.length; j++) {
        if (i == tr[j].dataset.product) {
          tr[j].style.color = "black";
          tr[j].classList.remove("done");
        }
      }
    }
  }
}
// store status to local storage
function storestatus() {
  let DATA_store = []; //JSON.parse(localStorage.getItem("listDATA")) ||
  let optiontext = document.querySelectorAll(".status-option option");
  for (let i = 0; i < optiontext.length; i++) {
    DATA_store.push(optiontext[i].textContent);
    localStorage.setItem("listDATA", JSON.stringify(DATA_store));
  }
}
function setstatus() {
  let statusdata = JSON.parse(localStorage.getItem("listDATA")) || [];
  let optiontext = document.querySelectorAll(".status-option option");
  if (statusdata.length == 0) {
    storestatus();
    statusdata = JSON.parse(localStorage.getItem("listDATA"));
    for (let i = 0; i < statusdata.length; i++) {
      optiontext[i].innerHTML = `${statusdata[i]}`;
    }
  } else {
    for (let i = 0; i < optiontext.length; i++) {
      optiontext[i].innerHTML = `${statusdata[i]}`;
    }
  }
}
