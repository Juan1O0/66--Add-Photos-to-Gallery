let imageContainer = document.querySelector("#imageContainer");


let imageUrls = [
    'https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg',
    'https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2020-11/Hero-Small-Mobile-cats.jpg?itok=hEnG1ehe',
    'https://www.pawschicago.org/fileadmin/_processed_/8/c/csm_garden1-1024x685_0438a114ad.jpg',
    'https://media-be.chewy.com/wp-content/uploads/2016/12/09165949/cat-looking-at-apples.jpg'
];

for (let url of imageUrls) {
    let img = "<img src=" + url + ">";
    imageContainer.insertAdjacentHTML("beforeend", img);
}

// Select the add button using a query selector

let addButton = document.querySelector(".addButton");
 addButton.onclick = function() {
let newUrl= document.querySelector("input").value;
     console.log(newUrl);
     imageUrls.push(newUrl);
     console.log(imageUrls);
     imageContainer.insertAdjacentHTML ("afterend" , "<img src='" + newUrl + "'>");
};

// Show the number of photos in the gallery