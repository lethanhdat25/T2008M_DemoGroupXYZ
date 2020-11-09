var dulieu=[
    {name:"",
    image:"img-group/img-duan-trang3-1.jpg",
    price:""}
];
function section_quanao_3(){
    var dulieu_quanao_3="";
    for (i=0;i<dulieu.length;i++){
        dulieu_quanao_3+="        <div class=\"bot col-md-3\">\n" +
            "            <a href=\"\" ><img src=\""+dulieu[i].image+"\"/></a>\n" +
            "            <a href=\"\" >\n" +
            "                <div class=\"text\">\n" +
            "                    <h4>"+dulieu[i].name+"</h4>\n" +
            "                    <b>"+dulieu[i].price+"d</b>\n" +
            "                </div>\n" +
            "            </a>\n" +
            "        </div>\n"
    }
    return dulieu_quanao_3;
}
var quanao_3=document.getElementById("section-thinh-quanao-3");
quanao_3.innerHTML=section_quanao_3();