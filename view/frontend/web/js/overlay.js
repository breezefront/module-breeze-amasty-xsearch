define([
    'jquery',
    'ko',
    'uiComponent'
], function ($, ko, Component) {
    'use strict';

    return Component.extend({
        component: 'Amasty_Xsearch/js/components/overlay',
        defaults: {
            selectors: {
              body: 'body'
            },
            classes: {
                opened: '-amsearch-overlay-opened'
            },
            nodes: {}
        },

        /**
         * @inheritDoc
         */
        initialize: function () {
            this.initObservable();

            this.nodes.body = $(this.selectors.body);
        },

        destroy: function () {
            this.hide();
            this._super();
        },

        /**
         * @inheritDoc
         */
        initObservable: function () {
            this.opened = ko.observable(false);
        },

        /**
         * Initialize wrapper node
         *
         * @public
         */
        initNode: function (node) {
            this.nodes.wrapper = $(node.parentNode);
        },

        /**
         * Show wrapper node
         *
         * @public
         */
        show: function () {
            this.nodes.body.addClass(this.classes.opened);
            this.nodes.wrapper.show();
            this.opened(true);
        },

        /**
         * Hide wrapper node
         *
         * @public
         */
        hide: function () {
            this.nodes.body.removeClass(this.classes.opened);
            this.nodes.wrapper.hide();
            this.opened(false);
        }
    });
});
