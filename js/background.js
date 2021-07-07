const images =[
    "0.jpg", "1.jpg", "2.jpg"
];

//랜덤으로 이미지 가져오기
const chosenImage = images[Math.floor(Math.random() * images.length)];

//이미지를 html에 추가하기 ->js로 만들어서
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';//CSS에서 사용하기 위해