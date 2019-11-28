import 'bootstrap';
import '../scss/index.scss';

var ParallaxScroll = {
  showLogs: !1,
  round: 1e3,
  init: function() {
    if ((this._log('init'), this._inited))
      return this._log('Already Inited'), void (this._inited = !0);
    (this._requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(a) {
        window.setTimeout(a, 1e3 / 60);
      }),
      this._onScroll(!0);
  },
  _inited: !1,
  _properties: [
    'x',
    'y',
    'z',
    'rotateX',
    'rotateY',
    'rotateZ',
    'scaleX',
    'scaleY',
    'scaleZ',
    'scale',
  ],
  _requestAnimationFrame: null,
  _log: function(a) {
    this.showLogs && console.log('Parallax Scroll / ' + a);
  },
  _onScroll: function(a) {
    var t = $(document).scrollTop(),
      e = $(window).height();
    this._log('onScroll ' + t),
      $('[data-parallax]').each(
        $.proxy(function(i, o) {
          var s = $(o),
            r = [],
            n = !1,
            l = s.data('style');
          void 0 == l && ((l = s.attr('style') || ''), s.data('style', l));
          var d,
            c = [s.data('parallax')];
          for (d = 2; s.data('parallax' + d); d++)
            c.push(s.data('parallax-' + d));
          var v = c.length;
          for (d = 0; d < v; d++) {
            var m = c[d],
              h = m['from-scroll'];
            void 0 == h && (h = Math.max(0, $(o).offset().top - e)), (h |= 0);
            var u = m.distance,
              p = m['to-scroll'];
            void 0 == u && void 0 == p && (u = e), (u = Math.max(0 | u, 1));
            var w = m.easing,
              g = m['easing-return'];
            if (
              ((void 0 != w && $.easing && $.easing[w]) || (w = null),
              (void 0 != g && $.easing && $.easing[g]) || (g = w),
              w)
            ) {
              var x = m.duration;
              void 0 == x && (x = u), (x = Math.max(0 | x, 1));
              var f = m['duration-return'];
              void 0 == f && (f = x), (u = 1);
              var _ = s.data('current-time');
              void 0 == _ && (_ = 0);
            }
            void 0 == p && (p = h + u), (p |= 0);
            var y = m.smoothness;
            void 0 == y && (y = 30),
              (y |= 0),
              (a || 0 == y) && (y = 1),
              (y |= 0);
            var A = t;
            (A = Math.max(A, h)),
              (A = Math.min(A, p)),
              w &&
                (void 0 == s.data('sens') && s.data('sens', 'back'),
                A > h &&
                  ('back' == s.data('sens')
                    ? ((_ = 1), s.data('sens', 'go'))
                    : _++),
                A < p &&
                  ('go' == s.data('sens')
                    ? ((_ = 1), s.data('sens', 'back'))
                    : _++),
                a && (_ = x),
                s.data('current-time', _)),
              this._properties.map(
                $.proxy(function(a) {
                  var t = 0,
                    e = m[a];
                  if (void 0 != e) {
                    'scale' == a ||
                    'scaleX' == a ||
                    'scaleY' == a ||
                    'scaleZ' == a
                      ? (t = 1)
                      : (e |= 0);
                    var i = s.data('_' + a);
                    void 0 == i && (i = t);
                    var o = ((A - h) / (p - h)) * (e - t) + t,
                      l = i + (o - i) / y;
                    if (w && _ > 0 && _ <= x) {
                      var d = t;
                      'back' == s.data('sens') &&
                        ((d = e), (e = -e), (w = g), (x = f)),
                        (l = $.easing[w](null, _, d, e, x));
                    }
                    (l = Math.ceil(l * this.round) / this.round) == i &&
                      o == e &&
                      (l = e),
                      r[a] || (r[a] = 0),
                      (r[a] += l),
                      i != r[a] && (s.data('_' + a, r[a]), (n = !0));
                  }
                }, this)
              );
          }
          if (n) {
            if (void 0 != r.z) {
              var X = m.perspective;
              void 0 == X && (X = 800);
              var Y = s.parent();
              Y.data('style') || Y.data('style', Y.attr('style') || ''),
                Y.attr(
                  'style',
                  'perspective:' +
                    X +
                    'px; -webkit-perspective:' +
                    X +
                    'px; ' +
                    Y.data('style')
                );
            }
            void 0 == r.scaleX && (r.scaleX = 1),
              void 0 == r.scaleY && (r.scaleY = 1),
              void 0 == r.scaleZ && (r.scaleZ = 1),
              void 0 != r.scale &&
                ((r.scaleX *= r.scale),
                (r.scaleY *= r.scale),
                (r.scaleZ *= r.scale));
            var Z =
              'translate3d(' +
              (r.x ? r.x : 0) +
              'px, ' +
              (r.y ? r.y : 0) +
              'px, ' +
              (r.z ? r.z : 0) +
              'px)' +
              ' ' +
              ('rotateX(' +
                (r.rotateX ? r.rotateX : 0) +
                'deg) rotateY(' +
                (r.rotateY ? r.rotateY : 0) +
                'deg) rotateZ(' +
                (r.rotateZ ? r.rotateZ : 0) +
                'deg)') +
              ' ' +
              ('scaleX(' +
                r.scaleX +
                ') scaleY(' +
                r.scaleY +
                ') scaleZ(' +
                r.scaleZ +
                ')') +
              ';';
            this._log(Z),
              s.attr(
                'style',
                'transform:' + Z + ' -webkit-transform:' + Z + ' ' + l
              );
          }
        }, this)
      ),
      window.requestAnimationFrame
        ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1))
        : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
  },
};

ParallaxScroll.init();
