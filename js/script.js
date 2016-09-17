window.onload = function(){
    function cuttext(text, limit){
        text = text.trim();
        if(text.length <= limit) return text;
        text = text.slice(0, limit);
        var arr = text.split(' ');
            if(arr.length > 1){
                arr.splice(arr.length-1,1);
                text = arr.join(' ');
            }else 
                text = arr.join();
        return text + '... ';
    }
    function changeText(selector, limit){
        this.selector = selector;
        var text = document.querySelectorAll(selector);
        var reg = /^\s+$/;
            if(text.length>0){
                for (var j=0; j<text.length; j++){
                    for(var i=0; i<text[j].childNodes.length; i++){
                        var childNod = text[j].childNodes[i];
                        if(childNod.nodeType === 3 && !reg.test(childNod.nodeValue)) 
                            childNod.textContent = cuttext(childNod.textContent,limit);
                    }
                }
                return true;
            } else {
                return false;
            }
    }
    function toggleMenu(selector1, selector2){
        this.selector1=selector1;
        this.selector2=selector2;
        var toggle = document.getElementById(selector1);
        toggle.onclick = function(event){
            event = event || window.event;
            document.getElementById(selector2).classList.toggle("active");
            event.preventDefault ? event.preventDefault() : (event.returnValue=false);               
        };    
    }
    changeText('.post_desc', 215);
    toggleMenu('toggle-menu','toggle-position');
}
