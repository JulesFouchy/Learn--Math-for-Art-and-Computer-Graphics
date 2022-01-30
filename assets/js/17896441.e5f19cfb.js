"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[918],{854:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),l=a(6010),i=a(7462),r=a(7325),s=a(3699);var o=function(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(s.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))};var c=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o,(0,i.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o,(0,i.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))},d=a(9962),m=a(6070),u=a(9623);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,i=e.versionMetadata,r=(0,d.Z)().siteConfig.title,s=(0,m.useActivePlugin)({failfast:!0}).pluginId,o=(0,u.J)(s).savePreferredVersionName,c=(0,m.useDocVersionSuggestions)(s),v=c.latestDocSuggestion,p=c.latestVersionSuggestion,E=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return o(p.name)}})))}function E(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function b(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(4175);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(3366),Z="iconEdit_dcUD",U=["className"];var C=function(e){var t=e.className,a=(0,L.Z)(e,U);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(C,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var w="tag_hD8n",y="tagRegular_D6E_",M="tagWithCount_i0QQ";var A=function(e){var t,a=e.permalink,i=e.name,r=e.count;return n.createElement(s.Z,{href:a,className:(0,l.Z)(w,(t={},t[y]=!r,t[M]=r,t))},i,r&&n.createElement("span",null,r))},x="tags_XVD_",H="tag_JSN8";function D(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(x,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:H},n.createElement(A,{name:t,permalink:a}))}))))}var V="lastUpdated_foO9";function B(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(D,e)))}function S(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",V)},(a||i)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function I(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||s);return c||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(B,{tags:o}),d&&n.createElement(S,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var O=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function F(e){var t=e.toc,a=e.className,l=e.linkClassName,i=e.isChild;return t.length?n.createElement("ul",{className:i?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(F,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function R(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,r=e.linkClassName,s=void 0===r?"table-of-contents__link":r,o=e.linkActiveClassName,c=void 0===o?void 0:o,d=e.minHeadingLevel,m=e.maxHeadingLevel,v=(0,L.Z)(e,O),g=(0,u.LU)(),h=null!=d?d:g.tableOfContents.minHeadingLevel,p=null!=m?m:g.tableOfContents.maxHeadingLevel,E=(0,u.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:p}),b=(0,n.useMemo)((function(){if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:p}}),[s,c,h,p]);return(0,u.Si)(b),n.createElement(F,(0,i.Z)({toc:E,className:l,linkClassName:s},v))}var P="tableOfContents_cNA8",z=["className"];var q=function(e){var t=e.className,a=(0,L.Z)(e,z);return n.createElement("div",{className:(0,l.Z)(P,"thin-scrollbar",t)},n.createElement(R,(0,i.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},Q="tocCollapsible_jdIR",W="tocCollapsibleButton_Fzxq",j="tocCollapsibleContent_MpvI",J="tocCollapsibleExpanded_laf4";function X(e){var t,a=e.toc,i=e.className,s=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(Q,(t={},t[J]=!d,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",W),onClick:m},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:j,collapsed:d},n.createElement(R,{toc:a,minHeadingLevel:s,maxHeadingLevel:o})))}var G=a(8032),K="docItemContainer_vinB",Y="docItemCol_DM6M",$="tocMobile_TmEX";function ee(e){var t,a=e.content,i=a.metadata,r=a.frontMatter,s=r.image,o=r.keywords,d=r.hide_title,m=r.hide_table_of_contents,v=r.toc_min_heading_level,g=r.toc_max_heading_level,h=i.description,p=i.title,N=!d&&void 0===a.contentTitle,_=(0,u.iP)(),k=!m&&a.toc&&a.toc.length>0,L=k&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:p,description:h,keywords:o,image:s}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[Y]=!m,t))},n.createElement(E,null),n.createElement("div",{className:K},n.createElement("article",null,n.createElement(b,null),k&&n.createElement(X,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:g,className:(0,l.Z)(u.kM.docs.docTocMobile,$)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement("header",null,n.createElement(G.Z,{as:"h1"},p)),n.createElement(a,null)),n.createElement(I,e)),n.createElement(c,{previous:i.previous,next:i.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(q,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:g,className:u.kM.docs.docTocDesktop}))))}},8032:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7462),l=a(3366),i=a(7294),r=a(6010),s=a(7325),o=a(9623),c="anchorWithStickyNavbar_mojV",d="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(a,(0,n.Z)({},v,{className:(0,r.Z)("anchor",(t={},t[d]=g,t[c]=!g,t)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(a,v)}function g(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?i.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):i.createElement(v,(0,n.Z)({as:t},a))}}}]);