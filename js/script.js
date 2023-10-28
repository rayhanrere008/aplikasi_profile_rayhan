// event pada saat link di klik

$('.page-scroll').on('click', function() {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 10
    }, 1250, 'swing');

    e.preventDefault();

});

$('.nav-item').on('click', function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');

});

$(document).ready(function() {

    // Scroll spy
    $('body').scrollspy({
        target: "#main-nav",
        offset: 60
    });

});


// paralax

// about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .figure').each(function(i) {
            setTimeout(function() {
                $('.portfolio .figure').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }

    // skill
    if (wScroll > $('.skill').offset().top - 250) {
        $('.skill .figure').each(function(i) {
            setTimeout(function() {
                $('.skill .figure').eq(i).addClass('muncul');
            }, 300 * i);
        });
        $('.tools .figure').each(function(i) {
            setTimeout(function() {
                $('.tools .figure').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }

    // tools
    // if (wScroll > $('.tools').offset().top - 250) {
    //     $('.tools .figure').each(function(i) {
    //         setTimeout(function() {
    //             $('.tools .figure').eq(i).addClass('muncul');
    //         }, 300 * i);
    //     });
    // }

    // licenses
    if (wScroll > $('.licenses').offset().top - 250) {
        $('.licenses .figure').each(function(i) {
            setTimeout(function() {
                $('.licenses .figure').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }

});