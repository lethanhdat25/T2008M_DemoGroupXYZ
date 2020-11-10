function nav(){

    return"<div class=\"menu\">\n" +
        "            <ul class=\"sub-menu\">\n" +
        "                <li><a href=\"duangroup-trangchu.html\"><b>Trang chủ</b></a></li>\n" +
        "                <li>\n" +
        "                    <a href=\"duangroup-spm.html\"><b>Sản phẩm mới</b></a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"duangroup.html\"><b>Quần áo</b></a>\n" +
        "                    <ul class=\"quanao\">\n" +
        "                        <li><a href=\"\"><b>TANK TOP</b></a></li>\n" +
        "                        <li><a href=\"\"> <b>SOMI</b></a></li>\n" +
        "                        <li><a href=\"\"> <b>SWEATER</b></a></li>\n" +
        "                        <li><a href=\"\"><b>ÁO KHOÁC</b></a></li>\n" +
        "                        <li><a href=\"\"> <b>VEST/BLAZER</b></a></li>\n" +
        "                        <li><a href=\"\"> <b>T-SHIRT/ÁO THUN</b></a></li>\n" +
        "                        <li><a href=\"\"><b>QUẦN</b></a></li>\n" +
        "                        <li><a href=\"\"> <b>BLANKSOUL</b></a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"duangroup-tuixach-trang1.html\"><b>Túi xách</b></a>\n" +
        "                    <ul class=\"quanao\">\n" +
        "                        <li><b>TÚI ĐEO CHÉO</b></li>\n" +
        "                        <li><b>TÚI BAO TỬ</b></li>\n" +
        "                        <li><b>VÍ</b></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"duangroup-phukien.html\"><b>Phụ kiện</b></a>\n" +
        "                    <ul class=\"quanao\">\n" +
        "                        <li><b>GIÀY</b></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li><a href=\"\"><b>Giới thiệu</b></a></li>\n" +
        "                <li><a href=\"\"><b>Blog</b></a></li>\n" +
        "                <li><a href=\"\"><b>Lookbook</b></a></li>\n" +
        "                <div id=\"img-lg\">\n" +
        "                    <a href=\"\"><img src=\"img-group/img-duan-logo1.png\" height=\"54\" width=\"60\"/></a>\n" +
        "                    &ensp;\n" +
        "                    <a href=\"\" ><img src=\"img-group/img-duan-logo2.png\" height=\"74\" width=\"66\"/></a>\n" +
        "                    &ensp;\n" +
        "                    <a href=\"\" ><img src=\"img-group/img-duan-logo3.png\" height=\"54\" width=\"58\"/></a>\n" +
        "                    <a href=\"\" class=\"login-nav\"> <span><b>Login</b></span></a>\n" +
        "                </div>\n" +
        "            </ul>\n" +
        "        </div>"
}
var na=document.getElementById("nav-thinh");
na.innerHTML=nav();