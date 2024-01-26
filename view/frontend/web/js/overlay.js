define([
    'jquery'
], function ($) {
    'use strict';

    $.breezemap['Amasty_Xsearch/js/components/overlay'] = $.breezemap.__lastComponent();

    $.mixin('Amasty_Xsearch/js/components/overlay', {
        destroy: function (parent) {
            this.hide();
            parent();
        }
    });
});
