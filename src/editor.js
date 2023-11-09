 /* Import TinyMCE */
 import tinymce from 'tinymce';
 import 'tinymce/models/dom';
 /* Default icons are required for TinyMCE 5.3 or above */
 import 'tinymce/icons/default';

 /* A theme is also required */
 import 'tinymce/themes/silver';

 /* Import the skin */
 import 'tinymce/skins/ui/oxide/skin.css';

 /* Import plugins */
 import 'tinymce/plugins/advlist';
 import 'tinymce/plugins/code';
 import 'tinymce/plugins/emoticons';
 import 'tinymce/plugins/emoticons/js/emojis';
 import 'tinymce/plugins/link';
 import 'tinymce/plugins/image';
 import 'tinymce/plugins/preview';
 import 'tinymce/plugins/lists';
 import 'tinymce/plugins/table';
 import 'tinymce/plugins/codesample';


 /* Import content css */
 import contentUiCss from 'tinymce/skins/ui/oxide/content.css?inline';
 import contentCss from 'tinymce/skins/content/default/content.css?inline';

 /* Initialize TinyMCE */
 export function render () {
   tinymce.init({
     selector: 'textarea#editor',
     plugins: 'preview advlist code emoticons link lists table image codesample',
     toolbar: 'preview image codesample | bold italic | bullist numlist | link emoticons',
     menubar: false,
     skin: false,
     content_css: false,
     content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
   });
 };
