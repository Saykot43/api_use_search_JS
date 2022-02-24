const main = document.getElementById('main');

const searchButton = () =>{
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue= parseInt(input.value);
    if (isNaN(inputValue) || inputValue=="" ){
        // alert('Please enter a number');
        error.innerText="Please enter a number";
        input.value="";
        main.innerHTML="";
    }
    else if(inputValue<=0){
        error.innerText="Please give a positive number";
        input.value="";
        main.innerHTML="";
    }
    else{
        fetch(`
        https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}
        `)
        .then(res => res.json())
        .then(data => cardsDisplay(data.cards));
        input.value="";
        main.innerHTML="";
        error.innerHTML="";
    }
    const cardsDisplay = (cards) => {
        // cards = cards.cards;
        // console.log(cards); 
        for(const card of cards){
            // console.log(card);
            const div = document.createElement("div");
            div.classList.add("col-lg-4");
            div.classList.add("mb-5");
        div.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.value}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        main.appendChild(div);
        }
    }


}