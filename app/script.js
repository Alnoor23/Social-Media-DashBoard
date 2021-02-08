const ToggleButton = document.getElementById('tgl-btn');

const statbox = document.getElementsByClassName('stats');


function ToDark(){
    document.body.style.background = "hsl(230, 17%, 14%)";
    document.body.classList.remove('bright'); 
    document.body.classList.add('dark');
    document.querySelectorAll('.stats').forEach(function(element){
        element.classList.remove('bright-stat');
        element.classList.add('dark-stat');
    });

}

function ToBright(){
    document.body.style.background = "hsl(0, 0%, 100%)";
    document.body.classList.remove('dark'); 
    document.body.classList.add('bright-stat');
    document.querySelectorAll('.stats').forEach(function(element){
        element.classList.remove('dark-stat');
        element.classList.add('bright-stat');
    });

}


ToggleButton.addEventListener('click', function(){
    if(ToggleButton.classList.contains('not-active') || ToggleButton.classList.contains('butt')){
        ToggleButton.classList.remove('not-active');
        ToggleButton.classList.remove('butt');
        ToggleButton.classList.add('active');
        ToDark();
    }else {
        ToggleButton.classList.remove('active');
        ToggleButton.classList.add('not-active');
        ToBright();
    }
});