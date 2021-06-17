function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick=function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementById("dropdown-content");
        var i;
        for(i=0; i< dropdowns.clientHeight; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');

            }
        }
    }
}