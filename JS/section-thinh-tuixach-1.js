var dulieu=[
    {name:"",
    image:"img-group/img-duan-tuixach-trang-1.webp",
    price:""}
];

function secstion_tuixach_1(){
    var du_lieu_tuixach_1="";
    for (i=0;i<dulieu.length;i++){
        du_lieu_tuixach_1+="<div class=\"bot col-md-3\">\n" +
            "            <a href=\"\" ><img src=\""+dulieu[i].image+"\"/></a>\n" +
            "            <a href=\"\" >\n" +
            "                <div class=\"text\">\n" +
            "                    <h4>"+dulieu[i].name+"</h4>\n" +
            "                    <b>"+dulieu[i].price+"d</b>\n" +
            "                </div>\n" +
            "            </a>\n" +
            "        </div>\n"
    }
return du_lieu_tuixach_1;
}
var tuixach_1=document.getElementById("section-thinh-tuixach-1");
tuixach_1.innerHTML=secstion_tuixach_1();
