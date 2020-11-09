var dulieu=[
    {name:"",
    image:"img-group/img-duan-spm-trang2-1.jpg",
    price:""}
];

function section_spm_2(){
    var dulieu_spm_2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_spm_2+="        <div class=\"bot col-md-3\">\n" +
            "            <a href=\"\" ><img src=\""+dulieu[i].image+"\"/></a>\n" +
            "            <a href=\"\" >\n" +
            "                <div class=\"text\">\n" +
            "                    <h4>"+dulieu[i].name+"</h4>\n" +
            "                    <b>"+dulieu[i].price+"</b>\n" +
            "                </div>\n" +
            "            </a>\n" +
            "        </div>\n"
    }
    return dulieu_spm_2;
}
var spm_2=document.getElementById("section-thinh-spm-2");
spm_2.innerHTML=section_spm_2();