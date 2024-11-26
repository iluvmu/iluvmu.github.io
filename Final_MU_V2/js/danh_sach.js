function sreach(){
    let a = document.querySelector('#find1');
    let b = Array.from(document.querySelectorAll('.box'));
    let d = a.value.toLowerCase();
    let k = false;

    b.forEach(function(el){
        let m = el.innerText.toLowerCase();
        if( m.indexOf(d)>-1 ){
            el.style.display="";
            k=true;
        }
        else{
            el.style.display="none";

        }
    });
}