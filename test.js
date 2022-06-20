    var stmnLEFT = 50; 
    var stmnGAP1 = 0; 
    var stmnGAP2 = 150; 
    var stmnBASE = 150;  
    var stmnActivateSpeed = 20; 
    var stmnScrollSpeed = 5; 
    var stmnTimer; 
      
    function RefreshStaticMenu() {  //우측 문의 배너 퀵메뉴 자바스크립트
    var stmnStartPoint, stmnEndPoint; 
    stmnStartPoint = parseInt(document.getElementById('STATICMENU').style.top, 10); 
    stmnEndPoint = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + stmnGAP2; 
    if (stmnEndPoint < stmnGAP1) stmnEndPoint = stmnGAP1; 
    if (stmnStartPoint != stmnEndPoint) { 
      stmnScrollAmount = Math.ceil( Math.abs( stmnEndPoint - stmnStartPoint ) / 15 ); 
      document.getElementById('STATICMENU').style.top = parseInt(document.getElementById('STATICMENU').style.top, 10) + ( ( stmnEndPoint<stmnStartPoint ) ? -stmnScrollAmount : stmnScrollAmount ) + 'px'; 
      stmnRefreshTimer = stmnScrollSpeed; 
    }
    stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed); 
      } 
      function InitializeStaticMenu() {
      document.getElementById('STATICMENU').style.right = stmnLEFT + 'px'; 
      document.getElementById('STATICMENU').style.top = document.body.scrollTop + stmnBASE + 'px'; 
      RefreshStaticMenu();
      }
