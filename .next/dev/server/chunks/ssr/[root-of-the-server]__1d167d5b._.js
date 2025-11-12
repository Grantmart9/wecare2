module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/themeprovider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAppTheme",
    ()=>createAppTheme,
    "darkTheme",
    ()=>darkTheme,
    "default",
    ()=>__TURBOPACK__default__export__,
    "lightTheme",
    ()=>lightTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
"use client";
;
// Theme configurations
const lightTheme = {
    palette: {
        mode: 'light',
        primary: {
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#1d4ed8',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#8b5cf6',
            light: '#a78bfa',
            dark: '#7c3aed',
            contrastText: '#ffffff'
        },
        background: {
            default: '#f9fafb',
            paper: '#ffffff',
            secondary: '#f3f4f6'
        },
        text: {
            primary: '#1f2937',
            secondary: '#6b7280',
            disabled: '#9ca3af'
        },
        divider: '#e5e7eb',
        border: '#d1d5db',
        action: {
            hover: '#f3f4f6',
            selected: '#dbeafe',
            disabled: '#9ca3af'
        }
    }
};
const darkTheme = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#1d4ed8',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#8b5cf6',
            light: '#a78bfa',
            dark: '#7c3aed',
            contrastText: '#ffffff'
        },
        background: {
            default: '#111827',
            paper: '#1f2937',
            secondary: '#374151'
        },
        text: {
            primary: '#f9fafb',
            secondary: '#d1d5db',
            disabled: '#6b7280'
        },
        divider: '#374151',
        border: '#4b5563',
        action: {
            hover: '#374151',
            selected: '#1e3a8a',
            disabled: '#6b7280'
        }
    }
};
// Function to create theme based on mode
const createAppTheme = (mode = 'light')=>{
    const baseConfig = mode === 'dark' ? darkTheme : lightTheme;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        ...baseConfig,
        components: {
            MuiSelect: {
                styleOverrides: {
                    root: {
                        borderRadius: 100,
                        marginBottom: 20
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 9999,
                        textTransform: 'none'
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 12
                        }
                    }
                }
            }
        },
        typography: {
            fontFamily: "inherit"
        },
        shape: {
            borderRadius: 12
        }
    });
};
;
const __TURBOPACK__default__export__ = createAppTheme;
}),
"[project]/src/app/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$themeprovider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/themeprovider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Create theme context
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
// Theme provider component
const AppThemeProvider = ({ children })=>{
    const [themeMode, setThemeMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$themeprovider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAppTheme"])('light'));
    // Load theme preference from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem('themeMode');
        let initialTheme = 'light';
        if (savedTheme && [
            'light',
            'dark',
            'system'
        ].includes(savedTheme)) {
            initialTheme = savedTheme;
        } else {
            // Check system preference
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            initialTheme = systemPrefersDark ? 'dark' : 'light';
        }
        setThemeMode(initialTheme);
        setCurrentTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$themeprovider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAppTheme"])(initialTheme === 'system' ? 'light' : initialTheme));
        // Apply theme to document
        applyThemeToDocument(initialTheme === 'system' ? 'light' : initialTheme);
    }, []);
    // Listen for system theme changes when mode is 'system'
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (themeMode === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (e)=>{
                const newTheme = e.matches ? 'dark' : 'light';
                setCurrentTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$themeprovider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAppTheme"])(newTheme));
                applyThemeToDocument(newTheme);
            };
            mediaQuery.addEventListener('change', handleChange);
            return ()=>mediaQuery.removeEventListener('change', handleChange);
        }
    }, [
        themeMode
    ]);
    // Function to apply theme to document
    const applyThemeToDocument = (mode)=>{
        const root = document.documentElement;
        const body = document.body;
        if (mode === 'dark') {
            root.classList.add('dark');
            body.classList.add('dark');
            body.className = 'dark';
            body.style.color = '#f9fafb'; // gray-50
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
            body.className = '';
            body.style.color = '#1f2937'; // gray-800
        }
    };
    // Handle theme mode changes
    const handleThemeChange = (newMode)=>{
        setThemeMode(newMode);
        let actualTheme;
        if (newMode === 'system') {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            actualTheme = systemPrefersDark ? 'dark' : 'light';
        } else {
            actualTheme = newMode;
        }
        const newTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$themeprovider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAppTheme"])(actualTheme);
        setCurrentTheme(newTheme);
        applyThemeToDocument(actualTheme);
        // Save to localStorage
        localStorage.setItem('themeMode', newMode);
    };
    const value = {
        themeMode,
        setThemeMode: handleThemeChange,
        theme: currentTheme
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: currentTheme,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppThemeProvider, {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d167d5b._.js.map