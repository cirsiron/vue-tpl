;(function(win) {
    var doc = window.document;
    if(!doc) {
        return;
    }
    var docEle = doc.documentElement;
    var dpr = win.devicePixelRatio;
    var docWid = docEle.getBoundingClientRect().width * dpr;
    console.log(dpr)
    var fontSizeRatio = 100 / docWid;
    console.log(fontSizeRatio)

    docEle.style.fontSize = 13.33333 + 'vw';

})(window || this)