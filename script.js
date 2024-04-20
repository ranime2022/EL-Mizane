
//sign in/ log in page animation
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const body= document.getElementById('Body');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    body.style.background= 'linear-gradient( to right, rgb(154, 144, 92), rgb(228, 228, 227))'
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    body.style.background= 'linear-gradient( to right,  rgb(228, 228, 227),rgb(154, 144, 92))'
});

//Landing page slider

    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    var index=0;
    leftArrow.addEventListener('click', ()=>{
        index= ( index > 0 )? index - 1 : 0;
        slider.style.transform = 'translate('+ (index)* -33  +'%)';
    });

    rightArrow.addEventListener('click', ()=>{
        index= ( index < 2 )? index + 1 : 0;
        slider.style.transform = 'translate('+ (index)* -33 +'%)';
    });

//forum page slider

const Forum = document.querySelector('.pubslider');
const prev = document.getElementById('prev');
const next= document.getElementById('next');

var index=0;
prev.addEventListener('click', ()=>{
    index= ( index > 0 )? index - 1 : 0;
    Forum.style.transform = 'translate('+ (index)* -33  +'%)';
});

next.addEventListener('click', ()=>{
    index= ( index < 2 )? index + 1 : 0;
    Forum.style.transform = 'translate('+ (index)* -33 +'%)';
});



//scroll anymation
window.addEventListener('scroll', () =>{
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var topDiv = document.getElementById('topDiv');
var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
var scrollProgress = scrollTop / scrollHeight;
var newWidth = scrollProgress * 100; 


if (newWidth > 100) {
newWidth = 100;
}

topDiv.style.width = newWidth + '%';
});

const acceptBtn = document.getElementById('Accept');
const pub_container = document.getElementById('pub-container');

acceptBtn.addEventListener('click', ()=>{
    pub_container.style.display='none';
})

//sidebar
const sidebar = document.querySelector('.sidebar');
const sandwich = document.getElementById('sandwich');
const links = document.querySelectorAll('.link'); 

sandwich.addEventListener('click', () => {
    sidebar.style.display = 'flex';
});

links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.display = 'none';
    });
});
