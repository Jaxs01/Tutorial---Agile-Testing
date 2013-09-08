angular.module('ng')
    .directive('a', function () {
      return {
        restrict: 'E',
        link: function (scope, element, attrs) {


          function getPage(pages, partialId) {

            if (!(pages && pages.length)) return;

            partialId = partialId || '';

            for (var i = 0, ii = pages.length; i < ii; i++) {
              if (pages[i].id == partialId) {
                return pages[i];
              }
            }
            return null;
          };


          // check whether link WITHIN the page
          // starts with # and doesn't contain slash (otherwise it picks up the search)
          // FIXME: linking only works once per page load
          if (/^#/.test(attrs.href) && !/\//.test(attrs.href)) {
            element[0].setAttribute("href", scope.$parent.currentPage.url + attrs.href);
            return
          }

          // open external links in new browser or tab
          if (/^http/.test(attrs.href)) {
            element[0].setAttribute("target", "_blank");
            return
          }

          // check whether it is link BETWEEN pages
          var page = getPage(scope.$parent.pages, attrs.href);
          if (page != null) {
            element[0].href = element[0].baseURI + page.url;
          }

        }
      }
    });