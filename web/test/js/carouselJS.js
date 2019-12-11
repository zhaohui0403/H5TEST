function addImg(arr) {
    var carouselWrap = document.querySelector(".carousel-wrap");
    if(carouselWrap){
        var ul = document.createElement("ul");
        var styleNode = document.createElement("style");

        styleNode.innerHTML = '.list{width: ' + arr.length+'00%}' + '.list > li {width: '+100/arr.length+'%;}';
        ul.classList.add("list");
        for(var i = 0;i<arr.length;i++){
            ul.innerHTML +='<li><a href="#"><img src="'+arr[i]+'"></a></li>';
        }
        document.head.appendChild(styleNode);
        carouselWrap.appendChild(ul);

        var img = document.querySelector(".list > li > a > img");
        setTimeout(function () {
            carouselWrap.style.height = img.offsetHeight + "px";
        },100);

        //定义手指一开始的位置
        var startX = 0;
        //定义元素一开始的位置
        var elementX = 0;
        //定义移动距离
        var disX = 0;
       /* //定义图片下表
        var index = 0;*/

        carouselWrap.addEventListener("touchstart",function (ev) {
            ev = ev || event;
            var TouchX = ev.changedTouches[0];
            startX = TouchX.clientX;
            elementX = ul.offsetLeft;
        });
        carouselWrap.addEventListener("touchmove",function (ev) {
            ev = ev || event;
            var touchX = ev.changedTouches[0];
            var nowX = touchX.clientX;
            disX = nowX - startX;
            ul.style.left = elementX + disX + "px";
        })
        carouselWrap.addEventListener("touchend",function (ev) {
            ev = ev || event;
            //抽象图片的下标
            /*if(disX > 0){
                if(Math.abs(disX) > document.documentElement.clientWidth/3){
                    index --;
                }
            }else {
                if(Math.abs(disX) > document.documentElement.clientWidth/3){
                    index ++;
                }
            }*/
            var index = ul.offsetLeft/document.documentElement.clientWidth;

            if(disX>0){
                index = Math.ceil(index);
            }else {
                index = Math.floor(index);
            }
            // index = Math.round(index);
            ul.style.left = index * (document.documentElement.clientWidth) + "px";
        })
    }
}