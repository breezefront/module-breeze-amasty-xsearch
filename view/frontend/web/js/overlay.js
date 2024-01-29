define([
    'jquery',
    'uiComponent'
], function ($, Component) {
    'use strict';

    Component.registerLastAnonymous('Amasty_Xsearch/js/components/overlay');

    $.mixin('Amasty_Xsearch/js/components/overlay', {
        destroy: function (parent) {
            this.hide();
            parent();
        }
    });
});
