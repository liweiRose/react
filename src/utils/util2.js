import html2canvas from 'html2canvas';
import request from './requestOne';
/*
*参数：flag:0-下载到本地，1-上传后台; number
*      id ：dome元素的id;           string
*      url :后台请求地址；           string
*      method:请求方法；            string
*/

export default class Util {
    static  html2image ( flag , id , filename, url ,method) {
        if(flag===0){
            html2canvas(document.getElementById(id)).then(
                function(canvas) {
                    var dome = document.createElement('images');
                        dome.innerHTML = '';
                        dome.appendChild(canvas);
                        dome.setAttribute('id','html2image');
                        dome.setAttribute('style','display:none');
                        document.body.appendChild(dome);
    
                    let dataURL = canvas.toDataURL();
    
                    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                        save_link.href = dataURL;
                        save_link.download = filename;
                   
                    var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                        save_link.dispatchEvent(event);
                }
              ).then(
                function() {
                    var body = document.getElementsByTagName('body')[0];
                    var dome=document.getElementById('html2image');
                    body.removeChild(dome);
                } 
              );
        }else if(flag===1){
            html2canvas(document.getElementById(id)).then(
                function(canvas) {
                    let dataURL = canvas.toDataURL();
                    let b64 = dataURL.substring(22);
                     if(method==='GET'){
                        request({ url, method, params:{base64:b64}})
                        .then((res) => {
                            // if(res.rc){
                            //    console.log(111)
                            // }else{
                            //    console.log(222)
                            // }
                        })
                    }else{
                        request({ url, method, data:{base64:b64}})
                        .then((res) => {
                            // if(res.rc){
                            //    console.log(111)
                            // }else{
                            //    console.log(222)
                            // }
                        })
                    }
                    });
                    
                   
        }
    
    
    
    };
}




















