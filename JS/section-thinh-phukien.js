 var  dulieu=[
     {image:"img-group/img-duan-phukien-trang-1.webp",
        name:"COMFORT SNEAKERS",
        price:"750,000₫"
     },
     {image:"img-group/img-duan-phukien-trang-2.webp",
         name:"CONGHOA HAT",
         price:"350,000₫"
     },
     {image:"img-group/img-duan-phukien-trang-3.webp",
         name:"FEYERN MEATAL STRAP WATCH",
         price:"1,050,000₫"
     },
 ];
 var dulieu_anhan=[
     {image:"img-group/img-duan-phukien-anhan1-trang-1.webp"},
     {image:"img-group/img-duan-phukien-anhan2-trang-1.jpg"},
     {image:"img-group/img-duan-phukien-anhan3-trang-1.webp"},
 ];
function section_phukien(){
    var dulieu_pk="";
    for (i=0;i<dulieu.length;i++){
        dulieu_pk+="<div class=\"bot col-md-3\">\n" +
            "        <div class=\"anhImgs\">\n" +
            "        <a href='#'>\n" +
            "           <div class=\"all-anh\">\n" +
            "            <img class='anhhien' src=\""+dulieu[i].image+"\"  />\n" +
            "               <img class='anhan' src=\""+dulieu_anhan[i].image+"\">\n" +
            "           </div>\n" +
            "        </a>\n" +
            "            </div>\n" +
            "        <a href=\"\" >\n" +
            "            <div class=\"text\">\n" +
            "                <h4>"+dulieu[i].name+"</h4>\n" +
            "                <b>"+dulieu[i].price+"</b>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "    </div>"
    }
return dulieu_pk;
}
var phukien=document.getElementById("section-thinh-phukien");
phukien.innerHTML=section_phukien();
