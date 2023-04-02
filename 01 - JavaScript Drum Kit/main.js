// JavaScript for index-START.html //

// function to remove a class based on transition
function removeTransition(e) {
    if (e.propertyName != 'transform') {
        return;
    }
    console.log(e.propertyName);
    console.log(this);
    this.classList.remove('playing');
}


document.addEventListener('keydown', function(e) {
    
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`.key[data-key=${e.key}]`);

    if (audio != null) {
        audio.currentTime = 0; // To circumvent the problem of not being able to play in repeating succession, time is reset to 0
        audio.play();
        key.addEventListener('transitionend', removeTransition); // adding a transitionend listener
        key.classList.add('playing');
    }
    
    
});
