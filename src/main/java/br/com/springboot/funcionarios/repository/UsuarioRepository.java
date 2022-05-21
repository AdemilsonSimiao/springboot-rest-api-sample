package br.com.springboot.funcionarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.springboot.funcionarios.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	
}
