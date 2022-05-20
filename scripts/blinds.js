$(document).ready(function() {
    $(".FAQ-block-header").click(function(event) {
        $(this).next().slideToggle(300);
    });
});