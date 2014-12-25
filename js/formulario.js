$(document).on('ready', function() {
	var $form = $('#formulario'),
		$titulo = $('#titulo'),
		$url = $('#url'),
		$boton = $('#publicar_nav'),
		$lista = $('#contenido'),
		$post = $('.item').first();

	function mostrarFormulario() {
		$form.slideToggle();
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
		$lista.prepend($clon );
		$clon.fadeIn();

		limpiarInputs();

		return false;
	}

	$boton.on('click', mostrarFormulario);
	$form.on('submit', agregarPost);
});