let blade_state = 0;
const blade_name = ["Blade 1", "Blade 2", "Blade 3"];
const blade_info = [
    "The strong metal blade allows this Beyblade to deliver devastating attacks",
    "With its strong core, this blade keeps the Beyblade stable under relentless attacks",
    "Speed and maneuverability is the name of the game, with this blade's lightweight design"
]

let ratchet_state = 0;
const ratchet_name = ["Ratchet 1", "Ratchet 2", "Ratchet 3"];
const ratchet_info = [
    "This steady ratchet keeps the Beyblade ready for continuous assault", 
    "Solid as steel, this ratchet protects the Beyblade well, keeping it safe from falling over",
    "Simple and lightweight, this ratchet greatly enhances the Beyblade’s speed"
]

let bit_state = 0;
const bit_name = ["Bit 1", "Bit 2", "Bit 3"];
const bit_info = [
    "A thin bit for a quick attack, this bit allows greater maneuverability for the Beyblade",
    "A heavy bit for a defensive Beyblade, the stability it provides is unmatched",
    "This weighty bit keeps the Beyblade stable so it doesn’t spin out of control, while giving it a strong base"
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
}