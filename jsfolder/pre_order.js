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


loadLayout1();
changeContent(0);