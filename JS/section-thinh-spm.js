
var dulieu=[
    {image:"img-group/img-duan-spm-trang-1.jpg",
    name:"AQUA TANKTOP",
    price:"350,000đ"},

    {image:"img-group/img-duan-spm-trang-2.jpg",
        name:"BLANC SHORTS",
        price:"420,000đ"},

    {image:"img-group/img-duan-spm-trang-3.jpg",
        name:"BLANKROSE SHIRT",
        price:"380,000đ"},

    {image:"img-group/img-duan-spm-trang-4.jpg",
        name:"BLANKROSE SHIRT",
        price:"380,000đ"},

    {image:"img-group/img-duan-spm-trang-5.jpg",
        name:"BLANKSOUL MAUVAIS TANKOP",
        price:"230,000đ"},

    {image:"img-group/img-duan-spm-trang-6.jpg",
        name:"BLANKSOUL MIX TEE",
        price:"280,000đ"},

    {image:"img-group/img-duan-spm-trang-7.jpg",
        name:"BLANKSOUL SHORT",
        price:"320,000đ"},

    {image:"img-group/img-duan-spm-trang-8.jpg",
        name:"BLANKSOUL SLOGAN TEE",
        price:"250,000đ"},

    {image:"img-group/img-duan-spm-trang-9.jpg",
        name:"BLANKSOUL STRIPE TEE",
        price:"260,000đ"},

    {image:"img-group/img-duan-spm-trang-10.jpg",
        name:"BLANKSOUL WHITE SHIRT",
        price:"380,000đ"},

    {image:"img-group/img-duan-spm-trang-11.jpg",
        name:"BLANNKSOUL GARCON",
        price:"380,000đ"},

    {image:"img-group/img-duan-spm-trang-12.jpg",
        name:"BLUE TRINGLE SHIRT",
        price:"480,000đ"},
];
var dulieu_anhan=[
    {image:"img-group/img-duan-anhan-spm-1.jpg"},
    {image:"img-group/img-duan-anhan-spm-2.jpg"},
    {image:"img-group/img-duan-spm-trang-3.jpg"},
    {image:"img-group/img-duan-anhan-spm-4.jpg"},
    {image:"img-group/img-duan-anhan-spm-5.jpg"},
    {image:"img-group/img-duan-anhan-spm-6.jpg"},
    {image:"img-group/img-duan-anhan-spm-7.jpg"},
    {image:"img-group/img-duan-anhan-spm-8.jpg"},
    {image:"img-group/img-duan-anhan-spm-9.jpg"},
    {image:"img-group/img-duan-anhan-spm-10.jpg"},
    {image:"img-group/img-duan-anhan-spm-11.jpg"},
    {image:"img-group/img-duan-anhan-spm-12.jpg"},
];
function section_spm(){
    var dulieu_spm="";
    for (i=0;i<dulieu.length;i++){
        dulieu_spm+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_spm;
}
var spm=document.getElementById("section-thinh-spm");
spm.innerHTML=section_spm();