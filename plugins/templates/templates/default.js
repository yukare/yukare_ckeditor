/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [
  {
		title: 'Bootstrap - Botão de ocultar',
		image: 'template1.gif',
		description: 'Cria um botão para mostrar e ocultar o conteúdo abaixo, para coisas como spoiler.',
		html: '<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">' +
             'Link with href' +
          '</a>' +
          '<div class="collapse" id="collapseExample">' +
            '<div class="well">' +
              '...' +
            '</div>' +
          '</div>'
	},
	{
		title: 'Bootstrap - Painel com título',
		image: 'template2.gif',
		description: 'Modelo para adicionar um painel do bootstrap.',
		html: '<div class="panel panel-default">' +
		        '<div class="panel-heading">' +
		         '<h3 class="panel-title">Panel title</h3>' +
		        ' </div>' +
		        '<div class="panel-body">' +
		          'Panel content' +
		        ' </div>' +
		      '</div>'
	},
	{
		title: 'Bootstrap - Abas',
		image: 'template3.gif',
		description: 'Abas aonde apenas o conteúdo de uma delas aparece.',
		html: '<div>' +
            '<!-- Nav tabs -->' +
	          '<ul class="nav nav-tabs" role="tablist">' +
		          '<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>' +
		          '<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>' +
		          '<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>' +
		          '<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>' +
		        '</ul>' +

		        '<!-- Tab panes -->' +
		        '<div class="tab-content">' +
		          '<div role="tabpanel" class="tab-pane active" id="home">...</div>' +
		          '<div role="tabpanel" class="tab-pane" id="profile">...</div> ' +
		          '<div role="tabpanel" class="tab-pane" id="messages">...</div>' +
		          '<div role="tabpanel" class="tab-pane" id="settings">...</div>' +
		        '</div>' +
          '</div>'
	},
	{
	title: 'Bootstrap - Pilulas Verticais',
	image: 'template3.gif',
	description: 'Abas verticais aonde apenas o conteúdo de uma delas aparece.',
	html: '<div>' +
					'<!-- Nav tabs -->' +
					'<ul class="nav nav-pills nav-stacked" role="tablist">' +
						'<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>' +
						'<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>' +
						'<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>' +
						'<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>' +
					'</ul>' +

					'<!-- Tab panes -->' +
					'<div class="tab-content">' +
						'<div role="tabpanel" class="tab-pane active" id="home">...</div>' +
						'<div role="tabpanel" class="tab-pane" id="profile">...</div> ' +
						'<div role="tabpanel" class="tab-pane" id="messages">...</div>' +
						'<div role="tabpanel" class="tab-pane" id="settings">...</div>' +
					'</div>' +
				'</div>'
  },
	{
	title: 'Bootstrap - Pilulas Verticais',
	image: 'template3.gif',
	description: 'Abas verticais aonde apenas o conteúdo de uma delas aparece.',
	html:	'<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">' +
          '<div class="panel panel-default">' +
            '<div class="panel-heading" role="tab" id="headingOne">' +
              '<h4 class="panel-title">' +
                '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
                  'Collapsible Group Item #1' +
                '</a>' +
              '</h4>' +
            '</div>' +
            '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">' +
              '<div class="panel-body">' +
                 'Anim pariatur cliche reprehenderit.' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="panel panel-default">' +
            '<div class="panel-heading" role="tab" id="headingTwo">' +
              '<h4 class="panel-title">' +
                '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">' +
                   'Collapsible Group Item #2' +
                '</a>' +
              '</h4>' +
            '</div>' +
            '<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">' +
              '<div class="panel-body">' +
                'Anim pariatur cliche reprehenderit.' +
              '</div>' +
            '</div>' +
          '  </div>' +
        '</div>'
  }
 ]
} );
