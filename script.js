$(document).keydown(function(e){
    var key = e.which;
    var down_key = [37];
    if(down_key.includes(key)) {
        $('.leftarm').css(
            { 'top': '125px',
            'left': '725px',
            'transform': 'rotate(60deg)'
            }
        );
        $('.leftarm1').css(
            { 'top': '150px',
            'left': '715px',
            'transform': 'rotate(-25deg)'
            }
        );
        $('.rightarm').css(
            { 'top': '130px',
            'right': '730px',
            'transform': 'rotate(-30deg)'
            }
        );
        $('.rightarm1').css(
            { 'top': '132px',
            'right': '708px',
            'transform': 'rotate(45deg)'
            }
        );
        $('.lefthita').css(
            { 'left': '750px',
            'transform': 'rotate(0deg)',
            'top': '190px'
            }
        );
        $('.lefthita1').css(
            { 'left': '750px',
            'transform': 'rotate(0deg)',
            'top': '231px'
            }
        );
    }
});
$(document).keydown(function(e){
    var key = e.which;
    var down_key = [38];
    if(down_key.includes(key)) {
        $('.leftarm').css(
            { 'transform': 'rotate(40deg)'}
        );
        $('.leftarm1').css(
            { 'transform': 'rotate(-80deg)',
            'left': '730px',
            'top': '145px'
            }
        );
        $('.rightarm').css(
            { 'right': '750px'}
        );
        $('.rightarm1').css(
            { 'transform': 'rotate(80deg)',
            'right': '730px',
            'top': '145px'
            }
        );
        $('.lefthita').css(
            { 'transform': 'rotate(-60deg)',
            'left': '765px',
            'top': '185px'
            }
        );
        $('.lefthita1').css(
            { 'left': '780px',
            'top': '210px'
            }
        );
        $('.righthita').css(
            { 'right': '750px',
            'transform': 'rotate(0deg)',
            'top': '190px'
            }
        );
        $('.righthita1').css(
            { 'right': '750px',
            'transform': 'rotate(0deg)',
            'top': '231px'
            }
        );
    }
});
$(document).keydown(function(e){
    var key = e.which;
    var down_key = [39];
    if(down_key.includes(key)) {
        $('.leftarm').css(
            { 'top': '125px',
            'left': '725px',
            'transform': 'rotate(60deg)'
            }
        );
        $('.leftarm1').css(
            { 'top': '150px',
            'left': '715px',
            'transform': 'rotate(-25deg)'
            }
        );
        $('.rightarm').css(
            { 'top': '130px',
            'right': '730px',
            'transform': 'rotate(-30deg)'
            }
        );
        $('.rightarm1').css(
            { 'top': '132px',
            'right': '708px',
            'transform': 'rotate(45deg)'
            }
        );
        $('.lefthita').css(
            { 'left': '750px',
            'transform': 'rotate(0deg)',
            'top': '190px'
            }
        );
        $('.lefthita1').css(
            { 'left': '750px',
            'transform': 'rotate(0deg)',
            'top': '231px'
            }
        );
        $('.righthita').css(
            { 'transform': 'rotate(-60deg)',
            'right': '760px',
            'top': '175px'
            }
        );
        $('.righthita1').css(
            { 'right': '745px',
            'top': '200px'
            }
        );
    }
});
