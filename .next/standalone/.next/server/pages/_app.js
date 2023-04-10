(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1254:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__moIix"
};


/***/ }),

/***/ 1075:
/***/ ((module) => {

// Exports
module.exports = {
	"drawer": "sidebar_drawer__ERCJO",
	"list_item": "sidebar_list_item__hOo__",
	"link": "sidebar_link__71Qog"
};


/***/ }),

/***/ 1513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4529);

const useLoginModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__/* .create */ .Ue)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoginModal);


/***/ }),

/***/ 1453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var _app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4825);
var _app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./src/features/collapseSlice.ts

const initialState = {
    open: false
};
const collapseSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        open: (state)=>{
            state.open = !state.open;
        }
    }
});
const { open: collapseSlice_open  } = collapseSlice.actions;
/* harmony default export */ const features_collapseSlice = (collapseSlice.reducer);

;// CONCATENATED MODULE: ./src/store.ts




// import todosReducer from './todosSlice';
const rootReducer = (0,toolkit_namespaceObject.combineReducers)({
    collapse: features_collapseSlice
});
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            thunk: true,
            immutableCheck: true,
            serializableCheck: true
        })
});
const useAppDispatch = ()=>useDispatch();

// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(9734);
;// CONCATENATED MODULE: ./src/lib/fetchJson.ts
class FetchError extends Error {
    constructor({ message , response , data  }){
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(message);
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, FetchError);
        }
        this.name = "FetchError";
        this.response = response;
        this.data = data ?? {
            message: message
        };
    }
}
async function fetchJson(input, init) {
    const response = await fetch(input, init);
    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const data = await response.json();
    console.log(data);
    // response.ok is true when res.status is 2xx
    // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
    if (response.ok) {
        return data;
    }
    throw new FetchError({
        message: response.statusText,
        response,
        data
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Language"
const Language_namespaceObject = require("@mui/icons-material/Language");
var Language_default = /*#__PURE__*/__webpack_require__.n(Language_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
// EXTERNAL MODULE: ./src/components/header.module.scss
var header_module = __webpack_require__(1254);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/components/Header.tsx










// import {useTranslations} from 'next-intl';




const Header = ()=>{
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    // const t = useTranslations('Header');
    const settings = [
        {
            key: "zh",
            label: "中文"
        },
        {
            key: "en",
            label: "英文"
        }
    ];
    const [anchorElUser, setAnchorElUser] = external_react_.useState(null);
    const handleCloseUserMenu = (event, key)=>{
        setAnchorElUser(null);
        console.log(key);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleDrawerOpen = ()=>{
        dispatch(collapseSlice_open());
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        className: (header_module_default()).header,
        sx: {
            zIndex: (theme)=>theme.zIndex.drawer + 1
        },
        position: "fixed",
        color: "inherit",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    component: "a",
                    href: "/chat",
                    "aria-label": "AI智能生活工具",
                    sx: {
                        mr: 2,
                        display: {
                            xs: "flex",
                            md: "flex"
                        },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "red",
                        textDecoration: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "img",
                        alt: "logo",
                        src: "/images/logo.png",
                        sx: {
                            width: {
                                xs: 36,
                                md: 44
                            },
                            height: {
                                xs: 36,
                                md: 44
                            },
                            borderRadius: "50%"
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        flexGrow: 1
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: {
                            xs: "flex",
                            md: "flex"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "large",
                            onClick: handleOpenUserMenu,
                            "aria-label": "切换语言",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Language_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            sx: {
                                mt: "45px"
                            },
                            id: "menu-appbar",
                            anchorEl: anchorElUser,
                            anchorOrigin: {
                                vertical: "top",
                                horizontal: "right"
                            },
                            keepMounted: true,
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "right"
                            },
                            open: Boolean(anchorElUser),
                            onClose: handleCloseUserMenu,
                            children: settings.map((setting)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    onClick: (event)=>handleCloseUserMenu(event, setting.key),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        textAlign: "center",
                                        children: setting.label
                                    })
                                }, setting.key))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        display: {
                            xs: "block",
                            sm: "none"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        color: "inherit",
                        "aria-label": "open drawer",
                        onClick: handleDrawerOpen,
                        edge: "start",
                        sx: {
                            ...{
                                display: "flex"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/SwipeableDrawer"
const SwipeableDrawer_namespaceObject = require("@mui/material/SwipeableDrawer");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ChatBubbleOutline"
const ChatBubbleOutline_namespaceObject = require("@mui/icons-material/ChatBubbleOutline");
var ChatBubbleOutline_default = /*#__PURE__*/__webpack_require__.n(ChatBubbleOutline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Link"
const Link_namespaceObject = require("@mui/material/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
// EXTERNAL MODULE: ./src/components/sidebar.module.scss
var sidebar_module = __webpack_require__(1075);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
;// CONCATENATED MODULE: ./src/components/Sidebar.tsx
















// import {useTranslations} from 'next-intl';

const drawerWidth = 240;
const DrawerComponent = ()=>{
    // const t = useTranslations('Header');
    const settings = [
        {
            key: "zh",
            label: ""
        },
        {
            key: "hk",
            label: ""
        }
    ];
    const openstatus = (0,external_react_redux_namespaceObject.useSelector)((state)=>state.collapse.open);
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const list = [
        {
            path: "/chat",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((ChatBubbleOutline_default()), {}),
            title: "Q&A"
        }
    ];
    const [anchorElUser, setAnchorElUser] = external_react_.useState(null);
    const handleCloseUserMenu = (event, key)=>{
        setAnchorElUser(null);
        console.log(key);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const toggleDrawer = ()=>{
        dispatch(collapseSlice_open());
    };
    const BoxList = ()=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                overflow: "auto"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                children: list.map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                        className: (sidebar_module_default()).list_item,
                        disablePadding: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: text.path,
                            underline: "none",
                            className: (sidebar_module_default()).link,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                selected: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                        children: text.icon
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        className: (sidebar_module_default()).item_text,
                                        primary: text.title
                                    })
                                ]
                            })
                        })
                    }, text.title))
            })
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
        theme: (0,styles_namespaceObject.createTheme)({
            components: {
                MuiListItemButton: {
                    defaultProps: {
                        disableTouchRipple: true
                    }
                }
            },
            palette: {
                mode: "dark",
                primary: {
                    main: "rgb(102, 157, 246)"
                },
                background: {
                    paper: "rgb(5, 30, 52)"
                }
            }
        }),
        children: [
            openstatus,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((SwipeableDrawer_default()), {
                sx: {
                    display: {
                        xs: "block",
                        sm: "none"
                    }
                },
                anchor: "left",
                open: openstatus,
                onClose: ()=>toggleDrawer(),
                onOpen: ()=>toggleDrawer(),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {}),
                    BoxList()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                className: (sidebar_module_default()).drawer,
                sx: {
                    width: drawerWidth,
                    display: {
                        xs: "none",
                        sm: "block"
                    },
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                },
                variant: "persistent",
                open: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {}),
                    BoxList()
                ]
            })
        ]
    });
};
/* harmony default export */ const Sidebar = (DrawerComponent);

;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var react_hot_toast_dist = __webpack_require__(6501);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TextField"
const TextField_namespaceObject = require("@mui/material/TextField");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Dialog"
const Dialog_namespaceObject = require("@mui/material/Dialog");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogActions"
const DialogActions_namespaceObject = require("@mui/material/DialogActions");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogContent"
const DialogContent_namespaceObject = require("@mui/material/DialogContent");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogContentText"
const DialogContentText_namespaceObject = require("@mui/material/DialogContentText");
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogTitle"
const DialogTitle_namespaceObject = require("@mui/material/DialogTitle");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tab"
const Tab_namespaceObject = require("@mui/material/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tabs"
const Tabs_namespaceObject = require("@mui/material/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7536);
// EXTERNAL MODULE: ./src/hooks/useLoginModal.tsx
var useLoginModal = __webpack_require__(1513);
;// CONCATENATED MODULE: ./src/components/modals/LoginModal.tsx
"use client";


















const LoginModal = ()=>{
    const loginModal = (0,useLoginModal/* default */.Z)();
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [value, setValue] = (0,external_react_.useState)(1);
    const { register , handleSubmit , formState: { errors  }  } = (0,index_esm/* useForm */.cI)({
        defaultValues: {
            open_id: ""
        }
    });
    const onSubmit = async (data)=>{
        console.log(data);
        setIsLoading(true);
        const res = await fetchJson("/api/web/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: data.open_id
            })
        });
        if (res.token) {
            react_hot_toast_dist/* toast.success */.Am.success("登录成功！");
        }
        setIsLoading(false);
    };
    const ColorButton = (0,styles_namespaceObject.styled)((Button_default()))(({ theme  })=>({
            color: "#fff",
            backgroundColor: "#33cbb7",
            "&:hover": {
                backgroundColor: "#00bfa5"
            }
        }));
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    function TabPanel(props) {
        const { children , value , index , sx , ...other } = props;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            role: "tabpanel",
            hidden: value !== index,
            id: `simple-tabpanel-${index}`,
            "aria-labelledby": `simple-tab-${index}`,
            ...other,
            children: value === index && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: sx || {
                    p: 3
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    children: children
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        open: loginModal.isOpen,
        onClose: loginModal.onClose,
        sx: {
            minWidth: 400
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                sx: {
                    textAlign: "center",
                    fontSize: "24px",
                    color: "#484848",
                    p: {
                        xs: 2,
                        md: 3
                    }
                },
                children: "登录"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                sx: {
                    padding: {
                        xs: 2,
                        md: 3
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            borderBottom: 1,
                            borderColor: "divider",
                            minWidth: 400
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                            onChange: handleChange,
                            value: value,
                            "aria-label": "lab API tabs example",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                    label: "用户ID登录",
                                    value: 1
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                    label: "小程序扫描",
                                    value: 2
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                        value: value,
                        index: 1,
                        sx: {
                            padding: "24px 0"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                ...register("open_id", {
                                    required: "用户ID不能为空！"
                                }),
                                name: "open_id",
                                sx: {
                                    width: "415px"
                                },
                                required: true,
                                id: "open_id",
                                label: "用户ID",
                                variant: "outlined"
                            }),
                            errors["open_id"] ? /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    color: "red"
                                },
                                children: "不能为空！"
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                        value: value,
                        index: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                                sx: {
                                    textAlign: "center"
                                },
                                children: "使用微信扫描小程序，请在小程序用户信息页面获取用户ID"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                component: "img",
                                alt: "小程序",
                                src: "/images/wechat.jpg",
                                sx: {
                                    margin: "0 auto",
                                    display: "block",
                                    width: {
                                        xs: 100,
                                        md: 160
                                    },
                                    height: {
                                        xs: 100,
                                        md: 160
                                    },
                                    borderRadius: "50%"
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                sx: {
                    justifyContent: "center",
                    p: {
                        xs: 2,
                        md: 3
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ColorButton, {
                    sx: {
                        width: "100%",
                        height: "46px"
                    },
                    variant: "contained",
                    disabled: isLoading,
                    type: "submit",
                    onClick: handleSubmit(onSubmit),
                    children: "提交"
                })
            })
        ]
    });
};
/* harmony default export */ const modals_LoginModal = (LoginModal);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.tsx














const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* SWRConfig */.J$, {
        value: {
            fetcher: fetchJson,
            onError: (err)=>{
                console.error(err);
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_intl_.NextIntlProvider, {
            messages: pageProps.messages,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_namespaceObject.Provider, {
                store: store,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            height: "100%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                component: "main",
                                sx: {
                                    flexGrow: 1,
                                    p: {
                                        xs: 0,
                                        sm: 0
                                    },
                                    pt: 0,
                                    height: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                                        disableGutters: true,
                                        maxWidth: false,
                                        className: "container",
                                        sx: {
                                            height: "calc(100% - 64px)"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                            className: (_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                                            ...pageProps
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(modals_LoginModal, {})
                ]
            })
        })
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 192:
/***/ ((module) => {

"use strict";
module.exports = require("use-sync-external-store/shim/index.js");

/***/ }),

/***/ 5224:
/***/ ((module) => {

"use strict";
module.exports = require("use-sync-external-store/shim/with-selector.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [853,198], () => (__webpack_exec__(1453)));
module.exports = __webpack_exports__;

})();