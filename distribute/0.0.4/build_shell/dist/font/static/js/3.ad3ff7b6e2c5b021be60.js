webpackJsonp([3],{"/fW9":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Gu7T"),i=o.n(n),r=o("Dd8w"),s=o.n(r),a=o("DAYN"),c=o.n(a),l=o("NYxO"),u=o("qPxX"),d=o("//Fk"),m=o.n(d),h=o("mtWM"),p=o.n(h),f={ProjectVersion:[{type:"array",required:!0,len:2,message:"请选择版本或者创建版本后再创建提测！"}],ProjectModuleID:[{type:"integer",required:!0,message:"请选择模块！"}],Topic:[{type:"string",required:!0,min:1,max:50,message:"标题长度必须在1-50个字符之间！",trigger:"blur"}],TestingFeature:[{type:"string",required:!0,message:"提测内容为必选内容"}],TestingAdvice:[{type:"string",required:!0,message:"请填写提测建议"}]},g=o("h/Zt"),v=o("aYpo"),I={name:"ProjectFortestingCreateDialog",props:{fortestingID:{type:Number,default:0}},data:function(){return{content:"",defaultProjectID:[],sourceProject:[],editorToolBar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}]],projectModules:[],projectVersions:[],dialogTitle:"添加提测",formItem:{Topic:"",ProjectModuleID:"0",ProjectID:0,VersionID:0,CodeRepertory:"",Branch:"",TestingAdvice:"",TestingFeature:"",ProjectVersion:[],attachments:{defaultList:[],imgName:"",visible:!1,uploadList:[]}},columns:[{title:"",slot:"name"},{title:"",slot:"action",width:100}],contentData:[{name:""}],editIndex:0,editName:"",ruleCustom:s()({},f)}},computed:s()({},Object(l.c)("projectglobal",["createDialogShow","viewDialogShow","projectVersion","project"]),Object(l.c)(["appBodyHeight"]),{containerHeight:function(){return this.appBodyHeight-100},dialogShow:function(){return this.createDialogShow||this.viewDialogShow},fortesting:function(){return this.createDialogShow?0:this.fortestingID}}),methods:s()({},Object(l.d)("projectglobal",["setCreateDialogShow","setViewDialogShow","setObjectChange"]),{ok:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.createDialogShow&&e.$axios.post("/api/project/"+e.formItem.ProjectID+"/version/"+e.formItem.VersionID+"/fortestings",e.formItem).then(function(t){e.setObjectChange(!0)},function(t){}),e.viewDialogShow&&(e.$axios.put("/api/project/fortesting/"+e.fortestingID+"/",e.formItem).then(function(t){e.setObjectChange(!0)},function(t){}),e.updateAttachments()),e.setCreateDialogShow(!1),e.setViewDialogShow(!1),e.setObjectChange(!0))})},cancel:function(){this.setCreateDialogShow(!1),this.setViewDialogShow(!1)},handleView:function(t){this.formItem.attachments.imgName=t,this.formItem.attachments.visible=!0},handleRemove:function(t){var e=this.formItem.attachments.uploadList;this.formItem.attachments.uploadList.splice(e.indexOf(t),1),this.removeFile(t.id),this.updateAttachments()},handleSuccess:function(t,e){e.url=t.result.url,e.id=t.result.file_id,this.formItem.attachments.uploadList=this.$refs.upload.fileList},handleFormatError:function(t){this.$Message.warning({content:"文件格式不正确,格式：'jpg','jpeg','png','pdf','txt','sql','docx','doc','xlsx'",duration:10,closable:!0})},handleMaxSize:function(t){this.$Message.warning({content:"文件大小超过10M限制",duration:10,closable:!0})},handleBeforeUpload:function(){},onProjectChange:function(t,e){var o=t[0];this.formItem.ProjectID=t[0],this.formItem.VersionID=t[1],this.loadProjectModules(o)},commitContentChange:function(t,e,o){},updateAttachments:function(){for(var t="",e=0;e<this.formItem.attachments.uploadList.length;e++)t=this.formItem.attachments.uploadList[e].id+","+t;this.$axios.patch("/api/project/fortesting/"+this.fortestingID+"/",{Attachment:t}).then(function(t){},function(t){})},handleAdd:function(t,e){this.contentData.push({name:""})},handleSave:function(t,e){""!==t.name.trim()&&(this.formItem.TestingFeature=this.formItem.TestingFeature+t.name+"{;}",this.contentData[e].name=t.name)},removeFile:function(t){this.$axios.delete("/api/project/fortesting/delete_file/"+t).then(function(t){},function(t){})},loadProjectModules:function(t){var e=this;this.$axios.get("/api/project/"+t+"/modules").then(function(t){var o=t.data.result;e.projectModules=o},function(t){})},loadMyProjectList:function(){var t=this;this.$axios.get("/api/project/list?extinfo=1&home=1").then(function(e){var o=e.data.result;t.sourceProject=o,t.projectVersions=function(t){for(var e=[],o=0;o<t.length;o++){var n={};n.value=t[o].id,n.label=t[o].PBTitle,n.children=[];for(var i=0;i<t[o].Versions.length;i++){var r={};r.label=t[o].Versions[i].VVersion,r.value=t[o].Versions[i].id,n.children.push(r)}e.push(n)}return e}(o)},function(t){})},loadForTesting:function(){this.formItem.id=this.fortesting,this.contentData=[{name:""}];var t=this.formItem,e=this.defaultProjectID,o=this.contentData;0!==this.formItem.id?function(t){var e={id:t,Topic:"",ProjectModuleID:0,CodeRepertory:"",Branch:"",TestingAdvice:"",TestingFeature:"",ProjectVersion:[],attachments:{defaultList:[],imgName:"",visible:!1,uploadList:[]}};return new m.a(function(o,n){p.a.get("/api/project/fortesting/"+t).then(function(t){var e=t.data.result;o(e)},function(t){o(e)})})}(this.fortesting).then(function(n){t.Topic=n.Topic,t.Branch=n.Branch,t.CodeRepertory=n.CodeRepertory;for(var i=0;i<n.FortestingFeature.length;i++)if(""!==n.FortestingFeature[i].trim()){var r={};r.name=n.FortestingFeature[i],o.push(r)}t.TestingAdvice=n.TestingAdvice.replace("div","p"),t.ProjectModuleID=n.ProjectModuleID,t.ProjectVersion=[n.ProjectID,n.VersionID],t.ProjectID=n.ProjectID,t.VersionID=n.VersionID,t.attachments.defaultList=n.Attachments,t.attachments.uploadList=n.Attachments,e.push(n.ProjectID)}):(t.Topic="",t.Branch="",t.CodeRepertory="",t.TestingFeature="",t.TestingAdvice="",t.ProjectModuleID=0,t.ProjectVersion=[],t.attachments.defaultList=[],t.attachments.uploadList=[])}}),created:function(){this.loadMyProjectList()},mounted:function(){this.formItem.attachments.uploadList=this.$refs.upload.fileList},watch:{fortesting:function(){this.loadForTesting()},createDialogShow:function(t){!0===t&&(this.dialogTitle="添加提测")},viewDialogShow:function(t){!0===t&&(this.dialogTitle="编辑提测",this.loadForTesting())}},components:{FormItem:g.a,VueEditor:v.VueEditor}},j={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Modal",{attrs:{value:t.dialogShow,title:t.dialogTitle,width:700,styles:{bottom:"20px",top:"50px"}},on:{"on-cancel":t.cancel}},[o("div",{style:"height:"+t.containerHeight+"px;overflow-y: scroll;overflow-x: hidden"},[o("Form",{ref:"createFortesting",attrs:{model:t.formItem,"label-width":80,rules:t.ruleCustom}},[o("FormItem",{attrs:{label:"项目",prop:"ProjectVersion"}},[o("Cascader",{attrs:{data:t.projectVersions,filterable:!0},on:{"on-change":t.onProjectChange},model:{value:t.formItem.ProjectVersion,callback:function(e){t.$set(t.formItem,"ProjectVersion",e)},expression:"formItem.ProjectVersion"}})],1),t._v(" "),o("FormItem",{attrs:{label:"主题",prop:"Topic"}},[o("Input",{attrs:{placeholder:"提测主题"},model:{value:t.formItem.Topic,callback:function(e){t.$set(t.formItem,"Topic",e)},expression:"formItem.Topic"}})],1),t._v(" "),o("FormItem",{attrs:{label:"代码仓库",prop:"CodeRepertory"}},[o("Input",{attrs:{placeholder:"代码仓库地址"},model:{value:t.formItem.CodeRepertory,callback:function(e){t.$set(t.formItem,"CodeRepertory",e)},expression:"formItem.CodeRepertory"}})],1),t._v(" "),o("FormItem",{attrs:{label:"分支",prop:"Branch"}},[o("Input",{attrs:{placeholder:"代码分支"},model:{value:t.formItem.Branch,callback:function(e){t.$set(t.formItem,"Branch",e)},expression:"formItem.Branch"}})],1),t._v(" "),o("FormItem",{attrs:{label:"提测内容:",prop:"TestingFeature"}},[o("Table",{attrs:{columns:t.columns,data:t.contentData,"show-header":!1,"disabled-hover":""},scopedSlots:t._u([{key:"name",fn:function(e){var n=e.row,i=e.index;return[o("Input",{attrs:{type:"text",placeholder:"请输入提测内容，点击+，添加更多提测内容"},on:{"on-blur":function(e){t.handleSave(n,i)}},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"row.name"}})]}},{key:"action",fn:function(e){var n=e.row,i=e.index;return[i===t.contentData.length-1?o("div",[o("Icon",{staticClass:"cursor-hand",staticStyle:{color:"#32be77"},attrs:{type:"ios-add-circle",size:18},on:{click:function(e){t.handleAdd(n,i)}}})],1):t._e()]}}])})],1),t._v(" "),o("FormItem"),t._v(" "),o("FormItem",{attrs:{label:"测试建议:",prop:"TestingAdvice"}},[o("vue-editor",{attrs:{editorToolbar:t.editorToolBar,placeholder:"测试建议"},model:{value:t.formItem.TestingAdvice,callback:function(e){t.$set(t.formItem,"TestingAdvice",e)},expression:"formItem.TestingAdvice"}})],1),t._v(" "),o("div",{staticStyle:{"border-top":"1px solid rgba(0,0,0,.1)","margin-top":"20px"}}),t._v(" "),o("div",{staticStyle:{"font-size":"14px","padding-top":"5px",color:"#495060"}},[o("Icon",{attrs:{type:"android-attach",size:14}}),t._v("\n        附件\n      ")],1),t._v(" "),o("FormItem",[t._l(t.formItem.attachments.uploadList,function(e,n){return o("div",{key:n,staticClass:"demo-upload-list"},["finished"===e.status?o("div",[o("div",[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"demo-upload-list-cover"},[o("a",{attrs:{href:e.url}},[o("Icon",{attrs:{type:"ios-cloud-download-outline"}})],1),t._v(" "),o("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(o){t.handleRemove(e)}}})],1)]):o("div",[e.showProgress?o("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()],1)])}),t._v(" "),o("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"100px"},attrs:{"show-upload-list":!1,"default-file-list":t.formItem.attachments.defaultList,"on-success":t.handleSuccess,format:["jpg","jpeg","png","pdf","txt","sql","docx","doc","xlsx"],"max-size":10240,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:"",type:"drag",action:"/api/project/fortesting/upload_files"}},[o("div",{staticStyle:{width:"100px",height:"100px","line-height":"100px"}},[o("Icon",{attrs:{type:"ios-camera-outline",size:20}})],1)])],2)],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[t.createDialogShow?o("Button",{staticStyle:{width:"80px",height:"30px"},attrs:{type:"success",shape:"circle"},on:{click:function(e){t.ok("createFortesting")}}},[t._v("添加\n    ")]):t._e(),t._v(" "),t.viewDialogShow?o("Button",{staticStyle:{width:"80px",height:"30px"},attrs:{type:"success",shape:"circle"},on:{click:function(e){t.ok("createFortesting")}}},[t._v("保存\n    ")]):t._e()],1)])},staticRenderFns:[]};var b=o("VU/8")(I,j,!1,function(t){o("bXpc")},"data-v-3f69dd5b",null).exports,D={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{key:t.fortesting.id,attrs:{id:t.fortesting.id}},[o("Card",{staticClass:"board-column-item cursor-hand",attrs:{padding:0}},[o("div",{staticClass:"board-item-body"},[o("div",{staticStyle:{"text-decoration":"underline",color:"inherit","font-size":"12px"},on:{click:t.onViewFortesting}},[t._v(t._s(t.fortesting.ProjectName)+"-"+t._s(t.fortesting.VersionName)+" "+t._s(t.fortesting.Topic))]),t._v(" "),o("div",{staticStyle:{"padding-top":"20px"}},[o("Dropdown",{attrs:{trigger:"click",transfer:!0}},[o("Button",{staticStyle:{"font-size":"12px"},attrs:{shape:"circle",size:"small",href:"javascript:void(0)"}},[o("Icon",{attrs:{type:"ios-mail-outline"}}),t._v(" "),o("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",[o("Icon",{staticStyle:{"padding-right":"10px"},attrs:{type:"ios-trending-down"}}),t._v(" "),o("a",{staticStyle:{color:"inherit"},attrs:{href:"/project/"+t.fortesting.ProjectID+"/fortesting/"+t.fortesting.id+"/report/bvt",target:"_blank"}},[t._v("BVT")])],1),t._v(" "),o("DropdownItem",[o("Icon",{staticStyle:{"padding-right":"10px"},attrs:{type:"ios-trending-up"}}),t._v(" "),o("a",{staticStyle:{color:"inherit"},attrs:{href:"/project/"+t.fortesting.ProjectID+"/fortesting/"+t.fortesting.id+"/report/progress",target:"_blank"}},[t._v("进度")])],1),t._v(" "),o("DropdownItem",[o("Icon",{staticStyle:{"padding-right":"10px"},attrs:{type:"ios-unlock-outline"}}),t._v(" "),o("a",{staticStyle:{color:"inherit"},attrs:{href:"/project/"+t.fortesting.ProjectID+"/fortesting/"+t.fortesting.id+"/report/testcomplete",target:"_blank"}},[t._v("完成")])],1)],1)],1)],1),t._v(" "),o("div",{staticStyle:{position:"absolute",bottom:"2px",right:"10px","font-size":"10px",color:"gray"}},[t.fortesting.DeadLineFormat?o("Tag",{attrs:{color:"default"}},[t._v("\n        "+t._s(t.fortesting.DeadLineFormat)+"\n      ")]):t._e()],1)]),t._v(" "),o("div",{staticClass:"board-item-rightbar"},[o("div",{staticClass:"board-item-avatar"},[o("Avatar",{staticStyle:{"background-color":"#388E8E"}},[t._v(t._s(t.fortesting.OwnerName))])],1)])])],1)},staticRenderFns:[]};var w=o("VU/8")({name:"ProjectFortestingItem",props:["fortesting"],data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{onViewFortesting:function(t){this.$emit("view-fortesting",this.fortesting.id)}}},D,!1,function(t){o("wczt")},"data-v-421c5150",null).exports,y={name:"projectFortestingList",props:{projectID:{type:[Number,String],defalut:0}},data:function(){return{columnItemHeight:200,fortestingList:[],fortestingItemID:0}},computed:s()({},Object(l.c)("projectglobal",["projectVersion","objectChange"]),{versionID:function(){return this.projectVersion},fortestingForColumns:function(){return!0===this.objectChange&&(this.fortestingList=this.getColumnFortestings(),this.setObjectChange(!1)),this.fortestingList},project:function(){var t=0;return this.projectID&&(t=this.projectID,this.setProject(this.projectID)),t}}),methods:s()({},Object(l.d)("projectglobal",["setViewDialogShow","setObjectChange","setProject"]),{getColumnFortestings:function(){var t=this,e=[];e.push({id:1,title:"待提测",group:"ProjectFortesting",page:1,count:0,data:[]}),e.push({id:2,title:"已提测",group:"ProjectFortesting",page:1,count:0,data:[]}),e.push({id:3,title:"测试中",group:"ProjectFortesting",page:1,count:0,data:[]}),e.push({id:4,title:"测试完成",group:"ProjectFortesting",page:1,count:0,data:[]}),e.push({id:5,title:"已上线",group:"ProjectFortesting",page:1,count:0,data:[]});for(var o=function(o){t.getFortestingList(t.project,t.versionID,e[o].id,e[o].page).then(function(t){e[o].data=t.data.result.results,e[o].count=t.data.result.count})},n=0;n<e.length;n++)o(n);return e},onStart:function(){console.log("start")},onEnd:function(t){var e=this,o=t.to.getAttribute("id"),n=t.from.getAttribute("id"),i=t.oldIndex,r=t.newIndex,s=t.item.getAttribute("id");this.alterColumnData(n,o,s,i,r),this.$axios.patch("/api/project/fortesting/"+s+"/update_status",{Status:o}).then(function(t){t.data.result.Status&&e.$Message.success({content:t.data.result.message,duration:10,closable:!0})},function(t){e.setObjectChange(!0),e.$Message.error({content:t.data.result.message,duration:10,closable:!0})})},onRemove:function(){console.log("remove")},onMove:function(){console.log("move")},alterColumnData:function(t,e,o,n,i){var r=null;this.fortestingForColumns.forEach(function(e,n){if(e.id===parseInt(t)){e.count=e.count-1;for(var i=0;i<e.data.length;i++)if(e.data[i].id===parseInt(o)){r=e.data[i],e.data.splice(i,1);break}}}),this.fortestingForColumns.forEach(function(t,o){t.id===parseInt(e)&&(t.count=t.count+1,t.data.splice(i,0,r))})},onReachBottom:function(t){for(var e=this,o=function(o){if(e.fortestingForColumns[o].id===parseInt(t)){var n=[],r=e.fortestingForColumns;return e.fortestingForColumns[o].page=e.fortestingForColumns[o].page+1,e.getFortestingList(e.project,e.versionID,e.fortestingForColumns[o].id,e.fortestingForColumns[o].page).then(function(t){var e;n=t.data.result.results,(e=r[o].data).push.apply(e,i()(n))}),"break"}},n=0;n<this.fortestingForColumns.length;n++){if("break"===o(n))break}},getFortestingList:function(t,e,o,n){return function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"post";return new m.a(function(n,i){p()({method:o,url:t,data:e}).then(function(t){n(t)}).catch(function(t){})})}("/api/project/"+t+"/version/"+e+"/fortestings?Status="+o+"&page="+n,{},"get")},onFortestingItemClick:function(t){this.setCreateDialogShow(!0);var e=t.target.getAttribute("id");this.fortestingItemID=parseInt(e)},onViewFortesting:function(t){this.setViewDialogShow(!0),this.fortestingItemID=parseInt(t)}}),created:function(){this.fortestingList=this.getColumnFortestings()},mounted:function(){},watch:{versionID:function(t){this.fortestingList=this.getColumnFortestings()}},components:{draggable:c.a,BoardColumn:u.a,ProjectFortestingCreateDialog:b,ProjectFortetingItem:w}},F={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.fortestingForColumns,function(e){return o("board-column",{key:e.id,staticStyle:{border:"none"},attrs:{columnID:e.id,group:e.group,itemList:e.data,columnTitle:e.title+"-"+e.count},on:{"update:itemList":function(o){t.$set(e,"data",o)},end:t.onEnd,reachBottom:t.onReachBottom},scopedSlots:t._u([{key:"default",fn:function(e){return[o("project-forteting-item",{attrs:{fortesting:e.element},on:{"view-fortesting":t.onViewFortesting}})]}}])})}),t._v(" "),o("project-fortesting-create-dialog",{attrs:{fortestingID:t.fortestingItemID}})],2)},staticRenderFns:[]};var _=o("VU/8")(y,F,!1,function(t){o("2W+6")},"data-v-f12de8bc",null);e.default=_.exports},"2W+6":function(t,e){},"70S3":function(t,e){},bXpc:function(t,e){},qPxX:function(t,e,o){"use strict";var n=o("DAYN"),i={name:"BoardColumn",props:{columnID:{type:Number,required:!0},group:{type:String,required:!0},itemList:{type:Array,required:!0},columnTitle:{type:String,required:!0}},data:function(){return{appBodyHeight:863,columnItemHeight:200,columnItems:this.itemList}},computed:{},components:{draggable:o.n(n).a},methods:{onEnd:function(t){this.$emit("end",t)},handleReachBottom:function(){this.$emit("reachBottom",this.columnID)}},watch:{itemList:function(){this.columnItems=this.itemList}},created:function(){this.columnItems=this.itemList},mounted:function(){this.columnItemHeight=document.getElementById("appBody").offsetHeight-70}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",{staticClass:"board-column",attrs:{shadow:!1,"dis-hover":!0,bordered:!0}},[t._t("column-header",[o("Card",{staticClass:"board-column-title",attrs:{bordered:!1,shadow:!1,"dis-hover":!0}},[t._v(t._s(t.columnTitle))])]),t._v(" "),o("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom,height:t.columnItemHeight}},[o("draggable",{attrs:{options:{group:t.group}},on:{end:t.onEnd},model:{value:t.columnItems,callback:function(e){t.columnItems=e},expression:"columnItems"}},[o("transition-group",{key:t.columnID,staticClass:"dragable-area",attrs:{id:t.columnID}},t._l(t.columnItems,function(e){return o("div",{key:e.id,attrs:{id:e.id}},[t._t("default",null,{element:e})],2)}))],1)],1)],2)},staticRenderFns:[]};var s=o("VU/8")(i,r,!1,function(t){o("70S3")},"data-v-cfd379ca",null);e.a=s.exports},wczt:function(t,e){}});
//# sourceMappingURL=3.ad3ff7b6e2c5b021be60.js.map