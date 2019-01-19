window.jQuery = function(nodeOrSelector){
    let nodes = {};

    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes;
}

window.jQuery.ajax = function({url,method,body,successFn,faliFn,headers}){
    let url;
   if(arguments.length ===1){
    url = options.url;
   }else if(arguments.length ===2){
    url = arguments[0];
    options = arguments[1];
   }

   //es5
    // let method = options.method;
    // let body = options.body;
    // let successFn = options.successFn;
    // let faliFn = options.faliFn;
    // let headers = options.headers;
    // let request = new XMLHttpRequest();

    //es6 解构赋值
    // let {url,method,body,successFn,faliFn,headers} = options;
    
    request.open(method,url);
    for(let key in headers){
        let value = headers[key];
        request.setRequestHeader(key,value);
    }
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>= 200){
                successFn.call(undefined,request.responseText);
            }else if(request.status >= 400 && request.status < 300){
              faliFn.call(undefined,request);
        }
    }
}
    request.send(body);
}

function f1(responseText){}
function f2(responseText){}
button.addEventListener('click',function(e){
     window.jQuery.ajax({
            url:'/frank',
            method:'get',
            body:'a=1&b=2',
            headers:{
                'Content-Type':'application/x-www-form-url-encoded',
                'frank':'18'
            },
            successFn:function(x){
                f1.call(undefined,x);
                f2.call(undefined,x);
            },
            faliFn:function(x){
                console.log(x);
                console.log(x.status);
                console.log(request);
            }
        }   
     )
})