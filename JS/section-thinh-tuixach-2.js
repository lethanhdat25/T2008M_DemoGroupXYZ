var dulieu=[
    {name:"CIRCUS CIRLE BAG",
        image:"img-group/img-duan-tuixach-trang2-1.webp",
        price:"680,000₫"},

    {name:"CIRCUS CLUTCH",
        image:"img-group/img-duan-tuixach-trang2-2.webp",
        price:"650,000₫"},

    {name:"COCHIN TOTE BAG",
        image:"img-group/img-duan-tuixach-trang2-3.webp",
        price:"695,000₫"},

    {name:"CROSS FANNY BAG",
        image:"img-group/img-duan-tuixach-trang2-4.jpg",
        price:"480,000₫"},

    {name:"DOUBLE EGO CROSS BAG",
        image:"img-group/img-duan-tuixach-trang2-5.webp",
        price:"615,000₫"},

    {name:"ETHAN FANNY BAG",
        image:"img-group/img-duan-tuixach-trang2-6.jpg",
        price:"420,000₫"},

    {name:"GOTHIC BACKPACK",
        image:"img-group/img-duan-tuixach-trang2-7.webp",
        price:"950,000₫"},

    {name:"HARRY LONG WALLET",
        image:"img-group/img-duan-tuixach-trang2-8.webp",
        price:"350,000₫"},

    {name:"HAYDEN CROSS BAG",
        image:"img-group/img-duan-tuixach-trang2-9.jpg",
        price:"380,000₫"},

    {name:"KATINAT MESSENGER BAG",
        image:"img-group/img-duan-tuixach-trang2-10.webp",
        price:"795,000₫"},

    {name:"L.Y BACKPACK BEIGE",
        image:"img-group/img-duan-tuixach-trang2-11.jpg",
        price:"665,000₫"},

    {name:"L.Y CROSS BODY BAG",
        image:"img-group/img-duan-tuixach-trang2-12.webp",
        price:"620,000₫"},
];
var dulieu_anhan=[
    {image:"img-group/img-duan-tuixach-trang2-1.webp"},
    {image:"img-group/img-duan-tuixach-trang2-2.webp"},
    {image:"img-group/img-duan-tuixach-trang2-3.webp"},
    {image:"img-group/img-duan-anhan-tuixach-trang2-4.jpg"},
    {image:"img-group/img-duan-tuixach-trang2-5.webp"},
    {image:"img-group/img-duan-anhan-tuixach-trang2-6.jpg"},
    {image:"img-group/img-duan-anhan-tuixach-trang2-7.jpg"},
    {image:"img-group/img-duan-anhan-tuixach-trang2-8.jpg"},
    {image:"img-group/img-duan-anhan-tuixach-trang2-9.jpg"},
    {image:"img-group/img-duan-anhan-tuixach-trang2-10.jpg"},
    {image:"img-group/img-duan-tuixach-trang2-11.jpg"},
    {image:"img-group/img-duan-tuixach-trang2-12.webp"},
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
