$(document).on('ready', function() {
	"use strict";

	var $form = $('#formulario'),
		$titulo = $('#titulo'),
		$url = $('#url'),
		$boton = $('#publicar_nav'),
		$lista = $('#contenido'),
		$post = $('.item').first();

	if (localStorage.getItem('autosave')) {
		$titulo.val(sessionStorage('titulo'));
		$url.val(sessionStorage('url'));
	}

	var id = setInterval(function() {
		sessionStorage.setItem('titulo', $titulo.val());
		sessionStorage.setItem('url', $url.val())
		}
		,1000);

	function mostrarOcultarFormulario() {
		$form.slideToggle();
		$lista.slideToggle();
		return false;
	}

	function limpiarInputs() {
		$url.val("");
		$titulo.val("");
	}

	function agregarPost() {
		var url = $url.val(),
			titulo = $titulo.val(),
			$clon = $post.clone();

		$clon.find('.titulo_item a')
			 .text(titulo)
			 .attr('href', url)
			 .attr('target', '_blank');

		$clon.hide();
		$lista.prepend($clon);
		$clon.fadeIn();

		mostrarOcultarFormulario();
		limpiarInputs();
		$clon.slideDown(2000);


		return false;
	}

	$boton.on('click', mostrarOcultarFormulario);
	$form.on('submit', agregarPost);
});