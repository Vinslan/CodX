function bourgerFunction() {
    let headerMenu = $(".header__menu").css("display");
    if (headerMenu === "none") {
        $(".header__menu").css("display", "flex");
        $(".header__button").css("display", "flex");
    } else {
        $(".header__menu").css("display", "none");
        $(".header__button").css("display", "none");
    }
}

$(document).ready(function() {
    $(".slider").slick({
        arrows: false,
        slidesToShow: 10,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        pauseOnFocus: false,
        variableWidth: true,
    });
});




function buttonReset() {
    $(".artists").css({
        'color': '#2f2f2f',
        'background-color': '#fff'
    })
    $('.artist__info-one,.artist__info-two,.artist__info-three').css({
        'display': "none",

    })
};




function artistsOne() {
    buttonReset();

    $('.artist_one').css({
        'color': '#fff',
        'background-color': '#2f2f2f'
    });
    $('.artist__info-one').css({
        'display': "flex",
        'opacity': "1",
    })


};


function artistsTwo() {
    buttonReset();

    $('.artist_two').css({
        'color': '#fff',
        'background-color': '#2f2f2f'
    });
    $('.artist__info-two').css({
        'display': "flex",
        'opacity': "1",
    })

};


function artistsThree() {
    buttonReset();

    $('.artist_three').css({
        'color': '#fff',
        'background-color': '#2f2f2f'
    });
    $('.artist__info-three').css({
        'display': "flex",
        'opacity': "1",
    });

};