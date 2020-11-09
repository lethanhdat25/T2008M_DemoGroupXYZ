var dulieu=[
    {image:"img-group/img-duan-spm-trang-1.jpg",
    name:"BABEI TRENCH COAT",
    price:"5346",}
];
var dulieu_anhan=[
    {image:"img-group/img-duan-spm-trang-2.jpg"}
];
function section_spm(){
    var dulieu_spm="";
    for (i=0;i<dulieu.length;i++){
        dulieu_spm+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_spm;
}
var spm=document.getElementById("section-thinh-spm");
spm.innerHTML=section_spm();