!function(doc,win){
    console.log(222)
    var docEle = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recale = function(){
            console.log(2222,33333)
            var clientWidth = docEle.clientWidth;
            if(!clientWidth) return 
            docEle.style.fontSize = 25 * (clientWidth/375) + 'px';
        }
    win.addEventListener(resizeEvt,recale,false)
    doc.addEventListener('DOMContentLoaded',recale, false)
}(document,window)