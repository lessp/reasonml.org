

import * as Util from "../common/Util.bs.js";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Caml_chrome_debugger from "bs-platform/lib/es6/caml_chrome_debugger.js";
import * as Highlight from "highlight.js/lib/highlight";

var inline = "no-underline border-b hover:text-main-lighten-20 hover:border-primary-dark-10 border-primary-lighten-50 text-inherit";

var Link = /* module */Caml_chrome_debugger.localModule([
    "inline",
    "standalone"
  ], [
    inline,
    "no-underline text-primary"
  ]);

function Text$Anchor(Props) {
  var name = Props.name;
  var style = {
    position: "absolute",
    top: "-7rem"
  };
  return React.createElement("span", {
              style: {
                position: "relative"
              }
            }, React.createElement("a", {
                  style: style,
                  name: name
                }));
}

var Anchor = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Anchor]);

function Text$Box(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "mt-12"
            }, children);
}

var Box = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Box]);

function Text$H1(Props) {
  var children = Props.children;
  return React.createElement("h1", {
              className: "text-5xl lg:text-6xl leading-3 lg:leading-2 font-montserrat font-medium lg:font-bold text-main-black"
            }, children);
}

var H1 = /* module */Caml_chrome_debugger.localModule(["make"], [Text$H1]);

function Text$H2(Props) {
  var children = Props.children;
  return React.createElement("h2", {
              className: "text-4xl leading-3 font-montserrat font-medium text-main-black"
            }, children);
}

var H2 = /* module */Caml_chrome_debugger.localModule(["make"], [Text$H2]);

function Text$H3(Props) {
  var children = Props.children;
  return React.createElement("h3", {
              className: "text-xl leading-3 font-montserrat font-semibold text-main-black"
            }, children);
}

var H3 = /* module */Caml_chrome_debugger.localModule(["make"], [Text$H3]);

function Text$H4(Props) {
  var children = Props.children;
  return React.createElement("h4", {
              className: "text-lg leading-2 font-montserrat font-semibold text-main-black"
            }, children);
}

var H4 = /* module */Caml_chrome_debugger.localModule(["make"], [Text$H4]);

function Text$H5(Props) {
  var children = Props.children;
  return React.createElement("h5", {
              className: "text-xs leading-2 font-montserrat font-semibold uppercase tracking-wide text-main-lighten-50"
            }, children);
}

var H5 = /* module */Caml_chrome_debugger.localModule(["make"], [Text$H5]);

function Text$Overline(Props) {
  var match = Props.underline;
  var underline = match !== undefined ? match : false;
  var children = Props.children;
  var className = "font-overpass font-bold text-main-lighten-50 uppercase text-xs mt-5 tracking-wide" + (
    underline ? " pb-3 border-b border-main-lighten-90" : ""
  );
  return React.createElement("div", {
              className: className
            }, children);
}

var Overline = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Overline]);

function Text$P(Props) {
  var match = Props.spacing;
  var spacing = match !== undefined ? match : /* default */465819841;
  var children = Props.children;
  var spacingClass = spacing >= 465819841 ? "mt-3" : "";
  var className = "text-lg leading-4 text-main-lighten-15 " + spacingClass;
  return React.createElement("p", {
              className: className
            }, children);
}

var P = /* module */Caml_chrome_debugger.localModule(["make"], [Text$P]);

function Text$Md$Pre(Props) {
  var children = Props.children;
  return React.createElement("pre", {
              className: "my-8 p-4 block bg-main-lighten-95"
            }, children);
}

var Pre = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Md$Pre]);

function Text$Md$Code(Props) {
  var className = Props.className;
  var metastring = Props.metastring;
  var children = Props.children;
  var lang;
  if (className !== undefined) {
    var match = className.split("-");
    if (match.length !== 2) {
      lang = "none";
    } else {
      var match$1 = match[0];
      if (match$1 === "language") {
        var lang$1 = match[1];
        lang = lang$1 === "" ? "none" : lang$1;
      } else {
        lang = "none";
      }
    }
  } else {
    lang = "re";
  }
  var langClass = "lang-" + lang;
  var base = {
    className: langClass + " font-mono block overflow-x-scroll hljs",
    metastring: metastring
  };
  var exit = 0;
  switch (lang) {
    case "re" : 
    case "reason" : 
        exit = 1;
        break;
    default:
      return ReactDOMRe.createElementVariadic("code", Caml_option.some(base), children);
  }
  if (exit === 1) {
    var highlighted = Highlight.highlight(lang, children).value;
    var finalProps = Object.assign(base, {
          dangerouslySetInnerHTML: {
            __html: highlighted
          }
        });
    return ReactDOMRe.createElementVariadic("code", Caml_option.some(finalProps), /* array */[]);
  }
  
}

var Code = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Md$Code]);

function Text$Md$InlineCode(Props) {
  var children = Props.children;
  return React.createElement("code", {
              className: "px-1 rounded-sm text-inherit font-mono bg-info-blue-lighten-90"
            }, children);
}

var InlineCode = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Md$InlineCode]);

function Text$Md$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "text-lg leading-4 my-6 text-main-lighten-15"
            }, children);
}

var P$1 = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Md$P]);

var refPrefix = "ref-";

var textRefPrefix = "ref-text-";

function Text$Md$A(Props) {
  var href = Props.href;
  var children = Props.children;
  var num = Number(href);
  if (isNaN(num)) {
    return React.createElement("a", {
                className: inline,
                href: href,
                rel: "noopener noreferrer",
                target: "_blank"
              }, children);
  } else {
    var id = String(num | 0);
    return React.createElement(React.Fragment, undefined, React.createElement(Text$Anchor, {
                    name: textRefPrefix + id
                  }), React.createElement("a", {
                    className: "no-underline text-inherit",
                    href: "#" + (refPrefix + id)
                  }, React.createElement("span", {
                        className: "hover:text-main-lighten-20 hover:border-b border-primary"
                      }, children), React.createElement("sup", {
                        className: "font-overpass border-b-0 font-bold text-primary text-xs",
                        style: {
                          left: "0.05rem",
                          top: "-0.5rem"
                        }
                      }, Util.ReactStuff[/* s */0](id))));
  }
}

var A = /* module */Caml_chrome_debugger.localModule([
    "refPrefix",
    "textRefPrefix",
    "make"
  ], [
    refPrefix,
    textRefPrefix,
    Text$Md$A
  ]);

function Text$Md$Ul(Props) {
  var children = Props.children;
  return React.createElement("ul", {
              className: "md-ul my-4"
            }, children);
}

var Ul = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Md$Ul]);

function Text$Md$Ol(Props) {
  var children = Props.children;
  return React.createElement("ol", {
              className: "md-ol -ml-4 text-primary"
            }, children);
}

var Ol = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Md$Ol]);

function typeOf (thing){{ return typeof thing; }};

function isArray (thing){{ return thing instanceof Array; }};

function isSublist (element){{
        if(element == null || element.props == null) {
          return false;
        }
        const name = element.props.name;
        return name === 'ul' || name === 'ol';
      }};

function Text$Md$Li(Props) {
  var children = Props.children;
  var elements;
  if (isArray(children)) {
    if (children.length !== 2) {
      elements = React.createElement("p", undefined, children);
    } else {
      var potentialSublist = children[1];
      elements = isSublist(potentialSublist) ? children : React.createElement("p", undefined, children);
    }
  } else {
    typeOf(children) === "string";
    elements = React.createElement("p", undefined, children);
  }
  return React.createElement("li", {
              className: "md-li mt-4 leading-4 ml-8 text-lg text-main-lighten-15"
            }, elements);
}

var Li = /* module */Caml_chrome_debugger.localModule([
    "typeOf",
    "isArray",
    "isSublist",
    "make"
  ], [
    typeOf,
    isArray,
    isSublist,
    Text$Md$Li
  ]);

var Md = /* module */Caml_chrome_debugger.localModule([
    "Pre",
    "Code",
    "InlineCode",
    "P",
    "A",
    "Ul",
    "Ol",
    "Li"
  ], [
    Pre,
    Code,
    InlineCode,
    P$1,
    A,
    Ul,
    Ol,
    Li
  ]);

function Text$Small(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "text-base font-overpass leading-4 text-main-lighten-15"
            }, children);
}

var Small = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Small]);

var component = ReasonReact.statelessComponent("Text.Xsmall");

function Text$Xsmall(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "text-sm font-overpass text-normal leading-3 text-main-lighten-15"
            }, children);
}

var Xsmall = /* module */Caml_chrome_debugger.localModule([
    "component",
    "make"
  ], [
    component,
    Text$Xsmall
  ]);

function Text$Lead(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "text-2xl font-montserrat font-medium leading-4 mt-2 text-main-black"
            }, children);
}

var Lead = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Lead]);

function Text$Quote(Props) {
  var match = Props.bold;
  var bold = match !== undefined ? match : true;
  var children = Props.children;
  return React.createElement("div", {
              className: "flex flex-row mt-5 mb-3 " + (
                bold ? "font-bold" : ""
              )
            }, React.createElement("div", {
                  className: "border-l-2 border-primary w-2 mt-3 mb-3 md:mt-3 md:mb-3"
                }), React.createElement("div", {
                  className: "text-main-lighten-15 leading-4 text-lg pl-5 md:pl-8 md:text-2xl italic  md:pr-10 md:py-5"
                }, children));
}

var Quote = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Quote]);

function Text$Page(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "flex sm:justify-center mb-24"
            }, React.createElement("div", {
                  className: "pt-12 px-5 xl:px-0 sm:w-4/5 lg:w-3/5 xl:w-1/2"
                }, children));
}

var Page = /* module */Caml_chrome_debugger.localModule(["make"], [Text$Page]);

export {
  Link ,
  Anchor ,
  Box ,
  H1 ,
  H2 ,
  H3 ,
  H4 ,
  H5 ,
  Overline ,
  P ,
  Md ,
  Small ,
  Xsmall ,
  Lead ,
  Quote ,
  Page ,
  
}
/* component Not a pure module */
