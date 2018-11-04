// set nav color
function setnavcolor() {
  let headerh2 = document.querySelector("header h2");
  if (headerh2.textContent === "product") {
    let nava = document.querySelector(".nav-list .product");
    nava.setAttribute("style", "color:white; border-bottom: 4px solid white;");
  }
}
setnavcolor();
// header input effect
let headerinput = document.querySelector("header input");
headerinput.addEventListener("click", function() {
  let inputcheckbox = document.querySelectorAll(".product input");
  if (headerinput.checked == true) {
    for (let i = 0; i < inputcheckbox.length; i++) {
      inputcheckbox[i].checked = true;
    }
  } else {
    for (let i = 0; i < inputcheckbox.length; i++) {
      inputcheckbox[i].checked = false;
    }
  }
});

// tag hover effect
let tag = document.querySelector(".fa-tags");
tag.addEventListener("mouseover", function() {
  let header = document.querySelector("header");
  header.classList.toggle("header-tag-show");
});
tag.addEventListener("mouseout", function() {
  let header = document.querySelector("header");
  header.classList.toggle("header-tag-show");
});
// tag click effect
tag.addEventListener("click", function() {
  let statusselectopt = document.querySelectorAll("#status-select option");
  let inputcheckbox = document.querySelectorAll(".product input");
  for (let i = 0; i < statusselectopt.length; i++) {
    if (
      inputcheckbox[i].checked == true &&
      statusselectopt[i].textContent == "published"
    ) {
      statusselectopt[i].innerHTML = "unpublished";
    } else if (
      inputcheckbox[i].checked == true &&
      statusselectopt[i].textContent == "unpublished"
    ) {
      statusselectopt[i].innerHTML = "published";
    }
  }
  checkstatuscolor();
  wordcolorchange();
});

//add new product window show and close
let add = document.querySelector(".add");
add.addEventListener("click", function() {
  let addnewproduct = document.querySelector(".addnewproduct");
  addnewproduct.classList.toggle("show");
});

let times = document.querySelector(".fa-times");
times.addEventListener("click", function() {
  let addnewproduct = document.querySelector(".addnewproduct");
  addnewproduct.classList.remove("show");
});

//add specific effect
let addbutton = document.querySelector(".addbutton");
addbutton.addEventListener("click", function() {
  let specificbox = document.querySelectorAll(".specificbox");
  let specificboxlen = specificbox.length - 1;
  let specidicboxcontent = `<div class="specificbox">
  <label for="size" class="size">Size</label>
  <input type="text" id="size">
  <label for="color" class="color">Color</label>
  <input type="text" id="color">
  <label for="inventory" class="Inventory">Inventory</label>
  <input type="text" id="inventory">
</div>`;
  specificbox[specificboxlen].insertAdjacentHTML(
    "afterend",
    specidicboxcontent
  );
});

//save draft effect
let savedraft = document.querySelector("#save");
savedraft.addEventListener("click", function() {
  let specificbox = document.querySelectorAll(".specificbox");
  let specificboxlen = specificbox.length;
  let table = document.querySelector("tbody");
  let tr = document.querySelectorAll("tr");
  let lasttrnum = parseInt(tr[tr.length - 1].dataset.num);
  for (let i = 0; i < specificboxlen; i++) {
    let el = document.createElement("tr");
    el.setAttribute("data-num", lasttrnum + 1);
    table.appendChild(el);
  }
});
//--------------------------------------------

//change table tr color
let tr = document.querySelectorAll("tr");
for (let i = 0; i < tr.length; i++) {
  if (tr[i].dataset.num % 2 == 1) {
    let tr = document.querySelectorAll("tr");
    tr[i].style.background = " #EBEBEB";
  }
}
//-----------------------------------------------
//status list show
let statusselect = document.querySelectorAll("#status-select");
for (let i = 0; i < statusselect.length; i++) {
  statusselect[i].addEventListener("click", function(e) {
    let statuslist = document.querySelectorAll(".status-list");
    statuslist[i].classList.toggle("show");
  });
}

//--------------------------------------------
//change status
let statuslist = document.querySelectorAll(".status-list");
for (let i = 0; i < statuslist.length; i++) {
  statuslist[i].addEventListener("click", function(e) {
    let el = e.target.textContent;

    let statusselectopt = document.querySelectorAll("#status-select option");
    let statuslist = document.querySelectorAll(".status-list");
    statusselectopt[i].innerHTML = `${el}`;
    statuslist[i].classList.toggle("show");
    checkstatuscolor();
    wordcolorchange();
  });
}
function checkstatuscolor() {
  let statusselectopt = document.querySelectorAll("#status-select option");
  for (let i = 0; i < statusselectopt.length; i++) {
    if (statusselectopt[i].textContent == "published") {
      let statusselect = document.querySelectorAll("#status-select");
      statusselect[i].setAttribute("style", "background:#7ED321");
    } else {
      let statusselect = document.querySelectorAll("#status-select");
      statusselect[i].setAttribute(
        "style",
        "background:#9B9B9B;border: 1px solid #9B9B9B;"
      );
    }
  }
}
function wordcolorchange() {
  let tr = document.querySelectorAll("tr");
  let statusselectopt = document.querySelectorAll("#status-select option");
  for (let i = 0; i < statusselectopt.length; i++) {
    if (statusselectopt[i].textContent == "unpublished") {
      for (let j = 0; j < tr.length; j++) {
        if (tr[j].dataset.num == i) {
          tr[j].style.color = "#9B9B9B";
        }
      }
    } else {
      for (let j = 0; j < tr.length; j++) {
        if (tr[j].dataset.num == i) {
          tr[j].style.color = "#000000";
        }
      }
    }
  }
}
//--------------------------------------------------------
