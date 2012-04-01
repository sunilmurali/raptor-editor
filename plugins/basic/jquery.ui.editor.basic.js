/**
 * @fileOverview Basic text styling ui components
 * @author David Neilson david@panmedia.co.nz
 * @author Michael Robinson michael@panmedia.co.nz
 */

$.ui.editor.registerUi({

    /**
     * @name $.editor.ui.textBold
     * @augments $.ui.editor.defaultUi
     * @class Wraps (or unwraps) the selection with &lt;strong&gt; tags
     * <br/>
     * Applies either {@link $.ui.editor.defaults.cssPrefix} + 'bold' or a custom class (if present) to the &lt;strong&gt; element
     */
    textBold: /** @lends $.editor.ui.textBold.prototype */ {
        
        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor, options) {
            return this.editor.uiButton({
                title: _('Bold'),
                click: function() {
                    editor.toggleWrapper('strong', { classes: options.classes || options.cssPrefix + 'bold' });
                }
            });
        }
    },

    /**
     * @name $.editor.ui.textItalic
     * @augments $.ui.editor.defaultUi
     * @class Wraps (or unwraps) the selection with &lt;em&gt; tags
     * <br/>
     * Applies either {@link $.ui.editor.defaults.cssPrefix} + 'italic' or a custom class (if present) to the &lt;em&gt; element
     */
    textItalic: /** @lends $.editor.ui.textItalic.prototype */ {
        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor, options) {
            return editor.uiButton({
                title: _('Italic'),
                click: function() {
                    editor.toggleWrapper('em', { classes: options.classes || options.cssPrefix + 'italic' });
                }
            });
        }
    },

    /**
     * @name $.editor.ui.textUnderline
     * @augments $.ui.editor.defaultUi
     * @class Wraps (or unwraps) the selection with &lt;u&gt; tags
     * <br/>
     * Applies either {@link $.ui.editor.defaults.cssPrefix} + 'underline' or a custom class (if present) to the &lt;u&gt; element
     */
    textUnderline: /** @lends $.editor.ui.textUnderline.prototype */ {
        
        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor, options) {
            return editor.uiButton({
                title: _('Underline'),
                click: function() {
                    editor.toggleWrapper('u', { classes: options.classes || options.cssPrefix + 'underline' });
                }
            });
        }
    },

    /**
     * @name $.editor.ui.textStrike
     * @augments $.ui.editor.defaultUi
     * @class  Wraps (or unwraps) the selection with &lt;del&gt; tags
     * <br/>
     * Applies either {@link $.ui.editor.defaults.cssPrefix} + 'strike' or a custom class (if present) to the &lt;del&gt; element
     */
    textStrike: /** @lends $.editor.ui.textStrike.prototype */ {
        
        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor, options) {
            return editor.uiButton({
                title: _('Strikethrough'),
                click: function() {
                    editor.toggleWrapper('del', { classes: options.classes || options.cssPrefix + 'strike' });
                }
            });
        }
    },

    /**
     * @name $.editor.ui.textSub
     * @augments $.ui.editor.defaultUi
     * @class Wraps (or unwraps) the selection with &lt;sub&gt; tags
     * <br/>
     * Applies either {@link $.ui.editor.defaults.cssPrefix} + 'sub' or a custom class (if present) to the &lt;sub&gt; element
     */
    textSub: /** @lends $.editor.ui.textSub.prototype */ {
        
        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor, options) {
            return editor.uiButton({
                title: _('Sub script'),
                click: function() {
                    editor.toggleWrapper('sub', { classes: options.classes || options.cssPrefix + 'sub' });
                }
            });
        }
    },

    /**
     * @name $.editor.ui.textSuper
     * @augments $.ui.editor.defaultUi
     * @class Wraps (or unwraps) the selection with &lt;sup&gt; tags
     * <br/>
     * Applies either {@link $.ui.editor.defaults.cssPrefix} + 'super' or a custom class (if present) to the &lt;sub&gt; element
     */
    textSuper: /** @lends $.editor.ui.textSuper.prototype */ {

        /**
         * @see $.ui.editor.defaultUi#init
         */
        init: function(editor, options) {
            return editor.uiButton({
                title: _('Super script'),
                click: function() {
                    editor.toggleWrapper('sup', { classes: options.classes || options.cssPrefix + 'super' });
                }
            });
        }
    }
});
