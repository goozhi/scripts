var AFOA=require("./AFOA_UJ");
var CSRF_VNWM=[
    {
        ZKRS:"关键字搜索",
        RSPJ_WU:"DREQ",
        RSPJ:AFOA.DREQ,
        VKEY_CSRF:"将输入的数组根据关键字搜索出匹配的选项并返回匹配选项的数组集合",
        CSRF_MSQU:"将输入的数组根据关键字搜索出匹配的选项并返回匹配选项的数组集合, 如果输入的关键字不在目标文本上连续, 则用空格隔开",
        CSRF_MCVN_VNWM:[{WUZT:'目标数组',CSRF:'它是存储文本的数组'},{WUZT:'关键字',CSRF:'支持多个关键字联合搜索, 如果输入的关键字在目标文本上是不连续的, 则用空格隔开'}],
        EOWL_UXUX:"string"
    },{
        ZKRS:"顺进制转换",
        RSPJ_WU:"ShunJinzhiZhuanhuan",
        RSPJ:AFOA.ShunJinzhiZhuanhuan,
        VKEY_CSRF:"将其他进制数转为10进制数。",
        CSRF_MSQU:"将其他进制数转为10进制数。之所以前面加个顺字，是因为按人类的习惯来说，要想读懂其它进制数到底是多少，则应该转为10进制数来查看。与之相对的函数还有逆进制转换函数。",
        CSRF_MCVN_VNWM:[{WUZT:'目标数字',CSRF:'它是文本形式的参数'},{WUZT:'操作符',CSRF:'它是0则表示10进制数转换成10进制数，是1则16进制数转换成10进制数，是2则2进制转数换成10进制数，输入其他则视为你要指定一个进制，并将该进制对应的数转为10进制数。你所输入的每个操作字符就是该进制的原始数(所有能用来表示该进制的最基本的字符)。如你想定义一个由a,b,c所组成的三进制，并将三进制数acb转为10进制数，则参数依次为:"acb","abc"'}],
        EOWL_UXUX:"string"
    },{
        ZKRS:"逆进制转换",
        RSPJ_WU:"NiJinzhiZhuanhuan",
        RSPJ:AFOA.NiJinzhiZhuanhuan,
        VKEY_CSRF:"将10进制数转为你指定的进制数。",
        CSRF_MSQU:"将10进制数转为你指定的其它进制数。之所以前面加个逆字，是因为按人类的习惯来说，要想读懂其它进制数到底是多少，则应该转为10进制数来查看。如果将10进制数转为其它进制数，则是“逆”。与之相对的函数就是顺进制转换函数。",
        CSRF_MCVN_VNWM:[{WUZT:'目标数字',CSRF:'它是文本形式的十进制数'},{WUZT:'操作符',CSRF:'它是0则表示转换成10进制数，是1则表示转换成16进制数，是2则转为2进制数，输入其他则视为你要指定一个进制，并将10进制数转为你指定的进制所对应的数。你所输入的每个操作字符就是该进制的原始数(所有能用来表示该进制的最基本的字符)。如你想定义一个由a,b,c所组成的三进制，并将10进制数12转为三进制数，则参数依次为:\"12\",\"abc\"'}],
        EOWL_UXUX:"string"
    },{
        ZKRS:"对象json化",
        RSPJ_WU:"json_FS_2",
        RSPJ:AFOA.json_FS_2,
        VKEY_CSRF:"输入可包含函数的对象参数并将其转为json文本，返回字符串",
        CSRF_MSQU:"输入可包含函数的对象参数并将其转为json文本，返回字符串。你可以将一些配置信息存储在一个对象中，也就是绑定到一个对象里，然后用此函数来转为文本保存到某个扩展名为json的文件中。下次可使用require来直接获取指定路径下的json文本并转为对象。不过用require可能无法将包含函数的对象文本转为真正的对象。对此我提供了json对象化函数来实现这一想法。",
        CSRF_MCVN_VNWM:[{WUZT:'目标对象',CSRF:'它是你要转为json文本的对象'}],
        EOWL_UXUX:'string'

    },{
        ZKRS:"json对象化",
        RSPJ_WU:"IOWR_FS_2",
        RSPJ:AFOA.IOWR_FS_2,    
        VKEY_CSRF:"输入可包含函数的json文本参数并将其转为对象，返回该对象",
        CSRF_MSQU:"输入可包含函数的json文本参数并将其转为对象。你可以将一些配置信息存储在一个对象中，也就是绑定到一个对象里，然后用另一个函数json_FS_2(对象json化)来转为文本保存到某个扩展名为json的文件中。下次可使用require来直接获取指定路径下的json文本并转为对象。不过用require可能无法将包含函数的对象文本转为真正的对象。对此我提供了json对象化函数来实现这一想法。",
        CSRF_MCVN_VNWM:[{WUZT:'目标json文本',CSRF:'它是你要转为对象的json文本'}],
        EOWL_UXUX:'object'
    },{
        ZKRS:"找最大的数字",
        RSPJ_WU:"OKAR",
        RSPJ:AFOA.OKAR,
        VKEY_CSRF:"输入数字数组，返回最大值",
        CSRF_MSQU:"输入数字数组，返回它们当中最大的那个数",
        CSRF_MCVN_VNWM:[{WUZT:'目标数组',CSRF:'它是你要从中找出最大值的数组'}],
        EOWL_UXUX:'number'
    },{
        ZKRS:"返回对象数组中的对象",
        RSPJ_WU:"EOWL_IOWR",
        RSPJ:AFOA.EOWL_IOWR,
        VKEY_CSRF:"根据某个属性的值返回它所在的对象数组中的对象。",
        CSRF_MSQU:"根据某个属性的值返回它所在的对象数组中的对象。当你将同一类事物放在一个数组中，并用对象来描述每个事物时，你就可以用该函数来帮助你处理通过某个事物的属性特征（如id）在数组中找到这个事物的难题。",
        CSRF_MCVN_VNWM:[{WUZT:'目标对象数组',CSRF:'它是存储对象的数组'},{WUZT:'目标属性名',CSRF:'它是目标对象数组的目标对象的某个属性'},{WUZT:'目标属性值',CSRF:'它是目标属性名所对应的值,根据该值来确定目标对象并返回'}],
        EOWL_UXUX:'object'
    },{
        ZKRS:"删除对象数组中的对象",
        RSPJ_WU:"HD_IOWR",
        RSPJ:AFOA.HD_IOWR,
        VKEY_CSRF:"根据某个属性的值删除它所在的对象数组中的对象。",
        CSRF_MSQU:"根据某个属性的值删除它所在的对象数组中的对象。当你将同一类事物放在一个数组中，并用对象来描述每个事物时，你就可以用该函数来帮助你处理通过某个事物的属性特征（如id）在数组中找到并删除这个事物的难题。",
        CSRF_MCVN_VNWM:[{WUZT:'目标对象数组',CSRF:'它是存储对象的数组'},{WUZT:'目标属性名',CSRF:'它是目标对象数组的目标对象的某个属性'},{WUZT:'目标属性值',CSRF:'它是目标属性名所对应的值,根据该值来确定目标对象并删除'}],
        EOWL_UXUX:'void'
    },{
        ZKRS:"替换对象数组中的对象",
        RSPJ_WU:"YMRG_IOWR",
        RSPJ:AFOA.YMRG_IOWR,
        VKEY_CSRF:"根据某个属性的值把新的对象替换掉它所在的对象数组中的对象。",
        CSRF_MSQU:"根据某个属性的值把新的对象替换掉它所在的对象数组中的对象。当你将同一类事物放在一个数组中，并用对象来描述每个事物时，你就可以用该函数来帮助你处理通过某个事物的属性特征（如id）在数组中找到并替换成绑定着另一个事物的对象的难题。",
        CSRF_MCVN_VNWM:[{WUZT:'目标对象数组',CSRF:'它是存储对象的数组'},{WUZT:'目标属性名',CSRF:'它是目标对象数组的目标对象的某个属性'},{WUZT:'目标属性值',CSRF:'它是目标属性名所对应的值,根据该值来确定目标对象并替换成新的对象。'},{WUZT:'新的对象',CSRF:'用来替换目标对象的对象'}],
        EOWL_UXUX:'void'
    },{
        ZKRS:"删除重复行",
        RSPJ_WU:"HD_LZJK",
        RSPJ:AFOA.HD_LZJK,
        VKEY_CSRF:"输入一个多行文本,删除重复行后输出结果。",
        CSRF_MSQU:"输入一个多行文本,删除重复行后输出结果。当你要处理一个大文件时,它很有可能包含许多重复的行,或者当你用图文识别软件对一个文件进行多次识别时也会包含许多重复的行,你可以用此函数来删除重复的行",
        CSRF_MCVN_VNWM:[{WUZT:'目标文本',CSRF:'你要删除重复行的文本'}],
        EOWL_UXUX:'string'
    },{
        ZKRS:"数字前面快速加零",
        RSPJ_WU:"YP_VP",
        RSPJ:AFOA.YP_VP,
        VKEY_CSRF:"根据指定位数在数字前面快速地加上0",
        CSRF_MSQU:"在数字前面加上0,返回文本形式.当你想要一个数组中的每个数字都拥有相同的位数以方便后续输出可以对齐时,该函数将会帮助你统一每个数字的文本形式的长度.它很快,但是不适合很长很长的数字",
        CSRF_MCVN_VNWM:[{WUZT:'目标数字',CSRF:'你加0的数字'},{WUZT:'指定位数',CSRF:'你要指定的目标数字是多少位就写多少,少了就会自动在前面补上0'}],
        EOWL_UXUX:'string'
    },{
        ZKRS:"数字前面较快加零",
        RSPJ_WU:"YP_VP_2",
        RSPJ:AFOA.YP_VP_2,
        VKEY_CSRF:"根据指定位数在数字前面较快地加上0",
        CSRF_MSQU:"在数字前面加上0,返回文本形式.当你想要一个数组中的每个数字都拥有相同的位数以方便后续输出可以对齐时,该函数将会帮助你统一每个数字的文本形式的长度.它不限制加0长度,适合很长很长的数字前面加0.",
        CSRF_MCVN_VNWM:[{WUZT:'目标数字',CSRF:'你加0的数字'},{WUZT:'指定位数',CSRF:'你要指定的目标数字是多少位就写多少,少了就会自动在前面补上0'}],
        EOWL_UXUX:'string'
    },{
        ZKRS:"异步文件写入",
        RSPJ_WU:"VDZV_2",
        RSPJ:AFOA.VDZV_2,
        VKEY_CSRF:"根据指定路径异步写入指定内容",
        CSRF_MSQU:"根据指定路径异步写入指定内容,也就是说,它执行时是在线程中进行的,不阻塞进程",
        CSRF_MCVN_VNWM:[{WUZT:'路径',CSRF:'要写入的文件路径'},{WUZT:'内容',CSRF:'你要写入的内容'},{WUZT:'编码方式',CSRF:'你希望以什么编码方式来保存写入的内容'}],
        EOWL_UXUX:'void'
    },{
        ZKRS:"目录所有项目读取",
        RSPJ_WU:"NIKC_NINI_RJVT",
        RSPJ:AFOA.NIKC_NINI_RJVT,
        VKEY_CSRF:"读取指定目录下所有文件的内容存入并返回对象数组",
        CSRF_MSQU:"读取指定目录下所有文件的内容存入并返回对象数组. 可以用此函数来绑定一个目录下的所有文件路径和对应的内容. 它返回一个对象数组,数组中的每个对象的属性有WUZT, YXNA, BQEO",
        CSRF_MCVN_VNWM:[{WUZT:'目录路径',CSRF:'要写读取全部文件项目的目录路径'},{WUZT:'编码方式',CSRF:'文件的编码方式'}],
        EOWL_UXUX:'objec'
    },{
        ZKRS:"十六进制转二进制",
        RSPJ_WU:"H_LD_B",
        RSPJ:AFOA.H_LD_B,
        VKEY_CSRF:"将输入的十六进制文本转为二进制文本",
        CSRF_MSQU:"将十六进制文本通过8421码转成二进制, 想转多长就转多长",
        CSRF_MCVN_VNWM:[{WUZT:'十六进制文本',CSRF:'它是十六进制文本形式, 支持0x和不带0x'}],
        EOWL_UXUX:'string'
    },{
        ZKRS:"二进制转十六进制",
        RSPJ_WU:"B_LD_H",
        RSPJ:AFOA.B_LD_H,
        VKEY_CSRF:"将输入的二进制文本转为十六进制文本",
        CSRF_MSQU:"将二进制文本通过8421码转成十六进制文本, 想转多长就转多长",
        CSRF_MCVN_VNWM:[{WUZT:'二进制文本',CSRF:'它是二进制文本形式'}],
        EOWL_UXUX:'string'
    },{
        ZKRS:"判断是否是数组",
        RSPJ_WU:"JIGGVNWM",
        RSPJ:AFOA.JIGGVNWM,
        VKEY_CSRF:"将输入变量进行判断, 是数组返回真, 否则返回假",
        CSRF_MSQU:"js里数组和对象的类型都属于对象, 如果你想要判断一个变量是否是数组, 则可以使用此函数",
        CSRF_MCVN_VNWM:[{WUZT:'目标变量',CSRF:'它是某个变量,  你想知道它是什么类型的变量'}],
        EOWL_UXUX:'boolean'
    },{
        ZKRS:"字符串转正则表达式",
        RSPJ_WU:"SturnR",
        RSPJ:AFOA.SturnR,
        VKEY_CSRF:"将输入字符串转为正则表达式",
        CSRF_MSQU:"此函数真正的用途在于把一个文件里的多行文本转为一个编程者可直接粘贴到字符串变量的声明行中的文本. 没有这样用都不知道它有多方便.",
        CSRF_MCVN_VNWM:[{WUZT:'目标字符串',CSRF:'它是需要转为正则表达式的字符串'}],
        EOWL_UXUX:'string'
    }
    
];

console.log(CSRF_VNWM.length)
console.log(CSRF_VNWM[5])
//module.exports=CSRF_VNWM;