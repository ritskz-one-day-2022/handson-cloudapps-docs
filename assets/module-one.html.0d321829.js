import{r as l,o as r,c as t,a as n,b as e,F as o,e as p,d as s}from"./app.9b420d4b.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var i="/handson-cloudapps-docs/images/module-one_npm-start-success.png",u="/handson-cloudapps-docs/images/module-one_directory-structure.png";const b={},m=p(`<h1 id="step-1-web-\u30A2\u30D5\u309A\u30EA\u306E\u958B\u767A\u6E96\u5099\u3092\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#step-1-web-\u30A2\u30D5\u309A\u30EA\u306E\u958B\u767A\u6E96\u5099\u3092\u3059\u308B" aria-hidden="true">#</a> STEP 1: WEB \u30A2\u30D7\u30EA\u306E\u958B\u767A\u6E96\u5099\u3092\u3059\u308B</h1><p>\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3068\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u306E\u958B\u767A\u6E96\u5099\u3092\u884C\u3044\u307E\u3059\u3002</p><h2 id="\u306F\u3057\u3099\u3081\u306B" tabindex="-1"><a class="header-anchor" href="#\u306F\u3057\u3099\u3081\u306B" aria-hidden="true">#</a> \u306F\u3058\u3081\u306B</h2><p>Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u5927\u304D\u304F \u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9 \u3068 \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9 \u306E\uFF12\u3064\u306E\u958B\u767A\u9818\u57DF\u306B\u5206\u304B\u308C\u307E\u3059\u3002<br> \u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u306F\u30E6\u30FC\u30B6\u30FC\u304C\u76F4\u63A5\u76EE\u306B\u3059\u308B\u90E8\u5206\u3067\u3059\u3002\u753B\u9762\u306E\u8868\u793A\u3084\u64CD\u4F5C\u306E\u53D7\u4ED8\u3092\u884C\u3044\u307E\u3059\u3002<br> \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u306F\u30E6\u30FC\u30B6\u30FC\u306E\u76EE\u306B\u898B\u3048\u306A\u3044\u90E8\u5206\u3067\u3059\u3002\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u5074\u304B\u3089\u30C7\u30FC\u30BF\u3084\u6307\u793A\u3092\u53D7\u3051\u4ED8\u3051\u3001\u8A08\u7B97\u3084\u5909\u63DB\u306A\u3069\u306E\u51E6\u7406\u3092\u884C\u3063\u305F\u308A\u3001\u30B9\u30C8\u30EC\u30FC\u30B8\u3084\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306A\u3069\u3067\u30C7\u30FC\u30BF\u306E\u4FDD\u5B58\u3084\u8AAD\u307F\u51FA\u3057\u3092\u884C\u3044\u307E\u3059\u3002<br></p><p>\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u4EE5\u4E0B\uFF12\u70B9\u3092\u9032\u3081\u3066\u3044\u304D\u307E\u3059\u3002</p><ul><li>\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u306E\u96DB\u5F62\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002<br> \u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u306E\u5B9F\u88C5\u306B\u306F React \u3068\u3044\u3046\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002<br></li><li>\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u74B0\u5883\u306E\u69CB\u7BC9\u6E96\u5099\u3092\u884C\u3044\u307E\u3059\u3002<br> \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u306B\u306F AWS \u306E\u30B5\u30FC\u30D3\u30B9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u307E\u305F\u3001\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u306F Amplify \u3092\u4F7F\u7528\u3057\u3066\u69CB\u7BC9\u3057\u307E\u3059\u3002<br></li></ul><h2 id="\u5B66\u7FD2\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5B66\u7FD2\u5185\u5BB9" aria-hidden="true">#</a> \u5B66\u7FD2\u5185\u5BB9</h2><ul><li>\u65B0\u3057\u3044 React \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B</li><li>Amplify \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u521D\u671F\u5316\u3059\u308B</li></ul><h2 id="\u4E3B\u8981\u306A\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u306A\u6982\u5FF5" aria-hidden="true">#</a> \u4E3B\u8981\u306A\u6982\u5FF5</h2><ul><li><strong>React \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3</strong> \u2013 React \u306F Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u3001\u958B\u767A\u8005\u304C JavaScript \u3092\u4F7F\u7528\u3057\u3066\u9AD8\u6027\u80FD\u306E\u30B7\u30F3\u30B0\u30EB\u30DA\u30FC\u30B8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3059\u3070\u3084\u304F\u69CB\u7BC9\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002</li><li><strong>Amplify CLI</strong> \u2013 Amplify CLI \u306B\u3088\u308A\u3001\u7AEF\u672B\u304B\u3089\u76F4\u63A5 AWS \u306E\u30B5\u30FC\u30D3\u30B9\u3092\u4F5C\u6210\u3001\u7BA1\u7406\u3001\u524A\u9664\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u4ED6\u306B\u3082\u3001React \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 \u304C AWS \u30B5\u30FC\u30D3\u30B9\u3068\u306E\u9023\u643A\u306B\u5FC5\u8981\u306A\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3084\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u81EA\u52D5\u751F\u6210\u3057\u3066\u304F\u308C\u307E\u3059\u3002</li></ul><h2 id="\u5B9F\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B9F\u88C5" aria-hidden="true">#</a> \u5B9F\u88C5</h2><h3 id="react-\u30A2\u30D5\u309A\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210" tabindex="-1"><a class="header-anchor" href="#react-\u30A2\u30D5\u309A\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210" aria-hidden="true">#</a> React \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210</h3><p>\u7C21\u5358\u306B React \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001<code>create-react-app</code> \u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002<br> \u30B3\u30DE\u30F3\u30C9\u30D7\u30ED\u30F3\u30D7\u30C8 (Windows) \u307E\u305F\u306F\u30BF\u30FC\u30DF\u30CA\u30EB (macOS) \u4E0A\u3067\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u3053\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u4ECA\u56DE\u306F\u8AB0\u304C\u4F5C\u3063\u305F\u30A2\u30D7\u30EA\u306A\u306E\u304B\u5224\u5225\u3067\u304D\u308B\u3088\u3046\u306B\u30A2\u30D7\u30EA\u540D\u306E\u672B\u5C3E\u306B\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3059

npx create-react-app noteapp\uFF1C\u30E6\u30FC\u30B6\u30FC\u540D\uFF1E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7D9A\u3051\u3066\u3001\u4F5C\u6210\u3057\u305F React \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30ED\u30FC\u30AB\u30EB\u74B0\u5883\u3067\u5B9F\u884C\u3057\u3001\u6B63\u5E38\u306B\u52D5\u4F5C\u3059\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> noteapp\uFF1C\u30E6\u30FC\u30B6\u30FC\u540D\uFF1E
<span class="token function">npm</span> start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,16),d=s("\u203B "),h={href:"/images/module-one_nodejs-security-alert.png",target:"_blank",rel:"noopener noreferrer"},k=s("\u3053\u306E\u8B66\u544A"),f=s("\u304C\u51FA\u305F\u5834\u5408\u306F\u300C\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u300D\u306B\u2611\u3092\u3064\u3051\u3066\u300C\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF\u3059\u308B\u300D\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),y=n("br",null,null,-1),_=s("\u30D6\u30E9\u30A6\u30B6\u304C\u81EA\u52D5\u3067\u8D77\u52D5\u3057\u4E0B\u8A18\u306E\u753B\u9762\u304C\u8868\u793A\u3055\u308C\u308C\u3070\u6210\u529F\u3067\u3059\u3002 \u3082\u3057\u3001\u30D6\u30E9\u30A6\u30B6\u304C\u81EA\u52D5\u3067\u8D77\u52D5\u3057\u306A\u3044\u5834\u5408\u306F\u624B\u52D5\u3067\u30D6\u30E9\u30A6\u30B6\u3092\u8D77\u52D5\u3057\u3066\u304B\u3089\u300C"),g={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},v=s("http://localhost:3000/"),A=s("\u300D\u3078\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002 "),S=n("img",{src:i,alt:""},null,-1),w=p(`<p>\u4E00\u5EA6\u3001\u30B3\u30DE\u30F3\u30C9\u30D7\u30ED\u30F3\u30D7\u30C8 \u307E\u305F\u306F \u30BF\u30FC\u30DF\u30CA\u30EB\u306B\u623B\u308A\u300CCTRL + c\u300D\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u5B9F\u884C\u3092\u505C\u6B62\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Terminate batch job <span class="token punctuation">(</span>Y/N<span class="token punctuation">)</span>? Y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="amplify-cli-\u3092\u8A2D\u5B9A\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#amplify-cli-\u3092\u8A2D\u5B9A\u3059\u308B" aria-hidden="true">#</a> Amplify CLI \u3092\u8A2D\u5B9A\u3059\u308B</h3><p>CLI \u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001<code>amplify configure</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306B\u57FA\u3065\u3044\u3066\u3001Amplify CLI \u306F\u30B5\u30FC\u30D3\u30B9\u306E\u4F5C\u6210\u3001\u7BA1\u7406\u3001\u524A\u9664\u3092\u884C\u3044\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>amplify configure

<span class="token comment"># 1. amplify configure \u3092\u5B9F\u884C\u3059\u308B\u3068\u30D6\u30E9\u30A6\u30B6\u304C\u52DD\u624B\u306B\u8D77\u52D5\u3057\u300CAWS \u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u30B3\u30F3\u30BD\u30FC\u30EB\u300D\u304C\u958B\u304D\u307E\u3059\u3002</span>
<span class="token comment"># \u3053\u306E\u6BB5\u968E\u3067\u306F\u4F7F\u308F\u306A\u3044\u306E\u3067\u9589\u3058\u3066\u3057\u307E\u3063\u3066\u3082\u554F\u984C\u306A\u3044\u3067\u3059\u3002</span>
<span class="token comment"># \u30B3\u30DE\u30F3\u30C9\u30D7\u30ED\u30F3\u30D7\u30C8 \u307E\u305F\u306F \u30BF\u30FC\u30DF\u30CA\u30EB\u306B\u623B\u308A\u300CEnter\u300D\u3092\u62BC\u3057\u3066\u7D9A\u884C\u3057\u307E\u3057\u3087\u3046</span>

<span class="token comment"># 2. \u30EA\u30FC\u30B8\u30E7\u30F3 \u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u30EA\u30FC\u30B8\u30E7\u30F3\u306F AWS \u30B5\u30FC\u30D3\u30B9\u3092\u904B\u7528\u3059\u308B\u6A5F\u5668\u304C\u53CE\u5BB9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30BB\u30F3\u30BF\u30FC\u306E\u6240\u5728\u5730\u3067\u3059\u3002</span>
<span class="token comment"># \u3053\u3053\u3067\u9078\u629E\u3057\u305F\u30EA\u30FC\u30B8\u30E7\u30F3\u306B AWS \u30B5\u30FC\u30D3\u30B9\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002</span>
<span class="token comment"># ap-northeast-1\uFF08\u6771\u4EAC\uFF09\u3092\u9078\u629E\u3057\u307E\u3059\u3002\u300C\u77E2\u5370\u30AD\u30FC\u300D\u3067\u9078\u629E\u3057\u300CEnter\u300D\u3067\u6C7A\u5B9A\u3067\u3059\u3002</span>
Specify the AWS Region
? region:  ap-northeast-1

<span class="token comment"># 3. \u30E6\u30FC\u30B6\u30FC\u540D\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u30E6\u30FC\u30B6\u30FC\u540D\u306F\u4E8B\u524D\u306B\u5171\u6709\u3057\u3066\u3042\u308B\u300CAWS\u30A2\u30AB\u30A6\u30F3\u30C8\u4E00\u89A7\u300D\u306E\uFF1C\u30E6\u30FC\u30B6\u30FC\u540D\uFF1E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002</span>
Specify the username of the new IAM user:
? user name:  \uFF1C\u30E6\u30FC\u30B6\u30FC\u540D\uFF1E

<span class="token comment"># 4. \u518D\u5EA6\u3001AWS\u3000\u306E\u30B5\u30A4\u30C8\u304C\u958B\u304D\u307E\u3059\u304C\u3053\u3061\u3089\u3082\u9589\u3058\u3066\u3057\u307E\u3063\u3066\u554F\u984C\u306A\u3044\u3067\u3059\u3002</span>
<span class="token comment"># \u300CEnter\u300D\u3092\u62BC\u3057\u3066\u7D9A\u884C\u3057\u307E\u3057\u3087\u3046\u3002</span>

<span class="token comment"># 5. \u30A2\u30AF\u30BB\u30B9\u30AD\u30FC ID \u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u30A2\u30AF\u30BB\u30B9\u30AD\u30FC ID \u306F\u4E8B\u524D\u306B\u914D\u5E03\u3057\u3066\u3042\u308B\u300CAWS\u30A2\u30AB\u30A6\u30F3\u30C8\u4E00\u89A7.csv\u300D\u306E\uFF1CAccess key ID\uFF1E\u3092\u30B3\u30D4\u30FC\u3057\u3066\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002</span>
<span class="token comment"># Windows\u306E\u30B3\u30DE\u30F3\u30C9\u30D7\u30ED\u30F3\u30D7\u30C8\u306B\u5F35\u308A\u4ED8\u3051\u308B\u5834\u5408\u306F\u3001\u30B3\u30D4\u30FC\u5F8C\u3001\u30B3\u30DE\u30F3\u30C9\u30D7\u30ED\u30F3\u30D7\u30C8\u4E0A\u3067\u300C\u53F3\u30AF\u30EA\u30C3\u30AF\u300D\u3067\u3059\u3002</span>
Enter the access key of the newly created user:
? accessKeyId:  \uFF1CAccess key ID\uFF1E\u8CBC\u308A\u4ED8\u3051

<span class="token comment"># 6. \u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u306F\u4E8B\u524D\u306B\u914D\u5E03\u3057\u3066\u3042\u308B\u300CAWS\u30A2\u30AB\u30A6\u30F3\u30C8\u4E00\u89A7.csv\u300D\u306E\uFF1CSecret access key\uFF1E\u3092\u30B3\u30D4\u30FC\u3057\u3066\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002</span>
? secretAccessKey:  \uFF1CSecret access key\uFF1E\u8CBC\u308A\u4ED8\u3051

<span class="token comment"># 7. \u3053\u3053\u307E\u3067\u306E\u8A2D\u5B9A\u60C5\u5831\uFF08\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\uFF09\u306B\u540D\u524D\u3092\u3064\u3051\u307E\u3059\u3002</span>
<span class="token comment"># \u5206\u304B\u308A\u3084\u3059\u3044\u540D\u524D\u3092\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u624B\u9806\u3067\u306F\u300Coneday-2022\u300D\u3068\u3057\u307E\u3059\u3002</span>
? Profile Name:  oneday-2022

<span class="token comment"># \u4EE5\u4E0A\u3067\u8A2D\u5B9A\u306F\u5B8C\u4E86\u3067\u3059\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="amplify-\u3092\u521D\u671F\u5316\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#amplify-\u3092\u521D\u671F\u5316\u3059\u308B" aria-hidden="true">#</a> Amplify \u3092\u521D\u671F\u5316\u3059\u308B</h3><p>\u5148\u307B\u3069\u4F5C\u6210\u3057\u305F <code>noteapp\uFF1C\u30E6\u30FC\u30B6\u30FC\u540D\uFF1E</code> \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u5185\u3067\u3001<code>amplify init</code>\u3092\u4F7F\u7528\u3057\u3001Amplify \u306E\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u74B0\u5883\u3092\u521D\u671F\u5316\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>amplify init --permissions-boundary arn:aws:iam::\uFF1CAWS\u74B0\u5883\u306E\u30A2\u30AB\u30A6\u30F3\u30C8ID\uFF1E:policy/OneDayIntern2022Boundary

<span class="token comment"># 1. Amplify \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u4ECA\u56DE\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u300Cnoteapp\uFF1C\u30E6\u30FC\u30B6\u30FC\u540D\uFF1E\u300D\u3092\u305D\u306E\u307E\u307E\u8A2D\u5B9A\u3057\u305F\u3044\u306E\u3067\u3001\u4F55\u3082\u5165\u529B\u305B\u305A\u300CEnter\u300D\u3092\u62BC\u3057\u307E\u3057\u3087\u3046\u3002</span>
Note: It is recommended to run this <span class="token builtin class-name">command</span> from the root of your app directory
? Enter a name <span class="token keyword">for</span> the project <span class="token punctuation">(</span>noteappintern<span class="token punctuation">)</span> 

Project information
<span class="token operator">|</span> Name: noteappintern
<span class="token operator">|</span> Environment: dev
<span class="token operator">|</span> Default editor: Visual Studio Code
<span class="token operator">|</span> App type: javascript
<span class="token operator">|</span> Javascript framework: react
<span class="token operator">|</span> Source Directory Path: src
<span class="token operator">|</span> Distribution Directory Path: build
<span class="token operator">|</span> Build Command: <span class="token function">npm</span> run-script build
<span class="token operator">|</span> Start Command: <span class="token function">npm</span> run-script start

<span class="token comment"># 2. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u60C5\u5831\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u4ECA\u56DE\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u554F\u984C\u306A\u3044\u305F\u3081\u300CY\u300D\u3092\u5165\u529B\u5F8C\u306B\u300CEnter\u300D\u3092\u62BC\u3057\u307E\u3057\u3087\u3046\u3002</span>
<span class="token comment"># \u3082\u3057\u3001\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u300CVisual Studio Code\u300D\u3092\u4F7F\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u300Cn\u300D\u3092\u5165\u529B\u5F8C\u306B\u300CEnter\u300D\u3092\u62BC\u3057\u3066\u300C? Choose your default editor\u300D\u3067\u4EFB\u610F\u306E\u30A8\u30C7\u30A3\u30BF\u30FC\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002</span>
? Initialize the project with the above configuration? <span class="token punctuation">(</span>Y/n<span class="token punctuation">)</span>
Using default provider  awscloudformation

<span class="token comment"># 3. AWS\u3000\u3078\u306E\u63A5\u7D9A\u65B9\u5F0F\u3092\u9078\u629E\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u300CAWS profile\u300D\u3092\u9078\u629E\u3057\u300CEnter\u300D\u3092\u62BC\u3057\u3066\u7D9A\u884C\u3057\u307E\u3057\u3087\u3046\u3002</span>
? Select the authentication method you want to use: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> AWS profile

<span class="token comment"># 4. AWS profile\u3000\u3092\u9078\u629E\u3057\u307E\u3059\u3002</span>
<span class="token comment"># \u5148\u307B\u3069\u300CAmplify CLI \u3092\u8A2D\u5B9A\u3059\u308B\u300D\u3067\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u300CEnter\u300D\u3092\u62BC\u3057\u3066\u7D9A\u884C\u3057\u307E\u3057\u3087\u3046\u3002</span>
? Please choose the profile you want to use
<span class="token operator">&gt;</span> oneday-2022

<span class="token comment"># \u3057\u3070\u3089\u304F\u5F85\u3063\u3066\u3001\u4E0B\u306E\u3088\u3046\u306A\u8868\u793A\u304C\u51FA\u305F\u3089\u6210\u529F\u3067\u3059\u3002</span>

<span class="token punctuation">..</span>. \u7701\u7565

Your project has been successfully initialized and connected to the cloud<span class="token operator">!</span>

Some next steps:
<span class="token string">&quot;amplify status&quot;</span> will show you what you<span class="token string">&#39;ve added already and if it&#39;</span>s locally configured or deployed
<span class="token string">&quot;amplify add &lt;category&gt;&quot;</span> will allow you to <span class="token function">add</span> features like user login or a backend API
<span class="token string">&quot;amplify push&quot;</span> will build all your <span class="token builtin class-name">local</span> backend resources and provision it <span class="token keyword">in</span> the cloud
<span class="token string">&quot;amplify console&quot;</span> to <span class="token function">open</span> the Amplify Console and view your project status
<span class="token string">&quot;amplify publish&quot;</span> will build all your <span class="token builtin class-name">local</span> backend and frontend resources <span class="token punctuation">(</span>if you have hosting category added<span class="token punctuation">)</span> and provision it <span class="token keyword">in</span> the cloud

Pro tip:
Try <span class="token string">&quot;amplify add api&quot;</span> to create a backend API and <span class="token keyword">then</span> <span class="token string">&quot;amplify push&quot;</span> to deploy everything

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h1 id="\u307E\u3068\u3081" tabindex="-1"><a class="header-anchor" href="#\u307E\u3068\u3081" aria-hidden="true">#</a> \u307E\u3068\u3081</h1>`,9),W=s("\u4EE5\u4E0A\u3067 Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u6E96\u5099\u306F\u6574\u3044\u307E\u3057\u305F\u3002"),x=n("br",null,null,-1),I=s(" \u6700\u5F8C\u306B\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u300Cnoteapp\uFF1C\u30E6\u30FC\u30B6\u30FC\u540D\uFF1E\u300D\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u958B\u3044\u3066\u307F\u307E\u3057\u3087\u3046\u3002"),E=n("br",null,null,-1),C=s(" (\u53C2\u8003\uFF1A"),q={href:"/images/module-one_open-project.png",target:"_blank",rel:"noopener noreferrer"},j=s("Visual Studio Code\u3067\u306E\u958B\u304D\u65B9"),D=s(")"),R=n("br",null,null,-1),L=n("p",null,[s("\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u69CB\u6210\u306B\u306A\u3063\u3066\u3044\u308B\u306F\u305A\u3067\u3059\u3002 "),n("img",{src:u,alt:""})],-1),P=n("p",null,"\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306FAWS\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u4F7F\u3063\u3066\u3001\u4F5C\u6210\u3057\u305F Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306B\u516C\u958B\u3057\u307E\u3059\u3002",-1);function N(V,B){const a=l("ExternalLinkIcon");return r(),t(o,null,[m,n("p",null,[d,n("a",h,[k,e(a)]),f,y]),n("p",null,[_,n("a",g,[v,e(a)]),A,S]),w,n("p",null,[W,x,I,E,C,n("a",q,[j,e(a)]),D,R]),L,P],64)}var O=c(b,[["render",N]]);export{O as default};
