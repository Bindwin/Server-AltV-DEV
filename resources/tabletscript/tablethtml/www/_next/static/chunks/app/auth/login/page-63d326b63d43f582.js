(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [716], {
        2001: function(e, n, r) {
            Promise.resolve().then(r.t.bind(r, 4627, 23)), Promise.resolve().then(r.t.bind(r, 9168, 23)), Promise.resolve().then(r.t.bind(r, 9721, 23)), Promise.resolve().then(r.t.bind(r, 4968, 23)), Promise.resolve().then(r.t.bind(r, 171, 23)), Promise.resolve().then(r.t.bind(r, 9624, 23)), Promise.resolve().then(r.bind(r, 1733))
        },
        1733: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                ProviderLogin: function() {
                    return i
                }
            });
            var t = r(1621),
                c = r(8453);

            function i(e) {
                var n = e.provider;
                return (0, t.jsxs)("button", {
                    onClick: function() {
                        return (0, c.signIn)(n.id, {
                            scope: "session identity guilds"
                        })
                    },
                    className: "flex cursor-pointer items-center rounded bg-button-primary px-4 py-2 leading-6 text-white duration-200 hover:bg-button-primary-hover motion-reduce:transition-none",
                    children: [(0, t.jsx)("svg", {
                        className: "mr-2 h-5 w-5",
                        "aria-hidden": "true",
                        role: "img",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                            fill: "currentColor",
                            d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                        })
                    }), "Login with ", n.name]
                }, n.name)
            }
        },
        9624: function(e, n, r) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                    value: !0
                }),
                function(e, n) {
                    for (var r in n) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: n[r]
                    })
                }(n, {
                    suspense: function() {
                        return c
                    },
                    NoSSR: function() {
                        return i
                    }
                }), r(670), r(4132);
            var t = r(9817);

            function c() {
                var e = Error(t.NEXT_DYNAMIC_NO_SSR_CODE);
                throw e.digest = t.NEXT_DYNAMIC_NO_SSR_CODE, e
            }

            function i(e) {
                return e.children
            }
        }
    },
    function(e) {
        e.O(0, [168, 627, 453, 972, 638, 744], function() {
            return e(e.s = 2001)
        }), _N_E = e.O()
    }
]);