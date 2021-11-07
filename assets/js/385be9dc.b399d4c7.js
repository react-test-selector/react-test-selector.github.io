"use strict";(self.webpackChunkrest_test_selector_doc=self.webpackChunkrest_test_selector_doc||[]).push([[911],{6167:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(9703);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=i,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5527:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(4986),i=r(8604),o=(r(9703),r(6167)),a=["components"],c={sidebar_position:12},s="Javascript + Selenium",u={unversionedId:"Examples/Javascript-Selenium",id:"Examples/Javascript-Selenium",isDocsHomePage:!1,title:"Javascript + Selenium",description:"",source:"@site/docs/Examples/Javascript-Selenium.md",sourceDirName:"Examples",slug:"/Examples/Javascript-Selenium",permalink:"/docs/Examples/Javascript-Selenium",editUrl:"https://github.com/react-test-selector/react-test-selector/tree/main/packages/docs/docs/Examples/Javascript-Selenium.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"C# + Selenium",permalink:"/docs/Examples/CSharp-Selenium"},next:{title:"C# + Puppeteer",permalink:"/docs/Examples/CSharp-Puppeteer"}},p=[],l={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"javascript--selenium"},"Javascript + Selenium"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { expect } from "chai";\nimport { readFile } from "fs";\nimport { promisify } from "util";\nimport { Builder } from "selenium-webdriver";\n\ndescribe("RTS Demo", () => {\n    it("test selenium", async function () {\n        // Arrange\n        this.timeout(100000);\n        const readFileAsync = promisify(readFile);\n        const driver = await new Builder().forBrowser("chrome").usingServer(`http://127.0.0.1:4444/wd/hub`).build();\n        await driver.get("https://react-test-selector.github.io/example-application-for-docs/");\n        await driver.executeScript(await readFileAsync(require.resolve("react-test-selector"), "utf8"));\n\n        // Act\n        const inputNode = await driver.executeScript(\n            \'return rts.querySelector("Input").at(0).getDomElement()\');\n        await inputNode.sendKeys("Text");\n\n        // Assert\n        const textNode = await driver.executeScript(\n            \'return rts.querySelector("InputValueContent").at(0).getDomElement()\'\n        );\n        const text = await textNode.getText();\n        expect(text).to.eql("Input value: Text");\n        await driver.close();\n    });\n});\n')))}m.isMDXComponent=!0}}]);