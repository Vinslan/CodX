function blinds() {
    let blind = $(".FAQ-block-text").css("display");
    if (blind === "none") {
        $(".FAQ-block-text").css("display", "flex");
    } else {
        $(".FAQ-block-text").css("display", "none");
    }

}