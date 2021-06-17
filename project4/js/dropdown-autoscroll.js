var maxHeight = 400;

$(function(){
    $(".dropdown > li").hover(function(){
        var $container = $(this),
        $list = $container.find("ul"),
        $anchor = $container.find("a"),
        height = $list.height() * 1.1,
        multiplier = height/maxHeight;

        $container.data("originalHeight",$container.height());

        $anchor.addClass("hover");

        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });

            if(multiplier>1){
                $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                .mousemove(function(e){
                    var offest = $container.offset();
                    var relativeY=((e.pageY-offest.top)*multiplier)-($container.data("origHeight")*multiplier);
                    if(relativeY >$container.data("origHeight")){
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    };
                });
            }
    }, function(){
        var $el = $(this);
        $el
        .height($(this).data("origHeight"))
        .find("ul")
        .css({top: 0})
        .hide()
        .end()
        .find("a")
        .removeclass("hover");
    });

    $(".dropdown > li:has('ul)").each(function(){
        $(this).find("a:first").append("<img src='imgs/down-arrow.png' />");
    });
});
