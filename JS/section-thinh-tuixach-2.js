var dulieu=[
    {name:"",
    image:"img-group/img-duan-tuixach-trang2-2.webp",
    price:""}
];

var dulieu_anhan=[
    {image:"img-group/img-duan-spm-trang-2.jpg"}
];
function section_tuixach_2(){
    var dulieu_tuixach_2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_tuixach_2+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_tuixach_2;
}
var tuixach_2=document.getElementById("section-thinh-tuixach-2");
tuixach_2.innerHTML=section_tuixach_2();