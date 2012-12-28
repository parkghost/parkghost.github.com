/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
(function(){var h=SyntaxHighlighter;h.autoloader=function(){function n(a){var b=document.createElement("script"),c=!1;b.src=a;b.type="text/javascript";b.language="javascript";b.onload=b.onreadystatechange=function(){if(!c&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState)){c=!0;e[a]=!0;a:{for(var d in e)if(!1==e[d])break a;j&&SyntaxHighlighter.highlight(k)}b.onload=b.onreadystatechange=null;b.parentNode.removeChild(b)}};document.body.appendChild(b)}var d=arguments,l=h.findElements(),
	m={},e={},j=!1,k=null,a;SyntaxHighlighter.all=function(a){k=a;j=!0};for(a=0;a<d.length;a++)for(var f=d[a].pop?d[a]:d[a].split(/\s+/),c=f.pop(),g=0;g<f.length;g++)m[f[g]]=c;for(a=0;a<l.length;a++)if((c=m[l[a].params.brush])&&void 0==e[c])e[c]=!1,n(c)}})();
