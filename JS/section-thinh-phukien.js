 var  dulieu=[
     {image:"img-group/img-duan-phukien-trang-1.webp",
        name:"teytryr",
        price:"65446",
     }

 ];
 var dulieu_anhan=[
     {image:"img-group/img-duan-spm-trang-2.jpg"}
 ];
function section_phukien(){
    var dulieu_pk="";
    for (i=0;i<dulieu.length;i++){
        dulieu_pk+= "<div class=\"bot col-md-3\">\n" +
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
return dulieu_pk;
}
var phukien=document.getElementById("section-thinh-phukien");
phukien.innerHTML=section_phukien();
