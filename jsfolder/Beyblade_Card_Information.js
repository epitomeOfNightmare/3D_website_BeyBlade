let blade_state = 0;
const blade_name = ["Blade 1", "Blade 2", "Blade 3"];

let ratchet_state = 0;
const ratchet_name = ["Ratchet 1", "Ratchet 2", "Ratchet 3"];

let bit_state = 0;
const bit_name = ["Bit 1", "Bit 2", "Bit 3"];


function changeBladeDisplay(selection)
{
    blade_state = selection;

    document.querySelectorAll(".blade-Selected").forEach(item => {
        item.innerHTML = blade_name[blade_state];
    });
}

function changeRatchetDisplay(selection)
{
    ratchet_state = selection;

    document.querySelectorAll(".ratchet-Selected").forEach(item => {
        item.innerHTML = ratchet_name[ratchet_state];
    })
}

function changeBitDisplay(selection)
{
    bit_state = selection;

    document.querySelectorAll(".bit-Selected").forEach(item => {
        item.innerHTML = bit_name[bit_state];
    })
}