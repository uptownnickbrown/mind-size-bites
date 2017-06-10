var MVJ, // Minimum Viable Jigsaw
    urlParams;

$(document).ready(function () {
    (window.onpopstate = function () {
        var match,
            pl = /\+/g, // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) {
                return decodeURIComponent(s.replace(pl, " "));
            },
            query = window.location.search.substring(1);
        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
    })();

    var InternalMVJ = {
        "clickEvent": (Browser.isIOS() ? 'click' : 'click')
    }
    MVJ = InternalMVJ;
    InternalMVJ.jigsawCtrl = new JigsawCtrl(urlParams.vbid, urlParams.page);

    // Remove 300ms click delay
    FastClick.attach(document.body);
});

function configOptions() {
    console.log('checking config options');
    console.log(urlParams);
    if (urlParams.arrows == true) {
        console.log('arrows are ON');
        $('.next-page').bind('click', function () {
            MVJ.jigsawCtrl.goToNextPage();
        });

        $('.prev-page').bind('click', function () {
            MVJ.jigsawCtrl.goToPreviousPage();
        });
        $('.arrow').css('display', 'block');
    }

    if (parseInt(urlParams.height) > 0) {
        console.log('setting height to ' + urlParams.height + ' pixels.');
        $("#content").css('height',urlParams.height);
    }

    if (parseInt(urlParams.width) > 0) {
        console.log('setting width to ' + urlParams.width + ' pixels.');
        $("#content").css('width',urlParams.width);
    }

    if (urlParams.resizable == true) {
        $("#content").resizable({
            autoHide: true,
            handles: "se",
            maxHeight: 680,
            maxWidth: 1024,
            minHeight: 300,
            minWidth: 320
        });
                $(".my-notebook").resizable({
            autoHide: true,
            handles: "se",
            maxHeight: 680,
            maxWidth: 1024,
            minHeight: 300,
            minWidth: 320
        });
    }
}

function JigsawCtrl(vbidParam, pageParam) {
    var $scope = this;
    this.Jigsaw;
    this.pageBreaks;
    if (vbidParam) {
        vbidParam = vbidParam + '';
        console.log('vbid passed in ' + vbidParam);
    } else {
        vbidParam = '9780203370360';
    }

    if (pageParam) {
        pageParam = pageParam + '';
        console.log('page passed in ' + pageParam);
    } else {
        pageParam = '';
    }

    this.init = function () {
        $scope.Jigsaw = Jigsaw.createPageViewer({
            vbid: vbidParam,
            el: "content",
            page: pageParam,
            brand: "MVJ",
            highlightsEnabled: false
        }, viewer_ready);
        configOptions();
    }

    this.goToNextPage = function () {
        this.Jigsaw.Book.goToNextPage(function () {});
    }

    this.goToPreviousPage = function () {
        this.Jigsaw.Book.goToPreviousPage(function () {});
    }
    this.goToPage = function (label) {
        this.Jigsaw.Book.goToPage(function (label) {});
    }

    this.listHighlights = function () {
        this.Jigsaw.Book.getHighlights(function (response) {

            var highlights = response.data.highlights,
                markers = response.data.markers,
                colorLookup = {},
                $target = $('.my-notebook');

            for (i in markers) {
                colorLookup[markers[i].globalId] = markers[i].color80;
            }

            for (i in highlights) {
                $target.append('<tr><td><span style="background: ' + colorLookup[highlights[i].markerId] + ';">' + highlights[i].selectedText + '<span></td></tr>');
                $target.append('<tr><td>' + highlights[i].noteText + '</td></tr>');
            }
        });
    }

    this.init();
}
