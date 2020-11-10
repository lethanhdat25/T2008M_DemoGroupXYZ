var dulieu=[
    {name:"",
    image:"img-group/img-duan1.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan2.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan3.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan4.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan5.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan6.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan7.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan8.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan9.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan10.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan11.jpg",
    price:"123"},

    {name:"",
    image:"img-group/img-duan12.jpg",
    price:"123"},


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
            "        <div class=\"anhhien\">\n" +
            "        <a href='#'>\n" +
            "            <img  src=\""+dulieu[i].image+"\"  />\n" +
            "           <div class=\"anhan\">\n" +
            "               <img  src=\""+dulieu_anhan[i].image+"\">\n" +
            "           </div>\n" +
            "        </a>\n" +
            "            </div>\n" +
            "        <a href=\"\" >\n" +
            "            <div class=\"text\">\n" +
            "                <h4>"+dulieu[i].name+"</h4>\n" +
            "                <b>"+dulieu[i].price+"d</b>\n" +
            "            </div>\n" +
            "        </a>\n" +
            "    </div>"
    }
    return dulieu_quanao_1;
}

var quanao_1=document.getElementById("section-thinh-quanao-1");
quanao_1.innerHTML=section_quanao_1();
