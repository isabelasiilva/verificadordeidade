function verificar() {


    var data = new Date()  // vai pegar a data atual
    var ano = data.getFullYear()  // vai pegar o ano atual com o 4 digitos 
    var fAno = document.getElementById('txtano') // vai pegar o ano preenchido no formulário
    var res = document.getElementById('res')  // trouxe a referencia da div de resposta para o script
  

    if (fAno.value < 1920 || fAno.value > ano){
        window.alert('[ERRO] O ano não pode ser menor que 1920 ou maior que o ano atual. Verifique os dados e tente novamente! ')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value) 
        var genero = ''

        var img = document.createElement('img') // é a forma de criar uma imagem dinamicamente pelo js - vai criar uma tag img 

        img.setAttribute('class', 'foto') // a forma de atribuir um id='foto' para a tag criada acima
        
        
       
        if (fsex[0].checked) { // se o que tiver marcado/checked for o fsex 0, retorna como 'Homem'
            genero = 'Homem'
            
            //colocando teste de idade dentro do gênero homem

            if (idade >= 0 && idade <= 10) {
                //Criança 
                img.setAttribute('src', 'imgCriancaM.png')
            } else if (idade> 10 && idade < 22) {
                // Jovem 
                img.setAttribute('src', 'imgJovemM.png')                
            } else if (idade>= 22 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'imgAdultoM.png')
            } else if (idade >=60) {
                // Idoso
                img.setAttribute('src', 'imgIdosoM.png')
            }

            
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            //colocando teste de idade dentro do gênero mulher

            if (idade <= 0 && idade <= 10) {
                //Criança                 
                img.setAttribute('src', 'imgCriancaF.png')
            } else if (idade> 10 && idade < 22) {
                // Jovem 
                img.setAttribute('src', 'imgJovemF.png')
            } else if (idade>= 22 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'imgAdultoF.png')
            } else if (idade >=60) {
                // Idoso
                img.setAttribute('src', 'imgIdosoF.png')
            }
            
        }
        
        
        res.innerHTML = `Detectamos ${genero}  com ${idade} anos.`
        res.appendChild(img) // comando para adicionar um novo elemento, que é a img 
        
    }

}
