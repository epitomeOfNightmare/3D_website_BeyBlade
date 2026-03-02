let blade_state = 0;
const blade_name = ["Blade 1", "Blade 2", "Blade 3"];
const blade_info = [
    "The strong metal blade allows this Beyblade to deliver devastating attacks",
    "With its strong core, this blade keeps the Beyblade stable under relentless attacks",
    "Speed and maneuverability is the name of the game, with this blade's lightweight design"
]
const blade_images = [
    "assets/Images/Beyblades/Blade/FA-Blade.png",
    "assets/Images/Beyblades/Blade/IW-Blade.png",
    "assets/Images/Beyblades/Blade/SK-Blade.png"
]

let ratchet_state = 0;
const ratchet_name = ["Ratchet 1", "Ratchet 2", "Ratchet 3"];
const ratchet_info = [
    "This steady ratchet keeps the Beyblade ready for continuous assault", 
    "Solid as steel, this ratchet protects the Beyblade well, keeping it safe from falling over",
    "Simple and lightweight, this ratchet greatly enhances the Beyblade’s speed"
]
const ratchet_images = [
    "assets/Images/Beyblades/Ratchet/FA-Ratchet.png",
    "assets/Images/Beyblades/Ratchet/IW-Ratchet.png",
    "assets/Images/Beyblades/Ratchet/SK-Ratchet.png",
]

let bit_state = 0;
const bit_name = ["Bit 1", "Bit 2", "Bit 3"];
const bit_info = [
    "A thin bit for a quick attack, this bit allows greater maneuverability for the Beyblade",
    "A heavy bit for a defensive Beyblade, the stability it provides is unmatched",
    "This weighty bit keeps the Beyblade stable so it doesn’t spin out of control, while giving it a strong base"
]
const bit_images = [
    "assets/Images/Beyblades/Bit/FA-Bit.png",
    "assets/Images/Beyblades/Bit/IW-Bit.png",
    "assets/Images/Beyblades/Bit/SK-Bit.png",
]

const full_models = [
    "assets/Models/FA/FA Full.glb",
    "assets/Models/IW/IW Full.glb",
    "assets/Models/SK/SK Full.glb"
]


function changeBladeDisplay(selection)
{
    blade_state = selection;

    document.querySelectorAll(".blade-Selected").forEach(item => {
        item.innerHTML = blade_name[blade_state];
    });
    document.querySelectorAll(".blade-Selected-info").forEach(item => {
        item.innerHTML = blade_info[blade_state];
    });

    document.querySelector(".blade-part-img").src = blade_images[blade_state];
}

function changeRatchetDisplay(selection)
{
    ratchet_state = selection;

    document.querySelectorAll(".ratchet-Selected").forEach(item => {
        item.innerHTML = ratchet_name[ratchet_state];
    })
    document.querySelectorAll(".ratchet-Selected-info").forEach(item => {
        item.innerHTML = ratchet_info[ratchet_state];
    })

    document.querySelector(".ratchet-part-img").src = ratchet_images[ratchet_state];
}

function changeBitDisplay(selection)
{
    bit_state = selection;

    document.querySelectorAll(".bit-Selected").forEach(item => {
        item.innerHTML = bit_name[bit_state];
    })
    document.querySelectorAll(".bit-Selected-info").forEach(item => {
        item.innerHTML = bit_info[bit_state];
    })

    document.querySelector(".bit-part-img").src = bit_images[bit_state];
}

function swapFullModel(selection) {
    window.changeWebGIModel("full-beyblade", full_models[selection]);
}

changeBladeDisplay(0);
changeRatchetDisplay(0);
changeBitDisplay(0);