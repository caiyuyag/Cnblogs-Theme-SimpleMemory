"use strict";
(self.webpackChunkCnblogs_Theme_SimpleMemory = self.webpackChunkCnblogs_Theme_SimpleMemory || []).push([[9628], {
    8991: function(t, e, o) {
        function n(t) {
            return (t=>{
                t = t.replace(/[\r\n]/g, "");
                let e = $("#digg_count")
                  , o = t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\(([0-9]*)\).*评论\s*\(([0-9]*)\).*推荐\s*\(([0-9]*)\).*/) || t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\(([0-9]*)\).*评论\s*\(([0-9]*)\).*/) || t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);
                return {
                    date: void 0 === o[1] ? "1970-01-01 00:00" : o[1],
                    vnum: void 0 === o[2] ? "0" : o[2],
                    cnum: void 0 === o[3] ? "0" : o[3],
                    tnum: void 0 === o[4] ? e.length ? e.text() : "0" : o[4]
                }
            }
            )(t)
        }
        o.d(e, {
            Z: function() {
                return n
            }
        })
    },
    4726: function(t, e, o) {
        o.r(e),
        o.d(e, {
            default: function() {
                return s
            }
        });
        var n = o(8991);
        function s(t) {
            (()=>{
                $("#homeTopTitle span").text(t.__config.info.name);
                let e = t.__config.banner.home.title
                  , o = $("#hitokoto");
                if ($.isArray(e) && e.length > 0) {
                    let n = t.__tools.randomNum(0, e.length - 1);
                    return o.html(e[n]).css("display", "-webkit-box"),
                    t.__tools.setDomHomePosition(),
                    !0
                }
                if ("string" == typeof e && "" !== e)
                    return o.html(e).css("display", "-webkit-box"),
                    t.__tools.setDomHomePosition(),
                    !0;
                let n = ["每一个不曾起舞的日子，都是对生命的辜负。", "公主死去了，屠龙的少年还在燃烧", "我们听过无数的道理，却仍旧过不好这一生。", "生如夏花之绚烂，死如秋叶之静美。", "但凡不能杀死你的，最终都会使你更强大。", "好看的皮囊千篇一律，有趣的灵魂万里挑一。", "青春是一本太仓促的书，我们含着泪，一读再读。", "教育就是当一个人把在学校所学全部忘光之后剩下的东西。", "孤独不是一种脾性，而是一种无奈。", "有时候你以为天要塌下来了，其实是自己站歪了。", "温柔正确的人总是难以生存，因为这世界既不温柔，也不正确。", "死并非生的对立面，而作为生的一部分永存。", "不要努力成为一个成功者，要努力成为一个有价值的人。", "不要因为走得太远，忘了我们为什么出发。", "你的问题主要在于读书不多而想得太多。", "岁月不饶人，我亦未曾饶过岁月。", "当你凝视深渊时，深渊也在凝视着你。", "有的人25岁就死了，只是到75岁才埋葬"]
                  , s = {};
                if ("one" === t.__config.banner.home.titleSource)
                    s = {
                        async: !0,
                        crossDomain: !0,
                        url: "https://sentence.iciba.com/index.php?callback=onecallback&c=dailysentence&m=getdetail&title=" + t.__tools.getNowFormatDate(),
                        method: "POST",
                        dataType: "jsonp",
                        headers: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            TransCode: "030111",
                            OpenId: "123456789",
                            Body: ""
                        }
                    },
                    $.ajax(s).done((e=>{
                        if (0 === e.errno)
                            o.html(e.note).css("display", "-webkit-box"),
                            $("#hitokotoAuthor").text(e.content).show();
                        else {
                            let e = t.__tools.randomNum(0, n.length - 1);
                            o.html(n[e]).css("display", "-webkit-box")
                        }
                        return t.__tools.setDomHomePosition(),
                        !1
                    }
                    ));
                else
  					jinrishici.load(function(result) {
                        o.html(result.data.content).css("display", "-webkit-box"),
                        $("#hitokotoAuthor").text("《" + result.data.origin.title + "》 - " + result.data.origin.dynasty + " - " + result.data.origin.author).show();
    					console.log(result)
                        return t.__tools.setDomHomePosition(),
                        !1
                    });
            }
            )(),
            $(".scroll-down").click((function() {
                let e;
                e = $("#home").offset().top + 10,
                t.__tools.actScroll(e, 500)
            }
            )),
            (()=>{
                let t = $("#main .c_b_p_desc_readmore")
                  , e = $("#main .postTitle");
                function o(t) {
                    let e = (0,
                    n.Z)(t);
                    return '<span class="postMeta"><i class="simple-memory-iconfont simple-memory-icon-time1"></i>发表于 ' + e.date + '<i class="simple-memory-iconfont simple-memory-icon-browse"></i>阅读：' + e.vnum + '<i class="simple-memory-iconfont simple-memory-icon-interactive"></i>评论：' + e.cnum + '<i class="simple-memory-iconfont simple-memory-icon-hot"></i>推荐：' + e.tnum + "</span>"
                }
                t.text("阅读全文 ?"),
                $.each(e, (t=>{
                    let n = $(e[t])
                      , s = n.text()
                      , i = n.nextAll(".postDesc:eq(0)").text();
                    n.after(o(i)),
                    /\[置顶\]/.test(s) && n.append('<span class="postSticky">置顶</span>'),
                    n.find("a").text(s.replace("[置顶]", ""))
                }
                )),
                e = $("#main .entrylistPosttitle"),
                $.each(e, (t=>{
                    let n = $(e[t])
                      , s = n.nextAll(".entrylistItemPostDesc:eq(0)").text();
                    n.after(o(s))
                }
                ))
            }
            )(),
            (()=>{
                let t = $(".c_b_p_desc");
                $.each(t, (e=>{
                    let o = $(t[e])
                      , n = o.find("img.desc_img");
                    if (n.length > 0) {
                        let t = n.attr("src");
                        n.hide(),
                        o.css("width", "60%"),
                        o.parent("div").css("min-height", "150px");
                        let e = '<div class="c_b_p_desc_img"><div style="background: url(\'' + t + "') center center / contain no-repeat;\"></div></div>";
                        o.after(e)
                    }
                }
                ))
            }
            )(),
            t.__config.animate.homeBanner.enable && o.e(2089).then(o.t.bind(o, 3255, 23)).then((e=>{
                $(".main-header").circleMagic(t.__config.animate.homeBanner.options)
            }
            ))
        }
    }
}]);
