<?php

class CS_Blockquote extends Cornerstone_Element_Base {

  public function data() {
    return array(
      'name'        => 'blockquote',
      'title'       => __( 'Blockquote', 'cornerstone' ),
      'section'     => 'typography',
      'description' => __( 'Block Quote shortcode.', 'cornerstone' ),
      'supports'    => array( 'id', 'class', 'style' ),
      'empty'       => array( 'content' => '', 'cite' => '' ),
      'autofocus' => array(
    		'cite' => '.x-blockquote .x-cite',
    		'content' => '.x-blockquote'
    	)
    );
  }

  public function controls() {

    $this->addControl(
      'content',
      'textarea',
      __( 'Quote &amp Citation', 'cornerstone' ),
      __( 'Enter your quote in the textarea below. If you want to cite your quote, you can place that in the input following the textarea.', 'cornerstone' ),
      __( 'Input your quotation here. Also, you can cite your quotes if you would like.', 'cornerstone' ),
      array(
        'expandable' => __( 'Quote', 'cornerstone' )
      )
    );

    $this->addControl(
      'cite',
      'text',
      NULL,
      NULL,
      __( 'Mr. WordPress', 'cornerstone' )
    );

    $this->addControl(
      'align',
      'choose',
      __( 'Alignment', 'cornerstone' ),
      __( 'Select the alignment of the blockquote.', 'cornerstone' ),
      'left',
      array(
        'columns' => '3',
        'choices' => array(
          array( 'value' => 'left',   'tooltip' => __( 'Left', 'cornerstone' ),   'icon' => fa_entity( 'align-left' ) ),
          array( 'value' => 'center', 'tooltip' => __( 'Center', 'cornerstone' ), 'icon' => fa_entity( 'align-center' ) ),
          array( 'value' => 'right',  'tooltip' => __( 'Right', 'cornerstone' ),  'icon' => fa_entity( 'align-right' ) )
        )
      )
    );

  }

  public function render( $atts ) {

    extract( $atts );

    $cite = cs_clean_shortcode_att( $cite );

    $shortcode = "[x_blockquote cite=\"$cite\" type=\"$align\"{$extra}]{$content}[/x_blockquote]";

    return $shortcode;

  }

}