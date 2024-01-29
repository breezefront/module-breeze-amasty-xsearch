define([
    'jquery',
    'uiComponent'
], function ($, Component) {
    'use strict';

    Component.register('Amasty_Xsearch/js/wrapper');

    $.mixin('Amasty_Xsearch/js/wrapper', {
        defaults: {
            templates: {
                preload: 'Swissup_BreezeAmastyXsearch/components/preload.html',
                message: 'Swissup_BreezeAmastyXsearch/components/message.html',
                results: 'Swissup_BreezeAmastyXsearch/results/wrapper.html',
                loader: 'Amasty_Xsearch/components/loader.html'
            }
        },

        onEnter: function (parent, UiClass, event) {
            if (event.keyCode === 13) {
                // productLinksStorage.saveLinks($(this.selectors.wrapper));
                this.search();

                return false;
            }

            return true;
        },

        _parseSearchData: function (parent, data) {
            var searchItems = [];

            Object.keys(data).forEach(function (key) {
                if (data[key].type === 'product') {
                    // Breeze: jQuery.isEmptyObject replaced with $.isEmptyObject
                    const isEmptyData = $.isEmptyObject($.parseHTML(data[key].html.trim())),
                        isProductsSeparateSection = this.isNeedHorizontalView();

                    if (isEmptyData) {
                        this.searchProducts([]);
                        this.message(this.messages.emptyProductSearch.replace('%search_query%', this.inputValue()));

                        return;
                    }

                    if (isProductsSeparateSection) {
                        this.searchProducts(data[key].html);
                    } else {
                        searchItems.push(data[key]);
                    }

                    return;
                }

                if (data[key].html === undefined || data[key].html.length <= 1) {
                    return;
                }

                searchItems.push(data[key]);
            }.bind(this));

            this.searchItems(searchItems);
        },

        initCssVariables: () => {}
    });
});
