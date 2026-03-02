const model_and_cost = [
    {
        model: "assets/Images/Beyblades/Whole/FA-Whole.png",
        cost: "$90"
    },
    {
        model: "assets/Images/Beyblades/Whole/IW-Whole.png",
        cost: "$90"
    },
    {
        model: "assets/Images/Beyblades/Whole/SK-Whole.png",
        cost: "$90"
    }
]
const layout2ItemsData = [
  {
    leftImage: "assets/Images/Beyblades/Blade/FA-Blade.png",
    rightImage: "assets/Images/Beyblades/Blade/FA-Blade.png",
    text: "Speed Blade",
    extra: [
      {
        leftImage: "assets/Images/Beyblades/Blade/FA-Blade.png",
        rightImage: "assets/Images/Beyblades/Blade/FA-Blade.png",
        text: "Speed Blade",
      },
      {
        leftImage: "assets/Images/Beyblades/Blade/IW-Blade.png",
        rightImage: "assets/Images/Beyblades/Blade/IW-Blade.png",
        text: "Defence Blade",
      },
      {
        leftImage: "assets/Images/Beyblades/Blade/SK-Blade.png",
        rightImage: "assets/Images/Beyblades/Blade/SK-Blade.png",
        text: "Attack Blade",
      }
    ],
  },
  {
    leftImage: "assets/Images/Beyblades/Ratchet/FA-Ratchet.png",
    rightImage: "assets/Images/Beyblades/Ratchet/FA-Ratchet.png",
    text: "Speed Ratchet",
    extra: [
      {
        leftImage: "assets/Images/Beyblades/Ratchet/FA-Ratchet.png",
        rightImage: "assets/Images/Beyblades/Ratchet/FA-Ratchet.png",
        text: "Speed Ratchet",
      },
      {
        leftImage: "assets/Images/Beyblades/Ratchet/IW-Ratchet.png",
        rightImage: "assets/Images/Beyblades/Ratchet/IW-Ratchet.png",
        text: "Defence Ratchet",
      },
      {
        leftImage: "assets/Images/Beyblades/Ratchet/SK-Ratchet.png",
        rightImage: "assets/Images/Beyblades/Ratchet/SK-Ratchet.png",
        text: "Attack Ratchet",
      },
    ],
  },
  {
    leftImage: "assets/Images/Beyblades/Bit/FA-Bit.png",
    rightImage: "assets/Images/Beyblades/Bit/FA-Bit.png",
    text: "Speed Bit",
    extra: [
      {
        leftImage: "assets/Images/Beyblades/Bit/FA-Bit.png",
        rightImage: "assets/Images/Beyblades/Bit/FA-Bit.png",
        text: "Speed Bit",
      },
      {
        leftImage: "assets/Images/Beyblades/Bit/IW-Bit.png",
        rightImage: "assets/Images/Beyblades/Bit/IW-Bit.png",
        text: "Defense Bit",
      },
      {
        leftImage: "assets/Images/Beyblades/Bit/SK-Bit.png",
        rightImage: "assets/Images/Beyblades/Bit/SK-Bit.png",
        text: "Attack Bit",
      },
    ],
  },
];



function loadLayout1() {
    document.getElementById("content-area").innerHTML = `
        <div class="layout1">
            
            <div class="left-img">
                <img src="https://picsum.photos/600/800" alt="Main Image" id="mainModel">
            </div>

            <div class="right-content">
                
                <div class="text-top">
                    <h1>Beyblade</h1>
                </div>

                <div class="text-middle">
                    <h2 id="modelCost">$1</h2>
                </div>

                <div class="middle-box">
                    <div class="inner">
                        <h3>Variations</h3>
                        <div class="image-row">
                            <img src="assets/Images/Beyblades/Whole/FA-Whole.png" onclick="changeContent(0)">
                            <img src="assets/Images/Beyblades/Whole/IW-Whole.png" onclick="changeContent(1)">
                            <img src="assets/Images/Beyblades/Whole/SK-Whole.png" onclick="changeContent(2)">
                        </div>
                    </div>
                </div>

                <div class="bottom-controls">
                    <input type="number" placeholder="Qty" min="0">
                    <button>Add to cart</button>
                </div>

            </div>
        </div>
    `;

    changeContent(0);
}
function loadLayout2() {
  const content = document.getElementById("content-area");

  let leftItemsHTML = "";

  layout2ItemsData.forEach((item, index) => {
    leftItemsHTML += `
      <div class="first-div" data-index="${index}">
        <img class="main-image" src="${item.leftImage}">
        <div class="second-div" onclick="toggleExtraDivs(this)" data-index="${index}">
          <p class="second-text">${item.text}</p>
          <img class="second-image" src="${item.rightImage}">
        </div>
      </div>
    `;
  });

  content.innerHTML = `
    <div class="layout2">
      <div class="layout2-left-items">
        ${leftItemsHTML}
      </div>

      <div class="layout2-right">
        <h1>Customised Beyblade</h1><br>
        <p><em>Your very own custom Beyblade!</em></p><br>
        <p class="preorderCost"><strong>$100</strong></p><br>
        <button><strong>Add to cart</strong></button>
      </div>
    </div>
  `;
}

function toggleDropdown(id) {
    // close all dropdowns first
    document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu.id !== id) {
            menu.style.display = 'none';
        }
    });

    const menu = document.getElementById(id);
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
// Close dropdown if clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.display = 'none';
        });
    }
}


function changeContent(index) {
    const selected = model_and_cost[index];

    document.getElementById("mainModel").src = selected.model;
    document.getElementById("modelCost").innerText = selected.cost;
}


function toggleExtraDivs(secondDiv) {
  const parent = secondDiv.parentNode;
  const index = secondDiv.dataset.index;
  const itemData = layout2ItemsData[index];

  // Remove if already expanded
  if (secondDiv.classList.contains("expanded")) {
    const existing = parent.querySelector(".overlay-container");
    if (existing) existing.remove();
    secondDiv.classList.remove("expanded");
    return;
  }

  secondDiv.classList.add("expanded");

  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("overlay-container");

  overlayContainer.style.top = secondDiv.offsetTop + "px";
  overlayContainer.style.left =
    secondDiv.offsetLeft + secondDiv.offsetWidth + "px";

  parent.appendChild(overlayContainer);

  // 🔥 Use the array's extra data
  itemData.extra.forEach(extraItem => {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay-div");

    overlay.innerHTML = `
      <p>${extraItem.text}</p>
      <img src="${extraItem.rightImage}">
    `;

    overlay.addEventListener("click", () => {
      parent.querySelector(".main-image").src = extraItem.leftImage;
      secondDiv.querySelector(".second-image").src = extraItem.rightImage;
      secondDiv.querySelector(".second-text").innerText = extraItem.text;

      overlayContainer.remove();
      secondDiv.classList.remove("expanded");
    });

    overlayContainer.appendChild(overlay);
  });
}

loadLayout1();