(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Componente interno para los Blobs "Vivos"
const LivingBlobs = ()=>{
    // Configuración de movimiento aleatorio
    const blobVariants = (index)=>({
            animate: {
                x: [
                    0,
                    Math.random() * 400 - 200,
                    Math.random() * -400 + 200,
                    0
                ],
                y: [
                    0,
                    Math.random() * 300 - 150,
                    Math.random() * -300 + 150,
                    0
                ],
                scale: [
                    1,
                    1.4,
                    0.8,
                    1.2,
                    1
                ],
                rotate: [
                    0,
                    180,
                    360,
                    0
                ],
                transition: {
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none bg-[#F8F9FF]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03] mix-blend-overlay",
                style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: blobVariants(1),
                animate: "animate",
                className: "absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#bcb5ff]/40 blur-[100px] mix-blend-multiply"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: blobVariants(2),
                animate: "animate",
                className: "absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#95b2ed]/40 blur-[90px] mix-blend-multiply"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: blobVariants(3),
                animate: "animate",
                className: "absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#e7f1ad]/50 blur-[80px] mix-blend-multiply"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        0,
                        100,
                        -100,
                        0
                    ],
                    y: [
                        0,
                        -100,
                        50,
                        0
                    ],
                    scale: [
                        1,
                        1.5,
                        1
                    ]
                },
                transition: {
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                },
                className: "absolute top-[30%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#374e86]/10 blur-[60px] mix-blend-multiply"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                lineNumber: 52,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
        lineNumber: 26,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LivingBlobs;
const Hero = ()=>{
    _s();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const yParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -100
    ]);
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex-grow flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 min-h-screen z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LivingBlobs, {}, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: itemVariants,
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[1px] w-12 bg-[#95b2ed]"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans-body text-xs font-bold uppercase tracking-[0.2em] text-[#374e86]/70",
                                            children: "Marketing para médicos"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    variants: itemVariants,
                                    className: "font-serif-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] mb-6 text-[#374e86]",
                                    children: [
                                        "Tu consulta merece ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                            lineNumber: 92,
                                            columnNumber: 48
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-block text-[#bcb5ff] font-normal italic",
                                            children: [
                                                "excelencia",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute -bottom-2 left-0 w-full h-[0.4em] pointer-events-none",
                                                    viewBox: "0 0 200 9",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                        d: "M2 7 Q 100 12 198 7",
                                                        stroke: "currentColor",
                                                        strokeWidth: "3",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        initial: {
                                                            pathLength: 0,
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            pathLength: 1,
                                                            opacity: 1
                                                        },
                                                        transition: {
                                                            delay: 1,
                                                            duration: 0.8,
                                                            ease: "easeInOut"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                                        lineNumber: 96,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                            lineNumber: 93,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " y pacientes."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    variants: itemVariants,
                                    className: "font-sans-body text-lg md:text-xl text-[#374e86]/80 max-w-xl leading-relaxed mb-8 font-semibold",
                                    children: "Implementamos sistemas de atracción que llenan tu agenda con pacientes calificados. Deja de perseguir prospectos, haz que ellos te encuentren a ti."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: itemVariants,
                                    className: "flex flex-col sm:flex-row gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "font-sans-body group flex items-center justify-center gap-4 bg-[#374e86] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#bcb5ff] hover:text-[#374e86] transition-all duration-500 shadow-2xl shadow-[#374e86]/20 hover:scale-105",
                                            children: [
                                                "Aumentar mis Pacientes",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "font-sans-body flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-[#374e86] border border-[#374e86]/20 hover:border-[#374e86] transition-all duration-300 bg-transparent",
                                            children: "Ver Casos de Éxito"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 relative hidden lg:block h-[600px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-10 -right-10 w-full h-full border border-[#374e86]/10 rounded-t-[10rem] rounded-b-[2rem] z-0"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    y: yParallax
                                },
                                className: "relative w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-[#bcb5ff]/20 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
                                        alt: "Doctora Estética",
                                        fill: true,
                                        priority: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#bcb5ff]/10 mix-blend-multiply"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 1.2,
                                    duration: 0.8
                                },
                                className: "absolute bottom-20 -left-12 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-[220px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full bg-[#e7f1ad] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                                lineNumber: 148,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-widest text-[#374e86]/50 font-bold",
                                                children: "Agenda Llena"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-serif-display font-bold text-4xl text-[#374e86] mb-1 italic",
                                        children: "+45%"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans-body text-xs text-[#374e86]/80 uppercase tracking-wider leading-tight font-semibold",
                                        children: "Citas calificadas primer mes."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Hero.jsx",
        lineNumber: 75,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "LlvoT6sr1mm7Jh1F4IWE7jt9Xqo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "LivingBlobs");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
const ServiceCard = ({ icon: Icon, title, description, tags, highlight, index })=>{
    // Formatear índice a dos dígitos
    const formattedIndex = index.toString().padStart(2, '0');
    return(// Tarjeta Base: Fondo blanco, borde sutil azul. Hover: Fondo Azul Profundo, sombra violeta.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative h-full bg-white border border-[#374e86]/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden hover:bg-[#374e86] hover:border-transparent transition-all duration-500 shadow-xl shadow-[#374e86]/5 hover:shadow-2xl hover:shadow-[#bcb5ff]/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#bcb5ff]/40 to-[#e7f1ad]/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-2xl bg-[#F8F9FF] text-[#374e86] group-hover:bg-[#bcb5ff] group-hover:text-white transition-colors duration-500 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 28,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-massive text-4xl text-[#95b2ed]/50 group-hover:text-[#e7f1ad] transition-colors duration-500",
                                children: formattedIndex
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif-display text-2xl mb-4 text-[#374e86] group-hover:text-white transition-colors duration-300 leading-snug",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans-body text-[#374e86]/70 group-hover:text-white/80 mb-8 text-base leading-relaxed transition-colors duration-300",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-8",
                        children: tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans-body text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#F8F9FF] text-[#374e86]/80 border border-[#374e86]/5 group-hover:bg-[#374e86]/50 group-hover:text-[#bcb5ff] group-hover:border-[#bcb5ff]/30 transition-all duration-300",
                                children: tag
                            }, i, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-6 border-t border-[#374e86]/10 group-hover:border-white/20 transition-colors duration-300 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-[#bcb5ff] group-hover:bg-[#e7f1ad] transition-colors duration-500"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans-body text-sm font-bold text-[#374e86] group-hover:text-white transition-colors duration-300",
                                children: highlight
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center bg-transparent group-hover:bg-[#bcb5ff] transition-all duration-500 group-hover:rotate-45",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "text-[#374e86] group-hover:text-white transition-colors duration-300",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
};
_c = ServiceCard;
const __TURBOPACK__default__export__ = ServiceCard;
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$src$2f$components$2f$ui$2f$ServiceCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/ui/ServiceCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Data de servicios - Mantenemos la misma estructura
const servicesData = [
    {
        id: "01",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
        title: "Publicidad de Respuesta Directa",
        description: "Campañas diseñadas para generar citas, no solo clics. Segmentación láser en pacientes de alto valor.",
        tags: [
            "Meta Ads",
            "Google Ads",
            "Retargeting"
        ],
        highlight: "Resultados Medibles"
    },
    {
        id: "02",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "Diseño Web y Landings Éticas",
        description: "Sitios que convierten visitantes en pacientes, respetando la ética médica y transmitiendo confianza profesional.",
        tags: [
            "UX Médico",
            "Conversión CRO",
            "Mobile First"
        ],
        highlight: "Confianza Digital"
    },
    {
        id: "03",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: "Estrategia de Captación Local",
        description: "Domina tu zona geográfica. Hacemos que tu clínica sea la opción #1 para pacientes cercanos.",
        tags: [
            "SEO Local",
            "Google Maps",
            "Geo-fencing"
        ],
        highlight: "Dominio Zonal"
    },
    {
        id: "04",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"],
        title: "Creación de Contenido Clínico",
        description: "Contenido educativo que posiciona tu autoridad sin ser 'vendedor'. Guiones, producción y edición.",
        tags: [
            "Video Marketing",
            "Guiones Médicos",
            "Reels/TikTok"
        ],
        highlight: "Autoridad Visual"
    },
    {
        id: "05",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        title: "Automatización de Citas",
        description: "Sistemas que nutren prospectos y confirman citas automáticamente, liberando a tu recepción.",
        tags: [
            "CRM Médico",
            "Email/SMS Flow",
            "Chatbots IA"
        ],
        highlight: "Eficiencia 24/7"
    },
    {
        id: "06",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        title: "Consultoría de Crecimiento",
        description: "Auditoría de tus procesos actuales y hoja de ruta clara para escalar tu facturación mes a mes.",
        tags: [
            "Auditoría",
            "Estrategia Trimestral",
            "KPIs Clínicos"
        ],
        highlight: "Visión Estratégica"
    }
];
const Services = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const yParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        30,
        -30
    ]);
    return(// Fondo y texto base actualizados a la nueva paleta
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative py-24 md:py-32 px-4 md:px-12 bg-[#F8F9FF] text-[#374e86] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #374e86 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-[#374e86]/10 pb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut"
                                },
                                className: "max-w-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[2px] w-10 bg-[#bcb5ff]"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                                lineNumber: 84,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-sans-body text-xs font-bold uppercase tracking-[0.25em] text-[#374e86]/70",
                                                children: "Soluciones Integrales"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif-display text-5xl md:text-7xl text-[#374e86] leading-[1.05] tracking-tight",
                                        children: [
                                            "Sistema Operativo ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                                lineNumber: 90,
                                                columnNumber: 47
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] via-[#95b2ed] to-[#374e86]",
                                                children: "para tu crecimiento."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                                lineNumber: 92,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                        lineNumber: 89,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: "easeOut"
                                },
                                className: "flex flex-col gap-4 text-right md:max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans-body text-lg font-medium text-[#374e86]/80 leading-relaxed",
                                    children: 'No vendemos "servicios sueltos". Implementamos el ecosistema digital exacto que tu clínica necesita para escalar de forma predecible.'
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            y: yParallax
                        },
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
                        children: servicesData.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 50
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-100px"
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: index * 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$src$2f$components$2f$ui$2f$ServiceCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...service,
                                    index: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Services.jsx",
        lineNumber: 70,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(Services, "Nga32FxHvVGmrpYRAh/a9Lk8V+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Metrics = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const yParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        50,
        -50
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full py-24 md:py-32 px-4 md:px-12 bg-[#F8F9FF] text-[#374e86] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: 'linear-gradient(#374e86 1px, transparent 1px), linear-gradient(90deg, #374e86 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-20 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-[#374e86]/10 pb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 60
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-[#e7f1ad] animate-pulse shadow-lg shadow-[#e7f1ad]/50"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 36,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-sans-body text-xs font-bold uppercase tracking-widest text-[#374e86]/60",
                                                children: "Data Auditada Q4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 37,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-massive font-semibold text-7xl md:text-9xl leading-[0.8] tracking-tighter text-[#374e86]",
                                        children: [
                                            "IMPACTO ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 40,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] to-[#374e86]/80",
                                                children: "CLÍNICO."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 42,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.4
                                },
                                className: "md:max-w-sm text-right md:text-left font-sans-body font-medium text-lg leading-relaxed text-[#374e86]/60",
                                children: 'Transformamos "likes" en pacientes reales. Métricas de crecimiento validadas en consultorios privados.'
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:h-[750px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6
                                },
                                className: "md:col-span-8 md:row-span-1 bg-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-[#374e86]/5 border border-[#374e86]/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-20 flex flex-col h-full justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-2 md:mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                            className: "w-4 h-4 text-[#bcb5ff]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                                            lineNumber: 72,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-sans-body text-[#374e86]/40 uppercase tracking-widest text-xs font-bold",
                                                                            children: "Retorno de Inversión"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                                            lineNumber: 73,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                                    lineNumber: 71,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-massive text-6xl md:text-8xl text-[#374e86] tracking-tighter",
                                                                    children: "4.8x"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                            lineNumber: 70,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-2 rounded-full bg-[#F8F9FF] border border-[#374e86]/10 text-[#374e86] font-bold text-xs md:text-sm font-sans-body",
                                                            children: "+12% vs Q3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                            lineNumber: 77,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 69,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "max-w-md text-[#374e86]/60 font-sans-body text-sm leading-relaxed relative z-30 pb-4 md:pb-0",
                                                    children: "Por cada dólar invertido en publicidad, nuestros doctores generan casi 5 dólares en consultas facturadas."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                            lineNumber: 68,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 h-[35%] md:h-[50%] z-10 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 100 40",
                                            className: "w-full h-full",
                                            preserveAspectRatio: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                    d: "M0 40 C 30 35, 40 20, 60 15 S 80 5, 100 2",
                                                    fill: "none",
                                                    stroke: "#bcb5ff",
                                                    strokeWidth: "0.5",
                                                    strokeOpacity: "0.3",
                                                    className: "blur-sm",
                                                    initial: {
                                                        pathLength: 0
                                                    },
                                                    whileInView: {
                                                        pathLength: 1
                                                    },
                                                    transition: {
                                                        duration: 1.5
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                    d: "M0 40 C 30 35, 40 20, 60 15 S 80 5, 100 2",
                                                    fill: "none",
                                                    stroke: "#bcb5ff",
                                                    strokeWidth: "1",
                                                    initial: {
                                                        pathLength: 0
                                                    },
                                                    whileInView: {
                                                        pathLength: 1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        ease: "easeInOut"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "chartGradient",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: "#bcb5ff",
                                                            stopOpacity: "0.2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                            lineNumber: 101,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: "#fff",
                                                            stopOpacity: "0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                            lineNumber: 102,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                    d: "M0 40 C 30 35, 40 20, 60 15 S 80 5, 100 2 L 100 40 Z",
                                                    fill: "url(#chartGradient)",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    whileInView: {
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        delay: 0.5,
                                                        duration: 1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                            lineNumber: 89,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    y: yParallax
                                },
                                className: "md:col-span-4 md:row-span-2 bg-[#374e86] rounded-[2.5rem] relative overflow-hidden group cursor-pointer shadow-2xl shadow-[#374e86]/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#bcb5ff] mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
                                        alt: "Producción Contenido",
                                        fill: true,
                                        className: "object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000",
                                        sizes: "(max-width: 768px) 100vw, 33vw"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 119,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-[#374e86]/90 via-[#374e86]/20 to-transparent z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 p-8 z-30 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center mb-6 group-hover:bg-[#bcb5ff] group-hover:text-[#374e86] transition-colors border border-white/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "fill-current text-white group-hover:text-[#374e86] ml-1",
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-massive text-4xl text-white mb-2 leading-[0.9]",
                                                children: [
                                                    "Estética ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 42
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Visual"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 133,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[1px] w-full bg-white/20 my-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/70 text-sm font-sans-body",
                                                children: "Elevamos la percepción de tu clínica con producción audiovisual de alta gama."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "md:col-span-4 md:row-span-1 bg-[#bcb5ff] rounded-[2.5rem] p-8 flex flex-col justify-between text-[#374e86] relative overflow-hidden group shadow-lg shadow-[#bcb5ff]/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -right-10 -top-10 w-40 h-40 bg-[#e7f1ad]/40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-white/30 backdrop-blur-sm rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-5 h-5 text-[#374e86]"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "text-[#374e86]/80"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-massive text-7xl tracking-tighter mb-0 text-[#374e86] group-hover:translate-x-2 transition-transform",
                                                children: "+85"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 160,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans-body text-sm font-bold text-[#374e86]/70 uppercase tracking-wide",
                                                children: "Pacientes nuevos / mes"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 163,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.3
                                },
                                className: "md:col-span-4 md:row-span-1 bg-white border border-[#374e86]/5 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#bcb5ff] transition-colors shadow-lg shadow-[#374e86]/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#F8F9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-32 h-32 mx-auto mb-4 flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-full h-full -rotate-90",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "64",
                                                                cy: "64",
                                                                r: "60",
                                                                stroke: "#374e86",
                                                                strokeWidth: "2",
                                                                strokeOpacity: "0.05",
                                                                fill: "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                                lineNumber: 180,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                                cx: "64",
                                                                cy: "64",
                                                                r: "60",
                                                                stroke: "#bcb5ff",
                                                                strokeWidth: "4",
                                                                fill: "none",
                                                                strokeDasharray: "377",
                                                                strokeDashoffset: "377",
                                                                strokeLinecap: "round",
                                                                whileInView: {
                                                                    strokeDashoffset: 377 - 377 * 0.92
                                                                },
                                                                viewport: {
                                                                    once: true
                                                                },
                                                                transition: {
                                                                    duration: 2,
                                                                    delay: 0.5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                                lineNumber: 181,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                        lineNumber: 179,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute font-massive text-4xl text-[#374e86]",
                                                        children: "92%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 178,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans-body font-bold text-lg text-[#374e86]",
                                                children: "Tasa de Asistencia"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                                lineNumber: 191,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                        lineNumber: 177,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Metrics.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Metrics, "Nga32FxHvVGmrpYRAh/a9Lk8V+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Metrics;
const __TURBOPACK__default__export__ = Metrics;
var _c;
__turbopack_context__.k.register(_c, "Metrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const steps = [
    {
        id: "01",
        menuTitle: "Auditoría",
        title: "Diagnóstico Profundo",
        desc: "Antes de cualquier receta, necesitamos una radiografía. Analizamos tu presencia digital actual para detectar fugas de presupuesto y oportunidades invisibles en tu zona.",
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "02",
        menuTitle: "Estrategia",
        title: "Arquitectura Visual",
        desc: "No es solo 'hacer anuncios'. Diseñamos el ecosistema completo: Landing pages éticas, segmentación de pacientes de alto valor y guiones que educan.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "03",
        menuTitle: "Lanzamiento",
        title: "Tracción Inmediata",
        desc: "Activamos los sistemas. Tus campañas empiezan a circular y los pacientes calificados agendan. Tu recepción recibe scripts para asegurar la asistencia.",
        img: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "04",
        menuTitle: "Optimización",
        title: "Ciencia de Datos",
        desc: "Ajustamos semanalmente el costo por adquisición. Escalamos lo que funciona y cortamos lo que no. Tu agenda pasa de ser impredecible a un sistema estable.",
        img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1920&auto=format&fit=crop"
    }
];
const Process = ()=>{
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[#FFFFFF] px-4 md:px-12 py-20 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 relative h-[500px] md:h-[550px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: 20
                            },
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut"
                            },
                            className: "w-full h-full flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-[280px] md:h-[320px] overflow-hidden rounded-2xl bg-[#F8F9FF] shadow-lg shadow-[#374e86]/5 mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: steps[activeStep].img,
                                        alt: steps[activeStep].title,
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 100vw, 600px"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                        lineNumber: 57,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-massive text-4xl text-[#bcb5ff]/50",
                                                    children: steps[activeStep].id
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif-display text-3xl text-[#374e86]",
                                                    children: steps[activeStep].title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans-body text-[#374e86]/70 leading-relaxed text-base max-w-lg",
                                            children: steps[activeStep].desc
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, activeStep, true, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                            lineNumber: 48,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 flex flex-col justify-center h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 md:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-2 block",
                                    children: "El Método"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-massive font-semibold text-5xl md:text-6xl leading-[0.9] text-[#374e86]",
                                    children: [
                                        "PROCESO ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                            lineNumber: 91,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " CLÍNICO."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group cursor-pointer relative pl-6 py-3",
                                    onMouseEnter: ()=>setActiveStep(index),
                                    onClick: ()=>setActiveStep(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: false,
                                            animate: {
                                                height: activeStep === index ? "100%" : "0%",
                                                opacity: activeStep === index ? 1 : 0
                                            },
                                            className: "absolute left-0 top-0 w-[2px] bg-[#bcb5ff]"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                            lineNumber: 104,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-0 bottom-0 w-[2px] bg-[#374e86]/5 -z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                            lineNumber: 113,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-massive text-4xl md:text-5xl transition-all duration-300 ${activeStep === index ? 'text-[#374e86] translate-x-2' // Activo: Azul sólido fuerte
                                                     : 'text-[#374e86]/25 group-hover:text-[#374e86]/50' // Inactivo: Azul sólido suave (sin borde)
                                                    }`,
                                                    children: step.menuTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                                    lineNumber: 117,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        opacity: activeStep === index ? 1 : 0,
                                                        x: activeStep === index ? 0 : -10
                                                    },
                                                    className: "text-[#95b2ed] text-sm font-bold tracking-widest hidden md:block",
                                                    children: [
                                                        "0",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
            lineNumber: 43,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Process.jsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Process, "cJXWosTT0XUh3gGn3cCcv/Y+Hws=");
_c = Process;
const __TURBOPACK__default__export__ = Process;
var _c;
__turbopack_context__.k.register(_c, "Process");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const projects = [
    {
        id: "01",
        client: "Luminous Smile",
        service: "Diseño de Sonrisa",
        stat: "+120 Carillas",
        year: "2026",
        img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2600&auto=format&fit=crop"
    },
    {
        id: "02",
        client: "DermaCenter",
        service: "Acné & Cicatrices",
        stat: "Agenda Llena (3mo)",
        year: "2025",
        img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "03",
        client: "Dra. Ana V.",
        service: "Ginecología Funcional",
        stat: "300% ROI",
        year: "2025",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "04",
        client: "Clínica Vital",
        service: "Traumatología",
        stat: "+45 Cirugías",
        year: "2025",
        img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2000&auto=format&fit=crop"
    }
];
const SelectedCases = ()=>{
    _s();
    const [activeProject, setActiveProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Coordenadas del mouse
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    // Física del resorte (Spring)
    const springConfig = {
        damping: 20,
        stiffness: 300
    };
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, springConfig);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, springConfig);
    const handleMouseMove = (e)=>{
        mouseX.set(e.clientX - 200);
        mouseY.set(e.clientY - 150);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        onMouseMove: handleMouseMove,
        // CAMBIO: Fondo #F8F9FF
        className: "relative bg-[#F8F9FF] py-24 md:py-32 px-4 md:px-12 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 pb-8 border-b border-[#374e86]/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-massive font-semibold text-5xl md:text-8xl leading-[0.9] text-[#374e86]",
                                children: [
                                    "CASOS ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                        lineNumber: 71,
                                        columnNumber: 31
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#bcb5ff]",
                                        children: "SELECTOS."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right hidden md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans-body text-sm font-bold uppercase tracking-widest text-[#374e86]/40 mb-1",
                                        children: "Portafolio 2025-2026"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-serif-display text-xl text-[#374e86]",
                                        children: "Resultados reales, no vanidad."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectRow, {
                                project: project,
                                index: index,
                                setActiveProject: setActiveProject
                            }, index, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: activeProject !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.5
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.5
                    },
                    transition: {
                        duration: 0.2
                    },
                    style: {
                        x,
                        y
                    },
                    className: "fixed top-0 left-0 w-[400px] h-[300px] rounded-2xl overflow-hidden pointer-events-none z-50 hidden lg:block shadow-2xl shadow-[#374e86]/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 1.2,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 1.2,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "relative w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: projects[activeProject].img,
                                alt: "Project Preview",
                                fill: true,
                                className: "object-cover",
                                sizes: "400px"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 118,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, projects[activeProject].id, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                            lineNumber: 110,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[#374e86]/20 mix-blend-multiply"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                            lineNumber: 128,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-[#e7f1ad] animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold uppercase tracking-widest text-[#374e86]",
                                    children: projects[activeProject].stat
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                            lineNumber: 130,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                    lineNumber: 102,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                lineNumber: 100,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelectedCases, "55KCp59gOVZ5BCuJlzx8GlvNETs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = SelectedCases;
// COMPONENTE DE FILA
const ProjectRow = ({ project, index, setActiveProject })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: index * 0.1
        },
        // CAMBIO: Hover Border Violeta (#bcb5ff)
        className: "group relative border-b border-[#374e86]/10 py-8 md:py-12 cursor-pointer transition-colors duration-300 hover:border-[#bcb5ff]",
        onMouseEnter: ()=>setActiveProject(index),
        onMouseLeave: ()=>setActiveProject(null),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-baseline justify-between gap-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-2 block md:hidden",
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-massive text-3xl md:text-5xl text-[#374e86] group-hover:text-[#bcb5ff] transition-colors duration-300",
                                children: project.client
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block md:w-1/3 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans-body text-lg text-[#374e86]/60 group-hover:text-[#374e86] transition-colors",
                            children: project.service
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                            lineNumber: 172,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/3 flex justify-between md:justify-end items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans-body text-[#374e86]/40 text-sm",
                                children: project.year
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full border border-[#374e86]/10 flex items-center justify-center group-hover:bg-[#bcb5ff] group-hover:border-[#bcb5ff] transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "w-5 h-5 text-[#374e86] group-hover:text-white transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                    lineNumber: 182,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                                lineNumber: 181,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                lineNumber: 157,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#F0F4FF] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out -z-0"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
                lineNumber: 189,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/SelectedCases.jsx",
        lineNumber: 148,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ProjectRow;
const __TURBOPACK__default__export__ = SelectedCases;
var _c, _c1;
__turbopack_context__.k.register(_c, "SelectedCases");
__turbopack_context__.k.register(_c1, "ProjectRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const testimonials = [
    {
        id: 1,
        name: "Dra. Sofía M.",
        role: "Dermatóloga",
        clinic: "Skin & Care",
        quote: "Dejamos de depender de referidos. En 3 meses, mi agenda de procedimientos láser se llenó completamente con pacientes de Instagram.",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Dr. Carlos R.",
        role: "Cirujano Plástico",
        clinic: "Aesthetic Center",
        quote: "No entendía nada de marketing hasta que conocí a Mada. Su equipo no solo trae leads, trae pacientes educados listos para operarse.",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Dra. Elena V.",
        role: "Odontóloga",
        clinic: "Luminous Smile",
        quote: "La inversión se pagó sola en la primera semana. La calidad de producción de los videos elevó totalmente la percepción de mi clínica.",
        img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Dr. Manuel G.",
        role: "Traumatólogo",
        clinic: "OrtoSports",
        quote: "Profesionalismo puro. No me hacen perder el tiempo con métricas vanidosas, vamos directo a consultas agendadas.",
        img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop"
    }
];
const Testimonials = ()=>{
    return(// CAMBIO: Fondo #F8F9FF y borde azul suave
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[#F8F9FF] py-24 md:py-32 overflow-hidden border-t border-[#374e86]/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6 mb-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-4 block",
                        children: "Voces de Autoridad"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-massive font-semibold text-5xl md:text-7xl text-[#374e86] leading-[0.95]",
                        children: [
                            "DOCTORES QUE ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                                lineNumber: 55,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#bcb5ff]",
                                children: "CONFÍAN."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full flex overflow-hidden mask-gradient-horizontal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F8F9FF] to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F8F9FF] to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-8 animate-infinite-scroll hover:pause-animation pl-8",
                        children: [
                            ...testimonials,
                            ...testimonials,
                            ...testimonials
                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                item: item
                            }, `${item.id}-${index}`, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-100% / 3)); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 20s linear infinite;
                    width: max-content; 
                }
                .hover\\:pause-animation:hover {
                    animation-play-state: paused;
                }
                .mask-gradient-horizontal {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
};
_c = Testimonials;
const TestimonialCard = ({ item })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            y: -5,
            scale: 1.02
        },
        // CAMBIO: Borde azul suave, sombra violeta al hover
        className: "relative w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-3xl p-8 md:p-10 border border-[#374e86]/5 shadow-xl shadow-[#374e86]/5 flex flex-col justify-between group cursor-default transition-all duration-300 hover:border-[#bcb5ff]/50 hover:shadow-[#bcb5ff]/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                className: "absolute top-8 right-8 text-[#374e86]/5 w-12 h-12 rotate-180"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 mb-6",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((star)=>// CAMBIO: Estrellas en Lima (#e7f1ad) para que resalten vibrantes
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: "w-4 h-4 text-[#e7f1ad] fill-current"
                    }, star, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 110,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                lineNumber: 107,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-serif-display text-xl md:text-2xl text-[#374e86] leading-relaxed mb-8 relative z-10",
                children: [
                    '"',
                    item.quote,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                lineNumber: 115,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-12 h-12 rounded-full overflow-hidden border border-[#374e86]/10 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.img,
                            alt: item.name,
                            fill: true,
                            className: "object-cover",
                            sizes: "50px"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold font-sans-body text-[#374e86] text-sm",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                                lineNumber: 130,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-sans-body text-[#374e86]/50 uppercase tracking-wide font-medium",
                                children: [
                                    item.role,
                                    " · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#bcb5ff] font-bold",
                                        children: item.clinic
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                                        lineNumber: 133,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                                lineNumber: 132,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
                lineNumber: 119,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/Testimonials.jsx",
        lineNumber: 100,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = TestimonialCard;
const __TURBOPACK__default__export__ = Testimonials;
var _c, _c1;
__turbopack_context__.k.register(_c, "Testimonials");
__turbopack_context__.k.register(_c1, "TestimonialCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const faqs = [
    {
        question: "¿Trabajan con cualquier especialidad médica?",
        answer: "Nos enfocamos en especialidades de alto valor (Cirugía Plástica, Dermatología, Odontología, Traumatología, Ginecología, etc.). Si tu consulta depende de pacientes privados que valoran la calidad, somos para ti."
    },
    {
        question: "¿En cuánto tiempo veré resultados?",
        answer: "Nuestro sistema está diseñado para generar tracción desde el primer mes (Lanzamiento). Sin embargo, la optimización de costos y la estabilidad total de la agenda se consolida típicamente en el mes 2 y 3."
    },
    {
        question: "¿Tengo que grabar videos bailando en TikTok?",
        answer: "Absolutamente no. Tu autoridad médica es lo primero. Diseñamos contenido educativo y profesional que eleva tu reputación, sin tendencias ridículas que dañen tu imagen."
    },
    {
        question: "¿Qué incluye el servicio mensual?",
        answer: "Todo lo necesario para crecer: Gestión de campañas (Meta/Google Ads), diseño de Landing Pages, guiones de venta para tu recepción, edición de video profesional y reportes de ROI auditables."
    },
    {
        question: "¿Hay plazos forzosos?",
        answer: "Trabajamos con un esquema de partnership de 3 meses iniciales para garantizar la maduración de las campañas. Después, es mensual. Queremos que te quedes por los resultados, no por un contrato."
    }
];
const FAQ = ()=>{
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(// CAMBIO: Fondo claro #F8F9FF y borde azul
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[#F8F9FF] py-24 md:py-32 px-6 md:px-12 border-t border-[#374e86]/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-4 block",
                                children: "Dudas Comunes"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-massive font-semibold text-5xl md:text-6xl text-[#374e86] leading-[0.95] mb-6",
                                children: [
                                    "PREGUNTAS ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                                        lineNumber: 49,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#bcb5ff]",
                                        children: "FRECUENTES."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans-body text-[#374e86]/60 text-lg leading-relaxed max-w-sm",
                                children: "Resolvemos las inquietudes principales antes de nuestra primera llamada. Transparencia total."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-8 flex flex-col",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                            faq: faq,
                            isOpen: activeIndex === index,
                            onClick: ()=>toggleFAQ(index)
                        }, index, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
            lineNumber: 39,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(FAQ, "E8kOn+IkK/htiBGEqJWkEvOqULU=");
_c = FAQ;
const AccordionItem = ({ faq, isOpen, onClick })=>{
    return(// CAMBIO: Borde inferior azul suave
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "border-b border-[#374e86]/10 py-8 cursor-pointer group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `font-serif-display text-2xl md:text-3xl transition-colors duration-300 ${isOpen ? 'text-[#bcb5ff]' : 'text-[#374e86] group-hover:text-[#374e86]/70'}`,
                        children: faq.question
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-[#bcb5ff] bg-[#bcb5ff] text-white' : 'border-[#374e86]/20 text-[#374e86]'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: isOpen ? 180 : 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                                lineNumber: 95,
                                columnNumber: 35
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                                lineNumber: 95,
                                columnNumber: 57
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                lineNumber: 83,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Escritorio$2f$Proyectos__ReactJS__$2d$__NextJS$2f$mkt$2d$mada$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-6 pb-2 font-sans-body text-lg text-[#374e86]/70 leading-relaxed max-w-2xl",
                        children: faq.answer
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                        lineNumber: 109,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                    lineNumber: 102,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
                lineNumber: 100,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Escritorio/Proyectos ReactJS - NextJS/mkt-mada/src/components/sections/FAQ.jsx",
        lineNumber: 79,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
};
_c1 = AccordionItem;
const __TURBOPACK__default__export__ = FAQ;
var _c, _c1;
__turbopack_context__.k.register(_c, "FAQ");
__turbopack_context__.k.register(_c1, "AccordionItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Escritorio_Proyectos%20ReactJS%20-%20NextJS_mkt-mada_src_components_1d44002d._.js.map