(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// 1. IMPORTAMOS usePathname
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 2. OBTENEMOS LA RUTA ACTUAL
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // 3. SI ESTAMOS EN '/links', NO MOSTRAMOS EL NAVBAR
    if (pathname === '/links') return null;
    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%"
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    const navLinks = [
        {
            name: "Soluciones",
            href: "/soluciones"
        },
        {
            name: "Nosotros",
            href: "/sobre-nosotros"
        },
        {
            name: "Casos de Éxito",
            href: "/casos"
        } // Actualicé este link por si acaso
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-[#F8F9FF]/90 backdrop-blur-md border-b border-[#374e86]/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-3xl font-massive font-medium tracking-tight z-50 text-[#374e86]",
                        children: [
                            "MADA",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#e7f1ad]",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex space-x-10 items-center text-sm font-sans-body font-semibold tracking-wide text-[#374e86]",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "hover:text-[#bcb5ff] transition-colors relative group",
                                    children: [
                                        link.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#bcb5ff] transition-all group-hover:w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contacto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "font-sans-body border border-[#374e86] text-[#374e86] px-6 py-2.5 rounded-full hover:bg-[#374e86] hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-bold shadow-lg shadow-[#374e86]/5 hover:shadow-[#bcb5ff]/20",
                                    children: "Hablemos"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden z-50 p-2 relative text-[#374e86]",
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                            lineNumber: 62,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                            lineNumber: 62,
                            columnNumber: 53
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    variants: menuVariants,
                    className: "fixed inset-0 bg-[#F8F9FF] z-40 flex flex-col justify-center items-center md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8 text-center",
                        children: [
                            navLinks.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.1 * i
                                        },
                                        className: "text-4xl font-serif-display text-[#374e86] hover:text-[#bcb5ff] transition-colors block",
                                        children: link.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                        lineNumber: 83,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, link.name, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                    lineNumber: 78,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contacto",
                                onClick: ()=>setIsMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    className: "mt-6 bg-[#374e86] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest shadow-xl shadow-[#374e86]/20",
                                    children: "Hablemos"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                    lineNumber: 95,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                                lineNumber: 94,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                        lineNumber: 76,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                    lineNumber: 69,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/app/links/page.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "57pbbN3DYdkExroTk+Wj7Tth3cw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=OneDrive_Escritorio_Proyectos%20ReactJS%20-%20NextJS_mkt-mada_fe1b9615._.js.map