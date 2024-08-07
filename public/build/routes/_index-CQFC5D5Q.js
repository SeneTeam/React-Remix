import {
  require_session
} from "/build/_shared/chunk-BK5TXDDP.js";
import {
  motion
} from "/build/_shared/chunk-ZA3AJYHP.js";
import "/build/_shared/chunk-5NT3OUFA.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-EHEASNIK.js";
import "/build/_shared/chunk-74BWT7FI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TQMAZLEN.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGQXC5YX.js";
import "/build/_shared/chunk-5GUXQVXG.js";
import "/build/_shared/chunk-QT64XSGC.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node());

// app/components/WelcomeWidget.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\WelcomeWidget.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\WelcomeWidget.tsx"
  );
  import.meta.hot.lastModified = "1722912213000";
}
function WelcomeWidget() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.5
  }, className: "p-6 rounded-[20px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white font-inter text-2xl mb-4", children: "sup! welcome, lets manage ur money" }, void 0, false, {
      fileName: "app/components/WelcomeWidget.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600", children: "sign up" }, void 0, false, {
        fileName: "app/components/WelcomeWidget.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600", children: "login" }, void 0, false, {
        fileName: "app/components/WelcomeWidget.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/WelcomeWidget.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/WelcomeWidget.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = WelcomeWidget;
var _c;
$RefreshReg$(_c, "WelcomeWidget");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1722912213000";
}
function Index() {
  _s();
  const {
    isLoggedIn
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto p-4 min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold text-center mb-8", children: "finance tracker" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    !isLoggedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(WelcomeWidget, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-grow" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "text-center text-sm text-gray-600 mt-8 pb-4", children: [
      "created with \u2764\uFE0F by",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://x.com/danizeres", target: "_blank", rel: "noopener noreferrer", className: "text-blue-500 hover:underline", children: "@danizeres" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Index, "D61kinSYsKMKCXcFuF7zeJ5ZpUI=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-CQFC5D5Q.js.map
