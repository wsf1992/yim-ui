import R from "vue";
function H(h, n, s, d, a, y, _, g) {
  var l = typeof h == "function" ? h.options : h;
  n && (l.render = n, l.staticRenderFns = s, l._compiled = !0), d && (l.functional = !0), y && (l._scopeId = "data-v-" + y);
  var m;
  if (_ ? (m = function(p) {
    p = p || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !p && typeof __VUE_SSR_CONTEXT__ != "undefined" && (p = __VUE_SSR_CONTEXT__), a && a.call(this, p), p && p._registeredComponents && p._registeredComponents.add(_);
  }, l._ssrRegister = m) : a && (m = g ? function() {
    a.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), m)
    if (l.functional) {
      l._injectStyles = m;
      var C = l.render;
      l.render = function(v, b) {
        return m.call(b), C(v, b);
      };
    } else {
      var O = l.beforeCreate;
      l.beforeCreate = O ? [].concat(O, m) : [m];
    }
  return {
    exports: h,
    options: l
  };
}
const ae = {
  name: "YmButton",
  props: {
    icon: {
      type: String,
      default: ""
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },
  methods: {
    handleClick(h) {
      this.$emit("click", h);
    }
  }
};
var le = function() {
  var n = this, s = n._self._c;
  return s("button", { staticClass: "ym-button", class: [{
    "is-disabled": n.disabled,
    "is-loading": n.loading
  }], attrs: { disabled: n.disabled || n.loading, autofocus: n.autofocus, type: "button" }, on: { click: n.handleClick } }, [n.loading ? s("i", { staticClass: "el-icon-loading" }) : n._e(), n.icon && !n.loading ? s("i", { class: n.icon }) : n._e(), n.$slots.default ? s("span", [n._t("default")], 2) : n._e()]);
}, fe = [], ue = /* @__PURE__ */ H(
  ae,
  le,
  fe,
  !1,
  null,
  "c611a2cd",
  null,
  null
);
const U = ue.exports;
const pe = {
  name: "YmSelect",
  inheritAttrs: !1,
  props: {
    isQuery: {
      //是都需要搜索
      type: Boolean,
      default: !1
    },
    dataList: {
      //展示的列表
      type: Array,
      default: function() {
        return [];
      }
    },
    alldeFault: {
      //全选的默认Object
      type: Object,
      require: !1,
      default: function() {
        return {};
      }
    },
    value: {
      type: [String, Number],
      require: !0,
      default: ""
    },
    width: {
      type: String,
      default: "150px"
    },
    themeColor: {
      // 自定义 筛选框颜色：false 为白色，true为灰色
      type: Boolean,
      default: !1
    },
    prop: {
      //自定义prop
      type: Object,
      default: function() {
        return { key: "id", label: "name" };
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "small"
    }
  },
  data() {
    return {
      show_dropdown: !1,
      selctId: "",
      timer: null,
      //以下字段用于和prop字段做区分
      data_: [],
      query_: "",
      loading_: !1,
      busy_: !1,
      keyValue_: {},
      hardReset: !0,
      alldeFault_: {},
      prop_: {}
    };
  },
  watch: {
    query_(h, n) {
      clearTimeout(this.timer), this.timer = setTimeout(() => {
        this.data_ = this.dataList.map((s) => ({
          key: s[this.prop_.key],
          label: s[this.prop_.label]
        })).filter((s) => h ? s.label.indexOf(h) != "-1" : !0);
      }, 300);
    },
    dataList(h, n) {
      h && this.get_data();
    }
  },
  methods: {
    handler(h) {
      this.show_dropdown = !1, this.$emit("input", h.key), this.$nextTick(() => {
        this.$emit("change", h), this.$parent && this.$parent.validate("change");
      });
    },
    getkeyValue(h) {
      this.keyValue_ = Object.assign({}, this.keyValue_);
      let n = Object.prototype.toString.call(h);
      n === "[object Array]" ? h.forEach((s) => {
        this.keyValue_[s.key] = s.label;
      }) : n === "[object Object]" && (this.keyValue_[h.key] = h.label);
    },
    reSet() {
      this.hardReset = !1, this.$nextTick(() => {
        this.hardReset = !0;
      });
    },
    get_alldeFault() {
      if (!Object.keys(this.alldeFault).length)
        return;
      let { key: h = "", label: n = "-全选-" } = this.alldeFault;
      this.alldeFault_ = { key: h, label: n };
    },
    get_prop() {
      let { key: h = "id", label: n = "name" } = this.prop;
      this.prop_ = { key: h, label: n };
    },
    get_data() {
      this.data_ = this.dataList.map((h) => ({
        key: h[this.prop_.key],
        label: h[this.prop_.label]
      })), this.getkeyValue(this.data_);
    }
  },
  created() {
    this.get_alldeFault(), this.get_prop(), Object.keys(this.alldeFault).length && this.getkeyValue(this.alldeFault_), this.dataList.length && this.get_data();
  },
  computed: {
    selctLabel: function() {
      return this.keyValue_[this.value];
    }
  }
};
var de = function() {
  var n = this, s = n._self._c;
  return s("div", { staticClass: "dis-i-b ver-ali-mid" }, [s("el-popover", { attrs: { placement: "bottom-start", trigger: "click", width: "230" }, model: { value: n.show_dropdown, callback: function(d) {
    n.show_dropdown = d;
  }, expression: "show_dropdown" } }, [s("template", { slot: "reference" }, [s("div", { class: ["display-box", "my-select", "select-size-" + n.size, { "theme-color": n.themeColor, "not-click": n.disabled }], style: { width: n.width } }, [n.hardReset ? s("div", { staticClass: "display-content" }, [n._v(n._s(n.selctLabel))]) : n._e(), s("i", { directives: [{ name: "show", rawName: "v-show", value: !n.displayText, expression: "!displayText" }], staticClass: "display-icon el-icon-caret-bottom" })])]), s("div", { class: { hide: !n.show_dropdown } }, [n.isQuery ? s("div", { staticClass: "padd-all-10" }, [s("el-input", n._b({ staticClass: "input-34", model: { value: n.query_, callback: function(d) {
    n.query_ = typeof d == "string" ? d.trim() : d;
  }, expression: "query_" } }, "el-input", n.$attrs, !1))], 1) : n._e(), s("div", [s("div", { staticStyle: { height: "260px", overflow: "auto" } }, [s("div", { directives: [{ name: "show", rawName: "v-show", value: !n.query_, expression: "!query_" }] }, [Object.keys(n.alldeFault).length ? s("div", { key: n.alldeFault_.key, staticClass: "content_option", on: { click: function(d) {
    return d.stopPropagation(), n.handler(n.alldeFault_);
  } } }, [s("span", { staticClass: "ellipsis", style: n.value === n.alldeFault_.key ? "color: #229DFF" : "color: #333", attrs: { title: n.alldeFault_.label } }, [n._v(n._s(n.alldeFault_.label))]), s("i", { directives: [{ name: "show", rawName: "v-show", value: n.value == n.alldeFault_.key, expression: "value == alldeFault_.key" }], staticClass: "el-icon-check", staticStyle: { color: "#229DFF", "line-height": "28px" } })]) : n._e()]), n._l(n.data_, function(d, a) {
    return s("div", { key: a }, [s("div", { key: d.key, staticClass: "content_option", on: { click: function(y) {
      return y.stopPropagation(), n.handler(d);
    } } }, [s("span", { staticClass: "ellipsis", style: n.value === d.key ? "color: #229DFF" : "color: #333", attrs: { title: d.label } }, [n._v(n._s(d.label))]), s("i", { directives: [{ name: "show", rawName: "v-show", value: n.value === d.key, expression: "value === item.key" }], staticClass: "el-icon-check", staticStyle: { color: "#229DFF", "line-height": "28px" } })])]);
  })], 2)])])], 2)], 1);
}, ce = [], he = /* @__PURE__ */ H(
  pe,
  de,
  ce,
  !1,
  null,
  "c671e2e8",
  null,
  null
);
const Z = he.exports;
function ve(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var ne = { exports: {} }, P = {}, G;
function J() {
  if (G)
    return P;
  G = 1, P.__esModule = !0, P.isInContainer = P.getScrollContainer = P.isScroll = P.getStyle = P.once = P.off = P.on = void 0;
  var h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  };
  P.hasClass = p, P.addClass = v, P.removeClass = b, P.setStyle = x;
  var n = R, s = d(n);
  function d(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = s.default.prototype.$isServer, y = /([\:\-\_]+(.))/g, _ = /^moz([A-Z])/, g = a ? 0 : Number(document.documentMode), l = function(e) {
    return (e || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
  }, m = function(e) {
    return e.replace(y, function(t, r, i, f) {
      return f ? i.toUpperCase() : i;
    }).replace(_, "Moz$1");
  }, C = P.on = function() {
    return !a && document.addEventListener ? function(o, e, t) {
      o && e && t && o.addEventListener(e, t, !1);
    } : function(o, e, t) {
      o && e && t && o.attachEvent("on" + e, t);
    };
  }(), O = P.off = function() {
    return !a && document.removeEventListener ? function(o, e, t) {
      o && e && o.removeEventListener(e, t, !1);
    } : function(o, e, t) {
      o && e && o.detachEvent("on" + e, t);
    };
  }();
  P.once = function(e, t, r) {
    var i = function f() {
      r && r.apply(this, arguments), O(e, t, f);
    };
    C(e, t, i);
  };
  function p(o, e) {
    if (!o || !e)
      return !1;
    if (e.indexOf(" ") !== -1)
      throw new Error("className should not contain space.");
    return o.classList ? o.classList.contains(e) : (" " + o.className + " ").indexOf(" " + e + " ") > -1;
  }
  function v(o, e) {
    if (o) {
      for (var t = o.className, r = (e || "").split(" "), i = 0, f = r.length; i < f; i++) {
        var u = r[i];
        u && (o.classList ? o.classList.add(u) : p(o, u) || (t += " " + u));
      }
      o.classList || o.setAttribute("class", t);
    }
  }
  function b(o, e) {
    if (!(!o || !e)) {
      for (var t = e.split(" "), r = " " + o.className + " ", i = 0, f = t.length; i < f; i++) {
        var u = t[i];
        u && (o.classList ? o.classList.remove(u) : p(o, u) && (r = r.replace(" " + u + " ", " ")));
      }
      o.classList || o.setAttribute("class", l(r));
    }
  }
  var E = P.getStyle = g < 9 ? function(o, e) {
    if (!a) {
      if (!o || !e)
        return null;
      e = m(e), e === "float" && (e = "styleFloat");
      try {
        switch (e) {
          case "opacity":
            try {
              return o.filters.item("alpha").opacity / 100;
            } catch (t) {
              return 1;
            }
          default:
            return o.style[e] || o.currentStyle ? o.currentStyle[e] : null;
        }
      } catch (t) {
        return o.style[e];
      }
    }
  } : function(o, e) {
    if (!a) {
      if (!o || !e)
        return null;
      e = m(e), e === "float" && (e = "cssFloat");
      try {
        var t = document.defaultView.getComputedStyle(o, "");
        return o.style[e] || t ? t[e] : null;
      } catch (r) {
        return o.style[e];
      }
    }
  };
  function x(o, e, t) {
    if (!(!o || !e))
      if ((typeof e == "undefined" ? "undefined" : h(e)) === "object")
        for (var r in e)
          e.hasOwnProperty(r) && x(o, r, e[r]);
      else
        e = m(e), e === "opacity" && g < 9 ? o.style.filter = isNaN(t) ? "" : "alpha(opacity=" + t * 100 + ")" : o.style[e] = t;
  }
  var c = P.isScroll = function(e, t) {
    if (!a) {
      var r = t != null, i = r ? t ? E(e, "overflow-y") : E(e, "overflow-x") : E(e, "overflow");
      return i.match(/(scroll|auto|overlay)/);
    }
  };
  return P.getScrollContainer = function(e, t) {
    if (!a) {
      for (var r = e; r; ) {
        if ([window, document, document.documentElement].includes(r))
          return window;
        if (c(r, t))
          return r;
        r = r.parentNode;
      }
      return r;
    }
  }, P.isInContainer = function(e, t) {
    if (a || !e || !t)
      return !1;
    var r = e.getBoundingClientRect(), i = void 0;
    return [window, document, document.documentElement, null, void 0].includes(t) ? i = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    } : i = t.getBoundingClientRect(), r.top < i.bottom && r.bottom > i.top && r.right > i.left && r.left < i.right;
  }, P;
}
var w = {}, $ = {}, Y;
function me() {
  if (Y)
    return $;
  Y = 1, $.__esModule = !0, $.isDefined = $.isUndefined = $.isFunction = void 0;
  var h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  };
  $.isString = a, $.isObject = y, $.isHtmlElement = _;
  var n = R, s = d(n);
  function d(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a(l) {
    return Object.prototype.toString.call(l) === "[object String]";
  }
  function y(l) {
    return Object.prototype.toString.call(l) === "[object Object]";
  }
  function _(l) {
    return l && l.nodeType === Node.ELEMENT_NODE;
  }
  var g = function(m) {
    var C = {};
    return m && C.toString.call(m) === "[object Function]";
  };
  return typeof /./ != "function" && (typeof Int8Array == "undefined" ? "undefined" : h(Int8Array)) !== "object" && (s.default.prototype.$isServer || typeof document.childNodes != "function") && ($.isFunction = g = function(m) {
    return typeof m == "function" || !1;
  }), $.isFunction = g, $.isUndefined = function(m) {
    return m === void 0;
  }, $.isDefined = function(m) {
    return m != null;
  }, $;
}
var X;
function ye() {
  if (X)
    return w;
  X = 1, w.__esModule = !0, w.isMac = w.isEmpty = w.isEqual = w.arrayEquals = w.looseEqual = w.capitalize = w.kebabCase = w.autoprefixer = w.isFirefox = w.isEdge = w.isIE = w.coerceTruthyValueToArray = w.arrayFind = w.arrayFindIndex = w.escapeRegexpString = w.valueEquals = w.generateId = w.getValueByPath = void 0;
  var h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  };
  w.noop = _, w.hasOwn = g, w.toObject = m, w.getPropByPath = C, w.rafThrottle = E, w.objToArray = x;
  var n = R, s = a(n), d = me();
  function a(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var y = Object.prototype.hasOwnProperty;
  function _() {
  }
  function g(c, o) {
    return y.call(c, o);
  }
  function l(c, o) {
    for (var e in o)
      c[e] = o[e];
    return c;
  }
  function m(c) {
    for (var o = {}, e = 0; e < c.length; e++)
      c[e] && l(o, c[e]);
    return o;
  }
  w.getValueByPath = function(o, e) {
    e = e || "";
    for (var t = e.split("."), r = o, i = null, f = 0, u = t.length; f < u; f++) {
      var S = t[f];
      if (!r)
        break;
      if (f === u - 1) {
        i = r[S];
        break;
      }
      r = r[S];
    }
    return i;
  };
  function C(c, o, e) {
    var t = c;
    o = o.replace(/\[(\w+)\]/g, ".$1"), o = o.replace(/^\./, "");
    for (var r = o.split("."), i = 0, f = r.length; i < f - 1 && !(!t && !e); ++i) {
      var u = r[i];
      if (u in t)
        t = t[u];
      else {
        if (e)
          throw new Error("please transfer a valid prop path to form item!");
        break;
      }
    }
    return {
      o: t,
      k: r[i],
      v: t ? t[r[i]] : null
    };
  }
  w.generateId = function() {
    return Math.floor(Math.random() * 1e4);
  }, w.valueEquals = function(o, e) {
    if (o === e)
      return !0;
    if (!(o instanceof Array) || !(e instanceof Array) || o.length !== e.length)
      return !1;
    for (var t = 0; t !== o.length; ++t)
      if (o[t] !== e[t])
        return !1;
    return !0;
  }, w.escapeRegexpString = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return String(o).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  };
  var O = w.arrayFindIndex = function(o, e) {
    for (var t = 0; t !== o.length; ++t)
      if (e(o[t]))
        return t;
    return -1;
  };
  w.arrayFind = function(o, e) {
    var t = O(o, e);
    return t !== -1 ? o[t] : void 0;
  }, w.coerceTruthyValueToArray = function(o) {
    return Array.isArray(o) ? o : o ? [o] : [];
  }, w.isIE = function() {
    return !s.default.prototype.$isServer && !isNaN(Number(document.documentMode));
  }, w.isEdge = function() {
    return !s.default.prototype.$isServer && navigator.userAgent.indexOf("Edge") > -1;
  }, w.isFirefox = function() {
    return !s.default.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
  }, w.autoprefixer = function(o) {
    if ((typeof o == "undefined" ? "undefined" : h(o)) !== "object")
      return o;
    var e = ["transform", "transition", "animation"], t = ["ms-", "webkit-"];
    return e.forEach(function(r) {
      var i = o[r];
      r && i && t.forEach(function(f) {
        o[f + r] = i;
      });
    }), o;
  }, w.kebabCase = function(o) {
    var e = /([^-])([A-Z])/g;
    return o.replace(e, "$1-$2").replace(e, "$1-$2").toLowerCase();
  }, w.capitalize = function(o) {
    return (0, d.isString)(o) ? o.charAt(0).toUpperCase() + o.slice(1) : o;
  };
  var p = w.looseEqual = function(o, e) {
    var t = (0, d.isObject)(o), r = (0, d.isObject)(e);
    return t && r ? JSON.stringify(o) === JSON.stringify(e) : !t && !r ? String(o) === String(e) : !1;
  }, v = w.arrayEquals = function(o, e) {
    if (o = o || [], e = e || [], o.length !== e.length)
      return !1;
    for (var t = 0; t < o.length; t++)
      if (!p(o[t], e[t]))
        return !1;
    return !0;
  };
  w.isEqual = function(o, e) {
    return Array.isArray(o) && Array.isArray(e) ? v(o, e) : p(o, e);
  };
  var b = w.isEmpty = function(o) {
    if (o == null)
      return !0;
    if (typeof o == "boolean")
      return !1;
    if (typeof o == "number")
      return !o;
    if (o instanceof Error)
      return o.message === "";
    switch (Object.prototype.toString.call(o)) {
      case "[object String]":
      case "[object Array]":
        return !o.length;
      case "[object File]":
      case "[object Map]":
      case "[object Set]":
        return !o.size;
      case "[object Object]":
        return !Object.keys(o).length;
    }
    return !1;
  };
  function E(c) {
    var o = !1;
    return function() {
      for (var e = this, t = arguments.length, r = Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
      o || (o = !0, window.requestAnimationFrame(function(f) {
        c.apply(e, r), o = !1;
      }));
    };
  }
  function x(c) {
    return Array.isArray(c) ? c : b(c) ? [] : [c];
  }
  return w.isMac = function() {
    return !s.default.prototype.$isServer && /macintosh|mac os x/i.test(navigator.userAgent);
  }, w;
}
var B = {}, q = {}, N = {}, K;
function ge() {
  return K || (K = 1, N.__esModule = !0, N.default = function(h) {
    for (var n = 1, s = arguments.length; n < s; n++) {
      var d = arguments[n] || {};
      for (var a in d)
        if (d.hasOwnProperty(a)) {
          var y = d[a];
          y !== void 0 && (h[a] = y);
        }
    }
    return h;
  }), N;
}
var z = {}, Q;
function _e() {
  if (Q)
    return z;
  Q = 1, z.__esModule = !0;
  var h = R, n = d(h), s = J();
  function d(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var a = !1, y = !1, _ = void 0, g = function() {
    if (!n.default.prototype.$isServer) {
      var p = m.modalDom;
      return p ? a = !0 : (a = !1, p = document.createElement("div"), m.modalDom = p, p.addEventListener("touchmove", function(v) {
        v.preventDefault(), v.stopPropagation();
      }), p.addEventListener("click", function() {
        m.doOnModalClick && m.doOnModalClick();
      })), p;
    }
  }, l = {}, m = {
    modalFade: !0,
    getInstance: function(p) {
      return l[p];
    },
    register: function(p, v) {
      p && v && (l[p] = v);
    },
    deregister: function(p) {
      p && (l[p] = null, delete l[p]);
    },
    nextZIndex: function() {
      return m.zIndex++;
    },
    modalStack: [],
    doOnModalClick: function() {
      var p = m.modalStack[m.modalStack.length - 1];
      if (p) {
        var v = m.getInstance(p.id);
        v && v.closeOnClickModal && v.close();
      }
    },
    openModal: function(p, v, b, E, x) {
      if (!n.default.prototype.$isServer && !(!p || v === void 0)) {
        this.modalFade = x;
        for (var c = this.modalStack, o = 0, e = c.length; o < e; o++) {
          var t = c[o];
          if (t.id === p)
            return;
        }
        var r = g();
        if ((0, s.addClass)(r, "v-modal"), this.modalFade && !a && (0, s.addClass)(r, "v-modal-enter"), E) {
          var i = E.trim().split(/\s+/);
          i.forEach(function(f) {
            return (0, s.addClass)(r, f);
          });
        }
        setTimeout(function() {
          (0, s.removeClass)(r, "v-modal-enter");
        }, 200), b && b.parentNode && b.parentNode.nodeType !== 11 ? b.parentNode.appendChild(r) : document.body.appendChild(r), v && (r.style.zIndex = v), r.tabIndex = 0, r.style.display = "", this.modalStack.push({ id: p, zIndex: v, modalClass: E });
      }
    },
    closeModal: function(p) {
      var v = this.modalStack, b = g();
      if (v.length > 0) {
        var E = v[v.length - 1];
        if (E.id === p) {
          if (E.modalClass) {
            var x = E.modalClass.trim().split(/\s+/);
            x.forEach(function(o) {
              return (0, s.removeClass)(b, o);
            });
          }
          v.pop(), v.length > 0 && (b.style.zIndex = v[v.length - 1].zIndex);
        } else
          for (var c = v.length - 1; c >= 0; c--)
            if (v[c].id === p) {
              v.splice(c, 1);
              break;
            }
      }
      v.length === 0 && (this.modalFade && (0, s.addClass)(b, "v-modal-leave"), setTimeout(function() {
        v.length === 0 && (b.parentNode && b.parentNode.removeChild(b), b.style.display = "none", m.modalDom = void 0), (0, s.removeClass)(b, "v-modal-leave");
      }, 200));
    }
  };
  Object.defineProperty(m, "zIndex", {
    configurable: !0,
    get: function() {
      return y || (_ = _ || (n.default.prototype.$ELEMENT || {}).zIndex || 2e3, y = !0), _;
    },
    set: function(p) {
      _ = p;
    }
  });
  var C = function() {
    if (!n.default.prototype.$isServer && m.modalStack.length > 0) {
      var p = m.modalStack[m.modalStack.length - 1];
      if (!p)
        return;
      var v = m.getInstance(p.id);
      return v;
    }
  };
  return n.default.prototype.$isServer || window.addEventListener("keydown", function(O) {
    if (O.keyCode === 27) {
      var p = C();
      p && p.closeOnPressEscape && (p.handleClose ? p.handleClose() : p.handleAction ? p.handleAction("cancel") : p.close());
    }
  }), z.default = m, z;
}
var W = {}, ee;
function be() {
  if (ee)
    return W;
  ee = 1, W.__esModule = !0, W.default = function() {
    if (n.default.prototype.$isServer)
      return 0;
    if (d !== void 0)
      return d;
    var a = document.createElement("div");
    a.className = "el-scrollbar__wrap", a.style.visibility = "hidden", a.style.width = "100px", a.style.position = "absolute", a.style.top = "-9999px", document.body.appendChild(a);
    var y = a.offsetWidth;
    a.style.overflow = "scroll";
    var _ = document.createElement("div");
    _.style.width = "100%", a.appendChild(_);
    var g = _.offsetWidth;
    return a.parentNode.removeChild(a), d = y - g, d;
  };
  var h = R, n = s(h);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var d = void 0;
  return W;
}
var te;
function we() {
  if (te)
    return q;
  te = 1, q.__esModule = !0, q.PopupManager = void 0;
  var h = R, n = m(h), s = ge(), d = m(s), a = _e(), y = m(a), _ = be(), g = m(_), l = J();
  function m(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var C = 1, O = void 0;
  return q.default = {
    props: {
      visible: {
        type: Boolean,
        default: !1
      },
      openDelay: {},
      closeDelay: {},
      zIndex: {},
      modal: {
        type: Boolean,
        default: !1
      },
      modalFade: {
        type: Boolean,
        default: !0
      },
      modalClass: {},
      modalAppendToBody: {
        type: Boolean,
        default: !1
      },
      lockScroll: {
        type: Boolean,
        default: !0
      },
      closeOnPressEscape: {
        type: Boolean,
        default: !1
      },
      closeOnClickModal: {
        type: Boolean,
        default: !1
      }
    },
    beforeMount: function() {
      this._popupId = "popup-" + C++, y.default.register(this._popupId, this);
    },
    beforeDestroy: function() {
      y.default.deregister(this._popupId), y.default.closeModal(this._popupId), this.restoreBodyStyle();
    },
    data: function() {
      return {
        opened: !1,
        bodyPaddingRight: null,
        computedBodyPaddingRight: 0,
        withoutHiddenClass: !0,
        rendered: !1
      };
    },
    watch: {
      visible: function(v) {
        var b = this;
        if (v) {
          if (this._opening)
            return;
          this.rendered ? this.open() : (this.rendered = !0, n.default.nextTick(function() {
            b.open();
          }));
        } else
          this.close();
      }
    },
    methods: {
      open: function(v) {
        var b = this;
        this.rendered || (this.rendered = !0);
        var E = (0, d.default)({}, this.$props || this, v);
        this._closeTimer && (clearTimeout(this._closeTimer), this._closeTimer = null), clearTimeout(this._openTimer);
        var x = Number(E.openDelay);
        x > 0 ? this._openTimer = setTimeout(function() {
          b._openTimer = null, b.doOpen(E);
        }, x) : this.doOpen(E);
      },
      doOpen: function(v) {
        if (!this.$isServer && !(this.willOpen && !this.willOpen()) && !this.opened) {
          this._opening = !0;
          var b = this.$el, E = v.modal, x = v.zIndex;
          if (x && (y.default.zIndex = x), E && (this._closing && (y.default.closeModal(this._popupId), this._closing = !1), y.default.openModal(this._popupId, y.default.nextZIndex(), this.modalAppendToBody ? void 0 : b, v.modalClass, v.modalFade), v.lockScroll)) {
            this.withoutHiddenClass = !(0, l.hasClass)(document.body, "el-popup-parent--hidden"), this.withoutHiddenClass && (this.bodyPaddingRight = document.body.style.paddingRight, this.computedBodyPaddingRight = parseInt((0, l.getStyle)(document.body, "paddingRight"), 10)), O = (0, g.default)();
            var c = document.documentElement.clientHeight < document.body.scrollHeight, o = (0, l.getStyle)(document.body, "overflowY");
            O > 0 && (c || o === "scroll") && this.withoutHiddenClass && (document.body.style.paddingRight = this.computedBodyPaddingRight + O + "px"), (0, l.addClass)(document.body, "el-popup-parent--hidden");
          }
          getComputedStyle(b).position === "static" && (b.style.position = "absolute"), b.style.zIndex = y.default.nextZIndex(), this.opened = !0, this.onOpen && this.onOpen(), this.doAfterOpen();
        }
      },
      doAfterOpen: function() {
        this._opening = !1;
      },
      close: function() {
        var v = this;
        if (!(this.willClose && !this.willClose())) {
          this._openTimer !== null && (clearTimeout(this._openTimer), this._openTimer = null), clearTimeout(this._closeTimer);
          var b = Number(this.closeDelay);
          b > 0 ? this._closeTimer = setTimeout(function() {
            v._closeTimer = null, v.doClose();
          }, b) : this.doClose();
        }
      },
      doClose: function() {
        this._closing = !0, this.onClose && this.onClose(), this.lockScroll && setTimeout(this.restoreBodyStyle, 200), this.opened = !1, this.doAfterClose();
      },
      doAfterClose: function() {
        y.default.closeModal(this._popupId), this._closing = !1;
      },
      restoreBodyStyle: function() {
        this.modal && this.withoutHiddenClass && (document.body.style.paddingRight = this.bodyPaddingRight, (0, l.removeClass)(document.body, "el-popup-parent--hidden")), this.withoutHiddenClass = !0;
      }
    }
  }, q.PopupManager = y.default, q;
}
var V = { exports: {} };
V.exports;
var re;
function Oe() {
  return re || (re = 1, function(h) {
    var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    };
    (function(s, d) {
      n(h) === "object" && h.exports ? h.exports = d() : s.Popper = d();
    })(void 0, function() {
      var s = window, d = {
        // placement of the popper
        placement: "bottom",
        gpuAcceleration: !0,
        // shift popper from its origin by the given amount of pixels (can be negative)
        offset: 0,
        // the element which will act as boundary of the popper
        boundariesElement: "viewport",
        // amount of pixel used to define a minimum distance between the boundaries and the popper
        boundariesPadding: 5,
        // popper will try to prevent overflow following this order,
        // by default, then, it could overflow on the left and on top of the boundariesElement
        preventOverflowOrder: ["left", "right", "top", "bottom"],
        // the behavior used by flip to change the placement of the popper
        flipBehavior: "flip",
        arrowElement: "[x-arrow]",
        arrowOffset: 0,
        // list of functions used to modify the offsets before they are applied to the popper
        modifiers: ["shift", "offset", "preventOverflow", "keepTogether", "arrow", "flip", "applyStyle"],
        modifiersIgnored: [],
        forceAbsolute: !1
      };
      function a(e, t, r) {
        this._reference = e.jquery ? e[0] : e, this.state = {};
        var i = typeof t == "undefined" || t === null, f = t && Object.prototype.toString.call(t) === "[object Object]";
        return i || f ? this._popper = this.parse(f ? t : {}) : this._popper = t.jquery ? t[0] : t, this._options = Object.assign({}, d, r), this._options.modifiers = this._options.modifiers.map(function(u) {
          if (this._options.modifiersIgnored.indexOf(u) === -1)
            return u === "applyStyle" && this._popper.setAttribute("x-placement", this._options.placement), this.modifiers[u] || u;
        }.bind(this)), this.state.position = this._getPosition(this._popper, this._reference), v(this._popper, { position: this.state.position, top: 0 }), this.update(), this._setupEventListeners(), this;
      }
      a.prototype.destroy = function() {
        return this._popper.removeAttribute("x-placement"), this._popper.style.left = "", this._popper.style.position = "", this._popper.style.top = "", this._popper.style[o("transform")] = "", this._removeEventListeners(), this._options.removeOnDestroy && this._popper.remove(), this;
      }, a.prototype.update = function() {
        var e = { instance: this, styles: {} };
        e.placement = this._options.placement, e._originalPlacement = this._options.placement, e.offsets = this._getOffsets(this._popper, this._reference, e.placement), e.boundaries = this._getBoundaries(e, this._options.boundariesPadding, this._options.boundariesElement), e = this.runModifiers(e, this._options.modifiers), typeof this.state.updateCallback == "function" && this.state.updateCallback(e);
      }, a.prototype.onCreate = function(e) {
        return e(this), this;
      }, a.prototype.onUpdate = function(e) {
        return this.state.updateCallback = e, this;
      }, a.prototype.parse = function(e) {
        var t = {
          tagName: "div",
          classNames: ["popper"],
          attributes: [],
          parent: s.document.body,
          content: "",
          contentType: "text",
          arrowTagName: "div",
          arrowClassNames: ["popper__arrow"],
          arrowAttributes: ["x-arrow"]
        };
        e = Object.assign({}, t, e);
        var r = s.document, i = r.createElement(e.tagName);
        if (S(i, e.classNames), k(i, e.attributes), e.contentType === "node" ? i.appendChild(e.content.jquery ? e.content[0] : e.content) : e.contentType === "html" ? i.innerHTML = e.content : i.textContent = e.content, e.arrowTagName) {
          var f = r.createElement(e.arrowTagName);
          S(f, e.arrowClassNames), k(f, e.arrowAttributes), i.appendChild(f);
        }
        var u = e.parent.jquery ? e.parent[0] : e.parent;
        if (typeof u == "string") {
          if (u = r.querySelectorAll(e.parent), u.length > 1 && console.warn("WARNING: the given `parent` query(" + e.parent + ") matched more than one element, the first one will be used"), u.length === 0)
            throw "ERROR: the given `parent` doesn't exists!";
          u = u[0];
        }
        return u.length > 1 && !(u instanceof Element) && (console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"), u = u[0]), u.appendChild(i), i;
        function S(M, T) {
          T.forEach(function(A) {
            M.classList.add(A);
          });
        }
        function k(M, T) {
          T.forEach(function(A) {
            M.setAttribute(A.split(":")[0], A.split(":")[1] || "");
          });
        }
      }, a.prototype._getPosition = function(e, t) {
        if (C(t), this._options.forceAbsolute)
          return "absolute";
        var r = p(t);
        return r ? "fixed" : "absolute";
      }, a.prototype._getOffsets = function(e, t, r) {
        r = r.split("-")[0];
        var i = {};
        i.position = this.state.position;
        var f = i.position === "fixed", u = c(t, C(e), f), S = y(e);
        return ["right", "left"].indexOf(r) !== -1 ? (i.top = u.top + u.height / 2 - S.height / 2, r === "left" ? i.left = u.left - S.width : i.left = u.right) : (i.left = u.left + u.width / 2 - S.width / 2, r === "top" ? i.top = u.top - S.height : i.top = u.bottom), i.width = S.width, i.height = S.height, {
          popper: i,
          reference: u
        };
      }, a.prototype._setupEventListeners = function() {
        if (this.state.updateBound = this.update.bind(this), s.addEventListener("resize", this.state.updateBound), this._options.boundariesElement !== "window") {
          var e = O(this._reference);
          (e === s.document.body || e === s.document.documentElement) && (e = s), e.addEventListener("scroll", this.state.updateBound), this.state.scrollTarget = e;
        }
      }, a.prototype._removeEventListeners = function() {
        s.removeEventListener("resize", this.state.updateBound), this._options.boundariesElement !== "window" && this.state.scrollTarget && (this.state.scrollTarget.removeEventListener("scroll", this.state.updateBound), this.state.scrollTarget = null), this.state.updateBound = null;
      }, a.prototype._getBoundaries = function(e, t, r) {
        var i = {}, f, u;
        if (r === "window") {
          var S = s.document.body, k = s.document.documentElement;
          u = Math.max(S.scrollHeight, S.offsetHeight, k.clientHeight, k.scrollHeight, k.offsetHeight), f = Math.max(S.scrollWidth, S.offsetWidth, k.clientWidth, k.scrollWidth, k.offsetWidth), i = {
            top: 0,
            right: f,
            bottom: u,
            left: 0
          };
        } else if (r === "viewport") {
          var M = C(this._popper), T = O(this._popper), A = E(M), j = function(I) {
            return I == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : I.scrollTop;
          }, F = function(I) {
            return I == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : I.scrollLeft;
          }, L = e.offsets.popper.position === "fixed" ? 0 : j(T), D = e.offsets.popper.position === "fixed" ? 0 : F(T);
          i = {
            top: 0 - (A.top - L),
            right: s.document.documentElement.clientWidth - (A.left - D),
            bottom: s.document.documentElement.clientHeight - (A.top - L),
            left: 0 - (A.left - D)
          };
        } else
          C(this._popper) === r ? i = {
            top: 0,
            left: 0,
            right: r.clientWidth,
            bottom: r.clientHeight
          } : i = E(r);
        return i.left += t, i.right -= t, i.top = i.top + t, i.bottom = i.bottom - t, i;
      }, a.prototype.runModifiers = function(e, t, r) {
        var i = t.slice();
        return r !== void 0 && (i = this._options.modifiers.slice(0, l(this._options.modifiers, r))), i.forEach(function(f) {
          b(f) && (e = f.call(this, e));
        }.bind(this)), e;
      }, a.prototype.isModifierRequired = function(e, t) {
        var r = l(this._options.modifiers, e);
        return !!this._options.modifiers.slice(0, r).filter(function(i) {
          return i === t;
        }).length;
      }, a.prototype.modifiers = {}, a.prototype.modifiers.applyStyle = function(e) {
        var t = {
          position: e.offsets.popper.position
        }, r = Math.round(e.offsets.popper.left), i = Math.round(e.offsets.popper.top), f;
        return this._options.gpuAcceleration && (f = o("transform")) ? (t[f] = "translate3d(" + r + "px, " + i + "px, 0)", t.top = 0, t.left = 0) : (t.left = r, t.top = i), Object.assign(t, e.styles), v(this._popper, t), this._popper.setAttribute("x-placement", e.placement), this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && e.offsets.arrow && v(e.arrowElement, e.offsets.arrow), e;
      }, a.prototype.modifiers.shift = function(e) {
        var t = e.placement, r = t.split("-")[0], i = t.split("-")[1];
        if (i) {
          var f = e.offsets.reference, u = g(e.offsets.popper), S = {
            y: {
              start: { top: f.top },
              end: { top: f.top + f.height - u.height }
            },
            x: {
              start: { left: f.left },
              end: { left: f.left + f.width - u.width }
            }
          }, k = ["bottom", "top"].indexOf(r) !== -1 ? "x" : "y";
          e.offsets.popper = Object.assign(u, S[k][i]);
        }
        return e;
      }, a.prototype.modifiers.preventOverflow = function(e) {
        var t = this._options.preventOverflowOrder, r = g(e.offsets.popper), i = {
          left: function() {
            var u = r.left;
            return r.left < e.boundaries.left && (u = Math.max(r.left, e.boundaries.left)), { left: u };
          },
          right: function() {
            var u = r.left;
            return r.right > e.boundaries.right && (u = Math.min(r.left, e.boundaries.right - r.width)), { left: u };
          },
          top: function() {
            var u = r.top;
            return r.top < e.boundaries.top && (u = Math.max(r.top, e.boundaries.top)), { top: u };
          },
          bottom: function() {
            var u = r.top;
            return r.bottom > e.boundaries.bottom && (u = Math.min(r.top, e.boundaries.bottom - r.height)), { top: u };
          }
        };
        return t.forEach(function(f) {
          e.offsets.popper = Object.assign(r, i[f]());
        }), e;
      }, a.prototype.modifiers.keepTogether = function(e) {
        var t = g(e.offsets.popper), r = e.offsets.reference, i = Math.floor;
        return t.right < i(r.left) && (e.offsets.popper.left = i(r.left) - t.width), t.left > i(r.right) && (e.offsets.popper.left = i(r.right)), t.bottom < i(r.top) && (e.offsets.popper.top = i(r.top) - t.height), t.top > i(r.bottom) && (e.offsets.popper.top = i(r.bottom)), e;
      }, a.prototype.modifiers.flip = function(e) {
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow))
          return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"), e;
        if (e.flipped && e.placement === e._originalPlacement)
          return e;
        var t = e.placement.split("-")[0], r = _(t), i = e.placement.split("-")[1] || "", f = [];
        return this._options.flipBehavior === "flip" ? f = [t, r] : f = this._options.flipBehavior, f.forEach(function(u, S) {
          if (!(t !== u || f.length === S + 1)) {
            t = e.placement.split("-")[0], r = _(t);
            var k = g(e.offsets.popper), M = ["right", "bottom"].indexOf(t) !== -1;
            (M && Math.floor(e.offsets.reference[t]) > Math.floor(k[r]) || !M && Math.floor(e.offsets.reference[t]) < Math.floor(k[r])) && (e.flipped = !0, e.placement = f[S + 1], i && (e.placement += "-" + i), e.offsets.popper = this._getOffsets(this._popper, this._reference, e.placement).popper, e = this.runModifiers(e, this._options.modifiers, this._flip));
          }
        }.bind(this)), e;
      }, a.prototype.modifiers.offset = function(e) {
        var t = this._options.offset, r = e.offsets.popper;
        return e.placement.indexOf("left") !== -1 ? r.top -= t : e.placement.indexOf("right") !== -1 ? r.top += t : e.placement.indexOf("top") !== -1 ? r.left -= t : e.placement.indexOf("bottom") !== -1 && (r.left += t), e;
      }, a.prototype.modifiers.arrow = function(e) {
        var t = this._options.arrowElement, r = this._options.arrowOffset;
        if (typeof t == "string" && (t = this._popper.querySelector(t)), !t)
          return e;
        if (!this._popper.contains(t))
          return console.warn("WARNING: `arrowElement` must be child of its popper element!"), e;
        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether))
          return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"), e;
        var i = {}, f = e.placement.split("-")[0], u = g(e.offsets.popper), S = e.offsets.reference, k = ["left", "right"].indexOf(f) !== -1, M = k ? "height" : "width", T = k ? "top" : "left", A = k ? "left" : "top", j = k ? "bottom" : "right", F = y(t)[M];
        S[j] - F < u[T] && (e.offsets.popper[T] -= u[T] - (S[j] - F)), S[T] + F > u[j] && (e.offsets.popper[T] += S[T] + F - u[j]);
        var L = S[T] + (r || S[M] / 2 - F / 2), D = L - u[T];
        return D = Math.max(Math.min(u[M] - F - 8, D), 8), i[T] = D, i[A] = "", e.offsets.arrow = i, e.arrowElement = t, e;
      };
      function y(e) {
        var t = e.style.display, r = e.style.visibility;
        e.style.display = "block", e.style.visibility = "hidden", e.offsetWidth;
        var i = s.getComputedStyle(e), f = parseFloat(i.marginTop) + parseFloat(i.marginBottom), u = parseFloat(i.marginLeft) + parseFloat(i.marginRight), S = { width: e.offsetWidth + u, height: e.offsetHeight + f };
        return e.style.display = t, e.style.visibility = r, S;
      }
      function _(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function(r) {
          return t[r];
        });
      }
      function g(e) {
        var t = Object.assign({}, e);
        return t.right = t.left + t.width, t.bottom = t.top + t.height, t;
      }
      function l(e, t) {
        var r = 0, i;
        for (i in e) {
          if (e[i] === t)
            return r;
          r++;
        }
        return null;
      }
      function m(e, t) {
        var r = s.getComputedStyle(e, null);
        return r[t];
      }
      function C(e) {
        var t = e.offsetParent;
        return t === s.document.body || !t ? s.document.documentElement : t;
      }
      function O(e) {
        var t = e.parentNode;
        return t ? t === s.document ? s.document.body.scrollTop || s.document.body.scrollLeft ? s.document.body : s.document.documentElement : ["scroll", "auto"].indexOf(m(t, "overflow")) !== -1 || ["scroll", "auto"].indexOf(m(t, "overflow-x")) !== -1 || ["scroll", "auto"].indexOf(m(t, "overflow-y")) !== -1 ? t : O(e.parentNode) : e;
      }
      function p(e) {
        return e === s.document.body ? !1 : m(e, "position") === "fixed" ? !0 : e.parentNode ? p(e.parentNode) : e;
      }
      function v(e, t) {
        function r(i) {
          return i !== "" && !isNaN(parseFloat(i)) && isFinite(i);
        }
        Object.keys(t).forEach(function(i) {
          var f = "";
          ["width", "height", "top", "right", "bottom", "left"].indexOf(i) !== -1 && r(t[i]) && (f = "px"), e.style[i] = t[i] + f;
        });
      }
      function b(e) {
        var t = {};
        return e && t.toString.call(e) === "[object Function]";
      }
      function E(e) {
        var t = {
          width: e.offsetWidth,
          height: e.offsetHeight,
          left: e.offsetLeft,
          top: e.offsetTop
        };
        return t.right = t.left + t.width, t.bottom = t.top + t.height, t;
      }
      function x(e) {
        var t = e.getBoundingClientRect(), r = navigator.userAgent.indexOf("MSIE") != -1, i = r && e.tagName === "HTML" ? -e.scrollTop : t.top;
        return {
          left: t.left,
          top: i,
          right: t.right,
          bottom: t.bottom,
          width: t.right - t.left,
          height: t.bottom - i
        };
      }
      function c(e, t, r) {
        var i = x(e), f = x(t);
        if (r) {
          var u = O(t);
          f.top += u.scrollTop, f.bottom += u.scrollTop, f.left += u.scrollLeft, f.right += u.scrollLeft;
        }
        var S = {
          top: i.top - f.top,
          left: i.left - f.left,
          bottom: i.top - f.top + i.height,
          right: i.left - f.left + i.width,
          width: i.width,
          height: i.height
        };
        return S;
      }
      function o(e) {
        for (var t = ["", "ms", "webkit", "moz", "o"], r = 0; r < t.length; r++) {
          var i = t[r] ? t[r] + e.charAt(0).toUpperCase() + e.slice(1) : e;
          if (typeof s.document.body.style[i] != "undefined")
            return i;
        }
        return null;
      }
      return Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(t) {
          if (t == null)
            throw new TypeError("Cannot convert first argument to object");
          for (var r = Object(t), i = 1; i < arguments.length; i++) {
            var f = arguments[i];
            if (f != null) {
              f = Object(f);
              for (var u = Object.keys(f), S = 0, k = u.length; S < k; S++) {
                var M = u[S], T = Object.getOwnPropertyDescriptor(f, M);
                T !== void 0 && T.enumerable && (r[M] = f[M]);
              }
            }
          }
          return r;
        }
      }), a;
    });
  }(V)), V.exports;
}
var oe;
function Se() {
  if (oe)
    return B;
  oe = 1, B.__esModule = !0;
  var h = R, n = d(h), s = we();
  function d(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var a = n.default.prototype.$isServer ? function() {
  } : Oe(), y = function(g) {
    return g.stopPropagation();
  };
  return B.default = {
    props: {
      transformOrigin: {
        type: [Boolean, String],
        default: !0
      },
      placement: {
        type: String,
        default: "bottom"
      },
      boundariesPadding: {
        type: Number,
        default: 5
      },
      reference: {},
      popper: {},
      offset: {
        default: 0
      },
      value: Boolean,
      visibleArrow: Boolean,
      arrowOffset: {
        type: Number,
        default: 35
      },
      appendToBody: {
        type: Boolean,
        default: !0
      },
      popperOptions: {
        type: Object,
        default: function() {
          return {
            gpuAcceleration: !1
          };
        }
      }
    },
    data: function() {
      return {
        showPopper: !1,
        currentPlacement: ""
      };
    },
    watch: {
      value: {
        immediate: !0,
        handler: function(g) {
          this.showPopper = g, this.$emit("input", g);
        }
      },
      showPopper: function(g) {
        this.disabled || (g ? this.updatePopper() : this.destroyPopper(), this.$emit("input", g));
      }
    },
    methods: {
      createPopper: function() {
        var g = this;
        if (!this.$isServer && (this.currentPlacement = this.currentPlacement || this.placement, !!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))) {
          var l = this.popperOptions, m = this.popperElm = this.popperElm || this.popper || this.$refs.popper, C = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
          !C && this.$slots.reference && this.$slots.reference[0] && (C = this.referenceElm = this.$slots.reference[0].elm), !(!m || !C) && (this.visibleArrow && this.appendArrow(m), this.appendToBody && document.body.appendChild(this.popperElm), this.popperJS && this.popperJS.destroy && this.popperJS.destroy(), l.placement = this.currentPlacement, l.offset = this.offset, l.arrowOffset = this.arrowOffset, this.popperJS = new a(C, m, l), this.popperJS.onCreate(function(O) {
            g.$emit("created", g), g.resetTransformOrigin(), g.$nextTick(g.updatePopper);
          }), typeof l.onUpdate == "function" && this.popperJS.onUpdate(l.onUpdate), this.popperJS._popper.style.zIndex = s.PopupManager.nextZIndex(), this.popperElm.addEventListener("click", y));
        }
      },
      updatePopper: function() {
        var g = this.popperJS;
        g ? (g.update(), g._popper && (g._popper.style.zIndex = s.PopupManager.nextZIndex())) : this.createPopper();
      },
      doDestroy: function(g) {
        !this.popperJS || this.showPopper && !g || (this.popperJS.destroy(), this.popperJS = null);
      },
      destroyPopper: function() {
        this.popperJS && this.resetTransformOrigin();
      },
      resetTransformOrigin: function() {
        if (this.transformOrigin) {
          var g = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
          }, l = this.popperJS._popper.getAttribute("x-placement").split("-")[0], m = g[l];
          this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin == "string" ? this.transformOrigin : ["top", "bottom"].indexOf(l) > -1 ? "center " + m : m + " center";
        }
      },
      appendArrow: function(g) {
        var l = void 0;
        if (!this.appended) {
          this.appended = !0;
          for (var m in g.attributes)
            if (/^_v-/.test(g.attributes[m].name)) {
              l = g.attributes[m].name;
              break;
            }
          var C = document.createElement("div");
          l && C.setAttribute(l, ""), C.setAttribute("x-arrow", ""), C.className = "popper__arrow", g.appendChild(C);
        }
      }
    },
    beforeDestroy: function() {
      this.doDestroy(!0), this.popperElm && this.popperElm.parentNode === document.body && (this.popperElm.removeEventListener("click", y), document.body.removeChild(this.popperElm));
    },
    // call destroy in keep-alive mode
    deactivated: function() {
      this.$options.beforeDestroy[0].call(this);
    }
  }, B;
}
(function(h) {
  h.exports = /******/
  function(n) {
    var s = {};
    function d(a) {
      if (s[a])
        return s[a].exports;
      var y = s[a] = {
        /******/
        i: a,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return n[a].call(y.exports, y, y.exports, d), y.l = !0, y.exports;
    }
    return d.m = n, d.c = s, d.d = function(a, y, _) {
      d.o(a, y) || Object.defineProperty(a, y, { enumerable: !0, get: _ });
    }, d.r = function(a) {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    }, d.t = function(a, y) {
      if (y & 1 && (a = d(a)), y & 8 || y & 4 && typeof a == "object" && a && a.__esModule)
        return a;
      var _ = /* @__PURE__ */ Object.create(null);
      if (d.r(_), Object.defineProperty(_, "default", { enumerable: !0, value: a }), y & 2 && typeof a != "string")
        for (var g in a)
          d.d(_, g, function(l) {
            return a[l];
          }.bind(null, g));
      return _;
    }, d.n = function(a) {
      var y = a && a.__esModule ? (
        /******/
        function() {
          return a.default;
        }
      ) : (
        /******/
        function() {
          return a;
        }
      );
      return d.d(y, "a", y), y;
    }, d.o = function(a, y) {
      return Object.prototype.hasOwnProperty.call(a, y);
    }, d.p = "/dist/", d(d.s = 78);
  }({
    /***/
    0: (
      /***/
      function(n, s, d) {
        d.d(s, "a", function() {
          return a;
        });
        function a(y, _, g, l, m, C, O, p) {
          var v = typeof y == "function" ? y.options : y;
          _ && (v.render = _, v.staticRenderFns = g, v._compiled = !0), l && (v.functional = !0), C && (v._scopeId = "data-v-" + C);
          var b;
          if (O ? (b = function(c) {
            c = c || // cached call
            this.$vnode && this.$vnode.ssrContext || // stateful
            this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ != "undefined" && (c = __VUE_SSR_CONTEXT__), m && m.call(this, c), c && c._registeredComponents && c._registeredComponents.add(O);
          }, v._ssrRegister = b) : m && (b = p ? function() {
            m.call(this, this.$root.$options.shadowRoot);
          } : m), b)
            if (v.functional) {
              v._injectStyles = b;
              var E = v.render;
              v.render = function(o, e) {
                return b.call(e), E(o, e);
              };
            } else {
              var x = v.beforeCreate;
              v.beforeCreate = x ? [].concat(x, b) : [b];
            }
          return {
            exports: y,
            options: v
          };
        }
      }
    ),
    /***/
    2: (
      /***/
      function(n, s) {
        n.exports = J();
      }
    ),
    /***/
    3: (
      /***/
      function(n, s) {
        n.exports = ye();
      }
    ),
    /***/
    5: (
      /***/
      function(n, s) {
        n.exports = Se();
      }
    ),
    /***/
    7: (
      /***/
      function(n, s) {
        n.exports = R;
      }
    ),
    /***/
    78: (
      /***/
      function(n, s, d) {
        d.r(s);
        var a = function() {
          var e = this, t = e.$createElement, r = e._self._c || t;
          return r(
            "span",
            [
              r(
                "transition",
                {
                  attrs: { name: e.transition },
                  on: {
                    "after-enter": e.handleAfterEnter,
                    "after-leave": e.handleAfterLeave
                  }
                },
                [
                  r(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !e.disabled && e.showPopper,
                          expression: "!disabled && showPopper"
                        }
                      ],
                      ref: "popper",
                      staticClass: "el-popover el-popper",
                      class: [e.popperClass, e.content && "el-popover--plain"],
                      style: { width: e.width + "px" },
                      attrs: {
                        role: "tooltip",
                        id: e.tooltipId,
                        "aria-hidden": e.disabled || !e.showPopper ? "true" : "false"
                      }
                    },
                    [
                      e.title ? r("div", {
                        staticClass: "el-popover__title",
                        domProps: { textContent: e._s(e.title) }
                      }) : e._e(),
                      e._t("default", [e._v(e._s(e.content))])
                    ],
                    2
                  )
                ]
              ),
              r(
                "span",
                { ref: "wrapper", staticClass: "el-popover__reference-wrapper" },
                [e._t("reference")],
                2
              )
            ],
            1
          );
        }, y = [];
        a._withStripped = !0;
        var _ = d(5), g = /* @__PURE__ */ d.n(_), l = d(2), m = d(3), C = {
          name: "ElPopover",
          mixins: [g.a],
          props: {
            trigger: {
              type: String,
              default: "click",
              validator: function(t) {
                return ["click", "focus", "hover", "manual"].indexOf(t) > -1;
              }
            },
            openDelay: {
              type: Number,
              default: 0
            },
            closeDelay: {
              type: Number,
              default: 200
            },
            title: String,
            disabled: Boolean,
            content: String,
            reference: {},
            popperClass: String,
            width: {},
            visibleArrow: {
              default: !0
            },
            arrowOffset: {
              type: Number,
              default: 0
            },
            transition: {
              type: String,
              default: "fade-in-linear"
            },
            tabindex: {
              type: Number,
              default: 0
            }
          },
          computed: {
            tooltipId: function() {
              return "el-popover-" + Object(m.generateId)();
            }
          },
          watch: {
            showPopper: function(t) {
              this.disabled || (t ? this.$emit("show") : this.$emit("hide"));
            }
          },
          mounted: function() {
            var t = this, r = this.referenceElm = this.reference || this.$refs.reference, i = this.popper || this.$refs.popper;
            !r && this.$refs.wrapper.children && (r = this.referenceElm = this.$refs.wrapper.children[0]), r && (Object(l.addClass)(r, "el-popover__reference"), r.setAttribute("aria-describedby", this.tooltipId), r.setAttribute("tabindex", this.tabindex), i.setAttribute("tabindex", 0), this.trigger !== "click" && (Object(l.on)(r, "focusin", function() {
              t.handleFocus();
              var f = r.__vue__;
              f && typeof f.focus == "function" && f.focus();
            }), Object(l.on)(i, "focusin", this.handleFocus), Object(l.on)(r, "focusout", this.handleBlur), Object(l.on)(i, "focusout", this.handleBlur)), Object(l.on)(r, "keydown", this.handleKeydown), Object(l.on)(r, "click", this.handleClick)), this.trigger === "click" ? (Object(l.on)(r, "click", this.doToggle), Object(l.on)(document, "click", this.handleDocumentClick)) : this.trigger === "hover" ? (Object(l.on)(r, "mouseenter", this.handleMouseEnter), Object(l.on)(i, "mouseenter", this.handleMouseEnter), Object(l.on)(r, "mouseleave", this.handleMouseLeave), Object(l.on)(i, "mouseleave", this.handleMouseLeave)) : this.trigger === "focus" && (this.tabindex < 0 && console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"), r.querySelector("input, textarea") ? (Object(l.on)(r, "focusin", this.doShow), Object(l.on)(r, "focusout", this.doClose)) : (Object(l.on)(r, "mousedown", this.doShow), Object(l.on)(r, "mouseup", this.doClose)));
          },
          beforeDestroy: function() {
            this.cleanup();
          },
          deactivated: function() {
            this.cleanup();
          },
          methods: {
            doToggle: function() {
              this.showPopper = !this.showPopper;
            },
            doShow: function() {
              this.showPopper = !0;
            },
            doClose: function() {
              this.showPopper = !1;
            },
            handleFocus: function() {
              Object(l.addClass)(this.referenceElm, "focusing"), (this.trigger === "click" || this.trigger === "focus") && (this.showPopper = !0);
            },
            handleClick: function() {
              Object(l.removeClass)(this.referenceElm, "focusing");
            },
            handleBlur: function() {
              Object(l.removeClass)(this.referenceElm, "focusing"), (this.trigger === "click" || this.trigger === "focus") && (this.showPopper = !1);
            },
            handleMouseEnter: function() {
              var t = this;
              clearTimeout(this._timer), this.openDelay ? this._timer = setTimeout(function() {
                t.showPopper = !0;
              }, this.openDelay) : this.showPopper = !0;
            },
            handleKeydown: function(t) {
              t.keyCode === 27 && this.trigger !== "manual" && this.doClose();
            },
            handleMouseLeave: function() {
              var t = this;
              clearTimeout(this._timer), this.closeDelay ? this._timer = setTimeout(function() {
                t.showPopper = !1;
              }, this.closeDelay) : this.showPopper = !1;
            },
            handleDocumentClick: function(t) {
              var r = this.reference || this.$refs.reference, i = this.popper || this.$refs.popper;
              !r && this.$refs.wrapper.children && (r = this.referenceElm = this.$refs.wrapper.children[0]), !(!this.$el || !r || this.$el.contains(t.target) || r.contains(t.target) || !i || i.contains(t.target)) && (this.showPopper = !1);
            },
            handleAfterEnter: function() {
              this.$emit("after-enter");
            },
            handleAfterLeave: function() {
              this.$emit("after-leave"), this.doDestroy();
            },
            cleanup: function() {
              (this.openDelay || this.closeDelay) && clearTimeout(this._timer);
            }
          },
          destroyed: function() {
            var t = this.reference;
            Object(l.off)(t, "click", this.doToggle), Object(l.off)(t, "mouseup", this.doClose), Object(l.off)(t, "mousedown", this.doShow), Object(l.off)(t, "focusin", this.doShow), Object(l.off)(t, "focusout", this.doClose), Object(l.off)(t, "mousedown", this.doShow), Object(l.off)(t, "mouseup", this.doClose), Object(l.off)(t, "mouseleave", this.handleMouseLeave), Object(l.off)(t, "mouseenter", this.handleMouseEnter), Object(l.off)(document, "click", this.handleDocumentClick);
          }
        }, O = C, p = d(0), v = Object(p.a)(
          O,
          a,
          y,
          !1,
          null,
          null,
          null
        );
        v.options.__file = "packages/popover/src/main.vue";
        var b = v.exports, E = function(t, r, i) {
          var f = r.expression ? r.value : r.arg, u = i.context.$refs[f];
          u && (Array.isArray(u) ? u[0].$refs.reference = t : u.$refs.reference = t);
        }, x = {
          bind: function(t, r, i) {
            E(t, r, i);
          },
          inserted: function(t, r, i) {
            E(t, r, i);
          }
        }, c = d(7), o = /* @__PURE__ */ d.n(c);
        o.a.directive("popover", x), b.install = function(e) {
          e.directive("popover", x), e.component(b.name, b);
        }, b.directive = x, s.default = b;
      }
    )
    /******/
  });
})(ne);
var Ce = ne.exports;
const Ee = /* @__PURE__ */ ve(Ce);
const xe = {
  name: "YmPopover",
  components: {
    "el-popover": Ee
  },
  props: {
    value: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "500"
    },
    placement: {
      type: String,
      default: "bottom"
    }
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(h) {
        this.$emit("input", h);
      }
    }
  },
  watch: {
    value: {
      handler(h) {
        this.handleValueChange(h);
      }
    }
  },
  methods: {
    handleValueChange(h) {
      if (h) {
        const n = this.$refs.ymPopover;
        n.referenceElm = window.event.target, n.createPopper(), n.doShow();
      } else
        this.doClose();
    },
    doClose(h) {
      try {
        const n = h.target;
        this.$refs.ymPopover.popperElm.contains(n) || (this.visible = !1);
      } catch (n) {
      }
    }
  },
  created() {
    document.addEventListener("click", this.doClose, !0);
  },
  destroyed() {
    document.removeEventListener("click", this.doClose, !0);
  }
};
var ke = function() {
  var n = this, s = n._self._c;
  return s("el-popover", { ref: "ymPopover", attrs: { placement: n.placement, width: n.width, trigger: "click", "popper-class": "ym-popover" }, model: { value: n.visible, callback: function(d) {
    n.visible = d;
  }, expression: "visible" } }, [n._t("default")], 2);
}, Pe = [], Te = /* @__PURE__ */ H(
  xe,
  ke,
  Pe,
  !1,
  null,
  "7ac509e5",
  null,
  null
);
const ie = Te.exports, $e = {
  install: function(h) {
    h.component(U.name, U), h.component(Z.name, Z), h.component(ie.name, ie);
  }
};
export {
  U as YmButton,
  ie as YmPopover,
  Z as YmSelect,
  $e as default
};
