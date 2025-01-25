// learned from https://www.youtube.com/watch?v=GGi7Brsf7js
async function sayYurr(){
    console.log("clicked")
    //pulls out tab that is currently active
    let [tab] = await chrome.tabs.query({active:true});
    console.log("clicked")
    document.getElementById("head").innerHTML = "type shi";
}

// this document is inside the index.html of the popup
// NOT the webpage (document.body)
x =document.getElementById("myButt")
console.log(x)
document.getElementById("myButt").addEventListener("click",sayYurr);
console.log("script loaded")