"use strict";(self["webpackChunkvue_3_crud"]=self["webpackChunkvue_3_crud"]||[]).push([[629],{1629:function(e,t,i){i.r(t),i.d(t,{default:function(){return N}});var s=i(6252),l=i(9963),n=i(3577),c=i(8297),o=i(6481),_=i(5093),a=i(6159),r=i(2675),d=i(970);const u={class:"flex"},g={class:"filter_background"},h={class:"filter_text_title"},v={key:0},m=["id","value"],w={class:"videos"},k={class:"main_video_box"},p=["href"],f={class:"flex"},x=["src","alt"],b={class:"channel_box"},Z=["href"],y={class:"date"},D={class:"date"},z={class:"flex_1"},V=(0,s._)("img",{src:_,class:"icon"},null,-1),C={class:"digit"},A={class:"flex_1"},L=(0,s._)("img",{src:a,class:"icon"},null,-1),U={class:"digit"},$={class:"flex_1"},H=(0,s._)("img",{src:r,class:"icon"},null,-1),I={class:"digit"},K={class:"flex_1"},Y=(0,s._)("img",{src:d,class:"icon"},null,-1),q={class:"digit"};function G(e,t,i,_,a,r){return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",g,[(0,s._)("p",h,[(0,s.Uk)(" 篩選條件 "),a.is_show_list?((0,s.wg)(),(0,s.iD)("img",{key:0,src:c,class:"filter_plus_minus",onClick:t[0]||(t[0]=(...e)=>r.click_show_list&&r.click_show_list(...e))})):((0,s.wg)(),(0,s.iD)("img",{key:1,src:o,class:"filter_plus_minus",onClick:t[1]||(t[1]=(...e)=>r.click_show_list&&r.click_show_list(...e))}))]),a.is_show_list?((0,s.wg)(),(0,s.iD)("ul",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.list,(i=>((0,s.wg)(),(0,s.iD)("p",{class:"filter_text",key:i},[(0,s.wy)((0,s._)("input",{type:"radio",onClick:t[2]||(t[2]=e=>r.click_on_radio_list(e)),id:i.text,value:i.text,"onUpdate:modelValue":t[3]||(t[3]=t=>e.list_select=t)},null,8,m),[[l.G2,e.list_select]]),(0,s.Uk)(" "+(0,n.zw)(i.text),1)])))),128))])):(0,s.kq)("",!0)]),(0,s._)("div",w,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.videos,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.title},[(0,s._)("div",k,[(0,s._)("div",null,[(0,s._)("a",{href:r.video_id_to_link(e.video_id),class:"title"},(0,n.zw)(e.title),9,p),(0,s._)("div",f,[(0,s._)("img",{src:e.thumbnail_link,alt:e.title,class:"pic"},null,8,x),(0,s._)("div",b,[(0,s._)("a",{href:r.channel_id_to_link(e.channel_id),class:"channel_title"},"頻道: "+(0,n.zw)(e.channel_title),9,Z),(0,s._)("p",y,"發布時間: "+(0,n.zw)(e.publish_at),1),(0,s._)("p",D,"發燒日期: "+(0,n.zw)(e.trending_date),1)]),(0,s._)("div",null,[(0,s._)("div",z,[V,(0,s._)("p",C," : "+(0,n.zw)(e.view_count),1)]),(0,s._)("div",A,[L,(0,s._)("p",U," : "+(0,n.zw)(e.likes),1)]),(0,s._)("div",$,[H,(0,s._)("p",I," : "+(0,n.zw)(e.dislikes),1)]),(0,s._)("div",K,[Y,(0,s._)("p",q," : "+(0,n.zw)(e.comment_count),1)])])])])])])))),128))])])])}var j=i(7417);class B{getAll(){return j.Z.get("/mx_videotrending")}get(e){return j.Z.get(`/mx_videotrending/${e}`)}getView(){return j.Z.get("/mx_videotrending/view_count")}getLikes(){return j.Z.get("/mx_videotrending/likes")}getDislikes(){return j.Z.get("/mx_videotrending/dislikes")}getComment(){return j.Z.get("/mx_videotrending/comment_count")}create(e){return j.Z.post("/mx_videotrending",e)}update(e,t){return j.Z.put(`/mx_videotrending/${e}`,t)}delete(e){return j.Z["delete"](`/mx_videotrending/${e}`)}deleteAll(){return j.Z["delete"]("/mx_videotrending")}}var E=new B,F={data(){return{videos:[],list:[{text:"前十最多觀看"},{text:"前十最多喜歡"},{text:"前十最多不喜歡"},{text:"前十留言數最多"}],is_show_list:!1}},methods:{click_show_list(){this.is_show_list=!this.is_show_list},click_on_radio_list(e){console.log(e.target._value),"前十最多觀看"==e.target._value?this.search_view():"前十最多喜歡"==e.target._value?this.search_likes():"前十最多不喜歡"==e.target._value?this.search_dislikes():"前十留言數最多"==e.target._value&&this.search_comment()},search_view(){E.getView().then((e=>{this.videos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},search_likes(){E.getLikes().then((e=>{this.videos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},search_dislikes(){E.getDislikes().then((e=>{this.videos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},search_comment(){E.getComment().then((e=>{this.videos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},video_id_to_link(e){return"https://www.youtube.com/watch?v="+e},channel_id_to_link(e){return"https://www.youtube.com/channel/"+e},retrieveVideos(){E.getAll().then((e=>{this.videos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},refreshList(){this.retrieveVideos(),this.currentVideo=null,this.currentIndex=-1},setActiveVideo(e,t){this.currentVideo=e,this.currentIndex=e?t:-1},removeAllVideos(){E.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))}}},J=i(3744);const M=(0,J.Z)(F,[["render",G]]);var N=M},8297:function(e,t,i){e.exports=i.p+"img/minus.5a97cff3.svg"},6481:function(e,t,i){e.exports=i.p+"img/plus.d22b316c.svg"},970:function(e,t,i){e.exports=i.p+"img/comment.51367b75.png"},2675:function(e,t,i){e.exports=i.p+"img/dislike.7f27766f.png"},6159:function(e,t,i){e.exports=i.p+"img/like.907f83ef.png"},5093:function(e,t,i){e.exports=i.p+"img/play.93a368a7.png"}}]);
//# sourceMappingURL=629.c5e4e702.js.map