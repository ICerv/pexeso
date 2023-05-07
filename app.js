const cards = document.querySelectorAll('.karticka');

// cards[0].classList.remove('otocena');

let allCards = [];
let turnCard = (karticka) => {
  karticka.classList.toggle('otocena');
};

cards.forEach((karticka) => {
  karticka.addEventListener('click', () => {
    if (allCards.length < 2) {
      turnCard(karticka);
      allCards.push(karticka);

      if (allCards.length === 2) {
        const firstCard = allCards[0];
        const secondCard = allCards[1];

        if (
          firstCard.querySelector('img').src ===
          secondCard.querySelector('img').src
        ) {
          firstCard.disabled = true;
          secondCard.disabled = true;
          allCards = [];
        } else {
          setTimeout(() => {
            turnCard(firstCard);
            turnCard(secondCard);
            allCards = [];
          }, 1000);
        }
      }
    }
  });
});