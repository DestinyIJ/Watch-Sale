(function() {
    let timeText = document.getElementById("textInImage");
    let watches = document.querySelectorAll(".watch");
    let colorClick = document.querySelectorAll(".color");

    colorClick.forEach(color => {
        color.addEventListener('click', function(){
            if (color.id == 'blackColor') {
                watches.forEach(watch => {
                    if (watch.id == 'blackWatch') {
                        watch.classList.remove('hidden');
                    } else {
                        watch.classList.add('hidden')
                    }
                });
            } else if (color.id == 'blueColor') {
                watches.forEach(watch => {
                    if (watch.id == 'blueWatch') {
                        watch.classList.remove('hidden');
                    } else {
                        watch.classList.add('hidden')
                    }
                });
            } else if (color.id == 'pinkColor') {
                watches.forEach(watch => {
                    if (watch.id == 'pinkWatch') {
                        watch.classList.remove('hidden');
                    } else {
                        watch.classList.add('hidden')
                    }
                });
            } else if (color.id == 'purpleColor') {
                watches.forEach(watch => {
                    if (watch.id == 'purpleWatch') {
                        watch.classList.remove('hidden');
                    } else {
                        watch.classList.add('hidden')
                    }
                });
            } else if (color.id == 'redColor') {
                watches.forEach(watch => {
                    if (watch.id == 'redWatch') {
                        watch.classList.remove('hidden');
                    } else {
                        watch.classList.add('hidden')
                    }
                });
            } 
        }, false)
    });
    
    function updateTime() {
        let date = new Date()
        timeText.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    setInterval(updateTime, 1000)
}())