var dulieu=[
    {
        name:"dasdasd",
        image:"img-group/img-duan-trang3-1.jpg",
        price:"1234",
    }
]
function section_trang3(){
    var dulieu_trang3="";
    for (i=0;i<dulieu.length;i++){
        dulieu_trang3+="<div class=\"bot col-md-3\">\n" +
            "            <a href=\"\" ><img src=\""+dulieu[i].image+"\"/></a>\n" +
            "            <a href=\"\" >\n" +
            "                <div class=\"text\">\n" +
            "                    <h4>"+dulieu[i].name+"</h4>\n" +
            "                    <b>"+dulieu[i].price+"</b>\n" +
            "                </div>\n" +
            "            </a>\n" +
            "        </div>"
    }
    return dulieu_trang3;
}
var trang3=document.getElementById("section-thinh-trang3");
trang3.innerHTML= section_trang3();
