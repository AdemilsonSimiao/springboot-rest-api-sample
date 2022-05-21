package br.com.springboot.funcionarios.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.springboot.funcionarios.model.Usuario;
import br.com.springboot.funcionarios.repository.UsuarioRepository;

/**
 *
 * A sample greetings controller to return greeting text
 */
@RestController
public class GreetingsController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
   
	/*Lista de Usuario*/    
    @GetMapping(value = "listartudo")
    @ResponseBody
    public ResponseEntity<List<Usuario>> listausiario(){
    	
    	List<Usuario> usuarios = usuarioRepository.findAll();
    	
    	return new ResponseEntity<List<Usuario>>(usuarios, HttpStatus.OK);
    }
    
    /*Salvar dados na tabela*/
    @PostMapping(value = "salvar")
    @ResponseBody
    public ResponseEntity<Usuario> salvar (@RequestBody Usuario usuario){
    	
    	Usuario user = usuarioRepository.save(usuario);
    	
    	return new ResponseEntity<Usuario>(user, HttpStatus.CREATED);
    }
    
    /*Deletar dados da tabela*/
    @DeleteMapping(value = "deletar")
    @ResponseBody
    public ResponseEntity<String> deletar (@RequestParam Long iduser){
    	
    	usuarioRepository.deleteById(iduser);
    	
    	return new ResponseEntity<String>("Deletado com sucesso", HttpStatus.OK);
    }
    
    /*Busca de dados da tabela por ID*/
    @GetMapping(value = "buscaruserid")
    @ResponseBody
    public ResponseEntity<Usuario> buscaruserid (@RequestParam(name = "iduser") Long iduser){
    	
    	Usuario usuario = usuarioRepository.findById(iduser).get();
    	
    	return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }
    
    
    /*Atualização de dados na tabela*/       
    @PutMapping(value = "atualizar")
    @ResponseBody
    public ResponseEntity<?> atualizar (@RequestBody Usuario usuario){
    	
    	if(usuario.getId() == null) {
    		return new ResponseEntity<String>("Id não identificado", HttpStatus.OK);
    	}
    	
    	Usuario user = usuarioRepository.saveAndFlush(usuario);
    	
    	return new ResponseEntity<Usuario>(user, HttpStatus.OK);
    }
}
