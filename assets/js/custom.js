$('.filter-btn').on('click', function (e) {
    $('.collection-filter').css("left", "-15px");
});
$('.filter-back').on('click', function (e) {
    $('.collection-filter').css("left", "-365px");
    $('.sidebar-popup').trigger('click');
});
var coll = document.getElementsByClassName("collapsible-ct");
coll[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById('content-collapsible');
    if (content.style.display === "block") {
    content.style.display = "none";
    $("#showmore").html("Xem thêm");
    } else {
    content.style.display = "block";
    $("#showmore").html("Thu gọn");
    }
});