function OpenNav() {
    var overlay = document.getElementById('overlay');
    var hamburgerToggle = document.getElementById('hamburger-navbar-toggle');

    document.body.style.overflow = 'hidden';

    overlay.style.transform = 'translate(0%)';
    hamburgerToggle.style.display = 'block';
    console.log("overlay open");
}

function CloseNav() {
    var overlay = document.getElementById('overlay');
    var hamburger = document.getElementById('hamburger-navbar');
    var hamburgerToggle = document.getElementById('hamburger-navbar-toggle');
    
    document.body.style.overflow = 'auto';

    overlay.style.transform = 'translate(-100%)';
    hamburger.style.display = 'block';
    console.log("overlay closenav");
}
