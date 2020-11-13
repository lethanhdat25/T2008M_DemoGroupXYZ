var dulieu=[
    {name:"2-SQUARE CROSS BODY BAG",
        image:"img-group/img-duan-tuixach-trang-1.webp",
        price:"490,000"},

    {name:"ALAN OVERSIZE BAG",
        image:"img-group/img-duan-tuixach-trang-2.webp",
        price:"750,000"},

    {name:"ALI MESSENGER BAG",
        image:"img-group/img-duan-tuixach-trang-3.webp",
        price:"435,000"},

    {name:"AME VIERGE TOTE BAG",
        image:"img-group/img-duan-tuixach-trang-4.webp",
        price:"280,000"},

    {name:"BLANKSOUL CROSS BODY",
        image:"img-group/img-duan-tuixach-trang-5.webp",
        price:"150,000"},

    {name:"BLANKSOUL TOTE BAG",
        image:"img-group/img-duan-tuixach-trang-6.webp",
        price:"220,000"},

    {name:"BOTTE CROSS BAG",
        image:"img-group/img-duan-tuixach-trang-7.webp",
        price:"435,000"},

    {name:"CAP BAG",
        image:"img-group/img-duan-tuixach-trang-8.jpg",
        price:"650,000"},

    {name:"CASA CROSS BAG",
        image:"img-group/img-duan-tuixach-trang-9.webp",
        price:"575,000"},

    {name:"CHAIN FANNY BAG",
        image:"img-group/img-duan-tuixach-trang-10.webp",
        price:"590,000"},

    {name:"CIRCLE MINI WALLET",
        image:"img-group/img-duan-tuixach-trang-11.webp",
        price:"350,000"},

    {name:"CIRCUS BAG",
        image:"img-group/img-duan-tuixach-trang-12.jpg",
        price:"750,000"},
];
var dulieu_anhan=[
    {image:"img-group/img-duan-tuixach-trang-1-1.webp"},
    {image:"img-group/img-duan-tuixach-trang-2-2.webp"},
    {image:"img-group/img-duan-tuixach-trang-3-3.webp"},
    {image:"img-group/img-duan-tuixach-trang-4-4.webp"},
    {image:"img-group/img-duan-tuixach-trang-5-5.webp"},
    {image:"img-group/img-duan-tuixach-trang-6-6.webp"},
    {image:"img-group/img-duan-tuixach-trang-7-7.webp"},
    {image:"img-group/img-duan-tuixach-trang-8.jpg"},
    {image:"img-group/img-duan-tuixach-trang-9-9.webp"},
    {image:"img-group/img-duan-tuixach-trang-10-10.webp"},
    {image:"img-group/img-duan-tuixach-trang-11-11.webp"},
    {image:"img-group/img-duan-tuixach-trang-12-12.webp"},
];
function secstion_tuixach_1(){
    var dulieu_tuixach_2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_tuixach_2+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_tuixach_2;
}
var tuixach_2=document.getElementById("section-thinh-tuixach-2");
tuixach_2.innerHTML=secstion_tuixach_1();
