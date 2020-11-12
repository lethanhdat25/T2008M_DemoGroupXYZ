var dulieu=[
    {name:"BABEI TRENCHCOAT",
    image:"img-group/img-duan1.jpg",
    price:"1,450,000₫"},

    {name:"Beanie T-shirt",
    image:"img-group/img-duan2.jpg",
    price:"400,000₫"},

    {name:"BLANKE CLUB TSHIRT",
    image:"img-group/img-duan3.jpg",
    price:"350,000₫"},

    {name:"BLANKE TANKTOP",
    image:"img-group/img-duan4.jpg",
    price:"280,000₫"},

    {name:"BOLIVE JACKET",
    image:"img-group/img-duan5.jpg",
    price:"760,000₫"},

    {name:"CELINE BOLIVE PANTS",
    image:"img-group/img-duan6.jpg",
    price:"500,000₫"},

    {name:"Cement Blue Short",
    image:"img-group/img-duan7.jpg",
    price:"220,000₫"},

    {name:"CIRCUS BOMBER",
    image:"img-group/img-duan8.jpg",
    price:"890,000₫"},

    {name:"Clown Pants",
    image:"img-group/img-duan9.jpg",
    price:"400,000₫"},

    {name:"COWBOY PANTS",
    image:"img-group/img-duan10.jpg",
    price:"680,000₫"},

    {name:"CROSS VEST",
    image:"img-group/img-duan11.jpg",
    price:"540,000₫"},

    {name:"Daisy Shirt",
    image:"img-group/img-duan12.jpg",
    price:"490,000₫"},


];

var dulieu_anhan=[
    {image:"img-group/img-duan-anhan1.webp"},
    {image:"img-group/img-duan-anhan2.webp"},
    {image:"img-group/img-duan-anhan3.webp"},
    {image:"img-group/img-duan-anhan4.webp"},
    {image:"img-group/img-duan-anhan5.webp"},
    {image:"img-group/img-duan-anhan6.webp"},
    {image:"img-group/img-duan-anhan7.jpg"},
    {image:"img-group/img-duan-anhan8.webp"},
    {image:"img-group/img-duan-anhan9.webp"},
    {image:"img-group/img-duan-anhan10.webp"},
    {image:"img-group/img-duan-anhan11.jpg"},
    {image:"img-group/img-duan-anhan12.webp"},
];

function section_quanao_1(){
    var dulieu_quanao_1="";
    for (i=0;i<dulieu.length;i++){
        dulieu_quanao_1+="<div class=\"bot col-md-3\">\n" +
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
    return dulieu_quanao_1;
}

var quanao_1=document.getElementById("section-thinh-quanao-1");
quanao_1.innerHTML=section_quanao_1();


