<?php
	/*
	Template Name: Page With Sidebar
	*/
	get_header(); 
	the_post(); 
	global $post; 
	$option = get_option('montreal_theme_options'); 
?>

<div class="container hidden-mobile" style="background:url(<?php $url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full'); echo $url[0]; ?>);background-position:center fixed;">
	<section class="row largetoppadding bigbottompadding">
	<div class="six columns midtoppadding">
		<h1 class="custom-page-title"><?php the_title(); ?></h1>
		<h6 class="whitetext"><?php echo get_post_meta( $post->ID, '_cmb_the_subtitle', true ); ?></h6>
	</div>
	</section>
</div>

<div class="container white mobile-bigtoppadding">
	
	<section class="row bigtoppadding the-content sidebar-bg">
			
			<?php get_sidebar(); ?>

			<article <?php post_class('seven push_one columns blogpost'); ?> style="padding-top: 0;">
			
				<section class="row">
				<?php the_title('<h3 class="blacktext bold midbottommargin center uppercase">', '</h3>'); ?>
				<div class="eight columns alpha centered blackhorizontal"></div>
				<div class="eight columns alpha centered midtopmargin">
					<p class="center meta">
						<?php echo get_post_meta( $post->ID, '_cmb_the_subtitle', true ); ?>
					</p>
				</div>
				</section>
				
				<?php the_content(); ?>
				
			</article>
			
		</section>

</div>

<?php 
	get_footer();