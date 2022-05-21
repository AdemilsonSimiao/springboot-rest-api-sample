const pesquisa = (valor) =>{
    let cep = valor.replace(/\D/g,'');
    if (cep != ""){
        let validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)){
            document.getElementById('endereco').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";
   
            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
           }
       }else{
           alert("Cep invalido")
       }
   };
const meu_callback = (conteudo) => {
    if(!("erro" in conteudo)){
        document.getElementById('endereco').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
    }
}