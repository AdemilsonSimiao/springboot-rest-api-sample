/*******************Função de Salvar dados do Cadastro na tabela****************************/

const salvar = () => {
	
	var id = $("#id").val();
	var nome = $("#nome").val();
	var idade = $("#idade").val();
	var sexo = $("#sexo").val();
	var cep = $("#cep").val();
	var endereco = $("#endereco").val();
	var bairro = $("#bairro").val();
	var cidade = $("#cidade").val();
	var estado = $("#estado").val();
	
	if (nome == null || nome.trim() ==''){
		
		$("#nome").focus();
		alert("Nome não preenchido")
		return;
	}
	if (idade == null || idade.trim() ==''){
		
		$("#idade").focus();
		alert("Idade não preenchida")
		return;
	}
	if (cep == null || cep.trim() ==''){

		alert("CEP não preenchido")
		return;
	}				
	if(estado!= null && estado.trim() !=''){

		$.ajax({
			method: "POST",
			url: "salvar",
			data:JSON.stringify({id:id, nome:nome, idade:idade, sexo:sexo, cep:cep, endereco:endereco, bairro:bairro, cidade:cidade, estado:estado}),
			contentType: "application/json; charset=utf-8",
			success: function(response){
				
				$("#id").val(response.id);
				
				alert("Salvo com Sucesso!");
			}
		}).fail(function(xhr, status, errorThrown){
			alert("Error: " + xhr.responseText);
		});
	}
	
}


/*******************Função de Pesquisar funcionario por ID****************************/

const pesquisaUser = () => {
	
	var cad = $("#idPesquisa").val();
	
	if(cad != null && cad.trim() !=''){
		
		$.ajax({
			method: "GET",
			url: "buscaruserid",
			data: "iduser=" + cad,
			success: function(response){ 

				$("#id").val(response.id);
				$("#nome").val(response.nome);
			 	$("#idade").val(response.idade);
			 	$("#sexo").val(response.sexo);
				$("#cep").val(response.cep);
				$("#endereco").val(response.endereco);
				$("#bairro").val(response.bairro);
				$("#cidade").val(response.cidade);
				$("#estado").val(response.estado);

			}
		}).fail(function(xhr, status, errorThrown){
			alert("Erro ao buscar: " + xhr.responseText);
		});
	}
}


/**********Função de Pesquisar Funcionario por cep*************/

const pesquisaUserCep = () => {

	var cadCep = $("#cepPesquisa").val();
	
	if(cadCep != null && cadCep.trim() !=''){
		
		$.ajax({
			method: "GET",
			url: "buscaruserid",
			data: "name=" + cadCep,
			success: function(response){ 
				$("#id").val(response.id);
				$("#nome").val(response.nome);
			 	$("#idade").val(response.idade);
			 	$("#sexo").val(response.sexo);
				$("#cep").val(response.cep);
				$("#endereco").val(response.endereco);
				$("#bairro").val(response.bairro);
				$("#cidade").val(response.cidade);
				$("#estado").val(response.estado);
				}
		}).fail(function(xhr, status, errorThrown){
			alert("Erro ao buscar: " + xhr.responseText);
		});
	}
}

/*******************Função de Deletar cadastro/tabela****************************/

const Deletar = () => {
	
	var cad = $("#idPesquisa").val();
	
	if(cad!= null && cad.trim() !=''){
	
		if(confirm("Deseja realmente deletar?")){
	
			$.ajax({
				method: "DELETE",
				url: "deletar",
				data: "iduser=" + cad,
				
				success: function(response){ 
					
					alert(response);
					document.getElementById('formCadastro').reset();			
				}
				
			}).fail(function(xhr, status, errorThrown){
				alert("Erro ao Deletar: " + xhr.responseText);
			});
		}	
	}
	
}

/*******************Função de Mostrar lista de cadastro****************************/

const mostrar = () => {
	
}