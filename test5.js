/*실종신고*/
function check_onclick(){
     theForm=document.form1;
     if(theForm.kind.value==""  || theForm.phnum.value=="" || theForm.explanation.value==""){
      if(theForm.kind.value==""){
           alert("품종 입력칸이 비어있습니다. 확인해주세요.")
           return theForm.kind.focus();
      }
      else if(theForm.phnum.value==""){
           alert("연락처 입력칸이 비어있습니다. 확인해주세요.")
           return theForm.phnum.focus();
      }
      else{
           alert("발견장소 입력칸이 비어있습니다. 확인해주세요.")
           return theForm.explanation.focus();
     }
 } else {
      alert('신고 접수 되었습니다.');
     }      
 var school = document.getElementById('school');
 var kind = document.getElementById('kind');
 var phnum = document.getElementById('phnum');
 var explanation = document.getElementById('explanation');
 var school = {'품종' : kind.value, '연락처' : phnum.value, '발견장소' : explanation.value};

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
 }
}
