/**
 * @fileOverview Internationalization UI component
 * @author David Neilson david@panmedia.co.nz
 * @author Michael Robinson michael@panmedia.co.nz
 */
 $.ui.editor.registerUi({
    
    /**
     * @name $.editor.ui.i18n
     * @augments $.ui.editor.defaultUi
     * @class Provides a dropdown to allow the user to switch between available localizations
     */
    i18n: /** @lends $.editor.ui.i18n.prototype */ {

        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor, options) {
            var ui = this;
            var locale = this.persist('locale');
            if (locale) {
                editor.setLocale(locale);
            }

            var menu = $('<select autocomplete="off" name="i18n"/>');

            for (var key in editor.getLocales()) {
                var option = $('<option value="' + key + '" class="' + key + '"/>');
                option.html(editor.getLocaleName(key));

                if (editor.getLocale() === key) {
                    option.attr('selected', 'selected');
                }

                menu.append(option);
            };

            return editor.uiSelectMenu({
                title: _('Change Language'),
                select: menu,
                change: function(value) {
                    editor.setLocale(ui.persist('locale', value));
                }
            });
        }
    }
});
