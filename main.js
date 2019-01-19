window.jQuery = function(nodeOrSelector){
    let nodes = {};

    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes;
}

window.jQuery.ajax = function(url,method,body,successFn,faliFn){
    let request = new XMLHttpRequest();
    request.open(method,url);
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

window.$ = window.jQuery;






button.addEventListener('click',function(e){
     window.jQuery.ajax(
         '/xxx',
         'post',
         'a=1&b=2',
         (responseText)=>{console.log(1)},
         (request)=>{console.log(2)}
         )
})