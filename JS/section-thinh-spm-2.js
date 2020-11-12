var dulieu=[
    {name:"CASA PANTS",
    image:"img-group/img-duan-spm-trang2-1.jpg",
    price:"520,000"},

    {name:"BLUEGREY SHORTS",
        image:"img-group/img-duan-spm-trang2-2.jpg",
        price:"430,000"},

    {name:"Clown Pants",
        image:"img-group/img-duan-spm-trang2-3.webp",
        price:"540,000"},

    {name:"CONGHOA SHIRT",
        image:"img-group/img-duan-spm-trang2-4.jpg",
        price:"590,000"},

    {name:"CONGHOA SHORTS",
        image:"img-group/img-duan-spm-trang2-5.webp",
        price:"460,000"},

    {name:"Daisy Shirt",
        image:"img-group/img-duan-spm-trang2-6.jpg",
        price:"890,000"},

    {name:"Driedflower Tshirt",
        image:"img-group/img-duan-spm-trang2-7.jpg",
        price:"400,000"},

    {name:"Festive Blazer",
        image:"img-group/img-duan-spm-trang2-8.jpg",
        price:"980,000"},

    {name:"Green Ribbo Shirt",
        image:"img-group/img-duan-spm-trang2-9.jpg",
        price:"490,000"},

    {name:"LAMOUR TEE",
        image:"img-group/img-duan-spm-trang2-10.jpg",
        price:"400,000"},

    {name:"LOSS GILET",
        image:"img-group/img-duan-spm-trang2-11.jpg",
        price:"450,000"},

    {name:"MESCO TANKTOP",
        image:"img-group/img-duan-spm-trang2-12.jpg",
        price:"310,000"}
];
var dulieu_anhan=[
    {image:"img-group/img-duan-spm-trang-2-1-1.webp"},
    {image:"img-group/img-duan-spm-trang-2-2-2.jpg"},
    {image:"img-group/img-duan-spm-trang-2-3-3.webp"},
    {image:"img-group/img-duan-spm-trang-2-4-4.webp"},
    {image:"img-group/img-duan-spm-trang-2-5-5.webp"},
    {image:"img-group/img-duan-spm-trang-2-6-6.webp"},
    {image:"img-group/img-duan-spm-trang-2-7-7.jpg"},
    {image:"img-group/img-duan-spm-trang-2-8-8.webp"},
    {image:"img-group/img-duan-spm-trang-2-9-9.jwebp"},
    {image:"img-group/img-duan-spm-trang-2-10-10.webp"},
    {image:"img-group/img-duan-spm-trang-2-11-11.webp"},
    {image:"img-group/img-duan-spm-trang-2-12-12.webp"},
];
function section_spm_2(){
    var dulieu_spm_2="";
    for (i=0;i<dulieu.length;i++){
        dulieu_spm_2+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_spm_2;
}
var spm_2=document.getElementById("section-thinh-spm-2");
spm_2.innerHTML=section_spm_2();