//# sourceMappingURL=bootstrap-scrollspy.js.map
+function(b){function c(a,h){var g=b.proxy(this.process,this);this.$body=b("body");this.$scrollElement=b(a).is("body")?b(window):b(a);this.options=b.extend({},c.DEFAULTS,h);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",g);this.refresh();this.process()}function l(a){return this.each(function(){var h=b(this),g=h.data("bs.scrollspy"),d="object"==typeof a&&a;g||h.data("bs.scrollspy",
g=new c(this,d));if("string"==typeof a)g[a]()})}c.VERSION="3.3.2";c.DEFAULTS={offset:10};c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};c.prototype.refresh=function(){var a="offset",c=0;b.isWindow(this.$scrollElement[0])||(a="position",c=this.$scrollElement.scrollTop());this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();var g=this;this.$body.find(this.selector).map(function(){var d=
b(this),d=d.data("target")||d.attr("href"),e=/^#./.test(d)&&b(d);return e&&e.length&&e.is(":visible")&&[[e[a]().top+c,d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){g.offsets.push(this[0]);g.targets.push(this[1])})};c.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.getScrollHeight(),c=this.options.offset+b-this.$scrollElement.height(),d=this.offsets,e=this.targets,k=this.activeTarget,f;this.scrollHeight!=b&&this.refresh();if(a>=c)return k!=
(f=e[e.length-1])&&this.activate(f);if(k&&a<d[0])return this.activeTarget=null,this.clear();for(f=d.length;f--;)k!=e[f]&&a>=d[f]&&(!d[f+1]||a<=d[f+1])&&this.activate(e[f])};c.prototype.activate=function(a){this.activeTarget=a;this.clear();a=b(this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]').parents("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active"));a.trigger("activate.bs.scrollspy")};c.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,
".active").removeClass("active")};var m=b.fn.scrollspy;b.fn.scrollspy=l;b.fn.scrollspy.Constructor=c;b.fn.scrollspy.noConflict=function(){b.fn.scrollspy=m;return this};b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var a=b(this);l.call(a,a.data())})})}(jQuery);