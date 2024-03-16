let univImageList = [
  './image/image0.png',
  './image/image1.png',
  './image/image2.jpg',
  './image/image3.jpg',
];

let univTitleList = ['온보딩 세미나', '벚꽃톤',"9UAP","연합행사"];
let univMessageList = ['Before HACKTHON, Become maker!', "더 나은 세상을 위한, 더 나은 서비스",
  "9oormthonUNIV After Party","다른 학교와 공부하고 성장하는 경험"];
let univTextList = [
  '2월 25일 판교 ‘구름스퀘어’에서 온보딩 세미<br>나를 개최했습니다. 구름톤 Univ로 성장하는<br>법 등 다양한 주제들로 벚꽃톤을 앞두고 큰 <br>도움이 되는 세미나를 진행해 감사했습니다.',
  '3월 23일부터 24일 까지 무박 해커톤이 진행됩니다. 기획, 디자인, 프론트엔드, 백엔드로<br>이루어진 37개의 팀과 25개 대학이 참여하는 이번 벚꽃톤에서 한성 미르미들의 활약을 기대합니다!'
  , "9UAP은 goormthonUNIV After Party의 약자로, 해커톤 대상 및 최우수 수상자들과 현진 전문가들이 세미나를 진행합니다.<br>또한 지금까지의 과정을 회고하는 시간을 갖습니다."
  , "구름톤 유니브에서는 연합 해커톤, 세미나, 스터디가 예정되어 있십니다.<br>벚꽃톤 이후에도 연합 해커톤을 통해 또 한 번 성장하고 연합 스터디를 통해 다른 학교 학우들과 공부하는 경험도 가능합니다."
];


let index = 0;
let size = 3;

function myChange() {
  let univTitle = document.getElementById('univTitle');
  let univMessage = document.getElementById('univMessage');
  let univText = document.getElementById('univText');
  let univImage = document.getElementById('univImage');
  let univ2Image = document.getElementById('univ2Image');
  
  univImage.style.backgroundImage = `url('${univImageList[index]}')`;
  univ2Image.style.backgroundImage = `url('${
    univImageList[(index + 1) % (size + 1)]
  }')`;

  univTitle.innerHTML = univTitleList[index];
  univMessage.innerHTML = univMessageList[index];
  univText.innerHTML = univTextList[index];
}

function clickedLeftButton(btn) {
  let rightButton = document.getElementById('rightButton');
  
  if (index == 0) {
    return;
  }

  btn.style.background = '#EBEBEB';
  if (index==size-1 || index==size) {
    console.log(5);
    document.getElementById('left').style.stroke = '#4C4B4B';
    document.getElementById('right').style.stroke = '#4C4B4B';
    btn.style.background = '#EBEBEB'; //진한색
    rightButton.style.background = '#EBEBEB';
  } 

  else {
    btn.style.background = '#F9F9F9'; //진한색
    document.getElementById('left').style.stroke = '#CCC';
    rightButton.style.background = '#EBEBEB';
  }
  
  index--;

  myChange();

}

function clickedRightButton(btn) {
  let leftButton = document.getElementById('leftButton');
  
  if (index == size)
    return;

  btn.style.background = '#EBEBEB';
  if (index == size - 1) {
    leftButton.style.background = '#EBEBEB';
    document.getElementById('right').style.stroke = '#CCC';
    btn.style.background = '#F9F9F9';
  }

  else {
    document.getElementById('left').style.stroke = '#4C4B4B';
    document.getElementById('right').style.stroke = '#4C4B4B';
    btn.style.background = '#EBEBEB'; //진한색
    leftButton.style.background = '#EBEBEB';
  }

  index++;

  myChange();
}