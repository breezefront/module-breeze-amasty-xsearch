(function () {
    'use strict';

    $.mixin('amsearchFullWidth', {
        _create: function () {
            var wrapper = $('.amsearch-wrapper-block')['Amasty_Xsearch/js/wrapper']('instance');

            if (wrapper) {
                this.amsearch_wrapper = wrapper;
                this.initObservable();
            }

            $(document).on('Amasty_Xsearch/js/wrapper:afterCreate', (e, data) => {
                this.amsearch_wrapper = data.instance;
                this.initObservable();
            });
        }
    })

    $(document).on('breeze:mount:amsearchFullWidth', (e, data) => {
        $(data.el).amsearchFullWidth(data.settings);
    });
})();
