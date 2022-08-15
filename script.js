var mobileEl = document.querySelector(".Mobile-number");
var number = document.querySelector("#number"); 
var check = document.querySelector("#check-network");
var entryEl = document.querySelector(".entry");

const icon = {
MTN: "MTN.png", 
  GLO:"GLO.png",
  AIRTEL: "AIRTEL.png",
  "9MOBILE": "9MOBILE.jpg",
  "MULTI-LINKS": "MULTI-LINKS.jpeg",
};


const prefixes = {
  MTN: [
    "+234-703",
    "+234-706",
    "+234-803",
    "+234-806",
    "+234-810",
    "+234-813",
    "+234-814",
    "+234-816",
    "+234-903",
    "+234-906",
    "+234-913",
    "+234-916",
  ],
  GLO: [
    "+234-805",
    "+234-807",
    "+234-705",
    "+234-815",
    "+234-811",
    "+234-905",
  ],
  AIRTEL: [
    "+234-802",
    "+234-808",
    "+234-708",
    "+234-812",
    "+234-701",
    "+234-902",
    "+234-907",
    "+234-901",
  ],
  "9MOBILE": [
    "+234-809",
    "+234-818",
    "+234-817",
    "+234-909",
    "+234-908",
  ],
  "MULTI-LINKS": [
    "+234-709",
    "+234-702",
    "+234-804",
  ],
};
  
check.addEventListener("click", () => {
  var mobileNumber = number.value;
  entryEl.innerHTML = "";
  entry = document.createElement("p");
  img = document.createElement("img");
  entryEl.appendChild(entry);
  entryEl.appendChild(img);
  mobileEl.appendChild(entryEl); 

  for(const property in prefixes) {
    if (mobileNumber == ""){
      entry.innerText = "Please Enter your mobile       number!";
      return;
    } else if (mobileNumber.length.toString() !== "17") {
      entry.innerText = "OOPS! You entered an invalid mobile number";
      entry.style.color = "#da3400";
      return;
    } else if (prefixes[property].includes(mobileNumber.substring(0, 8 ))){
      entry.innerText = `Your mobile number is ${property}`;
      entry.style.color = "#ffffff";
      img.src = `${icon[property]}`;
      img.style.width = "70px";
      img.style.height = "70px";
      return;
   }
 }
});
