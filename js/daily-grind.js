//alert("It's working");

/*

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


pic - image src
alt - the alt tag for the image
desc - a description of the coffee
day -  the day of the week for the coffee
color -  color associated with coffee
name - the name of the coffee

*/

function coffeeTemplate(coffee){
    let myReturn = "";
    
        myReturn += `
            <p>  
                <img src="${coffee.pic}" alt="${coffee.alt}" 
                id="coffee" />
                <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s 
                daily coffee special is <strong class="feature"> ${coffee.name}
                </strong>, ${coffee.desc}      
            </p>         
        `;

    return myReturn;   

    
}



let myDate = new Date ();
let myDay = myDate.getDay();
let today= "";
let coffee= "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//data on querystring, load from querystring
myDay= urlParams.get("day");

}
//  converts to integer as it's a string from querystring 
myDay = parseInt(myDay);


switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            color:"Magenta",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day:"Sunday",
            desc: `We provide the best Caramel Latte!
            A Caramel Latte is made by mixing espresso with caramel syrup and pouring steamed milk on top.`
        };
    break;
    case 1:
        today = "Monday";
        coffee = {
            color:"PaleGreen",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day:"Monday",
            desc: `Frappuccino is one of the more popular coffee drinks that is universally adored.A Frappuccino is a trademarked blended iced coffee drink. This drink has a coffee or crème base that is blended with ice and ingredients like flavors, syrups, spices, and whipped cream.
           `
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"Navy",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day:"Tuesday",
            desc: `Bubble tea is a tea-based drink that originated in Taiwan in the early 1980s. It most commonly consists of tea accompanied by chewy tapioca balls, but it can be made with other toppings as well such as grass jelly, aloe vera, red bean, etc.`
        };
    break;
  
    case 3:
        today = "Wednsday";
        coffee = {
            color:"Black",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold brew",
            day:"Wednesday",
            desc: `Cold brew is simply coffee that has been brewed with cold rather than hot water and usually involves a long steeping process—anywhere between 12-24 hours. In terms of flavor, cold brew is generally characterized as smooth, low-acid, and heavier than its hot brewed counterparts.`
        };
    break;
    case 4:
        today = "Thursday";
        coffee = {
            color:"Sienna",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte",
            day:"Thursday",
            desc: `The Pumpkin Spice Latte is a coffee drink made with a mix of traditional autumn spice flavors (cinnamon, nutmeg, and clove), steamed milk, espresso, and often sugar, topped with whipped cream and pumpkin pie spice.`
        };
    break;
    case 5:
        today = "Friday";
        coffee = {
            color:"Yellow",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            day:"Friday",
            desc: `A mocha is a blend of a cappuccino and a hot chocolate. Like a cappuccino it contains espresso, warm milk and a frothy top but it also contains a sweet chocolatey twist using either chocolate powder, chocolate syrup or melted chocolate.`
        };
    break;

    default:
        today = "Saturday";
        coffee = {
            color:"DarkSlateGrey",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a drip",
            day:"Saturday",
            desc: `Can I have a venti drip? :)
            Drip coffee is the product of an automatic process, you put the grinds in, you pour your water in and you push the button. `
        };
}


// let coffeeData= coffeeTemplate(coffee);
// alert(coffeeData);


// // loads coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
// console.log(coffee);
