var dulieu=[
    {name:"",
    image:"img-group/img-duan-trang2-1.jpg",
    price:"",}
];
function section_quanao_2(){
    var dulieu_quanao_2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_quanao_2+="        <div class=\"bot col-md-3\">\n" +
            "            <a href=\"\" ><img src=\""+dulieu[i].image+"\"/></a>\n" +
            "            <a href=\"\" >\n" +
            "                <div class=\"text\">\n" +
            "                    <h4>"+dulieu[i].name+"</h4>\n" +
            "                    <b>"+dulieu[i].price+"d</b>\n" +
            "                </div>\n" +
            "            </a>\n" +
            "        </div>\n"
    }
    return dulieu_quanao_2;
}
var quanao_2=document.getElementById("section-thinh-quanao-2");
quanao_2.innerHTML=section_quanao_2();