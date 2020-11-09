var dulieu=[
    {
        name:"dasdasd",
        image:"img-group/img-duan-trang2-1.jpg",
        price:"1234",
    }
];
var dulieu_anhan=[
    {image:"img-group/img-duan-spm-trang-2.jpg"}
];
function section_trang2(){
    var dulieu_trang2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_trang2+="<div class=\"bot col-md-3\">\n" +
            "        <a href=\"\" >\n" +
            "            <div class=\"anhhien\">\n" +
            "                <img src=\""+dulieu[i].image+"\"  />\n" +
            "            </div>\n" +
            "            <div  class=\"anhan\">\n" +
            "                 <img src=\""+dulieu_anhan[i].image+"\">\n" +
            "            </div>\n" +
            "        </a>\n" +
            "        <a href=\"\" >\n" +
            "            <div class=\"text\">\n" +
            "                <h4>"+dulieu[i].name+"</h4>\n" +
            "                <b>"+dulieu[i].price+"d</b>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "    </div>"
    }
    return dulieu_trang2;
}
var trang2=document.getElementById("section-thinh-trang2");
trang2.innerHTML= section_trang2();
