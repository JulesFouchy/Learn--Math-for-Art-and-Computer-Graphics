(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[245],{4130:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(5485),a=n.n(i),s=n(1336);s.tokenizer.separator=/[\s\-/]+/;var r=function(){function e(e,t){this.searchDocs=e,this.lunrIndex=s.Index.load(t)}var t=e.prototype;return t.getLunrResult=function(e){return this.lunrIndex.query((function(t){var n=s.tokenizer(e);t.term(n,{boost:10}),t.term(n,{wildcard:s.Query.wildcard.TRAILING})}))},t.getHit=function(e,t,n){return{hierarchy:{lvl0:e.pageTitle||e.title,lvl1:0===e.type?null:e.title},url:e.url,_snippetResult:n?{content:{value:n,matchLevel:"full"}}:null,_highlightResult:{hierarchy:{lvl0:{value:0===e.type?t||e.title:e.pageTitle},lvl1:0===e.type?null:{value:t||e.title}}}}},t.getTitleHit=function(e,t,n){var i=t[0],a=t[0]+n,s=e.title.substring(0,i)+'<span class="algolia-docsearch-suggestion--highlight">'+e.title.substring(i,a)+"</span>"+e.title.substring(a,e.title.length);return this.getHit(e,s)},t.getKeywordHit=function(e,t,n){var i=t[0],a=t[0]+n,s=e.title+"<br /><i>Keywords: "+e.keywords.substring(0,i)+'<span class="algolia-docsearch-suggestion--highlight">'+e.keywords.substring(i,a)+"</span>"+e.keywords.substring(a,e.keywords.length)+"</i>";return this.getHit(e,s)},t.getContentHit=function(e,t){for(var n=t[0],i=t[0]+t[1],a=n,s=i,r=!0,l=!0,o=0;o<3;o++){var u=e.content.lastIndexOf(" ",a-2),c=e.content.lastIndexOf(".",a-2);if(c>0&&c>u){a=c+1,r=!1;break}if(u<0){a=0,r=!1;break}a=u+1}for(var h=0;h<10;h++){var g=e.content.indexOf(" ",s+1),d=e.content.indexOf(".",s+1);if(d>0&&d<g){s=d,l=!1;break}if(g<0){s=e.content.length,l=!1;break}s=g}var p=e.content.substring(a,n);return r&&(p="... "+p),p+='<span class="algolia-docsearch-suggestion--highlight">'+e.content.substring(n,i)+"</span>",p+=e.content.substring(i,s),l&&(p+=" ..."),this.getHit(e,null,p)},t.search=function(e){var t=this;return new Promise((function(n,i){var a=t.getLunrResult(e),s=[];a.length>5&&(a.length=5),t.titleHitsRes=[],t.contentHitsRes=[],a.forEach((function(n){var i=t.searchDocs[n.ref],a=n.matchData.metadata;for(var r in a)if(a[r].title){if(!t.titleHitsRes.includes(n.ref)){var l=a[r].title.position[0];s.push(t.getTitleHit(i,l,e.length)),t.titleHitsRes.push(n.ref)}}else if(a[r].content){var o=a[r].content.position[0];s.push(t.getContentHit(i,o))}else if(a[r].keywords){var u=a[r].keywords.position[0];s.push(t.getKeywordHit(i,u,e.length)),t.titleHitsRes.push(n.ref)}})),s.length>5&&(s.length=5),n(s)}))},e}(),l=n(1639),o=n.n(l),u="algolia-docsearch",c=u+"-suggestion",h={suggestion:'\n  <a class="'+c+"\n    {{#isCategoryHeader}}"+c+"__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}"+c+'__secondary{{/isSubCategoryHeader}}\n    "\n    aria-label="Link to the result"\n    href="{{{url}}}"\n    >\n    <div class="'+c+'--category-header">\n        <span class="'+c+'--category-header-lvl0">{{{category}}}</span>\n    </div>\n    <div class="'+c+'--wrapper">\n      <div class="'+c+'--subcategory-column">\n        <span class="'+c+'--subcategory-column-text">{{{subcategory}}}</span>\n      </div>\n      {{#isTextOrSubcategoryNonEmpty}}\n      <div class="'+c+'--content">\n        <div class="'+c+'--subcategory-inline">{{{subcategory}}}</div>\n        <div class="'+c+'--title">{{{title}}}</div>\n        {{#text}}<div class="'+c+'--text">{{{text}}}</div>{{/text}}\n      </div>\n      {{/isTextOrSubcategoryNonEmpty}}\n    </div>\n  </a>\n  ',suggestionSimple:'\n  <div class="'+c+"\n    {{#isCategoryHeader}}"+c+"__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}"+c+'__secondary{{/isSubCategoryHeader}}\n    suggestion-layout-simple\n  ">\n    <div class="'+c+'--category-header">\n        {{^isLvl0}}\n        <span class="'+c+"--category-header-lvl0 "+c+'--category-header-item">{{{category}}}</span>\n          {{^isLvl1}}\n          {{^isLvl1EmptyOrDuplicate}}\n          <span class="'+c+"--category-header-lvl1 "+c+'--category-header-item">\n              {{{subcategory}}}\n          </span>\n          {{/isLvl1EmptyOrDuplicate}}\n          {{/isLvl1}}\n        {{/isLvl0}}\n        <div class="'+c+"--title "+c+'--category-header-item">\n            {{#isLvl2}}\n                {{{title}}}\n            {{/isLvl2}}\n            {{#isLvl1}}\n                {{{subcategory}}}\n            {{/isLvl1}}\n            {{#isLvl0}}\n                {{{category}}}\n            {{/isLvl0}}\n        </div>\n    </div>\n    <div class="'+c+'--wrapper">\n      {{#text}}\n      <div class="'+c+'--content">\n        <div class="'+c+'--text">{{{text}}}</div>\n      </div>\n      {{/text}}\n    </div>\n  </div>\n  ',footer:'\n    <div class="algolia-docsearch-footer">\n    </div>\n  ',empty:'\n  <div class="'+c+'">\n    <div class="'+c+'--wrapper">\n        <div class="'+c+"--content "+c+'--no-results">\n            <div class="'+c+'--title">\n                <div class="'+c+'--text">\n                    No results found for query <b>"{{query}}"</b>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ',searchBox:'\n  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">\n    <div role="search" class="searchbox__wrapper">\n      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>\n      <button type="submit" title="Submit your search query." class="searchbox__submit" >\n        <svg width=12 height=12 role="img" aria-label="Search">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>\n        </svg>\n      </button>\n      <button type="reset" title="Clear the search query." class="searchbox__reset hide">\n        <svg width=12 height=12 role="img" aria-label="Reset">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>\n        </svg>\n      </button>\n    </div>\n</form>\n\n<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>\n    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>\n  </svg>\n</div>\n  '},g=n(7939),d=n.n(g),p={mergeKeyWithParent:function(e,t){if(void 0===e[t])return e;if("object"!=typeof e[t])return e;var n=d().extend({},e,e[t]);return delete n[t],n},groupBy:function(e,t){var n={};return d().each(e,(function(e,i){if(void 0===i[t])throw new Error("[groupBy]: Object has no key "+t);var a=i[t];"string"==typeof a&&(a=a.toLowerCase()),Object.prototype.hasOwnProperty.call(n,a)||(n[a]=[]),n[a].push(i)})),n},values:function(e){return Object.keys(e).map((function(t){return e[t]}))},flatten:function(e){var t=[];return e.forEach((function(e){Array.isArray(e)?e.forEach((function(e){t.push(e)})):t.push(e)})),t},flattenAndFlagFirst:function(e,t){var n=this.values(e).map((function(e){return e.map((function(e,n){return e[t]=0===n,e}))}));return this.flatten(n)},compact:function(e){var t=[];return e.forEach((function(e){e&&t.push(e)})),t},getHighlightedValue:function(e,t){return e._highlightResult&&e._highlightResult.hierarchy_camel&&e._highlightResult.hierarchy_camel[t]&&e._highlightResult.hierarchy_camel[t].matchLevel&&"none"!==e._highlightResult.hierarchy_camel[t].matchLevel&&e._highlightResult.hierarchy_camel[t].value?e._highlightResult.hierarchy_camel[t].value:e._highlightResult&&e._highlightResult&&e._highlightResult[t]&&e._highlightResult[t].value?e._highlightResult[t].value:e[t]},getSnippetedValue:function(e,t){if(!e._snippetResult||!e._snippetResult[t]||!e._snippetResult[t].value)return e[t];var n=e._snippetResult[t].value;return n[0]!==n[0].toUpperCase()&&(n="\u2026"+n),-1===[".","!","?"].indexOf(n[n.length-1])&&(n+="\u2026"),n},deepClone:function(e){return JSON.parse(JSON.stringify(e))}},v=function(){function e(t){var n=t.searchDocs,i=t.searchIndex,a=t.inputSelector,s=t.debug,l=void 0!==s&&s,u=t.queryDataCallback,c=void 0===u?null:u,g=t.autocompleteOptions,p=void 0===g?{debug:!1,hint:!1,autoselect:!0}:g,v=t.transformData,f=void 0!==v&&v,y=t.queryHook,m=void 0!==y&&y,b=t.handleSelected,x=void 0!==b&&b,_=t.enhancedSearchInput,w=void 0!==_&&_,S=t.layout,H=void 0===S?"collumns":S;this.input=e.getInputFromSelector(a),this.queryDataCallback=c||null;var C=!(!p||!p.debug)&&p.debug;p.debug=l||C,this.autocompleteOptions=p,this.autocompleteOptions.cssClasses=this.autocompleteOptions.cssClasses||{},this.autocompleteOptions.cssClasses.prefix=this.autocompleteOptions.cssClasses.prefix||"ds";var L=this.input&&"function"==typeof this.input.attr&&this.input.attr("aria-label");this.autocompleteOptions.ariaLabel=this.autocompleteOptions.ariaLabel||L||"search input",this.isSimpleLayout="simple"===H,this.client=new r(n,i),w&&(this.input=e.injectSearchBox(this.input)),this.autocomplete=o()(this.input,p,[{source:this.getAutocompleteSource(f,m),templates:{suggestion:e.getSuggestionTemplate(this.isSimpleLayout),footer:h.footer,empty:e.getEmptyTemplate()}}]);var k=x;this.handleSelected=k||this.handleSelected,k&&d()(".algolia-autocomplete").on("click",".ds-suggestions a",(function(e){e.preventDefault()})),this.autocomplete.on("autocomplete:selected",this.handleSelected.bind(null,this.autocomplete.autocomplete)),this.autocomplete.on("autocomplete:shown",this.handleShown.bind(null,this.input)),w&&e.bindSearchBoxEvent()}e.injectSearchBox=function(e){e.before(h.searchBox);var t=e.prev().prev().find("input");return e.remove(),t},e.bindSearchBoxEvent=function(){d()('.searchbox [type="reset"]').on("click",(function(){d()("input#docsearch").focus(),d()(this).addClass("hide"),o().autocomplete.setVal("")})),d()("input#docsearch").on("keyup",(function(){var e=document.querySelector("input#docsearch"),t=document.querySelector('.searchbox [type="reset"]');t.className="searchbox__reset",0===e.value.length&&(t.className+=" hide")}))},e.getInputFromSelector=function(e){var t=d()(e).filter("input");return t.length?d()(t[0]):null};var t=e.prototype;return t.getAutocompleteSource=function(t,n){var i=this;return function(a,s){n&&(a=n(a)||a),i.client.search(a).then((function(n){i.queryDataCallback&&"function"==typeof i.queryDataCallback&&i.queryDataCallback(n),t&&(n=t(n)||n),s(e.formatHits(n))}))}},e.formatHits=function(t){var n=p.deepClone(t).map((function(e){return e._highlightResult&&(e._highlightResult=p.mergeKeyWithParent(e._highlightResult,"hierarchy")),p.mergeKeyWithParent(e,"hierarchy")})),i=p.groupBy(n,"lvl0");return d().each(i,(function(e,t){var n=p.groupBy(t,"lvl1"),a=p.flattenAndFlagFirst(n,"isSubCategoryHeader");i[e]=a})),(i=p.flattenAndFlagFirst(i,"isCategoryHeader")).map((function(t){var n=e.formatURL(t),i=p.getHighlightedValue(t,"lvl0"),a=p.getHighlightedValue(t,"lvl1")||i,s=p.compact([p.getHighlightedValue(t,"lvl2")||a,p.getHighlightedValue(t,"lvl3"),p.getHighlightedValue(t,"lvl4"),p.getHighlightedValue(t,"lvl5"),p.getHighlightedValue(t,"lvl6")]).join('<span class="aa-suggestion-title-separator" aria-hidden="true"> \u203a </span>'),r=p.getSnippetedValue(t,"content"),l=a&&""!==a||s&&""!==s,o=s&&""!==s&&s!==a,u=!o&&a&&""!==a&&a!==i;return{isLvl0:!u&&!o,isLvl1:u,isLvl2:o,isLvl1EmptyOrDuplicate:!a||""===a||a===i,isCategoryHeader:t.isCategoryHeader,isSubCategoryHeader:t.isSubCategoryHeader,isTextOrSubcategoryNonEmpty:l,category:i,subcategory:a,title:s,text:r,url:n}}))},e.formatURL=function(e){var t=e.url,n=e.anchor;return t?-1!==t.indexOf("#")?t:n?e.url+"#"+e.anchor:t:n?"#"+e.anchor:(console.warn("no anchor nor url for : ",JSON.stringify(e)),null)},e.getEmptyTemplate=function(){return function(e){return a().compile(h.empty).render(e)}},e.getSuggestionTemplate=function(e){var t=e?h.suggestionSimple:h.suggestion,n=a().compile(t);return function(e){return n.render(e)}},t.handleSelected=function(e,t,n,i,a){void 0===a&&(a={}),"click"!==a.selectionMethod&&(e.setVal(""),window.location.assign(n.url))},t.handleShown=function(e){var t=e.offset().left+e.width()/2,n=d()(document).width()/2;isNaN(n)&&(n=900);var i=t-n>=0?"algolia-autocomplete-right":"algolia-autocomplete-left",a=t-n<0?"algolia-autocomplete-right":"algolia-autocomplete-left",s=d()(".algolia-autocomplete");s.hasClass(i)||s.addClass(i),s.hasClass(a)&&s.removeClass(a)},e}()},6165:function(){}}]);