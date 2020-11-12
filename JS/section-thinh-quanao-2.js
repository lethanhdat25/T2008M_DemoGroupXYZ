var dulieu=[
    {name:"DIVERGENT TSHIRT",
    image:"img-group/img-duan-trang2-1.jpg",
    price:"400,000"},
    {name:"Driedflower Tshirt",
        image:"img-group/img-duan-trang2-2.jpg",
        price:"400,000"},
    {name:"ELIO BLACK PANTS",
        image:"img-group/img-duan-trang2-3.jpg",
        price:"450,000"},
    {name:"Elio Short Pants",
        image:"img-group/img-duan-trang2-4.jpg",
        price:"380,000"},
    {name:"FACE LINE PANTS",
        image:"img-group/img-duan-trang2-5.jpg",
        price:"850,000"},
    {name:"Festive Blazer",
        image:"img-group/img-duan-trang2-6.jpg",
        price:"980,000"},
    {name:"Festive Pants",
        image:"img-group/img-duan-trang2-7.jpg",
        price:"520,000"},
    {name:"FRIENDS TSHIRT",
        image:"img-group/img-duan-trang2-8.jpg",
        price:"380,000"},
    {name:"Greece Shirt",
        image:"img-group/img-duan-trang2-9.jpg",
        price:"360,000"},
    {name:"Green Ribbo Shirt",
        image:"img-group/img-duan-trang2-10.jpg",
        price:"490,000"},
    {name:"JINGLE BLAZER",
        image:"img-group/img-duan-trang2-11.jpg",
        price:"980,000"},
    {name:"LEATHER STRAP",
        image:"img-group/img-duan-trang2-12.jpg",
        price:"450,000"},
];
var dulieu_anhan=[
    {image:"img-group/img-duan-anhan-trang2-1.jpg"},
    {image:"img-group/img-duan-trang2-2.jpg"},
    {image:"img-group/img-duan-trang2-3.jpg"},
    {image:"img-group/img-duan-anhan-trang2-4.jpg"},
    {image:"img-group/img-duan-anhan-trang2-5.jpg"},
    {image:"img-group/img-duan-anhan-trang2-6.png"},
    {image:"img-group/img-duan-anhan-trang2-7.jpg"},
    {image:"img-group/img-duan-anhan-trang2-8.jpg"},
    {image:"img-group/img-duan-anhan-trang2-9.jpg"},
    {image:"img-group/img-duan-anhan-trang2-10.webp"},
    {image:"img-group/img-duan-anhan-trang2-11.jpg"},
    {image:"img-group/img-duan-anhan-trang2-12.jpg"},

];
function section_quanao_2(){
    var dulieu_quanao_2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_quanao_2+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_quanao_2;
}
var quanao_2=document.getElementById("section-thinh-quanao-2");
quanao_2.innerHTML=section_quanao_2();
