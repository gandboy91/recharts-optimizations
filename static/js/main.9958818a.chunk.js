(this["webpackJsonpcharts-optimization"]=this["webpackJsonpcharts-optimization"]||[]).push([[0],{195:function(e,t,a){e.exports=a(381)},200:function(e,t,a){},203:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);var n,r,l,i=a(1),c=a.n(i),o=a(58),s=a.n(o),u=(a(200),a(400)),d=a(166),m={white:{main:"#fff"},black:{main:"#000"},primary:{main:"#2e3648",light:"#7ca3aa",middle:"#437f9c"},secondary:{main:"#439c6d",middle:"#41b3a6",light:"#8db183"},error:{main:"#ce3c3d"},danger:{main:"#a00103",middle:"#d9534f",light:"#f2dede"},lightGrey:{main:"#e5e5e5",light:"#f5f5f5"},sandy:{main:"#eee0cd"},grey:{main:"#C0C0C0",middle:"#6d737f",light:"#999999",lightBlue:"#cdd3df"},blue:{deep:"#161FBC",dark:"#1d5a6d",main:"#2b809f",middle:"#7DA5AC",light:"#91C0C8",graph:"#89CBE0"},green:{deep:"#105700",light:"#D0EED0"},links:{main:"#0078A8"},graph:{main:"#89CBE0"},lightGreen:{main:"#A9C68A"},statuses:{pending:"#d1863d",running:"#429fcc",finished:"#439c6d",cancelled:"#e6594a",failed:"#d84315"},deepBlueColorRange:["rgb(230,0,0) 0%","rgb(255,9,0) 10%","rgb(248,247,0) 35%","rgb(0,230,248) 65%","rgb(0,0,128) 100%"],linearColorRange:["hsl(0, 80%, 50%) 0%","hsl(60, 80%, 50%) 25%","hsl(120, 80%, 50%) 50%","hsl(180, 80%, 50%) 75%","hsl(240, 80%, 50%) 100%"],redToGreenRange:["rgb(255, 0, 0) 0%","rgb(255, 255, 0) 75%","rgb(0, 255, 0) 90%","rgb(0, 131, 9) 100%"],graphLines:{green:"#439c6d",red:"#ce3c3d",blue:"#161fbc"}},b={fontFamily:["Montserrat",'"Helvetica Neue"',"Helvetica","Arial","sans-serif","Tahoma","Verdana","sans-serif",'"Glyphicons Halflings"'].join(",")},p=Object(d.a)({defaultTransition:".16s",navbarHeight:105,baseSideBarWidth:310,projectMenuHeight:37,dashboardToolbarHeight:80,zIndexMap:400,zIndexNavBar:1100,zIndexMax:1200,palette:m,typography:b}),f=(a(203),a(10)),v=a(399),g=a(23),h=a(13),y=a(11),x=a(8),E=["yName","xName"],O=[{param:"law",title:"Univariate law"},{param:"shapeParameter",title:"Shape"},{param:"locationParameter",title:"Location"},{param:"scaleParameter",title:"Scale"}],j=(n={},Object(x.a)(n,"select","Click to start selection"),Object(x.a)(n,"selectRange","Click to complete selection"),Object(x.a)(n,"selectedRange","Click to deselect the range"),n),k="altitude",w="depth",N={"m.s-1":"m/s","m.s$^-$$^1$":"m/s",degrees:"\xb0",degree:"\xb0"},C=(r={},Object(x.a)(r,"dp","dp"),Object(x.a)(r,"thetaw","\u03b8"),l={},Object(x.a)(l,"Excel","xls"),Object(x.a)(l,"Matlab","mat"),Object(x.a)(l,"NetCDF","nc"),a(98)),L=a.n(C),_=function(e,t){return e<t?[e,t]:[t,e]},W=function(e,t,a){return t<=e&&e<=a},M=function(e){return null===e||"undefined"===typeof e},S=function(e){if(!Array.isArray(e))throw Error("array expected");var t=L.a.mark((function t(){return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.delegateYield(e,"t0",1);case 1:return a.delegateYield(t(),"t1",2);case 2:return a.abrupt("return",a.t1);case 3:case"end":return a.stop()}}),t)}))();return function(){return t.next().value}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,a=Math.pow(10,t);return Math.round(e*a)/a},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=parseFloat(e);if(!a&&0!==a)throw Error("sorry");return e===~~a?a:+a.toFixed(t)},I=a(398),P=Object(I.a)((function(e){return{container:{backgroundColor:e.palette.black.main,padding:10,opacity:.8,color:e.palette.white.main}}})),R=function(e){var t=e.active,a=e.xLabel,n=e.xFrom,r=e.xTo,l=e.yValue,i=e.yLabel,o=e.mode,s=P();if(!t)return null;var u=j[o];return c.a.createElement("div",{className:s.container},c.a.createElement("div",null,a),c.a.createElement("div",null,function(e,t){return[e,t].some(M)?">=".concat(e,"m/s"):"[".concat(e,"m/s ; ").concat(t,"m/s]")}(n,r)),c.a.createElement("div",null,i,": ",function(e){return"".concat(e,"%")}(l)),c.a.createElement("div",null,u))},T=function(e){var t=e.graphData,a=e.widthGraph,n=void 0===a?500:a,r=e.heightGraph,l=void 0===r?400:r,o=e.xlabel,s=e.yTicks,u=e.maxYValue,d=e.ylabel,b=Object(i.useState)(null),p=Object(f.a)(b,2),v=p[0],x=p[1],E=Object(i.useState)("select"),O=Object(f.a)(E,2),j=O[0],k=O[1],w=Object(i.useState)({start:null,end:null}),N=Object(f.a)(w,2),C=N[0],L=N[1],S=Object(i.useCallback)((function(e){var t=C.start,a=C.end,n=m.blue.dark;return"select"===j&&e===v||"RANGE_MODE"===j&&W.apply(void 0,[e].concat(Object(g.a)(_(t,a))))||"selectRange"===j&&W.apply(void 0,[e].concat(Object(g.a)(_(t,v))))?n:m.blue.main}),[v,j,C]),A=Object(i.useCallback)((function(e){e&&e.activeTooltipIndex!==v&&x(e.activeTooltipIndex)}),[x,v]),I=Object(i.useCallback)((function(){return x(null)}),[x]),P=Object(i.useCallback)((function(e){var t=e.idx;if("RANGE_MODE"===j)return k("select");k("select"===j?"selectRange":"RANGE_MODE"),L((function(e){var a=e.start;return"select"===j?{start:t}:{start:a,end:t}}))}),[k,j]),T=Object(i.useCallback)((function(){if("select"===j&&!M(v))return D(t[v].gy);var e=_(C.start,"selectRange"!==j||M(v)?C.end:v),a=Object(f.a)(e,2),n=a[0],r=a[1];return D(Object(y.reduce)(Object(y.range)(0,r-n+1,1),(function(e,a){return e+t[n+a].gy}),0))}),[v,C,j,t]),z=Object(i.useCallback)((function(){if("select"===j&&!M(v))return{xFrom:t[v].gx,xTo:v!==t.length-1?t[v+1].gx:null};var e=_(C.start,"selectRange"!==j||M(v)?C.end:v),a=Object(f.a)(e,2);return{xFrom:a[0],xTo:a[1]}}),[j,v,C,t]),G=T(),V=z(),Y=V.xFrom,B=V.xTo;return c.a.createElement(h.b,{width:n,height:l,data:t,barCategoryGap:0,onMouseMove:A,onMouseEnter:A,onMouseLeave:I},c.a.createElement(h.g,{tick:{fontSize:9},label:{value:o,position:"bottom",offset:-10}}),c.a.createElement(h.h,{ticks:s,domain:[0,u],tick:{fontSize:9},label:{value:d,angle:-90,position:"center",offset:0}}),c.a.createElement(h.c,{strokeDasharray:"3 3"}),c.a.createElement(h.a,{dataKey:"gy",onClick:P,onMouseEnter:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return console.log(t)}},t.map((function(e,t){return c.a.createElement(h.d,{cursor:"pointer",key:"cell-".concat(e.gx),fill:S(t)})}))),c.a.createElement(h.f,{content:c.a.createElement(R,{mode:j,xLabel:"Wind speed",yLabel:"Occurrence",xFrom:Y,xTo:B,yValue:G}),cursor:!1}))},z=a(5),G=a.n(z),V=Object(I.a)({root:{position:"relative",left:-10,top:function(e){var t=e.up,a=e.overflowLength;return t?-a:0}}}),Y=function(e){var t=e.up,a=e.color,n=e.length,r=e.overflowLength,l=V({up:t,overflowLength:r}),i=n+r;return c.a.createElement("svg",{className:l.root,width:"20",height:i},c.a.createElement("defs",null,c.a.createElement("marker",{id:"levels-axis",viewBox:"0 -10 25 25",refX:"20",refY:"0",markerWidth:"16",markerHeight:"20",orient:"auto"},c.a.createElement("path",{fill:a,stroke:a,d:"M 0 -8 L 20 0 L 0 8"}))),c.a.createElement("line",{stroke:a,x1:"10",y1:t?i:0,x2:"10",y2:t?0:i,strokeWidth:"1",markerEnd:"url(#levels-axis)"}))};Y.defaultProps={up:!1,color:"black",overflowLength:50};var B=Object(i.memo)(Y),F=Object(I.a)((function(e){return{container:{zIndex:1,width:60,height:function(e){return e.height},lineHeight:function(e){return e.isLongMode?1:"normal"},borderLeft:"solid 1px ".concat(e.palette.black.main)},levelContainer:{background:e.palette.blue.graph,width:20,borderTop:"solid 0.5px ".concat(e.palette.black.main),borderRight:"solid 0.5px ".concat(e.palette.black.main),marginRight:5,"&:hover":{background:e.palette.blue.light}},level:{flex:1},tickContainer:{flex:1,fontSize:function(e){return e.isLongMode?7:9}},lastLevelContainer:{borderBottom:"solid 1px ".concat(e.palette.black.main)},currentLevel:{background:e.palette.blue.main},currentLevelLabel:{fontWeight:700},titleContainer:{width:10,position:"relative"},title:{width:200,transform:"rotate(-90deg)",position:"absolute",left:-110},axisContainer:{width:0},levelButton:{outline:"none",width:"100%",height:"100%",padding:0,margin:0,cursor:"pointer"}}})),H=function(e){var t,a=e.levels,n=e.currentLevel,r=e.type,l=e.selectLevel,o=e.className,s=e.height,u=a.length,d=u>30,b=(t={true:360},Object(x.a)(t,!!s,s),Object(x.a)(t,!s&&u>50,450),t).true,p=F({isLongMode:d,height:b}),f=r===k,g=Object(i.useCallback)((function(e){var t=e.currentTarget.getAttribute("data-index");if(!t)return!1;var n=f?a.length-1-t:t;l(+n)}),[l,a,f]),h=Object(i.useMemo)((function(){var e=a.map((function(e){return D(e,0)}));return f?e.reverse():e}),[a,f]),y=a.length-1,E=f?y-n:n;return c.a.createElement(v.a,{className:o,container:!0},c.a.createElement(v.a,{item:!0,className:p.titleContainer,container:!0,direction:"column",justify:"center",alignItems:"center",xs:!0},c.a.createElement(v.a,{item:!0,className:p.title,"data-html2canvas-ignore":!0},"Choose your ".concat(r," (m)"))),c.a.createElement(v.a,{className:p.axisContainer,item:!0},c.a.createElement(B,{color:m.grey.light,up:f,length:b,overflowLength:30})),c.a.createElement(v.a,{item:!0,container:!0,direction:"column",justify:"space-between",wrap:"nowrap",className:p.container},h.map((function(e,t){return c.a.createElement(v.a,{container:!0,item:!0,className:p.level,key:e},c.a.createElement(v.a,{item:!0,className:G()(p.levelContainer,Object(x.a)({},p.lastLevelContainer,t===y))},c.a.createElement("div",{tabIndex:"0","aria-label":"select-level",role:"button",className:G()(p.levelButton,Object(x.a)({},p.currentLevel,t===E)),onClick:g,"data-index":t})),c.a.createElement(v.a,{item:!0,container:!0,direction:"column",justify:"center",className:p.tickContainer},c.a.createElement(v.a,{item:!0,className:G()(Object(x.a)({},p.currentLevelLabel,t===E))},e)))}))))};H.defaultProps={currentLevel:0};var U=Object(i.memo)(H),$=a(15),X=function(e){return Object.entries(e).reduce((function(e,t){var a=Object(f.a)(t,2),n=a[0],r=a[1];return e[$.camelize(n)]=$.camelize(r),e}),{})},J=/[\s]*\${.*}/,K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return O.reduce((function(a,n){var r=n.param,l=n.title;if(!e[r])return a;var i=null!==t?[r,"values",t,0]:[r,"values",0],c=Object(y.get)(e,i,"");return a.push({name:l,key:r,value:Number.isNaN(+c)?c:D(c)}),a}),[])},Z=Object(I.a)({paramsContainer:{marginLeft:20}}),q=function(e){var t=e.title,a=e.value;return c.a.createElement("div",null,c.a.createElement("div",null,t,":"),c.a.createElement("div",null,a))},Q=function(e){var t=e.params;return c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("strong",null,"Parameters: ")),t.map((function(e){var t=e.key,a=e.title,n=e.value;return c.a.createElement(q,{key:"extraParam_".concat(t),title:a,value:n})})))},ee=function(e){var t=e.graphData,a=e.widthGraph,n=void 0===a?500:a,r=e.yTickStep,l=void 0===r?1:r,o=Object(i.useState)(0),s=Object(f.a)(o,2),u=s[0],d=s[1],m=Z(),b=.8*n,p=Object(i.useCallback)((function(e){return d(e)}),[d]),g=Object(i.useMemo)((function(){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Object(y.get)(e,"visualization.kwargs",null);if(!n)throw Error("Invalid graph data");var r=X(Object(y.pick)(n,E)),l=r.yName,i=r.xName,c=e[i].values[a],o=e[l].values[a],s=c.map((function(e,t){return{gx:e,gy:o[t],idx:t}})),u=[Object(y.max)(o),Object(y.min)(o)],d=u[0],m=u[1],b=Object(y.range)(Object(y.floor)(m),d,t),p=Object(y.reduce)(O,(function(t,n){var r=e[n.param].values[a][0];return t.push({title:n.title,value:Number.isFinite(r)?D(r):r,key:n.param}),t}),[]),f=n.ylabel,v=n.xlabel;return[s,b,p,d,f,v]}(t,l,u)}),[t,l,u]),h=Object(f.a)(g,6),x=h[0],j=h[1],k=h[2],w=h[3],N=h[4],C=h[5];return c.a.createElement(v.a,{justify:"center",container:!0},c.a.createElement(v.a,{item:!0},c.a.createElement(U,{type:"altitude",levels:t.level.values,currentLevel:u,selectLevel:p})),c.a.createElement(v.a,{item:!0},c.a.createElement(T,{graphData:x,yTicks:j,widthGraph:n,heightGraph:b,xlabel:C,ylabel:N,maxYValue:w})),c.a.createElement(v.a,{item:!0,className:m.paramsContainer},c.a.createElement(Q,{params:k})))},te={id:"WIN-magw-APD_2147",point:{id:"2147",name:"test"},layer:"WIND",type:"APD",name:"Analytical probability distribution",variables:{variables:[{units:"m.s-1",hidden:!1,longName:"wind speed",name:"magw"}],names:["magw"]},visualization:{driver:{suffix:null,method:"plot_bars",fileformat:".png",path:"/mnt/glusterfs/projects/dev-ma/MA/open-ocean/ENGIE-LNG/World/WIND/Visualization/WIN-magw-APD/2147_WIN-magw-APD_all${PER}__plot_bars.png"},web:{"plot_bars-image-uri-0":"/static/3.6.4/projects/dev-ma/MA/open-ocean/ENGIE-LNG/World/WIND/Visualization/WIN-magw-APD/2147_WIN-magw-APD_all%24%7BPER%7D__plot_bars.png","matlab-uri-0":"/static/3.6.4/projects/dev-ma/MA/open-ocean/ENGIE-LNG/Deliverables/Data/2147/WIND/WIN-magw-APD_2147.mat","netcdf-uri-0":"/static/3.6.4/projects/dev-ma/MA/open-ocean/ENGIE-LNG/Deliverables/Data/2147/WIND/WIN-magw-APD_2147.nc","excel-uri-0":"/static/3.6.4/projects/dev-ma/MA/open-ocean/ENGIE-LNG/Deliverables/Data/2147/WIND/WIN-magw-APD_2147.xls","plot_bars-image-legend-0":"Analytical probability distribution of wind speed at point test",dataLegend0:"Analytical probability distribution of wind speed at point test","data-uri-0":"/api/projects/671/get_visu_data/?stats_id=WIN-magw-APD_2147"},kwargs:{yName:"magw_pdf",xName:"magw_bin",ylabel:"probability distribution [%]",annotate:!0,grid:!0,xlabel:"Wind speed [m.s-1]"}},periodicity:"all",scaleParameter:{attributes:{standard_name:"scale_parameter",level_dependent:"True",description:"scale parameter of the Weibull distribution of magw",units:"m.s-1",long_name:"scale parameter",vartype:"f8"},dimensions:["level","point"],values:[[7.330993436166878],[10.078317404706477],[10.768210570322593],[11.171744555961968],[11.458077537639966],[11.68021752503801],[11.861629062500661],[12.015068853510003],[12.14795174466112]]},locationParameter:{attributes:{standard_name:"location_parameter",level_dependent:"True",description:"location parameter of the Weibull distribution of magw",units:"m.s-1",long_name:"location parameter",vartype:"f8"},dimensions:["level","point"],values:[[-2.0026453045666267e-10],[-1.9127743579150418],[-2.043747549734159],[-2.1203379412711234],[-2.174692181492106],[-2.2169018359556087],[-2.2513021337658636],[-2.2804379947710522],[-2.3056518869406473]]},global_attributes:{statistic:"Analytical probability distribution",history:"2020-03-27 08:36: generated by Open Ocean",location_name:"test",longitude:"-18.45703 (18\xb027'25''W)",latitude:"15.42191 (15\xb025'18''N)",srs:"EPSG:4326",period:"1979-01-01 00:00 - 2019-03-10 23:00",WIND_dataset:"CFSR~CFSV2%CFSR3D",WIND_node_longitude:"-18.50000 (18\xb030'W)",WIND_node_latitude:"15.50000 (15\xb030'N)",WIND_node_distance:"9.8 km",sampling_period:"1h",depth:2933.670347588957},shapeParameter:{attributes:{standard_name:"shape_parameter",level_dependent:"True",description:"shape parameter of the Weibull distribution of magw",units:"",long_name:"shape parameter",vartype:"f8"},dimensions:["level","point"],values:[[3.089925554404764],[4.00365302487519],[4.003677748711514],[4.003673475487403],[4.003673665596106],[4.003705015525371],[4.003692199185728],[4.00369628087339],[4.003687878442229]]},level:{attributes:{long_name:"vertical level",conventions:"positive from seabed",description:"vertical level, in meters from mean sea level",units:"m",vartype:"f8",standard_name:"vertical level"},dimensions:["level"],values:[10,25,50,75,100,125,150,175,200]},law:{attributes:{description:"name of the analytical law",units:"",vartype:"S"},dimensions:["level","point"],values:[["Weibull"],["Weibull"],["Weibull"],["Weibull"],["Weibull"],["Weibull"],["Weibull"],["Weibull"],["Weibull"]]},magwPdf:{attributes:{standard_name:"probability_distribution_function",description:"Weibull distribution of magw",valid_max:"100.",level_dependent:"True",units:"%",long_name:"probability distribution",valid_min:"0.",vartype:"f8"},dimensions:["level","magw_bin"],values:[[3529609233243572e-36,.6542303494164119,2.7411722816187885,6.114149177003311,10.188415494529211,13.941903879637055,16.184043251824626,16.08149053525881,13.652777363521464,9.826963410027583,5.930328898948282,2.960819931323176,1.2050258586661275,.39351460259152204,.10141557881115805,.02027570385058071,.0030897664400851973,.0003524893139393589,2955956058826552e-20,17886796153174004e-22,7.664892757768861e-8,2.2824050174664466e-9,46333390772773643e-27],[.269665202006426,.9483422164330064,2.265431676093507,4.339242643268439,7.115523196472518,10.26586073066186,13.144815453214017,14.905931659412689,14.83059793995441,12.758230678256075,9.311827321435127,5.6374985454277695,2.7588167552402467,1.0602683616765085,.3100310528796704,.06664243197402638,.010147735704474178,.001052106833807893,712074911633973e-19,300875870467166e-20,7.571724804379268e-8,1.080030647302972e-9,8289800481590374e-27],[.25240451224429455,.8307647463929653,1.9240301830374225,3.6327279546185625,5.943219715398772,8.657181557454996,11.346533692389636,13.39245696804434,14.157771669654963,13.270707514844156,10.879486009485275,7.671251797700418,4.56282555247099,2.239855333359209,.8858224086234558,.2749152498516915,.065081772043891,.01140078757406651,.0014307857568059547,.00012430399576619759,7210093578135789e-21,2.6877776598565994e-7,6.186956972097446e-9],[.24329536827804546,.7728038551557791,1.7592625066245346,3.2936055120464287,5.3760359585668045,7.859000393471332,10.405404620513213,12.504821155290658,13.589205381195315,13.247314023183272,11.453882587449991,8.660489869903145,5.632810925650576,3.0930363726789425,1.4045302601533642,.5156387015601167,.1493543158978902,.03324834032211588,.00553191300824396,.0006678400288718626,5669907352915652e-20,3275556495259113e-21,1.2439134715614264e-7],[.2372225414509372,.7356712109168281,1.6550526703715214,3.07996275416198,5.017529396706468,7.348292680583827,9.787477793503268,11.890850032800511,13.141038833079948,13.121369217200057,11.72075562118748,9.24971663658755,6.354670717886669,3.737406934439624,1.847031777032451,.7515522351692535,.24629354316205715,.06348672467225328,.012551423878256474,.0018529276213141606,.00019856205079505775,14992476565389053e-21,7.730603844829039e-7],[.23271879824083716,.7088883082614013,1.5805812562228094,2.9277587515538945,4.761665326629341,6.981030404607598,9.335864647013983,11.427625720737016,12.77751860003557,12.97346851650865,11.855195992555826,9.639539921147154,6.880609002514749,4.2454375687486365,2.225796719664239,.9730730655848,.3475778805853836,.09924305084035354,.02212824086963023,.0037586050906853095,.00047376287004662076,4310889117362632e-20,27508262188516493e-22],[.22915638271884284,.6881961456155333,1.5234801846597963,2.811363100986145,4.565786036986179,6.698364922185354,8.984268724172866,11.05890024064881,12.47400657208134,12.825448105110864,11.922222342548421,9.914559942041778,7.283644482278665,4.659304316511495,2.553904022191169,1.1785160481519437,.44916436381393515,.1385111353260122,.0338097340257627,.0063819811677914276,.0009089216798971201,95166627767258e-18,712846962896474e-20],[.22623448398881427,.6714931623353174,1.477646327513417,2.718124457153039,4.408754236647866,6.470841683718448,8.698792087783241,10.754498288087238,12.214652518565867,12.684037089000261,11.95137224474386,10.117195520681797,7.603733371807332,5.004948417194465,2.841608847541183,1.3685379237917168,.549029548686969,.17993099927817588,.047177739726906226,.009680027118186874,.0015183089164477156,.00017761520483249753,15100514611741439e-21],[.22376195321101744,.6575725925374191,1.439642454481275,2.640960341081809,4.278730825984661,6.281854090708479,8.46002687603401,10.496548308808338,11.988983389174601,12.551112523281233,11.957783898211172,10.27113247124107,7.8647393192650625,5.299207968394105,3.0966200763536733,1.5444630763742075,.6461705244197234,.2225834946295651,.06188105809732565,.013593905692282316,.002307414841396261,.00029556541484765934,2787176272184885e-20]]},magwBin:{attributes:{description:"lower bound of the bin of magw",standard_name:"lower_bin",units:"m.s-1",vartype:"f8"},dimensions:["level","magw_bin"],values:[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]]},success:!0},ae=a(100),ne=a(401),re=a(70),le=Object(I.a)((function(e){var t=e.palette;return{rect:{cursor:"pointer",outline:"none","&:hover":{fill:Object(re.b)(t.blue.graph,.6)}}}})),ie=m.grey.light,ce=m.blue.graph,oe=m.blue.main,se=function(e){var t,a=e.levels,n=e.type,r=e.selectedLevel,l=e.onSelect,o=e.width,s=e.height,u=e.xOffset,d=e.yOffset,m=e.axisOverflow,b=le(),p=a.length>30,f=(t={true:350},Object(x.a)(t,!!s,s),Object(x.a)(t,!s&&p,450),t).true,v=n===k,g=Object(i.useCallback)((function(e){var t=e.currentTarget.getAttribute("data-index");if(!t)return!1;var n=v?a.length-1-t:t;l(+n)}),[l,a,v]),h=Object(i.useMemo)((function(){var e=a.map((function(e){return D(e,0)}));return v?e.reverse():e}),[a,v]),y=a.length-1,E=v?y-r:r,O=Object(i.useMemo)((function(){var e=u+15,t=f+m,a=v?t:d,n=v?d:t+d,r=v?n+14:n-14,l="M".concat(e-5,",").concat(r);return l+="L".concat(e+5,",").concat(r),{axisY1:a,axisY2:n,arrowPath:l+="L".concat(e,",").concat(n,"Z"),fullHeight:t,labelX:u,labelY:m+~~(f/2),axisX:e,tickX:e+15+3,rectHeight:A(f/h.length,2),rectStartY:v?m:d,tickFontSize:p?8:10}}),[f,m,d,u,h,v,p]),j=O.fullHeight,w=O.labelX,N=O.labelY,C=O.axisX,L=O.tickX,_=O.rectHeight,W=O.rectStartY,M=O.tickFontSize,S=O.arrowPath,I=O.axisY1,P=O.axisY2;return c.a.createElement("svg",{width:o,height:j},c.a.createElement("text",{x:w,y:N,fill:ie,textAnchor:"middle",dominantBaseline:"middle",transform:"rotate(-90, ".concat(w,", ").concat(N,")")},"Choose your ".concat(n," (m)")),c.a.createElement("line",{stroke:ie,x1:C,y1:I,x2:C,y2:P,strokeWidth:"1"}),c.a.createElement("path",{d:S,fill:ie,stroke:ie}),h.map((function(e,t){var a=W+t*_;return c.a.createElement(c.a.Fragment,{key:e},c.a.createElement("rect",{x:C,y:W+t*_,width:15,height:_,"data-index":t,fill:t===E?oe:ce,stroke:"black",className:b.rect,onClick:g,tabIndex:"0","aria-label":"select-level",role:"button"}),c.a.createElement("text",{x:L,y:a+2,fontSize:M,textAnchor:"start",dominantBaseline:"hanging"},e))})))};se.defaultProps={xOffset:0,yOffset:0,selectedLevel:0};var ue=Object(i.memo)(se),de=function(e){var t,a,n,r=e.type,l=e.levels,i=e.barWidth,o=e.yAxisMap,s=e.selectedLevel,u=e.onSelect,d=e.xOffset,m=e.outerRadius,b=e.margin,p=e.cx,f=e.cy,v=m&&null!==p&&void 0!==p&&p&&null!==f&&void 0!==f&&f,g=v?(null!==(t=b.top)&&void 0!==t?t:0)+f-m:null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.y,h=v?2*m:null===o||void 0===o||null===(n=o[0])||void 0===n?void 0:n.height;return c.a.createElement(ue,{type:r,axisOverflow:g,yOffset:2,xOffset:d,width:i,height:h,levels:l,selectedLevel:s,onSelect:u})},me=function(e){var t=e.width,a=e.fontSize,n=e.parameters,r=e.offsetY,l=3*a*(n.length+1)+2*r;return c.a.createElement("svg",{width:t,height:l},c.a.createElement("text",{y:0,fontSize:a},c.a.createElement("tspan",{x:0,dy:"".concat(1.2,"em"),fontWeight:"bold"},"Parameters"),n.map((function(e){var t=e.name,a=e.value;return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("tspan",{x:0,dy:"".concat(1.8,"em")},t,":"),c.a.createElement("tspan",{x:0,dy:"".concat(1.2,"em")},a))}))))};me.defaultProps={fontSize:12,offsetY:10};var be=Object(i.memo)(me),pe=function(e){var t=e.xAxisMap,a=e.yAxisMap,n=e.blockWidth,r=e.leftOffset,l=e.parameters,i=e.fontSize,o=t[0],s=o.x,u=o.width,d=a[0],m=d.y,b=d.height,p=s+u+r;return c.a.createElement("svg",{x:p,y:m,width:n,height:b},c.a.createElement(be,{width:n,parameters:l,offsetY:10,fontSize:i}))};pe.defaultProps={blockWidth:120,leftOffset:20,fontSize:12};var fe=pe,ve=a(165),ge=a.n(ve),he={start:null,end:null},ye=["select","selectRange","selectedRange"],xe=function(e){var t=e.x,a=e.y,n=e.lines,r=e.limits,l=e.offset,o=e.padding,s=e.fontSize,u=e.widthUpdater,d=e.fillOpacity,b=e.defaultPosition,p=Object(i.useRef)(null),v=Object(i.useState)(0),g=Object(f.a)(v,2),h=g[0],y=g[1];Object(i.useEffect)((function(){var e=0;p.current.childNodes.forEach((function(t){var a=t.getComputedTextLength();e=a>e?a:e})),y(e+2*o)}),[u,y]);var x=(1.2*n.length+1)*s,E=t+l.x+h,O=a+l.y+x,j=r&&E>r.x?"left":b.x,k=r&&O>r.y?"top":b.y,w="right"===j?t+l.x:t-(h+l.x),N="bottom"===k?a+l.y:a-(x+l.y),C=w+o,L=N+o;return c.a.createElement("g",null,h&&c.a.createElement("rect",{x:w,y:N,fill:m.black.main,fillOpacity:d,height:x,width:h,rx:3,ry:3}),c.a.createElement("text",{y:L,ref:p,fill:m.lightGrey.main,fontSize:s,textLength:"90%"},n.map((function(e,t){var a=e.text,n=e.bold,r=e.wide;return c.a.createElement("tspan",{key:a,x:C,dy:0===t?"0.6em":"1.2em",fontWeight:n?"bold":"normal",letterSpacing:r?1.5:"normal"},a)}))))};xe.defaultProps={limits:null,lines:[],offset:{x:0,y:30},padding:10,fontSize:14,fillOpacity:.7,widthUpdater:"",defaultPosition:{x:"right",y:"bottom"}};var Ee=c.a.memo(xe),Oe=m.blue.main,je=m.lightGrey.main,ke=function(e){var t=e.from,a=e.to,n=e.units;return a?"[".concat(D(t)).concat(n," - ").concat(D(a)).concat(n,"]"):">= ".concat(D(t)).concat(n)},we=function(e){var t,a,n,r,l=e.classes,o=e.xAxisMap,s=e.yAxisMap,u=e.orderedTooltipTicks,d=e.tooltipAxisBandSize,m=e.graphContainer,b=e.tooltipTitle,p=e.margin,v=e.xUnits,g=e.data,h=Object(i.useState)(null),y=Object(f.a)(h,2),E=y[0],O=y[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,a=void 0===t?null:t,n=e.onEnter,r=void 0===n?null:n,l=e.onRangeLeave,c=void 0===l?null:l,o=Object(i.useState)(he),s=Object(f.a)(o,2),u=s[0],d=s[1],m=Object(i.useMemo)((function(){return S(ye)}),[]),b=Object(i.useState)((function(){return m()})),p=Object(f.a)(b,2),v=p[0],g=p[1],h=function(e){var t=+e.currentTarget.getAttribute("data-index");return"selectedRange"!==v&&d((function(e){var a=e.start;return"select"===v?{start:t,end:t}:{start:a,end:t}})),r&&r(e,v)},y=function(e){var t=+e.currentTarget.getAttribute("data-index"),n=m();return d((function(e){var a=e.start;return"selectedRange"===n?{start:a,end:t}:{start:t,end:t}})),g(n),a&&a(e,n)},x=function(e){return"select"===v&&d(he),c&&c(e,v)};return{mode:v,range:u,handleEnter:Object(i.useCallback)(h,[d,v,r]),handleClick:Object(i.useCallback)(y,[d,g,a]),handleRangeLeave:Object(i.useCallback)(x,[v,c])}}({onEnter:Object(i.useCallback)((function(e,t){if("select"===t){var a=m.current.container.getBoundingClientRect().y;O(e.clientY-a)}}),[O,m])}),w=k.handleEnter,N=k.handleClick,C=k.handleRangeLeave,L=k.mode,_=k.range,M=Object(i.useMemo)((function(){var e=s[0],t=e.height,a=e.niceTicks,n=e.padding,r=void 0===n?{}:n,l=o[0],i=l.width,c=l.x,u=t-(r.top||0),m=a[a.length-1],b=(p.top||0)+t,f=c+i;return{fullHeight:b,scaleDivision:u/m,bandWidth:Math.floor(d),tooltipLimits:{y:b-5,x:f-5}}}),[o,s,p,d]),A=M.fullHeight,I=M.bandWidth,P=M.scaleDivision,R=M.tooltipLimits,T="select"===L,z=(n=_.start,r=_.end,n<=r?{start:n,end:r}:{start:r,end:n}),V=z.start,Y=z.end,B=null!==V&&null!==Y,F=(B&&null!==(t=g[V])&&void 0!==t?t:{}).xValue,H=(B&&null!==(a=g[Y+1])&&void 0!==a?a:{}).xValue,U=B?function(e){var t=e.start,a=e.end,n=e.data;if(null!==t&&t===a)return n[t].yValue;for(var r=0,l=t;l<=a;l+=1){var i=n[l];r+=i?i.yValue:0}return D(r)}({start:V,end:Y,data:g}):null,$=(B?u[V]:{}).coordinate,X=B?[{text:b,bold:!0},{text:ke({from:F,to:H,units:v})},{text:"Occurrence: ".concat(D(U),"%"),bold:!0},{text:j[L]}]:[];return c.a.createElement("g",null,c.a.createElement("g",{onMouseLeave:C},u.map((function(e,t){var a,n=e.coordinate,r=g[t].yValue*P,i=!T&&W(t,V,Y),o=G()(l.band,(a={},Object(x.a)(a,l.hoverable,T),Object(x.a)(a,l.selectRange,i&&"selectRange"===L),Object(x.a)(a,l.selectedRange,i&&"selectedRange"===L),a));return c.a.createElement("rect",{x:n,y:A-r,fill:Oe,stroke:je,key:n,width:I,height:r,"data-index":t,onClick:N,onMouseEnter:w,className:o})}))),B&&c.a.createElement(Ee,{lines:X,x:$,y:E,widthUpdater:L,limits:R}))},Ne=Object(I.a)((function(e){var t=e.palette;return{title:{margin:"5px 25px",whiteSpace:"pre-wrap"},graphWrapper:{zIndex:1},paramsContainer:{marginLeft:20},graphContainer:{"& svg":{overflow:"visible"}},band:{fill:t.blue.main,stroke:t.lightGrey.main,"&$selectRange":{fill:t.blue.dark},"&$selectedRange":{fill:t.blue.dark},"&$hoverable":{"&:hover":{fill:t.blue.dark}}},hoverable:{},selectRange:{},selectedRange:{}}})),Ce={left:15,right:145,top:30,bottom:30},Le=function(e){var t=e.annualData,a=e.graphWidth,n=e.yTickStep,r=(e.projectId,e.statsIds,e.pngFileName,Object(i.useMemo)((function(){return"".concat(ge()())}),[])),l=Object(i.useState)(0),o=Object(f.a)(l,2),s=o[0],u=o[1],d=Ne(),m=Object(i.useRef)(null),b=.8*a,p=Object(i.useMemo)((function(){var e=Array.isArray(t)&&!!t[0].levels,a=e?t[s]:t;return Object(ae.a)({},a,{withLevelsSelect:e,yTicks:Object(y.range)(Math.floor(a.minYValue),a.maxYValue,n)})}),[t,n,s]),g=p.data,x=p.title,E=p.yTicks,O=p.xUnits,j=p.extraParams,k=p.maxYValue,w=p.yLabel,N=p.xLabel,C=p.levels,L=p.tooltipTitle,_=p.withLevelsSelect,W=_?Object(ae.a)({},Ce,{left:65}):Ce,M=a+W.left+W.right,S=b+Ce.top+Ce.bottom;return c.a.createElement(v.a,{justify:"center",container:!0},c.a.createElement(v.a,{item:!0},c.a.createElement(ne.a,{id:"chart-main-title"+r,className:d.title,variant:"subtitle1",align:"center"},x),c.a.createElement(v.a,{justify:"center",container:!0},c.a.createElement(v.a,{item:!0,className:d.graphWrapper},c.a.createElement(h.b,{id:"chart-internal-svg"+r,ref:m,data:g,width:M,height:S,margin:W,barCategoryGap:0,className:d.graphContainer},c.a.createElement(h.g,{tick:{fontSize:9},label:{value:N,position:"bottom",offset:-10}}),c.a.createElement(h.h,{ticks:E,domain:[0,k],tick:{fontSize:9},label:{value:w,angle:-90,position:"center",offset:0}}),c.a.createElement(h.c,{strokeDasharray:"3 3"}),c.a.createElement(h.e,{key:1,xUnits:O,data:g,tooltipTitle:L,graphContainer:m,component:we,classes:d}),_&&c.a.createElement(h.e,{key:2,levels:C.values,type:C.type,barWidth:65,selectedLevel:s,onSelect:u,xOffset:10,component:de}),c.a.createElement(h.e,{key:3,component:fe,leftOffset:10,blockWidth:120,parameters:j}))))))};Le.defaultProps={yTickStep:1,graphWidth:500};var _e=Le,We=function(e){var t=Object(y.get)(e,"visualization.kwargs",null);if(!t)throw Error("Invalid graph data");var a,n,r=X(Object(y.pick)(t,E)),l=r.yName,i=r.xName,c=e[i],o=e[l],s=t.ylabel,u=t.xlabel,d=(a=c.attributes.units,N[a]||a),m=Object(y.get)(e,"variables.variables.0.longName",""),b=function(e){return Object(y.get)(e,"visualization.web.dataLegend0","").replace(J,"").trim()}(e),p=e.level&&e.level.values?{type:(n=e.id,"WIN"===n.substring(0,3)?k:w),values:e.level.values}:{};if(!!!Object.keys(p).length){var f=K(e),v=c.values,h=o.values,x=Math.max.apply(Math,Object(g.a)(h)),O=Math.min.apply(Math,Object(g.a)(h));return{data:v.map((function(e,t){return{xValue:D(e),yValue:D(h[t])}})),title:b,extraParams:f,minYValue:O,maxYValue:x,yLabel:s,xLabel:u,xUnits:d,levels:p,tooltipTitle:m}}var j=c.values,C=o.values;return j.reduce((function(t,a,n){var r=function(e,t){if(![k,w].includes(e))throw Error("Invalid level type");if(e===w&&0===+t)return"Surface";var a="".concat(e[0].toUpperCase()).concat(e.slice(1)),n="".concat(a," = ").concat(D(t,1)," m");return e===k?"".concat(n," from sea level"):n}(p.type,p.values[n]),l="".concat(b,"\n").concat(r),i=K(e,n),c=C[n],o=Math.max.apply(Math,Object(g.a)(c)),f=Math.min.apply(Math,Object(g.a)(c)),v=a.map((function(e,t){return{xValue:D(e),yValue:D(c[t])}}));return t.push({data:v,title:l,extraParams:i,minYValue:f,maxYValue:o,yLabel:s,xLabel:u,xUnits:d,levels:p,tooltipTitle:m}),t}),[])}(te);var Me=function(){return c.a.createElement("div",{className:"App App-header"},c.a.createElement("header",null,"Charts optimization"),c.a.createElement("br",null),c.a.createElement("div",{className:"charts"},c.a.createElement("h3",null,"Before"),c.a.createElement(ee,{graphData:te}),c.a.createElement("br",null),c.a.createElement("h3",null,"After"),c.a.createElement(_e,{annualData:We})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{theme:p},c.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[195,1,2]]]);
//# sourceMappingURL=main.9958818a.chunk.js.map