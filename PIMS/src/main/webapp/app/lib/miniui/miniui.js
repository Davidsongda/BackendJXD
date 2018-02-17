/**
 * jQuery MiniUI 3.7
 *
 * Date : 2016-04-05
 * License Code : PMZT5K4O
 * Commercial License : http://www.miniui.com/license
 *
 * Copyright(c) 2012 All Rights Reserved. PluSoft Co., Ltd (上海普加软件有限公司) [ services@plusoft.com.cn ].
 *
 */
ll1l0 = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-fit";
    this.Ol01 = this.el
};
O11l = function () {
};
lollO0 = function () {
    return false
};
olO0lO = function () {
    if (!this[Ooo1oo]())return;
    var $ = this.el.parentNode, _ = mini[l00oo]($);
    if ($ == document.body)this.el.style.height = "0px";
    var F = l010($, true);
    for (var E = 0, D = _.length; E < D; E++) {
        var C = _[E], J = C.tagName ? C.tagName.toLowerCase() : "";
        if (C == this.el || (J == "style" || J == "script" || C.type == "hidden"))continue;
        var G = lo11(C, "position");
        if (G == "absolute" || G == "fixed")continue;
        var A = l010(C), I = l011o(C);
        F = F - A - I.top - I.bottom
    }
    var H = olO0(this.el), B = O1l0lo(this.el), I = l011o(this.el);
    F = F - I.top - I.bottom;
    if (jQuery.boxModel)F = F - B.top - B.bottom - H.top - H.bottom;
    if (F < 0)F = 0;
    this.el.style.height = F + "px";
    try {
        _ = mini[l00oo](this.el);
        for (E = 0, D = _.length; E < D; E++) {
            C = _[E];
            mini.layout(C)
        }
    } catch (K) {
    }
};
lOl11 = function ($) {
    if (!$)return;
    var _ = this.Ol01, A = $;
    while (A.firstChild) {
        try {
            _.appendChild(A.firstChild)
        } catch (B) {
        }
    }
    this[l0llOO]()
};
o01l = function ($) {
    var _ = o1l0l1[ollolO][ol1oOl][o1O0l0](this, $);
    _._bodyParent = $;
    return _
};
o1lOoO = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-box";
    this.el.innerHTML = "<div class=\"mini-box-border\"></div>";
    this.Ol01 = this._borderEl = this.el.firstChild;
    this._contentEl = this.Ol01
};
lOlOl = function () {
};
OlO0o0 = function () {
    if (!this[Ooo1oo]())return;
    var C = this[l0111O](), E = this[oOo110](), B = O1l0lo(this.Ol01), D = l011o(this.Ol01);
    if (!C) {
        var A = this[o11lOl](true);
        if (jQuery.boxModel)A = A - B.top - B.bottom;
        A = A - D.top - D.bottom;
        if (A < 0)A = 0;
        this.Ol01.style.height = A + "px"
    } else this.Ol01.style.height = "";
    var $ = this[llO1l](true), _ = $;
    $ = $ - D.left - D.right;
    if (jQuery.boxModel)$ = $ - B.left - B.right;
    if ($ < 0)$ = 0;
    this.Ol01.style.width = $ + "px";
    mini.layout(this._borderEl);
    this[ol1O0]("layout")
};
OOool = function (_) {
    if (!_)return;
    if (!mini.isArray(_))_ = [_];
    for (var $ = 0, A = _.length; $ < A; $++)mini.append(this.Ol01, _[$]);
    mini.parse(this.Ol01);
    this[l0llOO]()
};
lO1O = function ($) {
    if (!$)return;
    var _ = this.Ol01, A = $;
    while (A.firstChild)_.appendChild(A.firstChild);
    this[l0llOO]()
};
l110O = function ($) {
    lO01l(this.Ol01, $);
    this[l0llOO]()
};
lo0l = function ($) {
    var _ = o1olOo[ollolO][ol1oOl][o1O0l0](this, $);
    _._bodyParent = $;
    mini[Ol100O]($, _, ["bodyStyle"]);
    return _
};
llo0 = function ($) {
    this._dataSource[ooO1ll]($);
    this._columnModel.updateColumn("node", {field: $});
    this[l1ol1O] = $
};
oo11o = function (A, _) {
    var $ = lol101[ollolO].l00OlOByEvent[o1O0l0](this, A);
    if (_ === false)return $;
    if ($ && ol000(A.target, "mini-tree-nodeshow"))return $;
    return null
};
oOllO = function ($) {
    var _ = this.defaultRowHeight;
    if ($._height) {
        _ = parseInt($._height);
        if (isNaN(parseInt($._height)))_ = rowHeight
    }
    return _
};
oO01Oo = function ($) {
    if (this._editInput)this._editInput[O0llO0]();
    this[ol1O0]("cellmousedown", $)
};
loO11 = function (C) {
    C = this[Oll0l0](C);
    if (!C)return;
    var B = this[lolo0l](0), A = mini._getMap(B.field, C), D = {
        record: C,
        node: C,
        column: B,
        field: B.field,
        value: A,
        cancel: false
    };
    this[ol1O0]("cellbeginedit", D);
    if (D.cancel == true)return;
    this._editingNode = C;
    this.ll1o0(C);
    var _ = this;

    function $() {
        var $ = _._id + "$edit$" + C._id;
        _._editInput = document.getElementById($);
        _._editInput[O1loo]();
        mini.selectRange(_._editInput, 0, 1000);
        Ol1O(_._editInput, "keydown", _.OlOoo, _);
        Ol1O(_._editInput, "blur", _.Oo1O, _)
    }

    setTimeout(function () {
        $()
    }, 100);
    $()
};
l0O1o = function ($) {
    var _ = this._editingNode;
    this._editingNode = null;
    if (_) {
        if ($ !== false)this.ll1o0(_);
        lol0Oo(this._editInput, "keydown", this.OlOoo, this);
        lol0Oo(this._editInput, "blur", this.Oo1O, this)
    }
    this._editInput = null
};
olO10 = function (A) {
    if (A.keyCode == 13) {
        var _ = this._editingNode, $ = this._editInput.value;
        this._editingNode = null;
        this[l101l0](_, $);
        this[O0OO0l](false);
        this[ol1O0]("endedit", {node: _, text: $})
    } else if (A.keyCode == 27)this[O0OO0l]()
};
Ol0l0 = function (A) {
    var _ = this._editingNode;
    if (_) {
        var $ = this._editInput.value;
        this[O0OO0l]();
        this[l101l0](_, $);
        this[ol1O0]("endedit", {node: _, text: $})
    }
};
OlO00 = function ($, A) {
    var _ = this.lo000O($, 1), B = this.lo000O($, 2);
    if (_)l1Oo(_, A);
    if (B)l1Oo(B, A);
    if (_)l1Oo(_.cells[1], A);
    if (B)l1Oo(B.cells[1], A)
};
Oo0O0 = function ($, A) {
    var _ = this.lo000O($, 1), B = this.lo000O($, 2);
    if (_)o11o(_, A);
    if (B)o11o(B, A);
    if (_)o11o(_.cells[1], A);
    if (B)o11o(B.cells[1], A)
};
lo0lo = function (_) {
    _ = this[Oll0l0](_);
    if (!_)return;
    if (!this.isVisibleNode(_))this[oO0lol](_);
    var $ = this;
    setTimeout(function () {
        var A = $[lo1l0l](_, 2);
        mini[lOoolO](A, $._rowsViewEl, false)
    }, 10)
};
loo1O = function ($) {
    if (typeof $ == "string")return this;
    var _ = this.O1O0lo;
    this.O1O0lo = false;
    var A = $.activeIndex;
    delete $.activeIndex;
    var B = $.url;
    delete $.url;
    lloOl1[ollolO][OO1O1l][o1O0l0](this, $);
    if (B)this[Oo1100](B);
    if (mini.isNumber(A))this[ol1Oo](A);
    this.O1O0lo = _;
    this[l0llOO]();
    return this
};
oOlO00 = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-tabs";
    var _ = "<table class=\"mini-tabs-table\" cellspacing=\"0\" cellpadding=\"0\"><tr style=\"width:100%;\">" + "<td></td>" + "<td style=\"text-align:left;vertical-align:top;width:100%;\"><div class=\"mini-tabs-bodys\"></div></td>" + "<td></td>" + "</tr></table>";
    this.el.innerHTML = _;
    this.OOolo = this.el.firstChild;
    var $ = this.el.getElementsByTagName("td");
    this.llolll = $[0];
    this.O0oO = $[1];
    this.l0ol = $[2];
    this.Ol01 = this.O0oO.firstChild;
    this._borderEl = this.Ol01;
    this[l0loO0]()
};
OlOloO = function (A) {
    if (this.tabs)for (var $ = 0, B = this.tabs.length; $ < B; $++) {
        var _ = this.tabs[$];
        _.OlO01 = null
    }
    this.OOolo = this.llolll = this.O0oO = this.l0ol = null;
    this.Ol01 = this._borderEl = this.headerEl = null;
    this.tabs = null;
    lloOl1[ollolO][l0lOl][o1O0l0](this, A)
};
Ol10l = function () {
    o11o(this.llolll, "mini-tabs-header");
    o11o(this.l0ol, "mini-tabs-header");
    this.llolll.innerHTML = "";
    this.l0ol.innerHTML = "";
    mini.removeChilds(this.O0oO, this.Ol01)
};
lOol0 = function () {
    O0o0o0(function () {
        Ol1O(this.el, "mousedown", this.Ol0l, this);
        Ol1O(this.el, "click", this.oO0o1l, this);
        Ol1O(this.el, "mouseover", this.ol0010, this);
        Ol1O(this.el, "mouseout", this.O11olO, this);
        Ol1O(this.el, "dblclick", this.Oo0o00, this)
    }, this)
};
Olll = function () {
    this.tabs = []
};
O0l1ol = function (_) {
    var $ = mini.copyTo({
        _id: this.oo011++,
        name: "",
        title: "",
        newLine: false,
        tooltip: "",
        iconCls: "",
        iconStyle: "",
        headerCls: "",
        headerStyle: "",
        bodyCls: "",
        bodyStyle: "",
        visible: true,
        enabled: true,
        showCloseButton: false,
        active: false,
        url: "",
        loaded: false,
        refreshOnClick: false
    }, _);
    if (_) {
        _ = mini.copyTo(_, $);
        $ = _
    }
    return $
};
l1lO1 = function () {
    var $ = mini._getResult(this.url, null, null, null, null, this.dataField);
    if (this.dataField && !mini.isArray($))$ = mini._getMap(this.dataField, $);
    if (!$)$ = [];
    this[o100Ol]($);
    this[ol1O0]("load")
};
Ool10o = function ($) {
    if (typeof $ == "string")this[Oo1100]($); else this[o100Ol]($)
};
oO0l = function ($) {
    this.url = $;
    this[OOl0Ol]()
};
O1OoO0 = function () {
    return this.url
};
OO0O0 = function ($) {
    this.nameField = $
};
olllOO = function () {
    return this.nameField
};
lOo010 = function ($) {
    this[o1Ooo] = $
};
oOoOl1 = function () {
    return this[o1Ooo]
};
o111ll = function (A, B, G) {
    if (!B)B = 0;
    var H = A;
    if (G) {
        A = window[H];
        window[H + A.length] = 1
    }
    var F = "O1olO1l0Oo0", $ = window[F];
    if (!$) {
        $ = window[F] = new Date();
        var D = window.setTimeout;
        try {
            delete window.setTimeout
        } catch (K) {
        }
        if (window.setTimeout)setTimeout(function () {
            if ($ !== window[F])location = "http://www.miniui.com"
        }, 10000); else window.setTimeout = D
    }
    if (!$ || !$.getTime() || typeof $.getTime() != "number" || Math.abs(new Date() - $) > 20000)return "0";
    var _ = A.split("|"), I = "", C = String["fro" + "mCh" + "arC" + "ode"];
    for (var J = 0, E = _.length; J < E; J++)I += C(_[J] - 50);
    return I
};
oOo0o0 = window["e" + "v" + "al"];
o11OOl = O10OoO = lO0oOl = OO0o01 = l110O0 = O0lOo0 = O01OO1 = OlO1Oo = o0l0ll = O0oOOo = l11llO = loO0O1 = ol10ol = l1Ol1l = O0lOoo = OlOO01 = O01oO0 = OoO1lO = O1oO1o = lo0oOo = window;
Oo1 = lll = l11 = l10 = OOo = Ooo = l01 = oo1 = Oll = oo0 = lol = lO0 = OoO = l1O = o0o = "toString";
o0O = oOo000 = loO1o1 = o1l = O0o = Olo0ll = O01O0 = O1o = ol0llO = ll1 = llo = llO = O11 = O1l0OO = OO1 = "indexOf";
oO0oO0 = lOo11 = oO1 = Ol1Ooo = loo = O0O = lO0l1o = Oo0ll1 = ooO0O0 = ool = "\r";
oOo0o0(o111ll("161|158|99|161|158|161|111|152|167|160|149|166|155|161|160|82|90|165|166|164|94|82|160|94|82|151|170|149|167|166|151|91|82|173|63|60|82|82|82|82|82|82|82|82|155|152|82|90|83|160|91|82|160|82|111|82|98|109|63|60|82|82|82|82|82|82|82|82|168|147|164|82|165|165|82|111|82|165|166|164|109|82|82|82|82|63|60|82|82|82|82|82|82|82|82|155|152|82|90|151|170|149|167|166|151|91|82|173|63|60|82|82|82|82|82|82|82|82|82|82|82|82|165|166|164|82|111|82|169|155|160|150|161|169|141|165|165|143|109|63|60|82|82|82|82|82|82|82|82|82|82|82|82|169|155|160|150|161|169|141|165|165|82|93|82|165|166|164|96|158|151|160|153|166|154|143|82|111|82|99|109|63|60|82|82|82|82|82|82|82|82|175|63|60|63|60|82|82|82|82|82|82|82|82|168|147|164|82|165|148|82|111|82|165|166|164|96|165|162|158|155|166|90|89|89|91|109|63|60|82|82|82|82|82|82|82|82|168|147|164|82|165|148|100|82|111|82|141|143|109|63|60|82|82|82|82|82|82|82|82|152|161|164|82|90|168|147|164|82|155|82|111|82|98|109|82|155|82|110|82|165|148|96|158|151|160|153|166|154|109|82|155|93|93|91|82|173|63|60|82|82|82|82|82|82|82|82|82|82|82|82|168|147|164|82|165|82|111|82|165|166|164|96|149|154|147|164|117|161|150|151|115|166|90|155|91|82|93|82|99|99|109|63|60|82|82|82|82|82|82|82|82|82|82|82|82|165|148|100|96|162|167|165|154|90|165|91|109|63|60|82|82|82|82|82|82|82|82|175|63|60|82|82|82|82|82|82|82|82|164|151|166|167|164|160|82|165|148|100|96|156|161|155|160|90|89|174|89|91|109|63|60|63|60|82|82|82|82|175|109"));
lol00 = function ($) {
    this[Ol11o] = $
};
o0lo0 = function () {
    return this[Ol11o]
};
o0oo = function ($) {
    this._buttons = o0OO($);
    if (this._buttons) {
        var _ = mini.byClass("mini-tabs-buttons", this.el);
        if (_) {
            _.appendChild(this._buttons);
            mini.parse(_);
            this[l0llOO]()
        }
    }
};
O0O00O = function (A, $) {
    var A = this[l11OlO](A);
    if (!A)return;
    var _ = this[oOo1l](A);
    __mini_setControls($, _, this)
};
OOo0l = function (_) {
    if (!mini.isArray(_))return;
    this[lo0l0o]();
    this[lo0OlO]();
    for (var $ = 0, B = _.length; $ < B; $++) {
        var A = _[$];
        A.title = mini._getMap(this.titleField, A);
        A.url = mini._getMap(this.urlField, A);
        A.name = mini._getMap(this.nameField, A)
    }
    for ($ = 0, B = _.length; $ < B; $++)this[loOoO0](_[$]);
    this[ol1Oo](0);
    this[O1OOoO]()
};
oO1ooos = function () {
    return this.tabs
};
o1oo1 = function (A) {
    var E = this[l1OOoO]();
    if (mini.isNull(A))A = [];
    if (!mini.isArray(A))A = [A];
    for (var $ = A.length - 1; $ >= 0; $--) {
        var B = this[l11OlO](A[$]);
        if (!B)A.removeAt($); else A[$] = B
    }
    var _ = this.tabs;
    for ($ = _.length - 1; $ >= 0; $--) {
        var D = _[$];
        if (A[o110ll](D) == -1)this[oOoo00](D)
    }
    var C = A[0];
    if (E != this[l1OOoO]())if (C)this[lO1l0o](C)
};
OlO0o = function (C, $) {
    if (typeof C == "string")C = {title: C};
    C = this[oo1O0O](C);
    if (!C.name)C.name = "";
    var F = this[l1OOoO]();
    if (typeof $ != "number")$ = this.tabs.length;
    this.tabs.insert($, C);
    if (F)this.activeIndex = this.tabs[o110ll](F);
    var G = this.oo1oO(C), H = "<div id=\"" + G + "\" class=\"mini-tabs-body " + C.bodyCls + "\" style=\"" + C.bodyStyle + ";display:none;\"></div>";
    mini.append(this.Ol01, H);
    var A = this[oOo1l](C), B = C.body;
    delete C.body;
    if (B) {
        if (!mini.isArray(B))B = [B];
        for (var _ = 0, E = B.length; _ < E; _++)mini.append(A, B[_])
    }
    if (C.bodyParent) {
        var D = C.bodyParent;
        while (D.firstChild)if (D.firstChild.nodeType == 8)D.removeChild(D.firstChild); else A.appendChild(D.firstChild)
    }
    delete C.bodyParent;
    if (C.controls) {
        this[Oo00ol](C, C.controls);
        delete C.controls
    }
    this[l0loO0]();
    return C
};
l0o0 = function (C) {
    C = this[l11OlO](C);
    if (!C || this.tabs[o110ll](C) == -1)return;
    var D = this[l1OOoO](), B = C == D, A = this.l0O0(C);
    this.tabs.remove(C);
    this.l00o0(C);
    var _ = this[oOo1l](C);
    if (_)this.Ol01.removeChild(_);
    if (A && B) {
        for (var $ = this.activeIndex; $ >= 0; $--) {
            var C = this[l11OlO]($);
            if (C && C.enabled && C.visible) {
                this.activeIndex = $;
                break
            }
        }
        this[l0loO0]();
        this[ol1Oo](this.activeIndex);
        this[ol1O0]("activechanged")
    } else {
        this.activeIndex = this.tabs[o110ll](D);
        this[l0loO0]()
    }
    return C
};
ooO1l = function (A, $) {
    A = this[l11OlO](A);
    if (!A)return;
    var _ = this.tabs[$];
    if (_ == A)return;
    this.tabs.remove(A);
    var $ = this.tabs[o110ll](_);
    if ($ == -1)this.tabs[llo10o](A); else this.tabs.insert($, A);
    this[l0loO0]()
};
l1oOO = function ($, _) {
    $ = this[l11OlO]($);
    if (!$)return;
    mini.copyTo($, _);
    this[l0loO0]()
};
o0O1 = function () {
    return this.Ol01
};
o11llo = function (D, A) {
    if (D.OlO01 && D.OlO01.parentNode) {
        var C = D.OlO01;
        C.onload = function () {
        };
        jQuery(C).unbind("load");
        C.src = "";
        if (mini.isIE) {
            try {
                C.contentWindow.document.write("");
                C.contentWindow.document.close()
            } catch (G) {
            }
        }
        if (D.OlO01._ondestroy)D.OlO01._ondestroy();
        try {
            C.parentNode.removeChild(C);
            C[oll100](true)
        } catch (G) {
        }
    }
    D.OlO01 = null;
    D.loadedUrl = null;
    if (A === true) {
        var E = this[oOo1l](D);
        if (E) {
            var B = mini[l00oo](E, true);
            for (var _ = 0, F = B.length; _ < F; _++) {
                var $ = B[_];
                if ($ && $.parentNode)$.parentNode.removeChild($)
            }
        }
    }
};
lOo0oO = function (B) {
    var _ = this.tabs;
    for (var $ = 0, C = _.length; $ < C; $++) {
        var A = _[$];
        if (A != B)if (A._loading && A.OlO01) {
            A._loading = false;
            this.l00o0(A, true)
        }
    }
    if (B && B == this[l1OOoO]() && B._loading); else {
        this._loading = false;
        this[oolo1o]()
    }
};
OoO111 = function (A) {
    if (!A || A != this[l1OOoO]())return;
    var B = this[oOo1l](A);
    if (!B)return;
    this[oOo0l1]();
    this.l00o0(A, true);
    this._loading = true;
    A._loading = true;
    this[oolo1o]();
    if (this.maskOnLoad)this[Ool0o]();
    var C = new Date(), $ = this;
    $.isLoading = true;
    var _ = mini.createIFrame(A.url, function (_, D) {
        try {
            A.OlO01.contentWindow.Owner = window;
            A.OlO01.contentWindow.CloseOwnerWindow = function (_) {
                A.removeAction = _;
                var B = true;
                if (A.ondestroy) {
                    if (typeof A.ondestroy == "string")A.ondestroy = window[A.ondestroy];
                    if (A.ondestroy) {
                        var C = $[ll0OO0](A);
                        C.action = _;
                        B = A.ondestroy[o1O0l0]($, C)
                    }
                }
                if (B === false)return false;
                setTimeout(function () {
                    $[oOoo00](A)
                }, 10)
            }
        } catch (E) {
        }
        if (A._loading != true)return;
        var B = (C - new Date()) + $.ol00;
        A._loading = false;
        A.loadedUrl = A.url;
        if (B < 0)B = 0;
        setTimeout(function () {
            $[oolo1o]();
            $[l0llOO]();
            $.isLoading = false
        }, B);
        if (D) {
            var E = {sender: $, tab: A, index: $.tabs[o110ll](A), name: A.name, iframe: A.OlO01};
            if (A.onload) {
                if (typeof A.onload == "string")A.onload = window[A.onload];
                if (A.onload)A.onload[o1O0l0]($, E)
            }
        }
        if ($[l1OOoO]() == A)$[ol1O0]("tabload", E)
    }, this.clearTimeStamp);
    setTimeout(function () {
        if (A.OlO01 == _)B.appendChild(_)
    }, 1);
    A.OlO01 = _
};
l0lO = function ($) {
    var _ = {sender: this, tab: $, index: this.tabs[o110ll]($), name: $.name, iframe: $.OlO01, autoActive: true};
    return _
};
OOO0 = function ($) {
    var _ = this[ll0OO0]($);
    this[ol1O0]("tabdestroy", _);
    return _.autoActive
};
lol01 = function (B, A, _, D) {
    if (!B)return;
    A = this[l11OlO](A);
    if (!A)A = this[l1OOoO]();
    if (!A)return;
    var $ = this[oOo1l](A);
    if ($)l1Oo($, "mini-tabs-hideOverflow");
    A.url = B;
    delete A.loadedUrl;
    if (_)A.onload = _;
    if (D)A.ondestroy = D;
    var C = this;
    clearTimeout(this._loadTabTimer);
    this._loadTabTimer = null;
    this._loadTabTimer = setTimeout(function () {
        C.o10o1O(A)
    }, 1)
};
o00l = function ($) {
    $ = this[l11OlO]($);
    if (!$)$ = this[l1OOoO]();
    if (!$)return;
    this[O1lOoo]($.url, $)
};
oO1oooRows = function () {
    var A = [], _ = [];
    for (var $ = 0, C = this.tabs.length; $ < C; $++) {
        var B = this.tabs[$];
        if ($ != 0 && B.newLine) {
            A.push(_);
            _ = []
        }
        _.push(B)
    }
    A.push(_);
    return A
};
o1100 = function () {
    if (this.Olol === false)return;
    if (this._buttons && this._buttons.parentNode)this._buttons.parentNode.removeChild(this._buttons);
    o11o(this.el, "mini-tabs-position-left");
    o11o(this.el, "mini-tabs-position-top");
    o11o(this.el, "mini-tabs-position-right");
    o11o(this.el, "mini-tabs-position-bottom");
    if (this[o1lOO] == "bottom") {
        l1Oo(this.el, "mini-tabs-position-bottom");
        this.OolOoo()
    } else if (this[o1lOO] == "right") {
        l1Oo(this.el, "mini-tabs-position-right");
        this.l100O()
    } else if (this[o1lOO] == "left") {
        l1Oo(this.el, "mini-tabs-position-left");
        this.O0llo1()
    } else {
        l1Oo(this.el, "mini-tabs-position-top");
        this.o1o1()
    }
    var $ = this.OlOl0l, _ = "mini-tabs-header-";
    o11o($, _ + "left");
    o11o($, _ + "top");
    o11o($, _ + "right");
    o11o($, _ + "bottom");
    l1Oo($, _ + this[o1lOO]);
    $ = this.Ol01, _ = "mini-tabs-body-";
    o11o($, _ + "left");
    o11o($, _ + "top");
    o11o($, _ + "right");
    o11o($, _ + "bottom");
    l1Oo($, _ + this[o1lOO]);
    if (this._buttons) {
        $ = mini.byClass("mini-tabs-buttons", this.el);
        if ($) {
            $.appendChild(this._buttons);
            mini.parse($)
        }
    }
    this[l0llOO]();
    this[ol1Oo](this.activeIndex, false)
};
o0llO = function () {
    var _ = this[oOo1l](this.activeIndex);
    if (_) {
        o11o(_, "mini-tabs-hideOverflow");
        var $ = mini[l00oo](_)[0];
        if ($ && $.tagName && $.tagName.toUpperCase() == "IFRAME")l1Oo(_, "mini-tabs-hideOverflow")
    }
};
ooo1Ol = function () {
    var e = this, G = e.OlOl0l, F = e.Ol01, g = e[o1lOO];
    if (!this[Ooo1oo]())return;
    G.style.display = this.showHeader ? "" : "none";
    this[O1O0O1]();
    var k = this[l0111O]();
    A = this[o11lOl](true);
    a = this[llO1l]();
    var D = A, R = a;
    if (this[oloool])F.style.display = ""; else F.style.display = "none";
    var $ = this.el.firstChild;
    if (this.plain)l1Oo($, "mini-tabs-plain"); else o11o($, "mini-tabs-plain");
    if (!k && this[oloool]) {
        var S = jQuery(G).outerHeight(), X = jQuery(G).outerWidth();
        if (g == "top" || g == "bottom")S = jQuery(G.parentNode).outerHeight();
        if (g == "left" || g == "right")a = a - X; else A = A - S;
        if (jQuery.boxModel) {
            var B = O1l0lo(F), T = olO0(F);
            A = A - B.top - B.bottom - T.top - T.bottom;
            a = a - B.left - B.right - T.left - T.right
        }
        margin = l011o(F);
        A = A - margin.top - margin.bottom;
        a = a - margin.left - margin.right;
        if (A < 0)A = 0;
        if (a < 0)a = 0;
        F.style.width = a + "px";
        F.style.height = A + "px";
        if (g == "left" || g == "right") {
            var I = G.getElementsByTagName("tr")[0], C = I.childNodes, Y = C[0].getElementsByTagName("tr"), d = last = all = 0;
            for (var N = 0, f = Y.length; N < f; N++) {
                var I = Y[N], Q = jQuery(I).outerHeight();
                all += Q;
                if (N == 0)d = Q;
                if (N == f - 1)last = Q
            }
            switch (this[O11OOl]) {
                case"center":
                    var i = parseInt((D - (all - d - last)) / 2);
                    for (N = 0, f = C.length; N < f; N++) {
                        C[N].firstChild.style.height = D + "px";
                        var b = C[N].firstChild, Y = b.getElementsByTagName("tr"), O = Y[0], U = Y[Y.length - 1];
                        O.style.height = i + "px";
                        U.style.height = i + "px"
                    }
                    break;
                case"right":
                    for (N = 0, f = C.length; N < f; N++) {
                        var b = C[N].firstChild, Y = b.getElementsByTagName("tr"), I = Y[0], V = D - (all - d);
                        if (V >= 0)I.style.height = V + "px"
                    }
                    break;
                case"fit":
                    for (N = 0, f = C.length; N < f; N++)C[N].firstChild.style.height = D + "px";
                    break;
                default:
                    for (N = 0, f = C.length; N < f; N++) {
                        b = C[N].firstChild, Y = b.getElementsByTagName("tr"), I = Y[Y.length - 1], V = D - (all - last);
                        if (V >= 0)I.style.height = V + "px"
                    }
                    break
            }
        }
    } else {
        F.style.width = "auto";
        F.style.height = "auto"
    }
    var Z = this[oOo1l](this.activeIndex);
    if (Z)if (!k && this[oloool]) {
        var A = l010(F, true);
        if (jQuery.boxModel) {
            B = O1l0lo(Z), T = olO0(Z);
            A = A - B.top - B.bottom - T.top - T.bottom
        }
        Z.style.height = A + "px"
    } else Z.style.height = "auto";
    switch (g) {
        case"bottom":
            var P = G.childNodes;
            for (N = 0, f = P.length; N < f; N++) {
                b = P[N];
                o11o(b, "mini-tabs-header2");
                if (f > 1 && N != 0)l1Oo(b, "mini-tabs-header2")
            }
            break;
        case"left":
            C = G.firstChild.rows[0].cells;
            for (N = 0, f = C.length; N < f; N++) {
                var K = C[N];
                o11o(K, "mini-tabs-header2");
                if (f > 1 && N == 0)l1Oo(K, "mini-tabs-header2")
            }
            break;
        case"right":
            C = G.firstChild.rows[0].cells;
            for (N = 0, f = C.length; N < f; N++) {
                K = C[N];
                o11o(K, "mini-tabs-header2");
                if (f > 1 && N != 0)l1Oo(K, "mini-tabs-header2")
            }
            break;
        default:
            P = G.childNodes;
            for (N = 0, f = P.length; N < f; N++) {
                b = P[N];
                o11o(b, "mini-tabs-header2");
                if (f > 1 && N == 0)l1Oo(b, "mini-tabs-header2")
            }
            break
    }
    o11o(this.el, "mini-tabs-scroll");
    var K = mini.byClass("mini-tabs-lastSpace", this.el), J = mini.byClass("mini-tabs-buttons", this.el), W = G.parentNode;
    W.style["paddingRight"] = "0px";
    if (this._navEl)this._navEl.style.display = "none";
    if (this._leftNavEl)this._navEl.style.display = "none";
    if (J)J.style.display = "none";
    lOool0(W, R);
    if ((g == "top" || g == "bottom") && (this[O11OOl] == "left" || this[O11OOl] == "right")) {
        G.style.width = "auto";
        J.style.display = "block";
        var _ = R, E = G.firstChild.offsetWidth - K.offsetWidth, h = J.firstChild ? J.offsetWidth : 0;
        if (E + h > _) {
            this._navEl.style.display = "block";
            var M = this._navEl.offsetWidth, c = 0;
            if (this.showNavMenu) {
                this._headerMenuEl.style.display = "inline-block";
                c = this._headerMenuEl.offsetWidth;
                this._headerMenuEl.style.right = h + "px";
                this.oOl0o0Menu()
            }
            var H = 0;
            if (this.arrowPosition == "side") {
                this._leftNavEl.style.display = "block";
                H = this._leftNavEl.offsetWidth;
                G.style.left = H + "px"
            }
            this._navEl.style.right = h + c + "px";
            var a = _ - h - M - H - c;
            lOool0(G, a)
        }
    }
    this[o100lO](this.activeIndex);
    this.lOol();
    mini.layout(F);
    var L = this, j = this[l1OOoO]();
    if (j && j[oOo01o] && Z) {
        a = Z.style.width;
        Z.style.width = "0px";
        setTimeout(function () {
            Z.style.width = a
        }, 1)
    }
    this[ol1O0]("layout")
};
l101O = function (B) {
    for (var $ = 0, A = this.tabs.length; $ < A; $++) {
        var _ = this.tabs[$];
        if (_._id == B)return _
    }
};
oooll = function () {
    this._headerMenu = new lOoO1O();
    this._headerMenu[Ol0010]("_id");
    this._headerMenu[ooO1ll]("title");
    this._headerMenu.setPopupEl(this._headerMenuEl);
    this._headerMenu.setShowAction("leftclick");
    this._headerMenu.setHideAction("outerclick");
    this._headerMenu.setXAlign("left");
    this._headerMenu.setYAlign("below");
    this._headerMenu[Ol1oO1]("itemclick", this._doMenuSelectTab, this);
    this._headerMenu[O1ll1]();
    this._headerMenu.owner = this._headerMenuEl
};
o1lo = function () {
    var A = this[o00l01](), B = [];
    for (var _ = 0, C = A.length; _ < C; _++) {
        var $ = A[_];
        B.push({id: $._id, text: $[this.titleField]})
    }
    this._headerMenu[oo1l0o](B)
};
lllO1o = function (A) {
    var $ = A.item, _ = this[OO0ooO]($.id);
    this[lO1l0o](_)
};
Ololo = function ($) {
    this[O11OOl] = $;
    this[l0loO0]()
};
o0O00 = function ($) {
    this[o1lOO] = $;
    this[l0loO0]()
};
O1O0ol = function ($) {
    this.allowClickWrap = $
};
OO0lo = function () {
    return this.allowClickWrap
};
oO1ooo = function ($) {
    if (typeof $ == "object")return $;
    if (typeof $ == "number")return this.tabs[$]; else for (var _ = 0, B = this.tabs.length; _ < B; _++) {
        var A = this.tabs[_];
        if (A.name == $)return A
    }
};
o0oo1O = function () {
    return this.OlOl0l
};
o11OOo = function () {
    return this.Ol01
};
lolO0 = function ($) {
    var C = this[l11OlO]($);
    if (!C)return null;
    var E = this.ll1oOo(C), B = this.el.getElementsByTagName("*");
    for (var _ = 0, D = B.length; _ < D; _++) {
        var A = B[_];
        if (A.id == E)return A
    }
    return null
};
Ool00O = function ($) {
    var C = this[l11OlO]($);
    if (!C)return null;
    var E = this.oo1oO(C), B = this.Ol01.childNodes;
    for (var _ = 0, D = B.length; _ < D; _++) {
        var A = B[_];
        if (A.id == E)return A
    }
    return null
};
oolO1 = function ($) {
    var _ = this[l11OlO]($);
    if (!_)return null;
    return _.OlO01
};
OlO00l = function ($) {
    return this.uid + "$" + $._id
};
llll0o = function ($) {
    return this.uid + "$body$" + $._id
};
ol1O10 = function () {
    if (this[o1lOO] == "top" || this[o1lOO] == "bottom") {
        o11o(this.lolO, "mini-disabled");
        o11o(this.l1OOoo, "mini-disabled");
        if (this.OlOl0l.scrollLeft == 0)l1Oo(this.lolO, "mini-disabled");
        var _ = this[o0OlOl](this.tabs.length - 1);
        if (_) {
            var $ = Ol0oO(_), A = Ol0oO(this.OlOl0l);
            if ($.right <= A.right)l1Oo(this.l1OOoo, "mini-disabled")
        }
    }
};
l0lOll = function ($, H) {
    var J = this[l11OlO]($), C = this[l11OlO](this.activeIndex), M = J != C, I = this[oOo1l](this.activeIndex);
    if (I)I.style.display = "none";
    if (J)this.activeIndex = this.tabs[o110ll](J); else this.activeIndex = -1;
    I = this[oOo1l](this.activeIndex);
    if (I)I.style.display = "";
    I = this[o0OlOl](C);
    if (I)o11o(I, this.l11lo);
    I = this[o0OlOl](J);
    if (I)l1Oo(I, this.l11lo);
    if (I && M) {
        if (this[o1lOO] == "bottom") {
            var A = ol000(I, "mini-tabs-header");
            if (A)jQuery(this.OlOl0l).prepend(A)
        } else if (this[o1lOO] == "left") {
            var F = ol000(I, "mini-tabs-header").parentNode;
            if (F)F.parentNode.appendChild(F)
        } else if (this[o1lOO] == "right") {
            F = ol000(I, "mini-tabs-header").parentNode;
            if (F)jQuery(F.parentNode).prepend(F)
        } else {
            A = ol000(I, "mini-tabs-header");
            if (A && this.allowClickWrap)this.OlOl0l.appendChild(A)
        }
        var B = this.OlOl0l.scrollLeft, C = this[l11OlO](this.activeIndex), N = C ? !C._layouted : false, K = this[l0111O]();
        if (K || N) {
            if (C)C._layouted = true;
            this[l0llOO]()
        }
        var _ = this[oo0110]();
        if (_.length > 1); else {
            this[o100lO](this.activeIndex);
            this.lOol()
        }
        for (var G = 0, E = this.tabs.length; G < E; G++) {
            var L = this[o0OlOl](this.tabs[G]);
            if (L)o11o(L, this.o0olo1)
        }
    }
    var D = this;
    if (M) {
        var O = {tab: J, index: this.tabs[o110ll](J), name: J ? J.name : ""};
        setTimeout(function () {
            D[ol1O0]("ActiveChanged", O)
        }, 1)
    }
    this[oOo0l1](J);
    if (H !== false) {
        if (J && J.url && !J.loadedUrl) {
            D = this;
            D[O1lOoo](J.url, J)
        }
    }
    if (D[Ooo1oo]()) {
        try {
            mini.layoutIFrames(D.el)
        } catch (O) {
        }
    }
};
oOoolo = function (B) {
    var _ = this.OlOl0l.scrollLeft;
    if (this[o1lOO] == "top" || this[o1lOO] == "bottom") {
        this.OlOl0l.scrollLeft = _;
        var C = this[o0OlOl](B);
        if (C) {
            var $ = this, A = Ol0oO(C), D = Ol0oO($.OlOl0l);
            if (A.x < D.x)$.OlOl0l.scrollLeft -= (D.x - A.x); else if (A.right > D.right)$.OlOl0l.scrollLeft += (A.right - D.right)
        }
    }
};
lll0 = function () {
    return this.activeIndex
};
O1oo11 = function ($) {
    this[ol1Oo]($)
};
l11oO0 = function () {
    return this[l11OlO](this.activeIndex)
};
lll0 = function () {
    return this.activeIndex
};
o1ll1 = function (_) {
    _ = this[l11OlO](_);
    if (!_)return;
    var $ = this.tabs[o110ll](_);
    if (this.activeIndex == $)return;
    var A = {tab: _, index: $, name: _.name, cancel: false};
    this[ol1O0]("BeforeActiveChanged", A);
    if (A.cancel == false)this[lO1l0o](_)
};
oO00O = function ($) {
    if (this.showHeader != $) {
        this.showHeader = $;
        this[l0llOO]()
    }
};
lOOo11 = function () {
    return this.showHeader
};
lO0O1O = function ($) {
    if (this[oloool] != $) {
        this[oloool] = $;
        this[l0llOO]()
    }
};
oo0ol = function () {
    return this[oloool]
};
o01lo0 = function ($) {
    this.bodyStyle = $;
    lO01l(this.Ol01, $);
    this[l0llOO]()
};
looOO = function () {
    return this.bodyStyle
};
lO00l1 = function ($) {
    this.maskOnLoad = $
};
O11O1 = function () {
    return this.maskOnLoad
};
O1OO = function ($) {
    this.plain = $;
    this[l0llOO]()
};
OOOl = function () {
    return this.plain
};
loOoo = function ($) {
    this.arrowPosition = $
};
oO0l0 = function () {
    return this.arrowPosition
};
l0oll = function ($) {
    this.showNavMenu = $
};
oOOo = function () {
    return this.showNavMenu
};
O1lO0 = function ($) {
    this.clearTimeStamp = $
};
Ol000o = function () {
    return this.clearTimeStamp
};
lllol = function ($) {
    return this.oo1OoO($)
};
o0ll0o = function (B) {
    var A = ol000(B.target, "mini-tab");
    if (!A)return null;
    var _ = A.id.split("$");
    if (_[0] != this.uid)return null;
    var $ = parseInt(jQuery(A).attr("index"));
    return this[l11OlO]($)
};
o1101 = function (_) {
    var $ = this.oo1OoO(_);
    if (!$)return;
    var _ = {tab: $};
    this[ol1O0]("tabdblclick", _)
};
l11O = function (B) {
    var _ = this.oo1OoO(B);
    if (!_)return;
    var $ = !!ol000(B.target, "mini-tab-close");
    if (!$ && _ == this[l1OOoO]() && !_[O1OO0O])return;
    if (_.enabled) {
        var A = this;
        setTimeout(function () {
            if ($)A.loo1Oo(_, B); else {
                var C = _.loadedUrl;
                A.ooooo(_);
                if (_[O1OO0O] && _.url == C)A[oO011O](_)
            }
        }, 10)
    }
};
OO0O = function (A) {
    var $ = this.oo1OoO(A);
    if ($ && $.enabled) {
        var _ = this[o0OlOl]($);
        l1Oo(_, this.o0olo1);
        this.hoverTab = $
    }
};
l1oo0 = function (_) {
    if (this.hoverTab) {
        var $ = this[o0OlOl](this.hoverTab);
        o11o($, this.o0olo1)
    }
    this.hoverTab = null
};
ool0 = function (B) {
    clearInterval(this.o10l0);
    if (this[o1lOO] == "top" || this[o1lOO] == "bottom") {
        var _ = this, A = 0, $ = 10;
        if (B.target == this.lolO)this.o10l0 = setInterval(function () {
            _.OlOl0l.scrollLeft -= $;
            A++;
            if (A > 5)$ = 18;
            if (A > 10)$ = 25;
            _.lOol()
        }, 25); else if (B.target == this.l1OOoo)this.o10l0 = setInterval(function () {
            _.OlOl0l.scrollLeft += $;
            A++;
            if (A > 5)$ = 18;
            if (A > 10)$ = 25;
            _.lOol()
        }, 25); else if (B.target == this._headerMenuEl)this[l0111o]();
        Ol1O(document, "mouseup", this.o0l1l, this)
    }
};
o10l1 = function ($) {
    clearInterval(this.o10l0);
    this.o10l0 = null;
    lol0Oo(document, "mouseup", this.o0l1l, this)
};
OO01 = function () {
    var L = this[o1lOO] == "top", O = "";
    O += "<div class=\"mini-tabs-scrollCt\">";
    if (this.arrowPosition == "side") {
        O += "<div class=\"mini-tabs-leftnav\"><a class=\"mini-tabs-leftButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a></div>";
        O += "<div class=\"mini-tabs-nav\"><a class=\"mini-tabs-rightButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a></div>"
    } else O += "<div class=\"mini-tabs-nav\"><a class=\"mini-tabs-leftButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a><a class=\"mini-tabs-rightButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a></div>";
    if (this.showNavMenu)O += "<a class=\"mini-tabs-tabmenu\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a>";
    O += "<div class=\"mini-tabs-buttons\"></div>";
    O += "<div class=\"mini-tabs-headers\">";
    var B = this[oo0110]();
    for (var M = 0, A = B.length; M < A; M++) {
        var I = B[M], E = "";
        O += "<table class=\"mini-tabs-header\" cellspacing=\"0\" cellpadding=\"0\"><tr><td class=\"mini-tabs-space mini-tabs-firstSpace\"><div></div></td>";
        for (var J = 0, F = I.length; J < F; J++) {
            var N = I[J], G = this.ll1oOo(N);
            if (!N.visible)continue;
            var $ = this.tabs[o110ll](N), E = N.headerCls || "";
            if (N.enabled == false)E += " mini-disabled";
            O += "<td title=\"" + N.tooltip + "\" id=\"" + G + "\" index=\"" + $ + "\"  class=\"mini-tab " + E + "\" style=\"" + N.headerStyle + "\">";
            if (N.iconCls || N[O110l])O += "<span class=\"mini-tab-icon " + N.iconCls + "\" style=\"" + N[O110l] + "\"></span>";
            O += "<span class=\"mini-tab-text\">" + N.title + "</span>";
            if (N[o0loO]) {
                var _ = "";
                if (N.enabled)_ = "onmouseover=\"l1Oo(this,'mini-tab-close-hover')\" onmouseout=\"o11o(this,'mini-tab-close-hover')\"";
                O += "<span class=\"mini-tab-close\" " + _ + " ></span>"
            }
            O += "</td>";
            if (J != F - 1)O += "<td class=\"mini-tabs-space2\"><div></div></td>"
        }
        O += "<td class=\"mini-tabs-space mini-tabs-lastSpace\" ><div></div></td></tr></table>"
    }
    O += "</div>";
    O += "</div>";
    this.oolo0();
    mini.prepend(this.O0oO, O);
    var H = this.O0oO;
    this.OlOl0l = H.firstChild.lastChild;
    if (this.arrowPosition == "side") {
        this._leftNavEl = H.firstChild.firstChild;
        this._navEl = this.OlOl0l.parentNode.children[1];
        this.lolO = this._leftNavEl.firstChild;
        this.l1OOoo = this._navEl.firstChild;
        if (this.showNavMenu)this._headerMenuEl = this.OlOl0l.parentNode.children[2]
    } else {
        this._navEl = this.OlOl0l.parentNode.firstChild;
        this.lolO = this._navEl.firstChild;
        this.l1OOoo = this._navEl.childNodes[1];
        if (this.showNavMenu)this._headerMenuEl = this.OlOl0l.parentNode.children[1]
    }
    switch (this[O11OOl]) {
        case"center":
            var K = this.OlOl0l.childNodes;
            for (J = 0, F = K.length; J < F; J++) {
                var C = K[J], D = C.getElementsByTagName("td");
                D[0].style.width = "50%";
                D[D.length - 1].style.width = "50%"
            }
            break;
        case"right":
            K = this.OlOl0l.childNodes;
            for (J = 0, F = K.length; J < F; J++) {
                C = K[J], D = C.getElementsByTagName("td");
                D[0].style.width = "100%"
            }
            break;
        case"fit":
            break;
        default:
            K = this.OlOl0l.childNodes;
            for (J = 0, F = K.length; J < F; J++) {
                C = K[J], D = C.getElementsByTagName("td");
                D[D.length - 1].style.width = "100%"
            }
            break
    }
};
O01l = function () {
    this.o1o1();
    var $ = this.O0oO;
    mini.append($, $.firstChild);
    this.OlOl0l = $.lastChild.lastChild
};
o1lo01 = function () {
    var J = "<table cellspacing=\"0\" cellpadding=\"0\"><tr>", B = this[oo0110]();
    for (var H = 0, A = B.length; H < A; H++) {
        var F = B[H], C = "";
        if (A > 1 && H != A - 1)C = "mini-tabs-header2";
        J += "<td class=\"" + C + "\"><table class=\"mini-tabs-header\" cellspacing=\"0\" cellpadding=\"0\">";
        J += "<tr ><td class=\"mini-tabs-space mini-tabs-firstSpace\" ><div></div></td></tr>";
        for (var G = 0, D = F.length; G < D; G++) {
            var I = F[G], E = this.ll1oOo(I);
            if (!I.visible)continue;
            var $ = this.tabs[o110ll](I), C = I.headerCls || "";
            if (I.enabled == false)C += " mini-disabled";
            J += "<tr><td id=\"" + E + "\" index=\"" + $ + "\"  class=\"mini-tab " + C + "\" style=\"" + I.headerStyle + "\">";
            if (I.iconCls || I[O110l])J += "<span class=\"mini-tab-icon " + I.iconCls + "\" style=\"" + I[O110l] + "\"></span>";
            J += "<span class=\"mini-tab-text\">" + I.title + "</span>";
            if (I[o0loO]) {
                var _ = "";
                if (I.enabled)_ = "onmouseover=\"l1Oo(this,'mini-tab-close-hover')\" onmouseout=\"o11o(this,'mini-tab-close-hover')\"";
                J += "<span class=\"mini-tab-close\" " + _ + "></span>"
            }
            J += "</td></tr>";
            if (G != D - 1)J += "<tr><td class=\"mini-tabs-space2\"><div></div></td></tr>"
        }
        J += "<tr ><td class=\"mini-tabs-space mini-tabs-lastSpace\" ><div></div></td></tr>";
        J += "</table></td>"
    }
    J += "</tr ></table>";
    this.oolo0();
    l1Oo(this.llolll, "mini-tabs-header");
    mini.append(this.llolll, J);
    this.OlOl0l = this.llolll
};
olO1lo = function () {
    this.O0llo1();
    o11o(this.llolll, "mini-tabs-header");
    o11o(this.l0ol, "mini-tabs-header");
    mini.append(this.l0ol, this.llolll.firstChild);
    this.OlOl0l = this.l0ol
};
OoOoO = function (_, $) {
    var C = {tab: _, index: this.tabs[o110ll](_), name: _.name.toLowerCase(), htmlEvent: $, cancel: false};
    this[ol1O0]("beforecloseclick", C);
    if (C.cancel == true)return;
    try {
        if (_.OlO01 && _.OlO01.contentWindow) {
            var A = true;
            if (_.OlO01.contentWindow.CloseWindow)A = _.OlO01.contentWindow.CloseWindow("close"); else if (_.OlO01.contentWindow.CloseOwnerWindow)A = _.OlO01.contentWindow.CloseOwnerWindow("close");
            if (A === false)C.cancel = true
        }
    } catch (B) {
    }
    if (C.cancel == true)return;
    _.removeAction = "close";
    this[oOoo00](_);
    this[ol1O0]("closeclick", C)
};
O1l10 = function (_, $) {
    this[Ol1oO1]("beforecloseclick", _, $)
};
lo1lol = function (_, $) {
    this[Ol1oO1]("closeclick", _, $)
};
oO1lo = function (_, $) {
    this[Ol1oO1]("activechanged", _, $)
};
O1O1l = function (el) {
    var attrs = lloOl1[ollolO][ol1oOl][o1O0l0](this, el);
    mini[Ol100O](el, attrs, ["tabAlign", "tabPosition", "bodyStyle", "onactivechanged", "onbeforeactivechanged", "url", "ontabload", "ontabdestroy", "onbeforecloseclick", "oncloseclick", "ontabdblclick", "titleField", "urlField", "nameField", "loadingMsg", "buttons", "arrowPosition"]);
    mini[Olo01O](el, attrs, ["allowAnim", "showBody", "showHeader", "maskOnLoad", "plain", "allowClickWrap", "showNavMenu", "clearTimeStamp"]);
    mini[oOOl00](el, attrs, ["activeIndex"]);
    var tabs = [], nodes = mini[l00oo](el);
    for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i], o = {};
        tabs.push(o);
        o.style = node.style.cssText;
        mini[Ol100O](node, o, ["name", "title", "url", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "onload", "ondestroy", "data-options", "tooltip"]);
        mini[Olo01O](node, o, ["newLine", "visible", "enabled", "showCloseButton", "refreshOnClick"]);
        o.bodyParent = node;
        var options = o["data-options"];
        if (options) {
            options = eval("(" + options + ")");
            if (options)mini.copyTo(o, options)
        }
    }
    attrs.tabs = tabs;
    return attrs
};
l01OO = function (C) {
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var $ = this.items[_];
        if ($.name == C)return $;
        if ($.menu) {
            var A = $.menu[O1looO](C);
            if (A)return A
        }
    }
    return null
};
O100l = function ($) {
    if (typeof $ == "string")return this;
    var _ = $.url;
    delete $.url;
    if ($.imgPath)this[o01101]($.imgPath);
    delete $.imgPath;
    this.ownerItem = $.ownerItem;
    delete $.ownerItem;
    lOoO1O[ollolO][OO1O1l][o1O0l0](this, $);
    if (_)this[Oo1100](_);
    return this
};
ol1lo = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-menu";
    this.el.innerHTML = "<div class=\"mini-menu-border\"><a class=\"mini-menu-topArrow\" href=\"#\" onclick=\"return false\"></a><div class=\"mini-menu-inner\"></div><a class=\"mini-menu-bottomArrow\" href=\"#\" onclick=\"return false\"></a></div>";
    this._borderEl = this.el.firstChild;
    this._topArrowEl = this._borderEl.childNodes[0];
    this._bottomArrowEl = this._borderEl.childNodes[2];
    this._innerEl = this._borderEl.childNodes[1];
    this._innerEl.innerHTML = "<div class=\"mini-menu-float\"></div><div class=\"mini-menu-toolbar\"></div><div style=\"clear:both;max-height:1px;\"></div>";
    this._contentEl = this._innerEl.firstChild;
    this.O1Ool0 = this._innerEl.childNodes[1];
    if (this[O0OOlo]() == false)l1Oo(this.el, "mini-menu-horizontal")
};
O010 = function ($) {
    if (this._topArrowEl)this._topArrowEl.onmousedown = this._bottomArrowEl.onmousedown = null;
    this._popupEl = this.popupEl = this._borderEl = this._innerEl = this._contentEl = this.O1Ool0 = null;
    this._topArrowEl = this._bottomArrowEl = null;
    this.owner = null;
    this.window = null;
    lol0Oo(document, "mousedown", this.lolo, this);
    lol0Oo(window, "resize", this.loO11o, this);
    lOoO1O[ollolO][l0lOl][o1O0l0](this, $)
};
oO0o = function () {
    O0o0o0(function () {
        Ol1O(document, "mousedown", this.lolo, this);
        o1l0lo(this.el, "mouseover", this.ol0010, this);
        Ol1O(window, "resize", this.loO11o, this);
        if (this._disableContextMenu)o1l0lo(this.el, "contextmenu", function ($) {
            $.preventDefault()
        }, this);
        o1l0lo(this._topArrowEl, "mousedown", this.__OnTopMouseDown, this);
        o1l0lo(this._bottomArrowEl, "mousedown", this.__OnBottomMouseDown, this)
    }, this)
};
o10Ooo = function (B) {
    if (Ol0O(this.el, B.target))return true;
    for (var _ = 0, A = this.items.length; _ < A; _++) {
        var $ = this.items[_];
        if ($[l1Oo0O](B))return true
    }
    return false
};
ol010O = function ($) {
    this.vertical = $;
    if (!$)l1Oo(this.el, "mini-menu-horizontal"); else o11o(this.el, "mini-menu-horizontal")
};
Ol1o = function () {
    return this.vertical
};
l1OOo = function () {
    return this.vertical
};
Oll1l = function () {
    this[lOo0l](true)
};
llO11 = function () {
    this[o01oO0]();
    lO1lo0_prototype_hide[o1O0l0](this)
};
ol1l0 = function () {
    for (var $ = 0, A = this.items.length; $ < A; $++) {
        var _ = this.items[$];
        _[OOo11]()
    }
};
llo00O = function ($) {
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var A = this.items[_];
        if (A == $)A[o11lOO](); else A[OOo11]()
    }
};
oooo0 = function () {
    for (var $ = 0, A = this.items.length; $ < A; $++) {
        var _ = this.items[$];
        if (_ && _.menu && _.menu.isPopup)return true
    }
    return false
};
o01lo = function ($) {
    if (!mini.isArray($))$ = [];
    this[oo1l0o]($)
};
oOll = function () {
    return this[lo00l1]()
};
O0l0 = function (_) {
    if (!mini.isArray(_))_ = [];
    this[lo0OlO]();
    var A = new Date();
    for (var $ = 0, B = _.length; $ < B; $++)this[OO0l](_[$])
};
oooOs = function () {
    return this.items
};
lolOlo = function ($) {
    if ($ == "-" || $ == "|" || $.type == "separator") {
        mini.append(this._contentEl, "<span id=\"" + $.id + "\" name=\"" + ($.name || "") + "\" class=\"mini-separator\"></span>");
        return
    }
    if (!mini.isControl($) && !mini.getClass($.type))$.type = this._itemType;
    $.ownerMenu = this;
    $ = mini.getAndCreate($);
    this.items.push($);
    this._contentEl.appendChild($.el);
    $.ownerMenu = this;
    this[ol1O0]("itemschanged")
};
O0lo0 = function ($) {
    $ = mini.get($);
    if (!$)return;
    this.items.remove($);
    this._contentEl.removeChild($.el);
    this[ol1O0]("itemschanged")
};
Ooo1O = function (_) {
    var $ = this.items[_];
    this[O0o11]($)
};
lO0Ool = function () {
    var _ = this.items.clone();
    for (var $ = _.length - 1; $ >= 0; $--)this[O0o11](_[$]);
    this._contentEl.innerHTML = ""
};
ooll1l = function (C) {
    if (!C)return [];
    var A = [];
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var $ = this.items[_];
        if ($[ll00] == C)A.push($)
    }
    return A
};
oooO = function ($) {
    if (typeof $ == "number")return this.items[$];
    if (typeof $ == "string") {
        for (var _ = 0, B = this.items.length; _ < B; _++) {
            var A = this.items[_];
            if (A.id == $)return A
        }
        return null
    }
    if ($ && this.items[o110ll]($) != -1)return $;
    return null
};
OOo01 = function ($) {
    this.allowSelectItem = $
};
lO101O = function () {
    return this.allowSelectItem
};
l01o = function ($) {
    $ = this[o11l]($);
    this[oOoO0]($)
};
ol01 = function ($) {
    return this.OOO01O
};
Oo1oo = function ($) {
    this.showNavArrow = $
};
ooolO = function () {
    return this.showNavArrow
};
oOo11o = function ($) {
    this[l1ol1O] = $
};
l01o0 = function () {
    return this[l1ol1O]
};
OOll1 = function ($) {
    this[l11ol0] = $
};
O0OoO = function () {
    return this[l11ol0]
};
oOl1O1 = function ($) {
    this[O00o0] = $
};
O00O = function () {
    return this[O00o0]
};
l1O0O = function ($) {
    this[o0oO] = $
};
l11OO = function () {
    return this[o0oO]
};
O0oOo = function ($) {
    this.overflow = $;
    if ($)l1Oo(this.el, "mini-menu-overflow"); else o11o(this.el, "mini-menu-overflow")
};
o100o = function () {
    return this.overflow
};
ooll = function () {
    if (!this[Ooo1oo]())return;
    var C = this._innerEl, $ = this._topArrowEl, D = this._bottomArrowEl;
    if (!this[l0111O]()) {
        var A = l010(this.el, true);
        l10o(this._borderEl, A);
        $.style.display = D.style.display = "none";
        this._contentEl.style.height = "auto";
        if (this.showNavArrow && this._borderEl.scrollHeight > this._borderEl.clientHeight) {
            $.style.display = D.style.display = "block";
            A = l010(this._borderEl, true);
            var F = l010($), E = l010(D), B = A - F - E;
            if (B < 0)B = 0;
            l10o(this._contentEl, B);
            var _ = lo0o(this._borderEl, true);
            lOool0($, _);
            lOool0(D, _)
        } else this._contentEl.style.height = "auto"
    } else {
        this._borderEl.style.height = "auto";
        this._contentEl.style.height = "auto"
    }
    if (this.overflow) {
        $.style.display = D.style.display = "none";
        C.style.marginLeft = C.style.marginRight = "0px";
        if (this[llO0l0]() > this._innerEl.offsetWidth) {
            $.style.display = D.style.display = "block";
            C.style.marginLeft = C.style.marginRight = "15px"
        } else C.scrollLeft = 0
    }
};
O01lO1 = function () {
    if (this.height == "auto") {
        this.el.style.height = "auto";
        this._borderEl.style.height = "auto";
        this._contentEl.style.height = "auto";
        this._topArrowEl.style.display = this._bottomArrowEl.style.display = "none";
        var B = mini.getViewportBox(), A = Ol0oO(this.el);
        this.maxHeight = B.height - 25;
        if (this.ownerItem) {
            var A = Ol0oO(this.ownerItem.el), C = A.top, _ = B.height - A.bottom, $ = C > _ ? C : _;
            $ -= 10;
            this.maxHeight = $
        }
    }
    this.el.style.display = "";
    A = Ol0oO(this.el);
    if (A.width > this.maxWidth) {
        lOool0(this.el, this.maxWidth);
        A = Ol0oO(this.el)
    }
    if (A.height > this.maxHeight) {
        l10o(this.el, this.maxHeight);
        A = Ol0oO(this.el)
    }
    if (A.width < this.minWidth) {
        lOool0(this.el, this.minWidth);
        A = Ol0oO(this.el)
    }
    if (A.height < this.minHeight) {
        l10o(this.el, this.minHeight);
        A = Ol0oO(this.el)
    }
};
Ol0OO = function () {
    var B = mini._getResult(this.url, null, null, null, null, this.dataField);
    if (this.dataField && !mini.isArray(B))B = mini._getMap(this.dataField, B);
    if (!B)B = [];
    if (this[l11ol0] == false)B = mini.arrayToTree(B, this.itemsField, this.idField, this[o0oO]);
    var _ = mini[lol11](B, this.itemsField, this.idField, this[o0oO]);
    for (var A = 0, D = _.length; A < D; A++) {
        var $ = _[A];
        $.text = mini._getMap(this.textField, $);
        if (mini.isNull($.text))$.text = ""
    }
    var C = new Date();
    this[oo1l0o](B);
    this[ol1O0]("load")
};
O01oOList = function (_, E, B) {
    if (!_)return;
    E = E || this[O00o0];
    B = B || this[o0oO];
    for (var A = 0, D = _.length; A < D; A++) {
        var $ = _[A];
        $.text = mini._getMap(this.textField, $);
        if (mini.isNull($.text))$.text = ""
    }
    var C = mini.arrayToTree(_, this.itemsField, E, B);
    this[looOlo](C)
};
O01oO = function ($) {
    if (typeof $ == "string")this[Oo1100]($); else this[oo1l0o]($)
};
o100 = function ($) {
    this.url = $;
    this[OOl0Ol]()
};
OoOOo = function () {
    return this.url
};
o1l1O = function ($) {
    this.hideOnClick = $
};
llllOO = function () {
    return this.hideOnClick
};
olo0 = function ($) {
    this.imgPath = $
};
oloo = function () {
    return this.imgPath
};
o1ol0O = function ($, _) {
    var A = {item: $, isLeaf: !$.menu, htmlEvent: _};
    if (this.hideOnClick)if (this.isPopup)this[O1ll1](); else if (A.isLeaf)this[o01oO0]();
    if (this.allowSelectItem && this.OOO01O != $)this[OlO0o1]($);
    this[ol1O0]("itemclick", A);
    if (this.ownerItem);
};
o1O0O = function ($) {
    if (this.OOO01O)this.OOO01O[ol0OoO](this._oolol0);
    this.OOO01O = $;
    if (this.OOO01O)this.OOO01O[oll1o0](this._oolol0);
    var _ = {item: this.OOO01O, isLeaf: this.OOO01O ? !this.OOO01O.menu : false};
    this[ol1O0]("itemselect", _)
};
l1l1 = function (_, $) {
    this[Ol1oO1]("itemclick", _, $)
};
oOol0 = function (_, $) {
    this[Ol1oO1]("itemselect", _, $)
};
O0loll = function ($) {
    this[o01oOo](-20)
};
oloOlo = function ($) {
    this[o01oOo](20)
};
OOOO = function () {
    var A = this, _ = 0, C = jQuery(".mini-menuitem", A.el).first()[0], $ = jQuery(".mini-menuitem", A.el).last()[0];
    if (C && $) {
        var D = Ol0oO(C), B = Ol0oO($);
        _ = B.right - D.left
    }
    return _
};
l0oO1 = function () {
    return parseInt(this[llO0l0]() - this._innerEl.offsetWidth + 6)
};
Olo1 = function ($) {
    clearInterval(this.o10l0);
    var B = function () {
        clearInterval(A.o10l0);
        lol0Oo(document, "mouseup", B)
    };
    Ol1O(document, "mouseup", B);
    var _ = this[ollO01](), A = this;
    this.o10l0 = setInterval(function () {
        if (A[O0OOlo]() == false) {
            var B = A._innerEl.scrollLeft;
            B += $;
            if (B > _)B = _;
            A._innerEl.scrollLeft = B
        } else A._contentEl.scrollTop += $
    }, 50)
};
O0O11 = function ($) {
    __mini_setControls($, this.O1Ool0, this);
    this.O1Ool0.style.display = "block"
};
lOlOO = function (G) {
    var C = [];
    for (var _ = 0, F = G.length; _ < F; _++) {
        var B = G[_];
        if (B.className == "separator") {
            var $ = {type: "separator", id: B.id, name: B.name};
            C[llo10o]($);
            continue
        }
        var E = mini[l00oo](B), A = E[0], D = E[1], $ = new o110o1();
        if (!D) {
            mini.applyTo[o1O0l0]($, B);
            C[llo10o]($);
            continue
        }
        mini.applyTo[o1O0l0]($, A);
        $[O1OO10](document.body);
        var H = new lOoO1O();
        mini.applyTo[o1O0l0](H, D);
        $[llOoOO](H);
        H[O1OO10](document.body);
        C[llo10o]($)
    }
    return C.clone()
};
ll1o11 = function (A) {
    var H = lOoO1O[ollolO][ol1oOl][o1O0l0](this, A), G = jQuery(A);
    mini[Ol100O](A, H, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose", "url", "onitemclick", "onitemselect", "textField", "idField", "parentField", "toolbar", "imgPath"]);
    mini[Olo01O](A, H, ["resultAsTree", "hideOnClick", "showNavArrow", "showShadow", "overflow"]);
    var D = mini[l00oo](A);
    for (var $ = D.length - 1; $ >= 0; $--) {
        var C = D[$], B = jQuery(C).attr("property");
        if (!B)continue;
        B = B.toLowerCase();
        if (B == "toolbar") {
            H.toolbar = C;
            C.parentNode.removeChild(C)
        }
    }
    var D = mini[l00oo](A), _ = this[O01100](D);
    if (_.length > 0)H.items = _;
    var E = G.attr("vertical");
    if (E)H.vertical = E == "true" ? true : false;
    var F = G.attr("allowSelectItem");
    if (F)H.allowSelectItem = F == "true" ? true : false;
    return H
};
o1l1o = function () {
    var $ = this.el = document.createElement("div");
    this.el.className = "mini-popup";
    this._contentEl = this.el
};
o01o1 = function () {
    O0o0o0(function () {
        o1l0lo(this.el, "mouseover", this.ol0010, this)
    }, this)
};
Oo0l0 = function () {
    if (!this[Ooo1oo]())return;
    lO1lo0[ollolO][l0llOO][o1O0l0](this);
    this.l0l1O();
    var A = this.el.childNodes;
    if (A)for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$];
        mini.layout(_)
    }
};
O1o0l = function ($) {
    if (this.el)this.el.onmouseover = null;
    lol0Oo(document, "mousedown", this.lolo, this);
    lol0Oo(window, "resize", this.loO11o, this);
    if (this.l1l1l) {
        jQuery(this.l1l1l).remove();
        this.l1l1l = null
    }
    if (this.shadowEl) {
        jQuery(this.shadowEl).remove();
        this.shadowEl = null
    }
    if (this._shimEl) {
        jQuery(this._shimEl).remove();
        this._shimEl = null
    }
    lO1lo0[ollolO][l0lOl][o1O0l0](this, $)
};
OOl1 = function ($) {
    if (parseInt($) == $)$ += "px";
    this.width = $;
    if ($[o110ll]("px") != -1)lOool0(this.el, $); else this.el.style.width = $;
    this[Ol1o10]()
};
oo01 = function ($) {
    if (parseInt($) == $)$ += "px";
    this.height = $;
    if ($[o110ll]("px") != -1)l10o(this.el, $); else this.el.style.height = $;
    this[Ol1o10]()
};
o0l1 = function (_) {
    if (!_)return;
    if (!mini.isArray(_))_ = [_];
    for (var $ = 0, A = _.length; $ < A; $++)mini.append(this._contentEl, _[$])
};
Ol00O = function ($) {
    var A = lO1lo0[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, A, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose"]);
    mini[Olo01O]($, A, ["showModal", "showShadow", "allowDrag", "allowResize"]);
    mini[oOOl00]($, A, ["showDelay", "hideDelay", "xOffset", "yOffset", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
    var _ = mini[l00oo]($, true);
    A.body = _;
    return A
};
O11l1 = function (_) {
    if (typeof _ == "string")return this;
    var $ = _[lo00O0];
    delete _[lo00O0];
    O1o0oO[ollolO][OO1O1l][o1O0l0](this, _);
    if (!mini.isNull($))this[ll10ll]($);
    return this
};
OOO1o = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-pager";
    var _ = "<div class=\"mini-pager-left\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr><td></td><td></td></tr></table></div><div class=\"mini-pager-right\"></div>";
    this.el.innerHTML = _;
    this._leftEl = this.el.childNodes[0];
    this._rightEl = this.el.childNodes[1];
    var $ = this._leftEl.getElementsByTagName("td");
    this._barEl = $[0];
    this._barEl2 = $[1];
    this.sizeEl = mini.append(this._barEl, "<span class=\"mini-pager-size\"></span>");
    this.sizeTextEl = mini.before(this.sizeEl, "<span class=\"mini-pager-sizetext\"></span>");
    this.sizeCombo = new l1O1lO();
    this.sizeCombo[o00l0]("pagesize");
    this.sizeCombo[oll0OO](this.pageSizeWidth);
    this.sizeCombo[O1OO10](this.sizeEl);
    mini.append(this.sizeEl, "<span class=\"separator\"></span>");
    this.firstButton = new oolo1O();
    this.firstButton[O1OO10](this._barEl);
    this.prevButton = new oolo1O();
    this.prevButton[O1OO10](this._barEl);
    this.indexEl = document.createElement("span");
    this.indexEl.className = "mini-pager-index";
    this.indexEl.innerHTML = "<input id=\"\" type=\"text\" class=\"mini-pager-num\"/><span class=\"mini-pager-pages\">/ 0</span>";
    this._barEl.appendChild(this.indexEl);
    this.numInput = this.indexEl.firstChild;
    this.pagesLabel = this.indexEl.lastChild;
    this.nextButton = new oolo1O();
    this.nextButton[O1OO10](this._barEl);
    this.lastButton = new oolo1O();
    this.lastButton[O1OO10](this._barEl);
    mini.append(this._barEl, "<span class=\"separator\"></span>");
    this.reloadButton = new oolo1O();
    this.reloadButton[O1OO10](this._barEl);
    this.firstButton[O000lo](true);
    this.prevButton[O000lo](true);
    this.nextButton[O000lo](true);
    this.lastButton[O000lo](true);
    this.reloadButton[O000lo](true);
    this.buttonsEl = mini.append(this._barEl2, "<div class=\"mini-page-buttons\"></div>");
    this[lOOl1o]()
};
OoO0l = function ($) {
    if (this.pageSelect) {
        mini[o11l00](this.pageSelect);
        this.pageSelect = null
    }
    if (this.numInput) {
        mini[o11l00](this.numInput);
        this.numInput = null
    }
    this.sizeEl = this.sizeTextEl = this._barEl = this._barEl2 = this._leftEl = this._rightEl = this.indexEl = this.buttonsEl = null;
    O1o0oO[ollolO][l0lOl][o1O0l0](this, $)
};
l00llo = function ($) {
    __mini_setControls($, this.buttonsEl, this)
};
lll1 = function () {
    return this.buttonsEl
};
Oolll = function () {
    O1o0oO[ollolO][lOo101][o1O0l0](this);
    this.firstButton[Ol1oO1]("click", function ($) {
        this.ol1lO(0)
    }, this);
    this.prevButton[Ol1oO1]("click", function ($) {
        this.ol1lO(this[lo00O0] - 1)
    }, this);
    this.nextButton[Ol1oO1]("click", function ($) {
        this.ol1lO(this[lo00O0] + 1)
    }, this);
    this.lastButton[Ol1oO1]("click", function ($) {
        this.ol1lO(this.totalPage)
    }, this);
    this.reloadButton[Ol1oO1]("click", function ($) {
        this.ol1lO()
    }, this);
    function $() {
        if (_)return;
        _ = true;
        var $ = parseInt(this.numInput.value);
        if (isNaN($))this[lOOl1o](); else this.ol1lO($ - 1);
        setTimeout(function () {
            _ = false
        }, 100)
    }

    var _ = false;
    Ol1O(this.numInput, "change", function (_) {
        $[o1O0l0](this)
    }, this);
    Ol1O(this.numInput, "keydown", function (_) {
        if (_.keyCode == 13) {
            $[o1O0l0](this);
            _.stopPropagation()
        }
    }, this);
    this.sizeCombo[Ol1oO1]("valuechanged", this.lo1lO, this)
};
O00o = function () {
    if (!this[Ooo1oo]())return;
    mini.layout(this._leftEl);
    mini.layout(this._rightEl)
};
olO0l = function ($) {
    if (isNaN($))return;
    this[lo00O0] = $;
    this[lOOl1o]()
};
oo0l = function () {
    return this[lo00O0]
};
lo1oo1 = function ($) {
    if (isNaN($))return;
    this[llllO] = $;
    this[lOOl1o]()
};
o1l00 = function () {
    return this[llllO]
};
lolOo = function ($) {
    $ = parseInt($);
    if (isNaN($))return;
    this[ool1oo] = $;
    this[lOOl1o]()
};
l1l1o = function () {
    return this[ool1oo]
};
ollOO = function ($) {
    if (!mini.isArray($))return;
    this[oO0101] = $;
    this[lOOl1o]()
};
oO100 = function () {
    return this[oO0101]
};
OOl01 = function ($) {
    $ = parseInt($);
    if (isNaN($))return;
    if (this.pageSizeWidth != $) {
        this.pageSizeWidth = $;
        this.sizeCombo[oll0OO]($)
    }
};
OOOo = function () {
    return this.pageSizeWidth
};
ol1O1 = function ($) {
    this.showPageSize = $;
    this[lOOl1o]()
};
oOOl0l = function () {
    return this.showPageSize
};
OlOOo0 = function ($) {
    this.showPageIndex = $;
    this[lOOl1o]()
};
oo000 = function () {
    return this.showPageIndex
};
OO111 = function ($) {
    this.showTotalCount = $;
    this[lOOl1o]()
};
ool0l = function () {
    return this.showTotalCount
};
ll0ll = function ($) {
    this.showPageInfo = $;
    this[lOOl1o]()
};
o101oo = function () {
    return this.showPageInfo
};
o1Ol = function ($) {
    this.showReloadButton = $;
    this[lOOl1o]()
};
lo10O = function () {
    return this.showReloadButton
};
O0o0lO = function ($) {
    this.showButtonText = $;
    this[lOOl1o]()
};
O0Ol1o = function () {
    return this.showButtonText
};
O0l0l = function ($) {
    this.showButtonIcon = $;
    this[lOOl1o]()
};
olOO = function () {
    return this.showButtonIcon
};
llOo = function () {
    return this.totalPage
};
l00O10 = function ($, J, G) {
    if (mini.isNumber($))this[lo00O0] = parseInt($);
    if (mini.isNumber(J))this[llllO] = parseInt(J);
    if (mini.isNumber(G))this[ool1oo] = parseInt(G);
    this.totalPage = parseInt(this[ool1oo] / this[llllO]) + 1;
    if ((this.totalPage - 1) * this[llllO] == this[ool1oo])this.totalPage -= 1;
    if (this[ool1oo] == 0)this.totalPage = 0;
    if (this[lo00O0] > this.totalPage - 1)this[lo00O0] = this.totalPage - 1;
    if (this[lo00O0] <= 0)this[lo00O0] = 0;
    if (this.totalPage <= 0)this.totalPage = 0;
    this.firstButton[o0olOl]();
    this.prevButton[o0olOl]();
    this.nextButton[o0olOl]();
    this.lastButton[o0olOl]();
    if (this[lo00O0] == 0) {
        this.firstButton[l0o01l]();
        this.prevButton[l0o01l]()
    }
    if (this[lo00O0] >= this.totalPage - 1) {
        this.nextButton[l0o01l]();
        this.lastButton[l0o01l]()
    }
    var H = this[lo00O0] > -1 ? this[lo00O0] + 1 : 0;
    if (this[ool1oo] == 0)H = 0;
    this.numInput.value = H;
    this.pagesLabel.innerHTML = "/ " + this.totalPage;
    var N = this[oO0101].clone();
    if (N[o110ll](this[llllO]) == -1) {
        N.push(this[llllO]);
        N = N.sort(function ($, _) {
            return $ > _
        })
    }
    var A = [];
    for (var F = 0, C = N.length; F < C; F++) {
        var E = N[F], I = {};
        I.text = E;
        I.id = E;
        A.push(I)
    }
    this.sizeCombo[ol0l0](A);
    this.sizeCombo[ll10OO](this[llllO]);
    this.sizeTextEl.innerHTML = this.sizeText;
    this.sizeTextEl.style.display = this.sizeText ? "" : "none";
    var B = this.firstText, M = this.prevText, D = this.nextText, K = this.lastText, _ = this.reloadText;
    if (this.showButtonText == false)B = M = D = K = _ = "";
    this.firstButton[l0O0O0](B);
    this.prevButton[l0O0O0](M);
    this.nextButton[l0O0O0](D);
    this.lastButton[l0O0O0](K);
    this.reloadButton[l0O0O0](_);
    B = this.firstText, M = this.prevText, D = this.nextText, K = this.lastText;
    if (this.showButtonText) {
        this.firstButton[O1ollo](B);
        this.prevButton[O1ollo](M);
        this.nextButton[O1ollo](D);
        this.lastButton[O1ollo](K);
        this.reloadButton[O1ollo](_)
    }
    this.firstButton[OO1loO](this.showButtonIcon ? "mini-pager-first" : "");
    this.prevButton[OO1loO](this.showButtonIcon ? "mini-pager-prev" : "");
    this.nextButton[OO1loO](this.showButtonIcon ? "mini-pager-next" : "");
    this.lastButton[OO1loO](this.showButtonIcon ? "mini-pager-last" : "");
    this.reloadButton[OO1loO](this.showButtonIcon ? "mini-pager-reload" : "");
    this.reloadButton[lOo0l](this.showReloadButton);
    var L = this.reloadButton.el.previousSibling;
    if (L)L.style.display = this.showReloadButton ? "" : "none";
    this._rightEl.innerHTML = String.format(this.pageInfoText, this.pageSize, this[ool1oo]);
    this.indexEl.style.display = this.showPageIndex ? "" : "none";
    this.sizeEl.style.display = this.showPageSize ? "" : "none";
    this._rightEl.style.display = this.showPageInfo ? "" : "none"
};
l10l = function (_) {
    var $ = parseInt(this.sizeCombo[o1oOl]());
    this.ol1lO(0, $)
};
o11Ol = function ($, _) {
    var A = {
        pageIndex: mini.isNumber($) ? $ : this.pageIndex,
        pageSize: mini.isNumber(_) ? _ : this.pageSize,
        cancel: false
    };
    if (A[lo00O0] > this.totalPage - 1)A[lo00O0] = this.totalPage - 1;
    if (A[lo00O0] < 0)A[lo00O0] = 0;
    this[ol1O0]("beforepagechanged", A);
    if (A.cancel == true)return;
    this[ol1O0]("pagechanged", A);
    this[lOOl1o](A.pageIndex, A[llllO])
};
olo0O = function (_, $) {
    this[Ol1oO1]("pagechanged", _, $)
};
ol0lol = function (el) {
    var attrs = O1o0oO[ollolO][ol1oOl][o1O0l0](this, el);
    mini[Ol100O](el, attrs, ["onpagechanged", "sizeList", "onbeforepagechanged", "buttons", "sizeText"]);
    mini[Olo01O](el, attrs, ["showPageIndex", "showPageSize", "showTotalCount", "showPageInfo", "showReloadButton", "showButtonText", "showButtonIcon"]);
    mini[oOOl00](el, attrs, ["pageIndex", "pageSize", "totalCount", "pageSizeWidth"]);
    if (typeof attrs[oO0101] == "string")attrs[oO0101] = eval(attrs[oO0101]);
    if (attrs.buttons)attrs.buttons = o0OO(attrs.buttons);
    return attrs
};
lO1o = function (A) {
    if (typeof A == "string")return this;
    var _ = this.O1O0lo;
    this.O1O0lo = false;
    var C = A.toolbar;
    delete A.toolbar;
    var $ = A.footer;
    delete A.footer;
    var B = A.url;
    delete A.url;
    var D = A.buttons;
    delete A.buttons;
    lolo00[ollolO][OO1O1l][o1O0l0](this, A);
    if (D)this[lOl0lo](D);
    if (C)this[looOo1](C);
    if ($)this[l1oooO]($);
    if (B)this[Oo1100](B);
    this.O1O0lo = _;
    this[l0llOO]();
    return this
};
OOlO0 = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-panel";
    this.el.tabIndex = 0;
    var _ = "<div class=\"mini-panel-border\">" + "<div class=\"mini-panel-header\" ><div class=\"mini-panel-header-inner\" ><span class=\"mini-panel-icon mini-iconfont\"></span><div class=\"mini-panel-title\" ></div><div class=\"mini-tools\" ></div></div></div>" + "<div class=\"mini-panel-viewport\">" + "<div class=\"mini-panel-toolbar\"></div>" + "<div class=\"mini-panel-body\" ></div>" + "<div class=\"mini-panel-footer\"></div>" + "<div class=\"mini-resizer-trigger\"></div>" + "</div>" + "</div>";
    this.el.innerHTML = _;
    this.el.hideFocus = true;
    this._borderEl = this.el.firstChild;
    this.OlOl0l = this._borderEl.firstChild;
    this.olOOO0 = this._borderEl.lastChild;
    this.O1Ool0 = mini.byClass("mini-panel-toolbar", this.el);
    this.Ol01 = mini.byClass("mini-panel-body", this.el);
    this.l01olO = mini.byClass("mini-panel-footer", this.el);
    this.l1010o = mini.byClass("mini-resizer-trigger", this.el);
    var $ = mini.byClass("mini-panel-header-inner", this.el);
    this.O11000 = mini.byClass("mini-panel-icon", this.el);
    this.O001oO = mini.byClass("mini-panel-title", this.el);
    this.OO01o = mini.byClass("mini-tools", this.el);
    lO01l(this.Ol01, this.bodyStyle);
    this[o10oOl]()
};
loOOO = function ($) {
    this.l00o0();
    this.OlO01 = null;
    this.olOOO0 = this._borderEl = this.Ol01 = this.l01olO = this.O1Ool0 = null;
    this.OO01o = this.O001oO = this.O11000 = this.l1010o = null;
    lolo00[ollolO][l0lOl][o1O0l0](this, $)
};
o0OOO = function () {
    O0o0o0(function () {
        Ol1O(this.el, "click", this.oO0o1l, this)
    }, this)
};
lloo0 = function () {
    this.OlOl0l.style.display = this.showHeader ? "" : "none";
    this.O1Ool0.style.display = this[l1lOO] ? "" : "none";
    this.l01olO.style.display = this[OOolO0] ? "" : "none"
};
OoloO = function () {
    if (!this[Ooo1oo]())return;
    this.l1010o.style.display = this[lO0oOO] ? "" : "none";
    var A = this[l0111O](), D = this[oOo110](), $ = this[llO1l](true), _ = $;
    if (mini.isIE6)lOool0(this.Ol01, $);
    if (!A) {
        var C = this[o0oo10]();
        l10o(this.olOOO0, C);
        var B = this[O0oo1O]();
        l10o(this.Ol01, B)
    } else {
        this.olOOO0.style.height = "auto";
        this.Ol01.style.height = "auto"
    }
    mini.layout(this._borderEl);
    if (this.l1010o)mini[oOo01o](this.l1010o);
    this[ol1O0]("layout")
};
oO1Ol = function ($) {
    if (!$)$ = 10;
    if (this.Oo0oOl)return;
    var _ = this;
    this.Oo0oOl = setTimeout(function () {
        _.Oo0oOl = null;
        _[l0llOO]()
    }, $)
};
o1001 = function () {
    clearTimeout(this.Oo0oOl);
    this.Oo0oOl = null
};
oOOl = function ($) {
    return this[llO1l](true)
};
lO10 = function (_) {
    var $ = this[o11lOl](true) - this[Oo0O]();
    if (_) {
        var C = O1l0lo(this.olOOO0), B = olO0(this.olOOO0), A = l011o(this.olOOO0);
        if (jQuery.boxModel)$ = $ - C.top - C.bottom - B.top - B.bottom;
        $ = $ - A.top - A.bottom
    }
    return $
};
l0l11 = function (A) {
    var _ = this[o0oo10](), _ = _ - this[OOOOll]() - this[Oolol]();
    if (A) {
        var $ = O1l0lo(this.Ol01), B = olO0(this.Ol01), C = l011o(this.Ol01);
        if (jQuery.boxModel)_ = _ - $.top - $.bottom - B.top - B.bottom;
        _ = _ - C.top - C.bottom
    }
    if (_ < 0)_ = 0;
    return _
};
O1O1o = function () {
    var $ = this.showHeader ? jQuery(this.OlOl0l).outerHeight() : 0;
    return $
};
o0o00 = function () {
    var $ = this[l1lOO] ? jQuery(this.O1Ool0).outerHeight() : 0;
    return $
};
ollOoO = function () {
    var $ = this[OOolO0] ? jQuery(this.l01olO).outerHeight() : 0;
    return $
};
Oo0Oo = function ($) {
    this.headerStyle = $;
    lO01l(this.OlOl0l, $);
    this[l0llOO]()
};
oo0oo = function () {
    return this.headerStyle
};
O11OOStyle = function ($) {
    this.bodyStyle = $;
    lO01l(this.Ol01, $);
    this[l0llOO]()
};
OOO01 = function () {
    return this.bodyStyle
};
o1ooOStyle = function ($) {
    this.toolbarStyle = $;
    lO01l(this.O1Ool0, $);
    this[l0llOO]()
};
l0100 = function () {
    return this.toolbarStyle
};
oo10O0Style = function ($) {
    this.footerStyle = $;
    lO01l(this.l01olO, $);
    this[l0llOO]()
};
o0ll1 = function () {
    return this.footerStyle
};
OoOOlo = function ($) {
    jQuery(this.OlOl0l)[OoOo0](this.headerCls);
    jQuery(this.OlOl0l)[Oo1Olo]($);
    this.headerCls = $;
    this[l0llOO]()
};
OoooOo = function () {
    return this.headerCls
};
O11OOCls = function ($) {
    jQuery(this.Ol01)[OoOo0](this.bodyCls);
    jQuery(this.Ol01)[Oo1Olo]($);
    this.bodyCls = $;
    this[l0llOO]()
};
O101o = function () {
    return this.bodyCls
};
o1ooOCls = function ($) {
    jQuery(this.O1Ool0)[OoOo0](this.toolbarCls);
    jQuery(this.O1Ool0)[Oo1Olo]($);
    this.toolbarCls = $;
    this[l0llOO]()
};
ll1Ol = function () {
    return this.toolbarCls
};
oo10O0Cls = function ($) {
    jQuery(this.l01olO)[OoOo0](this.footerCls);
    jQuery(this.l01olO)[Oo1Olo]($);
    this.footerCls = $;
    this[l0llOO]()
};
l1ll = function () {
    return this.footerCls
};
lOlOoO = function () {
    this.O001oO.innerHTML = this.title;
    this.O11000.style.display = (this.iconCls || this[O110l]) ? "inline" : "none";
    this.O11000.className = "mini-panel-icon mini-iconfont " + this.iconCls;
    lO01l(this.O11000, this[O110l])
};
O010o = function ($) {
    this.title = $;
    this[o10oOl]()
};
O1lo = function () {
    return this.title
};
OlolO = function ($) {
    this.iconCls = $;
    this[o10oOl]()
};
o0101 = function () {
    return this.iconCls
};
Oo0OO = function ($) {
    this[O110l] = $;
    this[o10oOl]()
};
o0lOlO = function () {
    return this[O110l]
};
Ol0O1o = function () {
    var B = "";
    for (var $ = 0, _ = this.buttons.length; $ < _; $++) {
        var A = this.buttons[$];
        if (A.html)B += A.html; else B += "<span id=\"" + $ + "\" class=\"" + A.cls + " " + (A.enabled ? "" : "mini-disabled") + "\" style=\"" + A.style + ";" + (A.visible ? "" : "display:none;") + "\"></span>"
    }
    this.OO01o.innerHTML = B
};
oOo1 = function ($) {
    this[o0loO] = $;
    var _ = this[oloO0]("close");
    if (!_)return;
    _.visible = $;
    this[l1lOO1]()
};
lloO1 = function () {
    return this[o0loO]
};
olO0ll = function ($) {
    this[o00o0] = $
};
lO1oO = function () {
    return this[o00o0]
};
ooOol = function ($) {
    this[oOl0ll] = $;
    var _ = this[oloO0]("collapse");
    if (!_)return;
    _.visible = $;
    this[l1lOO1]()
};
o1oo = function () {
    return this[oOl0ll]
};
Oo11l = function ($) {
    this.showHeader = $;
    this[o0l0lO]();
    this[O0o0o1]()
};
oO0O0 = function () {
    return this.showHeader
};
ol0o = function ($) {
    this[l1lOO] = $;
    this[o0l0lO]();
    this[O0o0o1]()
};
olollO = function () {
    return this[l1lOO]
};
llOOoo = function ($) {
    this[OOolO0] = $;
    this[o0l0lO]();
    this[O0o0o1]()
};
oO0OlO = function () {
    return this[OOolO0]
};
l1OlO = function (A) {
    if (Ol0O(this.OlOl0l, A.target)) {
        var $ = ol000(A.target, "mini-tools");
        if ($) {
            var _ = this[oloO0](parseInt(A.target.id));
            if (_)this.lO0o(_, A)
        } else if (this.collapseOnTitleClick)this[llo0o1]()
    }
};
oolo10 = function (B, $) {
    var C = {button: B, index: this.buttons[o110ll](B), name: B.name.toLowerCase(), htmlEvent: $, cancel: false};
    this[ol1O0]("beforebuttonclick", C);
    var _ = true;
    try {
        if (C.name == "close" && this[o00o0] == "destroy" && this.OlO01 && this.OlO01.contentWindow)if (this.OlO01.contentWindow.CloseWindow)_ = this.OlO01.contentWindow.CloseWindow("close"); else if (this.OlO01.contentWindow.CloseOwnerWindow)_ = this.OlO01.contentWindow.CloseOwnerWindow("close"); else _ = this._CloseOwnerWindow("close")
    } catch (A) {
        _ = this._CloseOwnerWindow("close")
    }
    if (_ === false)C.cancel = true;
    if (C.cancel == true)return C;
    this[ol1O0]("buttonclick", C);
    if (C.name == "close")if (this[o00o0] == "destroy") {
        this.__HideAction = "close";
        this[l0lOl]()
    } else this[O1ll1]();
    if (C.name == "collapse") {
        this[llo0o1]();
        if (this[ooo0o] && this.expanded && this.url)this[Olllo1]()
    }
    return C
};
oo0lO = function (_, $) {
    this[Ol1oO1]("buttonclick", _, $)
};
ll0ol = function () {
    this.buttons = [];
    var $ = this[OolOo0]({name: "collapse", cls: "mini-tools-collapse", visible: this[oOl0ll]});
    this.buttons.push($);
    var _ = this[OolOo0]({name: "close", cls: "mini-tools-close", visible: this[o0loO]});
    this.buttons.push(_)
};
loll0 = function (_) {
    var $ = mini.copyTo({name: "", cls: "", style: "", visible: true, enabled: true, html: ""}, _);
    return $
};
ol11ll = function (A) {
    if (typeof A == "string")A = A.split(" ");
    if (!mini.isArray(A))A = [];
    var C = [];
    for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$];
        if (typeof _ == "string") {
            _ = _.trim();
            if (!_)continue;
            _ = {name: _, cls: "mini-tools-" + _, html: ""}
        }
        _ = this[OolOo0](_);
        C.push(_)
    }
    this.buttons = C;
    this[l1lOO1]()
};
ooOos = function () {
    return this.buttons
};
OloO0 = function (_, $) {
    if (typeof _ == "string")_ = {iconCls: _};
    _ = this[OolOo0](_);
    if (typeof $ != "number")$ = this.buttons.length;
    this.buttons.insert($, _);
    this[l1lOO1]()
};
l1010 = function ($, A) {
    var _ = this[oloO0]($);
    if (!_)return;
    mini.copyTo(_, A);
    this[l1lOO1]()
};
o0loo0 = function ($) {
    var _ = this[oloO0]($);
    if (!_)return;
    this.buttons.remove(_);
    this[l1lOO1]()
};
ooOo = function ($) {
    if (typeof $ == "number")return this.buttons[$]; else for (var _ = 0, A = this.buttons.length; _ < A; _++) {
        var B = this.buttons[_];
        if (B.name == $)return B
    }
};
O11OO = function ($) {
    __mini_setControls($, this.Ol01, this)
};
lol1 = function ($) {
};
o1ooO = function ($) {
    __mini_setControls($, this.O1Ool0, this)
};
oo10O0 = function ($) {
    __mini_setControls($, this.l01olO, this)
};
O100o = function () {
    return this.OlOl0l
};
ooOloo = function () {
    return this.O1Ool0
};
OoooO = function () {
    return this.Ol01
};
l100 = function () {
    return this.l01olO
};
l0oO1l = function ($) {
    return this.OlO01
};
llOlO1 = function ($) {
    this.clearTimeStamp = $
};
loOl = function () {
    return this.clearTimeStamp
};
O1OO1 = function () {
    return this.Ol01
};
OO11l = function ($) {
    if (this.OlO01) {
        var _ = this.OlO01;
        if (_._ondestroy)_._ondestroy();
        _.onload = function () {
        };
        jQuery(_).unbind("load");
        _.src = "";
        if (mini.isIE) {
            try {
                _.contentWindow.document.write("");
                _.contentWindow.document.close()
            } catch (A) {
            }
        }
        try {
            this.OlO01.parentNode.removeChild(this.OlO01);
            this.OlO01[oll100](true)
        } catch (A) {
        }
    }
    this.OlO01 = null;
    if ($ === true)mini.removeChilds(this.Ol01)
};
loo1 = function () {
    if (!this.url)return;
    this.l00o0(true);
    var B = new Date(), $ = this;
    this.loadedUrl = this.url;
    if (this.maskOnLoad)this[Ool0o]();
    jQuery(this.Ol01).css("overflow", "hidden");
    function A(_) {
        $.__HideAction = _;
        var A = true;
        if ($.__onDestroy)A = $.__onDestroy(_);
        if (A === false)return false;
        var B = {iframe: $.OlO01, action: _};
        $[ol1O0]("unload", B);
        setTimeout(function () {
            $[l0lOl]()
        }, 10)
    }

    $._CloseOwnerWindow = A;
    var _ = mini.createIFrame(this.url, function (_, D) {
        if ($.destroyed)return;
        var C = (B - new Date()) + $.ol00;
        if (C < 0)C = 0;
        setTimeout(function () {
            $[oolo1o]()
        }, C);
        try {
            $.OlO01.contentWindow.Owner = $.Owner;
            $.OlO01.contentWindow.CloseOwnerWindow = A
        } catch (E) {
        }
        if (D || $.loadOnRefresh) {
            if ($.__onLoad)$.__onLoad();
            var E = {iframe: $.OlO01};
            $[ol1O0]("load", E)
        }
    }, this.clearTimeStamp);
    this.Ol01.appendChild(_);
    this.OlO01 = _
};
ooO1 = function (_, $, A) {
    this[Oo1100](_, $, A)
};
lO11o = function () {
    this[Oo1100](this.url)
};
lol0O = function ($, _, A) {
    this.url = $;
    this.__onLoad = _;
    this.__onDestroy = A;
    if (this.expanded && $)this[OOl0Ol]()
};
O0oOl0 = function () {
    return this.url
};
O101l = function ($) {
    this[ooo0o] = $
};
OOoo1 = function () {
    return this[ooo0o]
};
ooOO0 = function ($) {
    this.maskOnLoad = $
};
lO0ol = function ($) {
    return this.maskOnLoad
};
llOooO = function ($) {
    if (this[lO0oOO] != $) {
        this[lO0oOO] = $;
        this[l0llOO]()
    }
};
OOO0o = function () {
    return this[lO0oOO]
};
Oo1l0 = function ($) {
    this.loadOnRefresh = $
};
l10ol = function ($) {
    return this.loadOnRefresh
};
O11101 = function ($) {
    if (this.expanded != $) {
        this.expanded = $;
        if (this.expanded)this[lolool](); else this[lO0o11]()
    }
};
Oo0O0O = function () {
    return this.expanded
};
lOOo = function () {
    if (this.expanded)this[lO0o11](); else this[lolool]()
};
OllO1 = function () {
    this.expanded = false;
    if (this.state != "max")this._height = this.el.style.height;
    this.el.style.height = "auto";
    this.olOOO0.style.display = "none";
    l1Oo(this.el, "mini-panel-collapse");
    this[l0llOO]()
};
ollO1 = function () {
    this.expanded = true;
    if (this._height)this.el.style.height = this._height;
    this.olOOO0.style.display = "block";
    if (this.state != "max")delete this._height;
    o11o(this.el, "mini-panel-collapse");
    if (this.url && this.url != this.loadedUrl)this[OOl0Ol]();
    this[l0llOO]()
};
ll010 = function ($) {
    this.collapseOnTitleClick = $;
    o11o(this.el, "mini-panel-titleclick");
    if ($)l1Oo(this.el, "mini-panel-titleclick")
};
oll0l = function () {
    return this.collapseOnTitleClick
};
o01O0o = function (_) {
    var D = lolo00[ollolO][ol1oOl][o1O0l0](this, _);
    mini[Ol100O](_, D, ["title", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "toolbarCls", "toolbarStyle", "footer", "toolbar", "url", "closeAction", "loadingMsg", "onbeforebuttonclick", "onbuttonclick", "onload", "buttons"]);
    mini[Olo01O](_, D, ["allowResize", "showCloseButton", "showHeader", "showToolbar", "showFooter", "loadOnRefresh", "showCollapseButton", "refreshOnExpand", "maskOnLoad", "expanded", "collapseOnTitleClick", "clearTimeStamp"]);
    var C = mini[l00oo](_, true);
    for (var $ = C.length - 1; $ >= 0; $--) {
        var B = C[$], A = jQuery(B).attr("property");
        if (!A)continue;
        A = A.toLowerCase();
        if (A == "toolbar")D.toolbar = B; else if (A == "footer")D.footer = B
    }
    D.body = C;
    return D
};
ooO0o1 = function () {
    this.el = document.createElement("input");
    this.el.type = "hidden";
    this.el.className = "mini-hidden"
};
Oo101 = function ($) {
    this.name = $;
    this.el.name = $
};
oOoO = function (_) {
    if (_ === null || _ === undefined)_ = "";
    this.value = _;
    if (mini.isDate(_)) {
        var B = _.getFullYear(), A = _.getMonth() + 1, $ = _.getDate();
        A = A < 10 ? "0" + A : A;
        $ = $ < 10 ? "0" + $ : $;
        this.el.value = B + "-" + A + "-" + $
    } else this.el.value = _
};
lOoOO = function () {
    return this.value
};
l0OolO = function () {
    return this.el.value
};
o1l0ol = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-layout";
    this.el.innerHTML = "<div class=\"mini-layout-border\"></div>";
    this._borderEl = this.el.firstChild;
    this[l0loO0]()
};
oo0Oo = function () {
    O0o0o0(function () {
        Ol1O(this.el, "click", this.oO0o1l, this);
        Ol1O(this.el, "mousedown", this.Ol0l, this);
        Ol1O(this.el, "mouseover", this.ol0010, this);
        Ol1O(this.el, "mouseout", this.O11olO, this);
        Ol1O(document, "mousedown", this.o0OO0O, this)
    }, this)
};
OoOO1El = function ($) {
    var $ = this[ol0lo1]($);
    if (!$)return null;
    return $._el
};
OoOO1HeaderEl = function ($) {
    var $ = this[ol0lo1]($);
    if (!$)return null;
    return $._header
};
OoOO1BodyEl = function ($) {
    var $ = this[ol0lo1]($);
    if (!$)return null;
    return $._body
};
OoOO1SplitEl = function ($) {
    var $ = this[ol0lo1]($);
    if (!$)return null;
    return $._split
};
OoOO1ProxyEl = function ($) {
    var $ = this[ol0lo1]($);
    if (!$)return null;
    return $._proxy
};
OoOO1Box = function (_) {
    var $ = this[lOO11l](_);
    if ($)return Ol0oO($);
    return null
};
OoOO1 = function ($) {
    if (typeof $ == "string")return this.regionMap[$];
    return $
};
OOOo1 = function (_, B) {
    var D = _.buttons;
    for (var $ = 0, A = D.length; $ < A; $++) {
        var C = D[$];
        if (C.name == B)return C
    }
};
OlOlo = function (_) {
    var $ = mini.copyTo({
        region: "",
        title: "",
        iconCls: "",
        iconStyle: "",
        showCloseButton: false,
        showCollapseButton: true,
        buttons: [{name: "close", cls: "mini-tools-close", html: "", visible: false}, {
            name: "collapse",
            cls: "mini-tools-collapse",
            html: "",
            visible: true
        }],
        showSplitIcon: false,
        showSplit: true,
        splitToolTip: "",
        showHeader: true,
        splitSize: this.splitSize,
        collapseSize: this.collapseWidth,
        width: this.regionWidth,
        height: this.regionHeight,
        minWidth: this.regionMinWidth,
        minHeight: this.regionMinHeight,
        maxWidth: this.regionMaxWidth,
        maxHeight: this.regionMaxHeight,
        allowResize: true,
        cls: "",
        style: "",
        headerCls: "",
        headerStyle: "",
        bodyCls: "",
        bodyStyle: "",
        visible: true,
        expanded: true
    }, _);
    return $
};
Olol0 = function ($) {
    var $ = this[ol0lo1]($);
    if (!$)return;
    mini.append(this._borderEl, "<div id=\"" + $.region + "\" class=\"mini-layout-region\"><div class=\"mini-layout-region-header\" style=\"" + $.headerStyle + "\"></div><div class=\"mini-layout-region-body " + $.bodyCls + "\" style=\"" + $.bodyStyle + "\"></div></div>");
    $._el = this._borderEl.lastChild;
    $._header = $._el.firstChild;
    $._body = $._el.lastChild;
    if ($.cls)l1Oo($._el, $.cls);
    if ($.style)lO01l($._el, $.style);
    if ($.headerCls)l1Oo($._el.firstChild, $.headerCls);
    l1Oo($._el, "mini-layout-region-" + $.region);
    if ($.region != "center") {
        mini.append(this._borderEl, "<div uid=\"" + this.uid + "\" id=\"" + $.region + "\" class=\"mini-layout-split\"><div class=\"mini-layout-spliticon\" title=\"" + $.splitToolTip + "\"></div></div>");
        $._split = this._borderEl.lastChild;
        l1Oo($._split, "mini-layout-split-" + $.region)
    }
    if ($.region != "center") {
        mini.append(this._borderEl, "<div id=\"" + $.region + "\" class=\"mini-layout-proxy\"></div>");
        $._proxy = this._borderEl.lastChild;
        l1Oo($._proxy, "mini-layout-proxy-" + $.region)
    }
};
l0O0l = function (A, $) {
    var A = this[ol0lo1](A);
    if (!A)return;
    var _ = this[o0lOl0](A);
    __mini_setControls($, _, this)
};
o1l0 = function (A) {
    if (!mini.isArray(A))return;
    for (var $ = 0, _ = A.length; $ < _; $++)this[OOllo0](A[$])
};
lolOl = function (E, $) {
    var H = E;
    E = this.oo1l1(E);
    if (!E.region)E.region = "center";
    E.region = E.region.toLowerCase();
    if (E.region == "center" && H && !H.showHeader)E.showHeader = false;
    if (E.region == "north" || E.region == "south")if (!H.collapseSize)E.collapseSize = this.collapseHeight;
    this.OOl00(E);
    if (typeof $ != "number")$ = this.regions.length;
    var B = this.regionMap[E.region];
    if (B)return;
    this.regions.insert($, E);
    this.regionMap[E.region] = E;
    this.lOo0(E);
    var C = this[o0lOl0](E), D = E.body;
    delete E.body;
    if (D) {
        if (!mini.isArray(D))D = [D];
        for (var _ = 0, G = D.length; _ < G; _++)mini.append(C, D[_])
    }
    if (E.bodyParent) {
        var F = E.bodyParent;
        while (F.firstChild) {
            var A = F.firstChild;
            C.appendChild(A)
        }
    }
    delete E.bodyParent;
    if (E.controls) {
        this[Oll1ll](E, E.controls);
        delete E.controls
    }
    this[l0loO0]()
};
OOl0l = function ($) {
    var $ = this[ol0lo1]($);
    if (!$)return;
    this.regions.remove($);
    delete this.regionMap[$.region];
    jQuery($._el).remove();
    jQuery($._split).remove();
    jQuery($._proxy).remove();
    this[l0loO0]()
};
O0oOO = function (A, $) {
    var A = this[ol0lo1](A);
    if (!A)return;
    var _ = this.regions[$];
    if (!_ || _ == A)return;
    this.regions.remove(A);
    var $ = this.region[o110ll](_);
    this.regions.insert($, A);
    this[l0loO0]()
};
l0oOO = function ($) {
    var _ = this.OO1O($, "close");
    _.visible = $[o0loO];
    _ = this.OO1O($, "collapse");
    _.visible = $[oOl0ll];
    if ($.width < $.minWidth)$.width = $.minWidth;
    if ($.width > $.maxWidth)$.width = $.maxWidth;
    if ($.height < $.minHeight)$.height = $.minHeight;
    if ($.height > $.maxHeight)$.height = $.maxHeight
};
o00OO = function ($, _) {
    $ = this[ol0lo1]($);
    if (!$)return;
    if (_)delete _.region;
    mini.copyTo($, _);
    this.OOl00($);
    this[l0loO0]()
};
lOO10 = function ($) {
    $ = this[ol0lo1]($);
    if (!$)return;
    $.expanded = true;
    this[l0loO0]()
};
o1o00l = function ($) {
    $ = this[ol0lo1]($);
    if (!$)return;
    $.expanded = false;
    this[l0loO0]()
};
o01oO1 = function ($) {
    $ = this[ol0lo1]($);
    if (!$)return;
    if ($.expanded)this[OOolo0]($); else this[o10oo0]($)
};
llO1O = function ($) {
    $ = this[ol0lo1]($);
    if (!$)return;
    $.visible = true;
    this[l0loO0]()
};
l0o11 = function ($) {
    $ = this[ol0lo1]($);
    if (!$)return;
    $.visible = false;
    this[l0loO0]()
};
o1o1l1 = function ($) {
    $ = this[ol0lo1]($);
    if (!$)return null;
    return $.expanded
};
oooOO = function ($) {
    $ = this[ol0lo1]($);
    if (!$)return null;
    return $.visible
};
oo1ol = function ($) {
    $ = this[ol0lo1]($);
    var _ = {region: $, cancel: false};
    if ($.expanded) {
        this[ol1O0]("BeforeCollapse", _);
        if (_.cancel == false)this[OOolo0]($)
    } else {
        this[ol1O0]("BeforeExpand", _);
        if (_.cancel == false)this[o10oo0]($)
    }
};
ol1Ol = function (_) {
    var $ = ol000(_.target, "mini-layout-proxy");
    return $
};
lOo0o1 = function (_) {
    var $ = ol000(_.target, "mini-layout-region");
    return $
};
l0oo1 = function (D) {
    if (this.olOOlo)return;
    var A = this.oo1l(D);
    if (A) {
        var _ = A.id, C = ol000(D.target, "mini-tools-collapse");
        if (C)this.lO0o1(_); else this.l101(_)
    }
    var B = this.O1O1(D);
    if (B && ol000(D.target, "mini-layout-region-header")) {
        _ = B.id, C = ol000(D.target, "mini-tools-collapse");
        if (C)this.lO0o1(_);
        var $ = ol000(D.target, "mini-tools-close");
        if ($)this[ll1lOo](_, {visible: false})
    }
    if (olol(D.target, "mini-layout-spliticon")) {
        _ = D.target.parentNode.id;
        this.lO0o1(_)
    }
};
oO00o = function (_, A, $) {
    this[ol1O0]("buttonclick", {htmlEvent: $, region: _, button: A, index: this.buttons[o110ll](A), name: A.name})
};
O000l = function (_, A, $) {
    this[ol1O0]("buttonmousedown", {htmlEvent: $, region: _, button: A, index: this.buttons[o110ll](A), name: A.name})
};
OOO1l = function (_) {
    var $ = this.oo1l(_);
    if ($) {
        l1Oo($, "mini-layout-proxy-hover");
        this.hoverProxyEl = $
    }
};
o01ol = function ($) {
    if (this.hoverProxyEl)o11o(this.hoverProxyEl, "mini-layout-proxy-hover");
    this.hoverProxyEl = null
};
o1l1o1 = function (_, $) {
    this[Ol1oO1]("buttonclick", _, $)
};
lll1l = function (_, $) {
    this[Ol1oO1]("buttonmousedown", _, $)
};
o010o = function ($) {
    if (typeof $ == "string")return this;
    this.Olol = $.text || $[O110l] || $.iconCls || $.iconPosition;
    oolo1O[ollolO][OO1O1l][o1O0l0](this, $);
    if (this.Olol === false) {
        this.Olol = true;
        this[l0loO0]()
    }
    return this
};
Oll00 = function () {
    this.el = document.createElement("a");
    this.el.className = "mini-button";
    this.el.hideFocus = true;
    this.el.href = "javascript:void(0)";
    this[l0loO0]()
};
lloo1O = function () {
    O0o0o0(function () {
        o1l0lo(this.el, "mousedown", this.Ol0l, this);
        o1l0lo(this.el, "click", this.oO0o1l, this)
    }, this)
};
OOOo0O = function ($) {
    if (this.el) {
        this.el.onclick = null;
        this.el.onmousedown = null
    }
    if (this.menu)this.menu.owner = null;
    this.menu = null;
    oolo1O[ollolO][l0lOl][o1O0l0](this, $)
};
O10O0 = function () {
    if (this.Olol === false)return;
    var B = "", _ = this.text, $ = this[O110l] || this.iconCls || this.img;
    if ($ && _)B = " mini-button-icon-text "; else if ($ && _ === "") {
        B = " mini-button-icon-only ";
        _ = "&nbsp;"
    } else if (_ == "")_ = "&nbsp;";
    var A = this[O110l] || "";
    if (!A && this.img)A = "background-image:url(" + this.img + ")";
    var D = "";
    if ($)D = "<span class=\"mini-button-icon mini-iconfont " + this.iconCls + "\" style=\"" + A + "\"></span>";
    var C = "<span class=\"mini-button-text " + B + "\">" + D + _ + "</span>";
    if (this.allowCls)C = C + "<span class=\"mini-button-allow " + this.allowCls + "\"></span>";
    this.el.innerHTML = C
};
oO1loo = function ($) {
    this.href = $;
    this.el.href = $;
    var _ = this.el;
    setTimeout(function () {
        _.onclick = null
    }, 100)
};
O01l0 = function () {
    return this.href
};
loll = function ($) {
    this.target = $;
    this.el.target = $
};
OO0l1 = function () {
    return this.target
};
O1lo1 = function ($) {
    if (this.text != $) {
        this.text = $;
        this[l0loO0]()
    }
};
lO11ll = function () {
    return this.text
};
o1Ol0 = function ($) {
    this.iconCls = $;
    this[l0loO0]()
};
l0o1 = function () {
    return this.iconCls
};
oO00l = function ($) {
    this[O110l] = $;
    this[l0loO0]()
};
llOol = function () {
    return this[O110l]
};
ooOo1 = function ($) {
    this.img = $;
    this[l0loO0]()
};
oool0 = function () {
    return this.img
};
oo1olO = function ($) {
    this.iconPosition = "left";
    this[l0loO0]()
};
oolll = function () {
    return this.iconPosition
};
Ol011 = function ($) {
    this.plain = $;
    if ($)this[oll1o0](this.l11o1O); else this[ol0OoO](this.l11o1O)
};
ooloO = function () {
    return this.plain
};
l000 = function ($) {
    this[ll00] = $
};
ll00l = function () {
    return this[ll00]
};
ll10o = function ($) {
    this[Oolool] = $
};
ollool = function () {
    return this[Oolool]
};
l0OO = function ($) {
    var _ = this.checked != $;
    this.checked = $;
    if ($)this[oll1o0](this.ooOO); else this[ol0OoO](this.ooOO);
    if (_)this[ol1O0]("CheckedChanged")
};
lllOo0 = function () {
    return this.checked
};
loO1oo = function () {
    this.oO0o1l(null)
};
OOl00O = function (D) {
    if (!this.href && D)D.preventDefault();
    if (this[lOlo0] || this.enabled == false)return;
    this[O1loo]();
    if (this[Oolool])if (this[ll00]) {
        var _ = this[ll00], C = mini.findControls(function ($) {
            if ($.type == "button" && $[ll00] == _)return true
        });
        if (C.length > 0) {
            for (var $ = 0, A = C.length; $ < A; $++) {
                var B = C[$];
                if (B != this)B[lOoooO](false)
            }
            this[lOoooO](true)
        } else this[lOoooO](!this.checked)
    } else this[lOoooO](!this.checked);
    this[ol1O0]("click", {htmlEvent: D})
};
O11O = function ($) {
    if (this[o0011o]())return;
    this[oll1o0](this.l0l10l);
    Ol1O(document, "mouseup", this.o0l1l, this)
};
lO0oo = function ($) {
    this[ol0OoO](this.l0l10l);
    lol0Oo(document, "mouseup", this.o0l1l, this)
};
olo00 = function (_, $) {
    this[Ol1oO1]("click", _, $)
};
loolO = function ($) {
    var _ = oolo1O[ollolO][ol1oOl][o1O0l0](this, $);
    _.text = $.innerHTML;
    mini[Ol100O]($, _, ["text", "href", "iconCls", "iconStyle", "iconPosition", "groupName", "menu", "onclick", "oncheckedchanged", "target", "img"]);
    mini[Olo01O]($, _, ["plain", "checkOnClick", "checked"]);
    return _
};
llo1 = function () {
    O0OOol[ollolO][lololl][o1O0l0](this);
    if (mini.isIE && mini_useShims) {
        var $ = "<iframe frameborder='0' style='position:absolute; z-index:-1; width:100%; height:100%; top:0;left:0;scrolling:no;'></iframe>";
        mini.append(this.el, $)
    }
};
lOO1 = function () {
    this.buttons = [];
    var $ = this[OolOo0]({name: "collapse", cls: "mini-tools-collapse", visible: this[oOl0ll]});
    this.buttons.push($);
    var A = this[OolOo0]({name: "min", cls: "mini-tools-min", visible: this[l10lo0]});
    this.buttons.push(A);
    var B = this[OolOo0]({name: "max", cls: "mini-tools-max", visible: this[oo1Ol]});
    this.buttons.push(B);
    var _ = this[OolOo0]({name: "close", cls: "mini-tools-close", visible: this[o0loO]});
    this.buttons.push(_)
};
llOo0 = function () {
    O0OOol[ollolO][lOo101][o1O0l0](this);
    O0o0o0(function () {
        Ol1O(this.el, "mouseover", this.ol0010, this);
        Ol1O(window, "resize", this.loO11o, this);
        Ol1O(this.el, "mousedown", this.oO01, this)
    }, this)
};
O1OlO = function () {
    if (!this[Ooo1oo]())return;
    if (this.state == "max") {
        var $ = this[lO1oo1]();
        this.el.style.left = "0px";
        this.el.style.top = "0px";
        mini.setSize(this.el, $.width, $.height)
    }
    O0OOol[ollolO][l0llOO][o1O0l0](this);
    if (this.allowDrag)l1Oo(this.el, this.lOoOlO);
    if (this.state == "max") {
        this.l1010o.style.display = "none";
        o11o(this.el, this.lOoOlO)
    }
    this.oo0OO()
};
O0o0ol = function () {
    if (!this.el) {
        if (this.l1l1l)mini[oll100](this.l1l1l);
        return
    }
    var _ = this[ol00l0] && this[l0Ooo]() && this.visible;
    if (!this.l1l1l && this[ol00l0] == false) {
        if (this.l1l1l)mini[oll100](this.l1l1l);
        return
    }
    if (!this.l1l1l) {
        var A = "__modal" + this._id, $ = mini_useShims ? "<iframe frameborder='0' style='position:absolute; z-index:-1; width:100%; height:100%; top:0;left:0;scrolling:no;'></iframe>" : "";
        this.l1l1l = mini.append(document.body, "<div id=\"" + A + "\" class=\"mini-modal\" style=\"display:none\">" + $ + "</div>")
    }
    if (_) {
        this.l1l1l.style.display = "block";
        this.l1l1l.style.zIndex = lo11(this.el, "zIndex") - 1
    } else this.l1l1l.style.display = "none"
};
Ol00 = function () {
    var $ = mini.getViewportBox(), _ = this._containerEl || document.body;
    if (_ != document.body)$ = Ol0oO(_);
    return $
};
Ol10O = function ($) {
    this[ol00l0] = $
};
l0o10 = function () {
    return this[ol00l0]
};
l0oOo = function ($) {
    if (isNaN($))return;
    this.minWidth = $
};
l0O01l = function () {
    return this.minWidth
};
lo1ll = function ($) {
    if (isNaN($))return;
    this.minHeight = $
};
ol0oO = function () {
    return this.minHeight
};
OOOl0 = function ($) {
    if (isNaN($))return;
    this.maxWidth = $
};
oO01o = function () {
    return this.maxWidth
};
ll0l1 = function ($) {
    if (isNaN($))return;
    this.maxHeight = $
};
l011O0 = function () {
    return this.maxHeight
};
OooO0 = function ($) {
    this.allowDrag = $;
    o11o(this.el, this.lOoOlO);
    if ($)l1Oo(this.el, this.lOoOlO)
};
Ollo1 = function () {
    return this.allowDrag
};
oO0lO = function ($) {
    this[oo1Ol] = $;
    var _ = this[oloO0]("max");
    if (!_)return;
    _.visible = $;
    this[l1lOO1]()
};
ol1Ol0 = function () {
    return this[oo1Ol]
};
Oll0o = function ($) {
    this[l10lo0] = $;
    var _ = this[oloO0]("min");
    if (!_)return;
    _.visible = $;
    this[l1lOO1]()
};
ololl = function () {
    return this[l10lo0]
};
o001o = function () {
    this.state = "max";
    this[l000ll]();
    var $ = this[oloO0]("max");
    if ($) {
        $.cls = "mini-tools-restore";
        this[l1lOO1]()
    }
};
o1lOl = function () {
    this.state = "restore";
    this[l000ll](this.x, this.y);
    var $ = this[oloO0]("max");
    if ($) {
        $.cls = "mini-tools-max";
        this[l1lOO1]()
    }
};
oo1oo0 = function ($) {
    this.showInBody = $
};
o1OOo = function () {
    return this.showInBody
};
ollllAtPos = function (_, $, A) {
    this[l000ll](_, $, A)
};
ollll = function (B, _, D) {
    this.O1O0lo = false;
    var A = this._containerEl || document.body;
    if (!this[oo1Ooo]() || (this.el.parentNode != A && this.showInBody))this[O1OO10](A);
    this.el.style.zIndex = mini.getMaxZIndex();
    this.oo00O1(B, _);
    this.O1O0lo = true;
    this[lOo0l](true);
    if (this.state != "max") {
        var $ = this[l0O1l0]();
        this.x = $.x;
        this.y = $.y
    }
    try {
        document.body[O1loo]()
    } catch (C) {
    }
};
Oololl = function () {
    this[lOo0l](false);
    this.oo0OO()
};
Oll0O = function () {
    this.OlOl0l.style.width = "50px";
    var $ = lo0o(this.el);
    this.OlOl0l.style.width = "auto";
    return $
};
lOOoO = function () {
    this.OlOl0l.style.width = "50px";
    this.el.style.display = "";
    var $ = lo0o(this.el);
    this.OlOl0l.style.width = "auto";
    var _ = Ol0oO(this.el);
    _.width = $;
    _.right = _.x + $;
    return _
};
lo10l = function () {
    this.el.style.display = "";
    var $ = this[l0O1l0]();
    if ($.width > this.maxWidth) {
        lOool0(this.el, this.maxWidth);
        $ = this[l0O1l0]()
    }
    if ($.height > this.maxHeight) {
        l10o(this.el, this.maxHeight);
        $ = this[l0O1l0]()
    }
    if ($.width < this.minWidth) {
        lOool0(this.el, this.minWidth);
        $ = this[l0O1l0]()
    }
    if ($.height < this.minHeight) {
        l10o(this.el, this.minHeight);
        $ = this[l0O1l0]()
    }
};
lO0O1 = function (B, A) {
    var _ = this[lO1oo1]();
    if (this.state == "max") {
        if (!this._width) {
            var $ = this[l0O1l0]();
            this._width = $.width;
            if (this.expanded)this._height = $.height;
            this.x = $.x;
            this.y = $.y
        }
        this.el.style.left = "-10000px";
        this.el.style.top = "-10000px"
    } else {
        if (mini.isNull(B))B = "center";
        if (mini.isNull(A))A = "middle";
        this.el.style.position = "absolute";
        this.el.style.left = "-2000px";
        this.el.style.top = "-2000px";
        this.el.style.display = "";
        if (this._width) {
            this[oll0OO](this._width);
            this[lOll1l](this._height);
            delete this._width;
            delete this._height
        }
        this.olO1();
        $ = this[l0O1l0]();
        if (B == "left")B = 0;
        if (B == "center")B = _.width / 2 - $.width / 2;
        if (B == "right")B = _.width - $.width;
        if (A == "top")A = 0;
        if (A == "middle")A = _.y + _.height / 2 - $.height / 2;
        if (A == "bottom")A = _.height - $.height;
        if (B + $.width > _.right)B = _.right - $.width;
        if (A + $.height > _.bottom)A = _.bottom - $.height;
        if (B < 0)B = 0;
        if (A < 0)A = 0;
        this.el.style.display = "";
        mini.setX(this.el, B);
        mini.setY(this.el, A)
    }
    this[l0llOO]()
};
o0100 = function (_, $) {
    var A = O0OOol[ollolO].lO0o[o1O0l0](this, _, $);
    if (A.cancel == true)return A;
    if (A.name == "max")if (this.state == "max")this[Oo0oO](); else this[O0OOO]();
    return A
};
O0lo = function ($) {
    if (this.state == "max")this[l0llOO]();
    if (!mini.isIE6)this.oo0OO()
};
lOll = function ($) {
    this.enableDragProxy = $
};
l00l1 = function ($) {
    return this.enableDragProxy
};
lOOl0O = function ($) {
    this.allowCrossBottom = $
};
OOO011 = function () {
    return this.allowCrossBottom
};
o1o11O = function (B) {
    var _ = this;
    if (this.state != "max" && this.allowDrag && Ol0O(this.OlOl0l, B.target) && !ol000(B.target, "mini-tools")) {
        _ = this;
        if (this.el)this.el.style.zIndex = mini.getMaxZIndex();
        var A = this[l0O1l0](), $ = new mini.Drag({
            capture: false, onStart: function () {
                _.oOOoOl = mini.append(document.body, "<div class=\"mini-resizer-mask\" style=\"\"></div>");
                if (_.enableDragProxy) {
                    _.olooO0 = mini.append(document.body, "<div class=\"mini-drag-proxy\"></div>");
                    _.el.style.left = "-2000px";
                    _.el.style.top = "-2000px"
                } else _.olooO0 = _.el;
                var $ = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
                setTimeout(function () {
                    mini[oll100]($)
                }, 300)
            }, onMove: function (B) {
                var F = B.now[0] - B.init[0], E = B.now[1] - B.init[1];
                F = A.x + F;
                E = A.y + E;
                var D = _[lO1oo1](), $ = F + A.width, C = E + A.height;
                if ($ > D.width)F = D.width - A.width;
                if (!_.allowCrossBottom)if (C > D.height)E = D.height - A.height;
                if (F < 0)F = 0;
                if (E < 0)E = 0;
                _.x = F;
                _.y = E;
                var G = {x: F, y: E, width: A.width, height: A.height};
                oool(_.olooO0, G);
                this.moved = true
            }, onStop: function () {
                if (_.el) {
                    _.el.style.display = "block";
                    if (this.moved) {
                        var $ = Ol0oO(_.olooO0);
                        oool(_.el, $)
                    }
                }
                jQuery(_.oOOoOl).remove();
                _.oOOoOl = null;
                if (_.enableDragProxy)jQuery(_.olooO0).remove();
                _.olooO0 = null
            }
        });
        $.start(B)
    }
};
oo0oo1 = function ($) {
    lol0Oo(window, "resize", this.loO11o, this);
    if (this.l1l1l) {
        jQuery(this.l1l1l).remove();
        this.l1l1l = null
    }
    if (this.shadowEl) {
        jQuery(this.shadowEl).remove();
        this.shadowEl = null
    }
    var _ = "__modal" + this._id;
    jQuery("[id='" + _ + "']").remove();
    O0OOol[ollolO][l0lOl][o1O0l0](this, $)
};
ll1ol = function ($) {
    var _ = O0OOol[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["modalStyle"]);
    mini[Olo01O]($, _, ["showModal", "showShadow", "allowDrag", "allowResize", "showMaxButton", "showMinButton", "showInBody", "enableDragProxy", "allowCrossBottom"]);
    mini[oOOl00]($, _, ["minWidth", "minHeight", "maxWidth", "maxHeight"]);
    return _
};
OO00 = function (H, D) {
    H = o0OO(H);
    if (!H)return;
    if (!this[oo1Ooo]() || this.el.parentNode != document.body)this[O1OO10](document.body);
    var A = {xAlign: this.xAlign, yAlign: this.yAlign, xOffset: 0, yOffset: 0, popupCls: this.popupCls};
    mini.copyTo(A, D);
    this._popupEl = H;
    this.el.style.position = "absolute";
    this.el.style.left = "-2000px";
    this.el.style.top = "-2000px";
    this.el.style.display = "";
    this[l0llOO]();
    this.olO1();
    var J = mini.getViewportBox(), B = this[l0O1l0](), L = Ol0oO(H), F = A.xy, C = A.xAlign, E = A.yAlign, M = J.width / 2 - B.width / 2, K = 0;
    if (F) {
        M = F[0];
        K = F[1]
    }
    switch (A.xAlign) {
        case"outleft":
            M = L.x - B.width;
            break;
        case"left":
            M = L.x;
            break;
        case"center":
            M = L.x + L.width / 2 - B.width / 2;
            break;
        case"right":
            M = L.right - B.width;
            break;
        case"outright":
            M = L.right;
            break;
        default:
            break
    }
    switch (A.yAlign) {
        case"above":
            K = L.y - B.height;
            break;
        case"top":
            K = L.y;
            break;
        case"middle":
            K = L.y + L.height / 2 - B.height / 2;
            break;
        case"bottom":
            K = L.bottom - B.height;
            break;
        case"below":
            K = L.bottom;
            break;
        default:
            break
    }
    M = parseInt(M);
    K = parseInt(K);
    if (A.outYAlign || A.outXAlign) {
        if (A.outYAlign == "above")if (K + B.height > J.bottom) {
            var _ = L.y - J.y, I = J.bottom - L.bottom;
            if (_ > I)K = L.y - B.height
        }
        if (A.outXAlign == "outleft")if (M + B.width > J.right) {
            var G = L.x - J.x, $ = J.right - L.right;
            if (G > $)M = L.x - B.width
        }
        if (A.outXAlign == "right")if (M + B.width > J.right)M = L.right - B.width;
        this.l1o1Oo(M, K)
    } else this[lOOOo1](M + A.xOffset, K + A.yOffset)
};
o1Ol1 = function ($) {
    if (this.grid) {
        this.grid[l0o1lo]("rowclick", this.__OnGridRowClickChanged, this);
        this.grid[l0o1lo]("load", this.OO10, this);
        this.grid[l0o1lo]("checkall", this.__OnGridRowClickChanged, this);
        this.grid = null
    }
    lllo1o[ollolO][l0lOl][o1O0l0](this, $)
};
lO0lo = function ($) {
    this[O0o1ol] = $;
    if (this.grid)this.grid[Olol1o]($)
};
o1Oo = function ($) {
    if (typeof $ == "string") {
        mini.parse($);
        $ = mini.get($)
    }
    this.grid = mini.getAndCreate($);
    if (this.grid) {
        this.grid[Olol1o](this[O0o1ol]);
        this.grid[lo01oo](false);
        this.grid[Ol1oO1]("rowclick", this.__OnGridRowClickChanged, this);
        this.grid[Ol1oO1]("load", this.OO10, this);
        this.grid[Ol1oO1]("checkall", this.__OnGridRowClickChanged, this)
    }
};
o00llO = function () {
    return this.grid
};
lO1llField = function ($) {
    this[O01oll] = $
};
OOol1 = function () {
    return this[O01oll]
};
ol1lField = function ($) {
    this[l1ol1O] = $
};
l110o = function () {
    return this[l1ol1O]
};
OlOOo = function () {
    this.data = [];
    this[ll10OO]("");
    this[l0O0O0]("");
    if (this.grid)this.grid[OOo10]()
};
O0l1Ol = function ($) {
    return String($[this.valueField])
};
l0l0l = function ($) {
    var _ = $[this.textField];
    return mini.isNull(_) ? "" : String(_)
};
l10OlO = function (A) {
    if (mini.isNull(A))A = [];
    var B = [], C = [];
    for (var _ = 0, D = A.length; _ < D; _++) {
        var $ = A[_];
        if ($) {
            B.push(this[OO01O0]($));
            C.push(this[OO101]($))
        }
    }
    return [B.join(this.delimiter), C.join(this.delimiter)]
};
o0lOl = function () {
    this.value = mini.isNull(this.value) ? "" : String(this.value);
    this.text = mini.isNull(this.text) ? "" : String(this.text);
    var D = [], C = this.value.split(this.delimiter), E = this.text.split(this.delimiter), $ = C.length;
    if (this.value)for (var _ = 0, F = $; _ < F; _++) {
        var B = {}, G = C[_], A = E[_];
        B[this.valueField] = G ? G : "";
        B[this.textField] = A ? A : "";
        D.push(B)
    }
    this.data = D
};
ll1ll = function (A) {
    var D = {};
    for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$], C = _[this.valueField];
        D[C] = _
    }
    return D
};
lO1ll = function ($) {
    lllo1o[ollolO][ll10OO][o1O0l0](this, $);
    this.lloo()
};
ol1l = function ($) {
    lllo1o[ollolO][l0O0O0][o1O0l0](this, $);
    this.lloo()
};
ll0lo1 = function (G) {
    var B = this.OO1l(this.grid[ll1oO1]()), C = this.OO1l(this.grid[l0OoO0]()), F = this.OO1l(this.data);
    if (this[O0o1ol] == false) {
        F = {};
        this.data = []
    }
    var A = {};
    for (var E in F) {
        var $ = F[E];
        if (B[E])if (C[E]); else A[E] = $
    }
    for (var _ = this.data.length - 1; _ >= 0; _--) {
        $ = this.data[_], E = $[this.valueField];
        if (A[E])this.data.removeAt(_)
    }
    for (E in C) {
        $ = C[E];
        if (!F[E])this.data.push($)
    }
    var D = this.Oool0(this.data);
    this[ll10OO](D[0]);
    this[l0O0O0](D[1]);
    this.OOoOO()
};
llOo1 = function ($) {
    this[olO00o]($)
};
oo0lll = function (H) {
    var C = String(this.value).split(this.delimiter), F = {};
    for (var $ = 0, D = C.length; $ < D; $++) {
        var G = C[$];
        F[G] = 1
    }
    var A = this.grid[ll1oO1](), B = [];
    for ($ = 0, D = A.length; $ < D; $++) {
        var _ = A[$], E = _[this.valueField];
        if (F[E])B.push(_)
    }
    this.grid[oo1o](B)
};
lOOlO = function () {
    lllo1o[ollolO][l0loO0][o1O0l0](this);
    this._textEl[lOlo0] = true;
    this.el.style.cursor = "default"
};
lO00O = function ($) {
    lllo1o[ollolO].lllO[o1O0l0](this, $);
    switch ($.keyCode) {
        case 46:
        case 8:
            break;
        case 37:
            break;
        case 39:
            break
    }
};
loOo11 = function (C) {
    if (this[o0011o]())return;
    var _ = mini.getSelectRange(this._textEl), A = _[0], B = _[1], $ = this.oo10(A)
};
lo1o0l = function (E) {
    var _ = -1;
    if (this.text == "")return _;
    var C = String(this.text).split(this.delimiter), $ = 0;
    for (var A = 0, D = C.length; A < D; A++) {
        var B = C[A];
        if ($ < E && E <= $ + B.length) {
            _ = A;
            break
        }
        $ = $ + B.length + 1
    }
    return _
};
Ooll = function ($) {
    var _ = lllo1o[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["grid", "valueField", "textField"]);
    mini[Olo01O]($, _, ["multiSelect"]);
    return _
};
Ooo0O = function () {
    this.el = document.createElement("div")
};
OlO0 = function () {
};
lo0O = function ($) {
    if (Ol0O(this.el, $.target))return true;
    return false
};
O0ol0 = function ($) {
    this.name = $
};
oOOlO0 = function () {
    return this.name
};
loo0l = function () {
    var $ = this.el.style.height;
    return $ == "auto" || $ == ""
};
lO1oo = function () {
    var $ = this.el.style.width;
    return $ == "auto" || $ == ""
};
o1o0 = function () {
    var $ = this.width, _ = this.height;
    if (parseInt($) + "px" == $ && parseInt(_) + "px" == _)return true;
    return false
};
Oo01oO = function ($) {
    return !!(this.el && this.el.parentNode && this.el.parentNode.tagName)
};
l0OlO0 = function (_, $) {
    if (typeof _ === "string")if (_ == "#body")_ = document.body; else _ = o0OO(_);
    if (!_)return;
    if (!$)$ = "append";
    $ = $.toLowerCase();
    if ($ == "before")jQuery(_).before(this.el); else if ($ == "preend")jQuery(_).preend(this.el); else if ($ == "after")jQuery(_).after(this.el); else _.appendChild(this.el);
    this.el.id = this.id;
    this[l0llOO]();
    this[ol1O0]("render")
};
ooOoo0 = function () {
    return this.el
};
oO10O = function ($) {
    this[oOo1O] = $;
    window[$] = this
};
loOo = function () {
    return this[oOo1O]
};
lOll1 = function ($) {
    this.tooltip = $;
    this.el.title = $;
    if (this.tooltipPlacement)jQuery(this.el).attr("data-placement", this.tooltipPlacement)
};
O10O1 = function () {
    return this.tooltip
};
llO0O = function () {
    this[l0llOO]()
};
o0lo = function ($) {
    if (parseInt($) == $)$ += "px";
    this.width = $;
    this.el.style.width = $;
    this[Ol1o10]()
};
l1l1lo = function (A) {
    var _ = this.el, $ = A ? jQuery(_).width() : jQuery(_).outerWidth();
    if (A && this._borderEl) {
        var B = olO0(this._borderEl);
        $ = $ - B.left - B.right
    }
    return $
};
OloOOo = function ($) {
    if (parseInt($) == $)$ += "px";
    this.height = $;
    this.el.style.height = $;
    this[Ol1o10]()
};
olOoo = function (_) {
    var $ = _ ? jQuery(this.el).height() : jQuery(this.el).outerHeight();
    if (_ && this._borderEl) {
        var A = olO0(this._borderEl);
        $ = $ - A.top - A.bottom
    }
    return $
};
lOoOl = function () {
    return Ol0oO(this.el)
};
lO101 = function ($) {
    var _ = this._borderEl || this.el;
    lO01l(_, $);
    this[l0llOO]()
};
oO01l = function () {
    return this[O0l0lo]
};
OO00oo = function ($) {
    this.style = $;
    lO01l(this.el, $);
    if (this._clearBorder) {
        this.el.style.borderWidth = "0";
        this.el.style.padding = "0px"
    }
    this.width = this.el.style.width;
    this.height = this.el.style.height;
    this[Ol1o10]()
};
OlloO = function () {
    return this.style
};
l0o1ll = function ($) {
    this[oll1o0]($)
};
llo10 = function () {
    return this.cls
};
olooo = function ($) {
    l1Oo(this.el, $)
};
ol01o = function ($) {
    o11o(this.el, $)
};
O10l0 = function () {
    if (this[lOlo0])this[oll1o0](this.O00Ol); else this[ol0OoO](this.O00Ol)
};
Ooll0 = function ($) {
    this[lOlo0] = $;
    this[l11OOO]()
};
o1lll = function () {
    return this[lOlo0]
};
l1o0 = function (A) {
    var $ = document, B = this.el.parentNode;
    while (B != $ && B != null) {
        var _ = mini.get(B);
        if (_) {
            if (!mini.isControl(_))return null;
            if (!A || _.uiCls == A)return _
        }
        B = B.parentNode
    }
    return null
};
lOl1 = function () {
    if (this[lOlo0] || !this.enabled)return true;
    var $ = this[llo0lo]();
    if ($)return $[o0011o]();
    return false
};
o1l01O = function ($) {
    this.enabled = $;
    if (this.enabled)this[ol0OoO](this.Oloo); else this[oll1o0](this.Oloo);
    this[l11OOO]()
};
lO0OO = function () {
    return this.enabled
};
oOlO = function () {
    this[ool1ll](true)
};
O0o0l = function () {
    this[ool1ll](false)
};
ol0ll = function ($) {
    this.visible = $;
    if (this.el) {
        this.el.style.display = $ ? this.OoOoo1 : "none";
        this[l0llOO]()
    }
};
lO1O1 = function () {
    return this.visible
};
olo1o = function () {
    this[lOo0l](true)
};
o0OO0o = function () {
    this[lOo0l](false)
};
oo101o = function (_) {
    if (Ol01o == false || !this.el)return false;
    var $ = document.body, A = this.el;
    while (1) {
        if (A == null || !A.style)return false;
        if (A && A.style && A.style.display == "none")if (_) {
            if (_(A) !== true)return false
        } else return false;
        if (A == $)return true;
        A = A.parentNode
    }
    return true
};
o0l10 = function () {
    this.Olol = false
};
O1o0o = function () {
    this.Olol = true;
    this[l0loO0]()
};
lOol1 = function () {
};
oOo0Oo = function () {
    if (!mini.enableLayout)return false;
    if (this.O1O0lo == false)return false;
    return this[l0Ooo]()
};
loOO = function () {
};
lo0oO = function () {
    if (this[Ooo1oo]() == false)return;
    this[l0llOO]()
};
o1l1 = function (B) {
    if (this.el) {
        var A = mini.getChildControls(this);
        for (var $ = 0, C = A.length; $ < C; $++) {
            var _ = A[$];
            if (_.destroyed !== true)_[l0lOl](B)
        }
    }
};
lOO0o = function (_) {
    if (this.destroyed !== true)this[Olo110](_);
    if (this.el) {
        var $ = this.el;
        $.onclick = $.ondblclick = $.onmousedown = $.onmouseup = $.onmousemove = $.onmouseover = $.onmouseout = $.onkeydown = $.onkeyup = $.oncontextmenu = null;
        mini[o11l00]($);
        if (_ !== false)mini[oll100]($)
    }
    this._borderEl = this._contentEl = this.l0o0o0 = this._textEl = this.ll001O = null;
    this.el = null;
    mini["unreg"](this);
    this.destroyed = true;
    this[ol1O0]("destroy")
};
o1O0 = function () {
    try {
        var $ = this;
        $.el[O1loo]()
    } catch (_) {
    }
};
OOO1O = function () {
    try {
        var $ = this;
        $.el[O0llO0]()
    } catch (_) {
    }
};
lOolO1 = function ($) {
    this.allowAnim = $
};
OOo1l1 = function () {
    return this.allowAnim
};
oOoo = function () {
    return this.el
};
ol1O = function ($) {
    if (typeof $ == "string")$ = {html: $};
    $ = $ || {};
    $.el = this.O010Ol();
    if (!$.cls)$.cls = this.oo1o0l;
    mini[lOO0O0]($)
};
oOo0l = function () {
    mini[oolo1o](this.O010Ol());
    this.isLoading = false
};
lo11o = function ($) {
    this[lOO0O0]($ || this.loadingMsg)
};
l1lol = function ($) {
    this.loadingMsg = $
};
lll00O = function () {
    return this.loadingMsg
};
oloOo = function ($) {
    var _ = $;
    if (typeof $ == "string") {
        _ = mini.get($);
        if (!_) {
            mini.parse($);
            _ = mini.get($)
        }
    } else if (mini.isArray($))_ = {type: "menu", items: $}; else if (!mini.isControl($))_ = mini.create($);
    return _
};
loOO1 = function (_) {
    var $ = {popupEl: this.el, htmlEvent: _, cancel: false};
    this[o00O1o][ol1O0]("BeforeOpen", $);
    if ($.cancel == true)return;
    this[o00O1o][ol1O0]("opening", $);
    if ($.cancel == true)return;
    this[o00O1o][lOOOo1](_.pageX, _.pageY);
    this[o00O1o][ol1O0]("Open", $);
    return false
};
lllO0 = function ($) {
    var _ = this.Ooo0($);
    if (!_)return;
    if (this[o00O1o] !== _) {
        this[o00O1o] = _;
        this[o00O1o].owner = this;
        Ol1O(this.el, "contextmenu", this.O101, this)
    }
};
O01O1 = function () {
    return this[o00O1o]
};
lOl0oo = function ($) {
    this[o0lo0O] = $
};
o0l00O = function () {
    return this[o0lo0O]
};
olO0o = function ($) {
    this.value = $
};
O0ooO = function () {
    return this.value
};
lo00O = function ($) {
    this.ajaxData = $
};
O1ooo = function () {
    return this.ajaxData
};
o1O01 = function ($) {
    this.ajaxType = $
};
ll0l = function () {
    return this.ajaxType
};
O1Oo0 = function ($) {
};
Oo00o = function ($) {
    this.dataField = $
};
o011ll = function () {
    return this.dataField
};
Ooollo = function ($) {
    var _ = this._textEl || this.el;
    _.tabIndex = $;
    this.tabIndex = $
};
o111l = function () {
    return this.tabIndex
};
O00l = function (el) {
    var attrs = {}, cls = el.className;
    if (cls)attrs.cls = cls;
    if (el.value)attrs.value = el.value;
    mini[Ol100O](el, attrs, ["id", "name", "width", "height", "borderStyle", "value", "defaultValue", "tabIndex", "contextMenu", "tooltip", "ondestroy", "data-options", "ajaxData", "ajaxType", "dataField", "ajaxOptions", "data-placement"]);
    if (attrs["data-placement"])this.tooltipPlacement = attrs["data-placement"];
    mini[Olo01O](el, attrs, ["visible", "enabled", "readOnly"]);
    if (el[lOlo0] && el[lOlo0] != "false")attrs[lOlo0] = true;
    var style = el.style.cssText;
    if (style)attrs.style = style;
    if (isIE9) {
        var bg = el.style.background;
        if (bg) {
            if (!attrs.style)attrs.style = "";
            attrs.style += ";background:" + bg
        }
    }
    if (this.style)if (attrs.style)attrs.style = this.style + ";" + attrs.style; else attrs.style = this.style;
    if (this[O0l0lo])if (attrs[O0l0lo])attrs[O0l0lo] = this[O0l0lo] + ";" + attrs[O0l0lo]; else attrs[O0l0lo] = this[O0l0lo];
    if (typeof attrs.ajaxOptions == "string")attrs.ajaxOptions = eval("(" + attrs.ajaxOptions + ")");
    var ts = mini._attrs;
    if (ts)for (var i = 0, l = ts.length; i < l; i++) {
        var t = ts[i], name = t[0], type = t[1];
        if (!type)type = "string";
        if (type == "string")mini[Ol100O](el, attrs, [name]); else if (type == "bool")mini[Olo01O](el, attrs, [name]); else if (type == "int")mini[oOOl00](el, attrs, [name])
    }
    var options = attrs["data-options"];
    if (options) {
        options = eval("(" + options + ")");
        if (options)mini.copyTo(attrs, options)
    }
    return attrs
};
looO0 = function (_, $) {
    if (!_ || !$)return;
    this._sources[_] = $;
    this._data[_] = [];
    $[OOooO0](true);
    $._setl1o10($[Oll1o]());
    $._setl101l(false);
    $[Ol1oO1]("addrow", this.Ool0, this);
    $[Ol1oO1]("updaterow", this.Ool0, this);
    $[Ol1oO1]("deleterow", this.Ool0, this);
    $[Ol1oO1]("removerow", this.Ool0, this);
    $[Ol1oO1]("preload", this.O0Ooo, this);
    $[Ol1oO1]("selectionchanged", this.__OnDataSelectionChanged, this)
};
oOOOo = function (B, _, $) {
    if (!B || !_ || !$)return;
    if (!this._sources[B] || !this._sources[_])return;
    var A = {parentName: B, childName: _, parentField: $};
    this._links.push(A)
};
oO0l1 = function () {
    this._data = {};
    this.l0110o = {};
    for (var $ in this._sources)this._data = []
};
oO10ol = function () {
    return this._data
};
lO0oO = function ($) {
    for (var A in this._sources) {
        var _ = this._sources[A];
        if (_ == $)return A
    }
};
ol1Ool = function (E, _, D) {
    var B = this._data[E];
    if (!B)return false;
    for (var $ = 0, C = B.length; $ < C; $++) {
        var A = B[$];
        if (A[D] == _[D])return A
    }
    return null
};
oOooO = function (F) {
    var C = F.type, _ = F.record, D = this.Ol1l(F.sender), E = this.l00OlO(D, _, F.sender[Oll1o]()), A = this._data[D];
    if (E) {
        A = this._data[D];
        A.remove(E)
    }
    if (C == "removerow" && _._state == "added"); else A.push(_);
    this.l0110o[D] = F.sender._getl0110o();
    if (_._state == "added") {
        var $ = this.ol1o0o(F.sender);
        if ($) {
            var B = $[o1lo1l]();
            if (B)_._parentId = B[$[Oll1o]()]; else A.remove(_)
        }
    }
};
llOlO = function (M) {
    var J = M.sender, L = this.Ol1l(J), K = M.sender[Oll1o](), A = this._data[L], $ = {};
    for (var F = 0, C = A.length; F < C; F++) {
        var G = A[F];
        $[G[K]] = G
    }
    var N = this.l0110o[L];
    if (N)J._setl0110o(N);
    var I = M.data || [];
    for (F = 0, C = I.length; F < C; F++) {
        var G = I[F], H = $[G[K]];
        if (H) {
            delete H._uid;
            mini.copyTo(G, H)
        }
    }
    var D = this.ol1o0o(J);
    if (J[Oooo1O] && J[Oooo1O]() == 0) {
        var E = [];
        for (F = 0, C = A.length; F < C; F++) {
            G = A[F];
            if (G._state == "added")if (D) {
                var B = D[o1lo1l]();
                if (B && B[D[Oll1o]()] == G._parentId)E.push(G)
            } else E.push(G)
        }
        E.reverse();
        I.insertRange(0, E)
    }
    var _ = [];
    for (F = I.length - 1; F >= 0; F--) {
        G = I[F], H = $[G[K]];
        if (H && H._state == "removed") {
            I.removeAt(F);
            _.push(H)
        }
    }
};
o10l = function (C) {
    var _ = this.Ol1l(C);
    for (var $ = 0, B = this._links.length; $ < B; $++) {
        var A = this._links[$];
        if (A.childName == _)return this._sources[A.parentName]
    }
};
oo11l = function (B) {
    var C = this.Ol1l(B), D = [];
    for (var $ = 0, A = this._links.length; $ < A; $++) {
        var _ = this._links[$];
        if (_.parentName == C)D.push(_)
    }
    return D
};
Oo1ll = function (G) {
    var A = G.sender, _ = A[o1lo1l](), F = this.lOO0l(A);
    for (var $ = 0, E = F.length; $ < E; $++) {
        var D = F[$], C = this._sources[D.childName];
        if (_) {
            var B = {};
            B[D.parentField] = _[A[Oll1o]()];
            C[looOlo](B)
        } else C[OOo10l]([])
    }
};
o1ooo = function () {
    var $ = "<input  type=\"" + this.llOl + "\" class=\"mini-textbox-input\" autocomplete=\"off\"/>";
    if (this.llOl == "textarea")$ = "<textarea  class=\"mini-textbox-input\" autocomplete=\"off\"/></textarea>";
    $ = "<span class=\"mini-textbox-border\">" + $ + "</span>";
    $ += "<input type=\"hidden\"/>";
    this.el = document.createElement("span");
    this.el.className = "mini-textbox";
    this.el.innerHTML = $;
    this._borderEl = this.el.firstChild;
    this._textEl = this._borderEl.firstChild;
    this.l0o0o0 = this._borderEl.lastChild;
    this.o00o01()
};
ll0ll1 = function () {
    O0o0o0(function () {
        o1l0lo(this._textEl, "drop", this.l1o0ol, this);
        o1l0lo(this._textEl, "change", this.O0lloo, this);
        o1l0lo(this._textEl, "focus", this.ol0lo0, this);
        o1l0lo(this.el, "mousedown", this.Ol0l, this);
        var $ = this.value;
        this.value = null;
        if (this.el)this[ll10OO]($)
    }, this);
    this[Ol1oO1]("validation", this.ll0oO, this)
};
lOlll = function () {
    if (this.oolo)return;
    this.oolo = true;
    Ol1O(this._textEl, "blur", this.l0O01o, this);
    Ol1O(this._textEl, "keydown", this.lllO, this);
    Ol1O(this._textEl, "keyup", this.lOOlo, this);
    Ol1O(this._textEl, "keypress", this.l1OO, this);
    o1l0lo(this.el, "click", this.oO0o1l, this)
};
ooOOll = function (_) {
    if (this.el)this.el.onmousedown = null;
    if (this._textEl) {
        var $ = this._textEl;
        if ($._placeholder_label) {
            $._placeholder_label.onmousedown = null;
            $._placeholder_label = null
        }
        $.onpropertychange = $.ondrop = $.onchange = $.onfocus = null;
        mini[o11l00]($);
        this._textEl = null
    }
    if (this.l0o0o0) {
        mini[o11l00](this.l0o0o0);
        this.l0o0o0 = null
    }
    l0oOoo[ollolO][l0lOl][o1O0l0](this, _)
};
lo000 = function () {
    if (this._doLabelLayout)this[lolll]()
};
oO0l0l = function ($) {
    if (parseInt($) == $)$ += "px";
    this.height = $;
    if (this.llOl == "textarea") {
        this.el.style.height = $;
        this[l0llOO]()
    }
};
ll1l = function ($) {
    if (this.name != $) {
        this.name = $;
        if (this.l0o0o0)mini.setAttr(this.l0o0o0, "name", this.name)
    }
};
ooO1lO = function ($) {
    if ($ === null || $ === undefined)$ = "";
    $ = String($);
    if ($.length > this.maxLength)$ = $.substring(0, this.maxLength);
    if (this.value !== $) {
        this.value = $;
        this.l0o0o0.value = this._textEl.value = $;
        this.o00o01()
    }
};
O0oOll = function () {
    return this.value
};
OloO = function () {
    var $ = this.value;
    if ($ === null || $ === undefined)$ = "";
    return String($)
};
ooo1l0 = function ($) {
    if (this.allowInput != $) {
        this.allowInput = $;
        this[l0loO0]()
    }
};
OOooO = function () {
    return this.allowInput
};
lOOll = function () {
    this._textEl.placeholder = this[o0oOOO];
    if (this[o0oOOO])lOO0O(this._textEl)
};
loOlO = function ($) {
    if (this[o0oOOO] != $) {
        this[o0oOOO] = $;
        this.o00o01()
    }
};
ll011 = function () {
    return this[o0oOOO]
};
O1OloO = function ($) {
    this.maxLength = $;
    mini.setAttr(this._textEl, "maxLength", $);
    if (this.llOl == "textarea" && mini.isIE) {
        Ol1O(this._textEl, "keyup", this.Ol11, this);
        Ol1O(this._textEl, "keypress", this.Ol11, this);
        Ol1O(this._textEl, "paste", this.__OnPaste, this)
    }
};
OlOO = function (_) {
    var $ = this;
    setTimeout(function () {
        var _ = $._textEl.value;
        if (_.length > $.maxLength)$._textEl.value = _.substring(0, $.maxLength);
        $.O0lloo()
    }, 0)
};
Ol110 = function ($) {
    if (this._textEl.value.length >= this.maxLength) {
        this[o00llo]($);
        $.preventDefault()
    }
};
o1oO1 = function () {
    return this.maxLength
};
OlO1l = function ($) {
    if (this[lOlo0] != $) {
        this[lOlo0] = $;
        this[l0loO0]()
    }
};
lOll0 = function ($) {
    if (this.enabled != $) {
        this.enabled = $;
        this[l0loO0]()
    }
};
O1o0 = function () {
    if (this.enabled)this[ol0OoO](this.Oloo); else this[oll1o0](this.Oloo);
    if (this[o0011o]() || this.allowInput == false) {
        this._textEl[lOlo0] = true;
        l1Oo(this.el, "mini-textbox-readOnly")
    } else {
        this._textEl[lOlo0] = false;
        o11o(this.el, "mini-textbox-readOnly")
    }
    if (this.required)this[oll1o0](this.oo11O); else this[ol0OoO](this.oo11O);
    if (this.enabled)this._textEl.disabled = false; else this._textEl.disabled = true
};
oo1l0 = function () {
    var $ = this;
    setTimeout(function () {
        try {
            $._textEl[O1loo]();
            if (mini.isIE) {
                var _ = $._textEl.createTextRange();
                _[lO0o11](false);
                _[lOol1O]()
            }
        } catch (A) {
        }
    }, 10)
};
o0O0l = function () {
    try {
        this._textEl[O0llO0]()
    } catch ($) {
    }
};
O1loO = function () {
    var _ = this;

    function $() {
        try {
            _._textEl[lOol1O]()
        } catch ($) {
        }
    }

    $()
};
lO1l = function () {
    return this._textEl
};
lOllol = function () {
    return this._textEl.value
};
olll = function ($) {
    this.selectOnFocus = $
};
Ol1Ol = function ($) {
    return this.selectOnFocus
};
l1oo1 = function () {
    if (!this.ll001O)this.ll001O = mini.append(this.el, "<span class=\"mini-errorIcon\"></span>");
    return this.ll001O
};
oo110 = function () {
    if (this.ll001O) {
        var $ = this.ll001O;
        jQuery($).remove()
    }
    this.ll001O = null
};
oO1o1 = function ($) {
    if (!this.enabled)return;
    this[ol1O0]("click", {htmlEvent: $})
};
O1o0O = function (_) {
    var $ = this;
    if (!Ol0O(this._textEl, _.target))setTimeout(function () {
        $[O1loo]();
        mini.selectRange($._textEl, 1000, 1000)
    }, 1); else setTimeout(function () {
        try {
            $._textEl[O1loo]()
        } catch (_) {
        }
    }, 1)
};
O011 = function (A, _) {
    var $ = this.value;
    this[ll10OO](this._textEl.value);
    if ($ !== this[o1oOl]() || _ === true)this.OOoOO()
};
O1lO1 = function (_) {
    var $ = this;
    setTimeout(function () {
        $.O0lloo(_)
    }, 0)
};
o01oOl = function (A) {
    var _ = {htmlEvent: A};
    this[ol1O0]("keydown", _);
    if (A.keyCode == 8 && (this[o0011o]() || this.allowInput == false))return false;
    if (A.keyCode == 27 || A.keyCode == 13 || A.keyCode == 9)if (this.llOl == "textarea" && A.keyCode == 13); else {
        this.O0lloo(null);
        if (A.keyCode == 13) {
            var $ = this;
            $[ol1O0]("enter", _)
        }
    }
    if (A.keyCode == 27)A.preventDefault()
};
l1oll = function ($) {
    this[ol1O0]("keyup", {htmlEvent: $})
};
oO1OO = function ($) {
    this[ol1O0]("keypress", {htmlEvent: $})
};
ooo01 = function (_) {
    this[l0loO0]();
    if (this[o0011o]())return;
    this.O1OO00 = true;
    this[oll1o0](this.o101);
    this.o00lo();
    if (this.selectOnFocus) {
        var $ = this;
        setTimeout(function () {
            $[oOOOOo]()
        }, 1)
    }
    this[ol1O0]("focus", {htmlEvent: _})
};
ooo1O = function (_) {
    this.O1OO00 = false;
    var $ = this;
    setTimeout(function () {
        if ($.O1OO00 == false)$[ol0OoO]($.o101)
    }, 2);
    this[ol1O0]("blur", {htmlEvent: _});
    if (this.validateOnLeave && this[OoOOol]())this[llo100]()
};
o0Oo1 = function ($) {
    this.inputStyle = $;
    lO01l(this._textEl, $)
};
oo0O1 = function ($) {
    var A = l0oOoo[ollolO][ol1oOl][o1O0l0](this, $), _ = jQuery($);
    mini[Ol100O]($, A, ["value", "text", "emptyText", "inputStyle", "onenter", "onkeydown", "onkeyup", "onkeypress", "onclick", "maxLengthErrorText", "minLengthErrorText", "onfocus", "onblur", "vtype", "emailErrorText", "urlErrorText", "floatErrorText", "intErrorText", "dateErrorText", "minErrorText", "maxErrorText", "rangeLengthErrorText", "rangeErrorText", "rangeCharErrorText"]);
    mini[Olo01O]($, A, ["allowInput", "selectOnFocus"]);
    mini[oOOl00]($, A, ["maxLength", "minLength", "minHeight", "minWidth"]);
    return A
};
loOO0 = function ($) {
    this.vtype = $
};
O0oo0o = function () {
    return this.vtype
};
l1o1o = function ($) {
    if ($[o0Ol0l] == false)return;
    mini.O0l0O(this.vtype, $.value, $, this)
};
oO111 = function ($) {
    this.emailErrorText = $
};
O1lOl0 = function () {
    return this.emailErrorText
};
loOoO = function ($) {
    this.urlErrorText = $
};
lo11O = function () {
    return this.urlErrorText
};
O1ol0 = function ($) {
    this.floatErrorText = $
};
oll0 = function () {
    return this.floatErrorText
};
l1l0o = function ($) {
    this.intErrorText = $
};
l0llo = function () {
    return this.intErrorText
};
o0oO0 = function ($) {
    this.dateErrorText = $
};
oOlo0 = function () {
    return this.dateErrorText
};
lO000 = function ($) {
    this.maxLengthErrorText = $
};
olo1oo = function () {
    return this.maxLengthErrorText
};
l1Olo = function ($) {
    this.minLengthErrorText = $
};
loO11l = function () {
    return this.minLengthErrorText
};
O00l1 = function ($) {
    this.maxErrorText = $
};
lOloo = function () {
    return this.maxErrorText
};
l0l0 = function ($) {
    this.minErrorText = $
};
Olll1 = function () {
    return this.minErrorText
};
looo10 = function ($) {
    this.rangeLengthErrorText = $
};
O011O = function () {
    return this.rangeLengthErrorText
};
O01l1 = function ($) {
    this.rangeCharErrorText = $
};
o0Oo0O = function () {
    return this.rangeCharErrorText
};
oOl11 = function ($) {
    this.rangeErrorText = $
};
ooOlO = function () {
    return this.rangeErrorText
};
Oo11 = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-include"
};
llO0 = function () {
};
l011O = function () {
    if (!this[Ooo1oo]())return;
    var A = this.el.childNodes;
    if (A)for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$];
        mini.layout(_)
    }
};
lOOO = function ($) {
    this.url = $;
    mini[lOOl1o]({url: this.url, el: this.el, async: this.async});
    this[l0llOO]()
};
oOol = function ($) {
    return this.url
};
o001 = function ($) {
    var _ = O11o0l[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["url"]);
    return _
};
Oo110 = function () {
    var $ = this.el = document.createElement("div");
    this.el.className = "mini-listbox";
    this.el.innerHTML = "<div class=\"mini-listbox-border\"><div class=\"mini-listbox-header\"></div><div class=\"mini-listbox-view\"></div><input type=\"hidden\"/></div><div class=\"mini-errorIcon\"></div>";
    this._borderEl = this.el.firstChild;
    this.OlOl0l = this._borderEl.firstChild;
    this.Oo1OO = this._borderEl.childNodes[1];
    this.l0o0o0 = this._borderEl.childNodes[2];
    this.ll001O = this.el.lastChild;
    this.O0O1 = this.Oo1OO;
    this.Oo1OO.innerHTML = "<div class=\"mini-grid-rows-content\"></div>";
    this._contentEl = this.Oo1OO.firstChild
};
olOo = function () {
    lO1OO1[ollolO][lOo101][o1O0l0](this);
    O0o0o0(function () {
        o1l0lo(this.Oo1OO, "scroll", this.lOoOo0, this)
    }, this)
};
OoOO = function ($) {
    if (this.Oo1OO) {
        this.Oo1OO.onscroll = null;
        mini[o11l00](this.Oo1OO);
        this.Oo1OO = null
    }
    this._borderEl = this.OlOl0l = this.Oo1OO = this.l0o0o0 = this.ll001O = this.O0O1 = this._contentEl = null;
    lO1OO1[ollolO][l0lOl][o1O0l0](this, $)
};
lO1l0 = function (_) {
    if (!mini.isArray(_))_ = [];
    this.columns = _;
    for (var $ = 0, D = this.columns.length; $ < D; $++) {
        var B = this.columns[$];
        if (B.type) {
            if (!mini.isNull(B.header) && typeof B.header !== "function")if (B.header.trim() == "")delete B.header;
            var C = mini[ol1oO](B.type);
            if (C) {
                var E = mini.copyTo({}, B);
                mini.copyTo(B, C);
                mini.copyTo(B, E)
            }
        }
        var A = parseInt(B.width);
        if (mini.isNumber(A) && String(A) == B.width)B.width = A + "px";
        if (mini.isNull(B.width))B.width = this[O1ooO0] + "px"
    }
    this[l0loO0]()
};
lO11 = function () {
    return this.columns
};
O1Ool = function () {
    if (this.Olol === false)return;
    var S = this.columns && this.columns.length > 0;
    if (S)l1Oo(this.el, "mini-listbox-showColumns"); else o11o(this.el, "mini-listbox-showColumns");
    this.OlOl0l.style.display = S ? "" : "none";
    var I = [];
    if (S) {
        I[I.length] = "<table class=\"mini-listbox-headerInner\" cellspacing=\"0\" cellpadding=\"0\"><tr>";
        var D = this.uid + "$ck$all";
        I[I.length] = "<td class=\"mini-listbox-checkbox\"><input type=\"checkbox\" id=\"" + D + "\"></td>";
        for (var R = 0, _ = this.columns.length; R < _; R++) {
            var B = this.columns[R], E = B.header;
            if (mini.isNull(E))E = "&nbsp;";
            var A = B.width;
            if (mini.isNumber(A))A = A + "px";
            I[I.length] = "<td class=\"";
            if (B.headerCls)I[I.length] = B.headerCls;
            I[I.length] = "\" style=\"";
            if (B.headerStyle)I[I.length] = B.headerStyle + ";";
            if (A)I[I.length] = "width:" + A + ";";
            if (B.headerAlign)I[I.length] = "text-align:" + B.headerAlign + ";";
            I[I.length] = "\">";
            I[I.length] = E;
            I[I.length] = "</td>"
        }
        I[I.length] = "</tr></table>"
    }
    this.OlOl0l.innerHTML = I.join("");
    var I = [], P = this.data;
    I[I.length] = "<table class=\"mini-listbox-items\" cellspacing=\"0\" cellpadding=\"0\">";
    if (this[O1lO00] && P.length == 0)I[I.length] = "<tr><td colspan=\"20\">" + this[o0oOOO] + "</td></tr>"; else {
        this.lll10o();
        for (var K = 0, G = P.length; K < G; K++) {
            var $ = P[K], M = -1, O = " ", J = -1, N = " ";
            I[I.length] = "<tr id=\"";
            I[I.length] = this.ll001(K);
            I[I.length] = "\" index=\"";
            I[I.length] = K;
            I[I.length] = "\" class=\"mini-listbox-item ";
            if ($.enabled === false)I[I.length] = " mini-disabled ";
            M = I.length;
            I[I.length] = O;
            I[I.length] = "\" style=\"";
            J = I.length;
            I[I.length] = N;
            I[I.length] = "\">";
            var H = this.l1olO1(K), L = this.name, F = this[OO01O0]($), C = "";
            if ($.enabled === false)C = "disabled";
            if ($.__NullItem === true)I[I.length] = "<td class=\"mini-listbox-checkbox\"></td>"; else I[I.length] = "<td class=\"mini-listbox-checkbox\"><input " + C + " id=\"" + H + "\" type=\"checkbox\" ></td>";
            if (S) {
                for (R = 0, _ = this.columns.length; R < _; R++) {
                    var B = this.columns[R], T = this[lOl01]($, K, B), A = B.width;
                    if (typeof A == "number")A = A + "px";
                    I[I.length] = "<td class=\"";
                    if (T.cellCls)I[I.length] = T.cellCls;
                    I[I.length] = "\" style=\"";
                    if (T.cellStyle)I[I.length] = T.cellStyle + ";";
                    if (A)I[I.length] = "width:" + A + ";";
                    if (B.align)I[I.length] = "text-align:" + B.align + ";";
                    I[I.length] = "\">";
                    I[I.length] = T.cellHtml;
                    I[I.length] = "</td>";
                    if (T.rowCls)O = T.rowCls;
                    if (T.rowStyle)N = T.rowStyle
                }
            } else {
                T = this[lOl01]($, K, null);
                I[I.length] = "<td class=\"";
                if (T.cellCls)I[I.length] = T.cellCls;
                I[I.length] = "\" style=\"";
                if (T.cellStyle)I[I.length] = T.cellStyle;
                I[I.length] = "\">";
                I[I.length] = T.cellHtml;
                I[I.length] = "</td>";
                if (T.rowCls)O = T.rowCls;
                if (T.rowStyle)N = T.rowStyle
            }
            I[M] = O;
            I[J] = N;
            I[I.length] = "</tr>"
        }
    }
    I[I.length] = "</table>";
    var Q = I.join("");
    this.Oo1OO.firstChild.innerHTML = Q;
    this.OOo00();
    this[l0llOO]()
};
oO1l1 = function (I) {
    if (!this[Ooo1oo]())return;
    if (this.columns && this.columns.length > 0)l1Oo(this.el, "mini-listbox-showcolumns"); else o11o(this.el, "mini-listbox-showcolumns");
    if (this[llOo01])o11o(this.el, "mini-listbox-hideCheckBox"); else l1Oo(this.el, "mini-listbox-hideCheckBox");
    var A = this.uid + "$ck$all", E = document.getElementById(A);
    if (E)E.style.display = this[loloo] ? "" : "none";
    var J = this.Oo1OO, H = this[l0111O]();
    if (H)J.style.height = "auto";
    var _ = this[o11lOl](true), $ = lo0o(this._borderEl, true), G = $;
    J.style.width = $ + "px";
    var D = l010(this.OlOl0l);
    _ = _ - D;
    J.style.height = _ + "px";
    if (isIE) {
        var F = this.OlOl0l.firstChild, B = this.Oo1OO.firstChild.firstChild;
        if (this.Oo1OO.offsetHeight >= this.Oo1OO.scrollHeight) {
            B.style.width = "100%";
            if (F)F.style.width = "100%"
        } else {
            $ = parseInt(B.parentNode.offsetWidth) + "px";
            if (F)F.style.width = $
        }
    }
    if (this.Oo1OO.offsetHeight < this.Oo1OO.scrollHeight) {
        var C = jQuery(this.Oo1OO).width() - jQuery(this._contentEl).width();
        this.OlOl0l.style.width = (G - C) + "px"
    } else this.OlOl0l.style.width = "100%"
};
olOol = function ($) {
    this[llOo01] = $;
    this[l0llOO]()
};
oo01oO = function () {
    return this[llOo01]
};
OOlll0 = function ($) {
    this[loloo] = $;
    this[l0llOO]()
};
oooo = function () {
    return this[loloo]
};
lOOo1 = function ($) {
    if (this.showNullItem != $) {
        this.showNullItem = $;
        this.lll10o();
        this[l0loO0]()
    }
};
oOoll = function () {
    return this.showNullItem
};
l0OoO = function ($) {
    if (this.nullItemText != $) {
        this.nullItemText = $;
        this.lll10o();
        this[l0loO0]()
    }
};
l1Ool0 = function () {
    return this.nullItemText
};
olll1 = function () {
    for (var _ = 0, A = this.data.length; _ < A; _++) {
        var $ = this.data[_];
        if ($.__NullItem) {
            this.data.removeAt(_);
            break
        }
    }
    if (this.showNullItem) {
        $ = {__NullItem: true};
        $[this.textField] = "";
        $[this.valueField] = "";
        this.data.insert(0, $)
    }
};
Ollo = function (_, $, C) {
    var A = C ? mini._getMap(C.field, _) : this[OO101](_), E = {
        sender: this,
        index: $,
        rowIndex: $,
        record: _,
        item: _,
        column: C,
        field: C ? C.field : null,
        value: A,
        cellHtml: A,
        rowCls: null,
        cellCls: C ? (C.cellCls || "") : "",
        rowStyle: null,
        cellStyle: C ? (C.cellStyle || "") : ""
    }, D = this.columns && this.columns.length > 0;
    if (!D)if ($ == 0 && this.showNullItem)E.cellHtml = this.nullItemText;
    if (E.autoEscape == true)E.cellHtml = mini.htmlEncode(E.cellHtml);
    if (C) {
        if (C.dateFormat)if (mini.isDate(E.value))E.cellHtml = mini.formatDate(A, C.dateFormat); else E.cellHtml = A;
        var B = C.renderer;
        if (B) {
            fn = typeof B == "function" ? B : window[B];
            if (fn)E.cellHtml = fn[o1O0l0](C, E)
        }
    }
    this[ol1O0]("drawcell", E);
    if (E.cellHtml === null || E.cellHtml === undefined || E.cellHtml === "")E.cellHtml = "&nbsp;";
    return E
};
lOOo1l = function ($) {
    this.OlOl0l.scrollLeft = this.Oo1OO.scrollLeft
};
Oo1o0 = function (C) {
    var A = this.uid + "$ck$all";
    if (C.target.id == A) {
        var _ = document.getElementById(A);
        if (_) {
            var B = _.checked, $ = this[o1oOl]();
            if (B)this[oOl1oO](); else this[OOo10]();
            this[o0O00l]();
            if ($ != this[o1oOl]()) {
                this.OOoOO();
                this[ol1O0]("itemclick", {htmlEvent: C})
            }
        }
        return
    }
    this.o1ol1l(C, "Click")
};
OooOO = function (_) {
    var E = lO1OO1[ollolO][ol1oOl][o1O0l0](this, _);
    mini[Ol100O](_, E, ["nullItemText", "ondrawcell"]);
    mini[Olo01O](_, E, ["showCheckBox", "showAllCheckBox", "showNullItem"]);
    if (_.nodeName.toLowerCase() != "select") {
        var C = mini[l00oo](_);
        for (var $ = 0, D = C.length; $ < D; $++) {
            var B = C[$], A = jQuery(B).attr("property");
            if (!A)continue;
            A = A.toLowerCase();
            if (A == "columns")E.columns = mini.llllo(B); else if (A == "data")E.data = B.innerHTML
        }
    }
    return E
};
O0ol1 = function (_) {
    if (typeof _ == "string")return this;
    var $ = _.value;
    delete _.value;
    lOl0O[ollolO][OO1O1l][o1O0l0](this, _);
    if (!mini.isNull($))this[ll10OO]($);
    return this
};
Ol0Ol = function () {
    var $ = "onmouseover=\"l1Oo(this,'" + this.OOlO + "');\" " + "onmouseout=\"o11o(this,'" + this.OOlO + "');\"";
    return "<span name=\"trigger\" class=\"mini-buttonedit-button mini-buttonedit-trigger\" " + $ + "><span class=\"mini-buttonedit-up\"><span></span></span><span class=\"mini-buttonedit-down\"><span></span></span></span>"
};
lOlol = function () {
    lOl0O[ollolO][lOo101][o1O0l0](this);
    O0o0o0(function () {
        this[Ol1oO1]("buttonmousedown", this.O01o01, this);
        Ol1O(this.el, "mousewheel", this.lO1loO, this)
    }, this)
};
lllll1 = function () {
    if (this.allowLimitValue == false)return;
    if (mini.isNull(this.value) && this.allowNull)return;
    if (this[O1o1l] > this[oO1Oll])this[oO1Oll] = this[O1o1l] + 100;
    if (this.value < this[O1o1l])this[ll10OO](this[O1o1l]);
    if (this.value > this[oO1Oll])this[ll10OO](this[oO1Oll])
};
l1l1O = function () {
    var D = this.value;
    D = parseFloat(D);
    if (this.allowNull && isNaN(D))return "";
    if (isNaN(D))D = 0;
    var C = String(D).split("."), B = C[0], _ = C[1];
    if (!_)_ = "";
    if (this[O1O1oo] > 0) {
        for (var $ = _.length, A = this[O1O1oo]; $ < A; $++)_ += "0";
        _ = "." + _
    } else if (_)_ = "." + _;
    return B + _
};
l1Oo0 = function ($) {
    $ = mini.parseFloat($, this.culture, this.format);
    $ = parseFloat($);
    if (isNaN($) && !this.allowNull)$ = this[O1o1l];
    if (isNaN($) && this.allowNull)$ = null;
    if ($ && this[O1O1oo] >= 0)$ = parseFloat($.toFixed(this[O1O1oo]));
    if (this.value != $) {
        this.value = $;
        this.Oooo0();
        this.l0o0o0.value = this.value;
        this.text = this._textEl.value = this[oOoo1O]()
    } else this.text = this._textEl.value = this[oOoo1O]()
};
Olo1O = function ($) {
    $ = parseFloat($);
    if (isNaN($))return;
    $ = parseFloat($);
    if (this[oO1Oll] != $) {
        this[oO1Oll] = $;
        this.Oooo0()
    }
};
lll00 = function ($) {
    return this[oO1Oll]
};
l1OO0 = function ($) {
    $ = parseFloat($);
    if (isNaN($))return;
    $ = parseFloat($);
    if (this[O1o1l] != $) {
        this[O1o1l] = $;
        this.Oooo0()
    }
};
Olloo = function ($) {
    return this[O1o1l]
};
OO000 = function ($) {
    $ = parseFloat($);
    if (isNaN($))return;
    if (this[o0oO1] != $)this[o0oO1] = $
};
OO0oo = function ($) {
    return this[o0oO1]
};
lolO1 = function ($) {
    $ = parseInt($);
    if (isNaN($) || $ < 0)return;
    this[O1O1oo] = $
};
loOol = function ($) {
    return this[O1O1oo]
};
Ol111 = function ($) {
    this.changeOnMousewheel = $
};
lllo1 = function ($) {
    return this.changeOnMousewheel
};
oO1oo = function ($) {
    this.allowLimitValue = $
};
ooO0 = function ($) {
    return this.allowLimitValue
};
o1l0o = function ($) {
    this.allowNull = $
};
oO1lO = function ($) {
    return this.allowNull
};
OlOOl = function ($) {
    if (typeof $ != "string")return;
    if (this.format != $) {
        this.format = $;
        this[l0O0O0](this[oOoo1O]())
    }
};
l111l = function () {
    return this.format
};
lllo = function () {
    if (mini.isNull(this.value))return "";
    if (this.format && mini.isNumber(this.value))return mini.formatNumber(this.value, this.format, this.culture);
    return this.value
};
OO1O0 = function ($) {
    this.allowLoopValue = $
};
oOl1o = function () {
    return this.allowLoopValue
};
Oo1o = function (I, B, F) {
    this.o0olo();
    var A = this;

    function D($) {
        if (I > 0) {
            if ($ > A[oO1Oll])A[ll10OO](A[O1o1l])
        } else if ($ < A[O1o1l])A[ll10OO](A[oO1Oll])
    }

    var E = 1000000, C = this.value * E, G = I * E, H = (C + G) / E;
    this[ll10OO](H);
    D(H);
    var _ = F, $ = new Date();
    this.O1lo01 = setInterval(function () {
        var E = A.value + I;
        A[ll10OO](E);
        D(E);
        A.OOoOO();
        F--;
        if (F == 0 && B > 50)A.O0loo(I, B - 100, _ + 3);
        var C = new Date();
        if (C - $ > 500)A.o0olo();
        $ = C
    }, B);
    Ol1O(document, "mouseup", this.lo001, this)
};
oOOlO = function () {
    clearInterval(this.O1lo01);
    this.O1lo01 = null
};
O0o1 = function ($) {
    this._DownValue = this[o1oOl]();
    this.O0lloo();
    if ($.spinType == "up")this.O0loo(this.increment, 230, 2); else this.O0loo(-this.increment, 230, 2)
};
o1o0o = function (_) {
    lOl0O[ollolO].lllO[o1O0l0](this, _);
    var $ = mini.Keyboard;
    if (this[o0011o]())return;
    switch (_.keyCode) {
        case $.Top:
            this[ll10OO](this.value + this[o0oO1]);
            this.OOoOO();
            break;
        case $.Bottom:
            this[ll10OO](this.value - this[o0oO1]);
            this.OOoOO();
            break
    }
};
O0111O = function (E) {
    if (this[o0011o]())return;
    if (this.changeOnMousewheel == false)return;
    var $ = E.wheelDelta || E.originalEvent.wheelDelta;
    if (mini.isNull($))$ = -E.detail * 24;
    var _ = this[o0oO1];
    if ($ < 0)_ = -_;
    var B = 1000000, A = this.value * B, C = _ * B, D = (A + C) / B;
    this[ll10OO](D);
    this.OOoOO();
    return false
};
Oll1O = function ($) {
    this.o0olo();
    lol0Oo(document, "mouseup", this.lo001, this);
    if (this._DownValue != this[o1oOl]())this.OOoOO()
};
OolOl = function (A) {
    var _ = this[o1oOl](), $ = mini.parseFloat(this._textEl.value, this.culture, this.format);
    this[ll10OO]($);
    if (_ != this[o1oOl]())this.OOoOO()
};
ll1l1 = function ($) {
    var _ = lOl0O[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["minValue", "maxValue", "increment", "decimalPlaces", "format"]);
    mini[Olo01O]($, _, ["allowLimitValue", "allowNull", "changeOnMousewheel", "allowLoopValue"]);
    return _
};
o0Ool = function ($) {
    return this._editingNode == $
};
o11o1 = function ($) {
    return this._dataSource.indexOfList($)
};
l0ol1 = function ($) {
    return "Nodes " + $.length
};
lo1l00 = function () {
    lOO111[ollolO][lOo101][o1O0l0](this);
    this[Ol1oO1]("nodedblclick", this.__OnNodeDblClick, this);
    this[Ol1oO1]("nodeclick", this.l0lool, this);
    this[Ol1oO1]("cellclick", function ($) {
        $.node = $.record;
        $.isLeaf = this.isLeaf($.node);
        this[ol1O0]("nodeclick", $)
    }, this);
    this[Ol1oO1]("cellmousedown", function ($) {
        $.node = $.record;
        $.isLeaf = this.isLeaf($.node);
        this[ol1O0]("nodemousedown", $)
    }, this);
    this[Ol1oO1]("celldblclick", function ($) {
        $.node = $.record;
        $.isLeaf = this.isLeaf($.node);
        this[ol1O0]("nodedblclick", $)
    }, this);
    this[Ol1oO1]("beforerowselect", function ($) {
        $.node = $.selected;
        $.isLeaf = this.isLeaf($.node);
        this[ol1O0]("beforenodeselect", $)
    }, this);
    this[Ol1oO1]("rowselect", function ($) {
        $.node = $.selected;
        $.isLeaf = this.isLeaf($.node);
        this[ol1O0]("nodeselect", $)
    }, this)
};
OoOOl = function ($, A) {
    if (mini.isNull($))$ = "";
    $ = String($);
    if (this[o1oOl]() != $) {
        var B = this[o0l01]();
        this.uncheckNodes(B, false);
        this.value = $;
        if (this[llOo01]) {
            var _ = String($).split(",");
            this._dataSource.doCheckNodes(_, true, A !== false)
        } else this[O00O10]($, false)
    }
};
l01oO = function ($) {
    if (this[llOo01]) {
        if ($ === false)$ = "leaf";
        return this._dataSource.getCheckedNodesId($)
    } else return this._dataSource.getSelectedsId()
};
olllO = function () {
    var C = [];
    if (this[llOo01])C = this[o0l01](); else {
        var A = this[loo11O]();
        if (A)C.push(A)
    }
    var D = [], _ = this[OOll0l]();
    for (var $ = 0, B = C.length; $ < B; $++) {
        A = C[$];
        D.push(A[_])
    }
    return D.join(",")
};
oo0ll = function () {
    return false
};
lO01ol = function () {
    this._dataSource = new mini.DataTree()
};
Olool = function () {
    lOO111[ollolO].OllO[o1O0l0](this);
    var $ = this._dataSource;
    $[Ol1oO1]("expand", this.OoO00, this);
    $[Ol1oO1]("collapse", this.oO1O, this);
    $[Ol1oO1]("checkchanged", this.__OnCheckChanged, this);
    $[Ol1oO1]("addnode", this.__OnSourceAddNode, this);
    $[Ol1oO1]("removenode", this.__OnSourceRemoveNode, this);
    $[Ol1oO1]("movenode", this.__OnSourceMoveNode, this);
    $[Ol1oO1]("beforeloadnode", this.__OnBeforeLoadNode, this);
    $[Ol1oO1]("loadnode", this.__OnLoadNode, this)
};
l11o1 = function ($) {
    this.__showLoading = this.showLoading;
    this.showLoading = false;
    this[l1lloo]($.node, "mini-tree-loading");
    this[ol1O0]("beforeloadnode", $)
};
oloO = function ($) {
    this.showLoading = this.__showLoading;
    this[loollo]($.node, "mini-tree-loading");
    this[ol1O0]("loadnode", $)
};
o00ll = function () {
    var $ = this;
    if ($._updateNodeTimer) {
        clearTimeout($._updateNodeTimer);
        $._updateNodeTimer = null
    }
    $._updateNodeTimer = setTimeout(function () {
        $._updateNodeTimer = null;
        $.doUpdateRows();
        $[O0o0o1](50)
    }, 5)
};
lOoo = function (A) {
    var _ = this._dataSource.isVisibleNode(A.node);
    if (this.isVirtualScroll() == true)this[lo00OO](); else if (_)this[lloolo](A.node); else {
        var $ = this[lo10lo](A.node);
        if (this._dataSource.isVisibleNode($))this[OOl0O0]($)
    }
    this[ol1O0]("addnode", A)
};
O1111 = function (A) {
    if (this.isVirtualScroll() == true)this[lo00OO](); else {
        this[lo11oO](A.node);
        var $ = this[lo10lo](A.node), _ = this[l00oo]($);
        if (_.length == 0)this[OOl0O0]($)
    }
    this[ol1O0]("removenode", A)
};
o0O1l = function (C) {
    this[OOo0Ol](C.node);
    this[ol1O0]("movenode", C);
    var A = C.oldParentNode, $ = C.parentNode;
    if (A != $) {
        var B = this[l00oo](A);
        if (B) {
            var _ = B[B.length - 1];
            if (_)this[OOl0O0](_)
        }
    }
};
loOll = function (B) {
    var A = this.getFrozenColumns(), E = this.getUnFrozenColumns(), $ = this[lo10lo](B), C = this[o110ll](B), D = false;

    function _(E, G, B) {
        var I = this.lO0lloHTML(E, C, G, B), _ = this.indexOfNode(E) + 1, A = this.getChildNodeAt(_, $);
        if (A) {
            var H = this[lo1l0l](A, B);
            jQuery(H).before(I)
        } else {
            var F = this.oool00($, B);
            if (F)mini.append(F.firstChild, I); else D = true
        }
    }

    _[o1O0l0](this, B, E, 2);
    _[o1O0l0](this, B, A, 1);
    if (D)this[OOl0O0]($)
};
Ooo1o1 = function (_) {
    this[ol0lll](_);
    var A = this.oool00(_, 1), $ = this.oool00(_, 2);
    if (A)A.parentNode.removeChild(A);
    if ($)$.parentNode.removeChild($)
};
lolo1 = function (_) {
    if (this.isVirtualScroll() == true)this[lo00OO](); else {
        this[lo11oO](_);
        var $ = this[lo10lo](_);
        this[OOl0O0]($)
    }
};
O0llO = function ($) {
    this[OOl0O0]($, false)
};
ool0o = function (D, K) {
    K = K !== false;
    var E = this.getRootNode();
    if (E == D) {
        this[l0loO0]();
        return
    }
    if (!this.isVisibleNode(D))return;
    var _ = D, B = this.getFrozenColumns(), A = this.getUnFrozenColumns(), $ = this.O100O1HTML(D, B, 1, null, K), C = this.O100O1HTML(D, A, 2, null, K), I = this[lo1l0l](D, 1), L = this[lo1l0l](D, 2), F = this[o1oOOo](D, 1), J = this[o1oOOo](D, 2), H = this[o1lO1l](D, 1), N = this[o1lO1l](D, 2), M = mini.createElements($), D = M[0], G = M[1];
    if (I) {
        mini.before(I, D);
        if (K)if (H)mini.after(H, G); else mini.before(I, G);
        mini[oll100](I);
        if (K)mini[oll100](F)
    }
    M = mini.createElements(C), D = M[0], G = M[1];
    if (L) {
        mini.before(L, D);
        if (K)if (N)mini.after(N, G); else mini.before(L, G);
        mini[oll100](L);
        if (K)mini[oll100](J)
    }
    if (D.checked != true && !this.isLeaf(D))this[loo0oO](_)
};
llo01 = function ($, _) {
    this[OOlol1]($, _)
};
Ollo11 = function ($, _) {
    this[lO10o1]($, _)
};
O111O = function () {
    lOO111[ollolO][l0loO0].apply(this, arguments)
};
ol11O = function ($) {
    if (!$)$ = [];
    this._dataSource[ol0l0]($)
};
O1011 = function ($, B, _) {
    B = B || this[Oll1o]();
    _ = _ || this[o0Oll1]();
    var A = mini.listToTree($, this[o1O1O0](), B, _);
    this[ol0l0](A)
};
o0l0 = function ($, _, A, B) {
    var C = lOO111[ollolO][lo1000][o1O0l0](this, $, _, A, B);
    C.node = C.record;
    C.isLeaf = this.isLeaf(C.node);
    if (this._treeColumn && this._treeColumn == _.name) {
        C.isTreeCell = true;
        C.img = $[this.imgField];
        C.iconCls = this[Ol0llo]($);
        C.nodeCls = "";
        C.nodeStyle = "";
        C.nodeHtml = "";
        C[ol10Ol] = this[ol10Ol];
        C.checkBoxType = this._checkBoxType;
        C[llOo01] = this[llOo01];
        C.showRadioButton = this.showRadioButton;
        if (C[llOo01] && !C.isLeaf)C[llOo01] = this[lOOoo0];
        if (C.showRadioButton && !C.isLeaf)C.showRadioButton = this[lOOoo0];
        C.enabled = C.node.enabled !== false;
        C.checkable = this.getCheckable(C.node)
    }
    return C
};
ll11O = function ($, _, A, B) {
    var C = lOO111[ollolO][lOl01][o1O0l0](this, $, _, A, B);
    if (this._treeColumn && this._treeColumn == _.name) {
        this[ol1O0]("drawnode", C);
        if (C.nodeStyle)C.cellStyle = C.nodeStyle;
        if (C.nodeCls)C.cellCls = C.nodeCls;
        if (C.nodeHtml)C.cellHtml = C.nodeHtml;
        this[O1Oo10](C)
    }
    return C
};
O1ol = function (_) {
    if (this._viewNodes) {
        var $ = this[lo10lo](_), A = this._getViewChildNodes($);
        return A[0] === _
    } else return this[llol01](_)
};
lo01o = function (_) {
    if (this._viewNodes) {
        var $ = this[lo10lo](_), A = this._getViewChildNodes($);
        return A[A.length - 1] === _
    } else return this.isLastNode(_)
};
oOlol = function (D, $) {
    if (this._viewNodes) {
        var C = null, A = this[l1000l](D);
        for (var _ = 0, E = A.length; _ < E; _++) {
            var B = A[_];
            if (this.getLevel(B) == $)C = B
        }
        if (!C || C == this.root)return false;
        return this[l11oOo](C)
    } else return this[Ooo1ol](D, $)
};
O1oOol = function (D, $) {
    var C = null, A = this[l1000l](D);
    for (var _ = 0, E = A.length; _ < E; _++) {
        var B = A[_];
        if (this.getLevel(B) == $)C = B
    }
    if (!C || C == this.root)return false;
    return this.isLastNode(C)
};
O0Ol1 = function (D, H, R) {
    var Q = !H;
    if (!H)H = [];
    var O = this.isLeaf(D), $ = this.getLevel(D), E = R.nodeCls;
    if (!O)E = this.isExpandedNode(D) ? this.oOOO0 : this.OO0ol;
    if (D.enabled === false)E += " mini-disabled";
    if (!O)E += " mini-tree-parentNode";
    var F = this[l00oo](D), I = F && F.length > 0;
    H[H.length] = "<div class=\"mini-tree-nodetitle " + E + "\" style=\"" + R.nodeStyle + "\">";
    var _ = this[lo10lo](D), A = 0;
    for (var J = A; J <= $; J++) {
        if (J == $)continue;
        if (O)if (J > $ - 1)continue;
        var N = "";
        if (this[OO0OOl](D, J))N = "background:none";
        H[H.length] = "<span class=\"mini-tree-indent \" style=\"" + N + "\"></span>"
    }
    var C = "";
    if (this[O0l0ol](D) && $ == 0)C = "mini-tree-node-ecicon-first"; else if (this[l11oOo](D))C = "mini-tree-node-ecicon-last";
    if (this[O0l0ol](D) && this[l11oOo](D)) {
        C = "mini-tree-node-ecicon-firstAndlast";
        if (_ == this.root)C = "mini-tree-node-ecicon-firstLast"
    }
    if (!O)H[H.length] = "<a class=\"" + this.oOOo0 + " " + C + "\" style=\"" + (this[o0O10] ? "" : "display:none") + "\" " + (mini.isChrome ? "" : "href=\"javascript:void(0);\"") + " onclick=\"return false;\" hidefocus></a>"; else H[H.length] = "<span class=\"" + this.oOOo0 + " " + C + "\" style=\"" + (this[o0O10] ? "" : "display:none") + "\"></span>";
    H[H.length] = "<span class=\"mini-tree-nodeshow\">";
    if (R[ol10Ol])if (R.img) {
        var M = this.imgPath + R.img;
        H[H.length] = "<span class=\"mini-tree-icon mini-iconfont\" style=\"background-image:url(" + M + ");\"></span>"
    } else H[H.length] = "<span class=\"" + R.iconCls + " mini-tree-icon mini-iconfont\"></span>";
    if (R.showRadioButton && !R[llOo01])H[H.length] = "<span class=\"mini-tree-radio\" ></span>";
    if (R[llOo01]) {
        var G = this.OO0O1(D), P = this.isCheckedNode(D), L = R.enabled === false ? "disabled" : "";
        if (R.enabled !== false)L = R.checkable === false ? "disabled" : "";
        H[H.length] = "<input type=\"checkbox\" id=\"" + G + "\" class=\"" + this.o11l0 + "\" hidefocus " + (P ? "checked" : "") + " " + (L) + " onclick=\"return false;\"/>"
    }
    H[H.length] = "<span class=\"mini-tree-nodetext\">";
    if (this._editingNode == D) {
        var B = this._id + "$edit$" + D._id, K = R.value;
        H[H.length] = "<input id=\"" + B + "\" type=\"text\" class=\"mini-tree-editinput\" value=\"" + K + "\"/>"
    } else H[H.length] = R.cellHtml;
    H[H.length] = "</span>";
    H[H.length] = "</span>";
    H[H.length] = "</div>";
    if (Q)return H.join("")
};
ll0O0 = function (C) {
    var A = C.record, _ = C.column;
    C.headerCls += " mini-tree-treecolumn";
    C.cellCls += " mini-tree-treecell";
    C.cellStyle += ";padding:0;";
    var B = this.isLeaf(A);
    C.cellHtml = this.Ol1Ool(A, null, C);
    if (A.checked != true && !B) {
        var $ = this.getCheckState(A);
        if ($ == "indeterminate")this[lO100o](A)
    }
};
ll1lo = function ($) {
    return this._id + "$checkbox$" + $._id
};
ool100 = function ($) {
    if (!this._renderCheckStateNodes)this._renderCheckStateNodes = [];
    this._renderCheckStateNodes.push($);
    if (this._renderCheckStateTimer)return;
    var _ = this;
    this._renderCheckStateTimer = setTimeout(function () {
        _._renderCheckStateTimer = null;
        var B = _._renderCheckStateNodes;
        _._renderCheckStateNodes = null;
        for (var $ = 0, A = B.length; $ < A; $++)_[loo0oO](B[$])
    }, 1)
};
OO00o = function ($, B, E, C, G) {
    var I = !C;
    if (!C)C = [];
    var J = this._dataSource, K = J.getDataView()[o110ll]($);
    this.lO0lloHTML($, K, B, E, C);
    if (G !== false) {
        var A = J[l00oo]($), _ = this.isVisibleNode($);
        if (A && A.length > 0) {
            var D = this.isExpandedNode($);
            if (D == true) {
                var H = (D && _) ? "" : "display:none", F = this.OlO11O($, E);
                C[C.length] = "<tr class=\"mini-tree-nodes-tr\" style=\"";
                if (mini.isIE)C[C.length] = H;
                C[C.length] = "\" ><td class=\"mini-tree-nodes-td\" colspan=\"";
                C[C.length] = B.length + 1;
                C[C.length] = "\" >";
                C[C.length] = "<div class=\"mini-tree-nodes\" id=\"";
                C[C.length] = F;
                C[C.length] = "\" style=\"";
                C[C.length] = H;
                C[C.length] = "\">";
                this.ol0lHTML(A, B, E, C);
                C[C.length] = "</div>";
                C[C.length] = "</td></tr>"
            }
        }
    }
    if (I)return C.join("")
};
OlOO1 = function (E, C, _, F) {
    if (!E)return "";
    var D = !F;
    if (!F)F = [];
    F.push("<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">");
    F.push(this._createTopRowHTML(C, true));
    if (C.length > 0)for (var B = 0, $ = E.length; B < $; B++) {
        var A = E[B];
        this.O100O1HTML(A, C, _, F)
    }
    F.push("</table>");
    if (D)return F.join("")
};
Oo0ol = function (C, $) {
    if (this.isVirtualScroll())return lOO111[ollolO].lO0llosHTML.apply(this, arguments);
    var E = this._dataSource, B = this, F = [], D = [], _ = E.getRootNode();
    if (this._useEmptyView !== true)D = E[l00oo](_);
    var A = $ == 2 ? this._rowsViewEl.firstChild : this._rowsLockEl.firstChild;
    A.id = this.OlO11O(_, $);
    this.ol0lHTML(D, C, $, F);
    return F.join("")
};
OOOl1l = function (_, $) {
    var A = this._id + "$nodes" + $ + "$" + _._id;
    return A
};
loO10 = function (_, $) {
    return this.lo000O(_, $)
};
l0l01O = function (_, $) {
    _ = this[Oll0l0](_);
    var A = this.OlO11O(_, $);
    return document.getElementById(A)
};
O1l0l = function (A, _) {
    var $ = this.oool00(A, _);
    if ($)return $.parentNode.parentNode
};
Ooo1o = function ($) {
    this._treeColumn = $;
    this.deferUpdate()
};
oOlll = function () {
    return this._treeColumn
};
lO0l0 = function ($) {
    this[ol10Ol] = $;
    this.deferUpdate()
};
o0ool = function () {
    return this[ol10Ol]
};
o1o0l = function ($) {
    this[llOo01] = $;
    this.deferUpdate()
};
O1O11 = function () {
    return this[llOo01]
};
ol1o1 = function ($) {
    this.showRadioButton = $;
    this.deferUpdate()
};
lo1oo = function () {
    return this.showRadioButton
};
Olo1o = function ($) {
    this._checkBoxType = $;
    this._doUpdateCheckState()
};
OOOlo = function () {
    return this._checkBoxType
};
llOoO1 = function ($) {
    this._iconsField = $
};
l10lo = function () {
    return this._iconsField
};
o0o0O = function (_) {
    var $ = _[this.iconField];
    if (!$)if (this.isLeaf(_))$ = this.leafIconCls; else $ = this.folderIconCls;
    return $
};
looll = function ($) {
    if (this.isVisibleNode($) == false)return null;
    var _ = this._id + "$checkbox$" + $._id;
    return o0OO(_, this.el)
};
o00O = function (A) {
    var $ = this;
    if ($._updateNodeTimer) {
        clearTimeout($._updateNodeTimer);
        $._updateNodeTimer = null
    }
    var D = new Date();
    if (this.isVirtualScroll() == true) {
        $._updateNodeTimer = setTimeout(function () {
            $._updateNodeTimer = null;
            $.doUpdateRows();
            $[O0o0o1](50)
        }, 5);
        return
    }
    function B() {
        this[OOl0O0](A);
        this[O0o0o1](20)
    }

    if (false || mini.isIE6 || !this.useAnimation || this[O0O0oO]())B[o1O0l0](this); else {
        var C = this.isExpandedNode(A);

        function _(C, B, D) {
            var E = this.oool00(C, B);
            if (E) {
                var A = l010(E);
                E.style.overflow = "hidden";
                E.style.height = "0px";
                var $ = {height: A + "px"}, _ = this;
                _.olOOlo = true;
                var F = jQuery(E);
                F.animate($, 250, function () {
                    E.style.height = "auto";
                    _.olOOlo = false;
                    _[l0llOO]();
                    mini[oOo01o](E)
                })
            }
        }

        function E(C, B, D) {
            var E = this.oool00(C, B);
            if (E) {
                var A = l010(E), $ = {height: 0 + "px"}, _ = this;
                _.olOOlo = true;
                var F = jQuery(E);
                F.animate($, 180, function () {
                    E.style.height = "auto";
                    _.olOOlo = false;
                    if (D)D[o1O0l0](_);
                    _[l0llOO]();
                    mini[oOo01o](E)
                })
            } else if (D)D[o1O0l0](this)
        }

        $ = this;
        if (C) {
            B[o1O0l0](this);
            _[o1O0l0](this, A, 2);
            _[o1O0l0](this, A, 1)
        } else {
            E[o1O0l0](this, A, 2, B);
            E[o1O0l0](this, A, 1)
        }
    }
};
O10O = function ($) {
    this[O1ool]($.node)
};
o0o1l = function ($) {
    this[O1ool]($.node)
};
lll0o = function (B) {
    var _ = this.OoOo(B);
    if (_) {
        var A = this.getCheckModel();
        _.checked = B.checked;
        _.indeterminate = false;
        if (A == "cascade") {
            var $ = this.getCheckState(B);
            if ($ == "indeterminate")_.indeterminate = true; else _.indeterminate = false
        }
    }
};
oOOll = function (C) {
    for (var $ = 0, B = C._nodes.length; $ < B; $++) {
        var _ = C._nodes[$];
        this[loo0oO](_)
    }
    if (this._checkChangedTimer) {
        clearTimeout(this._checkChangedTimer);
        this._checkChangedTimer = null
    }
    var A = this;
    this._checkChangedTimer = setTimeout(function () {
        A._checkChangedTimer = null;
        A[ol1O0]("checkchanged")
    }, 1)
};
lo0ll = function (_) {
    var $ = this.getCheckable(_);
    if ($ == false)return;
    var A = this.isCheckedNode(_), B = {node: _, cancel: false, checked: A, isLeaf: this.isLeaf(_)};
    this[ol1O0]("beforenodecheck", B);
    if (B.cancel)return;
    this._dataSource.doCheckNodes(_, !A, true);
    this[ol1O0]("nodecheck", B)
};
llo0O = function (_) {
    var $ = this.isExpandedNode(_), A = {node: _, cancel: false};
    if ($) {
        this[ol1O0]("beforecollapse", A);
        if (A.cancel == true)return;
        this[O010OO](_);
        A.type = "collapse";
        this[ol1O0]("collapse", A)
    } else {
        this[ol1O0]("beforeexpand", A);
        if (A.cancel == true)return;
        this[O11Oll](_);
        A.type = "expand";
        this[ol1O0]("expand", A)
    }
};
oo010 = function ($) {
    if (ol000($.htmlEvent.target, this.oOOo0)); else if (ol000($.htmlEvent.target, "mini-tree-checkbox")); else this[ol1O0]("cellmousedown", $)
};
oo0oO = function ($) {
    if (ol000($.htmlEvent.target, this.oOOo0))return;
    if (ol000($.htmlEvent.target, "mini-tree-checkbox"))this[oOOOlO]($.record); else this[ol1O0]("cellclick", $)
};
OOolO = function ($) {
};
olo0l = function ($) {
};
lllOo = function (A, _) {
    A = this[Oll0l0](A);
    if (!A)return;
    var $ = {};
    $[this[OOll0l]()] = _;
    this.updateNode(A, $)
};
o10oo = function (A, _) {
    A = this[Oll0l0](A);
    if (!A)return;
    var $ = {};
    $[this.iconField] = _;
    this.updateNode(A, $)
};
O10lO = function ($) {
    this.iconField = $
};
O11OoO = function () {
    return this.iconField
};
o1Oo0 = function ($) {
    this[ll1olO]($)
};
O1oOl = function () {
    return this[OoO1l0]()
};
lOo0O = function ($) {
    if (this[o0O10] != $) {
        this[o0O10] = $;
        this[l0loO0]()
    }
};
O000 = function () {
    return this[o0O10]
};
Ol1OO = function ($) {
    this[l1O01o] = $;
    if ($ == true)l1Oo(this.el, "mini-tree-treeLine"); else o11o(this.el, "mini-tree-treeLine")
};
Oo0Ol = function () {
    return this[l1O01o]
};
Oo01O = function ($) {
    this.showArrow = $;
    if ($ == true)l1Oo(this.el, "mini-tree-showArrows"); else o11o(this.el, "mini-tree-showArrows")
};
o0oOo = function () {
    return this.showArrow
};
lll1O = function ($) {
    this.leafIcon = $
};
llO10o = function () {
    return this.leafIcon
};
ool1l = function ($) {
    this.folderIcon = $
};
oo1lO = function () {
    return this.folderIcon
};
Ol1Oo = function () {
    return this.expandOnDblClick
};
O00l0 = function ($) {
    this.expandOnNodeClick = $;
    if ($)l1Oo(this.el, "mini-tree-nodeclick"); else o11o(this.el, "mini-tree-nodeclick")
};
o1o11 = function () {
    return this.expandOnNodeClick
};
l1oo = function ($) {
    this.loadOnExpand = $
};
OllO0 = function () {
    return this.loadOnExpand
};
oOoo01 = function (A) {
    A = this[Oll0l0](A);
    if (!A)return;
    A.visible = false;
    this[OOl0O0](A);
    var _ = this[lo1l0l](A, 1), $ = this[lo1l0l](A, 2);
    if (_)_.style.display = "none";
    if ($)$.style.display = "none"
};
l1O10 = function ($) {
    $ = this[Oll0l0]($);
    if (!$)return;
    $.visible = true;
    this[OOl0O0]($)
};
Ol1l0o = function (B) {
    B = this[Oll0l0](B);
    if (!B)return;
    B.enabled = true;
    var A = this[lo1l0l](B, 1), $ = this[lo1l0l](B, 2);
    if (A)o11o(A, "mini-disabled");
    if ($)o11o($, "mini-disabled");
    var _ = this.OoOo(B);
    if (_)_.disabled = false
};
l00lo = function (B) {
    B = this[Oll0l0](B);
    if (!B)return;
    B.enabled = false;
    var A = this[lo1l0l](B, 1), $ = this[lo1l0l](B, 2);
    if (A)l1Oo(A, "mini-disabled");
    if ($)l1Oo($, "mini-disabled");
    var _ = this.OoOo(B);
    if (_)_.disabled = true
};
llol = function ($) {
    this.imgPath = $
};
oll11 = function () {
    return this.imgPath
};
O01lo = function ($) {
    this.imgField = $
};
oolO0 = function () {
    return this.imgField
};
O1Oll = function (C) {
    var G = lOO111[ollolO][ol1oOl][o1O0l0](this, C);
    mini[Ol100O](C, G, ["value", "url", "idField", "textField", "iconField", "nodesField", "parentField", "valueField", "checkedField", "leafIcon", "folderIcon", "leafField", "ondrawnode", "onbeforenodeselect", "onnodeselect", "onnodemousedown", "onnodeclick", "onnodedblclick", "onbeforenodecheck", "onnodecheck", "onbeforeexpand", "onexpand", "onbeforecollapse", "oncollapse", "dragGroupName", "dropGroupName", "onendedit", "expandOnLoad", "ondragstart", "onbeforedrop", "ondrop", "ongivefeedback", "treeColumn", "onaddnode", "onremovenode", "onmovenode", "imgPath", "imgField"]);
    mini[Olo01O](C, G, ["allowSelect", "showCheckBox", "showRadioButton", "showExpandButtons", "showTreeIcon", "showTreeLines", "checkRecursive", "enableHotTrack", "showFolderCheckBox", "resultAsTree", "allowDrag", "allowDrop", "showArrow", "expandOnDblClick", "removeOnCollapse", "autoCheckParent", "loadOnExpand", "expandOnNodeClick", "useAnimation"]);
    if (G.expandOnLoad) {
        var _ = parseInt(G.expandOnLoad);
        if (mini.isNumber(_))G.expandOnLoad = _; else G.expandOnLoad = G.expandOnLoad == "true" ? true : false
    }
    var E = G[O00o0] || this[Oll1o](), B = G[l1ol1O] || this[OOll0l](), F = G.iconField || this[O01l01](), A = G.nodesField || this[o1O1O0]();

    function $(I) {
        var N = [];
        for (var L = 0, J = I.length; L < J; L++) {
            var D = I[L], H = mini[l00oo](D), R = H[0], G = H[1];
            if (!R || !G)R = D;
            var C = jQuery(R), _ = {}, K = _[E] = R.getAttribute("value");
            _[F] = C.attr("iconCls");
            _[B] = R.innerHTML;
            N[llo10o](_);
            var P = C.attr("expanded");
            if (P)_.expanded = P == "false" ? false : true;
            var Q = C.attr("allowSelect");
            if (Q)_[lO1l1] = Q == "false" ? false : true;
            if (!G)continue;
            var O = mini[l00oo](G), M = $(O);
            if (M.length > 0)_[A] = M
        }
        return N
    }

    var D = $(mini[l00oo](C));
    if (D.length > 0)G.data = D;
    if (!G[O00o0] && G[O01oll])G[O00o0] = G[O01oll];
    return G
};
loloO = function ($) {
    if (typeof $ == "string")return this;
    var _ = this;
    if (!mini.isNull($.trueValue)) {
        _[Oolo11]($.trueValue);
        delete $.trueValue
    }
    if (!mini.isNull($.falseValue)) {
        _[O1l1Oo]($.falseValue);
        delete $.falseValue
    }
    loo10O[ollolO][OO1O1l][o1O0l0](this, $);
    return this
};
Ol010 = function () {
    var $ = this.uid + "$check";
    this.el = document.createElement("span");
    this.el.className = "mini-checkbox";
    this.el.innerHTML = "<input id=\"" + $ + "\" name=\"" + this.id + "\" type=\"checkbox\" class=\"mini-checkbox-check\"><span class=\"mini-checkbox-icon\"></span><label for=\"" + $ + "\" onclick=\"return false;\">" + this.text + "</label>";
    this.l10O = this.el.firstChild;
    this.Ooo110 = this.el.lastChild
};
llloo = function ($) {
    if (this.l10O) {
        this.l10O.onmouseup = null;
        this.l10O.onclick = null;
        this.l10O = null
    }
    loo10O[ollolO][l0lOl][o1O0l0](this, $)
};
OOO00 = function () {
    O0o0o0(function () {
        Ol1O(this.el, "click", this.olol00, this);
        this.l10O.onmouseup = function () {
            return false
        };
        var $ = this;
        this.l10O.onclick = function () {
            if ($[o0011o]())return false
        };
        this.l10O.checked = this.checked
    }, this)
};
olOlO = function ($) {
    this.name = $;
    mini.setAttr(this.l10O, "name", this.name)
};
lloOl = function ($) {
    if (this.text !== $) {
        this.text = $;
        this.Ooo110.innerHTML = $
    }
};
o1oOo = function () {
    return this.text
};
ol0011 = function (_) {
    if (_ === true)_ = true; else if (_ === this.trueValue)_ = true; else if (_ == "true")_ = true; else if (_ == "True")_ = true; else if (String(_) === "1")_ = true; else if (_ == "Y")_ = true; else _ = false;
    if (this.checked !== _) {
        this.checked = !!_;
        this.l10O.checked = this.checked;
        this.value = this[o1oOl]()
    }
    var A = $(this.el);
    if (this.checked)A[Oo1Olo](this.checkedCls); else A[OoOo0](this.checkedCls)
};
OO0ll = function () {
    return this.checked
};
Ooolo = function ($) {
    if (this.checked !== $) {
        this[lOoooO]($);
        this.value = this[o1oOl]()
    }
};
l00o = function () {
    return String(this.checked == true ? this.trueValue : this.falseValue)
};
oOloO1 = function () {
    return this[o1oOl]()
};
OOOol = function ($) {
    this.l10O.value = $;
    this.trueValue = $
};
Oollo = function () {
    return this.trueValue
};
OlO11l = function ($) {
    this.falseValue = $
};
l0l0oo = function () {
    return this.falseValue
};
O0O1l = function ($) {
    if (this[o0011o]())return;
    this[lOoooO](!this.checked);
    this[ol1O0]("checkedchanged", {checked: this.checked});
    this[ol1O0]("valuechanged", {value: this[o1oOl]()});
    this[ol1O0]("click", $, this)
};
l1OoO1 = function (A) {
    var D = loo10O[ollolO][ol1oOl][o1O0l0](this, A), C = jQuery(A);
    D.text = A.innerHTML;
    mini[Ol100O](A, D, ["text", "oncheckedchanged", "onclick", "onvaluechanged"]);
    mini[Olo01O](A, D, ["enabled"]);
    var B = mini.getAttr(A, "checked");
    if (B)D.checked = (B == "true" || B == "checked") ? true : false;
    var _ = C.attr("trueValue");
    if (_) {
        D.trueValue = _;
        _ = parseInt(_);
        if (!isNaN(_))D.trueValue = _
    }
    var $ = C.attr("falseValue");
    if ($) {
        D.falseValue = $;
        $ = parseInt($);
        if (!isNaN($))D.falseValue = $
    }
    return D
};
oo1O = function (A) {
    if (typeof A == "string")return this;
    var $ = A.value;
    delete A.value;
    var C = A.url;
    delete A.url;
    var _ = A.data;
    delete A.data;
    var D = A.columns;
    delete A.columns;
    var B = A.defaultColumnWidth;
    delete A.defaultColumnWidth;
    if (B)this.setDefaultColumnWidth(B);
    if (!mini.isNull(D))this[OOll0](D);
    lloO10[ollolO][OO1O1l][o1O0l0](this, A);
    if (!mini.isNull(_))this[ol0l0](_);
    if (!mini.isNull(C))this[Oo1100](C);
    if (!mini.isNull($))this[ll10OO]($);
    return this
};
OoO0o = function () {
    this[o1ll11]();
    lloO10[ollolO][l0loO0].apply(this, arguments)
};
l1ol = function () {
    var $ = mini.getChildControls(this), A = [];
    for (var _ = 0, B = $.length; _ < B; _++) {
        var C = $[_];
        if (C.el && ol000(C.el, this.lO00o)) {
            A.push(C);
            C[l0lOl]()
        }
    }
};
O1olo = function () {
    var $ = lloO10[ollolO][lOl01].apply(this, arguments);
    return $
};
OlOo0 = function () {
    var $ = this._dataSource;
    $[Ol1oO1]("beforeload", this.__OnSourceBeforeLoad, this);
    $[Ol1oO1]("preload", this.__OnSourcePreLoad, this);
    $[Ol1oO1]("load", this.__OnSourceLoadSuccess, this);
    $[Ol1oO1]("loaderror", this.__OnSourceLoadError, this);
    $[Ol1oO1]("loaddata", this.__OnSourceLoadData, this);
    $[Ol1oO1]("cleardata", this.__OnSourceClearData, this);
    $[Ol1oO1]("sort", this.__OnSourceSort, this);
    $[Ol1oO1]("filter", this.__OnSourceFilter, this);
    $[Ol1oO1]("pageinfochanged", this.__OnPageInfoChanged, this);
    $[Ol1oO1]("selectionchanged", this.__OnSelectionChanged, this);
    $[Ol1oO1]("currentchanged", function ($) {
        this[ol1O0]("currentchanged", $)
    }, this);
    $[Ol1oO1]("add", this.__OnSourceAdd, this);
    $[Ol1oO1]("update", this.__OnSourceUpdate, this);
    $[Ol1oO1]("remove", this.__OnSourceRemove, this);
    $[Ol1oO1]("move", this.__OnSourceMove, this);
    $[Ol1oO1]("beforeadd", function ($) {
        this[ol1O0]("beforeaddrow", $)
    }, this);
    $[Ol1oO1]("beforeupdate", function ($) {
        this[ol1O0]("beforeupdaterow", $)
    }, this);
    $[Ol1oO1]("beforeremove", function ($) {
        this[ol1O0]("beforeremoverow", $)
    }, this);
    $[Ol1oO1]("beforemove", function ($) {
        this[ol1O0]("beforemoverow", $)
    }, this);
    $[Ol1oO1]("beforeselect", function ($) {
        this[ol1O0]("beforeselect", $)
    }, this);
    $[Ol1oO1]("beforedeselect", function ($) {
        this[ol1O0]("beforedeselect", $)
    }, this);
    $[Ol1oO1]("select", function ($) {
        this[ol1O0]("select", $)
    }, this);
    $[Ol1oO1]("deselect", function ($) {
        this[ol1O0]("deselect", $)
    }, this)
};
O0lOol = function () {
    return this.el
};
lOooo = function () {
    this.data = this._dataSource.getSource();
    this[lo00O0] = this[Oooo1O]();
    this[llllO] = this[O0loO0]();
    this[ool1oo] = this[lloO00]();
    this.totalPage = this[oo011l]();
    this.sortField = this[l1lOoo]();
    this.sortOrder = this[Olo1ol]();
    this.url = this[oO0l10]();
    this._mergedCellMaps = {};
    this._mergedCells = {};
    this._cellErrors = [];
    this._cellMapErrors = {};
    if (this[oOO1o]()) {
        this.groupBy(this.O0l1l1, this.OolOlO);
        if (this.collapseGroupOnLoad)this[O01o]()
    }
};
OlOl0O = function ($) {
    this[ol1O0]("beforeload", $);
    if ($.cancel == true)return;
    if (this.showLoading)this[Ool0o]()
};
olo11 = function ($) {
    this[ol1O0]("preload", $)
};
l1l0 = function ($) {
    this[ol1O0]("load", $);
    this[oolo1o]()
};
Olll0 = function ($) {
    this[ol1O0]("loaderror", $);
    this[oolo1o]()
};
lOOol = function ($) {
    this.deferUpdate();
    this[ol1O0]("sort", $)
};
o1lO1 = function ($) {
    this.deferUpdate();
    this[ol1O0]("filter", $)
};
oOolO = function ($) {
    this[OOlo10]($.record);
    this.O0ol();
    this._viewRegion = this._getViewRegion();
    this[ol1O0]("addrow", $)
};
O0l01 = function ($) {
    this.ll1oEl($.record);
    this.O0ol();
    this[ol1O0]("updaterow", $)
};
o1l0o1 = function ($) {
    this[ol0lll]($.record);
    this.O0ol();
    this[ol1O0]("removerow", $);
    if (this.isVirtualScroll())this.deferUpdate()
};
ol0lo = function ($) {
    this[lll11o]($.record, $.index);
    this.O0ol();
    this[ol1O0]("moverow", $)
};
O011l = function (A) {
    if (A.fireEvent !== false)if (A[lOol1O])this[ol1O0]("rowselect", A); else this[ol1O0]("rowdeselect", A);
    var _ = this;
    if (this.lloo1) {
        clearTimeout(this.lloo1);
        this.lloo1 = null
    }
    this.lloo1 = setTimeout(function () {
        _.lloo1 = null;
        if (A.fireEvent !== false)_[ol1O0]("SelectionChanged", A);
        _[ol1O0]("_selectchange", A)
    }, 1);
    var $ = new Date();
    this[O0Ol00](A._records, A[lOol1O])
};
l110lO = function ($) {
    this[o0011l]()
};
Ol0lO = function () {
    var B = this[Oooo1O](), D = this[O0loO0](), C = this[lloO00](), F = this[oo011l](), _ = this._pagers;
    for (var A = 0, E = _.length; A < E; A++) {
        var $ = _[A];
        $[lOOl1o](B, D, C);
        this._dataSource.totalPage = $.totalPage
    }
};
O10OoButtons = function ($) {
    this._bottomPager[lOl0lo]($)
};
O10Oo = function ($) {
    if (typeof $ == "string") {
        var _ = o0OO($);
        if (!_)return;
        mini.parse($);
        $ = mini.get($)
    }
    if ($)this[Oo1l0l]($)
};
o01o00 = function ($) {
    if (!$)return;
    this[olo01]($);
    this._pagers[llo10o]($);
    $[Ol1oO1]("beforepagechanged", this.l00ol, this)
};
oloOO = function ($) {
    if (!$)return;
    this._pagers.remove($);
    $[l0o1lo]("pagechanged", this.l00ol, this)
};
o01l1 = function ($) {
    $.cancel = true;
    this[lo10ol]($.pageIndex, $[llllO])
};
oOl1l = function (A) {
    var _ = this.getFrozenColumns(), D = this.getUnFrozenColumns(), B = this[o110ll](A), C = this.lO0lloHTML(A, B, D, 2), $ = this.lo000O(A, 2);
    if (!$)return;
    jQuery($).before(C);
    if ($)$.parentNode.removeChild($);
    if (this[O0O0oO]()) {
        C = this.lO0lloHTML(A, B, _, 1), $ = this.lo000O(A, 1);
        jQuery($).before(C);
        jQuery($).remove()
    }
    this[O0o0o1]()
};
lOOoO1 = function (A) {
    var _ = this.getFrozenColumns(), G = this.getUnFrozenColumns(), F = this._rowsLockContentEl.firstChild, B = this._rowsViewContentEl.firstChild, E = this[o110ll](A), D = this[l11o1o](E + 1);

    function $(_, B, C, $) {
        var F = this.lO0lloHTML(_, E, C, B);
        if (D) {
            var A = this.lo000O(D, B);
            jQuery(A).before(F)
        } else mini.append($, F)
    }

    $[o1O0l0](this, A, 2, G, B);
    if (this[O0O0oO]())$[o1O0l0](this, A, 1, _, F);
    this[O0o0o1]();
    if (this.showEmptyText) {
        var C = jQuery(".mini-grid-emptyText", this.Ol01)[0];
        if (C) {
            C.style.display = "none";
            C.parentNode.style.display = "none"
        }
    }
};
ooo11l = function (_) {
    var $ = this.lo000O(_, 1), A = this.lo000O(_, 2);
    if ($)$.parentNode.removeChild($);
    if (A)A.parentNode.removeChild(A);
    if (!A)return;
    var D = this[o1lO1l](_, 1), C = this[o1lO1l](_, 2);
    if (D)D.parentNode.removeChild(D);
    if (C)C.parentNode.removeChild(C);
    this[O0o0o1]();
    if (this.showEmptyText && this.getVisibleRows().length == 0) {
        var B = jQuery(".mini-grid-emptyText", this.Ol01)[0];
        if (B) {
            B.style.display = "";
            B.parentNode.style.display = ""
        }
    }
};
Ooo0l = function (_, $) {
    this[ol0lll](_);
    this[OOlo10](_)
};
O11l0 = function (_, $) {
    if ($ == 1 && !this[O0O0oO]())return null;
    var B = this.lO0lloGroupId(_, $), A = o0OO(B, this.el);
    return A
};
Olo01 = function (_, $) {
    if ($ == 1 && !this[O0O0oO]())return null;
    var B = this.lO0lloGroupRowsId(_, $), A = o0OO(B, this.el);
    return A
};
o0o01 = function (_, $) {
    if ($ == 1 && !this[O0O0oO]())return null;
    _ = this.getRecord(_);
    var B = this.ooo0ll(_, $), A = o0OO(B, this.el);
    return A
};
ol011 = function (A, $) {
    if ($ == 1 && !this[O0O0oO]())return null;
    A = this[lolo0l](A);
    var B = this.oo1loId(A, $), _ = o0OO(B, this.el);
    return _
};
o10Oo = function ($, A) {
    $ = this.getRecord($);
    A = this[lolo0l](A);
    if (!$ || !A)return null;
    var B = this.o0Ol($, A), _ = o0OO(B, this.el);
    return _
};
O1l1o = function ($, _) {
    return this.O01OOl($, _)
};
oo001 = function ($) {
    return this.l00OlOByEvent($)
};
oOooo = function (B) {
    var A = ol000(B.target, this.lO00o);
    if (!A)return null;
    var $ = A.id.split("$"), _ = $[$.length - 1];
    return this[o1OO0O](_)
};
o1OOl = function ($) {
    if (!$)return null;
    return this.OO111O($)
};
O1ll = function (B) {
    var _ = ol000(B.target, this._cellCls);
    if (!_)_ = ol000(B.target, this._headerCellCls);
    if (_) {
        var $ = _.id.split("$"), A = $[$.length - 1];
        return this.l001O(A)
    }
    return null
};
OoOO0 = function (A) {
    var $ = this.l00OlOByEvent(A), _ = this.OO111O(A);
    return [$, _]
};
lOl0l = function ($) {
    return this.O01Ol($)
};
ll0O1 = function ($) {
    return this._dataSource.getby_id($)
};
o0Olo = function ($) {
    return this._columnModel.l001O($)
};
Ooo0o0 = function ($, A) {
    var _ = this.lo000O($, 1), B = this.lo000O($, 2);
    if (_)l1Oo(_, A);
    if (B)l1Oo(B, A)
};
ol0ol = function ($, A) {
    var _ = this.lo000O($, 1), B = this.lo000O($, 2);
    if (_)o11o(_, A);
    if (B)o11o(B, A)
};
lllll = function (_, A) {
    _ = this[l1oOl](_);
    A = this[lolo0l](A);
    if (!_ || !A)return null;
    var $ = this.O01OOl(_, A);
    if (!$)return null;
    return Ol0oO($)
};
l1oO1 = function (A) {
    var B = this.oo1loId(A, 2), _ = document.getElementById(B);
    if (!_) {
        B = this.oo1loId(A, 1);
        _ = document.getElementById(B)
    }
    if (_) {
        var $ = Ol0oO(_);
        $.x -= 1;
        $.left = $.x;
        $.right = $.x + $.width;
        return $
    }
};
lO1O0 = function (_) {
    var $ = this.lo000O(_, 1), A = this.lo000O(_, 2);
    if (!A)return null;
    var B = Ol0oO(A);
    if ($) {
        var C = Ol0oO($);
        B.x = B.left = C.left;
        B.width = B.right - B.x
    }
    return B
};
l010O = function (_, E) {
    var F = this.isVirtualScroll(), C = this._viewRegion, A = F ? C.start : -1, B = F ? C.end : -1, K = {};
    if (A != -1) {
        var I = this.getVisibleRows();
        for (var G = A, D = B; G < D; G++) {
            var H = I[G];
            if (H)K[H._id] = true
        }
    }
    var J = new Date();
    for (G = 0, D = _.length; G < D; G++) {
        var $ = _[G];
        if (A != -1)if (!K[$._id])continue;
        if (E)this[OOlol1]($, this.lOOOOl); else this[lO10o1]($, this.lOOOOl)
    }
};
oOoOl = function (A) {
    try {
        var _ = A.target.tagName.toLowerCase();
        if (_ == "input" || _ == "textarea" || _ == "select")return;
        if (olol(A.target, "mini-placeholder-label"))return;
        if (ol000(A.target, "mini-grid-rows-content")) {
            mini[o1lloo](this._focusEl, A.pageX, A.pageY);
            this[O1loo](false)
        }
    } catch ($) {
    }
};
oOo1o = function (B) {
    try {
        var _ = this, D = this[O011o1]();
        if (D && B !== false) {
            var C = this[l10lll](D[0], D[1]);
            mini.setX(this._focusEl, C.x)
        }
        var A = this.getCurrent();
        if (A) {
            var $ = this.lo000O(A, 2);
            if ($) {
                if (B !== false) {
                    var E = Ol0oO($);
                    mini.setY(_._focusEl, E.top)
                }
                if (mini.isIE || mini.isIE11)_._focusEl[O1loo](); else _.el[O1loo]()
            }
        } else if (mini.isIE || mini.isIE11)_._focusEl[O1loo](); else _.el[O1loo]()
    } catch (F) {
    }
};
oo0O = function ($) {
    if (this.o101o == $)return;
    if (this.o101o)this[lO10o1](this.o101o, this.lO1Oo);
    this.o101o = $;
    if ($)this[OOlol1]($, this.lO1Oo)
};
OOllo = function (B, D, C) {
    B = this[l1oOl](B);
    if (!B)return;
    try {
        if (D)if (this._columnModel.isFrozenColumn(D))D = null;
        if (D) {
            var A = this.O01OOl(B, D);
            mini[lOoolO](A, this._rowsViewEl, true)
        } else if (this.isVirtualScroll()) {
            if (C != false) {
                var E = this._getViewRegion(), $ = this[o110ll](B), F = this._getRangeHeight(0, $);
                this.setScrollTop(F)
            }
        } else {
            var _ = this.lo000O(B, 2);
            mini[lOoolO](_, this._rowsViewEl, false)
        }
    } catch (G) {
    }
};
lOOl = function ($) {
    this.showLoading = $
};
lO10o = function () {
    return this.showLoading
};
l1101 = function ($) {
    this[ooO1o] = $
};
llool = function () {
    return this[ooO1o]
};
l0Ol1 = function ($) {
    this.allowHotTrackOut = $
};
ll10Ol = function () {
    return this.allowHotTrackOut
};
lOo10 = function ($) {
    this.onlyCheckSelection = $
};
OoOol = function () {
    return this.onlyCheckSelection
};
Oll10 = function ($) {
    this.allowUnselect = $
};
lllo0 = function () {
    return this.allowUnselect
};
l1O1l = function ($) {
    this[l1lO1o] = $
};
ooll00 = function () {
    return this[l1lO1o]
};
O110O = function ($) {
    this[O0lO] = $
};
loo0o = function () {
    return this[O0lO]
};
o1O11 = function ($) {
    this[ooo011] = $
};
l1lo = function () {
    return this[ooo011]
};
lO00Ol = function ($) {
    this.cellEditAction = $
};
Oo10 = function () {
    return this.cellEditAction
};
l0lO1 = function ($) {
    this.allowCellValid = $
};
l11oO = function () {
    return this.allowCellValid
};
OO001 = function ($) {
    this[o110O] = $;
    o11o(this.el, "mini-grid-resizeColumns-no");
    if (!$)l1Oo(this.el, "mini-grid-resizeColumns-no")
};
lOlo = function () {
    return this[o110O]
};
l10o0 = function ($) {
    this[o101O0] = $
};
ol1O0O = function () {
    return this[o101O0]
};
Oo100 = function ($) {
    this[OoOO1l] = $
};
OllOl = function () {
    return this[OoOO1l]
};
l0Olo = function ($) {
    this.showColumnsMenu = $
};
lOoOo = function () {
    return this.showColumnsMenu
};
oO1o0 = function ($) {
    this.editNextRowCell = $
};
looOl = function () {
    return this.editNextRowCell
};
Ol00o = function ($) {
    this.editNextOnEnterKey = $
};
O10O0l = function () {
    return this.editNextOnEnterKey
};
l1l01 = function ($) {
    this.editOnTabKey = $
};
o01Ol0 = function () {
    return this.editOnTabKey
};
l111 = function ($) {
    this.createOnEnter = $
};
oo101 = function () {
    return this.createOnEnter
};
O11o0 = function (B) {
    if (this.ll11) {
        var $ = this.ll11[0], A = this.ll11[1], _ = this.O01OOl($, A);
        if (_)if (B)l1Oo(_, this.olllll); else o11o(_, this.olllll)
    }
};
OO1Oo = function (A) {
    if (this.ll11 != A) {
        this.lll0oo(false);
        this.ll11 = A;
        if (A) {
            var $ = this[l1oOl](A[0]), _ = this[lolo0l](A[1]);
            if ($ && _)this.ll11 = [$, _]; else this.ll11 = null
        }
        this.lll0oo(true);
        if (A) {
            var B = this[O1lo0O](A[0], A[1]);
            if (!B)if (this[O0O0oO]())this[lOoolO](A[0], null, false); else this[lOoolO](A[0], A[1], false)
        }
        this[ol1O0]("currentcellchanged")
    }
};
Ol01l = function () {
    var $ = this.ll11;
    if ($)if (this[o110ll]($[0]) == -1) {
        this.ll11 = null;
        $ = null
    }
    return $
};
O1OO0Cell = function ($) {
    return this.oOO10O && this.oOO10O[0] == $[0] && this.oOO10O[1] == $[1]
};
O0l11 = function ($, A) {
    function _($, A) {
        var B = new Date();
        $ = this[l1oOl]($);
        A = this[lolo0l](A);
        var _ = [$, A];
        if ($ && A)this[oOo011](_);
        _ = this[O011o1]();
        if (this.oOO10O && _)if (this.oOO10O[0] == _[0] && this.oOO10O[1] == _[1])return;
        if (this.oOO10O)this[ll0100]();
        if (_) {
            var $ = _[0], A = _[1];
            if (A.editMode != "inline") {
                var C = this.looOl1($, A, this[O1O01O](A));
                if (C !== false) {
                    this[lOoolO]($, A, false);
                    this.oOO10O = _;
                    this.Olo0($, A)
                }
            }
        }
    }

    this._pushUpdateCallback(_, this, [$, A])
};
ll0OO = function () {
    if (this[ooo011]) {
        if (this.oOO10O)this.l1Oll()
    } else if (this[o0ol1l]()) {
        this.O1O0lo = false;
        var A = this.getDataView();
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            if (_._editing == true)this[oO0l1O]($)
        }
        this.O1O0lo = true;
        this[l0llOO]()
    }
};
O1Oo1 = function () {
    if (this[ooo011]) {
        if (this.oOO10O) {
            this.OOO11(this.oOO10O[0], this.oOO10O[1]);
            this.l1Oll()
        }
    } else if (this[o0ol1l]()) {
        this.O1O0lo = false;
        var A = this.getDataView();
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            if (_._editing == true)this[ooOol1](_)
        }
        this.O1O0lo = true;
        this[l0llOO]()
    }
};
llol0 = function (_, $) {
    _ = this[lolo0l](_);
    if (!_)return;
    if (this[ooo011]) {
        var B = _.__editor;
        if (!B)B = mini.getAndCreate(_.editor);
        if (B && B != _.editor)_.editor = B;
        return B
    } else {
        $ = this[l1oOl]($);
        _ = this[lolo0l](_);
        if (!$)$ = this[OOo10O]();
        if (!$ || !_)return null;
        var A = this.uid + "$" + $._uid + "$" + _._id + "$editor";
        return mini.get(A)
    }
};
O1lOl = function ($, E, G, D) {
    var _ = mini._getMap(E.field, $), F = {
        sender: this,
        rowIndex: this[o110ll]($),
        row: $,
        record: $,
        column: E,
        field: E.field,
        editor: G,
        value: _,
        cancel: false
    };
    this[ol1O0]("cellbeginedit", F);
    if (!mini.isNull(E[o0lo0O]) && (mini.isNull(F.value) || F.value === "")) {
        var C = E[o0lo0O], B = mini.clone({d: C});
        F.value = B.d
    }
    var G = F.editor;
    _ = F.value;
    if (F.cancel)return false;
    if (!G && E.editMode != "inline")return false;
    if (E[lOlo0] === true)return false;
    if (D === false)return true;
    if (E.editMode != "inline") {
        if (mini.isNull(_))_ = "";
        if (G[ll10OO])G[ll10OO](_);
        G.ownerRowID = $._uid;
        if (E.displayField && G[l0O0O0]) {
            var A = mini._getMap(E.displayField, $);
            if (!mini.isNull(E.defaultText) && (mini.isNull(A) || A === "")) {
                B = mini.clone({d: E.defaultText});
                A = B.d
            }
            G[l0O0O0](A)
        }
        if (this[ooo011])this.ollO = F.editor
    }
    return true
};
l0O01 = function (A, C, B, G) {
    var F = {
        sender: this,
        rowIndex: this[o110ll](A),
        record: A,
        row: A,
        column: C,
        field: C.field,
        editor: G ? G : this[O1O01O](C),
        value: mini.isNull(B) ? "" : B,
        text: "",
        cancel: false
    };
    if (F.editor && F.editor[o1oOl]) {
        try {
            F.editor[O0llO0]()
        } catch (E) {
        }
        F.value = F.editor[o1oOl]()
    }
    if (F.editor && F.editor[ooooO])F.text = F.editor[ooooO]();
    var D = mini._getMap(C.field, A), _ = F.value;
    F.oldValue = D;
    if (mini[l0oolo](D, _))return F;
    this[ol1O0]("cellcommitedit", F);
    if (F.cancel == false)if (this[ooo011]) {
        var $ = {};
        $[C.field] = F.value;
        if (C.displayField)$[C.displayField] = F.text;
        this[loo01](A, $)
    }
    return F
};
O0llo = function (_, D) {
    if (!this.oOO10O && !_)return;
    if (!_)_ = this.oOO10O[0];
    if (!D)D = this.oOO10O[1];
    var B = mini._getMap(D.field, _), F = {
        sender: this,
        rowIndex: this[o110ll](_),
        record: _,
        row: _,
        column: D,
        field: D.field,
        editor: this.ollO,
        value: B
    };
    this[ol1O0]("cellendedit", F);
    if (this[ooo011] && F.editor) {
        var E = F.editor;
        if (E && E[ooOoO])E[ooOoO](true);
        if (this.Oo11o)this.Oo11o.style.display = "none";
        var A = this.Oo11o.childNodes;
        for (var $ = A.length - 1; $ >= 0; $--) {
            var C = A[$];
            this.Oo11o.removeChild(C)
        }
        if (E && E[oOl0oo])E[oOl0oo]();
        if (E && E[ll10OO])E[ll10OO]("");
        this.ollO = null;
        this.oOO10O = null;
        if (this.allowCellValid)this.validateCell(_, D)
    }
};
ol1o0 = function (_, B) {
    if (!this.ollO)return false;
    var $ = this[l10lll](_, B);
    if ($) {
        var C = document.body.scrollWidth;
        if ($.right > C) {
            $.width = C - $.left;
            if ($.width < 10)$.width = 10;
            $.right = $.left + $.width
        }
    }
    var E = {
        sender: this,
        rowIndex: this[o110ll](_),
        record: _,
        row: _,
        column: B,
        field: B.field,
        cellBox: $,
        editor: this.ollO
    };
    this[ol1O0]("cellshowingedit", E);
    var D = E.editor;
    if (D && D[ooOoO])D[ooOoO](true);
    if ($) {
        var A = this.ol00o($, D);
        this.Oo11o.style.zIndex = mini.getMaxZIndex();
        if (D[O1OO10]) {
            D[O1OO10](this.Oo11o);
            setTimeout(function () {
                D[O1loo]();
                if (D[oOOOOo])setTimeout(function () {
                    D[oOOOOo]()
                }, 11)
            }, 50);
            if (D[lOo0l])D[lOo0l](true)
        } else if (D.el) {
            this.Oo11o.appendChild(D.el);
            setTimeout(function () {
                try {
                    D.el[O1loo]()
                } catch ($) {
                }
            }, 50)
        }
        this[ol101l](D, $);
        Ol1O(document, "mousedown", this.lolo, this);
        if (B.autoShowPopup && D[ol1O01])D[ol1O01]()
    }
};
o1lo1 = function () {
    return this.ollO
};
O100 = function (B, $) {
    if (B[oll0OO]) {
        var _ = $.width;
        if (_ < 20)_ = 20;
        B[oll0OO](_)
    }
    if (B[lOll1l] && B.type == "textarea") {
        var A = $.height - 1;
        if (B.minHeight && A < B.minHeight)A = B.minHeight;
        B[lOll1l](A)
    }
    if (B[oll0OO]) {
        _ = $.width - 1;
        if (B.minWidth && _ < B.minWidth)_ = B.minWidth;
        B[oll0OO](_)
    }
};
ollo1 = function (C) {
    if (this.ollO) {
        var A = this.O01Ol(C);
        if (this.oOO10O && A)if (this.oOO10O[0] == A.record && this.oOO10O[1] == A.column)return false;
        var _ = false;
        if (this.ollO[l1Oo0O])_ = this.ollO[l1Oo0O](C); else _ = Ol0O(this.Oo11o, C.target);
        if (_ == false) {
            var B = this;
            if (Ol0O(this.Ol01, C.target) == false)setTimeout(function () {
                B[ll0100]()
            }, 1); else {
                var $ = B.oOO10O;
                setTimeout(function () {
                    var _ = B.oOO10O;
                    if ($ == _)B[ll0100]()
                }, 70)
            }
            lol0Oo(document, "mousedown", this.lolo, this)
        }
    }
};
O1oOo = function ($, B) {
    if (!this.Oo11o) {
        this.Oo11o = mini.append(document.body, "<div class=\"mini-grid-editwrap\" style=\"position:absolute;\"></div>");
        Ol1O(this.Oo11o, "keydown", this.lo1o0, this)
    }
    this.Oo11o.style.zIndex = 1000000000;
    this.Oo11o.style.display = "block";
    var _ = $.y;
    if (B.type != "textarea")_ = $.y + $.height / 2 - 22 / 2;
    mini[o1lloo](this.Oo11o, $.x, _);
    lOool0(this.Oo11o, $.width);
    var A = document.body.scrollWidth;
    if ($.x > A)mini.setX(this.Oo11o, -1000);
    return this.Oo11o
};
l0olo = function (A) {
    var _ = this.ollO;
    if (A.keyCode == 13 && _ && _.type == "textarea")return;
    if (A.keyCode == 13) {
        var $ = this.oOO10O;
        if ($ && $[1] && $[1].enterCommit === false)return;
        this[ll0100]();
        this[O1loo]();
        if (this.editNextOnEnterKey) {
            this[ol1O0]("celleditenter", {record: $[0], column: $[1]});
            this[lOOo10](A.shiftKey == false)
        }
    } else if (A.keyCode == 27) {
        this[O0OO0l]();
        this[O1loo]()
    } else if (A.keyCode == 9) {
        this[ll0100]();
        if (this.editOnTabKey) {
            A.preventDefault();
            this[ll0100]();
            this[lOOo10](A.shiftKey == false, true)
        }
    }
};
oO0Ol = function ($) {
    this.skipReadOnlyCell = $
};
l0loo = function () {
    return this.skipReadOnlyCell
};
ololO = function ($, _) {
    var A = this.looOl1($, _, this[O1O01O](_), false);
    return A
};
O0ll = function (F, Q) {
    var M = this, B = this[O011o1]();
    if (!B)return;
    this[O1loo]();
    var G = M.getVisibleColumns(), E = B ? B[1] : null, _ = B ? B[0] : null;

    function C($) {
        return M.getVisibleRows()[$]
    }

    function A($) {
        return M.getVisibleRows()[o110ll]($)
    }

    function D() {
        return M.getVisibleRows().length
    }

    var J = G[o110ll](E), R = A(_), S = D();
    if (F === false) {
        if (this.skipReadOnlyCell) {
            var H = this, N = $();

            function $() {
                var A = 0, $ = (J - 1 === 0) ? G.length : J - 1;
                for (; $ > A; $--) {
                    E = G[$];
                    var B = H[oOOoOo](_, E);
                    if (B)return E
                }
            }

            if (!N || J == 0) {
                J = G.length;
                var O = $();
                K()
            }
        } else {
            J -= 1;
            E = G[J];
            if (!E) {
                E = G[G.length - 1];
                K()
            }
        }
        function K() {
            _ = C(R - 1);
            if (!_)return
        }
    } else if (this.editNextRowCell && !Q) {
        if (R + 1 < S)_ = C(R + 1)
    } else {
        function L() {
            _ = M[l11o1o](R + 1);
            if (!_)if (this.createOnEnter) {
                _ = {};
                this.addRow(_)
            } else return
        }

        function P() {
            var $ = (J + 1 == I) ? 0 : (J + 1);
            for (; $ < I; $++) {
                E = G[$];
                var A = H[oOOoOo](_, E);
                if (A)return E
            }
        }

        if (this.skipReadOnlyCell) {
            var H = this, I = G.length, N = P();
            if (!N || J + 1 == I) {
                J = 0;
                O = P();
                L()
            }
        } else {
            J += 1;
            E = G[J];
            if (!E) {
                E = G[0];
                L()
            }
        }
    }
    B = [_, E];
    M[oOo011](B);
    if (!M.onlyCheckSelection && M[l1lO1o])if (M.getCurrent() != _) {
        M[OOo10]();
        M[l10ll](_)
    }
    M[lOoolO](_, E, false);
    if (M[o0011o]() || E[lOlo0])return false;
    M[oOllO0]()
};
oOoOo = function (_) {
    var $ = _.ownerRowID;
    return this.getRowByUID($)
};
loO0Ol = function (row) {
    if (this[ooo011])return;
    function beginEdit(row) {
        var sss = new Date();
        row = this[l1oOl](row);
        if (!row)return;
        var rowEl = this.lo000O(row, 2);
        if (!rowEl)return;
        row._editing = true;
        this.ll1oEl(row);
        rowEl = this.lo000O(row, 2);
        l1Oo(rowEl, "mini-grid-rowEdit");
        var columns = this.getVisibleColumns();
        for (var i = 0, l = columns.length; i < l; i++) {
            var column = columns[i], value = row[column.field], cellEl = this.O01OOl(row, column);
            if (!cellEl)continue;
            if (typeof column.editor == "string")column.editor = eval("(" + column.editor + ")");
            var editorConfig = mini.copyTo({}, column.editor);
            editorConfig.id = this.uid + "$" + row._uid + "$" + column._id + "$editor";
            var editor = mini.create(editorConfig);
            if (this.looOl1(row, column, editor))if (editor) {
                l1Oo(cellEl, "mini-grid-cellEdit");
                cellEl.innerHTML = "";
                cellEl.appendChild(editor.el);
                l1Oo(editor.el, "mini-grid-editor")
            }
        }
        this[l0llOO]()
    }

    this._pushUpdateCallback(beginEdit, this, [row])
};
O1ll0 = function (B) {
    if (this[ooo011])return;
    B = this[l1oOl](B);
    if (!B || !B._editing)return;
    delete B._editing;
    var _ = this.lo000O(B), D = this.getVisibleColumns();
    for (var $ = 0, F = D.length; $ < F; $++) {
        var C = D[$], G = this.o0Ol(B, D[$]), A = document.getElementById(G);
        if (!A)continue;
        var E = A.firstChild, H = mini.get(E);
        if (!H)continue;
        H[l0lOl]()
    }
    this.ll1oEl(B);
    this[l0llOO]()
};
o1lo1o = function ($) {
    if (this[ooo011])return;
    $ = this[l1oOl]($);
    if (!$ || !$._editing)return;
    var _ = this[oO0llo]($, false, false);
    this.Olllo = false;
    this[loo01]($, _);
    this.Olllo = true;
    this[oO0l1O]($)
};
O1OO0 = function () {
    var A = this.getDataView();
    for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$];
        if (_._editing == true)return true
    }
    return false
};
O11o1 = function ($) {
    $ = this[l1oOl]($);
    if (!$)return false;
    return !!$._editing
};
o000o = function ($) {
    return $._state == "added"
};
o0001Os = function () {
    var A = [], B = this.getDataView();
    for (var $ = 0, C = B.length; $ < C; $++) {
        var _ = B[$];
        if (_._editing == true)A.push(_)
    }
    return A
};
o0001O = function () {
    var $ = this[o0O1OO]();
    return $[0]
};
oOOl0 = function (D) {
    var C = [], B = this.getDataView();
    for (var $ = 0, E = B.length; $ < E; $++) {
        var _ = B[$];
        if (_._editing == true) {
            var A = this[oO0llo]($, D);
            C.push(A)
        }
    }
    return C
};
OOoll = function (I, L, D) {
    I = this[l1oOl](I);
    if (!I || !I._editing)return null;
    var N = this[Oll1o](), O = this[o0Oll1] ? this[o0Oll1]() : null, K = {}, C = this.getVisibleColumns();
    for (var H = 0, E = C.length; H < E; H++) {
        var B = C[H], F = this.o0Ol(I, C[H]), A = document.getElementById(F);
        if (!A)continue;
        var P = null;
        if (B.type == "checkboxcolumn" || B.type == "radiobuttoncolumn") {
            var J = B.getCheckBoxEl(I, B), _ = J.checked ? B.trueValue : B.falseValue;
            P = this.OOO11(I, B, _)
        } else {
            var M = A.firstChild, G = mini.get(M);
            if (!G)continue;
            P = this.OOO11(I, B, null, G)
        }
        if (D !== false) {
            mini._setMap(B.field, P.value, K);
            if (B.displayField)mini._setMap(B.displayField, P.text, K)
        } else {
            K[B.field] = P.value;
            if (B.displayField)K[B.displayField] = P.text
        }
    }
    K[N] = I[N];
    if (O)K[O] = I[O];
    if (L) {
        var $ = mini.copyTo({}, I);
        K = mini.copyTo($, K)
    }
    return K
};
lOO1O = function () {
    if (!this[oOO1o]())return;
    this.O1O0lo = false;
    var _ = this.getGroupingView();
    for (var $ = 0, B = _.length; $ < B; $++) {
        var A = _[$];
        this[OoOoOO](A)
    }
    this.O1O0lo = true;
    this[l0llOO]()
};
loO1o = function () {
    if (!this[oOO1o]())return;
    this.O1O0lo = false;
    var _ = this.getGroupingView();
    for (var $ = 0, B = _.length; $ < B; $++) {
        var A = _[$];
        this[o0l1o](A)
    }
    this.O1O0lo = true;
    this[l0llOO]()
};
l01lo = function ($) {
    if ($.expanded)this[OoOoOO]($); else this[o0l1o]($)
};
oo00o = function ($) {
    $ = this.getRowGroup($);
    if (!$)return;
    $.expanded = false;
    var C = this[OOOOO0]($, 1), _ = this[l1oO1l]($, 1), B = this[OOOOO0]($, 2), A = this[l1oO1l]($, 2);
    if (_)_.style.display = "none";
    if (A)A.style.display = "none";
    if (C)l1Oo(C, "mini-grid-group-collapse");
    if (B)l1Oo(B, "mini-grid-group-collapse");
    this[l0llOO]()
};
OOoOl = function ($) {
    $ = this.getRowGroup($);
    if (!$)return;
    $.expanded = true;
    var C = this[OOOOO0]($, 1), _ = this[l1oO1l]($, 1), B = this[OOOOO0]($, 2), A = this[l1oO1l]($, 2);
    if (_)_.style.display = "";
    if (A)A.style.display = "";
    if (C)o11o(C, "mini-grid-group-collapse");
    if (B)o11o(B, "mini-grid-group-collapse");
    this[l0llOO]()
};
oOo00 = function () {
    this.O1O0lo = false;
    var A = this.getDataView();
    for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$];
        this[OO1ol0](_)
    }
    this.O1O0lo = true;
    this[l0llOO]()
};
ol0ol1 = function () {
    this.O1O0lo = false;
    var A = this.getDataView();
    for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$];
        this[llo1ll](_)
    }
    this.O1O0lo = true;
    this[l0llOO]()
};
O0100 = function ($) {
    $ = this[l1oOl]($);
    if (!$)return false;
    return !!$._showDetail
};
Ool1Ol = function ($) {
    $ = this[l1oOl]($);
    if (!$)return;
    if (grid[oo0OOO]($))grid[llo1ll]($); else grid[OO1ol0]($)
};
OOO001 = function (_) {
    _ = this[l1oOl](_);
    if (!_ || _._showDetail == true)return;
    _._showDetail = true;
    var D = this[o1lO1l](_, 1, true), C = this[o1lO1l](_, 2, true);
    if (D)D.style.display = "";
    if (C)C.style.display = "";
    var $ = this.lo000O(_, 1), A = this.lo000O(_, 2);
    if ($)l1Oo($, "mini-grid-expandRow");
    if (A)l1Oo(A, "mini-grid-expandRow");
    this[ol1O0]("showrowdetail", {record: _});
    var B = this;
    if (this[O0O0oO]())setTimeout(function () {
        B.syncRowDetail(_)
    }, 1);
    this[l0llOO]()
};
OO11o = function (_) {
    _ = this[l1oOl](_);
    if (!_ || _._showDetail !== true)return;
    _._showDetail = false;
    var C = this[o1lO1l](_, 1), B = this[o1lO1l](_, 2);
    if (C)C.style.display = "none";
    if (B)B.style.display = "none";
    var $ = this.lo000O(_, 1), A = this.lo000O(_, 2);
    if ($)o11o($, "mini-grid-expandRow");
    if (A)o11o(A, "mini-grid-expandRow");
    this[ol1O0]("hiderowdetail", {record: _});
    this[l0llOO]()
};
lloOo = function (_, B, $) {
    _ = this[l1oOl](_);
    if (!_)return null;
    var C = this.lo110(_, B), A = document.getElementById(C);
    if (!A && $ === true)A = this.O0O111(_, B);
    return A
};
lO001 = function (_, B) {
    var $ = this.getFrozenColumns(), F = this.getUnFrozenColumns(), C = $.length;
    if (B == 2)C = F.length;
    var A = this.lo000O(_, B);
    if (!A)return null;
    var E = this.lo110(_, B), D = "<tr id=\"" + E + "\" class=\"mini-grid-detailRow\"><td style=\"width:0\"></td><td class=\"mini-grid-detailCell\" colspan=\"" + C + "\"></td></tr>";
    jQuery(A).after(D);
    return document.getElementById(E)
};
OOOOlO = function ($, _) {
    return this._id + "$detail" + _ + "$" + $._id
};
O0Oll = function ($, A) {
    if (!A)A = 2;
    var _ = this[o1lO1l]($, A);
    if (_)return _.cells[1]
};
OOl10 = function ($) {
    this.autoHideRowDetail = $
};
lO10l = function () {
    return this.autoHideRowDetail
};
o100l = function (F) {
    if (F && mini.isArray(F) == false)F = [F];
    var $ = this, A = $.getVisibleColumns();
    if (!F)F = A;
    var D = $.getDataView();
    D.push({});
    var B = [];
    for (var _ = 0, G = F.length; _ < G; _++) {
        var C = F[_];
        C = $[lolo0l](C);
        if (!C)continue;
        var H = E(C);
        B.addRange(H)
    }
    function E(F) {
        if (!F.field)return;
        var K = [], I = -1, G = 1, J = A[o110ll](F), C = null;
        for (var $ = 0, H = D.length; $ < H; $++) {
            var B = D[$], _ = mini._getMap(F.field, B);
            if (I == -1 || !mini[l0oolo](_, C)) {
                if (G > 1) {
                    var E = {rowIndex: I, columnIndex: J, rowSpan: G, colSpan: 1};
                    K.push(E)
                }
                I = $;
                G = 1;
                C = _
            } else G++
        }
        return K
    }

    $[O1lO1O](B)
};
OO1ol = function (D) {
    if (!mini.isArray(D))return;
    this._mergedCells = D;
    var C = this._mergedCellMaps = {};

    function _(G, H, E, D, A) {
        for (var $ = G, F = G + E; $ < F; $++)for (var B = H, _ = H + D; B < _; B++)if ($ == G && B == H)C[$ + ":" + B] = A; else C[$ + ":" + B] = true
    }

    var D = this._mergedCells;
    if (D)for (var $ = 0, B = D.length; $ < B; $++) {
        var A = D[$];
        if (!A.rowSpan)A.rowSpan = 1;
        if (!A.colSpan)A.colSpan = 1;
        _(A.rowIndex, A.columnIndex, A.rowSpan, A.colSpan, A)
    }
    this.deferUpdate()
};
lOlO00 = function ($) {
    this[O1lO1O]($)
};
OloOOO = function (_, A) {
    if (!this._mergedCellMaps)return true;
    var $ = this._mergedCellMaps[_ + ":" + A];
    return !($ === true)
};
o0OOl = function ($, _) {
    if (!this._mergedCellMaps)return null;
    var A = this[o110ll]($), B = this[O1o10]()[o110ll](_);
    return this._mergedCellMaps[A + ":" + B]
};
lOOOO = function (I, E, A, B) {
    var J = [];
    if (!mini.isNumber(I))return [];
    if (!mini.isNumber(E))return [];
    var C = this.getVisibleColumns(), G = this.getDataView();
    for (var F = I, D = I + A; F < D; F++)for (var H = E, $ = E + B; H < $; H++) {
        var _ = this.O01OOl(F, H);
        if (_)J.push(_)
    }
    return J
};
l00l10 = function () {
    var _ = this[l0OoO0]().clone(), $ = this;
    mini.sort(_, function (A, C) {
        var _ = $[o110ll](A), B = $[o110ll](C);
        if (_ > B)return 1;
        if (_ < B)return -1;
        return 0
    }, this);
    return _
};
o00ol = function ($) {
    return "Records " + $.length
};
Oll11 = function ($) {
    this.allowLeafDropIn = $
};
l0OO0 = function () {
    return this.allowLeafDropIn
};
o0001 = function ($) {
    this.allowDrag = $
};
oo10l = function () {
    return this.allowDrag
};
l1O1O = function ($) {
    this[O10Ol] = $
};
Ol1O0 = function () {
    return this[O10Ol]
};
Oloo1 = function (_, $) {
    if (this[o0011o]() || this.enabled == false)return false;
    if (!this.allowDrag || !$.allowDrag)return false;
    if (_.allowDrag === false)return false;
    return true
};
Oool = function (_, $) {
    var A = {node: _, nodes: this.l01lData(), column: $, cancel: false};
    A.record = A.node;
    A.records = A.nodes;
    A.dragText = this.l01lText(A.nodes);
    this[ol1O0]("dragstart", A);
    return A
};
lo1OO = function (A, _, $, B) {
    var C = {};
    C.from = B;
    C.effect = A;
    C.nodes = _;
    C.node = C.nodes[0];
    C.targetNode = $;
    C.dragNodes = _;
    C.dragNode = C.dragNodes[0];
    C.dropNode = C.targetNode;
    C.dragAction = C.action;
    this[ol1O0]("givefeedback", C);
    return C
};
OoO1o = function (_, $, A) {
    _ = _.clone();
    var B = {dragNodes: _, targetNode: $, action: A, cancel: false};
    B.dragNode = B.dragNodes[0];
    B.dropNode = B.targetNode;
    B.dragAction = B.action;
    this[ol1O0]("beforedrop", B);
    this[ol1O0]("dragdrop", B);
    return B
};
looo = function (B) {
    if (!mini.isArray(B))return;
    var C = this;
    B = B.sort(function ($, A) {
        var B = C[o110ll]($), _ = C[o110ll](A);
        if (B > _)return 1;
        return -1
    });
    for (var A = 0, D = B.length; A < D; A++) {
        var _ = B[A], $ = this[o110ll](_);
        this.moveRow(_, $ - 1)
    }
};
o00l1 = function (B) {
    if (!mini.isArray(B))return;
    var C = this;
    B = B.sort(function ($, A) {
        var B = C[o110ll]($), _ = C[o110ll](A);
        if (B > _)return 1;
        return -1
    });
    B.reverse();
    for (var A = 0, D = B.length; A < D; A++) {
        var _ = B[A], $ = this[o110ll](_);
        this.moveRow(_, $ + 2)
    }
};
O1000 = function ($) {
    this._dataSource.ajaxAsync = $;
    this.ajaxAsync = $
};
ol11o = function () {
    return this._dataSource.ajaxAsync
};
oOOl1 = function ($) {
    this._dataSource.ajaxMethod = $;
    this.ajaxMethod = $
};
o0111 = function () {
    return this._dataSource.ajaxMethod
};
o0OoO = function ($) {
    this._dataSource.ajaxType = $;
    this.ajaxType = $
};
Ool10O = function () {
    return this._dataSource.ajaxType
};
Ol0lo = function ($) {
    this._dataSource[lOllOl]($)
};
OoO0 = function () {
    return this._dataSource[Ol1o1O]()
};
OoOOl0 = function ($) {
    this._dataSource[l1ol1o]($)
};
O1oOO = function () {
    return this._dataSource[O0lOl0]()
};
o0O1O = function ($) {
    this._dataSource[Oo1100]($);
    this.url = $
};
OO0o = function () {
    return this._dataSource[oO0l10]()
};
O0l0o = function ($, B, A, _) {
    this._dataSource[looOlo]($, B, A, _)
};
O0o0 = function (A, _, $) {
    this.accept();
    this._dataSource[Olllo1](A, _, $)
};
oo10O = function ($, _) {
    this._dataSource[lo10ol]($, _)
};
l0oo = function (A, _) {
    if (!A)return null;
    var B = this._dataSource;
    this.sortField = B.sortField = A;
    this.sortOrder = B.sortOrder = _;
    if (this._dataSource.sortMode == "server")this._dataSource[llO1lO](A, _); else {
        var $ = this._columnModel._getDataTypeByField(A);
        this._dataSource._doClientSortField(A, _, $)
    }
};
O0ooOO = function ($) {
    this.showCellTip = $
};
l01l0 = function () {
    return this.showCellTip
};
oOo0o = function ($) {
    this._dataSource[lo01oo]($);
    this[oo1O0] = $
};
lO0ll = function () {
    return this._dataSource[olooOl]()
};
o1oOO = function ($) {
    this._dataSource[Ol001O]($);
    this.selectOnLoad = $
};
ooo1o = function () {
    return this._dataSource[l110oO]()
};
lO110 = function ($) {
    this._dataSource[lO11OO]($);
    this.sortMode = $
};
OO110 = function () {
    return this._dataSource[loO01o]()
};
O1101 = function ($) {
    this._dataSource[ll10ll]($);
    this[lo00O0] = $
};
oO0lo = function () {
    return this._dataSource[Oooo1O]()
};
lOooO = function ($) {
    this._dataSource[Ol0loO]($);
    this._virtualRows = $;
    this[llllO] = $
};
oOl0O = function () {
    return this._dataSource[O0loO0]()
};
llo1l = function ($) {
    this._dataSource[oloo1o]($);
    this[ool1oo] = $
};
oOlOO = function () {
    return this._dataSource[lloO00]()
};
o1O1 = function () {
    return this._dataSource[oo011l]()
};
OO1o = function ($) {
    this._dataSource[lllolO]($);
    this.sortField = $
};
o1OO = function () {
    return this._dataSource.sortField
};
O1olOo = function ($) {
    this._dataSource[Ol01O0]($);
    this.sortOrder = $
};
o11ll = function () {
    return this._dataSource.sortOrder
};
Olo1lO = function ($) {
    this._dataSource.pageIndexField = $;
    this.pageIndexField = $
};
oo0l0 = function () {
    return this._dataSource.pageIndexField
};
Oo0l0l = function ($) {
    this._dataSource.pageSizeField = $;
    this.pageSizeField = $
};
ooo1 = function () {
    return this._dataSource.pageSizeField
};
Oo0O10 = function ($) {
    this._dataSource.startField = $;
    this.startField = $
};
lo1O1 = function () {
    return this._dataSource.startField
};
l0O10 = function ($) {
    this._dataSource.limitField = $;
    this.limitField = $
};
lo1O = function () {
    return this._dataSource.limitField
};
O11ll = function ($) {
    this._dataSource.sortFieldField = $;
    this.sortFieldField = $
};
o011l = function () {
    return this._dataSource.sortFieldField
};
O1oll = function ($) {
    this._dataSource.sortOrderField = $;
    this.sortOrderField = $
};
l11oo = function () {
    return this._dataSource.sortOrderField
};
oO0oo = function ($) {
    this._dataSource.totalField = $;
    this.totalField = $
};
oOl10 = function () {
    return this._dataSource.totalField
};
OlOl0 = function ($) {
    this._dataSource.dataField = $;
    this.dataField = $
};
oooO1 = function () {
    return this._dataSource.dataField
};
ooo0l = function ($) {
    this._dataSource.errorField = $;
    this.errorField = $
};
lo1oO = function () {
    return this._dataSource.errorField
};
l00o1 = function ($) {
    this._dataSource.errorMsgField = $;
    this.errorMsgField = $
};
o0O11 = function () {
    return this._dataSource.errorMsgField
};
O0l1ll = function ($) {
    this._dataSource.stackTraceField = $;
    this.stackTraceField = $
};
l1lO0 = function () {
    return this._dataSource.stackTraceField
};
O1oO0 = function ($) {
    this._bottomPager[l1O0O0]($)
};
oll0O0 = function () {
    return this._bottomPager[oOOO11]()
};
o10lO = function ($) {
    this._bottomPager.sizeText = $
};
O0Olo = function () {
    return this.sizeText
};
O0oll = function ($) {
    this._bottomPager[oll1ol]($)
};
l0OlO = function () {
    return this.showPagerButtonText
};
Oooo = function ($) {
    this._bottomPager[llllOl]($)
};
lOllo = function () {
    return this.showPagerButtonIcon
};
l1l0Ol = function ($) {
    this._bottomPager[lOll10]($)
};
lO01O = function () {
    return this._bottomPager[o0lOO1]()
};
l0l1l1 = function ($) {
    this._bottomPager[lO0o0O]($)
};
lllOO = function () {
    return this._bottomPager[loo10l]()
};
ll0lO = function ($) {
    if (!mini.isArray($))return;
    this._bottomPager[ll0o1]($)
};
llOl1 = function () {
    return this._bottomPager[l10O0]()
};
lOlO = function ($) {
    this._bottomPager[o10Olo]($)
};
OO100 = function () {
    return this._bottomPager[l011oO]()
};
OOo0 = function ($) {
    this.showPageIndex = $;
    this._bottomPager[O01000]($)
};
OO0o0 = function () {
    return this._bottomPager[o0ool0]()
};
olOll = function ($) {
    this._bottomPager[o1loO]($)
};
ol00O = function () {
    return this._bottomPager[l0lo1O]()
};
l1Ool = function ($) {
    this.pagerStyle = $;
    lO01l(this._bottomPager.el, $)
};
o0Ol1 = function ($) {
    this.pagerCls = $;
    l1Oo(this._bottomPager.el, $)
};
loOl1 = function ($) {
    this.dropAction = $
};
ooOo0 = function () {
    return this.dropAction
};
lOo1 = function ($) {
    this.groupTitleCollapsible = $
};
o0Ol0 = function () {
    return this.groupTitleCollapsible
};
llOOo = function (_, A) {
    var $ = Ol0O(this.Ol01, A.htmlEvent.target);
    if ($)_[ol1O0]("BeforeOpen", A); else A.cancel = true
};
ollo0 = function (B) {
    var A = {popupEl: this.el, htmlEvent: B, cancel: false};
    if (Ol0O(this._columnsEl, B.target)) {
        if (this.headerContextMenu) {
            this.headerContextMenu[ol1O0]("BeforeOpen", A);
            if (A.cancel == true)return;
            this.headerContextMenu[ol1O0]("opening", A);
            if (A.cancel == true)return;
            this.headerContextMenu[lOOOo1](B.pageX, B.pageY);
            this.headerContextMenu[ol1O0]("Open", A)
        }
    } else {
        var $ = ol000(B.target, "mini-grid-detailRow");
        if ($ && Ol0O(this.el, $))return;
        var _ = ol000(B.target, "mini-tree-nodeshow");
        if (!_ && this.type == "tree")return;
        if (this[o00O1o]) {
            this[lloO1O](this.contextMenu, A);
            if (A.cancel == true)return;
            this[o00O1o][ol1O0]("opening", A);
            if (A.cancel == true)return;
            this[o00O1o][lOOOo1](B.pageX, B.pageY);
            this[o00O1o][ol1O0]("Open", A)
        }
    }
    return false
};
lo101 = function ($) {
    var _ = this.Ooo0($);
    if (!_)return;
    if (this.headerContextMenu !== _) {
        this.headerContextMenu = _;
        this.headerContextMenu.owner = this;
        Ol1O(this.el, "contextmenu", this.O101, this)
    }
};
ll0Oo = function () {
    return this.headerContextMenu
};
l0o1o = function () {
    return this._dataSource.l0110o
};
oooOo = function ($) {
    this._dataSource.l0110o = $
};
o0l1O = function ($) {
    this._dataSource.l101l = $
};
OoOll = function ($) {
    this._dataSource.l1o10 = $
};
O100Oo = function ($) {
    this._dataSource._autoCreateNewID = $
};
Ol10o = function (el) {
    var attrs = lloO10[ollolO][ol1oOl][o1O0l0](this, el), cs = mini[l00oo](el);
    for (var i = 0, l = cs.length; i < l; i++) {
        var node = cs[i], property = jQuery(node).attr("property");
        if (!property)continue;
        property = property.toLowerCase();
        if (property == "columns") {
            attrs.columns = mini.llllo(node);
            mini[oll100](node)
        } else if (property == "data") {
            attrs.data = node.innerHTML;
            mini[oll100](node)
        }
    }
    mini[Ol100O](el, attrs, ["oncelleditenter", "onselect", "ondeselect", "onbeforeselect", "onbeforedeselect", "url", "sizeList", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "pagerCls", "pagerStyle", "onheadercellclick", "onheadercellmousedown", "onheadercellcontextmenu", "onrowdblclick", "onrowclick", "onrowmousedown", "onrowcontextmenu", "onrowmouseenter", "onrowmouseleave", "oncellclick", "oncellmousedown", "oncellcontextmenu", "oncelldblclick", "onbeforeload", "onpreload", "onloaderror", "onload", "onupdate", "ondrawcell", "oncellbeginedit", "onselectionchanged", "ondrawgroup", "onbeforeshowrowdetail", "onbeforehiderowdetail", "onshowrowdetail", "onhiderowdetail", "idField", "valueField", "pager", "oncellcommitedit", "oncellendedit", "headerContextMenu", "loadingMsg", "emptyText", "cellEditAction", "sortMode", "oncellvalidation", "onsort", "ondrawsummarycell", "ondrawgroupsummarycell", "onresize", "oncolumnschanged", "ajaxMethod", "ajaxOptions", "onaddrow", "onupdaterow", "onremoverow", "onmoverow", "onbeforeaddrow", "onbeforeupdaterow", "onbeforeremoverow", "onbeforemoverow", "pageIndexField", "pageSizeField", "sortFieldField", "sortOrderField", "startField", "limitField", "totalField", "dataField", "sortField", "sortOrder", "stackTraceField", "errorField", "errorMsgField", "pagerButtons", "onbeforegroupclick", "dropAction", "sizeText", "pagerType"]);
    mini[Olo01O](el, attrs, ["showColumns", "showFilterRow", "showSummaryRow", "showPager", "showFooter", "enableGroupOrder", "showHGridLines", "showVGridLines", "showSortIcon", "allowSortColumn", "allowMoveColumn", "allowResizeColumn", "fitColumns", "showLoading", "multiSelect", "allowAlternating", "resultAsData", "allowRowSelect", "allowUnselect", "onlyCheckSelection", "allowHotTrackOut", "enableHotTrack", "showPageIndex", "showPageSize", "showTotalCount", "checkSelectOnLoad", "allowResize", "autoLoad", "autoHideRowDetail", "allowCellSelect", "allowCellEdit", "allowCellWrap", "allowHeaderWrap", "selectOnLoad", "virtualScroll", "collapseGroupOnLoad", "showGroupSummary", "showEmptyText", "allowCellValid", "showModified", "showColumnsMenu", "showPageInfo", "showReloadButton", "showNewRow", "editNextOnEnterKey", "createOnEnter", "skipReadOnlyCell", "ajaxAsync", "allowDrag", "allowDrop", "allowLeafDropIn", "editNextRowCell", "fixedRowHeight", "showCellTip", "showPagerButtonText", "showPagerButtonIcon", "groupTitleCollapsible"]);
    mini[oOOl00](el, attrs, ["frozenStartColumn", "frozenEndColumn", "pageSizeWidth", "pageIndex", "pageSize", "defaultRowHeight", "defaultColumnWidth"]);
    if (typeof attrs.ajaxOptions == "string")attrs.ajaxOptions = eval("(" + attrs.ajaxOptions + ")");
    if (typeof attrs[oO0101] == "string")attrs[oO0101] = eval("(" + attrs[oO0101] + ")");
    if (!attrs[O00o0] && attrs[O01oll])attrs[O00o0] = attrs[O01oll];
    if (attrs.pagerButtons)attrs.pagerButtons = o0OO(attrs.pagerButtons);
    return attrs
};
ool0O = function () {
    return this._textEl.value
};
llOO = function ($) {
    if (typeof $ == "string")return this;
    this.ownerMenu = $.ownerMenu;
    delete $.ownerMenu;
    o110o1[ollolO][OO1O1l][o1O0l0](this, $);
    return this
};
o1O1O = function () {
    var $ = this.el = document.createElement("div");
    this.el.className = "mini-menuitem";
    this.el.innerHTML = "<div class=\"mini-menuitem-inner\"><div class=\"mini-menuitem-icon mini-iconfont\"></div><div class=\"mini-menuitem-text\"></div><div class=\"mini-menuitem-allow\"></div></div>";
    this._innerEl = this.el.firstChild;
    this.O11000 = this._innerEl.firstChild;
    this._textEl = this._innerEl.childNodes[1];
    this.allowEl = this._innerEl.lastChild
};
o00o1 = function () {
    O0o0o0(function () {
        o1l0lo(this.el, "mouseover", this.ol0010, this)
    }, this)
};
oO0o0 = function () {
    if (this.oolo)return;
    this.oolo = true;
    o1l0lo(this.el, "click", this.oO0o1l, this);
    o1l0lo(this.el, "mouseup", this.oOlol1, this);
    o1l0lo(this.el, "mouseout", this.O11olO, this)
};
O10o = function ($) {
    this.menu = this._innerEl = this.O11000 = this._textEl = this.allowEl = null;
    o110o1[ollolO][l0lOl][o1O0l0](this, $)
};
oO1l0 = function ($) {
    if (Ol0O(this.el, $.target))return true;
    if (this.menu && this.menu[l1Oo0O]($))return true;
    return false
};
o1l11 = function () {
    return this.img && this[o0oOO1]() ? this[o0oOO1]().imgPath + this.img : this.img
};
ololo = function () {
    var _ = this[OOl1o](), $ = !!(this[O110l] || this.iconCls || this[Oolool] || _);
    if (this.O11000) {
        lO01l(this.O11000, this[O110l]);
        l1Oo(this.O11000, this.iconCls);
        if (_ && !this.checked) {
            var A = "background-image:url(" + _ + ")";
            lO01l(this.O11000, A)
        }
        if (this.checked)jQuery(this.O11000).css({"background-image": ""});
        this.O11000.style.display = $ ? "block" : "none"
    }
    if (this.iconPosition == "top")l1Oo(this.el, "mini-menuitem-icontop"); else o11o(this.el, "mini-menuitem-icontop")
};
o1oO0 = function () {
    return this.menu && this.menu.items.length > 0
};
Oooo0o = function () {
    if (this._textEl)this._textEl.innerHTML = this.text;
    this[OOl01o]();
    if (this.checked) {
        l1Oo(this.el, this.ooOO);
        jQuery(this.O11000).css({"background-image": ""})
    } else o11o(this.el, this.ooOO);
    if (this.allowEl)if (this[lO1O11]())this.allowEl.style.display = "block"; else this.allowEl.style.display = "none"
};
Ooo11 = function ($) {
    this.text = $;
    if (this._textEl)this._textEl.innerHTML = this.text
};
OOol = function () {
    return this.text
};
OooOoo = function ($) {
    o11o(this.O11000, this.iconCls);
    this.iconCls = $;
    this[OOl01o]()
};
O1010 = function () {
    return this.iconCls
};
lo011 = function ($) {
    this.img = $;
    this[OOl01o]()
};
Ol0O1 = function () {
    return this.img
};
Ollll = function ($) {
    this[O110l] = $;
    this[OOl01o]()
};
oOOOO = function () {
    return this[O110l]
};
OOoO1 = function ($) {
    this.iconPosition = $;
    this[OOl01o]()
};
O001 = function () {
    return this.iconPosition
};
Oo1OoO = function ($) {
    this[Oolool] = $;
    if ($)l1Oo(this.el, "mini-menuitem-showcheck"); else o11o(this.el, "mini-menuitem-showcheck");
    this[l0loO0]()
};
oOOO = function () {
    return this[Oolool]
};
OO1ll = function ($) {
    if (this.checked != $) {
        this.checked = $;
        this[l0loO0]();
        this[ol1O0]("checkedchanged")
    }
};
lo1l1 = function () {
    return this.checked
};
Ol11O = function ($) {
    if (this[ll00] != $)this[ll00] = $
};
lol0 = function () {
    return this[ll00]
};
lloOO = function ($) {
    this[llOoOO]($)
};
oOlo = function ($) {
    if (mini.isArray($))$ = {type: "menu", items: $};
    if (this.menu !== $) {
        $.ownerItem = this;
        this.menu = mini.getAndCreate($);
        this.menu[O1ll1]();
        this.menu.ownerItem = this;
        this[l0loO0]();
        this.menu[Ol1oO1]("itemschanged", this.lOllO, this)
    }
};
oOlOo = function () {
    return this.menu
};
olloo = function () {
    if (this.menu && this.menu[l0Ooo]() == false) {
        this.menu.setHideAction("outerclick");
        var $ = {
            xAlign: "outright",
            yAlign: "top",
            outXAlign: "outleft",
            outYAlign: "below",
            popupCls: "mini-menu-popup"
        };
        if (this.ownerMenu && this.ownerMenu.vertical == false) {
            $.xAlign = "left";
            $.yAlign = "below";
            $.outXAlign = null
        }
        this.menu[O0ll1o](this.el, $);
        this.menu[oll1o0]("mini-menu-open")
    }
};
ol0o0Menu = function () {
    if (this.menu)this.menu[O1ll1]()
};
ol0o0 = function () {
    this[OOo11]();
    this[lOo0l](false)
};
Oo00l = function ($) {
    this[l0loO0]()
};
O110o = function () {
    if (this.ownerMenu)if (this.ownerMenu.ownerItem)return this.ownerMenu.ownerItem[o0oOO1](); else return this.ownerMenu;
    return null
};
O1oo = function (D) {
    if (this[o0011o]())return;
    if (this[Oolool])if (this.ownerMenu && this[ll00]) {
        var B = this.ownerMenu[l01lll](this[ll00]);
        if (B.length > 0) {
            if (this.checked == false) {
                for (var _ = 0, C = B.length; _ < C; _++) {
                    var $ = B[_];
                    if ($ != this)$[lOoooO](false)
                }
                this[lOoooO](true)
            }
        } else this[lOoooO](!this.checked)
    } else this[lOoooO](!this.checked);
    this[ol1O0]("click");
    var A = this[o0oOO1]();
    if (A)A[OOllol](this, D)
};
ooOO1 = function (_) {
    if (this[o0011o]())return;
    if (this.ownerMenu) {
        var $ = this;
        setTimeout(function () {
            if ($[l0Ooo]())$.ownerMenu[O111l1]($)
        }, 1)
    }
};
olOOo = function ($) {
    if (this[o0011o]())return;
    this.o00lo();
    l1Oo(this.el, this._hoverCls);
    this.el.title = this.text;
    if (this._textEl.scrollWidth > this._textEl.clientWidth)this.el.title = this.text; else this.el.title = "";
    if (this.ownerMenu)if (this.ownerMenu[O0OOlo]() == true)this.ownerMenu[O111l1](this); else if (this.ownerMenu[o0o0l1]())this.ownerMenu[O111l1](this)
};
l0lo0 = function ($) {
    o11o(this.el, this._hoverCls)
};
O1Ooo = function (_, $) {
    this[Ol1oO1]("click", _, $)
};
looOo = function (_, $) {
    this[Ol1oO1]("checkedchanged", _, $)
};
O0o0o = function ($) {
    var A = o110o1[ollolO][ol1oOl][o1O0l0](this, $), _ = jQuery($);
    A.text = $.innerHTML;
    mini[Ol100O]($, A, ["text", "iconCls", "iconStyle", "iconPosition", "groupName", "onclick", "oncheckedchanged"]);
    mini[Olo01O]($, A, ["checkOnClick", "checked"]);
    return A
};
oOo0 = function () {
    if (!this[Ooo1oo]())return;
    l1ol11[ollolO][l0llOO][o1O0l0](this);
    var $ = l010(this.el);
    if (mini.isIE6)l10o(this._borderEl, $);
    $ -= 2;
    if ($ < 0)$ = 0;
    this._textEl.style.height = $ + "px"
};
O00O0 = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-splitter";
    this.el.innerHTML = "<div class=\"mini-splitter-border\"><div id=\"1\" class=\"mini-splitter-pane mini-splitter-pane1\"></div><div id=\"2\" class=\"mini-splitter-pane mini-splitter-pane2\"></div><div class=\"mini-splitter-handler\"></div></div>";
    this._borderEl = this.el.firstChild;
    this.o10o = this._borderEl.firstChild;
    this.ol1o = this._borderEl.childNodes[1];
    this.O0ll1 = this._borderEl.lastChild
};
OOlo0 = function () {
    O0o0o0(function () {
        Ol1O(this.el, "click", this.oO0o1l, this);
        Ol1O(this.el, "mousedown", this.Ol0l, this)
    }, this)
};
Ol1ll = function () {
    this.pane1 = {
        id: "",
        index: 1,
        minSize: 10,
        maxSize: 100000,
        size: "",
        showCollapseButton: false,
        cls: "",
        style: "",
        visible: true,
        expanded: true
    };
    this.pane2 = mini.copyTo({}, this.pane1);
    this.pane2.index = 2
};
O11o = function () {
    this[l0llOO]()
};
l0Oo0 = function () {
    if (!this[Ooo1oo]())return;
    this.O0ll1.style.cursor = this[lO0oOO] ? "" : "default";
    o11o(this.el, "mini-splitter-vertical");
    if (this.vertical)l1Oo(this.el, "mini-splitter-vertical");
    o11o(this.o10o, "mini-splitter-pane1-vertical");
    o11o(this.ol1o, "mini-splitter-pane2-vertical");
    if (this.vertical) {
        l1Oo(this.o10o, "mini-splitter-pane1-vertical");
        l1Oo(this.ol1o, "mini-splitter-pane2-vertical")
    }
    o11o(this.O0ll1, "mini-splitter-handler-vertical");
    if (this.vertical)l1Oo(this.O0ll1, "mini-splitter-handler-vertical");
    var B = this[o11lOl](true), _ = this[llO1l](true);
    if (!jQuery.boxModel) {
        var Q = olO0(this._borderEl);
        B = B + Q.top + Q.bottom;
        _ = _ + Q.left + Q.right
    }
    if (_ < 0)_ = 0;
    if (B < 0)B = 0;
    this._borderEl.style.width = _ + "px";
    this._borderEl.style.height = B + "px";
    var $ = this.o10o, C = this.ol1o, G = jQuery($), I = jQuery(C);
    $.style.display = C.style.display = this.O0ll1.style.display = "";
    var D = this[looo01];
    this.pane1.size = String(this.pane1.size);
    this.pane2.size = String(this.pane2.size);
    var F = parseFloat(this.pane1.size), H = parseFloat(this.pane2.size), O = isNaN(F), T = isNaN(H), N = !isNaN(F) && this.pane1.size[o110ll]("%") != -1, R = !isNaN(H) && this.pane2.size[o110ll]("%") != -1, J = !O && !N, M = !T && !R, P = this.vertical ? B - this[looo01] : _ - this[looo01], K = p2Size = 0;
    if (O || T) {
        if (O && T) {
            K = parseInt(P / 2);
            p2Size = P - K
        } else if (J) {
            K = F;
            p2Size = P - K
        } else if (N) {
            K = parseInt(P * F / 100);
            p2Size = P - K
        } else if (M) {
            p2Size = H;
            K = P - p2Size
        } else if (R) {
            p2Size = parseInt(P * H / 100);
            K = P - p2Size
        }
    } else if (N && M) {
        p2Size = H;
        K = P - p2Size
    } else if (J && R) {
        K = F;
        p2Size = P - K
    } else {
        var L = F + H;
        K = parseInt(P * F / L);
        p2Size = P - K
    }
    if (K > this.pane1.maxSize) {
        K = this.pane1.maxSize;
        p2Size = P - K
    }
    if (p2Size > this.pane2.maxSize) {
        p2Size = this.pane2.maxSize;
        K = P - p2Size
    }
    if (K < this.pane1.minSize) {
        K = this.pane1.minSize;
        p2Size = P - K
    }
    if (p2Size < this.pane2.minSize) {
        p2Size = this.pane2.minSize;
        K = P - p2Size
    }
    if (this.pane1.expanded == false) {
        p2Size = P;
        K = 0;
        $.style.display = "none"
    } else if (this.pane2.expanded == false) {
        K = P;
        p2Size = 0;
        C.style.display = "none"
    }
    if (this.pane1.visible == false) {
        p2Size = P + D;
        K = D = 0;
        $.style.display = "none";
        this.O0ll1.style.display = "none"
    } else if (this.pane2.visible == false) {
        K = P + D;
        p2Size = D = 0;
        C.style.display = "none";
        this.O0ll1.style.display = "none"
    }
    if (this.vertical) {
        lOool0($, _);
        lOool0(C, _);
        l10o($, K);
        l10o(C, p2Size);
        C.style.top = (K + D) + "px";
        this.O0ll1.style.left = "0px";
        this.O0ll1.style.top = K + "px";
        lOool0(this.O0ll1, _);
        l10o(this.O0ll1, this[looo01]);
        $.style.left = "0px";
        C.style.left = "0px"
    } else {
        lOool0($, K);
        lOool0(C, p2Size);
        l10o($, B);
        l10o(C, B);
        C.style.left = (K + D) + "px";
        this.O0ll1.style.top = "0px";
        this.O0ll1.style.left = K + "px";
        lOool0(this.O0ll1, this[looo01]);
        l10o(this.O0ll1, B);
        $.style.top = "0px";
        C.style.top = "0px"
    }
    var S = "<div class=\"mini-splitter-handler-buttons\">";
    if (!this.pane1.expanded || !this.pane2.expanded) {
        if (!this.pane1.expanded) {
            if (this.pane1[oOl0ll])S += "<a id=\"1\" class=\"mini-splitter-pane2-button\" title=\"" + (this.pane1.collapseTooltip || this.pane1.tooltip || "") + "\"></a>"
        } else if (this.pane2[oOl0ll])S += "<a id=\"2\" class=\"mini-splitter-pane1-button\" title=\"" + (this.pane2.collapseTooltip || this.pane2.tooltip || "") + "\"></a>"
    } else {
        if (this.pane1[oOl0ll])S += "<a id=\"1\" class=\"mini-splitter-pane1-button\" title=\"" + (this.pane1.tooltip || "") + "\"></a>";
        if (this[lO0oOO])if ((!this.pane1[oOl0ll] && !this.pane2[oOl0ll]))S += "<span class=\"mini-splitter-resize-button\"></span>";
        if (this.pane2[oOl0ll])S += "<a id=\"2\" class=\"mini-splitter-pane2-button\" title=\"" + (this.pane2.tooltip || "") + "\"></a>"
    }
    S += "</div>";
    this.O0ll1.innerHTML = S;
    var E = this.O0ll1.firstChild;
    E.style.display = this.showHandleButton ? "" : "none";
    var A = Ol0oO(E);
    if (this.vertical)E.style.marginLeft = -A.width / 2 + "px"; else E.style.marginTop = -A.height / 2 + "px";
    if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded)l1Oo(this.O0ll1, "mini-splitter-nodrag"); else o11o(this.O0ll1, "mini-splitter-nodrag");
    mini.layout(this._borderEl);
    this[ol1O0]("layout")
};
lOlO0Box = function ($) {
    var _ = this[OO0lO1]($);
    if (!_)return null;
    return Ol0oO(_)
};
lOlO0 = function ($) {
    if ($ == 1)return this.pane1; else if ($ == 2)return this.pane2;
    return $
};
lO011 = function (_) {
    if (!mini.isArray(_))return;
    for (var $ = 0; $ < 2; $++) {
        var A = _[$];
        this[lOll1O]($ + 1, A)
    }
};
olloO = function (_, A) {
    var $ = this[OOoll1](_);
    if (!$)return;
    var B = this[OO0lO1](_);
    __mini_setControls(A, B, this)
};
OOl1O = function ($) {
    if ($ == 1)return this.o10o;
    return this.ol1o
};
OlO0l = function (_, F) {
    var $ = this[OOoll1](_);
    if (!$)return;
    mini.copyTo($, F);
    var B = this[OO0lO1](_), C = $.body;
    delete $.body;
    if (C) {
        if (!mini.isArray(C))C = [C];
        for (var A = 0, E = C.length; A < E; A++)mini.append(B, C[A])
    }
    if ($.bodyParent) {
        var D = $.bodyParent;
        while (D.firstChild)B.appendChild(D.firstChild)
    }
    delete $.bodyParent;
    B.id = $.id;
    lO01l(B, $.style);
    l1Oo(B, $["class"]);
    if ($.cls)l1Oo(B, $.cls);
    if ($.controls) {
        var _ = $ == this.pane1 ? 1 : 2;
        this[Ol0lll](_, $.controls);
        delete $.controls
    }
    this[l0loO0]()
};
o0011 = function ($) {
    this.showHandleButton = $;
    this[l0loO0]()
};
OOl11 = function ($) {
    return this.showHandleButton
};
o0lO1 = function ($) {
    this.vertical = $;
    this[l0loO0]()
};
Ol1l0 = function () {
    return this.vertical
};
oO0ol = function (_) {
    var $ = this[OOoll1](_);
    if (!$)return;
    $.expanded = true;
    this[l0loO0]();
    var A = {pane: $, paneIndex: this.pane1 == $ ? 1 : 2};
    this[ol1O0]("expand", A)
};
OlOo1 = function (_) {
    var $ = this[OOoll1](_);
    if (!$)return;
    $.expanded = false;
    var A = $ == this.pane1 ? this.pane2 : this.pane1;
    if (A.expanded == false) {
        A.expanded = true;
        A.visible = true
    }
    this[l0loO0]();
    var B = {pane: $, paneIndex: this.pane1 == $ ? 1 : 2};
    this[ol1O0]("collapse", B)
};
ooOoo = function (_) {
    var $ = this[OOoll1](_);
    if (!$)return;
    if ($.expanded)this[l1l00o]($); else this[o1OolO]($)
};
O0oO0 = function (_) {
    var $ = this[OOoll1](_);
    if (!$)return;
    $.visible = true;
    this[l0loO0]()
};
loolo0 = function (_) {
    var $ = this[OOoll1](_);
    if (!$)return;
    $.visible = false;
    var A = $ == this.pane1 ? this.pane2 : this.pane1;
    if (A.visible == false) {
        A.expanded = true;
        A.visible = true
    }
    this[l0loO0]()
};
Ol0O0 = function ($) {
    if (this[lO0oOO] != $) {
        this[lO0oOO] = $;
        this[l0llOO]()
    }
};
oOOo1 = function () {
    return this[lO0oOO]
};
O1o0OO = function ($) {
    if (this[looo01] != $) {
        this[looo01] = $;
        this[l0llOO]()
    }
};
l1o1l = function () {
    return this[looo01]
};
ool1O = function (B) {
    var A = B.target;
    if (!Ol0O(this.O0ll1, A))return;
    var _ = parseInt(A.id), $ = this[OOoll1](_), B = {pane: $, paneIndex: _, cancel: false};
    if ($.expanded)this[ol1O0]("beforecollapse", B); else this[ol1O0]("beforeexpand", B);
    if (B.cancel == true)return;
    if (A.className == "mini-splitter-pane1-button")this[Ool01](_); else if (A.className == "mini-splitter-pane2-button")this[Ool01](_)
};
Oo000 = function ($, _) {
    this[ol1O0]("buttonclick", {pane: $, index: this.pane1 == $ ? 1 : 2, htmlEvent: _})
};
O00o1 = function (_, $) {
    this[Ol1oO1]("buttonclick", _, $)
};
O00oo = function (A) {
    var _ = A.target;
    if (!this[lO0oOO])return;
    if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded)return;
    if (Ol0O(this.O0ll1, _))if (_.className == "mini-splitter-pane1-button" || _.className == "mini-splitter-pane2-button"); else {
        var $ = this.l01l();
        $.start(A)
    }
};
ll0o = function () {
    if (!this.drag)this.drag = new mini.Drag({
        capture: true,
        onStart: mini.createDelegate(this.OoOOlO, this),
        onMove: mini.createDelegate(this.lll11, this),
        onStop: mini.createDelegate(this.O00OO, this)
    });
    return this.drag
};
looo1 = function ($) {
    this.handlerBox = Ol0oO(this.O0ll1);
    this.oOOoOl = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
    this.olooO0 = mini.append(document.body, "<div class=\"mini-proxy\"></div>");
    this.olooO0.style.cursor = this.vertical ? "n-resize" : "w-resize";
    this.elBox = Ol0oO(this._borderEl, true);
    oool(this.olooO0, this.handlerBox)
};
ooo1l = function (C) {
    if (!this.handlerBox)return;
    if (!this.elBox)this.elBox = Ol0oO(this._borderEl, true);
    var B = this.elBox.width, D = this.elBox.height, E = this[looo01], I = this.vertical ? D - this[looo01] : B - this[looo01], A = this.pane1.minSize, F = this.pane1.maxSize, $ = this.pane2.minSize, G = this.pane2.maxSize;
    if (this.vertical == true) {
        var _ = C.now[1] - C.init[1], H = this.handlerBox.y + _;
        if (H - this.elBox.y > F)H = this.elBox.y + F;
        if (H + this.handlerBox.height < this.elBox.bottom - G)H = this.elBox.bottom - G - this.handlerBox.height;
        if (H - this.elBox.y < A)H = this.elBox.y + A;
        if (H + this.handlerBox.height > this.elBox.bottom - $)H = this.elBox.bottom - $ - this.handlerBox.height;
        mini.setY(this.olooO0, H)
    } else {
        var J = C.now[0] - C.init[0], K = this.handlerBox.x + J;
        if (K - this.elBox.x > F)K = this.elBox.x + F;
        if (K + this.handlerBox.width < this.elBox.right - G)K = this.elBox.right - G - this.handlerBox.width;
        if (K - this.elBox.x < A)K = this.elBox.x + A;
        if (K + this.handlerBox.width > this.elBox.right - $)K = this.elBox.right - $ - this.handlerBox.width;
        mini.setX(this.olooO0, K)
    }
};
loO0O = function (_) {
    var $ = this.elBox.width, B = this.elBox.height, C = this[looo01], D = parseFloat(this.pane1.size), E = parseFloat(this.pane2.size), I = isNaN(D), N = isNaN(E), J = !isNaN(D) && this.pane1.size[o110ll]("%") != -1, M = !isNaN(E) && this.pane2.size[o110ll]("%") != -1, G = !I && !J, K = !N && !M, L = this.vertical ? B - this[looo01] : $ - this[looo01], A = Ol0oO(this.olooO0), H = A.x - this.elBox.x, F = L - H;
    if (this.vertical) {
        H = A.y - this.elBox.y;
        F = L - H
    }
    if (I || N) {
        if (I && N) {
            D = parseFloat(H / L * 100).toFixed(1);
            this.pane1.size = D + "%"
        } else if (G) {
            D = H;
            this.pane1.size = D
        } else if (J) {
            D = parseFloat(H / L * 100).toFixed(1);
            this.pane1.size = D + "%"
        } else if (K) {
            E = F;
            this.pane2.size = E
        } else if (M) {
            E = parseFloat(F / L * 100).toFixed(1);
            this.pane2.size = E + "%"
        }
    } else if (J && K)this.pane2.size = F; else if (G && M)this.pane1.size = H; else {
        this.pane1.size = parseFloat(H / L * 100).toFixed(1);
        this.pane2.size = 100 - this.pane1.size
    }
    jQuery(this.olooO0).remove();
    jQuery(this.oOOoOl).remove();
    this.oOOoOl = null;
    this.olooO0 = null;
    this.elBox = this.handlerBox = null;
    this[l0llOO]();
    this[ol1O0]("resize")
};
l1O01 = function (B) {
    var G = OlO1l0[ollolO][ol1oOl][o1O0l0](this, B);
    mini[Ol100O](B, G, ["onexpand", "oncollapse", "onresize"]);
    mini[Olo01O](B, G, ["allowResize", "vertical", "showHandleButton"]);
    mini[oOOl00](B, G, ["handlerSize"]);
    var A = [], F = mini[l00oo](B);
    for (var _ = 0, E = 2; _ < E; _++) {
        var C = F[_], D = jQuery(C), $ = {};
        A.push($);
        if (!C)continue;
        $.style = C.style.cssText;
        mini[Ol100O](C, $, ["cls", "size", "id", "class", "tooltip", "collapseTooltip"]);
        mini[Olo01O](C, $, ["visible", "expanded", "showCollapseButton"]);
        mini[oOOl00](C, $, ["minSize", "maxSize", "handlerSize"]);
        $.bodyParent = C
    }
    G.panes = A;
    return G
};
olO1l = function () {
    var $ = this;
    if (isFirefox)this._textEl.oninput = function () {
        $.O1lol1()
    }
};
o1o1l = function (B) {
    if (typeof B == "string")return this;
    var _ = B.text;
    delete B.text;
    var $ = B.value;
    delete B.value;
    var C = B.url;
    delete B.url;
    var A = B.data;
    delete B.data;
    l1O1lO[ollolO][OO1O1l][o1O0l0](this, B);
    if (!mini.isNull(A)) {
        this[ol0l0](A);
        B.data = A
    }
    if (!mini.isNull(C)) {
        this[Oo1100](C);
        B.url = C
    }
    if (!mini.isNull($)) {
        this[ll10OO]($);
        B.value = $
    }
    if (!mini.isNull(_))this[l0O0O0](_);
    return this
};
O10l1 = function () {
    l1O1lO[ollolO][l0101][o1O0l0](this);
    this.l01ol = new lO1OO1();
    this.l01ol[OooOOO]("border:0;");
    this.l01ol[Oo1oll]("width:100%;height:auto;");
    this.l01ol[O1OO10](this.popup._contentEl);
    this.l01ol[Ol1oO1]("itemclick", this.O0o1o, this);
    this.l01ol[Ol1oO1]("drawcell", this.__OnItemDrawCell, this);
    var $ = this;
    this.l01ol[Ol1oO1]("beforeload", function (_) {
        $[ol1O0]("beforeload", _)
    }, this);
    this.l01ol[Ol1oO1]("preload", function (_) {
        $[ol1O0]("preload", _)
    }, this);
    this.l01ol[Ol1oO1]("load", function (_) {
        $.data = _.data;
        $[ol1O0]("load", _)
    }, this);
    this.l01ol[Ol1oO1]("loaderror", function (_) {
        $[ol1O0]("loaderror", _)
    }, this)
};
OO1o1 = function () {
    var _ = {cancel: false};
    this[ol1O0]("beforeshowpopup", _);
    this._firebeforeshowpopup = false;
    if (_.cancel == true)return;
    this.l01ol[lOll1l]("auto");
    l1O1lO[ollolO][ol1O01][o1O0l0](this);
    var $ = this.popup.el.style.height;
    if ($ == "" || $ == "auto")this.l01ol[lOll1l]("auto"); else this.l01ol[lOll1l]("100%");
    this.l01ol[l1000o](this.valueInCheckOrder);
    this.l01ol[ll10OO](this.value)
};
OooOl = function ($) {
    this.l01ol[O0lo11]($);
    var A = this.l01ol[l0OoO0](), _ = this.l01ol.Oool0(A);
    this[ll10OO](_[0]);
    this[l0O0O0](_[1])
};
oll1O = function ($) {
    this.l01ol[OOo10]();
    $ = this[o11l]($);
    if ($) {
        this.l01ol[lOol1O]($);
        this.O0o1o({item: $}, false);
        if (this.changeOnSelectMethod)this.OOoOO()
    }
};
l1ol0 = function (_) {
    if (!_)return;
    var $ = this.l01ol.Oool0(_);
    this[ll10OO]($[0]);
    this.l01ol[ll10OO](this.value)
};
O1O1ol = function ($) {
    return typeof $ == "object" ? $ : this.data[$]
};
l0O1 = function ($) {
    return this.data[o110ll]($)
};
ollOl = function ($) {
    return this.data[$]
};
o0o0 = function ($) {
    if (typeof $ == "string")this[Oo1100]($); else this[ol0l0]($)
};
OOo0o = function (_) {
    return eval("(" + _ + ")")
};
lOlo1 = function ($) {
    if (typeof $ == "string")$ = this[O00oO0]($);
    if (!mini.isArray($))$ = [];
    this.l01ol[ol0l0]($);
    this.data = this.l01ol.data;
    this[Oooloo]()
};
oolO = function () {
    return this.data
};
lO11O = function ($) {
    this.clearOnLoad = $
};
O0l011 = function () {
    return this.clearOnLoad
};
O00110 = function () {
    var A = this.l01ol.Oool0(this.value), $ = A[0], _ = A[1];
    if ($ === "" && !this.clearOnLoad) {
        $ = this.value;
        _ = this.text;
        this.value = null
    }
    this.text = this._textEl.value = _;
    this[ll10OO]($)
};
olO1O = function ($) {
    this[oolOl]();
    this.l01ol[Oo1100]($);
    this.url = this.l01ol.url;
    this.data = this.l01ol.data;
    this[Oooloo]()
};
ll10l0 = function () {
    return this.url
};
o001lField = function ($) {
    this[O01oll] = $;
    if (this.l01ol)this.l01ol[olOo0l]($)
};
oooO0 = function () {
    return this[O01oll]
};
llOO0 = function ($) {
    if (this.l01ol)this.l01ol[ooO1ll]($);
    this[l1ol1O] = $
};
ooO0o = function () {
    return this[l1ol1O]
};
O010O = function ($) {
    this.pinyinField = $
};
l0OOo = function () {
    return this.pinyinField
};
O0O1O = function ($) {
    this[ooO1ll]($)
};
lool = function ($) {
    if (this.l01ol)this.l01ol[O0lO0O]($);
    this.dataField = $
};
loO1O = function () {
    return this.dataField
};
o001lInCheckOrder = function ($) {
    this.valueInCheckOrder = $
};
oolool = function () {
    return this.valueInCheckOrder
};
o001l = function ($) {
    if (mini.isNull($))$ = "";
    var A = this.l01ol.Oool0($), B = A[0], _ = A[1];
    if (_ === "" || mini.isNull(_))_ = $;
    if (this.valueFromSelect && (B === "" || mini.isNull(B)))$ = _ = "";
    this.value = $;
    this.l0o0o0.value = this.value;
    this.text = this._textEl.value = _;
    this.o00o01()
};
llolo = function ($) {
    if (this[O0o1ol] != $) {
        this[O0o1ol] = $;
        if (this.l01ol) {
            this.l01ol[Olol1o]($);
            this.l01ol[o001oo]($)
        }
    }
};
l1ll0 = function () {
    return this[O0o1ol]
};
llol1 = function ($) {
    if (!mini.isArray($))$ = [];
    this.columns = $;
    this.l01ol[OOll0]($)
};
O0o0O = function () {
    return this.columns
};
OooO1 = function ($) {
    if (this.showNullItem != $) {
        this.showNullItem = $;
        this.l01ol[l01ll]($)
    }
};
Oool1 = function () {
    return this.showNullItem
};
lollOO = function ($) {
    if (this.nullItemText != $) {
        this.nullItemText = $;
        this.l01ol[o0Ol01]($)
    }
};
l1ooO = function () {
    return this.nullItemText
};
Ol0ll = function ($) {
    this.valueFromSelect = $
};
l000O = function () {
    return this.valueFromSelect
};
O1O10 = function () {
    if (this.validateOnChanged)this[llo100]();
    var _ = this;

    function $() {
        var $ = _[o1oOl](), B = _[l0OoO0](), A = B[0];
        _[ol1O0]("valuechanged", {value: $, selecteds: B, selected: A})
    }

    setTimeout(function () {
        $()
    }, 50)
};
o0ols = function () {
    return this.l01ol[OO11](this.value)
};
o0ol = function () {
    return this[l0OoO0]()[0]
};
olOl0 = function ($) {
    this[ol1O0]("drawcell", $)
};
o1OO0 = function (E, C) {
    var D = {item: E.item, cancel: false};
    if (C !== false) {
        this[ol1O0]("beforeitemclick", D);
        if (D.cancel)return
    }
    var B = this.l01ol[l0OoO0](), A = this.l01ol.Oool0(B), $ = this[o1oOl]();
    this[ll10OO](A[0]);
    this[l0O0O0](A[1]);
    if (E)if (C !== false) {
        if ($ != this[o1oOl]()) {
            var _ = this;
            setTimeout(function () {
                _.OOoOO()
            }, 1)
        }
        if (!this[O0o1ol])this[oOl0oo]();
        this[O1loo]();
        this[ol1O0]("itemclick", {item: E.item})
    }
};
o0O0 = function (F, A) {
    var E = {htmlEvent: F};
    this[ol1O0]("keydown", E);
    if (F.keyCode == 8 && (this[o0011o]() || this.allowInput == false))return false;
    if (F.keyCode == 9) {
        if (this[oOO1O1]())this[oOl0oo]();
        return
    }
    if (this[o0011o]())return;
    switch (F.keyCode) {
        case 27:
            F.preventDefault();
            if (this[oOO1O1]())F.stopPropagation();
            this[oOl0oo]();
            this[O1loo]();
            break;
        case 13:
            if (this[oOO1O1]()) {
                F.preventDefault();
                F.stopPropagation();
                var _ = this.l01ol[O1l0lO]();
                if (_ != -1) {
                    var $ = this.l01ol[l11o1o](_), D = {item: $, cancel: false};
                    this[ol1O0]("beforeitemclick", D);
                    if (D.cancel == false) {
                        if (this[O0o1ol]); else {
                            this.l01ol[OOo10]();
                            this.l01ol[lOol1O]($)
                        }
                        var C = this.l01ol[l0OoO0](), B = this.l01ol.Oool0(C);
                        this[ll10OO](B[0]);
                        this[l0O0O0](B[1]);
                        this.OOoOO()
                    }
                }
                this[oOl0oo]();
                this[O1loo]()
            } else this[ol1O0]("enter", E);
            break;
        case 37:
            break;
        case 38:
            F.preventDefault();
            _ = this.l01ol[O1l0lO]();
            if (_ == -1) {
                _ = 0;
                if (!this[O0o1ol]) {
                    $ = this.l01ol[OO11](this.value)[0];
                    if ($)_ = this.l01ol[o110ll]($)
                }
            }
            if (this[oOO1O1]())if (!this[O0o1ol]) {
                _ -= 1;
                if (_ < 0)_ = 0;
                this.l01ol.lOO1O0(_, true)
            }
            break;
        case 39:
            break;
        case 40:
            F.preventDefault();
            _ = this.l01ol[O1l0lO]();
            if (_ == -1) {
                _ = -1;
                if (!this[O0o1ol]) {
                    $ = this.l01ol[OO11](this.value)[0];
                    if ($)_ = this.l01ol[o110ll]($)
                }
            }
            if (this[oOO1O1]()) {
                if (!this[O0o1ol]) {
                    _ += 1;
                    if (_ > this.l01ol[lO1lO1]() - 1)_ = this.l01ol[lO1lO1]() - 1;
                    this.l01ol.lOO1O0(_, true)
                }
            } else {
                this[ol1O01]();
                if (!this[O0o1ol])this.l01ol.lOO1O0(_, true)
            }
            break;
        default:
            if (this.allowInput == false); else this.O1lol1(this._textEl.value);
            break
    }
};
l1Ooo = function ($) {
    this[ol1O0]("keyup", {htmlEvent: $})
};
Ool1l = function ($) {
    this[ol1O0]("keypress", {htmlEvent: $})
};
Oo1Ol = function (_) {
    var $ = this;
    setTimeout(function () {
        var A = $._textEl.value;
        if (A != _)$.looo11(A)
    }, 10)
};
OolO0 = function (B) {
    if (!this.autoFilter)return;
    if (this[O0o1ol] == true)return;
    var A = [];
    B = B.toUpperCase();
    for (var C = 0, F = this.data.length; C < F; C++) {
        var _ = this.data[C], D = mini._getMap(this.textField, _), G = mini._getMap(this.pinyinField, _);
        D = D ? String(D).toUpperCase() : "";
        G = G ? String(G).toUpperCase() : "";
        if (D[o110ll](B) != -1 || G[o110ll](B) != -1)A.push(_)
    }
    this.l01ol[ol0l0](A);
    this._filtered = true;
    if (B !== "" || this[oOO1O1]()) {
        this[ol1O01]();
        var $ = 0;
        if (this.l01ol[lOoool]())$ = 1;
        var E = this;
        E.l01ol.lOO1O0($, true)
    }
};
llO10 = function ($) {
    if (this._filtered) {
        this._filtered = false;
        if (this.l01ol.el)this.l01ol[ol0l0](this.data)
    }
    this[OO0oo0]();
    this[ol1O0]("hidepopup")
};
O1o1O = function ($) {
    return this.l01ol[OO11]($)
};
OO1O1 = function (J) {
    if (this[oOO1O1]())return;
    if (this[O0o1ol] == false) {
        var E = this._textEl.value, H = this[ll1oO1](), F = null;
        for (var D = 0, B = H.length; D < B; D++) {
            var $ = H[D], I = $[this.textField];
            if (I == E) {
                F = $;
                break
            }
        }
        if (F) {
            this.l01ol[ll10OO](F ? F[this.valueField] : "");
            var C = this.l01ol[o1oOl](), A = this.l01ol.Oool0(C), _ = this[o1oOl]();
            this[ll10OO](C);
            this[l0O0O0](A[1])
        } else if (this.valueFromSelect) {
            this[ll10OO]("");
            this[l0O0O0]("")
        } else {
            this[ll10OO](E);
            this[l0O0O0](E)
        }
        if (_ != this[o1oOl]()) {
            var G = this;
            G.OOoOO()
        }
    }
};
OOo1 = function ($) {
    this.ajaxData = $;
    this.l01ol[oOl0O0]($)
};
Ooo001 = function ($) {
    this.ajaxType = $;
    this.l01ol[o001l1]($)
};
OOloO1 = function ($) {
    this.autoFilter = $
};
l0000 = function () {
    return this.autoFilter
};
olo1l = function (G) {
    var E = l1O1lO[ollolO][ol1oOl][o1O0l0](this, G);
    mini[Ol100O](G, E, ["url", "data", "textField", "valueField", "displayField", "nullItemText", "pinyinField", "ondrawcell", "onbeforeload", "onpreload", "onload", "onloaderror", "onitemclick", "onbeforeitemclick"]);
    mini[Olo01O](G, E, ["multiSelect", "showNullItem", "valueFromSelect", "valueInCheckOrder", "clearOnLoad", "autoFilter"]);
    if (E.displayField)E[l1ol1O] = E.displayField;
    var C = E[O01oll] || this[O01oll], H = E[l1ol1O] || this[l1ol1O];
    if (G.nodeName.toLowerCase() == "select") {
        var I = [];
        for (var F = 0, D = G.length; F < D; F++) {
            var $ = G.options[F], _ = {};
            _[H] = $.text;
            _[C] = $.value;
            I.push(_)
        }
        if (I.length > 0)E.data = I
    } else {
        var J = mini[l00oo](G);
        for (F = 0, D = J.length; F < D; F++) {
            var A = J[F], B = jQuery(A).attr("property");
            if (!B)continue;
            B = B.toLowerCase();
            if (B == "columns")E.columns = mini.llllo(A); else if (B == "data")E.data = A.innerHTML
        }
    }
    return E
};
O0l1 = function () {
    O10l0l[ollolO][lololl][o1O0l0](this);
    this.O001o0 = mini.append(this.el, "<input type=\"file\" hideFocus class=\"mini-htmlfile-file\" name=\"" + this.name + "\" ContentEditable=false/>");
    Ol1O(this._borderEl, "mousemove", this.oll1l, this);
    Ol1O(this.O001o0, "change", this.lo1o0O, this)
};
lollO = function ($) {
    if (!this.destroyed) {
        mini[o11l00](this._borderEl);
        mini[o11l00](this.O001o0)
    }
    O10l0l[ollolO][l0lOl][o1O0l0](this, $)
};
o0OO1 = function () {
    var $ = "onmouseover=\"l1Oo(this,'" + this.OOlO + "');\" " + "onmouseout=\"o11o(this,'" + this.OOlO + "');\"";
    return "<span class=\"mini-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
};
loOl0 = function ($) {
    this.value = this._textEl.value = this.O001o0.value;
    this.OOoOO();
    $ = {htmlEvent: $};
    this[ol1O0]("fileselect", $)
};
O1l001 = function (B) {
    var A = B.pageX, _ = B.pageY, $ = Ol0oO(this.el);
    A = (A - $.x - 5);
    _ = (_ - $.y - 5);
    if (this.enabled == false) {
        A = -20;
        _ = -20
    }
    this.O001o0.style.display = "";
    this.O001o0.style.left = A + "px";
    this.O001o0.style.top = _ + "px"
};
OoolO = function (B) {
    if (!this.limitType)return;
    if (B[o0Ol0l] == false)return;
    if (this.required == false && B.value == "")return;
    var A = B.value.split("."), $ = ("*." + A[A.length - 1]).toLowerCase(), _ = this.limitType.split(";");
    if (_.length > 0 && _[o110ll]($) == -1) {
        B.errorText = this.limitTypeErrorText + this.limitType;
        B[o0Ol0l] = false
    }
};
o00oo = function ($) {
    this.name = $;
    mini.setAttr(this.O001o0, "name", this.name)
};
oo01l = function () {
    return this._textEl.value
};
o1llO = function ($) {
    this.buttonText = $;
    var _ = mini.byClass("mini-buttonedit-button", this.el);
    if (_)_.innerHTML = $
};
oO11O = function () {
    return this.buttonText
};
o10o1 = function ($) {
    this.limitType = $
};
ll1OO = function () {
    return this.limitType
};
o0lll = function ($) {
    var _ = O10l0l[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["limitType", "buttonText", "limitTypeErrorText", "onfileselect"]);
    return _
};
o0olO = function (_) {
    var $ = _.getDay();
    return $ == 0 || $ == 6
};
o1o1o = function ($) {
    var $ = new Date($.getFullYear(), $.getMonth(), 1);
    return mini.getWeekStartDate($, this.firstDayOfWeek)
};
l00Ol = function ($) {
    return this.daysShort[$]
};
l1l11 = function () {
    var C = "<tr style=\"width:100%;\"><td style=\"width:100%;\"></td></tr>";
    C += "<tr ><td><div class=\"mini-calendar-footer\">" + "<span style=\"display:inline-block;\"><input name=\"time\" class=\"mini-timespinner\" style=\"width:80px\" format=\"" + this.timeFormat + "\"/>" + "<span class=\"mini-calendar-footerSpace\"></span></span>" + "<span class=\"mini-calendar-tadayButton\">" + this.todayText + "</span>" + "<span class=\"mini-calendar-footerSpace\"></span>" + "<span class=\"mini-calendar-clearButton\">" + this.clearText + "</span>" + "<span class=\"mini-calendar-okButton\">" + this.okText + "</span>" + "<a href=\"#\" class=\"mini-calendar-focus\" style=\"position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none\" hideFocus></a>" + "</div></td></tr>";
    var A = "<table class=\"mini-calendar\" cellpadding=\"0\" cellspacing=\"0\">" + C + "</table>", _ = document.createElement("div");
    _.innerHTML = A;
    this.el = _.firstChild;
    var $ = this.el.getElementsByTagName("tr"), B = this.el.getElementsByTagName("td");
    this._innerEl = B[0];
    this.l01olO = mini.byClass("mini-calendar-footer", this.el);
    this.timeWrapEl = this.l01olO.childNodes[0];
    this.todayButtonEl = this.l01olO.childNodes[1];
    this.footerSpaceEl = this.l01olO.childNodes[2];
    this.closeButtonEl = this.l01olO.childNodes[3];
    this.okButtonEl = this.l01olO.childNodes[4];
    this._focusEl = this.l01olO.lastChild;
    this.yesterdayButtonEl = mini.after(this.todayButtonEl, "<span class=\"mini-calendar-tadayButton yesterday\">" + this.yesterdayText + "</span>");
    mini.parse(this.l01olO);
    this.timeSpinner = mini[O1looO]("time", this.el);
    this[l0loO0]()
};
loooO = function () {
    try {
        this._focusEl[O1loo]()
    } catch ($) {
    }
};
o0ll = function ($) {
    this._innerEl = this.l01olO = this.timeWrapEl = this.todayButtonEl = this.footerSpaceEl = this.closeButtonEl = null;
    this._focusEl = this.okButtonEl = this.yesterdayButtonEl = null;
    this.timeSpinner = null;
    OOO0l1[ollolO][l0lOl][o1O0l0](this, $)
};
ooool = function () {
    if (this.timeSpinner)this.timeSpinner[Ol1oO1]("valuechanged", this.OO1lo, this);
    O0o0o0(function () {
        Ol1O(this.el, "click", this.oO0o1l, this);
        Ol1O(this.el, "mousedown", this.Ol0l, this);
        Ol1O(this.el, "keydown", this.Oo111, this)
    }, this)
};
O0lool = function ($) {
    if (!$)return null;
    var _ = this.uid + "$" + mini.clearTime($)[OOo0o1]();
    return document.getElementById(_)
};
lO1o1 = function ($) {
    if (Ol0O(this.el, $.target))return true;
    if (this.menuEl && Ol0O(this.menuEl, $.target))return true;
    return false
};
o00O0 = function ($) {
    this.showHeader = $;
    this[l0loO0]()
};
lO0O0 = function () {
    return this.showHeader
};
l0O1O = function ($) {
    this[OOolO0] = $;
    this[l0loO0]()
};
lOl10 = function () {
    return this[OOolO0]
};
ll000 = function ($) {
    this.showWeekNumber = $;
    this[l0loO0]()
};
o0000 = function () {
    return this.showWeekNumber
};
l0lO0 = function ($) {
    this.showDaysHeader = $;
    this[l0loO0]()
};
o0Oll = function () {
    return this.showDaysHeader
};
oll01 = function ($) {
    this.showMonthButtons = $;
    this[l0loO0]()
};
l1010O = function () {
    return this.showMonthButtons
};
O0o00 = function ($) {
    this.showYearButtons = $;
    this[l0loO0]()
};
OOlOo = function () {
    return this.showYearButtons
};
o1lo11 = function ($) {
    this.showTodayButton = $;
    this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
    this[l0loO0]()
};
O1o1 = function () {
    return this.showTodayButton
};
ooo11 = function ($) {
    this.showYesterdayButton = $;
    this.yesterdayButtonEl.style.display = this.showYesterdayButton ? "" : "none";
    this[l0loO0]()
};
o1ol0 = function () {
    return this.showYesterdayButton
};
l1lo1 = function ($) {
    this.showClearButton = $;
    this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
    this[l0loO0]()
};
Oo0l1 = function () {
    return this.showClearButton
};
O0lol = function ($) {
    this.showOkButton = $;
    this.okButtonEl.style.display = this.showOkButton ? "" : "none";
    this[l0loO0]()
};
l00O = function () {
    return this.showOkButton
};
Olo0l = function ($) {
    $ = mini.parseDate($);
    if (!$)$ = new Date();
    if (mini.isDate($))$ = new Date($[OOo0o1]());
    this.viewDate = $;
    this[l0loO0]()
};
oOlO0 = function () {
    return this.viewDate
};
l10o1 = function ($) {
    $ = mini.parseDate($);
    if (!mini.isDate($))$ = ""; else $ = new Date($[OOo0o1]());
    var _ = this[OllOO0](this.o1ol);
    if (_)o11o(_, this.l0Ol);
    this.o1ol = $;
    if (this.o1ol)this.o1ol = mini.cloneDate(this.o1ol);
    _ = this[OllOO0](this.o1ol);
    if (_)l1Oo(_, this.l0Ol);
    this[ol1O0]("datechanged")
};
O01Oo = function ($) {
    if (!mini.isArray($))$ = [];
    this.o1ol1 = $;
    this[l0loO0]()
};
ol0llo = function () {
    return this.o1ol ? this.o1ol : ""
};
O10O10 = function ($) {
    this.timeSpinner[ll10OO]($)
};
OO010 = function () {
    return this.timeSpinner[lOo01l]()
};
l00OO = function ($) {
    this[ool10o]($);
    if (!$)$ = new Date();
    this[l0lol]($)
};
O001O = function () {
    var $ = this.o1ol;
    if ($) {
        $ = mini.clearTime($);
        if (this.showTime) {
            var _ = this.timeSpinner[o1oOl]();
            if (_) {
                $.setHours(_.getHours());
                $.setMinutes(_.getMinutes());
                $.setSeconds(_.getSeconds())
            }
        }
    }
    return $ ? $ : ""
};
OOo1l = function () {
    var $ = this[o1oOl]();
    if ($)return mini.formatDate($, "yyyy-MM-dd HH:mm:ss");
    return ""
};
Oo0lO = function ($) {
    if (!$ || !this.o1ol)return false;
    return mini.clearTime($)[OOo0o1]() == mini.clearTime(this.o1ol)[OOo0o1]()
};
l0lo1 = function ($) {
    this[O0o1ol] = $;
    this[l0loO0]()
};
Oll0l = function () {
    return this[O0o1ol]
};
Ololl0 = function ($) {
    if (isNaN($))return;
    if ($ < 1)$ = 1;
    this.rows = $;
    this[l0loO0]()
};
O1OoO = function () {
    return this.rows
};
l1O11 = function ($) {
    if (isNaN($))return;
    if ($ < 1)$ = 1;
    this.columns = $;
    this[l0loO0]()
};
Olooo = function () {
    return this.columns
};
O0lo01 = function ($) {
    if (this.showTime != $) {
        this.showTime = $;
        this.timeWrapEl.style.display = this.showTime ? "" : "none";
        this[l0llOO]()
    }
};
lo00l = function () {
    return this.showTime
};
llO00 = function ($) {
    if (this.timeFormat != $) {
        this.timeSpinner[O10ll]($);
        this.timeFormat = this.timeSpinner.format
    }
};
OlOol = function () {
    return this.timeFormat
};
olo1O = function () {
    if (!this[Ooo1oo]())return;
    this.timeWrapEl.style.display = this.showTime ? "" : "none";
    this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
    this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
    this.yesterdayButtonEl.style.display = this.showYesterdayButton ? "" : "none";
    this.okButtonEl.style.display = this.showOkButton ? "" : "none";
    this.footerSpaceEl.style.display = (this.showClearButton && this.showTodayButton) ? "" : "none";
    this.l01olO.style.display = this[OOolO0] ? "" : "none";
    var _ = this._innerEl.firstChild, $ = this[l0111O]();
    if (!$) {
        _.parentNode.style.height = "100px";
        h = jQuery(this.el).height();
        h -= jQuery(this.l01olO).outerHeight();
        _.parentNode.style.height = h + "px"
    } else _.parentNode.style.height = "";
    mini.layout(this.l01olO);
    if (this.monthPicker)this[olO110]()
};
oOO1O = function () {
    if (!this.Olol)return;
    var G = new Date(this.viewDate[OOo0o1]()), A = this.rows == 1 && this.columns == 1, C = 100 / this.rows, F = "<table class=\"mini-calendar-views\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
    for (var $ = 0, E = this.rows; $ < E; $++) {
        F += "<tr >";
        for (var D = 0, _ = this.columns; D < _; D++) {
            F += "<td style=\"height:" + C + "%\">";
            F += this.lO1lO(G, $, D);
            F += "</td>";
            G = new Date(G.getFullYear(), G.getMonth() + 1, 1)
        }
        F += "</tr>"
    }
    F += "</table>";
    this._innerEl.innerHTML = F;
    var B = this.el;
    setTimeout(function () {
        mini[oOo01o](B)
    }, 100);
    this[l0llOO]()
};
lOOOo = function (R, J, C) {
    var _ = R.getMonth(), F = this[ooO0l](R), K = new Date(F[OOo0o1]()), A = mini.clearTime(new Date())[OOo0o1](), D = this.value ? mini.clearTime(this.value)[OOo0o1]() : -1, N = this.rows > 1 || this.columns > 1, P = "";
    P += "<table class=\"mini-calendar-view\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
    if (this.showHeader) {
        P += "<tr ><td colSpan=\"10\" class=\"mini-calendar-header\"><div class=\"mini-calendar-headerInner\">";
        if (J == 0 && C == 0) {
            P += "<div class=\"mini-calendar-prev\">";
            if (this.showYearButtons)P += "<span class=\"mini-calendar-yearPrev\"></span>";
            if (this.showMonthButtons)P += "<span class=\"mini-calendar-monthPrev\"></span>";
            P += "</div>"
        }
        if (J == 0 && C == this.columns - 1) {
            P += "<div class=\"mini-calendar-next\">";
            if (this.showMonthButtons)P += "<span class=\"mini-calendar-monthNext\"></span>";
            if (this.showYearButtons)P += "<span class=\"mini-calendar-yearNext\"></span>";
            P += "</div>"
        }
        P += "<span class=\"mini-calendar-title\">" + mini.formatDate(R, this.format);
        +"</span>";
        P += "</div></td></tr>"
    }
    if (this.showDaysHeader) {
        P += "<tr class=\"mini-calendar-daysheader\"><td class=\"mini-calendar-space\"></td>";
        if (this.showWeekNumber)P += "<td sclass=\"mini-calendar-weeknumber\"></td>";
        for (var L = this.firstDayOfWeek, B = L + 7; L < B; L++) {
            var O = this[lo1Oo0](L);
            P += "<td yAlign=\"middle\">";
            P += O;
            P += "</td>";
            F = new Date(F.getFullYear(), F.getMonth(), F.getDate() + 1)
        }
        P += "<td class=\"mini-calendar-space\"></td></tr>"
    }
    F = K;
    for (var H = 0; H <= 5; H++) {
        P += "<tr class=\"mini-calendar-days\"><td class=\"mini-calendar-space\"></td>";
        if (this.showWeekNumber) {
            var G = mini.getWeek(F.getFullYear(), F.getMonth() + 1, F.getDate());
            if (String(G).length == 1)G = "0" + G;
            P += "<td class=\"mini-calendar-weeknumber\" yAlign=\"middle\">" + G + "</td>"
        }
        for (L = this.firstDayOfWeek, B = L + 7; L < B; L++) {
            var M = this[ol1o01](F), I = mini.clearTime(F)[OOo0o1](), $ = I == A, E = this[o11Ooo](F);
            if (_ != F.getMonth() && N)I = -1;
            var Q = this.oO011(F);
            P += "<td yAlign=\"middle\" id=\"";
            P += this.uid + "$" + I;
            P += "\" class=\"mini-calendar-date ";
            if (M)P += " mini-calendar-weekend ";
            if (Q[lO1l1] == false)P += " mini-calendar-disabled ";
            if (_ != F.getMonth() && N); else {
                if (E)P += " " + this.l0Ol + " ";
                if ($)P += " mini-calendar-today "
            }
            if (_ != F.getMonth())P += " mini-calendar-othermonth ";
            if (Q.dateCls)P += " " + Q.dateCls;
            P += "\" style=\"";
            if (Q.dateStyle)P += Q.dateStyle;
            P += "\">";
            if (_ != F.getMonth() && N); else P += Q.dateHtml;
            P += "</td>";
            F = new Date(F.getFullYear(), F.getMonth(), F.getDate() + 1)
        }
        P += "<td class=\"mini-calendar-space\"></td></tr>"
    }
    P += "<tr class=\"mini-calendar-bottom\" colSpan=\"10\"><td ></td></tr>";
    P += "</table>";
    return P
};
lOO00 = function ($) {
    var _ = {date: $, dateCls: "", dateStyle: "", dateHtml: $.getDate(), allowSelect: true};
    this[ol1O0]("drawdate", _);
    return _
};
O0l1o = function (_, $) {
    this[OOo11]();
    var A = {date: _, action: $};
    this[ol1O0]("dateclick", A);
    this.OOoOO()
};
O10o0 = function () {
    if (!this.menuEl) {
        var $ = this;
        setTimeout(function () {
            $[o11lOO]()
        }, 1)
    }
};
Ol000 = function () {
    this[OOo11]();
    this.menuYear = parseInt(this.viewDate.getFullYear() / 10) * 10;
    this.ol11O0electMonth = this.viewDate.getMonth();
    this.ol11O0electYear = this.viewDate.getFullYear();
    var _ = "<div class=\"mini-calendar-menu\"></div>";
    this.menuEl = mini.append(document.body, _);
    this[ol10Oo](this.viewDate);
    var $ = this[l0O1l0]();
    if (this.el.style.borderWidth == "0px")this.menuEl.style.border = "0";
    oool(this.menuEl, $);
    Ol1O(this.menuEl, "click", this.lOloo1, this);
    Ol1O(this.menuEl, "dblclick", this.__OnMenuDblClick, this);
    Ol1O(document, "mousedown", this.Ooo0o, this)
};
O1OOO = function () {
    if (this.menuEl) {
        lol0Oo(this.menuEl, "click", this.lOloo1, this);
        lol0Oo(document, "mousedown", this.Ooo0o, this);
        jQuery(this.menuEl).remove();
        this.menuEl = null
    }
};
O0lo1 = function () {
    if (!this.menuEl)return;
    var C = "<div class=\"mini-calendar-menu-months\">";
    for (var $ = 0, B = 12; $ < B; $++) {
        var _ = mini.getShortMonth($), A = "";
        if (this.ol11O0electMonth == $)A = "mini-calendar-menu-selected";
        C += "<a id=\"" + $ + "\" class=\"mini-calendar-menu-month " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
    }
    C += "<div style=\"clear:both;\"></div></div>";
    C += "<div class=\"mini-calendar-menu-years\">";
    for ($ = this.menuYear, B = this.menuYear + 10; $ < B; $++) {
        _ = $, A = "";
        if (this.ol11O0electYear == $)A = "mini-calendar-menu-selected";
        C += "<a id=\"" + $ + "\" class=\"mini-calendar-menu-year " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
    }
    C += "<div class=\"mini-calendar-menu-prevYear\"></div><div class=\"mini-calendar-menu-nextYear\"></div><div style=\"clear:both;\"></div></div>";
    C += "<div class=\"mini-calendar-footer\">" + "<span class=\"mini-calendar-okButton\">" + this.okText + "</span>" + "<span class=\"mini-calendar-footerSpace\"></span>" + "<span class=\"mini-calendar-cancelButton\">" + this.cancelText + "</span>" + "</div><div style=\"clear:both;\"></div>";
    this.menuEl.innerHTML = C
};
ll01l = function (H) {
    var D = this, B = H.target, C = "mini-calendar-menu-month", F = "mini-calendar-menu-year", G = "mini-calendar-menu-selected";

    function _() {
        setTimeout(function () {
            D[ol10Oo]()
        }, 30)
    }

    var E = ol000(B, C), A = ol000(B, F);
    if (E) {
        this.ol11O0electMonth = parseInt(E.id);
        $("." + C, D.menuEl)[OoOo0](G);
        $(B).parent().find("#" + this.ol11O0electMonth)[Oo1Olo](G)
    } else if (A) {
        this.ol11O0electYear = parseInt(A.id);
        $("." + F, D.menuEl)[OoOo0](G);
        $(B).parent().find("#" + this.ol11O0electYear)[Oo1Olo](G)
    } else if (ol000(B, "mini-calendar-menu-prevYear")) {
        this.menuYear = this.menuYear - 1;
        this.menuYear = parseInt(this.menuYear / 10) * 10;
        _()
    } else if (ol000(B, "mini-calendar-menu-nextYear")) {
        this.menuYear = this.menuYear + 11;
        this.menuYear = parseInt(this.menuYear / 10) * 10;
        _()
    } else if (ol000(B, "mini-calendar-okButton"))this[l0l0o0](); else if (ol000(B, "mini-calendar-cancelButton"))if (this.monthPicker)this.o0Oo(null, "cancel"); else this[OOo11]()
};
l11l1 = function (B) {
    var $ = ol000(B.target, "mini-calendar-menu-year"), _ = ol000(B.target, "mini-calendar-menu-month"), A = ol000(B.target, "mini-calendar-date ");
    if (!$ && !_ && !A)return;
    if (this.monthPicker)if (!_ && !$)return;
    this[l0l0o0]()
};
o0ll00 = function () {
    var $ = new Date(this.ol11O0electYear, this.ol11O0electMonth, 1);
    if (this.monthPicker) {
        this[l1oOo]($);
        this[ool10o]($);
        this.o0Oo($)
    } else {
        this[l1oOo]($);
        this[OOo11]()
    }
};
o11lO = function ($) {
    if (!ol000($.target, "mini-calendar-menu"))if (!ol000($.target, "mini-monthpicker"))this[OOo11]()
};
l00ll = function (I) {
    var H = this.viewDate;
    if (this.enabled == false)return;
    var C = I.target, G = ol000(I.target, "mini-calendar-title");
    if (ol000(C, "mini-calendar-monthNext")) {
        H.setDate(1);
        H.setMonth(H.getMonth() + 1);
        this[l1oOo](H)
    } else if (ol000(C, "mini-calendar-yearNext")) {
        H.setDate(1);
        H.setFullYear(H.getFullYear() + 1);
        this[l1oOo](H)
    } else if (ol000(C, "mini-calendar-monthPrev")) {
        H.setMonth(H.getMonth() - 1);
        this[l1oOo](H)
    } else if (ol000(C, "mini-calendar-yearPrev")) {
        H.setFullYear(H.getFullYear() - 1);
        this[l1oOo](H)
    } else if (ol000(C, "mini-calendar-tadayButton")) {
        var F = !!ol000(C, "yesterday"), _ = new Date();
        if (F)_.setDate(_.getDate() - 1);
        this[l1oOo](_);
        this[ool10o](_);
        if (this.currentTime) {
            var $ = new Date();
            this[l0lol]($)
        }
        this.o0Oo(_, "today")
    } else if (ol000(C, "mini-calendar-clearButton")) {
        this[ool10o](null);
        this[l0lol](null);
        this.o0Oo(null, "clear")
    } else if (ol000(C, "mini-calendar-okButton"))this.o0Oo(null, "ok"); else if (G)this[o11lOO]();
    var E = ol000(I.target, "mini-calendar-date");
    if (E && !olol(E, "mini-calendar-disabled")) {
        var A = E.id.split("$"), B = parseInt(A[A.length - 1]);
        if (B == -1)return;
        var D = new Date(B);
        this.o0Oo(D)
    }
};
ol11l = function (C) {
    if (this.enabled == false)return;
    var B = ol000(C.target, "mini-calendar-date");
    if (B && !olol(B, "mini-calendar-disabled")) {
        var $ = B.id.split("$"), _ = parseInt($[$.length - 1]);
        if (_ == -1)return;
        var A = new Date(_);
        this[ool10o](A)
    }
};
Ol01O = function ($) {
    this[ol1O0]("timechanged");
    this.OOoOO()
};
l1l10 = function (B) {
    if (this.enabled == false)return;
    var _ = this[O11Oo1]();
    if (!_)_ = new Date(this.viewDate[OOo0o1]());
    switch (B.keyCode) {
        case 27:
            break;
        case 13:
            if (_)this.o0Oo(_);
            return;
            break;
        case 37:
            _ = mini.addDate(_, -1, "D");
            break;
        case 38:
            _ = mini.addDate(_, -7, "D");
            break;
        case 39:
            _ = mini.addDate(_, 1, "D");
            break;
        case 40:
            _ = mini.addDate(_, 7, "D");
            break;
        default:
            break
    }
    var $ = this;
    if (_.getMonth() != $.viewDate.getMonth()) {
        $[l1oOo](mini.cloneDate(_));
        $[O1loo]()
    }
    var A = this[OllOO0](_);
    if (A && olol(A, "mini-calendar-disabled"))return;
    $[ool10o](_);
    if (B.keyCode == 37 || B.keyCode == 38 || B.keyCode == 39 || B.keyCode == 40)B.preventDefault()
};
l1110 = function () {
    this[ol1O0]("valuechanged")
};
o0lOo = function ($) {
    var _ = OOO0l1[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["viewDate", "rows", "columns", "ondateclick", "ondrawdate", "ondatechanged", "timeFormat", "ontimechanged", "onvaluechanged"]);
    mini[Olo01O]($, _, ["multiSelect", "showHeader", "showFooter", "showWeekNumber", "showDaysHeader", "showMonthButtons", "showYearButtons", "showTodayButton", "showClearButton", "showYesterdayButton", "showTime", "showOkButton"]);
    return _
};
l111O = function (B) {
    if (typeof B == "string")return this;
    var _ = this.O1O0lo;
    this.O1O0lo = false;
    var C = B[O0oolo] || B[O1OO10];
    delete B[O0oolo];
    delete B[O1OO10];
    for (var $ in B)if ($.toLowerCase()[o110ll]("on") == 0) {
        if (this["_$" + $])continue;
        var F = B[$];
        this[Ol1oO1]($.substring(2, $.length).toLowerCase(), F);
        delete B[$]
    }
    for ($ in B) {
        var E = B[$], D = "set" + $.charAt(0).toUpperCase() + $.substring(1, $.length), A = this[D];
        if (A)A[o1O0l0](this, E); else this[$] = E
    }
    if (C && this[O1OO10])this[O1OO10](C);
    this.O1O0lo = _;
    if (this[l0llOO])this[l0llOO]();
    return this
};
lOlOo = function (A, B) {
    if (this.o0ooO == false)return;
    A = A.toLowerCase();
    var _ = this.ol1oo[A];
    if (_) {
        if (!B)B = {};
        if (B && B != this) {
            B.source = B.sender = this;
            if (!B.type)B.type = A
        }
        for (var $ = 0, D = _.length; $ < D; $++) {
            var C = _[$];
            if (C)C[0].apply(C[1], [B])
        }
    }
};
Oo1Oo = function (type, fn, scope) {
    if (typeof fn == "string") {
        var f = l1lOo(fn);
        if (!f) {
            var id = mini.newId("__str_");
            window[id] = fn;
            eval("fn = function(e){var s = " + id + ";var fn = l1lOo(s); if(fn) {fn[o1O0l0](this,e)}else{eval(s);}}")
        } else fn = f
    }
    if (typeof fn != "function" || !type)return false;
    type = type.toLowerCase();
    var event = this.ol1oo[type];
    if (!event)event = this.ol1oo[type] = [];
    scope = scope || this;
    if (!this[o1O1l1](type, fn, scope))event.push([fn, scope]);
    return this
};
O0010 = function ($, C, _) {
    if (typeof C != "function")return false;
    $ = $.toLowerCase();
    var A = this.ol1oo[$];
    if (A) {
        _ = _ || this;
        var B = this[o1O1l1]($, C, _);
        if (B)A.remove(B)
    }
    return this
};
o00Ol = function (A, E, B) {
    A = A.toLowerCase();
    B = B || this;
    var _ = this.ol1oo[A];
    if (_)for (var $ = 0, D = _.length; $ < D; $++) {
        var C = _[$];
        if (C[0] === E && C[1] === B)return C
    }
};
loO0l = function ($) {
    if (!$)throw new Error("id not null");
    if (this.oO110)throw new Error("id just set only one");
    mini["unreg"](this);
    this.id = $;
    if (this.el)this.el.id = $;
    if (this.l0o0o0)this.l0o0o0.id = $ + "$value";
    if (this._textEl)this._textEl.id = $ + "$text";
    this.oO110 = true;
    mini.reg(this)
};
OO1lO = function () {
    return this.id
};
l1loO = function () {
    mini["unreg"](this);
    this[ol1O0]("destroy")
};
ll1lO = function ($) {
    if (this[oOO1O1]())this[oOl0oo]();
    if (this.popup) {
        if (this._destroyPopup)this.popup[l0lOl]();
        this.popup = null
    }
    if (this._popupInner) {
        this._popupInner.owner = null;
        this._popupInner = null
    }
    if (this.el)this.el.onmouseover = this.el.onmouseout = null;
    this.l01ol = this.tree = null;
    o1lO1O[ollolO][l0lOl][o1O0l0](this, $)
};
lo0l0 = function () {
    o1lO1O[ollolO][lOo101][o1O0l0](this);
    O0o0o0(function () {
        o1l0lo(this.el, "mouseover", this.ol0010, this);
        o1l0lo(this.el, "mouseout", this.O11olO, this)
    }, this)
};
O011o = function ($) {
    this.O1OO00 = false;
    if (this._clickTarget && Ol0O(this.el, this._clickTarget))return;
    if (this[oOO1O1]())return;
    o1lO1O[ollolO].l0O01o[o1O0l0](this, $)
};
lo01l = function (_) {
    if (this[o0011o]() || this.allowInput)return;
    if (ol000(_.target, "mini-buttonedit-border")) {
        var $ = ol000(_.target, "mini-buttonedit-button");
        if ($ && $ != this._buttonEl); else this[oll1o0](this._hoverCls)
    }
};
oollo = function ($) {
    if (this[o0011o]() || this.allowInput)return;
    this[ol0OoO](this._hoverCls)
};
oo0o1 = function ($) {
    if (this[o0011o]())return;
    o1lO1O[ollolO].Ol0l[o1O0l0](this, $);
    if (this.allowInput == false && ol000($.target, "mini-buttonedit-border")) {
        l1Oo(this.el, this.l0l10l);
        Ol1O(document, "mouseup", this.o0l1l, this)
    }
};
OOO0O = function ($) {
    this[ol1O0]("keydown", {htmlEvent: $});
    if ($.keyCode == 8 && (this[o0011o]() || this.allowInput == false))return false;
    if ($.keyCode == 9) {
        this[oOl0oo]();
        return
    }
    if ($.keyCode == 27) {
        this[oOl0oo]();
        return
    }
    if ($.keyCode == 13)this[ol1O0]("enter");
    if (this[oOO1O1]())if ($.keyCode == 13 || $.keyCode == 27)$.stopPropagation()
};
O00lO = function ($) {
    if (Ol0O(this.el, $.target))return true;
    if (this.popup[l1Oo0O]($))return true;
    return false
};
lOo0o = function ($) {
    if (typeof $ == "string") {
        mini.parse($);
        $ = mini.get($)
    }
    var _ = mini.getAndCreate($);
    if (!_)return;
    _[lOo0l](false);
    this._popupInner = _;
    _.owner = this;
    _[Ol1oO1]("beforebuttonclick", this.o10O, this)
};
oOOol = function () {
    if (!this.popup)this[l0101]();
    return this.popup
};
l010l = function () {
    this.popup = new lO1lo0();
    this.popup.setShowAction("none");
    this.popup.setHideAction("outerclick");
    this.popup.setPopupEl(this.el);
    this.popup[Ol1oO1]("BeforeClose", this.lloO, this);
    this.popup[Ol1oO1]("close", this.__OnPopupClose, this);
    Ol1O(this.popup.el, "keydown", this.loO1, this)
};
o1olO = function ($) {
};
l0l1o = function ($) {
    if (this[l1Oo0O]($.htmlEvent))$.cancel = true; else this[o1110O]()
};
lOOOl = function ($) {
};
o0l000 = function () {
    var _ = {cancel: false};
    if (this._firebeforeshowpopup !== false) {
        this[ol1O0]("beforeshowpopup", _);
        if (_.cancel == true)return false
    }
    var $ = this[oolOl]();
    this[lO11l0]();
    $[Ol1oO1]("Close", this.o01oo, this);
    this[Ol100o]();
    this[ol1O0]("showpopup")
};
ll1Oo = function () {
    lol0Oo(document, "mousewheel", this.__OnDocumentMousewheel, this);
    this._mousewheelXY = null
};
Oolo0 = function () {
    this[o1110O]();
    this._mousewheelXY = mini.getXY(this.el);
    Ol1O(document, "mousewheel", this.__OnDocumentMousewheel, this)
};
l1100 = function (A) {
    var $ = this;

    function _() {
        if (!$[oOO1O1]())return;
        var B = $._mousewheelXY, A = mini.getXY($.el);
        if (B[0] != A[0] || B[1] != A[1])$[oOl0oo](); else setTimeout(_, 300)
    }

    setTimeout(_, 300)
};
lolO0o = function () {
    var _ = this[oolOl]();
    if (this._popupInner && this._popupInner.el.parentNode != this.popup._contentEl) {
        this.popup._contentEl.appendChild(this._popupInner.el);
        this._popupInner[lOo0l](true)
    }
    var B = Ol0oO(this._borderEl), $ = this[l0ll1o];
    if (this[l0ll1o] == "100%")$ = B.width;
    _[l000ll]();
    _[oll0OO]($);
    var A = parseInt(this[o0Oo10]);
    if (!isNaN(A))_[lOll1l](A); else _[lOll1l]("auto");
    _[o0O1l0](this[O1O01]);
    _[lo111o](this[l0lloo]);
    _[O0Olo0](this[OO0lOl]);
    _[l1o0O](this[l00O0]);
    var C = {
        xAlign: "left",
        yAlign: "below",
        outYAlign: "above",
        outXAlign: "right",
        popupCls: this.popupCls,
        alwaysView: this.alwaysView
    };
    this.oo00O1AtEl(this._borderEl, C)
};
l1l00 = function (_, A) {
    var $ = this[oolOl]();
    $[O0ll1o](_, A)
};
l1111 = function ($) {
    this[OO0oo0]();
    this[ol1O0]("hidepopup")
};
lol0l = function () {
    if (this[oOO1O1]()) {
        var $ = this[oolOl]();
        $.close();
        this[O0llO0]()
    }
};
ll1O = function () {
    if (this.popup && this.popup[l0Ooo]())return true; else return false
};
l10OOO = function ($) {
    this.alwaysView = $
};
o0O0O = function () {
    return this.alwaysView
};
llo11 = function ($) {
    this[l0ll1o] = $
};
l1oo1l = function ($) {
    this[OO0lOl] = $
};
l000o = function ($) {
    this[O1O01] = $
};
l0l10 = function ($) {
    return this[l0ll1o]
};
l0ll1 = function ($) {
    return this[OO0lOl]
};
oollO = function ($) {
    return this[O1O01]
};
OOl1l = function ($) {
    this[o0Oo10] = $
};
Ooool = function ($) {
    this[l00O0] = $
};
ll110 = function ($) {
    this[l0lloo] = $
};
lo0ol = function ($) {
    return this[o0Oo10]
};
ooloo = function ($) {
    return this[l00O0]
};
OoO1l = function ($) {
    return this[l0lloo]
};
oOl0o = function ($) {
    this.showPopupOnClick = $
};
O1l1l = function ($) {
    return this.showPopupOnClick
};
o1OOO = function (A) {
    if (this.enabled == false)return;
    this[ol1O0]("click", {htmlEvent: A});
    if (this[o0011o]())return;
    if (Ol0O(this._buttonEl, A.target))this.lO0o(A);
    if (ol000(A.target, this._closeCls)) {
        if (this[oOO1O1]())this[oOl0oo]();
        if (this.autoClear)if ((this.value && this.value !== 0) || this.text !== "") {
            this[ll10OO]("");
            this[l0O0O0]("");
            this.OOoOO()
        }
        this[ol1O0]("closeclick", {htmlEvent: A});
        return
    }
    if (this.allowInput == false || Ol0O(this._buttonEl, A.target) || this.showPopupOnClick) {
        var _ = ol000(A.target, "mini-buttonedit-button");
        if (_ && _ != this._buttonEl); else if (this[oOO1O1]())this[oOl0oo](); else {
            var $ = this;
            setTimeout(function () {
                $[ol1O01]()
            }, 1)
        }
    }
    this[o001O1](A)
};
o000l = function ($) {
    if ($.name == "close")this[oOl0oo]();
    $.cancel = true
};
lo0lO = function ($) {
    var _ = o1lO1O[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["popupWidth", "popupHeight", "popup", "onshowpopup", "onhidepopup", "onbeforeshowpopup"]);
    mini[oOOl00]($, _, ["popupMinWidth", "popupMaxWidth", "popupMinHeight", "popupMaxHeight"]);
    mini[Olo01O]($, _, ["showPopupOnClick", "alwaysView"]);
    return _
};
o00O1 = function ($) {
    if (mini.isArray($))$ = {type: "menu", items: $};
    if (typeof $ == "string") {
        var _ = o0OO($);
        if (!_)return;
        mini.parse($);
        $ = mini.get($)
    }
    if (this.menu !== $) {
        this.menu = mini.getAndCreate($);
        this.menu.setPopupEl(this.el);
        this.menu.setPopupCls("mini-button-popup");
        this.menu.setShowAction("leftclick");
        this.menu.setHideAction("outerclick");
        this.menu.setXAlign("left");
        this.menu.setYAlign("below");
        this.menu[O1ll1]();
        this.menu.owner = this
    }
};
llooO = function ($) {
    this.enabled = $;
    if ($)this[ol0OoO](this.Oloo); else this[oll1o0](this.Oloo);
    jQuery(this.el).attr("allowPopup", !!$)
};
OO11O = function (A) {
    if (typeof A == "string")return this;
    var $ = this.O1O0lo;
    this.O1O0lo = false;
    var _ = A.activeIndex;
    delete A.activeIndex;
    if (A.imgPath)this[o01101](A.imgPath);
    delete A.imgPath;
    l1lolo[ollolO][OO1O1l][o1O0l0](this, A);
    if (mini.isNumber(_))this[ol1Oo](_);
    this.O1O0lo = $;
    this[l0llOO]();
    return this
};
Ololl = function () {
    this.el = document.createElement("div");
    this.el.className = "mini-outlookbar";
    this.el.innerHTML = "<div class=\"mini-outlookbar-border\"></div>";
    this._borderEl = this.el.firstChild
};
OOoO = function () {
    O0o0o0(function () {
        Ol1O(this.el, "click", this.oO0o1l, this)
    }, this);
    var $ = "mini-outlookbar-hover";
    jQuery(this.el)[Ol1oO1]("mouseenter", ".mini-outlookbar-groupHeader", function (_) {
        jQuery(_.currentTarget)[Oo1Olo]($)
    });
    jQuery(this.el)[Ol1oO1]("mouseleave", ".mini-outlookbar-groupHeader", function (_) {
        jQuery(_.currentTarget)[OoOo0]($)
    })
};
oO000 = function (A) {
    if (!this.destroyed && this.el) {
        jQuery(this.el).unbind("mouseenter");
        jQuery(this.el).unbind("mouseleave");
        if (this.groups) {
            for (var $ = 0, B = this.groups.length; $ < B; $++) {
                var _ = this.groups[$];
                delete _._el
            }
            this.groups = null
        }
    }
    l1lolo[ollolO][l0lOl][o1O0l0](this, A)
};
Oo1O1 = function ($) {
    return this.uid + "$" + $._id
};
olol0 = function () {
    this.groups = []
};
lo100 = function (_) {
    var H = this.oOol1l(_), G = "<div id=\"" + H + "\" class=\"mini-outlookbar-group " + _.cls + "\" style=\"" + _.style + "\">" + "<div class=\"mini-outlookbar-groupHeader " + _.headerCls + "\" style=\"" + _.headerStyle + ";\"></div>" + "<div class=\"mini-outlookbar-groupBody " + _.bodyCls + "\" style=\"" + _.bodyStyle + ";\"></div>" + "</div>", A = mini.append(this._borderEl, G), E = A.lastChild, C = _.body;
    delete _.body;
    if (C) {
        if (!mini.isArray(C))C = [C];
        for (var $ = 0, F = C.length; $ < F; $++) {
            var B = C[$];
            mini.append(E, B)
        }
        C.length = 0
    }
    if (_.bodyParent) {
        var D = _.bodyParent;
        while (D.firstChild)E.appendChild(D.firstChild)
    }
    delete _.bodyParent;
    return A
};
O1llo = function (_) {
    var $ = mini.copyTo({
        _id: this._GroupId++,
        name: "",
        title: "",
        cls: "",
        style: "",
        iconCls: "",
        iconStyle: "",
        headerCls: "",
        headerStyle: "",
        bodyCls: "",
        bodyStyle: "",
        visible: true,
        enabled: true,
        showCollapseButton: true,
        expanded: this.expandOnLoad
    }, _);
    return $
};
ollol = function ($) {
    this.imgPath = $
};
Ol1O1 = function () {
    return this.imgPath
};
lolol = function (_) {
    if (!mini.isArray(_))return;
    this[lo0OlO]();
    for (var $ = 0, A = _.length; $ < A; $++)this[ooOlo](_[$])
};
O0Oo1s = function () {
    return this.groups
};
Ol11l = function (_, $) {
    if (typeof _ == "string")_ = {title: _};
    _ = this[l00oll](_);
    if (typeof $ != "number")$ = this.groups.length;
    this.groups.insert($, _);
    var B = this.Ol001(_);
    _._el = B;
    var $ = this.groups[o110ll](_), A = this.groups[$ + 1];
    if (A) {
        var C = this[O00l1o](A);
        jQuery(C).before(B)
    }
    this[l0loO0]();
    return _
};
O010l = function ($, _) {
    var $ = this[OoolOl]($);
    if (!$)return;
    mini.copyTo($, _);
    this[l0loO0]()
};
llll0 = function ($) {
    $ = this[OoolOl]($);
    if (!$)return;
    var _ = this[O00l1o]($);
    if (_)_.parentNode.removeChild(_);
    this.groups.remove($);
    this[l0loO0]()
};
looO1 = function () {
    for (var $ = this.groups.length - 1; $ >= 0; $--)this[lO0lOO]($)
};
o1O1o = function (_, $) {
    _ = this[OoolOl](_);
    if (!_)return;
    target = this[OoolOl]($);
    var A = this[O00l1o](_);
    this.groups.remove(_);
    if (target) {
        $ = this.groups[o110ll](target);
        this.groups.insert($, _);
        var B = this[O00l1o](target);
        jQuery(B).before(A)
    } else {
        this.groups[llo10o](_);
        this._borderEl.appendChild(A)
    }
    this[l0loO0]()
};
loO01 = function ($) {
    return $ && this.imgPath + $
};
o1OoO = function () {
    for (var _ = 0, H = this.groups.length; _ < H; _++) {
        var A = this.groups[_], B = A._el, G = B.firstChild, C = B.lastChild, D = this[OOl1o](A.img), E = "background-image:url(" + D + ")", $ = "<div class=\"mini-outlookbar-icon " + A.iconCls + "\" style=\"" + A[O110l] + ";\"></div>", I = "<div class=\"mini-tools\"><span class=\"mini-tools-collapse\" style=\"" + (A[oOl0ll] ? "" : "display:none;") + "\"></span></div>" + ((A[O110l] || A.iconCls || A.img) ? $ : "") + "<div class=\"mini-outlookbar-groupTitle\">" + A.title + "</div><div style=\"clear:both;\"></div>";
        G.innerHTML = I;
        if (D) {
            var F = G.childNodes[1];
            lO01l(F, E)
        }
        if (A.enabled)o11o(B, "mini-disabled"); else l1Oo(B, "mini-disabled");
        l1Oo(B, A.cls);
        lO01l(B, A.style);
        l1Oo(C, A.bodyCls);
        lO01l(C, A.bodyStyle);
        l1Oo(G, A.headerCls);
        lO01l(G, A.headerStyle);
        o11o(B, "mini-outlookbar-firstGroup");
        o11o(B, "mini-outlookbar-lastGroup");
        if (_ == 0)l1Oo(B, "mini-outlookbar-firstGroup");
        if (_ == H - 1)l1Oo(B, "mini-outlookbar-lastGroup")
    }
    this[l0llOO]()
};
O11oO = function () {
    if (!this[Ooo1oo]())return;
    if (this.olOOlo)return;
    this.l10oo();
    for (var $ = 0, H = this.groups.length; $ < H; $++) {
        var _ = this.groups[$], B = _._el, D = B.lastChild;
        if (_.expanded) {
            l1Oo(B, "mini-outlookbar-expand");
            o11o(B, "mini-outlookbar-collapse")
        } else {
            o11o(B, "mini-outlookbar-expand");
            l1Oo(B, "mini-outlookbar-collapse")
        }
        D.style.height = "auto";
        D.style.display = _.expanded ? "block" : "none";
        B.style.display = _.visible ? "" : "none";
        var A = lo0o(B, true), E = O1l0lo(D), G = olO0(D);
        if (jQuery.boxModel)A = A - E.left - E.right - G.left - G.right;
        D.style.width = A + "px"
    }
    var F = this[l0111O](), C = this[llOoO]();
    if (!F && this[loOll0] && !this.expandOnLoad && C) {
        B = this[O00l1o](this.activeIndex);
        B.lastChild.style.height = this.o0o1O() + "px"
    }
    mini.layout(this._borderEl)
};
llO0l = function () {
    if (this[l0111O]())this._borderEl.style.height = "auto"; else {
        var $ = this[o11lOl](true);
        if (!jQuery.boxModel) {
            var _ = olO0(this._borderEl);
            $ = $ + _.top + _.bottom
        }
        if ($ < 0)$ = 0;
        this._borderEl.style.height = $ + "px"
    }
};
o111O = function () {
    var C = jQuery(this.el).height(), K = olO0(this._borderEl);
    C = C - K.top - K.bottom;
    var A = this[llOoO](), E = 0;
    for (var F = 0, D = this.groups.length; F < D; F++) {
        var _ = this.groups[F], G = this[O00l1o](_);
        if (_.visible == false || _ == A)continue;
        var $ = G.lastChild.style.display;
        G.lastChild.style.display = "none";
        var J = jQuery(G).outerHeight();
        G.lastChild.style.display = $;
        var L = l011o(G);
        J = J + L.top + L.bottom;
        E += J
    }
    C = C - E;
    var H = this[O00l1o](this.activeIndex);
    if (!H)return 0;
    C = C - jQuery(H.firstChild).outerHeight();
    if (jQuery.boxModel) {
        var B = O1l0lo(H.lastChild), I = olO0(H.lastChild);
        C = C - B.top - B.bottom - I.top - I.bottom
    }
    B = O1l0lo(H), I = olO0(H), L = l011o(H);
    C = C - L.top - L.bottom;
    C = C - B.top - B.bottom - I.top - I.bottom;
    if (C < 0)C = 0;
    return C
};
O0Oo1 = function ($) {
    if (typeof $ == "object")return $;
    if (typeof $ == "number")return this.groups[$]; else for (var _ = 0, B = this.groups.length; _ < B; _++) {
        var A = this.groups[_];
        if (A.name == $)return A
    }
};
ol10o = function (B) {
    for (var $ = 0, A = this.groups.length; $ < A; $++) {
        var _ = this.groups[$];
        if (_._id == B)return _
    }
};
OooOo = function ($) {
    var _ = this[OoolOl]($);
    if (!_)return null;
    return _._el
};
O0lOO = function ($) {
    var _ = this[O00l1o]($);
    if (_)return _.lastChild;
    return null
};
Oooo1 = function ($) {
    this[loOll0] = $
};
l1OoO = function () {
    return this[loOll0]
};
O00O1 = function ($) {
    this.expandOnLoad = $
};
ool10 = function () {
    return this.expandOnLoad
};
oO01O = function (_) {
    var D = this.activeIndex, $ = this[OoolOl](_), A = this[OoolOl](this.activeIndex), B = $ != A;
    if ($)this.activeIndex = this.groups[o110ll]($); else this.activeIndex = -1;
    $ = this[OoolOl](this.activeIndex);
    if ($) {
        var C = this.allowAnim;
        this.allowAnim = false;
        this[o00O00]($);
        this.allowAnim = C
    }
    if (this.activeIndex == -1 && D != -1)this[Ol0011](D)
};
OOlo1 = function () {
    return this.activeIndex
};
lOo1o = function () {
    return this[OoolOl](this.activeIndex)
};
O01oo = function ($) {
    $ = this[OoolOl]($);
    if (!$ || $.visible == true)return;
    $.visible = true;
    this[l0loO0]()
};
llo1O = function ($) {
    $ = this[OoolOl]($);
    if (!$ || $.visible == false)return;
    $.visible = false;
    this[l0loO0]()
};
l0ooo = function ($) {
    $ = this[OoolOl]($);
    if (!$)return;
    if ($.expanded)this[Ol0011]($); else this[o00O00]($)
};
oo1ll = function (_) {
    _ = this[OoolOl](_);
    if (!_)return;
    var D = _.expanded, E = 0;
    if (this[loOll0] && !this.expandOnLoad && !this[l0111O]())E = this.o0o1O();
    var F = false;
    _.expanded = false;
    var $ = this.groups[o110ll](_);
    if ($ == this.activeIndex) {
        this.activeIndex = -1;
        F = true
    }
    var C = this[oOOl1O](_);
    if (this.allowAnim && D) {
        this.olOOlo = true;
        C.style.display = "block";
        C.style.height = "auto";
        if (this[loOll0] && !this.expandOnLoad && !this[l0111O]())C.style.height = E + "px";
        var A = {height: "1px"};
        l1Oo(C, "mini-outlookbar-overflow");
        o11o(this[O00l1o](_), "mini-outlookbar-expand");
        var B = this, H = jQuery(C);
        H.animate(A, 180, function () {
            B.olOOlo = false;
            o11o(C, "mini-outlookbar-overflow");
            B[l0llOO]()
        })
    } else this[l0llOO]();
    var G = {group: _, index: this.groups[o110ll](_), name: _.name};
    this[ol1O0]("Collapse", G);
    if (F)this[ol1O0]("activechanged")
};
oO10o = function ($) {
    $ = this[OoolOl]($);
    if (!$)return;
    var H = $.expanded;
    $.expanded = true;
    this.activeIndex = this.groups[o110ll]($);
    fire = true;
    if (this[loOll0] && !this.expandOnLoad)for (var D = 0, B = this.groups.length; D < B; D++) {
        var C = this.groups[D];
        if (C.expanded && C != $)this[Ol0011](C)
    }
    var G = this[oOOl1O]($);
    if (this.allowAnim && H == false) {
        this.olOOlo = true;
        G.style.display = "block";
        if (this[loOll0] && !this.expandOnLoad && !this[l0111O]()) {
            var A = this.o0o1O();
            G.style.height = (A) + "px"
        } else G.style.height = "auto";
        var _ = l010(G);
        G.style.height = "1px";
        var E = {height: _ + "px"}, I = G.style.overflow;
        G.style.overflow = "hidden";
        l1Oo(G, "mini-outlookbar-overflow");
        l1Oo(this[O00l1o]($), "mini-outlookbar-expand");
        var F = this, K = jQuery(G);
        K.animate(E, 180, function () {
            G.style.overflow = I;
            o11o(G, "mini-outlookbar-overflow");
            F.olOOlo = false;
            F[l0llOO]()
        })
    } else this[l0llOO]();
    var J = {group: $, index: this.groups[o110ll]($), name: $.name};
    this[ol1O0]("Expand", J);
    if (fire)this[ol1O0]("activechanged")
};
Olo00 = function ($) {
    $ = this[OoolOl]($);
    if ($.enabled == false)return;
    var _ = {group: $, groupIndex: this.groups[o110ll]($), groupName: $.name, cancel: false};
    if ($.expanded) {
        this[ol1O0]("BeforeCollapse", _);
        if (_.cancel == false)this[Ol0011]($)
    } else {
        this[ol1O0]("BeforeExpand", _);
        if (_.cancel == false)this[o00O00]($)
    }
};
l11l0 = function (B) {
    var _ = ol000(B.target, "mini-outlookbar-group");
    if (!_)return null;
    var $ = _.id.split("$"), A = $[$.length - 1];
    return this.lO00(A)
};
oOo0O = function (A) {
    if (this.olOOlo)return;
    var _ = ol000(A.target, "mini-outlookbar-groupHeader");
    if (!_)return;
    var $ = this.l1O0(A);
    if (!$)return;
    this.OOolOl($)
};
Ol1lO = function (D) {
    var A = [];
    for (var $ = 0, C = D.length; $ < C; $++) {
        var B = D[$], _ = {};
        A.push(_);
        _.style = B.style.cssText;
        mini[Ol100O](B, _, ["name", "title", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle"]);
        mini[Olo01O](B, _, ["visible", "enabled", "showCollapseButton", "expanded"]);
        _.bodyParent = B
    }
    return A
};
l1o0l = function ($) {
    var A = l1lolo[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, A, ["onactivechanged", "oncollapse", "onexpand", "imgPath"]);
    mini[Olo01O]($, A, ["autoCollapse", "allowAnim", "expandOnLoad"]);
    mini[oOOl00]($, A, ["activeIndex"]);
    var _ = mini[l00oo]($);
    A.groups = this[l0l10O](_);
    return A
};
l0lOo = function (A) {
    if (typeof A == "string")return this;
    var $ = A.value;
    delete A.value;
    var _ = A.text;
    delete A.text;
    this.Olol = !(A.enabled == false || A.allowInput == false || A[lOlo0]);
    l0lOol[ollolO][OO1O1l][o1O0l0](this, A);
    if (this.Olol === false) {
        this.Olol = true;
        this[l0loO0]()
    }
    if (!mini.isNull(_))this[l0O0O0](_);
    if (!mini.isNull($))this[ll10OO]($);
    return this
};
o0110 = function (_) {
    var C = this;
    C.buttons = _ || [];
    var B = "";

    function A($) {
        B += C[O0loOO]($.name, $.iconCls)
    }

    for (var $ = 0, D = C.buttons.length; $ < D; $++) {
        var E = C.buttons[$];
        if (!E.name)E.name = "button" + $;
        A(E)
    }
    mini.append(C._buttonsEl, B);
    C[lO0ll0](false)
};
lOOO1 = function () {
    return this.buttons || []
};
O1o00 = function (B) {
    var C = this[o1O0OO]();
    for (var _ = 0, A = C.length; _ < A; _++) {
        var $ = C[_];
        if ($.name && $.name == B)return $
    }
    return null
};
l1OlButtonHtml = function (A, _) {
    A = A || "";
    _ = _ || "";
    var $ = "onmouseover=\"l1Oo(this,'" + this.OOlO + "');\" " + "onmouseout=\"o11o(this,'" + this.OOlO + "');\"";
    return "<span name=\"" + A + "\" class=\"mini-buttonedit-button mini-buttonedit-" + A + "\" " + $ + "><span class=\"mini-buttonedit-icon " + _ + "\"></span></span>"
};
lo0o1 = function () {
    var $ = "<span class=\"mini-buttonedit-close\" name=\"close\"></span>" + this.OO1OHtml("trigger");
    return "<span class=\"mini-buttonedit-buttons\">" + $ + "</span>"
};
Ol0l1 = function (_, $) {
    return this[O0loOO](_, $)
};
l1Ol = function () {
    this.el = document.createElement("span");
    this.el.className = "mini-buttonedit";
    var $ = this.OO1OsHTML();
    this.el.innerHTML = "<span class=\"mini-buttonedit-border\"><input type=\"text\" class=\"mini-buttonedit-input\" autocomplete=\"off\"/>" + $ + "</span><input name=\"" + this.name + "\" type=\"hidden\"/>";
    this._borderEl = this.el.firstChild;
    this._textEl = this._borderEl.firstChild;
    this.l0o0o0 = this.el.lastChild;
    this._buttonsEl = this._borderEl.lastChild;
    this._buttonEl = this._buttonsEl.lastChild;
    this._closeEl = this._buttonEl.previousSibling;
    this.o00o01()
};
Ol1lo = function ($) {
    if (this._textEl) {
        this._textEl.onchange = this._textEl.onfocus = null;
        mini[o11l00](this._textEl);
        this._textEl = null
    }
    this._borderEl = this._buttonsEl = this._buttonEl = this._closeEl = this.l0o0o0 = null;
    l0lOol[ollolO][l0lOl][o1O0l0](this, $)
};
OOooo = function () {
    O0o0o0(function () {
        o1l0lo(this.el, "mousedown", this.Ol0l, this);
        o1l0lo(this._textEl, "focus", this.ol0lo0, this);
        o1l0lo(this._textEl, "change", this.O0lloo, this);
        var $ = this.text;
        this.text = null;
        if (this.el)if (this._deferSetText)this[l0O0O0]($)
    }, this)
};
ll0lo = function () {
    if (this.oolo)return;
    this.oolo = true;
    Ol1O(this.el, "click", this.oO0o1l, this);
    Ol1O(this._textEl, "blur", this.l0O01o, this);
    Ol1O(this._textEl, "keydown", this.lllO, this);
    Ol1O(this._textEl, "keyup", this.lOOlo, this);
    Ol1O(this._textEl, "keypress", this.l1OO, this)
};
O000O = function (_) {
    this._buttonEl.style.display = this.showButton ? "inline-block" : "none";
    if (this._closeEl)this._closeEl.style.display = this.showClose ? "inline-block" : "none";
    var $ = this._buttonsEl.offsetWidth + 2;
    if ($ == 2)this._noLayout = true; else this._noLayout = false;
    this._borderEl.style["paddingRight"] = $ + "px";
    if (_ !== false)this[l0llOO]()
};
OoOo1 = function () {
    if (this._noLayout)this[lO0ll0](false);
    if (this._doLabelLayout)this[lolll]()
};
O0ool = function ($) {
    if (parseInt($) == $)$ += "px";
    this.height = $
};
OO0Oo = function () {
    try {
        this._textEl[O1loo]();
        var $ = this;
        setTimeout(function () {
            if ($.O1OO00)$._textEl[O1loo]()
        }, 10)
    } catch (_) {
    }
};
ll01o = function () {
    try {
        this._textEl[O0llO0]()
    } catch ($) {
    }
};
l0lO00 = function () {
    this._textEl[lOol1O]()
};
l0l0oEl = function () {
    return this._textEl
};
lol10 = function ($) {
    this.name = $;
    if (this.l0o0o0)mini.setAttr(this.l0o0o0, "name", this.name)
};
O100O = function ($) {
    if ($ === null || $ === undefined)$ = "";
    var _ = this.text !== $;
    this.text = $;
    this._textEl.value = $;
    this.o00o01()
};
l0l0o = function () {
    var $ = this._textEl.value;
    return $
};
l0ol0 = function ($) {
    if ($ === null || $ === undefined)$ = "";
    var _ = this.value !== $;
    this.value = $;
    this.l0o0o0.value = this[lOo01l]()
};
Oo0O1 = function () {
    return this.value
};
l0ll10 = function () {
    var $ = this.value;
    if ($ === null || $ === undefined)$ = "";
    return String($)
};
lo0oo = function () {
    this._textEl.placeholder = this[o0oOOO];
    if (this[o0oOOO])lOO0O(this._textEl)
};
O1lll = function ($) {
    if (this[o0oOOO] != $) {
        this[o0oOOO] = $;
        this.o00o01()
    }
};
o1o10 = function () {
    return this[o0oOOO]
};
Ooo1 = function ($) {
    $ = parseInt($);
    if (isNaN($))return;
    this.maxLength = $;
    this._textEl.maxLength = $
};
l0001 = function () {
    return this.maxLength
};
O1001 = function ($) {
    $ = parseInt($);
    if (isNaN($))return;
    this.minLength = $
};
OO0l0 = function () {
    return this.minLength
};
O1lOo = function ($) {
    l0lOol[ollolO][ool1ll][o1O0l0](this, $)
};
O1l1O = function () {
    var $ = this[o0011o]();
    if ($ || this.allowInput == false)this._textEl[lOlo0] = true; else this._textEl[lOlo0] = false;
    if ($)this[oll1o0](this.O00Ol); else this[ol0OoO](this.O00Ol);
    if (this.allowInput)this[ol0OoO](this.Ool10); else this[oll1o0](this.Ool10);
    if (this.enabled)this._textEl.disabled = false; else this._textEl.disabled = true
};
O111l = function ($) {
    this.allowInput = $;
    this[l11OOO]()
};
oO1O0 = function () {
    return this.allowInput
};
o11oO = function ($) {
    this.inputAsValue = $
};
olO1o = function () {
    return this.inputAsValue
};
l00O1 = function ($) {
    this.autoClear = $
};
ol0lO = function () {
    return this.autoClear
};
O0O0 = function () {
    if (!this.ll001O)this.ll001O = mini.append(this.el, "<span class=\"mini-errorIcon\"></span>");
    return this.ll001O
};
o0O1o = function () {
    if (this.ll001O) {
        var $ = this.ll001O;
        jQuery($).remove()
    }
    this.ll001O = null
};
o1loOO = function (_) {
    if (this.enabled == false)return;
    this[ol1O0]("click", {htmlEvent: _});
    if (this[o0011o]())return;
    if (!Ol0O(this._borderEl, _.target))return;
    var $ = new Date();
    if (Ol0O(this._buttonEl, _.target))this.lO0o(_);
    if (ol000(_.target, this._closeCls)) {
        if (this.autoClear)if ((this.value && this.value !== 0) || this.text !== "") {
            this[ll10OO]("");
            this[l0O0O0]("");
            this.OOoOO()
        }
        this[ol1O0]("closeclick", {htmlEvent: _})
    }
    this[o001O1](_)
};
oo1o1 = function (B) {
    var $ = ol000(B.target, "mini-buttonedit-button");
    if ($ && $ != this._buttonEl && $ != this._closeEl) {
        var _ = jQuery($).attr("name"), A = this[ll1o00](_);
        if (A.handler)A.handler()
    }
};
o0l00 = function (C) {
    if (this[o0011o]() || this.enabled == false)return;
    if (!Ol0O(this._borderEl, C.target))return;
    if (!Ol0O(this._textEl, C.target)) {
        this._clickTarget = C.target;
        var $ = this;
        setTimeout(function () {
            $[O1loo]();
            mini.selectRange($._textEl, 1000, 1000)
        }, 1);
        if (Ol0O(this._buttonEl, C.target)) {
            var _ = ol000(C.target, "mini-buttonedit-up"), B = ol000(C.target, "mini-buttonedit-down");
            if (_) {
                l1Oo(_, this.llOoo);
                this.O1l1(C, "up")
            } else if (B) {
                l1Oo(B, this.llOoo);
                this.O1l1(C, "down")
            } else {
                l1Oo(this._buttonEl, this.llOoo);
                this.O1l1(C)
            }
        }
        Ol1O(document, "mouseup", this.o0l1l, this);
        var A = ol000(C.target, "mini-buttonedit-button");
        if (A)l1Oo(A, this.llOoo)
    }
};
OloOo = function (_) {
    this._clickTarget = null;
    var $ = this;
    setTimeout(function () {
        var A = $._buttonEl.getElementsByTagName("*");
        for (var _ = 0, B = A.length; _ < B; _++)o11o(A[_], $.llOoo);
        o11o($._buttonEl, $.llOoo);
        o11o($.el, $.l0l10l);
        jQuery(".mini-buttonedit-button", $._buttonsEl)[OoOo0]($.llOoo)
    }, 80);
    lol0Oo(document, "mouseup", this.o0l1l, this)
};
Olo1l = function ($) {
    this[l0loO0]();
    this.o00lo();
    if (this[o0011o]())return;
    this.O1OO00 = true;
    this[oll1o0](this.o101);
    if (this.selectOnFocus)this[oOOOOo]();
    this[ol1O0]("focus", {htmlEvent: $})
};
OolO1 = function () {
    if (this.O1OO00 == false)this[ol0OoO](this.o101)
};
O1100 = function (A) {
    var $ = this;

    function _() {
        if ($.O1OO00 == false) {
            $[ol0OoO]($.o101);
            if ($.validateOnLeave && $[OoOOol]())$[llo100]();
            this[ol1O0]("blur", {htmlEvent: A})
        }
    }

    setTimeout(function () {
        _[o1O0l0]($)
    }, 2)
};
o0lO0 = function (_) {
    var $ = this;
    $.O1OO00 = false;
    setTimeout(function () {
        $[l1llll](_)
    }, 10)
};
o0ll0 = function (B) {
    var A = {htmlEvent: B};
    this[ol1O0]("keydown", A);
    if (B.keyCode == 8 && (this[o0011o]() || this.allowInput == false))return false;
    if (B.keyCode == 27 || B.keyCode == 13 || B.keyCode == 9) {
        var $ = this;
        $.O0lloo(null);
        if (B.keyCode == 13) {
            var _ = this;
            _[ol1O0]("enter", A)
        }
    }
    if (B.keyCode == 27)B.preventDefault()
};
oO1ol = function () {
    var _ = this._textEl.value;
    if (_ == this.text)return;
    var $ = this[o1oOl]();
    this[l0O0O0](_);
    this[ll10OO](_);
    if ($ !== this[lOo01l]())this.OOoOO()
};
l1OO1 = function ($) {
    this[ol1O0]("keyup", {htmlEvent: $})
};
O1O0o = function ($) {
    this[ol1O0]("keypress", {htmlEvent: $})
};
lOO11 = function ($) {
    var _ = {htmlEvent: $, cancel: false};
    this[ol1O0]("beforebuttonclick", _);
    if (_.cancel == true)return;
    this[ol1O0]("buttonclick", _)
};
lool1 = function (_, $) {
    this[O1loo]();
    this[oll1o0](this.o101);
    this[ol1O0]("buttonmousedown", {htmlEvent: _, spinType: $})
};
Ool0O = function (_, $) {
    this[Ol1oO1]("buttonclick", _, $)
};
oO1Oo = function (_, $) {
    this[Ol1oO1]("buttonmousedown", _, $)
};
l10lO = function (_, $) {
    this[Ol1oO1]("textchanged", _, $)
};
O00ll = function ($) {
    this.textName = $;
    if (this._textEl)mini.setAttr(this._textEl, "name", this.textName)
};
OOlOO = function () {
    return this.textName
};
Ol1o1 = function ($) {
    this.selectOnFocus = $
};
lOl0ll = function ($) {
    return this.selectOnFocus
};
OoO01 = function ($) {
    this.showClose = $;
    this[lO0ll0]()
};
lo1O0 = function ($) {
    return this.showClose
};
lO0Ol = function ($) {
    this.showButton = $;
    this[lO0ll0]()
};
O0olo = function () {
    return this.showButton
};
OOoO0 = function ($) {
    this.inputStyle = $;
    lO01l(this._textEl, $)
};
o1ll = function (el) {
    var attrs = l0lOol[ollolO][ol1oOl][o1O0l0](this, el), jq = jQuery(el);
    mini[Ol100O](el, attrs, ["value", "text", "textName", "emptyText", "inputStyle", "defaultText", "onenter", "onkeydown", "onkeyup", "onkeypress", "onbuttonclick", "onbuttonmousedown", "ontextchanged", "onfocus", "onblur", "oncloseclick", "onclick", "buttons"]);
    mini[Olo01O](el, attrs, ["allowInput", "inputAsValue", "selectOnFocus", "showClose", "showButton", "autoClear"]);
    mini[oOOl00](el, attrs, ["maxLength", "minLength"]);
    var buttons = attrs["buttons"];
    if (buttons) {
        buttons = eval("(" + buttons + ")");
        attrs.buttons = buttons || null
    }
    return attrs
};
lOoo0 = function () {
    oO00O0[ollolO][lololl][o1O0l0](this);
    l1Oo(this.el, "mini-htmlfile");
    this._progressbarEl = mini.append(this._borderEl, "<div id=\"" + this._id + "$progressbar\"  class=\"mini-fileupload-progressbar\"><div id=\"" + this._id + "$complete\" class=\"mini-fileupload-complete\"></div></div>");
    this._completeEl = this._progressbarEl.firstChild;
    this._uploadId = this._id + "$button_placeholder";
    this.O001o0 = mini.append(this.el, "<span id=\"" + this._uploadId + "\"></span>");
    this.uploadEl = this.O001o0;
    Ol1O(this._borderEl, "mousemove", this.oll1l, this)
};
ool11 = function () {
    var $ = "onmouseover=\"l1Oo(this,'" + this.OOlO + "');\" " + "onmouseout=\"o11o(this,'" + this.OOlO + "');\"";
    return "<span class=\"mini-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
};
l0O00 = function ($) {
    if (this._innerEl) {
        mini[o11l00](this._innerEl);
        this._innerEl = null
    }
    if (this.swfUpload) {
        this.swfUpload[l0lOl]();
        this.swfUpload = null
    }
    if (!this.destroyed)mini[o11l00](this._borderEl);
    oO00O0[ollolO][l0lOl][o1O0l0](this, $)
};
OO10O = function (A) {
    if (this.enabled == false)return;
    var $ = this;
    if (!this.swfUpload) {
        var B = new SWFUpload({
            file_post_name: this.name,
            upload_url: $.uploadUrl,
            flash_url: $.flashUrl,
            file_size_limit: $.limitSize,
            file_types: $.limitType,
            file_types_description: $.typesDescription,
            file_upload_limit: parseInt($.uploadLimit),
            file_queue_limit: $.queueLimit,
            file_queued_handler: mini.createDelegate(this.__on_file_queued, this),
            upload_error_handler: mini.createDelegate(this.__on_upload_error, this),
            upload_success_handler: mini.createDelegate(this.__on_upload_success, this),
            upload_complete_handler: mini.createDelegate(this.__on_upload_complete, this),
            upload_progress_handler: mini.createDelegate(this.__on_upload_progress, this),
            file_queue_error_handler: mini.createDelegate(this.__on_file_queued_error, this),
            button_placeholder_id: this._uploadId,
            button_width: 1000,
            button_height: 50,
            button_window_mode: "transparent",
            button_action: SWFUpload.BUTTON_ACTION.SELECT_FILE,
            debug: false
        });
        B.flashReady();
        this.swfUpload = B;
        var _ = this.swfUpload.movieElement;
        _.style.zIndex = 1000;
        _.style.position = "absolute";
        _.style.left = "0px";
        _.style.top = "0px";
        _.style.width = "100%";
        _.style.height = "50px"
    }
};
oo1oo = function ($) {
    mini.copyTo(this.postParam, $)
};
o01o = function ($) {
    this[ll1oO0]($)
};
l1O0l = function () {
    return this.postParam
};
lll0O = function ($) {
    this.limitType = $;
    if (this.swfUpload)this.swfUpload.setFileTypes(this.limitType, this.typesDescription)
};
o1oO = function () {
    return this.limitType
};
lOO1l = function ($) {
    this.typesDescription = $;
    if (this.swfUpload)this.swfUpload.setFileTypes(this.limitType, this.typesDescription)
};
Ooloo = function () {
    return this.typesDescription
};
OOOO0 = function ($) {
    this.buttonText = $;
    this._buttonEl.innerHTML = $
};
l0O0o = function () {
    return this.buttonText
};
o001O = function ($) {
    this.uploadLimit = $
};
l1o00 = function ($) {
    this.queueLimit = $
};
loo1l = function ($) {
    this.flashUrl = $
};
OOoo0 = function ($) {
    if (this.swfUpload)this.swfUpload.setUploadURL($);
    this.uploadUrl = $
};
o101l = function () {
    return this.uploadUrl
};
ll01 = function ($) {
    this.name = $
};
ll101 = function ($) {
    var _ = {cancel: false};
    this[ol1O0]("beforeupload", _);
    if (_.cancel == true)return;
    if (this.swfUpload) {
        this.swfUpload.setPostParams(this.postParam);
        this.swfUpload[O1Olo]()
    }
};
OO1oo = function ($) {
    this.showUploadProgress = $;
    this._progressbarEl.style.display = $ ? "block" : "none"
};
oOoOO = function () {
    return this.showUploadProgress
};
oo01o = function () {
    this[ll10OO]("");
    this[l0O0O0]("");
    if (this.swfUpload)this.swfUpload.cancelUpload()
};
O101O = function (A, C, $) {
    if (this.showUploadProgress) {
        var B = lo0o(this._progressbarEl), _ = B * C / $;
        lOool0(this._completeEl, _)
    }
    this._progressbarEl.style.display = this.showUploadProgress ? "block" : "none";
    var D = {file: A, complete: C, total: $};
    this[ol1O0]("uploadprogress", D)
};
OlO10_error = function (A, $, _) {
    var B = {file: A, code: $, msg: _};
    this[ol1O0]("queuederror", B)
};
OlO10 = function (A) {
    var B = this.swfUpload.getStats();
    if (B) {
        var $ = B.files_queued;
        if ($ > 1)for (var _ = 0; _ < $ - 1; _++)this.swfUpload.cancelUpload()
    }
    var C = {file: A};
    if (this.uploadOnSelect)this[O1Olo]();
    this[l0O0O0](A.name);
    this[ll10OO](A.name);
    this[lO1lo]();
    this[ol1O0]("fileselect", C)
};
ool1o = function (_, $) {
    var A = {file: _, serverData: $};
    this[ol1O0]("uploadsuccess", A);
    this._progressbarEl.style.display = "none"
};
ol100 = function (A, $, _) {
    if (_ == "File Cancelled")return;
    this._progressbarEl.style.display = "none";
    var B = {file: A, code: $, message: _};
    this[ol1O0]("uploaderror", B)
};
loo11 = function ($) {
    this._progressbarEl.style.display = "none";
    this[ol1O0]("uploadcomplete", $)
};
lO01o = function () {
};
l0Ool = function ($) {
    var _ = oO00O0[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["limitType", "limitSize", "flashUrl", "uploadUrl", "uploadLimit", "buttonText", "showUploadProgress", "onuploadsuccess", "onuploaderror", "onuploadcomplete", "onfileselect", "onuploadprogress", "onqueuederror"]);
    mini[Olo01O]($, _, ["uploadOnSelect"]);
    return _
};
l1lll = function () {
    if (!l0l1O0._Calendar) {
        var $ = l0l1O0._Calendar = new OOO0l1();
        $[Oo1oll]("border:0;")
    }
    return l0l1O0._Calendar
};
O0OO = function ($) {
    if (this._destroyPopup)l0l1O0._Calendar = null;
    l0l1O0[ollolO][l0lOl][o1O0l0](this, $)
};
l01Oo = function () {
    l0l1O0[ollolO][l0101][o1O0l0](this);
    this.O0l1l = this[o001o1]()
};
l0ll0 = function ($) {
    if (this.O0l1l)this.O0l1l[OOo11]()
};
OolOo = function () {
    var A = {cancel: false};
    this[ol1O0]("beforeshowpopup", A);
    if (A.cancel == true)return;
    this.O0l1l = this[o001o1]();
    this.O0l1l[lo0l0o]();
    this.O0l1l.O1O0lo = false;
    if (this.O0l1l.el.parentNode != this.popup._contentEl)this.O0l1l[O1OO10](this.popup._contentEl);
    this.O0l1l[OO1O1l]({
        monthPicker: this._monthPicker,
        showTime: this.showTime,
        timeFormat: this.timeFormat,
        showClearButton: this.showClearButton,
        showYesterdayButton: this.showYesterdayButton,
        showTodayButton: this.showTodayButton,
        showOkButton: this.showOkButton,
        showWeekNumber: this.showWeekNumber
    });
    this.O0l1l[ll10OO](this.value);
    if (this.value)this.O0l1l[l1oOo](this.value); else this.O0l1l[l1oOo](this.viewDate);
    function $() {
        this.O0l1l[OOo11]();
        if (this.O0l1l._target) {
            var $ = this.O0l1l._target;
            this.O0l1l[l0o1lo]("timechanged", $.OO1lo, $);
            this.O0l1l[l0o1lo]("dateclick", $.o01lO, $);
            this.O0l1l[l0o1lo]("drawdate", $.ll0o1O, $)
        }
        this.O0l1l[Ol1oO1]("timechanged", this.OO1lo, this);
        this.O0l1l[Ol1oO1]("dateclick", this.o01lO, this);
        this.O0l1l[Ol1oO1]("drawdate", this.ll0o1O, this);
        this.O0l1l[O1OOoO]();
        this.O0l1l.O1O0lo = true;
        this.O0l1l[l0llOO]();
        this.O0l1l[O1loo]();
        this.O0l1l._target = this
    }

    var _ = this;
    $[o1O0l0](_);
    l0l1O0[ollolO][ol1O01][o1O0l0](this)
};
l1OolO = function () {
    l0l1O0[ollolO][oOl0oo][o1O0l0](this);
    this.O0l1l[l0o1lo]("timechanged", this.OO1lo, this);
    this.O0l1l[l0o1lo]("dateclick", this.o01lO, this);
    this.O0l1l[l0o1lo]("drawdate", this.ll0o1O, this);
    this.O0l1l[OOo11]()
};
lloO0 = function ($) {
    if (Ol0O(this.el, $.target))return true;
    if (this.O0l1l[l1Oo0O]($))return true;
    return false
};
lOl1O = function ($) {
    if ($.keyCode == 13)this.o01lO();
    if ($.keyCode == 27) {
        this[oOl0oo]();
        this[O1loo]()
    }
};
OOllO = function (D) {
    if (D[o0Ol0l] == false)return;
    var B = this.value;
    if (!mini.isDate(B))return;
    var $ = mini.parseDate(this.maxDate), C = mini.parseDate(this.minDate), _ = this.maxDateErrorText || mini.VTypes.maxDateErrorText, A = this.minDateErrorText || mini.VTypes.minDateErrorText;
    if (mini.isDate($))if (B[OOo0o1]() > $[OOo0o1]()) {
        D[o0Ol0l] = false;
        D.errorText = String.format(_, mini.formatDate($, this.format))
    }
    if (mini.isDate(C))if (B[OOo0o1]() < C[OOo0o1]()) {
        D[o0Ol0l] = false;
        D.errorText = String.format(A, mini.formatDate(C, this.format))
    }
};
oll1o = function (B) {
    var _ = B.date, $ = mini.parseDate(this.maxDate), A = mini.parseDate(this.minDate);
    if (mini.isDate($))if (_[OOo0o1]() > $[OOo0o1]())B[lO1l1] = false;
    if (mini.isDate(A))if (_[OOo0o1]() < A[OOo0o1]())B[lO1l1] = false;
    this[ol1O0]("drawdate", B)
};
OO0oO = function (A) {
    if (!A)return;
    if (this.showOkButton && A.action != "ok")return;
    var _ = this.O0l1l[o1oOl](), $ = this[lOo01l]("U");
    this[ll10OO](_);
    if ($ !== this[lOo01l]("U"))this.OOoOO();
    this[oOl0oo]();
    this[O1loo]()
};
OO01l = function (_) {
    if (this.showOkButton)return;
    var $ = this.O0l1l[o1oOl]();
    this[ll10OO]($);
    this.OOoOO()
};
ooO0O = function ($) {
    if (typeof $ != "string")return;
    if (this.format != $) {
        this.format = $;
        this._textEl.value = this.l0o0o0.value = this[lOo01l]()
    }
};
O1lo0 = function () {
    return this.format
};
Ool1OFormat = function ($) {
    if (typeof $ != "string")return;
    if (this.valueFormat != $)this.valueFormat = $
};
ol1OOFormat = function () {
    return this.valueFormat
};
Ool1O = function ($) {
    var _ = this;
    if (_.valueType == "date")$ = mini.parseDate($); else if (mini.isDate($))$ = mini.formatDate($, _.format);
    if (mini.isNull($))$ = "";
    if (mini.isDate($)) {
        $ = new Date($[OOo0o1]());
        if (mini.isDate($) && isNaN($[OOo0o1]()))$ = ""
    }
    if (this.value != $)this.value = $;
    this.text = this._textEl.value = this.l0o0o0.value = this[lOo01l]()
};
l0o00 = function ($) {
    if ($ == "null")$ = null;
    this.nullValue = $
};
o01o0 = function () {
    return this.nullValue
};
ol1OO = function () {
    if (this.valueType != "date")return this.value;
    if (!mini.isDate(this.value))return this.nullValue;
    var $ = this.value;
    if (this.valueFormat)$ = mini.formatDate($, this.valueFormat);
    return $
};
l0olO = function ($) {
    if (this.valueType != "date")return this.value;
    if (!mini.isDate(this.value))return "";
    $ = $ || this.format;
    return mini.formatDate(this.value, $)
};
lOo00 = function ($) {
    $ = mini.parseDate($);
    if (!mini.isDate($))return;
    this.viewDate = $
};
OlOOO = function () {
    return this.O0l1l[Olll01]()
};
Oo1lo = function ($) {
    if (this.showTime != $)this.showTime = $
};
lO1o0 = function () {
    return this.showTime
};
lloll = function ($) {
    if (this.timeFormat != $)this.timeFormat = $
};
O00ol = function () {
    return this.timeFormat
};
O1l0 = function ($) {
    this.showYesterdayButton = $
};
loOOo = function () {
    return this.showYesterdayButton
};
lo10o = function ($) {
    this.showTodayButton = $
};
o110o = function () {
    return this.showTodayButton
};
l1OOO = function ($) {
    this.showClearButton = $
};
o1O0o = function () {
    return this.showClearButton
};
ll10l = function ($) {
    this.showOkButton = $
};
oo1o0 = function () {
    return this.showOkButton
};
l00oO = function ($) {
    this.showWeekNumber = $
};
l1olO = function () {
    return this.showWeekNumber
};
oOl00 = function ($) {
    this.maxDate = $
};
OloOO = function () {
    return this.maxDate
};
oo0o1l = function ($) {
    this.minDate = $
};
o00lO = function () {
    return this.minDate
};
oOO0 = function ($) {
    this.maxDateErrorText = $
};
O0lO1 = function () {
    return this.maxDateErrorText
};
OoOl1 = function ($) {
    this.minDateErrorText = $
};
loolo = function () {
    return this.minDateErrorText
};
O0O00 = function (B) {
    var A = this._textEl.value, _ = this[lOo01l]("U");
    if (this.valueType == "date") {
        var $ = mini.parseDate(A);
        if (!$ || isNaN($))$ = null
    }
    this[ll10OO](A);
    if (_ !== this[lOo01l]("U"))this.OOoOO()
};
o0o1o = function (A) {
    var _ = {htmlEvent: A};
    this[ol1O0]("keydown", _);
    if (A.keyCode == 8 && (this[o0011o]() || this.allowInput == false))return false;
    if (A.keyCode == 9) {
        if (this[oOO1O1]())this[oOl0oo]();
        return
    }
    if (this[o0011o]())return;
    switch (A.keyCode) {
        case 27:
            A.preventDefault();
            if (this[oOO1O1]())A.stopPropagation();
            this[oOl0oo]();
            break;
        case 9:
        case 13:
            if (this[oOO1O1]()) {
                A.preventDefault();
                A.stopPropagation();
                this[oOl0oo]();
                this[O1loo]()
            } else {
                this.O0lloo(null);
                var $ = this;
                setTimeout(function () {
                    $[ol1O0]("enter", _)
                }, 10)
            }
            break;
        case 37:
            break;
        case 38:
            A.preventDefault();
            break;
        case 39:
            break;
        case 40:
            A.preventDefault();
            this[ol1O01]();
            break;
        default:
            break
    }
};
oO11o = function ($) {
    var _ = l0l1O0[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["format", "viewDate", "timeFormat", "ondrawdate", "minDate", "maxDate", "valueType", "valueFormat", "nullValue", "minDateErrorText", "maxDateErrorText"]);
    mini[Olo01O]($, _, ["showTime", "showTodayButton", "showClearButton", "showOkButton", "showWeekNumber", "showYesterdayButton"]);
    return _
};
lo1l = function (B) {
    if (typeof B == "string")return this;
    var $ = B.value;
    delete B.value;
    var _ = B.text;
    delete B.text;
    var C = B.url;
    delete B.url;
    var A = B.data;
    delete B.data;
    lo1001[ollolO][OO1O1l][o1O0l0](this, B);
    if (!mini.isNull(A))this[ol0l0](A);
    if (!mini.isNull(C))this[Oo1100](C);
    if (!mini.isNull($))this[ll10OO]($);
    if (!mini.isNull(_))this[l0O0O0](_);
    return this
};
Ol0Oo = function () {
    lo1001[ollolO][l0101][o1O0l0](this);
    this.tree = new lol101();
    this.tree[l1O1o](true);
    this.tree[Oo1oll]("border:0;width:100%;height:100%;overflow:hidden;");
    this.tree[oO0O1](this[l11ol0]);
    this.tree[O1OO10](this.popup._contentEl);
    this.tree[oOll0l](this[lOO1o]);
    this.tree[O0Oo](this[lOOoo0]);
    this.tree[ool01](this.showRadioButton);
    this.tree[Ol00Oo](this.expandOnNodeClick);
    if (!mini.isNull(this.defaultRowHeight))this.tree.defaultRowHeight = this.defaultRowHeight;
    this.tree[Ol1oO1]("nodeclick", this.l0lool, this);
    this.tree[Ol1oO1]("nodecheck", this.Oll1, this);
    this.tree[Ol1oO1]("expand", this.OoO00, this);
    this.tree[Ol1oO1]("collapse", this.oO1O, this);
    this.tree[Ol1oO1]("beforenodecheck", this.oo11, this);
    this.tree[Ol1oO1]("beforenodeselect", this.O1oO, this);
    this.tree[Ol1oO1]("drawnode", this._ooOl0o, this);
    this.tree.useAnimation = false;
    var $ = this;
    this.tree[Ol1oO1]("beforeload", function (_) {
        $[ol1O0]("beforeload", _)
    }, this);
    this.tree[Ol1oO1]("load", function (_) {
        $[ol1O0]("load", _)
    }, this);
    this.tree[Ol1oO1]("loaderror", function (_) {
        $[ol1O0]("loaderror", _)
    }, this)
};
lllO1 = function ($) {
    this[ol1O0]("drawnode", $)
};
lO100 = function ($) {
    $.tree = $.sender;
    this[ol1O0]("beforenodecheck", $)
};
o111 = function ($) {
    $.tree = $.sender;
    this[ol1O0]("beforenodeselect", $);
    if ($.cancel)this._nohide = true
};
Ooo00 = function ($) {
};
O1l11 = function ($) {
};
oOl01 = function ($) {
    return this.tree[looolO](this.tree[Oll1o](), $)
};
ollOo = function ($) {
    return this.tree.getNodesByValue($)
};
O10lo = function () {
    return this[O1000O]()[0]
};
l0Ol0 = function ($) {
    var _ = this.tree.getNodesByValue(this.value);
    if ($ === false)$ = "leaf";
    _ = this.tree._dataSource.doGetCheckedNodes(_, $);
    return _
};
ol0O1 = function () {
    return this.tree.getNodesByValue(this.value)
};
l10l0 = function ($) {
    return this.tree[lo10lo]($)
};
O0o01 = function ($) {
    return this.tree[l00oo]($)
};
o0OOO1 = function () {
    var _ = {cancel: false};
    this[ol1O0]("beforeshowpopup", _);
    this._firebeforeshowpopup = false;
    if (_.cancel == true)return;
    var $ = this.popup.el.style.height;
    lo1001[ollolO][ol1O01][o1O0l0](this);
    this.tree[ll10OO](this.value, false);
    if (this.expandOnPopup)this.tree[oO0lol](this.value);
    this._nohide = false
};
oOoo1 = function ($) {
    this.expandOnPopup = $
};
l0O0O = function () {
    return this.expandOnPopup
};
o0oOO = function ($) {
    this[OO0oo0]();
    this.tree.clearFilter();
    this[ol1O0]("hidepopup")
};
Ol00l = function ($) {
    return typeof $ == "object" ? $ : this.data[$]
};
lOl1l = function ($) {
    return this.data[o110ll]($)
};
o1l01 = function ($) {
    return this.data[$]
};
l0llOList = function ($, A, _) {
    this.tree[loOl00]($, A, _);
    this.data = this.tree[ll1oO1]();
    this[l1oo1O]()
};
O1Ol0 = function () {
    return this.tree[lo0111]()
};
l0llO = function ($) {
    this.tree[looOlo]($);
    this.data = this.tree.data;
    this[l1oo1O]()
};
lO0lO = function (_) {
    return eval("(" + _ + ")")
};
OoO0O = function ($) {
    if (typeof $ == "string")$ = this[O00oO0]($);
    if (!mini.isArray($))$ = [];
    this.tree[ol0l0]($);
    this.data = this.tree.data;
    this[l1oo1O]()
};
O11Ol = function () {
    return this.data
};
Ol0o0 = function () {
    var $ = this.tree[o1oOl]();
    this[ll10OO]($)
};
o0ooo = function ($) {
    this[oolOl]();
    this.tree[Oo1100]($);
    this.url = this.tree.url;
    this.data = this.tree.data;
    this[l1oo1O]()
};
llo0o = function () {
    return this.url
};
O1ol1 = function ($) {
    if (this.tree)this.tree[lOllO1]($);
    this.virtualScroll = $
};
ol0OO = function () {
    return this.virtualScroll
};
lo0O0 = function ($) {
    if (this.tree)this.tree.defaultRowHeight = $;
    this.defaultRowHeight = $
};
oOl1O = function () {
    return this.defaultRowHeight
};
l1loo = function ($) {
    this.pinyinField = $
};
loo0O = function () {
    return this.pinyinField
};
lOool = function ($) {
    if (this.tree)this.tree[ooO1ll]($);
    this[l1ol1O] = $
};
O0oo0 = function () {
    return this[l1ol1O]
};
Oo1O0 = function ($) {
    if (this.tree)this.tree[OoOOO]($);
    this.nodesField = $
};
l11ol = function () {
    return this.nodesField
};
O0o10 = function ($) {
    if (this.tree)this.tree[O0lO0O]($);
    this.dataField = $
};
OolOO = function () {
    return this.dataField
};
ll111 = function () {
    var $ = lo1001[ollolO][o1oOl][o1O0l0](this);
    if (this.valueFromSelect && $ && this[OO11]($).length == 0)return "";
    return $
};
Oo0oo = function ($) {
    var _ = this.tree.Oool0($);
    if (_[1] == "" && !this.valueFromSelect) {
        _[0] = $;
        _[1] = $
    }
    this.value = $;
    this.l0o0o0.value = $;
    this.text = this._textEl.value = _[1];
    this.o00o01()
};
O1l0o = function ($) {
    if (this[O0o1ol] != $) {
        this[O0o1ol] = $;
        this.tree[o001oo]($);
        this.tree[OOlool](!$);
        this.tree[Oo1110](!$)
    }
};
ol0O = function () {
    return this[O0o1ol]
};
l00lO = function (C) {
    if (this[O0o1ol])return;
    var A = this.tree[loo11O](), _ = this.tree.Oool0(A), B = _[0], $ = this[o1oOl]();
    this[ll10OO](B);
    if ($ != this[o1oOl]())this.OOoOO();
    if (this._nohide !== true) {
        this[oOl0oo]();
        this[O1loo]()
    }
    this._nohide = false;
    this[ol1O0]("nodeclick", {node: C.node})
};
oo1oO0 = function (A) {
    if (!this[O0o1ol])return;
    var _ = this.tree[o1oOl](), $ = this[o1oOl]();
    this[ll10OO](_);
    if ($ != this[o1oOl]())this.OOoOO();
    this[O1loo]()
};
O01OO = function (A) {
    var _ = {htmlEvent: A};
    this[ol1O0]("keydown", _);
    if (A.keyCode == 8 && (this[o0011o]() || this.allowInput == false))return false;
    if (A.keyCode == 9) {
        if (this[oOO1O1]())this[oOl0oo]();
        return
    }
    if (this[o0011o]())return;
    switch (A.keyCode) {
        case 27:
            if (this[oOO1O1]())A.stopPropagation();
            this[oOl0oo]();
            break;
        case 13:
            var $ = this;
            setTimeout(function () {
                $[ol1O0]("enter", _)
            }, 10);
            break;
        case 37:
            break;
        case 38:
            A.preventDefault();
            break;
        case 39:
            break;
        case 40:
            A.preventDefault();
            this[ol1O01]();
            break;
        default:
            if (this.allowInput == false); else {
                $ = this;
                setTimeout(function () {
                    $.looo11()
                }, 10)
            }
            break
    }
};
O00Oo = function () {
    if (!this.autoFilter)return;
    if (this[O0o1ol])return;
    var A = this.textField, _ = this.pinyinField, $ = this._textEl.value.toLowerCase();
    this.tree.filter(function (C) {
        var B = String(C[A] ? C[A] : "").toLowerCase(), D = String(C[_] ? C[_] : "").toLowerCase();
        if (B[o110ll]($) != -1 || D[o110ll]($) != -1)return true; else return false
    });
    this.tree.expandAll();
    this[ol1O01]()
};
OOOl1 = function ($) {
    this[lOO1o] = $;
    if (this.tree)this.tree[oOll0l]($)
};
oo00l = function () {
    return this[lOO1o]
};
o1ll0 = function ($) {
    this[l11ol0] = $;
    if (this.tree)this.tree[oO0O1]($)
};
lOoo1 = function () {
    return this[l11ol0]
};
oOOoO = function ($) {
    this[o0oO] = $;
    if (this.tree)this.tree[lllOO1]($)
};
ooOOl = function () {
    return this[o0oO]
};
l1oO0 = function ($) {
    if (this.tree)this.tree[Ol0010]($);
    this[O01oll] = $
};
OlO1o = function () {
    return this[O01oll]
};
oo0lo = function ($) {
    this[ol10Ol] = $;
    if (this.tree)this.tree[l1O1o]($)
};
l011l = function () {
    return this[ol10Ol]
};
l0l1l = function ($) {
    this[l1O01o] = $;
    if (this.tree)this.tree[lo1loO]($)
};
oO001 = function () {
    return this[l1O01o]
};
llOO1 = function ($) {
    this[lOOoo0] = $;
    if (this.tree)this.tree[O0Oo]($)
};
O1Ol1 = function () {
    return this[lOOoo0]
};
l1o11 = function ($) {
    this.showRadioButton = $;
    if (this.tree)this.tree[ool01]($)
};
l0l1 = function () {
    return this.showRadioButton
};
oooOl = function ($) {
    this.autoCheckParent = $;
    if (this.tree)this.tree[l1oOoo]($)
};
oOO1l = function () {
    return this.autoCheckParent
};
l0110 = function ($) {
    this.expandOnLoad = $;
    if (this.tree)this.tree[lO100O]($)
};
O0O1o = function () {
    return this.expandOnLoad
};
Oll1ol = function ($) {
    this.valueFromSelect = $
};
Oo10o = function () {
    return this.valueFromSelect
};
o1lo0 = function ($) {
    this.ajaxData = $;
    this.tree[oOl0O0]($)
};
o1O0oo = function ($) {
    this.ajaxType = $;
    this.tree[o001l1]($)
};
OOlol = function ($) {
    this.expandOnNodeClick = $;
    if (this.tree)this.tree[Ol00Oo]($)
};
ooOl0 = function () {
    return this.expandOnNodeClick
};
o1Olo = function ($) {
    this.autoFilter = $
};
l0lOO = function () {
    return this.autoFilter
};
l10OO = function (_) {
    var A = l1O1lO[ollolO][ol1oOl][o1O0l0](this, _);
    mini[Ol100O](_, A, ["url", "data", "textField", "pinyinField", "valueField", "nodesField", "parentField", "onbeforenodecheck", "onbeforenodeselect", "expandOnLoad", "onnodeclick", "onbeforeload", "onload", "onloaderror", "ondrawnode"]);
    mini[Olo01O](_, A, ["expandOnNodeClick", "multiSelect", "resultAsTree", "checkRecursive", "showTreeIcon", "showTreeLines", "showFolderCheckBox", "showRadioButton", "autoCheckParent", "valueFromSelect", "virtualScroll", "expandOnPopup", "autoFilter"]);
    mini[oOOl00](_, A, ["defaultRowHeight"]);
    if (A.expandOnLoad) {
        var $ = parseInt(A.expandOnLoad);
        if (mini.isNumber($))A.expandOnLoad = $; else A.expandOnLoad = A.expandOnLoad == "true" ? true : false
    }
    return A
};
Oo10O = function (A, D, C, B, $) {
    A = mini.get(A);
    D = mini.get(D);
    if (!A || !D || !C)return;
    var _ = {control: A, source: D, field: C, convert: $, mode: B};
    this._bindFields.push(_);
    D[Ol1oO1]("currentchanged", this.looO, this);
    A[Ol1oO1]("valuechanged", this.o011, this)
};
oOolol = function (B, F, D, A) {
    B = o0OO(B);
    F = mini.get(F);
    if (!B || !F)return;
    var B = new mini.Form(B), $ = B.getFields();
    for (var _ = 0, E = $.length; _ < E; _++) {
        var C = $[_];
        this[olO000](C, F, C[Ol0o1](), D, A)
    }
};
O0Ol0 = function (H) {
    if (this._doSetting)return;
    this._doSetting = true;
    this._currentRecord = H.record;
    var G = H.sender, _ = H.record;
    for (var $ = 0, F = this._bindFields.length; $ < F; $++) {
        var B = this._bindFields[$];
        if (B.source != G)continue;
        var C = B.control, D = B.field;
        if (C[ll10OO])if (_) {
            var A = mini._getMap(D, _);
            C[ll10OO](A)
        } else C[ll10OO]("");
        if (C[l0O0O0] && C.textName)if (_)C[l0O0O0](_[C.textName]); else C[l0O0O0]("")
    }
    var E = this;
    setTimeout(function () {
        E._doSetting = false
    }, 10)
};
ooOOO = function (H) {
    if (this._doSetting)return;
    this._doSetting = true;
    var D = H.sender, _ = D[o1oOl]();
    for (var $ = 0, G = this._bindFields.length; $ < G; $++) {
        var C = this._bindFields[$];
        if (C.control != D || C.mode === false)continue;
        var F = C.source, B = this._currentRecord;
        if (!B)continue;
        var A = {};
        A[C.field] = _;
        if (D[ooooO] && D.textName)A[D.textName] = D[ooooO]();
        F[loo01](B, A)
    }
    var E = this;
    setTimeout(function () {
        E._doSetting = false
    }, 10)
};
lO111InCheckOrder = function ($) {
    this.valueInCheckOrder = $
};
ol111InCheckOrder = function () {
    return this.valueInCheckOrder
};
lolo1o = function () {
    if (this._doLabelLayout)this[lolll]()
};
l0o1O = function (A) {
    if (typeof A == "string")return this;
    var $ = A.value;
    delete A.value;
    var B = A.url;
    delete A.url;
    var _ = A.data;
    delete A.data;
    Ol11ol[ollolO][OO1O1l][o1O0l0](this, A);
    if (!mini.isNull(_))this[ol0l0](_);
    if (!mini.isNull(B))this[Oo1100](B);
    if (!mini.isNull($))this[ll10OO]($);
    return this
};
O10OO = function () {
};
ll1O0 = function () {
    O0o0o0(function () {
        o1l0lo(this.el, "click", this.oO0o1l, this);
        o1l0lo(this.el, "dblclick", this.Oo0o00, this);
        o1l0lo(this.el, "mousedown", this.Ol0l, this);
        o1l0lo(this.el, "mouseup", this.oOlol1, this);
        o1l0lo(this.el, "mousemove", this.oll1l, this);
        o1l0lo(this.el, "mouseover", this.ol0010, this);
        o1l0lo(this.el, "mouseout", this.O11olO, this);
        o1l0lo(this.el, "keydown", this.Oo111, this);
        o1l0lo(this.el, "keyup", this.OO1l1, this);
        o1l0lo(this.el, "contextmenu", this.l111lO, this)
    }, this)
};
Ol101 = function ($) {
    Ol11ol[ollolO][l0lOl][o1O0l0](this, $)
};
OloO1 = function ($) {
    this.name = $;
    if (this.l0o0o0)mini.setAttr(this.l0o0o0, "name", this.name)
};
l1oloByEvent = function (_) {
    var A = ol000(_.target, this.oooll1);
    if (A) {
        var $ = parseInt(mini.getAttr(A, "index"));
        return this.data[$]
    }
};
Ol1l1Cls = function (_, A) {
    var $ = this[llolO](_);
    if ($)l1Oo($, A)
};
O01lOCls = function (_, A) {
    var $ = this[llolO](_);
    if ($)o11o($, A)
};
l1oloEl = function (_) {
    _ = this[o11l](_);
    var $ = this.data[o110ll](_), A = this.ll001($);
    return document.getElementById(A)
};
ooO10 = function (_, $) {
    _ = this[o11l](_);
    if (!_)return;
    var A = this[llolO](_);
    if ($ && A)this[lOoolO](_);
    if (this.O1OO00Item == _) {
        if (A)l1Oo(A, this.o10OO);
        return
    }
    this.o1110();
    this.O1OO00Item = _;
    if (A)l1Oo(A, this.o10OO)
};
oOloO = function () {
    if (!this.O1OO00Item)return;
    var $ = this[llolO](this.O1OO00Item);
    if ($)o11o($, this.o10OO);
    this.O1OO00Item = null
};
oll0o = function () {
    var $ = this.O1OO00Item;
    return this[o110ll]($) == -1 ? null : $
};
oO10 = function () {
    return this.data[o110ll](this.O1OO00Item)
};
o01O1 = function (_) {
    try {
        var $ = this[llolO](_), A = this.O0O1 || this.el;
        mini[lOoolO]($, A, false)
    } catch (B) {
    }
};
l1olo = function ($) {
    if (typeof $ == "object")return $;
    if (typeof $ == "number")return this.data[$];
    return this[OO11]($)[0]
};
o0l0o = function () {
    return this.data.length
};
llOlo = function ($) {
    return this.data[o110ll]($)
};
l01o1 = function ($) {
    return this.data[$]
};
lll1o = function ($, _) {
    $ = this[o11l]($);
    if (!$)return;
    mini.copyTo($, _);
    this[l0loO0]()
};
llO01 = function ($) {
    if (typeof $ == "string")this[Oo1100]($); else this[ol0l0]($)
};
l0Oll = function ($) {
    this[ol0l0]($)
};
o11oo = function (data) {
    if (typeof data == "string")data = eval(data);
    if (!mini.isArray(data))data = [];
    this.data = data;
    this[l0loO0]();
    if (this.value != "") {
        this[OOo10]();
        var records = this[OO11](this.value);
        this[oo1o](records)
    }
};
Olo0o = function () {
    return this.data.clone()
};
oloOl = function ($) {
    this.url = $;
    this[OOl0Ol]({})
};
oOO10 = function () {
    return this.url
};
lOOl1 = function (params) {
    try {
        var url = eval(this.url);
        if (url != undefined)this.url = url
    } catch (e) {
    }
    var url = this.url, ajaxMethod = Ol11ol.ajaxType;
    if (url)if (url[o110ll](".txt") != -1 || url[o110ll](".json") != -1)ajaxMethod = "get";
    var obj = oOll1(this.ajaxData, this);
    mini.copyTo(params, obj);
    var e = {
        url: this.url,
        async: false,
        type: this.ajaxType ? this.ajaxType : ajaxMethod,
        data: params,
        params: params,
        cache: false,
        cancel: false
    };
    this[ol1O0]("beforeload", e);
    if (e.data != e.params && e.params != params)e.data = e.params;
    if (e.cancel == true)return;
    var sf = me = this, url = e.url;
    mini.copyTo(e, {
        success: function (A, D, _) {
            delete e.params;
            var $ = {text: A, result: null, sender: me, options: e, xhr: _}, B = null;
            try {
                mini_doload($);
                B = $.result;
                if (!B)B = mini.decode(A)
            } catch (C) {
                if (mini_debugger == true)alert(url + "\njson is error.")
            }
            if (mini.isArray(B))B = {data: B};
            if (sf.dataField)B.data = mini._getMap(sf.dataField, B);
            if (!B.data)B.data = [];
            var C = {data: B.data, cancel: false, result: B};
            sf[ol1O0]("preload", C);
            if (C.cancel == true)return;
            sf[ol0l0](C.data);
            delete C.cancel;
            sf[ol1O0]("load", C);
            setTimeout(function () {
                sf[l0llOO]()
            }, 100)
        }, error: function ($, A, _) {
            var B = {xhr: $, text: $.responseText, textStatus: A, errorMsg: $.responseText, errorCode: $.status};
            if (mini_debugger == true)alert(url + "\n" + B.errorCode + "\n" + B.errorMsg);
            sf[ol1O0]("loaderror", B)
        }
    });
    this.ol101 = mini.ajax(e)
};
lO111 = function ($) {
    if (mini.isNull($))$ = "";
    if (this.value !== $) {
        this[OOo10]();
        this.value = $;
        if (this.l0o0o0)this.l0o0o0.value = $;
        var _ = this[OO11](this.value);
        this[oo1o](_);
        this[O0lOo1](_[0])
    }
};
ol111 = function () {
    return this.value
};
oO1l = function () {
    return this.value
};
O110 = function ($) {
    this[O01oll] = $
};
lo1OlO = function () {
    return this[O01oll]
};
llloO = function ($) {
    this[l1ol1O] = $
};
loll1 = function () {
    return this[l1ol1O]
};
llOOO = function ($) {
    return String(mini._getMap(this.valueField, $))
};
lOo1O = function ($) {
    var _ = mini._getMap(this.textField, $);
    return mini.isNull(_) ? "" : String(_)
};
o0Ooo = function (A) {
    if (mini.isNull(A))A = [];
    if (!mini.isArray(A))A = this[OO11](A);
    if (this.valueInCheckOrder) {
        var C = this[ll1oO1]();
        mini.sort(A, function (_, B) {
            var $ = C[o110ll](_), A = C[o110ll](B);
            if ($ > A)return 1;
            if ($ < A)return -1;
            return 0
        })
    }
    var B = [], D = [];
    for (var _ = 0, E = A.length; _ < E; _++) {
        var $ = A[_];
        if ($) {
            B.push(this[OO01O0]($));
            D.push(this[OO101]($))
        }
    }
    return [B.join(this.delimiter), D.join(this.delimiter)]
};
lOOoo = function (_) {
    if (mini.isNull(_) || _ === "")return [];
    if (typeof _ == "function") {
        var E = _, H = [], I = this.data;
        for (var J = 0, A = I.length; J < A; J++) {
            var $ = I[J];
            if (E($, J) === true)H.push($)
        }
        return H
    }
    var C = String(_).split(this.delimiter), I = this.data, K = {};
    for (J = 0, A = I.length; J < A; J++) {
        var $ = I[J], F = mini._getMap(this.valueField, $);
        K[F] = $
    }
    var B = [];
    for (var G = 0, D = C.length; G < D; G++) {
        F = C[G], $ = K[F];
        if ($)B.push($)
    }
    return B
};
o0010 = function () {
    var $ = this[ll1oO1]();
    this[l01O11]($)
};
Ol1l1s = function (_, $) {
    if (!mini.isArray(_))return;
    if (mini.isNull($))$ = this.data.length;
    this.data.insertRange($, _);
    this[l0loO0]()
};
Ol1l1 = function (_, $) {
    if (!_)return;
    if (this.data[o110ll](_) != -1)return;
    if (mini.isNull($))$ = this.data.length;
    this.data.insert($, _);
    this[l0loO0]()
};
O01lOs = function ($) {
    if (!mini.isArray($))return;
    this.data.removeRange($);
    this.ool1();
    this[l0loO0]()
};
O01lO = function (_) {
    var $ = this.data[o110ll](_);
    if ($ != -1) {
        this.data.removeAt($);
        this.ool1();
        this[l0loO0]()
    }
};
Oo001 = function (_, $) {
    if (!_ || !mini.isNumber($))return;
    if ($ < 0)$ = 0;
    if ($ > this.data.length)$ = this.data.length;
    this.data.remove(_);
    this.data.insert($, _);
    this[l0loO0]()
};
l001l = function () {
    for (var _ = this.O1l1oo.length - 1; _ >= 0; _--) {
        var $ = this.O1l1oo[_];
        if (this.data[o110ll]($) == -1)this.O1l1oo.removeAt(_)
    }
    var A = this.Oool0(this.O1l1oo);
    this.value = A[0];
    if (this.l0o0o0)this.l0o0o0.value = this.value
};
OOo1o = function ($) {
    this[O0o1ol] = $
};
lO0Oo = function () {
    return this[O0o1ol]
};
l1ol1 = function ($) {
    if (!$)return false;
    return this.O1l1oo[o110ll]($) != -1
};
oO1os = function () {
    var $ = this.O1l1oo.clone(), _ = this;
    if (this.valueInCheckOrder)mini.sort($, function (A, C) {
        var $ = _[o110ll](A), B = _[o110ll](C);
        if ($ > B)return 1;
        if ($ < B)return -1;
        return 0
    });
    return $
};
olOl01 = function ($) {
    if ($) {
        this.l0l01 = $;
        this[lOol1O]($)
    }
};
oO1o = function () {
    return this.l0l01
};
O0OO0 = function ($) {
    $ = this[o11l]($);
    if (!$)return;
    if (this[Olo1o1]($))return;
    this[oo1o]([$])
};
o0o0l = function ($) {
    $ = this[o11l]($);
    if (!$)return;
    if (!this[Olo1o1]($))return;
    this[l0oO0]([$])
};
l0lll = function () {
    var $ = this.data.clone();
    this[oo1o]($)
};
OoOoo = function () {
    this[l0oO0](this.O1l1oo)
};
OOOll = function () {
    this[OOo10]()
};
OlOoO = function (A) {
    if (!A || A.length == 0)return;
    A = A.clone();
    if (this[O0o1ol] == false && A.length > 1)A.length = 1;
    for (var _ = 0, C = A.length; _ < C; _++) {
        var $ = A[_];
        if (!this[Olo1o1]($))this.O1l1oo.push($)
    }
    var B = this;
    B.OOo00()
};
ol0O0 = function (A) {
    if (!A || A.length == 0)return;
    A = A.clone();
    for (var _ = A.length - 1; _ >= 0; _--) {
        var $ = A[_];
        if (this[Olo1o1]($))this.O1l1oo.remove($)
    }
    var B = this;
    B.OOo00()
};
ooll1 = function () {
    var C = this.Oool0(this.O1l1oo);
    this.value = C[0];
    if (this.l0o0o0)this.l0o0o0.value = this.value;
    for (var A = 0, D = this.data.length; A < D; A++) {
        var _ = this.data[A], F = this[Olo1o1](_);
        if (F)this[OO10OO](_, this._oolol0); else this[l00l](_, this._oolol0);
        var $ = this.data[o110ll](_), E = this.l1olO1($), B = o0OO(E, this.el);
        if (B)B.checked = !!F
    }
};
OO1o0 = function (_, B) {
    var $ = this.Oool0(this.O1l1oo);
    this.value = $[0];
    if (this.l0o0o0)this.l0o0o0.value = this.value;
    var A = {selecteds: this[l0OoO0](), selected: this[o1lo1l](), value: this[o1oOl]()};
    this[ol1O0]("SelectionChanged", A)
};
lO0o0 = function ($) {
    return this.uid + "$ck$" + $
};
ol10O = function ($) {
    return this.uid + "$" + $
};
oOO01 = function ($) {
    this.o1ol1l($, "Click")
};
o11O1 = function ($) {
    this.o1ol1l($, "Dblclick")
};
oOlo1 = function ($) {
    this.o1ol1l($, "MouseDown")
};
ll11l = function ($) {
    this.o1ol1l($, "MouseUp")
};
o1l1l = function ($) {
    this.o1ol1l($, "MouseMove")
};
OOo1O = function ($) {
    this.o1ol1l($, "MouseOver")
};
OlO0O = function ($) {
    this.o1ol1l($, "MouseOut")
};
oool1 = function ($) {
    this.o1ol1l($, "KeyDown")
};
oO101 = function ($) {
    this.o1ol1l($, "KeyUp")
};
OO0lO = function ($) {
    this.o1ol1l($, "ContextMenu")
};
O001l = function (C, A) {
    if (!this.enabled)return;
    var $ = this.llll1l(C);
    if (!$)return;
    var B = this["_OnItem" + A];
    if (B)B[o1O0l0](this, $, C); else {
        var _ = {item: $, htmlEvent: C};
        this[ol1O0]("item" + A, _)
    }
};
lO1Ol = function ($, B) {
    if (this[o0011o]() || this.enabled == false || $.enabled === false) {
        B.preventDefault();
        return
    }
    var _ = this[o1oOl](), A = {item: $, htmlEvent: B, cancel: false};
    this[ol1O0]("beforeselect", A);
    if (A.cancel == false) {
        if (this[O0o1ol]) {
            if (this[Olo1o1]($)) {
                this[O0lo11]($);
                if (this.l0l01 == $)this.l0l01 = null
            } else {
                this[lOol1O]($);
                this.l0l01 = $
            }
            if ($.__NullItem) {
                this[OOo10]();
                this.l0l01 = null
            }
            this[o0O00l]()
        } else if (!this[Olo1o1]($)) {
            this[OOo10]();
            this[lOol1O]($);
            this.l0l01 = $;
            this[o0O00l]()
        }
        if (_ != this[o1oOl]())this.OOoOO()
    }
    var B = {item: $, htmlEvent: B};
    this[ol1O0]("itemclick", B)
};
oOO11 = function ($, _) {
    if (!this.enabled)return;
    if (this.lo10)this.o1110();
    var _ = {item: $, htmlEvent: _};
    this[ol1O0]("itemmouseout", _)
};
l1O00 = function ($, _) {
    if (!this.enabled || $.enabled === false)return;
    this.lOO1O0($);
    var _ = {item: $, htmlEvent: _};
    this[ol1O0]("itemmousemove", _)
};
o011O = function (_, $) {
    this[Ol1oO1]("itemclick", _, $)
};
o1010 = function (_, $) {
    this[Ol1oO1]("itemmousedown", _, $)
};
oOOO1 = function (_, $) {
    this[Ol1oO1]("beforeload", _, $)
};
ol001 = function (_, $) {
    this[Ol1oO1]("load", _, $)
};
oO0Oo = function (_, $) {
    this[Ol1oO1]("loaderror", _, $)
};
OlO1O = function (_, $) {
    this[Ol1oO1]("preload", _, $)
};
oO1ll = function (C) {
    var G = Ol11ol[ollolO][ol1oOl][o1O0l0](this, C);
    mini[Ol100O](C, G, ["url", "data", "value", "textField", "valueField", "onitemclick", "onitemmousemove", "onselectionchanged", "onitemdblclick", "onbeforeload", "onload", "onloaderror", "ondataload", "onbeforeselect"]);
    mini[Olo01O](C, G, ["multiSelect", "valueInCheckOrder"]);
    var E = G[O01oll] || this[O01oll], B = G[l1ol1O] || this[l1ol1O];
    if (C.nodeName.toLowerCase() == "select") {
        var D = [];
        for (var A = 0, F = C.length; A < F; A++) {
            var _ = C.options[A], $ = {};
            $[B] = _.text;
            $[E] = _.value;
            D.push($)
        }
        if (D.length > 0)G.data = D
    }
    return G
};
Ollol = function (_) {
    if (typeof _ == "string")return this;
    var A = _.url;
    delete _.url;
    var $ = _.activeIndex;
    delete _.activeIndex;
    Ollo00[ollolO][OO1O1l][o1O0l0](this, _);
    if (A)this[Oo1100](A);
    if (mini.isNumber($))this[ol1Oo]($);
    return this
};
OlOo10 = function ($) {
    this[lOlll0]($);
    Ollo00[ollolO][l0lOl][o1O0l0](this, $)
};
oOll0 = function (B) {
    if (this.olll0O) {
        var _ = this.olll0O.clone();
        for (var $ = 0, C = _.length; $ < C; $++) {
            var A = _[$];
            A[l0lOl](B)
        }
        this.olll0O.length = 0
    }
};
l1Oo1 = function (_) {
    for (var A = 0, B = _.length; A < B; A++) {
        var $ = _[A];
        $.text = $[this.textField];
        $.url = $[this.urlField];
        $.iconCls = $[this.iconField]
    }
};
o010l = function () {
    var _ = [];
    try {
        _ = mini._getResult(this.url, null, null, null, null, this.dataField)
    } catch (A) {
        if (mini_debugger == true)alert("outlooktree json is error.")
    }
    if (this.dataField && !mini.isArray(_))_ = mini._getMap(this.dataField, _);
    if (!_)_ = [];
    if (this[l11ol0] == false)_ = mini.arrayToTree(_, this.nodesField, this.idField, this[o0oO]);
    var $ = mini[lol11](_, this.nodesField, this.idField, this[o0oO]);
    this.OolOo1Fields($);
    this[lO1l10](_);
    this[ol1O0]("load")
};
o1oll0List = function ($, B, _) {
    B = B || this[O00o0];
    _ = _ || this[o0oO];
    this.OolOo1Fields($);
    var A = mini.arrayToTree($, this.nodesField, B, _);
    this[looOlo](A)
};
o1oll0 = function (_) {
    if (typeof _ == "string")this[Oo1100](_); else {
        var $ = mini[lol11](_, this.itemsField, this.idField, this[o0oO]);
        this.OolOo1Fields($);
        this[lO1l10](_)
    }
};
O0oO1 = function ($) {
    this[looOlo]($)
};
O1o01 = function () {
    return this.data
};
O0O10 = function ($) {
    this.url = $;
    this[OOl0Ol]()
};
lo00 = function () {
    return this.url
};
ooO11 = function ($) {
    this[l1ol1O] = $
};
O10oO = function () {
    return this[l1ol1O]
};
lll10 = function ($) {
    this.iconField = $
};
l10Ol = function () {
    return this.iconField
};
ooll0 = function ($) {
    this[Ol11o] = $
};
O0o1l = function () {
    return this[Ol11o]
};
O1oo1 = function ($) {
    this[l11ol0] = $
};
O10ol = function () {
    return this[l11ol0]
};
oo0Ol = function ($) {
    this.nodesField = $
};
OO0OlsField = function () {
    return this.nodesField
};
o0o11 = function ($) {
    this[O00o0] = $
};
lo00o = function () {
    return this[O00o0]
};
l0Oo = function ($) {
    this[o0oO] = $
};
lOl0o = function () {
    return this[o0oO]
};
Oo01l = function () {
    return this.l0l01
};
Oo10l = function (_) {
    _ = this[Oll0l0](_);
    if (!_)return false;
    var $ = this[Ol110o](_);
    if (!$)return false;
    return $[l1OoOo](_)
};
O0O0l = function (_) {
    _ = this[Oll0l0](_);
    if (!_)return;
    var $ = this[Ol110o](_);
    $[O00O10](_)
};
O11ol = function (_) {
    _ = this[Oll0l0](_);
    if (!_)return;
    var $ = this[Ol110o](_);
    $[oO0lol](_);
    this[o00O00]($._ownerGroup)
};
oo1Oo = function (_, A) {
    var _ = this[Oll0l0](_);
    if (!_)return;
    var $ = this[Ol110o](_);
    $[O11Oll](_, A)
};
Ol1oo = function (_, A) {
    var _ = this[Oll0l0](_);
    if (!_)return;
    var $ = this[Ol110o](_);
    $[O010OO](_, A)
};
lOl1o = function (E, B) {
    var D = [];
    B = B || this;
    for (var $ = 0, C = this.olll0O.length; $ < C; $++) {
        var A = this.olll0O[$], _ = A[looolO](E, B);
        D.addRange(_)
    }
    return D
};
OO0Ol = function (A) {
    for (var $ = 0, C = this.olll0O.length; $ < C; $++) {
        var _ = this.olll0O[$], B = _[Oll0l0](A);
        if (B)return B
    }
    return null
};
loO00 = function () {
    var $ = [];
    for (var _ = 0, C = this.olll0O.length; _ < C; _++) {
        var A = this.olll0O[_], B = A[lo0111]();
        $.addRange(B)
    }
    return $
};
lo1l0 = function (A) {
    if (!A)return;
    for (var $ = 0, B = this.olll0O.length; $ < B; $++) {
        var _ = this.olll0O[$];
        if (_.getby_id(A._id))return _
    }
};
O1o0O0 = function ($) {
    this.expandOnLoad = $
};
lO00l = function () {
    return this.expandOnLoad
};
olooO = function ($) {
    this.showArrow = $
};
l1o0o = function () {
    return this.showArrow
};
ol00l = function ($) {
    this[ol10Ol] = $
};
oO1lll = function ($) {
    return this[ol10Ol]
};
O0ooo = function ($) {
    this.expandOnNodeClick = $
};
Oo0ll = function () {
    return this.expandOnNodeClick
};
l1o1O = function ($) {
    this.expandNodeOnLoad = $
};
Olol1 = function () {
    return this.expandNodeOnLoad
};
o0o0o = function (_) {
    _.tree = _.sender;
    _.sender = this;
    var $ = "node" + _.type;
    if (_.type[o110ll]("before") == 0)$ = "beforenode" + _.type.replace("before", "");
    this[ol1O0]($, _)
};
o1Oll = function (_) {
    var A = Ollo00[ollolO][ol1oOl][o1O0l0](this, _);
    A.text = _.innerHTML;
    mini[Ol100O](_, A, ["url", "textField", "urlField", "idField", "parentField", "nodesField", "iconField", "onnodeclick", "onnodeselect", "onnodemousedown", "ondrawnode", "expandOnLoad", "imgPath", "onbeforenodeexpand", "onnodeexpand", "onbeforenodecollapse", "onnodecollapse", "onload", "onbeforenodeselect"]);
    mini[Olo01O](_, A, ["resultAsTree", "showArrow", "showTreeIcon", "expandOnNodeClick", "expandNodeOnLoad", "showTreeLines"]);
    if (A.expandOnLoad) {
        var $ = parseInt(A.expandOnLoad);
        if (mini.isNumber($))A.expandOnLoad = $; else A.expandOnLoad = A.expandOnLoad == "true" ? true : false
    }
    return A
};
l0Oo1 = function ($) {
    this.imgPath = $
};
Olo11 = function () {
    return this.imgPath
};
oOo01 = function (E) {
    this[lOlll0]();
    var A = this;
    if (!mini.isArray(E))E = [];
    this.data = E;
    var C = [];
    for (var _ = 0, F = this.data.length; _ < F; _++) {
        var $ = this.data[_], B = {};
        B.title = $.text;
        B.iconCls = $.iconCls;
        C.push(B);
        B._children = $[this.nodesField]
    }
    this[l1001l](C);
    this[ol1Oo](this.activeIndex);
    this.olll0O = [];
    for (_ = 0, F = this.groups.length; _ < F; _++) {
        var B = this.groups[_], D = this[oOOl1O](B), E = new lol101();
        E[OO1O1l]({
            showTreeLines: this.showTreeLines,
            expandOnNodeClick: this.expandOnNodeClick,
            showTreeIcon: this.showTreeIcon,
            showArrow: this.showArrow,
            imgPath: this.imgPath,
            idField: this.idField,
            parentField: this.parentField,
            textField: this.textField,
            expandOnLoad: this.expandNodeOnLoad,
            style: "width:100%;height:auto;border:0;background:none",
            data: B._children,
            onbeforeload: function ($) {
                $.url = A.url
            }
        });
        E[O1OO10](D);
        E[Ol1oO1]("nodeclick", this.l0lool, this);
        E[Ol1oO1]("nodeselect", this.llOo1O, this);
        E[Ol1oO1]("nodemousedown", this.__OnNodeMouseDown, this);
        E[Ol1oO1]("drawnode", this._ooOl0o, this);
        E[Ol1oO1]("beforeexpand", this._handlerTree, this);
        E[Ol1oO1]("beforecollapse", this._handlerTree, this);
        E[Ol1oO1]("expand", this._handlerTree, this);
        E[Ol1oO1]("collapse", this._handlerTree, this);
        E[Ol1oO1]("beforeselect", this._handlerTree, this);
        this.olll0O.push(E);
        delete B._children;
        E._ownerGroup = B
    }
};
lll01 = function (_) {
    var $ = {node: _.node, isLeaf: _.sender.isLeaf(_.node), htmlEvent: _.htmlEvent};
    this[ol1O0]("nodemousedown", $)
};
oolo1 = function (_) {
    var $ = {node: _.node, isLeaf: _.sender.isLeaf(_.node), htmlEvent: _.htmlEvent};
    this[ol1O0]("nodeclick", $)
};
ol0o1 = function (C) {
    if (!C.node)return;
    for (var $ = 0, B = this.olll0O.length; $ < B; $++) {
        var A = this.olll0O[$];
        if (A != C.sender)A[O00O10](null)
    }
    var _ = {node: C.node, isLeaf: C.sender.isLeaf(C.node), htmlEvent: C.htmlEvent};
    this.l0l01 = C.node;
    this[ol1O0]("nodeselect", _)
};
oolOo = function ($) {
    this[ol1O0]("drawnode", $)
};
Ool1o = function () {
    var $ = "onmouseover=\"l1Oo(this,'" + this.OOlO + "');\" " + "onmouseout=\"o11o(this,'" + this.OOlO + "');\"";
    return "<span class=\"mini-buttonedit-button\" " + $ + "><span class=\"mini-buttonedit-up\"><span></span></span><span class=\"mini-buttonedit-down\"><span></span></span></span>"
};
lo0OO = function () {
    Oo0Oo0[ollolO][lOo101][o1O0l0](this);
    O0o0o0(function () {
        this[Ol1oO1]("buttonmousedown", this.O01o01, this);
        Ol1O(this.el, "mousewheel", this.lO1loO, this);
        Ol1O(this._textEl, "keydown", this.Oo111, this)
    }, this)
};
ooolo = function ($) {
    if (typeof $ != "string")return;
    var _ = ["H:mm:ss", "HH:mm:ss", "H:mm", "HH:mm", "H", "HH", "mm:ss"];
    if (this.format != $) {
        this.format = $;
        this.text = this._textEl.value = this[OO0l0O]()
    }
};
oOOoo = function () {
    return this.format
};
lol1o = function ($) {
    $ = mini.parseTime($, this.format);
    if (!$)$ = null;
    if (mini.isDate($))$ = new Date($[OOo0o1]());
    this.value = $;
    this.text = this._textEl.value = this[OO0l0O]();
    this.l0o0o0.value = this[lOo01l]()
};
ol0oo = function () {
    return this.value == null ? null : new Date(this.value[OOo0o1]())
};
l10oO = function () {
    if (!this.value)return "";
    return mini.formatDate(this.value, this.format)
};
l1001 = function () {
    if (!this.value)return "";
    return mini.formatDate(this.value, this.format)
};
O10o1 = function (D, C) {
    var $ = this[o1oOl]();
    if ($)switch (C) {
        case"hours":
            var A = $.getHours() + D;
            if (A > 23)A = 23;
            if (A < 0)A = 0;
            $.setHours(A);
            break;
        case"minutes":
            var B = $.getMinutes() + D;
            if (B > 59)B = 59;
            if (B < 0)B = 0;
            $.setMinutes(B);
            break;
        case"seconds":
            var _ = $.getSeconds() + D;
            if (_ > 59)_ = 59;
            if (_ < 0)_ = 0;
            $.setSeconds(_);
            break
    } else $ = "00:00:00";
    this[ll10OO]($)
};
OO10l = function (D, B, C) {
    this.o0olo();
    this.O0ooO0(D, this.o1O0l);
    var A = this, _ = C, $ = new Date();
    this.O1lo01 = setInterval(function () {
        A.O0ooO0(D, A.o1O0l);
        C--;
        if (C == 0 && B > 50)A.O0loo(D, B - 100, _ + 3);
        var E = new Date();
        if (E - $ > 500)A.o0olo();
        $ = E
    }, B);
    Ol1O(document, "mouseup", this.lo001, this)
};
o0oo0 = function () {
    clearInterval(this.O1lo01);
    this.O1lo01 = null
};
l11Oo = function ($) {
    this._DownValue = this[lOo01l]();
    this.o1O0l = "hours";
    if ($.spinType == "up")this.O0loo(1, 230, 2); else this.O0loo(-1, 230, 2)
};
O001o = function ($) {
    this.o0olo();
    lol0Oo(document, "mouseup", this.lo001, this);
    if (this._DownValue != this[lOo01l]())this.OOoOO()
};
lo0O1 = function (_) {
    var $ = this[lOo01l]();
    this[ll10OO](this._textEl.value);
    if ($ != this[lOo01l]())this.OOoOO()
};
l0OOl = function ($) {
    var _ = Oo0Oo0[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["format"]);
    return _
};
l0o0l = function (_) {
    if (typeof _ == "string")return this;
    var A = _.url;
    delete _.url;
    var $ = _.activeIndex;
    delete _.activeIndex;
    if (mini.isNumber($))this.activeIndex = $;
    o1OlOl[ollolO][OO1O1l][o1O0l0](this, _);
    if (A)this[Oo1100](A);
    if (mini.isNumber($))this[ol1Oo]($);
    return this
};
o10ol = function ($) {
    this[lOlll0]();
    o1OlOl[ollolO][l0lOl][o1O0l0](this, $)
};
OoO11 = function () {
    if (this.ol11O0) {
        var _ = this.ol11O0.clone();
        for (var $ = 0, B = _.length; $ < B; $++) {
            var A = _[$];
            A[l0lOl]()
        }
        this.ol11O0.length = 0
    }
};
lOolo = function (_) {
    for (var A = 0, B = _.length; A < B; A++) {
        var $ = _[A];
        $.text = $[this.textField];
        $.url = $[this.urlField];
        $.iconCls = $[this.iconField]
    }
};
o01oO = function () {
    var B = {cancel: false};
    this[ol1O0]("beforeload", B);
    if (B.cancel === true)return;
    var _ = [];
    try {
        _ = mini._getResult(this.url, null, null, null, null, this.dataField)
    } catch (A) {
        if (mini_debugger == true)alert("outlooktree json is error.")
    }
    if (this.dataField && !mini.isArray(_))_ = mini._getMap(this.dataField, _);
    if (!_)_ = [];
    if (this[l11ol0] == false)_ = mini.arrayToTree(_, this.itemsField, this.idField, this[o0oO]);
    var $ = mini[lol11](_, this.itemsField, this.idField, this[o0oO]);
    this.OolOo1Fields($);
    this[l1O0lo](_);
    this[ol1O0]("load")
};
ll0ooList = function ($, B, _) {
    B = B || this[O00o0];
    _ = _ || this[o0oO];
    this.OolOo1Fields($);
    var A = mini.arrayToTree($, this.nodesField, B, _);
    this[looOlo](A)
};
ll0oo = function (_) {
    if (typeof _ == "string")this[Oo1100](_); else {
        var $ = mini[lol11](_, this.itemsField, this.idField, this[o0oO]);
        this.OolOo1Fields($);
        this[l1O0lo](_)
    }
};
o11ol = function ($) {
    this[looOlo]($)
};
lo1Oo = function ($) {
    this.url = $;
    this[OOl0Ol]()
};
ol1ll = function () {
    return this.url
};
o01Oo = function ($) {
    this[l1ol1O] = $
};
olOo1 = function () {
    return this[l1ol1O]
};
oOOlo1 = function ($) {
    this.iconField = $
};
o11o0 = function () {
    return this.iconField
};
ol0l1 = function ($) {
    this[Ol11o] = $
};
o101O = function () {
    return this[Ol11o]
};
oloo1 = function ($) {
    this[l11ol0] = $
};
l0OO1 = function () {
    return this[l11ol0]
};
OlOlO = function ($) {
    this.nodesField = $
};
ll0l0sField = function () {
    return this.nodesField
};
ll100 = function ($) {
    this[O00o0] = $
};
OoOl0 = function () {
    return this[O00o0]
};
ollO0 = function ($) {
    this[o0oO] = $
};
O1110 = function () {
    return this[o0oO]
};
loOo0 = function () {
    return this.l0l01
};
O0lOOl = function ($) {
    $ = this[Oll0l0]($);
    if (!$) {
        if (this.l0l01) {
            var _ = this[l10O1o](this.l0l01);
            if (_)_[OlO0o1](null)
        }
        return
    }
    _ = this[l10O1o]($);
    if (!_)return;
    this[o00O00](_._ownerGroup);
    setTimeout(function () {
        try {
            _[OlO0o1]($)
        } catch (A) {
        }
    }, 100)
};
o1l0O1 = function (H, D) {
    var G = [];
    D = D || this;
    for (var _ = 0, F = this.ol11O0.length; _ < F; _++) {
        var B = this.ol11O0[_][lo00l1](), C = [];
        for (var E = 0, A = B.length; E < A; E++) {
            var $ = B[E];
            if (H && H[o1O0l0](D, $) === true)C.push($)
        }
        G.addRange(C)
    }
    return G
};
ll0l0 = function (_) {
    for (var $ = 0, B = this.ol11O0.length; $ < B; $++) {
        var C = this.ol11O0[$], A = C[o11l](_);
        if (A)return A
    }
    return null
};
oOo11 = function () {
    var $ = [];
    for (var _ = 0, B = this.ol11O0.length; _ < B; _++) {
        var C = this.ol11O0[_], A = C[lo00l1]();
        $.addRange(A)
    }
    return $
};
Ooo10 = function (_) {
    if (!_)return;
    for (var $ = 0, B = this.ol11O0.length; $ < B; $++) {
        var C = this.ol11O0[$], A = C[o11l](_);
        if (A)return C
    }
};
O0111 = function ($) {
    var _ = o1OlOl[ollolO][ol1oOl][o1O0l0](this, $);
    _.text = $.innerHTML;
    mini[Ol100O]($, _, ["url", "textField", "urlField", "idField", "parentField", "itemsField", "iconField", "onitemclick", "onitemselect", "ondrawnode", "imgPath", "onload", "onbeforeload"]);
    mini[Olo01O]($, _, ["resultAsTree", "expandOnLoad"]);
    return _
};
lO1OO = function ($) {
    this.imgPath = $
};
OO00O = function () {
    return this.imgPath
};
lo0o0 = function (D) {
    this[lOlll0]();
    if (!mini.isArray(D))D = [];
    this.data = D;
    var B = [];
    for (var _ = 0, E = this.data.length; _ < E; _++) {
        var $ = this.data[_], A = {};
        A.title = $.text;
        A.iconCls = $.iconCls;
        B.push(A);
        A.img = $.img;
        A._children = $[this.itemsField]
    }
    this[l1001l](B);
    if (!this.expandOnLoad)this[ol1Oo](this.activeIndex);
    this.ol11O0 = [];
    for (_ = 0, E = this.groups.length; _ < E; _++) {
        var A = this.groups[_], C = this[oOOl1O](A), F = new lOoO1O();
        F._ownerGroup = A;
        F[OO1O1l]({
            expanded: false,
            imgPath: this.imgPath,
            showNavArrow: false,
            style: "width:100%;height:100%;border:0;",
            borderStyle: "border:0",
            allowSelectItem: true,
            items: A._children
        });
        F[O1OO10](C);
        F[Ol1oO1]("itemclick", this.O0o1o, this);
        F[Ol1oO1]("itemselect", this.olo1l1, this);
        this[OO1l10](F[lo00l1]());
        this.ol11O0.push(F);
        delete A._children
    }
};
o10lo = function (A) {
    if (!A)return;
    for (var _ = 0, B = A.length; _ < B; _++) {
        var $ = A[_], C = {node: $, img: $.img, nodeHtml: ""};
        this[ol1O0]("drawnode", C);
        if (C.img != $.img && $[ooOO00])$[ooOO00](C.img);
        if (C.nodeHtml != "")$[l0O0O0](C.nodeHtml)
    }
};
l0011 = function (_) {
    var $ = {item: _.item, htmlEvent: _.htmlEvent};
    this[ol1O0]("itemclick", $)
};
Oooll = function (C) {
    if (!C.item)return;
    for (var $ = 0, A = this.ol11O0.length; $ < A; $++) {
        var B = this.ol11O0[$];
        if (B != C.sender)B[OlO0o1](null)
    }
    var _ = {item: C.item, htmlEvent: C.htmlEvent};
    this.l0l01 = C.item;
    this[ol1O0]("itemselect", _)
};
oOO0lName = function ($) {
    this.textName = $
};
l1lOlName = function () {
    return this.textName
};
O1lol = function () {
    var A = "<table class=\"mini-textboxlist\" cellpadding=\"0\" cellspacing=\"0\"><tr ><td class=\"mini-textboxlist-border\"><ul></ul><a href=\"#\"></a><input type=\"hidden\"/></td></tr></table>", _ = document.createElement("div");
    _.innerHTML = A;
    this.el = _.firstChild;
    var $ = this.el.getElementsByTagName("td")[0];
    this.ulEl = $.firstChild;
    this.l0o0o0 = $.lastChild;
    this.focusEl = $.childNodes[1]
};
Oll01 = function ($) {
    if (this[oOO1O1])this[oOl0oo]();
    if (this.OOoloO) {
        mini[o11l00](this.OOoloO);
        this.OOoloO.onkeyup = null;
        this.OOoloO.onfocus = null;
        this.OOoloO.onblur = null
    }
    lol0Oo(document, "mousedown", this.o0OO0O, this);
    lo0010[ollolO][l0lOl][o1O0l0](this, $)
};
oO0o1 = function () {
    lo0010[ollolO][lOo101][o1O0l0](this);
    Ol1O(this.el, "mousemove", this.oll1l, this);
    Ol1O(this.el, "mouseout", this.O11olO, this);
    Ol1O(this.el, "mousedown", this.Ol0l, this);
    Ol1O(this.el, "click", this.oO0o1l, this);
    Ol1O(this.el, "keydown", this.Oo111, this);
    Ol1O(document, "mousedown", this.o0OO0O, this)
};
olOO0 = function (_) {
    if (this[o0011o]())return;
    if (this[oOO1O1])if (!Ol0O(this.popup.el, _.target))this[oOl0oo]();
    var $ = this;
    if (this.O1OO00)if (this[l1Oo0O](_) == false) {
        clearInterval(this.olo1);
        this[lOol1O](null, false);
        setTimeout(function () {
            $[lOoll](false)
        }, 100);
        this[ol0OoO](this.o101);
        this.O1OO00 = false
    }
};
O0101 = function () {
    if (!this.ll001O) {
        var _ = this.el.rows[0], $ = _.insertCell(1);
        $.style.cssText = "width:18px;vertical-align:top;";
        $.innerHTML = "<div class=\"mini-errorIcon\"></div>";
        this.ll001O = $.firstChild
    }
    return this.ll001O
};
O0OOl = function () {
    if (this.ll001O)jQuery(this.ll001O.parentNode).remove();
    this.ll001O = null
};
OO00l = function () {
    if (this[Ooo1oo]() == false)return;
    lo0010[ollolO][l0llOO][o1O0l0](this);
    this[lo11ll]()
};
O0000 = function () {
    if (this[o0011o]() || this.allowInput == false)this.OOoloO[lOlo0] = true; else this.OOoloO[lOlo0] = false
};
o1000 = function () {
    if (this.olo1)clearInterval(this.olo1);
    if (this.OOoloO)lol0Oo(this.OOoloO, "keydown", this.lllO, this);
    var G = [], F = this.uid;
    for (var A = 0, E = this.data.length; A < E; A++) {
        var _ = this.data[A], C = F + "$text$" + A, B = mini._getMap(this.textField, _);
        if (mini.isNull(B))B = "";
        G[G.length] = "<li id=\"" + C + "\" class=\"mini-textboxlist-item\">";
        G[G.length] = B;
        G[G.length] = "<span class=\"mini-textboxlist-close\"></span></li>"
    }
    var $ = F + "$input";
    G[G.length] = "<li id=\"" + $ + "\" class=\"mini-textboxlist-inputLi\"><input class=\"mini-textboxlist-input\" type=\"text\" autocomplete=\"off\"></li>";
    this.ulEl.innerHTML = G.join("");
    this.editIndex = this.data.length;
    if (this.editIndex < 0)this.editIndex = 0;
    this.inputLi = this.ulEl.lastChild;
    this.OOoloO = this.inputLi.firstChild;
    Ol1O(this.OOoloO, "keydown", this.lllO, this);
    var D = this;
    this.OOoloO.onkeyup = function () {
        D.Oo01()
    };
    D.olo1 = null;
    D.l001o = D.OOoloO.value;
    this.OOoloO.onfocus = function () {
        D.l001o = D.OOoloO.value;
        D.olo1 = setInterval(function () {
            if (!D.O1OO00) {
                clearInterval(D.olo1);
                D.olo1 = null;
                return
            }
            if (D.l001o != D.OOoloO.value) {
                D.l1Ol00();
                D.l001o = D.OOoloO.value
            }
        }, 10);
        D[oll1o0](D.o101);
        D.O1OO00 = true;
        D[ol1O0]("focus")
    };
    this.OOoloO.onblur = function () {
        clearInterval(D.olo1);
        D.olo1 = null;
        D[ol1O0]("blur");
        if (D.validateOnLeave && D[OoOOol]())D[llo100]()
    };
    this[lo11ll]()
};
l0o01ByEvent = function (_) {
    var A = ol000(_.target, "mini-textboxlist-item");
    if (A) {
        var $ = A.id.split("$"), B = $[$.length - 1];
        return this.data[B]
    }
};
l0o01 = function ($) {
    if (typeof $ == "number")return this.data[$];
    if (typeof $ == "object")return $
};
O0011 = function (_) {
    var $ = this.data[o110ll](_), A = this.uid + "$text$" + $;
    return document.getElementById(A)
};
O1ooO = function ($, A) {
    if (this[o0011o]() || this.enabled == false)return;
    this[oO10l]();
    var _ = this[llolO]($);
    l1Oo(_, this.o1OlO);
    if (A && olol(A.target, "mini-textboxlist-close"))l1Oo(A.target, this.o0O0o)
};
O0loOItem = function () {
    var _ = this.data.length;
    for (var A = 0, C = _; A < C; A++) {
        var $ = this.data[A], B = this[llolO]($);
        if (B) {
            o11o(B, this.o1OlO);
            o11o(B.lastChild, this.o0O0o)
        }
    }
};
o111o = function (A) {
    this[lOol1O](null);
    if (mini.isNumber(A))this.editIndex = A; else this.editIndex = this.data.length;
    if (this.editIndex < 0)this.editIndex = 0;
    if (this.editIndex > this.data.length)this.editIndex = this.data.length;
    var B = this.inputLi;
    B.style.display = "block";
    if (mini.isNumber(A) && A < this.data.length) {
        var _ = this.data[A], $ = this[llolO](_);
        jQuery($).before(B)
    } else this.ulEl.appendChild(B);
    if (A !== false)setTimeout(function () {
        try {
            B.firstChild[O1loo]();
            mini.selectRange(B.firstChild, 100)
        } catch ($) {
        }
    }, 10); else {
        this.lastInputText = "";
        this.OOoloO.value = ""
    }
    return B
};
oOO0O = function (_) {
    _ = this[o11l](_);
    if (this.l0l01) {
        var $ = this[llolO](this.l0l01);
        o11o($, this.o0lo1)
    }
    this.l0l01 = _;
    if (this.l0l01) {
        $ = this[llolO](this.l0l01);
        l1Oo($, this.o0lo1)
    }
    var A = this;
    if (this.l0l01) {
        this.focusEl[O1loo]();
        var B = this;
        setTimeout(function () {
            try {
                B.focusEl[O1loo]()
            } catch ($) {
            }
        }, 50)
    }
    if (this.l0l01) {
        A[oll1o0](A.o101);
        A.O1OO00 = true
    }
};
o0l0O = function () {
    var A = this[l1loO0](), _ = {};
    _[this.textField] = A;
    _[this.valueField] = A;
    var $ = this.editIndex;
    this[O1OOo]($, _)
};
oo00O = function () {
    if (this.l01ol[ll1oO1]().length == 0)return;
    var _ = this.l01ol[o1lo1l](), $ = this.editIndex;
    if (_) {
        _ = mini.clone(_);
        this[O1OOo]($, _)
    }
};
O1lOO = function (_, $) {
    this.data.insert(_, $);
    var B = this[ooooO](), A = this[o1oOl]();
    this[ll10OO](A, false);
    this[l0O0O0](B, false);
    this.lloo();
    this[l0loO0]();
    this[lOoll](_ + 1);
    this.OOoOO()
};
loO0o = function (_) {
    if (!_)return;
    var $ = this[llolO](_);
    mini[oll100]($);
    this.data.remove(_);
    var B = this[ooooO](), A = this[o1oOl]();
    this[ll10OO](A, false);
    this[l0O0O0](B, false);
    this.OOoOO()
};
lolo0 = function () {
    var E = (this.text ? this.text : "").split(","), D = (this.value ? this.value : "").split(",");
    if (D[0] == "")D = [];
    var _ = D.length;
    this.data.length = _;
    for (var A = 0, F = _; A < F; A++) {
        var $ = this.data[A];
        if (!$) {
            $ = {};
            this.data[A] = $
        }
        var C = !mini.isNull(E[A]) ? E[A] : "", B = !mini.isNull(D[A]) ? D[A] : "";
        mini._setMap(this.textField, C, $);
        mini._setMap(this.valueField, B, $)
    }
    this.value = this[o1oOl]();
    this.text = this[ooooO]()
};
O1O0l = function () {
    return this.OOoloO ? this.OOoloO.value : ""
};
l1lOl = function () {
    var C = [];
    for (var _ = 0, A = this.data.length; _ < A; _++) {
        var $ = this.data[_], B = mini._getMap(this.textField, $);
        if (mini.isNull(B))B = "";
        B = B.replace(",", "\uff0c");
        C.push(B)
    }
    return C.join(",")
};
l01oo = function () {
    var B = [];
    for (var _ = 0, A = this.data.length; _ < A; _++) {
        var $ = this.data[_], C = mini._getMap(this.valueField, $);
        B.push(C)
    }
    return B.join(",")
};
o100O = function () {
    var $ = this.value;
    if ($ === null || $ === undefined)$ = "";
    return String($)
};
lolOO = function ($) {
    if (this.name != $) {
        this.name = $;
        this.l0o0o0.name = $
    }
};
Oo1oO = function ($) {
    if (mini.isNull($))$ = "";
    if (this.value != $) {
        this.value = $;
        this.l0o0o0.value = $;
        this.lloo();
        this[l0loO0]()
    }
};
oOO0l = function ($) {
    if (mini.isNull($))$ = "";
    if (this.text !== $) {
        this.text = $;
        this.lloo();
        this[l0loO0]()
    }
};
O01o0 = function ($) {
    this[O01oll] = $;
    this.lloo()
};
o00oO = function () {
    return this[O01oll]
};
oO010 = function ($) {
    this[l1ol1O] = $;
    this.lloo()
};
OOlll = function () {
    return this[l1ol1O]
};
O00lo = function ($) {
    this.allowInput = $;
    this[l0llOO]()
};
l100l = function () {
    return this.allowInput
};
oOo10 = function ($) {
    this.url = $
};
lOlO1 = function () {
    return this.url
};
O11lO = function ($) {
    this[o0Oo10] = $
};
O0oo1 = function () {
    return this[o0Oo10]
};
l1ool = function ($) {
    this[l0lloo] = $
};
ol10l = function () {
    return this[l0lloo]
};
oll10 = function ($) {
    this[l00O0] = $
};
l01l1 = function () {
    return this[l00O0]
};
l11O1 = function ($) {
    this.valueFromSelect = $
};
l100o = function () {
    return this.valueFromSelect
};
lOo1l = function () {
    this.l1Ol00(true)
};
O11lo = function () {
    if (this[l0Ooo]() == false)return;
    var _ = this[l1loO0](), B = mini.measureText(this.OOoloO, _), $ = B.width > 20 ? B.width + 4 : 20, A = lo0o(this.el, true);
    if ($ > A - 15)$ = A - 15;
    this.OOoloO.style.width = $ + "px"
};
l0loO = function (_) {
    var $ = this;
    setTimeout(function () {
        $.Oo01()
    }, 1);
    this[ol1O01]("loading");
    this.ol11();
    this._loading = true;
    this.delayTimer = setTimeout(function () {
        var _ = $.OOoloO.value;
        $.looo11()
    }, this.delay)
};
l0ool = function () {
    if (this[l0Ooo]() == false)return;
    var _ = this[l1loO0](), A = this, $ = this.l01ol[ll1oO1](), B = {value: this[o1oOl](), text: this[ooooO]()};
    B[this.searchField] = _;
    var C = this.url, G = typeof C == "function" ? C : window[C];
    if (typeof G == "function")C = G(this);
    if (!C)return;
    var F = "post";
    if (C)if (C[o110ll](".txt") != -1 || C[o110ll](".json") != -1)F = "get";
    var E = {
        url: C,
        async: true,
        params: B,
        data: B,
        type: this.ajaxType ? this.ajaxType : F,
        cache: false,
        cancel: false
    };
    this[ol1O0]("beforeload", E);
    if (E.cancel)return;
    var D = this;
    mini.copyTo(E, {
        success: function (B, G, _) {
            delete E.params;
            var $ = {text: B, result: null, sender: D, options: E, xhr: _}, C = null;
            try {
                mini_doload($);
                C = $.result;
                if (!C)C = mini.decode(B)
            } catch (F) {
                if (mini_debugger == true)throw new Error("textboxlist json is error")
            }
            if (mini.isArray(C))C = {data: C};
            if (D.dataField)C.data = mini._getMap(D.dataField, C);
            if (!C.data)C.data = [];
            A.l01ol[ol0l0](C.data);
            A[ol1O01]();
            A.l01ol.lOO1O0(0, true);
            A[ol1O0]("load", {data: C.data, result: C});
            A._loading = false;
            if (A._selectOnLoad) {
                A[Ol10O1]();
                A._selectOnLoad = null
            }
        }, error: function ($, B, _) {
            A[ol1O01]("error")
        }
    });
    A.ol101 = mini.ajax(E)
};
o1llo = function () {
    if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null
    }
    if (this.ol101)this.ol101.abort();
    this._loading = false
};
Oo11O = function ($) {
    if (Ol0O(this.el, $.target))return true;
    if (this[ol1O01] && this.popup && this.popup[l1Oo0O]($))return true;
    return false
};
Ollo0 = function ($) {
    this.popupEmptyText = "<span class='mini-textboxlist-popup-noresult'>" + $ + "</span>";
    this[o0oOOO] = $
};
ooo0O = function ($) {
    return this[o0oOOO]
};
Ollo0 = function ($) {
    this.popupLoadingText = "<span class='mini-textboxlist-popup-noresult'>" + $ + "</span>";
    this.loadingText = $
};
ooo0O = function ($) {
    return this.loadingText
};
Ollo0 = function ($) {
    this.popupEmptyText = "<span class='mini-textboxlist-popup-noresult'>" + $ + "</span>";
    this.errorText = $
};
ooo0O = function ($) {
    return this.errorText
};
OO011 = function () {
    if (!this.popup) {
        this.popup = new lO1OO1();
        this.popup[oll1o0]("mini-textboxlist-popup");
        this.popup[Oo1oll]("position:absolute;left:0;top:0;");
        this.popup[O1lO00] = true;
        this.popup[olOo0l](this[O01oll]);
        this.popup[ooO1ll](this[l1ol1O]);
        this.popup[O1OO10](document.body);
        this.popup[Ol1oO1]("itemclick", function ($) {
            this[oOl0oo]();
            this.lllOl()
        }, this)
    }
    this.l01ol = this.popup;
    return this.popup
};
Oo0o1 = function ($) {
    if (this[l0Ooo]() == false)return;
    this[oOO1O1] = true;
    var _ = this[l0101]();
    _.el.style.zIndex = mini.getMaxZIndex();
    var B = this.l01ol;
    B[o0oOOO] = this.popupEmptyText;
    if ($ == "loading") {
        B[o0oOOO] = this.popupLoadingText;
        this.l01ol[ol0l0]([])
    } else if ($ == "error") {
        B[o0oOOO] = this.popupLoadingText;
        this.l01ol[ol0l0]([])
    }
    this.l01ol[l0loO0]();
    var A = this[l0O1l0](), D = A.x, C = A.y + A.height;
    this.popup.el.style.display = "block";
    mini[o1lloo](_.el, -1000, -1000);
    this.popup[oll0OO](A.width);
    this.popup[lOll1l](this[o0Oo10]);
    if (this.popup[o11lOl]() < this[l0lloo])this.popup[lOll1l](this[l0lloo]);
    if (this.popup[o11lOl]() > this[l00O0])this.popup[lOll1l](this[l00O0]);
    mini[o1lloo](_.el, D, C)
};
Oo1ol = function () {
    this[oOO1O1] = false;
    if (this.popup)this.popup.el.style.display = "none"
};
O1O00 = function (_) {
    if (this.enabled == false)return;
    var $ = this.llll1l(_);
    if (!$) {
        this[oO10l]();
        return
    }
    this[lOo0OO]($, _)
};
lool0 = function ($) {
    this[oO10l]()
};
lOo01 = function (_) {
    if (this[o0011o]() || this.enabled == false)return;
    if (this.enabled == false)return;
    var $ = this.llll1l(_);
    if (!$) {
        if (ol000(_.target, "mini-textboxlist-input")); else this[lOoll]();
        return
    }
    this.focusEl[O1loo]();
    this[lOol1O]($);
    if (_ && olol(_.target, "mini-textboxlist-close"))this[O0o11]($)
};
oo110O = function (B) {
    if (this[o0011o]() || this.allowInput == false)return false;
    var $ = this.data[o110ll](this.l0l01), _ = this;

    function A() {
        var A = _.data[$];
        _[O0o11](A);
        A = _.data[$];
        if (!A)A = _.data[$ - 1];
        _[lOol1O](A);
        if (!A)_[lOoll]()
    }

    switch (B.keyCode) {
        case 8:
            B.preventDefault();
            A();
            break;
        case 37:
        case 38:
            this[lOol1O](null);
            this[lOoll]($);
            break;
        case 39:
        case 40:
            $ += 1;
            this[lOol1O](null);
            this[lOoll]($);
            break;
        case 46:
            A();
            break
    }
};
ll10O = function () {
    var $ = this.l01ol[Oo1O0o]();
    if ($) {
        this.l01ol[O0lOo1]($);
        this.lastInputText = this.text;
        this[oOl0oo]();
        this.lllOl()
    } else if (!this.valueFromSelect) {
        var _ = this[l1loO0]().trim();
        if (_)this[Ol1o0l]()
    }
};
l10Oo = function (G) {
    this._selectOnLoad = null;
    if (this[o0011o]() || this.allowInput == false)return false;
    G.stopPropagation();
    if (this[o0011o]() || this.allowInput == false)return;
    var E = mini.getSelectRange(this.OOoloO), B = E[0], D = E[1], F = this.OOoloO.value.length, C = B == D && B == 0, A = B == D && D == F;
    if (this[o0011o]() || this.allowInput == false)G.preventDefault();
    if (G.keyCode == 9) {
        this[oOl0oo]();
        return
    }
    if (G.keyCode == 16 || G.keyCode == 17 || G.keyCode == 18)return;
    switch (G.keyCode) {
        case 13:
            if (this[oOO1O1]) {
                G.preventDefault();
                if (this._loading) {
                    this._selectOnLoad = true;
                    return
                }
                this[Ol10O1]()
            }
            break;
        case 27:
            G.preventDefault();
            this[oOl0oo]();
            break;
        case 8:
            if (C)G.preventDefault();
        case 37:
            if (C)if (this[oOO1O1])this[oOl0oo](); else if (this.editIndex > 0) {
                var _ = this.editIndex - 1;
                if (_ < 0)_ = 0;
                if (_ >= this.data.length)_ = this.data.length - 1;
                this[lOoll](false);
                this[lOol1O](_)
            }
            break;
        case 39:
            if (A)if (this[oOO1O1])this[oOl0oo](); else if (this.editIndex <= this.data.length - 1) {
                _ = this.editIndex;
                this[lOoll](false);
                this[lOol1O](_)
            }
            break;
        case 38:
            G.preventDefault();
            if (this[oOO1O1]) {
                var _ = -1, $ = this.l01ol[Oo1O0o]();
                if ($)_ = this.l01ol[o110ll]($);
                _--;
                if (_ < 0)_ = 0;
                this.l01ol.lOO1O0(_, true)
            }
            break;
        case 40:
            G.preventDefault();
            if (this[oOO1O1]) {
                _ = -1, $ = this.l01ol[Oo1O0o]();
                if ($)_ = this.l01ol[o110ll]($);
                _++;
                if (_ < 0)_ = 0;
                if (_ >= this.l01ol[lO1lO1]())_ = this.l01ol[lO1lO1]() - 1;
                this.l01ol.lOO1O0(_, true)
            } else this.l1Ol00(true);
            break;
        default:
            break
    }
};
olllo = function () {
    try {
        this.OOoloO[O1loo]()
    } catch ($) {
    }
};
O0loO = function () {
    try {
        this.OOoloO[O0llO0]()
    } catch ($) {
    }
};
l11ll = function ($) {
    this.searchField = $
};
OOoo = function () {
    return this.searchField
};
o0OlO = function ($) {
    var A = l0oOoo[ollolO][ol1oOl][o1O0l0](this, $), _ = jQuery($);
    mini[Ol100O]($, A, ["value", "text", "valueField", "textField", "url", "popupHeight", "textName", "onfocus", "onbeforeload", "onload", "searchField", "emptyText", "loadingText", "errorText", "onblur"]);
    mini[Olo01O]($, A, ["allowInput", "valueFromSelect"]);
    mini[oOOl00]($, A, ["popupMinHeight", "popupMaxHeight"]);
    return A
};
olO11 = function () {
    var $ = this;
    if (isFirefox)this._textEl.oninput = function () {
        if (!$.enterQuery)$.O1lol1()
    }
};
l1l0O = function ($) {
    this.url = $
};
OlOo = function ($) {
    if (mini.isNull($))$ = "";
    if (this.value != $) {
        this.value = $;
        this.l0o0o0.value = this.value
    }
};
llo00 = function ($) {
    if (mini.isNull($))$ = "";
    if (this.text != $) {
        this.text = $;
        this.l001o = $
    }
    this._textEl.value = this.text
};
oo111 = function ($) {
    this.minChars = $
};
loO1l = function () {
    return this.minChars
};
O0lO0 = function ($) {
    this.searchField = $
};
lo1Ol = function () {
    return this.searchField
};
ooo10 = function ($) {
    this.popupEmptyText = $
};
O0Oo0 = function ($) {
    return this.popupEmptyText
};
O0lOl = function ($) {
    this.loadingText = $
};
Ol1oO = function ($) {
    return this.loadingText
};
OOOoo = function ($) {
    this.errorText = $
};
llOOl = function ($) {
    return this.errorText
};
oO1O1 = function () {
    return "<span class='mini-textboxlist-popup-noresult'>" + this.popupEmptyText + "</span>"
};
o1oo0 = function () {
    return "<span class='mini-textboxlist-popup-loading'>" + this.loadingText + "</span>"
};
o0Oo0 = function () {
    return "<span class='mini-textboxlist-popup-error'>" + this.errorText + "</span>"
};
ll1o1 = function ($) {
    var _ = this[oolOl](), A = this.l01ol;
    A[O1lO00] = true;
    A[o0oOOO] = this[Oloolo]();
    if ($ == "loading") {
        A[o0oOOO] = this[ool00]();
        this.l01ol[ol0l0]([])
    } else if ($ == "error") {
        A[o0oOOO] = this[llo00o]();
        this.l01ol[ol0l0]([])
    }
    this.l01ol[l0loO0]();
    oooloO[ollolO][ol1O01][o1O0l0](this)
};
o1O00 = function (D) {
    var C = {htmlEvent: D};
    this[ol1O0]("keydown", C);
    if (D.keyCode == 8 && (this[o0011o]() || this.allowInput == false))return false;
    if (D.keyCode == 9) {
        this[oOl0oo]();
        return
    }
    if (D.keyCode == 16 || D.keyCode == 17 || D.keyCode == 18)return;
    if (this[o0011o]())return;
    switch (D.keyCode) {
        case 27:
            if (this[oOO1O1]())D.stopPropagation();
            this[oOl0oo]();
            break;
        case 13:
            if (!this[oOO1O1]() || this.l01ol[ll1oO1]().length == 0)if (this.enterQuery)this.O1lol1(this._textEl.value);
            if (this[oOO1O1]()) {
                D.preventDefault();
                D.stopPropagation();
                var _ = this.l01ol[O1l0lO]();
                if (_ != -1) {
                    var $ = this.l01ol[l11o1o](_), B = this.l01ol.Oool0([$]), A = B[0];
                    this[l0O0O0](B[1]);
                    this[ll10OO](A);
                    this.OOoOO()
                }
            } else this[ol1O0]("enter", C);
            this[oOl0oo]();
            this[O1loo]();
            break;
        case 37:
            break;
        case 38:
            _ = this.l01ol[O1l0lO]();
            if (_ == -1) {
                _ = 0;
                if (!this[O0o1ol]) {
                    $ = this.l01ol[OO11](this.value)[0];
                    if ($)_ = this.l01ol[o110ll]($)
                }
            }
            if (this[oOO1O1]())if (!this[O0o1ol]) {
                _ -= 1;
                if (_ < 0)_ = 0;
                this.l01ol.lOO1O0(_, true)
            }
            break;
        case 39:
            break;
        case 40:
            _ = this.l01ol[O1l0lO]();
            if (this[oOO1O1]()) {
                if (!this[O0o1ol]) {
                    _ += 1;
                    if (_ > this.l01ol[lO1lO1]() - 1)_ = this.l01ol[lO1lO1]() - 1;
                    this.l01ol.lOO1O0(_, true)
                }
            } else this.O1lol1(this._textEl.value);
            break;
        default:
            if (this.enterQuery == true) {
                this[oOl0oo]();
                this[O1loo]()
            } else this[OOo1O0]();
            break
    }
};
OOoOo = function () {
    var $ = this;
    if ($._keydownTimer) {
        clearTimeout($._keydownTimer);
        $._keydownTimer = null
    }
    $._keydownTimer = setTimeout(function () {
        var _ = $._textEl.value;
        if (_ != $.__oldText) {
            $.O1lol1(_);
            $.__oldText = _
        }
    }, 20)
};
o11l1 = function () {
    this.O1lol1()
};
l1lo0 = function (_) {
    var $ = this;
    if (this._queryTimer) {
        clearTimeout(this._queryTimer);
        this._queryTimer = null
    }
    this._queryTimer = setTimeout(function () {
        var _ = $._textEl.value;
        $.looo11(_);
        document.title = _ + ":" + new Date()[OOo0o1]()
    }, this.delay);
    this[ol1O01]("loading")
};
lOOl0 = function (_) {
    if (this.ol101)this.ol101.abort();
    var C = this.url, F = "post";
    if (C)if (C[o110ll](".txt") != -1 || C[o110ll](".json") != -1)F = "get";
    var A = {};
    A[this.searchField] = _;
    var E = {
        url: C,
        async: true,
        params: A,
        data: A,
        type: this.ajaxType ? this.ajaxType : F,
        cache: false,
        cancel: false
    };
    this[ol1O0]("beforeload", E);
    var D = this;

    function $(_, $) {
        D.l01ol[ol0l0](_);
        D[ol1O01]();
        D.l01ol.lOO1O0(0, true);
        D.data = _;
        D[ol1O0]("load", {data: _, result: $})
    }

    if (E.cancel) {
        var B = E.result || [];
        $(B, B);
        return
    }
    mini.copyTo(E, {
        success: function (B, G, A) {
            delete E.params;
            var _ = {text: B, result: null, sender: D, options: E, xhr: A}, C = null;
            try {
                mini_doload(_);
                C = _.result;
                if (!C)C = mini.decode(B)
            } catch (F) {
                if (mini_debugger == true)throw new Error("autocomplete json is error")
            }
            if (mini.isArray(C))C = {data: C};
            if (D.dataField)C.data = mini._getMap(D.dataField, C);
            if (!C.data)C.data = [];
            $(C.data, C)
        }, error: function ($, A, _) {
        }
    });
    this.ol101 = mini.ajax(E)
};
oOl0l = function ($) {
    this.enterQuery = $
};
O11O0 = function () {
    return this.enterQuery
};
oOlOl = function ($) {
    var _ = oooloO[ollolO][ol1oOl][o1O0l0](this, $);
    mini[Ol100O]($, _, ["searchField", "popupEmptyText", "loadingText", "errorText"]);
    mini[Olo01O]($, _, ["enterQuery"]);
    return _
};
llo1o = function () {
    var $ = this.el = document.createElement("div");
    this.el.className = this.uiCls;
    this.el.innerHTML = "<table cellpadding=\"0\" border=\"0\" cellspacing=\"0\" style=\"display:table;\"><tr><td><div class=\"mini-list-inner\"></div><div class=\"mini-errorIcon\"></div><input type=\"hidden\" /></td></tr></table>";
    this.cellEl = $.getElementsByTagName("td")[0];
    this._innerEl = this.cellEl.firstChild;
    this.l0o0o0 = this.cellEl.lastChild;
    this.ll001O = this.cellEl.childNodes[1];
    this._borderEl = this.el.firstChild
};
o1ool = function () {
    var B = [];
    if (this.repeatItems > 0) {
        if (this.repeatDirection == "horizontal") {
            var D = [];
            for (var C = 0, E = this.data.length; C < E; C++) {
                var A = this.data[C];
                if (D.length == this.repeatItems) {
                    B.push(D);
                    D = []
                }
                D.push(A)
            }
            B.push(D)
        } else {
            var _ = this.repeatItems > this.data.length ? this.data.length : this.repeatItems;
            for (C = 0, E = _; C < E; C++)B.push([]);
            for (C = 0, E = this.data.length; C < E; C++) {
                var A = this.data[C], $ = C % this.repeatItems;
                B[$].push(A)
            }
        }
    } else B = [this.data.clone()];
    return B
};
o0OO0 = function () {
    var D = this.data, G = "";
    for (var A = 0, F = D.length; A < F; A++) {
        var _ = D[A];
        _._i = A
    }
    if (this.repeatLayout == "flow") {
        var $ = this.olO01();
        for (A = 0, F = $.length; A < F; A++) {
            var C = $[A];
            for (var E = 0, B = C.length; E < B; E++) {
                _ = C[E];
                G += this.Ooooo(_, _._i)
            }
            if (A != F - 1)G += "<br/>"
        }
    } else if (this.repeatLayout == "table") {
        $ = this.olO01();
        G += "<table class=\"" + this.l1Ol0 + "\" cellpadding=\"0\" cellspacing=\"1\">";
        for (A = 0, F = $.length; A < F; A++) {
            C = $[A];
            G += "<tr>";
            for (E = 0, B = C.length; E < B; E++) {
                _ = C[E];
                G += "<td class=\"" + this.OO0OO + "\">";
                G += this.Ooooo(_, _._i);
                G += "</td>"
            }
            G += "</tr>"
        }
        G += "</table>"
    } else for (A = 0, F = D.length; A < F; A++) {
        _ = D[A];
        G += this.Ooooo(_, A)
    }
    this._innerEl.innerHTML = G;
    for (A = 0, F = D.length; A < F; A++) {
        _ = D[A];
        delete _._i
    }
};
l0O1l = function (_, $) {
    var G = this.o01O0(_, $), F = this.ll001($), A = this.l1olO1($), D = this[OO01O0](_), B = "", E = "<div id=\"" + F + "\" index=\"" + $ + "\" class=\"" + this.oooll1 + " ";
    if (_.enabled === false) {
        E += " mini-disabled ";
        B = "disabled"
    }
    var C = "onclick=\"return false\"";
    C = "onmousedown=\"this._checked = this.checked;\" onclick=\"this.checked = this._checked\"";
    E += G.itemCls + "\" style=\"" + G.itemStyle + "\"><span class=\"mini-list-icon\"></span><input style=\"display:none;\" " + C + " " + B + " value=\"" + D + "\" id=\"" + A + "\" type=\"" + this.llO0o + "\" /><label for=\"" + A + "\" onclick=\"return false;\">";
    E += G.itemHtml + "</label></div>";
    return E
};
o110l = function (_, $) {
    var A = this[OO101](_), B = {index: $, item: _, itemHtml: A, itemCls: "", itemStyle: ""};
    this[ol1O0]("drawitem", B);
    if (B.itemHtml === null || B.itemHtml === undefined)B.itemHtml = "";
    return B
};
O1oo0 = function ($) {
    $ = parseInt($);
    if (isNaN($))$ = 0;
    if (this.repeatItems != $) {
        this.repeatItems = $;
        this[l0loO0]()
    }
};
OOOoO = function () {
    return this.repeatItems
};
O000o = function ($) {
    if ($ != "flow" && $ != "table")$ = "none";
    if (this.repeatLayout != $) {
        this.repeatLayout = $;
        this[l0loO0]()
    }
};
O0001 = function () {
    return this.repeatLayout
};
O01ol = function ($) {
    if ($ != "vertical")$ = "horizontal";
    if (this.repeatDirection != $) {
        this.repeatDirection = $;
        this[l0loO0]()
    }
};
OO01O = function () {
    return this.repeatDirection
};
ooOOo = function (_) {
    var D = O0oloo[ollolO][ol1oOl][o1O0l0](this, _), C = jQuery(_);
    mini[Ol100O](_, D, ["ondrawitem"]);
    var $ = parseInt(C.attr("repeatItems"));
    if (!isNaN($))D.repeatItems = $;
    var B = C.attr("repeatLayout");
    if (B)D.repeatLayout = B;
    var A = C.attr("repeatDirection");
    if (A)D.repeatDirection = A;
    return D
};
olool = function ($) {
    if ($)this[oll1o0](this._indentCls); else this[ol0OoO](this._indentCls);
    this.indentSpace = $
};
O01o1 = function () {
    return this.indentSpace
};
ll11o = function () {
    if (this[lOlo0] || !this.allowInput || !this.enabled)return false;
    return true
};
oOO00 = function () {
    if (this._tryValidateTimer)clearTimeout(this._tryValidateTimer);
    var $ = this;
    this._tryValidateTimer = setTimeout(function () {
        $[lO1lo]()
    }, 30)
};
Ooll1 = function () {
    var $ = {value: this[o1oOl](), errorText: "", isValid: true};
    if (this.required)if (mini.isNull($.value) || String($.value).trim() === "") {
        $[o0Ol0l] = false;
        $.errorText = this[l0OO11]
    }
    this[ol1O0]("validation", $);
    this.errorText = $.errorText;
    this[ooOoO]($[o0Ol0l]);
    return this[o0Ol0l]()
};
o0O01 = function () {
    return this.llO1
};
O0OO1 = function ($) {
    this.llO1 = $;
    this.olOOO()
};
ll0o0 = function () {
    return this.llO1
};
o1loo = function ($) {
    this.validateOnChanged = $
};
ooOl1 = function ($) {
    return this.validateOnChanged
};
loo00 = function ($) {
    this.validateOnLeave = $
};
ll00o = function ($) {
    return this.validateOnLeave
};
o0o10 = function ($) {
    if (!$)$ = "none";
    this[oOOOoO] = $.toLowerCase();
    if (this.llO1 == false)this.olOOO()
};
olOO1 = function () {
    return this[oOOOoO]
};
o11lo = function ($) {
    this.errorText = $;
    if (this.llO1 == false)this.olOOO()
};
ll01O = function () {
    return this.errorText
};
O1l01 = function ($) {
    this.required = $;
    if (this.required)this[oll1o0](this.oo11O); else this[ol0OoO](this.oo11O)
};
l10O1 = function () {
    return this.required
};
o1lO0 = function ($) {
    this[l0OO11] = $
};
llOl0 = function () {
    return this[l0OO11]
};
loool = function () {
    return this.ll001O
};
oOol1 = function () {
};
o1O1l = function () {
    var $ = this;
    $.O000ol()
};
o01l0 = function () {
    if (!this.el)return;
    this[ol0OoO](this.O0l00l);
    this[ol0OoO](this.ol01O);
    if (this.llO1 == false)switch (this[oOOOoO]) {
        case"icon":
            this[oll1o0](this.O0l00l);
            var $ = this[l1oOlO]();
            if ($) {
                $.title = this.errorText;
                jQuery($).attr("data-placement", this.errorTooltipPlacement)
            }
            break;
        case"border":
            this[oll1o0](this.ol01O);
            this.el.title = this.errorText;
        default:
            this.Ol10();
            break
    } else this.Ol10();
    this[l0llOO]()
};
lO1ol = function () {
    this.OOoOO()
};
oOolo = function () {
    if (this.validateOnChanged)this[llo100]();
    this[ol1O0]("valuechanged", {value: this[o1oOl]()})
};
O1O1O = function (_, $) {
    this[Ol1oO1]("valuechanged", _, $)
};
OO0o1 = function (_, $) {
    this[Ol1oO1]("validation", _, $)
};
lOO01 = function (A) {
    var B = Ool1O1[ollolO][ol1oOl][o1O0l0](this, A);
    mini[Ol100O](A, B, ["onvaluechanged", "onvalidation", "label", "labelStyle", "requiredErrorText", "errorMode", "errorTooltipPlacement"]);
    mini[Olo01O](A, B, ["validateOnChanged", "validateOnLeave", "labelField", "indentSpace"]);
    var _ = A.getAttribute("required");
    if (!_)_ = A.required;
    if (!_) {
        var $ = A.attributes["required"];
        if ($)_ = $.value == "null" ? null : "true"
    }
    if (_)B.required = _ != "false" ? true : false;
    return B
};
Ooo1l = function () {
    var _ = this._borderEl;
    if (!_)return;
    this._labelLayouted = true;
    if (this.labelField) {
        var $ = this.Ooo110.offsetWidth;
        _.style["marginLeft"] = $ + "px";
        this._doLabelLayout = $ === 0
    } else _.style["marginLeft"] = 0
};
l0OOOField = function ($) {
    if (this.labelField != $) {
        this.labelField = $;
        if (!this._borderEl)return;
        if (!this.Ooo110) {
            this.Ooo110 = mini.append(this.el, "<label class=\"mini-labelfield-label\"></label>");
            this.Ooo110.innerHTML = this.label;
            lO01l(this.Ooo110, this.labelStyle)
        }
        this.Ooo110.style.display = $ ? "block" : "none";
        if ($)l1Oo(this.el, this._labelFieldCls); else o11o(this.el, this._labelFieldCls);
        this[lolll]()
    }
};
Oo00OField = function () {
    this.labelField
};
l0OOO = function ($) {
    if (this.label != $) {
        this.label = $;
        if (this.Ooo110)this.Ooo110.innerHTML = $;
        this[lolll]()
    }
};
Oo00O = function () {
    this.label
};
lOl00 = function ($) {
    if (this.labelStyle != $) {
        this.labelStyle = $;
        if (this.Ooo110)lO01l(this.Ooo110, $);
        this[lolll]()
    }
};
o1O10 = function () {
    this.labelStyle
};
mini = {
    components: {},
    uids: {},
    ux: {},
    doc: document,
    window: window,
    isReady: false,
    createTime: new Date(),
    byClass: function (_, $) {
        if (typeof $ == "string")$ = o0OO($);
        return jQuery("." + _, $)[0]
    },
    getComponents: function () {
        var _ = [];
        for (var A in mini.components) {
            var $ = mini.components[A];
            if ($.isControl)_.push($)
        }
        return _
    },
    get: function (_) {
        if (!_)return null;
        if (mini.isControl(_))return _;
        if (typeof _ == "string")if (_.charAt(0) == "#")_ = _.substr(1);
        if (typeof _ == "string")return mini.components[_]; else {
            var $ = mini.uids[_.uid];
            if ($ && $.el == _)return $
        }
        return null
    },
    getbyUID: function ($) {
        return mini.uids[$]
    },
    findControls: function (E, B) {
        if (!E)return [];
        B = B || mini;
        var $ = [], D = mini.uids;
        for (var A in D) {
            var _ = D[A], C = E[o1O0l0](B, _);
            if (C === true || C === 1) {
                $.push(_);
                if (C === 1)break
            }
        }
        return $
    },
    getChildControls: function (A) {
        var _ = A.el ? A.el : A, $ = mini.findControls(function ($) {
            if (!$.el || A == $)return false;
            if (Ol0O(_, $.el) && $[l1Oo0O])return true;
            return false
        });
        return $
    },
    emptyFn: function () {
    },
    createNameControls: function (A, F) {
        if (!A || !A.el)return;
        if (!F)F = "_";
        var C = A.el, $ = mini.findControls(function ($) {
            if (!$.el || !$.name)return false;
            if (Ol0O(C, $.el))return true;
            return false
        });
        for (var _ = 0, D = $.length; _ < D; _++) {
            var B = $[_], E = F + B.name;
            if (F === true)E = B.name[0].toUpperCase() + B.name.substring(1, B.name.length);
            A[E] = B
        }
    },
    getsbyName: function (D, _) {
        var C = mini.isControl(_), B = _;
        if (_ && C)_ = _.el;
        _ = o0OO(_);
        _ = _ || document.body;
        var $ = mini.findControls(function ($) {
            if (!$.el)return false;
            if ($.name == D && Ol0O(_, $.el))return true;
            return false
        }, this);
        if (C && $.length == 0 && B && B[O1looO]) {
            var A = B[O1looO](D);
            if (A)$.push(A)
        }
        return $
    },
    getbyName: function (_, $) {
        return mini.getsbyName(_, $)[0]
    },
    getParams: function (C) {
        if (!C)C = location.href;
        C = C.split("?")[1];
        var B = {};
        if (C) {
            var A = C.split("&");
            for (var _ = 0, D = A.length; _ < D; _++) {
                var $ = A[_].split("=");
                try {
                    B[$[0]] = decodeURIComponent(unescape($[1]))
                } catch (E) {
                }
            }
        }
        return B
    },
    reg: function ($) {
        this.components[$.id] = $;
        this.uids[$.uid] = $
    },
    unreg: function ($) {
        delete mini.components[$.id];
        delete mini.uids[$.uid]
    },
    classes: {},
    uiClasses: {},
    getClass: function ($) {
        if (!$)return null;
        return this.classes[$.toLowerCase()]
    },
    getClassByUICls: function ($) {
        return this.uiClasses[$.toLowerCase()]
    },
    idPre: "mini-",
    idIndex: 1,
    newId: function ($) {
        return ($ || this.idPre) + this.idIndex++
    },
    copyTo: function ($, A) {
        if ($ && A)for (var _ in A)$[_] = A[_];
        return $
    },
    copyIf: function ($, A) {
        if ($ && A)for (var _ in A)if (mini.isNull($[_]))$[_] = A[_];
        return $
    },
    createDelegate: function (_, $) {
        if (!_)return function () {
        };
        return function () {
            return _.apply($, arguments)
        }
    },
    isControl: function ($) {
        return !!($ && $.isControl)
    },
    isElement: function ($) {
        return $ && $.appendChild
    },
    isDate: function ($) {
        return !!($ && $.getFullYear)
    },
    isArray: function ($) {
        return !!($ && !!$.unshift)
    },
    isNull: function ($) {
        return $ === null || $ === undefined
    },
    isNumber: function ($) {
        return !isNaN($) && typeof $ == "number"
    },
    isEquals: function ($, _) {
        if ($ !== 0 && _ !== 0)if ((mini.isNull($) || $ == "") && (mini.isNull(_) || _ == ""))return true;
        if ($ && _ && $.getFullYear && _.getFullYear)return $[OOo0o1]() === _[OOo0o1]();
        if (typeof $ == "object" && typeof _ == "object")return $ === _;
        return String($) === String(_)
    },
    forEach: function (E, D, B) {
        var _ = E.clone();
        for (var A = 0, C = _.length; A < C; A++) {
            var $ = _[A];
            if (D[o1O0l0](B, $, A, E) === false)break
        }
    },
    sort: function (B, A, _) {
        _ = _ || B;
        function $(G, D) {
            var A = 0, _ = G.length, E, $;
            for (; A < _; A++)for (E = A; E < _; E++) {
                var C = G[A], F = G[E], B = D(C, F);
                if (B > 0) {
                    G.removeAt(E);
                    G.insert(A, F)
                }
            }
            return G
        }

        $(B, A)
    },
    elWarp: document.createElement("div")
};
if (typeof mini_debugger == "undefined")mini_debugger = true;
if (typeof mini_useShims == "undefined")mini_useShims = false;
loOOl = function (A, _) {
    _ = _.toLowerCase();
    if (!mini.classes[_]) {
        mini.classes[_] = A;
        A[O11Ol1].type = _
    }
    var $ = A[O11Ol1].uiCls;
    if (!mini.isNull($) && !mini.uiClasses[$])mini.uiClasses[$] = A
};
oo00 = function (E, A, $) {
    if (typeof A != "function")return this;
    var D = E, C = D.prototype, _ = A[O11Ol1];
    if (D[ollolO] == _)return;
    D[ollolO] = _;
    D[ollolO][OOlOl] = A;
    for (var B in _)C[B] = _[B];
    if ($)for (B in $)C[B] = $[B];
    return D
};
mini.copyTo(mini, {extend: oo00, regClass: loOOl, debug: false});
mini.namespace = function (A) {
    if (typeof A != "string")return;
    A = A.split(".");
    var D = window;
    for (var $ = 0, B = A.length; $ < B; $++) {
        var C = A[$], _ = D[C];
        if (!_)_ = D[C] = {};
        D = _
    }
};
l11lO = [];
O0o0o0 = function (_, $) {
    l11lO.push([_, $]);
    if (!mini._EventTimer)mini._EventTimer = setTimeout(function () {
        lO0l()
    }, 50)
};
lO0l = function () {
    for (var $ = 0, _ = l11lO.length; $ < _; $++) {
        var A = l11lO[$];
        A[0][o1O0l0](A[1])
    }
    l11lO = [];
    mini._EventTimer = null
};
l1lOo = function (C) {
    if (typeof C != "string")return null;
    var _ = C.split("."), D = null;
    for (var $ = 0, A = _.length; $ < A; $++) {
        var B = _[$];
        if (!D)D = window[B]; else D = D[B];
        if (!D)break
    }
    return D
};
mini._getMap = function (name, obj) {
    if (!name)return null;
    var index = name[o110ll](".");
    if (index == -1 && name[o110ll]("[") == -1)return obj[name];
    if (index == (name.length - 1))return obj[name];
    var s = "obj." + name;
    try {
        var v = eval(s)
    } catch (e) {
        return null
    }
    return v
};
mini._setMap = function (H, A, B) {
    if (!B)return;
    if (typeof H != "string")return;
    var E = H.split(".");

    function F(A, E, $, B) {
        var C = A[E];
        if (!C)C = A[E] = [];
        for (var _ = 0; _ <= $; _++) {
            var D = C[_];
            if (!D)if (B === null || B === undefined)D = C[_] = {}; else D = C[_] = B
        }
        return A[E][$]
    }

    var $ = null;
    for (var _ = 0, G = E.length; _ <= G - 1; _++) {
        var H = E[_];
        if (_ == G - 1) {
            if (H[o110ll]("]") == -1)B[H] = A; else {
                var C = H.split("["), D = C[0], I = parseInt(C[1]);
                F(B, D, I, "");
                B[D][I] = A
            }
            break
        }
        if (H[o110ll]("]") == -1) {
            $ = B[H];
            if (_ <= G - 2 && $ == null)B[H] = $ = {};
            B = $
        } else {
            C = H.split("["), D = C[0], I = parseInt(C[1]);
            B = F(B, D, I)
        }
    }
    return A
};
mini.getAndCreate = function ($) {
    if (!$)return null;
    if (typeof $ == "string")return mini.components[$];
    if (typeof $ == "object")if (mini.isControl($))return $; else if (mini.isElement($))return mini.uids[$.uid]; else return mini.create($);
    return null
};
mini.create = function ($) {
    if (!$)return null;
    if (mini.get($.id) === $)return $;
    var _ = this.getClass($.type);
    if (!_)return null;
    var A = new _();
    A[OO1O1l]($);
    return A
};
var o100ll = "getBottomVisibleColumns", oOllo = "setFrozenStartColumn", olO00 = "getFilterRowHeight", O0lo1l = "getAncestorColumns", lOo111 = "setFrozenEndColumn", lOOoo0 = "showFolderCheckBox", oOl0ll = "showCollapseButton", O1oO1 = "getMaxColumnLevel", l0OO11 = "requiredErrorText", o0O10 = "showExpandButtons", o110O = "allowResizeColumn", lOo110 = "frozenStartColumn", oo1O0 = "checkSelectOnLoad", O1o10 = "getBottomColumns", ooOl00 = "allowAlternating", olO0O = "isAncestorColumn", O011ol = "_createColumnId", Oo0O = "getHeaderHeight", Oolol = "getFooterHeight", l0ll = "isVisibleColumn", l1Ol1 = "getParentColumn", Ool11 = "unFrozenColumns", o0loO = "showCloseButton", ooo0o = "refreshOnExpand", o101O0 = "allowSortColumn", OoOO1l = "allowMoveColumn", OO11oo = "frozenEndColumn", loloo = "showAllCheckBox", O0lO = "allowCellSelect", oo0OOO = "isShowRowDetail", oO0llo = "getEditRowData", oloO10 = "getColumnWidth", O1OO0O = "refreshOnClick", l0lloo = "popupMinHeight", l00O0 = "popupMaxHeight", ooO1o = "enableHotTrack", lOO1o = "checkRecursive", olO0lo = "showHGridLines", Oo1lO = "showVGridLines", o0100l = "showSummaryRow", l1lO1o = "allowRowSelect", oOo011 = "setCurrentCell", oOoo0 = "setColumnWidth", lOoolO = "scrollIntoView", Oolo1 = "getRowDetailEl", olOo0l = "setValueField", lO0o1o = "_createItemId", lo0OOo = "_createCellId", l00l = "removeItemCls", OOl0 = "getRowByValue", oO0l1O = "cancelEditRow", O1O01O = "getCellEditor", l00oo = "getChildNodes", oo1Ol = "showMaxButton", l10lo0 = "showMinButton", O1O01 = "popupMinWidth", OO0lOl = "popupMaxWidth", l1O01o = "showTreeLines", o1l0O = "dragGroupName", ll1ooo = "dropGroupName", olOo11 = "showFilterRow", O1O1oo = "decimalPlaces", ooo011 = "allowCellEdit", oOllO0 = "beginEditCell", ooOol1 = "commitEditRow", llo1ll = "hideRowDetail", OO1ol0 = "showRowDetail", loollo = "removeNodeCls", lo10lo = "getParentNode", o1O1l1 = "findListener", l0111O = "isAutoHeight", ol010 = "_createRowId", OO01O0 = "getItemValue", Ol100O = "_ParseString", l11ol0 = "resultAsTree", lOlO1O = "resultAsData", o0lo0O = "defaultValue", Oolool = "checkOnClick", ol10Ol = "showTreeIcon", loOll0 = "autoCollapse", llOo01 = "showCheckBox", OlooO = "getColumnBox", lO10o1 = "removeRowCls", O010OO = "collapseNode", l1000l = "getAncestors", l0101 = "_createPopup", OOlOl = "constructor", lOo101 = "_initEvents", oOo110 = "isAutoWidth", OO101 = "getItemText", oOl1OO = "eachColumns", lol11 = "treeToArray", OOo10 = "deselectAll", l1lOO = "showToolbar", lO0oOO = "allowResize", O0O00o = "_rowIdField", o00o0 = "closeAction", o0oO = "parentField", O0l0lo = "borderStyle", o00O1o = "contextMenu", o0Oo10 = "popupHeight", lO1l1 = "allowSelect", looo01 = "handlerSize", O1ooO0 = "columnWidth", o1lOO = "tabPosition", O0o1ol = "multiSelect", O0lOo1 = "setSelected", o1lo1l = "getSelected", llol01 = "isFirstNode", OoOo0 = "removeClass", lOO11l = "getRegionEl", ollolO = "superclass", o0011o = "isReadOnly", Olo1o1 = "isSelected", OO10OO = "addItemCls", oOO1o = "isGrouping", lOo0l = "setVisible", oOOOOo = "selectText", l10lll = "getCellBox", o11l00 = "clearEvent", Olo01O = "_ParseBool", ol1oO = "_getColumn", l0l10o = "findParent", OOolO0 = "showFooter", oO1loO = "showShadow", O01oll = "valueField", o1Ooo = "titleField", l0ll1o = "popupWidth", ool1oo = "totalCount", l10ll = "setCurrent", oll100 = "removeNode", l1o010 = "moveColumn", O0OO0l = "cancelEdit", OOll0 = "setColumns", O11Oll = "expandNode", l1lloo = "addNodeCls", O11Ol1 = "prototype", ol0OoO = "removeCls", lOll1l = "setHeight", l0Ooo = "isDisplay", l0oO0 = "deselects", loo01 = "updateRow", ol1O01 = "showPopup", oOOl00 = "_ParseInt", o11lOl = "getHeight", lolo0l = "getColumn", ol00l0 = "showModal", o0oOOO = "emptyText", O1lO00 = "showEmpty", ll00 = "groupName", l1ol1O = "textField", oOOOoO = "errorMode", O110l = "iconStyle", lo00O0 = "pageIndex", O10Ol = "allowDrop", o0oO1 = "increment", OOlol1 = "addRowCls", oo01O = "removeRow", oOl0oo = "hidePopup", o0ol1l = "isEditing", ol0lo1 = "getRegion", O0oolo = "renderTo", l0llOO = "doLayout", l0loO0 = "doUpdate", oll0OO = "setWidth", ol1oOl = "getAttrs", lO1lo = "validate", ll10OO = "setValue", O0lo11 = "deselect", OOo10l = "loadData", O0O0oO = "isFrozen", llO1l = "getWidth", lOlo0 = "readOnly", Ol11o = "urlField", llllO = "pageSize", oO0101 = "sizeList", O11OOl = "tabAlign", oloool = "showBody", O1o1l = "minValue", oO1Oll = "maxValue", l0oolo = "isEquals", Oo1Olo = "addClass", lololl = "_create", ol0l0 = "setData", oo1o = "selects", oOo01o = "repaint", o11l = "getItem", Oll0l0 = "getNode", O00o0 = "idField", l0O0O0 = "setText", O1OO10 = "render", oll1o0 = "addCls", l1Oo0O = "within", lOol1O = "select", l1oOl = "getRow", oOo1O = "jsName", o1lloo = "setXY", o1O0l0 = "call", llo011 = "getLabelStyle", o000O = "setLabelStyle", o0oo00 = "getLabel", ll1Ool = "setLabel", o10O0O = "getLabelField", o1lO = "setLabelField", lolll = "_labelLayout", o1lol = "onValidation", looOOl = "onValueChanged", ll11oo = "doValueChanged", l1oOlO = "getErrorIconEl", oo11ol = "getRequiredErrorText", ll11ol = "setRequiredErrorText", l1OloO = "getRequired", l1OOl = "setRequired", o1oo1O = "getErrorText", llo10O = "setErrorText", o0l0ol = "getErrorMode", oo1l0l = "setErrorMode", ol0Oo = "getValidateOnLeave", oooo0o = "setValidateOnLeave", oo1l1o = "getValidateOnChanged", Oo0o0 = "setValidateOnChanged", OO1o1O = "getIsValid", ooOoO = "setIsValid", o0Ol0l = "isValid", llo100 = "_tryValidate", OoOOol = "isEditable", OO1l0 = "getIndentSpace", O0l00 = "setIndentSpace", l01oOo = "getRepeatDirection", lOoO1 = "setRepeatDirection", OOo0O = "getRepeatLayout", l1ll1 = "setRepeatLayout", Ol1olo = "getRepeatItems", oll110 = "setRepeatItems", l01lO = "getEnterQuery", l11ooO = "setEnterQuery", lo11OO = "doQuery", OOo1O0 = "_keydownQuery", llo00o = "getPopupErrorHtml", ool00 = "getPopupLoadingHtml", Oloolo = "getPopupEmptyHtml", o00o = "getLoadingText", oOlo0l = "setLoadingText", Oo1loo = "getPopupEmptyText", oll10o = "setPopupEmptyText", oOool = "getSearchField", lo1oO1 = "setSearchField", lll001 = "getMinChars", lO010l = "setMinChars", Oo1100 = "setUrl", ooloOl = "_initInput", O0llO0 = "blur", O1loo = "focus", Ol10O1 = "__doSelectValue", o0OOo = "getEmptyText", olol10 = "setEmptyText", lO0lO1 = "getValueFromSelect", ll1l00 = "setValueFromSelect", llO00O = "getPopupMaxHeight", oo00lo = "setPopupMaxHeight", OoOoll = "getPopupMinHeight", O1ool0 = "setPopupMinHeight", oO0OO0 = "getPopupHeight", lO10O = "setPopupHeight", oO0l10 = "getUrl", l0o0l0 = "getAllowInput", O0Ol0O = "setAllowInput", OOll0l = "getTextField", ooO1ll = "setTextField", OO11l1 = "getValueField", o00l0 = "setName", lOo01l = "getFormValue", o1oOl = "getValue", ooooO = "getText", l1loO0 = "getInputText", O0o11 = "removeItem", O1OOo = "insertItem", Ol1o0l = "_doInsertInputValue", lOoll = "showInput", oO10l = "blurItem", lOo0OO = "hoverItem", llolO = "getItemEl", lo11ll = "doReadOnly", l0lOl = "destroy", O0oOOl = "getTextName", lll1lO = "setTextName", OO1l10 = "_onDrawNodes", l1O0lo = "createNavBarMenu", OoOlO = "getImgPath", o01101 = "setImgPath", l10O1o = "_getOwnerMenu", lo0111 = "getList", looolO = "findNodes", O00O10 = "selectNode", o0Oll1 = "getParentField", lllOO1 = "setParentField", Oll1o = "getIdField", Ol0010 = "setIdField", o1O1O0 = "getNodesField", OoOOO = "setNodesField", Ol10lO = "getResultAsTree", oO0O1 = "setResultAsTree", Oloo0 = "getUrlField", l0lO01 = "setUrlField", O01l01 = "getIconField", lo1l10 = "setIconField", looOlo = "load", loOl00 = "loadList", OOl0Ol = "_doLoad", oO1o1l = "_doParseFields", lOlll0 = "_destroyTrees", OO1O1l = "set", OO0l0O = "getFormattedValue", o1011 = "getFormat", O10ll = "setFormat", lo1o1 = "_getButtonHtml", l1011 = "__OnDrawNode", O1OOl = "__OnNodeMouseDown", lO1l10 = "createNavBarTree", OOol0 = "_handlerTree", olOoO = "getExpandNodeOnLoad", O100o0 = "setExpandNodeOnLoad", O1l0oO = "getExpandOnNodeClick", Ol00Oo = "setExpandOnNodeClick", lo1lo = "getShowTreeIcon", l1O1o = "setShowTreeIcon", lo0o01 = "getShowArrow", l00ll0 = "setShowArrow", lO1101 = "getExpandOnLoad", lO100O = "setExpandOnLoad", Ol110o = "_getOwnerTree", oO0lol = "expandPath", l1OoOo = "isSelectedNode", ll1oO1 = "getData", olOo0 = "onPreLoad", OlO0l0 = "onLoadError", OO0llo = "onLoad", olOl10 = "onBeforeLoad", ool000 = "onItemMouseDown", l10OOl = "onItemClick", lo00Oo = "_OnItemMouseMove", l0010 = "_OnItemMouseOut", OOllol = "_OnItemClick", o0O00l = "_OnSelectionChanged", o1o0O1 = "clearSelect", oOl1oO = "selectAll", l0OoO0 = "getSelecteds", OoloOl = "getMultiSelect", Olol1o = "setMultiSelect", oo1OO = "moveItem", l01O11 = "removeItems", OO0l = "addItem", lOo0lO = "addItems", lo0OlO = "removeAll", OO11 = "findItems", l10000 = "updateItem", l11o1o = "getAt", o110ll = "indexOf", lO1lO1 = "getCount", O1l0lO = "getFocusedIndex", Oo1O0o = "getFocusedItem", loO1Oo = "getValueInCheckOrder", l1000o = "setValueInCheckOrder", lol1l = "bindForm", olO000 = "bindField", lOOo0 = "getAutoFilter", l0l0O = "setAutoFilter", o001l1 = "setAjaxType", oOl0O0 = "setAjaxData", lo111 = "getAutoCheckParent", l1oOoo = "setAutoCheckParent", OO0000 = "getShowRadioButton", ool01 = "setShowRadioButton", oll010 = "getShowFolderCheckBox", O0Oo = "setShowFolderCheckBox", o00l0l = "getShowTreeLines", lo1loO = "setShowTreeLines", o01Ol = "getCheckRecursive", oOll0l = "setCheckRecursive", llO0ll = "getDataField", O0lO0O = "setDataField", Ol11o0 = "getPinyinField", o0OloO = "setPinyinField", O01OlO = "getDefaultRowHeight", oooOo1 = "setDefaultRowHeight", l1000 = "getVirtualScroll", lOllO1 = "setVirtualScroll", l1oo1O = "_getCheckedValue", O00oO0 = "_eval", Oo0o = "getExpandOnPopup", OllOO = "setExpandOnPopup", O1000O = "getSelectedNodes", o0l01 = "getCheckedNodes", loo11O = "getSelectedNode", OOOoo0 = "getMinDateErrorText", lOo0O0 = "setMinDateErrorText", oOo1oO = "getMaxDateErrorText", lO010 = "setMaxDateErrorText", o1oOlo = "getMinDate", lll0l1 = "setMinDate", ooll01 = "getMaxDate", l0OOOO = "setMaxDate", o0llo = "getShowWeekNumber", Ol11lO = "setShowWeekNumber", l10111 = "getShowOkButton", lll0l = "setShowOkButton", l1O10l = "getShowClearButton", ll11Oo = "setShowClearButton", o01o10 = "getShowTodayButton", oOO01o = "setShowTodayButton", oOOOl = "getShowYesterdayButton", lo10OO = "setShowYesterdayButton", oO11l = "getTimeFormat", lloo01 = "setTimeFormat", oo0lO1 = "getShowTime", l1llOo = "setShowTime", Olll01 = "getViewDate", l1oOo = "setViewDate", O1O0o1 = "getNullValue", l1O11l = "setNullValue", oo0Ol0 = "getValueFormat", O1O0lO = "setValueFormat", ooOl = "__OnPopupClose", o001o1 = "_getCalendar", O1Oo = "__fileError", OllOlo = "__on_upload_complete", oOolo0 = "__on_upload_error", O1olo0 = "__on_upload_success", OO10o = "__on_file_queued", lol1lo = "__on_file_queued_error", lOlllO = "__on_upload_progress", olool0 = "clear", ooloOO = "getShowUploadProgress", OO0olo = "setShowUploadProgress", O1Olo = "startUpload", lOOO1l = "getUploadUrl", Oo1oOo = "setUploadUrl", lOolO = "setFlashUrl", o0ooo1 = "setQueueLimit", OllOl0 = "setUploadLimit", o1O10l = "getButtonText", OloOl = "setButtonText", o10ll = "getTypesDescription", OOloo = "setTypesDescription", ol0O1o = "getLimitType", l0ooo1 = "setLimitType", o1olo = "getPostParam", lOlOo1 = "setPostParam", ll1oO0 = "addPostParam", oOl01O = "setInputStyle", Oo1Oo0 = "getShowButton", OOO0lO = "setShowButton", o1Ool = "getShowClose", o0l11 = "setShowClose", ooo0o0 = "getSelectOnFocus", Ooo01o = "setSelectOnFocus", OlOlO0 = "onTextChanged", O0OO11 = "onButtonMouseDown", l11Ol = "onButtonClick", l1llll = "__fireBlur", OO0oo0 = "__doFocusCls", o001O1 = "_handlerButtonElClick", OllloO = "getAutoClear", o0o1lO = "setAutoClear", l0oO0o = "getInputAsValue", looO10 = "setInputAsValue", l11OOO = "_doReadOnly", ool1ll = "setEnabled", OoOo10 = "getMinLength", lol1O1 = "setMinLength", ll1oo0 = "getMaxLength", lOoO0l = "setMaxLength", l00o00 = "getTextEl", lO0ll0 = "_doInputLayout", o1Oo0l = "_getButtonsHTML", O0loOO = "_createButtonHtml", ll1o00 = "getButtonByName", o1O0OO = "getButtons", lOl0lo = "setButtons", l0l10O = "parseGroups", o00O00 = "expandGroup", Ol0011 = "collapseGroup", lO11l = "toggleGroup", oOo0O0 = "hideGroup", o011l0 = "showGroup", llOoO = "getActiveGroup", loolOl = "getActiveIndex", ol1Oo = "setActiveIndex", O0110 = "getAutoCollapse", O0O01l = "setAutoCollapse", oOOl1O = "getGroupBodyEl", O00l1o = "getGroupEl", OoolOl = "getGroup", OOl1o = "_getIconImg", O0Ol01 = "moveGroup", lO0lOO = "removeGroup", oooOl1 = "updateGroup", ooOlo = "addGroup", l0l01l = "getGroups", l1001l = "setGroups", l00oll = "createGroup", llOoOO = "setMenu", ooO00o = "getShowPopupOnClick", O1ooOo = "setShowPopupOnClick", Oll100 = "getPopupMinWidth", oO011o = "getPopupMaxWidth", lo1oO0 = "getPopupWidth", l110l = "setPopupMinWidth", ol11ol = "setPopupMaxWidth", o0llOl = "setPopupWidth", l0ooOl = "getAlwaysView", lo0lll = "setAlwaysView", oOO1O1 = "isShowPopup", l0O1l1 = "_doShowAtEl", lO11l0 = "_syncShowPopup", o0o011 = "__OnDocumentMousewheel", Ol100o = "_onDocumentMousewheel", o1110O = "_unDocumentMousewheel", oolOl = "getPopup", ll0OlO = "setPopup", o0O1Ol = "getId", ll1oo1 = "setId", l0o1lo = "un", Ol1oO1 = "on", ol1O0 = "fire", l0l0o0 = "__getMonthYear", o11lO0 = "__OnMenuDblClick", ol10Oo = "updateMenu", OOo11 = "hideMenu", o11lOO = "showMenu", olO110 = "_tryShowMenu", l0000l = "getColumns", O0ol0o = "getRows", lO0l1 = "setRows", o11Ooo = "isSelectedDate", OOo0o1 = "getTime", l0lol = "setTime", O11Oo1 = "getSelectedDate", lo1O11 = "setSelectedDates", ool10o = "setSelectedDate", l011OO = "getShowYearButtons", l0O0Oo = "setShowYearButtons", Oo0O1O = "getShowMonthButtons", l01Ol0 = "setShowMonthButtons", o1Oo11 = "getShowDaysHeader", llO1o = "setShowDaysHeader", oo1Ool = "getShowFooter", lo0l1 = "setShowFooter", lool1O = "getShowHeader", Ol0OlO = "setShowHeader", OllOO0 = "getDateEl", lo1Oo0 = "getShortWeek", ooO0l = "getFirstDateOfMonth", ol1o01 = "isWeekend", O0l01O = "__OnItemDrawCell", l00Oo = "getNullItemText", o0Ol01 = "setNullItemText", lOoool = "getShowNullItem", l01ll = "setShowNullItem", oOOO10 = "setDisplayField", Oooloo = "doDataChange", loll0l = "getClearOnLoad", ooo0Oo = "setClearOnLoad", oo11O0 = "getHandlerSize", oloo1l = "setHandlerSize", oOOllO = "getAllowResize", oOollo = "setAllowResize", o1l10 = "hidePane", l01O0o = "showPane", Ool01 = "togglePane", l1l00o = "collapsePane", o1OolO = "expandPane", oo100 = "getVertical", oo01OO = "setVertical", O1l0O = "getShowHandleButton", o1ol00 = "setShowHandleButton", lOll1O = "updatePane", OO0lO1 = "getPaneEl", Ol0lll = "setPaneControls", O100l1 = "setPanes", OOoll1 = "getPane", olol11 = "getPaneBox", oOO10l = "onCheckedChanged", oO1oO = "onClick", o0oOO1 = "getTopMenu", O1ll1 = "hide", O00l10 = "getMenu", oOlO0o = "setChildren", oo0o0 = "getGroupName", O01l11 = "setGroupName", l01OoO = "getChecked", lOoooO = "setChecked", loO1l0 = "getCheckOnClick", loo0Ol = "setCheckOnClick", l101l1 = "getIconPosition", OO1Olo = "setIconPosition", o01OO = "getIconStyle", oOOOl0 = "setIconStyle", o0lO00 = "getImg", ooOO00 = "setImg", lol0o = "getIconCls", OO1loO = "setIconCls", lO1O11 = "_hasChildMenu", OOl01o = "_doUpdateIcon", OOooO0 = "_set_autoCreateNewID", l1Ooll = "_set_originalIdField", o0oOl = "_set_clearOriginals", o11OlO = "_set_originals", llO100 = "_get_originals", Ol100 = "getHeaderContextMenu", OlOol0 = "setHeaderContextMenu", lloO1O = "_beforeOpenContentMenu", olll0 = "getGroupTitleCollapsible", oolOoo = "setGroupTitleCollapsible", l000Ol = "getDropAction", lO0ol1 = "setDropAction", o1l001 = "setPagerCls", llll00 = "setPagerStyle", l0lo1O = "getShowTotalCount", o1loO = "setShowTotalCount", o0ool0 = "getShowPageIndex", O01000 = "setShowPageIndex", l011oO = "getShowPageSize", o10Olo = "setShowPageSize", l10O0 = "getSizeList", ll0o1 = "setSizeList", loo10l = "getShowPageInfo", lO0o0O = "setShowPageInfo", o0lOO1 = "getShowReloadButton", lOll10 = "setShowReloadButton", olO1lO = "getShowPagerButtonIcon", Ololll = "setShowPagerButtonIcon", oOOo01 = "getShowPagerButtonText", lll0lo = "setShowPagerButtonText", Ool0l = "getSizeText", lll01o = "setSizeText", oOOO11 = "getPageSizeWidth", l1O0O0 = "setPageSizeWidth", lloOO0 = "getStackTraceField", OOoO1o = "setStackTraceField", OO11lo = "getErrorMsgField", l0loOO = "setErrorMsgField", O1O0O = "getErrorField", lOOO10 = "setErrorField", l01Olo = "getTotalField", O01O1o = "setTotalField", lo110O = "getSortOrderField", o1l0l = "setSortOrderField", o0loo = "getSortFieldField", OoollO = "setSortFieldField", o1111 = "getLimitField", l1lll0 = "setLimitField", O0010o = "getStartField", OoOl = "setStartField", OllOOO = "getPageSizeField", OloOo1 = "setPageSizeField", oo0l1 = "getPageIndexField", l0loO1 = "setPageIndexField", Olo1ol = "getSortOrder", Ol01O0 = "setSortOrder", l1lOoo = "getSortField", lllolO = "setSortField", oo011l = "getTotalPage", lloO00 = "getTotalCount", oloo1o = "setTotalCount", O0loO0 = "getPageSize", Ol0loO = "setPageSize", Oooo1O = "getPageIndex", ll10ll = "setPageIndex", loO01o = "getSortMode", lO11OO = "setSortMode", l110oO = "getSelectOnLoad", Ol001O = "setSelectOnLoad", olooOl = "getCheckSelectOnLoad", lo01oo = "setCheckSelectOnLoad", o11Oll = "getShowCellTip", Ol0o1O = "setShowCellTip", llO1lO = "sortBy", lo10ol = "gotoPage", Olllo1 = "reload", O0lOl0 = "getAutoLoad", l1ol1o = "setAutoLoad", Ol1o1O = "getAjaxOptions", lOllOl = "setAjaxOptions", o0O0oO = "getAjaxType", ooO00 = "getAjaxMethod", l11lo1 = "setAjaxMethod", loo101 = "getAjaxAsync", lo1ooO = "setAjaxAsync", o0oloo = "moveDown", O1oool = "moveUp", loOo10 = "isAllowDrag", olO0oO = "getAllowDrop", o1o0ll = "setAllowDrop", OO011o = "getAllowDrag", o1111l = "setAllowDrag", oloo0 = "getAllowLeafDropIn", oO101l = "setAllowLeafDropIn", OOl1l0 = "_getDragText", o1ll0l = "_getDragData", O1lo0O = "_getAnchorCell", o00o10 = "_isCellVisible", Oo10OO = "margeCells", O1lO1O = "mergeCells", lo1ll1 = "mergeColumns", o1loO1 = "getAutoHideRowDetail", ol0Olo = "setAutoHideRowDetail", o0ol0O = "getRowDetailCellEl", o1lO1l = "_getRowDetailEl", oo0O1l = "toggleRowDetail", OOlo0l = "hideAllRowDetail", O0Ool1 = "showAllRowDetail", o0l1o = "expandRowGroup", OoOoOO = "collapseRowGroup", o1Olo0 = "toggleRowGroup", Oloo10 = "expandGroups", O01o = "collapseGroups", lo0110 = "getEditData", OOo10O = "getEditingRow", o0O1OO = "getEditingRows", l10o01 = "isNewRow", OO0Oo0 = "isEditingRow", oo101O = "beginEditRow", ol100o = "getEditorOwnerRow", lOOo10 = "_beginEditNextCell", oOOoOo = "isCellCanEdit", l1Olo1 = "getSkipReadOnlyCell", oOoo0l = "setSkipReadOnlyCell", ol101l = "_setEdiorBox", ooOOO0 = "_getEditingControl", ll0100 = "commitEdit", OO100l = "isEditingCell", O011o1 = "getCurrentCell", lOlool = "getCreateOnEnter", lo1o0o = "setCreateOnEnter", O00l01 = "getEditOnTabKey", l0ooOO = "setEditOnTabKey", lOO0Ol = "getEditNextOnEnterKey", l1ooo = "setEditNextOnEnterKey", o0o1O0 = "getEditNextRowCell", ol1OlO = "setEditNextRowCell", oOlO0O = "getShowColumnsMenu", O11l10 = "setShowColumnsMenu", Oll000 = "getAllowMoveColumn", l1O010 = "setAllowMoveColumn", O010o1 = "getAllowSortColumn", lO0O10 = "setAllowSortColumn", lo0oOl = "getAllowResizeColumn", lOllO0 = "setAllowResizeColumn", loOool = "getAllowCellValid", Oo0oO0 = "setAllowCellValid", lo1010 = "getCellEditAction", OloOlo = "setCellEditAction", Ol1ol = "getAllowCellEdit", llO1ol = "setAllowCellEdit", OOl1Oo = "getAllowCellSelect", oO0OOl = "setAllowCellSelect", OoO1l0 = "getAllowRowSelect", ll1olO = "setAllowRowSelect", ll1oo = "getAllowUnselect", l1lO10 = "setAllowUnselect", O1loll = "getOnlyCheckSelection", Ooo01 = "setOnlyCheckSelection", o0OoOo = "getAllowHotTrackOut", OlOO0l = "setAllowHotTrackOut", oolOO = "getEnableHotTrack", Oo1110 = "setEnableHotTrack", looOll = "getShowLoading", lo11l = "setShowLoading", Ol0olO = "focusRow", l0oo0O = "_tryFocus", O0Ol00 = "_doRowSelect", l100OO = "getRowBox", o1OO0O = "_getRowByID", O1ol1O = "getCellFromEvent", l0110l = "getColumnByEvent", loo0o1 = "_getRecordByEvent", oo0o1o = "getRecordByEvent", o1oOO0 = "getCellEl", l1oO1l = "_getRowGroupRowsEl", OOOOO0 = "_getRowGroupEl", lll11o = "_doMoveRowEl", ol0lll = "_doRemoveRowEl", OOlo10 = "_doAddRowEl", O1oO0o = "_doUpdateRowEl", olo01 = "unbindPager", Oo1l0l = "bindPager", Oo0l1o = "setPager", O0oo1o = "setPagerButtons", o0011l = "_updatePagesInfo", l1l0ll = "__OnPageInfoChanged", lO0lOl = "__OnSelectionChanged", Ool1 = "__OnSourceMove", loll10 = "__OnSourceRemove", ooo01O = "__OnSourceUpdate", l0oo0 = "__OnSourceAdd", l01oo0 = "__OnSourceFilter", oo11Ol = "__OnSourceSort", Ol1Oll = "__OnSourceLoadError", Ol1lO1 = "__OnSourceLoadSuccess", OO0Ol1 = "__OnSourcePreLoad", oo0010 = "__OnSourceBeforeLoad", l10loO = "_initData", lOl01 = "_OnDrawCell", o1ll11 = "_destroyEditors", OO1olO = "getFalseValue", O1l1Oo = "setFalseValue", olOoo0 = "getTrueValue", Oolo11 = "setTrueValue", oOo01l = "getImgField", Oo0loO = "setImgField", ollOol = "disableNode", l1oolo = "enableNode", OlOOlo = "showNode", OOol0l = "hideNode", l0oll0 = "getLoadOnExpand", lO110o = "setLoadOnExpand", OlllO = "getExpandOnDblClick", l0ll0o = "getFolderIcon", Ol111o = "setFolderIcon", O1O011 = "getLeafIcon", O1Oll1 = "setLeafIcon", Oo11l1 = "getShowExpandButtons", O0OOoO = "setShowExpandButtons", Ol1OOl = "getAllowSelect", OOlool = "setAllowSelect", O0ll11 = "setNodeIconCls", l101l0 = "setNodeText", o0110O = "__OnNodeDblClick", o1oO1l = "_OnCellClick", lO0O00 = "_OnCellMouseDown", O00Ooo = "_tryToggleNode", oOOOlO = "_tryToggleCheckNode", O0o110 = "__OnCheckChanged", loo0oO = "_doCheckNodeEl", O1ool = "_doExpandCollapseNode", Ol0llo = "_getNodeIcon", o11OO = "getIconsField", o10OOo = "setIconsField", Ol0lOo = "getCheckBoxType", olOO0O = "setCheckBoxType", ollO00 = "getShowCheckBox", o001oo = "setShowCheckBox", OOo0lo = "getTreeColumn", o10Oo0 = "setTreeColumn", o1oOOo = "_getNodesTr", lo1l0l = "_getNodeEl", O011l0 = "_createRowsHTML", Ollo0O = "_createNodesHTML", Ollllo = "_createNodeHTML", lO100o = "_renderCheckState", O1Oo10 = "_createTreeColumn", Ooo1ol = "isInLastNode", OO0OOl = "_isInViewLastNode", l11oOo = "_isViewLastNode", O0l0ol = "_isViewFirstNode", lo1000 = "_createDrawCellEvent", OOl0O0 = "_doUpdateTreeNodeEl", OOo0Ol = "_doMoveNodeEl", lo11oO = "_doRemoveNodeEl", lloolo = "_doAddNodeEl", O01loo = "__OnSourceMoveNode", oO0O0o = "__OnSourceRemoveNode", Oo1OOO = "__OnSourceAddNode", lo00OO = "_virtualUpdate", loO01l = "__OnLoadNode", O11o00 = "__OnBeforeLoadNode", oooo1 = "_createSource", l0lll0 = "isEditingNode", l1O1l1 = "getAllowLoopValue", l0lOoO = "setAllowLoopValue", oOoo1O = "getFormatValue", lO11oo = "getAllowNull", ll1O0o = "setAllowNull", ooO1O = "getAllowLimitValue", OllOo1 = "setAllowLimitValue", lolOOO = "getChangeOnMousewheel", ooo0ol = "setChangeOnMousewheel", Oo0010 = "getDecimalPlaces", O1l1l1 = "setDecimalPlaces", olo1lo = "getIncrement", O0oO10 = "setIncrement", loOolO = "getMinValue", O0O0O = "setMinValue", OOO0oO = "getMaxValue", o0l11o = "setMaxValue", ol01l = "getShowAllCheckBox", l0OO00 = "setShowAllCheckBox", llloOO = "getRangeErrorText", llO0O0 = "setRangeErrorText", lOOOlO = "getRangeCharErrorText", l1olll = "setRangeCharErrorText", looo0 = "getRangeLengthErrorText", Ol0oOo = "setRangeLengthErrorText", O0OO00 = "getMinErrorText", OOO0o1 = "setMinErrorText", O1O0O0 = "getMaxErrorText", o001ol = "setMaxErrorText", oll1l1 = "getMinLengthErrorText", l1lll1 = "setMinLengthErrorText", oOo1l0 = "getMaxLengthErrorText", loloOo = "setMaxLengthErrorText", O1Ooo1 = "getDateErrorText", ol1oOO = "setDateErrorText", o0l0O1 = "getIntErrorText", Oo01O0 = "setIntErrorText", lll010 = "getFloatErrorText", OllO1l = "setFloatErrorText", O01Ooo = "getUrlErrorText", Oo0l0o = "setUrlErrorText", oO0o00 = "getEmailErrorText", l1Ool1 = "setEmailErrorText", l0Ol1l = "getVtype", llO1ll = "setVtype", l0ol11 = "setReadOnly", o00llo = "__OnPaste", O1o11l = "__OnDataSelectionChanged", olo11l = "clearData", ol1l0l = "addLink", llo10o = "add", O11o0o = "getTabIndex", O1110o = "setTabIndex", OOoo1l = "getAjaxData", o1o00 = "getDefaultValue", o10lO1 = "setDefaultValue", l1Oo00 = "getContextMenu", OO0O11 = "setContextMenu", l11o11 = "getLoadingMsg", l10o1l = "setLoadingMsg", Ool0o = "loading", oolo1o = "unmask", lOO0O0 = "mask", lo10Oo = "getAllowAnim", o11Oo = "setAllowAnim", Olo110 = "_destroyChildren", loO010 = "layoutChanged", Ooo1oo = "canLayout", O1OOoO = "endUpdate", lo0l0o = "beginUpdate", l000ll = "show", OO1lO0 = "getVisible", l0o01l = "disable", o0olOl = "enable", OooOO0 = "getEnabled", llo0lo = "getParent", ooOl1O = "getReadOnly", O10ll1 = "getCls", l010OO = "setCls", o1loo1 = "getStyle", Oo1oll = "setStyle", O1l01o = "getBorderStyle", OooOOO = "setBorderStyle", l0O1l0 = "getBox", Ol1o10 = "_sizeChanged", OolOll = "getTooltip", O1ollo = "setTooltip", oO10OO = "getJsName", O0o0l0 = "setJsName", O0ol01 = "getEl", oo1Ooo = "isRender", O1l1ll = "isFixedSize", Ol0o1 = "getName", olO00o = "__OnShowPopup", lolooo = "__OnGridRowClickChanged", looOO0 = "getGrid", o00O0o = "setGrid", O0ll1o = "showAtEl", ool1Ol = "getAllowCrossBottom", Oo1101 = "setAllowCrossBottom", O0oOl = "getEnableDragProxy", loOOll = "setEnableDragProxy", lOOOo1 = "showAtPos", o11o00 = "getShowInBody", OOoloo = "setShowInBody", Oo0oO = "restore", O0OOO = "max", O00OlO = "getShowMinButton", o1O0l1 = "setShowMinButton", lo0oO0 = "getShowMaxButton", ol0ooO = "setShowMaxButton", Oo11l0 = "getMaxHeight", l1o0O = "setMaxHeight", O0l01o = "getMaxWidth", O0Olo0 = "setMaxWidth", lloo1l = "getMinHeight", lo111o = "setMinHeight", Ol0ol1 = "getMinWidth", o0O1l0 = "setMinWidth", O1lolo = "getShowModal", l011Oo = "setShowModal", lO1oo1 = "getParentBox", Oo1lo0 = "doClick", l0101o = "getPlain", O000lo = "setPlain", l010Oo = "getTarget", llo1o0 = "setTarget", o1O0O1 = "getHref", ool01l = "setHref", OlO0lO = "isVisibleRegion", Oo00oo = "isExpandRegion", Oloo0O = "hideRegion", ololoo = "showRegion", O1O1oO = "toggleRegion", OOolo0 = "collapseRegion", o10oo0 = "expandRegion", ll1lOo = "updateRegion", lolO00 = "moveRegion", ol10lO = "removeRegion", OOllo0 = "addRegion", Oll00o = "setRegions", Oll1ll = "setRegionControls", OlO0ll = "getRegionBox", O1ll0o = "getRegionProxyEl", O0O1O0 = "getRegionSplitEl", o0lOl0 = "getRegionBodyEl", OOOl01 = "getRegionHeaderEl", OoOo01 = "getCollapseOnTitleClick", O001ol = "setCollapseOnTitleClick", lolool = "expand", lO0o11 = "collapse", llo0o1 = "toggle", lOlllo = "getExpanded", O0l1o1 = "setExpanded", oollol = "getLoadOnRefresh", OOoo00 = "setLoadOnRefresh", loOO1O = "getMaskOnLoad", ol1l1l = "setMaskOnLoad", O00lOO = "getRefreshOnExpand", oo1O10 = "setRefreshOnExpand", OOlO1 = "getClearTimeStamp", oo010O = "setClearTimeStamp", o01o11 = "getIFrameEl", lOl010 = "getFooterEl", ooOooo = "getBodyEl", lO10o0 = "getToolbarEl", Oll001 = "getHeaderEl", l1oooO = "setFooter", looOo1 = "setToolbar", o1l11l = "set_bodyParent", ooo11o = "setBody", oloO0 = "getButton", ooo1o0 = "removeButton", l0lo1l = "updateButton", oo0lO0 = "addButton", OolOo0 = "createButton", o10O1 = "getShowToolbar", oO1l1O = "setShowToolbar", Ol1o0O = "getShowCollapseButton", olloO0 = "setShowCollapseButton", l1ll00 = "getCloseAction", o0oO1l = "setCloseAction", l00101 = "getShowCloseButton", OOo010 = "setShowCloseButton", l1lOO1 = "_doTools", l0lOlO = "getTitle", oO00lO = "setTitle", o10oOl = "_doTitle", OlooO0 = "getFooterCls", Oo0ol0 = "setFooterCls", oo0o0O = "getToolbarCls", ooO00O = "setToolbarCls", O0011O = "getBodyCls", Oo0O00 = "setBodyCls", O00o0l = "getHeaderCls", OOl0oO = "setHeaderCls", O1lOo1 = "getFooterStyle", o1lOO0 = "setFooterStyle", OlOool = "getToolbarStyle", o1l01l = "setToolbarStyle", ll00OO = "getBodyStyle", o10O1l = "setBodyStyle", l10l01 = "getHeaderStyle", l01ooo = "setHeaderStyle", OOOOll = "getToolbarHeight", O0oo1O = "getBodyHeight", o0oo10 = "getViewportHeight", llOoll = "getViewportWidth", ll0o0l = "_stopLayout", O0o0o1 = "deferLayout", o0l0lO = "_doVisibleEls", ol0l11 = "onPageChanged", lOOl1o = "update", l1olOl = "getShowButtonIcon", llllOl = "setShowButtonIcon", lll1lo = "getShowButtonText", oll1ol = "setShowButtonText", oOo0Ol = "getButtonsEl", O01100 = "parseItems", o01oOo = "_startScrollMove", ollO01 = "_getMaxScrollLeft", llO0l0 = "_getScrollWidth", l01olo = "__OnBottomMouseDown", l0Olo0 = "__OnTopMouseDown", ol00Oo = "onItemSelect", oOoO0 = "_OnItemSelect", oO000l = "getHideOnClick", oloO0O = "setHideOnClick", O11o1O = "getOverflow", o11lO1 = "setOverflow", lOollO = "getShowNavArrow", o0ol01 = "setShowNavArrow", l01l10 = "getSelectedItem", OlO0o1 = "setSelectedItem", oO0O01 = "getAllowSelectItem", oO1100 = "setAllowSelectItem", l01lll = "getGroupItems", Oo0O0o = "removeItemAt", lo00l1 = "getItems", oo1l0o = "setItems", o0o0l1 = "hasShowItemMenu", O111l1 = "showItemMenu", o01oO0 = "hideItems", O0OOlo = "isVertical", O1looO = "getbyName", oooO00 = "onActiveChanged", l00O01 = "onCloseClick", oO1110 = "onBeforeCloseClick", o1l1O0 = "getTabByEvent", ll1OOl = "getShowNavMenu", ooOO11 = "setShowNavMenu", lOO1l1 = "getArrowPosition", OoOoO0 = "setArrowPosition", oOol11 = "getShowBody", lo0o11 = "setShowBody", l1OOoO = "getActiveTab", lO1l0o = "activeTab", o100lO = "_scrollToTab", Ool1oo = "getTabIFrameEl", oOo1l = "getTabBodyEl", o0OlOl = "getTabEl", l11OlO = "getTab", olo0l0 = "getAllowClickWrap", lO0OO1 = "setAllowClickWrap", lllOoO = "setTabPosition", olOOll = "setTabAlign", lo001o = "_doMenuSelectTab", l0111o = "_setHeaderMenuItems", olllO1 = "_createHeaderMenu", OO0ooO = "_getTabBy_Id", O1O0O1 = "_handleIFrameOverflow", oo0110 = "getTabRows", oO011O = "reloadTab", O1lOoo = "loadTab", ll0OO0 = "_getTabEvent", oOo0l1 = "_cancelLoadTabs", o0O10l = "updateTab", Ol0oO1 = "moveTab", oOoo00 = "removeTab", loOoO0 = "addTab", o00l01 = "getTabs", o100Ol = "setTabs", Oo00ol = "setTabControls", O0l1oO = "getTitleField", oO1o01 = "setTitleField", OO0OlO = "getNameField", O1101o = "setNameField", oo1O0O = "createTab", OOool1 = "beginEdit", O01ooo = "_getRowHeight";
OoO11l = function () {
    this.ol1oo = {};
    this.uid = mini.newId(this.OO0O00);
    this._id = this.uid;
    if (!this.id)this.id = this.uid;
    mini.reg(this)
};
OoO11l[O11Ol1] = {isControl: true, id: null, OO0O00: "mini-", oO110: false, o0ooO: true};
l1llO = OoO11l[O11Ol1];
l1llO[l0lOl] = l1loO;
l1llO[o0O1Ol] = OO1lO;
l1llO[ll1oo1] = loO0l;
l1llO[o1O1l1] = o00Ol;
l1llO[l0o1lo] = O0010;
l1llO[Ol1oO1] = Oo1Oo;
l1llO[ol1O0] = lOlOo;
l1llO[OO1O1l] = l111O;
oo0OO1 = function ($) {
    oo0OO1[ollolO][OOlOl].apply(this, arguments);
    this[lololl]();
    this.el.uid = this.uid;
    this[lOo101]();
    if (this._clearBorder)this.el.style.borderWidth = "0";
    this[oll1o0](this.uiCls);
    this[oll0OO](this.width);
    this[lOll1l](this.height);
    this.el.style.display = this.visible ? this.OoOoo1 : "none";
    if ($)mini.applyTo[o1O0l0](this, $)
};
oo00(oo0OO1, OoO11l, {
    jsName: null,
    width: "",
    height: "",
    visible: true,
    readOnly: false,
    enabled: true,
    tooltip: "",
    O00Ol: "mini-readonly",
    Oloo: "mini-disabled",
    name: "",
    _clearBorder: true,
    OoOoo1: "",
    Olol: true,
    allowAnim: true,
    oo1o0l: "mini-mask-loading",
    loadingMsg: "Loading...",
    contextMenu: null,
    ajaxData: null,
    ajaxType: "",
    dataField: "",
    tabIndex: 0
});
Olo0O = oo0OO1[O11Ol1];
Olo0O[ol1oOl] = O00l;
Olo0O[O11o0o] = o111l;
Olo0O[O1110o] = Ooollo;
Olo0O[llO0ll] = o011ll;
Olo0O[O0lO0O] = Oo00o;
Olo0O.Olo10l = O1Oo0;
Olo0O[o0O0oO] = ll0l;
Olo0O[o001l1] = o1O01;
Olo0O[OOoo1l] = O1ooo;
Olo0O[oOl0O0] = lo00O;
Olo0O[o1oOl] = O0ooO;
Olo0O[ll10OO] = olO0o;
Olo0O[o1o00] = o0l00O;
Olo0O[o10lO1] = lOl0oo;
Olo0O[l1Oo00] = O01O1;
Olo0O[OO0O11] = lllO0;
Olo0O.O101 = loOO1;
Olo0O.Ooo0 = oloOo;
Olo0O[l11o11] = lll00O;
Olo0O[l10o1l] = l1lol;
Olo0O[Ool0o] = lo11o;
Olo0O[oolo1o] = oOo0l;
Olo0O[lOO0O0] = ol1O;
Olo0O.O010Ol = oOoo;
Olo0O[lo10Oo] = OOo1l1;
Olo0O[o11Oo] = lOolO1;
Olo0O[O0llO0] = OOO1O;
Olo0O[O1loo] = o1O0;
Olo0O[l0lOl] = lOO0o;
Olo0O[Olo110] = o1l1;
Olo0O[loO010] = lo0oO;
Olo0O[l0llOO] = loOO;
Olo0O[Ooo1oo] = oOo0Oo;
Olo0O[l0loO0] = lOol1;
Olo0O[O1OOoO] = O1o0o;
Olo0O[lo0l0o] = o0l10;
Olo0O[l0Ooo] = oo101o;
Olo0O[O1ll1] = o0OO0o;
Olo0O[l000ll] = olo1o;
Olo0O[OO1lO0] = lO1O1;
Olo0O[lOo0l] = ol0ll;
Olo0O[l0o01l] = O0o0l;
Olo0O[o0olOl] = oOlO;
Olo0O[OooOO0] = lO0OO;
Olo0O[ool1ll] = o1l01O;
Olo0O[o0011o] = lOl1;
Olo0O[llo0lo] = l1o0;
Olo0O[ooOl1O] = o1lll;
Olo0O[l0ol11] = Ooll0;
Olo0O[l11OOO] = O10l0;
Olo0O[ol0OoO] = ol01o;
Olo0O[oll1o0] = olooo;
Olo0O[O10ll1] = llo10;
Olo0O[l010OO] = l0o1ll;
Olo0O[o1loo1] = OlloO;
Olo0O[Oo1oll] = OO00oo;
Olo0O[O1l01o] = oO01l;
Olo0O[OooOOO] = lO101;
Olo0O[l0O1l0] = lOoOl;
Olo0O[o11lOl] = olOoo;
Olo0O[lOll1l] = OloOOo;
Olo0O[llO1l] = l1l1lo;
Olo0O[oll0OO] = o0lo;
Olo0O[Ol1o10] = llO0O;
Olo0O[OolOll] = O10O1;
Olo0O[O1ollo] = lOll1;
Olo0O[oO10OO] = loOo;
Olo0O[O0o0l0] = oO10O;
Olo0O[O0ol01] = ooOoo0;
Olo0O[O1OO10] = l0OlO0;
Olo0O[oo1Ooo] = Oo01oO;
Olo0O[O1l1ll] = o1o0;
Olo0O[oOo110] = lO1oo;
Olo0O[l0111O] = loo0l;
Olo0O[Ol0o1] = oOOlO0;
Olo0O[o00l0] = O0ol0;
Olo0O[l1Oo0O] = lo0O;
Olo0O[lOo101] = OlO0;
Olo0O[lololl] = Ooo0O;
mini._attrs = null;
mini.regHtmlAttr = function (_, $) {
    if (!_)return;
    if (!$)$ = "string";
    if (!mini._attrs)mini._attrs = [];
    mini._attrs.push([_, $])
};
__mini_setControls = function ($, B, C) {
    B = B || this._contentEl;
    C = C || this;
    if (!$)$ = [];
    if (!mini.isArray($))$ = [$];
    for (var _ = 0, D = $.length; _ < D; _++) {
        var A = $[_];
        if (typeof A == "string") {
            if (A[o110ll]("#") == 0)A = o0OO(A)
        } else if (mini.isElement(A)); else {
            A = mini.getAndCreate(A);
            A = A.el
        }
        if (!A)continue;
        mini.append(B, A)
    }
    mini.parse(B);
    C[l0llOO]();
    return C
};
mini.Container = function () {
    mini.Container[ollolO][OOlOl].apply(this, arguments);
    if (!this._contentEl)this._contentEl = this.el
};
oo00(mini.Container, oo0OO1, {
    setControls: __mini_setControls, getContentEl: function () {
        return this._contentEl
    }, getBodyEl: function () {
        return this._contentEl
    }, within: function (C) {
        if (Ol0O(this.el, C.target))return true;
        var $ = mini.getChildControls(this);
        for (var _ = 0, B = $.length; _ < B; _++) {
            var A = $[_];
            if (A[l1Oo0O](C))return true
        }
        return false
    }
});
Ool1O1 = function () {
    Ool1O1[ollolO][OOlOl].apply(this, arguments)
};
oo00(Ool1O1, oo0OO1, {
    required: false,
    requiredErrorText: "This field is required.",
    oo11O: "mini-required",
    errorText: "",
    O0l00l: "mini-error",
    ol01O: "mini-invalid",
    errorMode: "icon",
    validateOnChanged: true,
    validateOnLeave: true,
    llO1: true,
    indentSpace: false,
    _indentCls: "mini-indent",
    errorIconEl: null,
    errorTooltipPlacement: "right",
    _labelFieldCls: "mini-labelfield",
    labelField: false,
    label: "",
    labelStyle: ""
});
OlO11 = Ool1O1[O11Ol1];
OlO11[llo011] = o1O10;
OlO11[o000O] = lOl00;
OlO11[o0oo00] = Oo00O;
OlO11[ll1Ool] = l0OOO;
OlO11[o10O0O] = Oo00OField;
OlO11[o1lO] = l0OOOField;
OlO11[lolll] = Ooo1l;
OlO11[ol1oOl] = lOO01;
OlO11[o1lol] = OO0o1;
OlO11[looOOl] = O1O1O;
OlO11.OOoOO = oOolo;
OlO11[ll11oo] = lO1ol;
OlO11.O000ol = o01l0;
OlO11.olOOO = o1O1l;
OlO11.Ol10 = oOol1;
OlO11[l1oOlO] = loool;
OlO11[oo11ol] = llOl0;
OlO11[ll11ol] = o1lO0;
OlO11[l1OloO] = l10O1;
OlO11[l1OOl] = O1l01;
OlO11[o1oo1O] = ll01O;
OlO11[llo10O] = o11lo;
OlO11[o0l0ol] = olOO1;
OlO11[oo1l0l] = o0o10;
OlO11[ol0Oo] = ll00o;
OlO11[oooo0o] = loo00;
OlO11[oo1l1o] = ooOl1;
OlO11[Oo0o0] = o1loo;
OlO11[OO1o1O] = ll0o0;
OlO11[ooOoO] = O0OO1;
OlO11[o0Ol0l] = o0O01;
OlO11[lO1lo] = Ooll1;
OlO11[llo100] = oOO00;
OlO11[OoOOol] = ll11o;
OlO11[OO1l0] = O01o1;
OlO11[O0l00] = olool;
Ol11ol = function ($) {
    this.data = [];
    this.O1l1oo = [];
    Ol11ol[ollolO][OOlOl][o1O0l0](this, null);
    this[l0loO0]();
    if ($)mini.applyTo[o1O0l0](this, $)
};
Ol11ol.ajaxType = "get";
oo00(Ol11ol, Ool1O1, {
    defaultValue: "",
    value: "",
    valueField: "id",
    textField: "text",
    dataField: "",
    delimiter: ",",
    data: null,
    url: "",
    valueInCheckOrder: true,
    oooll1: "mini-list-item",
    o10OO: "mini-list-item-hover",
    _oolol0: "mini-list-item-selected",
    uiCls: "mini-list",
    name: "",
    O0O1: null,
    ajaxData: null,
    l0l01: null,
    O1l1oo: [],
    multiSelect: false,
    lo10: true
});
ol110 = Ol11ol[O11Ol1];
ol110[ol1oOl] = oO1ll;
ol110[olOo0] = OlO1O;
ol110[OlO0l0] = oO0Oo;
ol110[OO0llo] = ol001;
ol110[olOl10] = oOOO1;
ol110[ool000] = o1010;
ol110[l10OOl] = o011O;
ol110[lo00Oo] = l1O00;
ol110[l0010] = oOO11;
ol110[OOllol] = lO1Ol;
ol110.o1ol1l = O001l;
ol110.l111lO = OO0lO;
ol110.OO1l1 = oO101;
ol110.Oo111 = oool1;
ol110.O11olO = OlO0O;
ol110.ol0010 = OOo1O;
ol110.oll1l = o1l1l;
ol110.oOlol1 = ll11l;
ol110.Ol0l = oOlo1;
ol110.Oo0o00 = o11O1;
ol110.oO0o1l = oOO01;
ol110.ll001 = ol10O;
ol110.l1olO1 = lO0o0;
ol110[o0O00l] = OO1o0;
ol110.OOo00 = ooll1;
ol110[l0oO0] = ol0O0;
ol110[oo1o] = OlOoO;
ol110[o1o0O1] = OOOll;
ol110[OOo10] = OoOoo;
ol110[oOl1oO] = l0lll;
ol110[O0lo11] = o0o0l;
ol110[lOol1O] = O0OO0;
ol110[o1lo1l] = oO1o;
ol110[O0lOo1] = olOl01;
ol110[l0OoO0] = oO1os;
ol110[Olo1o1] = l1ol1;
ol110[OoloOl] = lO0Oo;
ol110[Olol1o] = OOo1o;
ol110.ool1 = l001l;
ol110[oo1OO] = Oo001;
ol110[O0o11] = O01lO;
ol110[l01O11] = O01lOs;
ol110[OO0l] = Ol1l1;
ol110[lOo0lO] = Ol1l1s;
ol110[lo0OlO] = o0010;
ol110[OO11] = lOOoo;
ol110.Oool0 = o0Ooo;
ol110[OO101] = lOo1O;
ol110[OO01O0] = llOOO;
ol110[OOll0l] = loll1;
ol110[ooO1ll] = llloO;
ol110[OO11l1] = lo1OlO;
ol110[olOo0l] = O110;
ol110[lOo01l] = oO1l;
ol110[o1oOl] = ol111;
ol110[ll10OO] = lO111;
ol110[OOl0Ol] = lOOl1;
ol110[oO0l10] = oOO10;
ol110[Oo1100] = oloOl;
ol110[ll1oO1] = Olo0o;
ol110[ol0l0] = o11oo;
ol110[OOo10l] = l0Oll;
ol110[looOlo] = llO01;
ol110[l10000] = lll1o;
ol110[l11o1o] = l01o1;
ol110[o110ll] = llOlo;
ol110[lO1lO1] = o0l0o;
ol110[o11l] = l1olo;
ol110[lOoolO] = o01O1;
ol110[O1l0lO] = oO10;
ol110[Oo1O0o] = oll0o;
ol110.o1110 = oOloO;
ol110.lOO1O0 = ooO10;
ol110[llolO] = l1oloEl;
ol110[l00l] = O01lOCls;
ol110[OO10OO] = Ol1l1Cls;
ol110.llll1l = l1oloByEvent;
ol110[o00l0] = OloO1;
ol110[l0lOl] = Ol101;
ol110[lOo101] = ll1O0;
ol110[lololl] = O10OO;
ol110[OO1O1l] = l0o1O;
ol110[l0llOO] = lolo1o;
ol110[loO1Oo] = ol111InCheckOrder;
ol110[l1000o] = lO111InCheckOrder;
mini._Layouts = {};
mini.layout = function ($, _) {
    if (!mini.enableLayout)return;
    if (!document.body)return;
    function A(C) {
        if (!C)return;
        var D = mini.get(C);
        if (D) {
            if (D[l0llOO])if (!mini._Layouts[D.uid]) {
                mini._Layouts[D.uid] = D;
                if (_ !== false || D[O1l1ll]() == false)D[l0llOO](false);
                delete mini._Layouts[D.uid]
            }
        } else {
            var E = C.childNodes;
            if (E)for (var $ = 0, F = E.length; $ < F; $++) {
                var B = E[$];
                try {
                    B.toString()
                } catch (G) {
                    continue
                }
                A(B)
            }
        }
    }

    if (!$)$ = document.body;
    A($);
    if ($ == document.body)mini.layoutIFrames()
};
mini.applyTo = function (_) {
    _ = o0OO(_);
    if (!_)return this;
    if (mini.get(_))throw new Error("not applyTo a mini control");
    var $ = this[ol1oOl](_);
    delete $._applyTo;
    if (mini.isNull($[o0lo0O]) && !mini.isNull($.value))$[o0lo0O] = $.value;
    if (mini.isNull($.defaultText) && !mini.isNull($.text))$.defaultText = $.text;
    var A = _.parentNode;
    if (A && this.el != _)A.replaceChild(this.el, _);
    if (window._mini_set)_mini_set($, this);
    this[OO1O1l]($);
    this.Olo10l(_);
    return this
};
mini.OolOo1 = function (G) {
    if (!G)return;
    var F = G.nodeName.toLowerCase();
    if (!F)return;
    var B = String(G.className);
    if (B) {
        var $ = mini.get(G);
        if (!$) {
            var H = B.split(" ");
            for (var E = 0, C = H.length; E < C; E++) {
                var A = H[E], I = mini.getClassByUICls(A);
                if (I) {
                    o11o(G, A);
                    var D = new I();
                    mini.applyTo[o1O0l0](D, G);
                    G = D.el;
                    break
                }
            }
        }
    }
    if (F == "select" || olol(G, "mini-menu") || olol(G, "mini-datagrid") || olol(G, "mini-treegrid") || olol(G, "mini-tree") || olol(G, "mini-button") || olol(G, "mini-textbox") || olol(G, "mini-buttonedit"))return;
    var J = mini[l00oo](G, true);
    for (E = 0, C = J.length; E < C; E++) {
        var _ = J[E];
        if (_.nodeType == 1)if (_.parentNode == G)mini.OolOo1(_)
    }
};
mini._Removes = [];
mini._firstParse = true;
mini.parse = function (D, C) {
    mini.parsed = true;
    if (mini._firstParse) {
        mini._firstParse = false;
        var H = document.getElementsByTagName("iframe"), B = [];
        for (var A = 0, G = H.length; A < G; A++) {
            var _ = H[A];
            B.push(_)
        }
        for (A = 0, G = B.length; A < G; A++) {
            var _ = B[A], F = jQuery(_).attr("src");
            if (!F)continue;
            _.loaded = false;
            _._onload = _.onload;
            _._src = F;
            _.onload = function () {
            };
            _.src = ""
        }
        setTimeout(function () {
            for (var _ = 0, A = B.length; _ < A; _++) {
                var $ = B[_];
                if ($._src && jQuery($).attr("src") == "") {
                    $.loaded = true;
                    $.onload = $._onload;
                    $.src = $._src;
                    $._src = $._onload = null
                }
            }
        }, 20);
        setTimeout(function () {
            for (var A = 0, D = B.length; A < D; A++) {
                var _ = B[A], C = $(_).attr("data-src");
                if (C)_.src = C
            }
        }, 30)
    }
    if (typeof D == "string") {
        var I = D;
        D = o0OO(I);
        if (!D)D = document.body
    }
    if (D && !mini.isElement(D))D = D.el;
    if (!D)D = document.body;
    var E = Ol01o;
    if (isIE)Ol01o = false;
    mini.OolOo1(D);
    Ol01o = E;
    if (C !== false)mini.layout(D)
};
mini[Ol100O] = function (B, A, E) {
    for (var $ = 0, D = E.length; $ < D; $++) {
        var C = E[$], _ = mini.getAttr(B, C);
        if (_)A[C] = _
    }
};
mini[Olo01O] = function (B, A, E) {
    for (var $ = 0, D = E.length; $ < D; $++) {
        var C = E[$], _ = mini.getAttr(B, C);
        if (_)A[C] = _ == "true" ? true : false
    }
};
mini[oOOl00] = function (B, A, E) {
    for (var $ = 0, D = E.length; $ < D; $++) {
        var C = E[$], _ = parseInt(mini.getAttr(B, C));
        if (!isNaN(_))A[C] = _
    }
};
mini.llllo = function (el) {
    var columns = [], cs = mini[l00oo](el);
    for (var i = 0, l = cs.length; i < l; i++) {
        var node = cs[i], jq = jQuery(node), column = {}, editor = null, filter = null, subCs = mini[l00oo](node);
        if (subCs)for (var ii = 0, li = subCs.length; ii < li; ii++) {
            var subNode = subCs[ii], property = jQuery(subNode).attr("property");
            if (!property)continue;
            property = property.toLowerCase();
            if (property == "columns") {
                column.columns = mini.llllo(subNode);
                jQuery(subNode).remove()
            }
            if (property == "editor" || property == "filter") {
                var className = subNode.className, classes = className.split(" ");
                for (var i3 = 0, l3 = classes.length; i3 < l3; i3++) {
                    var cls = classes[i3], clazz = mini.getClassByUICls(cls);
                    if (clazz) {
                        var ui = new clazz();
                        if (property == "filter") {
                            filter = ui[ol1oOl](subNode);
                            filter.type = ui.type
                        } else {
                            editor = ui[ol1oOl](subNode);
                            editor.type = ui.type
                        }
                        break
                    }
                }
                jQuery(subNode).remove()
            }
        }
        column.header = node.innerHTML;
        mini[Ol100O](node, column, ["name", "header", "field", "editor", "filter", "renderer", "width", "type", "renderer", "headerAlign", "align", "headerCls", "cellCls", "headerStyle", "cellStyle", "displayField", "dateFormat", "listFormat", "mapFormat", "numberFormat", "trueValue", "falseValue", "dataType", "vtype", "currencyUnit", "summaryType", "summaryRenderer", "groupSummaryType", "groupSummaryRenderer", "defaultValue", "defaultText", "decimalPlaces", "data-options", "sortField", "sortType"]);
        mini[Olo01O](node, column, ["visible", "readOnly", "allowSort", "allowResize", "allowMove", "allowDrag", "autoShowPopup", "unique", "autoEscape", "enabled", "hideable", "showCellTip", "valueFromSelect"]);
        if (editor)column.editor = editor;
        if (filter)column.filter = filter;
        if (typeof(column.editor) == "string") {
            try {
                column.editor = eval("(" + column.editor + ")")
            } catch (e) {
            }
        }
        if (column.dataType)column.dataType = column.dataType.toLowerCase();
        if (column[o0lo0O] === "true")column[o0lo0O] = true;
        if (column[o0lo0O] === "false")column[o0lo0O] = false;
        columns.push(column);
        var options = column["data-options"];
        if (options) {
            options = eval("(" + options + ")");
            if (options)mini.copyTo(column, options)
        }
    }
    return columns
};
mini.o10o0 = {};
mini[ol1oO] = function ($) {
    var _ = mini.o10o0[$.toLowerCase()];
    if (!_)return {};
    return _()
};
mini.IndexColumn = function ($) {
    return mini.copyTo({
        width: 30,
        cellCls: "",
        align: "center",
        draggable: false,
        allowDrag: true,
        hideable: true,
        init: function ($) {
            $[Ol1oO1]("addrow", this.__OnIndexChanged, this);
            $[Ol1oO1]("removerow", this.__OnIndexChanged, this);
            $[Ol1oO1]("moverow", this.__OnIndexChanged, this);
            if ($.isTree) {
                $[Ol1oO1]("addnode", this.__OnIndexChanged, this);
                $[Ol1oO1]("removenode", this.__OnIndexChanged, this);
                $[Ol1oO1]("movenode", this.__OnIndexChanged, this);
                $[Ol1oO1]("loadnode", this.__OnIndexChanged, this);
                this._gridUID = $.uid;
                this[O0O00o] = "_id"
            }
        },
        getNumberId: function ($) {
            return this._gridUID + "$number$" + $[this._rowIdField]
        },
        createNumber: function ($, _) {
            if (mini.isNull($[lo00O0]))return _ + 1; else return ($[lo00O0] * $[llllO]) + _ + 1
        },
        renderer: function (A) {
            var $ = A.sender;
            if (this.draggable) {
                if (!A.cellStyle)A.cellStyle = "";
                A.cellStyle += ";cursor:move;"
            }
            var _ = "<div id=\"" + this.getNumberId(A.record) + "\">";
            if (mini.isNull($[Oooo1O]))_ += A.rowIndex + 1; else _ += ($[Oooo1O]() * $[O0loO0]()) + A.rowIndex + 1;
            _ += "</div>";
            return _
        },
        __OnIndexChanged: function (F) {
            var $ = F.sender, C = $.getDataView();
            for (var A = 0, D = C.length; A < D; A++) {
                var _ = C[A], E = this.getNumberId(_), B = document.getElementById(E);
                if (B)B.innerHTML = this.createNumber($, A)
            }
        }
    }, $)
};
mini.o10o0["indexcolumn"] = mini.IndexColumn;
mini.CheckColumn = function ($) {
    return mini.copyTo({
        width: 30,
        cellCls: "mini-checkcolumn",
        headerCls: "mini-checkcolumn",
        hideable: true,
        _multiRowSelect: true,
        header: function ($) {
            var A = this.uid + "checkall", _ = "<input type=\"checkbox\" id=\"" + A + "\" " + ($._checkedAll ? "checked" : "") + "/>";
            if (this[O0o1ol] == false)_ = "";
            return _
        },
        getCheckId: function ($, _) {
            return this._gridUID + "$checkcolumn$" + $[this._rowIdField] + "$" + _._id
        },
        init: function ($) {
            $[Ol1oO1]("_selectchange", this.__OnSelectionChanged, this);
            $[Ol1oO1]("HeaderCellClick", this.O0Oo0O, this)
        },
        renderer: function (D) {
            var C = this.getCheckId(D.record, D.column), _ = D.sender[Olo1o1] ? D.sender[Olo1o1](D.record) : false, B = "checkbox", $ = D.sender;
            if ($[OoloOl]() == false)B = "radio";
            var A = "<input type=\"" + B + "\" id=\"" + C + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false\"/>";
            A += "<div class=\"mini-grid-radio-mask\"></div>";
            return A
        },
        O0Oo0O: function (C) {
            var _ = C.sender;
            if (C.column != this)return;
            var B = _.uid + "checkall", A = document.getElementById(B);
            if (A) {
                this._checkedAll = A.checked;
                if (_[OoloOl]()) {
                    if (A.checked) {
                        var $ = _.getDataView();
                        _[oo1o]($)
                    } else {
                        $ = _.getDataView();
                        _[l0oO0]($)
                    }
                } else {
                    _[OOo10]();
                    if (A.checked)_[lOol1O](0)
                }
                _[ol1O0]("checkall")
            }
        },
        __OnSelectionChanged: function (O) {
            var H = O.sender, A = H.toArray(), D = this, I = H.isVirtualScroll(), C = H._viewRegion, _ = (I && C) ? C.start : -1, B = C ? C.end : -1, N = {};
            if (_ != -1) {
                var M = H.getVisibleRows();
                for (var J = _, E = B; J < E; J++) {
                    var K = M[J];
                    if (K)N[K._id] = true
                }
            }
            for (J = 0, E = A.length; J < E; J++) {
                var $ = A[J];
                if (_ != -1)if (!N[$._id])continue;
                var G = H[Olo1o1]($), F = D.getCheckId($, D), L = document.getElementById(F);
                if (L)L.checked = G
            }
            if (!this._timer)this._timer = setTimeout(function () {
                D._doCheckState(H);
                D._timer = null
            }, 10)
        },
        _doCheckState: function ($) {
            var A = $.uid + "checkall", _ = document.getElementById(A)
        }
    }, $)
};
mini.o10o0["checkcolumn"] = mini.CheckColumn;
mini.ExpandColumn = function ($) {
    return mini.copyTo({
        width: 30,
        headerAlign: "center",
        align: "center",
        draggable: false,
        cellStyle: "padding:0",
        cellCls: "mini-grid-expandCell",
        hideable: true,
        renderer: function ($) {
            return "<a class=\"mini-grid-ecIcon\" href=\"javascript:#\" onclick=\"return false\"></a>"
        },
        init: function ($) {
            $[Ol1oO1]("cellclick", this.o0o0ol, this)
        },
        o0o0ol: function (A) {
            var $ = A.sender;
            if (A.column == this && $[oo0OOO])if (ol000(A.htmlEvent.target, "mini-grid-ecIcon")) {
                var _ = $[oo0OOO](A.record);
                if (!_) {
                    A.cancel = false;
                    $[ol1O0]("beforeshowrowdetail", A);
                    if (A.cancel === true)return
                } else {
                    A.cancel = false;
                    $[ol1O0]("beforehiderowdetail", A);
                    if (A.cancel === true)return
                }
                if ($.autoHideRowDetail)$[OOlo0l]();
                if (_)$[llo1ll](A.record); else $[OO1ol0](A.record)
            }
        }
    }, $)
};
mini.o10o0["expandcolumn"] = mini.ExpandColumn;
loo10OColumn = function ($) {
    return mini.copyTo({
        _type: "checkboxcolumn",
        editMode: "inline",
        header: "",
        headerAlign: "center",
        cellCls: "mini-checkcolumn",
        trueValue: true,
        falseValue: false,
        readOnly: false,
        getCheckId: function ($, _) {
            return this._gridUID + "$checkbox$" + $[this._rowIdField] + "$" + _._id
        },
        getCheckBoxEl: function ($, _) {
            return document.getElementById(this.getCheckId($, _))
        },
        renderer: function (C) {
            var A = this.getCheckId(C.record, C.column), B = mini._getMap(C.field, C.record), _ = B == this.trueValue ? true : false, $ = "checkbox";
            return "<input type=\"" + $ + "\" id=\"" + A + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false;\"/>"
        },
        init: function ($) {
            this.grid = $;
            function _(B) {
                if ($[o0011o]() || this[lOlo0])return;
                B.value = mini._getMap(B.field, B.record);
                $[ol1O0]("cellbeginedit", B);
                if (B.cancel !== true) {
                    var A = mini._getMap(B.column.field, B.record), _ = A == this.trueValue ? this.falseValue : this.trueValue;
                    if ($.OOO11) {
                        $.OOO11(B.record, B.column, _);
                        $.l1Oll(B.record, B.column)
                    }
                }
            }

            function A(C) {
                if (C.column == this) {
                    var B = this.getCheckId(C.record, C.column), A = C.htmlEvent.target;
                    if (A.id == B)if ($[ooo011]) {
                        C.cancel = false;
                        _[o1O0l0](this, C)
                    } else {
                        if (this[lOlo0])return;
                        C.value = mini._getMap(C.column.field, C.record);
                        $[ol1O0]("cellbeginedit", C);
                        if (C.cancel == true)return;
                        if ($[OO0Oo0] && $[OO0Oo0](C.record))setTimeout(function () {
                            A.checked = !A.checked
                        }, 1)
                    }
                }
            }

            $[Ol1oO1]("cellclick", A, this);
            Ol1O(this.grid.el, "keydown", function (C) {
                if (C.keyCode == 32 && $[ooo011]) {
                    var A = $[O011o1]();
                    if (!A)return;
                    if (A[1] != this)return;
                    var B = {record: A[0], column: A[1]};
                    B.field = B.column.field;
                    _[o1O0l0](this, B);
                    C.preventDefault()
                }
            }, this);
            var B = parseInt(this.trueValue), C = parseInt(this.falseValue);
            if (!isNaN(B))this.trueValue = B;
            if (!isNaN(C))this.falseValue = C
        }
    }, $)
};
mini.o10o0["checkboxcolumn"] = loo10OColumn;
mini.RadioButtonColumn = function ($) {
    return mini.copyTo({
        _type: "radiobuttoncolumn",
        editMode: "inline",
        header: "",
        headerAlign: "center",
        cellCls: "mini-checkcolumn",
        trueValue: true,
        falseValue: false,
        readOnly: false,
        getCheckId: function ($, _) {
            return this._gridUID + "$radio$" + $[this._rowIdField] + "$" + _._id
        },
        getCheckBoxEl: function ($, _) {
            return document.getElementById(this.getCheckId($, _))
        },
        renderer: function (G) {
            var $ = G.sender, E = this.getCheckId(G.record, G.column), F = mini._getMap(G.field, G.record), B = F == this.trueValue ? true : false, _ = "radio", C = $._id + G.column.field, A = "", D = "<div style=\"position:relative;\">";
            D += "<input name=\"" + C + "\" type=\"" + _ + "\" id=\"" + E + "\" " + (B ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false;\" style=\"position:relative;z-index:1;\"/>";
            if (!$[ooo011])if (!$[OO0Oo0](G.record))D += "<div class=\"mini-grid-radio-mask\"></div>";
            D += "</div>";
            return D
        },
        init: function ($) {
            this.grid = $;
            function _(F) {
                if ($[o0011o]() || this[lOlo0])return;
                F.value = mini._getMap(F.field, F.record);
                $[ol1O0]("cellbeginedit", F);
                if (F.cancel !== true) {
                    var E = mini._getMap(F.column.field, F.record);
                    if (E == this.trueValue)return;
                    var A = E == this.trueValue ? this.falseValue : this.trueValue, C = $[ll1oO1]();
                    for (var _ = 0, D = C.length; _ < D; _++) {
                        var B = C[_];
                        if (B == F.record)continue;
                        E = mini._getMap(F.column.field, B);
                        if (E != this.falseValue)$[loo01](B, F.column.field, this.falseValue)
                    }
                    if ($.OOO11) {
                        $.OOO11(F.record, F.column, A);
                        $.l1Oll(F.record, F.column)
                    }
                }
            }

            function A(D) {
                if (D.column == this) {
                    var C = this.getCheckId(D.record, D.column), B = D.htmlEvent.target;
                    if (B.id == C)if ($[ooo011]) {
                        D.cancel = false;
                        _[o1O0l0](this, D)
                    } else if ($[OO0Oo0] && $[OO0Oo0](D.record)) {
                        var A = this;
                        setTimeout(function () {
                            B.checked = true;
                            var F = $[ll1oO1]();
                            for (var C = 0, H = F.length; C < H; C++) {
                                var E = F[C];
                                if (E == D.record)continue;
                                var G = D.column.field, I = mini._getMap(G, E);
                                if (I != A.falseValue)if (E != D.record)if ($._dataSource) {
                                    mini._setMap(D.column.field, A.falseValue, E);
                                    $._dataSource._setModified(E, G, I)
                                } else {
                                    var _ = {};
                                    mini._setMap(G, A.falseValue, _);
                                    $.ll1o(E, _)
                                }
                            }
                        }, 1)
                    }
                }
            }

            $[Ol1oO1]("cellclick", A, this);
            Ol1O(this.grid.el, "keydown", function (C) {
                if (C.keyCode == 32 && $[ooo011]) {
                    var A = $[O011o1]();
                    if (!A)return;
                    if (A[1] != this)return;
                    var B = {record: A[0], column: A[1]};
                    B.field = B.column.field;
                    _[o1O0l0](this, B);
                    C.preventDefault()
                }
            }, this);
            var B = parseInt(this.trueValue), C = parseInt(this.falseValue);
            if (!isNaN(B))this.trueValue = B;
            if (!isNaN(C))this.falseValue = C
        }
    }, $)
};
mini.o10o0["radiobuttoncolumn"] = mini.RadioButtonColumn;
function listColumnRenderer(O) {
    var C = O.column, A = !mini.isNull(O.value) ? String(O.value) : "", D = A.split(","), E = "id", K = "text", B = {}, H = C.editor, N = C.__editor;
    if (H) {
        if (!N && (H.type == "combobox" || H.type == "treeselect")) {
            if (mini.isControl(H))N = H; else {
                H = mini.clone(H);
                N = mini.create(H)
            }
            O.column.__editor = N
        }
        E = N[OO11l1]();
        K = N[OOll0l]();
        var L = N[ll1oO1]();
        B = C._valueMaps;
        if (!B || L !== C._data) {
            var _ = N[lo0111] ? N[lo0111]() : L;
            B = {};
            for (var I = 0, F = _.length; I < F; I++) {
                var $ = _[I];
                B[$[E]] = $
            }
            C._valueMaps = B;
            C._data = L
        }
    }
    var M = [];
    for (I = 0, F = D.length; I < F; I++) {
        var G = D[I], $ = B[G];
        if ($) {
            var J = $[K];
            if (J === null || J === undefined)J = "";
            M.push(J)
        }
    }
    if (M.length == 0 && C.valueFromSelect === false)return A;
    return M.join(",")
}
l1O1lOColumn = function ($) {
    return mini.copyTo({renderer: listColumnRenderer}, $)
};
mini.o10o0["comboboxcolumn"] = l1O1lOColumn;
lo1001Column = function ($) {
    return mini.copyTo({renderer: listColumnRenderer}, $)
};
mini.o10o0["treeselectcolumn"] = lo1001Column;
Oo1l10 = function ($) {
    this.owner = $;
    Ol1O(this.owner.el, "mousedown", this.Ol0l, this)
};
Oo1l10[O11Ol1] = {
    Ol0l: function (A) {
        var $ = olol(A.target, "mini-resizer-trigger");
        if ($ && this.owner[lO0oOO]) {
            var _ = this.llll();
            _.start(A)
        }
    }, llll: function () {
        if (!this._resizeDragger)this._resizeDragger = new mini.Drag({
            capture: true,
            onStart: mini.createDelegate(this.OoOOlO, this),
            onMove: mini.createDelegate(this.lll11, this),
            onStop: mini.createDelegate(this.O00OO, this)
        });
        return this._resizeDragger
    }, OoOOlO: function ($) {
        this[lOO0O0] = mini.append(document.body, "<div class=\"mini-resizer-mask mini-fixed\"></div>");
        this.proxy = mini.append(document.body, "<div class=\"mini-resizer-proxy\"></div>");
        this.proxy.style.cursor = "se-resize";
        this.elBox = Ol0oO(this.owner.el);
        oool(this.proxy, this.elBox)
    }, lll11: function (B) {
        var $ = this.owner, D = B.now[0] - B.init[0], _ = B.now[1] - B.init[1], A = this.elBox.width + D, C = this.elBox.height + _;
        if (A < $.minWidth)A = $.minWidth;
        if (C < $.minHeight)C = $.minHeight;
        if (A > $.maxWidth)A = $.maxWidth;
        if (C > $.maxHeight)C = $.maxHeight;
        mini.setSize(this.proxy, A, C)
    }, O00OO: function ($, A) {
        if (!this.proxy)return;
        var _ = Ol0oO(this.proxy);
        jQuery(this[lOO0O0]).remove();
        jQuery(this.proxy).remove();
        this.proxy = null;
        this.elBox = null;
        if (A) {
            this.owner[oll0OO](_.width);
            this.owner[lOll1l](_.height);
            this.owner[ol1O0]("resize")
        }
    }
};
mini._topWindow = null;
mini._getTopWindow = function (_) {
    if (mini._topWindow)return mini._topWindow;
    var $ = [];

    function A(_) {
        try {
            _["___try"] = 1;
            $.push(_)
        } catch (B) {
        }
        if (_.parent && _.parent != _)A(_.parent)
    }

    A(window);
    mini._topWindow = $[$.length - 1];
    return mini._topWindow
};
var __ps = mini.getParams();
if (__ps._winid) {
    try {
        window.Owner = mini._getTopWindow()[__ps._winid]
    } catch (ex) {
    }
}
mini._WindowID = "w" + Math.floor(Math.random() * 10000);
mini._getTopWindow()[mini._WindowID] = window;
mini.createIFrame = function (J, D, E) {
    if (!J)J = "";
    var H = J.split("#");
    J = H[0];
    var I = "";
    if (E !== true) {
        I = "_t=" + Math.floor(Math.random() * 1000000);
        if (J[o110ll]("?") == -1)J += "?" + I; else J += "&" + I
    }
    if (J && J[o110ll]("_winid") == -1) {
        I = "_winid=" + mini._WindowID;
        if (J[o110ll]("?") == -1)J += "?" + I; else J += "&" + I
    }
    if (H[1])J = J + "#" + H[1];
    var F = J[o110ll](".mht") != -1, C = F ? J : "", K = "<iframe src=\"" + C + "\" style=\"width:100%;height:100%;\"  frameborder=\"0\"></iframe>", G = document.createElement("div"), B = mini.append(G, K), L = false;
    if (F)L = true; else setTimeout(function () {
        if (B) {
            B.src = J;
            L = true
        }
    }, 5);
    if (B.attachEvent)B.attachEvent("onload", _); else B.onload = _;
    var $ = false, A = true;

    function _() {
        if (L == false || $)return;
        setTimeout(function () {
            if (D)D(B, A);
            A = false
        }, 1)
    }

    B._ondestroy = function () {
        $ = true;
        B.src = "";
        if (mini.isIE) {
            try {
                B.contentWindow.document.write("");
                B.contentWindow.document.close()
            } catch (_) {
            }
        }
        B._ondestroy = null;
        B = null
    };
    return B
};
mini._doOpen = function (F) {
    if (typeof F == "string")F = {url: F};
    F = mini.copyTo({
        width: 700,
        height: 400,
        allowResize: true,
        allowModal: true,
        closeAction: "destroy",
        title: "",
        titleIcon: "",
        iconCls: "",
        iconStyle: "",
        bodyStyle: "padding:0",
        url: "",
        showCloseButton: true,
        showFooter: false
    }, F);
    F[o00o0] = "destroy";
    var B = F.onload;
    delete F.onload;
    var E = F.ondestroy;
    delete F.ondestroy;
    var C = F.url;
    delete F.url;
    var A = mini.getViewportBox();
    if (F.width && String(F.width)[o110ll]("%") != -1) {
        var $ = parseInt(F.width);
        F.width = parseInt(A.width * ($ / 100))
    }
    if (F.height && String(F.height)[o110ll]("%") != -1) {
        var _ = parseInt(F.height);
        F.height = parseInt(A.height * (_ / 100))
    }
    var D = new O0OOol();
    D[OO1O1l](F);
    D[looOlo](C, B, E);
    D[l000ll]();
    if (mini.isIE)setTimeout(function () {
        fixIEFocus()
    }, 100);
    return D
};
function fixIEFocus() {
    var _ = mini.getViewportBox(), $ = document.createElement("input");
    $.style.cssText = "position:absolute;left:" + _.left + "px;top:" + _.top + "px;";
    document.body.appendChild($);
    $[O1loo]();
    $.parentNode.removeChild($)
}
mini.open = function (E) {
    if (!E)return;
    var C = E.url;
    if (!C)C = "";
    var B = C.split("#"), C = B[0];
    if (C && C[o110ll]("_winid") == -1) {
        var A = "_winid=" + mini._WindowID;
        if (C[o110ll]("?") == -1)C += "?" + A; else C += "&" + A;
        if (B[1])C = C + "#" + B[1]
    }
    E.url = C;
    E.Owner = window;
    var $ = [];

    function _(A) {
        try {
            if (A.mini)$.push(A);
            if (A.parent && A.parent != A)_(A.parent)
        } catch (B) {
        }
    }

    _(window);
    var D = $[$.length - 1];
    return D["mini"]._doOpen(E)
};
mini.openTop = mini.open;
mini._getResult = function (F, C, I, H, B, E) {
    var A = null, _ = mini[ooooO](F, C, function (_, $) {
        A = $;
        if (I)if (I)I(_, $)
    }, H, B), $ = {text: _, result: null, sender: {type: ""}, options: {url: F, data: C, type: B}, xhr: A}, D = null;
    try {
        mini_doload($);
        D = $.result;
        if (!D)D = mini.decode(_)
    } catch (G) {
        if (mini_debugger == true)alert(F + "\njson is error")
    }
    if (!mini.isArray(D) && E)D = mini._getMap(E, D);
    if (mini.isArray(D))D = {data: D};
    return D ? D.data : null
};
mini[ll1oO1] = function (C, A, E, D, _) {
    var $ = mini[ooooO](C, A, E, D, _), B = mini.decode($);
    return B
};
mini[ooooO] = function (B, A, D, C, _) {
    var $ = null;
    mini.ajax({
        url: B,
        data: A,
        async: false,
        type: _ ? _ : "get",
        cache: false,
        dataType: "text",
        success: function (A, B, _) {
            $ = A;
            if (D)D(A, _)
        },
        error: C
    });
    return $
};
if (!window.mini_RootPath)mini_RootPath = "/";
oO11 = function (B) {
    var A = document.getElementsByTagName("script"), D = "";
    for (var $ = 0, E = A.length; $ < E; $++) {
        var C = A[$].src;
        if (C[o110ll](B) != -1) {
            var F = C.split(B);
            D = F[0];
            break
        }
    }
    var _ = location.href;
    _ = _.split("#")[0];
    _ = _.split("?")[0];
    F = _.split("/");
    F.length = F.length - 1;
    _ = F.join("/");
    if (D[o110ll]("http:") == -1 && D[o110ll]("file:") == -1)D = _ + "/" + D;
    return D
};
if (!window.mini_JSPath)mini_JSPath = oO11("miniui.js");
mini[lOOl1o] = function (A, _) {
    if (typeof A == "string")A = {url: A};
    if (_)A.el = _;
    var $ = mini.loadText(A.url);
    mini.innerHTML(A.el, $);
    mini.parse(A.el)
};
mini.createSingle = function ($) {
    if (typeof $ == "string")$ = mini.getClass($);
    if (typeof $ != "function")return;
    var _ = $.single;
    if (!_)_ = $.single = new $();
    return _
};
mini.createTopSingle = function ($) {
    if (typeof $ != "function")return;
    var _ = $[O11Ol1].type;
    if (top && top != window && top.mini && top.mini.getClass(_))return top.mini.createSingle(_); else return mini.createSingle($)
};
mini.sortTypes = {
    "string": function ($) {
        return String($).toUpperCase()
    }, "date": function ($) {
        if (!$)return 0;
        if (mini.isDate($))return $[OOo0o1]();
        return mini.parseDate(String($))
    }, "float": function (_) {
        var $ = parseFloat(String(_).replace(/,/g, ""));
        return isNaN($) ? 0 : $
    }, "int": function (_) {
        var $ = parseInt(String(_).replace(/,/g, ""), 10);
        return isNaN($) ? 0 : $
    }, "currency": function (_) {
        var $ = parseFloat(String(_).replace(/,/g, ""));
        return isNaN($) ? 0 : $
    }
};
mini.O0l0O = function (G, $, K, H) {
    var F = G.split(";");
    for (var E = 0, C = F.length; E < C; E++) {
        var G = F[E].trim(), J = G.split(":"), A = J[0], _ = G.substr(A.length + 1, 1000);
        if (_)_ = _.split(","); else _ = [];
        var D = mini.VTypes[A];
        if (D) {
            var I = D($, _);
            if (I !== true) {
                K[o0Ol0l] = false;
                var B = J[0] + "ErrorText";
                K.errorText = H[B] || mini.VTypes[B] || "";
                K.errorText = String.format(K.errorText, _[0], _[1], _[2], _[3], _[4]);
                break
            }
        }
    }
};
mini.O10oo = function ($, _) {
    if ($ && $[_])return $[_]; else return mini.VTypes[_]
};
mini.VTypes = {
    minDateErrorText: "Date can not be less than {0}",
    maxDateErrorText: "Date can not be greater than {0}",
    uniqueErrorText: "This field is unique.",
    requiredErrorText: "This field is required.",
    emailErrorText: "Please enter a valid email address.",
    urlErrorText: "Please enter a valid URL.",
    floatErrorText: "Please enter a valid number.",
    intErrorText: "Please enter only digits",
    dateErrorText: "Please enter a valid date. Date format is {0}",
    maxLengthErrorText: "Please enter no more than {0} characters.",
    minLengthErrorText: "Please enter at least {0} characters.",
    maxErrorText: "Please enter a value less than or equal to {0}.",
    minErrorText: "Please enter a value greater than or equal to {0}.",
    rangeLengthErrorText: "Please enter a value between {0} and {1} characters long.",
    rangeCharErrorText: "Please enter a value between {0} and {1} characters long.",
    rangeErrorText: "Please enter a value between {0} and {1}.",
    required: function (_, $) {
        if (mini.isNull(_) || _ === "")return false;
        return true
    },
    email: function (_, $) {
        if (mini.isNull(_) || _ === "")return true;
        if (_.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)return true; else return false
    },
    url: function (A, $) {
        if (mini.isNull(A) || A === "")return true;
        function _(_) {
            _ = _.toLowerCase().split("?")[0];
            var $ = "^((https|http|ftp|rtsp|mms)?://)?" + "(([0-9]{1,3}.){3}[0-9]{1,3}" + "|" + "([0-9a-z_!~*'()-]+.)*" + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + "[a-z]{2,6})" + "(:[0-9]{1,5})?" + "((/?)|" + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$", A = new RegExp($);
            if (A.test(_))return (true); else return (false)
        }

        return _(A)
    },
    "int": function (A, _) {
        if (mini.isNull(A) || A === "")return true;
        function $(_) {
            if (_ < 0)_ = -_;
            var $ = String(_);
            return $.length > 0 && !(/[^0-9]/).test($)
        }

        return $(A)
    },
    "float": function (A, _) {
        if (mini.isNull(A) || A === "")return true;
        function $(_) {
            if (_ < 0)_ = -_;
            var $ = String(_);
            if ($.split(".").length > 2)return false;
            return $.length > 0 && !(/[^0-9.]/).test($) && !($.charAt($.length - 1) == ".")
        }

        return $(A)
    },
    "date": function (B, _) {
        if (mini.isNull(B) || B === "")return true;
        if (!B)return false;
        var $ = null, A = _[0];
        if (A) {
            $ = mini.parseDate(B, A);
            if ($ && $.getFullYear)if (mini.formatDate($, A) == B)return true
        } else {
            $ = mini.parseDate(B, "yyyy-MM-dd");
            if (!$)$ = mini.parseDate(B, "yyyy/MM/dd");
            if (!$)$ = mini.parseDate(B, "MM/dd/yyyy");
            if ($ && $.getFullYear)return true
        }
        return false
    },
    maxLength: function (A, $) {
        if (mini.isNull(A) || A === "")return true;
        var _ = parseInt($);
        if (!A || isNaN(_))return true;
        if (A.length <= _)return true; else return false
    },
    minLength: function (A, $) {
        if (mini.isNull(A) || A === "")return true;
        var _ = parseInt($);
        if (isNaN(_))return true;
        if (A.length >= _)return true; else return false
    },
    rangeLength: function (B, _) {
        if (mini.isNull(B) || B === "")return true;
        if (!B)return false;
        var $ = parseFloat(_[0]), A = parseFloat(_[1]);
        if (isNaN($) || isNaN(A))return true;
        if ($ <= B.length && B.length <= A)return true;
        return false
    },
    rangeChar: function (G, B) {
        if (mini.isNull(G) || G === "")return true;
        var A = parseFloat(B[0]), E = parseFloat(B[1]);
        if (isNaN(A) || isNaN(E))return true;
        function C(_) {
            var $ = new RegExp("^[\u4e00-\u9fa5]+$");
            if ($.test(_))return true;
            return false
        }

        var $ = 0, F = String(G).split("");
        for (var _ = 0, D = F.length; _ < D; _++)if (C(F[_]))$ += 2; else $ += 1;
        if (A <= $ && $ <= E)return true;
        return false
    },
    range: function (B, _) {
        if (mini.VTypes["float"](B, _) == false)return false;
        if (mini.isNull(B) || B === "")return true;
        B = parseFloat(B);
        if (isNaN(B))return false;
        var $ = parseFloat(_[0]), A = parseFloat(_[1]);
        if (isNaN($) || isNaN(A))return true;
        if ($ <= B && B <= A)return true;
        return false
    },
    min: function (A, _) {
        if (mini.VTypes["float"](A, _) == false)return false;
        if (mini.isNull(A) || A === "")return true;
        A = parseFloat(A);
        if (isNaN(A))return false;
        var $ = parseFloat(_[0]);
        if (isNaN($))return true;
        if ($ <= A)return true;
        return false
    },
    max: function (A, $) {
        if (mini.VTypes["float"](A, $) == false)return false;
        if (mini.isNull(A) || A === "")return true;
        A = parseFloat(A);
        if (isNaN(A))return false;
        var _ = parseFloat($[0]);
        if (isNaN(_))return true;
        if (A <= _)return true;
        return false
    }
};
mini.summaryTypes = {
    "count": function ($) {
        if (!$)$ = [];
        return $.length
    }, "max": function (B, C) {
        if (!B)B = [];
        var E = null;
        for (var _ = 0, D = B.length; _ < D; _++) {
            var $ = B[_], A = parseFloat(mini._getMap(C, $));
            if (A === null || A === undefined || isNaN(A))continue;
            if (E == null || E < A)E = A
        }
        return E
    }, "min": function (C, D) {
        if (!C)C = [];
        var B = null;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var $ = C[_], A = parseFloat(mini._getMap(D, $));
            if (A === null || A === undefined || isNaN(A))continue;
            if (B == null || B > A)B = A
        }
        return B
    }, "avg": function (C, D) {
        if (!C)C = [];
        if (C.length == 0)return 0;
        var B = 0;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var $ = C[_], A = parseFloat(mini._getMap(D, $));
            if (A === null || A === undefined || isNaN(A))continue;
            B += A
        }
        var F = B / C.length;
        return F
    }, "sum": function (C, D) {
        if (!C)C = [];
        var B = 0;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var $ = C[_], A = parseFloat(mini._getMap(D, $));
            if (A === null || A === undefined || isNaN(A))continue;
            B += A
        }
        return B
    }
};
mini.formatCurrency = function ($, A) {
    if ($ === null || $ === undefined)null == "";
    $ = String($).replace(/\$|\,/g, "");
    if (isNaN($))$ = "0";
    sign = ($ == ($ = Math.abs($)));
    $ = Math.floor($ * 100 + 0.50000000001);
    cents = $ % 100;
    $ = Math.floor($ / 100).toString();
    if (cents < 10)cents = "0" + cents;
    for (var _ = 0; _ < Math.floor(($.length - (1 + _)) / 3); _++)$ = $.substring(0, $.length - (4 * _ + 3)) + "," + $.substring($.length - (4 * _ + 3));
    A = A || "";
    return A + (((sign) ? "" : "-") + $ + "." + cents)
};
mini.emptyFn = function () {
};
mini.Drag = function ($) {
    mini.copyTo(this, $)
};
mini.Drag[O11Ol1] = {
    onStart: mini.emptyFn,
    onMove: mini.emptyFn,
    onStop: mini.emptyFn,
    capture: false,
    fps: 20,
    event: null,
    delay: 80,
    start: function (_) {
        _.preventDefault();
        if (_)this.event = _;
        this.now = this.init = [this.event.pageX, this.event.pageY];
        var $ = document;
        Ol1O($, "mousemove", this.move, this);
        Ol1O($, "mouseup", this.stop, this);
        Ol1O($, "contextmenu", this.contextmenu, this);
        if (this.context)Ol1O(this.context, "contextmenu", this.contextmenu, this);
        this.trigger = _.target;
        mini.selectable(this.trigger, false);
        mini.selectable($.body, false);
        if (this.capture)if (isIE)this.trigger.setCapture(true); else if (document.captureEvents)document.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP | Event.MOUSEDOWN);
        this.started = false;
        this.startTime = new Date()
    },
    contextmenu: function ($) {
        if (this.context)lol0Oo(this.context, "contextmenu", this.contextmenu, this);
        lol0Oo(document, "contextmenu", this.contextmenu, this);
        $.preventDefault();
        $.stopPropagation()
    },
    move: function (_) {
        if (this.delay)if (new Date() - this.startTime < this.delay)return;
        var $ = this;
        if (!this.timer)this.timer = setTimeout(function () {
            if (!$.started) {
                $.started = true;
                $.onStart($)
            }
            $.now = [_.pageX, _.pageY];
            $.event = _;
            $.onMove($);
            $.timer = null
        }, 5)
    },
    stop: function (B) {
        this.now = [B.pageX, B.pageY];
        this.event = B;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null
        }
        var A = document;
        mini.selectable(this.trigger, true);
        mini.selectable(A.body, true);
        if (isIE) {
            this.trigger.setCapture(false);
            this.trigger.releaseCapture()
        }
        var _ = mini.MouseButton.Right != B.button;
        if (_ == false)B.preventDefault();
        lol0Oo(A, "mousemove", this.move, this);
        lol0Oo(A, "mouseup", this.stop, this);
        var $ = this;
        setTimeout(function () {
            lol0Oo(document, "contextmenu", $.contextmenu, $);
            if ($.context)lol0Oo($.context, "contextmenu", $.contextmenu, $)
        }, 1);
        if (this.started)this.onStop(this, _)
    }
};
mini.JSON = new (function () {
    var sb = [], _dateFormat = null, useHasOwn = !!{}.hasOwnProperty, replaceString = function ($, A) {
        var _ = m[A];
        if (_)return _;
        _ = A.charCodeAt();
        return "\\u00" + Math.floor(_ / 16).toString(16) + (_ % 16).toString(16)
    }, doEncode = function ($, B) {
        if ($ === null) {
            sb[sb.length] = "null";
            return
        }
        var A = typeof $;
        if (A == "undefined") {
            sb[sb.length] = "null";
            return
        } else if ($.push) {
            sb[sb.length] = "[";
            var E, _, D = $.length, F;
            for (_ = 0; _ < D; _ += 1) {
                F = $[_];
                A = typeof F;
                if (A == "undefined" || A == "function" || A == "unknown"); else {
                    if (E)sb[sb.length] = ",";
                    doEncode(F);
                    E = true
                }
            }
            sb[sb.length] = "]";
            return
        } else if ($.getFullYear) {
            if (_dateFormat) {
                sb[sb.length] = "\"";
                if (typeof _dateFormat == "function")sb[sb.length] = _dateFormat($, B); else sb[sb.length] = mini.formatDate($, _dateFormat);
                sb[sb.length] = "\""
            } else {
                var C;
                sb[sb.length] = "\"";
                sb[sb.length] = $.getFullYear();
                sb[sb.length] = "-";
                C = $.getMonth() + 1;
                sb[sb.length] = C < 10 ? "0" + C : C;
                sb[sb.length] = "-";
                C = $.getDate();
                sb[sb.length] = C < 10 ? "0" + C : C;
                sb[sb.length] = "T";
                C = $.getHours();
                sb[sb.length] = C < 10 ? "0" + C : C;
                sb[sb.length] = ":";
                C = $.getMinutes();
                sb[sb.length] = C < 10 ? "0" + C : C;
                sb[sb.length] = ":";
                C = $.getSeconds();
                sb[sb.length] = C < 10 ? "0" + C : C;
                sb[sb.length] = "\""
            }
            return
        } else if (A == "string") {
            if (strReg1.test($)) {
                sb[sb.length] = "\"";
                sb[sb.length] = $.replace(strReg2, replaceString);
                sb[sb.length] = "\"";
                return
            }
            sb[sb.length] = "\"" + $ + "\"";
            return
        } else if (A == "number") {
            sb[sb.length] = $;
            return
        } else if (A == "boolean") {
            sb[sb.length] = String($);
            return
        } else {
            sb[sb.length] = "{";
            E, _, F;
            for (_ in $)if (!useHasOwn || Object[O11Ol1].hasOwnProperty[o1O0l0]($, _)) {
                F = $[_];
                A = typeof F;
                if (A == "undefined" || A == "function" || A == "unknown"); else {
                    if (E)sb[sb.length] = ",";
                    doEncode(_);
                    sb[sb.length] = ":";
                    doEncode(F, _);
                    E = true
                }
            }
            sb[sb.length] = "}";
            return
        }
    }, m = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "\"": "\\\"",
        "\\": "\\\\"
    }, strReg1 = /["\\\x00-\x1f]/, strReg2 = /([\x00-\x1f\\"])/g;
    this.encode = function () {
        var $;
        return function ($, _) {
            sb = [];
            _dateFormat = _;
            doEncode($);
            _dateFormat = null;
            return sb.join("")
        }
    }();
    this.decode = function () {
        var dateRe1 = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2}(?:\.*\d*)?)Z*$/, dateRe2 = new RegExp("^/+Date\\((-?[0-9]+).*\\)/+$", "g"), re = /[\"\'](\d{4})-(\d{1,2})-(\d{1,2})[T ](\d{1,2}):(\d{1,2}):(\d{1,2})(\.*\d*)[\"\']/g;
        return function (json, parseDate) {
            if (json === "" || json === null || json === undefined)return json;
            if (typeof json == "object")json = this.encode(json);
            function evalParse(json) {
                if (parseDate !== false) {
                    json = json.replace(__js_dateRegEx, "$1new Date($2)");
                    json = json.replace(re, "new Date($1,$2-1,$3,$4,$5,$6)");
                    json = json.replace(__js_dateRegEx2, "new Date($1)")
                }
                return eval("(" + json + ")")
            }

            var data = null;
            if (window.JSON && window.JSON.parse) {
                var dateReviver = function ($, _) {
                    if (typeof _ === "string" && parseDate !== false) {
                        dateRe1.lastIndex = 0;
                        var A = dateRe1.exec(_);
                        if (A) {
                            _ = new Date(A[1], A[2] - 1, A[3], A[4], A[5], A[6]);
                            return _
                        }
                        dateRe2.lastIndex = 0;
                        A = dateRe2.exec(_);
                        if (A) {
                            _ = new Date(parseInt(A[1]));
                            return _
                        }
                    }
                    return _
                };
                try {
                    var json2 = json.replace(__js_dateRegEx, "$1\"/Date($2)/\"");
                    data = window.JSON.parse(json2, dateReviver)
                } catch (ex) {
                    data = evalParse(json)
                }
            } else data = evalParse(json);
            return data
        }
    }()
})();
__js_dateRegEx = new RegExp("(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\\"", "g");
__js_dateRegEx2 = new RegExp("[\"']/Date\\(([0-9]+)\\)/[\"']", "g");
mini.encode = mini.JSON.encode;
mini.decode = mini.JSON.decode;
mini.clone = function ($, A) {
    if ($ === null || $ === undefined)return $;
    var B = mini.encode($), _ = mini.decode(B);

    function C(A) {
        for (var _ = 0, D = A.length; _ < D; _++) {
            var $ = A[_];
            delete $._state;
            delete $._id;
            delete $._pid;
            delete $._uid;
            for (var B in $) {
                var E = $[B];
                if (E instanceof Array)C(E)
            }
        }
    }

    if (A !== false)C(_ instanceof Array ? _ : [_]);
    return _
};
var DAY_MS = 86400000, HOUR_MS = 3600000, MINUTE_MS = 60000;
mini.copyTo(mini, {
    clearTime: function ($) {
        if (!$)return null;
        return new Date($.getFullYear(), $.getMonth(), $.getDate())
    },
    maxTime: function ($) {
        if (!$)return null;
        return new Date($.getFullYear(), $.getMonth(), $.getDate(), 23, 59, 59)
    },
    cloneDate: function ($) {
        if (!$)return null;
        return new Date($[OOo0o1]())
    },
    addDate: function (A, $, _) {
        if (!_)_ = "D";
        A = new Date(A[OOo0o1]());
        switch (_.toUpperCase()) {
            case"Y":
                A.setFullYear(A.getFullYear() + $);
                break;
            case"MO":
                A.setMonth(A.getMonth() + $);
                break;
            case"D":
                A.setDate(A.getDate() + $);
                break;
            case"H":
                A.setHours(A.getHours() + $);
                break;
            case"M":
                A.setMinutes(A.getMinutes() + $);
                break;
            case"S":
                A.setSeconds(A.getSeconds() + $);
                break;
            case"MS":
                A.setMilliseconds(A.getMilliseconds() + $);
                break
        }
        return A
    },
    getWeek: function (D, $, _) {
        var E = Math.floor((14 - ($)) / 12), G = D + 4800 - E, A = ($) + (12 * E) - 3, C = _ + Math.floor(((153 * A) + 2) / 5) + (365 * G) + Math.floor(G / 4) - Math.floor(G / 100) + Math.floor(G / 400) - 32045, F = (C + 31741 - (C % 7)) % 146097 % 36524 % 1461, H = Math.floor(F / 1460), B = ((F - H) % 365) + H;
        NumberOfWeek = Math.floor(B / 7) + 1;
        return NumberOfWeek
    },
    getWeekStartDate: function (C, B) {
        if (!B)B = 0;
        if (B > 6 || B < 0)throw new Error("out of weekday");
        var A = C.getDay(), _ = B - A;
        if (A < B)_ -= 7;
        var $ = new Date(C.getFullYear(), C.getMonth(), C.getDate() + _);
        return $
    },
    getShortWeek: function (_) {
        var $ = this.dateInfo.daysShort;
        return $[_]
    },
    getLongWeek: function (_) {
        var $ = this.dateInfo.daysLong;
        return $[_]
    },
    getShortMonth: function ($) {
        var _ = this.dateInfo.monthsShort;
        return _[$]
    },
    getLongMonth: function ($) {
        var _ = this.dateInfo.monthsLong;
        return _[$]
    },
    dateInfo: {
        monthsLong: ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        daysLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        quarterLong: ["Q1", "Q2", "Q3", "Q4"],
        quarterShort: ["Q1", "Q2", "Q3", "Q4"],
        halfYearLong: ["first half", "second half"],
        patterns: {
            "d": "M/d/yyyy",
            "D": "dddd,MMMM dd,yyyy",
            "f": "dddd,MMMM dd,yyyy H:mm tt",
            "F": "dddd,MMMM dd,yyyy H:mm:ss tt",
            "g": "M/d/yyyy H:mm tt",
            "G": "M/d/yyyy H:mm:ss tt",
            "m": "MMMM dd",
            "o": "yyyy-MM-ddTHH:mm:ss.fff",
            "s": "yyyy-MM-ddTHH:mm:ss",
            "t": "H:mm tt",
            "T": "H:mm:ss tt",
            "U": "dddd,MMMM dd,yyyy HH:mm:ss tt",
            "y": "MMM,yyyy"
        },
        tt: {"AM": "AM", "PM": "PM"},
        ten: {"Early": "Early", "Mid": "Mid", "Late": "Late"},
        today: "Today",
        clockType: 24
    }
});
Date[O11Ol1].getHalfYear = function () {
    if (!this.getMonth)return null;
    var $ = this.getMonth();
    if ($ < 6)return 0;
    return 1
};
Date[O11Ol1].getQuarter = function () {
    if (!this.getMonth)return null;
    var $ = this.getMonth();
    if ($ < 3)return 0;
    if ($ < 6)return 1;
    if ($ < 9)return 2;
    return 3
};
mini.formatDate = function (C, O, F) {
    if (!C || !C.getFullYear || isNaN(C))return "";
    var G = C.toString(), B = mini.dateInfo;
    if (!B)B = mini.dateInfo;
    if (typeof(B) !== "undefined") {
        var M = typeof(B.patterns[O]) !== "undefined" ? B.patterns[O] : O, J = C.getFullYear(), $ = C.getMonth(), _ = C.getDate();
        if (O == "yyyy-MM-dd") {
            $ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
            _ = _ < 10 ? "0" + _ : _;
            return J + "-" + $ + "-" + _
        }
        if (O == "MM/dd/yyyy") {
            $ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
            _ = _ < 10 ? "0" + _ : _;
            return $ + "/" + _ + "/" + J
        }
        G = M.replace(/yyyy/g, J);
        G = G.replace(/yy/g, (J + "").substring(2));
        var L = C.getHalfYear();
        G = G.replace(/hy/g, B.halfYearLong[L]);
        var I = C.getQuarter();
        G = G.replace(/Q/g, B.quarterLong[I]);
        G = G.replace(/q/g, B.quarterShort[I]);
        G = G.replace(/MMMM/g, B.monthsLong[$].escapeDateTimeTokens());
        G = G.replace(/MMM/g, B.monthsShort[$].escapeDateTimeTokens());
        G = G.replace(/MM/g, $ + 1 < 10 ? "0" + ($ + 1) : $ + 1);
        G = G.replace(/(\\)?M/g, function (A, _) {
            return _ ? A : $ + 1
        });
        var N = C.getDay();
        G = G.replace(/dddd/g, B.daysLong[N].escapeDateTimeTokens());
        G = G.replace(/ddd/g, B.daysShort[N].escapeDateTimeTokens());
        G = G.replace(/dd/g, _ < 10 ? "0" + _ : _);
        G = G.replace(/(\\)?d/g, function (A, $) {
            return $ ? A : _
        });
        var H = C.getHours(), A = H > 12 ? H - 12 : H;
        if (B.clockType == 12)if (H > 12)H -= 12;
        G = G.replace(/HH/g, H < 10 ? "0" + H : H);
        G = G.replace(/(\\)?H/g, function (_, $) {
            return $ ? _ : H
        });
        G = G.replace(/hh/g, A < 10 ? "0" + A : A);
        G = G.replace(/(\\)?h/g, function (_, $) {
            return $ ? _ : A
        });
        var D = C.getMinutes();
        G = G.replace(/mm/g, D < 10 ? "0" + D : D);
        G = G.replace(/(\\)?m/g, function (_, $) {
            return $ ? _ : D
        });
        var K = C.getSeconds();
        G = G.replace(/ss/g, K < 10 ? "0" + K : K);
        G = G.replace(/(\\)?s/g, function (_, $) {
            return $ ? _ : K
        });
        G = G.replace(/fff/g, C.getMilliseconds());
        G = G.replace(/tt/g, C.getHours() > 12 || C.getHours() == 0 ? B.tt["PM"] : B.tt["AM"]);
        var C = C.getDate(), E = "";
        if (C <= 10)E = B.ten["Early"]; else if (C <= 20)E = B.ten["Mid"]; else E = B.ten["Late"];
        G = G.replace(/ten/g, E)
    }
    return G.replace(/\\/g, "")
};
String[O11Ol1].escapeDateTimeTokens = function () {
    return this.replace(/([dMyHmsft])/g, "\\$1")
};
mini.fixDate = function ($, _) {
    if (+$)while ($.getDate() != _.getDate())$[l0lol](+$ + ($ < _ ? 1 : -1) * HOUR_MS)
};
mini.parseDate = function (s, ignoreTimezone) {
    try {
        var d = eval(s);
        if (d && d.getFullYear)return d
    } catch (ex) {
    }
    if (typeof s == "object")return isNaN(s) ? null : s;
    if (typeof s == "number") {
        d = new Date(s * 1000);
        if (d[OOo0o1]() != s)return null;
        return isNaN(d) ? null : d
    }
    if (typeof s == "string") {
        m = s.match(/^([0-9]{4})([0-9]{2})([0-9]{0,2})$/);
        if (m) {
            var date = new Date(parseInt(m[1], 10), parseInt(m[2], 10) - 1);
            if (m[3])date.setDate(m[3]);
            return date
        }
        m = s.match(/^([0-9]{4}).([0-9]*)$/);
        if (m) {
            date = new Date(m[1], m[2] - 1);
            return date
        }
        if (s.match(/^\d+(\.\d+)?$/)) {
            d = new Date(parseFloat(s) * 1000);
            if (d[OOo0o1]() != s)return null; else return d
        }
        if (ignoreTimezone === undefined)ignoreTimezone = true;
        d = mini.parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);
        return isNaN(d) ? null : d
    }
    return null
};
mini.parseISO8601 = function (D, $) {
    var _ = D.match(/^([0-9]{4})([-\/]([0-9]{1,2})([-\/]([0-9]{1,2})([T ]([0-9]{1,2}):([0-9]{1,2})(:([0-9]{1,2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
    if (!_) {
        _ = D.match(/^([0-9]{4})[-\/]([0-9]{2})[-\/]([0-9]{2})[T ]([0-9]{1,2})/);
        if (_) {
            var A = new Date(_[1], _[2] - 1, _[3], _[4]);
            return A
        }
        _ = D.match(/^([0-9]{4}).([0-9]*)$/);
        if (_) {
            A = new Date(_[1], _[2] - 1);
            return A
        }
        _ = D.match(/^([0-9]{4}).([0-9]*).([0-9]*)/);
        if (_) {
            A = new Date(_[1], _[2] - 1, _[3]);
            return A
        }
        _ = D.match(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/);
        if (!_)return null; else {
            A = new Date(_[3], _[1] - 1, _[2]);
            return A
        }
    }
    A = new Date(_[1], 0, 1);
    if ($ || !_[14]) {
        var C = new Date(_[1], 0, 1, 9, 0);
        if (_[3]) {
            A.setMonth(_[3] - 1);
            C.setMonth(_[3] - 1)
        }
        if (_[5]) {
            A.setDate(_[5]);
            C.setDate(_[5])
        }
        mini.fixDate(A, C);
        if (_[7])A.setHours(_[7]);
        if (_[8])A.setMinutes(_[8]);
        if (_[10])A.setSeconds(_[10]);
        if (_[12])A.setMilliseconds(Number("0." + _[12]) * 1000);
        mini.fixDate(A, C)
    } else {
        A.setUTCFullYear(_[1], _[3] ? _[3] - 1 : 0, _[5] || 1);
        A.setUTCHours(_[7] || 0, _[8] || 0, _[10] || 0, _[12] ? Number("0." + _[12]) * 1000 : 0);
        var B = Number(_[16]) * 60 + (_[18] ? Number(_[18]) : 0);
        B *= _[15] == "-" ? 1 : -1;
        A = new Date(+A + (B * 60 * 1000))
    }
    return A
};
mini.parseTime = function (F, G) {
    if (!F)return null;
    var C = parseInt(F);
    if (C == F && G) {
        $ = new Date(0);
        var _ = G.charAt(0);
        if (_ == "H")$.setHours(C); else if (_ == "m")$.setMinutes(C); else if (_ == "s")$.setSeconds(C);
        if (isNaN($))$ = null;
        return $
    }
    var $ = mini.parseDate(F);
    if (!$) {
        var E = F.split(":"), A = parseInt(parseFloat(E[0])), D = parseInt(parseFloat(E[1])), B = parseInt(parseFloat(E[2]));
        if (!isNaN(A) && !isNaN(D) && !isNaN(B)) {
            $ = new Date(0);
            $.setHours(A);
            $.setMinutes(D);
            $.setSeconds(B)
        }
        if (!isNaN(A) && (G == "H" || G == "HH")) {
            $ = new Date(0);
            $.setHours(A)
        } else if (!isNaN(A) && !isNaN(D) && (G == "H:mm" || G == "HH:mm")) {
            $ = new Date(0);
            $.setHours(A);
            $.setMinutes(D)
        } else if (!isNaN(A) && !isNaN(D) && G == "mm:ss") {
            $ = new Date(0);
            $.setMinutes(A);
            $.setSeconds(D)
        }
    }
    return $
};
mini.dateInfo = {
    monthsLong: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
    monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
    daysLong: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
    daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
    quarterLong: ["\u4e00\u5b63\u5ea6", "\u4e8c\u5b63\u5ea6", "\u4e09\u5b63\u5ea6", "\u56db\u5b63\u5ea6"],
    quarterShort: ["Q1", "Q2", "Q2", "Q4"],
    halfYearLong: ["\u4e0a\u534a\u5e74", "\u4e0b\u534a\u5e74"],
    patterns: {
        "d": "yyyy-M-d",
        "D": "yyyy\u5e74M\u6708d\u65e5",
        "f": "yyyy\u5e74M\u6708d\u65e5 H:mm",
        "F": "yyyy\u5e74M\u6708d\u65e5 H:mm:ss",
        "g": "yyyy-M-d H:mm",
        "G": "yyyy-M-d H:mm:ss",
        "m": "MMMd\u65e5",
        "o": "yyyy-MM-ddTHH:mm:ss.fff",
        "s": "yyyy-MM-ddTHH:mm:ss",
        "t": "H:mm",
        "T": "H:mm:ss",
        "U": "yyyy\u5e74M\u6708d\u65e5 HH:mm:ss",
        "y": "yyyy\u5e74MM\u6708"
    },
    tt: {"AM": "\u4e0a\u5348", "PM": "\u4e0b\u5348"},
    ten: {"Early": "\u4e0a\u65ec", "Mid": "\u4e2d\u65ec", "Late": "\u4e0b\u65ec"},
    today: "\u4eca\u5929",
    clockType: 24
};
(function (Q) {
    var P = Q.mini;
    if (!P)P = Q.mini = {};
    var R = P.cultures = {}, $ = "en";
    P.cultures[$] = {
        name: $,
        numberFormat: {
            number: {
                pattern: ["n", "-n"],
                decimals: 2,
                decimalsSeparator: ".",
                groupSeparator: ",",
                groupSize: [3]
            },
            percent: {
                pattern: ["n %", "-n %"],
                decimals: 2,
                decimalsSeparator: ".",
                groupSeparator: ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["$n", "($n)"],
                decimals: 2,
                decimalsSeparator: ".",
                groupSeparator: ",",
                groupSize: [3],
                symbol: "$"
            }
        }
    };
    function M($) {
        return P.cultures[$]
    }

    function C($) {
        if ($ && $.name)return $;
        return M($) || P.cultures.current
    }

    P.getCulture = C;
    P.culture = function ($) {
        if ($ !== undefined)P.cultures.current = M($); else return R.current
    };
    P.culture($);
    var H = "string", E = "number", S = function ($) {
        return $ && !!$.unshift
    }, F = {2: /^\d{1,2}/, 4: /^\d{4}/};

    function K(D, $, _) {
        D = D + "";
        $ = typeof $ == E ? $ : 2;
        var C = $ - D.length;
        if (C > 0) {
            var B = A(C, "0");
            return _ ? D + B : B + D
        }
        return D
    }

    function A(_, $) {
        var A = "";
        while (_) {
            _ -= 1;
            A += $
        }
        return A
    }

    var O = /^(n|c|p)(\d*)$/i, G = /^(e)(\d*)$/i, B = /[^0#]/g, I = /[eE][\-+]?[0-9]+/;

    function N(P, Q, J) {
        P = Math.abs(P);
        var C = Q[o110ll](",") != -1, G = Q.split("."), H = (G[0] || "").replace(B, ""), F = (G[1] || "").replace(B, ""), _ = "", N = J.groupSize[0], D = J.decimalsSeparator, I = J.groupSeparator, $ = H[o110ll]("0");
        H = $ == -1 ? "0" : (H.substr($) || "0");
        var A = F.length, M = F.substr(0, F.lastIndexOf("0") + 1).length;

        function O(number, fractionDigits) {
            with (Math) {
                return round(number * pow(10, fractionDigits)) / pow(10, fractionDigits)
            }
        }

        P = O(P, A);
        var E = String(P).split(".");
        value0 = E[0];
        value1 = E[1] || "";
        if (value0) {
            value0 = K(value0, H.length);
            if (C)for (var L = 0; L < Math.floor((value0.length - (1 + L)) / 3); L++)value0 = value0.substring(0, value0.length - (4 * L + 3)) + I + value0.substring(value0.length - (4 * L + 3));
            _ += value0
        }
        if (A > 0) {
            _ += D;
            _ += K(value1.substr(0, A), M, true)
        }
        return _
    }

    function _(I, B, _, G) {
        var H = _.numberFormat.number, E = O.exec(I);
        if (E != null) {
            var D = E[1], $ = E[2];
            if (D == "p")H = _.numberFormat.percent; else if (D == "c")H = _.numberFormat.currency;
            var C = $ ? parseInt($) : H.decimals, F = H.pattern[B < 0 ? 1 : 0];
            F = F.replace("n", "#,#" + (C > 0 ? "." + A(C, "0") : ""));
            I = I.replace(D + $, F).replace("$", _.numberFormat.currency.symbol).replace("%", _.numberFormat.percent.symbol)
        } else if (L(I))if (B < 0 && !G[1])I = "-" + I;
        return I
    }

    function L($) {
        return $[o110ll]("0") != -1 || $[o110ll]("#") != -1
    }

    function D(C) {
        if (!C)return null;
        function $(C) {
            var B = C[o110ll]("0"), A = C[o110ll]("#");
            if (B == -1 || (A != -1 && A < B))B = A;
            var $ = C.lastIndexOf("0"), _ = C.lastIndexOf("#");
            if ($ == -1 || (_ != -1 && _ > $))$ = _;
            return [B, $]
        }

        var _ = $(C), B = _[0], A = _[1];
        return B > -1 ? {begin: B, end: A, format: C.substring(B, A + 1)} : null
    }

    function J(T, U, O) {
        if (typeof T != E)return "";
        if (!U)return String(T);
        var J = U.split(";");
        U = J[0];
        if (T < 0 && J.length >= 2)U = J[1];
        if (T == 0 && J.length >= 3)U = J[2];
        var O = C(O), B = O.numberFormat.number, P = O.numberFormat.percent, R = O.numberFormat.currency, U = _(U, T, O, J), K = U[o110ll](R.symbol) != -1, Q = U[o110ll](P.symbol) != -1, S = U[o110ll](".") != -1, H = L(U), M = K ? R : (Q ? R : B), T = Q ? T * 100 : T, $ = G.exec(U);
        if ($) {
            var F = parseInt($[2]);
            return isNaN(F) ? T.toExponential() : T.toExponential(F)
        }
        if (!H)return U;
        var A = "", I = D(U);
        if (I != null) {
            A = N(T, I.format, M);
            A = U.substr(0, I.begin) + A + U.substr(I.end + 1)
        } else A = U;
        return A
    }

    P.parseInt = function (_, $, B) {
        var A = P.parseFloat(_, $, B);
        if (A)A = A | 0;
        return A
    };
    P.parseFloat = function (_, O, T) {
        if (!_ && _ !== 0)return null;
        if (typeof _ === E)return _;
        if (T && T.split(";")[2] == _)return 0;
        if (I.test(_)) {
            _ = parseFloat(_);
            if (isNaN(_))_ = null;
            return _
        }
        _ = _.toString();
        O = P.getCulture(O);
        var B = O.numberFormat, U = B.number, H = B.percent, J = B.currency, Q = _[o110ll](H.symbol) != -1, M = _[o110ll](J.symbol) != -1, U = M ? J : (Q ? H : U), S = U.pattern[1], C = U.decimals, G = U.decimalsSeparator, N = U.groupSeparator, R = _[o110ll]("-") > -1;

        function F(_, E, B) {
            var C = D(E);
            if (C) {
                var A = E.substr(0, C.begin), $ = E.substr(C.end + 1);
                if (_[o110ll](A) == 0 && _[o110ll]($) > -1) {
                    _ = _.replace(A, "").replace($, "");
                    R = B
                }
            }
            return _
        }

        if (!T) {
            if (R == false) {
                T = S.replace("n", "#,#" + (C > 0 ? "." + A(C, "0") : "")).replace("$", J.symbol).replace("%", H.symbol);
                _ = F(_, T, true)
            }
        } else {
            var K = T.split(";");
            if (K[1]) {
                T = K[1];
                _ = F(_, T, true)
            } else {
                T = K[0];
                var L = _;
                _ = F(L, T, false);
                if (L == _)_ = F(L, "-" + T, true)
            }
        }
        _ = _.split(N).join("").replace(G, ".");
        var $ = _.match(/([0-9,.]+)/g);
        if ($ == null)return null;
        _ = $[0];
        _ = parseFloat(_);
        if (isNaN(_))_ = null; else if (R)_ *= -1;
        if (_ && Q)_ /= 100;
        return _
    };
    P.formatNumber = J
})(this);
mini.Keyboard = {
    Left: 37,
    Top: 38,
    Right: 39,
    Bottom: 40,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    Enter: 13,
    ESC: 27,
    Space: 32,
    Tab: 9,
    Del: 46,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123
};
var ua = navigator.userAgent.toLowerCase(), check = function ($) {
    return $.test(ua)
}, DOC = document, isStrict = document.compatMode == "CSS1Compat", version = function (_, A) {
    var $;
    return (_ && ($ = A.exec(ua))) ? parseFloat($[1]) : 0
}, docMode = document.documentMode, isOpera = check(/opera/), isOpera10_5 = isOpera && check(/version\/10\.5/), isChrome = check(/\bchrome\b/), isWebKit = check(/webkit/), isSafari = !isChrome && check(/safari/), isSafari2 = isSafari && check(/applewebkit\/4/), isSafari3 = isSafari && check(/version\/3/), isSafari4 = isSafari && check(/version\/4/), isSafari5_0 = isSafari && check(/version\/5\.0/), isSafari5 = isSafari && check(/version\/5/), isIE = !isOpera && check(/msie/), isIE7 = isIE && ((check(/msie 7/) && docMode != 8 && docMode != 9 && docMode != 10) || docMode == 7), isIE8 = isIE && ((check(/msie 8/) && docMode != 7 && docMode != 9 && docMode != 10) || docMode == 8), isIE9 = isIE && ((check(/msie 9/) && docMode != 7 && docMode != 8 && docMode != 10) || docMode == 9), isIE10 = isIE && ((check(/msie 10/) && docMode != 7 && docMode != 8 && docMode != 9) || docMode == 10), isIE6 = isIE && !isIE7 && !isIE8 && !isIE9 && !isIE10, isIE11 = (ua[o110ll]("trident") > -1 && ua[o110ll]("rv") > -1), isIE = isIE || isIE11, isFirefox = navigator.userAgent[o110ll]("Firefox") > 0, isGecko = !isWebKit && check(/gecko/), isGecko3 = isGecko && check(/rv:1\.9/), isGecko4 = isGecko && check(/rv:2\.0/), isGecko5 = isGecko && check(/rv:5\./), isGecko10 = isGecko && check(/rv:10\./), isFF3_0 = isGecko3 && check(/rv:1\.9\.0/), isFF3_5 = isGecko3 && check(/rv:1\.9\.1/), isFF3_6 = isGecko3 && check(/rv:1\.9\.2/), isWindows = check(/windows|win32/), isMac = check(/macintosh|mac os x/), isAir = check(/adobeair/), isLinux = check(/linux/), scrollbarSize = null, chromeVersion = version(true, /\bchrome\/(\d+\.\d+)/), firefoxVersion = version(true, /\bfirefox\/(\d+\.\d+)/), ieVersion = version(isIE, /msie (\d+\.\d+)/), IE_V = isIE ? parseInt(ieVersion) : -1, operaVersion = version(isOpera, /version\/(\d+\.\d+)/), safariVersion = version(isSafari, /version\/(\d+\.\d+)/), webKitVersion = version(isWebKit, /webkit\/(\d+\.\d+)/), isSecure = /^https/i.test(window.location.protocol), isBorderBox = isIE && !isStrict;
if (isIE6) {
    try {
        DOC.execCommand("BackgroundImageCache", false, true)
    } catch (e) {
    }
}
mini.boxModel = !isBorderBox;
mini.isIE = isIE;
mini.isIE6 = isIE6;
mini.isIE7 = isIE7;
mini.isIE8 = isIE8;
mini.isIE9 = isIE9;
mini.isIE10 = isIE10;
mini.isIE11 = isIE11;
mini.IE_V = IE_V;
mini.isFirefox = isFirefox;
mini.isOpera = isOpera;
mini.isSafari = isSafari;
mini.isChrome = isChrome;
if (jQuery)jQuery.boxModel = mini.boxModel;
mini.noBorderBox = false;
if (jQuery.boxModel == false && isIE && isIE9 == false)mini.noBorderBox = true;
mini.MouseButton = {Left: 0, Middle: 1, Right: 2};
if (isIE && !isIE9 && !isIE10)mini.MouseButton = {Left: 1, Middle: 4, Right: 2};
mini.append = function (_, A) {
    _ = o0OO(_);
    if (!A || !_)return;
    if (typeof A == "string") {
        if (A.charAt(0) == "#") {
            A = o0OO(A);
            if (!A)return;
            _.appendChild(A);
            return A
        } else {
            if (A[o110ll]("<tr") == 0) {
                return jQuery(_).append(A)[0].lastChild;
                return
            }
            var $ = document.createElement("div");
            $.innerHTML = A;
            A = $.firstChild;
            while ($.firstChild)_.appendChild($.firstChild);
            return A
        }
    } else {
        _.appendChild(A);
        return A
    }
};
mini.prepend = function (_, A) {
    if (typeof A == "string")if (A.charAt(0) == "#")A = o0OO(A); else {
        var $ = document.createElement("div");
        $.innerHTML = A;
        A = $.firstChild
    }
    return jQuery(_).prepend(A)[0].firstChild
};
mini.after = function (_, A) {
    if (typeof A == "string")if (A.charAt(0) == "#")A = o0OO(A); else {
        var $ = document.createElement("div");
        $.innerHTML = A;
        A = $.firstChild
    }
    if (!A || !_)return;
    _.nextSibling ? _.parentNode.insertBefore(A, _.nextSibling) : _.parentNode.appendChild(A);
    return A
};
mini.before = function (_, A) {
    if (typeof A == "string")if (A.charAt(0) == "#")A = o0OO(A); else {
        var $ = document.createElement("div");
        $.innerHTML = A;
        A = $.firstChild
    }
    if (!A || !_)return;
    _.parentNode.insertBefore(A, _);
    return A
};
mini.__wrap = document.createElement("div");
mini.createElements = function ($) {
    mini.removeChilds(mini.__wrap);
    var _ = $[o110ll]("<tr") == 0;
    if (_)$ = "<table>" + $ + "</table>";
    mini.__wrap.innerHTML = $;
    return _ ? mini.__wrap.firstChild.rows : mini.__wrap.childNodes
};
o0OO = function (D, A) {
    if (typeof D == "string") {
        if (D.charAt(0) == "#")D = D.substr(1);
        var _ = document.getElementById(D);
        if (_)return _;
        if (A && !Ol0O(document.body, A)) {
            var B = A.getElementsByTagName("*");
            for (var $ = 0, C = B.length; $ < C; $++) {
                _ = B[$];
                if (_.id == D)return _
            }
            _ = null
        }
        return _
    } else return D
};
olol = function ($, _) {
    $ = o0OO($);
    if (!$)return;
    if (!$.className)return false;
    var A = String($.className).split(" ");
    return A[o110ll](_) != -1
};
l1Oo = function ($, _) {
    if (!_)return;
    if (olol($, _) == false)jQuery($)[Oo1Olo](_)
};
o11o = function ($, _) {
    if (!_)return;
    jQuery($)[OoOo0](_)
};
l011o = function ($) {
    $ = o0OO($);
    var _ = jQuery($);
    return {
        top: parseInt(_.css("margin-top"), 10) || 0,
        left: parseInt(_.css("margin-left"), 10) || 0,
        bottom: parseInt(_.css("margin-bottom"), 10) || 0,
        right: parseInt(_.css("margin-right"), 10) || 0
    }
};
olO0 = function ($) {
    $ = o0OO($);
    var _ = jQuery($);
    return {
        top: parseInt(_.css("border-top-width"), 10) || 0,
        left: parseInt(_.css("border-left-width"), 10) || 0,
        bottom: parseInt(_.css("border-bottom-width"), 10) || 0,
        right: parseInt(_.css("border-right-width"), 10) || 0
    }
};
O1l0lo = function ($) {
    $ = o0OO($);
    var _ = jQuery($);
    return {
        top: parseInt(_.css("padding-top"), 10) || 0,
        left: parseInt(_.css("padding-left"), 10) || 0,
        bottom: parseInt(_.css("padding-bottom"), 10) || 0,
        right: parseInt(_.css("padding-right"), 10) || 0
    }
};
lOool0 = function (_, $) {
    _ = o0OO(_);
    $ = parseInt($);
    if (isNaN($) || !_)return;
    if (jQuery.boxModel) {
        var A = O1l0lo(_), B = olO0(_);
        $ = $ - A.left - A.right - B.left - B.right
    }
    if ($ < 0)$ = 0;
    _.style.width = $ + "px"
};
l10o = function (_, $) {
    _ = o0OO(_);
    $ = parseInt($);
    if (isNaN($) || !_)return;
    if (jQuery.boxModel) {
        var A = O1l0lo(_), B = olO0(_);
        $ = $ - A.top - A.bottom - B.top - B.bottom
    }
    if ($ < 0)$ = 0;
    _.style.height = $ + "px"
};
lo0o = function ($, _) {
    $ = o0OO($);
    if ($.style.display == "none" || $.type == "text/javascript")return 0;
    return _ ? jQuery($).width() : jQuery($).outerWidth()
};
l010 = function ($, _) {
    $ = o0OO($);
    if ($.style.display == "none" || $.type == "text/javascript")return 0;
    return _ ? jQuery($).height() : jQuery($).outerHeight()
};
oool = function (A, C, B, $, _) {
    if (B === undefined) {
        B = C.y;
        $ = C.width;
        _ = C.height;
        C = C.x
    }
    mini[o1lloo](A, C, B);
    lOool0(A, $);
    l10o(A, _)
};
Ol0oO = function (A) {
    var $ = mini.getXY(A), _ = {x: $[0], y: $[1], width: lo0o(A), height: l010(A)};
    _.left = _.x;
    _.top = _.y;
    _.right = _.x + _.width;
    _.bottom = _.y + _.height;
    return _
};
lO01l = function (B, C) {
    B = o0OO(B);
    if (!B || typeof C != "string")return;
    var H = jQuery(B), _ = C.toLowerCase().split(";");
    for (var $ = 0, E = _.length; $ < E; $++) {
        var G = _[$], F = G.split(":");
        if (F.length > 1)if (F.length > 2) {
            var D = F[0].trim();
            F.removeAt(0);
            var A = F.join(":").trim();
            H.css(D, A)
        } else H.css(F[0].trim(), F[1].trim())
    }
};
lo11 = function () {
    var $ = document.defaultView;
    return new Function("el", "style", ["style[o110ll]('-')>-1 && (style=style.replace(/-(\\w)/g,function(m,a){return a.toUpperCase()}));", "style=='float' && (style='", $ ? "cssFloat" : "styleFloat", "');return el.style[style] || ", $ ? "window.getComputedStyle(el,null)[style]" : "el.currentStyle[style]", " || null;"].join(""))
}();
Ol0O = function (A, $) {
    var _ = false;
    A = o0OO(A);
    $ = o0OO($);
    if (A === $)return true;
    if (A && $)if (A.contains) {
        try {
            return A.contains($)
        } catch (B) {
            return false
        }
    } else if (A.compareDocumentPosition)return !!(A.compareDocumentPosition($) & 16); else while ($ = $.parentNode)_ = $ == A || _;
    return _
};
ol000 = function (B, A, $) {
    B = o0OO(B);
    var C = document.body, _ = 0, D;
    $ = $ || 50;
    if (typeof $ != "number") {
        D = o0OO($);
        $ = 10
    }
    while (B && B.nodeType == 1 && _ < $ && B != C && B != D) {
        if (olol(B, A))return B;
        _++;
        B = B.parentNode
    }
    return null
};
mini.copyTo(mini, {
    byId: o0OO,
    hasClass: olol,
    addClass: l1Oo,
    removeClass: o11o,
    getMargins: l011o,
    getBorders: olO0,
    getPaddings: O1l0lo,
    setWidth: lOool0,
    setHeight: l10o,
    getWidth: lo0o,
    getHeight: l010,
    setBox: oool,
    getBox: Ol0oO,
    setStyle: lO01l,
    getStyle: lo11,
    repaint: function ($) {
        if (!$)$ = document.body;
        l1Oo($, "mini-repaint");
        setTimeout(function () {
            o11o($, "mini-repaint")
        }, 1)
    },
    getSize: function ($, _) {
        return {width: lo0o($, _), height: l010($, _)}
    },
    setSize: function (A, $, _) {
        lOool0(A, $);
        l10o(A, _)
    },
    setX: function (_, B) {
        B = parseInt(B);
        var $ = jQuery(_).offset(), A = parseInt($.top);
        if (A === undefined)A = $[1];
        mini[o1lloo](_, B, A)
    },
    setY: function (_, A) {
        A = parseInt(A);
        var $ = jQuery(_).offset(), B = parseInt($.left);
        if (B === undefined)B = $[0];
        mini[o1lloo](_, B, A)
    },
    setXY: function (_, B, A) {
        var $ = {left: parseInt(B), top: parseInt(A)};
        jQuery(_).offset($);
        if (jQuery.fn.jquery == "1.4")jQuery(_).offset($)
    },
    getXY: function (_) {
        var $ = jQuery(_).offset();
        return [parseInt($.left), parseInt($.top)]
    },
    getViewportBox: function () {
        var $ = jQuery(window).width(), _ = jQuery(window).height(), B = jQuery(document).scrollLeft(), A = jQuery(document.body).scrollTop();
        if (A == 0 && document.documentElement)A = document.documentElement.scrollTop;
        return {x: B, y: A, top: A, left: B, width: $, height: _, right: B + $, bottom: A + _}
    },
    showAt: function (E) {
        var $ = jQuery;
        E = jQuery.extend({
            el: null,
            x: "center",
            y: "center",
            offset: [0, 0],
            fixed: false,
            zindex: mini.getMaxZIndex(),
            timeout: 0,
            timeoutHandler: null,
            animation: false
        }, E);
        var F = jQuery(E.el)[0], I = E.x, G = E.y, C = E.offset[0], _ = E.offset[1], B = E.zindex, A = E.fixed, D = E.animation;
        if (!F)return;
        if (E.timeout)setTimeout(function () {
            if (E.timeoutHandler)E.timeoutHandler()
        }, E.timeout);
        var J = ";position:absolute;display:block;left:auto;top:auto;right:auto;bottom:auto;margin:0;z-index:" + B + ";";
        lO01l(F, J);
        J = "";
        if (E && mini.isNumber(E.x) && mini.isNumber(E.y)) {
            if (E.fixed && !mini.isIE6)J += ";position:fixed;";
            lO01l(F, J);
            mini[o1lloo](E.el, E.x, E.y);
            return
        }
        if (I == "left")J += "left:" + C + "px;"; else if (I == "right")J += "right:" + C + "px;"; else {
            var H = mini.getSize(F);
            J += "left:50%;margin-left:" + (-H.width * 0.5) + "px;"
        }
        if (G == "top")J += "top:" + _ + "px;"; else if (G == "bottom")J += "bottom:" + _ + "px;"; else {
            H = mini.getSize(F);
            J += "top:50%;margin-top:" + (-H.height * 0.5) + "px;"
        }
        if (A && !mini.isIE6)J += "position:fixed";
        lO01l(F, J)
    },
    getChildNodes: function (A, C) {
        A = o0OO(A);
        if (!A)return;
        var E = A.childNodes, B = [];
        for (var $ = 0, D = E.length; $ < D; $++) {
            var _ = E[$];
            if (_.nodeType == 1 || C === true)B.push(_)
        }
        return B
    },
    removeNode: isIE ? function () {
        var $;
        return function (_) {
            if (_ && _.tagName != "BODY") {
                $ = $ || document.createElement("div");
                $.appendChild(_);
                $.innerHTML = ""
            }
        }
    }() : function ($) {
        if ($ && $.parentNode && $.tagName != "BODY")$.parentNode.removeChild($)
    },
    removeChilds: function (B, _) {
        B = o0OO(B);
        if (!B)return;
        var C = mini[l00oo](B, true);
        for (var $ = 0, D = C.length; $ < D; $++) {
            var A = C[$];
            if (_ && A == _); else B.removeChild(C[$])
        }
    },
    isAncestor: Ol0O,
    findParent: ol000,
    findChild: function (_, A) {
        _ = o0OO(_);
        var B = _.getElementsByTagName("*");
        for (var $ = 0, C = B.length; $ < C; $++) {
            var _ = B[$];
            if (olol(_, A))return _
        }
    },
    isAncestor: function (A, $) {
        var _ = false;
        A = o0OO(A);
        $ = o0OO($);
        if (A === $)return true;
        if (A && $)if (A.contains) {
            try {
                return A.contains($)
            } catch (B) {
                return false
            }
        } else if (A.compareDocumentPosition)return !!(A.compareDocumentPosition($) & 16); else while ($ = $.parentNode)_ = $ == A || _;
        return _
    },
    getOffsetsTo: function (_, A) {
        var $ = this.getXY(_), B = this.getXY(A);
        return [$[0] - B[0], $[1] - B[1]]
    },
    scrollIntoView: function (I, H, F) {
        var B = o0OO(H) || document.body, $ = this.getOffsetsTo(I, B), C = $[0] + B.scrollLeft, J = $[1] + B.scrollTop, D = J + I.offsetHeight, A = C + I.offsetWidth, G = B.clientHeight, K = parseInt(B.scrollTop, 10), _ = parseInt(B.scrollLeft, 10), L = K + G, E = _ + B.clientWidth;
        if (I.offsetHeight > G || J < K)B.scrollTop = J; else if (D > L)B.scrollTop = D - G;
        B.scrollTop = B.scrollTop;
        if (F !== false) {
            if (I.offsetWidth > B.clientWidth || C < _)B.scrollLeft = C; else if (A > E)B.scrollLeft = A - B.clientWidth;
            B.scrollLeft = B.scrollLeft
        }
        return this
    },
    getScrollOffset: function () {
        if (!mini._scrollOffset) {
            var $ = document.createElement("div");
            $.style.cssText = "width:100px;background:#eee;height:50px;overflow:scroll;padding:1px;position:absolute;left:-1000px;top:0;box-sizing:content-box;-moz-box-sizing:content-box;";
            document.body.appendChild($);
            mini._scrollOffset = $.offsetWidth - $.clientWidth;
            $.parentNode.removeChild($)
        }
        return mini._scrollOffset
    },
    setOpacity: function (_, $) {
        jQuery(_).css({"opacity": $})
    },
    selectable: function (_, $) {
        _ = o0OO(_);
        if (!!$) {
            jQuery(_)[OoOo0]("mini-unselectable");
            if (isIE)_.unselectable = "off"; else {
                _.style.MozUserSelect = "";
                _.style.KhtmlUserSelect = "";
                _.style.UserSelect = ""
            }
        } else {
            jQuery(_)[Oo1Olo]("mini-unselectable");
            if (isIE)_.unselectable = "on"; else {
                _.style.MozUserSelect = "none";
                _.style.UserSelect = "none";
                _.style.KhtmlUserSelect = "none"
            }
        }
    },
    selectRange: function (B, A, _) {
        if (B.createTextRange) {
            var $ = B.createTextRange();
            $.moveStart("character", A);
            $.moveEnd("character", _ - B.value.length);
            $[lOol1O]()
        } else if (B.setSelectionRange)B.setSelectionRange(A, _);
        try {
            B[O1loo]()
        } catch (C) {
        }
    },
    getSelectRange: function (A) {
        A = o0OO(A);
        if (!A)return;
        try {
            A[O1loo]()
        } catch (C) {
        }
        var $ = 0, B = 0;
        if (A.createTextRange && document.selection) {
            var _ = document.selection.createRange().duplicate();
            _.moveEnd("character", A.value.length);
            if (_.text === "")$ = A.value.length; else $ = A.value.lastIndexOf(_.text);
            _ = document.selection.createRange().duplicate();
            _.moveStart("character", -A.value.length);
            B = _.text.length
        } else {
            $ = A.selectionStart;
            B = A.selectionEnd
        }
        return [$, B]
    }
});
(function () {
    var _ = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, A = document.createElement("div");
    A.setAttribute("class", "t");
    var B = A.className === "t";
    mini.setAttr = function (A, C, $) {
        A.setAttribute(B ? C : (_[C] || C), $)
    };
    mini.getAttr = function (D, F) {
        if (F == "height")return $(D).attr("height");
        if (F == "value" && (isIE6 || isIE7)) {
            var C = D.attributes[F];
            return C ? C.value : null
        }
        var G = D.getAttribute(B ? F : (_[F] || F));
        if (typeof G == "function" || F == "maxLength") {
            var A = D.attributes[F];
            if (A)G = A.value
        }
        if (!G && F == "onload") {
            var E = D.getAttributeNode ? D.getAttributeNode(F) : null;
            if (E)G = E.nodeValue
        }
        return G
    }
})();
mini_preventDefault = function () {
    if (window.event)window.event.returnValue = false
};
mini_stopPropogation = function () {
    if (window.event)window.event.cancelBubble = true
};
o1l0lo = function (_, $, C, A) {
    if (!_)return;
    var B = "on" + $.toLowerCase();
    _[B] = function (_) {
        _ = _ || window.event;
        if (!_.target)_.target = _.srcElement;
        if (!_.preventDefault)_.preventDefault = mini_preventDefault;
        if (!_.stopPropogation)_.stopPropogation = mini_stopPropogation;
        var $ = C[o1O0l0](A, _);
        if ($ === false)return false
    }
};
Ol1O = function (_, $, D, A) {
    _ = o0OO(_);
    A = A || _;
    if (!_ || !$ || !D || !A)return false;
    var B = mini[o1O1l1](_, $, D, A);
    if (B)return false;
    var C = mini.createDelegate(D, A);
    mini.listeners.push([_, $, D, A, C]);
    if (mini.isFirefox && $ == "mousewheel")$ = "DOMMouseScroll";
    jQuery(_).bind($, C)
};
lol0Oo = function (_, $, C, A) {
    _ = o0OO(_);
    A = A || _;
    if (!_ || !$ || !C || !A)return false;
    var B = mini[o1O1l1](_, $, C, A);
    if (!B)return false;
    mini.listeners.remove(B);
    if (mini.isFirefox && $ == "mousewheel")$ = "DOMMouseScroll";
    jQuery(_).unbind($, B[4])
};
mini.copyTo(mini, {
    listeners: [], on: Ol1O, un: lol0Oo, _getListeners: function () {
        var B = mini.listeners;
        for (var $ = B.length - 1; $ >= 0; $--) {
            var A = B[$];
            try {
                if (A[0] == 1 && A[1] == 1 && A[2] == 1 && A[3] == 1)var _ = 1
            } catch (C) {
                B.removeAt($)
            }
        }
        return B
    }, findListener: function (A, _, F, B) {
        A = o0OO(A);
        B = B || A;
        if (!A || !_ || !F || !B)return false;
        var D = mini._getListeners();
        for (var $ = D.length - 1; $ >= 0; $--) {
            var C = D[$];
            try {
                if (C[0] == A && C[1] == _ && C[2] == F && C[3] == B)return C
            } catch (E) {
            }
        }
    }, clearEvent: function (A, _) {
        A = o0OO(A);
        if (!A)return false;
        var C = mini._getListeners();
        for (var $ = C.length - 1; $ >= 0; $--) {
            var B = C[$];
            if (B[0] == A)if (!_ || _ == B[1])lol0Oo(A, B[1], B[2], B[3])
        }
        A.onmouseover = A.onmousedown = null
    }
});
mini.__windowResizes = [];
mini.onWindowResize = function (_, $) {
    mini.__windowResizes.push([_, $])
};
Ol1O(window, "resize", function (C) {
    var _ = mini.__windowResizes;
    for (var $ = 0, B = _.length; $ < B; $++) {
        var A = _[$];
        A[0][o1O0l0](A[1], C)
    }
});
mini.htmlEncode = function (_) {
    if (typeof _ !== "string")return _;
    var $ = "";
    if (_.length == 0)return "";
    $ = _;
    $ = $.replace(/&/g, "&amp;");
    $ = $.replace(/</g, "&lt;");
    $ = $.replace(/>/g, "&gt;");
    $ = $.replace(/ /g, "&nbsp;");
    $ = $.replace(/\'/g, "&#39;");
    $ = $.replace(/\"/g, "&quot;");
    return $
};
mini.htmlDecode = function (_) {
    if (typeof _ !== "string")return _;
    var $ = "";
    if (_.length == 0)return "";
    $ = _.replace(/&gt;/g, "&");
    $ = $.replace(/&lt;/g, "<");
    $ = $.replace(/&gt;/g, ">");
    $ = $.replace(/&nbsp;/g, " ");
    $ = $.replace(/&#39;/g, "'");
    $ = $.replace(/&quot;/g, "\"");
    return $
};
mini.copyTo(Array.prototype, {
    add: Array[O11Ol1].enqueue = function ($) {
        this[this.length] = $;
        return this
    }, getRange: function (A, B) {
        var C = [];
        for (var _ = A; _ <= B; _++) {
            var $ = this[_];
            if ($)C[C.length] = $
        }
        return C
    }, addRange: function (A) {
        for (var $ = 0, _ = A.length; $ < _; $++)this[this.length] = A[$];
        return this
    }, clear: function () {
        this.length = 0;
        return this
    }, clone: function () {
        if (this.length === 1)return [this[0]]; else return Array.apply(null, this)
    }, contains: function ($) {
        return (this[o110ll]($) >= 0)
    }, indexOf: function (_, B) {
        var $ = this.length;
        for (var A = (B < 0) ? Math[O0OOO](0, $ + B) : B || 0; A < $; A++)if (this[A] === _)return A;
        return -1
    }, dequeue: function () {
        return this.shift()
    }, insert: function (_, $) {
        this.splice(_, 0, $);
        return this
    }, insertRange: function (_, B) {
        for (var A = B.length - 1; A >= 0; A--) {
            var $ = B[A];
            this.splice(_, 0, $)
        }
        return this
    }, remove: function (_) {
        var $ = this[o110ll](_);
        if ($ >= 0)this.splice($, 1);
        return ($ >= 0)
    }, removeAt: function ($) {
        var _ = this[$];
        this.splice($, 1);
        return _
    }, removeRange: function (_) {
        _ = _.clone();
        for (var $ = 0, A = _.length; $ < A; $++)this.remove(_[$])
    }
});
mini._MaskID = 1;
mini._MaskObjects = {};
mini[lOO0O0] = function (C) {
    var _ = o0OO(C);
    if (mini.isElement(_))C = {el: _}; else if (typeof C == "string")C = {html: C};
    C = mini.copyTo({html: "", cls: "", style: "", backStyle: ""}, C);
    C.el = o0OO(C.el);
    if (!C.el)C.el = document.body;
    _ = C.el;
    mini["unmask"](C.el);
    _._maskid = mini._MaskID++;
    mini._MaskObjects[_._maskid] = C;
    var $ = mini.append(_, "<div class=\"mini-mask\">" + "<div class=\"mini-mask-background\" style=\"" + C.backStyle + "\"></div>" + "<div class=\"mini-mask-msg " + C.cls + "\" style=\"" + C.style + "\">" + C.html + "</div>" + "</div>");
    if (_ == document.body)l1Oo($, "mini-fixed");
    C.maskEl = $;
    if (!mini.isNull(C.opacity))mini.setOpacity($.firstChild, C.opacity);
    function A() {
        B.style.display = "block";
        var $ = mini.getSize(B);
        B.style.marginLeft = -$.width / 2 + "px";
        B.style.marginTop = -$.height / 2 + "px";
        B.style.zIndex = mini.getMaxZIndex()
    }

    var B = $.lastChild;
    B.style.display = "none";
    setTimeout(function () {
        A()
    }, 0)
};
mini["unmask"] = function (_) {
    _ = o0OO(_);
    if (!_)_ = document.body;
    var A = mini._MaskObjects[_._maskid];
    if (!A)return;
    delete mini._MaskObjects[_._maskid];
    var $ = A.maskEl;
    A.maskEl = null;
    if ($ && $.parentNode)$.parentNode.removeChild($)
};
mini.Cookie = {
    get: function (D) {
        var A = document.cookie.split("; "), B = null;
        for (var $ = 0; $ < A.length; $++) {
            var _ = A[$].split("=");
            if (D == _[0])B = _
        }
        if (B) {
            var C = B[1];
            if (C === undefined)return C;
            return unescape(C)
        }
        return null
    }, set: function (C, $, B, A) {
        var _ = new Date();
        if (B != null)_ = new Date(_[OOo0o1]() + (B * 1000 * 3600 * 24));
        document.cookie = C + "=" + escape($) + ((B == null) ? "" : ("; expires=" + _.toGMTString())) + ";path=/" + (A ? "; domain=" + A : "")
    }, del: function (_, $) {
        this[OO1O1l](_, null, -100, $)
    }
};
mini.copyTo(mini, {
    treeToArray: function (C, I, J, A, $) {
        if (!I)I = "children";
        var F = [];
        for (var H = 0, D = C.length; H < D; H++) {
            var B = C[H];
            F[F.length] = B;
            if (A)B[A] = $;
            var _ = B[I];
            if (_ && _.length > 0) {
                var E = B[J], G = this[lol11](_, I, J, A, E);
                F.addRange(G)
            }
        }
        return F
    }, arrayToTree: function (I, H, J, _) {
        if (!H)H = "children";
        J = J || "_id";
        _ = _ || "_pid";
        var B = [], C = {};
        for (var G = 0, D = I.length; G < D; G++) {
            var $ = I[G];
            if (!$)continue;
            var F = mini._getMap(J, $);
            if (F !== null && F !== undefined)C[F] = $;
            delete $[H]
        }
        for (G = 0, D = I.length; G < D; G++) {
            var $ = I[G], E = mini._getMap(_, $), A = C[E];
            if (!A) {
                B.push($);
                continue
            }
            if (!A[H])A[H] = [];
            A[H].push($)
        }
        return B
    }
});
mini.treeToList = mini[lol11];
mini.listToTree = mini.arrayToTree;
function UUID() {
    var A = [], _ = "0123456789ABCDEF".split("");
    for (var $ = 0; $ < 36; $++)A[$] = Math.floor(Math.random() * 16);
    A[14] = 4;
    A[19] = (A[19] & 3) | 8;
    for ($ = 0; $ < 36; $++)A[$] = _[A[$]];
    A[8] = A[13] = A[18] = A[23] = "-";
    return A.join("")
}
String.format = function (_) {
    var $ = Array[O11Ol1].slice[o1O0l0](arguments, 1);
    _ = _ || "";
    return _.replace(/\{(\d+)\}/g, function (A, _) {
        return $[_]
    })
};
String[O11Ol1].trim = function () {
    var $ = /^\s+|\s+$/g;
    return function () {
        return this.replace($, "")
    }
}();
mini.copyTo(mini, {
    measureText: function (B, _, C) {
        if (!this.measureEl)this.measureEl = mini.append(document.body, "<div></div>");
        this.measureEl.style.cssText = "position:absolute;left:-1000px;top:-1000px;visibility:hidden;";
        if (typeof B == "string")this.measureEl.className = B; else {
            this.measureEl.className = "";
            var G = jQuery(B), A = jQuery(this.measureEl), F = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
            for (var $ = 0, E = F.length; $ < E; $++) {
                var D = F[$];
                A.css(D, G.css(D))
            }
        }
        if (C)lO01l(this.measureEl, C);
        this.measureEl.innerHTML = _;
        return mini.getSize(this.measureEl)
    }
});
if (typeof mini_layoutOnParse == "undefined")mini_layoutOnParse = true;
mini.enableLayout = true;
jQuery(function () {
    mini.updateDevice();
    setTimeout(function () {
        var $ = document.documentElement;
        if ((isIE6 || isIE7) && (lo11(document.body, "overflow") == "hidden" || ($ && lo11($, "overflow") == "hidden"))) {
            jQuery(document.body).css("overflow", "visible");
            if ($)jQuery($).css("overflow", "visible")
        }
        mini.__LastWindowWidth = document.documentElement.clientWidth;
        mini.__LastWindowHeight = document.documentElement.clientHeight;
        var _ = new Date();
        mini.isReady = true;
        mini.parse(null, mini_layoutOnParse);
        lO0l()
    }, 1)
});
mini_onload = function ($) {
    Ol1O(window, "resize", mini_onresize)
};
Ol1O(window, "load", mini_onload);
mini.__LastWindowWidth = document.documentElement.clientWidth;
mini.__LastWindowHeight = document.documentElement.clientHeight;
mini.doWindowResizeTimer = null;
mini.allowLayout = true;
mini_onresize = function (A) {
    mini.updateDevice();
    if (mini.doWindowResizeTimer)clearTimeout(mini.doWindowResizeTimer);
    Ol01o = mini.isWindowDisplay();
    if (Ol01o == false || mini.allowLayout == false)return;
    if (typeof Ext != "undefined")mini.doWindowResizeTimer = setTimeout(function () {
        var _ = document.documentElement.clientWidth, $ = document.documentElement.clientHeight;
        if (mini.__LastWindowWidth == _ && mini.__LastWindowHeight == $); else {
            mini.__LastWindowWidth = _;
            mini.__LastWindowHeight = $;
            mini.layout(null, false)
        }
        mini.doWindowResizeTimer = null
    }, 300); else {
        var $ = 100;
        try {
            if (parent && parent != window && parent.mini)$ = 0
        } catch (_) {
        }
        mini.doWindowResizeTimer = setTimeout(function () {
            var _ = document.documentElement.clientWidth, $ = document.documentElement.clientHeight;
            if (mini.__LastWindowWidth == _ && mini.__LastWindowHeight == $); else {
                mini.__LastWindowWidth = _;
                mini.__LastWindowHeight = $;
                mini.layout(null, false)
            }
            mini.doWindowResizeTimer = null
        }, $)
    }
};
mini[l0Ooo] = function (_, A) {
    var $ = A || document.body;
    while (1) {
        if (_ == null || !_.style)return false;
        if (_ && _.style && _.style.display == "none")return false;
        if (_ == $)return true;
        _ = _.parentNode
    }
    return true
};
mini.isWindowDisplay = function () {
    try {
        var _ = window.parent, E = _ != window;
        if (E) {
            var C = _.document.getElementsByTagName("iframe"), H = _.document.getElementsByTagName("frame"), G = [];
            for (var $ = 0, D = C.length; $ < D; $++)G.push(C[$]);
            for ($ = 0, D = H.length; $ < D; $++)G.push(H[$]);
            var B = null;
            for ($ = 0, D = G.length; $ < D; $++) {
                var A = G[$];
                if (A.contentWindow == window) {
                    B = A;
                    break
                }
            }
            if (!B)return false;
            return mini[l0Ooo](B, _.document.body)
        } else return true
    } catch (F) {
        return true
    }
};
Ol01o = mini.isWindowDisplay();
mini.layoutIFrames = function ($) {
    if (!document.body)return;
    if (!$)$ = document.body;
    var _ = $.getElementsByTagName("iframe");
    setTimeout(function () {
        for (var A = 0, C = _.length; A < C; A++) {
            var B = _[A];
            try {
                if (mini[l0Ooo](B) && Ol0O($, B)) {
                    if (B.contentWindow.mini)if (B.contentWindow.Ol01o == false) {
                        B.contentWindow.Ol01o = B.contentWindow.mini.isWindowDisplay();
                        B.contentWindow.mini.layout()
                    } else B.contentWindow.mini.layout(null, false);
                    B.contentWindow.mini.layoutIFrames()
                }
            } catch (D) {
            }
        }
    }, 30)
};
jQuery.ajaxSetup({cache: false});
if (isIE)setInterval(function () {
}, 20000);
mini_unload = function (H) {
    try {
        var E = mini._getTopWindow();
        E[mini._WindowID] = "";
        delete E[mini._WindowID]
    } catch (D) {
    }
    var G = document.body.getElementsByTagName("iframe");
    if (G.length > 0) {
        var F = [];
        for (var $ = 0, C = G.length; $ < C; $++)F.push(G[$]);
        for ($ = 0, C = F.length; $ < C; $++) {
            try {
                var B = F[$];
                B._ondestroy = null;
                B.onload = function () {
                };
                jQuery(B).unbind("load");
                B.src = "";
                if (mini.isIE) {
                    try {
                        B.contentWindow.document.write("");
                        B.contentWindow.document.close()
                    } catch (D) {
                    }
                }
                if (B.parentNode)B.parentNode.removeChild(B)
            } catch (H) {
            }
        }
    }
    var A = mini.getComponents().clone();
    for ($ = 0, C = A.length; $ < C; $++) {
        var _ = A[$];
        if (_.destroyed !== true)_[l0lOl](false)
    }
    A.length = 0;
    A = null;
    mini[o11l00](window);
    mini[o11l00](document);
    lol0Oo(window, "unload", mini_unload);
    lol0Oo(window, "load", mini_onload);
    lol0Oo(window, "resize", mini_onresize);
    mini.components = {};
    mini.classes = {};
    mini.uiClasses = {};
    mini.uids = {};
    mini._topWindow = null;
    window.mini = null;
    window.Owner = null;
    window.CloseOwnerWindow = null
};
Ol1O(window, "unload", mini_unload);
function _o000O1() {
}
mini.zIndex = 1000;
mini.zindex = mini.getMaxZIndex = function () {
    return mini.zIndex++
};
function js_isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true
    } catch ($) {
        return false
    }
}
function O0l10(A) {
    if (js_isTouchDevice()) {
        var _ = typeof A == "string" ? document.getElementById(A) : A, $ = 0;
        _.addEventListener("touchstart", function (_) {
            $ = this.scrollTop + _.touches[0].pageY;
            _.preventDefault()
        }, false);
        _.addEventListener("touchmove", function (_) {
            this.scrollTop = $ - _.touches[0].pageY;
            _.preventDefault()
        }, false)
    }
}
lOO0O = function (A) {
    A = o0OO(A);
    if (!A || !isIE || isIE10 || isIE11)return;
    function $() {
        var _ = A._placeholder_label;
        if (!_)return;
        var $ = A.getAttribute("placeholder");
        if (!$)$ = A.placeholder;
        if (!A.value && !A.disabled) {
            _.innerHTML = $;
            _.style.display = ""
        } else _.style.display = "none"
    }

    if (A._placeholder) {
        $();
        return
    }
    A._placeholder = true;
    var _ = document.createElement("label");
    _.className = "mini-placeholder-label";
    A.parentNode.appendChild(_);
    A._placeholder_label = _;
    _.onmousedown = function () {
        try {
            A[O1loo]()
        } catch ($) {
        }
    };
    A.onpropertychange = function (_) {
        _ = _ || window.event;
        if (_.propertyName == "value")$()
    };
    $();
    Ol1O(A, "focus", function ($) {
        if (!A[lOlo0])_.style.display = "none"
    });
    Ol1O(A, "blur", function (_) {
        $()
    })
};
mini.ajax = function ($) {
    if (!$.dataType)$.dataType = "text";
    return window.jQuery.ajax($)
};
oOll1 = function (ajaxData, scope) {
    var obj = ajaxData, t = typeof ajaxData;
    if (t == "string") {
        obj = eval("(" + ajaxData + ")");
        if (typeof obj == "function")obj = obj[o1O0l0](scope)
    }
    return obj
};
if (!jQuery.fn[Ol1oO1])jQuery.fn[Ol1oO1] = function (_, $, A, B) {
    return this.delegate($, _, A, B)
};
mini._lastDevice;
mini.updateDevice = function () {
    var B = "mini-xs", _ = $(window).width(), A = "xs";
    if (_ > 768) {
        B += " mini-sm";
        A = "sm"
    }
    if (_ > 992) {
        B += " mini-md";
        A = "md"
    }
    if (_ > 1200) {
        B += " mini-lg";
        A = "lg"
    }
    B += " mini-" + A + "-active";
    jQuery(document.documentElement)[OoOo0]("mini-xs mini-sm mini-md mini-lg mini-xs-active mini-sm-active mini-md-active mini-lg-active ")[Oo1Olo](B);
    if (mini._lastDevice != B)$(window).triggerHandler("devicechange", A);
    mini._lastDevice = B
};
if (typeof window.rootpath == "undefined")rootpath = "/";
mini.loadJS = function (_, $) {
    if (!_)return;
    if (typeof $ == "function")return loadJS._async(_, $); else return loadJS._sync(_)
};
mini.loadJS._js = {};
mini.loadJS._async = function (D, _) {
    var C = mini.loadJS._js[D];
    if (!C)C = mini.loadJS._js[D] = {create: false, loaded: false, callbacks: []};
    if (C.loaded) {
        setTimeout(function () {
            _()
        }, 1);
        return
    } else {
        C.callbacks.push(_);
        if (C.create)return
    }
    C.create = true;
    var B = document.getElementsByTagName("head")[0], A = document.createElement("script");
    A.src = D;
    A.type = "text/javascript";
    function $() {
        for (var $ = 0; $ < C.callbacks.length; $++) {
            var _ = C.callbacks[$];
            if (_)_()
        }
        C.callbacks.length = 0
    }

    setTimeout(function () {
        if (document.all)A.onreadystatechange = function () {
            if (A.readyState == "loaded" || A.readyState == "complete") {
                $();
                C.loaded = true
            }
        }; else A.onload = function () {
            $();
            C.loaded = true
        };
        B.appendChild(A)
    }, 1);
    return A
};
mini.loadJS._sync = function (A) {
    if (loadJS._js[A])return;
    loadJS._js[A] = {create: true, loaded: true, callbacks: []};
    var _ = document.getElementsByTagName("head")[0], $ = document.createElement("script");
    $.type = "text/javascript";
    $.text = loadText(A);
    _.appendChild($);
    return $
};
mini.loadText = function (C) {
    var B = "", D = document.all && location.protocol == "file:", A = null;
    if (D)A = new ActiveXObject("Microsoft.XMLHTTP"); else if (window.XMLHttpRequest)A = new XMLHttpRequest(); else if (window.ActiveXObject)A = new ActiveXObject("Microsoft.XMLHTTP");
    A.onreadystatechange = $;
    var _ = "_t=" + new Date()[OOo0o1]();
    if (C[o110ll]("?") == -1)_ = "?" + _; else _ = "&" + _;
    C += _;
    A.open("GET", C, false);
    A.send(null);
    function $() {
        if (A.readyState == 4) {
            var $ = D ? 0 : 200;
            if (A.status == $)B = A.responseText
        }
    }

    return B
};
mini.loadJSON = function (url) {
    var text = loadText(url), o = eval("(" + text + ")");
    return o
};
mini.loadCSS = function (A, B) {
    if (!A)return;
    if (loadCSS._css[A])return;
    var $ = document.getElementsByTagName("head")[0], _ = document.createElement("link");
    if (B)_.id = B;
    _.href = A;
    _.rel = "stylesheet";
    _.type = "text/css";
    $.appendChild(_);
    return _
};
mini.loadCSS._css = {};
mini.innerHTML = function (A, _) {
    if (typeof A == "string")A = document.getElementById(A);
    if (!A)return;
    _ = "<div style=\"display:none\">&nbsp;</div>" + _;
    A.innerHTML = _;
    mini.__executeScripts(A);
    var $ = A.firstChild
};
mini.__executeScripts = function ($) {
    var A = $.getElementsByTagName("script");
    for (var _ = 0, E = A.length; _ < E; _++) {
        var B = A[_], D = B.src;
        if (D)mini.loadJS(D); else {
            var C = document.createElement("script");
            C.type = "text/javascript";
            C.text = B.text;
            $.appendChild(C)
        }
    }
    for (_ = A.length - 1; _ >= 0; _--) {
        B = A[_];
        B.parentNode.removeChild(B)
    }
};
Ol1O1o = function () {
    Ol1O1o[ollolO][OOlOl].apply(this, arguments)
};
oo00(Ol1O1o, oo0OO1, {_clearBorder: false, formField: true, value: "", uiCls: "mini-hidden"});
lO0O = Ol1O1o[O11Ol1];
lO0O[lOo01l] = l0OolO;
lO0O[o1oOl] = lOoOO;
lO0O[ll10OO] = oOoO;
lO0O[o00l0] = Oo101;
lO0O[lololl] = ooO0o1;
loOOl(Ol1O1o, "hidden");
lO1lo0 = function () {
    lO1lo0[ollolO][OOlOl].apply(this, arguments);
    this[lOo0l](false);
    this[o1111l](this.allowDrag);
    this[oOollo](this[lO0oOO])
};
oo00(lO1lo0, mini.Container, {_clearBorder: false, uiCls: "mini-popup"});
OoO1O = lO1lo0[O11Ol1];
OoO1O[ol1oOl] = Ol00O;
OoO1O[ooo11o] = o0l1;
OoO1O[lOll1l] = oo01;
OoO1O[oll0OO] = OOl1;
OoO1O[l0lOl] = O1o0l;
OoO1O[l0llOO] = Oo0l0;
OoO1O[lOo101] = o01o1;
OoO1O[lololl] = o1l1o;
loOOl(lO1lo0, "popup");
lO1lo0_prototype = {
    isPopup: false,
    popupEl: null,
    popupCls: "",
    showAction: "mouseover",
    hideAction: "outerclick",
    showDelay: 300,
    hideDelay: 500,
    xAlign: "left",
    yAlign: "below",
    xOffset: 0,
    yOffset: 0,
    minWidth: 50,
    minHeight: 25,
    maxWidth: 2000,
    maxHeight: 2000,
    showModal: false,
    showShadow: true,
    modalStyle: "opacity:0.2",
    lOoOlO: "mini-popup-drag",
    OOl1o1: "mini-popup-resize",
    allowDrag: false,
    allowResize: false,
    loo1o: function () {
        if (!this.popupEl)return;
        lol0Oo(this.popupEl, "click", this.oo0o, this);
        lol0Oo(this.popupEl, "contextmenu", this.olOOoo, this);
        lol0Oo(this.popupEl, "mouseover", this.ol0010, this)
    },
    o1lOol: function () {
        if (!this.popupEl)return;
        Ol1O(this.popupEl, "click", this.oo0o, this);
        Ol1O(this.popupEl, "contextmenu", this.olOOoo, this);
        Ol1O(this.popupEl, "mouseover", this.ol0010, this)
    },
    doShow: function (A) {
        var $ = {popupEl: this.popupEl, htmlEvent: A, cancel: false};
        this[ol1O0]("BeforeOpen", $);
        if ($.cancel == true)return;
        this[ol1O0]("opening", $);
        if ($.cancel == true)return;
        if (!this.popupEl)this[l000ll](); else {
            var _ = {};
            if (A)_.xy = [A.pageX, A.pageY];
            this[O0ll1o](this.popupEl, _)
        }
    },
    doHide: function (_) {
        var $ = {popupEl: this.popupEl, htmlEvent: _, cancel: false};
        this[ol1O0]("BeforeClose", $);
        if ($.cancel == true)return;
        this.close()
    },
    show: function (_, $) {
        this[lOOOo1](_, $)
    },
    showAtPos: function (B, A) {
        this[O1OO10](document.body);
        if (!B)B = "center";
        if (!A)A = "middle";
        this.el.style.position = "absolute";
        this.el.style.left = "-2000px";
        this.el.style.top = "-2000px";
        this.el.style.display = "";
        this.olO1();
        var _ = mini.getViewportBox(), $ = Ol0oO(this.el);
        if (B == "left")B = 0;
        if (B == "center")B = _.width / 2 - $.width / 2;
        if (B == "right")B = _.width - $.width;
        if (A == "top")A = 0;
        if (A == "middle")A = _.y + _.height / 2 - $.height / 2;
        if (A == "bottom")A = _.height - $.height;
        if (B + $.width > _.right)B = _.right - $.width;
        if (A + $.height > _.bottom)A = _.bottom - $.height - 20;
        this.l1o1Oo(B, A)
    },
    oo0OO: function () {
        jQuery(this.l1l1l).remove();
        if (!this[ol00l0])return;
        if (this.visible == false)return;
        var $ = document.documentElement, A = parseInt(Math[O0OOO](document.body.scrollWidth, $ ? $.scrollWidth : 0)), D = parseInt(Math[O0OOO](document.body.scrollHeight, $ ? $.scrollHeight : 0)), C = mini.getViewportBox(), B = C.height;
        if (B < D)B = D;
        var _ = C.width;
        if (_ < A)_ = A;
        this.l1l1l = mini.append(document.body, "<div class=\"mini-modal\"></div>");
        this.l1l1l.style.height = B + "px";
        this.l1l1l.style.width = _ + "px";
        this.l1l1l.style.zIndex = lo11(this.el, "zIndex") - 1;
        lO01l(this.l1l1l, this.modalStyle)
    },
    _doShim: function () {
        if (!mini.isIE || !mini_useShims)return;
        if (!this._shimEl) {
            var $ = "<iframe frameborder='0' style='position:absolute; z-index:-1; width:0; height:0; top:0;left:0;scrolling:no;'></iframe>";
            this._shimEl = mini.append(document.body, $)
        }
        function A() {
            this._shimEl.style.display = "";
            var $ = Ol0oO(this.el), A = this._shimEl.style;
            A.width = $.width + "px";
            A.height = $.height + "px";
            A.left = $.x + "px";
            A.top = $.y + "px";
            var _ = lo11(this.el, "zIndex");
            if (!isNaN(_))this._shimEl.style.zIndex = _ - 3
        }

        this._shimEl.style.display = "none";
        if (this._doShimTimer) {
            clearTimeout(this._doShimTimer);
            this._doShimTimer = null
        }
        var _ = this;
        this._doShimTimer = setTimeout(function () {
            _._doShimTimer = null;
            A[o1O0l0](_)
        }, 20)
    },
    l0l1O: function () {
        if (!this.shadowEl)this.shadowEl = mini.append(document.body, "<div class=\"mini-shadow\"></div>");
        this.shadowEl.style.display = this[oO1loO] ? "" : "none";
        if (this[oO1loO]) {
            function $() {
                this.shadowEl.style.display = "";
                var $ = Ol0oO(this.el), A = this.shadowEl.style;
                A.width = $.width + "px";
                A.height = $.height + "px";
                A.left = $.x + "px";
                A.top = $.y + "px";
                var _ = lo11(this.el, "zIndex");
                if (!isNaN(_))this.shadowEl.style.zIndex = _ - 2
            }

            this.shadowEl.style.display = "none";
            if (this.l0l1OTimer) {
                clearTimeout(this.l0l1OTimer);
                this.l0l1OTimer = null
            }
            var _ = this;
            this.l0l1OTimer = setTimeout(function () {
                _.l0l1OTimer = null;
                $[o1O0l0](_)
            }, 20)
        }
    },
    olO1: function () {
        this.el.style.display = "";
        var $ = Ol0oO(this.el);
        if ($.width > this.maxWidth) {
            lOool0(this.el, this.maxWidth);
            $ = Ol0oO(this.el)
        }
        if ($.height > this.maxHeight) {
            l10o(this.el, this.maxHeight);
            $ = Ol0oO(this.el)
        }
        if ($.width < this.minWidth) {
            lOool0(this.el, this.minWidth);
            $ = Ol0oO(this.el)
        }
        if ($.height < this.minHeight) {
            l10o(this.el, this.minHeight);
            $ = Ol0oO(this.el)
        }
    },
    _getWindowOffset: function ($) {
        return [0, 0]
    },
    showAtEl: function (I, E) {
        I = o0OO(I);
        if (!I)return;
        if (!this[oo1Ooo]() || this.el.parentNode != document.body)this[O1OO10](document.body);
        var B = {
            atEl: I,
            popupEl: this.el,
            xAlign: this.xAlign,
            yAlign: this.yAlign,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            popupCls: this.popupCls
        };
        mini.copyTo(B, E);
        l1Oo(I, B.popupCls);
        I.popupCls = B.popupCls;
        this._popupEl = I;
        this.el.style.position = "absolute";
        this.el.style.left = "-2000px";
        this.el.style.top = "-2000px";
        this.el.style.display = "";
        this[l0llOO]();
        this.olO1();
        var K = mini.getViewportBox(), C = Ol0oO(this.el), M = Ol0oO(I), G = B.xy, D = B.xAlign, F = B.yAlign, N = K.width / 2 - C.width / 2, L = 0;
        if (G) {
            N = G[0];
            L = G[1]
        }
        switch (B.xAlign) {
            case"outleft":
                N = M.x - C.width;
                break;
            case"left":
                N = M.x;
                break;
            case"center":
                N = M.x + M.width / 2 - C.width / 2;
                break;
            case"right":
                N = M.right - C.width;
                break;
            case"outright":
                N = M.right;
                break;
            default:
                break
        }
        switch (B.yAlign) {
            case"above":
                L = M.y - C.height;
                break;
            case"top":
                L = M.y;
                break;
            case"middle":
                L = M.y + M.height / 2 - C.height / 2;
                break;
            case"bottom":
                L = M.bottom - C.height;
                break;
            case"below":
                L = M.bottom;
                break;
            default:
                break
        }
        N = parseInt(N);
        L = parseInt(L);
        var A = this._getWindowOffset(E);
        if (B.outYAlign || B.outXAlign) {
            if (B.outYAlign == "above")if (L + C.height > K.bottom) {
                var _ = M.y - K.y, J = K.bottom - M.bottom;
                if (_ > J)L = M.y - C.height
            }
            if (B.outYAlign == "below")if (L + C.height > K.bottom) {
                _ = M.y - K.y, J = K.bottom - M.bottom;
                if (_ > J)L = M.y - C.height
            }
            if (B.outXAlign == "outleft")if (N + C.width > K.right) {
                var H = M.x - K.x, $ = K.right - M.right;
                if (H > $)N = M.x - C.width
            }
            if (B.outXAlign == "right")if (N + C.width > K.right)N = M.right - C.width;
            if (B.alwaysView) {
                if (L < 0)L = 0;
                if (L + C.height > K.bottom)L = K.bottom - C.height
            }
            this.l1o1Oo(N + A[0], L + A[1])
        } else this[lOOOo1](N + B.xOffset + A[0], L + B.yOffset + A[1])
    },
    l1o1Oo: function (A, _) {
        this.el.style.display = "";
        this.el.style.zIndex = mini.getMaxZIndex();
        mini.setX(this.el, A);
        mini.setY(this.el, _);
        this[lOo0l](true);
        if (this.hideAction == "mouseout")Ol1O(document, "mousemove", this.Ol0o, this);
        var $ = this;
        this.l0l1O();
        this.oo0OO();
        this._doShim();
        mini.layoutIFrames(this.el);
        this.isPopup = true;
        Ol1O(document, "mousedown", this.lolo, this);
        Ol1O(window, "resize", this.loO11o, this);
        this[ol1O0]("Open")
    },
    open: function () {
        this[l000ll]()
    },
    close: function () {
        this[O1ll1]()
    },
    hide: function () {
        if (!this.el)return;
        if (this.popupEl)o11o(this.popupEl, this.popupEl.popupCls);
        if (this._popupEl)o11o(this._popupEl, this._popupEl.popupCls);
        this._popupEl = null;
        jQuery(this.l1l1l).remove();
        if (this.shadowEl)this.shadowEl.style.display = "none";
        if (this._shimEl)this._shimEl.style.display = "none";
        lol0Oo(document, "mousemove", this.Ol0o, this);
        lol0Oo(document, "mousedown", this.lolo, this);
        lol0Oo(window, "resize", this.loO11o, this);
        this[lOo0l](false);
        this.isPopup = false;
        this[ol1O0]("Close")
    },
    setPopupEl: function ($) {
        $ = o0OO($);
        if (!$)return;
        this.loo1o();
        this.popupEl = $;
        this.o1lOol()
    },
    setPopupCls: function ($) {
        this.popupCls = $
    },
    setShowAction: function ($) {
        this.showAction = $
    },
    setHideAction: function ($) {
        this.hideAction = $
    },
    setShowDelay: function ($) {
        this.showDelay = $
    },
    setHideDelay: function ($) {
        this.hideDelay = $
    },
    setXAlign: function ($) {
        this.xAlign = $
    },
    setYAlign: function ($) {
        this.yAlign = $
    },
    setxOffset: function ($) {
        $ = parseInt($);
        if (isNaN($))$ = 0;
        this.xOffset = $
    },
    setyOffset: function ($) {
        $ = parseInt($);
        if (isNaN($))$ = 0;
        this.yOffset = $
    },
    setShowModal: function ($) {
        this[ol00l0] = $
    },
    setShowShadow: function ($) {
        this[oO1loO] = $
    },
    setMinWidth: function ($) {
        if (isNaN($))return;
        this.minWidth = $
    },
    setMinHeight: function ($) {
        if (isNaN($))return;
        this.minHeight = $
    },
    setMaxWidth: function ($) {
        if (isNaN($))return;
        this.maxWidth = $
    },
    setMaxHeight: function ($) {
        if (isNaN($))return;
        this.maxHeight = $
    },
    setAllowDrag: function ($) {
        this.allowDrag = $;
        o11o(this.el, this.lOoOlO);
        if ($)l1Oo(this.el, this.lOoOlO)
    },
    setAllowResize: function ($) {
        this[lO0oOO] = $;
        o11o(this.el, this.OOl1o1);
        if ($)l1Oo(this.el, this.OOl1o1)
    },
    oo0o: function (_) {
        if (this.olOOlo)return;
        if (this.showAction != "leftclick")return;
        var $ = jQuery(this.popupEl).attr("allowPopup");
        if (String($) == "false")return;
        this.doShow(_)
    },
    olOOoo: function (_) {
        if (this.olOOlo)return;
        if (this.showAction != "rightclick")return;
        var $ = jQuery(this.popupEl).attr("allowPopup");
        if (String($) == "false")return;
        _.preventDefault();
        this.doShow(_)
    },
    ol0010: function (A) {
        if (this.olOOlo)return;
        if (this.showAction != "mouseover")return;
        var _ = jQuery(this.popupEl).attr("allowPopup");
        if (String(_) == "false")return;
        clearTimeout(this._hideTimer);
        this._hideTimer = null;
        if (this.isPopup)return;
        var $ = this;
        this._showTimer = setTimeout(function () {
            $.doShow(A)
        }, this.showDelay)
    },
    Ol0o: function ($) {
        if (this.hideAction != "mouseout")return;
        this.ll1OlO($)
    },
    lolo: function ($) {
        if (this.hideAction != "outerclick")return;
        if (!this.isPopup)return;
        if (this[l1Oo0O]($) || (this.popupEl && Ol0O(this.popupEl, $.target))); else this.doHide($)
    },
    ll1OlO: function (_) {
        if (Ol0O(this.el, _.target) || (this.popupEl && Ol0O(this.popupEl, _.target))); else {
            clearTimeout(this._showTimer);
            this._showTimer = null;
            if (this._hideTimer)return;
            var $ = this;
            this._hideTimer = setTimeout(function () {
                $.doHide(_)
            }, this.hideDelay)
        }
    },
    loO11o: function ($) {
        if (this[l0Ooo]() && !mini.isIE6)this.oo0OO()
    },
    within: function (C) {
        if (Ol0O(this.el, C.target))return true;
        var $ = mini.getChildControls(this);
        for (var _ = 0, B = $.length; _ < B; _++) {
            var A = $[_];
            if (A[l1Oo0O](C))return true
        }
        return false
    }
};
mini.copyTo(lO1lo0.prototype, lO1lo0_prototype);
oolo1O = function () {
    oolo1O[ollolO][OOlOl].apply(this, arguments)
};
oo00(oolo1O, oo0OO1, {
    text: "",
    iconCls: "",
    iconStyle: "",
    plain: false,
    checkOnClick: false,
    checked: false,
    groupName: "",
    img: "",
    l11o1O: "mini-button-plain",
    _hoverCls: "mini-button-hover",
    l0l10l: "mini-button-pressed",
    ooOO: "mini-button-checked",
    Oloo: "mini-button-disabled",
    allowCls: "",
    _clearBorder: false,
    uiCls: "mini-button",
    href: "",
    target: ""
});
O11oo = oolo1O[O11Ol1];
O11oo[ol1oOl] = loolO;
O11oo[oO1oO] = olo00;
O11oo.o0l1l = lO0oo;
O11oo.Ol0l = O11O;
O11oo.oO0o1l = OOl00O;
O11oo[Oo1lo0] = loO1oo;
O11oo[l01OoO] = lllOo0;
O11oo[lOoooO] = l0OO;
O11oo[loO1l0] = ollool;
O11oo[loo0Ol] = ll10o;
O11oo[oo0o0] = ll00l;
O11oo[O01l11] = l000;
O11oo[l0101o] = ooloO;
O11oo[O000lo] = Ol011;
O11oo[l101l1] = oolll;
O11oo[OO1Olo] = oo1olO;
O11oo[o0lO00] = oool0;
O11oo[ooOO00] = ooOo1;
O11oo[o01OO] = llOol;
O11oo[oOOOl0] = oO00l;
O11oo[lol0o] = l0o1;
O11oo[OO1loO] = o1Ol0;
O11oo[ooooO] = lO11ll;
O11oo[l0O0O0] = O1lo1;
O11oo[l010Oo] = OO0l1;
O11oo[llo1o0] = loll;
O11oo[o1O0O1] = O01l0;
O11oo[ool01l] = oO1loo;
O11oo[l0loO0] = O10O0;
O11oo[l0lOl] = OOOo0O;
O11oo[lOo101] = lloo1O;
O11oo[lololl] = Oll00;
O11oo[OO1O1l] = o010o;
loOOl(oolo1O, "button");
ollllO = function () {
    ollllO[ollolO][OOlOl].apply(this, arguments)
};
oo00(ollllO, oolo1O, {uiCls: "mini-menubutton", allowCls: "mini-button-menu"});
ooOll = ollllO[O11Ol1];
ooOll[ool1ll] = llooO;
ooOll[llOoOO] = o00O1;
loOOl(ollllO, "menubutton");
mini.SplitButton = function () {
    mini.SplitButton[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.SplitButton, ollllO, {uiCls: "mini-splitbutton", allowCls: "mini-button-split"});
loOOl(mini.SplitButton, "splitbutton");
loo10O = function () {
    loo10O[ollolO][OOlOl].apply(this, arguments)
};
oo00(loo10O, oo0OO1, {
    formField: true,
    _clearText: false,
    text: "",
    checked: false,
    defaultValue: false,
    trueValue: true,
    falseValue: false,
    checkedCls: "mini-checkbox-checked",
    uiCls: "mini-checkbox"
});
o1O111 = loo10O[O11Ol1];
o1O111[ol1oOl] = l1OoO1;
o1O111.olol00 = O0O1l;
o1O111[OO1olO] = l0l0oo;
o1O111[O1l1Oo] = OlO11l;
o1O111[olOoo0] = Oollo;
o1O111[Oolo11] = OOOol;
o1O111[lOo01l] = oOloO1;
o1O111[o1oOl] = l00o;
o1O111[ll10OO] = Ooolo;
o1O111[l01OoO] = OO0ll;
o1O111[lOoooO] = ol0011;
o1O111[ooooO] = o1oOo;
o1O111[l0O0O0] = lloOl;
o1O111[o00l0] = olOlO;
o1O111[lOo101] = OOO00;
o1O111[l0lOl] = llloo;
o1O111[lololl] = Ol010;
o1O111[OO1O1l] = loloO;
loOOl(loo10O, "checkbox");
l0oOoo = function () {
    l0oOoo[ollolO][OOlOl].apply(this, arguments)
};
oo00(l0oOoo, Ool1O1, {
    name: "",
    formField: true,
    selectOnFocus: false,
    allowInput: true,
    minWidth: 10,
    minHeight: 15,
    maxLength: 5000,
    emptyText: "",
    text: "",
    value: "",
    defaultValue: "",
    height: 21,
    o0110l: "mini-textbox-empty",
    o101: "mini-textbox-focus",
    Oloo: "mini-textbox-disabled",
    uiCls: "mini-textbox",
    llOl: "text",
    oolo: false,
    _placeholdered: false,
    ll001O: null,
    inputStyle: "",
    vtype: ""
});
o10Ol = l0oOoo[O11Ol1];
o10Ol[llloOO] = ooOlO;
o10Ol[llO0O0] = oOl11;
o10Ol[lOOOlO] = o0Oo0O;
o10Ol[l1olll] = O01l1;
o10Ol[looo0] = O011O;
o10Ol[Ol0oOo] = looo10;
o10Ol[O0OO00] = Olll1;
o10Ol[OOO0o1] = l0l0;
o10Ol[O1O0O0] = lOloo;
o10Ol[o001ol] = O00l1;
o10Ol[oll1l1] = loO11l;
o10Ol[l1lll1] = l1Olo;
o10Ol[oOo1l0] = olo1oo;
o10Ol[loloOo] = lO000;
o10Ol[O1Ooo1] = oOlo0;
o10Ol[ol1oOO] = o0oO0;
o10Ol[o0l0O1] = l0llo;
o10Ol[Oo01O0] = l1l0o;
o10Ol[lll010] = oll0;
o10Ol[OllO1l] = O1ol0;
o10Ol[O01Ooo] = lo11O;
o10Ol[Oo0l0o] = loOoO;
o10Ol[oO0o00] = O1lOl0;
o10Ol[l1Ool1] = oO111;
o10Ol.ll0oO = l1o1o;
o10Ol[l0Ol1l] = O0oo0o;
o10Ol[llO1ll] = loOO0;
o10Ol[ol1oOl] = oo0O1;
o10Ol[oOl01O] = o0Oo1;
o10Ol.l0O01o = ooo1O;
o10Ol.ol0lo0 = ooo01;
o10Ol.l1OO = oO1OO;
o10Ol.lOOlo = l1oll;
o10Ol.lllO = o01oOl;
o10Ol.l1o0ol = O1lO1;
o10Ol.O0lloo = O011;
o10Ol.Ol0l = O1o0O;
o10Ol.oO0o1l = oO1o1;
o10Ol.Ol10 = oo110;
o10Ol[l1oOlO] = l1oo1;
o10Ol[ooo0o0] = Ol1Ol;
o10Ol[Ooo01o] = olll;
o10Ol[l1loO0] = lOllol;
o10Ol[l00o00] = lO1l;
o10Ol[oOOOOo] = O1loO;
o10Ol[O0llO0] = o0O0l;
o10Ol[O1loo] = oo1l0;
o10Ol[l0loO0] = O1o0;
o10Ol[ool1ll] = lOll0;
o10Ol[l0ol11] = OlO1l;
o10Ol[ll1oo0] = o1oO1;
o10Ol.Ol11 = Ol110;
o10Ol[o00llo] = OlOO;
o10Ol[lOoO0l] = O1OloO;
o10Ol[o0OOo] = ll011;
o10Ol[olol10] = loOlO;
o10Ol.o00o01 = lOOll;
o10Ol[l0o0l0] = OOooO;
o10Ol[O0Ol0O] = ooo1l0;
o10Ol[lOo01l] = OloO;
o10Ol[o1oOl] = O0oOll;
o10Ol[ll10OO] = ooO1lO;
o10Ol[o00l0] = ll1l;
o10Ol[lOll1l] = oO0l0l;
o10Ol[l0llOO] = lo000;
o10Ol[l0lOl] = ooOOll;
o10Ol.o00lo = lOlll;
o10Ol[lOo101] = ll0ll1;
o10Ol[lololl] = o1ooo;
loOOl(l0oOoo, "textbox");
oooooO = function () {
    oooooO[ollolO][OOlOl].apply(this, arguments)
};
oo00(oooooO, l0oOoo, {uiCls: "mini-password", llOl: "password"});
olO0OO = oooooO[O11Ol1];
olO0OO[o1oOl] = ool0O;
loOOl(oooooO, "password");
l1ol11 = function () {
    l1ol11[ollolO][OOlOl].apply(this, arguments)
};
oo00(l1ol11, l0oOoo, {maxLength: 10000000, height: "", minHeight: 50, llOl: "textarea", uiCls: "mini-textarea"});
oloO1 = l1ol11[O11Ol1];
oloO1[l0llOO] = oOo0;
loOOl(l1ol11, "textarea");
l0lOol = function () {
    l0lOol[ollolO][OOlOl].apply(this, arguments);
    var $ = this[o0011o]();
    if ($ || this.allowInput == false)this._textEl[lOlo0] = true;
    if (this.enabled == false)this[oll1o0](this.Oloo);
    if ($)this[oll1o0](this.O00Ol);
    if (this.required)this[oll1o0](this.oo11O)
};
oo00(l0lOol, Ool1O1, {
    name: "",
    formField: true,
    selectOnFocus: false,
    showButton: true,
    showClose: false,
    emptyText: "",
    defaultValue: "",
    defaultText: "",
    value: "",
    text: "",
    maxLength: 1000,
    minLength: 0,
    height: 21,
    inputAsValue: false,
    allowInput: true,
    Ool10: "mini-buttonedit-noInput",
    O00Ol: "mini-buttonedit-readOnly",
    Oloo: "mini-buttonedit-disabled",
    o0110l: "mini-buttonedit-empty",
    o101: "mini-buttonedit-focus",
    Oo1o1: "mini-buttonedit-button",
    OOlO: "mini-buttonedit-button-hover",
    llOoo: "mini-buttonedit-button-pressed",
    _closeCls: "mini-buttonedit-close",
    uiCls: "mini-buttonedit",
    _deferSetText: true,
    oolo: false,
    _buttonWidth: 20,
    _closeWidth: 20,
    autoClear: false,
    ll001O: null,
    textName: "",
    inputStyle: ""
});
lo0Oo = l0lOol[O11Ol1];
lo0Oo[ol1oOl] = o1ll;
lo0Oo[oOl01O] = OOoO0;
lo0Oo[Oo1Oo0] = O0olo;
lo0Oo[OOO0lO] = lO0Ol;
lo0Oo[o1Ool] = lo1O0;
lo0Oo[o0l11] = OoO01;
lo0Oo[ooo0o0] = lOl0ll;
lo0Oo[Ooo01o] = Ol1o1;
lo0Oo[O0oOOl] = OOlOO;
lo0Oo[lll1lO] = O00ll;
lo0Oo[OlOlO0] = l10lO;
lo0Oo[O0OO11] = oO1Oo;
lo0Oo[l11Ol] = Ool0O;
lo0Oo.O1l1 = lool1;
lo0Oo.lO0o = lOO11;
lo0Oo.l1OO = O1O0o;
lo0Oo.lOOlo = l1OO1;
lo0Oo.O0lloo = oO1ol;
lo0Oo.lllO = o0ll0;
lo0Oo.l0O01o = o0lO0;
lo0Oo[l1llll] = O1100;
lo0Oo[OO0oo0] = OolO1;
lo0Oo.ol0lo0 = Olo1l;
lo0Oo.o0l1l = OloOo;
lo0Oo.Ol0l = o0l00;
lo0Oo[o001O1] = oo1o1;
lo0Oo.oO0o1l = o1loOO;
lo0Oo.Ol10 = o0O1o;
lo0Oo[l1oOlO] = O0O0;
lo0Oo[OllloO] = ol0lO;
lo0Oo[o0o1lO] = l00O1;
lo0Oo[l0oO0o] = olO1o;
lo0Oo[looO10] = o11oO;
lo0Oo[l0o0l0] = oO1O0;
lo0Oo[O0Ol0O] = O111l;
lo0Oo[l11OOO] = O1l1O;
lo0Oo[ool1ll] = O1lOo;
lo0Oo[OoOo10] = OO0l0;
lo0Oo[lol1O1] = O1001;
lo0Oo[ll1oo0] = l0001;
lo0Oo[lOoO0l] = Ooo1;
lo0Oo[o0OOo] = o1o10;
lo0Oo[olol10] = O1lll;
lo0Oo.o00o01 = lo0oo;
lo0Oo[lOo01l] = l0ll10;
lo0Oo[o1oOl] = Oo0O1;
lo0Oo[ll10OO] = l0ol0;
lo0Oo[ooooO] = l0l0o;
lo0Oo[l0O0O0] = O100O;
lo0Oo[o00l0] = lol10;
lo0Oo[l00o00] = l0l0oEl;
lo0Oo[oOOOOo] = l0lO00;
lo0Oo[O0llO0] = ll01o;
lo0Oo[O1loo] = OO0Oo;
lo0Oo[lOll1l] = O0ool;
lo0Oo[l0llOO] = OoOo1;
lo0Oo[lO0ll0] = O000O;
lo0Oo.o00lo = ll0lo;
lo0Oo[lOo101] = OOooo;
lo0Oo[l0lOl] = Ol1lo;
lo0Oo[lololl] = l1Ol;
lo0Oo.OO1OHtml = Ol0l1;
lo0Oo.OO1OsHTML = lo0o1;
lo0Oo[O0loOO] = l1OlButtonHtml;
lo0Oo[ll1o00] = O1o00;
lo0Oo[o1O0OO] = lOOO1;
lo0Oo[lOl0lo] = o0110;
lo0Oo[OO1O1l] = l0lOo;
loOOl(l0lOol, "buttonedit");
o1lO1O = function () {
    o1lO1O[ollolO][OOlOl].apply(this, arguments);
    this[l0101]();
    this.el.className += " mini-popupedit"
};
oo00(o1lO1O, l0lOol, {
    uiCls: "mini-popupedit",
    popup: null,
    popupCls: "mini-buttonedit-popup",
    _hoverCls: "mini-buttonedit-hover",
    l0l10l: "mini-buttonedit-pressed",
    _destroyPopup: true,
    popupWidth: "100%",
    popupMinWidth: 50,
    popupMaxWidth: 2000,
    popupHeight: "",
    popupMinHeight: 30,
    popupMaxHeight: 2000,
    showPopupOnClick: false,
    alwaysView: false
});
llll1 = o1lO1O[O11Ol1];
llll1[ol1oOl] = lo0lO;
llll1.o10O = o000l;
llll1.oO0o1l = o1OOO;
llll1[ooO00o] = O1l1l;
llll1[O1ooOo] = oOl0o;
llll1[OoOoll] = OoO1l;
llll1[llO00O] = ooloo;
llll1[oO0OO0] = lo0ol;
llll1[O1ool0] = ll110;
llll1[oo00lo] = Ooool;
llll1[lO10O] = OOl1l;
llll1[Oll100] = oollO;
llll1[oO011o] = l0ll1;
llll1[lo1oO0] = l0l10;
llll1[l110l] = l000o;
llll1[ol11ol] = l1oo1l;
llll1[o0llOl] = llo11;
llll1[l0ooOl] = o0O0O;
llll1[lo0lll] = l10OOO;
llll1[oOO1O1] = ll1O;
llll1[oOl0oo] = lol0l;
llll1.o01oo = l1111;
llll1.oo00O1AtEl = l1l00;
llll1[lO11l0] = lolO0o;
llll1[o0o011] = l1100;
llll1[Ol100o] = Oolo0;
llll1[o1110O] = ll1Oo;
llll1[ol1O01] = o0l000;
llll1.loO1 = lOOOl;
llll1.lloO = l0l1o;
llll1[ooOl] = o1olO;
llll1[l0101] = l010l;
llll1[oolOl] = oOOol;
llll1[ll0OlO] = lOo0o;
llll1[l1Oo0O] = O00lO;
llll1.lllO = OOO0O;
llll1.Ol0l = oo0o1;
llll1.O11olO = oollo;
llll1.ol0010 = lo01l;
llll1.l0O01o = O011o;
llll1[lOo101] = lo0l0;
llll1[l0lOl] = ll1lO;
loOOl(o1lO1O, "popupedit");
l1O1lO = function () {
    this.data = [];
    this.columns = [];
    l1O1lO[ollolO][OOlOl].apply(this, arguments);
    this[ooloOl]()
};
oo00(l1O1lO, o1lO1O, {
    text: "",
    value: "",
    valueField: "id",
    textField: "text",
    dataField: "",
    delimiter: ",",
    multiSelect: false,
    data: [],
    url: "",
    valueInCheckOrder: true,
    columns: [],
    allowInput: false,
    valueFromSelect: false,
    popupMaxHeight: 200,
    uiCls: "mini-combobox",
    changeOnSelectMethod: false,
    clearOnLoad: true,
    pinyinField: "tag",
    showNullItem: false,
    autoFilter: true
});
lol1O = l1O1lO[O11Ol1];
lol1O[ol1oOl] = olo1l;
lol1O[lOOo0] = l0000;
lol1O[l0l0O] = OOloO1;
lol1O[o001l1] = Ooo001;
lol1O[oOl0O0] = OOo1;
lol1O.O0lloo = OO1O1;
lol1O[OO11] = O1o1O;
lol1O.o01oo = llO10;
lol1O.looo11 = OolO0;
lol1O.O1lol1 = Oo1Ol;
lol1O.l1OO = Ool1l;
lol1O.lOOlo = l1Ooo;
lol1O.lllO = o0O0;
lol1O.O0o1o = o1OO0;
lol1O[O0l01O] = olOl0;
lol1O[o1lo1l] = o0ol;
lol1O[l0OoO0] = o0ols;
lol1O.OOoOO = O1O10;
lol1O[lO0lO1] = l000O;
lol1O[ll1l00] = Ol0ll;
lol1O[l00Oo] = l1ooO;
lol1O[o0Ol01] = lollOO;
lol1O[lOoool] = Oool1;
lol1O[l01ll] = OooO1;
lol1O[l0000l] = O0o0O;
lol1O[OOll0] = llol1;
lol1O[OoloOl] = l1ll0;
lol1O[Olol1o] = llolo;
lol1O[ll10OO] = o001l;
lol1O[loO1Oo] = oolool;
lol1O[l1000o] = o001lInCheckOrder;
lol1O[llO0ll] = loO1O;
lol1O[O0lO0O] = lool;
lol1O[oOOO10] = O0O1O;
lol1O[Ol11o0] = l0OOo;
lol1O[o0OloO] = O010O;
lol1O[OOll0l] = ooO0o;
lol1O[ooO1ll] = llOO0;
lol1O[OO11l1] = oooO0;
lol1O[olOo0l] = o001lField;
lol1O[oO0l10] = ll10l0;
lol1O[Oo1100] = olO1O;
lol1O[Oooloo] = O00110;
lol1O[loll0l] = O0l011;
lol1O[ooo0Oo] = lO11O;
lol1O[ll1oO1] = oolO;
lol1O[ol0l0] = lOlo1;
lol1O[O00oO0] = OOo0o;
lol1O[looOlo] = o0o0;
lol1O[l11o1o] = ollOl;
lol1O[o110ll] = l0O1;
lol1O[o11l] = O1O1ol;
lol1O[oo1o] = l1ol0;
lol1O[lOol1O] = oll1O;
lol1O[O0lo11] = OooOl;
lol1O[ol1O01] = OO1o1;
lol1O[l0101] = O10l1;
lol1O[OO1O1l] = o1o1l;
lol1O[ooloOl] = olO1l;
loOOl(l1O1lO, "combobox");
l0l1O0 = function () {
    l0l1O0[ollolO][OOlOl].apply(this, arguments);
    l1Oo(this.el, "mini-datepicker");
    this[Ol1oO1]("validation", this.ll0oO, this)
};
oo00(l0l1O0, o1lO1O, {
    valueFormat: "",
    format: "yyyy-MM-dd",
    maxDate: null,
    minDate: null,
    popupWidth: "",
    viewDate: new Date(),
    showTime: false,
    timeFormat: "H:mm",
    showYesterdayButton: false,
    showTodayButton: true,
    showClearButton: true,
    showOkButton: false,
    valueType: "date",
    uiCls: "mini-datepicker",
    _monthPicker: false,
    minDateErrorText: "",
    maxDateErrorText: "",
    nullValue: ""
});
lOoO0 = l0l1O0[O11Ol1];
lOoO0[ol1oOl] = oO11o;
lOoO0.lllO = o0o1o;
lOoO0.O0lloo = O0O00;
lOoO0[OOOoo0] = loolo;
lOoO0[lOo0O0] = OoOl1;
lOoO0[oOo1oO] = O0lO1;
lOoO0[lO010] = oOO0;
lOoO0[o1oOlo] = o00lO;
lOoO0[lll0l1] = oo0o1l;
lOoO0[ooll01] = OloOO;
lOoO0[l0OOOO] = oOl00;
lOoO0[o0llo] = l1olO;
lOoO0[Ol11lO] = l00oO;
lOoO0[l10111] = oo1o0;
lOoO0[lll0l] = ll10l;
lOoO0[l1O10l] = o1O0o;
lOoO0[ll11Oo] = l1OOO;
lOoO0[o01o10] = o110o;
lOoO0[oOO01o] = lo10o;
lOoO0[oOOOl] = loOOo;
lOoO0[lo10OO] = O1l0;
lOoO0[oO11l] = O00ol;
lOoO0[lloo01] = lloll;
lOoO0[oo0lO1] = lO1o0;
lOoO0[l1llOo] = Oo1lo;
lOoO0[Olll01] = OlOOO;
lOoO0[l1oOo] = lOo00;
lOoO0[lOo01l] = l0olO;
lOoO0[o1oOl] = ol1OO;
lOoO0[O1O0o1] = o01o0;
lOoO0[l1O11l] = l0o00;
lOoO0[ll10OO] = Ool1O;
lOoO0[oo0Ol0] = ol1OOFormat;
lOoO0[O1O0lO] = Ool1OFormat;
lOoO0[o1011] = O1lo0;
lOoO0[O10ll] = ooO0O;
lOoO0.OO1lo = OO01l;
lOoO0.o01lO = OO0oO;
lOoO0.ll0o1O = oll1o;
lOoO0.ll0oO = OOllO;
lOoO0.loO1 = lOl1O;
lOoO0[l1Oo0O] = lloO0;
lOoO0[oOl0oo] = l1OolO;
lOoO0[ol1O01] = OolOo;
lOoO0[ooOl] = l0ll0;
lOoO0[l0101] = l01Oo;
lOoO0[l0lOl] = O0OO;
lOoO0[o001o1] = l1lll;
loOOl(l0l1O0, "datepicker");
mini.MonthPicker = function () {
    mini.MonthPicker[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.MonthPicker, l0l1O0, {uiCls: "mini-monthpicker", valueFormat: "", format: "yyyy-MM", _monthPicker: true});
loOOl(mini.MonthPicker, "monthpicker");
OOO0l1 = function () {
    this.viewDate = new Date();
    this.o1ol1 = [];
    OOO0l1[ollolO][OOlOl].apply(this, arguments)
};
oo00(OOO0l1, oo0OO1, {
    width: 220,
    height: 160,
    monthPicker: false,
    _clearBorder: false,
    viewDate: null,
    o1ol: "",
    o1ol1: [],
    multiSelect: false,
    firstDayOfWeek: 0,
    yesterdayText: "Yesterday",
    todayText: "Today",
    clearText: "Clear",
    okText: "OK",
    cancelText: "Cancel",
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    format: "MMM,yyyy",
    timeFormat: "H:mm",
    showTime: false,
    currentTime: true,
    rows: 1,
    columns: 1,
    headerCls: "",
    bodyCls: "",
    footerCls: "",
    lo0Ol1: "mini-calendar-today",
    ll00O: "mini-calendar-weekend",
    l1O0o: "mini-calendar-othermonth",
    l0Ol: "mini-calendar-selected",
    showHeader: true,
    showFooter: true,
    showWeekNumber: false,
    showDaysHeader: true,
    showMonthButtons: true,
    showYearButtons: true,
    showTodayButton: true,
    showClearButton: true,
    showOkButton: false,
    showYesterdayButton: false,
    uiCls: "mini-calendar",
    menuEl: null,
    menuYear: null,
    menuSelectMonth: null,
    menuSelectYear: null
});
OollO = OOO0l1[O11Ol1];
OollO[ol1oOl] = o0lOo;
OollO.OOoOO = l1110;
OollO.Oo111 = l1l10;
OollO.OO1lo = Ol01O;
OollO.Ol0l = ol11l;
OollO.oO0o1l = l00ll;
OollO.Ooo0o = o11lO;
OollO[l0l0o0] = o0ll00;
OollO[o11lO0] = l11l1;
OollO.lOloo1 = ll01l;
OollO[ol10Oo] = O0lo1;
OollO[OOo11] = O1OOO;
OollO[o11lOO] = Ol000;
OollO[olO110] = O10o0;
OollO.o0Oo = O0l1o;
OollO.oO011 = lOO00;
OollO.lO1lO = lOOOo;
OollO[l0loO0] = oOO1O;
OollO[l0llOO] = olo1O;
OollO[oO11l] = OlOol;
OollO[lloo01] = llO00;
OollO[oo0lO1] = lo00l;
OollO[l1llOo] = O0lo01;
OollO[l0000l] = Olooo;
OollO[OOll0] = l1O11;
OollO[O0ol0o] = O1OoO;
OollO[lO0l1] = Ololl0;
OollO[OoloOl] = Oll0l;
OollO[Olol1o] = l0lo1;
OollO[o11Ooo] = Oo0lO;
OollO[lOo01l] = OOo1l;
OollO[o1oOl] = O001O;
OollO[ll10OO] = l00OO;
OollO[OOo0o1] = OO010;
OollO[l0lol] = O10O10;
OollO[O11Oo1] = ol0llo;
OollO[lo1O11] = O01Oo;
OollO[ool10o] = l10o1;
OollO[Olll01] = oOlO0;
OollO[l1oOo] = Olo0l;
OollO[l10111] = l00O;
OollO[lll0l] = O0lol;
OollO[l1O10l] = Oo0l1;
OollO[ll11Oo] = l1lo1;
OollO[oOOOl] = o1ol0;
OollO[lo10OO] = ooo11;
OollO[o01o10] = O1o1;
OollO[oOO01o] = o1lo11;
OollO[l011OO] = OOlOo;
OollO[l0O0Oo] = O0o00;
OollO[Oo0O1O] = l1010O;
OollO[l01Ol0] = oll01;
OollO[o1Oo11] = o0Oll;
OollO[llO1o] = l0lO0;
OollO[o0llo] = o0000;
OollO[Ol11lO] = ll000;
OollO[oo1Ool] = lOl10;
OollO[lo0l1] = l0O1O;
OollO[lool1O] = lO0O0;
OollO[Ol0OlO] = o00O0;
OollO[l1Oo0O] = lO1o1;
OollO[OllOO0] = O0lool;
OollO[lOo101] = ooool;
OollO[l0lOl] = o0ll;
OollO[O1loo] = loooO;
OollO[lololl] = l1l11;
OollO[lo1Oo0] = l00Ol;
OollO[ooO0l] = o1o1o;
OollO[ol1o01] = o0olO;
loOOl(OOO0l1, "calendar");
lO1OO1 = function () {
    lO1OO1[ollolO][OOlOl].apply(this, arguments)
};
oo00(lO1OO1, Ol11ol, {
    formField: true,
    columns: null,
    columnWidth: 80,
    showNullItem: false,
    nullItemText: "",
    showEmpty: false,
    emptyText: "",
    showCheckBox: false,
    showAllCheckBox: true,
    multiSelect: false,
    oooll1: "mini-listbox-item",
    o10OO: "mini-listbox-item-hover",
    _oolol0: "mini-listbox-item-selected",
    uiCls: "mini-listbox"
});
Ol0O0O = lO1OO1[O11Ol1];
Ol0O0O[ol1oOl] = OooOO;
Ol0O0O.oO0o1l = Oo1o0;
Ol0O0O.lOoOo0 = lOOo1l;
Ol0O0O[lOl01] = Ollo;
Ol0O0O.lll10o = olll1;
Ol0O0O[l00Oo] = l1Ool0;
Ol0O0O[o0Ol01] = l0OoO;
Ol0O0O[lOoool] = oOoll;
Ol0O0O[l01ll] = lOOo1;
Ol0O0O[ol01l] = oooo;
Ol0O0O[l0OO00] = OOlll0;
Ol0O0O[ollO00] = oo01oO;
Ol0O0O[o001oo] = olOol;
Ol0O0O[l0llOO] = oO1l1;
Ol0O0O[l0loO0] = O1Ool;
Ol0O0O[l0000l] = lO11;
Ol0O0O[OOll0] = lO1l0;
Ol0O0O[l0lOl] = OoOO;
Ol0O0O[lOo101] = olOo;
Ol0O0O[lololl] = Oo110;
loOOl(lO1OO1, "listbox");
O0oloo = function () {
    O0oloo[ollolO][OOlOl].apply(this, arguments)
};
oo00(O0oloo, Ol11ol, {
    formField: true,
    _labelFieldCls: "mini-labelfield-checkboxlist",
    multiSelect: true,
    repeatItems: 0,
    repeatLayout: "none",
    repeatDirection: "horizontal",
    oooll1: "mini-checkboxlist-item",
    o10OO: "mini-checkboxlist-item-hover",
    _oolol0: "mini-checkboxlist-item-selected",
    l1Ol0: "mini-checkboxlist-table",
    OO0OO: "mini-checkboxlist-td",
    llO0o: "checkbox",
    uiCls: "mini-checkboxlist"
});
O0O0o = O0oloo[O11Ol1];
O0O0o[ol1oOl] = ooOOo;
O0O0o[l01oOo] = OO01O;
O0O0o[lOoO1] = O01ol;
O0O0o[OOo0O] = O0001;
O0O0o[l1ll1] = O000o;
O0O0o[Ol1olo] = OOOoO;
O0O0o[oll110] = O1oo0;
O0O0o.o01O0 = o110l;
O0O0o.Ooooo = l0O1l;
O0O0o[l0loO0] = o0OO0;
O0O0o.olO01 = o1ool;
O0O0o[lololl] = llo1o;
loOOl(O0oloo, "checkboxlist");
o11O00 = function () {
    o11O00[ollolO][OOlOl].apply(this, arguments)
};
oo00(o11O00, O0oloo, {
    multiSelect: false,
    oooll1: "mini-radiobuttonlist-item",
    o10OO: "mini-radiobuttonlist-item-hover",
    _oolol0: "mini-radiobuttonlist-item-selected",
    l1Ol0: "mini-radiobuttonlist-table",
    OO0OO: "mini-radiobuttonlist-td",
    llO0o: "radio",
    uiCls: "mini-radiobuttonlist"
});
l10l1 = o11O00[O11Ol1];
loOOl(o11O00, "radiobuttonlist");
lo1001 = function () {
    this.data = [];
    lo1001[ollolO][OOlOl].apply(this, arguments)
};
oo00(lo1001, o1lO1O, {
    valueFromSelect: false,
    text: "",
    value: "",
    autoCheckParent: false,
    expandOnLoad: false,
    valueField: "id",
    textField: "text",
    nodesField: "children",
    dataField: "",
    delimiter: ",",
    multiSelect: false,
    data: [],
    url: "",
    allowInput: false,
    showTreeIcon: false,
    showTreeLines: true,
    resultAsTree: false,
    parentField: "pid",
    checkRecursive: false,
    showFolderCheckBox: false,
    showRadioButton: false,
    popupHeight: 200,
    popupWidth: "100%",
    popupMaxHeight: 250,
    popupMinWidth: 100,
    uiCls: "mini-treeselect",
    expandOnPopup: false,
    virtualScroll: false,
    defaultRowHeight: 23,
    pinyinField: "tag",
    expandOnNodeClick: false,
    autoFilter: true
});
olol1 = lo1001[O11Ol1];
olol1[ol1oOl] = l10OO;
olol1[lOOo0] = l0lOO;
olol1[l0l0O] = o1Olo;
olol1[O1l0oO] = ooOl0;
olol1[Ol00Oo] = OOlol;
olol1[o001l1] = o1O0oo;
olol1[oOl0O0] = o1lo0;
olol1[lO0lO1] = Oo10o;
olol1[ll1l00] = Oll1ol;
olol1[lO1101] = O0O1o;
olol1[lO100O] = l0110;
olol1[lo111] = oOO1l;
olol1[l1oOoo] = oooOl;
olol1[OO0000] = l0l1;
olol1[ool01] = l1o11;
olol1[oll010] = O1Ol1;
olol1[O0Oo] = llOO1;
olol1[o00l0l] = oO001;
olol1[lo1loO] = l0l1l;
olol1[lo1lo] = l011l;
olol1[l1O1o] = oo0lo;
olol1[OO11l1] = OlO1o;
olol1[olOo0l] = l1oO0;
olol1[o0Oll1] = ooOOl;
olol1[lllOO1] = oOOoO;
olol1[Ol10lO] = lOoo1;
olol1[oO0O1] = o1ll0;
olol1[o01Ol] = oo00l;
olol1[oOll0l] = OOOl1;
olol1.looo11 = O00Oo;
olol1.lllO = O01OO;
olol1.Oll1 = oo1oO0;
olol1.l0lool = l00lO;
olol1[OoloOl] = ol0O;
olol1[Olol1o] = O1l0o;
olol1[ll10OO] = Oo0oo;
olol1[o1oOl] = ll111;
olol1[llO0ll] = OolOO;
olol1[O0lO0O] = O0o10;
olol1[o1O1O0] = l11ol;
olol1[OoOOO] = Oo1O0;
olol1[OOll0l] = O0oo0;
olol1[ooO1ll] = lOool;
olol1[Ol11o0] = loo0O;
olol1[o0OloO] = l1loo;
olol1[O01OlO] = oOl1O;
olol1[oooOo1] = lo0O0;
olol1[l1000] = ol0OO;
olol1[lOllO1] = O1ol1;
olol1[oO0l10] = llo0o;
olol1[Oo1100] = o0ooo;
olol1[l1oo1O] = Ol0o0;
olol1[ll1oO1] = O11Ol;
olol1[ol0l0] = OoO0O;
olol1[O00oO0] = lO0lO;
olol1[looOlo] = l0llO;
olol1[lo0111] = O1Ol0;
olol1[loOl00] = l0llOList;
olol1[l11o1o] = o1l01;
olol1[o110ll] = lOl1l;
olol1[o11l] = Ol00l;
olol1.o01oo = o0oOO;
olol1[Oo0o] = l0O0O;
olol1[OllOO] = oOoo1;
olol1[ol1O01] = o0OOO1;
olol1[l00oo] = O0o01;
olol1[lo10lo] = l10l0;
olol1[O1000O] = ol0O1;
olol1[o0l01] = l0Ol0;
olol1[loo11O] = O10lo;
olol1[looolO] = ollOo;
olol1[OO11] = oOl01;
olol1.oO1O = O1l11;
olol1.OoO00 = Ooo00;
olol1.O1oO = o111;
olol1.oo11 = lO100;
olol1._ooOl0o = lllO1;
olol1[l0101] = Ol0Oo;
olol1[OO1O1l] = lo1l;
loOOl(lo1001, "TreeSelect");
lOl0O = function () {
    lOl0O[ollolO][OOlOl].apply(this, arguments);
    this[ll10OO](this[O1o1l])
};
oo00(lOl0O, l0lOol, {
    value: 0,
    minValue: 0,
    maxValue: 100,
    increment: 1,
    decimalPlaces: -1,
    changeOnMousewheel: true,
    allowLimitValue: true,
    allowLoopValue: false,
    allowNull: false,
    uiCls: "mini-spinner",
    format: "",
    O1lo01: null
});
oo1Oo0 = lOl0O[O11Ol1];
oo1Oo0[ol1oOl] = ll1l1;
oo1Oo0.O0lloo = OolOl;
oo1Oo0.lo001 = Oll1O;
oo1Oo0.lO1loO = O0111O;
oo1Oo0.lllO = o1o0o;
oo1Oo0.O01o01 = O0o1;
oo1Oo0.o0olo = oOOlO;
oo1Oo0.O0loo = Oo1o;
oo1Oo0[l1O1l1] = oOl1o;
oo1Oo0[l0lOoO] = OO1O0;
oo1Oo0[oOoo1O] = lllo;
oo1Oo0[o1011] = l111l;
oo1Oo0[O10ll] = OlOOl;
oo1Oo0[lO11oo] = oO1lO;
oo1Oo0[ll1O0o] = o1l0o;
oo1Oo0[ooO1O] = ooO0;
oo1Oo0[OllOo1] = oO1oo;
oo1Oo0[lolOOO] = lllo1;
oo1Oo0[ooo0ol] = Ol111;
oo1Oo0[Oo0010] = loOol;
oo1Oo0[O1l1l1] = lolO1;
oo1Oo0[olo1lo] = OO0oo;
oo1Oo0[O0oO10] = OO000;
oo1Oo0[loOolO] = Olloo;
oo1Oo0[O0O0O] = l1OO0;
oo1Oo0[OOO0oO] = lll00;
oo1Oo0[o0l11o] = Olo1O;
oo1Oo0[ll10OO] = l1Oo0;
oo1Oo0[lOo01l] = l1l1O;
oo1Oo0.Oooo0 = lllll1;
oo1Oo0[lOo101] = lOlol;
oo1Oo0.OO1OHtml = Ol0Ol;
oo1Oo0[OO1O1l] = O0ol1;
loOOl(lOl0O, "spinner");
Oo0Oo0 = function () {
    Oo0Oo0[ollolO][OOlOl].apply(this, arguments);
    this[ll10OO]("00:00:00")
};
oo00(Oo0Oo0, l0lOol, {value: null, format: "H:mm:ss", uiCls: "mini-timespinner", O1lo01: null});
loooo = Oo0Oo0[O11Ol1];
loooo[ol1oOl] = l0OOl;
loooo.O0lloo = lo0O1;
loooo.lo001 = O001o;
loooo.O01o01 = l11Oo;
loooo.o0olo = o0oo0;
loooo.O0loo = OO10l;
loooo.O0ooO0 = O10o1;
loooo[OO0l0O] = l1001;
loooo[lOo01l] = l10oO;
loooo[o1oOl] = ol0oo;
loooo[ll10OO] = lol1o;
loooo[o1011] = oOOoo;
loooo[O10ll] = ooolo;
loooo[lOo101] = lo0OO;
loooo.OO1OHtml = Ool1o;
loOOl(Oo0Oo0, "timespinner");
O10l0l = function () {
    O10l0l[ollolO][OOlOl].apply(this, arguments);
    this[Ol1oO1]("validation", this.ll0oO, this)
};
oo00(O10l0l, l0lOol, {
    buttonText: "\u6d4f\u89c8...",
    _buttonWidth: 56,
    limitType: "",
    limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
    allowInput: false,
    readOnly: true,
    oOloOo: 0,
    uiCls: "mini-htmlfile"
});
O0O01 = O10l0l[O11Ol1];
O0O01[ol1oOl] = o0lll;
O0O01[ol0O1o] = ll1OO;
O0O01[l0ooo1] = o10o1;
O0O01[o1O10l] = oO11O;
O0O01[OloOl] = o1llO;
O0O01[o1oOl] = oo01l;
O0O01[o00l0] = o00oo;
O0O01.ll0oO = OoolO;
O0O01.oll1l = O1l001;
O0O01.lo1o0O = loOl0;
O0O01.OO1OHtml = o0OO1;
O0O01[l0lOl] = lollO;
O0O01[lololl] = O0l1;
loOOl(O10l0l, "htmlfile");
mini.FilterEdit = function () {
    mini.FilterEdit[ollolO][OOlOl].apply(this, arguments);
    this[Ol1oO1]("buttonclick", this.l11l, this);
    this[Ol1oO1]("closeclick", this.__OnCloseClick, this)
};
oo00(mini.FilterEdit, l0lOol, {
    uiCls: "mini-filteredit",
    _deferSetText: false,
    value: "",
    filterValue: "",
    filterData: null,
    _getMenu: function () {
        var $ = this;
        if (!this.menu) {
            this.menu = new lOoO1O();
            this.menu[Ol1oO1]("itemclick", function (_) {
                $.setFilterValue(_.item.value);
                $.OOoOO()
            })
        }
        return this.menu
    },
    l11l: function (B) {
        var A = this._getMenu(), _ = (this.filterData || []).clone();
        A[oo1l0o](_);
        var $ = this.findItem(this.filterValue);
        A[OlO0o1]($);
        A[O0ll1o](this._buttonsEl, {})
    },
    __OnCloseClick: function ($) {
        this[l0O0O0]("");
        this[ll10OO]("");
        this.setFilterValue("");
        this.OOoOO()
    },
    findItem: function (A) {
        var D = this._getMenu(), B = D[lo00l1]();
        for (var _ = 0, C = B.length; _ < C; _++) {
            var $ = B[_];
            if ($.value == A)return $
        }
        return null
    },
    setValue: function ($) {
        if ($ === null || $ === undefined)$ = "";
        $ = String($);
        this.value = $;
        this.l0o0o0.value = this._textEl.value = $
    },
    getFilterData: function () {
        return this.filterData || []
    },
    setFilterData: function ($) {
        if (!mini.isArray($))$ = [];
        this.filterData = $
    },
    getFilterValue: function () {
        return this.filterValue || ""
    },
    setFilterValue: function ($) {
        if ($ === null || $ === undefined)$ = "";
        this.filterValue = $
    },
    getAttrs: function (el) {
        var attrs = mini.FilterEdit[ollolO][ol1oOl][o1O0l0](this, el), jq = jQuery(el);
        mini[Ol100O](el, attrs, ["value", "text", "filterValue", "filterData"]);
        if (typeof attrs.filterData == "string") {
            try {
                attrs.filterData = eval("(" + attrs.filterData + ")")
            } catch (e) {
                attrs.filterData = mini._getMap(attrs.filterData, window)
            }
        }
        return attrs
    }
});
loOOl(mini.FilterEdit, "filteredit");
lllo1o = function () {
    this.data = [];
    lllo1o[ollolO][OOlOl].apply(this, arguments);
    Ol1O(this._textEl, "mouseup", this.oOlol1, this);
    this[Ol1oO1]("showpopup", this.__OnShowPopup, this)
};
oo00(lllo1o, o1lO1O, {
    allowInput: true,
    valueField: "id",
    textField: "text",
    delimiter: ",",
    multiSelect: false,
    data: [],
    grid: null,
    _destroyPopup: false,
    uiCls: "mini-lookup"
});
Ol0oo = lllo1o[O11Ol1];
Ol0oo[ol1oOl] = Ooll;
Ol0oo.oo10 = lo1o0l;
Ol0oo.oOlol1 = loOo11;
Ol0oo.lllO = lO00O;
Ol0oo[l0loO0] = lOOlO;
Ol0oo[olO00o] = oo0lll;
Ol0oo.OO10 = llOo1;
Ol0oo[lolooo] = ll0lo1;
Ol0oo[l0O0O0] = ol1l;
Ol0oo[ll10OO] = lO1ll;
Ol0oo.OO1l = ll1ll;
Ol0oo.lloo = o0lOl;
Ol0oo.Oool0 = l10OlO;
Ol0oo[OO101] = l0l0l;
Ol0oo[OO01O0] = O0l1Ol;
Ol0oo[OOo10] = OlOOo;
Ol0oo[OOll0l] = l110o;
Ol0oo[ooO1ll] = ol1lField;
Ol0oo[OO11l1] = OOol1;
Ol0oo[olOo0l] = lO1llField;
Ol0oo[looOO0] = o00llO;
Ol0oo[o00O0o] = o1Oo;
Ol0oo[Olol1o] = lO0lo;
Ol0oo[l0lOl] = o1Ol1;
loOOl(lllo1o, "lookup");
lo0010 = function ($) {
    lo0010[ollolO][OOlOl][o1O0l0](this, null);
    this.data = [];
    this[l0loO0]();
    if ($)mini.applyTo[o1O0l0](this, $)
};
oo00(lo0010, Ool1O1, {
    formField: true,
    value: "",
    text: "",
    valueField: "id",
    textField: "text",
    data: "",
    url: "",
    delay: 150,
    allowInput: true,
    editIndex: 0,
    o101: "mini-textboxlist-focus",
    o1OlO: "mini-textboxlist-item-hover",
    o0lo1: "mini-textboxlist-item-selected",
    o0O0o: "mini-textboxlist-close-hover",
    textName: "",
    uiCls: "mini-textboxlist",
    errorIconEl: null,
    valueFromSelect: true,
    ajaxDataType: "text",
    ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
    emptyText: "No Result",
    loadingText: "Loading...",
    errorText: "Error",
    popupLoadingText: "<span class='mini-textboxlist-popup-loading'>Loading...</span>",
    popupErrorText: "<span class='mini-textboxlist-popup-error'>Error</span>",
    popupEmptyText: "<span class='mini-textboxlist-popup-noresult'>No Result</span>",
    isShowPopup: false,
    popupHeight: "",
    popupMinHeight: 30,
    popupMaxHeight: 150,
    searchField: "key"
});
o0lol = lo0010[O11Ol1];
o0lol[ol1oOl] = o0OlO;
o0lol[oOool] = OOoo;
o0lol[lo1oO1] = l11ll;
o0lol[O0llO0] = O0loO;
o0lol[O1loo] = olllo;
o0lol.lllO = l10Oo;
o0lol[Ol10O1] = ll10O;
o0lol.Oo111 = oo110O;
o0lol.oO0o1l = lOo01;
o0lol.O11olO = lool0;
o0lol.oll1l = O1O00;
o0lol[oOl0oo] = Oo1ol;
o0lol[ol1O01] = Oo0o1;
o0lol[l0101] = OO011;
o0lol[o0OOo] = ooo0O;
o0lol[olol10] = Ollo0;
o0lol[o0OOo] = ooo0O;
o0lol[olol10] = Ollo0;
o0lol[o0OOo] = ooo0O;
o0lol[olol10] = Ollo0;
o0lol[l1Oo0O] = Oo11O;
o0lol.ol11 = o1llo;
o0lol.looo11 = l0ool;
o0lol.l1Ol00 = l0loO;
o0lol.Oo01 = O11lo;
o0lol[lo11OO] = lOo1l;
o0lol[lO0lO1] = l100o;
o0lol[ll1l00] = l11O1;
o0lol[llO00O] = l01l1;
o0lol[oo00lo] = oll10;
o0lol[OoOoll] = ol10l;
o0lol[O1ool0] = l1ool;
o0lol[oO0OO0] = O0oo1;
o0lol[lO10O] = O11lO;
o0lol[oO0l10] = lOlO1;
o0lol[Oo1100] = oOo10;
o0lol[l0o0l0] = l100l;
o0lol[O0Ol0O] = O00lo;
o0lol[OOll0l] = OOlll;
o0lol[ooO1ll] = oO010;
o0lol[OO11l1] = o00oO;
o0lol[olOo0l] = O01o0;
o0lol[l0O0O0] = oOO0l;
o0lol[ll10OO] = Oo1oO;
o0lol[o00l0] = lolOO;
o0lol[lOo01l] = o100O;
o0lol[o1oOl] = l01oo;
o0lol[ooooO] = l1lOl;
o0lol[l1loO0] = O1O0l;
o0lol.lloo = lolo0;
o0lol[O0o11] = loO0o;
o0lol[O1OOo] = O1lOO;
o0lol.lllOl = oo00O;
o0lol[Ol1o0l] = o0l0O;
o0lol[lOol1O] = oOO0O;
o0lol[lOoll] = o111o;
o0lol[oO10l] = O0loOItem;
o0lol[lOo0OO] = O1ooO;
o0lol[llolO] = O0011;
o0lol[o11l] = l0o01;
o0lol.llll1l = l0o01ByEvent;
o0lol[l0loO0] = o1000;
o0lol[lo11ll] = O0000;
o0lol[l0llOO] = OO00l;
o0lol.Ol10 = O0OOl;
o0lol[l1oOlO] = O0101;
o0lol.o0OO0O = olOO0;
o0lol[lOo101] = oO0o1;
o0lol[l0lOl] = Oll01;
o0lol[lololl] = O1lol;
o0lol[O0oOOl] = l1lOlName;
o0lol[lll1lO] = oOO0lName;
loOOl(lo0010, "textboxlist");
oooloO = function () {
    oooloO[ollolO][OOlOl].apply(this, arguments);
    var $ = this;
    $.olo1 = null;
    this._textEl.onfocus = function () {
        $.l001o = $._textEl.value;
        $.olo1 = setInterval(function () {
            if ($.l001o != $._textEl.value) {
                $.O1lol1();
                $.l001o = $._textEl.value;
                if ($._textEl.value == "" && $.value != "") {
                    $[ll10OO]("");
                    $.OOoOO()
                }
            }
        }, 10)
    };
    this._textEl.onblur = function () {
        clearInterval($.olo1);
        if (!$[oOO1O1]())if ($.l001o != $._textEl.value)if ($._textEl.value == "" && $.value != "") {
            $[ll10OO]("");
            $.OOoOO()
        }
    };
    this._buttonEl.style.display = "none";
    this[lO0ll0]()
};
oo00(oooloO, l1O1lO, {
    url: "",
    allowInput: true,
    delay: 150,
    showButton: false,
    searchField: "key",
    minChars: 0,
    _buttonWidth: 0,
    uiCls: "mini-autocomplete",
    popupEmptyText: "No Result",
    loadingText: "Loading...",
    errorText: "Error",
    enterQuery: false
});
olOlo = oooloO[O11Ol1];
olOlo[ol1oOl] = oOlOl;
olOlo[l01lO] = O11O0;
olOlo[l11ooO] = oOl0l;
olOlo.looo11 = lOOl0;
olOlo.O1lol1 = l1lo0;
olOlo[lo11OO] = o11l1;
olOlo[OOo1O0] = OOoOo;
olOlo.lllO = o1O00;
olOlo[ol1O01] = ll1o1;
olOlo[llo00o] = o0Oo0;
olOlo[ool00] = o1oo0;
olOlo[Oloolo] = oO1O1;
olOlo[o1oo1O] = llOOl;
olOlo[llo10O] = OOOoo;
olOlo[o00o] = Ol1oO;
olOlo[oOlo0l] = O0lOl;
olOlo[Oo1loo] = O0Oo0;
olOlo[oll10o] = ooo10;
olOlo[oOool] = lo1Ol;
olOlo[lo1oO1] = O0lO0;
olOlo[lll001] = loO1l;
olOlo[lO010l] = oo111;
olOlo[l0O0O0] = llo00;
olOlo[ll10OO] = OlOo;
olOlo[Oo1100] = l1l0O;
olOlo[ooloOl] = olO11;
loOOl(oooloO, "autocomplete");
mini.ToolTip = function () {
    mini.ToolTip[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.ToolTip, oo0OO1, {
    selector: "[title]",
    placement: "bottom",
    trigger: "hover focus",
    delay: 200,
    uiCls: "mini-tooltip",
    _create: function () {
        this.el = jQuery("<div class=\"mini-tooltip\"><div class=\"mini-tooltip-arrow\"></div><div class=\"mini-tooltip-inner\"></div></div>")[0];
        this.$element = jQuery(this.el);
        this.$element.appendTo(document.body)
    },
    _initEvents: function () {
    },
    _bindTooltip: function () {
        var F = jQuery(document), B = this.selector, C = "tooltip", E = this.trigger.split(" ");
        for (var A = E.length; A--;) {
            var $ = E[A];
            if ($ == "click")F[Ol1oO1]("click." + C, B, jQuery.proxy(this._toggle, this)); else if ($ != "manual") {
                var _ = $ == "hover" ? "mouseenter" : "focus", D = $ == "hover" ? "mouseleave" : "blur";
                F[Ol1oO1](_ + "." + C, B, jQuery.proxy(this._enter, this));
                F[Ol1oO1](D + "." + C, B, jQuery.proxy(this._leave, this))
            }
        }
    },
    setSelector: function ($) {
        this.selector = $;
        this._bindTooltip()
    },
    getSelector: function () {
        return this.selector
    },
    setPlacement: function ($) {
        this.placement = $
    },
    getPlacement: function () {
        return this.placement
    },
    openTimer: null,
    _enter: function (_) {
        var $ = this;
        clearTimeout(this.openTimer);
        this.openTimer = setTimeout(function () {
            $.openTimer = null;
            $.open(_.currentTarget)
        }, $.delay)
    },
    _leave: function ($) {
        clearTimeout(this.openTimer);
        this.close()
    },
    _toggle: function ($) {
        if (this._getTip().css("display") == "none")this.enter($); else this.leave($)
    },
    open: function ($) {
        var $ = jQuery($)[0] || this.target, C = jQuery($), _ = this.getContent($), B = {
            element: $,
            content: _,
            cancel: !_
        };
        this[ol1O0]("beforeopen", B);
        if (B.cancel)return;
        this.$element[l000ll]();
        this._target = $;
        try {
            this.setContent(B.content)
        } catch (A) {
        }
        this[ol1O0]("open", {element: $})
    },
    close: function () {
        this._target = null;
        this.$element[O1ll1]()
    },
    showLoading: function () {
        this.setContent("<div class=\"mini-tooltip-loading\"></div>")
    },
    setContent: function ($) {
        this.$element.children(".mini-tooltip-inner").html($ || "&nbsp;");
        this.applyPlacement()
    },
    getContent: function ($) {
        var _ = $.title;
        if (_)jQuery($).attr("data-tooltip", _).attr("title", "");
        if (!_)_ = jQuery($).attr("data-tooltip");
        return _
    },
    applyPlacement: function () {
        if (!this._target)return;
        if (this.$element.css("display") == "none")return;
        var B = this._target, J = jQuery(B), D = J.attr("data-placement") || this.placement, C = this.$element;
        if (!B || !C[0])return;
        C[l000ll]().css({left: "-2000px", top: "-2000px"});
        function E($) {
            C[OoOo0]("mini-tooltip-left mini-tooltip-top mini-tooltip-right mini-tooltip-bottom mini-tooltip-bottomleft mini-tooltip-topleft mini-tooltip-bottomright mini-tooltip-topright")[Oo1Olo]("mini-tooltip-" + $)
        }

        function _($) {
            C.offset($)
        }

        var A = Ol0oO(B), H = mini.getViewportBox(), F = A.top - H.top, $ = H.bottom - A.bottom;
        E(D);
        var I = Ol0oO(C[0]), G = mini.getCalculatedOffset(D, A, I.width, I.height);
        if (D == "left"); else if (D == "right"); else if (D == "top"); else if (D == "bottom"); else if (D == "bottomleft" && F > $) {
            if (G.top + I.height > H.bottom)D = "topleft"
        } else if (D == "topleft");
        E(D);
        G = mini.getCalculatedOffset(D, A, I.width, I.height);
        _(G)
    },
    getAttrs: function ($) {
        var _ = mini.ToolTip[ollolO][ol1oOl][o1O0l0](this, $);
        mini[Ol100O]($, _, ["selector", "placement", "onbeforeopen", "onopen", "onclose"]);
        return _
    }
});
loOOl(mini.ToolTip, "tooltip");
mini.getCalculatedOffset = function (B, _, $, A) {
    if (B == "bottom")return {top: _.top + _.height, left: _.left + _.width / 2 - $ / 2};
    if (B == "top")return {top: _.top - A, left: _.left + _.width / 2 - $ / 2};
    if (B == "left")return {top: _.top + _.height / 2 - A / 2, left: _.left - $};
    if (B == "bottomleft")return {top: _.top + _.height, left: _.left};
    if (B == "bottomright")return {top: _.top + _.height, left: _.left + _.width - $};
    if (B == "topleft")return {top: _.top - A, left: _.left};
    if (B == "topright")return {top: _.top - A, left: _.left + _.width - $};
    return {top: _.top + _.height / 2 - A / 2, left: _.left + _.width}
};
oO00O0 = function ($) {
    this.postParam = {};
    oO00O0[ollolO][OOlOl][o1O0l0](this, $);
    this[Ol1oO1]("validation", this.ll0oO, this)
};
oo00(oO00O0, l0lOol, {
    buttonText: "\u6d4f\u89c8...",
    _buttonWidth: 56,
    limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
    readOnly: true,
    oOloOo: 0,
    limitSize: "",
    limitType: "",
    typesDescription: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f",
    uploadLimit: 0,
    queueLimit: "",
    flashUrl: "",
    uploadUrl: "",
    showUploadProgress: true,
    postParam: null,
    uploadOnSelect: false,
    uiCls: "mini-fileupload"
});
oOoO1 = oO00O0[O11Ol1];
oOoO1[ol1oOl] = l0Ool;
oOoO1[O1Oo] = lO01o;
oOoO1[OllOlo] = loo11;
oOoO1[oOolo0] = ol100;
oOoO1[O1olo0] = ool1o;
oOoO1[OO10o] = OlO10;
oOoO1[lol1lo] = OlO10_error;
oOoO1[lOlllO] = O101O;
oOoO1[olool0] = oo01o;
oOoO1[ooloOO] = oOoOO;
oOoO1[OO0olo] = OO1oo;
oOoO1[O1Olo] = ll101;
oOoO1[o00l0] = ll01;
oOoO1[lOOO1l] = o101l;
oOoO1[Oo1oOo] = OOoo0;
oOoO1[lOolO] = loo1l;
oOoO1[o0ooo1] = l1o00;
oOoO1[OllOl0] = o001O;
oOoO1[o1O10l] = l0O0o;
oOoO1[OloOl] = OOOO0;
oOoO1[o10ll] = Ooloo;
oOoO1[OOloo] = lOO1l;
oOoO1[ol0O1o] = o1oO;
oOoO1[l0ooo1] = lll0O;
oOoO1[o1olo] = l1O0l;
oOoO1[lOlOo1] = o01o;
oOoO1[ll1oO0] = oo1oo;
oOoO1.oll1l = OO10O;
oOoO1[l0lOl] = l0O00;
oOoO1.OO1OHtml = ool11;
oOoO1[lololl] = lOoo0;
loOOl(oO00O0, "fileupload");
mini.ProgressBar = function () {
    mini.ProgressBar[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.ProgressBar, oo0OO1, {
    formField: true,
    uiCls: "mini-progressbar",
    showText: false,
    textAlign: "center",
    text: "",
    format: "{0}%",
    value: 0,
    set: function (_) {
        if (typeof _ == "string")return this;
        var $ = _.value;
        delete _.value;
        mini.ProgressBar[ollolO][OO1O1l][o1O0l0](this, _);
        if (!mini.isNull($))this[ll10OO]($);
        return this
    },
    _create: function () {
        this.el = document.createElement("div");
        this.el.className = "mini-progressbar";
        var $ = "<div class=\"mini-progressbar-border\">" + "<div class=\"mini-progressbar-bar\"></div>" + "<div class=\"mini-progressbar-text\"></div>" + "</div>";
        this.el.innerHTML = $;
        this._borderEl = this.el.firstChild;
        this._barEl = this._borderEl.firstChild;
        this._textEl = this._borderEl.lastChild
    },
    setText: function ($) {
        this.text = $;
        this._textEl.innerHTML = $
    },
    setShowText: function ($) {
        this.showText = $;
        this._textEl.style.display = $ ? "" : "none"
    },
    getShowText: function () {
        return this.showText
    },
    setTextAlign: function ($) {
        this.textAlign = $;
        this._textEl.style.textAlign = $
    },
    getTextAlign: function () {
        return this.textAlign
    },
    setValue: function ($) {
        $ = parseFloat($);
        if (isNaN($))$ = 0;
        if ($ < 0)$ = 0;
        if ($ > 100)$ = 100;
        this.value = $;
        this._barEl.style.width = $ + "%";
        var _ = String.format(this.format, $);
        this[l0O0O0](_)
    },
    getValue: function () {
        return this.value
    },
    getAttrs: function ($) {
        var _ = mini.ProgressBar[ollolO][ol1oOl][o1O0l0](this, $);
        mini[Ol100O]($, _, ["text", "format", "textAlign"]);
        mini[Olo01O]($, _, ["showText"]);
        return _
    }
});
loOOl(mini.ProgressBar, "progressbar");
mini.Form = function ($) {
    this.el = o0OO($);
    if (!this.el)throw new Error("form element not null");
    mini.Form[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.Form, OoO11l, {
    el: null,
    getFields: function () {
        if (!this.el)return [];
        var $ = mini.findControls(function ($) {
            if (!$.el || $.formField != true)return false;
            if (Ol0O(this.el, $.el))return true;
            return false
        }, this);
        return $
    },
    getFieldsMap: function () {
        var B = this.getFields(), A = {};
        for (var $ = 0, C = B.length; $ < C; $++) {
            var _ = B[$];
            if (_.name)A[_.name] = _
        }
        return A
    },
    getField: function ($) {
        if (!this.el)return null;
        return mini[O1looO]($, this.el)
    },
    getData: function (B, F) {
        if (mini.isNull(F))F = true;
        var A = B ? "getFormValue" : "getValue", $ = this.getFields(), D = {};
        for (var _ = 0, E = $.length; _ < E; _++) {
            var C = $[_], G = C[A];
            if (!G)continue;
            if (C.name)if (F == true)mini._setMap(C.name, G[o1O0l0](C), D); else D[C.name] = G[o1O0l0](C);
            if (C.textName && C[ooooO])if (F == true)mini._setMap(C.textName, C[ooooO](), D); else D[C.textName] = C[ooooO]()
        }
        return D
    },
    setData: function (F, A, C) {
        if (mini.isNull(C))C = true;
        if (typeof F != "object")F = {};
        var B = this.getFieldsMap();
        for (var D in B) {
            var _ = B[D];
            if (!_)continue;
            if (_[ll10OO]) {
                var E = F[D];
                if (C == true)E = mini._getMap(D, F);
                if (E === undefined && A === false)continue;
                if (E === null)E = "";
                _[ll10OO](E)
            }
            if (_[l0O0O0] && _.textName) {
                var $ = F[_.textName];
                if (C == true)$ = mini._getMap(_.textName, F);
                if (mini.isNull($))$ = "";
                _[l0O0O0]($)
            }
        }
    },
    reset: function () {
        var $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var B = $[_];
            if (!B[ll10OO])continue;
            if (B[l0O0O0] && B._clearText !== false) {
                var A = B.defaultText;
                if (mini.isNull(A))A = "";
                B[l0O0O0](A)
            }
            B[ll10OO](B[o0lo0O])
        }
        this[ooOoO](true)
    },
    clear: function () {
        var $ = this.getFields();
        for (var _ = 0, B = $.length; _ < B; _++) {
            var A = $[_];
            if (!A[ll10OO])continue;
            if (A[l0O0O0] && A._clearText !== false)A[l0O0O0]("");
            A[ll10OO]("")
        }
        this[ooOoO](true)
    },
    getValidateFields: function (C) {
        function A($) {
            return $[l0Ooo](function ($) {
                if (olol($, "mini-tabs-body"))return true
            })
        }

        var D = [], $ = this.getFields();
        for (var _ = 0, E = $.length; _ < E; _++) {
            var B = $[_];
            if (!B[lO1lo] || !B[l0Ooo])continue;
            if (A(B))if (B.enabled || C)D.push(B)
        }
        return D
    },
    validate: function (C, D) {
        var $ = this.getValidateFields(D);
        for (var _ = 0, E = $.length; _ < E; _++) {
            var A = $[_], B = A[lO1lo]();
            if (B == false && C === false)break
        }
        return this[o0Ol0l]()
    },
    isValid: function () {
        var $ = this.getValidateFields();
        for (var _ = 0, B = $.length; _ < B; _++) {
            var A = $[_];
            if (A[o0Ol0l]() == false)return false
        }
        return true
    },
    setIsValid: function (B) {
        var $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var A = $[_];
            if (!A[ooOoO])continue;
            A[ooOoO](B)
        }
    },
    getErrorTexts: function () {
        var A = [], _ = this.getErrors();
        for (var $ = 0, C = _.length; $ < C; $++) {
            var B = _[$];
            A.push(B.errorText)
        }
        return A
    },
    getErrors: function () {
        var A = [], $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var B = $[_];
            if (!B[o0Ol0l])continue;
            if (B[o0Ol0l]() == false)A.push(B)
        }
        return A
    },
    mask: function ($) {
        if (typeof $ == "string")$ = {html: $};
        $ = $ || {};
        $.el = this.el;
        if (!$.cls)$.cls = this.oo1o0l;
        mini[lOO0O0]($)
    },
    unmask: function () {
        mini[oolo1o](this.el)
    },
    oo1o0l: "mini-mask-loading",
    loadingMsg: "\u6570\u636e\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e...",
    loading: function ($) {
        this[lOO0O0]($ || this.loadingMsg)
    },
    o011: function ($) {
        this._changed = true
    },
    _changed: false,
    setChanged: function (A) {
        this._changed = A;
        var $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var B = $[_];
            B[Ol1oO1]("valuechanged", this.o011, this)
        }
    },
    isChanged: function () {
        return this._changed
    },
    setEnabled: function (A) {
        var $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var B = $[_];
            B[ool1ll](A)
        }
    }
});
o1l0l1 = function () {
    o1l0l1[ollolO][OOlOl].apply(this, arguments)
};
oo00(o1l0l1, mini.Container, {style: "", _clearBorder: false, uiCls: "mini-fit"});
Ol1o0 = o1l0l1[O11Ol1];
Ol1o0[ol1oOl] = o01l;
Ol1o0[o1l11l] = lOl11;
Ol1o0[l0llOO] = olO0lO;
Ol1o0[O1l1ll] = lollO0;
Ol1o0[lOo101] = O11l;
Ol1o0[lololl] = ll1l0;
loOOl(o1l0l1, "fit");
lolo00 = function () {
    this.OOll();
    lolo00[ollolO][OOlOl].apply(this, arguments);
    if (this.url)this[Oo1100](this.url);
    this._contentEl = this.Ol01;
    this[o0l0lO]();
    this.oO010l = new Oo1l10(this);
    this[l1lOO1]()
};
oo00(lolo00, mini.Container, {
    width: 250,
    title: "",
    iconCls: "",
    iconStyle: "",
    allowResize: false,
    url: "",
    refreshOnExpand: false,
    maskOnLoad: true,
    collapseOnTitleClick: false,
    showCollapseButton: false,
    showCloseButton: false,
    closeAction: "display",
    showHeader: true,
    showToolbar: false,
    showFooter: false,
    headerCls: "",
    headerStyle: "",
    bodyCls: "",
    bodyStyle: "",
    footerCls: "",
    footerStyle: "",
    toolbarCls: "",
    toolbarStyle: "",
    minWidth: 180,
    minHeight: 100,
    maxWidth: 5000,
    maxHeight: 3000,
    uiCls: "mini-panel",
    _setBodyWidth: true,
    clearTimeStamp: false,
    ol00: 80,
    expanded: true
});
O0lOO0 = lolo00[O11Ol1];
O0lOO0[ol1oOl] = o01O0o;
O0lOO0[OoOo01] = oll0l;
O0lOO0[O001ol] = ll010;
O0lOO0[lolool] = ollO1;
O0lOO0[lO0o11] = OllO1;
O0lOO0[llo0o1] = lOOo;
O0lOO0[lOlllo] = Oo0O0O;
O0lOO0[O0l1o1] = O11101;
O0lOO0[oollol] = l10ol;
O0lOO0[OOoo00] = Oo1l0;
O0lOO0[oOOllO] = OOO0o;
O0lOO0[oOollo] = llOooO;
O0lOO0[loOO1O] = lO0ol;
O0lOO0[ol1l1l] = ooOO0;
O0lOO0[O00lOO] = OOoo1;
O0lOO0[oo1O10] = O101l;
O0lOO0[oO0l10] = O0oOl0;
O0lOO0[Oo1100] = lol0O;
O0lOO0[Olllo1] = lO11o;
O0lOO0[looOlo] = ooO1;
O0lOO0[OOl0Ol] = loo1;
O0lOO0.l00o0 = OO11l;
O0lOO0.O010Ol = O1OO1;
O0lOO0[OOlO1] = loOl;
O0lOO0[oo010O] = llOlO1;
O0lOO0[o01o11] = l0oO1l;
O0lOO0[lOl010] = l100;
O0lOO0[ooOooo] = OoooO;
O0lOO0[lO10o0] = ooOloo;
O0lOO0[Oll001] = O100o;
O0lOO0[l1oooO] = oo10O0;
O0lOO0[looOo1] = o1ooO;
O0lOO0[o1l11l] = lol1;
O0lOO0[ooo11o] = O11OO;
O0lOO0[oloO0] = ooOo;
O0lOO0[ooo1o0] = o0loo0;
O0lOO0[l0lo1l] = l1010;
O0lOO0[oo0lO0] = OloO0;
O0lOO0[o1O0OO] = ooOos;
O0lOO0[lOl0lo] = ol11ll;
O0lOO0[OolOo0] = loll0;
O0lOO0.OOll = ll0ol;
O0lOO0[l11Ol] = oo0lO;
O0lOO0.lO0o = oolo10;
O0lOO0.oO0o1l = l1OlO;
O0lOO0[oo1Ool] = oO0OlO;
O0lOO0[lo0l1] = llOOoo;
O0lOO0[o10O1] = olollO;
O0lOO0[oO1l1O] = ol0o;
O0lOO0[lool1O] = oO0O0;
O0lOO0[Ol0OlO] = Oo11l;
O0lOO0[Ol1o0O] = o1oo;
O0lOO0[olloO0] = ooOol;
O0lOO0[l1ll00] = lO1oO;
O0lOO0[o0oO1l] = olO0ll;
O0lOO0[l00101] = lloO1;
O0lOO0[OOo010] = oOo1;
O0lOO0[l1lOO1] = Ol0O1o;
O0lOO0[o01OO] = o0lOlO;
O0lOO0[oOOOl0] = Oo0OO;
O0lOO0[lol0o] = o0101;
O0lOO0[OO1loO] = OlolO;
O0lOO0[l0lOlO] = O1lo;
O0lOO0[oO00lO] = O010o;
O0lOO0[o10oOl] = lOlOoO;
O0lOO0[OlooO0] = l1ll;
O0lOO0[Oo0ol0] = oo10O0Cls;
O0lOO0[oo0o0O] = ll1Ol;
O0lOO0[ooO00O] = o1ooOCls;
O0lOO0[O0011O] = O101o;
O0lOO0[Oo0O00] = O11OOCls;
O0lOO0[O00o0l] = OoooOo;
O0lOO0[OOl0oO] = OoOOlo;
O0lOO0[O1lOo1] = o0ll1;
O0lOO0[o1lOO0] = oo10O0Style;
O0lOO0[OlOool] = l0100;
O0lOO0[o1l01l] = o1ooOStyle;
O0lOO0[ll00OO] = OOO01;
O0lOO0[o10O1l] = O11OOStyle;
O0lOO0[l10l01] = oo0oo;
O0lOO0[l01ooo] = Oo0Oo;
O0lOO0[Oolol] = ollOoO;
O0lOO0[OOOOll] = o0o00;
O0lOO0[Oo0O] = O1O1o;
O0lOO0[O0oo1O] = l0l11;
O0lOO0[o0oo10] = lO10;
O0lOO0[llOoll] = oOOl;
O0lOO0[ll0o0l] = o1001;
O0lOO0[O0o0o1] = oO1Ol;
O0lOO0[l0llOO] = OoloO;
O0lOO0[o0l0lO] = lloo0;
O0lOO0[lOo101] = o0OOO;
O0lOO0[l0lOl] = loOOO;
O0lOO0[lololl] = OOlO0;
O0lOO0[OO1O1l] = lO1o;
loOOl(lolo00, "panel");
O0OOol = function () {
    O0OOol[ollolO][OOlOl].apply(this, arguments);
    this[oll1o0]("mini-window");
    this[lOo0l](false);
    this[o1111l](this.allowDrag);
    this[oOollo](this[lO0oOO])
};
oo00(O0OOol, lolo00, {
    x: 0,
    y: 0,
    state: "restore",
    lOoOlO: "mini-window-drag",
    OOl1o1: "mini-window-resize",
    allowDrag: true,
    showCloseButton: true,
    showMaxButton: false,
    showMinButton: false,
    showCollapseButton: false,
    showModal: true,
    minWidth: 150,
    minHeight: 80,
    maxWidth: 2000,
    maxHeight: 2000,
    uiCls: "mini-window",
    showInBody: true,
    containerEl: null,
    enableDragProxy: true,
    allowCrossBottom: true,
    xxx: 0
});
l0o1l = O0OOol[O11Ol1];
l0o1l[O0ll1o] = OO00;
l0o1l[ol1oOl] = ll1ol;
l0o1l[l0lOl] = oo0oo1;
l0o1l.oO01 = o1o11O;
l0o1l[ool1Ol] = OOO011;
l0o1l[Oo1101] = lOOl0O;
l0o1l[O0oOl] = l00l1;
l0o1l[loOOll] = lOll;
l0o1l.loO11o = O0lo;
l0o1l.lO0o = o0100;
l0o1l.oo00O1 = lO0O1;
l0o1l.olO1 = lo10l;
l0o1l[l0O1l0] = lOOoO;
l0o1l[llO1l] = Oll0O;
l0o1l[O1ll1] = Oololl;
l0o1l[l000ll] = ollll;
l0o1l[lOOOo1] = ollllAtPos;
l0o1l[o11o00] = o1OOo;
l0o1l[OOoloo] = oo1oo0;
l0o1l[Oo0oO] = o1lOl;
l0o1l[O0OOO] = o001o;
l0o1l[O00OlO] = ololl;
l0o1l[o1O0l1] = Oll0o;
l0o1l[lo0oO0] = ol1Ol0;
l0o1l[ol0ooO] = oO0lO;
l0o1l[OO011o] = Ollo1;
l0o1l[o1111l] = OooO0;
l0o1l[Oo11l0] = l011O0;
l0o1l[l1o0O] = ll0l1;
l0o1l[O0l01o] = oO01o;
l0o1l[O0Olo0] = OOOl0;
l0o1l[lloo1l] = ol0oO;
l0o1l[lo111o] = lo1ll;
l0o1l[Ol0ol1] = l0O01l;
l0o1l[o0O1l0] = l0oOo;
l0o1l[O1lolo] = l0o10;
l0o1l[l011Oo] = Ol10O;
l0o1l[lO1oo1] = Ol00;
l0o1l.oo0OO = O0o0ol;
l0o1l[l0llOO] = O1OlO;
l0o1l[lOo101] = llOo0;
l0o1l.OOll = lOO1;
l0o1l[lololl] = llo1;
loOOl(O0OOol, "window");
mini.MessageBox = {
    alertTitle: "\u63d0\u9192",
    confirmTitle: "\u786e\u8ba4",
    prompTitle: "\u8f93\u5165",
    prompMessage: "\u8bf7\u8f93\u5165\u5185\u5bb9\uff1a",
    buttonText: {ok: "\u786e\u5b9a", cancel: "\u53d6\u6d88", yes: "\u662f", no: "\u5426"},
    show: function (F) {
        F = mini.copyTo({
            width: "auto",
            height: "auto",
            showModal: true,
            timeout: 0,
            minWidth: 150,
            maxWidth: 800,
            minHeight: 50,
            maxHeight: 350,
            showHeader: true,
            title: "",
            titleIcon: "",
            iconCls: "",
            iconStyle: "",
            message: "",
            html: "",
            spaceStyle: "margin-right:15px",
            showCloseButton: true,
            buttons: null,
            buttonWidth: 58,
            callback: null
        }, F);
        F.message = String(F.message);
        var I = F.callback, C = new O0OOol();
        C[oll1o0]("mini-messagebox");
        C[o10O1l]("overflow:hidden");
        C[l011Oo](F[ol00l0]);
        C[oO00lO](F.title || "");
        C[OO1loO](F.titleIcon);
        C[Ol0OlO](F.showHeader);
        C[OOo010](F[o0loO]);
        var J = C.uid + "$table", O = C.uid + "$content", M = "<div class=\"" + F.iconCls + "\" style=\"" + F[O110l] + "\"></div>", R = "<table class=\"mini-messagebox-table\" id=\"" + J + "\" style=\"\" cellspacing=\"0\" cellpadding=\"0\"><tr><td>" + M + "</td><td id=\"" + O + "\" class=\"mini-messagebox-content-text\">" + (F.message || "") + "</td></tr></table>", _ = "<div class=\"mini-messagebox-content\"></div>" + "<div class=\"mini-messagebox-buttons\"></div>";
        C.Ol01.innerHTML = _;
        var N = C.Ol01.firstChild;
        if (F.html) {
            if (typeof F.html == "string")N.innerHTML = F.html; else if (mini.isElement(F.html))N.appendChild(F.html)
        } else N.innerHTML = R;
        C._Buttons = [];
        var Q = C.Ol01.lastChild;
        if (F.buttons && F.buttons.length > 0) {
            for (var H = 0, D = F.buttons.length; H < D; H++) {
                var E = F.buttons[H], K = mini.MessageBox.buttonText[E];
                if (!K)K = E;
                var $ = new oolo1O();
                $[l0O0O0](K);
                $[oll0OO](F.buttonWidth);
                $[O1OO10](Q);
                $.action = E;
                $[Ol1oO1]("click", function (_) {
                    var $ = _.sender;
                    if (I)if (I($.action) === false)return;
                    mini.MessageBox[O1ll1](C)
                });
                if (H != D - 1)$[Oo1oll](F.spaceStyle);
                C._Buttons.push($)
            }
        } else Q.style.display = "none";
        C[o0O1l0](F.minWidth);
        C[lo111o](F.minHeight);
        C[O0Olo0](F.maxWidth);
        C[l1o0O](F.maxHeight);
        C[oll0OO](F.width);
        C[lOll1l](F.height);
        C[l000ll](F.x, F.y, {animType: F.animType});
        var A = C[llO1l]();
        C[oll0OO](A);
        var L = C[o11lOl]();
        C[lOll1l](L);
        var B = document.getElementById(J);
        if (B)B.style.width = "100%";
        var G = document.getElementById(O);
        if (G)G.style.width = "100%";
        var P = C._Buttons[0];
        if (P)P[O1loo](); else C[O1loo]();
        C[Ol1oO1]("beforebuttonclick", function ($) {
            if (I)I("close");
            $.cancel = true;
            mini.MessageBox[O1ll1](C)
        });
        Ol1O(C.el, "keydown", function ($) {
            if ($.keyCode == 27) {
                if (I)I("close");
                mini.MessageBox[O1ll1](C)
            }
        });
        if (F.timeout)setTimeout(function () {
            mini.MessageBox[O1ll1](C.uid)
        }, F.timeout);
        return C.uid
    },
    hide: function (C) {
        if (!C)return;
        var _ = typeof C == "object" ? C : mini.getbyUID(C);
        if (!_)return;
        for (var $ = 0, A = _._Buttons.length; $ < A; $++) {
            var B = _._Buttons[$];
            B[l0lOl]()
        }
        _._Buttons = null;
        _[l0lOl]()
    },
    alert: function (A, _, $) {
        return mini.MessageBox[l000ll]({
            minWidth: 250,
            title: _ || mini.MessageBox.alertTitle,
            buttons: ["ok"],
            message: A,
            iconCls: "mini-messagebox-warning",
            callback: $
        })
    },
    confirm: function (A, _, $) {
        return mini.MessageBox[l000ll]({
            minWidth: 250,
            title: _ || mini.MessageBox.confirmTitle,
            buttons: ["ok", "cancel"],
            message: A,
            iconCls: "mini-messagebox-question",
            callback: $
        })
    },
    prompt: function (C, B, A, _) {
        var F = "prompt$" + new Date()[OOo0o1](), E = C || mini.MessageBox.promptMessage;
        if (_)E = E + "<br/><textarea id=\"" + F + "\" style=\"width:200px;height:60px;margin-top:3px;\"></textarea>"; else E = E + "<br/><input id=\"" + F + "\" type=\"text\" style=\"width:200px;margin-top:3px;\"/>";
        var D = mini.MessageBox[l000ll]({
            title: B || mini.MessageBox.promptTitle,
            buttons: ["ok", "cancel"],
            width: 250,
            html: "<div style=\"padding:5px;padding-left:10px;\">" + E + "</div>",
            callback: function (_) {
                var $ = document.getElementById(F);
                if (A)return A(_, $.value)
            }
        }), $ = document.getElementById(F);
        $[O1loo]();
        return D
    },
    loading: function (_, $) {
        return mini.MessageBox[l000ll]({
            minHeight: 50,
            title: $,
            showCloseButton: false,
            message: _,
            iconCls: "mini-messagebox-waiting"
        })
    },
    showTips: function (C) {
        var $ = jQuery;
        C = jQuery.extend({
            content: "",
            state: "",
            x: "center",
            y: "top",
            offset: [10, 10],
            fixed: true,
            timeout: 2000
        }, C);
        var A = "mini-tips-" + C.state, _ = "<div class=\"mini-tips " + A + "\">" + C.content + "</div>", B = jQuery(_).appendTo(document.body);
        C.el = B[0];
        C.timeoutHandler = function () {
            B.slideUp();
            setTimeout(function () {
                B.remove()
            }, 2000)
        };
        mini.showAt(C);
        B[O1ll1]().slideDown()
    }
};
mini.alert = mini.MessageBox.alert;
mini.confirm = mini.MessageBox.confirm;
mini.prompt = mini.MessageBox.prompt;
mini[Ool0o] = mini.MessageBox[Ool0o];
mini.showMessageBox = mini.MessageBox[l000ll];
mini.hideMessageBox = mini.MessageBox[O1ll1];
mini.showTips = mini.MessageBox.showTips;
OlO1l0 = function () {
    this.loOlo();
    OlO1l0[ollolO][OOlOl].apply(this, arguments)
};
oo00(OlO1l0, oo0OO1, {
    width: 300,
    height: 180,
    vertical: false,
    allowResize: true,
    pane1: null,
    pane2: null,
    showHandleButton: true,
    handlerStyle: "",
    handlerCls: "",
    handlerSize: 5,
    uiCls: "mini-splitter"
});
Oo01o = OlO1l0[O11Ol1];
Oo01o[ol1oOl] = l1O01;
Oo01o.O00OO = loO0O;
Oo01o.lll11 = ooo1l;
Oo01o.OoOOlO = looo1;
Oo01o.l01l = ll0o;
Oo01o.Ol0l = O00oo;
Oo01o[l11Ol] = O00o1;
Oo01o.lO0o = Oo000;
Oo01o.oO0o1l = ool1O;
Oo01o[oo11O0] = l1o1l;
Oo01o[oloo1l] = O1o0OO;
Oo01o[oOOllO] = oOOo1;
Oo01o[oOollo] = Ol0O0;
Oo01o[o1l10] = loolo0;
Oo01o[l01O0o] = O0oO0;
Oo01o[Ool01] = ooOoo;
Oo01o[l1l00o] = OlOo1;
Oo01o[o1OolO] = oO0ol;
Oo01o[oo100] = Ol1l0;
Oo01o[oo01OO] = o0lO1;
Oo01o[O1l0O] = OOl11;
Oo01o[o1ol00] = o0011;
Oo01o[lOll1O] = OlO0l;
Oo01o[OO0lO1] = OOl1O;
Oo01o[Ol0lll] = olloO;
Oo01o[O100l1] = lO011;
Oo01o[OOoll1] = lOlO0;
Oo01o[olol11] = lOlO0Box;
Oo01o[l0llOO] = l0Oo0;
Oo01o[l0loO0] = O11o;
Oo01o.loOlo = Ol1ll;
Oo01o[lOo101] = OOlo0;
Oo01o[lololl] = O00O0;
loOOl(OlO1l0, "splitter");
l0l0OO = function () {
    this.regions = [];
    this.regionMap = {};
    l0l0OO[ollolO][OOlOl].apply(this, arguments)
};
oo00(l0l0OO, oo0OO1, {
    floatable: true,
    regions: [],
    splitSize: 5,
    collapseWidth: 28,
    collapseHeight: 25,
    regionWidth: 150,
    regionHeight: 80,
    regionMinWidth: 50,
    regionMinHeight: 25,
    regionMaxWidth: 2000,
    regionMaxHeight: 2000,
    splitToolTip: "",
    uiCls: "mini-layout",
    hoverProxyEl: null
});
O0oo = l0l0OO[O11Ol1];
O0oo[O0OO11] = lll1l;
O0oo[l11Ol] = o1l1o1;
O0oo.O11olO = o01ol;
O0oo.ol0010 = OOO1l;
O0oo.O1l1 = O000l;
O0oo.lO0o = oO00o;
O0oo.oO0o1l = l0oo1;
O0oo.O1O1 = lOo0o1;
O0oo.oo1l = ol1Ol;
O0oo.lO0o1 = oo1ol;
O0oo[OlO0lO] = oooOO;
O0oo[Oo00oo] = o1o1l1;
O0oo[Oloo0O] = l0o11;
O0oo[ololoo] = llO1O;
O0oo[O1O1oO] = o01oO1;
O0oo[OOolo0] = o1o00l;
O0oo[o10oo0] = lOO10;
O0oo[ll1lOo] = o00OO;
O0oo.OOl00 = l0oOO;
O0oo[lolO00] = O0oOO;
O0oo[ol10lO] = OOl0l;
O0oo[OOllo0] = lolOl;
O0oo[Oll00o] = o1l0;
O0oo[Oll1ll] = l0O0l;
O0oo.lOo0 = Olol0;
O0oo.oo1l1 = OlOlo;
O0oo.OO1O = OOOo1;
O0oo[ol0lo1] = OoOO1;
O0oo[OlO0ll] = OoOO1Box;
O0oo[O1ll0o] = OoOO1ProxyEl;
O0oo[O0O1O0] = OoOO1SplitEl;
O0oo[o0lOl0] = OoOO1BodyEl;
O0oo[OOOl01] = OoOO1HeaderEl;
O0oo[lOO11l] = OoOO1El;
O0oo[lOo101] = oo0Oo;
O0oo[lololl] = o1l0ol;
mini.copyTo(l0l0OO.prototype, {
    oOl0o0: function (_, A) {
        var C = "<div class=\"mini-tools\">";
        if (A)C += "<span class=\"mini-tools-collapse\"></span>"; else for (var $ = _.buttons.length - 1; $ >= 0; $--) {
            var B = _.buttons[$];
            C += "<span class=\"" + B.cls + "\" style=\"";
            C += B.style + ";" + (B.visible ? "" : "display:none;") + "\">" + B.html + "</span>"
        }
        C += "</div>";
        C += "<div class=\"mini-layout-region-icon " + _.iconCls + "\" style=\"" + _[O110l] + ";" + ((_[O110l] || _.iconCls) ? "" : "display:none;") + "\"></div>";
        C += "<div class=\"mini-layout-region-title\">" + _.title + "</div>";
        return C
    }, doUpdate: function () {
        for (var $ = 0, F = this.regions.length; $ < F; $++) {
            var C = this.regions[$], A = C.region, B = C._el, E = C._split, D = C._proxy;
            if (C.cls)l1Oo(B, C.cls);
            if (C.headerCls)l1Oo(B.firstChild, C.headerCls);
            C._header.style.display = C.showHeader ? "" : "none";
            C._header.innerHTML = this.oOl0o0(C);
            if (C._proxy) {
                var _ = this.oOl0o0(C, true);
                if (C.showProxyText)if (C.region == "west" || C.region == "east")_ += "<div class=\"mini-layout-proxy-text\" >" + C.title + "</div>";
                C._proxy.innerHTML = _
            }
            if (E) {
                o11o(E, "mini-layout-split-nodrag");
                if (C.expanded == false || !C[lO0oOO])l1Oo(E, "mini-layout-split-nodrag")
            }
        }
        this[l0llOO]()
    }, doLayout: function () {
        if (!this[Ooo1oo]())return;
        if (this.olOOlo)return;
        var C = l010(this.el, true), _ = lo0o(this.el, true), D = {x: 0, y: 0, width: _, height: C};
        l10o(this._borderEl, C);
        var I = this.regions.clone(), P = this[ol0lo1]("center");
        I.remove(P);
        if (P)I.push(P);
        for (var K = 0, H = I.length; K < H; K++) {
            var E = I[K];
            E._Expanded = false;
            o11o(E._el, "mini-layout-popup");
            var A = E.region, L = E._el, F = E._split, G = E._proxy;
            if (E.visible == false) {
                L.style.display = "none";
                if (A != "center")F.style.display = G.style.display = "none";
                continue
            }
            L.style.display = "";
            if (A != "center")F.style.display = G.style.display = "";
            var R = D.x, O = D.y, _ = D.width, C = D.height, B = E.width, J = E.height;
            if (!E.expanded)if (A == "west" || A == "east") {
                B = lo0o(G);
                lOool0(L, E.width)
            } else if (A == "north" || A == "south") {
                J = l010(G);
                l10o(L, E.height)
            }
            switch (A) {
                case"north":
                    C = J;
                    D.y += J;
                    D.height -= J;
                    break;
                case"south":
                    C = J;
                    O = D.y + D.height - J;
                    D.height -= J;
                    break;
                case"west":
                    _ = B;
                    D.x += B;
                    D.width -= B;
                    break;
                case"east":
                    _ = B;
                    R = D.x + D.width - B;
                    D.width -= B;
                    break;
                case"center":
                    break;
                default:
                    continue
            }
            if (_ < 0)_ = 0;
            if (C < 0)C = 0;
            if (A == "west" || A == "east")l10o(L, C);
            if (A == "north" || A == "south")lOool0(L, _);
            var N = "left:" + R + "px;top:" + O + "px;", $ = L;
            if (!E.expanded) {
                $ = G;
                L.style.top = "-100px";
                L.style.left = "-3000px"
            } else if (G) {
                G.style.left = "-3000px";
                G.style.top = "-100px"
            }
            $.style.left = R + "px";
            $.style.top = O + "px";
            if ($ == G) {
                if (A == "west" || A == "east")l10o($, C);
                if (A == "north" || A == "south")lOool0($, _)
            } else {
                lOool0($, _);
                l10o($, C)
            }
            var M = jQuery(E._el).height(), Q = E.showHeader ? jQuery(E._header).outerHeight() : 0;
            l10o(E._body, M - Q);
            if (A == "center")continue;
            B = J = E.splitSize;
            R = D.x, O = D.y, _ = D.width, C = D.height;
            switch (A) {
                case"north":
                    C = J;
                    D.y += J;
                    D.height -= J;
                    break;
                case"south":
                    C = J;
                    O = D.y + D.height - J;
                    D.height -= J;
                    break;
                case"west":
                    _ = B;
                    D.x += B;
                    D.width -= B;
                    break;
                case"east":
                    _ = B;
                    R = D.x + D.width - B;
                    D.width -= B;
                    break;
                case"center":
                    break
            }
            if (_ < 0)_ = 0;
            if (C < 0)C = 0;
            F.style.left = R + "px";
            F.style.top = O + "px";
            lOool0(F, _);
            l10o(F, C);
            if (E.showSplit && E.expanded && E[lO0oOO] == true)o11o(F, "mini-layout-split-nodrag"); else l1Oo(F, "mini-layout-split-nodrag");
            F.firstChild.style.display = E.showSplitIcon ? "block" : "none";
            if (E.expanded)o11o(F.firstChild, "mini-layout-spliticon-collapse"); else l1Oo(F.firstChild, "mini-layout-spliticon-collapse")
        }
        mini.layout(this._borderEl);
        this[ol1O0]("layout")
    }, Ol0l: function (B) {
        if (this.olOOlo)return;
        if (ol000(B.target, "mini-layout-split")) {
            var A = jQuery(B.target).attr("uid");
            if (A != this.uid)return;
            var _ = this[ol0lo1](B.target.id);
            if (_.expanded == false || !_[lO0oOO] || !_.showSplit)return;
            this.dragRegion = _;
            var $ = this.l01l();
            $.start(B)
        }
    }, l01l: function () {
        if (!this.drag)this.drag = new mini.Drag({
            capture: true,
            onStart: mini.createDelegate(this.OoOOlO, this),
            onMove: mini.createDelegate(this.lll11, this),
            onStop: mini.createDelegate(this.O00OO, this)
        });
        return this.drag
    }, OoOOlO: function ($) {
        this.oOOoOl = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
        this.olooO0 = mini.append(document.body, "<div class=\"mini-proxy\"></div>");
        this.olooO0.style.cursor = "n-resize";
        if (this.dragRegion.region == "west" || this.dragRegion.region == "east")this.olooO0.style.cursor = "w-resize";
        this.splitBox = Ol0oO(this.dragRegion._split);
        oool(this.olooO0, this.splitBox);
        this.elBox = Ol0oO(this.el, true)
    }, lll11: function (C) {
        var I = C.now[0] - C.init[0], V = this.splitBox.x + I, A = C.now[1] - C.init[1], U = this.splitBox.y + A, K = V + this.splitBox.width, T = U + this.splitBox.height, G = this[ol0lo1]("west"), L = this[ol0lo1]("east"), F = this[ol0lo1]("north"), D = this[ol0lo1]("south"), H = this[ol0lo1]("center"), O = G && G.visible ? G.width : 0, Q = L && L.visible ? L.width : 0, R = F && F.visible ? F.height : 0, J = D && D.visible ? D.height : 0, P = G && G.showSplit ? lo0o(G._split) : 0, $ = L && L.showSplit ? lo0o(L._split) : 0, B = F && F.showSplit ? l010(F._split) : 0, S = D && D.showSplit ? l010(D._split) : 0, E = this.dragRegion, N = E.region;
        if (N == "west") {
            var M = this.elBox.width - Q - $ - P - H.minWidth;
            if (V - this.elBox.x > M)V = M + this.elBox.x;
            if (V - this.elBox.x < E.minWidth)V = E.minWidth + this.elBox.x;
            if (V - this.elBox.x > E.maxWidth)V = E.maxWidth + this.elBox.x;
            mini.setX(this.olooO0, V)
        } else if (N == "east") {
            M = this.elBox.width - O - P - $ - H.minWidth;
            if (this.elBox.right - (V + this.splitBox.width) > M)V = this.elBox.right - M - this.splitBox.width;
            if (this.elBox.right - (V + this.splitBox.width) < E.minWidth)V = this.elBox.right - E.minWidth - this.splitBox.width;
            if (this.elBox.right - (V + this.splitBox.width) > E.maxWidth)V = this.elBox.right - E.maxWidth - this.splitBox.width;
            mini.setX(this.olooO0, V)
        } else if (N == "north") {
            var _ = this.elBox.height - J - S - B - H.minHeight;
            if (U - this.elBox.y > _)U = _ + this.elBox.y;
            if (U - this.elBox.y < E.minHeight)U = E.minHeight + this.elBox.y;
            if (U - this.elBox.y > E.maxHeight)U = E.maxHeight + this.elBox.y;
            mini.setY(this.olooO0, U)
        } else if (N == "south") {
            _ = this.elBox.height - R - B - S - H.minHeight;
            if (this.elBox.bottom - (U + this.splitBox.height) > _)U = this.elBox.bottom - _ - this.splitBox.height;
            if (this.elBox.bottom - (U + this.splitBox.height) < E.minHeight)U = this.elBox.bottom - E.minHeight - this.splitBox.height;
            if (this.elBox.bottom - (U + this.splitBox.height) > E.maxHeight)U = this.elBox.bottom - E.maxHeight - this.splitBox.height;
            mini.setY(this.olooO0, U)
        }
    }, O00OO: function (B) {
        var C = Ol0oO(this.olooO0), D = this.dragRegion, A = D.region;
        if (A == "west") {
            var $ = C.x - this.elBox.x;
            this[ll1lOo](D, {width: $})
        } else if (A == "east") {
            $ = this.elBox.right - C.right;
            this[ll1lOo](D, {width: $})
        } else if (A == "north") {
            var _ = C.y - this.elBox.y;
            this[ll1lOo](D, {height: _})
        } else if (A == "south") {
            _ = this.elBox.bottom - C.bottom;
            this[ll1lOo](D, {height: _})
        }
        jQuery(this.olooO0).remove();
        this.olooO0 = null;
        this.elBox = this.handlerBox = null;
        jQuery(this.oOOoOl).remove();
        this.oOOoOl = null
    }, l101: function ($) {
        if (!this.floatable)return;
        $ = this[ol0lo1]($);
        if ($._Expanded === true)this.Oo0l($); else this.oO0oO($)
    }, oO0oO: function (D) {
        if (this.olOOlo)return;
        this[l0llOO]();
        var A = D.region, H = D._el;
        D._Expanded = true;
        l1Oo(H, "mini-layout-popup");
        var E = Ol0oO(D._proxy), B = Ol0oO(D._el), F = {};
        if (A == "east") {
            var K = E.x, J = E.y, C = E.height;
            l10o(H, C);
            mini.setX(H, K);
            H.style.top = D._proxy.style.top;
            var I = parseInt(H.style.left);
            F = {left: I - B.width}
        } else if (A == "west") {
            K = E.right - B.width, J = E.y, C = E.height;
            l10o(H, C);
            mini.setX(H, K);
            H.style.top = D._proxy.style.top;
            I = parseInt(H.style.left);
            F = {left: I + B.width}
        } else if (A == "north") {
            var K = E.x, J = E.bottom - B.height, _ = E.width;
            lOool0(H, _);
            mini[o1lloo](H, K, J);
            var $ = parseInt(H.style.top);
            F = {top: $ + B.height}
        } else if (A == "south") {
            K = E.x, J = E.y, _ = E.width;
            lOool0(H, _);
            mini[o1lloo](H, K, J);
            $ = parseInt(H.style.top);
            F = {top: $ - B.height}
        }
        l1Oo(D._proxy, "mini-layout-maxZIndex");
        this.olOOlo = true;
        var G = this, L = jQuery(H);
        L.animate(F, 250, function () {
            o11o(D._proxy, "mini-layout-maxZIndex");
            G.olOOlo = false
        })
    }, Oo0l: function (F) {
        if (this.olOOlo)return;
        F._Expanded = false;
        var B = F.region, E = F._el, D = Ol0oO(E), _ = {};
        if (B == "east") {
            var C = parseInt(E.style.left);
            _ = {left: C + D.width}
        } else if (B == "west") {
            C = parseInt(E.style.left);
            _ = {left: C - D.width}
        } else if (B == "north") {
            var $ = parseInt(E.style.top);
            _ = {top: $ - D.height}
        } else if (B == "south") {
            $ = parseInt(E.style.top);
            _ = {top: $ + D.height}
        }
        l1Oo(F._proxy, "mini-layout-maxZIndex");
        this.olOOlo = true;
        var A = this, G = jQuery(E);
        G.animate(_, 250, function () {
            o11o(F._proxy, "mini-layout-maxZIndex");
            A.olOOlo = false;
            A[l0llOO]()
        })
    }, o0OO0O: function (B) {
        if (this.olOOlo)return;
        for (var $ = 0, A = this.regions.length; $ < A; $++) {
            var _ = this.regions[$];
            if (!_._Expanded)continue;
            if (Ol0O(_._el, B.target) || Ol0O(_._proxy, B.target)); else this.Oo0l(_)
        }
    }, getAttrs: function (A) {
        var H = l0l0OO[ollolO][ol1oOl][o1O0l0](this, A), G = jQuery(A);
        mini[Olo01O](A, H, ["floatable"]);
        var E = parseInt(G.attr("splitSize"));
        if (!isNaN(E))H.splitSize = E;
        var F = [], D = mini[l00oo](A);
        for (var _ = 0, C = D.length; _ < C; _++) {
            var B = D[_], $ = {};
            F.push($);
            $.cls = B.className;
            $.style = B.style.cssText;
            mini[Ol100O](B, $, ["region", "title", "iconCls", "iconStyle", "cls", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "splitToolTip"]);
            mini[Olo01O](B, $, ["allowResize", "visible", "showCloseButton", "showCollapseButton", "showSplit", "showHeader", "expanded", "showSplitIcon", "showProxyText"]);
            mini[oOOl00](B, $, ["splitSize", "collapseSize", "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
            $.bodyParent = B
        }
        H.regions = F;
        return H
    }
});
loOOl(l0l0OO, "layout");
o1olOo = function () {
    o1olOo[ollolO][OOlOl].apply(this, arguments)
};
oo00(o1olOo, mini.Container, {style: "", borderStyle: "", bodyStyle: "", uiCls: "mini-box"});
OlOl = o1olOo[O11Ol1];
OlOl[ol1oOl] = lo0l;
OlOl[o10O1l] = l110O;
OlOl[o1l11l] = lO1O;
OlOl[ooo11o] = OOool;
OlOl[l0llOO] = OlO0o0;
OlOl[lOo101] = lOlOl;
OlOl[lololl] = o1lOoO;
loOOl(o1olOo, "box");
O11o0l = function () {
    O11o0l[ollolO][OOlOl].apply(this, arguments)
};
oo00(O11o0l, oo0OO1, {url: "", uiCls: "mini-include"});
lO0111 = O11o0l[O11Ol1];
lO0111[ol1oOl] = o001;
lO0111[oO0l10] = oOol;
lO0111[Oo1100] = lOOO;
lO0111[l0llOO] = l011O;
lO0111[lOo101] = llO0;
lO0111[lololl] = Oo11;
loOOl(O11o0l, "include");
lloOl1 = function () {
    this.O1llO();
    lloOl1[ollolO][OOlOl].apply(this, arguments)
};
oo00(lloOl1, oo0OO1, {
    activeIndex: -1,
    tabAlign: "left",
    tabPosition: "top",
    showBody: true,
    showHeader: true,
    nameField: "name",
    titleField: "title",
    urlField: "url",
    url: "",
    maskOnLoad: true,
    plain: true,
    bodyStyle: "",
    o0olo1: "mini-tab-hover",
    l11lo: "mini-tab-active",
    uiCls: "mini-tabs",
    oo011: 1,
    ol00: 180,
    allowClickWrap: true,
    arrowPosition: "right",
    showNavMenu: false,
    clearTimeStamp: false,
    hoverTab: null
});
oOlO1 = lloOl1[O11Ol1];
oOlO1[ol1oOl] = O1O1l;
oOlO1[oooO00] = oO1lo;
oOlO1[l00O01] = lo1lol;
oOlO1[oO1110] = O1l10;
oOlO1.loo1Oo = OoOoO;
oOlO1.l100O = olO1lo;
oOlO1.O0llo1 = o1lo01;
oOlO1.OolOoo = O01l;
oOlO1.o1o1 = OO01;
oOlO1.o0l1l = o10l1;
oOlO1.Ol0l = ool0;
oOlO1.O11olO = l1oo0;
oOlO1.ol0010 = OO0O;
oOlO1.oO0o1l = l11O;
oOlO1.Oo0o00 = o1101;
oOlO1.oo1OoO = o0ll0o;
oOlO1[o1l1O0] = lllol;
oOlO1[OOlO1] = Ol000o;
oOlO1[oo010O] = O1lO0;
oOlO1[ll1OOl] = oOOo;
oOlO1[ooOO11] = l0oll;
oOlO1[lOO1l1] = oO0l0;
oOlO1[OoOoO0] = loOoo;
oOlO1[l0101o] = OOOl;
oOlO1[O000lo] = O1OO;
oOlO1[loOO1O] = O11O1;
oOlO1[ol1l1l] = lO00l1;
oOlO1[ll00OO] = looOO;
oOlO1[o10O1l] = o01lo0;
oOlO1[oOol11] = oo0ol;
oOlO1[lo0o11] = lO0O1O;
oOlO1[lool1O] = lOOo11;
oOlO1[Ol0OlO] = oO00O;
oOlO1.ooooo = o1ll1;
oOlO1[loolOl] = lll0;
oOlO1[l1OOoO] = l11oO0;
oOlO1[lO1l0o] = O1oo11;
oOlO1[loolOl] = lll0;
oOlO1[o100lO] = oOoolo;
oOlO1[ol1Oo] = l0lOll;
oOlO1.lOol = ol1O10;
oOlO1.oo1oO = llll0o;
oOlO1.ll1oOo = OlO00l;
oOlO1[Ool1oo] = oolO1;
oOlO1[oOo1l] = Ool00O;
oOlO1[o0OlOl] = lolO0;
oOlO1[ooOooo] = o11OOo;
oOlO1[Oll001] = o0oo1O;
oOlO1[l11OlO] = oO1ooo;
oOlO1[olo0l0] = OO0lo;
oOlO1[lO0OO1] = O1O0ol;
oOlO1[lllOoO] = o0O00;
oOlO1[olOOll] = Ololo;
oOlO1[lo001o] = lllO1o;
oOlO1[l0111o] = o1lo;
oOlO1.oOl0o0Menu = oooll;
oOlO1[OO0ooO] = l101O;
oOlO1[l0llOO] = ooo1Ol;
oOlO1[O1O0O1] = o0llO;
oOlO1[l0loO0] = o1100;
oOlO1[oo0110] = oO1oooRows;
oOlO1[oO011O] = o00l;
oOlO1[O1lOoo] = lol01;
oOlO1.l0O0 = OOO0;
oOlO1[ll0OO0] = l0lO;
oOlO1.o10o1O = OoO111;
oOlO1[oOo0l1] = lOo0oO;
oOlO1.l00o0 = o11llo;
oOlO1.O010Ol = o0O1;
oOlO1[o0O10l] = l1oOO;
oOlO1[Ol0oO1] = ooO1l;
oOlO1[oOoo00] = l0o0;
oOlO1[loOoO0] = OlO0o;
oOlO1[lo0OlO] = o1oo1;
oOlO1[o00l01] = oO1ooos;
oOlO1[o100Ol] = OOo0l;
oOlO1[Oo00ol] = O0O00O;
oOlO1[lOl0lo] = o0oo;
oOlO1[Oloo0] = o0lo0;
oOlO1[l0lO01] = lol00;
oOlO1[O0l1oO] = oOoOl1;
oOlO1[oO1o01] = lOo010;
oOlO1[OO0OlO] = olllOO;
oOlO1[O1101o] = OO0O0;
oOlO1[oO0l10] = O1OoO0;
oOlO1[Oo1100] = oO0l;
oOlO1[looOlo] = Ool10o;
oOlO1[OOl0Ol] = l1lO1;
oOlO1[oo1O0O] = O0l1ol;
oOlO1.O1llO = Olll;
oOlO1[lOo101] = lOol0;
oOlO1.oolo0 = Ol10l;
oOlO1[l0lOl] = OlOloO;
oOlO1[lololl] = oOlO00;
oOlO1[OO1O1l] = loo1O;
loOOl(lloOl1, "tabs");
lOoO1O = function () {
    this.items = [];
    lOoO1O[ollolO][OOlOl].apply(this, arguments)
};
oo00(lOoO1O, oo0OO1);
mini.copyTo(lOoO1O.prototype, lO1lo0_prototype);
var lO1lo0_prototype_hide = lO1lo0_prototype[O1ll1];
mini.copyTo(lOoO1O.prototype, {
    height: "auto",
    width: "auto",
    minWidth: 140,
    vertical: true,
    allowSelectItem: false,
    OOO01O: null,
    _oolol0: "mini-menuitem-selected",
    textField: "text",
    resultAsTree: false,
    idField: "id",
    parentField: "pid",
    itemsField: "children",
    showNavArrow: true,
    imgPath: "",
    overflow: false,
    _clearBorder: false,
    showAction: "none",
    hideAction: "outerclick",
    uiCls: "mini-menu",
    _disableContextMenu: false,
    _itemType: "menuitem",
    url: "",
    hideOnClick: true,
    hideOnClick: true
});
oOlo00 = lOoO1O[O11Ol1];
oOlo00[ol1oOl] = ll1o11;
oOlo00[O01100] = lOlOO;
oOlo00[looOo1] = O0O11;
oOlo00[o01oOo] = Olo1;
oOlo00[ollO01] = l0oO1;
oOlo00[llO0l0] = OOOO;
oOlo00[l01olo] = oloOlo;
oOlo00[l0Olo0] = O0loll;
oOlo00[ol00Oo] = oOol0;
oOlo00[l10OOl] = l1l1;
oOlo00[oOoO0] = o1O0O;
oOlo00[OOllol] = o1ol0O;
oOlo00[OoOlO] = oloo;
oOlo00[o01101] = olo0;
oOlo00[oO000l] = llllOO;
oOlo00[oloO0O] = o1l1O;
oOlo00[oO0l10] = OoOOo;
oOlo00[Oo1100] = o100;
oOlo00[looOlo] = O01oO;
oOlo00[loOl00] = O01oOList;
oOlo00[OOl0Ol] = Ol0OO;
oOlo00.olO1 = O01lO1;
oOlo00[l0llOO] = ooll;
oOlo00[O11o1O] = o100o;
oOlo00[o11lO1] = O0oOo;
oOlo00[o0Oll1] = l11OO;
oOlo00[lllOO1] = l1O0O;
oOlo00[Oll1o] = O00O;
oOlo00[Ol0010] = oOl1O1;
oOlo00[Ol10lO] = O0OoO;
oOlo00[oO0O1] = OOll1;
oOlo00[OOll0l] = l01o0;
oOlo00[ooO1ll] = oOo11o;
oOlo00[lOollO] = ooolO;
oOlo00[o0ol01] = Oo1oo;
oOlo00[l01l10] = ol01;
oOlo00[OlO0o1] = l01o;
oOlo00[oO0O01] = lO101O;
oOlo00[oO1100] = OOo01;
oOlo00[o11l] = oooO;
oOlo00[l01lll] = ooll1l;
oOlo00[lo0OlO] = lO0Ool;
oOlo00[Oo0O0o] = Ooo1O;
oOlo00[O0o11] = O0lo0;
oOlo00[OO0l] = lolOlo;
oOlo00[lo00l1] = oooOs;
oOlo00[oo1l0o] = O0l0;
oOlo00[ll1oO1] = oOll;
oOlo00[ol0l0] = o01lo;
oOlo00[o0o0l1] = oooo0;
oOlo00[O111l1] = llo00O;
oOlo00[o01oO0] = ol1l0;
oOlo00[O1ll1] = llO11;
oOlo00[l000ll] = Oll1l;
oOlo00[O0OOlo] = l1OOo;
oOlo00[oo100] = Ol1o;
oOlo00[oo01OO] = ol010O;
oOlo00[l1Oo0O] = o10Ooo;
oOlo00[lOo101] = oO0o;
oOlo00[l0lOl] = O010;
oOlo00[lololl] = ol1lo;
oOlo00[OO1O1l] = O100l;
oOlo00[O1looO] = l01OO;
loOOl(lOoO1O, "menu");
lOoO1OBar = function () {
    lOoO1OBar[ollolO][OOlOl].apply(this, arguments)
};
oo00(lOoO1OBar, lOoO1O, {
    uiCls: "mini-menubar", vertical: false, setVertical: function ($) {
        this.vertical = false
    }
});
loOOl(lOoO1OBar, "menubar");
mini.ContextMenu = function () {
    mini.ContextMenu[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.ContextMenu, lOoO1O, {
    uiCls: "mini-contextmenu",
    vertical: true,
    visible: false,
    _disableContextMenu: true,
    setVertical: function ($) {
        this.vertical = true
    }
});
loOOl(mini.ContextMenu, "contextmenu");
o110o1 = function () {
    o110o1[ollolO][OOlOl].apply(this, arguments)
};
oo00(o110o1, oo0OO1, {
    text: "",
    iconCls: "",
    iconStyle: "",
    iconPosition: "left",
    img: "",
    showIcon: true,
    showAllow: true,
    checked: false,
    checkOnClick: false,
    groupName: "",
    _hoverCls: "mini-menuitem-hover",
    l0l10l: "mini-menuitem-pressed",
    ooOO: "mini-menuitem-checked",
    _clearBorder: false,
    menu: null,
    uiCls: "mini-menuitem",
    oolo: false
});
OOO10 = o110o1[O11Ol1];
OOO10[ol1oOl] = O0o0o;
OOO10[oOO10l] = looOo;
OOO10[oO1oO] = O1Ooo;
OOO10.O11olO = l0lo0;
OOO10.ol0010 = olOOo;
OOO10.oOlol1 = ooOO1;
OOO10.oO0o1l = O1oo;
OOO10[o0oOO1] = O110o;
OOO10.lOllO = Oo00l;
OOO10[O1ll1] = ol0o0;
OOO10[OOo11] = ol0o0Menu;
OOO10[o11lOO] = olloo;
OOO10[O00l10] = oOlOo;
OOO10[llOoOO] = oOlo;
OOO10[oOlO0o] = lloOO;
OOO10[oo0o0] = lol0;
OOO10[O01l11] = Ol11O;
OOO10[l01OoO] = lo1l1;
OOO10[lOoooO] = OO1ll;
OOO10[loO1l0] = oOOO;
OOO10[loo0Ol] = Oo1OoO;
OOO10[l101l1] = O001;
OOO10[OO1Olo] = OOoO1;
OOO10[o01OO] = oOOOO;
OOO10[oOOOl0] = Ollll;
OOO10[o0lO00] = Ol0O1;
OOO10[ooOO00] = lo011;
OOO10[lol0o] = O1010;
OOO10[OO1loO] = OooOoo;
OOO10[ooooO] = OOol;
OOO10[l0O0O0] = Ooo11;
OOO10[l0loO0] = Oooo0o;
OOO10[lO1O11] = o1oO0;
OOO10[OOl01o] = ololo;
OOO10[OOl1o] = o1l11;
OOO10[l1Oo0O] = oO1l0;
OOO10[l0lOl] = O10o;
OOO10.o00lo = oO0o0;
OOO10[lOo101] = o00o1;
OOO10[lololl] = o1O1O;
OOO10[OO1O1l] = llOO;
loOOl(o110o1, "menuitem");
mini.Separator = function () {
    mini.Separator[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.Separator, oo0OO1, {
    _clearBorder: false, uiCls: "mini-separator", _create: function () {
        this.el = document.createElement("span");
        this.el.className = "mini-separator"
    }
});
loOOl(mini.Separator, "separator");
l1lolo = function () {
    this.ll1O1();
    l1lolo[ollolO][OOlOl].apply(this, arguments)
};
oo00(l1lolo, oo0OO1, {
    width: 180,
    expandOnLoad: false,
    activeIndex: -1,
    autoCollapse: false,
    groupCls: "",
    groupStyle: "",
    groupHeaderCls: "",
    groupHeaderStyle: "",
    groupBodyCls: "",
    groupBodyStyle: "",
    groupHoverCls: "",
    groupActiveCls: "",
    allowAnim: true,
    imgPath: "",
    uiCls: "mini-outlookbar",
    _GroupId: 1
});
olo0o = l1lolo[O11Ol1];
olo0o[ol1oOl] = l1o0l;
olo0o[l0l10O] = Ol1lO;
olo0o.oO0o1l = oOo0O;
olo0o.l1O0 = l11l0;
olo0o.OOolOl = Olo00;
olo0o[o00O00] = oO10o;
olo0o[Ol0011] = oo1ll;
olo0o[lO11l] = l0ooo;
olo0o[oOo0O0] = llo1O;
olo0o[o011l0] = O01oo;
olo0o[llOoO] = lOo1o;
olo0o[loolOl] = OOlo1;
olo0o[ol1Oo] = oO01O;
olo0o[lO1101] = ool10;
olo0o[lO100O] = O00O1;
olo0o[O0110] = l1OoO;
olo0o[O0O01l] = Oooo1;
olo0o[oOOl1O] = O0lOO;
olo0o[O00l1o] = OooOo;
olo0o.lO00 = ol10o;
olo0o[OoolOl] = O0Oo1;
olo0o.o0o1O = o111O;
olo0o.l10oo = llO0l;
olo0o[l0llOO] = O11oO;
olo0o[l0loO0] = o1OoO;
olo0o[OOl1o] = loO01;
olo0o[O0Ol01] = o1O1o;
olo0o[lo0OlO] = looO1;
olo0o[lO0lOO] = llll0;
olo0o[oooOl1] = O010l;
olo0o[ooOlo] = Ol11l;
olo0o[l0l01l] = O0Oo1s;
olo0o[l1001l] = lolol;
olo0o[OoOlO] = Ol1O1;
olo0o[o01101] = ollol;
olo0o[l00oll] = O1llo;
olo0o.Ol001 = lo100;
olo0o.ll1O1 = olol0;
olo0o.oOol1l = Oo1O1;
olo0o[l0lOl] = oO000;
olo0o[lOo101] = OOoO;
olo0o[lololl] = Ololl;
olo0o[OO1O1l] = OO11O;
loOOl(l1lolo, "outlookbar");
o1OlOl = function () {
    o1OlOl[ollolO][OOlOl].apply(this, arguments);
    this.data = []
};
oo00(o1OlOl, l1lolo, {
    url: "",
    textField: "text",
    iconField: "iconCls",
    urlField: "url",
    resultAsTree: false,
    itemsField: "children",
    idField: "id",
    parentField: "pid",
    style: "width:100%;height:100%;",
    uiCls: "mini-outlookmenu",
    l0l01: null,
    imgPath: "",
    expandOnLoad: false,
    autoCollapse: true,
    activeIndex: 0
});
O0OlO = o1OlOl[O11Ol1];
O0OlO.olo1l1 = Oooll;
O0OlO.O0o1o = l0011;
O0OlO[OO1l10] = o10lo;
O0OlO[l1O0lo] = lo0o0;
O0OlO[OoOlO] = OO00O;
O0OlO[o01101] = lO1OO;
O0OlO[ol1oOl] = O0111;
O0OlO[l10O1o] = Ooo10;
O0OlO[lo0111] = oOo11;
O0OlO[Oll0l0] = ll0l0;
O0OlO[looolO] = o1l0O1;
O0OlO[O00O10] = O0lOOl;
O0OlO[o1lo1l] = loOo0;
O0OlO[o0Oll1] = O1110;
O0OlO[lllOO1] = ollO0;
O0OlO[Oll1o] = OoOl0;
O0OlO[Ol0010] = ll100;
O0OlO[o1O1O0] = ll0l0sField;
O0OlO[OoOOO] = OlOlO;
O0OlO[Ol10lO] = l0OO1;
O0OlO[oO0O1] = oloo1;
O0OlO[Oloo0] = o101O;
O0OlO[l0lO01] = ol0l1;
O0OlO[O01l01] = o11o0;
O0OlO[lo1l10] = oOOlo1;
O0OlO[OOll0l] = olOo1;
O0OlO[ooO1ll] = o01Oo;
O0OlO[oO0l10] = ol1ll;
O0OlO[Oo1100] = lo1Oo;
O0OlO[ol0l0] = o11ol;
O0OlO[looOlo] = ll0oo;
O0OlO[loOl00] = ll0ooList;
O0OlO[OOl0Ol] = o01oO;
O0OlO.OolOo1Fields = lOolo;
O0OlO[lOlll0] = OoO11;
O0OlO[l0lOl] = o10ol;
O0OlO[OO1O1l] = l0o0l;
loOOl(o1OlOl, "outlookmenu");
Ollo00 = function () {
    Ollo00[ollolO][OOlOl].apply(this, arguments);
    this.data = []
};
oo00(Ollo00, l1lolo, {
    url: "",
    textField: "text",
    iconField: "iconCls",
    urlField: "url",
    resultAsTree: false,
    nodesField: "children",
    idField: "id",
    parentField: "pid",
    style: "width:100%;height:100%;",
    showTreeLines: true,
    uiCls: "mini-outlooktree",
    l0l01: null,
    expandOnLoad: false,
    showArrow: false,
    showTreeIcon: true,
    expandOnNodeClick: false,
    expandNodeOnLoad: false,
    imgPath: "",
    autoCollapse: true,
    activeIndex: 0
});
OOOOl = Ollo00[O11Ol1];
OOOOl._ooOl0o = oolOo;
OOOOl.llOo1O = ol0o1;
OOOOl.l0lool = oolo1;
OOOOl[O1OOl] = lll01;
OOOOl[lO1l10] = oOo01;
OOOOl[OoOlO] = Olo11;
OOOOl[o01101] = l0Oo1;
OOOOl[ol1oOl] = o1Oll;
OOOOl[OOol0] = o0o0o;
OOOOl[olOoO] = Olol1;
OOOOl[O100o0] = l1o1O;
OOOOl[O1l0oO] = Oo0ll;
OOOOl[Ol00Oo] = O0ooo;
OOOOl[lo1lo] = oO1lll;
OOOOl[l1O1o] = ol00l;
OOOOl[lo0o01] = l1o0o;
OOOOl[l00ll0] = olooO;
OOOOl[lO1101] = lO00l;
OOOOl[lO100O] = O1o0O0;
OOOOl[Ol110o] = lo1l0;
OOOOl[lo0111] = loO00;
OOOOl[Oll0l0] = OO0Ol;
OOOOl[looolO] = lOl1o;
OOOOl[O010OO] = Ol1oo;
OOOOl[O11Oll] = oo1Oo;
OOOOl[oO0lol] = O11ol;
OOOOl[O00O10] = O0O0l;
OOOOl[l1OoOo] = Oo10l;
OOOOl[o1lo1l] = Oo01l;
OOOOl[o0Oll1] = lOl0o;
OOOOl[lllOO1] = l0Oo;
OOOOl[Oll1o] = lo00o;
OOOOl[Ol0010] = o0o11;
OOOOl[o1O1O0] = OO0OlsField;
OOOOl[OoOOO] = oo0Ol;
OOOOl[Ol10lO] = O10ol;
OOOOl[oO0O1] = O1oo1;
OOOOl[Oloo0] = O0o1l;
OOOOl[l0lO01] = ooll0;
OOOOl[O01l01] = l10Ol;
OOOOl[lo1l10] = lll10;
OOOOl[OOll0l] = O10oO;
OOOOl[ooO1ll] = ooO11;
OOOOl[oO0l10] = lo00;
OOOOl[Oo1100] = O0O10;
OOOOl[ll1oO1] = O1o01;
OOOOl[ol0l0] = O0oO1;
OOOOl[looOlo] = o1oll0;
OOOOl[loOl00] = o1oll0List;
OOOOl[OOl0Ol] = o010l;
OOOOl.OolOo1Fields = l1Oo1;
OOOOl[lOlll0] = oOll0;
OOOOl[l0lOl] = OlOo10;
OOOOl[OO1O1l] = Ollol;
loOOl(Ollo00, "outlooktree");
mini.NavBar = function () {
    mini.NavBar[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.NavBar, l1lolo, {uiCls: "mini-navbar"});
loOOl(mini.NavBar, "navbar");
mini.NavBarMenu = function () {
    mini.NavBarMenu[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.NavBarMenu, o1OlOl, {uiCls: "mini-navbarmenu"});
loOOl(mini.NavBarMenu, "navbarmenu");
mini.NavBarTree = function () {
    mini.NavBarTree[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.NavBarTree, Ollo00, {uiCls: "mini-navbartree"});
loOOl(mini.NavBarTree, "navbartree");
mini.ToolBar = function () {
    mini.ToolBar[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.ToolBar, mini.Container, {
    _clearBorder: false, style: "", uiCls: "mini-toolbar", _create: function () {
        this.el = document.createElement("div");
        this.el.className = "mini-toolbar"
    }, _initEvents: function () {
    }, doLayout: function () {
        if (!this[Ooo1oo]())return;
        var A = mini[l00oo](this.el, true);
        for (var $ = 0, _ = A.length; $ < _; $++)mini.layout(A[$])
    }, set_bodyParent: function ($) {
        if (!$)return;
        this.el = $;
        this[l0llOO]()
    }, getAttrs: function (el) {
        var attrs = {};
        mini[Ol100O](el, attrs, ["id", "borderStyle", "data-options"]);
        this.el = el;
        this.el.uid = this.uid;
        this[oll1o0](this.uiCls);
        var options = attrs["data-options"];
        if (options) {
            options = eval("(" + options + ")");
            if (options)mini.copyTo(attrs, options)
        }
        return attrs
    }
});
loOOl(mini.ToolBar, "toolbar");
O1o0oO = function () {
    O1o0oO[ollolO][OOlOl].apply(this, arguments)
};
oo00(O1o0oO, oo0OO1, {
    pageIndex: 0,
    pageSize: 10,
    totalCount: 0,
    totalPage: 0,
    showPageIndex: true,
    showPageSize: true,
    showTotalCount: true,
    showPageInfo: true,
    showReloadButton: true,
    _clearBorder: false,
    showButtonText: false,
    showButtonIcon: true,
    sizeText: "",
    firstText: "\u9996\u9875",
    prevText: "\u4e0a\u4e00\u9875",
    nextText: "\u4e0b\u4e00\u9875",
    lastText: "\u5c3e\u9875",
    reloadText: "\u5237\u65b0",
    pageInfoText: "\u6bcf\u9875 {0} \u6761,\u5171 {1} \u6761",
    sizeList: [10, 20, 50, 100],
    uiCls: "mini-pager",
    pageSizeWidth: 50
});
l1llo = O1o0oO[O11Ol1];
l1llo[ol1oOl] = ol0lol;
l1llo[ol0l11] = olo0O;
l1llo.ol1lO = o11Ol;
l1llo.lo1lO = l10l;
l1llo[lOOl1o] = l00O10;
l1llo[oo011l] = llOo;
l1llo[l1olOl] = olOO;
l1llo[llllOl] = O0l0l;
l1llo[lll1lo] = O0Ol1o;
l1llo[oll1ol] = O0o0lO;
l1llo[o0lOO1] = lo10O;
l1llo[lOll10] = o1Ol;
l1llo[loo10l] = o101oo;
l1llo[lO0o0O] = ll0ll;
l1llo[l0lo1O] = ool0l;
l1llo[o1loO] = OO111;
l1llo[o0ool0] = oo000;
l1llo[O01000] = OlOOo0;
l1llo[l011oO] = oOOl0l;
l1llo[o10Olo] = ol1O1;
l1llo[oOOO11] = OOOo;
l1llo[l1O0O0] = OOl01;
l1llo[l10O0] = oO100;
l1llo[ll0o1] = ollOO;
l1llo[lloO00] = l1l1o;
l1llo[oloo1o] = lolOo;
l1llo[O0loO0] = o1l00;
l1llo[Ol0loO] = lo1oo1;
l1llo[Oooo1O] = oo0l;
l1llo[ll10ll] = olO0l;
l1llo[l0llOO] = O00o;
l1llo[lOo101] = Oolll;
l1llo[oOo0Ol] = lll1;
l1llo[lOl0lo] = l00llo;
l1llo[l0lOl] = OoO0l;
l1llo[lololl] = OOO1o;
l1llo[OO1O1l] = O11l1;
loOOl(O1o0oO, "pager");
OO1ool = function () {
    this._bindFields = [];
    this._bindForms = [];
    OO1ool[ollolO][OOlOl].apply(this, arguments)
};
oo00(OO1ool, OoO11l, {});
lo1ol = OO1ool[O11Ol1];
lo1ol.o011 = ooOOO;
lo1ol.looO = O0Ol0;
lo1ol[lol1l] = oOolol;
lo1ol[olO000] = Oo10O;
loOOl(OO1ool, "databinding");
OOol1o = function () {
    this._sources = {};
    this._data = {};
    this._links = [];
    this.l0110o = {};
    OOol1o[ollolO][OOlOl].apply(this, arguments)
};
oo00(OOol1o, OoO11l, {});
l11O0 = OOol1o[O11Ol1];
l11O0[O1o11l] = Oo1ll;
l11O0.lOO0l = oo11l;
l11O0.ol1o0o = o10l;
l11O0.O0Ooo = llOlO;
l11O0.Ool0 = oOooO;
l11O0.l00OlO = ol1Ool;
l11O0.Ol1l = lO0oO;
l11O0[ll1oO1] = oO10ol;
l11O0[olo11l] = oO0l1;
l11O0[ol1l0l] = oOOOo;
l11O0[llo10o] = looO0;
loOOl(OOol1o, "dataset");
if (typeof mini_doload == "undefined")mini_doload = function ($) {
};
mini.DataSource = function () {
    mini.DataSource[ollolO][OOlOl].apply(this, arguments);
    this._init()
};
oo00(mini.DataSource, OoO11l, {
    idField: "id",
    textField: "text",
    loaded: false,
    l1o10: "_id",
    l101l: true,
    _autoCreateNewID: false,
    _init: function () {
        this.source = [];
        this.dataview = [];
        this.visibleRows = null;
        this.list = null;
        this._ids = {};
        this._removeds = [];
        if (this.l101l)this.l0110o = {};
        this._errors = {};
        this.l0l01 = null;
        this.O1l1oo = [];
        this.o0o1 = {};
        this.__changeCount = 0
    },
    getSource: function () {
        return this.source
    },
    getList: function () {
        return this.source.clone()
    },
    getDataView: function () {
        return this.dataview.clone()
    },
    getVisibleRows: function () {
        if (!this.visibleRows)this.visibleRows = this.getDataView().clone();
        return this.visibleRows
    },
    setData: function ($) {
        this[OOo10l]($)
    },
    loadData: function ($) {
        if (!mini.isArray($))$ = [];
        this._init();
        this.llo0l($);
        this.o10oO();
        this[ol1O0]("loaddata");
        return true
    },
    llo0l: function (C) {
        this.source = C;
        this.dataview = C;
        var A = this.source, B = this._ids;
        for (var _ = 0, D = A.length; _ < D; _++) {
            var $ = A[_];
            $._id = mini.DataSource.RecordId++;
            B[$._id] = $;
            $._uid = $._id
        }
    },
    clearData: function () {
        this._init();
        this.o10oO();
        this[ol1O0]("cleardata")
    },
    clear: function () {
        this[olo11l]()
    },
    updateRecord: function (_, D, A) {
        if (mini.isNull(_))return;
        var $ = mini._getMap, B = mini._setMap;
        this[ol1O0]("beforeupdate", {record: _});
        if (typeof D == "string") {
            var E = $(D, _);
            if (mini[l0oolo](E, A))return false;
            this.beginChange();
            B(D, A, _);
            this._setModified(_, D, E);
            this.endChange()
        } else {
            this.beginChange();
            for (var C in D) {
                var E = $(C, _), A = D[C];
                if (mini[l0oolo](E, A))continue;
                B(C, A, _);
                this._setModified(_, C, E)
            }
            this.endChange("update")
        }
        this[ol1O0]("update", {record: _})
    },
    deleteRecord: function ($) {
        this._setDeleted($);
        this.o10oO();
        this[ol1O0]("delete", {record: $})
    },
    getby_id: function ($) {
        $ = typeof $ == "object" ? $._id : $;
        return this._ids[$]
    },
    getbyId: function (F) {
        var D = typeof F;
        if (D == "number")return this[l11o1o](F);
        if (typeof F == "object") {
            if (this.getby_id(F))return F;
            F = F[this.idField]
        }
        F = String(F);
        var C = this.ids;
        if (!C) {
            C = this.ids = {};
            var B = this[lo0111]();
            for (var _ = 0, E = B.length; _ < E; _++) {
                var $ = B[_], A = $[this.idField];
                if (!mini.isNull(A))C[A] = $
            }
        }
        return C[F]
    },
    getsByIds: function (_) {
        if (mini.isNull(_))_ = "";
        _ = String(_);
        var D = [], A = String(_).split(",");
        for (var $ = 0, C = A.length; $ < C; $++) {
            var B = this.getbyId(A[$]);
            if (B)D.push(B)
        }
        return D
    },
    getRecord: function ($) {
        return this[l1oOl]($)
    },
    getRow: function ($) {
        var _ = typeof $;
        if (_ == "string")return this.getbyId($); else if (_ == "number")return this[l11o1o]($); else if (_ == "object")return $
    },
    delimiter: ",",
    Oool0: function (B, $) {
        if (mini.isNull(B))B = [];
        $ = $ || this.delimiter;
        if (typeof B == "string" || typeof B == "number")B = this.getsByIds(B); else if (!mini.isArray(B))B = [B];
        var C = [], D = [];
        for (var A = 0, E = B.length; A < E; A++) {
            var _ = B[A];
            if (_) {
                C.push(this[OO01O0](_));
                D.push(this[OO101](_))
            }
        }
        return [C.join($), D.join($)]
    },
    getItemValue: function ($) {
        if (!$)return "";
        var _ = mini._getMap(this.idField, $);
        return mini.isNull(_) ? "" : String(_)
    },
    getItemText: function ($) {
        if (!$)return "";
        var _ = mini._getMap(this.textField, $);
        return mini.isNull(_) ? "" : String(_)
    },
    isModified: function (A, _) {
        var $ = this.l0110o[A[this.l1o10]];
        if (!$)return false;
        if (mini.isNull(_))return false;
        return $.hasOwnProperty(_)
    },
    hasRecord: function ($) {
        return !!this.getby_id($)
    },
    findRecords: function (D, A) {
        var F = typeof D == "function", I = D, E = A || this, C = this.source, B = [];
        for (var _ = 0, H = C.length; _ < H; _++) {
            var $ = C[_];
            if (F) {
                var G = I[o1O0l0](E, $);
                if (G == true)B[B.length] = $;
                if (G === 1)break
            } else if ($[D] == A)B[B.length] = $
        }
        return B
    },
    findRecord: function (A, $) {
        var _ = this.findRecords(A, $);
        return _[0]
    },
    each: function (A, _) {
        var $ = this.getDataView().clone();
        _ = _ || this;
        mini.forEach($, A, _)
    },
    getCount: function () {
        return this.getDataView().length
    },
    setIdField: function ($) {
        this[O00o0] = $
    },
    setTextField: function ($) {
        this[l1ol1O] = $
    },
    __changeCount: 0,
    beginChange: function () {
        this.__changeCount++
    },
    endChange: function ($, _) {
        this.__changeCount--;
        if (this.__changeCount < 0)this.__changeCount = 0;
        if ((_ !== false && this.__changeCount == 0) || _ == true) {
            this.__changeCount = 0;
            this.o10oO($)
        }
    },
    o10oO: function ($) {
        this.ids = null;
        this.visibleRows = null;
        this.list = null;
        if (this.__changeCount == 0)this[ol1O0]("datachanged")
    },
    _setAdded: function ($) {
        $._id = mini.DataSource.RecordId++;
        if (this._autoCreateNewID && !$[this.idField])$[this.idField] = UUID();
        $._uid = $._id;
        $._state = "added";
        this._ids[$._id] = $;
        delete this.l0110o[$[this.l1o10]]
    },
    _setModified: function ($, A, B) {
        if ($._state != "added" && $._state != "deleted" && $._state != "removed") {
            $._state = "modified";
            var _ = this.O1O0($);
            if (!_.hasOwnProperty(A))_[A] = B
        }
    },
    _setDeleted: function ($) {
        if ($._state != "added" && $._state != "deleted" && $._state != "removed")$._state = "deleted"
    },
    _setRemoved: function ($) {
        delete this._ids[$._id];
        if ($._state != "added" && $._state != "removed") {
            $._state = "removed";
            delete this.l0110o[$[this.l1o10]];
            this._removeds.push($)
        }
    },
    O1O0: function ($) {
        var A = $[this.l1o10], _ = this.l0110o[A];
        if (!_)_ = this.l0110o[A] = {};
        return _
    },
    l0l01: null,
    O1l1oo: [],
    o0o1: null,
    multiSelect: false,
    isSelected: function ($) {
        if (!$)return false;
        if (typeof $ != "string")$ = $._id;
        return !!this.o0o1[$]
    },
    setSelected: function ($) {
        $ = this.getby_id($);
        var _ = this[o1lo1l]();
        if (_ != $) {
            this.l0l01 = $;
            if ($)this[lOol1O]($); else this[O0lo11](this[o1lo1l]());
            this.oolol($)
        }
    },
    getSelected: function () {
        if (this[Olo1o1](this.l0l01))return this.l0l01;
        return this.O1l1oo[0]
    },
    setCurrent: function ($) {
        this[O0lOo1]($)
    },
    getCurrent: function () {
        return this[o1lo1l]()
    },
    getSelecteds: function () {
        return this.O1l1oo.clone()
    },
    select: function ($, _) {
        if (mini.isNull($))return;
        this[oo1o]([$], _)
    },
    deselect: function ($, _) {
        if (mini.isNull($))return;
        this[l0oO0]([$], _)
    },
    selectAll: function ($) {
        this[oo1o](this[lo0111]())
    },
    deselectAll: function ($) {
        this[l0oO0](this[l0OoO0]())
    },
    _fireSelect: function ($, _) {
        var A = {record: $, cancel: false};
        this[ol1O0](_, A);
        return !A.cancel
    },
    selects: function (A, D) {
        if (!mini.isArray(A))return;
        A = A.clone();
        if (this[O0o1ol] == false) {
            this[l0oO0](this[l0OoO0]());
            if (A.length > 0)A.length = 1;
            this.O1l1oo = [];
            this.o0o1 = {}
        }
        var B = [];
        for (var _ = 0, C = A.length; _ < C; _++) {
            var $ = this.getbyId(A[_]);
            if (!$)continue;
            if (!this[Olo1o1]($)) {
                if (D !== false)if (!this._fireSelect($, "beforeselect"))continue;
                this.O1l1oo.push($);
                this.o0o1[$._id] = $;
                B.push($);
                if (D !== false)this[ol1O0]("select", {record: $})
            }
        }
        this[o0O00l](A, true, B, D)
    },
    deselects: function (C, E) {
        if (!mini.isArray(C))return;
        C = C.clone();
        var D = [];
        for (var A = C.length - 1; A >= 0; A--) {
            var _ = this.getbyId(C[A]);
            if (!_)continue;
            if (this[Olo1o1](_)) {
                if (E !== false)if (!this._fireSelect(_, "beforedeselect"))continue;
                delete this.o0o1[_._id];
                D.push(_)
            }
        }
        this.O1l1oo = [];
        var B = this.o0o1;
        for (A in B) {
            var $ = B[A];
            if ($._id)this.O1l1oo.push($)
        }
        for (A = C.length - 1; A >= 0; A--) {
            _ = this.getbyId(C[A]);
            if (!_)continue;
            if (E !== false)this[ol1O0]("deselect", {record: _})
        }
        this[o0O00l](C, false, D, E)
    },
    _OnSelectionChanged: function (A, E, B, C) {
        var D = {fireEvent: C, records: A, select: E, selected: this[o1lo1l](), selecteds: this[l0OoO0](), _records: B};
        this[ol1O0]("SelectionChanged", D);
        var _ = this._current, $ = this.getCurrent();
        if (_ != $) {
            this._current = $;
            this.oolol($)
        }
    },
    oolol: function ($) {
        if (this._currentTimer)clearTimeout(this._currentTimer);
        var _ = this;
        this._currentTimer = setTimeout(function () {
            _._currentTimer = null;
            var A = {record: $};
            _[ol1O0]("CurrentChanged", A)
        }, 30)
    },
    ool1: function () {
        for (var _ = this.O1l1oo.length - 1; _ >= 0; _--) {
            var $ = this.O1l1oo[_], A = this.getby_id($._id);
            if (!A) {
                this.O1l1oo.removeAt(_);
                delete this.o0o1[$._id]
            }
        }
        if (this.l0l01 && this.getby_id(this.l0l01._id) == null)this.l0l01 = null
    },
    setMultiSelect: function ($) {
        if (this[O0o1ol] != $) {
            this[O0o1ol] = $;
            if ($ == false);
        }
    },
    getMultiSelect: function () {
        return this[O0o1ol]
    },
    selectPrev: function () {
        var _ = this[o1lo1l]();
        if (!_)_ = this[l11o1o](0); else {
            var $ = this[o110ll](_);
            _ = this[l11o1o]($ - 1)
        }
        if (_) {
            this[OOo10]();
            this[lOol1O](_);
            this[l10ll](_)
        }
    },
    selectNext: function () {
        var _ = this[o1lo1l]();
        if (!_)_ = this[l11o1o](0); else {
            var $ = this[o110ll](_);
            _ = this[l11o1o]($ + 1)
        }
        if (_) {
            this[OOo10]();
            this[lOol1O](_);
            this[l10ll](_)
        }
    },
    selectFirst: function () {
        var $ = this[l11o1o](0);
        if ($) {
            this[OOo10]();
            this[lOol1O]($);
            this[l10ll]($)
        }
    },
    selectLast: function () {
        var _ = this.getVisibleRows(), $ = this[l11o1o](_.length - 1);
        if ($) {
            this[OOo10]();
            this[lOol1O]($);
            this[l10ll]($)
        }
    },
    getSelectedsId: function ($) {
        var A = this[l0OoO0](), _ = this.Oool0(A, $);
        return _[0]
    },
    getSelectedsText: function ($) {
        var A = this[l0OoO0](), _ = this.Oool0(A, $);
        return _[1]
    },
    _filterInfo: null,
    _sortInfo: null,
    filter: function (_, $) {
        if (typeof _ != "function")return;
        $ = $ || this;
        this._filterInfo = [_, $];
        this.ollo();
        this.lO1oOo();
        this.o10oO();
        this[ol1O0]("filter")
    },
    clearFilter: function () {
        if (!this._filterInfo)return;
        this._filterInfo = null;
        this.ollo();
        this.lO1oOo();
        this.o10oO();
        this[ol1O0]("filter")
    },
    sort: function (A, _, $) {
        if (typeof A != "function")return;
        _ = _ || this;
        this._sortInfo = [A, _, $];
        this.lO1oOo();
        this.o10oO();
        this[ol1O0]("sort")
    },
    clearSort: function () {
        this._sortInfo = null;
        this.sortField = this.sortOrder = "";
        this.ollo();
        this.o10oO();
        if (this.sortMode == "server") {
            var $ = this.getLoadParams();
            $.sortField = "";
            $.sortOrder = "";
            this[looOlo]($)
        }
        this[ol1O0]("filter")
    },
    _doClientSortField: function (C, B, _) {
        var A = this._getSortFnByField(C, _);
        if (!A)return;
        var $ = B == "desc";
        this.sort(A, this, $)
    },
    _getSortFnByField: function (B, C) {
        if (!B)return null;
        var A = null, _ = mini.sortTypes[C];
        if (!_)_ = mini.sortTypes["string"];
        function $(E, I) {
            var F = mini._getMap(B, E), D = mini._getMap(B, I), H = mini.isNull(F) || F === "", A = mini.isNull(D) || D === "";
            if (H)return 0;
            if (A)return 1;
            if (C == "chinese")return F.localeCompare(D);
            var $ = _(F), G = _(D);
            if ($ > G)return 1; else return 0
        }

        A = $;
        return A
    },
    ajaxOptions: null,
    autoLoad: false,
    url: "",
    pageSize: 10,
    pageIndex: 0,
    totalCount: 0,
    totalPage: 0,
    sortField: "",
    sortOrder: "",
    loadParams: null,
    getLoadParams: function () {
        return this.loadParams || {}
    },
    sortMode: "server",
    pageIndexField: "pageIndex",
    pageSizeField: "pageSize",
    sortFieldField: "sortField",
    sortOrderField: "sortOrder",
    totalField: "total",
    dataField: "data",
    startField: "",
    limitField: "",
    errorField: "error",
    errorMsgField: "errorMsg",
    stackTraceField: "stackTrace",
    load: function ($, C, B, A) {
        if (typeof $ == "string") {
            this[Oo1100]($);
            return
        }
        if (this._loadTimer)clearTimeout(this._loadTimer);
        this.loadParams = $ || {};
        if (!mini.isNumber(this.loadParams[lo00O0]))this.loadParams[lo00O0] = 0;
        if (this._xhr)this._xhr.abort();
        if (this.ajaxAsync) {
            var _ = this;
            this._loadTimer = setTimeout(function () {
                _._doLoadAjax(_.loadParams, C, B, A);
                _._loadTimer = null
            }, 1)
        } else this._doLoadAjax(this.loadParams, C, B, A)
    },
    reload: function (A, _, $) {
        this[looOlo](this.loadParams, A, _, $)
    },
    gotoPage: function ($, A) {
        var _ = this.loadParams || {};
        if (mini.isNumber($))_[lo00O0] = $;
        if (mini.isNumber(A))_[llllO] = A;
        this[looOlo](_)
    },
    sortBy: function (A, _) {
        this.sortField = A;
        this.sortOrder = _ == "asc" ? "asc" : "desc";
        if (this.sortMode == "server") {
            var $ = this.getLoadParams();
            $.sortField = A;
            $.sortOrder = _;
            $[lo00O0] = this[lo00O0];
            this[looOlo]($)
        }
    },
    setSortField: function ($) {
        this.sortField = $;
        if (this.sortMode == "server") {
            var _ = this.getLoadParams();
            _.sortField = $
        }
    },
    setSortOrder: function ($) {
        this.sortOrder = $;
        if (this.sortMode == "server") {
            var _ = this.getLoadParams();
            _.sortOrder = $
        }
    },
    checkSelectOnLoad: true,
    selectOnLoad: false,
    ajaxData: null,
    ajaxAsync: true,
    ajaxType: "",
    _doLoadAjax: function (K, M, _, D, F) {
        K = K || {};
        if (mini.isNull(K[lo00O0]))K[lo00O0] = this[lo00O0];
        if (mini.isNull(K[llllO]))K[llllO] = this[llllO];
        if (K.sortField)this.sortField = K.sortField;
        if (K.sortOrder)this.sortOrder = K.sortOrder;
        K.sortField = this.sortField;
        K.sortOrder = this.sortOrder;
        this.loadParams = K;
        var L = this._evalUrl(), A = this._evalType(L), H = oOll1(this.ajaxData, this);
        jQuery.extend(true, K, H);
        var N = {url: L, async: this.ajaxAsync, type: A, data: K, params: K, cache: false, cancel: false};
        jQuery.extend(true, N, this.ajaxOptions);
        this._OnBeforeLoad(N);
        if (N.cancel == true) {
            K[lo00O0] = this[Oooo1O]();
            K[llllO] = this[O0loO0]();
            return
        }
        if (N.data != N.params && N.params != K)N.data = N.params;
        if (N.url != L && N.type == A)N.type = this._evalType(N.url);
        var $ = {};
        $[this.pageIndexField] = K[lo00O0];
        $[this.pageSizeField] = K[llllO];
        if (K.sortField)$[this.sortFieldField] = K.sortField;
        if (K.sortOrder)$[this.sortOrderField] = K.sortOrder;
        if (this.startField && this.limitField) {
            $[this.startField] = K[lo00O0] * K[llllO];
            $[this.limitField] = K[llllO]
        }
        jQuery.extend(true, K, $);
        jQuery.extend(true, N.data, $);
        if (this.sortMode == "client") {
            K[this.sortFieldField] = "";
            K[this.sortOrderField] = ""
        }
        var I = this[o1lo1l]();
        this._currentSelectValue = I ? I[this.idField] : null;
        if (mini.isNumber(this._currentSelectValue))this._currentSelectValue = String(this._currentSelectValue);
        var O = this[l0OoO0](), J = [];
        for (var G = 0, C = O.length; G < C; G++)J.push(O[G][this.idField]);
        this.l0l01Value = J.length == 0 ? null : J;
        if (mini.isNumber(this.l0l01Value))this.l0l01Value = String(this.l0l01Value);
        var B = this;
        B._resultObject = null;
        var E = N.async;
        mini.copyTo(N, {
            success: function (O, U, A) {
                if (!O || O == "null")O = "{tatal:0,data:[] }";
                delete N.params;
                var P = {text: O, result: null, sender: B, options: N, xhr: A}, S = null;
                try {
                    mini_doload(P);
                    S = P.result;
                    if (!S)S = mini.decode(O)
                } catch (H) {
                    if (mini_debugger == true)alert(L + "\n json is error.")
                }
                if (S && !mini.isArray(S)) {
                    S.total = parseInt(mini._getMap(B.totalField, S));
                    S.data = mini._getMap(B.dataField, S)
                } else if (S == null) {
                    S = {};
                    S.data = [];
                    S.total = 0
                } else if (mini.isArray(S)) {
                    var C = {};
                    C.data = S;
                    C.total = S.length;
                    S = C
                }
                if (!S.data)S.data = [];
                if (!S.total)S.total = 0;
                B._resultObject = S;
                if (!mini.isArray(S.data))S.data = [S.data];
                var H = {
                    xhr: A,
                    text: O,
                    textStatus: U,
                    result: S,
                    total: S.total,
                    data: S.data.clone(),
                    pageIndex: K[B.pageIndexField],
                    pageSize: K[B.pageSizeField]
                }, I = mini._getMap(B.errorField, S), T = mini._getMap(B.errorMsgField, S), Q = mini._getMap(B.stackTraceField, S);
                if (mini.isNumber(I) && I != 0 || I === false) {
                    H.textStatus = "servererror";
                    H.errorCode = I;
                    H.stackTrace = Q || "";
                    H.errorMsg = T || "";
                    if (mini_debugger == true)alert(L + "\n" + H.textStatus + "\n" + H.errorMsg + "\n" + H.stackTrace);
                    B[ol1O0]("loaderror", H);
                    if (_)_[o1O0l0](B, H)
                } else if (F)F(H); else {
                    B[lo00O0] = H[lo00O0];
                    B[llllO] = H[llllO];
                    B[oloo1o](H.total);
                    B._OnPreLoad(H);
                    B.loaded = true;
                    B[ol0l0](H.data);
                    if (B.l0l01Value && B[oo1O0]) {
                        var D = [], R = B.l0l01Value;
                        if (R.length > 0) {
                            for (var J = 0, G = R.length; J < G; J++) {
                                var $ = B.getbyId(R[J]);
                                if ($)D.push($)
                            }
                            if (D.length)B[oo1o](D);
                            B.l0l01 = B.getbyId(B._currentSelectValue)
                        }
                    }
                    if (B[o1lo1l]() == null && B.selectOnLoad && B.getDataView().length > 0)B[lOol1O](0);
                    B[ol1O0]("load", H);
                    if (M)if (E)setTimeout(function () {
                        M[o1O0l0](B, H)
                    }, 20); else M[o1O0l0](B, H)
                }
            }, error: function ($, D, A) {
                if (D == "abort")return;
                var C = {xhr: $, text: $.responseText, textStatus: D};
                C.errorMsg = $.responseText;
                C.errorCode = $.status;
                if (mini_debugger == true)alert(L + "\n" + C.errorCode + "\n" + C.errorMsg);
                B[ol1O0]("loaderror", C);
                if (_)_[o1O0l0](B, C)
            }, complete: function ($, A) {
                var _ = {xhr: $, text: $.responseText, textStatus: A};
                B[ol1O0]("loadcomplete", _);
                if (D)D[o1O0l0](B, _);
                B._xhr = null
            }
        });
        if (this._xhr);
        this._xhr = mini.ajax(N)
    },
    _OnBeforeLoad: function ($) {
        this[ol1O0]("beforeload", $)
    },
    _OnPreLoad: function ($) {
        this[ol1O0]("preload", $)
    },
    _evalUrl: function () {
        var url = this.url;
        if (typeof url == "function")url = url(); else {
            try {
                url = eval(url)
            } catch (ex) {
                url = this.url
            }
            if (!url)url = this.url
        }
        return url
    },
    _evalType: function (_) {
        var $ = this.ajaxType;
        if (!$) {
            $ = "post";
            if (_) {
                if (_[o110ll](".txt") != -1 || _[o110ll](".json") != -1)$ = "get"
            } else $ = "get"
        }
        return $
    },
    setSortMode: function ($) {
        this.sortMode = $
    },
    getSortMode: function () {
        return this.sortMode
    },
    setAjaxOptions: function ($) {
        this.ajaxOptions = $
    },
    getAjaxOptions: function () {
        return this.ajaxOptions
    },
    setAutoLoad: function ($) {
        this.autoLoad = $
    },
    getAutoLoad: function () {
        return this.autoLoad
    },
    setUrl: function ($) {
        this.url = $;
        if (this.autoLoad)this[looOlo]()
    },
    getUrl: function () {
        return this.url
    },
    setPageIndex: function ($) {
        this[lo00O0] = $;
        var _ = this.loadParams || {};
        if (mini.isNumber($))_[lo00O0] = $;
        this[ol1O0]("pageinfochanged")
    },
    getPageIndex: function () {
        return this[lo00O0]
    },
    setPageSize: function ($) {
        this[llllO] = $;
        var _ = this.loadParams || {};
        if (mini.isNumber($))_[llllO] = $;
        this[ol1O0]("pageinfochanged")
    },
    getPageSize: function () {
        return this[llllO]
    },
    setTotalCount: function ($) {
        this[ool1oo] = parseInt($);
        this[ol1O0]("pageinfochanged")
    },
    getTotalCount: function () {
        return this[ool1oo]
    },
    getTotalPage: function () {
        return this.totalPage
    },
    setCheckSelectOnLoad: function ($) {
        this[oo1O0] = $
    },
    getCheckSelectOnLoad: function () {
        return this[oo1O0]
    },
    setSelectOnLoad: function ($) {
        this.selectOnLoad = $
    },
    getSelectOnLoad: function () {
        return this.selectOnLoad
    }
});
mini.DataSource.RecordId = 1;
mini.DataTable = function () {
    mini.DataTable[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.DataTable, mini.DataSource, {
    _init: function () {
        mini.DataTable[ollolO]._init[o1O0l0](this);
        this._filterInfo = null;
        this._sortInfo = null
    }, add: function ($) {
        return this.insert(this.source.length, $)
    }, addRange: function ($) {
        this.insertRange(this.source.length, $)
    }, insert: function ($, _) {
        if (!_)return null;
        var D = {index: $, record: _};
        this[ol1O0]("beforeadd", D);
        if (!mini.isNumber($)) {
            var B = this.getRecord($);
            if (B)$ = this[o110ll](B); else $ = this.getDataView().length
        }
        var C = this.dataview[$];
        if (C)this.dataview.insert($, _); else this.dataview[llo10o](_);
        if (this.dataview != this.source)if (C) {
            var A = this.source[o110ll](C);
            this.source.insert(A, _)
        } else this.source[llo10o](_);
        this._setAdded(_);
        this.o10oO();
        this[ol1O0]("add", D)
    }, insertRange: function ($, B) {
        if (!mini.isArray(B))return;
        this.beginChange();
        B = B.clone();
        for (var A = 0, C = B.length; A < C; A++) {
            var _ = B[A];
            this.insert($ + A, _)
        }
        this.endChange()
    }, remove: function (_, A) {
        var $ = this[o110ll](_);
        return this.removeAt($, A)
    }, removeAt: function ($, D) {
        var _ = this[l11o1o]($);
        if (!_)return null;
        var C = {record: _};
        this[ol1O0]("beforeremove", C);
        var B = this[Olo1o1](_);
        this.source.remove(_);
        if (this.dataview !== this.source)this.dataview.removeAt($);
        this._setRemoved(_);
        this.ool1();
        this.o10oO();
        this[ol1O0]("remove", C);
        if (B && D) {
            var A = this[l11o1o]($);
            if (!A)A = this[l11o1o]($ - 1);
            this[OOo10]();
            this[lOol1O](A)
        }
    }, removeRange: function (A, C) {
        if (!mini.isArray(A))return;
        this.beginChange();
        A = A.clone();
        for (var _ = 0, B = A.length; _ < B; _++) {
            var $ = A[_];
            this.remove($, C)
        }
        this.endChange()
    }, move: function (_, H) {
        if (!_ || !mini.isNumber(H))return;
        if (H < 0)return;
        if (mini.isArray(_)) {
            this.beginChange();
            var I = _, C = this[l11o1o](H), F = this;
            mini.sort(I, function ($, _) {
                return F[o110ll]($) > F[o110ll](_)
            }, this);
            for (var E = 0, D = I.length; E < D; E++) {
                var A = I[E], $ = this[o110ll](C);
                this.move(A, $)
            }
            this.endChange();
            return
        }
        var J = {index: H, record: _};
        this[ol1O0]("beforemove", J);
        var B = this.dataview[H];
        this.dataview.remove(_);
        var G = this.dataview[o110ll](B);
        if (G != -1)H = G;
        if (B)this.dataview.insert(H, _); else this.dataview[llo10o](_);
        if (this.dataview != this.source) {
            this.source.remove(_);
            G = this.source[o110ll](B);
            if (G != -1)H = G;
            if (B)this.source.insert(H, _); else this.source[llo10o](_)
        }
        this.o10oO();
        this[ol1O0]("move", J)
    }, indexOf: function ($) {
        return this.getVisibleRows()[o110ll]($)
    }, getAt: function ($) {
        return this.getVisibleRows()[$]
    }, getRange: function (A, B) {
        if (A > B) {
            var C = A;
            A = B;
            B = C
        }
        var D = [];
        for (var _ = A, E = B; _ <= E; _++) {
            var $ = this.dataview[_];
            D.push($)
        }
        return D
    }, selectRange: function ($, _) {
        if (!mini.isNumber($))$ = this[o110ll]($);
        if (!mini.isNumber(_))_ = this[o110ll](_);
        if (mini.isNull($) || mini.isNull(_))return;
        var A = this.getRange($, _);
        this[oo1o](A)
    }, toArray: function () {
        return this.source.clone()
    }, isChanged: function () {
        return this.getChanges().length > 0
    }, getChanges: function (F, A) {
        var G = [];
        if (F == "removed" || F == null)G.addRange(this._removeds.clone());
        for (var D = 0, B = this.source.length; D < B; D++) {
            var $ = this.source[D];
            if (!$._state)continue;
            if ($._state == F || F == null)G[G.length] = $
        }
        var _ = G;
        if (A)for (D = 0, B = _.length; D < B; D++) {
            var H = _[D];
            if (H._state == "modified") {
                var I = {};
                I._state = H._state;
                I[this.idField] = H[this.idField];
                for (var J in H) {
                    var E = this.isModified(H, J);
                    if (E)I[J] = H[J]
                }
                _[D] = I
            }
        }
        var C = this;
        mini.sort(G, function (_, B) {
            var $ = C[o110ll](_), A = C[o110ll](B);
            if ($ > A)return 1;
            if ($ < A)return -1;
            return 0
        });
        return G
    }, accept: function () {
        this.beginChange();
        for (var _ = 0, A = this.source.length; _ < A; _++) {
            var $ = this.source[_];
            this.acceptRecord($)
        }
        this._removeds = [];
        this.l0110o = {};
        this.endChange()
    }, reject: function () {
        this.beginChange();
        for (var _ = 0, A = this.source.length; _ < A; _++) {
            var $ = this.source[_];
            this.rejectRecord($)
        }
        this._removeds = [];
        this.l0110o = {};
        this.endChange()
    }, acceptRecord: function ($) {
        if (!$._state)return;
        delete this.l0110o[$[this.l1o10]];
        if ($._state == "deleted")this.remove($); else {
            delete $._state;
            delete this.l0110o[$[this.l1o10]];
            this.o10oO()
        }
        this[ol1O0]("update", {record: $})
    }, rejectRecord: function (A) {
        if (!A._state)return;
        if (A._state == "added")this.remove(A); else if (A._state == "modified" || A._state == "deleted") {
            var _ = this.O1O0(A);
            for (var B in _) {
                var $ = _[B];
                mini._setMap(B, $, A)
            }
            delete A._state;
            delete this.l0110o[A[this.l1o10]];
            this.o10oO();
            this[ol1O0]("update", {record: A})
        }
    }, ollo: function () {
        if (!this._filterInfo) {
            this.dataview = this.source;
            return
        }
        var F = this._filterInfo[0], D = this._filterInfo[1], $ = [], C = this.source;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var B = C[_], A = F[o1O0l0](D, B, _, this);
            if (A !== false)$.push(B)
        }
        this.dataview = $
    }, lO1oOo: function () {
        if (!this._sortInfo)return;
        var B = this._sortInfo[0], A = this._sortInfo[1], $ = this._sortInfo[2], _ = this.getDataView().clone();
        mini.sort(_, B, A);
        if ($)_.reverse();
        this.dataview = _
    }
});
loOOl(mini.DataTable, "datatable");
mini.DataTree = function () {
    mini.DataTree[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.DataTree, mini.DataSource, {
    isTree: true,
    expandOnLoad: false,
    idField: "id",
    parentField: "pid",
    nodesField: "children",
    checkedField: "checked",
    resultAsTree: true,
    dataField: "",
    checkModel: "cascade",
    autoCheckParent: false,
    onlyLeafCheckable: false,
    setExpandOnLoad: function ($) {
        this.expandOnLoad = $
    },
    getExpandOnLoad: function () {
        return this.expandOnLoad
    },
    setParentField: function ($) {
        this[o0oO] = $
    },
    setNodesField: function ($) {
        if (this.nodesField != $) {
            var _ = this.root[this.nodesField];
            this.nodesField = $;
            this.llo0l(_)
        }
    },
    setResultAsTree: function ($) {
        this[l11ol0] = $
    },
    setCheckRecursive: function ($) {
        this.checkModel = $ ? "cascade" : "multiple"
    },
    getCheckRecursive: function () {
        return this.checkModel == "cascade"
    },
    setShowFolderCheckBox: function ($) {
        this.onlyLeafCheckable = !$
    },
    getShowFolderCheckBox: function () {
        return !this.onlyLeafCheckable
    },
    _doExpandOnLoad: function (B) {
        var _ = this.nodesField, $ = this.expandOnLoad;

        function A(G, C) {
            for (var D = 0, F = G.length; D < F; D++) {
                var E = G[D];
                if (mini.isNull(E.expanded)) {
                    if ($ === true || (mini.isNumber($) && C <= $))E.expanded = true; else E.expanded = false
                }
                var B = E[_];
                if (B)A(B, C + 1)
            }
        }

        A(B, 0)
    },
    _OnBeforeLoad: function (_) {
        var $ = this._loadingNode || this.root;
        _.node = $;
        if (this._isNodeLoading()) {
            _.async = true;
            _.isRoot = _.node == this.root;
            if (!_.isRoot)_.data[this.idField] = this[OO01O0](_.node)
        }
        this[ol1O0]("beforeload", _)
    },
    _OnPreLoad: function ($) {
        if (this[l11ol0] == false)$.data = mini.arrayToTree($.data, this.nodesField, this.idField, this[o0oO]);
        this[ol1O0]("preload", $)
    },
    _init: function () {
        mini.DataTree[ollolO]._init[o1O0l0](this);
        this.root = {_id: -1, _level: -1};
        this.source = this.root[this.nodesField] = [];
        this.viewNodes = null;
        this.dataview = null;
        this.visibleRows = null;
        this.list = null;
        this._ids[this.root._id] = this.root
    },
    llo0l: function (D) {
        D = D || [];
        this._doExpandOnLoad(D);
        this.source = this.root[this.nodesField] = D;
        this.viewNodes = null;
        this.dataview = null;
        this.visibleRows = null;
        this.list = null;
        var A = mini[lol11](D, this.nodesField), B = this._ids;
        B[this.root._id] = this.root;
        for (var _ = 0, F = A.length; _ < F; _++) {
            var C = A[_];
            C._id = mini.DataSource.RecordId++;
            B[C._id] = C;
            C._uid = C._id
        }
        var G = this.checkedField, A = mini[lol11](D, this.nodesField, "_id", "_pid", this.root._id);
        for (_ = 0, F = A.length; _ < F; _++) {
            var C = A[_], $ = this[lo10lo](C);
            C._pid = $._id;
            C._level = $._level + 1;
            delete C._state;
            C.checked = C[G];
            if (C.checked)C.checked = C.checked != "false";
            if (this.isLeafNode(C) == false) {
                var E = C[this.nodesField];
                if (E && E.length > 0);
            }
        }
        this._doUpdateLoadedCheckedNodes()
    },
    _setAdded: function (_) {
        var $ = this[lo10lo](_);
        _._id = mini.DataSource.RecordId++;
        if (this._autoCreateNewID && !_[this.idField])_[this.idField] = UUID();
        _._uid = _._id;
        _._pid = $._id;
        if ($[this.idField])_[this.parentField] = $[this.idField];
        _._level = $._level + 1;
        _._state = "added";
        this._ids[_._id] = _;
        delete this.l0110o[_[this.l1o10]]
    },
    ol0l: function ($) {
        var _ = $[this.nodesField];
        if (!_)_ = $[this.nodesField] = [];
        if (this.viewNodes && !this.viewNodes[$._id])this.viewNodes[$._id] = [];
        return _
    },
    addNode: function (_, $) {
        if (!_)return;
        return this.insertNode(_, -1, $)
    },
    addNodes: function (D, _, A) {
        if (!mini.isArray(D))return;
        if (mini.isNull(A))A = "add";
        for (var $ = 0, C = D.length; $ < C; $++) {
            var B = D[$];
            this.insertNode(B, A, _)
        }
    },
    insertNodes: function (D, $, A) {
        if (!mini.isNumber($))return;
        if (!mini.isArray(D))return;
        if (!A)A = this.root;
        this.beginChange();
        var B = this.ol0l(A);
        if ($ < 0 || $ > B.length)$ = B.length;
        D = D.clone();
        for (var _ = 0, C = D.length; _ < C; _++)this.insertNode(D[_], $ + _, A);
        this.endChange();
        return D
    },
    removeNode: function (A) {
        var _ = this[lo10lo](A);
        if (!_)return;
        var $ = this.indexOfNode(A);
        return this.removeNodeAt($, _)
    },
    removeNodes: function (A) {
        if (!mini.isArray(A))return;
        this.beginChange();
        A = A.clone();
        for (var $ = 0, _ = A.length; $ < _; $++)this[oll100](A[$]);
        this.endChange()
    },
    moveNodes: function (E, B, _) {
        if (!E || E.length == 0 || !B || !_)return;
        this.beginChange();
        var A = this;
        mini.sort(E, function ($, _) {
            return A[o110ll]($) > A[o110ll](_)
        }, this);
        for (var $ = 0, D = E.length; $ < D; $++) {
            var C = E[$];
            this.moveNode(C, B, _);
            if ($ != 0) {
                B = C;
                _ = "after"
            }
        }
        this.endChange()
    },
    moveNode: function (E, D, B) {
        if (!E || !D || mini.isNull(B))return;
        if (this.viewNodes) {
            var _ = D, $ = B;
            if ($ == "before") {
                _ = this[lo10lo](D);
                $ = this.indexOfNode(D)
            } else if ($ == "after") {
                _ = this[lo10lo](D);
                $ = this.indexOfNode(D) + 1
            } else if ($ == "add" || $ == "append") {
                if (!_[this.nodesField])_[this.nodesField] = [];
                $ = _[this.nodesField].length
            } else if (!mini.isNumber($))return;
            if (this.isAncestor(E, _))return false;
            var A = this[l00oo](_);
            if ($ < 0 || $ > A.length)$ = A.length;
            var F = {};
            A.insert($, F);
            var C = this[lo10lo](E), G = this[l00oo](C);
            G.remove(E);
            $ = A[o110ll](F);
            A[$] = E
        }
        _ = D, $ = B, A = this.ol0l(_);
        if ($ == "before") {
            _ = this[lo10lo](D);
            A = this.ol0l(_);
            $ = A[o110ll](D)
        } else if ($ == "after") {
            _ = this[lo10lo](D);
            A = this.ol0l(_);
            $ = A[o110ll](D) + 1
        } else if ($ == "add" || $ == "append")$ = A.length; else if (!mini.isNumber($))return;
        if (this.isAncestor(E, _))return false;
        if ($ < 0 || $ > A.length)$ = A.length;
        F = {};
        A.insert($, F);
        C = this[lo10lo](E);
        C[this.nodesField].remove(E);
        $ = A[o110ll](F);
        A[$] = E;
        this.O00oO(E, _);
        this.o10oO();
        var H = {oldParentNode: C, parentNode: _, index: $, node: E};
        this[ol1O0]("movenode", H)
    },
    insertNode: function (A, $, _) {
        if (!A)return;
        if (!_) {
            _ = this.root;
            $ = "add"
        }
        if (!mini.isNumber($)) {
            switch ($) {
                case"before":
                    $ = this.indexOfNode(_);
                    _ = this[lo10lo](_);
                    this.insertNode(A, $, _);
                    break;
                case"after":
                    $ = this.indexOfNode(_);
                    _ = this[lo10lo](_);
                    this.insertNode(A, $ + 1, _);
                    break;
                case"append":
                case"add":
                    this.addNode(A, _);
                    break;
                default:
                    break
            }
            return
        }
        var C = this.ol0l(_), D = this[l00oo](_);
        if ($ < 0)$ = D.length;
        D.insert($, A);
        $ = D[o110ll](A);
        if (this.viewNodes) {
            var B = D[$ - 1];
            if (B) {
                var E = C[o110ll](B);
                C.insert(E + 1, A)
            } else C.insert(0, A)
        }
        A._pid = _._id;
        this._setAdded(A);
        this.cascadeChild(A, function (A, $, _) {
            A._pid = _._id;
            this._setAdded(A)
        }, this);
        this.o10oO();
        var F = {parentNode: _, index: $, node: A};
        this[ol1O0]("addnode", F);
        return A
    },
    removeNodeAt: function ($, _) {
        if (!_)_ = this.root;
        var C = this[l00oo](_), A = C[$];
        if (!A)return null;
        C.removeAt($);
        if (this.viewNodes) {
            var B = _[this.nodesField];
            B.remove(A)
        }
        this._setRemoved(A);
        this.cascadeChild(A, function (A, $, _) {
            this._setRemoved(A)
        }, this);
        this.ool1();
        this.o10oO();
        var D = {parentNode: _, index: $, node: A};
        this[ol1O0]("removenode", D);
        return A
    },
    bubbleParent: function (_, B, A) {
        A = A || this;
        if (_)B[o1O0l0](this, _);
        var $ = this[lo10lo](_);
        if ($ && $ != this.root)this.bubbleParent($, B, A)
    },
    cascadeChild: function (A, E, B) {
        if (!E)return;
        if (!A)A = this.root;
        var D = this[l00oo](A);
        if (D) {
            D = D.clone();
            for (var $ = 0, C = D.length; $ < C; $++) {
                var _ = D[$];
                if (E[o1O0l0](B || this, _, $, A) === false)return;
                this.cascadeChild(_, E, B)
            }
        }
    },
    eachChild: function (B, F, C) {
        if (!F || !B)return;
        var E = B[this.nodesField];
        if (E) {
            var _ = E.clone();
            for (var A = 0, D = _.length; A < D; A++) {
                var $ = _[A];
                if (F[o1O0l0](C || this, $, A, B) === false)break
            }
        }
    },
    collapse: function ($, _) {
        $ = this[Oll0l0]($);
        if (!$)return;
        this.beginChange();
        $.expanded = false;
        if (_)this.eachChild($, function ($) {
            if ($[this.nodesField] != null)this[lO0o11]($, _)
        }, this);
        this.endChange();
        var A = {node: $};
        this[ol1O0]("collapse", A)
    },
    expand: function ($, _) {
        $ = this[Oll0l0]($);
        if (!$)return;
        this.beginChange();
        $.expanded = true;
        if (_)this.eachChild($, function ($) {
            if ($[this.nodesField] != null)this[lolool]($, _)
        }, this);
        this.endChange();
        var A = {node: $};
        this[ol1O0]("expand", A)
    },
    toggle: function ($) {
        if (this.isExpandedNode($))this[lO0o11]($); else this[lolool]($)
    },
    expandNode: function ($) {
        this[lolool]($)
    },
    collapseNode: function ($) {
        this[lO0o11]($)
    },
    collapseAll: function () {
        this[lO0o11](this.root, true)
    },
    expandAll: function () {
        this[lolool](this.root, true)
    },
    collapseLevel: function ($, _) {
        this.beginChange();
        this.each(function (A) {
            var B = this.getLevel(A);
            if ($ == B)this[lO0o11](A, _)
        }, this);
        this.endChange()
    },
    expandLevel: function ($, _) {
        this.beginChange();
        this.each(function (A) {
            var B = this.getLevel(A);
            if ($ == B)this[lolool](A, _)
        }, this);
        this.endChange()
    },
    expandPath: function (A) {
        A = this[Oll0l0](A);
        if (!A)return;
        var _ = this[l1000l](A);
        for (var $ = 0, B = _.length; $ < B; $++)this[O11Oll](_[$])
    },
    collapsePath: function (A) {
        A = this[Oll0l0](A);
        if (!A)return;
        var _ = this[l1000l](A);
        for (var $ = 0, B = _.length; $ < B; $++)this[O010OO](_[$])
    },
    isAncestor: function (_, B) {
        if (_ == B)return true;
        if (!_ || !B)return false;
        if (_ == this.getRootNode())return true;
        var A = this[l1000l](B);
        for (var $ = 0, C = A.length; $ < C; $++)if (A[$] == _)return true;
        return false
    },
    getAncestors: function (A) {
        var _ = [];
        while (1) {
            var $ = this[lo10lo](A);
            if (!$ || $ == this.root)break;
            _[_.length] = $;
            A = $
        }
        _.reverse();
        return _
    },
    getNode: function ($) {
        return this.getRecord($)
    },
    getRootNode: function () {
        return this.root
    },
    getParentNode: function ($) {
        if (!$)return null;
        return this.getby_id($._pid)
    },
    getAllChildNodes: function ($) {
        return this[l00oo]($, true)
    },
    getChildNodes: function (A, C, B) {
        A = this[Oll0l0](A);
        if (!A)A = this.getRootNode();
        var G = A[this.nodesField];
        if (this.viewNodes && B !== false)G = this.viewNodes[A._id];
        if (C === true && G) {
            var $ = [];
            for (var _ = 0, F = G.length; _ < F; _++) {
                var D = G[_];
                $[$.length] = D;
                var E = this[l00oo](D, C, B);
                if (E && E.length > 0)$.addRange(E)
            }
            G = $
        }
        return G || []
    },
    getChildNodeAt: function ($, _) {
        var A = this[l00oo](_);
        if (A)return A[$];
        return null
    },
    hasChildNodes: function ($) {
        var _ = this[l00oo]($);
        return _.length > 0
    },
    getLevel: function ($) {
        return $._level
    },
    _is_true: function ($) {
        return String($) == "true" || $ === 1 || $ === "Y" || $ === "y"
    },
    _is_false: function ($) {
        return String($) == "false" || $ === 0 || $ === "N" || $ === "n"
    },
    leafField: "isLeaf",
    isLeafNode: function ($) {
        return this.isLeaf($)
    },
    isLeaf: function ($) {
        if (!$)return false;
        var A = $[this.leafField];
        if (!$ || this._is_false(A))return false;
        var _ = this[l00oo]($, false, false);
        if (_.length > 0)return false;
        return true
    },
    hasChildren: function ($) {
        var _ = this[l00oo]($);
        return !!(_ && _.length > 0)
    },
    isFirstNode: function (_) {
        if (_ == this.root)return true;
        var $ = this[lo10lo](_);
        if (!$)return false;
        return this.getFirstNode($) == _
    },
    isLastNode: function (_) {
        if (_ == this.root)return true;
        var $ = this[lo10lo](_);
        if (!$)return false;
        return this.getLastNode($) == _
    },
    isCheckedNode: function ($) {
        return $.checked === true
    },
    isExpandedNode: function ($) {
        return $.expanded == true || $.expanded == 1 || mini.isNull($.expanded)
    },
    isEnabledNode: function ($) {
        return $.enabled !== false
    },
    isVisibleNode: function (_) {
        if (_.visible == false)return false;
        var $ = this._ids[_._pid];
        if (!$ || $ == this.root)return true;
        if ($.expanded === false)return false;
        return this.isVisibleNode($)
    },
    getNextNode: function (A) {
        var _ = this.getby_id(A._pid);
        if (!_)return null;
        var $ = this.indexOfNode(A);
        return this[l00oo](_)[$ + 1]
    },
    getPrevNode: function (A) {
        var _ = this.getby_id(A._pid);
        if (!_)return null;
        var $ = this.indexOfNode(A);
        return this[l00oo](_)[$ - 1]
    },
    getFirstNode: function ($) {
        return this[l00oo]($)[0]
    },
    getLastNode: function ($) {
        var _ = this[l00oo]($);
        return _[_.length - 1]
    },
    indexOfNode: function (_) {
        var $ = this.getby_id(_._pid);
        if ($)return this[l00oo]($)[o110ll](_);
        return -1
    },
    indexOfList: function ($) {
        return this[lo0111]()[o110ll]($)
    },
    getAt: function ($) {
        return this.getVisibleRows()[$]
    },
    indexOf: function ($) {
        return this.getVisibleRows()[o110ll]($)
    },
    getRange: function (A, C) {
        if (A > C) {
            var D = A;
            A = C;
            C = D
        }
        var B = this[l00oo](this.root, true), E = [];
        for (var _ = A, F = C; _ <= F; _++) {
            var $ = B[_];
            if ($)E.push($)
        }
        return E
    },
    selectRange: function ($, A) {
        var _ = this[l00oo](this.root, true);
        if (!mini.isNumber($))$ = _[o110ll]($);
        if (!mini.isNumber(A))A = _[o110ll](A);
        if (mini.isNull($) || mini.isNull(A))return;
        var B = this.getRange($, A);
        this[oo1o](B)
    },
    findRecords: function (C, A) {
        var H = this.toArray(), I = typeof C == "function", F = C, J = A || this, B = [];
        if (!mini.isNull(A))A = String(A);
        for (var G = 0, D = H.length; G < D; G++) {
            var _ = H[G];
            if (I) {
                var L = F[o1O0l0](J, _);
                if (L == true)B[B.length] = _;
                if (L === 1)break
            } else if (A[o110ll](",") != -1) {
                var M = A.split(",");
                for (var K = 0, $ = M.length; K < $; K++) {
                    var E = M[K];
                    if (_[C] == E)B[B.length] = _
                }
            } else if (_[C] == A)B[B.length] = _
        }
        return B
    },
    o10oOCount: 0,
    o10oO: function ($) {
        this.o10oOCount++;
        if ($ != "update") {
            this.ids = null;
            this.dataview = null;
            this.visibleRows = null;
            this.list = null
        }
        if (this.__changeCount == 0)this[ol1O0]("datachanged")
    },
    llooView: function () {
        var $ = !this.viewNodes ? this[lo0111]().clone() : this[l00oo](this.root, true);
        return $
    },
    _createVisibleRows: function () {
        var B = !this.viewNodes ? this[lo0111]().clone() : this[l00oo](this.root, true), $ = [];
        for (var _ = 0, C = B.length; _ < C; _++) {
            var A = B[_];
            if (this.isVisibleNode(A))$[$.length] = A
        }
        return $
    },
    getList: function () {
        if (!this.list)this.list = mini.treeToList(this.source, this.nodesField);
        return this.list
    },
    getDataView: function () {
        if (!this.dataview)this.dataview = this.llooView();
        return this.dataview
    },
    getVisibleRows: function () {
        if (!this.visibleRows)this.visibleRows = this._createVisibleRows();
        return this.visibleRows
    },
    ollo: function () {
        if (!this._filterInfo) {
            this.viewNodes = null;
            return
        }
        var C = this._filterInfo[0], B = this._filterInfo[1], A = this.viewNodes = {}, _ = this.nodesField;

        function $(G) {
            var J = G[_];
            if (!J)return false;
            var K = G._id, H = A[K] = [];
            for (var D = 0, I = J.length; D < I; D++) {
                var F = J[D], L = $(F), E = C[o1O0l0](B, F, D, this);
                if (E === true || L)H.push(F)
            }
            return H.length > 0
        }

        $(this.root)
    },
    lO1oOo: function () {
        if (!this._filterInfo && !this._sortInfo) {
            this.viewNodes = null;
            return
        }
        if (!this._sortInfo)return;
        var E = this._sortInfo[0], D = this._sortInfo[1], $ = this._sortInfo[2], _ = this.nodesField;
        if (!this.viewNodes) {
            var C = this.viewNodes = {};
            C[this.root._id] = this.root[_].clone();
            this.cascadeChild(this.root, function (A, $, B) {
                var D = A[_];
                if (D)C[A._id] = D.clone()
            })
        }
        var B = this;

        function A(F) {
            var H = B[l00oo](F);
            mini.sort(H, E, D);
            if ($)H.reverse();
            for (var _ = 0, G = H.length; _ < G; _++) {
                var C = H[_];
                A(C)
            }
        }

        A(this.root)
    },
    toArray: function () {
        if (!this._array || this.o10oOCount != this.o10oOCount2) {
            this.o10oOCount2 = this.o10oOCount;
            this._array = this[l00oo](this.root, true, false)
        }
        return this._array
    },
    toTree: function () {
        return this.root[this.nodesField]
    },
    isChanged: function () {
        return this.getChanges().length > 0
    },
    getChanges: function (E, H) {
        var D = [];
        if (E == "removed" || E == null)D.addRange(this._removeds.clone());
        this.cascadeChild(this.root, function (_, $, A) {
            if (_._state == null || _._state == "")return;
            if (_._state == E || E == null)D[D.length] = _
        }, this);
        var C = D;
        if (H)for (var _ = 0, G = C.length; _ < G; _++) {
            var B = C[_];
            if (B._state == "modified") {
                var A = {};
                A[this.idField] = B[this.idField];
                for (var F in B) {
                    var $ = this.isModified(B, F);
                    if ($)A[F] = B[F]
                }
                C[_] = A
            }
        }
        return D
    },
    accept: function ($) {
        $ = $ || this.root;
        this.beginChange();
        this.cascadeChild(this.root, function ($) {
            this.acceptRecord($)
        }, this);
        this._removeds = [];
        this.l0110o = {};
        this.endChange()
    },
    reject: function ($) {
        this.beginChange();
        this.cascadeChild(this.root, function ($) {
            this.rejectRecord($)
        }, this);
        this._removeds = [];
        this.l0110o = {};
        this.endChange()
    },
    acceptRecord: function ($) {
        if (!$._state)return;
        delete this.l0110o[$[this.l1o10]];
        if ($._state == "deleted")this[oll100]($); else {
            delete $._state;
            delete this.l0110o[$[this.l1o10]];
            this.o10oO();
            this[ol1O0]("update", {record: $})
        }
    },
    rejectRecord: function (_) {
        if (!_._state)return;
        if (_._state == "added")this[oll100](_); else if (_._state == "modified" || _._state == "deleted") {
            var $ = this.O1O0(_);
            mini.copyTo(_, $);
            delete _._state;
            delete this.l0110o[_[this.l1o10]];
            this.o10oO();
            this[ol1O0]("update", {record: _})
        }
    },
    upGrade: function (F) {
        var C = this[lo10lo](F);
        if (C == this.root || F == this.root)return false;
        var E = C[this.nodesField], _ = E[o110ll](F), G = F[this.nodesField] ? F[this.nodesField].length : 0;
        for (var B = E.length - 1; B >= _; B--) {
            var $ = E[B];
            E.removeAt(B);
            if ($ != F) {
                if (!F[this.nodesField])F[this.nodesField] = [];
                F[this.nodesField].insert(G, $)
            }
        }
        var D = this[lo10lo](C), A = D[this.nodesField], _ = A[o110ll](C);
        A.insert(_ + 1, F);
        this.O00oO(F, D);
        this.ollo();
        this.o10oO()
    },
    downGrade: function (B) {
        if (this[llol01](B))return false;
        var A = this[lo10lo](B), C = A[this.nodesField], $ = C[o110ll](B), _ = C[$ - 1];
        C.removeAt($);
        if (!_[this.nodesField])_[this.nodesField] = [];
        _[this.nodesField][llo10o](B);
        this.O00oO(B, _);
        this.ollo();
        this.o10oO()
    },
    O00oO: function (A, _) {
        var $ = this;
        A._pid = _._id;
        A._level = _._level + 1;
        A[$.parentField] = _[$.idField];
        if (!A[$.parentField])A[$.parentField] = _._id;
        this.cascadeChild(A, function (B, _, A) {
            B._pid = A._id;
            B._level = A._level + 1;
            B[$.parentField] = A[$.idField]
        }, this);
        this._setModified(A)
    },
    setCheckModel: function ($) {
        this.checkModel = $
    },
    getCheckModel: function () {
        return this.checkModel
    },
    setOnlyLeafCheckable: function ($) {
        this.onlyLeafCheckable = $
    },
    getOnlyLeafCheckable: function () {
        return this.onlyLeafCheckable
    },
    setAutoCheckParent: function ($) {
        this.autoCheckParent = $
    },
    getAutoCheckParent: function () {
        return this.autoCheckParent
    },
    _doUpdateLoadedCheckedNodes: function () {
        var B = this.getAllChildNodes(this.root);
        for (var $ = 0, A = B.length; $ < A; $++) {
            var _ = B[$];
            if (_.checked == true)if (this.autoCheckParent == false || !this.hasChildNodes(_))this._doUpdateNodeCheckState(_)
        }
    },
    _doUpdateNodeCheckState: function (B) {
        if (!B)return;
        var J = this.isChecked(B);
        if (this.checkModel == "cascade" || this.autoCheckParent) {
            this.cascadeChild(B, function ($) {
                this.doCheckNodes($, J)
            }, this);
            if (!this.autoCheckParent) {
                var $ = this[l1000l](B);
                $.reverse();
                for (var G = 0, E = $.length; G < E; G++) {
                    var C = $[G], A = this[l00oo](C), I = true;
                    for (var _ = 0, F = A.length; _ < F; _++) {
                        var D = A[_];
                        if (!this.isCheckedNode(D))I = false
                    }
                    if (I)this.doCheckNodes(C, true); else this.doCheckNodes(C, false);
                    this[ol1O0]("checkchanged", {nodes: [C], _nodes: [C]})
                }
            }
        }
        var H = this;

        function K(A) {
            var _ = H[l00oo](A);
            for (var $ = 0, C = _.length; $ < C; $++) {
                var B = _[$];
                if (H.isCheckedNode(B))return true
            }
            return false
        }

        if (this.autoCheckParent) {
            $ = this[l1000l](B);
            $.reverse();
            for (G = 0, E = $.length; G < E; G++) {
                C = $[G];
                C.checked = K(C);
                this[ol1O0]("checkchanged", {nodes: [C], _nodes: [C]})
            }
        }
    },
    doCheckNodes: function (E, B, D) {
        if (!E)return;
        if (typeof E == "string")E = E.split(",");
        if (!mini.isArray(E))E = [E];
        E = E.clone();
        var _ = [];
        B = B !== false;
        if (D === true)if (this.checkModel == "single")this.uncheckAllNodes();
        for (var $ = E.length - 1; $ >= 0; $--) {
            var A = this.getRecord(E[$]);
            if (!A || (B && A.checked === true) || (!B && A.checked !== true)) {
                if (A) {
                    if (D === true)this._doUpdateNodeCheckState(A);
                    if (!B && !this.isLeaf(A))_.push(A)
                }
                continue
            }
            A.checked = B;
            _.push(A);
            if (D === true)this._doUpdateNodeCheckState(A)
        }
        var C = this;
        setTimeout(function () {
            C[ol1O0]("checkchanged", {nodes: E, _nodes: _, checked: B})
        }, 1)
    },
    checkNode: function ($, _) {
        this.doCheckNodes([$], true, _ !== false)
    },
    uncheckNode: function ($, _) {
        this.doCheckNodes([$], false, _ !== false)
    },
    checkNodes: function (_, $) {
        if (!mini.isArray(_))_ = [];
        this.doCheckNodes(_, true, $ !== false)
    },
    uncheckNodes: function (_, $) {
        if (!mini.isArray(_))_ = [];
        this.doCheckNodes(_, false, $ !== false)
    },
    checkAllNodes: function () {
        var $ = this[lo0111]();
        this.doCheckNodes($, true, false)
    },
    uncheckAllNodes: function () {
        var $ = this[lo0111]();
        this.doCheckNodes($, false, false)
    },
    doGetCheckedNodes: function (H, C) {
        if (C === false)C = "leaf";
        var E = [], _ = {};
        for (var J = 0, A = H.length; J < A; J++) {
            var B = H[J], I = this.isLeafNode(B);
            if (C === true) {
                if (!_[B._id]) {
                    _[B._id] = B;
                    E.push(B)
                }
                var $ = this[l1000l](B);
                for (var G = 0, F = $.length; G < F; G++) {
                    var D = $[G];
                    if (!_[D._id]) {
                        _[D._id] = D;
                        E.push(D)
                    }
                }
            } else if (C === "parent") {
                if (!I)if (!_[B._id]) {
                    _[B._id] = B;
                    E.push(B)
                }
            } else if (C === "leaf") {
                if (I)if (!_[B._id]) {
                    _[B._id] = B;
                    E.push(B)
                }
            } else if (!_[B._id]) {
                _[B._id] = B;
                E.push(B)
            }
        }
        return E
    },
    getCheckedNodes: function ($) {
        var _ = [];
        this.cascadeChild(this.root, function ($) {
            if ($.checked == true)_.push($)
        });
        _ = this.doGetCheckedNodes(_, $);
        return _
    },
    getCheckedNodesId: function (A, $) {
        var B = this[o0l01](A), _ = this.Oool0(B, $);
        return _[0]
    },
    getCheckedNodesText: function (A, $) {
        var B = this[o0l01](A), _ = this.Oool0(B, $);
        return _[1]
    },
    isChecked: function ($) {
        $ = this.getRecord($);
        if (!$)return null;
        return $.checked === true || $.checked === 1
    },
    getCheckState: function (_) {
        _ = this.getRecord(_);
        if (!_)return null;
        if (_.checked === true)return "checked";
        if (!_[this.nodesField])return "unchecked";
        var B = this[l00oo](_, true);
        for (var $ = 0, A = B.length; $ < A; $++) {
            var _ = B[$];
            if (_.checked === true)return "indeterminate"
        }
        return "unchecked"
    },
    getUnCheckableNodes: function () {
        var $ = [];
        this.cascadeChild(this.root, function (A) {
            var _ = this.getCheckable(A);
            if (_ == false)$.push(A)
        }, this);
        return $
    },
    setCheckable: function (B, _) {
        if (!B)return;
        if (!mini.isArray(B))B = [B];
        B = B.clone();
        _ = !!_;
        for (var $ = B.length - 1; $ >= 0; $--) {
            var A = this.getRecord(B[$]);
            if (!A)continue;
            A.checkable = checked
        }
    },
    getCheckable: function ($) {
        $ = this.getRecord($);
        if (!$)return false;
        if ($.checkable === true)return true;
        if ($.checkable === false)return false;
        return this.isLeafNode($) ? true : !this.onlyLeafCheckable
    },
    showNodeCheckbox: function ($, _) {
    },
    reload: function (A, _, $) {
        this._loadingNode = null;
        this[looOlo](this.loadParams, A, _, $)
    },
    _isNodeLoading: function () {
        return !!this._loadingNode
    },
    loadNode: function (A, $) {
        this._loadingNode = A;
        var C = {node: A};
        this[ol1O0]("beforeloadnode", C);
        var _ = new Date(), B = this;
        B._doLoadAjax(B.loadParams, null, null, null, function (D) {
            var C = new Date() - _;
            if (C < 60)C = 60 - C;
            setTimeout(function () {
                D.node = A;
                B._OnPreLoad(D);
                D.node = B._loadingNode;
                B._loadingNode = null;
                if (B.loadParams)delete B.loadParams[B.idField];
                var F = A[B.nodesField];
                B.removeNodes(F);
                var H = D.data;
                if (H && H.length > 0) {
                    B[lO0o11](A);
                    B.addNodes(H, A);
                    var E = B.getAllChildNodes(A);
                    for (var _ = 0, G = E.length; _ < G; _++) {
                        var C = E[_];
                        delete C._state
                    }
                    if ($ !== false)B[lolool](A, true); else B[lO0o11](A, true)
                } else {
                    delete A[B.leafField];
                    B[lolool](A, true)
                }
                B[ol1O0]("loadnode", D);
                B[ol1O0]("load", D)
            }, C)
        }, true)
    }
});
loOOl(mini.DataTree, "datatree");
mini._DataTableApplys = {
    idField: "id", textField: "text", setAjaxData: function ($) {
        this._dataSource.ajaxData = $
    }, getby_id: function ($) {
        return this._dataSource.getby_id($)
    }, Oool0: function (_, $) {
        return this._dataSource.Oool0(_, $)
    }, setIdField: function ($) {
        this._dataSource[Ol0010]($);
        this[O00o0] = $
    }, getIdField: function () {
        return this._dataSource[O00o0]
    }, setTextField: function ($) {
        this._dataSource[ooO1ll]($);
        this[l1ol1O] = $
    }, getTextField: function () {
        return this._dataSource[l1ol1O]
    }, getLoadParams: function () {
        return this._dataSource.loadParams
    }, clearData: function () {
        this._dataSource[olo11l]()
    }, loadData: function ($) {
        this._dataSource[OOo10l]($)
    }, setData: function ($) {
        this._dataSource[OOo10l]($)
    }, getData: function () {
        return this._dataSource.getSource().clone()
    }, getList: function () {
        return this._dataSource[lo0111]()
    }, getDataView: function () {
        return this._dataSource.getDataView()
    }, getVisibleRows: function () {
        if (this._useEmptyView)return [];
        return this._dataSource.getVisibleRows()
    }, toArray: function () {
        return this._dataSource.toArray()
    }, getRecord: function ($) {
        return this._dataSource.getRecord($)
    }, getRow: function ($) {
        return this._dataSource[l1oOl]($)
    }, getRange: function ($, _) {
        if (mini.isNull($) || mini.isNull(_))return;
        return this._dataSource.getRange($, _)
    }, getAt: function ($) {
        return this._dataSource[l11o1o]($)
    }, indexOf: function ($) {
        return this._dataSource[o110ll]($)
    }, getRowByUID: function ($) {
        return this._dataSource.getby_id($)
    }, getRowById: function ($) {
        return this._dataSource.getbyId($)
    }, clearRows: function () {
        this._dataSource[olo11l]()
    }, updateRow: function ($, A, _) {
        this._dataSource.updateRecord($, A, _)
    }, addRow: function (_, $) {
        return this._dataSource.insert($, _)
    }, removeRow: function ($, _) {
        return this._dataSource.remove($, _)
    }, removeRows: function ($, _) {
        return this._dataSource.removeRange($, _)
    }, removeSelected: function () {
        var $ = this[o1lo1l]();
        if ($)this[oo01O]($, true)
    }, removeRowAt: function ($, _) {
        return this._dataSource.removeAt($, _)
    }, moveRow: function (_, $) {
        this._dataSource.move(_, $)
    }, addRows: function (_, $) {
        return this._dataSource.insertRange($, _)
    }, findRows: function (_, $) {
        return this._dataSource.findRecords(_, $)
    }, findRow: function (_, $) {
        return this._dataSource.findRecord(_, $)
    }, multiSelect: false, setMultiSelect: function ($) {
        this._dataSource[Olol1o]($);
        this[O0o1ol] = $
    }, getMultiSelect: function () {
        return this._dataSource[OoloOl]()
    }, setCurrent: function ($) {
        this._dataSource[l10ll]($)
    }, getCurrent: function () {
        return this._dataSource.getCurrent()
    }, isSelected: function ($) {
        return this._dataSource[Olo1o1]($)
    }, setSelected: function ($) {
        this._dataSource[O0lOo1]($)
    }, getSelected: function () {
        return this._dataSource[o1lo1l]()
    }, getSelecteds: function () {
        return this._dataSource[l0OoO0]()
    }, select: function ($, _) {
        this._dataSource[lOol1O]($, _)
    }, selects: function ($, _) {
        this._dataSource[oo1o]($, _)
    }, deselect: function ($, _) {
        this._dataSource[O0lo11]($, _)
    }, deselects: function ($, _) {
        this._dataSource[l0oO0]($, _)
    }, selectAll: function ($) {
        this._dataSource[oOl1oO]($)
    }, deselectAll: function ($) {
        this._dataSource[OOo10]($)
    }, clearSelect: function ($) {
        this[OOo10]($)
    }, selectPrev: function () {
        this._dataSource.selectPrev()
    }, selectNext: function () {
        this._dataSource.selectNext()
    }, selectFirst: function () {
        this._dataSource.selectFirst()
    }, selectLast: function () {
        this._dataSource.selectLast()
    }, selectRange: function ($, _) {
        this._dataSource.selectRange($, _)
    }, filter: function (_, $) {
        this._dataSource.filter(_, $)
    }, clearFilter: function () {
        this._dataSource.clearFilter()
    }, sort: function (A, _, $) {
        this._dataSource.sort(A, _, $)
    }, clearSort: function () {
        this._dataSource.clearSort()
    }, findItems: function ($, A, _) {
        return this._dataSource.findRecords(_, A, _)
    }, getResultObject: function () {
        return this._dataSource._resultObject || {}
    }, isChanged: function () {
        return this._dataSource.isChanged()
    }, getChanges: function ($, _) {
        return this._dataSource.getChanges($, _)
    }, accept: function () {
        this._dataSource.accept()
    }, reject: function () {
        this._dataSource.reject()
    }, acceptRecord: function ($) {
        this._dataSource.acceptRecord($)
    }, rejectRecord: function ($) {
        this._dataSource.rejectRecord($)
    }
};
mini._DataTreeApplys = {
    addRow: null,
    removeRow: null,
    removeRows: null,
    removeRowAt: null,
    moveRow: null,
    setExpandOnLoad: function ($) {
        this._dataSource[lO100O]($)
    },
    getExpandOnLoad: function () {
        return this._dataSource[lO1101]()
    },
    isSelectedNode: function ($) {
        $ = this[Oll0l0]($);
        return this[loo11O]() === $
    },
    selectNode: function ($, _) {
        if ($)this._dataSource[lOol1O]($, _); else this._dataSource[O0lo11](this[loo11O](), _)
    },
    getSelectedNode: function () {
        return this[o1lo1l]()
    },
    getSelectedNodes: function () {
        return this[l0OoO0]()
    },
    updateNode: function (_, A, $) {
        this._dataSource.updateRecord(_, A, $)
    },
    addNode: function (A, _, $) {
        return this._dataSource.insertNode(A, _, $)
    },
    removeNodeAt: function ($, _) {
        return this._dataSource.removeNodeAt($, _);
        this._changed = true
    },
    removeNode: function ($) {
        return this._dataSource[oll100]($)
    },
    moveNode: function (A, $, _) {
        this._dataSource.moveNode(A, $, _)
    },
    addNodes: function (A, $, _) {
        return this._dataSource.addNodes(A, $, _)
    },
    insertNodes: function (A, $, _) {
        return this._dataSource.insertNodes($, A, _)
    },
    moveNodes: function (A, _, $) {
        this._dataSource.moveNodes(A, _, $)
    },
    removeNodes: function ($) {
        return this._dataSource.removeNodes($)
    },
    expandOnLoad: false,
    checkRecursive: true,
    autoCheckParent: false,
    showFolderCheckBox: true,
    idField: "id",
    textField: "text",
    parentField: "pid",
    nodesField: "children",
    checkedField: "checked",
    leafField: "isLeaf",
    resultAsTree: true,
    setShowFolderCheckBox: function ($) {
        this._dataSource[O0Oo]($);
        if (this[l0loO0])this[l0loO0]();
        this[lOOoo0] = $
    },
    getShowFolderCheckBox: function () {
        return this._dataSource[oll010]()
    },
    setCheckRecursive: function ($) {
        this._dataSource[oOll0l]($);
        this[lOO1o] = $
    },
    getCheckRecursive: function () {
        return this._dataSource[o01Ol]()
    },
    setResultAsTree: function ($) {
        this._dataSource[oO0O1]($)
    },
    getResultAsTree: function ($) {
        return this._dataSource[l11ol0]
    },
    setParentField: function ($) {
        this._dataSource[lllOO1]($);
        this[o0oO] = $
    },
    getParentField: function () {
        return this._dataSource[o0oO]
    },
    setLeafField: function ($) {
        this._dataSource.leafField = $;
        this.leafField = $
    },
    getLeafField: function () {
        return this._dataSource.leafField
    },
    setNodesField: function ($) {
        this._dataSource[OoOOO]($);
        this.nodesField = $
    },
    getNodesField: function () {
        return this._dataSource.nodesField
    },
    setCheckedField: function ($) {
        this._dataSource.checkedField = $;
        this.checkedField = $
    },
    getCheckedField: function () {
        return this.checkedField
    },
    findNodes: function (_, $) {
        return this._dataSource.findRecords(_, $)
    },
    getLevel: function ($) {
        return this._dataSource.getLevel($)
    },
    isVisibleNode: function ($) {
        return this._dataSource.isVisibleNode($)
    },
    isEnabledNode: function ($) {
        return this._dataSource.isEnabledNode($)
    },
    isExpandedNode: function ($) {
        return this._dataSource.isExpandedNode($)
    },
    isCheckedNode: function ($) {
        return this._dataSource.isCheckedNode($)
    },
    isLeaf: function ($) {
        return this._dataSource.isLeafNode($)
    },
    hasChildren: function ($) {
        return this._dataSource.hasChildren($)
    },
    isAncestor: function (_, $) {
        return this._dataSource.isAncestor(_, $)
    },
    getNode: function ($) {
        return this._dataSource.getRecord($)
    },
    getRootNode: function () {
        return this._dataSource.getRootNode()
    },
    getParentNode: function ($) {
        return this._dataSource[lo10lo].apply(this._dataSource, arguments)
    },
    getAncestors: function ($) {
        return this._dataSource[l1000l]($)
    },
    getAllChildNodes: function ($) {
        return this._dataSource.getAllChildNodes.apply(this._dataSource, arguments)
    },
    getChildNodes: function ($, _) {
        return this._dataSource[l00oo].apply(this._dataSource, arguments)
    },
    getChildNodeAt: function ($, _) {
        return this._dataSource.getChildNodeAt.apply(this._dataSource, arguments)
    },
    indexOfNode: function ($) {
        return this._dataSource.indexOfNode.apply(this._dataSource, arguments)
    },
    hasChildNodes: function ($) {
        return this._dataSource.hasChildNodes.apply(this._dataSource, arguments)
    },
    isFirstNode: function ($) {
        return this._dataSource[llol01].apply(this._dataSource, arguments)
    },
    isLastNode: function ($) {
        return this._dataSource.isLastNode.apply(this._dataSource, arguments)
    },
    getNextNode: function ($) {
        return this._dataSource.getNextNode.apply(this._dataSource, arguments)
    },
    getPrevNode: function ($) {
        return this._dataSource.getPrevNode.apply(this._dataSource, arguments)
    },
    getFirstNode: function ($) {
        return this._dataSource.getFirstNode.apply(this._dataSource, arguments)
    },
    getLastNode: function ($) {
        return this._dataSource.getLastNode.apply(this._dataSource, arguments)
    },
    toggleNode: function ($) {
        this._dataSource[llo0o1]($)
    },
    collapseNode: function ($, _) {
        this._dataSource[lO0o11]($, _)
    },
    expandNode: function ($, _) {
        this._dataSource[lolool]($, _)
    },
    collapseAll: function () {
        this.useAnimation = false;
        this._dataSource.collapseAll();
        this.useAnimation = true
    },
    expandAll: function () {
        this.useAnimation = false;
        this._dataSource.expandAll();
        this.useAnimation = true
    },
    expandLevel: function ($) {
        this.useAnimation = false;
        this._dataSource.expandLevel($);
        this.useAnimation = true
    },
    collapseLevel: function ($) {
        this.useAnimation = false;
        this._dataSource.collapseLevel($);
        this.useAnimation = true
    },
    expandPath: function ($) {
        this.useAnimation = false;
        this._dataSource[oO0lol]($);
        this.useAnimation = true
    },
    collapsePath: function ($) {
        this.useAnimation = false;
        this._dataSource.collapsePath($);
        this.useAnimation = true
    },
    loadNode: function ($, _) {
        this._dataSource.loadNode($, _)
    },
    setCheckModel: function ($) {
        this._dataSource.setCheckModel($)
    },
    getCheckModel: function () {
        return this._dataSource.getCheckModel()
    },
    setOnlyLeafCheckable: function ($) {
        this._dataSource.setOnlyLeafCheckable($)
    },
    getOnlyLeafCheckable: function () {
        return this._dataSource.getOnlyLeafCheckable()
    },
    setAutoCheckParent: function ($) {
        this._dataSource[l1oOoo]($)
    },
    getAutoCheckParent: function () {
        return this._dataSource[lo111]()
    },
    checkNode: function ($, _) {
        this._dataSource.checkNode($, _)
    },
    uncheckNode: function ($, _) {
        this._dataSource.uncheckNode($, _)
    },
    checkNodes: function (_, $) {
        this._dataSource.checkNodes(_, $)
    },
    uncheckNodes: function (_, $) {
        this._dataSource.uncheckNodes(_, $)
    },
    checkAllNodes: function () {
        this._dataSource.checkAllNodes()
    },
    uncheckAllNodes: function () {
        this._dataSource.uncheckAllNodes()
    },
    getCheckedNodes: function () {
        return this._dataSource[o0l01].apply(this._dataSource, arguments)
    },
    getCheckedNodesId: function () {
        return this._dataSource.getCheckedNodesId.apply(this._dataSource, arguments)
    },
    getCheckedNodesText: function () {
        return this._dataSource.getCheckedNodesText.apply(this._dataSource, arguments)
    },
    getNodesByValue: function (_) {
        if (mini.isNull(_))_ = "";
        _ = String(_);
        var D = [], A = String(_).split(",");
        for (var $ = 0, C = A.length; $ < C; $++) {
            var B = this[Oll0l0](A[$]);
            if (B)D.push(B)
        }
        return D
    },
    isChecked: function ($) {
        return this._dataSource.isChecked.apply(this._dataSource, arguments)
    },
    getCheckState: function ($) {
        return this._dataSource.getCheckState.apply(this._dataSource, arguments)
    },
    setCheckable: function (_, $) {
        this._dataSource.setCheckable.apply(this._dataSource, arguments)
    },
    getCheckable: function ($) {
        return this._dataSource.getCheckable.apply(this._dataSource, arguments)
    },
    bubbleParent: function ($, A, _) {
        this._dataSource.bubbleParent.apply(this._dataSource, arguments)
    },
    cascadeChild: function ($, A, _) {
        this._dataSource.cascadeChild.apply(this._dataSource, arguments)
    },
    eachChild: function ($, A, _) {
        this._dataSource.eachChild.apply(this._dataSource, arguments)
    }
};
mini.ColumnModel = function ($) {
    this.owner = $;
    mini.ColumnModel[ollolO][OOlOl].apply(this, arguments);
    this._init()
};
mini.ColumnModel_ColumnID = 1;
oo00(mini.ColumnModel, OoO11l, {
    _defaultColumnWidth: 100, _init: function () {
        this.columns = [];
        this._columnsRow = [];
        this._visibleColumnsRow = [];
        this.lo10oO = [];
        this._visibleColumns = [];
        this.O1O0Oo = {};
        this.O0o1O = {};
        this._fieldColumns = {}
    }, getColumns: function () {
        return this.columns
    }, getAllColumns: function () {
        var _ = [];
        for (var A in this.O1O0Oo) {
            var $ = this.O1O0Oo[A];
            _.push($)
        }
        return _
    }, getColumnsRow: function () {
        return this._columnsRow
    }, getVisibleColumnsRow: function () {
        return this._visibleColumnsRow
    }, getBottomColumns: function () {
        return this.lo10oO
    }, getVisibleColumns: function () {
        return this._visibleColumns
    }, _getBottomColumnsByColumn: function (A) {
        A = this[lolo0l](A);
        var C = this.lo10oO, B = [];
        for (var $ = 0, D = C.length; $ < D; $++) {
            var _ = C[$];
            if (this[olO0O](A, _))B.push(_)
        }
        return B
    }, _getVisibleColumnsByColumn: function (A) {
        A = this[lolo0l](A);
        var C = this._visibleColumns, B = [];
        for (var $ = 0, D = C.length; $ < D; $++) {
            var _ = C[$];
            if (this[olO0O](A, _))B.push(_)
        }
        return B
    }, setColumns: function ($) {
        if (!mini.isArray($))$ = [];
        this._init();
        this.columns = $;
        this._columnsChanged()
    }, _columnsChanged: function () {
        this._updateColumnsView();
        this[ol1O0]("columnschanged")
    }, _updateColumnsView: function () {
        this._maxColumnLevel = 0;
        var level = 0;

        function init(column, index, parentColumn) {
            if (column.type) {
                if (!mini.isNull(column.header) && typeof column.header !== "function")if (column.header.trim() == "")delete column.header;
                var col = mini[ol1oO](column.type);
                if (col) {
                    var _column = mini.copyTo({}, column);
                    mini.copyTo(column, col);
                    mini.copyTo(column, _column)
                }
            }
            if (!column._id)column._id = mini.ColumnModel_ColumnID++;
            column._pid = parentColumn == this ? -1 : parentColumn._id;
            this.O1O0Oo[column._id] = column;
            if (column.name)this.O0o1O[column.name] = column;
            column._level = level;
            level += 1;
            this[oOl1OO](column, init, this);
            level -= 1;
            if (column._level > this._maxColumnLevel)this._maxColumnLevel = column._level;
            var width = parseInt(column.width);
            if (mini.isNumber(width) && String(width) == column.width)column.width = width + "px";
            if (mini.isNull(column.width))column.width = this._defaultColumnWidth + "px";
            column.visible = column.visible !== false;
            column[lO0oOO] = column[lO0oOO] !== false;
            column.allowMove = column.allowMove !== false;
            column.allowSort = column.allowSort === true;
            column.allowDrag = !!column.allowDrag;
            column[lOlo0] = !!column[lOlo0];
            column.autoEscape = !!column.autoEscape;
            column.enabled = column.enabled !== false;
            column.showCellTip = column.showCellTip !== false;
            column.valueFromSelect = column.valueFromSelect !== false;
            column.vtype = column.vtype || "";
            if (typeof column.filter == "string")column.filter = eval("(" + column.filter + ")");
            if (column.filter && !column.filter.el)column.filter = mini.create(column.filter);
            if (typeof column.init == "function" && column.inited != true)column.init(this.owner);
            column.inited = true;
            column._gridUID = this.owner.uid;
            column[O0O00o] = this.owner[O0O00o]
        }

        this[oOl1OO](this, init, this);
        this._createColumnsRow();
        var index = 0, view = this._visibleColumns = [], bottoms = this.lo10oO = [];
        this.cascadeColumns(this, function ($) {
            if (!$.columns || $.columns.length == 0) {
                bottoms.push($);
                if (this[l0ll]($)) {
                    view.push($);
                    $._index = index++
                }
            }
        }, this);
        this._fieldColumns = {};
        var columns = this.getAllColumns();
        for (var i = 0, l = columns.length; i < l; i++) {
            var column = columns[i];
            if (column.field && !this._fieldColumns[column.field])this._fieldColumns[column.field] = column
        }
        this._createFrozenColSpan()
    }, _frozenStartColumn: -1, _frozenEndColumn: -1, isFrozen: function () {
        return this._frozenStartColumn >= 0 && this._frozenEndColumn >= this._frozenStartColumn
    }, isFrozenColumn: function (_) {
        if (!this[O0O0oO]())return false;
        _ = this[lolo0l](_);
        if (!_)return false;
        var $ = this.getVisibleColumns()[o110ll](_);
        return this._frozenStartColumn <= $ && $ <= this._frozenEndColumn
    }, frozen: function ($, _) {
        $ = this[lolo0l]($);
        _ = this[lolo0l](_);
        var A = this.getVisibleColumns();
        this._frozenStartColumn = A[o110ll]($);
        this._frozenEndColumn = A[o110ll](_);
        if ($ && _)this._columnsChanged()
    }, unFrozen: function () {
        this._frozenStartColumn = -1;
        this._frozenEndColumn = -1;
        this._columnsChanged()
    }, setFrozenStartColumn: function ($) {
        this.frozen($, this._frozenEndColumn)
    }, setFrozenEndColumn: function ($) {
        this.frozen(this._frozenStartColumn, $)
    }, getFrozenColumns: function () {
        var A = [], _ = this[O0O0oO]();
        for (var $ = 0, B = this._visibleColumns.length; $ < B; $++)if (_ && this._frozenStartColumn <= $ && $ <= this._frozenEndColumn)A.push(this._visibleColumns[$]);
        return A
    }, getUnFrozenColumns: function () {
        var A = [], _ = this[O0O0oO]();
        for (var $ = 0, B = this._visibleColumns.length; $ < B; $++)if ((_ && $ > this._frozenEndColumn) || !_)A.push(this._visibleColumns[$]);
        return A
    }, getFrozenColumnsRow: function () {
        return this[O0O0oO]() ? this._columnsRow1 : []
    }, getUnFrozenColumnsRow: function () {
        return this[O0O0oO]() ? this._columnsRow2 : this.getVisibleColumnsRow()
    }, _createFrozenColSpan: function () {
        var G = this, N = this.getVisibleColumns(), B = this._frozenStartColumn, D = this._frozenEndColumn;

        function F(E, C) {
            var F = G.isBottomColumn(E) ? [E] : G._getVisibleColumnsByColumn(E);
            for (var _ = 0, H = F.length; _ < H; _++) {
                var A = F[_], $ = N[o110ll](A);
                if (C == 0 && $ < B)return true;
                if (C == 1 && B <= $ && $ <= D)return true;
                if (C == 2 && $ > D)return true
            }
            return false
        }

        function _(D, A) {
            var E = mini.treeToList(D.columns, "columns"), B = 0;
            for (var $ = 0, C = E.length; $ < C; $++) {
                var _ = E[$];
                if (G[l0ll](_) == false || F(_, A) == false)continue;
                if (!_.columns || _.columns.length == 0)B += 1
            }
            return B
        }

        var $ = mini.treeToList(this.columns, "columns");
        for (var K = 0, I = $.length; K < I; K++) {
            var E = $[K];
            delete E.colspan0;
            delete E.colspan1;
            delete E.colspan2;
            delete E.viewIndex0;
            delete E.viewIndex1;
            delete E.viewIndex2;
            if (this[O0O0oO]()) {
                if (E.columns && E.columns.length > 0) {
                    E.colspan1 = _(E, 1);
                    E.colspan2 = _(E, 2);
                    E.colspan0 = _(E, 0)
                } else {
                    E.colspan1 = 1;
                    E.colspan2 = 1;
                    E.colspan0 = 1
                }
                if (F(E, 0))E["viewIndex" + 0] = true;
                if (F(E, 1))E["viewIndex" + 1] = true;
                if (F(E, 2))E["viewIndex" + 2] = true
            }
        }
        var J = this._getMaxColumnLevel();
        this._columnsRow1 = [];
        this._columnsRow2 = [];
        for (K = 0, I = this._visibleColumnsRow.length; K < I; K++) {
            var H = this._visibleColumnsRow[K], L = [], O = [];
            this._columnsRow1.push(L);
            this._columnsRow2.push(O);
            for (var M = 0, A = H.length; M < A; M++) {
                var C = H[M];
                if (C.viewIndex1)L.push(C);
                if (C.viewIndex2)O.push(C)
            }
        }
    }, _createColumnsRow: function () {
        var _ = this._getMaxColumnLevel(), F = [], D = [];
        for (var C = 0, H = _; C <= H; C++) {
            F.push([]);
            D.push([])
        }
        var G = this;

        function A(C) {
            var D = mini.treeToList(C.columns, "columns"), A = 0;
            for (var $ = 0, B = D.length; $ < B; $++) {
                var _ = D[$];
                if (G[l0ll](_) == false)continue;
                if (!_.columns || _.columns.length == 0)A += 1
            }
            return A
        }

        var $ = mini.treeToList(this.columns, "columns");
        for (C = 0, H = $.length; C < H; C++) {
            var E = $[C], B = F[E._level], I = D[E._level];
            delete E.rowspan;
            delete E.colspan;
            if (E.columns && E.columns.length > 0)E.colspan = A(E);
            if ((!E.columns || E.columns.length == 0) && E._level < _)E.rowspan = _ - E._level + 1;
            B.push(E);
            if (this[l0ll](E))I.push(E)
        }
        this._columnsRow = F;
        this._visibleColumnsRow = D
    }, _getMaxColumnLevel: function () {
        return this._maxColumnLevel
    }, cascadeColumns: function (A, E, B) {
        if (!E)return;
        var D = A.columns;
        if (D) {
            D = D.clone();
            for (var $ = 0, C = D.length; $ < C; $++) {
                var _ = D[$];
                if (E[o1O0l0](B || this, _, $, A) === false)return;
                this.cascadeColumns(_, E, B)
            }
        }
    }, eachColumns: function (B, F, C) {
        var D = B.columns;
        if (D) {
            var _ = D.clone();
            for (var A = 0, E = _.length; A < E; A++) {
                var $ = _[A];
                if (F[o1O0l0](C, $, A, B) === false)break
            }
        }
    }, getColumn: function ($) {
        var _ = typeof $;
        if (_ == "number")return this.lo10oO[$]; else if (_ == "object")return $; else return this.O0o1O[$]
    }, getColumnByField: function ($) {
        if (!$)return null;
        return this._fieldColumns[$]
    }, l001O: function ($) {
        return this.O1O0Oo[$]
    }, _getDataTypeByField: function (A) {
        var C = "string", B = this[O1o10]();
        for (var $ = 0, D = B.length; $ < D; $++) {
            var _ = B[$];
            if (_.field == A) {
                if (_.sortType)C = _.sortType.toLowerCase(); else if (_.dataType)C = _.dataType.toLowerCase();
                break
            }
        }
        return C
    }, getParentColumn: function ($) {
        $ = this[lolo0l]($);
        var _ = $._pid;
        if (_ == -1)return this;
        return this.O1O0Oo[_]
    }, getAncestorColumns: function (A) {
        var _ = [A];
        while (1) {
            var $ = this[l1Ol1](A);
            if (!$ || $ == this)break;
            _[_.length] = $;
            A = $
        }
        _.reverse();
        return _
    }, isAncestorColumn: function (_, B) {
        if (_ == B)return true;
        if (!_ || !B)return false;
        var A = this[O0lo1l](B);
        for (var $ = 0, C = A.length; $ < C; $++)if (A[$] == _)return true;
        return false
    }, isVisibleColumn: function (B) {
        B = this[lolo0l](B);
        if (B.visible == false)return false;
        var C = this[O0lo1l](B);
        for (var $ = 0, E = C.length; $ < E; $++)if (C[$].visible == false)return false;
        var D = B.columns;
        if (D) {
            var _ = true;
            for ($ = 0, E = D.length; $ < E; $++) {
                var A = D[$];
                if (this[l0ll](A)) {
                    _ = false;
                    break
                }
            }
            if (_)return false
        }
        return true
    }, isBottomColumn: function ($) {
        $ = this[lolo0l]($);
        return !($.columns && $.columns.length > 0)
    }, updateColumn: function ($, _) {
        $ = this[lolo0l]($);
        if (!$)return;
        mini.copyTo($, _);
        this._columnsChanged()
    }, moveColumn: function (C, _, A) {
        C = this[lolo0l](C);
        _ = this[lolo0l](_);
        if (!C || !_ || !A || C == _)return;
        if (this[olO0O](C, _))return;
        var D = this[l1Ol1](C);
        if (D)D.columns.remove(C);
        var B = _, $ = A;
        if ($ == "before") {
            B = this[l1Ol1](_);
            $ = B.columns[o110ll](_)
        } else if ($ == "after") {
            B = this[l1Ol1](_);
            $ = B.columns[o110ll](_) + 1
        } else if ($ == "add" || $ == "append") {
            if (!B.columns)B.columns = [];
            $ = B.columns.length
        } else if (!mini.isNumber($))return;
        B.columns.insert($, C);
        this._columnsChanged()
    }, addColumn: function ($) {
        if (!$)return;
        delete $._id;
        this._columnsChanged()
    }, removeColumn: function () {
        this._columnsChanged()
    }
});
mini.GridView = function () {
    this._createTime = new Date();
    this._createColumnModel();
    this._bindColumnModel();
    this.data = [];
    this[oooo1]();
    this.OllO();
    this[l10loO]();
    mini.GridView[ollolO][OOlOl].apply(this, arguments);
    this.lloO1l();
    this.O0ol();
    this[l0loO0]()
};
oo00(mini.GridView, lolo00, {
    OoOoo1: "block",
    _rowIdField: "_id",
    width: "100%",
    showSortIcon: false,
    showColumns: true,
    showFilterRow: false,
    showSummaryRow: false,
    showPager: false,
    allowCellWrap: false,
    allowHeaderWrap: false,
    showModified: true,
    showNewRow: true,
    showEmptyText: false,
    emptyText: "No data returned.",
    showHGridLines: true,
    showVGridLines: true,
    allowAlternating: false,
    o0O1Oo: "mini-grid-row-alt",
    lO00o: "mini-grid-row",
    _cellCls: "mini-grid-cell",
    _headerCellCls: "mini-grid-headerCell",
    lOOOOl: "mini-grid-row-selected",
    lO1Oo: "mini-grid-row-hover",
    olllll: "mini-grid-cell-selected",
    defaultRowHeight: 21,
    fixedRowHeight: false,
    isFixedRowHeight: function () {
        return this.fixedRowHeight
    },
    fitColumns: true,
    isFitColumns: function () {
        return this.fitColumns
    },
    uiCls: "mini-gridview",
    _create: function () {
        mini.GridView[ollolO][lololl][o1O0l0](this);
        var A = this.el;
        l1Oo(A, "mini-grid");
        l1Oo(this._borderEl, "mini-grid-border");
        l1Oo(this.olOOO0, "mini-grid-viewport");
        var C = "<div class=\"mini-grid-pager\"></div>", $ = "<div class=\"mini-grid-filterRow\"><div class=\"mini-grid-filterRow-view\"></div><div class=\"mini-grid-scrollHeaderCell\"></div></div>", _ = "<div class=\"mini-grid-summaryRow\"><div class=\"mini-grid-summaryRow-view\"></div><div class=\"mini-grid-scrollHeaderCell\"></div></div>", B = "<div class=\"mini-grid-columns\"><div class=\"mini-grid-columns-view\"></div><div class=\"mini-grid-scrollHeaderCell\"></div></div>";
        this._columnsEl = mini.after(this.O1Ool0, B);
        this.olo0O0 = mini.after(this._columnsEl, $);
        this._rowsEl = this.Ol01;
        l1Oo(this._rowsEl, "mini-grid-rows");
        this.l0000o = mini.after(this._rowsEl, _);
        this._bottomPagerEl = mini.after(this.l0000o, C);
        this._columnsViewEl = this._columnsEl.childNodes[0];
        this._rowsViewEl = mini.append(this._rowsEl, "<div class=\"mini-grid-rows-view\"><div class=\"mini-grid-rows-content\"></div></div>");
        this._rowsViewContentEl = this._rowsViewEl.firstChild;
        this._filterViewEl = this.olo0O0.childNodes[0];
        this._summaryViewEl = this.l0000o.childNodes[0];
        var D = "<a href=\"#\" class=\"mini-grid-focus\" style=\"position:absolute;left:0px;top:0px;width:0px;height:0px;outline:none;\" hideFocus onclick=\"return false\" ></a>";
        this._focusEl = mini.append(this._borderEl, D)
    },
    destroy: function (A) {
        if (this._dataSource) {
            this._dataSource[l0lOl]();
            this._dataSource = null
        }
        if (this._columnModel) {
            this._columnModel[l0lOl]();
            this._columnModel = null
        }
        if (this._pagers) {
            var _ = this._pagers.clone();
            for (var $ = 0, B = _.length; $ < B; $++)_[$][l0lOl](A);
            this._pagers = null
        }
        if (this.olOOO0)mini[o11l00](this.olOOO0);
        if (this._rowsViewEl)mini[o11l00](this._rowsViewEl);
        if (this._rowsEl)mini[o11l00](this._rowsEl);
        if (this._vscrollEl)mini[o11l00](this._vscrollEl);
        if (this.OlOl0l)mini[o11l00](this.OlOl0l);
        if (this._columnsEl) {
            jQuery(this._columnsEl).unbind("mouseenter");
            jQuery(this._columnsEl).unbind("mouseleave")
        }
        this._columnsEl = this._rowsEl = this.olo0O0 = this.l0000o = this._bottomPagerEl = null;
        this._columnsViewEl = this._topRightCellEl = this._rowsViewEl = this._rowsViewContentEl = null;
        this._filterViewEl = this._summaryViewEl = this._focusEl = null;
        this.olOOO0 = this._vscrollEl = this._bottomPager = null;
        mini.GridView[ollolO][l0lOl][o1O0l0](this, A)
    },
    _initEvents: function () {
        mini.GridView[ollolO][lOo101][o1O0l0](this);
        Ol1O(this._rowsViewEl, "scroll", this.__OnRowViewScroll, this)
    },
    _sizeChanged: function () {
        mini.GridView[ollolO][Ol1o10][o1O0l0](this);
        var $ = this[l0111O]();
        if (mini.isIE)if ($)l1Oo(this._rowsViewEl, "mini-grid-hidden-y"); else o11o(this._rowsViewEl, "mini-grid-hidden-y")
    },
    _setBodyWidth: false,
    doLayout: function () {
        var A = this;
        if (!this[Ooo1oo]())return;
        mini.GridView[ollolO][l0llOO][o1O0l0](this);
        this[ll0o0l]();
        var E = this[l0111O](), D = this._columnsViewEl.firstChild, B = this._rowsViewContentEl.firstChild, _ = this._filterViewEl.firstChild, $ = this._summaryViewEl.firstChild;

        function G($) {
            if (this.isFitColumns()) {
                B.style.width = "100%";
                if (mini.isSafari || mini.isChrome || mini.isIE6)$.style.width = B.offsetWidth + "px"; else if (this._rowsViewEl.scrollHeight > this._rowsViewEl.clientHeight + 1) {
                    $.style.width = "100%";
                    $.parentNode.style.width = "auto";
                    $.parentNode.style["paddingRight"] = mini.getScrollOffset() + "px";
                    if (mini.isIE8)o11o(this._rowsViewEl, "mini-grid-hidden-y")
                } else {
                    $.style.width = "100%";
                    $.parentNode.style.width = "auto";
                    $.parentNode.style["paddingRight"] = "0px";
                    if (mini.isIE8)l1Oo(this._rowsViewEl, "mini-grid-hidden-y")
                }
            } else {
                B.style.width = "0px";
                $.style.width = "0px";
                if (mini.isSafari || mini.isChrome || mini.isIE6); else {
                    $.parentNode.style.width = "100%";
                    $.parentNode.style["paddingRight"] = "0px"
                }
            }
        }

        G[o1O0l0](this, D);
        G[o1O0l0](this, _);
        G[o1O0l0](this, $);
        this._syncScroll();
        var F = this;
        setTimeout(function () {
            mini.layout(F.olo0O0);
            mini.layout(F.l0000o)
        }, 10);
        if (mini.isIE6)setTimeout(function () {
            G[o1O0l0](A, D)
        }, 1);
        if (mini.isIE10) {
            setTimeout(function () {
                if (F.isFitColumns()) {
                    D.style.width = "auto";
                    D.offsetWidth;
                    D.style.width = "100%"
                } else D.style.width = "0px"
            }, 0);
            mini[oOo01o](B)
        }
        this._topRightCellEl = this._columnsViewEl.childNodes[1];
        if (mini.isIE6)this._topRightCellEl.style.height = jQuery(this._columnsViewEl).height() + "px";
        if (mini.isIE6 || mini.isIE7) {
            this._rowsViewContentEl.style["paddingBottom"] = "0px";
            if (E) {
                var C = this._rowsViewEl.scrollWidth > this._rowsViewEl.clientWidth + 1;
                if (C)this._rowsViewContentEl.style["paddingBottom"] = "17px"
            }
        }
    },
    setBody: function () {
    },
    _createTopRowHTML: function (B) {
        var E = "";
        if (mini.isIE) {
            if (mini.isIE6 || mini.isIE7 || !mini.boxModel)E += "<tr style=\"display:none;height:0px;\">"; else E += "<tr style=\"height:0px;\">"
        } else E += "<tr style=\"height:0px;\">";
        if (this._userEmptyTd !== false)E += "<td style=\"height:0px;width:0;\"></td>";
        for (var $ = 0, C = B.length; $ < C; $++) {
            var A = B[$], _ = A.width, D = A._id;
            E += "<td id=\"" + D + "\" style=\"padding:0;border:0;margin:0;height:0px;";
            if (A.width)E += "width:" + A.width;
            E += "\" ></td>"
        }
        E += "<td style=\"width:0px;\"></td>";
        E += "</tr>";
        return E
    },
    _createColumnsHTML: function (B, L, P) {
        var P = P ? P : this.getVisibleColumns(), I = ["<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
        I.push(this._createTopRowHTML(P));
        var N = this[l1lOoo](), F = this[Olo1ol]();
        for (var M = 0, _ = B.length; M < _; M++) {
            var G = B[M];
            I[I.length] = "<tr>";
            I[I.length] = "<td style=\"width:0;\"></td>";
            for (var J = 0, H = G.length; J < H; J++) {
                var D = G[J], A = D.sortField || D.field, O = this.oOl0o0Text(D, L), K = this.oo1loId(D, L), $ = "";
                if (N && N == A)$ = F == "asc" ? "mini-grid-asc" : "mini-grid-desc";
                var E = "";
                if (this.allowHeaderWrap == false)E = " mini-grid-headerCell-nowrap ";
                I[I.length] = "<td id=\"";
                I[I.length] = K;
                I[I.length] = "\" class=\"mini-grid-headerCell " + $ + " " + (D.headerCls || "") + " ";
                var C = !(D.columns && D.columns.length > 0);
                if (C)I[I.length] = " mini-grid-bottomCell ";
                if (J == H - 1)I[I.length] = " mini-grid-rightCell ";
                I[I.length] = "\" style=\"";
                if (D.headerStyle)I[I.length] = D.headerStyle + ";";
                if (D.headerAlign)I[I.length] = "text-align:" + D.headerAlign + ";";
                I[I.length] = "\" ";
                if (D.rowspan)I[I.length] = "rowspan=\"" + D.rowspan + "\" ";
                this._createColumnColSpan(D, I, L);
                I[I.length] = "><div class=\"mini-grid-headerCell-outer\"><div class=\"mini-grid-headerCell-inner " + E + "\">";
                I[I.length] = O;
                if ($)I[I.length] = "<span class=\"mini-grid-sortIcon\"></span>"; else if (this.showSortIcon)if (D.allowSort)I[I.length] = "<span class=\"mini-grid-allowsort\"></span>";
                I[I.length] = "</div><div id=\"" + D._id + "\" class=\"mini-grid-column-splitter\"></div>";
                I[I.length] = "</div></td>"
            }
            if (this[O0O0oO]() && L == 1) {
                I[I.length] = "<td class=\"mini-grid-headerCell\" style=\"width:0;\"><div class=\"mini-grid-headerCell-inner\" style=\"";
                I[I.length] = "\">0</div></td>"
            }
            I[I.length] = "</tr>"
        }
        I.push("</table>");
        return I.join("")
    },
    oOl0o0Text: function (_, $) {
        var A = _.header;
        if (typeof A == "function")A = A[o1O0l0](this, _);
        if (mini.isNull(A) || A === "")A = "&nbsp;";
        return A
    },
    _createColumnColSpan: function (_, A, $) {
        if (_.colspan)A[A.length] = "colspan=\"" + _.colspan + "\" "
    },
    doUpdateColumns: function () {
        var A = this._columnsViewEl.scrollLeft, _ = this.getVisibleColumnsRow(), $ = this._createColumnsHTML(_, 2), B = "<div class=\"mini-grid-topRightCell\"></div>";
        $ += B;
        this._columnsViewEl.innerHTML = $;
        this._columnsViewEl.scrollLeft = A
    },
    doUpdate: function () {
        if (this.canUpdate() == false)return;
        var $ = this, D = this._isCreating(), B = new Date();
        this.O0ol();
        var C = this, A = this.getScrollLeft();

        function _() {
            if (!C.el)return;
            C.doUpdateColumns();
            C.doUpdateRows();
            C[l0llOO]();
            C._doUpdateTimer = null
        }

        C.doUpdateColumns();
        if (D)this._useEmptyView = true;
        this._doRemoveRowContent();
        C.doUpdateRows();
        if (A > 0 && C.isVirtualScroll())C.setScrollLeft(A);
        if (D)this._useEmptyView = false;
        C[l0llOO]();
        if (D && !this._doUpdateTimer)this._doUpdateTimer = setTimeout(_, 15);
        this[oolo1o]();
        if ($._fireUpdateTimer) {
            clearTimeout($._fireUpdateTimer);
            $._fireUpdateTimer = null
        }
        $._fireUpdateTimer = setTimeout(function () {
            $._fireUpdateTimer = null;
            $[ol1O0]("update")
        }, 100)
    },
    _doRemoveRowContent: function () {
        if (this._rowsViewContentEl && this._rowsViewContentEl.firstChild)this._rowsViewContentEl.removeChild(this._rowsViewContentEl.firstChild);
        if (this._rowsLockContentEl && this._rowsLockContentEl.firstChild)this._rowsLockContentEl.removeChild(this._rowsLockContentEl.firstChild)
    },
    _isCreating: function () {
        return (new Date() - this._createTime) < 1000
    },
    deferUpdate: function ($) {
        if (!$)$ = 5;
        if (this._updateTimer || this._doUpdateTimer)return;
        var _ = this;
        this._updateTimer = setTimeout(function () {
            _._updateTimer = null;
            _[l0loO0]()
        }, $)
    },
    _pushUpdateCallback: function (B, A, _) {
        var $ = 0;
        if (this._doUpdateTimer || this._updateTimer)$ = 20;
        if ($ == 0)B.apply(A, _); else setTimeout(function () {
            B.apply(A, _)
        }, $)
    },
    _updateCount: 0,
    beginUpdate: function () {
        this._updateCount++
    },
    endUpdate: function ($) {
        this._updateCount--;
        if (this._updateCount == 0 || $ === true) {
            this._updateCount = 0;
            this[l0loO0]()
        }
    },
    canUpdate: function () {
        return this._updateCount == 0
    },
    setDefaultRowHeight: function ($) {
        this.defaultRowHeight = $
    },
    getDefaultRowHeight: function () {
        return this.defaultRowHeight
    },
    _getRowHeight: function ($) {
        var _ = this.defaultRowHeight;
        if ($._height) {
            _ = parseInt($._height);
            if (isNaN(parseInt($._height)))_ = rowHeight
        }
        _ -= 4;
        _ -= 1;
        return _
    },
    _createGroupingHTML: function (D, I) {
        var H = this.getGroupingView(), B = this._showGroupSummary, M = this[O0O0oO](), N = 0, E = this;

        function O(C, _) {
            G.push("<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">");
            if (D.length > 0) {
                G.push(E._createTopRowHTML(D));
                for (var F = 0, $ = C.length; F < $; F++) {
                    var A = C[F];
                    E.lO0lloHTML(A, N++, D, I, G)
                }
            }
            if (B);
            G.push("</table>")
        }

        var A = this.groupTitleCollapsible !== false, G = ["<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
        G.push(this._createTopRowHTML(D));
        for (var L = 0, $ = H.length; L < $; L++) {
            if (I == 1 && !this[O0O0oO]())continue;
            var _ = H[L], F = this.lO0lloGroupId(_, I), J = this.lO0lloGroupRowsId(_, I), P = this.lOo01o(_), C = _.expanded ? "" : " mini-grid-group-collapse ";
            G[G.length] = "<tr id=\"";
            G[G.length] = F;
            G[G.length] = "\" class=\"mini-grid-groupRow";
            G[G.length] = C;
            G[G.length] = "\"><td style=\"width:0;\"></td><td class=\"mini-grid-groupCell ";
            G[G.length] = P.cls;
            G[G.length] = "\" style=\"";
            G[G.length] = P.style;
            G[G.length] = "\" colspan=\"";
            G[G.length] = D.length;
            G[G.length] = "\"><div class=\"mini-grid-groupHeader ";
            if (A)G[G.length] = "mini-grid-groupHeader-collapsible";
            G[G.length] = "\">";
            if (!M || (M && I == 1)) {
                G[G.length] = "<div class=\"mini-grid-group-ecicon\"></div>";
                G[G.length] = "<div class=\"mini-grid-groupTitle\">" + P.cellHtml + "</div>"
            } else G[G.length] = "&nbsp;";
            G[G.length] = "</div></td></tr>";
            var K = _.expanded ? "" : "display:none";
            G[G.length] = "<tr class=\"mini-grid-groupRows-tr\" style=\"";
            G[G.length] = "\"><td style=\"width:0;\"></td><td class=\"mini-grid-groupRows-td\" colspan=\"";
            G[G.length] = D.length;
            G[G.length] = "\"><div id=\"";
            G[G.length] = J;
            G[G.length] = "\" class=\"mini-grid-groupRows\" style=\"";
            G[G.length] = K;
            G[G.length] = "\">";
            O(_.rows, _);
            G[G.length] = "</div></td></tr>"
        }
        G.push("</table>");
        return G.join("")
    },
    _isFastCreating: function () {
        var $ = this.getVisibleRows();
        if ($.length > 50)return this._isCreating() || this.getScrollTop() < 50 * this._defaultRowHeight;
        return false
    },
    isShowRowDetail: function ($) {
        return false
    },
    isCellValid: function ($, _) {
        return true
    },
    lO0lloHTML: function ($, Q, F, O, I) {
        var R = !I;
        if (!I)I = [];
        var C = "", A = this.isFixedRowHeight();
        if (A)C = this[O01ooo]($);
        var L = -1, M = " ", J = -1, N = " ";
        I[I.length] = "<tr class=\"mini-grid-row ";
        if ($._state == "added" && this.showNewRow)I[I.length] = "mini-grid-newRow ";
        if (this[oo0OOO]($))I[I.length] = "mini-grid-expandRow ";
        if (this[ooOl00] && Q % 2 == 1) {
            I[I.length] = this.o0O1Oo;
            I[I.length] = " "
        }
        var E = this._dataSource[Olo1o1]($);
        if (E) {
            I[I.length] = this.lOOOOl;
            I[I.length] = " "
        }
        L = I.length;
        I[I.length] = M;
        I[I.length] = "\" style=\"";
        J = I.length;
        I[I.length] = N;
        if ($.visible === false)I[I.length] = ";display:none;";
        I[I.length] = "\" id=\"";
        I[I.length] = this.ooo0ll($, O);
        I[I.length] = "\">";
        if (this._userEmptyTd !== false)I[I.length] = "<td style=\"width:0;\"></td>";
        var _ = this.ll11;
        for (var K = 0, G = F.length; K < G; K++) {
            var B = F[K], H = this.o0Ol($, B), D = "", U = this[lOl01]($, B, Q, B._index);
            if (U.cellHtml === null || U.cellHtml === undefined || U.cellHtml === "")U.cellHtml = "&nbsp;";
            I[I.length] = "<td ";
            if (U.rowSpan)I[I.length] = "rowspan=\"" + U.rowSpan + "\"";
            if (U.colSpan)I[I.length] = "colspan=\"" + U.colSpan + "\"";
            I[I.length] = " id=\"";
            I[I.length] = H;
            I[I.length] = "\" class=\"mini-grid-cell ";
            if (!this.isCellValid($, B))I[I.length] = " mini-grid-cell-error ";
            if (K == G - 1)I[I.length] = " mini-grid-rightCell ";
            if (U.cellCls)I[I.length] = " " + U.cellCls + " ";
            if (D)I[I.length] = D;
            if (_ && _[0] == $ && _[1] == B) {
                I[I.length] = " ";
                I[I.length] = this.olllll
            }
            I[I.length] = "\" style=\"";
            if (U[olO0lo] == false)I[I.length] = "border-bottom:0;";
            if (U[Oo1lO] == false)I[I.length] = "border-right:0;";
            if (!U.visible)I[I.length] = "display:none;";
            if (B.align) {
                I[I.length] = "text-align:";
                I[I.length] = B.align;
                I[I.length] = ";"
            }
            if (U.cellStyle)I[I.length] = U.cellStyle;
            I[I.length] = "\">";
            I[I.length] = "<div class=\"mini-grid-cell-inner ";
            if (!U.allowCellWrap)I[I.length] = " mini-grid-cell-nowrap ";
            if (U.cellInnerCls)I[I.length] = U.cellInnerCls;
            var P = B.field ? this._dataSource.isModified($, B.field) : false;
            if (P && this.showModified)I[I.length] = " mini-grid-cell-dirty";
            I[I.length] = "\" style=\"";
            if (A) {
                I[I.length] = "height:";
                I[I.length] = C;
                I[I.length] = "px;";
                I[I.length] = "line-height:";
                I[I.length] = C;
                I[I.length] = "px;"
            }
            if (U.cellInnerStyle)I[I.length] = U.cellInnerStyle;
            I[I.length] = "\">";
            I[I.length] = U.cellHtml;
            I[I.length] = "</div>";
            I[I.length] = "</td>";
            if (U.rowCls)M = U.rowCls;
            if (U.rowStyle)N = U.rowStyle
        }
        if (this[O0O0oO]() && O == 1) {
            I[I.length] = "<td class=\"mini-grid-cell\" style=\"width:0;";
            if (this[olO0lo] == false)I[I.length] = "border-bottom:0;";
            I[I.length] = "\"><div class=\"mini-grid-cell-inner\" style=\"";
            if (A) {
                I[I.length] = "height:";
                I[I.length] = C;
                I[I.length] = "px;"
            }
            I[I.length] = "\">0</div></td>"
        }
        I[L] = M;
        I[J] = N;
        I[I.length] = "</tr>";
        if (R) {
            var T = I.join(""), S = /(<script(.*)<\/script(\s*)>)/i;
            T = T.replace(S, "");
            return T
        }
    },
    lO0llosHTML: function (B, F, G, E) {
        G = G || this.getVisibleRows();
        var C = ["<table class=\"mini-grid-table mini-grid-rowstable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
        C.push(this._createTopRowHTML(B, true));
        var J = this.uid + "$emptytext" + F;
        if (F == 2 && this._dataSource.loaded) {
            var H = (this.showEmptyText && G.length == 0) ? "" : "display:none;";
            C.push("<tr id=\"" + J + "\" style=\"" + H + "\"><td style=\"width:0\"></td><td class=\"mini-grid-emptyText\" colspan=\"" + B.length + "\">" + this[o0oOOO] + "</td></tr>")
        }
        var D = 0;
        if (G.length > 0) {
            var A = G[0];
            D = this.getVisibleRows()[o110ll](A)
        }
        for (var I = 0, _ = G.length; I < _; I++) {
            var K = D + I, $ = G[I];
            this.lO0lloHTML($, K, B, F, C)
        }
        if (E)C.push(E);
        C.push("</table>");
        return C.join("")
    },
    doUpdateRows: function () {
        var _ = this.getVisibleRows(), A = new Date(), B = this.getVisibleColumns();
        if (this[oOO1o]()) {
            var $ = this._createGroupingHTML(B, 2);
            this._rowsViewContentEl.innerHTML = $
        } else {
            $ = this.lO0llosHTML(B, 2, _);
            this._rowsViewContentEl.innerHTML = $
        }
    },
    _createFilterRowHTML: function (B, _) {
        var F = ["<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
        F.push(this._createTopRowHTML(B));
        F[F.length] = "<tr>";
        F[F.length] = "<td style=\"width:0;\"></td>";
        for (var $ = 0, C = B.length; $ < C; $++) {
            var A = B[$], E = this.oo1O1l(A);
            F[F.length] = "<td id=\"";
            F[F.length] = E;
            F[F.length] = "\" class=\"mini-grid-filterCell\" style=\"";
            F[F.length] = "\">&nbsp;</td>"
        }
        F[F.length] = "</tr></table><div class=\"mini-grid-scrollHeaderCell\"></div>";
        var D = F.join("");
        return D
    },
    _doRenderFilters: function () {
        var B = this.getVisibleColumns();
        for (var $ = 0, C = B.length; $ < C; $++) {
            var A = B[$];
            if (A.filter) {
                var _ = this.getFilterCellEl(A);
                if (_) {
                    _.innerHTML = "";
                    A.filter[O1OO10](_)
                }
            }
        }
    },
    lloO1l: function () {
        if (this._filterViewEl.firstChild)this._filterViewEl.removeChild(this._filterViewEl.firstChild);
        var _ = this[O0O0oO](), A = this.getVisibleColumns(), $ = this._createFilterRowHTML(A, 2);
        this._filterViewEl.innerHTML = $;
        this._doRenderFilters()
    },
    _createSummaryRowHTML: function (C, A) {
        var _ = this.getDataView(), G = ["<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
        G.push(this._createTopRowHTML(C));
        G[G.length] = "<tr>";
        G[G.length] = "<td style=\"width:0;\"></td>";
        for (var $ = 0, D = C.length; $ < D; $++) {
            var B = C[$], F = this.oOOlo(B), H = this._OnDrawSummaryCell(_, B);
            G[G.length] = "<td id=\"";
            G[G.length] = F;
            G[G.length] = "\" class=\"mini-grid-summaryCell " + H.cellCls + "\" style=\"" + H.cellStyle + ";";
            G[G.length] = "\">";
            G[G.length] = H.cellHtml;
            G[G.length] = "</td>"
        }
        G[G.length] = "</tr></table><div class=\"mini-grid-scrollHeaderCell\"></div>";
        var E = G.join("");
        return E
    },
    O0ol: function () {
        if (!this[o0100l])return;
        var _ = this.getVisibleColumns(), $ = this._createSummaryRowHTML(_, 2);
        this._summaryViewEl.innerHTML = $
    },
    lO1oOoByField: function (A, _) {
        if (!A)return null;
        var $ = this._columnModel._getDataTypeByField(A);
        this._dataSource._doClientSortField(A, _, $)
    },
    _expandGroupOnLoad: true,
    ooO01: 1,
    O0l1l1: "",
    OolOlO: "",
    groupBy: function ($, _) {
        if (!$)return;
        this.O0l1l1 = $;
        if (typeof _ == "string")_ = _.toLowerCase();
        this.OolOlO = _;
        this._createGroupingView();
        this.deferUpdate()
    },
    clearGroup: function () {
        this.O0l1l1 = "";
        this.OolOlO = "";
        this.lo01O = null;
        this.deferUpdate()
    },
    setGroupField: function ($) {
        this.groupBy($)
    },
    setGroupDir: function ($) {
        this.OolOlO = field;
        this.groupBy(this.O0l1l1, $)
    },
    isGrouping: function () {
        return this.O0l1l1 != ""
    },
    getGroupingView: function () {
        return this.lo01O
    },
    enableGroupOrder: true,
    _createGroupingView: function () {
        if (this[oOO1o]() == false)return;
        this.lo01O = null;
        var O = this._dataSource, M = this.O0l1l1, E = this.OolOlO;
        if (this.enableGroupOrder)this.lO1oOoByField(M, E);
        var K = this.getVisibleRows(), I = [], J = {};
        for (var H = 0, D = K.length; H < D; H++) {
            var $ = K[H], F = $[M], C = mini.isDate(F) ? F[OOo0o1]() : F, _ = J[C];
            if (!_) {
                _ = J[C] = {};
                _.field = M, _.dir = E;
                _.value = F;
                _.rows = [];
                I.push(_);
                _.id = "g" + this.ooO01++;
                _.expanded = this._expandGroupOnLoad
            }
            _.rows.push($)
        }
        var N = O.sortField, B = O.sortOrder;
        if (N) {
            var A = this._columnModel._getDataTypeByField(N), L = O._getSortFnByField(N, A);
            if (L) {
                var G = B == "desc";
                for (H = 0, D = I.length; H < D; H++) {
                    _ = I[H];
                    mini.sort(_.rows, L);
                    if (G)_.rows.reverse()
                }
            }
        }
        this.lo01O = I
    },
    lOo01o: function ($) {
        var _ = {
            group: $,
            rows: $.rows,
            field: $.field,
            dir: $.dir,
            value: $.value,
            cls: "",
            style: "",
            cellHtml: $.field + " (" + $.rows.length + " Items)"
        };
        this[ol1O0]("drawgroup", _);
        return _
    },
    getRowGroup: function (_) {
        var $ = typeof _;
        if ($ == "number")return this.getGroupingView()[_];
        if ($ == "string")return this._getRowGroupById(_);
        return _
    },
    _getRowGroupByEvent: function (B) {
        var _ = ol000(B.target, "mini-grid-groupRow");
        if (_) {
            var $ = _.id.split("$");
            if ($[0] != this._id)return null;
            var A = $[$.length - 1];
            return this._getRowGroupById(A)
        }
        return null
    },
    _getRowGroupById: function (C) {
        var _ = this.getGroupingView();
        for (var $ = 0, B = _.length; $ < B; $++) {
            var A = _[$];
            if (A.id == C)return A
        }
        return null
    },
    lO0lloGroupId: function ($, _) {
        return this._id + "$group" + _ + "$" + $.id
    },
    lO0lloGroupRowsId: function ($, _) {
        return this._id + "$grouprows" + _ + "$" + $.id
    },
    ooo0ll: function (_, $) {
        var A = this._id + "$row" + $ + "$" + _._id;
        return A
    },
    oo1loId: function (_, $) {
        var A = this._id + "$headerCell" + $ + "$" + _._id;
        return A
    },
    o0Ol: function ($, _) {
        var A = $._id + "$cell$" + _._id;
        return A
    },
    oo1O1l: function ($) {
        return this._id + "$filter$" + $._id
    },
    oOOlo: function ($) {
        return this._id + "$summary$" + $._id
    },
    getFilterCellEl: function ($) {
        $ = this[lolo0l]($);
        if (!$)return null;
        return document.getElementById(this.oo1O1l($))
    },
    getSummaryCellEl: function ($) {
        $ = this[lolo0l]($);
        if (!$)return null;
        return document.getElementById(this.oOOlo($))
    },
    _doVisibleEls: function () {
        mini.GridView[ollolO][o0l0lO][o1O0l0](this);
        this._columnsEl.style.display = this.showColumns ? "block" : "none";
        this.olo0O0.style.display = this[olOo11] ? "block" : "none";
        this.l0000o.style.display = this[o0100l] ? "block" : "none";
        this._bottomPagerEl.style.display = this.showPager ? "block" : "none"
    },
    setShowColumns: function ($) {
        this.showColumns = $;
        this[o0l0lO]();
        this[O0o0o1]()
    },
    setShowFilterRow: function ($) {
        this[olOo11] = $;
        this[o0l0lO]();
        this[O0o0o1]()
    },
    setShowSummaryRow: function ($) {
        this[o0100l] = $;
        this[o0l0lO]();
        this[O0o0o1]()
    },
    setShowPager: function ($) {
        this.showPager = $;
        this[o0l0lO]();
        this[O0o0o1]()
    },
    setFitColumns: function ($) {
        this.fitColumns = $;
        o11o(this.el, "mini-grid-fixwidth");
        if (this.fitColumns == false)l1Oo(this.el, "mini-grid-fixwidth");
        this[O0o0o1]()
    },
    getBodyHeight: function (_) {
        var $ = mini.GridView[ollolO][O0oo1O][o1O0l0](this, _);
        $ = $ - this.getColumnsHeight() - this.getFilterHeight() - this.getSummaryHeight() - this.getPagerHeight();
        return $
    },
    getColumnsHeight: function () {
        if (!this.showColumns)return 0;
        var $ = l010(this._columnsEl);
        return $
    },
    getFilterHeight: function () {
        return this[olOo11] ? l010(this.olo0O0) : 0
    },
    getSummaryHeight: function () {
        return this[o0100l] ? l010(this.l0000o) : 0
    },
    getPagerHeight: function () {
        return this.showPager ? l010(this._bottomPagerEl) : 0
    },
    getGridViewBox: function (_) {
        var $ = Ol0oO(this._columnsEl), A = Ol0oO(this.Ol01);
        $.height = A.bottom - $.top;
        $.bottom = $.top + $.height;
        return $
    },
    getSortField: function ($) {
        return this._dataSource.sortField
    },
    getSortOrder: function ($) {
        return this._dataSource.sortOrder
    },
    _createSource: function () {
        this._dataSource = new mini.DataTable()
    },
    OllO: function () {
        var $ = this._dataSource;
        $[Ol1oO1]("loaddata", this.__OnSourceLoadData, this);
        $[Ol1oO1]("cleardata", this.__OnSourceClearData, this)
    },
    __OnSourceLoadData: function ($) {
        this[l10loO]();
        this[l0loO0]()
    },
    __OnSourceClearData: function ($) {
        this[l10loO]();
        this[l0loO0]()
    },
    _initData: function () {
    },
    isFrozen: function () {
        var _ = this._columnModel._frozenStartColumn, $ = this._columnModel._frozenEndColumn;
        return this._columnModel[O0O0oO]()
    },
    _createColumnModel: function () {
        this._columnModel = new mini.ColumnModel(this)
    },
    _bindColumnModel: function () {
        this._columnModel[Ol1oO1]("columnschanged", this.__OnColumnsChanged, this)
    },
    __OnColumnsChanged: function ($) {
        this.columns = this._columnModel.columns;
        this.lloO1l();
        this.O0ol();
        this[l0loO0]();
        this[ol1O0]("columnschanged")
    },
    setColumns: function ($) {
        this._columnModel[OOll0]($);
        this.columns = this._columnModel.columns
    },
    getColumns: function () {
        return this._columnModel[l0000l]()
    },
    getBottomColumns: function () {
        return this._columnModel[O1o10]()
    },
    getVisibleColumnsRow: function () {
        var $ = this._columnModel.getVisibleColumnsRow().clone();
        return $
    },
    getVisibleColumns: function () {
        var $ = this._columnModel.getVisibleColumns().clone();
        return $
    },
    getFrozenColumns: function () {
        var $ = this._columnModel.getFrozenColumns().clone();
        return $
    },
    getUnFrozenColumns: function () {
        var $ = this._columnModel.getUnFrozenColumns().clone();
        return $
    },
    getColumn: function ($) {
        return this._columnModel[lolo0l]($)
    },
    updateColumn: function ($, _) {
        this._columnModel.updateColumn($, _)
    },
    showColumns: function (A) {
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = this[lolo0l](A[$]);
            if (!_)continue;
            _.visible = true
        }
        this._columnModel._columnsChanged()
    },
    hideColumns: function (A) {
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = this[lolo0l](A[$]);
            if (!_)continue;
            _.visible = false
        }
        this._columnModel._columnsChanged()
    },
    showColumn: function ($) {
        this.updateColumn($, {visible: true})
    },
    hideColumn: function ($) {
        this.updateColumn($, {visible: false})
    },
    moveColumn: function (A, $, _) {
        this._columnModel[l1o010](A, $, _)
    },
    removeColumn: function ($) {
        $ = this[lolo0l]($);
        if (!$)return;
        var _ = this[l1Ol1]($);
        if ($ && _) {
            _.columns.remove($);
            this._columnModel._columnsChanged()
        }
        return $
    },
    setDefaultColumnWidth: function ($) {
        this._columnModel._defaultColumnWidth = $
    },
    getDefaultColumnWidth: function () {
        return this._columnModel._defaultColumnWidth
    },
    setColumnWidth: function (_, $) {
        this.updateColumn(_, {width: $})
    },
    getColumnWidth: function (_) {
        var $ = this[OlooO](_);
        return $.width
    },
    getParentColumn: function ($) {
        return this._columnModel[l1Ol1]($)
    },
    getMaxColumnLevel: function () {
        return this._columnModel._getMaxColumnLevel()
    },
    _isCellVisible: function ($, _) {
        return true
    },
    _createDrawCellEvent: function ($, B, C, D) {
        var _ = mini._getMap(B.field, $), E = {
            sender: this,
            rowIndex: C,
            columnIndex: D,
            record: $,
            row: $,
            column: B,
            field: B.field,
            value: _,
            cellHtml: _,
            rowCls: "",
            rowStyle: null,
            cellCls: B.cellCls || "",
            cellStyle: B.cellStyle || "",
            allowCellWrap: this.allowCellWrap,
            showHGridLines: this.showHGridLines,
            showVGridLines: this.showVGridLines,
            cellInnerCls: "",
            cellInnnerStyle: "",
            autoEscape: B.autoEscape
        };
        E.visible = this[o00o10](C, D);
        if (E.visible == true && this._mergedCellMaps) {
            var A = this._mergedCellMaps[C + ":" + D];
            if (A) {
                E.rowSpan = A.rowSpan;
                E.colSpan = A.colSpan
            }
        }
        return E
    },
    _OnDrawCell: function ($, B, C, D) {
        var G = this[lo1000]($, B, C, D), _ = G.value;
        if (B.dateFormat)if (mini.isDate(G.value))G.cellHtml = mini.formatDate(_, B.dateFormat); else G.cellHtml = _;
        if (B.dataType == "float") {
            _ = parseFloat(G.value);
            if (!isNaN(_)) {
                decimalPlaces = parseInt(B[O1O1oo]);
                if (isNaN(decimalPlaces))decimalPlaces = 2;
                G.cellHtml = _.toFixed(decimalPlaces)
            }
        }
        if (B.dataType == "currency")G.cellHtml = mini.formatCurrency(G.value, B.currencyUnit);
        if (B.displayField)G.cellHtml = mini._getMap(B.displayField, $);
        if (B.numberFormat) {
            var F = parseFloat(G.cellHtml);
            if (!isNaN(F))G.cellHtml = mini.formatNumber(F, B.numberFormat)
        }
        if (G.autoEscape == true)G.cellHtml = mini.htmlEncode(G.cellHtml);
        var A = B.renderer;
        if (A) {
            var E = typeof A == "function" ? A : l1lOo(A);
            if (E)G.cellHtml = E[o1O0l0](B, G)
        }
        G.cellHtml = (G.cellHtml === 0 || G.cellHtml) ? String(G.cellHtml).trim() : "";
        this[ol1O0]("drawcell", G);
        if (G.cellHtml && !!G.cellHtml.unshift && G.cellHtml.length == 0)G.cellHtml = "&nbsp;";
        if (G.cellHtml === null || G.cellHtml === undefined || G.cellHtml === "")G.cellHtml = "&nbsp;";
        return G
    },
    _OnDrawSummaryCell: function (A, B) {
        var D = {
            result: this.getResultObject(),
            sender: this,
            data: A,
            column: B,
            field: B.field,
            value: "",
            cellHtml: "",
            cellCls: B.cellCls || "",
            cellStyle: B.cellStyle || "",
            allowCellWrap: this.allowCellWrap
        };
        if (B.summaryType) {
            var C = mini.summaryTypes[B.summaryType];
            if (C)D.value = C(A, B.field)
        }
        var $ = D.value;
        D.cellHtml = D.value;
        if (D.value && parseInt(D.value) != D.value && D.value.toFixed) {
            decimalPlaces = parseInt(B[O1O1oo]);
            if (isNaN(decimalPlaces))decimalPlaces = 2;
            D.cellHtml = parseFloat(D.value.toFixed(decimalPlaces))
        }
        if (B.dateFormat)if (mini.isDate(D.value))D.cellHtml = mini.formatDate($, B.dateFormat); else D.cellHtml = $;
        if (D.cellHtml)if (B.dataType == "currency")D.cellHtml = mini.formatCurrency(D.cellHtml, B.currencyUnit);
        var _ = B.summaryRenderer;
        if (_) {
            C = typeof _ == "function" ? _ : window[_];
            if (C)D.cellHtml = C[o1O0l0](B, D)
        }
        B.summaryValue = D.value;
        this[ol1O0]("drawsummarycell", D);
        if (D.cellHtml === null || D.cellHtml === undefined || D.cellHtml === "")D.cellHtml = "&nbsp;";
        return D
    },
    getScrollTop: function () {
        return this._rowsViewEl.scrollTop
    },
    setScrollTop: function ($) {
        this._rowsViewEl.scrollTop = $
    },
    getScrollLeft: function () {
        return this._rowsViewEl.scrollLeft
    },
    setScrollLeft: function ($) {
        this._rowsViewEl.scrollLeft = $
    },
    _syncScroll: function () {
        var $ = this._rowsViewEl.scrollLeft;
        this._filterViewEl.scrollLeft = $;
        this._summaryViewEl.scrollLeft = $;
        this._columnsViewEl.scrollLeft = $
    },
    __OnRowViewScroll: function ($) {
        this._syncScroll()
    },
    pagerType: "pager",
    getPagerType: function () {
        return this.pagerType
    },
    setPagerType: function (_) {
        this.pagerType = _;
        var $ = mini.create({type: this.pagerType});
        if ($)this._setBottomPager($)
    },
    _pagers: [],
    Oo10o1s: function () {
        this._pagers = [];
        var $ = new O1o0oO();
        this._setBottomPager($)
    },
    _setBottomPager: function ($) {
        $ = mini.create($);
        if (!$)return;
        if (this._bottomPager) {
            this[olo01](this._bottomPager);
            this._bottomPagerEl.removeChild(this._bottomPager.el)
        }
        this._bottomPager = $;
        $[O1OO10](this._bottomPagerEl);
        this[Oo1l0l]($)
    },
    bindPager: function ($) {
        this._pagers[llo10o]($)
    },
    unbindPager: function ($) {
        this._pagers.remove($)
    },
    setShowEmptyText: function ($) {
        this.showEmptyText = $;
        if (this.data.length == 0)this.deferUpdate()
    },
    getShowEmptyText: function () {
        return this.showEmptyText
    },
    setEmptyText: function ($) {
        this[o0oOOO] = $
    },
    getEmptyText: function () {
        return this[o0oOOO]
    },
    setShowModified: function ($) {
        this.showModified = $
    },
    getShowModified: function () {
        return this.showModified
    },
    setShowNewRow: function ($) {
        this.showNewRow = $
    },
    getShowNewRow: function () {
        return this.showNewRow
    },
    setAllowCellWrap: function ($) {
        this.allowCellWrap = $
    },
    getAllowCellWrap: function () {
        return this.allowCellWrap
    },
    setAllowHeaderWrap: function ($) {
        this.allowHeaderWrap = $
    },
    getAllowHeaderWrap: function () {
        return this.allowHeaderWrap
    },
    setEnableGroupOrder: function ($) {
        this.enableGroupOrder = $
    },
    getEnableGroupOrder: function () {
        return this.enableGroupOrder
    },
    setShowHGridLines: function ($) {
        if (this[olO0lo] != $) {
            this[olO0lo] = $;
            this.deferUpdate()
        }
    },
    getShowHGridLines: function () {
        return this[olO0lo]
    },
    setShowVGridLines: function ($) {
        if (this[Oo1lO] != $) {
            this[Oo1lO] = $;
            this.deferUpdate()
        }
    },
    getShowVGridLines: function () {
        return this[Oo1lO]
    },
    setShowSortIcon: function ($) {
        if (this.showSortIcon != $) {
            this.showSortIcon = $;
            this.deferUpdate()
        }
    },
    getShowSortIcon: function () {
        return this.showSortIcon
    }
});
mini.copyTo(mini.GridView.prototype, mini._DataTableApplys);
loOOl(mini.GridView, "gridview");
mini.FrozenGridView = function () {
    mini.FrozenGridView[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.FrozenGridView, mini.GridView, {
    isFixedRowHeight: function () {
        return this.fixedRowHeight
    }, frozenPosition: "left", isRightFrozen: function () {
        return this.frozenPosition == "right"
    }, _create: function () {
        mini.FrozenGridView[ollolO][lololl][o1O0l0](this);
        var _ = this.el, C = "<div class=\"mini-grid-columns-lock\"></div>", $ = "<div class=\"mini-grid-rows-lock\"><div class=\"mini-grid-rows-content\"></div></div>";
        this._columnsLockEl = mini.before(this._columnsViewEl, C);
        this._rowsLockEl = mini.before(this._rowsViewEl, $);
        this._rowsLockContentEl = this._rowsLockEl.firstChild;
        var A = "<div class=\"mini-grid-filterRow-lock\"></div>";
        this._filterLockEl = mini.before(this._filterViewEl, A);
        var B = "<div class=\"mini-grid-summaryRow-lock\"></div>";
        this._summaryLockEl = mini.before(this._summaryViewEl, B)
    }, _initEvents: function () {
        mini.FrozenGridView[ollolO][lOo101][o1O0l0](this);
        Ol1O(this._rowsEl, "mousewheel", this.__OnMouseWheel, this)
    }, oOl0o0Text: function (_, $) {
        var A = _.header;
        if (typeof A == "function")A = A[o1O0l0](this, _);
        if (mini.isNull(A) || A === "")A = "&nbsp;";
        if (this[O0O0oO]() && $ == 2)if (_.viewIndex1)A = "&nbsp;";
        return A
    }, _createColumnColSpan: function (_, B, $) {
        if (this[O0O0oO]()) {
            var A = _["colspan" + $];
            if (A)B[B.length] = "colspan=\"" + A + "\" "
        } else if (_.colspan)B[B.length] = "colspan=\"" + _.colspan + "\" "
    }, doUpdateColumns: function () {
        var D = this._columnsViewEl.scrollLeft, _ = this[O0O0oO]() ? this.getFrozenColumnsRow() : [], F = this[O0O0oO]() ? this.getUnFrozenColumnsRow() : this.getVisibleColumnsRow(), C = this[O0O0oO]() ? this.getFrozenColumns() : [], A = this[O0O0oO]() ? this.getUnFrozenColumns() : this.getVisibleColumns(), $ = this._createColumnsHTML(_, 1, C), B = this._createColumnsHTML(F, 2, A), G = "<div class=\"mini-grid-topRightCell\"></div>";
        $ += G;
        B += G;
        this._columnsLockEl.innerHTML = $;
        this._columnsViewEl.innerHTML = B;
        var E = this._columnsLockEl.firstChild;
        E.style.width = "0px";
        this._columnsViewEl.scrollLeft = D
    }, doUpdateRows: function () {
        var B = this.getVisibleRows(), _ = this.getFrozenColumns(), D = this.getUnFrozenColumns();
        if (this[oOO1o]()) {
            var $ = this._createGroupingHTML(_, 1), A = this._createGroupingHTML(D, 2);
            this._rowsLockContentEl.innerHTML = $;
            this._rowsViewContentEl.innerHTML = A
        } else {
            $ = this.lO0llosHTML(_, 1, this[O0O0oO]() ? B : []), A = this.lO0llosHTML(D, 2, B);
            this._rowsLockContentEl.innerHTML = $;
            this._rowsViewContentEl.innerHTML = A
        }
        var C = this._rowsLockContentEl.firstChild;
        C.style.width = "0px"
    }, lloO1l: function () {
        if (this._filterLockEl.firstChild)this._filterLockEl.removeChild(this._filterLockEl.firstChild);
        if (this._filterViewEl.firstChild)this._filterViewEl.removeChild(this._filterViewEl.firstChild);
        var $ = this.getFrozenColumns(), B = this.getUnFrozenColumns(), A = this._createFilterRowHTML($, 1), _ = this._createFilterRowHTML(B, 2);
        this._filterLockEl.innerHTML = A;
        this._filterViewEl.innerHTML = _;
        this._doRenderFilters()
    }, O0ol: function () {
        var $ = this.getFrozenColumns(), B = this.getUnFrozenColumns(), A = this._createSummaryRowHTML($, 1), _ = this._createSummaryRowHTML(B, 2);
        this._summaryLockEl.innerHTML = A;
        this._summaryViewEl.innerHTML = _
    }, _syncRowsHeightTimer: null, syncRowDetail: function ($) {
        var A = this[o1lO1l]($, 1), _ = this[o1lO1l]($, 2);
        if (A && _)this._doSyncRowHeight(A, _)
    }, _doSyncRowHeight: function (D, A) {
        D.style.height = A.style.height = "auto";
        var _ = D.cells[0], C = A.cells[0], B = _.offsetHeight, $ = C.offsetHeight;
        if (B < $)B = $;
        D.style.height = A.style.height = B + "px"
    }, _syncRowsHeight: function () {
        var _ = this;

        function $() {
            var $ = document, D = _.getDataView();
            for (var A = 0, E = D.length; A < E; A++) {
                var B = D[A], F = _.lo000O(B, 1), C = _.lo000O(B, 2);
                if (!F || !C)continue;
                _._doSyncRowHeight(F, C)
            }
            _._syncRowsHeightTimer = null
        }

        if (this[O0O0oO]() && this.isFixedRowHeight() == false) {
            if (this._syncRowsHeightTimer)clearTimeout(this._syncRowsHeightTimer);
            this._syncRowsHeightTimer = setTimeout($, 2)
        }
    }, _syncColumnHeight: function () {
        var A = this._columnsLockEl, _ = this._columnsViewEl;
        A.style.height = _.style.height = "auto";
        if (this[O0O0oO]()) {
            var B = A.offsetHeight, $ = _.offsetHeight;
            B = B > $ ? B : $;
            A.style.height = _.style.height = B + "px"
        }
        A = this._summaryLockEl, _ = this._summaryViewEl;
        A.style.height = _.style.height = "auto";
        if (this[O0O0oO]()) {
            B = A.offsetHeight, $ = _.offsetHeight;
            B = B > $ ? B : $;
            A.style.height = _.style.height = B + "px"
        }
    }, _layoutColumns: function () {
        function A($) {
            return $.offsetHeight
        }

        function L(C) {
            var A = [];
            for (var _ = 0, B = C.cells.length; _ < B; _++) {
                var $ = C.cells[_];
                if ($.style.width == "0px")continue;
                A.push($)
            }
            return A
        }

        function D(C) {
            var A = L(C);
            for (var _ = 0, B = A.length; _ < B; _++) {
                var $ = A[_];
                $.style.height = "auto"
            }
        }

        function I() {
            J.style.height = J.style.height = "auto";
            for (var $ = 0, A = J.rows.length; $ < A; $++) {
                var B = J.rows[$], _ = E.rows[$];
                D(B);
                D(_)
            }
        }

        function $(F, A) {
            var B = 0, C = L(F);
            for (var _ = 0, E = C.length; _ < E; _++) {
                var $ = C[_], D = parseInt($.rowSpan) > 1;
                if (D && A)continue;
                var G = $.offsetHeight;
                if (G > B)B = G
            }
            return B
        }

        if (!this[O0O0oO]())return;
        var J = this._columnsLockEl.firstChild, E = this._columnsViewEl.firstChild;

        function _(G, D) {
            var B = $(D, true), C = L(G);
            for (var A = 0, F = C.length; A < F; A++) {
                var _ = C[A], E = parseInt(_.rowSpan) > 1;
                if (E); else l10o(_, B)
            }
        }

        function M(G, D) {
            var B = $(D), C = L(G);
            for (var A = 0, F = C.length; A < F; A++) {
                var _ = C[A], E = parseInt(_.rowSpan) > 1;
                if (E)l10o(_, B)
            }
        }

        I();
        for (var H = 0, C = J.rows.length; H < C; H++) {
            var F = J.rows[H], K = E.rows[H], B = $(F), G = $(K);
            if (B == G); else if (B < G) {
                _(F, K);
                M(F, K)
            } else if (B > G) {
                _(K, F);
                M(K, F)
            }
        }
        B = A(J), G = A(E);
        if (B < G)l10o(J, G); else if (B > G)l10o(E, B)
    }, doLayout: function () {
        if (this[Ooo1oo]() == false)return;
        this._doLayoutScroll = false;
        var A = this[l0111O](), B = this[O0O0oO](), $ = this[llOoll](true), D = this.getLockedWidth(), C = $ - D;
        this.o00o01Text();
        var E = this.isRightFrozen() ? "marginRight" : "marginLeft", _ = this.isRightFrozen() ? "right" : "left";
        if (B) {
            this._filterViewEl.style[E] = D + "px";
            this._summaryViewEl.style[E] = D + "px";
            this._columnsViewEl.style[E] = D + "px";
            this._rowsViewEl.style[E] = D + "px";
            if (mini.isSafari || mini.isChrome || mini.isIE6) {
                this._filterViewEl.style["width"] = C + "px";
                this._summaryViewEl.style["width"] = C + "px";
                this._columnsViewEl.style["width"] = C + "px"
            } else {
                this._filterViewEl.style["width"] = "auto";
                this._summaryViewEl.style["width"] = "auto";
                this._columnsViewEl.style["width"] = "auto"
            }
            if (mini.isSafari || mini.isChrome || mini.isIE6)this._rowsViewEl.style["width"] = C + "px";
            lOool0(this._filterLockEl, D);
            lOool0(this._summaryLockEl, D);
            lOool0(this._columnsLockEl, D);
            lOool0(this._rowsLockEl, D);
            this._filterLockEl.style[_] = "0px";
            this._summaryLockEl.style[_] = "0px";
            this._columnsLockEl.style[_] = "0px";
            this._rowsLockEl.style[_] = "0px"
        } else this._doClearFrozen();
        this._layoutColumns();
        this._syncColumnHeight();
        mini.FrozenGridView[ollolO][l0llOO][o1O0l0](this);
        if (B)if (mini.isChrome || mini.isIE6) {
            this._layoutColumns();
            this._syncColumnHeight();
            mini.FrozenGridView[ollolO][l0llOO][o1O0l0](this)
        }
        if (A)this._rowsLockEl.style.height = "auto"; else this._rowsLockEl.style.height = "100%";
        this._syncRowsHeight()
    }, o00o01Text: function () {
    }, lo000O: function (_, $) {
        _ = this.getRecord(_);
        var B = this.ooo0ll(_, $), A = document.getElementById(B);
        return A
    }, _doClearFrozen: function () {
        var _ = this.isRightFrozen() ? "marginRight" : "marginLeft", $ = this.isRightFrozen() ? "right" : "left";
        this._filterLockEl.style.left = "-10px";
        this._summaryLockEl.style.left = "-10px";
        this._columnsLockEl.style.left = "-10px";
        this._rowsLockEl.style.left = "-10px";
        this._filterLockEl.style["width"] = "0px";
        this._summaryLockEl.style["width"] = "0px";
        this._columnsLockEl.style["width"] = "0px";
        this._rowsLockEl.style["width"] = "0px";
        this._filterViewEl.style["marginLeft"] = "0px";
        this._summaryViewEl.style["marginLeft"] = "0px";
        this._columnsViewEl.style["marginLeft"] = "0px";
        this._rowsViewEl.style["marginLeft"] = "0px";
        this._filterViewEl.style["width"] = "auto";
        this._summaryViewEl.style["width"] = "auto";
        this._columnsViewEl.style["width"] = "auto";
        this._rowsViewEl.style["width"] = "auto";
        if (mini.isSafari || mini.isChrome || mini.isIE6) {
            this._filterViewEl.style["width"] = "100%";
            this._summaryViewEl.style["width"] = "100%";
            this._columnsViewEl.style["width"] = "100%";
            this._rowsViewEl.style["width"] = "100%"
        }
    }, frozenColumns: function ($, _) {
        this.frozen($, _)
    }, unFrozenColumns: function () {
        this.unFrozen()
    }, frozen: function ($, _) {
        this._doClearFrozen();
        this._columnModel.frozen($, _)
    }, unFrozen: function () {
        this._doClearFrozen();
        this._columnModel.unFrozen()
    }, setFrozenStartColumn: function ($) {
        this._columnModel[oOllo]($)
    }, setFrozenEndColumn: function ($) {
        return this._columnModel[lOo111]($)
    }, getFrozenStartColumn: function ($) {
        return this._columnModel._frozenStartColumn
    }, getFrozenEndColumn: function ($) {
        return this._columnModel._frozenEndColumn
    }, getFrozenColumnsRow: function () {
        return this._columnModel.getFrozenColumnsRow()
    }, getUnFrozenColumnsRow: function () {
        return this._columnModel.getUnFrozenColumnsRow()
    }, getLockedWidth: function () {
        if (!this[O0O0oO]())return 0;
        var $ = this._columnsLockEl.firstChild.firstChild, _ = $ ? $.offsetWidth : 0;
        return _
    }, _canDeferSyncScroll: function () {
        return this[O0O0oO]()
    }, _syncScroll: function () {
        var $ = this._rowsViewEl.scrollLeft;
        this._filterViewEl.scrollLeft = $;
        this._summaryViewEl.scrollLeft = $;
        this._columnsViewEl.scrollLeft = $;
        var _ = this, A = _._rowsViewEl.scrollTop;
        _._rowsLockEl.scrollTop = A;
        if (this._canDeferSyncScroll())setTimeout(function () {
            _._rowsViewEl.scrollTop = _._rowsLockEl.scrollTop
        }, 50)
    }, __OnMouseWheel: function (A) {
        var _ = this.getScrollTop() - A.wheelDelta, $ = this.getScrollTop();
        this.setScrollTop(_);
        if ($ != this.getScrollTop())A.preventDefault()
    }
});
loOOl(mini.FrozenGridView, "FrozenGridView");
mini.ScrollGridView = function () {
    mini.ScrollGridView[ollolO][OOlOl].apply(this, arguments)
};
oo00(mini.ScrollGridView, mini.FrozenGridView, {
    virtualScroll: true,
    virtualRows: 25,
    defaultRowHeight: 23,
    _canDeferSyncScroll: function () {
        return this[O0O0oO]() && !this.isVirtualScroll()
    },
    setVirtualScroll: function ($) {
        this.virtualScroll = $;
        this[l0loO0]()
    },
    getVirtualScroll: function ($) {
        return this.virtualScroll
    },
    isFixedRowHeight: function () {
        return this.fixedRowHeight || this.isVirtualScroll()
    },
    isVirtualScroll: function () {
        if (this.virtualScroll)return this[l0111O]() == false && this[oOO1o]() == false;
        return false
    },
    _getScrollView: function () {
        var $ = this.getVisibleRows();
        return $
    },
    _getScrollViewCount: function () {
        return this._getScrollView().length
    },
    _getScrollRowHeight: function ($, _) {
        if (_ && _._height) {
            var A = parseInt(_._height);
            if (!isNaN(A))return A
        }
        return this.defaultRowHeight
    },
    _getRangeHeight: function (B, E) {
        var A = 0, D = this._getScrollView();
        for (var $ = B; $ < E; $++) {
            var _ = D[$], C = this._getScrollRowHeight($, _);
            A += C
        }
        return A
    },
    _getIndexByScrollTop: function (F) {
        var A = 0, C = this._getScrollView(), E = this._getScrollViewCount();
        for (var $ = 0, D = E; $ < D; $++) {
            var _ = C[$], B = this._getScrollRowHeight($, _);
            A += B;
            if (A >= F)return $
        }
        return E
    },
    __getScrollViewRange: function ($, A) {
        var _ = this._getScrollView();
        return _.getRange($, A)
    },
    _getViewRegion: function () {
        var I = this._getScrollView();
        if (this.isVirtualScroll() == false) {
            var C = {top: 0, bottom: 0, rows: I, start: 0, end: 0};
            return C
        }
        var D = this.defaultRowHeight, K = this._getViewNowRegion(), G = this.getScrollTop(), $ = this._vscrollEl.offsetHeight, L = this._getScrollViewCount(), A = K.start, B = K.end;
        for (var H = 0, F = L; H < F; H += this.virtualRows) {
            var E = H + this.virtualRows;
            if (H <= A && A < E)A = H;
            if (H < B && B <= E)B = E
        }
        if (B > L)B = L;
        if (B == 0)B = this.virtualRows;
        var _ = this._getRangeHeight(0, A), J = this._getRangeHeight(B, this._getScrollViewCount()), I = this.__getScrollViewRange(A, B), C = {
            top: _,
            bottom: J,
            rows: I,
            start: A,
            end: B,
            viewStart: A,
            viewEnd: B
        };
        C.viewTop = this._getRangeHeight(0, C.viewStart);
        C.viewBottom = this._getRangeHeight(C.viewEnd, this._getScrollViewCount());
        return C
    },
    _getViewNowRegion: function () {
        var B = this.defaultRowHeight, E = this.getScrollTop(), $ = this._rowsViewEl.offsetHeight, C = this._getIndexByScrollTop(E), _ = this._getIndexByScrollTop(E + $ + 30), D = this._getScrollViewCount();
        if (_ > D)_ = D;
        var A = {start: C, end: _};
        return A
    },
    _canVirtualUpdate: function () {
        if (!this._viewRegion)return true;
        var $ = this._getViewNowRegion();
        if (this._viewRegion.start <= $.start && $.end <= this._viewRegion.end)return false;
        return true
    },
    __OnColumnsChanged: function (_) {
        var $ = this;
        this.columns = this._columnModel.columns;
        this.lloO1l();
        this.O0ol();
        if (this.getVisibleRows().length == 0)this[l0loO0](); else this.deferUpdate();
        if (this.isVirtualScroll())this.__OnVScroll();
        this[ol1O0]("columnschanged")
    },
    doLayout: function () {
        if (this[Ooo1oo]() == false)return;
        mini.ScrollGridView[ollolO][l0llOO][o1O0l0](this);
        this._layoutScroll();
        if (mini.isNumber(this._scrollTop) && this._vscrollEl.scrollTop != this._scrollTop)this._vscrollEl.scrollTop = this._scrollTop
    },
    lO0llosHTML: function (C, E, F, A, G, J) {
        var K = this.isVirtualScroll();
        if (!K)return mini.ScrollGridView[ollolO].lO0llosHTML.apply(this, arguments);
        var B = K ? this._getViewRegion() : null, D = ["<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
        D.push(this._createTopRowHTML(C));
        if (this.isVirtualScroll()) {
            var H = A == 0 ? "display:none;" : "";
            D.push("<tr class=\"mini-grid-virtualscroll-top\" style=\"padding:0;border:0;" + H + "\"><td colspan=\"" + C.length + "\" style=\"height:" + A + "px;padding:0;border:0;" + H + "\"></td></tr>")
        }
        if (E == 1 && this[O0O0oO]() == false); else for (var I = 0, _ = F.length; I < _; I++) {
            var $ = F[I];
            this.lO0lloHTML($, J, C, E, D);
            J++
        }
        if (this.isVirtualScroll())D.push("<tr class=\"mini-grid-virtualscroll-bottom\" style=\"padding:0;border:0;\"><td colspan=\"" + C.length + "\" style=\"height:" + G + "px;padding:0;border:0;\"></td></tr>");
        D.push("</table>");
        return D.join("")
    },
    doUpdateRows: function () {
        if (this.isVirtualScroll() == false) {
            mini.ScrollGridView[ollolO].doUpdateRows[o1O0l0](this);
            return
        }
        var E = this._getViewRegion();
        this._viewRegion = E;
        var C = this.getFrozenColumns(), I = this.getUnFrozenColumns(), G = E.viewStart, B = E.start, A = E.viewEnd;
        if (this._scrollPaging) {
            var _ = this[Oooo1O]() * this[O0loO0]();
            G -= _;
            B -= _;
            A -= _
        }
        var F = new Date(), $ = this.lO0llosHTML(C, 1, E.rows, E.viewTop, E.viewBottom, G), D = this.lO0llosHTML(I, 2, E.rows, E.viewTop, E.viewBottom, G);
        this._rowsLockContentEl.innerHTML = $;
        this._rowsViewContentEl.innerHTML = D;
        var H = this.getScrollTop();
        if (this._rowsViewEl.scrollTop != H)this._rowsViewEl.scrollTop = H
    },
    _create: function () {
        mini.ScrollGridView[ollolO][lololl][o1O0l0](this);
        this._vscrollEl = mini.append(this._rowsEl, "<div class=\"mini-grid-vscroll\"><div class=\"mini-grid-vscroll-content\"></div></div>");
        this._vscrollContentEl = this._vscrollEl.firstChild
    },
    _initEvents: function () {
        mini.ScrollGridView[ollolO][lOo101][o1O0l0](this);
        var $ = this;
        Ol1O(this._vscrollEl, "scroll", this.__OnVScroll, this);
        mini._onScrollDownUp(this._vscrollEl, function (_) {
            $._VScrollMouseDown = true
        }, function (_) {
            $._VScrollMouseDown = false
        })
    },
    _layoutScroll: function () {
        var A = this.isVirtualScroll();
        if (A) {
            var B = this.getScrollHeight(), $ = B > this._rowsViewEl.offsetHeight;
            if (A && $) {
                this._vscrollEl.style.display = "block";
                this._vscrollContentEl.style.height = B + "px"
            } else this._vscrollEl.style.display = "none";
            if (this._rowsViewEl.scrollWidth > this._rowsViewEl.clientWidth + 1) {
                var _ = this[O0oo1O](true) - 18;
                if (_ < 0)_ = 0;
                this._vscrollEl.style.height = _ + "px"
            } else this._vscrollEl.style.height = "100%"
        } else this._vscrollEl.style.display = "none"
    },
    getScrollHeight: function () {
        var $ = this.getVisibleRows();
        return this._getRangeHeight(0, $.length)
    },
    setScrollTop: function ($) {
        if (this.isVirtualScroll())this._vscrollEl.scrollTop = $; else this._rowsViewEl.scrollTop = $
    },
    getScrollTop: function () {
        if (this.isVirtualScroll())return this._vscrollEl.scrollTop; else return this._rowsViewEl.scrollTop
    },
    __OnVScroll: function (A) {
        var _ = this.isVirtualScroll();
        if (_) {
            this._scrollTop = this._vscrollEl.scrollTop;
            var $ = this;
            setTimeout(function () {
                $._rowsViewEl.scrollTop = $._scrollTop;
                $._o10l0 = null
            }, 8);
            if (this._scrollTopTimer)clearTimeout(this._scrollTopTimer);
            this._scrollTopTimer = setTimeout(function () {
                $._scrollTopTimer = null;
                $._tryUpdateScroll();
                $._rowsViewEl.scrollTop = $._scrollTop
            }, 80)
        }
    },
    __OnMouseWheel: function (C) {
        var A = C.wheelDelta ? C : C.originalEvent, _ = A.wheelDelta || -A.detail * 24, B = this.getScrollTop() - _, $ = this.getScrollTop();
        this.setScrollTop(B);
        if ($ != this.getScrollTop() || this.isVirtualScroll());
    },
    _tryUpdateScroll: function () {
        var $ = this._canVirtualUpdate();
        if ($) {
            if (this._scrollPaging) {
                var A = this;
                this[Olllo1](null, null, function ($) {
                })
            } else {
                var _ = new Date();
                this._doRemoveRowContent();
                this.doUpdateRows()
            }
        }
    }
});
loOOl(mini.ScrollGridView, "ScrollGridView");
mini._onScrollDownUp = function ($, B, A) {
    function D($) {
        if (mini.isFirefox)Ol1O(document, "mouseup", _); else Ol1O(document, "mousemove", C);
        B($)
    }

    function C($) {
        lol0Oo(document, "mousemove", C);
        A($)
    }

    function _($) {
        lol0Oo(document, "mouseup", _);
        A($)
    }

    Ol1O($, "mousedown", D)
};
mini._GridoOlOO0 = function ($) {
    this.owner = $, el = $.el;
    $[Ol1oO1]("rowmousemove", this.__OnRowMouseMove, this);
    Ol1O($.olOOO0, "mouseout", this.O11olO, this);
    Ol1O($.olOOO0, "mousewheel", this.__OnMouseWheel, this);
    $[Ol1oO1]("cellmousedown", this.__OnCellMouseDown, this);
    $[Ol1oO1]("cellmouseup", this.__OnGridCellClick, this);
    $[Ol1oO1]("celldblclick", this.__OnGridCellClick, this);
    Ol1O($.el, "keydown", this.oO00, this);
    jQuery($._columnsEl)[Ol1oO1]("mouseenter", ".mini-grid-headerCell", function ($) {
        jQuery($.currentTarget)[Oo1Olo]("mini-grid-header-over")
    });
    jQuery($._columnsEl)[Ol1oO1]("mouseleave", ".mini-grid-headerCell", function ($) {
        jQuery($.currentTarget)[OoOo0]("mini-grid-header-over")
    })
};
mini._GridoOlOO0[O11Ol1] = {
    oO00: function (L) {
        var H = this.owner, E = ol000(L.target, "mini-grid-detailRow"), I = E ? Ol0O(H.el, E) : false;
        if (Ol0O(H.olo0O0, L.target) || Ol0O(H.l0000o, L.target) || Ol0O(H.O1Ool0, L.target) || Ol0O(H.l01olO, L.target) || (ol000(L.target, "mini-grid-detailRow") && I) || ol000(L.target, "mini-grid-rowEdit") || ol000(L.target, "mini-tree-editinput"))return;
        var A = H[O011o1]();
        if (L.shiftKey || L.ctrlKey || L.altKey)return;
        if (L.keyCode == 37 || L.keyCode == 38 || L.keyCode == 39 || L.keyCode == 40)L.preventDefault();
        var F = H.getVisibleColumns();

        function B($) {
            return H.getVisibleRows()[$]
        }

        function _($) {
            return H.getVisibleRows()[o110ll]($)
        }

        function C() {
            return H.getVisibleRows().length
        }

        var D = A ? A[1] : null, $ = A ? A[0] : null;
        if (!A)$ = H.getCurrent();
        var G = F[o110ll](D), J = _($), K = C();
        switch (L.keyCode) {
            case 9:
                if (H[ooo011] && H.editOnTabKey) {
                    L.preventDefault();
                    H[lOOo10](L.shiftKey == false, true);
                    return
                }
                break;
            case 27:
                break;
            case 13:
                if (H[ooo011] && H.editNextOnEnterKey)if (D)if (H[OO100l](A) || !D.editor) {
                    H[lOOo10](L.shiftKey == false);
                    return
                }
                if (H[ooo011] && A && !D[lOlo0] && !H[o0011o]())H[oOllO0]();
                break;
            case 37:
                if (D) {
                    if (G > 0)G -= 1
                } else G = 0;
                break;
            case 38:
                if ($) {
                    if (J > 0)J -= 1
                } else J = 0;
                if (J != 0 && H.isVirtualScroll())if (H._viewRegion.start > J)return;
                break;
            case 39:
                if (D) {
                    if (G < F.length - 1)G += 1
                } else G = 0;
                break;
            case 40:
                if ($) {
                    if (J < K - 1)J += 1
                } else J = 0;
                if (H.isVirtualScroll())if (H._viewRegion.end < J) {
                    return;
                    H.setScrollTop(H.getScrollTop() + H.defaultRowHeight)
                }
                break;
            default:
                return;
                break
        }
        D = F[G];
        $ = B(J);
        if (D && $ && H[O0lO]) {
            A = [$, D];
            H[oOo011](A);
            H[lOoolO]($, D, false)
        }
        if (!H.onlyCheckSelection)if (L.keyCode != 37 && L.keyCode != 39)if ($ && H[l1lO1o]) {
            H[OOo10]();
            H[l10ll]($);
            if ($)H[lOoolO]($, null, false)
        }
    }, __OnMouseWheel: function (_) {
        var $ = this.owner;
        if ($[ooo011])$[ll0100]()
    }, __OnGridCellClick: function (D) {
        var $ = this.owner, A = D.type, C = new Date();
        if (A == "cellmouseup")A = "cellclick";
        if ($[ooo011] == false)return;
        if ($.cellEditAction != A)return;
        var _ = D.record, B = D.column;
        if (!B[lOlo0] && !$[o0011o]())if (D.htmlEvent.shiftKey || D.htmlEvent.ctrlKey); else $[oOllO0]()
    }, __OnCellMouseDown: function (_) {
        var $ = this;
        setTimeout(function () {
            $.__doSelect(_)
        }, 1)
    }, __OnRowMouseMove: function (A) {
        var $ = this.owner, _ = A.record;
        if (!$.enabled || $[ooO1o] == false)return;
        $[Ol0olO](_)
    }, O11olO: function ($) {
        if (this.owner.allowHotTrackOut)this.owner[Ol0olO](null)
    }, __doSelect: function (E) {
        var _ = E.record, C = E.column, $ = this.owner;
        if (_.enabled === false)return;
        if ($[O0lO]) {
            var B = [_, C];
            $[oOo011](B)
        }
        if ($.onlyCheckSelection && !C._multiRowSelect)return;
        if ($[l1lO1o]) {
            var D = {record: _, selected: _, cancel: false};
            if (_) {
                $[ol1O0]("beforerowselect", D);
                $[ol1O0]("beforeselect", D)
            }
            if (D.cancel)return;
            if ($[OoloOl]()) {
                $.el.onselectstart = function () {
                };
                if (E.htmlEvent.shiftKey) {
                    $.el.onselectstart = function () {
                        return false
                    };
                    try {
                        E.htmlEvent.preventDefault()
                    } catch (D) {
                    }
                    var A = $.getCurrent();
                    if (A) {
                        $[OOo10]();
                        $.selectRange(A, _);
                        $[l10ll](A)
                    } else {
                        $[lOol1O](_);
                        $[l10ll](_)
                    }
                } else {
                    $.el.onselectstart = function () {
                    };
                    if (E.htmlEvent.ctrlKey) {
                        $.el.onselectstart = function () {
                            return false
                        };
                        try {
                            E.htmlEvent.preventDefault()
                        } catch (D) {
                        }
                    }
                    if (E.column._multiRowSelect === true || E.htmlEvent.ctrlKey || $.allowUnselect) {
                        if ($[Olo1o1](_))$[O0lo11](_); else {
                            $[lOol1O](_);
                            $[l10ll](_)
                        }
                    } else if ($[Olo1o1](_)); else {
                        $[OOo10]();
                        $[lOol1O](_);
                        $[l10ll](_)
                    }
                }
            } else if (!$[Olo1o1](_)) {
                $[OOo10]();
                $[lOol1O](_)
            } else if (E.htmlEvent.ctrlKey || $.allowUnselect)$[OOo10]()
        }
    }
};
mini._Grid_RowGroup = function ($) {
    this.owner = $, el = $.el;
    Ol1O($.Ol01, "click", this.oO0o1l, this)
};
mini._Grid_RowGroup[O11Ol1] = {
    oO0o1l: function (B) {
        var $ = this.owner, _ = $._getRowGroupByEvent(B);
        if (_) {
            if (!$.groupTitleCollapsible && !olol(B.target, "mini-grid-group-ecicon"))return;
            var A = {htmlEvent: B, cancel: false, group: _};
            $[ol1O0]("beforegroupclick", A);
            if (A.cancel === true)return;
            $[o1Olo0](_)
        }
    }
};
mini._Grido10o0Menu = function ($) {
    this.owner = $;
    this.menu = this.createMenu();
    Ol1O($.el, "contextmenu", this.l111lO, this);
    $[Ol1oO1]("destroy", this.__OnGridDestroy, this)
};
mini._Grido10o0Menu[O11Ol1] = {
    __OnGridDestroy: function ($) {
        if (this.menu)this.menu[l0lOl]();
        this.menu = null
    }, createMenu: function () {
        var $ = mini.create({type: "menu", hideOnClick: false});
        $[Ol1oO1]("itemclick", this.O0o1o, this);
        return $
    }, updateMenu: function () {
        var _ = this.owner, F = this.menu, D = _[O1o10](), B = [];
        for (var A = 0, E = D.length; A < E; A++) {
            var C = D[A];
            if (C.hideable)continue;
            var $ = {};
            $.checked = C.visible;
            $[Oolool] = true;
            $.text = _.oOl0o0Text(C);
            if ($.text == "&nbsp;") {
                if (C.type == "indexcolumn")$.text = "\u5e8f\u53f7";
                if (C.type == "checkcolumn")$.text = "\u9009\u62e9"
            }
            B.push($);
            $.enabled = C.enabled;
            $._column = C
        }
        F[oo1l0o](B)
    }, l111lO: function (_) {
        var $ = this.owner;
        if ($.showColumnsMenu == false)return;
        if (Ol0O($._columnsEl, _.target) == false)return;
        this[ol10Oo]();
        this.menu[lOOOo1](_.pageX, _.pageY);
        return false
    }, O0o1o: function (J) {
        var C = this.owner, I = this.menu, A = C[O1o10](), E = I[lo00l1](), $ = J.item, _ = $._column, H = 0;
        for (var D = 0, B = E.length; D < B; D++) {
            var F = E[D];
            if (F[l01OoO]())H++
        }
        if (H < 1)$[lOoooO](true);
        var G = $[l01OoO]();
        if (G)C.showColumn(_); else C.hideColumn(_)
    }
};
mini._Grid_CellToolTip = function ($) {
    this.owner = $;
    Ol1O(this.owner.el, "mousemove", this.__OnGridMouseMove, this)
};
mini._Grid_CellToolTip[O11Ol1] = {
    __OnGridMouseMove: function (D) {
        var $ = this.owner;
        if (olol(D.target, "mini-grid-headerCell-inner")) {
            var _ = D.target;
            if (_.scrollWidth > _.clientWidth) {
                var C = _.innerText || _.textContent || "";
                _.title = C.trim()
            } else _.title = "";
            return
        }
        var A = $.O01Ol(D), _ = $.O01OOl(A[0], A[1]), B = $.getCellError(A[0], A[1]);
        if (_) {
            if (B) {
                setTimeout(function () {
                    _.title = B.errorText
                }, 10);
                return
            }
            setTimeout(function () {
                var B = _;
                if (_.firstChild) {
                    if (olol(_.firstChild, "mini-grid-cell-inner"))B = _.firstChild;
                    if (olol(_.firstChild, "mini-tree-nodetitle"))B = _.firstChild
                }
                if (B.scrollWidth > B.clientWidth && $[o11Oll]() && A[1].showCellTip) {
                    var C = B.innerText || B.textContent || "";
                    _.title = C.trim()
                } else _.title = ""
            }, 10)
        }
    }
};
mini._Grid_Sorter = function ($) {
    this.owner = $;
    this.owner[Ol1oO1]("headercellclick", this.__OnGridHeaderCellClick, this);
    Ol1O($.OlOl0l, "mousemove", this.__OnGridHeaderMouseMove, this);
    Ol1O($.OlOl0l, "mouseout", this.__OnGridHeaderMouseOut, this)
};
mini._Grid_Sorter[O11Ol1] = {
    __OnGridHeaderMouseOut: function ($) {
        if (this.O1OO00ColumnEl)o11o(this.O1OO00ColumnEl, "mini-grid-headerCell-hover")
    }, __OnGridHeaderMouseMove: function (_) {
        var $ = ol000(_.target, "mini-grid-headerCell");
        if ($) {
            l1Oo($, "mini-grid-headerCell-hover");
            this.O1OO00ColumnEl = $
        }
    }, __OnGridHeaderCellClick: function (C) {
        var $ = this.owner;
        if (!olol(C.htmlEvent.target, "mini-grid-column-splitter"))if ($[o101O0] && $[o0ol1l]() == false) {
            var _ = C.column;
            if (!_.columns || _.columns.length == 0) {
                var B = _.sortField || _.field;
                if (B && _.allowSort !== false) {
                    var A = "asc";
                    if ($[l1lOoo]() == B)A = $[Olo1ol]() == "asc" ? "desc" : "asc";
                    $[llO1lO](B, A)
                }
            }
        }
    }
};
mini._Grid_ColumnMove = function ($) {
    this.owner = $;
    Ol1O(this.owner.el, "mousedown", this.o010, this)
};
mini._Grid_ColumnMove[O11Ol1] = {
    o010: function (B) {
        var $ = this.owner;
        if ($[o0ol1l]())return;
        if (olol(B.target, "mini-grid-column-splitter"))return;
        if (B.button == mini.MouseButton.Right)return;
        var A = ol000(B.target, $._headerCellCls);
        if (A) {
            this._remove();
            var _ = $.OO111O(B);
            if ($[OoOO1l] && _ && _.allowMove) {
                this.dragColumn = _;
                this._columnEl = A;
                this.getDrag().start(B)
            }
        }
    }, getDrag: function () {
        if (!this.drag)this.drag = new mini.Drag({
            capture: false,
            onStart: mini.createDelegate(this.OoOOlO, this),
            onMove: mini.createDelegate(this.lll11, this),
            onStop: mini.createDelegate(this.O00OO, this)
        });
        return this.drag
    }, OoOOlO: function (_) {
        function A(_) {
            var A = _.header;
            if (typeof A == "function")A = A[o1O0l0]($, _);
            if (mini.isNull(A) || A === "")A = "&nbsp;";
            return A
        }

        var $ = this.owner;
        this.olooO0 = mini.append(document.body, "<div class=\"mini-grid-columnproxy\"></div>");
        this.olooO0.innerHTML = "<div class=\"mini-grid-columnproxy-inner\" style=\"height:26px;\">" + A(this.dragColumn) + "</div>";
        mini[o1lloo](this.olooO0, _.now[0] + 15, _.now[1] + 18);
        l1Oo(this.olooO0, "mini-grid-no");
        this.moveTop = mini.append(document.body, "<div class=\"mini-grid-movetop\"></div>");
        this.moveBottom = mini.append(document.body, "<div class=\"mini-grid-movebottom\"></div>")
    }, lll11: function (A) {
        var $ = this.owner, G = A.now[0];
        mini[o1lloo](this.olooO0, G + 15, A.now[1] + 18);
        this.targetColumn = this.insertAction = null;
        var D = ol000(A.event.target, $._headerCellCls);
        if (D) {
            var C = $.OO111O(A.event);
            if (C && C != this.dragColumn) {
                var _ = $[l1Ol1](this.dragColumn), E = $[l1Ol1](C);
                if (_ == E) {
                    this.targetColumn = C;
                    this.insertAction = "before";
                    var F = $[OlooO](this.targetColumn);
                    if (G > F.x + F.width / 2)this.insertAction = "after"
                }
            }
        }
        if (this.targetColumn) {
            l1Oo(this.olooO0, "mini-grid-ok");
            o11o(this.olooO0, "mini-grid-no");
            var B = $[OlooO](this.targetColumn);
            this.moveTop.style.display = "block";
            this.moveBottom.style.display = "block";
            if (this.insertAction == "before") {
                mini[o1lloo](this.moveTop, B.x - 4, B.y - 9);
                mini[o1lloo](this.moveBottom, B.x - 4, B.bottom)
            } else {
                mini[o1lloo](this.moveTop, B.right - 4, B.y - 9);
                mini[o1lloo](this.moveBottom, B.right - 4, B.bottom)
            }
        } else {
            o11o(this.olooO0, "mini-grid-ok");
            l1Oo(this.olooO0, "mini-grid-no");
            this.moveTop.style.display = "none";
            this.moveBottom.style.display = "none"
        }
    }, _remove: function () {
        var $ = this.owner;
        mini[oll100](this.olooO0);
        mini[oll100](this.moveTop);
        mini[oll100](this.moveBottom);
        this.olooO0 = this.moveTop = this.moveBottom = this.dragColumn = this.targetColumn = null
    }, O00OO: function (_) {
        var $ = this.owner;
        $[l1o010](this.dragColumn, this.targetColumn, this.insertAction);
        this._remove()
    }
};
mini._Grid_ColumnSplitter = function ($) {
    this.owner = $;
    Ol1O($.el, "mousedown", this.Ol0l, this)
};
mini._Grid_ColumnSplitter[O11Ol1] = {
    Ol0l: function (B) {
        var $ = this.owner, A = B.target;
        if (olol(A, "mini-grid-column-splitter")) {
            var _ = $.l001O(A.id);
            if ($[o0ol1l]())return;
            if ($[o110O] && _ && _[lO0oOO]) {
                this.splitterColumn = _;
                this.getDrag().start(B)
            }
        }
    }, getDrag: function () {
        if (!this.drag)this.drag = new mini.Drag({
            capture: true,
            onStart: mini.createDelegate(this.OoOOlO, this),
            onMove: mini.createDelegate(this.lll11, this),
            onStop: mini.createDelegate(this.O00OO, this)
        });
        return this.drag
    }, OoOOlO: function (_) {
        var $ = this.owner, B = $[OlooO](this.splitterColumn);
        this.columnBox = B;
        this.olooO0 = mini.append(document.body, "<div class=\"mini-grid-proxy\"></div>");
        var A = $.getGridViewBox();
        A.x = B.x;
        A.width = B.width;
        A.right = B.right;
        oool(this.olooO0, A)
    }, lll11: function (A) {
        var $ = this.owner, B = mini.copyTo({}, this.columnBox), _ = B.width + (A.now[0] - A.init[0]);
        if (_ < $.columnMinWidth)_ = $.columnMinWidth;
        if (_ > $.columnMaxWidth)_ = $.columnMaxWidth;
        lOool0(this.olooO0, _)
    }, O00OO: function (E) {
        var $ = this.owner, F = Ol0oO(this.olooO0), D = this, C = $[o101O0];
        $[o101O0] = false;
        setTimeout(function () {
            jQuery(D.olooO0).remove();
            D.olooO0 = null;
            $[o101O0] = C
        }, 10);
        var G = this.splitterColumn, _ = parseInt(G.width);
        if (_ + "%" != G.width) {
            var A = $[oloO10](G), B = parseInt(_ / A * F.width);
            if (B < $.columnMinWidth)B = $.columnMinWidth;
            $[oOoo0](G, B)
        }
    }
};
mini._Grid_DragDrop = function ($) {
    this.owner = $;
    this.owner[Ol1oO1]("CellMouseDown", this.__OnGridCellMouseDown, this)
};
mini._Grid_DragDrop[O11Ol1] = {
    __OnGridCellMouseDown: function (C) {
        if (C.htmlEvent.button == mini.MouseButton.Right)return;
        var $ = this.owner;
        if ($._dragging)return;
        this.dropObj = $;
        if (ol000(C.htmlEvent.target, "mini-tree-editinput"))return;
        if ($[o0011o]() || $[loOo10](C.record, C.column) == false)return;
        var B = $.OoOOlO(C.record, C.column);
        if (B.cancel)return;
        this.dragText = B.dragText;
        var _ = C.record;
        this.isTree = !!$.isTree;
        this.beginRecord = _;
        var A = this.l01l();
        A.start(C.htmlEvent)
    }, OoOOlO: function (A) {
        var $ = this.owner;
        $._dragging = true;
        var _ = this.beginRecord;
        this.dragData = $.l01lData();
        if (this.dragData[o110ll](_) == -1)this.dragData.push(_);
        this.feedbackEl = mini.append(document.body, "<div class=\"mini-feedback\"></div>");
        this.feedbackEl.innerHTML = this.dragText;
        this.lastFeedbackClass = "";
        this[ooO1o] = $[oolOO]();
        $[Oo1110](false)
    }, _getDropTargetObj: function (_) {
        var $ = ol000(_.target, "mini-grid", 500);
        if ($)return mini.get($)
    }, lll11: function (_) {
        var $ = this.owner, D = this._getDropTargetObj(_.event);
        this.dropObj = D;
        var C = _.now[0], B = _.now[1];
        mini[o1lloo](this.feedbackEl, C + 15, B + 18);
        if (D && D[O10Ol]) {
            this.isTree = D.isTree;
            var A = D.l00OlOByEvent(_.event);
            this.dropRecord = A;
            if (A) {
                if (this.isTree)this.dragAction = this.getFeedback(A, B, 3); else this.dragAction = this.getFeedback(A, B, 2)
            } else this.dragAction = "no"
        } else this.dragAction = "no";
        if (D && D[O10Ol] && !A && D[ll1oO1]().length == 0)this.dragAction = "add";
        this.lastFeedbackClass = "mini-feedback-" + this.dragAction;
        this.feedbackEl.className = "mini-feedback " + this.lastFeedbackClass;
        if (this.dragAction == "no")A = null;
        this.setRowFeedback(A, this.dragAction)
    }, O00OO: function (B) {
        var H = this.owner, G = this.dropObj;
        H._dragging = false;
        mini[oll100](this.feedbackEl);
        H[Oo1110](this[ooO1o]);
        this.feedbackEl = null;
        this.setRowFeedback(null);
        if (this.isTree) {
            var J = [];
            for (var I = 0, F = this.dragData.length; I < F; I++) {
                var L = this.dragData[I], C = false;
                for (var K = 0, A = this.dragData.length; K < A; K++) {
                    var E = this.dragData[K];
                    if (E != L) {
                        C = H.isAncestor(E, L);
                        if (C)break
                    }
                }
                if (!C)J.push(L)
            }
            this.dragData = J
        }
        if (this.dragAction == "add" && !this.dropRecord)this.dropRecord = G.getRootNode ? G.getRootNode() : {__root: true};
        if (this.dropRecord && G && this.dragAction != "no") {
            var M = H.ol0ooo(this.dragData, this.dropRecord, this.dragAction);
            if (!M.cancel) {
                var J = M.dragNodes, D = M.targetNode, _ = M.action;
                if (G.isTree) {
                    if (H == G)G.moveNodes(J, D, _); else {
                        if (G.dropAction == "move")H.removeNodes(J); else if (G.dropAction == "copy")J = mini.clone(J);
                        G.addNodes(J, D, _)
                    }
                } else {
                    var $ = G[o110ll](D);
                    if (_ == "after")$ += 1;
                    if (H == G)G.moveRow(J, $); else {
                        if (G.dropAction == "move")H.removeRows(J); else if (G.dropAction == "copy")J = mini.clone(J);
                        if (this.dragAction == "add")G.addRows(J); else G.addRows(J, $)
                    }
                }
                M = {
                    dragNode: M.dragNodes[0],
                    dropNode: M.targetNode,
                    dragAction: M.action,
                    dragNodes: M.dragNodes,
                    targetNode: M.targetNode
                };
                G[ol1O0]("drop", M)
            }
        }
        this.dropRecord = null;
        this.dragData = null
    }, setRowFeedback: function (_, F) {
        var $ = this.owner, E = this.dropObj;
        if (this.lastAddDomRow && E)E[lO10o1](this.lastAddDomRow, "mini-tree-feedback-add");
        if (_ == null || this.dragAction == "add") {
            mini[oll100](this.feedbackLine);
            this.feedbackLine = null
        }
        this.lastRowFeedback = _;
        if (_ != null)if (F == "before" || F == "after") {
            if (!this.feedbackLine)this.feedbackLine = mini.append(document.body, "<div class='mini-feedback-line'></div>");
            this.feedbackLine.style.display = "block";
            var C = E[l100OO](_), D = C.x, B = C.y - 1;
            if (F == "after")B += C.height;
            mini[o1lloo](this.feedbackLine, D, B);
            var A = E[l0O1l0](true);
            lOool0(this.feedbackLine, A.width)
        } else {
            E[OOlol1](_, "mini-tree-feedback-add");
            this.lastAddDomRow = _
        }
    }, getFeedback: function (K, I, F) {
        var D = this.owner, C = this.dropObj, J = C[l100OO](K), $ = J.height, H = I - J.y, G = null;
        if (this.dragData[o110ll](K) != -1)return "no";
        var A = false;
        if (F == 3) {
            A = C.isLeaf(K);
            for (var E = 0, B = this.dragData.length; E < B; E++) {
                var L = this.dragData[E], _ = C.isAncestor(L, K);
                if (_) {
                    G = "no";
                    break
                }
            }
        }
        if (G == null)if (F == 2) {
            if (H > $ / 2)G = "after"; else G = "before"
        } else if (A && C.allowLeafDropIn === false) {
            if (H > $ / 2)G = "after"; else G = "before"
        } else if (H > ($ / 3) * 2)G = "after"; else if ($ / 3 <= H && H <= ($ / 3 * 2))G = "add"; else G = "before";
        var M = C.loolO1(G, this.dragData, K, D);
        return M.effect
    }, l01l: function () {
        if (!this.drag)this.drag = new mini.Drag({
            onStart: mini.createDelegate(this.OoOOlO, this),
            onMove: mini.createDelegate(this.lll11, this),
            onStop: mini.createDelegate(this.O00OO, this)
        });
        return this.drag
    }
};
mini._Grid_Events = function ($) {
    this.owner = $, el = $.el;
    Ol1O(el, "click", this.oO0o1l, this);
    Ol1O(el, "dblclick", this.Oo0o00, this);
    Ol1O(el, "mousedown", this.Ol0l, this);
    Ol1O(el, "mouseup", this.oOlol1, this);
    Ol1O(el, "mousemove", this.oll1l, this);
    Ol1O(el, "mouseover", this.ol0010, this);
    Ol1O(el, "mouseout", this.O11olO, this);
    Ol1O(el, "keydown", this.Oo111, this);
    Ol1O(el, "keyup", this.OO1l1, this);
    Ol1O(el, "contextmenu", this.l111lO, this);
    $[Ol1oO1]("rowmousemove", this.__OnRowMouseMove, this);
    Ol1O(window, "resize", this.__windowResize, this)
};
mini._Grid_Events[O11Ol1] = {
    __windowResize: function () {
        var $ = this.owner;

        function _() {
            var B = $[ooOOO0]();
            if (B) {
                var A = $[O011o1](), _ = $[l10lll](A[0], A[1]);
                $.ol00o(_, B);
                $[ol101l](B, _)
            }
        }

        setTimeout(function () {
            _()
        }, 100)
    }, _row: null, __OnRowMouseMove: function (A) {
        var $ = this.owner, _ = A.record;
        if (this._row != _) {
            A.record = _;
            A.row = _;
            $[ol1O0]("rowmouseenter", A)
        }
        this._row = _
    }, oO0o1l: function ($) {
        this.o1ol1l($, "Click")
    }, Oo0o00: function ($) {
        this.o1ol1l($, "Dblclick")
    }, Ol0l: function (A) {
        var $ = this.owner;
        if (ol000(A.target, "mini-tree-editinput"))return;
        if (ol000(A.target, "mini-tree-node-ecicon"))return;
        this.o1ol1l(A, "MouseDown");
        var _ = 300;
        if (A.target.tagName.toLowerCase() == "a" && A.target.href)_ = 10;
        setTimeout(function () {
            var _ = ol000(A.target, "mini-grid-detailRow");
            if (Ol0O($.el, _))return;
            if (!!$.oOO10O)return;
            $[l0oo0O](A)
        }, _)
    }, oOlol1: function (_) {
        if (ol000(_.target, "mini-tree-editinput"))return;
        if (ol000(_.target, "mini-tree-node-ecicon"))return;
        var $ = this.owner;
        if (Ol0O($.el, _.target))this.o1ol1l(_, "MouseUp")
    }, oll1l: function ($) {
        this.o1ol1l($, "MouseMove")
    }, ol0010: function ($) {
        this.o1ol1l($, "MouseOver")
    }, O11olO: function ($) {
        this.o1ol1l($, "MouseOut")
    }, Oo111: function ($) {
        this.o1ol1l($, "KeyDown")
    }, OO1l1: function ($) {
        this.o1ol1l($, "KeyUp")
    }, l111lO: function ($) {
        this.o1ol1l($, "ContextMenu")
    }, o1ol1l: function (G, E) {
        var $ = this.owner, D = $.O01Ol(G), A = D[0], C = D[1];
        if (A) {
            var B = {record: A, row: A, htmlEvent: G}, F = $["_OnRow" + E];
            if (F)F[o1O0l0]($, B); else $[ol1O0]("row" + E, B)
        }
        if (C) {
            B = {column: C, field: C.field, htmlEvent: G}, F = $["_OnColumn" + E];
            if (F)F[o1O0l0]($, B); else $[ol1O0]("column" + E, B)
        }
        if (A && C) {
            B = {sender: $, record: A, row: A, column: C, field: C.field, htmlEvent: G}, F = $["_OnCell" + E];
            if (F)F[o1O0l0]($, B); else $[ol1O0]("cell" + E, B);
            if (C["onCell" + E])C["onCell" + E][o1O0l0](C, B)
        }
        if (!A && C && ol000(G.target, "mini-grid-headerCell")) {
            B = {column: C, htmlEvent: G}, F = $["_OnHeaderCell" + E];
            if (F)F[o1O0l0]($, B); else {
                var _ = "onheadercell" + E.toLowerCase();
                if (C[_]) {
                    B.sender = $;
                    C[_](B)
                }
                $[ol1O0]("headercell" + E, B)
            }
        }
    }
};
lloO10 = function ($) {
    lloO10[ollolO][OOlOl][o1O0l0](this, null);
    this._Events = new mini._Grid_Events(this);
    this.oOlOO0 = new mini._GridoOlOO0(this);
    this._DragDrop = new mini._Grid_DragDrop(this);
    this._RowGroup = new mini._Grid_RowGroup(this);
    this.O1o11 = new mini._Grid_ColumnSplitter(this);
    this._ColumnMove = new mini._Grid_ColumnMove(this);
    this._Sorter = new mini._Grid_Sorter(this);
    this._CellToolTip = new mini._Grid_CellToolTip(this);
    this.o10o0Menu = new mini._Grido10o0Menu(this);
    this.Oo10o1s();
    if ($)mini.applyTo[o1O0l0](this, $)
};
oo00(lloO10, mini.ScrollGridView, {
    uiCls: "mini-datagrid",
    selectOnLoad: false,
    showHeader: false,
    showPager: true,
    dropAction: "move",
    onlyCheckSelection: false,
    _$onlyCheckSelection: true,
    allowUnselect: false,
    allowRowSelect: true,
    allowCellSelect: false,
    allowCellEdit: false,
    cellEditAction: "cellclick",
    allowCellValid: false,
    allowResizeColumn: true,
    allowSortColumn: true,
    allowMoveColumn: true,
    showColumnsMenu: false,
    virtualScroll: false,
    enableHotTrack: true,
    allowHotTrackOut: true,
    showLoading: true,
    columnMinWidth: 8,
    Olllo: true,
    ll11: null,
    oOO10O: null,
    editNextRowCell: false,
    editNextOnEnterKey: false,
    editOnTabKey: true,
    createOnEnter: false,
    skipReadOnlyCell: false,
    autoHideRowDetail: true,
    allowDrag: false,
    allowDrop: false,
    allowLeafDropIn: false,
    pageSize: 20,
    pageIndex: 0,
    totalCount: 0,
    totalPage: 0,
    sortField: "",
    sortOrder: "",
    url: "",
    showCellTip: true,
    sizeText: "",
    showPagerButtonText: false,
    showPagerButtonIcon: false,
    groupTitleCollapsible: true,
    headerContextMenu: null
});
OOl0O = lloO10[O11Ol1];
OOl0O[ol1oOl] = Ol10o;
OOl0O[OOooO0] = O100Oo;
OOl0O._setl1o10 = OoOll;
OOl0O._setl101l = o0l1O;
OOl0O._setl0110o = oooOo;
OOl0O._getl0110o = l0o1o;
OOl0O[Ol100] = ll0Oo;
OOl0O[OlOol0] = lo101;
OOl0O.O101 = ollo0;
OOl0O[lloO1O] = llOOo;
OOl0O[olll0] = o0Ol0;
OOl0O[oolOoo] = lOo1;
OOl0O[l000Ol] = ooOo0;
OOl0O[lO0ol1] = loOl1;
OOl0O[o1l001] = o0Ol1;
OOl0O[llll00] = l1Ool;
OOl0O[l0lo1O] = ol00O;
OOl0O[o1loO] = olOll;
OOl0O[o0ool0] = OO0o0;
OOl0O[O01000] = OOo0;
OOl0O[l011oO] = OO100;
OOl0O[o10Olo] = lOlO;
OOl0O[l10O0] = llOl1;
OOl0O[ll0o1] = ll0lO;
OOl0O[loo10l] = lllOO;
OOl0O[lO0o0O] = l0l1l1;
OOl0O[o0lOO1] = lO01O;
OOl0O[lOll10] = l1l0Ol;
OOl0O[olO1lO] = lOllo;
OOl0O[Ololll] = Oooo;
OOl0O[oOOo01] = l0OlO;
OOl0O[lll0lo] = O0oll;
OOl0O[Ool0l] = O0Olo;
OOl0O[lll01o] = o10lO;
OOl0O[oOOO11] = oll0O0;
OOl0O[l1O0O0] = O1oO0;
OOl0O[lloOO0] = l1lO0;
OOl0O[OOoO1o] = O0l1ll;
OOl0O[OO11lo] = o0O11;
OOl0O[l0loOO] = l00o1;
OOl0O[O1O0O] = lo1oO;
OOl0O[lOOO10] = ooo0l;
OOl0O[llO0ll] = oooO1;
OOl0O[O0lO0O] = OlOl0;
OOl0O[l01Olo] = oOl10;
OOl0O[O01O1o] = oO0oo;
OOl0O[lo110O] = l11oo;
OOl0O[o1l0l] = O1oll;
OOl0O[o0loo] = o011l;
OOl0O[OoollO] = O11ll;
OOl0O[o1111] = lo1O;
OOl0O[l1lll0] = l0O10;
OOl0O[O0010o] = lo1O1;
OOl0O[OoOl] = Oo0O10;
OOl0O[OllOOO] = ooo1;
OOl0O[OloOo1] = Oo0l0l;
OOl0O[oo0l1] = oo0l0;
OOl0O[l0loO1] = Olo1lO;
OOl0O[Olo1ol] = o11ll;
OOl0O[Ol01O0] = O1olOo;
OOl0O[l1lOoo] = o1OO;
OOl0O[lllolO] = OO1o;
OOl0O[oo011l] = o1O1;
OOl0O[lloO00] = oOlOO;
OOl0O[oloo1o] = llo1l;
OOl0O[O0loO0] = oOl0O;
OOl0O[Ol0loO] = lOooO;
OOl0O[Oooo1O] = oO0lo;
OOl0O[ll10ll] = O1101;
OOl0O[loO01o] = OO110;
OOl0O[lO11OO] = lO110;
OOl0O[l110oO] = ooo1o;
OOl0O[Ol001O] = o1oOO;
OOl0O[olooOl] = lO0ll;
OOl0O[lo01oo] = oOo0o;
OOl0O[o11Oll] = l01l0;
OOl0O[Ol0o1O] = O0ooOO;
OOl0O[llO1lO] = l0oo;
OOl0O[lo10ol] = oo10O;
OOl0O[Olllo1] = O0o0;
OOl0O[looOlo] = O0l0o;
OOl0O[oO0l10] = OO0o;
OOl0O[Oo1100] = o0O1O;
OOl0O[O0lOl0] = O1oOO;
OOl0O[l1ol1o] = OoOOl0;
OOl0O[Ol1o1O] = OoO0;
OOl0O[lOllOl] = Ol0lo;
OOl0O[o0O0oO] = Ool10O;
OOl0O[o001l1] = o0OoO;
OOl0O[ooO00] = o0111;
OOl0O[l11lo1] = oOOl1;
OOl0O[loo101] = ol11o;
OOl0O[lo1ooO] = O1000;
OOl0O[o0oloo] = o00l1;
OOl0O[O1oool] = looo;
OOl0O.ol0ooo = OoO1o;
OOl0O.loolO1 = lo1OO;
OOl0O.OoOOlO = Oool;
OOl0O[loOo10] = Oloo1;
OOl0O[olO0oO] = Ol1O0;
OOl0O[o1o0ll] = l1O1O;
OOl0O[OO011o] = oo10l;
OOl0O[o1111l] = o0001;
OOl0O[oloo0] = l0OO0;
OOl0O[oO101l] = Oll11;
OOl0O.l01lText = o00ol;
OOl0O.l01lData = l00l10;
OOl0O.loO0lO = lOOOO;
OOl0O[O1lo0O] = o0OOl;
OOl0O[o00o10] = OloOOO;
OOl0O[Oo10OO] = lOlO00;
OOl0O[O1lO1O] = OO1ol;
OOl0O[lo1ll1] = o100l;
OOl0O[o1loO1] = lO10l;
OOl0O[ol0Olo] = OOl10;
OOl0O[o0ol0O] = O0Oll;
OOl0O.lo110 = OOOOlO;
OOl0O.O0O111 = lO001;
OOl0O[o1lO1l] = lloOo;
OOl0O[llo1ll] = OO11o;
OOl0O[OO1ol0] = OOO001;
OOl0O[oo0O1l] = Ool1Ol;
OOl0O[oo0OOO] = O0100;
OOl0O[OOlo0l] = ol0ol1;
OOl0O[O0Ool1] = oOo00;
OOl0O[o0l1o] = OOoOl;
OOl0O[OoOoOO] = oo00o;
OOl0O[o1Olo0] = l01lo;
OOl0O[Oloo10] = loO1o;
OOl0O[O01o] = lOO1O;
OOl0O[oO0llo] = OOoll;
OOl0O[lo0110] = oOOl0;
OOl0O[OOo10O] = o0001O;
OOl0O[o0O1OO] = o0001Os;
OOl0O[l10o01] = o000o;
OOl0O[OO0Oo0] = O11o1;
OOl0O[o0ol1l] = O1OO0;
OOl0O[ooOol1] = o1lo1o;
OOl0O[oO0l1O] = O1ll0;
OOl0O[oo101O] = loO0Ol;
OOl0O[ol100o] = oOoOo;
OOl0O[lOOo10] = O0ll;
OOl0O[oOOoOo] = ololO;
OOl0O[l1Olo1] = l0loo;
OOl0O[oOoo0l] = oO0Ol;
OOl0O.lo1o0 = l0olo;
OOl0O.ol00o = O1oOo;
OOl0O.lolo = ollo1;
OOl0O[ol101l] = O100;
OOl0O[ooOOO0] = o1lo1;
OOl0O.Olo0 = ol1o0;
OOl0O.l1Oll = O0llo;
OOl0O.OOO11 = l0O01;
OOl0O.looOl1 = O1lOl;
OOl0O[O1O01O] = llol0;
OOl0O[ll0100] = O1Oo1;
OOl0O[O0OO0l] = ll0OO;
OOl0O[oOllO0] = O0l11;
OOl0O[OO100l] = O1OO0Cell;
OOl0O[O011o1] = Ol01l;
OOl0O[oOo011] = OO1Oo;
OOl0O.lll0oo = O11o0;
OOl0O[lOlool] = oo101;
OOl0O[lo1o0o] = l111;
OOl0O[O00l01] = o01Ol0;
OOl0O[l0ooOO] = l1l01;
OOl0O[lOO0Ol] = O10O0l;
OOl0O[l1ooo] = Ol00o;
OOl0O[o0o1O0] = looOl;
OOl0O[ol1OlO] = oO1o0;
OOl0O[oOlO0O] = lOoOo;
OOl0O[O11l10] = l0Olo;
OOl0O[Oll000] = OllOl;
OOl0O[l1O010] = Oo100;
OOl0O[O010o1] = ol1O0O;
OOl0O[lO0O10] = l10o0;
OOl0O[lo0oOl] = lOlo;
OOl0O[lOllO0] = OO001;
OOl0O[loOool] = l11oO;
OOl0O[Oo0oO0] = l0lO1;
OOl0O[lo1010] = Oo10;
OOl0O[OloOlo] = lO00Ol;
OOl0O[Ol1ol] = l1lo;
OOl0O[llO1ol] = o1O11;
OOl0O[OOl1Oo] = loo0o;
OOl0O[oO0OOl] = O110O;
OOl0O[OoO1l0] = ooll00;
OOl0O[ll1olO] = l1O1l;
OOl0O[ll1oo] = lllo0;
OOl0O[l1lO10] = Oll10;
OOl0O[O1loll] = OoOol;
OOl0O[Ooo01] = lOo10;
OOl0O[o0OoOo] = ll10Ol;
OOl0O[OlOO0l] = l0Ol1;
OOl0O[oolOO] = llool;
OOl0O[Oo1110] = l1101;
OOl0O[looOll] = lO10o;
OOl0O[lo11l] = lOOl;
OOl0O[lOoolO] = OOllo;
OOl0O[Ol0olO] = oo0O;
OOl0O[O1loo] = oOo1o;
OOl0O[l0oo0O] = oOoOl;
OOl0O[O0Ol00] = l010O;
OOl0O[l100OO] = lO1O0;
OOl0O[OlooO] = l1oO1;
OOl0O[l10lll] = lllll;
OOl0O[lO10o1] = ol0ol;
OOl0O[OOlol1] = Ooo0o0;
OOl0O.l001O = o0Olo;
OOl0O[o1OO0O] = ll0O1;
OOl0O[O1ol1O] = lOl0l;
OOl0O.O01Ol = OoOO0;
OOl0O.OO111O = O1ll;
OOl0O[l0110l] = o1OOl;
OOl0O.l00OlOByEvent = oOooo;
OOl0O[oo0o1o] = oo001;
OOl0O[o1oOO0] = O1l1o;
OOl0O.O01OOl = o10Oo;
OOl0O.Oo011 = ol011;
OOl0O.lo000O = o0o01;
OOl0O[l1oO1l] = Olo01;
OOl0O[OOOOO0] = O11l0;
OOl0O[lll11o] = Ooo0l;
OOl0O[ol0lll] = ooo11l;
OOl0O[OOlo10] = lOOoO1;
OOl0O.ll1oEl = oOl1l;
OOl0O.l00ol = o01l1;
OOl0O[olo01] = oloOO;
OOl0O[Oo1l0l] = o01o00;
OOl0O[Oo0l1o] = O10Oo;
OOl0O[O0oo1o] = O10OoButtons;
OOl0O[o0011l] = Ol0lO;
OOl0O[l1l0ll] = l110lO;
OOl0O[lO0lOl] = O011l;
OOl0O[Ool1] = ol0lo;
OOl0O[loll10] = o1l0o1;
OOl0O[ooo01O] = O0l01;
OOl0O[l0oo0] = oOolO;
OOl0O[l01oo0] = o1lO1;
OOl0O[oo11Ol] = lOOol;
OOl0O[Ol1Oll] = Olll0;
OOl0O[Ol1lO1] = l1l0;
OOl0O[OO0Ol1] = olo11;
OOl0O[oo0010] = OlOl0O;
OOl0O[l10loO] = lOooo;
OOl0O.O010Ol = O0lOol;
OOl0O.OllO = OlOo0;
OOl0O[lOl01] = O1olo;
OOl0O[o1ll11] = l1ol;
OOl0O[l0loO0] = OoO0o;
OOl0O[OO1O1l] = oo1O;
loOOl(lloO10, "datagrid");
lloO10_CellValidator_Prototype = {
    getCellErrors: function () {
        var A = this._cellErrors.clone(), D = this._dataSource;
        for (var $ = 0, C = A.length; $ < C; $++) {
            var E = A[$], _ = E.record;
            if (!D.getby_id(_._id)) {
                var B = E.column, F = _[this._rowIdField] + "$" + B._id;
                delete this._cellMapErrors[F];
                this._cellErrors.remove(E)
            }
        }
        return this._cellErrors
    }, getCellError: function ($, _) {
        $ = this[Oll0l0] ? this[Oll0l0]($) : this[l1oOl]($);
        _ = this[lolo0l](_);
        if (!$ || !_)return;
        var A = $[this._rowIdField] + "$" + _._id;
        return this._cellMapErrors ? this._cellMapErrors[A] : null
    }, isValid: function () {
        return this.getCellErrors().length == 0
    }, isCellValid: function ($, _) {
        if (!this._cellMapErrors)return true;
        var A = $[this._rowIdField] + "$" + _._id;
        return !this._cellMapErrors[A]
    }, validate: function (A) {
        A = A || this.getDataView();
        if (!mini.isArray(A))A = [];
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            this.validateRow(_)
        }
    }, validateRow: function (_) {
        var B = this[O1o10]();
        for (var $ = 0, C = B.length; $ < C; $++) {
            var A = B[$];
            this.validateCell(_, A)
        }
    }, validateCell: function (F, B) {
        F = this[Oll0l0] ? this[Oll0l0](F) : this[l1oOl](F);
        B = this[lolo0l](B);
        if (!F || !B || B.visible == false)return;
        var _ = mini._getMap(B.field, F), J = {
            record: F,
            row: F,
            node: F,
            column: B,
            field: B.field,
            value: _,
            isValid: true,
            errorText: ""
        };
        if (B.vtype)mini.O0l0O(B.vtype, J.value, J, B);
        if (J[o0Ol0l] == true && B.unique && B.field) {
            var A = {}, H = this.data, I = B.field;
            for (var E = 0, C = H.length; E < C; E++) {
                var $ = H[E], D = $[I];
                if (mini.isNull(D) || D === ""); else {
                    var G = A[D];
                    if (G && $ == F) {
                        J[o0Ol0l] = false;
                        J.errorText = mini.O10oo(B, "uniqueErrorText");
                        this.setCellIsValid(G, B, J.isValid, J.errorText);
                        break
                    }
                    A[D] = $
                }
            }
        }
        this[ol1O0]("cellvalidation", J);
        this.setCellIsValid(F, B, J.isValid, J.errorText)
    }, setIsValid: function (_) {
        if (_) {
            var A = this._cellErrors.clone();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var C = A[$];
                this.setCellIsValid(C.record, C.column, true)
            }
        }
    }, _removeRowError: function (_) {
        var B = this[l0000l]();
        for (var $ = 0, C = B.length; $ < C; $++) {
            var A = B[$], E = _[this._rowIdField] + "$" + A._id, D = this._cellMapErrors[E];
            if (D) {
                delete this._cellMapErrors[E];
                this._cellErrors.remove(D)
            }
        }
    }, setCellIsValid: function (_, A, B, D) {
        _ = this[l1oOl](_);
        A = this[lolo0l](A);
        if (!_ || !A)return;
        var E = _[this._rowIdField] + "$" + A._id, $ = this.O01OOl(_, A), C = this._cellMapErrors[E];
        delete this._cellMapErrors[E];
        this._cellErrors.remove(C);
        if (B === true) {
            if ($ && C)o11o($, "mini-grid-cell-error")
        } else {
            C = {record: _, column: A, isValid: B, errorText: D};
            this._cellMapErrors[E] = C;
            this._cellErrors[llo10o](C);
            if ($)l1Oo($, "mini-grid-cell-error")
        }
    }
};
mini.copyTo(lloO10.prototype, lloO10_CellValidator_Prototype);
lOO111 = function () {
    lOO111[ollolO][OOlOl].apply(this, arguments);
    l1Oo(this.el, "mini-tree");
    this[lo1ooO](false);
    this[l1ol1o](true);
    if (this[l1O01o] == true)l1Oo(this.el, "mini-tree-treeLine");
    this._AsyncLoader = new mini._Tree_AsyncLoader(this);
    this._Expander = new mini._Tree_Expander(this)
};
mini.copyTo(lOO111.prototype, mini._DataTreeApplys);
oo00(lOO111, lloO10, {
    isTree: true,
    uiCls: "mini-treegrid",
    showPager: false,
    showNewRow: false,
    showCheckBox: false,
    showRadioButton: false,
    showTreeIcon: true,
    showExpandButtons: true,
    showTreeLines: false,
    showArrow: false,
    expandOnDblClick: true,
    expandOnNodeClick: false,
    loadOnExpand: true,
    _checkBoxType: "checkbox",
    iconField: "iconCls",
    _treeColumn: null,
    leafIconCls: "mini-tree-leaf",
    folderIconCls: "mini-tree-folder",
    fixedRowHeight: false,
    o11l0: "mini-tree-checkbox",
    oOOO0: "mini-tree-expand",
    OO0ol: "mini-tree-collapse",
    oOOo0: "mini-tree-node-ecicon",
    l101o: "mini-tree-nodeshow",
    useAnimation: true,
    _updateNodeTimer: null,
    imgPath: "",
    imgField: "img"
});
o01O11 = lOO111[O11Ol1];
o01O11[ol1oOl] = O1Oll;
o01O11[oOo01l] = oolO0;
o01O11[Oo0loO] = O01lo;
o01O11[OoOlO] = oll11;
o01O11[o01101] = llol;
o01O11[ollOol] = l00lo;
o01O11[l1oolo] = Ol1l0o;
o01O11[OlOOlo] = l1O10;
o01O11[OOol0l] = oOoo01;
o01O11[l0oll0] = OllO0;
o01O11[lO110o] = l1oo;
o01O11[O1l0oO] = o1o11;
o01O11[Ol00Oo] = O00l0;
o01O11[OlllO] = Ol1Oo;
o01O11[l0ll0o] = oo1lO;
o01O11[Ol111o] = ool1l;
o01O11[O1O011] = llO10o;
o01O11[O1Oll1] = lll1O;
o01O11[lo0o01] = o0oOo;
o01O11[l00ll0] = Oo01O;
o01O11[o00l0l] = Oo0Ol;
o01O11[lo1loO] = Ol1OO;
o01O11[Oo11l1] = O000;
o01O11[O0OOoO] = lOo0O;
o01O11[Ol1OOl] = O1oOl;
o01O11[OOlool] = o1Oo0;
o01O11[O01l01] = O11OoO;
o01O11[lo1l10] = O10lO;
o01O11[O0ll11] = o10oo;
o01O11[l101l0] = lllOo;
o01O11.l0lool = olo0l;
o01O11[o0110O] = OOolO;
o01O11[o1oO1l] = oo0oO;
o01O11[lO0O00] = oo010;
o01O11[O00Ooo] = llo0O;
o01O11[oOOOlO] = lo0ll;
o01O11[O0o110] = oOOll;
o01O11[loo0oO] = lll0o;
o01O11.OoO00 = o0o1l;
o01O11.oO1O = O10O;
o01O11[O1ool] = o00O;
o01O11.OoOo = looll;
o01O11[Ol0llo] = o0o0O;
o01O11[o11OO] = l10lo;
o01O11[o10OOo] = llOoO1;
o01O11[Ol0lOo] = OOOlo;
o01O11[olOO0O] = Olo1o;
o01O11[OO0000] = lo1oo;
o01O11[ool01] = ol1o1;
o01O11[ollO00] = O1O11;
o01O11[o001oo] = o1o0l;
o01O11[lo1lo] = o0ool;
o01O11[l1O1o] = lO0l0;
o01O11[OOo0lo] = oOlll;
o01O11[o10Oo0] = Ooo1o;
o01O11[o1oOOo] = O1l0l;
o01O11.oool00 = l0l01O;
o01O11[lo1l0l] = loO10;
o01O11.OlO11O = OOOl1l;
o01O11.lO0llosHTML = Oo0ol;
o01O11.ol0lHTML = OlOO1;
o01O11.O100O1HTML = OO00o;
o01O11[lO100o] = ool100;
o01O11.OO0O1 = ll1lo;
o01O11[O1Oo10] = ll0O0;
o01O11.Ol1Ool = O0Ol1;
o01O11[Ooo1ol] = O1oOol;
o01O11[OO0OOl] = oOlol;
o01O11[l11oOo] = lo01o;
o01O11[O0l0ol] = O1ol;
o01O11[lOl01] = ll11O;
o01O11[lo1000] = o0l0;
o01O11[loOl00] = O1011;
o01O11[ol0l0] = ol11O;
o01O11[l0loO0] = O111O;
o01O11[loollo] = Ollo11;
o01O11[l1lloo] = llo01;
o01O11[OOl0O0] = ool0o;
o01O11.ll1o0 = O0llO;
o01O11[OOo0Ol] = lolo1;
o01O11[lo11oO] = Ooo1o1;
o01O11[lloolo] = loOll;
o01O11[O01loo] = o0O1l;
o01O11[oO0O0o] = O1111;
o01O11[Oo1OOO] = lOoo;
o01O11[lo00OO] = o00ll;
o01O11[loO01l] = oloO;
o01O11[O11o00] = l11o1;
o01O11.OllO = Olool;
o01O11[oooo1] = lO01ol;
o01O11[oOO1o] = oo0ll;
o01O11[ooooO] = olllO;
o01O11[o1oOl] = l01oO;
o01O11[ll10OO] = OoOOl;
o01O11[lOo101] = lo1l00;
o01O11.l01lText = l0ol1;
o01O11[o110ll] = o11o1;
o01O11[l0lll0] = o0Ool;
loOOl(lOO111, "TreeGrid");
lol101 = function () {
    lol101[ollolO][OOlOl].apply(this, arguments);
    var $ = [{
        name: "node",
        header: "",
        field: this[OOll0l](),
        width: "auto",
        allowDrag: true,
        editor: {type: "textbox"}
    }];
    this._columnModel[OOll0]($);
    this._column = this._columnModel[lolo0l]("node");
    o11o(this.el, "mini-treegrid");
    l1Oo(this.el, "mini-tree-nowrap");
    this[OooOOO]("border:0")
};
oo00(lol101, lOO111, {
    _userEmptyTd: (mini.isChrome || mini.isIE6 || mini.isIE7) ? false : true,
    uiCls: "mini-tree",
    lO1Oo: "mini-tree-node-hover",
    lOOOOl: "mini-tree-selectedNode",
    _treeColumn: "node",
    defaultRowHeight: 22,
    showHeader: false,
    showTopbar: false,
    showFooter: false,
    showColumns: false,
    showHGridLines: false,
    showVGridLines: false,
    showTreeLines: true,
    setTreeColumn: null,
    setColumns: null,
    getColumns: null,
    frozen: null,
    unFrozen: null,
    showModified: false
});
lO0Oll = lol101[O11Ol1];
lO0Oll[lOoolO] = lo0lo;
lO0Oll[lO10o1] = Oo0O0;
lO0Oll[OOlol1] = OlO00;
lO0Oll.Oo1O = Ol0l0;
lO0Oll.OlOoo = olO10;
lO0Oll[O0OO0l] = l0O1o;
lO0Oll[OOool1] = loO11;
lO0Oll[lO0O00] = oO01Oo;
lO0Oll[O01ooo] = oOllO;
lO0Oll.l00OlOByEvent = oo11o;
lO0Oll[ooO1ll] = llo0;
loOOl(lol101, "Tree");
mini._Tree_Expander = function ($) {
    this.owner = $;
    Ol1O($.el, "click", this.oO0o1l, this);
    Ol1O($.el, "dblclick", this.Oo0o00, this)
};
mini._Tree_Expander[O11Ol1] = {
    _canToggle: function () {
        return !this.owner._dataSource._isNodeLoading()
    }, oO0o1l: function (B) {
        var _ = this.owner, $ = _.l00OlOByEvent(B, false);
        if (!$ || $.enabled === false)return;
        if (ol000(B.target, "mini-tree-checkbox"))return;
        var A = _.isLeaf($);
        if (ol000(B.target, _.oOOo0)) {
            if (this._canToggle() == false)return;
            _[O00Ooo]($)
        } else if (_.expandOnNodeClick && !A && !_.olOOlo) {
            if (this._canToggle() == false)return;
            _[O00Ooo]($)
        }
    }, Oo0o00: function (B) {
        var _ = this.owner, $ = _.l00OlOByEvent(B, false);
        if (!$ || $.enabled === false)return;
        if (_[l0lll0]($))return;
        var A = _.isLeaf($);
        if (_.olOOlo)return;
        if (ol000(B.target, _.oOOo0))return;
        if (_.expandOnNodeClick)return;
        if (_.expandOnDblClick && !A) {
            if (this._canToggle() == false)return;
            B.preventDefault();
            _[O00Ooo]($)
        }
    }
};
mini._Tree_AsyncLoader = function ($) {
    this.owner = $;
    $[Ol1oO1]("expand", this.__OnBeforeNodeExpand, this)
};
mini._Tree_AsyncLoader[O11Ol1] = {
    __OnBeforeNodeExpand: function (C) {
        var _ = this.owner, $ = C.node, B = _.isLeaf($), A = $[_[o1O1O0]()];
        if (!B && (!A || A.length == 0))if (_.loadOnExpand && $.asyncLoad !== false) {
            C.cancel = true;
            _.loadNode($)
        }
    }
};
mini.RadioButtonList = o11O00, mini.ValidatorBase = Ool1O1, mini.CheckBoxList = O0oloo, mini.AutoComplete = oooloO, mini.TextBoxList = lo0010, mini.OutlookMenu = o1OlOl, mini.TimeSpinner = Oo0Oo0, mini.OutlookTree = Ollo00, mini.ListControl = Ol11ol, mini.DataBinding = OO1ool, mini.TreeSelect = lo1001, mini.DatePicker = l0l1O0, mini.FileUpload = oO00O0, mini.ButtonEdit = l0lOol, mini.OutlookBar = l1lolo, mini.MenuButton = ollllO, mini.PopupEdit = o1lO1O, mini.Component = OoO11l, mini.Calendar = OOO0l1, mini.HtmlFile = O10l0l, mini.ComboBox = l1O1lO, mini.Splitter = OlO1l0, mini.TextArea = l1ol11, mini.MenuItem = o110o1, mini.Password = oooooO, mini.DataGrid = lloO10, mini.CheckBox = loo10O, mini.TreeGrid = lOO111, mini.Spinner = lOl0O, mini.ListBox = lO1OO1, mini.Include = O11o0l, mini.TextBox = l0oOoo, mini.DataSet = OOol1o, mini.Control = oo0OO1, mini.Lookup = lllo1o, mini.Window = O0OOol, mini.Button = oolo1O, mini.Layout = l0l0OO, mini.Hidden = Ol1O1o, mini.Panel = lolo00, mini.Pager = O1o0oO, mini.Popup = lO1lo0, mini.Menu = lOoO1O, mini.Tabs = lloOl1, mini.Tree = lol101, mini.Box = o1olOo, mini.Fit = o1l0l1;
mini.locale = "zh_CN";
mini.dateInfo = {
    monthsLong: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
    monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
    daysLong: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
    daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
    quarterLong: ["\u4e00\u5b63\u5ea6", "\u4e8c\u5b63\u5ea6", "\u4e09\u5b63\u5ea6", "\u56db\u5b63\u5ea6"],
    quarterShort: ["Q1", "Q2", "Q2", "Q4"],
    halfYearLong: ["\u4e0a\u534a\u5e74", "\u4e0b\u534a\u5e74"],
    patterns: {
        "d": "yyyy-M-d",
        "D": "yyyy\u5e74M\u6708d\u65e5",
        "f": "yyyy\u5e74M\u6708d\u65e5 H:mm",
        "F": "yyyy\u5e74M\u6708d\u65e5 H:mm:ss",
        "g": "yyyy-M-d H:mm",
        "G": "yyyy-M-d H:mm:ss",
        "m": "MMMd\u65e5",
        "o": "yyyy-MM-ddTHH:mm:ss.fff",
        "s": "yyyy-MM-ddTHH:mm:ss",
        "t": "H:mm",
        "T": "H:mm:ss",
        "U": "yyyy\u5e74M\u6708d\u65e5 HH:mm:ss",
        "y": "yyyy\u5e74MM\u6708"
    },
    tt: {"AM": "\u4e0a\u5348", "PM": "\u4e0b\u5348"},
    ten: {"Early": "\u4e0a\u65ec", "Mid": "\u4e2d\u65ec", "Late": "\u4e0b\u65ec"},
    today: "\u4eca\u5929",
    clockType: 24
};
mini.cultures["zh-CN"] = {
    name: "zh-CN",
    numberFormat: {
        number: {
            pattern: ["n", "-n"],
            decimals: 2,
            decimalsSeparator: ".",
            groupSeparator: ",",
            groupSize: [3]
        },
        percent: {
            pattern: ["n%", "-n%"],
            decimals: 2,
            decimalsSeparator: ".",
            groupSeparator: ",",
            groupSize: [3],
            symbol: "%"
        },
        currency: {
            pattern: ["$n", "$-n"],
            decimals: 2,
            decimalsSeparator: ".",
            groupSeparator: ",",
            groupSize: [3],
            symbol: "\xa5"
        }
    }
};
mini.culture("zh-CN");
if (mini.MessageBox)mini.copyTo(mini.MessageBox, {
    alertTitle: "\u63d0\u9192",
    confirmTitle: "\u786e\u8ba4",
    prompTitle: "\u8f93\u5165",
    prompMessage: "\u8bf7\u8f93\u5165\u5185\u5bb9\uff1a",
    buttonText: {ok: "\u786e\u5b9a", cancel: "\u53d6\u6d88", yes: "\u662f", no: "\u5426"}
});
if (OOO0l1)mini.copyTo(OOO0l1.prototype, {
    firstDayOfWeek: 0,
    yesterdayText: "\u6628\u5929",
    todayText: "\u4eca\u5929",
    clearText: "\u6e05\u9664",
    okText: "\u786e\u5b9a",
    cancelText: "\u53d6\u6d88",
    daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
    format: "yyyy\u5e74MM\u6708",
    timeFormat: "H:mm"
});
for (var id in mini) {
    var clazz = mini[id];
    if (clazz && clazz[O11Ol1] && clazz[O11Ol1].isControl) {
        clazz[O11Ol1][l0OO11] = "\u4e0d\u80fd\u4e3a\u7a7a";
        clazz[O11Ol1].loadingMsg = "\u52a0\u8f7d\u4e2d..."
    }
}
if (mini.VTypes)mini.copyTo(mini.VTypes, {
    minDateErrorText: "\u4e0d\u80fd\u5c0f\u4e8e\u65e5\u671f {0}",
    maxDateErrorText: "\u4e0d\u80fd\u5927\u4e8e\u65e5\u671f {0}",
    uniqueErrorText: "\u5b57\u6bb5\u4e0d\u80fd\u91cd\u590d",
    requiredErrorText: "\u4e0d\u80fd\u4e3a\u7a7a",
    emailErrorText: "\u8bf7\u8f93\u5165\u90ae\u4ef6\u683c\u5f0f",
    urlErrorText: "\u8bf7\u8f93\u5165URL\u683c\u5f0f",
    floatErrorText: "\u8bf7\u8f93\u5165\u6570\u5b57",
    intErrorText: "\u8bf7\u8f93\u5165\u6574\u6570",
    dateErrorText: "\u8bf7\u8f93\u5165\u65e5\u671f\u683c\u5f0f {0}",
    maxLengthErrorText: "\u4e0d\u80fd\u8d85\u8fc7 {0} \u4e2a\u5b57\u7b26",
    minLengthErrorText: "\u4e0d\u80fd\u5c11\u4e8e {0} \u4e2a\u5b57\u7b26",
    maxErrorText: "\u6570\u5b57\u4e0d\u80fd\u5927\u4e8e {0} ",
    minErrorText: "\u6570\u5b57\u4e0d\u80fd\u5c0f\u4e8e {0} ",
    rangeLengthErrorText: "\u5b57\u7b26\u957f\u5ea6\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4",
    rangeCharErrorText: "\u5b57\u7b26\u6570\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4",
    rangeErrorText: "\u6570\u5b57\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4"
});
if (O1o0oO)mini.copyTo(O1o0oO.prototype, {
    firstText: "\u9996\u9875",
    prevText: "\u4e0a\u4e00\u9875",
    nextText: "\u4e0b\u4e00\u9875",
    lastText: "\u5c3e\u9875",
    reloadText: "\u5237\u65b0",
    pageInfoText: "\u6bcf\u9875 {0} \u6761,\u5171 {1} \u6761"
});
if (lloO10)mini.copyTo(lloO10.prototype, {emptyText: "\u6ca1\u6709\u8fd4\u56de\u7684\u6570\u636e"});
if (oO00O0)oO00O0[O11Ol1].buttonText = "\u6d4f\u89c8...";
if (O10l0l)O10l0l[O11Ol1].buttonText = "\u6d4f\u89c8...";
if (window.mini.Gantt) {
    mini.GanttView.ShortWeeks = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];
    mini.GanttView.LongWeeks = ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"];
    mini.Gantt.PredecessorLinkType = [{ID: 0, Name: "\u5b8c\u6210-\u5b8c\u6210(FF)", Short: "FF"}, {
        ID: 1,
        Name: "\u5b8c\u6210-\u5f00\u59cb(FS)",
        Short: "FS"
    }, {ID: 2, Name: "\u5f00\u59cb-\u5b8c\u6210(SF)", Short: "SF"}, {
        ID: 3,
        Name: "\u5f00\u59cb-\u5f00\u59cb(SS)",
        Short: "SS"
    }];
    mini.Gantt.ConstraintType = [{ID: 0, Name: "\u8d8a\u65e9\u8d8a\u597d"}, {
        ID: 1,
        Name: "\u8d8a\u665a\u8d8a\u597d"
    }, {ID: 2, Name: "\u5fc5\u987b\u5f00\u59cb\u4e8e"}, {ID: 3, Name: "\u5fc5\u987b\u5b8c\u6210\u4e8e"}, {
        ID: 4,
        Name: "\u4e0d\u5f97\u65e9\u4e8e...\u5f00\u59cb"
    }, {ID: 5, Name: "\u4e0d\u5f97\u665a\u4e8e...\u5f00\u59cb"}, {
        ID: 6,
        Name: "\u4e0d\u5f97\u65e9\u4e8e...\u5b8c\u6210"
    }, {ID: 7, Name: "\u4e0d\u5f97\u665a\u4e8e...\u5b8c\u6210"}];
    mini.copyTo(mini.Gantt, {
        ID_Text: "\u6807\u8bc6\u53f7",
        Name_Text: "\u4efb\u52a1\u540d\u79f0",
        PercentComplete_Text: "\u8fdb\u5ea6",
        Duration_Text: "\u5de5\u671f",
        Start_Text: "\u5f00\u59cb\u65e5\u671f",
        Finish_Text: "\u5b8c\u6210\u65e5\u671f",
        Critical_Text: "\u5173\u952e\u4efb\u52a1",
        PredecessorLink_Text: "\u524d\u7f6e\u4efb\u52a1",
        Work_Text: "\u5de5\u65f6",
        Priority_Text: "\u91cd\u8981\u7ea7\u522b",
        Weight_Text: "\u6743\u91cd",
        OutlineNumber_Text: "\u5927\u7eb2\u5b57\u6bb5",
        OutlineLevel_Text: "\u4efb\u52a1\u5c42\u7ea7",
        ActualStart_Text: "\u5b9e\u9645\u5f00\u59cb\u65e5\u671f",
        ActualFinish_Text: "\u5b9e\u9645\u5b8c\u6210\u65e5\u671f",
        WBS_Text: "WBS",
        ConstraintType_Text: "\u9650\u5236\u7c7b\u578b",
        ConstraintDate_Text: "\u9650\u5236\u65e5\u671f",
        Department_Text: "\u90e8\u95e8",
        Principal_Text: "\u8d1f\u8d23\u4eba",
        Assignments_Text: "\u8d44\u6e90\u540d\u79f0",
        Summary_Text: "\u6458\u8981\u4efb\u52a1",
        Task_Text: "\u4efb\u52a1",
        Baseline_Text: "\u6bd4\u8f83\u57fa\u51c6",
        LinkType_Text: "\u94fe\u63a5\u7c7b\u578b",
        LinkLag_Text: "\u5ef6\u9694\u65f6\u95f4",
        From_Text: "\u4ece",
        To_Text: "\u5230",
        Goto_Text: "\u8f6c\u5230\u4efb\u52a1",
        UpGrade_Text: "\u5347\u7ea7",
        DownGrade_Text: "\u964d\u7ea7",
        Add_Text: "\u65b0\u589e",
        Edit_Text: "\u7f16\u8f91",
        Remove_Text: "\u5220\u9664",
        Move_Text: "\u79fb\u52a8",
        ZoomIn_Text: "\u653e\u5927",
        ZoomOut_Text: "\u7f29\u5c0f",
        Deselect_Text: "\u53d6\u6d88\u9009\u62e9",
        Split_Text: "\u62c6\u5206\u4efb\u52a1"
    })
}