'use strict';

let ajaxScript = 'https://fe.it-academy.by/AjaxStringStorage2.php';
let stringName = 'KUZNIATSOU_DYN_FORM_AJAX';

function getServerInfo(stringName, name) {
  $.ajax({
    url: ajaxScript, type: 'POST', cache: false, dataType: 'json',
    data: {
      f: 'READ', n: stringName + `_${name}`
    },
    success: getReady
  })
}

function getReady(callresult) {
  let result;
  if(callresult.error != undefined) {
    alert(callresult.error)
  } else if(callresult.error != "") {
    result = JSON.parse(callresult.result);
    }
  if(result) {
    let form = new Form(result, 'http://fe.it-academy.by/TestForm.php ', 'post');
    form.render();
  }
}

getServerInfo(stringName, 'formDef1');
getServerInfo(stringName, 'formDef2');

