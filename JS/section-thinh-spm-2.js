var dulieu=[
    {name:"",
    image:"img-group/img-duan-spm-trang2-1.jpg",
    price:""}
];

var dulieu_anhan=[
    {image:"img-group/img-duan-spm-trang-2.jpg"}
];
function section_spm_2(){
    var dulieu_spm_2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_spm_2+="<div class=\"bot col-md-3\">\n" +
            "        <div class=\"anhhien\">\n" +
            "        <a href='#'>\n" +
            "            <img  src=\""+dulieu[i].image+"\"  />\n" +
            "           <div class=\"anhan\">\n" +
            "               <img  src=\""+dulieu_anhan[i].image+"\">\n" +
            "           </div>\n" +
            "        </a>\n" +
            "            </div>\n" +
            "        <a href=\"\" >\n" +
            "            <div class=\"text\">\n" +
            "                <h4>"+dulieu[i].name+"</h4>\n" +
            "                <b>"+dulieu[i].price+"d</b>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "    </div>"
    }
    return dulieu_spm_2;
}
var spm_2=document.getElementById("section-thinh-spm-2");
spm_2.innerHTML=section_spm_2();