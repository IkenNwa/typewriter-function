let rPlace = "";
let typeValue = "";
const places = ["Nigeria!", "Burundi!", "Uganda!", "South-Africa!", "Tanzania!", "Kenya!", "Ghana!", "Chad!", "Benin!", "Cameroun!"];


const randomPlace = () => {
    let numberOfPlaces = places.length;
    let rNum = Math.floor(Math.random() * numberOfPlaces)
    return rPlace = places[rNum];
}
function init() {
    
    randomPlace()
    const typeEffect = () => {
        if (typeValue.length < rPlace.length) {
            typeValue += rPlace.charAt(typeValue.length);
            setTimeout(typeEffect, 200);
        }
        else{
            randomPlace()
            setTimeout(eraseEffect, 1000)
        }

    }
    const eraseEffect = () => {
        if (typeValue === ""){
            setTimeout(typeEffect, 500)
        }else{
            typeValue = typeValue.substring(0, typeValue.length - 1)
            setTimeout(() => {
                eraseEffect()
            }, 100);
        }
    }

    typeEffect()
}
