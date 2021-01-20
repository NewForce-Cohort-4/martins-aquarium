import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

// console.log("this is fish collection", fishCollection)
let fishContainer = document.querySelector("#fish-list");


function buildFishListHTML (fishCollection){
  let fishListHTML = "";

  for(let i = 0; i < fishCollection.length; i++){
    fishListHTML += Fish(fishCollection[i]);
  }

  return fishListHTML;
}

export function FishList() {
  // Getting the collections of fish from the data provider
  const holyFishCollection = mostHolyFish()
  const soldierFishCollection = soldierFish()
  const nonHolyFishCollection = nonHolyFish()


  // Building HTML Strings for each collection of fish
  const holyFishHTML = buildFishListHTML(holyFishCollection)
  const soldierFishHTML = buildFishListHTML(soldierFishCollection)
  const nonHolyFishHTML = buildFishListHTML(nonHolyFishCollection)

  fishContainer.innerHTML = `
  <h2>My Fish</h2>
  <section>
    ${holyFishHTML}
    ${soldierFishHTML}
    ${nonHolyFishHTML}
  </section>`

}
