#!name=WPS会员
#!desc=WPS解锁本地会员,支持大陆版以及非大陆版#(2022.07.10)
#!openUrl=https://github.com/I-am-R-E/Functional-Store-Hub/tree/Master/WPSOffice
#!author=@R·E https://t.me/Functional_Store_Hub

^https?:\/\/.*?account\.wps\.(com|cn)(:\d+)?\/api\/users\/\w+\/overview$ url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/WPSOffice/Script/WPS.js

# > WPS解锁稻壳会员
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js

hostname = *account.wps.cn, *account.wps.com, *.docer.wps.cn, vipapi.wps.cn, account.wps.cn
