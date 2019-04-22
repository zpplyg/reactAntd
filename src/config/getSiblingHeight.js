export const findSiblings = (elm) => {
    // console.log(elm)
    var siblingHeight = 0;
    var a = [];
    var p = elm.parentNode.children;
    for(var i =0,pl= p.length;i<pl;i++) {
    if(p[i] !== elm) a.push(p[i]);
    }
    if(a.length){
        a.map((item)=>{
            siblingHeight = parseInt(siblingHeight)+item.clientHeight
        })
    }
    let height = document.body.clientHeight - 303-siblingHeight
    return height
}