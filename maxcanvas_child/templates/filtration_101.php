<?php
/**
 * Template Name: Filtration 101
 *
 * @package maxcanvas
 */
?>
<?php get_header();?>

	<h1>Filtration 101</h1>
<?//=//dd(get_field('table'));?>

<?php
$table = get_field( 'table' );

if ( ! empty ( $table ) ) {

	echo '<table border="0">';

	if ( ! empty( $table['caption'] ) ) {

		echo '<caption>' . $table['caption'] . '</caption>';
	}

	if ( ! empty( $table['header'] ) ) {

		echo '<thead>';

		echo '<tr>';

		foreach ( $table['header'] as $th ) {

			echo '<th>';
			echo $th['c'];
			echo '</th>';
		}

		echo '</tr>';

		echo '</thead>';
	}

	echo '<tbody>';

	foreach ( $table['body'] as $tr ) {

		echo '<tr>';

		foreach ( $tr as $td ) {

			echo '<td>';
			echo $td['c'];
			echo '</td>';
		}

		echo '</tr>';
	}

	echo '</tbody>';

	echo '</table>';
}
?>

<?php get_footer();?>
