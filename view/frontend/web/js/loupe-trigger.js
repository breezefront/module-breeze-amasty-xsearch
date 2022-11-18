define([
    'jquery',
    'ko',
    'uiComponent'
], function ($, ko, Component) {
    'use strict';

    return Component.extend({
        component: 'Amasty_Xsearch/js/components/loupe-trigger',

        /**
         * @inheritDoc
         */
        initialize: function () {
            var wrapper = $('.amsearch-wrapper-block')['Amasty_Xsearch/js/wrapper']('instance');

            if (wrapper) {
                this.amsearch_wrapper = wrapper;
            }

            $(document).on('Amasty_Xsearch/js/wrapper:afterCreate', (e, data) => {
                this.amsearch_wrapper = data.instance;
            });
        },

        /**
         * Toggling Search Menu
         *
         * @public
         */
        toggle: function () {
            this.amsearch_wrapper.focused(!this.amsearch_wrapper.focused());
        }
    });
});
