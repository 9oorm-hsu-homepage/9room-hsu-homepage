isShow0 = true;

function showMessage() {
  let divShadowClick = document.getElementsByClassName('divShadowClick')[0];
  let side = document.getElementById('side');
  let container = document.getElementsByClassName("container")[0];
  
  if (isShow0) {
    divShadowClick.style.display = 'block';

    side.style.position = 'relative';
    side.style.left = '150px';
    side.style.bottom = '177px';
    isOnce = false;

    container.style.position = 'relative';
    container.style.bottom = "177px";

    isShow0 = false;
  }
}

isShow1 = true;
function showMessage2() {
  let divShadowClick2 = document.getElementsByClassName('divShadowClick2')[0];
  let container = document.getElementsByClassName('container')[0];
  if (isShow1 && !isShow0) {
    divShadowClick2.style.display = 'block';

    isShow1 = false;

    container.style.position = 'relative';
    container.style.bottom = '354px';
  }
}

  isShow2 = true;
  function showMessage3() {
    let msg1 = document.getElementById('msg1');
    if (isShow2 && !isShow0 && !isShow1) {
      msg1.style.display = 'block';
      isShow2 = false;
      let boogieContainer = document.getElementById('boogieContainer');

      boogieContainer.style.position = 'relative';
      boogieContainer.style.left = '150px';
      boogieContainer.style.bottom = '242px';

      let boogie = document.getElementById('boogie4');
      boogie.style.position = 'relative';
      boogie.style.bottom = '989px';

      let boogie5 = document.getElementById('boogie5');
      boogie5.style.position = 'relative';
      boogie5.style.bottom = '1167px';
      
      let boogie6 = document.getElementById('boogie6');
      boogie6.style.position = 'relative';
      boogie6.style.bottom = '1342px';
    }
}
  
  isShow3 = true;
  function showMessage4() {
    let msg = document.getElementById('msg2');
    if (isShow3 && !isShow0 && !isShow1 && !isShow2) {
      msg.style.display = 'block';
      isShow3 = false;

      let boogie = document.getElementById("boogie3");
      boogie.style.position = "absolute";
      boogie.style.left = "512px";
      boogie.style.marginBottom = "62px";

      let boogie4 = document.getElementById('boogie4');
      boogie4.style.position = 'absolute';
      boogie4.style.marginBottom = "240px";

      let boogie5 = document.getElementById('boogie5');
      boogie5.style.position = 'relative';
      boogie5.style.bottom = "1050px";
      
      let boogie6 = document.getElementById('boogie6');
      boogie6.style.position = 'relative';
      boogie6.style.bottom = "1225px";    
    }
}
  
  isShow4 = true;
  function showMessage5() {
    let msg = document.getElementById('msg3');
    if (isShow4 && !isShow0 && !isShow1 && !isShow2 && !isShow3) {
      msg.style.display = 'block';

      isShow4 = false;
    }
}
  
isShow5 = true;
function showMessage6() {
  let msg = document.getElementById('msg4');
  if (isShow5 && !isShow0 && !isShow1 && !isShow2 && !isShow3 && !isShow4) {
    msg.style.display = 'block';
    //   side.style.display = 'none';
    //   document.getElementById('univDiv2').style.marginLeft = '50px';
    isShow5 = false;

    let boogie5 = document.getElementById('boogie5');
    boogie5.style.position = 'relative';
    boogie5.style.left = '350px';

    let boogie6 = document.getElementById('boogie6')
    boogie6.style.position = 'relative';
    boogie6.style.left = '520px';

  }
}

isShow6 = true;
function showMessage7() {
  let msg = document.getElementById('msg5');
  if (isShow6 && !isShow0 && !isShow1 && !isShow2 &&
    !isShow3 && !isShow4 && !isShow5) {
    msg.style.display = 'block';
    isShow6 = false;

    let boogie6 = document.getElementById('boogie6');
    boogie6.style.position = 'relative';
    boogie6.style.left = '660px';
  }
}

isShow7 = true;
function showMessage8() {
  let msg = document.getElementById('msg6');
  if ( isShow7 &&  !isShow0 && !isShow1 &&  !isShow2 &&
    !isShow3 && !isShow4 && !isShow5 && !isShow6)
  {
    msg.style.display = 'block';
    isShow7 = false;
  }
}