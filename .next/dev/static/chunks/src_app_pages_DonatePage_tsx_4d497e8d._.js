(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/pages/DonatePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js [app-client] (ecmascript) <export default as FormControlLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$lottie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-lottie/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$goods$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/animations/goods.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$service$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/animations/service.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$cash$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/animations/cash.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$loading$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/animations/loading.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/images/backbutton.png.mjs { IMAGE => "[project]/src/app/images/backbutton.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-client] (ecmascript) <export MotionPath as path>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-client] (ecmascript) <export MotionDiv as div>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionButton__as__button$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-client] (ecmascript) <export MotionButton as button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionP__as__p$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-client] (ecmascript) <export MotionP as p>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPABASE_URL"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_KEY"]);
const DonationTypes = [
    {
        name: "Goods",
        json: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$goods$2e$json__$28$json$29$__["default"],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].red
    },
    {
        name: "Cash",
        json: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$cash$2e$json__$28$json$29$__["default"],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].blue
    },
    {
        name: "Service",
        json: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$service$2e$json__$28$json$29$__["default"],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].yellow
    }
];
const AllGoodsDonations = [
    {
        "name": "Clothing",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].red,
        lottie: __turbopack_context__.r("[project]/src/app/animations/clothing.json (json)")
    },
    {
        "name": "Non - perishable food",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].red,
        lottie: __turbopack_context__.r("[project]/src/app/animations/nonperishable.json (json)")
    },
    {
        "name": "Books & educatutional materials",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].green,
        lottie: __turbopack_context__.r("[project]/src/app/animations/books.json (json)")
    },
    {
        "name": "Electronics",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].green,
        lottie: __turbopack_context__.r("[project]/src/app/animations/electronics.json (json)")
    },
    {
        "name": "Furniture",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].yellow,
        lottie: __turbopack_context__.r("[project]/src/app/animations/furniture.json (json)")
    },
    {
        "name": "Medical supplies",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].yellow,
        lottie: __turbopack_context__.r("[project]/src/app/animations/medical.json (json)")
    },
    {
        "name": "Toys & games",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].orange,
        lottie: __turbopack_context__.r("[project]/src/app/animations/toys.json (json)")
    },
    {
        "name": "Hygiene",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].orange,
        lottie: __turbopack_context__.r("[project]/src/app/animations/hygiene.json (json)")
    },
    {
        "name": "Household",
        "color": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].blue,
        lottie: __turbopack_context__.r("[project]/src/app/animations/household.json (json)")
    }
];
const ImageDialog = (param)=>{
    let { handleImage, image } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-2",
                        children: "Add Photos (Optional)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm",
                        children: "Photos help us better understand the donated items"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    component: "label",
                    sx: {
                        textTransform: "none",
                        bgcolor: "white",
                        color: "teal.600",
                        border: "2px dashed #14b8a6",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        paddingX: 8,
                        paddingY: 3,
                        '&:hover': {
                            bgcolor: "rgba(20, 184, 166, 0.05)",
                            borderColor: "#0d9488"
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold",
                                            children: "Upload a picture"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-teal-500",
                                            children: "Click to browse files"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            accept: "image/*",
                            type: "file",
                            onChange: handleImage,
                            style: {
                                display: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            width: 200,
                            alt: "Uploaded image",
                            src: image,
                            className: "rounded-2xl shadow-lg border-2 border-teal-100"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M5 13l4 4L19 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/DonatePage.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ImageDialog;
const SvgPathLoader = ()=>{
    _s();
    const [scope, animate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SvgPathLoader.useEffect": ()=>{
            const animateLoader = {
                "SvgPathLoader.useEffect.animateLoader": async ()=>{
                    // Calculate total animation duration (longest letter + its delay)
                    const totalDuration = 4000; // 4 seconds total
                    // W animation - runs for full duration
                    animate([
                        [
                            ".w1",
                            {
                                pathLength: 0.6,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".w1",
                            {
                                pathLength: 0.01,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".w2",
                            {
                                pathLength: 0.6,
                                pathOffset: 0.6
                            },
                            {
                                at: "<"
                            }
                        ]
                    ], {
                        duration: 2.5,
                        ease: "linear"
                    });
                    // e animation - runs for full duration
                    animate([
                        [
                            ".e1",
                            {
                                pathLength: 0.6,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".e1",
                            {
                                pathLength: 0.01,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".e2",
                            {
                                pathLength: 0.6,
                                pathOffset: 0.6
                            },
                            {
                                at: "<"
                            }
                        ]
                    ], {
                        duration: 2,
                        ease: "linear",
                        delay: 0.3
                    });
                    // C animation - runs for full duration
                    animate([
                        [
                            ".c1",
                            {
                                pathLength: 0.7,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".c1",
                            {
                                pathLength: 0.01,
                                pathOffset: 0
                            }
                        ]
                    ], {
                        duration: 2.2,
                        ease: "linear",
                        delay: 0.6
                    });
                    // a animation - runs for full duration
                    animate([
                        [
                            ".a1",
                            {
                                pathLength: 0.6,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".a1",
                            {
                                pathLength: 0.01,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".a2",
                            {
                                pathLength: 0.6,
                                pathOffset: 0.6
                            },
                            {
                                at: "<"
                            }
                        ]
                    ], {
                        duration: 2,
                        ease: "linear",
                        delay: 0.9
                    });
                    // r animation - runs for full duration
                    animate([
                        [
                            ".r1",
                            {
                                pathLength: 0.6,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".r1",
                            {
                                pathLength: 0.01,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".r2",
                            {
                                pathLength: 0.6,
                                pathOffset: 0.6
                            },
                            {
                                at: "<"
                            }
                        ]
                    ], {
                        duration: 2,
                        ease: "linear",
                        delay: 1.2
                    });
                    // e animation (second e) - runs for full duration
                    animate([
                        [
                            ".e3",
                            {
                                pathLength: 0.6,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".e3",
                            {
                                pathLength: 0.01,
                                pathOffset: 0
                            }
                        ],
                        [
                            ".e4",
                            {
                                pathLength: 0.6,
                                pathOffset: 0.6
                            },
                            {
                                at: "<"
                            }
                        ]
                    ], {
                        duration: 2,
                        ease: "linear",
                        delay: 1.5
                    });
                    // Set a timeout to end loading after animation completes
                    setTimeout({
                        "SvgPathLoader.useEffect.animateLoader": ()=>{
                        // Animation completed, loading state will end naturally
                        }
                    }["SvgPathLoader.useEffect.animateLoader"], totalDuration);
                }
            }["SvgPathLoader.useEffect.animateLoader"];
            animateLoader();
        }
    }["SvgPathLoader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: scope,
        width: "120mm",
        height: "40mm",
        viewBox: "0 0 120 40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "w1",
                initial: {
                    pathLength: 0.6,
                    pathOffset: 0.6
                },
                d: "M 2,35 L 8,8 L 12,25 L 16,8 L 22,35",
                stroke: "#3B82F6",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "w2",
                initial: {
                    pathLength: 0,
                    pathOffset: 1
                },
                d: "M 2,35 L 8,8 L 12,25 L 16,8 L 22,35",
                stroke: "#3B82F6",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "e1",
                initial: {
                    pathLength: 0.6,
                    pathOffset: 0.6
                },
                d: "M 28,20 L 35,20 L 33,18 L 30,18 L 30,22 L 33,22 L 35,20",
                stroke: "#8B5CF6",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "e2",
                initial: {
                    pathLength: 0,
                    pathOffset: 1
                },
                d: "M 28,20 L 35,20 L 33,18 L 30,18 L 30,22 L 33,22 L 35,20",
                stroke: "#8B5CF6",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "c1",
                initial: {
                    pathLength: 0.7,
                    pathOffset: 0.7
                },
                d: "M 42,15 Q 38,12 38,18 Q 38,24 42,27",
                stroke: "#10B981",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "a1",
                initial: {
                    pathLength: 0.6,
                    pathOffset: 0.6
                },
                d: "M 48,27 Q 52,25 54,22 L 54,27 L 56,27 L 56,18 L 54,18 L 50,22 Q 48,24 48,27",
                stroke: "#F59E0B",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "a2",
                initial: {
                    pathLength: 0,
                    pathOffset: 1
                },
                d: "M 48,27 Q 52,25 54,22 L 54,27 L 56,27 L 56,18 L 54,18 L 50,22 Q 48,24 48,27",
                stroke: "#F59E0B",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "r1",
                initial: {
                    pathLength: 0.6,
                    pathOffset: 0.6
                },
                d: "M 62,27 L 62,18 L 64,18 L 68,20 L 68,22 L 64,20 L 64,27",
                stroke: "#EF4444",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "r2",
                initial: {
                    pathLength: 0,
                    pathOffset: 1
                },
                d: "M 62,27 L 62,18 L 64,18 L 68,20 L 68,22 L 64,20 L 64,27",
                stroke: "#EF4444",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "e3",
                initial: {
                    pathLength: 0.6,
                    pathOffset: 0.6
                },
                d: "M 74,20 L 81,20 L 79,18 L 76,18 L 76,22 L 79,22 L 81,20",
                stroke: "#8B5CF6",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionPath__as__path$3e$__["path"], {
                className: "e4",
                initial: {
                    pathLength: 0,
                    pathOffset: 1
                },
                d: "M 74,20 L 81,20 L 79,18 L 76,18 L 76,22 L 79,22 L 81,20",
                stroke: "#8B5CF6",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/DonatePage.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SvgPathLoader, "crQrtxD822sFKyor5CO2nze/XGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"]
    ];
});
_c1 = SvgPathLoader;
const DonatePage = (param)=>{
    let { handlePage, scrollToTop } = param;
    _s1();
    var _s = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    const [donationType, setDonationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [selectedGoods, setSelectedGoods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonatePage.useEffect": ()=>{
            // Check if user is authenticated
            const checkAuth = {
                "DonatePage.useEffect.checkAuth": async ()=>{
                    try {
                        const { data: { user }, error } = await supabase.auth.getUser();
                        setIsAuthenticated(!!user);
                    } catch (error) {
                        console.error("Error checking auth:", error);
                        setIsAuthenticated(false);
                    } finally{
                        setLoading(false);
                    }
                }
            }["DonatePage.useEffect.checkAuth"];
            checkAuth();
            if (scrollToTop) {
                scrollToTop();
            }
        }
    }["DonatePage.useEffect"], [
        scrollToTop
    ]);
    const handleDonationType = (selected)=>{
        setDonationType(selected);
    };
    const handleGoods = (selected)=>{
        setSelectedGoods(selected);
        setDonationType("Goods"); // Always set to Goods for goods donation flow
    };
    const handleGoods1 = (selected)=>{
        setDonationType(selected);
    };
    const PopUpMessage = "Donation submitted successfully ! \nCheck out your dashboard to view your donations";
    const defaultOptions1 = (donation)=>{
        return {
            loop: true,
            autoplay: true,
            animationData: donation,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    };
    const loadingOptions = {
        loop: true,
        autoplay: true,
        animationData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$loading$2e$json__$28$json$29$__["default"],
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const GoBack = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
            initial: {
                x: -3
            },
            animate: {
                x: 0
            },
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 300,
                mass: 40,
                duration: 0.5
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-inline text-lg text-gray-800 text-left font-bold mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        size: "small",
                        fullWidth: false,
                        className: "font-bold",
                        disableRipple: true,
                        sx: {
                            backgroundColor: "transparent",
                            textTransform: "none",
                            color: "gray.800"
                        },
                        onClick: ()=>handleGoods("none"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Back",
                            width: 24,
                            height: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Donate | ",
                    donationType
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 415,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 404,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const GoBackMain = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
            initial: {
                x: -3
            },
            animate: {
                x: 0
            },
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 300,
                mass: 20,
                duration: 0.5
            },
            className: "mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-inline text-lg text-gray-800 text-left font-bold mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        size: "small",
                        fullWidth: false,
                        className: "font-bold",
                        disableRipple: true,
                        sx: {
                            backgroundColor: "transparent",
                            textTransform: "none",
                            color: "gray.800"
                        },
                        onClick: ()=>handleGoods1("none"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Back",
                            width: 24,
                            height: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Donate | ",
                    donationType
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 444,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 433,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const DonateButton = (param)=>{
        let { loading } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                type: "submit",
                disabled: loading,
                className: "group relative overflow-hidden px-12 py-4 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300",
                sx: {
                    background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
                    '&:hover': {
                        background: "linear-gradient(135deg, #0d9488, #0891b2)",
                        boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.4)"
                    },
                    '&:disabled': {
                        background: "linear-gradient(135deg, #6b7280, #9ca3af)",
                        boxShadow: "none"
                    },
                    textTransform: "none",
                    borderRadius: "50px",
                    border: "2px solid transparent",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 488,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center space-x-3",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin h-6 w-6 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 495,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 493,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Submitting..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 497,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 502,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 501,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Donate Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 504,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 506,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 505,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 490,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 467,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 462,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const NoDonationTypeSelected = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                donationType === "none" ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoBack, {}, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 519,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6",
                                        children: "Choose Your Donation Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                                        children: "Select how you'd like to make a lasting impact in your community"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto",
                            children: DonationTypes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.2 * index,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20,
                                        duration: 0.8
                                    },
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-teal-100 hover:border-teal-300 transform hover:-translate-y-3 hover:scale-105",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative p-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    onClick: ()=>handleDonationType(item.name),
                                                    className: "w-full h-full bg-transparent hover:bg-transparent p-0 border-0 shadow-none",
                                                    sx: {
                                                        textTransform: "none",
                                                        '&:hover': {
                                                            backgroundColor: "transparent"
                                                        },
                                                        padding: 0,
                                                        minHeight: "auto"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center space-y-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative mx-auto w-36 h-36 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-teal-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-28 h-28",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$lottie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        options: defaultOptions1(item.json),
                                                                        height: 112,
                                                                        width: 112
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                        lineNumber: 574,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-3xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                        lineNumber: 584,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-20 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto group-hover:w-28 transition-all duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                        lineNumber: 587,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 text-base leading-relaxed font-medium",
                                                                children: [
                                                                    item.name === "Goods" && "Donate physical items and essentials",
                                                                    item.name === "Cash" && "Make financial contributions",
                                                                    item.name === "Service" && "Offer your time and skills"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                lineNumber: 591,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Get Started"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 ml-2",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                                lineNumber: 602,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                            lineNumber: 601,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 557,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-teal-400 transition-all duration-300 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 611,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 552,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, index, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 537,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.8,
                                duration: 0.6
                            },
                            className: "text-center mt-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl px-8 py-4 border border-teal-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mr-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 627,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 626,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 625,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 font-medium",
                                        children: "Every contribution makes a difference in someone's life"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 630,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 624,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 618,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    };
    const DonationTypeGoods = (param)=>{
        let { handleDonationType, handleGoods } = param;
        _s();
        var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
        const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
        /// Image handler ///
        function handleImage(e) {
            var _e_target_files;
            const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
            if (file) {
                setImage(URL.createObjectURL(file));
                // Create a FileReader to read the file
                const reader = new FileReader();
                // Set up an event listener for when the file is read
                reader.onloadend = ()=>{
                // You can now use base64String to send it to your database
                };
                // Read the file as a data URL
                reader.readAsDataURL(file);
            }
        }
        const DeliveryType = (param)=>{
            let { value, onChange } = param;
            _s1();
            const [deliveryType, setDeliveryType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value || "Pick");
            const handleDeliveryType = (type)=>{
                setDeliveryType(type);
                onChange(type);
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
                "DonatePage.DonationTypeGoods.DeliveryType.useEffect": ()=>{
                    if (value !== undefined) {
                        setDeliveryType(value);
                    }
                }
            }["DonatePage.DonationTypeGoods.DeliveryType.useEffect"], [
                value
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-800 mb-2",
                                children: "Delivery Preference"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 684,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "How would you like to handle the donation?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 685,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 683,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    onClick: ()=>handleDeliveryType("Drop"),
                                    className: "w-full p-6 h-auto font-semibold transition-all duration-300 ".concat(deliveryType === "Drop" ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl border-2 border-teal-300' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50'),
                                    sx: {
                                        textTransform: "none",
                                        borderRadius: "20px",
                                        '&:hover': {
                                            backgroundColor: deliveryType === "Drop" ? "transparent" : "rgba(20, 184, 166, 0.05)"
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-full flex items-center justify-center mx-auto ".concat(deliveryType === "Drop" ? 'bg-white/20' : 'bg-gradient-to-br from-teal-100 to-cyan-100'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 ".concat(deliveryType === "Drop" ? 'text-white' : 'text-teal-600'),
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 708,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-lg",
                                                        children: "I'll Deliver"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm ".concat(deliveryType === "Drop" ? 'text-teal-100' : 'text-gray-500'),
                                                        children: "Drop off items yourself"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 715,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 707,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 688,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    onClick: ()=>handleDeliveryType("Pick"),
                                    className: "w-full p-6 h-auto font-semibold transition-all duration-300 ".concat(deliveryType === "Pick" ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl border-2 border-teal-300' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50'),
                                    sx: {
                                        textTransform: "none",
                                        borderRadius: "20px",
                                        '&:hover': {
                                            backgroundColor: deliveryType === "Pick" ? "transparent" : "rgba(20, 184, 166, 0.05)"
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-full flex items-center justify-center mx-auto ".concat(deliveryType === "Pick" ? 'bg-white/20' : 'bg-gradient-to-br from-teal-100 to-cyan-100'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 ".concat(deliveryType === "Pick" ? 'text-white' : 'text-teal-600'),
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 745,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-lg",
                                                        children: "Request Pickup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 753,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm ".concat(deliveryType === "Pick" ? 'text-teal-100' : 'text-gray-500'),
                                                        children: "We'll collect from you"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 754,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 752,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 744,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 725,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 687,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 682,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s1(DeliveryType, "c8zk7N/ynlPaAleQu45GLVPK458=");
        const DonateClothing = ()=>{
            _s2();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: "",
                gender: "",
                quantity: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Clothing"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: "",
                            gender: "",
                            quantity: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 854,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 853,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 852,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Clothing"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 857,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Help provide essential clothing to those in need"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 860,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 851,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 866,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 868,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 874,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "gender",
                                            value: formData.gender,
                                            onChange: handleChange,
                                            required: true,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select Gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 882,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Male",
                                                    children: "Male"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Female",
                                                    children: "Female"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Unisex",
                                                    children: "Unisex"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 885,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Children",
                                                    children: "Children"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 875,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 873,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 891,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "quantity",
                                            placeholder: "Number of items",
                                            value: formData.quantity,
                                            onChange: handleChange,
                                            required: true,
                                            min: "1",
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 892,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 890,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 905,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the clothing items (e.g., type, size, condition, colors)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 906,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 904,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 918,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 865,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 845,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 844,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s2(DonateClothing, "yK6+LD/u05CGUpoCH5tav+g+2RY=");
        const DonateFood = ()=>{
            _s3();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: "",
                quantity: "",
                expiration_date: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Non-perishable food"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: "",
                            quantity: "",
                            expiration_date: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1014,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1013,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Non-Perishable Food"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Help fight hunger with your food donations"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1020,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1011,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1028,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Quantity (in units/packages)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "quantity",
                                            placeholder: "Number of items",
                                            value: formData.quantity,
                                            onChange: handleChange,
                                            required: true,
                                            min: "1",
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Expiration Date (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            name: "expiration_date",
                                            value: formData.expiration_date,
                                            onChange: handleChange,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1049,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1059,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the food items (e.g., canned goods, pasta, rice, cereal)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1060,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1058,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1025,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1005,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1004,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s3(DonateFood, "c+B65oocf8ooVTmS+gECDBNu9iA=");
        const DonateBooks = ()=>{
            _s4();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: "",
                quantity: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Books & educational materials"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: "",
                            quantity: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1166,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1165,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Books & Educational Materials"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1170,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Support education and learning opportunities"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1164,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1179,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1181,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1187,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "quantity",
                                            placeholder: "Number of books/materials",
                                            value: formData.quantity,
                                            onChange: handleChange,
                                            required: true,
                                            min: "1",
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1201,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the books/materials (e.g., subjects, grade level, condition, titles)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1202,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1200,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1214,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1213,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1178,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1158,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1157,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s4(DonateBooks, "BWdTQiDlaS+7lw7rufmtWuJS7pg=");
        const DonateElectronics = ()=>{
            _s5();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: "",
                brand: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Electronics"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: "",
                            brand: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1309,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1307,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Electronics"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1312,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Give technology a second life and help bridge the digital divide"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1315,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1306,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1321,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1323,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Brand (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1329,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "brand",
                                            placeholder: "E.g., Apple, Samsung, Dell",
                                            value: formData.brand,
                                            onChange: handleChange,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1330,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1328,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1341,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the electronics (e.g., laptop, phone, tablet, condition, model, working status)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1342,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1340,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1354,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1320,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1300,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1299,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s5(DonateElectronics, "9cWRed4YehrUWCFKsdPkIlgpGPI=");
        const DonateFurniture = ()=>{
            _s6();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Furniture"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1448,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1447,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1446,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Furniture"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1451,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Help furnish homes and create comfortable living spaces"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1454,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1445,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1460,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1462,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1468,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the furniture (e.g., type, dimensions, condition, materials, color)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1469,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1467,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1481,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1480,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1459,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1439,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1438,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s6(DonateFurniture, "2t4NiJQoih0aowcRmMpnz8lVHwc=");
        const DonateMedicalSupplies = ()=>{
            _s7();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: "",
                quantity: "",
                expiration_date: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Medical supplies"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: "",
                            quantity: "",
                            expiration_date: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1577,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1576,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1575,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Medical Supplies"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1580,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Help provide essential medical care and health support"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1583,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1574,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1589,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1591,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1597,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "quantity",
                                            placeholder: "Number of items",
                                            value: formData.quantity,
                                            onChange: handleChange,
                                            required: true,
                                            min: "1",
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1598,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1596,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Expiration Date (if applicable)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1611,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            name: "expiration_date",
                                            value: formData.expiration_date,
                                            onChange: handleChange,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1612,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1610,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1622,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the medical supplies (e.g., first aid kits, bandages, medications, equipment)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1623,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1621,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1635,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1634,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1588,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1568,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1567,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s7(DonateMedicalSupplies, "c+B65oocf8ooVTmS+gECDBNu9iA=");
        const DonateToysAndGames = ()=>{
            _s8();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Toys & games"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1729,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1728,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1727,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Toys & Games"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1732,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Bring joy and learning to children's lives"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1735,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1726,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1741,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1743,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1749,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the toys/games (e.g., type, age range, condition, educational value)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1750,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1748,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1762,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1761,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1740,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1720,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1719,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s8(DonateToysAndGames, "2t4NiJQoih0aowcRmMpnz8lVHwc=");
        const DonateHygiene = ()=>{
            _s9();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Hygiene"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1856,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1855,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1854,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Hygiene Products"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1859,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Help others maintain good health and hygiene"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1862,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1853,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1868,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1870,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1876,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "List of hygiene products (e.g., soap, toothpaste, shampoo, deodorant, toothbrushes)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1877,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1875,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1889,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1888,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1867,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1847,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1846,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s9(DonateHygiene, "2t4NiJQoih0aowcRmMpnz8lVHwc=");
        const DonateHousehold = ()=>{
            _s10();
            const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                delivery_type: "Pick",
                description: ""
            });
            const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const handleChange = (e)=>{
                const { name, value } = e.target;
                setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                    [name]: value
                }));
            };
            const handleSubmit = async (e)=>{
                e.preventDefault();
                setLoading(true);
                try {
                    var _formData_description, _user_user_metadata;
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        alert("Please log in to submit a donation");
                        setLoading(false);
                        return;
                    }
                    if (!formData.delivery_type || ![
                        'Pick',
                        'Drop'
                    ].includes(formData.delivery_type)) {
                        alert("Please select a delivery type");
                        setLoading(false);
                        return;
                    }
                    if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                        alert("Please provide a description");
                        setLoading(false);
                        return;
                    }
                    const { error: userError } = await supabase.from("users").upsert([
                        {
                            id: user.id,
                            email: user.email,
                            name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                        }
                    ], {
                        onConflict: 'id'
                    });
                    if (userError) {
                        console.error("Error creating user record:", userError);
                        alert("Error setting up user account. Please try logging out and back in.");
                        setLoading(false);
                        return;
                    }
                    const { error } = await supabase.from("donations").insert([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            user_id: user.id,
                            category: "Household"
                        }, formData)
                    ]);
                    if (error) {
                        console.error("Error submitting donation:", error.message);
                        alert("Error submitting donation: ".concat(error.message));
                    } else {
                        alert(PopUpMessage);
                        setFormData({
                            delivery_type: "Pick",
                            description: ""
                        });
                        setTimeout(()=>handlePage('Dashboard'), 1500);
                    }
                } catch (err) {
                    console.error("Unexpected error:", err);
                    alert("An unexpected error occurred. Please try again.");
                } finally{
                    setLoading(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 1983,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 1982,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1981,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2",
                                    children: "Donate Household Items"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1986,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Help create comfortable homes with essential household items"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1989,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1980,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-8",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1995,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeliveryType, {
                                    value: formData.delivery_type || "",
                                    onChange: (value)=>setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                            delivery_type: value
                                        }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 1997,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2003,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the household items (e.g., kitchenware, bedding, cleaning supplies, small appliances)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2004,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2002,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 2016,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2015,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 1994,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 1974,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 1973,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s10(DonateHousehold, "2t4NiJQoih0aowcRmMpnz8lVHwc=");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center pt-5",
            children: [
                selectedGoods === "none" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoBackMain, {}, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2026,
                            columnNumber: 40
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoBack, {}, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2027,
                            columnNumber: 47
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        selectedGoods === "none" ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                            initial: {
                                opacity: 0,
                                x: 0
                            },
                            animate: {
                                opacity: 1,
                                x: 3
                            },
                            transition: {
                                delay: 0.3,
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                mass: 30,
                                duration: 1
                            },
                            className: "flex-inline text-lg text-gray-800 text-left ml-2 font-bold mt-2",
                            children: [
                                "| ",
                                selectedGoods
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2029,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2027,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                selectedGoods === "none" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8",
                    children: AllGoodsDonations.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionButton__as__button$3e$__["button"], {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            whileHover: {
                                scale: 1.05,
                                y: -5
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            transition: {
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                duration: 0.5
                            },
                            onClick: ()=>handleGoods(item.name),
                            className: "group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-teal-100 hover:border-teal-300 p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2066,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative text-center space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-teal-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$lottie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    options: {
                                                        loop: true,
                                                        autoplay: true,
                                                        animationData: item.lottie,
                                                        rendererSettings: {
                                                            preserveAspectRatio: 'xMidYMid slice'
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2072,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 2071,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2070,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-300 mb-2",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2087,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto group-hover:w-16 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2090,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2086,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "opacity-0 group-hover:opacity-100 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-full text-sm shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Donate Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 2096,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 ml-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                            lineNumber: 2098,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 2097,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 2095,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2094,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2068,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2049,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2047,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Clothing" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: [
                            0,
                            0.3,
                            0.8,
                            0.9,
                            1
                        ],
                        x: 4
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.15,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 5,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateClothing, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2119,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2108,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Non - perishable food" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        x: 0
                    },
                    animate: {
                        opacity: 1,
                        x: 3
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateFood, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2133,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2122,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Books & educatutional materials" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        x: 0
                    },
                    animate: {
                        opacity: 1,
                        x: 3
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateBooks, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2147,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2136,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Electronics" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateElectronics, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2160,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2149,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Furniture" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateFurniture, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2172,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2161,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Medical supplies" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateMedicalSupplies, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2184,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2173,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Toys & games" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateToysAndGames, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2196,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2185,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Hygiene" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateHygiene, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2208,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2197,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)) : null,
                selectedGoods === "Household" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mt-50",
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                        mass: 20,
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateHousehold, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2220,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2209,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0)) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 2025,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s(DonationTypeGoods, "rw6qng99rwBYv/BMRhLONeRFue4=");
    const DonationTypeCash = ()=>{
        _s2();
        const [selectedCash, setSelectedCash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
        const handleCash = (selected)=>{
            setSelectedCash(selected);
        };
        const paymentTypes = [
            {
                "name": "Credit/debit card",
                "color": "teal"
            },
            {
                "name": "EFT",
                "color": "teal"
            },
            {
                "name": "Cash",
                "color": "cyan"
            },
            {
                "name": "SnapScan",
                "color": "teal"
            },
            {
                "name": "Zapper",
                "color": "teal"
            },
            {
                "name": "Payfast",
                "color": "teal"
            },
            {
                "name": "Apple Pay",
                "color": "cyan"
            },
            {
                "name": "Google Pay",
                "color": "cyan"
            },
            {
                "name": "Samsung Pay",
                "color": "cyan"
            }
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "DonatePage.DonationTypeCash.useEffect": ()=>{
                // getInstruments();
                if (scrollToTop) {
                    scrollToTop();
                }
            }
        }["DonatePage.DonationTypeCash.useEffect"], [
            selectedCash,
            scrollToTop
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6",
                            children: "Choose Your Payment Method"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2257,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mb-6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2260,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                            children: "Select a secure and convenient way to make your financial contribution"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2261,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2251,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                selectedCash === "none" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoBackMain, {}, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2268,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-start mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoBack, {}, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2271,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedCash !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "flex items-center text-lg text-gray-800 font-bold ml-4",
                            children: [
                                "| ",
                                selectedCash
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2273,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2270,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
                    children: paymentTypes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.1 * index,
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                duration: 0.6
                            },
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-teal-100 hover:border-teal-300 transform hover:-translate-y-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300 border border-teal-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl",
                                                children: [
                                                    item.name === "Credit/debit card" && "💳",
                                                    item.name === "EFT" && "🏦",
                                                    item.name === "Cash" && "💵",
                                                    item.name === "SnapScan" && "📱",
                                                    item.name === "Zapper" && "⚡",
                                                    item.name === "Payfast" && "💰",
                                                    item.name === "Apple Pay" && "📱",
                                                    item.name === "Google Pay" && "🎯",
                                                    item.name === "Samsung Pay" && "📱"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                lineNumber: 2304,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2303,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors duration-300",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2318,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto group-hover:w-16 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2321,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2317,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm leading-relaxed",
                                            children: [
                                                item.name === "Credit/debit card" && "Secure online payment",
                                                item.name === "EFT" && "Direct bank transfer",
                                                item.name === "Cash" && "In-person donation",
                                                item.name === "SnapScan" && "QR code payment",
                                                item.name === "Zapper" && "Instant payment",
                                                item.name === "Payfast" && "Online payment gateway",
                                                item.name === "Apple Pay" && "Apple wallet payment",
                                                item.name === "Google Pay" && "Google wallet payment",
                                                item.name === "Samsung Pay" && "Samsung wallet payment"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2324,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            onClick: ()=>handleCash(item.name),
                                            className: "w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ".concat(selectedCash === item.name ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl' : 'bg-gray-50 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 text-gray-700 border border-gray-200 hover:border-teal-200'),
                                            sx: {
                                                textTransform: "none",
                                                borderRadius: "16px",
                                                '&:hover': {
                                                    transform: "translateY(-2px)",
                                                    boxShadow: selectedCash === item.name ? "0 20px 40px -12px rgba(20, 184, 166, 0.4)" : "0 8px 25px -12px rgba(0, 0, 0, 0.15)"
                                                }
                                            },
                                            children: selectedCash === item.name ? "Selected ✓" : "Select Method"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2336,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2302,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2301,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2288,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2286,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                selectedCash !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.3
                    },
                    className: "mt-16 max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10 border border-teal-200 shadow-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-10 h-10 text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M5 13l4 4L19 7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2372,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 2371,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2370,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-bold text-gray-800 mb-2",
                                            children: "Payment Method Selected"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2376,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: [
                                                "You've chosen ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-teal-600",
                                                    children: selectedCash
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2380,
                                                    columnNumber: 35
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " as your payment method."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2379,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2375,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            onClick: ()=>handleCash("none"),
                                            className: "bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-200 transition-all duration-300",
                                            sx: {
                                                textTransform: "none"
                                            },
                                            children: "Change Method"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2384,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            className: "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl",
                                            sx: {
                                                textTransform: "none",
                                                '&:hover': {
                                                    transform: "translateY(-2px)"
                                                }
                                            },
                                            children: "Proceed to Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2391,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2383,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2369,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2368,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2362,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.8
                    },
                    className: "text-center mt-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center bg-white rounded-2xl px-8 py-4 shadow-lg border border-teal-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mr-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-white",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 2418,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2417,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2416,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 font-medium",
                                children: "All payments are secure and encrypted"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2421,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2415,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2409,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 2249,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s2(DonationTypeCash, "//1iNHJu3oh6LhAPO0JZAOJ8a/M=");
    const DonationTypeService = ()=>{
        _s3();
        const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
            service_category: "",
            description: "",
            service_location: "",
            availability: {
                monday: {
                    selected: false,
                    startTime: "",
                    endTime: ""
                },
                tuesday: {
                    selected: false,
                    startTime: "",
                    endTime: ""
                },
                wednesday: {
                    selected: false,
                    startTime: "",
                    endTime: ""
                },
                thursday: {
                    selected: false,
                    startTime: "",
                    endTime: ""
                },
                friday: {
                    selected: false,
                    startTime: "",
                    endTime: ""
                },
                saturday: {
                    selected: false,
                    startTime: "",
                    endTime: ""
                },
                sunday: {
                    selected: false,
                    startTime: "",
                    endTime: ""
                }
            }
        });
        const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
        const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const GoBackService = ()=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                initial: {
                    x: -3
                },
                animate: {
                    x: 0
                },
                transition: {
                    delay: 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 300,
                    mass: 40,
                    duration: 0.5
                },
                className: "flex justify-start mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-inline text-lg text-gray-800 text-left font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "small",
                            fullWidth: false,
                            className: "font-bold",
                            disableRipple: true,
                            sx: {
                                backgroundColor: "transparent",
                                textTransform: "none",
                                color: "gray.800"
                            },
                            onClick: ()=>handleDonationType("none"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$images$2f$backbutton$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "Back",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2471,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2463,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Donate | Service"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2462,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 2449,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        /// Image handler ///
        function handleImage(e) {
            var _e_target_files;
            const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
            if (file) {
                setImage(URL.createObjectURL(file));
                // Create a FileReader to read the file
                const reader = new FileReader();
                // Set up an event listener for when the file is read
                reader.onloadend = ()=>{
                // You can now use base64String to send it to your database
                };
                // Read the file as a data URL
                reader.readAsDataURL(file);
            }
        }
        const handleChange = (e)=>{
            const { name, value } = e.target;
            setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                [name]: value
            }));
        };
        const handleLocationChange = (location)=>{
            setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                service_location: location
            }));
        };
        const handleDayToggle = (day)=>{
            var _formData_availability, _formData_availability_day, _formData_availability1;
            setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                availability: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData.availability), {
                    [day]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ((_formData_availability = formData.availability) === null || _formData_availability === void 0 ? void 0 : _formData_availability[day]) || {
                        selected: false,
                        startTime: "",
                        endTime: ""
                    }), {
                        selected: !(((_formData_availability1 = formData.availability) === null || _formData_availability1 === void 0 ? void 0 : (_formData_availability_day = _formData_availability1[day]) === null || _formData_availability_day === void 0 ? void 0 : _formData_availability_day.selected) || false)
                    })
                })
            }));
        };
        const handleTimeChange = (day, field, value)=>{
            var _formData_availability;
            setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                availability: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData.availability), {
                    [day]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ((_formData_availability = formData.availability) === null || _formData_availability === void 0 ? void 0 : _formData_availability[day]) || {
                        selected: false,
                        startTime: "",
                        endTime: ""
                    }), {
                        [field]: value
                    })
                })
            }));
        };
        const handleSubmit = async (e)=>{
            e.preventDefault();
            setLoading(true);
            try {
                var _formData_description, _user_user_metadata;
                // Get the current authenticated user
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) {
                    alert("Please log in to submit a donation");
                    setLoading(false);
                    return;
                }
                // Validate required fields
                if (!formData.service_category) {
                    alert("Please select a service category");
                    setLoading(false);
                    return;
                }
                if (!((_formData_description = formData.description) === null || _formData_description === void 0 ? void 0 : _formData_description.trim())) {
                    alert("Please provide a service description");
                    setLoading(false);
                    return;
                }
                if (!formData.service_location) {
                    alert("Please select a service location option");
                    setLoading(false);
                    return;
                }
                // Validate availability - at least one day must be selected
                const hasSelectedDays = Object.values(formData.availability || {}).some((day)=>day === null || day === void 0 ? void 0 : day.selected);
                if (!hasSelectedDays) {
                    alert("Please select at least one day for your availability");
                    setLoading(false);
                    return;
                }
                // Validate time ranges for selected days
                const selectedDaysData = Object.entries(formData.availability || {}).filter((param)=>{
                    let [_, data] = param;
                    return data === null || data === void 0 ? void 0 : data.selected;
                });
                for (const [day, data] of selectedDaysData){
                    if (!data.startTime || !data.endTime) {
                        alert("Please provide both start and end times for ".concat(day.charAt(0).toUpperCase() + day.slice(1)));
                        setLoading(false);
                        return;
                    }
                    if (data.startTime >= data.endTime) {
                        alert("End time must be after start time for ".concat(day.charAt(0).toUpperCase() + day.slice(1)));
                        setLoading(false);
                        return;
                    }
                }
                // Debug logging
                console.log('Submitting service donation with formData:', formData);
                // First, ensure user exists in public.users table
                const { error: userError } = await supabase.from("users").upsert([
                    {
                        id: user.id,
                        email: user.email,
                        name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || user.email.split('@')[0]
                    }
                ], {
                    onConflict: 'id'
                });
                if (userError) {
                    console.error("Error creating user record:", userError);
                    alert("Error setting up user account. Please try logging out and back in.");
                    setLoading(false);
                    return;
                }
                // Format availability data for database
                const selectedDays = Object.entries(formData.availability || {}).filter((param)=>{
                    let [_, data] = param;
                    return data.selected;
                }).map((param)=>{
                    let [day, data] = param;
                    return "".concat(day.charAt(0).toUpperCase() + day.slice(1), ": ").concat(data.startTime, " - ").concat(data.endTime);
                }).join(', ');
                const { error } = await supabase.from("service_donations").insert([
                    {
                        user_id: user.id,
                        service_category: formData.service_category,
                        description: formData.description,
                        location_preference: formData.service_location,
                        availability: selectedDays
                    }
                ]);
                if (error) {
                    console.error("Error submitting service donation:", error.message);
                    alert("Error submitting service donation: ".concat(error.message));
                } else {
                    alert(PopUpMessage);
                    // Reset form and redirect to dashboard
                    setFormData({
                        service_category: "",
                        description: "",
                        service_location: "",
                        availability: {
                            monday: {
                                selected: false,
                                startTime: "",
                                endTime: ""
                            },
                            tuesday: {
                                selected: false,
                                startTime: "",
                                endTime: ""
                            },
                            wednesday: {
                                selected: false,
                                startTime: "",
                                endTime: ""
                            },
                            thursday: {
                                selected: false,
                                startTime: "",
                                endTime: ""
                            },
                            friday: {
                                selected: false,
                                startTime: "",
                                endTime: ""
                            },
                            saturday: {
                                selected: false,
                                startTime: "",
                                endTime: ""
                            },
                            sunday: {
                                selected: false,
                                startTime: "",
                                endTime: ""
                            }
                        }
                    });
                    setImage(undefined);
                    setTimeout(()=>handlePage('Dashboard'), 1500);
                }
            } catch (err) {
                console.error("Unexpected error:", err);
                alert("An unexpected error occurred. Please try again.");
            } finally{
                setLoading(false);
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoBackService, {}, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2656,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "bg-white rounded-3xl shadow-xl border border-teal-100 p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-teal-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-10 h-10 text-teal-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2667,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 2666,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2665,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3",
                                    children: "Offer Your Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2670,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-lg",
                                    children: "Share your skills and time to make a meaningful impact"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2673,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2664,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-10",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageDialog, {
                                    image: image || "",
                                    handleImage: handleImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2682,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-lg font-semibold text-gray-800",
                                            children: "Service Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2686,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "service_category",
                                            value: formData.service_category,
                                            onChange: handleChange,
                                            required: true,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 text-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select a Service Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2696,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Automotive",
                                                    children: "Automotive (e.g., mechanic, driver)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2697,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Professional",
                                                    children: "Professional (e.g., accounting, legal)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2698,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "HomeMaintenance",
                                                    children: "Home Maintenance (e.g., welding, plumbing)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2699,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Educational",
                                                    children: "Educational (e.g., tutoring, workshops)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2700,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Medical",
                                                    children: "Medical (e.g., counseling, health checks)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2701,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2702,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2689,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2685,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-lg font-semibold text-gray-800",
                                            children: "Service Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2708,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            placeholder: "Describe the service you are offering (e.g., skills, tools, duration, specializations, etc.)",
                                            value: formData.description,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 5,
                                            className: "w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-gray-700 placeholder-gray-400 text-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2711,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2707,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-800 mb-2",
                                                    children: "Service Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2725,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "How would you prefer to provide your service?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2726,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2724,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: 0.98
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                        onClick: ()=>handleLocationChange("Remote"),
                                                        className: "w-full p-6 h-auto font-semibold transition-all duration-300 ".concat(formData.service_location === "Remote" ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl border-2 border-teal-300' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50'),
                                                        sx: {
                                                            textTransform: "none",
                                                            borderRadius: "20px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ".concat(formData.service_location === "Remote" ? 'bg-white/20' : 'bg-gradient-to-br from-teal-100 to-cyan-100'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-8 h-8 ".concat(formData.service_location === "Remote" ? 'text-white' : 'text-teal-600'),
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                            lineNumber: 2750,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                        lineNumber: 2749,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 2746,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-xl mb-2",
                                                                            children: "Remote Service"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                            lineNumber: 2754,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm ".concat(formData.service_location === "Remote" ? 'text-teal-100' : 'text-gray-500'),
                                                                            children: "I can provide this service online or over the phone"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                            lineNumber: 2755,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 2753,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                            lineNumber: 2745,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 2733,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2729,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: 0.98
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                        onClick: ()=>handleLocationChange("InPerson"),
                                                        className: "w-full p-6 h-auto font-semibold transition-all duration-300 ".concat(formData.service_location === "InPerson" ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl border-2 border-teal-300' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50'),
                                                        sx: {
                                                            textTransform: "none",
                                                            borderRadius: "20px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ".concat(formData.service_location === "InPerson" ? 'bg-white/20' : 'bg-gradient-to-br from-teal-100 to-cyan-100'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-8 h-8 ".concat(formData.service_location === "InPerson" ? 'text-white' : 'text-teal-600'),
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                                lineNumber: 2784,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                                lineNumber: 2785,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                        lineNumber: 2783,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 2780,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-xl mb-2",
                                                                            children: "In-Person Service"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                            lineNumber: 2789,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm ".concat(formData.service_location === "InPerson" ? 'text-teal-100' : 'text-gray-500'),
                                                                            children: "I can meet people at their location"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                            lineNumber: 2790,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 2788,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                            lineNumber: 2779,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                        lineNumber: 2767,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2763,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2728,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2723,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-800 mb-2",
                                                    children: "Availability"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2803,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Select the days and times you're available to help"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2804,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2802,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-4",
                                            children: Object.entries(formData.availability || {}).map((param)=>{
                                                let [day, data] = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-teal-200 transition-all duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                                                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                                                checked: data.selected,
                                                                onChange: ()=>handleDayToggle(day),
                                                                sx: {
                                                                    color: "gray.400",
                                                                    '&.Mui-checked': {
                                                                        color: "teal.600"
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                lineNumber: 2811,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-800 capitalize",
                                                                children: day
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                lineNumber: 2822,
                                                                columnNumber: 30
                                                            }, void 0),
                                                            sx: {
                                                                marginRight: 1
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                            lineNumber: 2809,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        data.selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 ml-auto",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "time",
                                                                    value: data.startTime,
                                                                    onChange: (e)=>handleTimeChange(day, 'startTime', e.target.value),
                                                                    className: "p-2 border border-gray-300 rounded-lg text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 2827,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-500 font-medium",
                                                                    children: "to"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 2833,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "time",
                                                                    value: data.endTime,
                                                                    onChange: (e)=>handleTimeChange(day, 'endTime', e.target.value),
                                                                    className: "p-2 border border-gray-300 rounded-lg text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                                    lineNumber: 2834,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                            lineNumber: 2826,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, day, true, {
                                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                                    lineNumber: 2808,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                                            lineNumber: 2806,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2801,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonateButton, {
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 2848,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2847,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2678,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2657,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 2655,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s3(DonationTypeService, "NNfgTwEvcqZ2srHM2xvjiY2oKyY=");
    // Show Lottie loading animation while checking authentication
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$lottie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    options: loadingOptions,
                    height: 200,
                    width: 200
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2862,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 2861,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 2860,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Show login prompt if not authenticated
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[300px] gradient-hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black opacity-20"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2877,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                    initial: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold mb-4",
                                        children: "Donate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 2884,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2879,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionP__as__p$3e$__["p"], {
                                    className: "text-xl max-w-3xl",
                                    initial: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.2
                                    },
                                    children: "Make a lasting impact in your community by donating goods, cash, or services to those who need it most."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2886,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/DonatePage.tsx",
                            lineNumber: 2878,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2876,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.2
                        },
                        className: "bg-white rounded-3xl shadow-xl p-10 text-center border border-teal-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-teal-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-10 h-10 text-teal-600",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                                        lineNumber: 2905,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2904,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2903,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-800 mb-4",
                                children: "Login Required"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2908,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-8 text-lg",
                                children: "Please log in to your account to submit donations and track your impact."
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2909,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>handlePage('Login'),
                                variant: "contained",
                                className: "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
                                sx: {
                                    textTransform: "none",
                                    '&:hover': {
                                        transform: "translateY(-2px)"
                                    }
                                },
                                children: "Go to Login"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2912,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2897,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                    lineNumber: 2896,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/DonatePage.tsx",
            lineNumber: 2875,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen theme-bg-primary",
        children: [
            donationType === "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[300px] gradient-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2936,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"], {
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold mb-4",
                                    children: "Donate"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/DonatePage.tsx",
                                    lineNumber: 2943,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2938,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionP__as__p$3e$__["p"], {
                                className: "text-xl max-w-3xl",
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                children: "Make a lasting impact in your community by donating goods, cash, or services to those who need it most."
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/DonatePage.tsx",
                                lineNumber: 2945,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2937,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 2935,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    donationType === "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoDonationTypeSelected, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2959,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0)),
                    donationType === "Goods" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonationTypeGoods, {
                        handleDonationType: handleDonationType,
                        handleGoods: handleGoods
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2960,
                        columnNumber: 38
                    }, ("TURBOPACK compile-time value", void 0)),
                    donationType === "Cash" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonationTypeCash, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2961,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0)),
                    donationType === "Service" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonationTypeService, {}, void 0, false, {
                        fileName: "[project]/src/app/pages/DonatePage.tsx",
                        lineNumber: 2962,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/DonatePage.tsx",
                lineNumber: 2958,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/DonatePage.tsx",
        lineNumber: 2932,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DonatePage, "zLkofWube3g83ot1TPw2thyJgoE=");
_c2 = DonatePage;
const __TURBOPACK__default__export__ = DonatePage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ImageDialog");
__turbopack_context__.k.register(_c1, "SvgPathLoader");
__turbopack_context__.k.register(_c2, "DonatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_pages_DonatePage_tsx_4d497e8d._.js.map