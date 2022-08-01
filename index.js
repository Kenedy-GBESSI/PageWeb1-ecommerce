function myFunction(){
    var head = document.getElementById('nav-container');
    if(head.className=='nav'){
        head.className +=' responsive';
    }
    else{
        head.className = 'nav';
    }
}
