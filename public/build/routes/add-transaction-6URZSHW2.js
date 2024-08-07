import {
  require_db
} from "/build/_shared/chunk-PC2ACFOD.js";
import {
  motion
} from "/build/_shared/chunk-ZA3AJYHP.js";
import "/build/_shared/chunk-5NT3OUFA.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Form,
  useActionData,
  useNavigate
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

// app/routes/add-transaction.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\add-transaction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\add-transaction.tsx"
  );
  import.meta.hot.lastModified = "1722912213000";
}
function AddTransaction() {
  _s();
  const actionData = useActionData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-center mb-8", children: "add new transaction" }, void 0, false, {
      fileName: "app/routes/add-transaction.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "amount", className: "block text-sm font-medium text-gray-700", children: "amount" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", step: "0.01", name: "amount", id: "amount", required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-transaction.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700", children: "description" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "description", id: "description", required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-transaction.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700", children: "category" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "category", id: "category", required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-transaction.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "date", className: "block text-sm font-medium text-gray-700", children: "date" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "date", id: "date", required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-transaction.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, { type: "submit", className: "py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.95
          }, children: "add transaction" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, { type: "button", onClick: () => navigate("/"), className: "py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.95
          }, children: "cancel" }, void 0, false, {
            fileName: "app/routes/add-transaction.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-transaction.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/add-transaction.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 mt-2", children: actionData.error }, void 0, false, {
        fileName: "app/routes/add-transaction.tsx",
        lineNumber: 116,
        columnNumber: 31
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/add-transaction.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/add-transaction.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(AddTransaction, "YNDRs+jqEyo50IzazjHr5ocC9v8=", false, function() {
  return [useActionData, useNavigate];
});
_c = AddTransaction;
var _c;
$RefreshReg$(_c, "AddTransaction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddTransaction as default
};
//# sourceMappingURL=/build/routes/add-transaction-6URZSHW2.js.map
