let switchTheme = document.getElementById("switch_theme");

switchTheme.addEventListener('change', function(){
    if(this.checked){
        document.getElementById('key').classList.toggle('black-key')
        document.getElementById('key').classList.toggle('white-key')
    } else{
        console.log('Desativado')
    }
})
