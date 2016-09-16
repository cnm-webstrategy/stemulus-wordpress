	<?php			
		$urls = array("stemuluscenter.org","cnmingenuity.org","fusemakerspace.org","ingenuitysoftwarelabs.com");
		if (in_array($_SERVER['HTTP_HOST'], $urls)) {
			//the production url for typography.com
			echo '<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6007112/641408/css/fonts.css" />';
		} else {
			// any other url, i.e. development
			echo '<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6007112/785104/css/fonts.css" />';			
		}

	?>
