var dulieu=[
    {name:"PEOPLE LONG TEE",
    image:"img-group/img-duan-trang3-1.jpg",
    price:"480,000đ"},

    {name:"Pink Diary Shirt",
        image:"img-group/img-duan-trang3-2.jpg",
        price:"380,000₫"},

    {name:"PRABBIT SHIRT",
        image:"img-group/img-duan-trang3-3.jpg",
        price:"460,000₫"},

    {name:"RED CIRCUS",
        image:"img-group/img-duan-trang3-4.jpg",
        price:"400,000₫"},

    {name:"Sickness Tee",
        image:"img-group/img-duan-trang3-5.jpg",
        price:"380,000₫"},

    {name:"Strawber Shorts",
        image:"img-group/img-duan-trang3-6.jpg",
        price:"430,000₫"},

    {name:"TATTOO TSHIRT",
        image:"img-group/img-duan-trang3-7.jpg",
        price:"300,000₫"},

    {name:"TIMETRAVEL TANKTOP",
        image:"img-group/img-duan-trang3-8.jpg",
        price:"350,000₫"},

    {name:"White Ribbo Shirt",
        image:"img-group/img-duan-trang3-9.jpg",
        price:"490,000₫"},

    {name:"WOMANZIE TEE",
        image:"img-group/img-duan-trang3-10.jpg",
        price:"380,000₫"},
];
var dulieu_anhan=[
    {image:"img-group/img-duan-anhan-trang3-1.png"},
    {image:"img-group/img-duan-anhan-trang3-2.png"},
    {image:"img-group/img-duan-anhan-trang3-3.jpg"},
    {image:"img-group/img-duan-anhan-trang3-4.jpg"},
    {image:"img-group/img-duan-anhan-trang3-5.jpg"},
    {image:"img-group/img-duan-anhan-trang3-6.webp"},
    {image:"img-group/img-duan-anhan-trang3-7.jpg"},
    {image:"img-group/img-duan-anhan-trang3-8.jpg"},
    {image:"img-group/img-duan-anhan-trang3-9.jpg"},
    {image:"img-group/img-duan-trang3-10.jpg"},
];
function section_quanao_3(){
    var dulieu_quanao_3="";
    for (i=0;i<dulieu.length;i++){
        dulieu_quanao_3+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_quanao_3;
}
var quanao_3=document.getElementById("section-thinh-quanao-3");
quanao_3.innerHTML=section_quanao_3();