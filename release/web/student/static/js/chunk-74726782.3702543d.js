(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74726782"],{"4a0c":function(e,t,n){"use strict";var i=n("b775");t["a"]={select:function(e){return Object(i["a"])("/api/student/exam/paper/select/"+e)},pageList:function(e){return Object(i["a"])("/api/student/exam/paper/pageList",e)}}},"6cce":function(e,t,n){"use strict";n.r(t);n("b0c0");var i=function(){var e=this,t=e._self._c;return t("div",[t("el-row",{staticClass:"do-exam-title"},[t("el-col",{attrs:{span:24}},[e._l(e.answer.answerItems,(function(n){return t("span",{key:n.itemOrder},[t("el-tag",{staticClass:"do-exam-title-tag",attrs:{type:e.questionCompleted(n.completed)},on:{click:function(t){return e.goAnchor("#question-"+n.itemOrder)}}},[e._v(e._s(n.itemOrder))])],1)})),t("span",{staticClass:"do-exam-time"},[t("label",[e._v("剩余时间：")]),t("label",[e._v(e._s(e.formatSeconds(e.remainTime)))])])],2)],1),t("el-row",{staticClass:"do-exam-title-hidden"},[t("el-col",{attrs:{span:24}},[e._l(e.answer.answerItems,(function(n){return t("span",{key:n.itemOrder},[t("el-tag",{staticClass:"do-exam-title-tag"},[e._v(e._s(n.itemOrder))])],1)})),t("span",{staticClass:"do-exam-time"},[t("label",[e._v("剩余时间：")])])],2)],1),t("el-container",{staticClass:"app-item-contain"},[t("el-header",{staticClass:"align-center"},[t("h1",[e._v(e._s(e.form.name))]),t("div",[t("span",{staticClass:"question-title-padding"},[e._v("试卷总分："+e._s(e.form.score))]),t("span",{staticClass:"question-title-padding"},[e._v("考试时间："+e._s(e.form.suggestTime)+"分钟")])])]),t("el-main",[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:e.form,"label-width":"100px"}},[e._l(e.form.titleItems,(function(n,i){return t("el-row",{key:i},[t("h3",[e._v(e._s(n.name))]),0!==n.questionItems.length?t("el-card",{staticClass:"exampaper-item-box"},e._l(n.questionItems,(function(n){return t("el-form-item",{key:n.itemOrder,staticClass:"exam-question-item",attrs:{label:n.itemOrder+".","label-width":"50px",id:"question-"+n.itemOrder}},[t("QuestionEdit",{attrs:{qType:n.questionType,question:n,answer:e.answer.answerItems[n.itemOrder-1]}})],1)})),1):e._e()],1)})),t("el-row",{staticClass:"do-align-center"},[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),t("el-button",[e._v("取消")])],1)],2)],1)],1)],1)},a=[],s=n("5530"),r=(n("14d9"),n("2f62")),o=n("ed08"),l=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"line-height":"1.8"}},[1==e.qType?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[t("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),t("div",{staticClass:"q-content"},[t("el-radio-group",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.content,callback:function(t){e.$set(e.answer,"content",t)},expression:"answer.content"}},e._l(e.question.items,(function(n){return t("el-radio",{key:n.prefix,attrs:{label:n.prefix}},[t("span",{staticClass:"question-prefix"},[e._v(e._s(n.prefix)+".")]),t("span",{staticClass:"q-item-span-content",domProps:{innerHTML:e._s(n.content)}})])})),1)],1)]):2==e.qType?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[t("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),t("div",{staticClass:"q-content"},[t("el-checkbox-group",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.contentArray,callback:function(t){e.$set(e.answer,"contentArray",t)},expression:"answer.contentArray"}},e._l(e.question.items,(function(n){return t("el-checkbox",{key:n.prefix,attrs:{label:n.prefix}},[t("span",{staticClass:"question-prefix"},[e._v(e._s(n.prefix)+".")]),t("span",{staticClass:"q-item-span-content",domProps:{innerHTML:e._s(n.content)}})])})),1)],1)]):3==e.qType?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[t("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:e._s(e.question.title)}}),t("span",{staticStyle:{"padding-right":"10px"}},[e._v("(")]),t("el-radio-group",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.content,callback:function(t){e.$set(e.answer,"content",t)},expression:"answer.content"}},e._l(e.question.items,(function(n){return t("el-radio",{key:n.prefix,attrs:{label:n.prefix}},[t("span",{staticClass:"q-item-span-content",domProps:{innerHTML:e._s(n.content)}})])})),1),t("span",{staticStyle:{"padding-left":"10px"}},[e._v(")")])],1):4==e.qType?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[t("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),t("div",e._l(e.question.items,(function(n){return t("el-form-item",{key:n.prefix,staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{label:n.prefix,"label-width":"50px"}},[t("el-input",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.contentArray[n.prefix-1],callback:function(t){e.$set(e.answer.contentArray,n.prefix-1,t)},expression:"answer.contentArray[item.prefix-1]"}})],1)})),1)]):5==e.qType?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[t("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),t("div",[t("el-input",{attrs:{type:"textarea",rows:"5"},on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.content,callback:function(t){e.$set(e.answer,"content",t)},expression:"answer.content"}})],1)]):t("div")])},c=[],d=(n("a9e3"),{name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},answer:{type:Object,default:function(){return{id:null,content:"",contentArray:[]}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{}}),m=d,u=n("2877"),p=Object(u["a"])(m,l,c,!1,null,null,null),f=p.exports,v=n("4a0c"),g=n("ed24"),w={components:{QuestionEdit:f},data:function(){return{form:{},formLoading:!1,answer:{questionId:null,doTime:0,answerItems:[]},timer:null,remainTime:0}},created:function(){var e=this.$route.query.id,t=this;e&&0!==parseInt(e)&&(t.formLoading=!0,v["a"].select(e).then((function(e){t.form=e.response,t.remainTime=60*e.response.suggestTime,t.initAnswer(),t.timeReduce(),t.formLoading=!1})))},mounted:function(){},beforeDestroy:function(){window.clearInterval(this.timer)},methods:{formatSeconds:function(e){return Object(o["a"])(e)},timeReduce:function(){var e=this;this.timer=setInterval((function(){e.remainTime<=0?e.submitForm():(++e.answer.doTime,--e.remainTime)}),1e3)},questionCompleted:function(e){return this.enumFormat(this.doCompletedTag,e)},goAnchor:function(e){this.$el.querySelector(e).scrollIntoView({behavior:"instant",block:"center",inline:"nearest"})},initAnswer:function(){this.answer.id=this.form.id;var e=this.form.titleItems;for(var t in e){var n=e[t].questionItems;for(var i in n){var a=n[i];this.answer.answerItems.push({questionId:a.id,content:null,contentArray:[],completed:!1,itemOrder:a.itemOrder})}}},submitForm:function(){var e=this;window.clearInterval(e.timer),e.formLoading=!0,g["a"].answerSubmit(this.answer).then((function(t){1===t.code?e.$alert("试卷得分："+t.response+"分","考试结果",{confirmButtonText:"返回考试记录",callback:function(t){e.$router.push("/record/index")}}):e.$message.error(t.message),e.formLoading=!1})).catch((function(t){e.formLoading=!1}))}},computed:Object(s["a"])(Object(s["a"])({},Object(r["c"])("enumItem",["enumFormat"])),Object(r["e"])("enumItem",{doCompletedTag:function(e){return e.exam.question.answer.doCompletedTag}}))},q=w,x=(n("aecb"),Object(u["a"])(q,i,a,!1,null,"a51a27fe",null));t["default"]=x.exports},aecb:function(e,t,n){"use strict";n("e3b1")},e3b1:function(e,t,n){}}]);