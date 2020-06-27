<?php

namespace Drupal\yukare_ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "panelbutton" plugin.
 *
 * @CKEditorPlugin(
 *   id = "panelbutton",
 *   label = @Translation("CKEditor Panel Button"),
 * )
 */
class PanelButton extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    // Make sure that the path to the plugin.js matches the file structure of
    // the CKEditor plugin you are implementing.
    $path = 'libraries/panelbutton';
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
    return [];
  }

}
