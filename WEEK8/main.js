$(document).ready(function() {
    $("#search").on("submit", function(event) {
        event.preventDefault();
        const keyword = $("#keyword").val();

        console.log(keyword);
    })
    //“https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q={Thay_USER_QUERY_vào_toàn_bộ_phần_đỏ_này}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw”
});