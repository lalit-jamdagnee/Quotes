//Getting elements
let shuffle = document.querySelector('.shuffle');

let data = {};
// Fetching the data from the api
const Quotes = async()=>{
    const response = await fetch('https://quotes-api-self.vercel.app/quote')
    data = await response.json();
    console.log(data);
}

//Adding animation while updating the quotes

const animateOut = ()=>{
    gsap.to([quote, author], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease:"power1.in"
    })
}

const animateIn = ()=>{
    gsap.fromTo([quote, author],
        {
            opacity: 0,
            y: -20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease:"power1.out"
        })
}
//Adding the eventListener on Shuffle button

shuffle.addEventListener('click', async ()=>{
    animateOut();
    await Quotes();

    let retries = 5;
    while(data.quote && data.quote.length > 90 && retries){
        await Quotes();
        retries--;
    }
    quote.textContent = data.quote;
    author.textContent = data.author;
    animateIn();
})



