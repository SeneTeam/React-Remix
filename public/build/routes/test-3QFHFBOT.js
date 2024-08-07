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

// app/routes/test.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\test.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\test.tsx"
  );
  import.meta.hot.lastModified = "1722912213000";
}
function Test() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Test route" }, void 0, false, {
    fileName: "app/routes/test.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Test;
var _c;
$RefreshReg$(_c, "Test");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Test as default
};
//# sourceMappingURL=/build/routes/test-3QFHFBOT.js.map
