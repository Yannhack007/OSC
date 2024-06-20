function getData() {
    fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/restaurants-casvp/records?limit=20")
    .then(response=>response.json())
    .then(data=>{
        const {results}=data;
        results.forEach(restaurant=>{
            const{nom_restaurant,type}=restaurant;
            //console.log(restaurant);

            //création d'une carte
            function AddCArd(nom, type) {
                var card=document.createElement("div");
                card.classList.add("card");
                
                var cardImg=document.createElement("img");
                cardImg.src=restaurants[0].image;
                card.appendChild(cardImg);
            
                var cardTitle=document.createElement("h2");
                cardTitle.innerHTML=nom;
                card.appendChild(cardTitle);
            
                var cardDesc=document.createElement("p");
                cardDesc.innerHTML=type;
                card.appendChild(cardDesc);
            
                return card;
            }

            //ajouter la carte au document
                var ligne1=document.createElement("div");
                ligne1.classList.add("ligne1");
                document.body.appendChild(ligne1);
                var card0=AddCArd(restaurant.nom_restaurant,restaurant.type);
                for (let index = 0; index < restaurant.length; index++) {
                    ligne1.appendChild(card0)   
                }
                ligne1.appendChild(card0);
            }) 

    }
    )

}

getData();


const restaurants=[
    {
        name:"African Eat",
        typeCuisine:"Africaine",
        image:"./Images.png"
    },

    {
        name:"French Eat",
        typeCuisine:"Francaise",
        image:"./Images.png"
    },
    {
        name:"Italian Eat",
        typeCuisine:"Italienne",
        image:"./Images.png"
    },
    {
        name:"Mexican Eat",
        typeCuisine:"Mexicaine",
        image:"./Images.png"
    },
];

document.getElementById("cuisine-type-select").addEventListener('change',
    function() {
        var selected=this.value;
        var cards=document.querySelectorAll(".card .restaurant-grid");
        cards.forEach(function (card) {
            if(selected==='Tous'){
                card.style.display="flex";
            }else{
                card.style.display="none";
            }
        });
    }
);
    
