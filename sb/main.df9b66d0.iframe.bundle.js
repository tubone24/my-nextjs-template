(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{561:function(module,exports,__webpack_require__){__webpack_require__(562),__webpack_require__(717),__webpack_require__(718),__webpack_require__(950),__webpack_require__(951),__webpack_require__(956),__webpack_require__(957),__webpack_require__(955),__webpack_require__(952),__webpack_require__(958),__webpack_require__(953),__webpack_require__(954),__webpack_require__(959),module.exports=__webpack_require__(930)},628:function(module,exports){},718:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(374)},930:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(374).configure)([__webpack_require__(931),__webpack_require__(932)],module,!1)}).call(this,__webpack_require__(176)(module))},931:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=931},932:function(module,exports,__webpack_require__){var map={"./components/footer.stories.tsx":960,"./components/gridList.stories.tsx":961};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=932},959:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"globalTypes",(function(){return globalTypes})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(28),__webpack_require__(7),__webpack_require__(58),__webpack_require__(458),__webpack_require__(917),__webpack_require__(54),__webpack_require__(918),__webpack_require__(919),__webpack_require__(457);var client_api=__webpack_require__(967),esm=__webpack_require__(6),chakra_ui_color_mode_esm=__webpack_require__(183),chakra_ui_layout_esm=__webpack_require__(468),chakra_ui_button_esm=__webpack_require__(469),chakra_ui_react_esm=__webpack_require__(184),react=__webpack_require__(0),index_esm=__webpack_require__(154),dist_esm=__webpack_require__(504),jsx_runtime=__webpack_require__(9),globalTypes=(react.createElement,{direction:{name:"Direction",description:"Direction for layout",defaultValue:"LTR",toolbar:{icon:"globe",items:["LTR","RTL"]}}}),preview_ColorModeToggleBar=function ColorModeToggleBar(){var toggleColorMode=Object(chakra_ui_color_mode_esm.b)().toggleColorMode,SwitchIcon=Object(chakra_ui_color_mode_esm.c)(index_esm.b,index_esm.c),nextMode=Object(chakra_ui_color_mode_esm.c)("dark","light");return Object(jsx_runtime.jsx)(chakra_ui_layout_esm.c,{justify:"flex-end",mb:4,children:Object(jsx_runtime.jsx)(chakra_ui_button_esm.a,{size:"md",fontSize:"lg","aria-label":"Switch to "+nextMode+" mode",variant:"ghost",color:"current",marginLeft:"2",onClick:toggleColorMode,icon:Object(jsx_runtime.jsx)(SwitchIcon,{})})})};preview_ColorModeToggleBar.displayName="ColorModeToggleBar";var preview_withChakra=function withChakra(StoryFn,context){var dir=context.globals.direction.toLowerCase();return Object(jsx_runtime.jsx)(chakra_ui_react_esm.a,{theme:Object(chakra_ui_react_esm.b)({direction:dir}),children:Object(jsx_runtime.jsxs)("div",{dir:dir,id:"story-wrapper",style:{minHeight:"100vh"},children:[Object(jsx_runtime.jsx)(preview_ColorModeToggleBar,{}),Object(jsx_runtime.jsx)(StoryFn,{})]})})};preview_withChakra.displayName="withChakra";var decorators=[preview_withChakra,dist_esm.withPerformance];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},960:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return footer_stories_Template}));__webpack_require__(18);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),chakra_ui_system_esm=__webpack_require__(4),chakra_ui_color_mode_esm=__webpack_require__(183),chakra_ui_visually_hidden_esm=__webpack_require__(236),chakra_ui_layout_esm=__webpack_require__(468),index_esm=__webpack_require__(154),axios=__webpack_require__(507),axios_default=__webpack_require__.n(axios),jsx_runtime=__webpack_require__(9),footer_SocialButton=(react_default.a.createElement,function SocialButton(_ref){var children=_ref.children,label=_ref.label,href=_ref.href;return Object(jsx_runtime.jsxs)(chakra_ui_system_esm.d.button,{bg:Object(chakra_ui_color_mode_esm.c)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:href,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:Object(chakra_ui_color_mode_esm.c)("blackAlpha.200","whiteAlpha.200")},children:[Object(jsx_runtime.jsx)(chakra_ui_visually_hidden_esm.a,{children:label}),children]})});function SmallWithSocial(){var _useState=Object(react.useState)(""),lastSync=_useState[0],setLastSync=_useState[1];return Object(react.useEffect)((function(){!function getLastSync(){axios_default.a.get("/api/hello").then((function(resp){setLastSync(resp.data.year)}))}()}),[]),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{bg:Object(chakra_ui_color_mode_esm.c)("gray.50","gray.900"),color:Object(chakra_ui_color_mode_esm.c)("gray.700","gray.200"),children:Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.b,{as:chakra_ui_layout_esm.g,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.h,{children:["© ",lastSync," tubone24. All rights reserved"]}),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.g,{direction:"row",spacing:6,children:[Object(jsx_runtime.jsx)(footer_SocialButton,{label:"Twitter",href:"https://twitter.com/meitante1conan",children:Object(jsx_runtime.jsx)(index_esm.d,{})}),Object(jsx_runtime.jsx)(footer_SocialButton,{label:"GitHub",href:"https://github.com/tubone24",children:Object(jsx_runtime.jsx)(index_esm.a,{})})]})]})})}footer_SocialButton.displayName="SocialButton",SmallWithSocial.displayName="SmallWithSocial";react_default.a.createElement,__webpack_exports__.default={title:"components/Footer",component:SmallWithSocial};var footer_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(SmallWithSocial,{})};footer_stories_Template.displayName="Template",footer_stories_Template.parameters=Object.assign({storySource:{source:"(args) => <Footer />"}},footer_stories_Template.parameters)},961:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return gridList_stories_Template}));__webpack_require__(18);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),chakra_ui_layout_esm=__webpack_require__(468),chakra_ui_icon_esm=__webpack_require__(12),chakra_ui_icons_esm=__webpack_require__(135),jsx_runtime=__webpack_require__(9);react_default.a.createElement;function GridListWithHeading(){return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.a,{p:4,children:[Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.g,{spacing:4,as:chakra_ui_layout_esm.b,maxW:"3xl",textAlign:"center",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.e,{fontSize:"3xl",children:"Feature"}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{color:"gray.600",fontSize:"xl",children:"This template contains a lot of modern features."})]}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.b,{maxW:"6xl",mt:10,children:Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.f,{columns:{base:1,md:2,lg:4},spacing:10,children:[Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.d,{align:"top",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:chakra_ui_icons_esm.a})}),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.i,{align:"start",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{fontWeight:600,children:"Next.js"}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{color:"gray.600",children:"We use Next.js, so we are familiar with SPA, SSG, and API development."})]})]},1),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.d,{align:"top",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:chakra_ui_icons_esm.a})}),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.i,{align:"start",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{fontWeight:600,children:"Chakra UI"}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{color:"gray.600",children:"By using Chakra UI, you can easily achieve CSS in JS while achieving Utility First."})]})]},2),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.d,{align:"top",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:chakra_ui_icons_esm.a})}),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.i,{align:"start",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{fontWeight:600,children:"TypeScript"}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{color:"gray.600",children:"I've heard from my grandpa that if you don't use TypeScript, you'll get very angry."})]})]},3),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.d,{align:"top",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:chakra_ui_icons_esm.a})}),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.i,{align:"start",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{fontWeight:600,children:"Jest(UI SnapShot)"}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{color:"gray.600",children:"By using Jest (UI SnapShot), you can run regression tests safely and easily."})]})]},4),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.d,{align:"top",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:chakra_ui_icons_esm.a})}),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.i,{align:"start",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{fontWeight:600,children:"StoryBook"}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{color:"gray.600",children:"Storybook is an open source tool for developing UI components and pages in isolation."})]})]},5),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.d,{align:"top",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(chakra_ui_icon_esm.a,{as:chakra_ui_icons_esm.a})}),Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.i,{align:"start",children:[Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{fontWeight:600,children:"Recoil"}),Object(jsx_runtime.jsx)(chakra_ui_layout_esm.h,{color:"gray.600",children:"By using Recoil, it is now possible to manage the state of functional components in a relatively simple way."})]})]},6)]})})]})}GridListWithHeading.displayName="GridListWithHeading";react_default.a.createElement,__webpack_exports__.default={title:"components/GridList",component:GridListWithHeading};var gridList_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(GridListWithHeading,{})};gridList_stories_Template.displayName="Template",gridList_stories_Template.parameters=Object.assign({storySource:{source:"(args) => <GridList />"}},gridList_stories_Template.parameters)}},[[561,2,3]]]);