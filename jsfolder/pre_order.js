const model_and_cost = [
    {
        model: "https://picsum.photos/600/800?1",
        cost: "$10"
    },
    {
        model: "https://picsum.photos/600/800?2",
        cost: "$20"
    },
    {
        model: "https://picsum.photos/600/800?3",
        cost: "$30"
    }
]
const layout2ItemsData = [
  {
    leftImage: "https://picsum.photos/80/80?1",
    rightImage: "https://picsum.photos/100/50?1",
    text: "Item 1 Text",
    extra: [
      {
        leftImage: "https://picsum.photos/80/80?11",
        rightImage: "https://picsum.photos/100/50?11",
        text: "Extra 1A",
      },
      {
        leftImage: "https://picsum.photos/80/80?12",
        rightImage: "https://picsum.photos/100/50?12",
        text: "Extra 1B",
      },
    ],
  },
  {
    leftImage: "https://picsum.photos/80/80?2",
    rightImage: "https://picsum.photos/100/50?2",
    text: "Item 2 Text",
    extra: [
      {
        leftImage: "https://picsum.photos/80/80?21",
        rightImage: "https://picsum.photos/100/50?21",
        text: "Extra 2A",
      },
      {
        leftImage: "https://picsum.photos/80/80?22",
        rightImage: "https://picsum.photos/100/50?22",
        text: "Extra 2B",
      },
    ],
  },
  {
    leftImage: "https://picsum.photos/80/80?3",
    rightImage: "https://picsum.photos/100/50?3",
    text: "Item 3 Text",
    extra: [
      {
        leftImage: "https://picsum.photos/80/80?31",
        rightImage: "https://picsum.photos/100/50?31",
        text: "Extra 3A",
      },
      {
        leftImage: "https://picsum.photos/80/80?32",
        rightImage: "https://picsum.photos/100/50?32",
        text: "Extra 3B",
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
                            <img src="https://picsum.photos/100?1" onclick="changeContent(0)">
                            <img src="https://picsum.photos/100?2" onclick="changeContent(1)">
                            <img src="https://picsum.photos/100?3" onclick="changeContent(2)">
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
}
function loadLayout2() {
    document.getElementById("content-area").innerHTML = `
    <div class="layout2">

      <!-- LEFT COLUMN -->
      <div class="layout2-left-items">

        <!-- First Div 1 -->
        <div class="first-div">
          <img class="main-image" src="https://picsum.photos/80/80?1">
          <div class="second-div" onclick="toggleExtraDivs(this)" data-text="Item 1" data-image="https://picsum.photos/60/60?1">
            <p class="second-text">Item 1</p>
            <img class="second-image" src="https://picsum.photos/60/60?1">
          </div>
        </div>

        <!-- First Div 2 -->
        <div class="first-div">
          <img class="main-image" src="https://picsum.photos/80/80?2">
          <div class="second-div" onclick="toggleExtraDivs(this)" data-text="Item 2" data-image="https://picsum.photos/60/60?2">
            <p class="second-text">Item 2</p>
            <img class="second-image" src="https://picsum.photos/60/60?2">
          </div>
        </div>

        <!-- First Div 3 -->
        <div class="first-div">
          <img class="main-image" src="https://picsum.photos/80/80?3">
          <div class="second-div" onclick="toggleExtraDivs(this)" data-text="Item 3" data-image="https://picsum.photos/60/60?3">
            <p class="second-text">Item 3</p>
            <img class="second-image" src="https://picsum.photos/60/60?3">
          </div>
        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="layout2-right">
        <h1>Right Title</h1>
        <p>Some description text here</p>
        <button>Full Width Button</button>
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

  // Remove existing overlays if already expanded
  if (secondDiv.classList.contains("expanded")) {
    const existingContainer = parent.querySelector(".overlay-container");
    if (existingContainer) existingContainer.remove();
    secondDiv.classList.remove("expanded");
    return;
  }

  secondDiv.classList.add("expanded");

  // Create overlay container
  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("overlay-container");

  // Position overlay container right of second-div
  const secondRect = secondDiv.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  overlayContainer.style.top = (secondDiv.offsetTop) + "px";
  overlayContainer.style.left = (secondDiv.offsetLeft + secondDiv.offsetWidth) + "px";

  parent.appendChild(overlayContainer);

  const text = secondDiv.dataset.text;

  // Create 3 overlay divs horizontally
  for (let i = 1; i <= 3; i++) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay-div");
    overlay.innerHTML = `
      <p>${text} Option ${i}</p>
      <img src="https://picsum.photos/60/60?${i + 10}">
    `;

    overlay.addEventListener("click", () => {
      // Update main-image and second-div
      parent.querySelector(".main-image").src = overlay.querySelector("img").src;
      secondDiv.querySelector(".second-image").src = overlay.querySelector("img").src;
      secondDiv.querySelector(".second-text").innerText = overlay.querySelector("p").innerText;
    });

    overlayContainer.appendChild(overlay);
  }
}

loadLayout1();
changeContent(0);