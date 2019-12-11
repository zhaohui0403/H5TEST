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
    }
}