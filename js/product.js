// set nav color
function setnavcolor() {
  let headerh2 = document.querySelector("header h2");
  if (headerh2.textContent === "product") {
    let nava = document.querySelector(".nav-list .product");
    nava.setAttribute("style", "color:white; border-bottom: 4px solid white;");
  }
}
setnavcolor();
//change table tr color
function tablecolor() {
  let tr = document.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    if (tr[i].dataset.num % 2 == 1) {
      let tr = document.querySelectorAll("tr");
      tr[i].style.background = " #EBEBEB";
    }
  }
}
tablecolor();
//-----------------------------------------------
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
//--------------------------------------------------------------

//add new product window show and close
statuslistshow();

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
  <select id="size">
    <option value="L">L</option>
    <option value="M">M</option>
    <option value="S">S</option>
  </select>
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
  let name = document.querySelector(".name");
  let original = document.querySelector("#original");
  let discount = document.querySelector("#discount");
  let size = document.querySelectorAll("#size");
  let color = document.querySelectorAll("#color");
  let inventory = document.querySelectorAll("#inventory");
  const sizetotal = [],
    colortotalL = [],
    colortotalM = [],
    colortotalS = [],
    inventorytotalL = [],
    inventorytotalM = [],
    inventorytotalS = [];
  let publishedcontent = "unpublished";
  for (let i = 0; i < size.length; i++) {
    if (size[i].value == "M") {
      sizetotal.push(size[i].value);
      colortotalM.push(color[i].value);
      inventorytotalM.push(inventory[i].value);
    } else if (size[i].value == "L") {
      sizetotal.push(size[i].value);
      colortotalL.push(color[i].value);
      inventorytotalL.push(inventory[i].value);
    } else {
      sizetotal.push(size[i].value);
      colortotalS.push(color[i].value);
      inventorytotalS.push(inventory[i].value);
    }
  }
  //過濾size資料
  const sizetotaluse = [];
  sizetotal.forEach(function(value, index, sizetotal) {
    if (sizetotaluse.indexOf(value) == -1) {
      sizetotaluse.push(sizetotal[index]);
    }
  });

  let namevalue = name.value;
  let originalvalue = original.value;
  let discountvalue = discount.value;
  newtable(
    namevalue,
    originalvalue,
    discountvalue,
    sizetotaluse,
    colortotalM,
    colortotalL,
    colortotalS,
    inventorytotalL,
    inventorytotalM,
    inventorytotalS,
    publishedcontent
  );
  resetspec();
  tablecolor();
  changestatus();
  statuslistshownew();
});

// save publish effect
let savepublish = document.querySelector("#publish");
savepublish.addEventListener("click", function() {
  let name = document.querySelector(".name");
  let original = document.querySelector("#original");
  let discount = document.querySelector("#discount");
  let size = document.querySelectorAll("#size");
  let color = document.querySelectorAll("#color");
  let inventory = document.querySelectorAll("#inventory");
  const sizetotal = [],
    colortotalL = [],
    colortotalM = [],
    colortotalS = [],
    inventorytotalL = [],
    inventorytotalM = [],
    inventorytotalS = [];
  let publishedcontent = "published";
  for (let i = 0; i < size.length; i++) {
    if (size[i].value == "M") {
      sizetotal.push(size[i].value);
      colortotalM.push(color[i].value);
      inventorytotalM.push(inventory[i].value);
    } else if (size[i].value == "L") {
      sizetotal.push(size[i].value);
      colortotalL.push(color[i].value);
      inventorytotalL.push(inventory[i].value);
    } else {
      sizetotal.push(size[i].value);
      colortotalS.push(color[i].value);
      inventorytotalS.push(inventory[i].value);
    }
  }
  //過濾size資料
  const sizetotaluse = [];
  sizetotal.forEach(function(value, index, sizetotal) {
    if (sizetotaluse.indexOf(value) == -1) {
      sizetotaluse.push(sizetotal[index]);
    }
  });

  let namevalue = name.value;
  let originalvalue = original.value;
  let discountvalue = discount.value;
  newtable(
    namevalue,
    originalvalue,
    discountvalue,
    sizetotaluse,
    colortotalM,
    colortotalL,
    colortotalS,
    inventorytotalL,
    inventorytotalM,
    inventorytotalS,
    publishedcontent
  );
  resetspec();
  tablecolor();
  changestatus();
  statuslistshownew();
});
// create new table
function newtable(
  namevalue,
  originalvalue,
  discountvalue,
  sizetotaluse,
  colortotalM,
  colortotalL,
  colortotalS,
  inventorytotalL,
  inventorytotalM,
  inventorytotalS,
  publishedcontent
) {
  let tbody = document.querySelector("tbody");
  let tr = document.querySelectorAll("tr");
  let trlen = tr.length;
  let trlendatanum = parseInt(tr[trlen - 1].dataset.num);
  // 計算新增內容數量(specificbox 數量 = 之後新增tr數量)
  let sizetotaluselen = sizetotaluse.length;
  // 跑回圈新增tr 及 tr 內容(i=size數量, j=標題數量)
  for (let i = 0; i < sizetotaluselen; i++) {
    let createtr = document.createElement("tr");
    createtr.setAttribute("data-num", trlendatanum + 1);
    tbody.appendChild(createtr);
    for (let j = 0; j < 7; j++) {
      let tdclass = [
        "product",
        "origin",
        "discount",
        "size",
        "color",
        "inventory",
        "status"
      ];
      //set size color inventory content
      let createtd = document.createElement("td");
      let createp = document.createElement("p");
      createtd.appendChild(createp);
      createtd.setAttribute("class", tdclass[j]);
      if (sizetotaluse[i] == "L") {
        if (j == 3) {
          createp.textContent = "L";
        } else if (j == 4) {
          for (let k = 0; k < colortotalL.length; k++) {
            let createspan = document.createElement("span");
            createspan.textContent = colortotalL[k];
            createp.appendChild(createspan);
          }
        } else if (j == 5) {
          for (let k = 0; k < colortotalL.length; k++) {
            let createspan = document.createElement("span");
            createspan.textContent = inventorytotalL[k];
            createp.appendChild(createspan);
          }
        }
      } else if (sizetotaluse[i] == "M") {
        if (j == 3) {
          createp.textContent = "M";
        } else if (j == 4) {
          for (let k = 0; k < colortotalM.length; k++) {
            let createspan = document.createElement("span");
            createspan.textContent = colortotalM[k];
            createp.appendChild(createspan);
          }
        } else if (j == 5) {
          for (let k = 0; k < colortotalL.length; k++) {
            let createspan = document.createElement("span");
            createspan.textContent = inventorytotalM[k];
            createp.appendChild(createspan);
          }
        }
      } else if (sizetotaluse[i] == "S") {
        if (j == 3) {
          createp.textContent = "S";
        } else if (j == 4) {
          for (let k = 0; k < colortotalS.length; k++) {
            let createspan = document.createElement("span");
            createspan.textContent = colortotalS[k];
            createp.appendChild(createspan);
          }
        } else if (j == 5) {
          for (let k = 0; k < colortotalL.length; k++) {
            let createspan = document.createElement("span");
            createspan.textContent = inventorytotalS[k];
            createp.appendChild(createspan);
          }
        }
      }
      createtr.appendChild(createtd);
      //set other content
      if (i == sizetotaluselen - 1 && j == 6) {
        createtd.innerHTML = `
        <select id="status-select">
          <option value="published">${publishedcontent}</option>
        </select>
        <div class="status-list">
            <p>published</p>
            <p>unpublished</p>
        </div>`;
      } else if (i == 0 && j == 0) {
        createtd.innerHTML = `
          <input type="checkbox">
          <img src="images/100.jpg" alt="">
          <p>${namevalue}</p>`;
      } else if (i == 0 && j == 1) {
        createtd.innerHTML = `
        <p>${originalvalue}</p>
        `;
      } else if (i == 0 && j == 2) {
        createtd.innerHTML = `
        <p>${discountvalue}</p>
        `;
      }
    }
  }
  checkstatuscolor();
  wordcolorchange();
}

function resetspec() {
  let specificboxset = document.querySelector(".specificbox-set");
  specificboxset.innerHTML = `
  <div class="specificbox">
    <p class="specification">Specification</p>
    <label for="size" class="size">Size</label>
    <select id="size">
      <option value="L">L</option>
      <option value="M">M</option>
      <option value="S">S</option>
    </select>
    <label for="color" class="color">Color</label>
    <input type="text" id="color">
    <label for="inventory" class="Inventory">Inventory</label>
    <input type="text" id="inventory">
  </div>`;
}
//--------------------------------------------

//status list show
function statuslistshow() {
  let statusselect = document.querySelectorAll("#status-select");
  for (let i = 0; i < statusselect.length; i++) {
    statusselect[i].addEventListener("click", function(e) {
      let statuslist = document.querySelectorAll(".status-list");
      statuslist[i].classList.toggle("show");
    });
  }
}
function statuslistshownew() {
  let statusselect = document.querySelectorAll("#status-select");
  let i = statusselect.length;
  statusselect[i - 1].addEventListener("click", function(e) {
    let statuslist = document.querySelectorAll(".status-list");
    statuslist[i - 1].classList.toggle("show");
  });
}

//--------------------------------------------
//change status
function changestatus() {
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
