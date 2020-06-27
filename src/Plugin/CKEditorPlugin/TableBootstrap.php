<?php

namespace Drupal\yukare_ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "tablebootstrap" plugin.
 *
 * @CKEditorPlugin(
 *   id = "bt_table",
 *   label = @Translation("CKEditor Panertertel Button"),
 * )
 */
class TableBootstrap extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    // Make sure that the path to the plugin.js matches the file structure of
    // the CKEditor plugin you are implementing.
    $path = 'libraries/bt_table';
    return $path . '/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [ 
	  'bt_table' => [ 
	    'label' => t('Bootstrap Table'),
		'image' => 'libraries/bt_table/icons/table.png' ]
      ]; 
  }

}
