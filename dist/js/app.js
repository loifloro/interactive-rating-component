
function select(rating) {
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');

 
    const cardResult = document.querySelector('.card__result');
    
    
    if (rating == '1') {
        removeStyle();
        one.classList.toggle('card__scale-item--selected');
        
        const ratings = ' 1 ';
        cardResult.innerHTML = 'You selected' + ratings + 'out of 5';

    }
    else if (rating == '2') {
        removeStyle();
        two.classList.toggle('card__scale-item--selected');

        const ratings = ' 2 ';
        cardResult.innerHTML = 'You selected' + ratings + 'out of 5';
    }
    else if (rating == '3') {
        removeStyle();
        three.classList.toggle('card__scale-item--selected');

        const ratings = ' 3 ';
        cardResult.innerHTML = 'You selected' + ratings + 'out of 5';
    }
    else if (rating == '4') {
        removeStyle();
        four.classList.toggle('card__scale-item--selected');

        const ratings = ' 4 ';
        cardResult.innerHTML = 'You selected' + ratings + 'out of 5';
    }
    else if (rating == '5') {
        removeStyle();
        five.classList.toggle('card__scale-item--selected');
        const ratings = ' 5 ';
        cardResult.innerHTML = 'You selected' + ratings + 'out of 5';
    }

}

function removeStyle() {
    one.classList.remove('card__scale-item--selected');
    two.classList.remove('card__scale-item--selected');
    three.classList.remove('card__scale-item--selected');
    four.classList.remove('card__scale-item--selected');
    five.classList.remove('card__scale-item--selected');
}

function reviewState() {
    const cardRating = document.querySelector('.card__rating');
    const cardSubmit = document.querySelector('.card__submit');

    cardRating.classList.add('card--hide')
    cardSubmit.classList.remove('card--hide')
    
}