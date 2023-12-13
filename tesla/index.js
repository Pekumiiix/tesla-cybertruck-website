var time = 3000
var i = 0
let timeoutId

var images = [
    'img/wow.webp',
    'img/screen.avif',
    'img/dunno.avif',
    'img/jello.avif'
]

function changeImage(index) {
    const header = document.getElementById('header-left')
    const imageButtons = document.querySelectorAll('.hex')
    const hexs =  document.querySelectorAll('.hex-index')

    // Update header and active class
    header.style.backgroundImage = 'url(' + images[index] + ')'

    imageButtons.forEach((otherImageButton) => {
        otherImageButton.classList.remove('active')
    });

    hexs.forEach((otherHex) => {
        otherHex.classList.remove('active')
    })

    imageButtons[index].classList.add('active')
    hexs[index].classList.add('active')

    i = index;

    //console.log(i);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        const nextIndex = (i + 1) % images.length;
        changeImage(nextIndex);
    }, time);
}

function clickToChangeImage() {
    const imageButtons = document.querySelectorAll('.hex');

    imageButtons.forEach((imageButton, index) => {
        imageButton.addEventListener('click', () => {
            changeImage(index);
        });
    });

    changeImage(0);
}

clickToChangeImage();


//changeImage()

function check() {

    const lists = document.querySelectorAll('.list')
    const more = document.getElementById('more')
    const moreDetails = document.querySelector('.now-2')

    lists.forEach((list, index) => {
        list.addEventListener('click', () => {

            lists.forEach((otherList) => {
                otherList.classList.remove('active')
            })

            lists[index].classList.add('active')

            if (index === 0) {
                more.style.backgroundImage = 'url(img/image4.svg)'
                moreDetails.innerHTML = 'Tesla’s Cybertruck is a futuristic electric pickup truck that boasts a spacious and versatile interior. The dashboard is made of paper, and the steering wheel is similar to that of the Tesla Roadster. The infotainment system is displayed on a 17-inch touchscreen with a customized user interface. The Cybertruck’s seats can accommodate up to six people'
            } else if(index === 1) {
                more.style.backgroundImage = 'url(img/Exterior.avif)'
                moreDetails.innerHTML = 'The truck’s body is made of ultra-hard 30X cold-rolled stainless steel, which is durable and resistant to dents and damage. The Cybertruck’s front end is angular and wedge-shaped, with a sloping roofline that extends to the rear of the vehicle. The truck’s headlights are thin and narrow, and the taillights are located at the top of the rear panel.'
            } else if(index === 2) {
                more.style.backgroundImage = 'url(img/spec.jpg)'
                moreDetails.innerHTML = 'Tesla’s Cybertruck is designed to have the utility of a truck with sports car performance. The truck comes in three variants: single-motor, dual-motor, and tri-motor. The single-motor model can go from zero to 60 mph in 6.5 seconds and has a top speed of 110 mph. The dual-motor Cybertruck can reach 60 mph in just 4.5 seconds and has a top speed of 120 mph. The tri-motor model is expected to be even faster, with 0-60 mph acceleration in as little as 2.9 seconds'
            } else if(index ===3) {
                more.style.backgroundImage = 'url(img/sec.avif)' 
                moreDetails.innerHTML = 'The truck has a range of security features, including enhanced autopilot, which uses cameras, radar, and ultrasonic sensors to detect and respond to potential hazards on the road. The Cybertruck also has a built-in alarm system that alerts the owner if the vehicle is tampered with or moved without authorization. The truck’s windows are made of armored glass, which is designed to be shatterproof and bulletproof.'
            } else if (index === 4) {
                more.style.backgroundImage = 'url(img/perfomance.avif)'
                moreDetails.innerHTML = 'The truck has a total length of 19’4", an overall width of 6’8", and a height of 6’3". The Cybertruck’s body is made of ultra-hard 30X cold-rolled stainless steel, which is durable and resistant to dents and damage. The truck’s exterior is designed to be both functional and visually appealing, with a range of features that include a retractable ramp, a built-in air compressor, and a lockable tonneau cover.'
            }

            //console.log(index)
        })
    })

    //console.log(lists.length)
}

check()

function hideMenu() {
    const menuButton = document.querySelector('.menu-icon')
    const menu = document.querySelector('.menu')

    menuButton.addEventListener('click', () => {
        if(menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex'
        } else if (menu.style.display === 'flex') {
            menu.style.display = 'none'
        }
    })
}

hideMenu()