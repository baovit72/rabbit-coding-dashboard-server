(this.webpackJsonprabbit_coding_dashboard = this.webpackJsonprabbit_coding_dashboard || []).push([[0], {
  14: function (e, a, t) {},
  16: function (e, a, t) {},
  17: function (e, a, t) {
    "use strict";

    t.r(a);
    var n = t(0),
        r = t.n(n),
        s = t(7),
        o = t.n(s),
        c = (t(14), t(1)),
        i = t(2),
        l = t(4),
        d = t(3),
        u = t(5),
        m = t.n(u),
        h = t(8);

    function b(e) {
      return new Promise(function (a) {
        return setTimeout(a, e);
      });
    }

    var f = function (e) {
      Object(l.a)(t, e);
      var a = Object(d.a)(t);

      function t() {
        var e;
        Object(c.a)(this, t);

        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];

        return (e = a.call.apply(a, [this].concat(r))).displayMessage = function () {
          var a = Object(h.a)(m.a.mark(function a(t) {
            var n, r, s;
            return m.a.wrap(function (a) {
              for (;;) switch (a.prev = a.next) {
                case 0:
                  if (n = document.getElementsByClassName("welcome-message")[0]) {
                    a.next = 3;
                    break;
                  }

                  return a.abrupt("return");

                case 3:
                  r = "", s = 0;

                case 5:
                  if (!(s < t.length)) {
                    a.next = 14;
                    break;
                  }

                  return console.log(t, t.length), r += t[s], n.innerText = r, a.next = 11, b(70);

                case 11:
                  s++, a.next = 5;
                  break;

                case 14:
                  return a.next = 16, b(500);

                case 16:
                  e.props.done && e.props.done();

                case 17:
                case "end":
                  return a.stop();
              }
            }, a);
          }));
          return function (e) {
            return a.apply(this, arguments);
          };
        }(), e;
      }

      return Object(i.a)(t, [{
        key: "componentDidMount",
        value: function () {
          this.displayMessage("Welcome to rabbit coding... GVHD: Th\u1ea7y Tu\u1ea5n Anh ... Loading ...");
        }
      }, {
        key: "render",
        value: function () {
          return r.a.createElement("span", {
            className: "welcome-message"
          }, " ");
        }
      }]), t;
    }(n.Component);

    function v(e) {
      var a = document.getElementById("snackbar");
      a.innerHTML = e, a.className = "snackbar snackbar--show", setTimeout(function () {
        return a.className = "snackbar--hide";
      }, 2e3);
    }

    var g = function (e) {
      Object(l.a)(t, e);
      var a = Object(d.a)(t);

      function t(e) {
        var n;
        Object(c.a)(this, t), (n = a.call(this, e)).onSearchChange = function (e) {
          console.log(e.target.value), n.setState({
            searchValue: e.target.value
          });
        }, n.onResultChange = function (e) {
          n.detailElem.value = JSON.stringify(n.state.data.responses.find(function (a) {
            return a.id === e;
          }), null, "\t"), n.setState({
            selectedItem: e
          }), console.log(e);
        }, n.submit = function () {
          console.log(n.detailElem.value);

          try {
            var e = JSON.parse(n.detailElem.value);
            console.log(e), n.state.data.responses[n.state.data.responses.findIndex(function (a) {
              return a.id === e.id;
            })] = e;
            var a = new URLSearchParams();
            a.append("data", JSON.stringify(e)), fetch("/data", {
              method: "POST",
              body: a
            }).then(function (e) {
              console.log("Request success: ", e), v("SUCCESS");
            }).catch(function (e) {
              console.log("Request failure: ", e), v("FAILED");
            });
          } catch (t) {
            return console.log("input error"), void v("CHECK YOUR INPUT");
          }
        };
        var r = JSON.parse(JSON.stringify(n.props.data));
        console.log("pre", r);
        var s = [];

        for (var o in console.log("Run constructor"), r.responses) console.log(o), r.responses[o].id = o, s.push(r.responses[o]);

        return r.responses = s, n.state = {
          data: r,
          selectedItem: null,
          searchValue: ""
        }, n;
      }

      return Object(i.a)(t, [{
        key: "render",
        value: function () {
          var e = this,
              a = this.state.data.responses.filter(function (a) {
            return JSON.stringify(a).includes(e.state.searchValue);
          }).map(function (a) {
            return r.a.createElement("div", {
              className: a.id === e.state.selectedItem ? "dashboard__result dashboard__result--selected" : "dashboard__result",
              onClick: function () {
                return e.onResultChange(a.id);
              },
              key: a.id
            }, a.id);
          });
          return r.a.createElement("div", null, r.a.createElement("div", {
            id: "snackbar",
            className: "snackbar snackbar--hide"
          }, "SUCCESS"), r.a.createElement("div", {
            className: "curtain"
          }), r.a.createElement("div", {
            className: "dashboard"
          }, r.a.createElement("div", {
            className: "dashboard__header"
          }, r.a.createElement("div", {
            className: "dashboard__header-section-1"
          }, r.a.createElement("button", {
            className: "dashboard__button"
          }, "T\xecm ki\u1ebfm")), r.a.createElement("div", {
            className: "dashboard__header-section-2"
          }, r.a.createElement("input", {
            onChange: function (a) {
              return e.onSearchChange(a);
            },
            className: "dashboard__input"
          }))), r.a.createElement("div", {
            className: "dashboard__body"
          }, r.a.createElement("div", {
            className: "dashboard__result-list"
          }, a), r.a.createElement("div", {
            className: "dashboard__toolbar"
          }, r.a.createElement("div", {
            className: "dashboard__toolbar-section"
          }, r.a.createElement("button", {
            onClick: this.submit,
            className: "dashboard__button"
          }, "L\u01b0u")), r.a.createElement("div", {
            className: "dashboard__toolbar-section"
          }, r.a.createElement("button", {
            onClick: function () {
              return e.onResultChange(e.state.selectedItem);
            },
            className: "dashboard__button"
          }, "T\u1ea3i l\u1ea1i"))), r.a.createElement("div", {
            className: "dashboard__detail"
          }, r.a.createElement("textarea", {
            ref: function (a) {
              return e.detailElem = a;
            },
            className: "dashboard__textarea"
          })))));
        }
      }]), t;
    }(n.Component),
        p = (t(16), function (e) {
      Object(l.a)(t, e);
      var a = Object(d.a)(t);

      function t() {
        var e;
        Object(c.a)(this, t);

        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];

        return (e = a.call.apply(a, [this].concat(r))).state = {
          isLoadingData: !0,
          isLoadingWelcome: !0,
          data: null
        }, e;
      }

      return Object(i.a)(t, [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          fetch("/data").then(function (e) {
            return e.json();
          }).then(function (a) {
            console.log(a), e.setState({
              data: a,
              isLoadingData: !1
            });
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return this.state.isLoadingWelcome || this.state.isLoadingData ? r.a.createElement(f, {
            done: function () {
              return e.setState({
                isLoadingWelcome: !1
              });
            }
          }) : r.a.createElement(g, {
            data: this.state.data
          });
        }
      }]), t;
    }(r.a.Component));

    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    o.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(p, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
      e.unregister();
    }).catch(function (e) {
      console.error(e.message);
    });
  },
  9: function (e, a, t) {
    e.exports = t(17);
  }
}, [[9, 1, 2]]]);