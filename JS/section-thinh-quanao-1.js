var dulieu=[
    {name:"",
    image:"img-group/img-duan1.jpg",
    price:"123"}
];

var dulieu_anhan=[
    {image:"img-group/img-duan-spm-trang-2.jpg"}
];
function section_quanao_1(){
    var dulieu_quanao_1="";
    for (i=0;i<dulieu.length;i++){
        dulieu_quanao_1+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_quanao_1;
}

var quanao_1=document.getElementById("section-thinh-quanao-1");
quanao_1.innerHTML=section_quanao_1();
