woosh.addTests('glow2-src', {
	'$preTest': function(prevTest, nextTest) {
		if (!prevTest) {
			// initial setup
			window.htmlForTest = document.getElementById('htmlForTest');
			window.largeHtmlCollection = htmlForTest.getElementsByTagName('*');
			window.largeHtmlStr = '<h2><a name=abstract></a>Abstract</h2>  <p><em>Selectors</em> are patterns that match against elements in a  tree. Selectors have been optimized for use with HTML and XML, and  are designed to be usable in performance-critical code.</p>  <p><acronym title="Cascading Style Sheets">CSS</acronym> (Cascading  Style Sheets) is a language for describing the rendering of <acronym  title="Hypertext Markup Language">HTML</acronym> and <acronym  title="Extensible Markup Language">XML</acronym> documents on  screen, on paper, in speech, etc. CSS uses Selectors for binding  style properties to elements in the document. This document  describes extensions to the selectors defined in CSS level 2. These  extended selectors will be used by CSS level 3.  <p>Selectors define the following function:</p>  <pre>expression &#x2217; element &rarr; boolean</pre>  <p>That is, given an element and a selector, this specification  defines whether that element matches the selector.</p>  <p>These expressions can also be used, for instance, to select a set  of elements, or a single element from a set of elements, by  evaluating the expression across all the elements in a  subtree. <acronym title="Simple Tree Transformation  Sheets">STTS</acronym> (Simple Tree Transformation Sheets), a  language for transforming XML trees, uses this mechanism. <a href="#refsSTTS">[STTS]</a></p>  <h2><a name=status></a>Status of this document</h2>  <p><em>This section describes the status of this document at the  time of its publication. Other documents may supersede this  document. A list of current W3C publications and the latest revision  of this technical report can be found in the <a  href="http://www.w3.org/TR/">W3C technical reports index at  http://www.w3.org/TR/.</a></em></p>  <p>This document describes the selectors that already exist in <a  href="#refsCSS1"><abbr title="CSS level 1">CSS1</abbr></a> and <a  href="#refsCSS21"><abbr title="CSS level 2">CSS2</abbr></a>, and  also proposes new selectors for <abbr title="CSS level  3">CSS3</abbr> and other languages that may need them.</p>  <p>The CSS Working Group doesn\'t expect that all implementations of  CSS3 will have to implement all selectors. Instead, there will  probably be a small number of variants of CSS3, called profiles. For  example, it may be that only a profile for interactive user agents  will include all of the selectors.</p>  <p>This specification is a last call working draft for the the <a  href="http://www.w3.org/Style/CSS/members">CSS Working Group</a>  (<a href="/Style/">Style Activity</a>). This  document is a revision of the <a  href="http://www.w3.org/TR/2001/CR-css3-selectors-20011113/">Candidate  Recommendation dated 2001 November 13</a>, and has incorporated  implementation feedback received in the past few years. It is  expected that this last call will proceed straight to Proposed  Recommendation stage since it is believed that interoperability will  be demonstrable.</p>  <p>All persons are encouraged to review and implement this  specification and return comments to the (<a  href="http://lists.w3.org/Archives/Public/www-style/">archived</a>)  public mailing list <a  href="http://www.w3.org/Mail/Lists.html#www-style">www-style</a>  (see <a href="http://www.w3.org/Mail/Request">instructions</a>). W3C  Members can also send comments directly to the CSS Working  Group.  The deadline for comments is 14 January 2006.</p>  <p>This is still a draft document and may be updated, replaced, or  obsoleted by other documents at any time. It is inappropriate to  cite a W3C Working Draft as other than &quot;work in progress&quot;.  <p>This document may be available in <a  href="http://www.w3.org/Style/css3-selectors-updates/translations">translation</a>.  The English version of this specification is the only normative  version.  <div class="subtoc">   <h2><a name=contents>Table of contents</a></h2>   <ul class="toc">    <li class="tocline2"><a href="#context">1. Introduction</a>     <ul>      <li><a href="#dependencies">1.1. Dependencies</a> </li>      <li><a href="#terminology">1.2. Terminology</a> </li>      <li><a href="#changesFromCSS2">1.3. Changes from CSS2</a> </li>     </ul>    <li class="tocline2"><a href="#selectors">2. Selectors</a>    <li class="tocline2"><a href="#casesens">3. Case sensitivity</a>    <li class="tocline2"><a href="#selector-syntax">4. Selector syntax</a>    <li class="tocline2"><a href="#grouping">5. Groups of selectors</a>    <li class="tocline2"><a href="#simple-selectors">6. Simple selectors</a>     <ul class="toc">      <li class="tocline3"><a href="#type-selectors">6.1. Type selectors</a>       <ul class="toc">        <li class="tocline4"><a href="#typenmsp">6.1.1. Type selectors and namespaces</a></li>       </ul>      <li class="tocline3"><a href="#universal-selector">6.2. Universal selector</a>       <ul>        <li><a href="#univnmsp">6.2.1. Universal selector and namespaces</a></li>       </ul>      <li class="tocline3"><a href="#attribute-selectors">6.3. Attribute selectors</a>       <ul class="toc">        <li class="tocline4"><a href="#attribute-representation">6.3.1. Representation of attributes and attributes values</a>        <li><a href="#attribute-substrings">6.3.2. Substring matching attribute selectors</a>        <li class="tocline4"><a href="#attrnmsp">6.3.3. Attribute selectors and namespaces</a>        <li class="tocline4"><a href="#def-values">6.3.4. Default attribute values in DTDs</a></li>       </ul>      <li class="tocline3"><a href="#class-html">6.4. Class selectors</a>      <li class="tocline3"><a href="#id-selectors">6.5. ID selectors</a>      <li class="tocline3"><a href="#pseudo-classes">6.6. Pseudo-classes</a>       <ul class="toc">        <li class="tocline4"><a href="#dynamic-pseudos">6.6.1. Dynamic pseudo-classes</a>        <li class="tocline4"><a href="#target-pseudo">6.6.2. The :target pseudo-class</a>        <li class="tocline4"><a href="#lang-pseudo">6.6.3. The :lang() pseudo-class</a>        <li class="tocline4"><a href="#UIstates">6.6.4. UI element states pseudo-classes</a>        <li class="tocline4"><a href="#structural-pseudos">6.6.5. Structural pseudo-classes</a>         <ul>          <li><a href="#root-pseudo">:root pseudo-class</a>          <li><a href="#nth-child-pseudo">:nth-child() pseudo-class</a>          <li><a href="#nth-last-child-pseudo">:nth-last-child()</a>          <li><a href="#nth-of-type-pseudo">:nth-of-type() pseudo-class</a>          <li><a href="#nth-last-of-type-pseudo">:nth-last-of-type()</a>          <li><a href="#first-child-pseudo">:first-child pseudo-class</a>          <li><a href="#last-child-pseudo">:last-child pseudo-class</a>          <li><a href="#first-of-type-pseudo">:first-of-type pseudo-class</a>          <li><a href="#last-of-type-pseudo">:last-of-type pseudo-class</a>          <li><a href="#only-child-pseudo">:only-child pseudo-class</a>          <li><a href="#only-of-type-pseudo">:only-of-type pseudo-class</a>          <li><a href="#empty-pseudo">:empty pseudo-class</a></li>         </ul>        <li class="tocline4"><a href="#negation">6.6.7. The negation pseudo-class</a></li>       </ul>      </li>     </ul>    <li><a href="#pseudo-elements">7. Pseudo-elements</a>     <ul>      <li><a href="#first-line">7.1. The ::first-line pseudo-element</a>      <li><a href="#first-letter">7.2. The ::first-letter pseudo-element</a>      <li><a href="#UIfragments">7.3. The ::selection pseudo-element</a>      <li><a href="#gen-content">7.4. The ::before and ::after pseudo-elements</a></li>     </ul>    <li class="tocline2"><a href="#combinators">8. Combinators</a>     <ul class="toc">      <li class="tocline3"><a href="#descendant-combinators">8.1. Descendant combinators</a>      <li class="tocline3"><a href="#child-combinators">8.2. Child combinators</a>      <li class="tocline3"><a href="#sibling-combinators">8.3. Sibling combinators</a>       <ul class="toc">        <li class="tocline4"><a href="#adjacent-sibling-combinators">8.3.1. Adjacent sibling combinator</a>        <li class="tocline4"><a href="#general-sibling-combinators">8.3.2. General sibling combinator</a></li>       </ul>      </li>     </ul>    <li class="tocline2"><a href="#specificity">9. Calculating a selector\'s specificity</a>    <li class="tocline2"><a href="#w3cselgrammar">10. The grammar of Selectors</a>     <ul class="toc">      <li class="tocline3"><a href="#grammar">10.1. Grammar</a>      <li class="tocline3"><a href="#lex">10.2. Lexical scanner</a></li>     </ul>    <li class="tocline2"><a href="#downlevel">11. Namespaces and down-level clients</a>    <li class="tocline2"><a href="#profiling">12. Profiles</a>    <li><a href="#Conformance">13. Conformance and requirements</a>    <li><a href="#Tests">14. Tests</a>    <li><a href="#ACKS">15. Acknowledgements</a>    <li class="tocline2"><a href="#references">16. References</a>   </ul>  </div>';
			window.htmlStr = '<p class="copyright"><a   href="http://www.w3.org/Consortium/Legal/ipr-notice#Copyright">   Copyright</a> &copy; 2005 <a href="http://www.w3.org/"><abbr   title="World Wide Web Consortium">W3C</abbr></a><sup>&reg;</sup>   (<a href="http://www.csail.mit.edu/"><abbr title="Massachusetts   Institute of Technology">MIT</abbr></a>, <a   href="http://www.ercim.org/"><acronym title="European Research   Consortium for Informatics and Mathematics">ERCIM</acronym></a>, <a   href="http://www.keio.ac.jp/">Keio</a>), All Rights Reserved.  W3C   <a   href="http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">liability</a>,   <a   href="http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">trademark</a>,   <a   href="http://www.w3.org/Consortium/Legal/copyright-documents">document   use</a> rules apply.';
			window.nodeList1 = new glow.NodeList(htmlStr);
			window.nodeList2 = new glow.NodeList(nodeList1);
			window.nodeList3 = new glow.NodeList(htmlForTest);
		}
	},
	'Creating NodeLists via selector (324 elms)': new woosh.TimeTest(1, function() {
		return new glow.NodeList('#htmlForTest p').length;
	}),
	'Creating NodeLists via html collection (1778 elms)': new woosh.TimeTest(1, function() {
		return new glow.NodeList(largeHtmlCollection).length;
	}),
	'Creating NodeLists via ID selector': new woosh.TimeTest(1, function() {
		return new glow.NodeList('#htmlForTest').length;
	}),
	'Creating NodeLists via single element': new woosh.TimeTest(1, function() {
		return new glow.NodeList(htmlForTest).length;
	}),
	'Creating NodeLists via large html string': new woosh.TimeTest(1, function() {
		return new glow.NodeList(largeHtmlStr).length;
	}),
	'Creating NodeLists via regular html string': new woosh.TimeTest(1, function() {
		return new glow.NodeList(htmlStr).length;
	}),
	'Equality of equal NodeLists': new woosh.TimeTest(1, function() {
		return nodeList1.eq(nodeList2);
	}),
	'Equality of unequal NodeLists': new woosh.TimeTest(1, function() {
		return nodeList1.eq(nodeList3);
	}),
	'slice': new woosh.TimeTest(1, function() {
		var len = 0;
		len += nodeList1.slice(-1).length;
		len += nodeList1.slice(0).length;
		len += nodeList1.slice(3, 6).length;
		return len;
	}),
	'item': new woosh.TimeTest(1, function() {
		var len = 0;
		len += nodeList1.item(-1).length;
		len += nodeList1.item(0).length;
		len += nodeList1.item(1).length;
		return len;
	}),
	'each': new woosh.TimeTest(1, function() {
		var len = 0;
		nodeList1.each(function() {
			len++;
		})
		return len;
	}),
	'filter': new woosh.TimeTest(1, function() {
		return nodeList1.filter(function() {
			return true;
		}).length;
	})
});