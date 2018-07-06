let evt = "";
evt = "onorientationchangee" in window ? 'orientationchangee' : 'resize';

function orientationHanlder(){
    //横竖屏转换后 position:fixed元素宽高不能及时调整过来
    // setTimeout(function () {
    //     setFontSize();
    // }, 300);
    if(evt === "orientationchangee"){
        if ( window.orientation === 180 || window.orientation === 0 ) {
            alert("竖屏");
        }else if( window.orientation === 90 || window.orientation === -90 ){
            alert("横屏");
        }
    }else{
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        if(width < height){
            console.log("竖屏");
        }else if(width > height){
            console.log("横屏");
        }
    }
}

window.addEventListener(evt, orientationHanlder, false);

// orientationHanlder();