"use strict";$(".main-list-container section").each(function(){var s=($(this).find("ul").width(),$(this).find("ul").children().length),t=100/s;$(".main-list-containe li").css("width",t+"%"),$(this).find("li").hover(function(){$(this).toggleClass("hover");var t=1.8*$(this).width(),i=(t-$(this).width())/2,n=$(this).parent().children();$(this).css("transform","scale(1.8)"),$(this).is(":nth-child(1)")&&n.slice(1,s).css("transform","translate("+2*i+"px,  0px)");for(var h=2;h<=s-1;h++)$(this).is(":nth-child("+h+")")&&n.slice(0,h-1).css("transform","translate(-"+i+"px,  0px)").end().slice(h).css("transform","translate("+i+"px,  0px)");$(this).is(":nth-child("+s+")")&&n.slice(0,s-1).css("transform","translate(-"+2*i+"px,  0px)")},function(){$(this).toggleClass("hover"),$(this).css("transform","scale(1)"),$("li").not(this).css("transform","translate(0px,  0px)")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJlYWNoIiwibkxpIiwidGhpcyIsImZpbmQiLCJ3aWR0aCIsImNoaWxkcmVuIiwibGVuZ3RoIiwid0VsZW1lbnQiLCJjc3MiLCJob3ZlciIsInRvZ2dsZUNsYXNzIiwid0JpZ0VsZW1lbnQiLCJ0cmFuc2xhdGlvbiIsIml0ZW0iLCJwYXJlbnQiLCJpcyIsInNsaWNlIiwiaSIsImVuZCIsIm5vdCJdLCJtYXBwaW5ncyI6IllBRUFBLEdBQUEsZ0NBQUFDLEtBQUEsV0FJQSxHQUNBQyxJQURBRixFQUFBRyxNQUFBQyxLQUFBLE1BQUFDLFFBQ0FMLEVBQUFHLE1BQUFDLEtBQUEsTUFBQUUsV0FBQUMsUUFDQUMsRUFBQSxJQUFBTixDQUVBRixHQUFBLDBCQUFBUyxJQUFBLFFBQUFELEVBQUEsS0FJQVIsRUFBQUcsTUFBQUMsS0FBQSxNQUFBTSxNQUdBLFdBQ0FWLEVBQUFHLE1BQUFRLFlBQUEsUUFFQSxJQUNBQyxHQURBLElBQ0FaLEVBQUFHLE1BQUFFLFFBQ0FRLEdBQUFELEVBQUFaLEVBQUFHLE1BQUFFLFNBQUEsRUFFQVMsRUFBQWQsRUFBQUcsTUFBQVksU0FBQVQsVUFFQU4sR0FBQUcsTUFBQU0sSUFBQSxZQUFBLGNBRUFULEVBQUFHLE1BQUFhLEdBQUEsa0JBQ0FGLEVBQUFHLE1BQUEsRUFBQWYsR0FBQU8sSUFBQSxZQUFBLGFBQUEsRUFBQUksRUFBQSxZQUdBLEtBQUEsR0FBQUssR0FBQSxFQUFBQSxHQUFBaEIsRUFBQSxFQUFBZ0IsSUFDQWxCLEVBQUFHLE1BQUFhLEdBQUEsY0FBQUUsRUFBQSxNQUNBSixFQUFBRyxNQUFBLEVBQUFDLEVBQUEsR0FBQVQsSUFBQSxZQUFBLGNBQUFJLEVBQUEsYUFDQU0sTUFBQUYsTUFBQUMsR0FBQVQsSUFBQSxZQUFBLGFBQUFJLEVBQUEsWUFJQWIsR0FBQUcsTUFBQWEsR0FBQSxjQUFBZCxFQUFBLE1BQ0FZLEVBQUFHLE1BQUEsRUFBQWYsRUFBQSxHQUFBTyxJQUFBLFlBQUEsY0FBQSxFQUFBSSxFQUFBLGNBS0EsV0FDQWIsRUFBQUcsTUFBQVEsWUFBQSxTQUNBWCxFQUFBRyxNQUFBTSxJQUFBLFlBQUEsWUFDQVQsRUFBQSxNQUFBb0IsSUFBQWpCLE1BQUFNLElBQUEsWUFBQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZWxlY3QgdGhlIHN0cmlwXHJcblxyXG4kKFwiLm1haW4tbGlzdC1jb250YWluZXIgc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIGNoYW5nZSB0aGUgbnVtYmVyIG9mIHRoZSBcImxpXCIgZWxlbWVudHMgYW5kIHRoZSBzdHJpcCB3aWxsIGJlIGZpbmUgYW55d2F5XHJcblxyXG4gICAgdmFyIHdVbCA9ICQodGhpcykuZmluZChcInVsXCIpLndpZHRoKCk7XHJcbiAgICB2YXIgbkxpID0gJCh0aGlzKS5maW5kKFwidWxcIikuY2hpbGRyZW4oKS5sZW5ndGg7XHJcbiAgICB2YXIgd0VsZW1lbnQgPSAxMDAgLyBuTGk7XHJcblxyXG4gICAgJChcIi5tYWluLWxpc3QtY29udGFpbmUgbGlcIikuY3NzKFwid2lkdGhcIiwgd0VsZW1lbnQgKyBcIiVcIik7XHJcblxyXG4gICAgLy8gaG92ZXIgXCJsaVwiXHJcblxyXG4gICAgJCh0aGlzKS5maW5kKFwibGlcIikuaG92ZXIoXHJcblxyXG4gICAgICAgIC8vIG1vdXNlIEluXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJob3ZlclwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY2FsZUZhY3RvciA9IDEuODtcclxuICAgICAgICAgICAgdmFyIHdCaWdFbGVtZW50ID0gJCh0aGlzKS53aWR0aCgpICogc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9ICh3QmlnRWxlbWVudCAtICQodGhpcykud2lkdGgoKSkgLyAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcInRyYW5zZm9ybVwiLCBcInNjYWxlKFwiICsgc2NhbGVGYWN0b3IgKyBcIilcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5pcyhcIjpudGgtY2hpbGQoMSlcIikpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2xpY2UoMSwgbkxpKS5jc3MoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB0cmFuc2xhdGlvbiAqIDIgKyBcInB4LCAgMHB4KVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPD0gbkxpIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5pcyhcIjpudGgtY2hpbGQoXCIgKyBpICsgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zbGljZSgwLCBpIC0gMSkuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC1cIiArIHRyYW5zbGF0aW9uICsgXCJweCwgIDBweClcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVuZCgpLnNsaWNlKGkpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHRyYW5zbGF0aW9uICsgXCJweCwgIDBweClcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOm50aC1jaGlsZChcIiArIG5MaSArIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zbGljZSgwLCAobkxpIC0gMSkpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtXCIgKyB0cmFuc2xhdGlvbiAqIDIgKyBcInB4LCAgMHB4KVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbW91c2UgT3V0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcInRyYW5zZm9ybVwiLCBcInNjYWxlKDEpXCIpO1xyXG4gICAgICAgICAgICAkKFwibGlcIikubm90KHRoaXMpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwcHgsICAwcHgpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0pOyJdfQ==
