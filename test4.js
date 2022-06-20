/*등록, 삭제*/
function check_onclick(){
     theForm=document.form1;
     if(theForm.kind.value=="" || theForm.name.value=="" || theForm.phnum.value=="" || theForm.password.value==""|| theForm.Photo.value=="" ){
      if(theForm.kind.value==""){
           alert("품종 입력칸이 비어있습니다. 확인해주세요.")
           return theForm.kind.focus();
      }else if(theForm.name.value==""){
           alert("동물 이름 입력칸이 비어있습니다. 확인해주세요.")
           return theForm.name.focus();
      }else if(theForm.phnum.value==""){
           alert("연락처 입력칸이 비어있습니다. 확인해주세요.")
           return theForm.phnum.focus();
      }else if(theForm.Photo.value==""){
           alert("동물 사진을 첨부 해주세요.")
           return theForm.Photo.focus();
      }
      else{
           alert("비밀번호 입력칸이 비어있습니다. 확인해주세요.")
           return theForm.password.focus();
      }
     } else {
      alert('등록 완료하였습니다.');
      window.location.reload();
     }      
 var school = document.getElementById('school');
 var kind = document.getElementById('kind');
 var name = document.getElementById('name');
 var phnum = document.getElementById('phnum');
 var password = document.getElementById('password');
 var school = {'품종' : kind.value, '이름' : name.value, '연락처' : phnum.value};

 let selectFile = document.querySelector("#photo").files[0];
 let reader = new FileReader();
 reader.readAsDataURL(selectFile); 

 localStorage.setItem(password.value, JSON.stringify(school));
 var retrievedObject = localStorage.getItem(school);
 console.log('retrievedObject: ', JSON.parse(retrievedObject));




 // Retrieve the object from storage
 const json = JSON.stringify(school);

 reader.onloadend = function() {
  // selected Image's BLOB
 console.log(reader.result);   
  
 let title = {
 "image": "동물 사진",
 "id": "품종",
 "name": "동물 이름",
 "phone": "전화번호",
 "explanation": "설명",
 }

 let listObj = [
{   
 "image": `<img src=${reader.result} style="width: 300px; height:auto;">`,
 "id": kind.value,
 "name": name.value,
 "phone": phnum.value,
 "explanation": explanation.value,

},

]

const $table = document.createElement('table');

for(let i in title)
{ 
 let $th = document.createElement('th');
  let $tr = document.createElement('tr');
 $tr.innerHTML = title[i];
 $th.appendChild($tr);
 $table.appendChild($th);
}

listObj.map(list=>{
  let $tr = document.createElement('tr');
 for(let i in list){
         let $td = document.createElement('td');
         $td.innerHTML = list[i];
         $tr.appendChild($td);
         $table.appendChild($tr);
 }
})
document.body.appendChild($table);
}
}

function retrieve() {
     var pas = document.getElementById('password').value;
     for(var i=0; i<localStorage.length; i++) {
          var key = localStorage.key(i);
          var val = localStorage.getItem(key);
               if(pas == key){
                    var result = confirm("등록리스트를 삭제 하시겠습니까?");
                    window.localStorage.removeItem(key);
                    if(result){
                         alert("삭제 하였습니다.");
                    }else{
                    }  
               }
     }
     window.location.reload();
}
function cklist(){
     document.getElementById("dglist").innerHTML="";
     for(var i=0; i<localStorage.length; i++) {
     var key = localStorage.key(i);
     var val = localStorage.getItem(key);

     const li = document.createElement("li");

// 2-2. li에 id 속성 추가 
     li.setAttribute('id',val);

// 2-3. li에 text node 추가 
     const textNode = document.createTextNode(val);
     li.appendChild(textNode);

// 3. 생성된 li를 ul에 추가
     document
     .getElementById('dglist')
     .appendChild(li);
}
 }