const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    toggle.classList.toggle('active');

    //Local Storage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
})

// Comprobación del modo actual
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    toggle.classList.add('active'); }
    else {
        document.body.classList.remove('dark');
        toggle.classList.remove('active');
    }
