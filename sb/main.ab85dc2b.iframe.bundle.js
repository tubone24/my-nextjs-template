(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{532:function(module,exports,__webpack_require__){__webpack_require__(533),__webpack_require__(689),__webpack_require__(690),__webpack_require__(918),__webpack_require__(919),__webpack_require__(924),__webpack_require__(925),__webpack_require__(923),__webpack_require__(920),__webpack_require__(926),__webpack_require__(921),__webpack_require__(922),__webpack_require__(927),module.exports=__webpack_require__(898)},600:function(module,exports){},690:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(371)},898:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(371).configure)([__webpack_require__(899),__webpack_require__(900)],module,!1)}).call(this,__webpack_require__(174)(module))},899:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=899},900:function(module,exports,__webpack_require__){var map={"./components/footer.stories.tsx":928,"./components/gridList.stories.tsx":929};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=900},927:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"globalTypes",(function(){return globalTypes})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(25),__webpack_require__(6),__webpack_require__(54),__webpack_require__(452),__webpack_require__(886),__webpack_require__(52),__webpack_require__(887),__webpack_require__(888),__webpack_require__(451);var client_api=__webpack_require__(956),esm=__webpack_require__(5),color_mode_provider=__webpack_require__(931),flex=__webpack_require__(944),icon_button=__webpack_require__(952),chakra_provider=__webpack_require__(953),extend_theme=__webpack_require__(946),react=__webpack_require__(0),index_esm=__webpack_require__(154),dist_esm=__webpack_require__(501),jsx_runtime=__webpack_require__(8),globalTypes=(react.createElement,{direction:{name:"Direction",description:"Direction for layout",defaultValue:"LTR",toolbar:{icon:"globe",items:["LTR","RTL"]}}}),preview_ColorModeToggleBar=function ColorModeToggleBar(){var toggleColorMode=Object(color_mode_provider.b)().toggleColorMode,SwitchIcon=Object(color_mode_provider.c)(index_esm.b,index_esm.c),nextMode=Object(color_mode_provider.c)("dark","light");return Object(jsx_runtime.jsx)(flex.a,{justify:"flex-end",mb:4,children:Object(jsx_runtime.jsx)(icon_button.a,{size:"md",fontSize:"lg","aria-label":"Switch to "+nextMode+" mode",variant:"ghost",color:"current",marginLeft:"2",onClick:toggleColorMode,icon:Object(jsx_runtime.jsx)(SwitchIcon,{})})})};preview_ColorModeToggleBar.displayName="ColorModeToggleBar";var preview_withChakra=function withChakra(StoryFn,context){var dir=context.globals.direction.toLowerCase();return Object(jsx_runtime.jsx)(chakra_provider.a,{theme:Object(extend_theme.a)({direction:dir}),children:Object(jsx_runtime.jsxs)("div",{dir:dir,id:"story-wrapper",style:{minHeight:"100vh"},children:[Object(jsx_runtime.jsx)(preview_ColorModeToggleBar,{}),Object(jsx_runtime.jsx)(StoryFn,{})]})})};preview_withChakra.displayName="withChakra";var decorators=[preview_withChakra,dist_esm.withPerformance];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},928:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return footer_stories_Template}));__webpack_require__(15);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),system=__webpack_require__(110),color_mode_provider=__webpack_require__(931),visually_hidden=__webpack_require__(945),box=__webpack_require__(947),container=__webpack_require__(948),stack=__webpack_require__(954),esm_text=__webpack_require__(950),index_esm=__webpack_require__(154),axios=__webpack_require__(504),axios_default=__webpack_require__.n(axios),jsx_runtime=__webpack_require__(8),footer_SocialButton=(react_default.a.createElement,function SocialButton(_ref){var children=_ref.children,label=_ref.label,href=_ref.href;return Object(jsx_runtime.jsxs)(system.a.button,{bg:Object(color_mode_provider.c)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:href,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:Object(color_mode_provider.c)("blackAlpha.200","whiteAlpha.200")},children:[Object(jsx_runtime.jsx)(visually_hidden.a,{children:label}),children]})});function SmallWithSocial(){var _useState=Object(react.useState)(""),lastSync=_useState[0],setLastSync=_useState[1];return Object(react.useEffect)((function(){!function getLastSync(){axios_default.a.get("/api/hello").then((function(resp){setLastSync(resp.data.year)}))}()}),[]),Object(jsx_runtime.jsx)(box.a,{bg:Object(color_mode_provider.c)("gray.50","gray.900"),color:Object(color_mode_provider.c)("gray.700","gray.200"),children:Object(jsx_runtime.jsxs)(container.a,{as:stack.b,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[Object(jsx_runtime.jsxs)(esm_text.a,{children:["© ",lastSync," tubone24. All rights reserved"]}),Object(jsx_runtime.jsxs)(stack.b,{direction:"row",spacing:6,children:[Object(jsx_runtime.jsx)(footer_SocialButton,{label:"Twitter",href:"https://twitter.com/meitante1conan",children:Object(jsx_runtime.jsx)(index_esm.d,{})}),Object(jsx_runtime.jsx)(footer_SocialButton,{label:"GitHub",href:"https://github.com/tubone24",children:Object(jsx_runtime.jsx)(index_esm.a,{})})]})]})})}footer_SocialButton.displayName="SocialButton",SmallWithSocial.displayName="SmallWithSocial";react_default.a.createElement,__webpack_exports__.default={title:"components/Footer",component:SmallWithSocial};var footer_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(SmallWithSocial,{})};footer_stories_Template.displayName="Template",footer_stories_Template.parameters=Object.assign({storySource:{source:"(args) => <Footer />"}},footer_stories_Template.parameters)},929:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return gridList_stories_Template}));__webpack_require__(15);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),box=__webpack_require__(947),stack=__webpack_require__(954),container=__webpack_require__(948),heading=__webpack_require__(951),esm_text=__webpack_require__(950),simple_grid=__webpack_require__(957),icon=__webpack_require__(505),Check=__webpack_require__(958),jsx_runtime=__webpack_require__(8);react_default.a.createElement;function GridListWithHeading(){return Object(jsx_runtime.jsxs)(box.a,{p:4,children:[Object(jsx_runtime.jsxs)(stack.b,{spacing:4,as:container.a,maxW:"3xl",textAlign:"center",children:[Object(jsx_runtime.jsx)(heading.a,{fontSize:"3xl",children:"Feature"}),Object(jsx_runtime.jsx)(esm_text.a,{color:"gray.600",fontSize:"xl",children:"This template contains a lot of modern features."})]}),Object(jsx_runtime.jsx)(container.a,{maxW:"6xl",mt:10,children:Object(jsx_runtime.jsxs)(simple_grid.a,{columns:{base:1,md:2,lg:4},spacing:10,children:[Object(jsx_runtime.jsxs)(stack.a,{align:"top",children:[Object(jsx_runtime.jsx)(box.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(icon.a,{as:Check.a})}),Object(jsx_runtime.jsxs)(stack.c,{align:"start",children:[Object(jsx_runtime.jsx)(esm_text.a,{fontWeight:600,children:"Next.js"}),Object(jsx_runtime.jsx)(esm_text.a,{color:"gray.600",children:"We use Next.js, so we are familiar with SPA, SSG, and API development."})]})]},1),Object(jsx_runtime.jsxs)(stack.a,{align:"top",children:[Object(jsx_runtime.jsx)(box.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(icon.a,{as:Check.a})}),Object(jsx_runtime.jsxs)(stack.c,{align:"start",children:[Object(jsx_runtime.jsx)(esm_text.a,{fontWeight:600,children:"Chakra UI"}),Object(jsx_runtime.jsx)(esm_text.a,{color:"gray.600",children:"By using Chakra UI, you can easily achieve CSS in JS while achieving Utility First."})]})]},2),Object(jsx_runtime.jsxs)(stack.a,{align:"top",children:[Object(jsx_runtime.jsx)(box.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(icon.a,{as:Check.a})}),Object(jsx_runtime.jsxs)(stack.c,{align:"start",children:[Object(jsx_runtime.jsx)(esm_text.a,{fontWeight:600,children:"TypeScript"}),Object(jsx_runtime.jsx)(esm_text.a,{color:"gray.600",children:"I've heard from my grandpa that if you don't use TypeScript, you'll get very angry."})]})]},3),Object(jsx_runtime.jsxs)(stack.a,{align:"top",children:[Object(jsx_runtime.jsx)(box.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(icon.a,{as:Check.a})}),Object(jsx_runtime.jsxs)(stack.c,{align:"start",children:[Object(jsx_runtime.jsx)(esm_text.a,{fontWeight:600,children:"Jest(UI SnapShot)"}),Object(jsx_runtime.jsx)(esm_text.a,{color:"gray.600",children:"By using Jest (UI SnapShot), you can run regression tests safely and easily."})]})]},4),Object(jsx_runtime.jsxs)(stack.a,{align:"top",children:[Object(jsx_runtime.jsx)(box.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(icon.a,{as:Check.a})}),Object(jsx_runtime.jsxs)(stack.c,{align:"start",children:[Object(jsx_runtime.jsx)(esm_text.a,{fontWeight:600,children:"StoryBook"}),Object(jsx_runtime.jsx)(esm_text.a,{color:"gray.600",children:"Storybook is an open source tool for developing UI components and pages in isolation."})]})]},5),Object(jsx_runtime.jsxs)(stack.a,{align:"top",children:[Object(jsx_runtime.jsx)(box.a,{color:"green.400",px:2,children:Object(jsx_runtime.jsx)(icon.a,{as:Check.a})}),Object(jsx_runtime.jsxs)(stack.c,{align:"start",children:[Object(jsx_runtime.jsx)(esm_text.a,{fontWeight:600,children:"Recoil"}),Object(jsx_runtime.jsx)(esm_text.a,{color:"gray.600",children:"By using Recoil, it is now possible to manage the state of functional components in a relatively simple way."})]})]},6)]})})]})}GridListWithHeading.displayName="GridListWithHeading";react_default.a.createElement,__webpack_exports__.default={title:"components/GridList",component:GridListWithHeading};var gridList_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(GridListWithHeading,{})};gridList_stories_Template.displayName="Template",gridList_stories_Template.parameters=Object.assign({storySource:{source:"(args) => <GridList />"}},gridList_stories_Template.parameters)}},[[532,2,3]]]);