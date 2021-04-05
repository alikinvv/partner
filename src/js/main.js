let price = () => {
    $('.price span').text( Math.round((($('#middle-input').val() * $('#members-input').val()) * 2000) * 0.35) );
}

price();

let middle = document.getElementById('slider-middle');
let middleInput = document.getElementById('middle-input');

noUiSlider.create(middle, {
    start: 20,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 200
    }
});

middle.noUiSlider.on('update', (values, handle) => {
    middleInput.value = Math.round(values[handle]);
    price();
});

middleInput.addEventListener('change', (e) => {
    console.log(e)
    middle.noUiSlider.set(e.target.value);
    price();
});

let members = document.getElementById('slider-members');
let membersInput = document.getElementById('members-input');

noUiSlider.create(members, {
    start: 55,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 200
    }
});

members.noUiSlider.on('update', (values, handle) => {
    membersInput.value = Math.round(values[handle]);
    price();
});

membersInput.addEventListener('change', (e) => {
    members.noUiSlider.set(e.target.value);
    price();
});