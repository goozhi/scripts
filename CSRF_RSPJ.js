////loadingMyModules/////
var WLYC_0 = require("./WLYC");
var HTML_YMRG_VNWM=require('./HTML_YMRG_VNWM')
var EOWL_HTML = require("./EOWL_HTML");
var TSJQ_2 = require("./TSJQ_2");
var TSJQ_JPHS = require("./TSJQ_JPHS")
var UKYP_2 = require("./UKYP_2");
var NIKC_ZHQH = require("./NIKC_ZHQH");
var ZKRS_DREQ_RTUL = require('./ZKRS_DREQ_RTUL');
var WLYC_ZKRSGGDREQ= require('./WLYC_ZKRSGGDREQ');
////loadingMyModules/////
var CSRF_RSPJ_VNWM=[
    {
        ZKRS:"回应请求",
        RSPJ_WU:"WLYC_1",
        RSPJ:WLYC_0.WLYC_1,
        VKEY_CSRF:"根据后台函数分析指令的结果来回应前台",
        CSRF_MSQU:"这个是根据其他函数返回的字符串或者数组来决定返回哪种形式的回应,要么是一个html,要么直接回应一句话",
        CSRF_MCVN_VNWM:[{WUZT:'结果文本或者数组',CSRF:'它是文本形式或数组形式的结果报告'},{WUZT:'回应体',CSRF:'用来回应的对象'}],
        EOWL_UXUX:"void"
    },{
        ZKRS:"指令接收处理",
        RSPJ_WU:"TSJQ_JPHS",
        RSPJ:TSJQ_JPHS,
        VKEY_CSRF:"接收一个指定网址请求, 并解析请求的相关数据存储在对象中, 然后以此调用相关函数进行回应",
        CSRF_MSQU:"接收一个指定网址请求, 并解析请求的相关数据存储在对象中, 然后以此调用相关函数进行回应",
        CSRF_MCVN_VNWM:[{WUZT:'请求对象',CSRF:'它是request对象'}
        ,{WUZT:'回应对象',CSRF:'它是response对象'}
        ,{WUZT:'文件项目对象数组',CSRF:'它是存放存储文件信息的对象的数组, 该函数需要它来调用其它与文件操作相关的函数'}
    ],
        EOWL_UXUX:"void"
    },{
        ZKRS:"指令解析",
        RSPJ_WU:"TSJQ_2",
        RSPJ:TSJQ_2,
        VKEY_CSRF:"根据前端发来的文本指令来调用相应函数,并返回文本报告",
        CSRF_MSQU:"输入一个文本,根据文本内容来调用函数,究竟是添加还是删除还是修改等等,它所调用的函数应该要返回文本或者数组,用于描述执行结果,然后根据这些结果,该函数也会返回一个字符串或者数组",
        CSRF_MCVN_VNWM:[{WUZT:'指令文本',CSRF:'一个字符串,存在于指令框'}
        ,{WUZT:'数据对象',CSRF:'用来存储data的对象,用querystring.parse(params)来获取'}
        ,{WUZT:'描述方法数组',CSRF:'该数组是存放用于描述方法的含有指令文本类型属性的对象'}
        ,{WUZT:'文件项目对象数组',CSRF:'它是存放存储文件信息的对象的数组, 该函数需要它来调用其它与文件操作相关的函数'}
    ],
        EOWL_UXUX:"string|obejct"
    },{
        ZKRS:"UKYP",
        RSPJ_WU:"UKYP_2",
        RSPJ:UKYP_2,
        VKEY_CSRF:"根据参数在指定的文件目录创建文件。",
        CSRF_MSQU:"要添加新的项目 ：在标题框中输入主题，在内容输入框中输入相应内容，在指令框中输入UKYP。",
        CSRF_MCVN_VNWM:[
            {WUZT:'数据对象',CSRF:'用来存储data的对象,用querystring.parse(params)来获取'},
            {WUZT:'目标目录',CSRF:'用来存储新建文件的目录'}
        ],
        EOWL_UXUX:"string"
    },{
        ZKRS:"NIKC",
        RSPJ_WU:"NIKC_ZHQH",
        RSPJ:NIKC_ZHQH,
        VKEY_CSRF:"列出默认目录下的所有文件",
        CSRF_MSQU:"要查看所有项目 ：在指令框中输入NIKC。",
        CSRF_MCVN_VNWM:[{WUZT:'数据对象',CSRF:'用来存储data的对象,用querystring.parse(params)来获取'}],
        EOWL_UXUX:"object"
    },{
        ZKRS:"根据数组变量调整输出HTML文本",
        RSPJ_WU:"HTML_YMRG_VNWM",
        RSPJ: HTML_YMRG_VNWM,
        VKEY_CSRF:"将存储项目选项的数组里的项目转为html选择项目的代码, 输出这些代码",
        CSRF_MSQU:"当你想要灵活地变换可选择项的内容, 那么你需要这个函数",
        CSRF_MCVN_VNWM:[
            {WUZT:'目标数组',CSRF:'用来存储选项内容的数组'},
            {WUZT:'HTML代码',CSRF:'html模板, 从中替换关键字酾为目标数组里的项目'},
            {WUZT:'数组项目html修饰代码',CSRF:'你需要指定数组项目在html中以哪种类型存在, 你可以建立selec类型, 那么你就需要将数组项目html修饰代码指定为"<option>"'}
    ],
        EOWL_UXUX:"string"
    },{
        ZKRS:"回应NIKC指令",
        RSPJ_WU:"WLYC_0.WLYC_2",
        RSPJ:WLYC_0.WLYC_2,
        VKEY_CSRF:"用于回应用户输入的NIKC指令",
        CSRF_MSQU:"当用户想要删除, 修改, 或者查询项目时, 他需要输入一个NIKC指令, 而WLYC_2就是用来根据NIKC_ZHQH函数执行的结果回应给用户的函数",
        CSRF_MCVN_VNWM:[
            {WUZT:'目标数组',CSRF:'这是NIKCZ_ZHQH函数返回的项目名数组'},
            {WUZT:'应答对象',CSRF:'这是应答参数response, 用于回应用户的'}
    ],
        EOWL_UXUX:"string"
    }
    ,{
        ZKRS:"项目主题搜索请求处理",
        RSPJ_WU:"ZKRS_DREQ_RTUL",
        RSPJ:ZKRS_DREQ_RTUL,
        VKEY_CSRF:"处理项目主题搜索请求的函数, 调用一些与项目主题搜索相关的函数, 并调用相应的应答函数来回应用户",
        CSRF_MSQU:"处理项目主题搜索请求的函数, 调用一些与项目主题搜索相关的函数, 并调用相应的应答函数来回应用户",
        CSRF_MCVN_VNWM:[
            {WUZT:'请求对象',CSRF:'这是请求参数request, 用于获取用户输入的内容'},
            {WUZT:'应答对象',CSRF:'这是应答参数response, 用于回应用户的'}
    ],
        EOWL_UXUX:"void"
    }
    ,{
        ZKRS:"项目主题搜索的回应",
        RSPJ_WU:"WLYC_ZKRSGGDREQ",
        RSPJ:WLYC_ZKRSGGDREQ,
        VKEY_CSRF:"接受项目主题搜索请求发来的相关数据, 并回应给用户",
        CSRF_MSQU:"接受项目主题搜索请求发来的相关数据, 并回应给用户",
        CSRF_MCVN_VNWM:[
            {WUZT:'请求相关数据对象',CSRF:'该对象存储的是请求对象中的form数据'},
            {WUZT:'应答对象',CSRF:'这是应答参数response, 用于回应用户的'}
    ],
        EOWL_UXUX:"void"
    }
    ,{
        ZKRS:"文件对象数组转html",
        RSPJ_WU:"EOWL_HTML",
        RSPJ:EOWL_HTML,
        VKEY_CSRF:"传入一个文件对象数组, 根据指定的主题属性名和内容属性名返回可操作文件的html代码",
        CSRF_MSQU:"传入一个文件对象数组, 根据指定的主题属性名和内容属性名返回可操作文件的html代码",
        CSRF_MCVN_VNWM:[
            {WUZT:'目标文件对象数组',CSRF:'该数组的元素是对象类型, 每个对象都拥有存储主题的属性和存储内容的属性'},
            {WUZT:'主题属性名',CSRF:'存放主题的属性的名字'},
            {WUZT:'内容属性名',CSRF:'存放内容的属性的名字'}
    ],
        EOWL_UXUX:"string"
    }
    
];
module.exports=CSRF_RSPJ_VNWM;