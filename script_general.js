(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.Image_7782BA5B_66B4_8C61_41A5_8F0DBF078C04","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"width":"100%","id":"rootPlayer","hash": "24031954c3f682316e2dc3a1dc4643feb98df4b5f30f07476a455f367988c6eb", "definitions": [{"pitch":-6.69,"showEasing":"cubic_in","showDuration":500,"class":"PopupPanoramaOverlay","hideEasing":"cubic_out","popupDistance":100,"yaw":164.45,"popupMaxWidth":"95%","hfov":5.6,"hideDuration":500,"id":"popup_77901B3E_66B3_8C23_41C4_DDF8FABC0FCC","image":"this.ImageResource_76DBF772_66B4_8422_4194_C1EDC71B8F4F","popupMaxHeight":"95%"},{"class":"Panorama","hfov":360,"hfovMin":"120%","id":"panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD","hfovMax":130,"vfov":180,"overlays":["this.overlay_6B0ED838_66B4_8C2E_41D5_78F4B8A24271","this.popup_765C5116_66BC_7DE2_41D8_5D9C4804607C","this.overlay_6932B143_66BC_7C62_41C3_EFE67F4D70DA","this.popup_77901B3E_66B3_8C23_41C4_DDF8FABC0FCC"],"data":{"label":"360_01"},"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2560,"url":"media/panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_0/{face}/0/{row}_{column}.jpg","colCount":30,"class":"TiledImageResourceLevel","rowCount":5,"tags":"ondemand","width":15360},{"height":1536,"url":"media/panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_0/{face}/1/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel","rowCount":3,"tags":"ondemand","width":9216},{"height":1024,"url":"media/panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","width":6144},{"height":512,"url":"media/panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_t.jpg"}],"label":trans('panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD.label'),"thumbnailUrl":"media/panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_t.jpg"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"id":"ImageResource_76DBF772_66B4_8422_4194_C1EDC71B8F4F","levels":["this.imlevel_76A4504B_66B4_BC61_41C1_7BF9D558E94E","this.imlevel_76A4204B_66B4_BC61_41D6_CE437FEE2584","this.imlevel_76A4004B_66B4_BC61_41D2_3C4563332719","this.imlevel_76A4E04B_66B4_BC61_41D3_3B7AD49372F0","this.imlevel_76A5004B_66B4_BC61_41D4_3E5F5EBF53FD"],"class":"ImageResource"},{"horizontalAlign":"center","backgroundOpacity":0,"width":"14.611%","id":"Image_7782BA5B_66B4_8C61_41A5_8F0DBF078C04","data":{"name":"Image"},"right":"2.77%","url":trans('Image_7782BA5B_66B4_8C61_41A5_8F0DBF078C04.url'),"class":"Image","propagateClick":false,"verticalAlign":"middle","minHeight":1,"minWidth":1,"top":"4.66%","height":"12.155%","scaleMode":"fit_inside"},{"pitch":-10.67,"showEasing":"cubic_in","showDuration":500,"class":"PopupPanoramaOverlay","hideEasing":"cubic_out","popupDistance":100,"yaw":-22.31,"popupMaxWidth":"95%","hfov":5.6,"hideDuration":500,"id":"popup_765C5116_66BC_7DE2_41D8_5D9C4804607C","image":"this.ImageResource_76DF0770_66B4_843E_41CB_CD0ABF1E4E96","popupMaxHeight":"95%"},{"id":"ImageResource_76DF0770_66B4_843E_41CB_CD0ABF1E4E96","levels":["this.imlevel_76AB1D91_66B4_84E1_41A0_B21F92F07F9B","this.imlevel_76AB0D91_66B4_84E1_41CD_2F5D08D13132","this.imlevel_76AB2D91_66B4_84E1_41C0_91FD07768DC9","this.imlevel_76AB2D91_66B4_84E1_41D4_9D436E07C692","this.imlevel_76ABDD91_66B4_84E1_41D9_A1AC7D276152"],"class":"ImageResource"},{"viewerArea":"this.MainViewer","displayPlaybackBar":true,"arrowKeysAction":"translate","class":"PanoramaPlayer","touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true},{"id":"mainPlayList","items":[{"camera":"this.panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD_camera","media":"this.panorama_6A790787_66B4_84E2_41C1_A1CCE87127FD","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"surfaceReticleColor":"#FFFFFF","progressBottom":10,"progressBorderSize":0,"toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","progressBarBorderRadius":2,"playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","progressBarBorderSize":0,"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesFontSize":"3vmin","progressHeight":2,"data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"playbackBarBackgroundColor":["#FFFFFF"],"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarRight":0,"progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","propagateClick":false,"width":"100%","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipFontFamily":"Arial","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"subtitlesGap":0,"toolTipTextShadowColor":"#000000","id":"MainViewer","playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"progressBackgroundColorRatios":[0],"progressRight":"33%","toolTipBorderColor":"#767676","playbackBarLeft":0,"progressOpacity":0.7,"subtitlesTextShadowOpacity":1,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","class":"ViewerArea","minHeight":50,"playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","minWidth":100,"playbackBarHeadShadow":true,"progressBorderColor":"#000000","toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerColor":"#FFFFFF","playbackBarBottom":5,"height":"100%","progressBackgroundColor":["#000000"],"subtitlesTop":0,"toolTipPaddingBottom":4},{"backgroundOpacity":0.55,"id":"veilPopupPanorama","left":0,"backgroundColor":["#000000"],"data":{"name":"UIComponent6768"},"backgroundColorRatios":[0],"right":0,"class":"UIComponent","propagateClick":false,"minHeight":0,"minWidth":0,"top":0,"bottom":0,"visible":false,"showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"}},{"id":"zoomImagePopupPanorama","left":0,"backgroundColor":[],"data":{"name":"ZoomImage6769"},"backgroundColorRatios":[],"right":0,"class":"ZoomImage","propagateClick":false,"minHeight":0,"minWidth":0,"top":0,"bottom":0,"scaleMode":"custom","visible":false},{"id":"closeButtonPopupPanorama","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontFamily":"Arial","layout":"horizontal","iconHeight":"100%","data":{"name":"CloseButton6770"},"fontSize":"1.29vmin","backgroundColorRatios":[0,0.09803921568627451,1],"right":10,"iconLineWidth":2,"class":"CloseButton","propagateClick":false,"minHeight":0,"minWidth":0,"fontColor":"#FFFFFF","top":10,"iconWidth":"100%","iconColor":"#000000","borderColor":"#000000","visible":false,"pressedIconColor":"#888888","showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"rollOverIconColor":"#666666"},{"enabledInVR":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-10.67,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-22.31,"data":{"label":"Image"},"vfov":6.18,"hfov":5.6,"image":"this.res_76B589EB_66B4_8C22_41D3_27AD36559847"}],"data":{"label":"Image"},"maps":[],"id":"overlay_6B0ED838_66B4_8C2E_41D5_78F4B8A24271","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6B22D89A_66B4_8CE2_41C1_D1FD804CEA08"]},{"enabledInVR":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-6.69,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":164.45,"data":{"label":"Image"},"vfov":6.18,"hfov":5.6,"image":"this.res_76B589EB_66B4_8C22_41D3_27AD36559847"}],"data":{"label":"Image"},"maps":[],"id":"overlay_6932B143_66BC_7C62_41C3_EFE67F4D70DA","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_69319144_66BC_7C66_41D8_15D24F5D8006"]},{"height":4608,"url":trans('imlevel_76A4504B_66B4_BC61_41C1_7BF9D558E94E.url'),"class":"ImageResourceLevel","id":"imlevel_76A4504B_66B4_BC61_41C1_7BF9D558E94E","width":8192},{"height":2304,"url":trans('imlevel_76A4204B_66B4_BC61_41D6_CE437FEE2584.url'),"class":"ImageResourceLevel","id":"imlevel_76A4204B_66B4_BC61_41D6_CE437FEE2584","width":4096},{"height":1152,"url":trans('imlevel_76A4004B_66B4_BC61_41D2_3C4563332719.url'),"class":"ImageResourceLevel","id":"imlevel_76A4004B_66B4_BC61_41D2_3C4563332719","width":2048},{"height":576,"url":trans('imlevel_76A4E04B_66B4_BC61_41D3_3B7AD49372F0.url'),"class":"ImageResourceLevel","id":"imlevel_76A4E04B_66B4_BC61_41D3_3B7AD49372F0","width":1024},{"height":288,"url":trans('imlevel_76A5004B_66B4_BC61_41D4_3E5F5EBF53FD.url'),"class":"ImageResourceLevel","id":"imlevel_76A5004B_66B4_BC61_41D4_3E5F5EBF53FD","width":512},{"height":4608,"url":trans('imlevel_76AB1D91_66B4_84E1_41A0_B21F92F07F9B.url'),"class":"ImageResourceLevel","id":"imlevel_76AB1D91_66B4_84E1_41A0_B21F92F07F9B","width":8192},{"height":2304,"url":trans('imlevel_76AB0D91_66B4_84E1_41CD_2F5D08D13132.url'),"class":"ImageResourceLevel","id":"imlevel_76AB0D91_66B4_84E1_41CD_2F5D08D13132","width":4096},{"height":1152,"url":trans('imlevel_76AB2D91_66B4_84E1_41C0_91FD07768DC9.url'),"class":"ImageResourceLevel","id":"imlevel_76AB2D91_66B4_84E1_41C0_91FD07768DC9","width":2048},{"height":576,"url":trans('imlevel_76AB2D91_66B4_84E1_41D4_9D436E07C692.url'),"class":"ImageResourceLevel","id":"imlevel_76AB2D91_66B4_84E1_41D4_9D436E07C692","width":1024},{"height":288,"url":trans('imlevel_76ABDD91_66B4_84E1_41D9_A1AC7D276152.url'),"class":"ImageResourceLevel","id":"imlevel_76ABDD91_66B4_84E1_41D9_A1AC7D276152","width":512},{"id":"res_76B589EB_66B4_8C22_41D3_27AD36559847","levels":[{"height":176,"url":"media/res_76B589EB_66B4_8C22_41D3_27AD36559847_0.png","class":"ImageResourceLevel","width":176}],"class":"ImageResource"},{"click":"this.showPopupPanoramaOverlay(this.popup_765C5116_66BC_7DE2_41D8_5D9C4804607C,{'borderSize':0,'pressedIconHeight':20,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'rollOverIconHeight':20,'pressedBorderSize':0,'rollOverIconLineWidth':2,'backgroundOpacity':1,'iconHeight':20,'rollOverBackgroundOpacity':1,'pressedIconLineWidth':2,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconLineWidth':2,'borderRadius':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedIconWidth':20,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconColor':'#666666','borderColor':'#000000','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingBottom':5,'pressedBackgroundOpacity':1,'paddingLeft':5},this.ImageResource_76DF0770_66B4_843E_41CB_CD0ABF1E4E96,null,null,null,false)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6B22D89A_66B4_8CE2_41C1_D1FD804CEA08","displayTooltipInTouchScreens":true,"mapColor":"any"},{"click":"this.showPopupPanoramaOverlay(this.popup_77901B3E_66B3_8C23_41C4_DDF8FABC0FCC,{'borderSize':0,'pressedIconHeight':20,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'rollOverIconHeight':20,'pressedBorderSize':0,'rollOverIconLineWidth':2,'backgroundOpacity':1,'iconHeight':20,'rollOverBackgroundOpacity':1,'pressedIconLineWidth':2,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconLineWidth':2,'borderRadius':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedIconWidth':20,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconColor':'#666666','borderColor':'#000000','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'paddingBottom':5,'pressedBackgroundOpacity':1,'paddingLeft':5},this.ImageResource_76DBF772_66B4_8422_4194_C1EDC71B8F4F,null,null,null,false)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_69319144_66BC_7C66_41D8_15D24F5D8006","displayTooltipInTouchScreens":true,"mapColor":"any"}],"data":{"locales":{"fr":"locale/fr.txt"},"history":{},"defaultLocale":"fr","name":"Player647","displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1}},"backgroundColor":["#FFFFFF"],"start":"this.init()","layout":"absolute","backgroundColorRatios":[0],"watermark":false,"scrollBarMargin":2,"class":"Player","propagateClick":false,"gap":10,"minHeight":0,"minWidth":0,"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scripts":{"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"historyGoBack":TDV.Tour.Script.historyGoBack,"openLink":TDV.Tour.Script.openLink,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getKey":TDV.Tour.Script.getKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPixels":TDV.Tour.Script.getPixels,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"initQuiz":TDV.Tour.Script.initQuiz,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeJS":TDV.Tour.Script.executeJS,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"init":TDV.Tour.Script.init,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"unloadViewer":TDV.Tour.Script.unloadViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizStart":TDV.Tour.Script.quizStart,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"createTween":TDV.Tour.Script.createTween,"showPopupImage":TDV.Tour.Script.showPopupImage,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showWindow":TDV.Tour.Script.showWindow,"disableVR":TDV.Tour.Script.disableVR,"toggleVR":TDV.Tour.Script.toggleVR,"showWindowBase":TDV.Tour.Script.showWindowBase,"enableVR":TDV.Tour.Script.enableVR,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"mixObject":TDV.Tour.Script.mixObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMainViewer":TDV.Tour.Script.getMainViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"translate":TDV.Tour.Script.translate,"registerKey":TDV.Tour.Script.registerKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"existsKey":TDV.Tour.Script.existsKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.6, Tue Apr 7 2026