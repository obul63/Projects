let icon = document.getElementById('icon');
icon.onclick = () =>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = '/Dark-mode for Websites/images/sun.png';
    }else{
        icon.src = '/Dark-mode for Websites/images/moon.png';
    }
}