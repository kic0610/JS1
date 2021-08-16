

// var문제 해결하기

 var small_width = getComputedStyle(document.documentElement).getPropertyValue('--small-width');

 var small_height = getComputedStyle(document.documentElement).getPropertyValue('--small-height');
 
 var big_width = getComputedStyle(document.documentElement).getPropertyValue('--big-width');
 
 var big_height = getComputedStyle(document.documentElement).getPropertyValue('--big-height');
 




var aaa1 = document.querySelector('.슬라이드 > img:nth-of-type(1) ');

var bbb1 = document.querySelector('.슬라이드 > img:nth-of-type(2) ');

var ccc1 = document.querySelector('.슬라이드 > img:nth-of-type(3) ');



// 클릭할때마다 배열을 -2하면 이전순서의 박스와 이미지가 택해진다
// -2를 배열속 특정숫자에하려면 6개순서의 숫자를 변수로 지정한다

// ? 배열속 순서 0번째에서 -2를 하게될경우 4번이라는 순서가 택해질지 의문

var imgAL = [aaa1,bbb1,ccc1];

var a1 = 0;

var b1 = 1;

var c1 = 2;



var leftbutton = {

   leftmove :  function () {

      
      var leftStr1 =  imgAL[a1].style.left;

      var indexofpx1 = leftStr1.indexOf("px");

      var num1 = leftStr1.substring( 0 , indexofpx1);



            // 여기들어있는 요소의 매개변수를 center로 이동하시오
      if (a1 === 2) {
         var leftpx1 = Number(num1) + 280 + 'px';
      }
      else if (a1 === 1) {
         var leftpx1 = Number(num1) + 200 + 'px';
      }
      else {
         var leftpx1 = Number(num1) + 200 + 'px';
      }


      imgAL[a1].style.left = leftpx1;
      imgAL[a1].style.height = big_height;
      imgAL[a1].style.width = big_width;
      imgAL[a1].style.transition = 'all 1.0s';
      imgAL[a1].style.zIndex = '1';


   
   
      if (a1 === 0) {
         a1=2;
      }
      else if (a1 === 2) {
         a1=1;
      } else {
         a1=0;
      }


      // 여기들어있는 요소의 매개변수를 last로 이동하시오

      var leftStr2 =  imgAL[b1].style.left;

      var indexofpx2 = leftStr2.indexOf("px");
      
      var num2 = leftStr2.substring( 0 , indexofpx2);
      
      if (b1 === 2) {
         var leftpx2 = Number(num2) + 200 + 'px';
      }
      else if (b1 === 1) {
         var leftpx2 = Number(num2) + 200 + 'px';
      }
      else {
         var leftpx2 = Number(num2) + 280 + 'px';
      }

      imgAL[b1].style.left = leftpx2 ;
      imgAL[b1].style.height = small_height;
      imgAL[b1].style.width = small_width ;
      imgAL[b1].style.transition = 'all 0.6s';
      imgAL[b1].style.zIndex = '0';


   
   
      if (b1 === 1) {
         b1=0;
      }

      else if (b1 === 0) {
         b1=2;
      } 

      
      else {
         b1=1;
      }


      // 여기들어있는 요소의 매개변수를 first로 이동하시오

      var leftStr3 =  imgAL[c1].style.left;

      var indexofpx3 = leftStr3.indexOf("px");
      
      var num3 = leftStr3.substring( 0 , indexofpx3);
         
      

      if (c1 === 2) {
         var leftpx3 = Number(num3) - 480 + 'px';
      }
      else if (c1 === 1) {
         var leftpx3 = Number(num3) - 400 + 'px';
      }
      else {
         var leftpx3 = Number(num3) - 480 + 'px';
      }


      imgAL[c1].style.left = leftpx3 ;
      imgAL[c1].style.height = small_height;
      imgAL[c1].style.width = small_width ;
      imgAL[c1].style.transition = 'all 0.8s';
      imgAL[c1].style.zIndex = '-1';
   



      if (c1 === 2) {
         c1=1;
      }

      else if (c1 === 1) {
         c1=0;
      } 
      
      else {
         c1=2;
      }

      
   }

}   


function left_handler() {

   leftbutton.leftmove();

}







var aaa2 = document.querySelector('.슬라이드 > img:nth-of-type(1)');

var bbb2 = document.querySelector('.슬라이드 > img:nth-of-type(2)');

var ccc2 = document.querySelector('.슬라이드 > img:nth-of-type(3)');

var imgAR = [aaa2,bbb2,ccc2];

var a2 = 0;

var b2 = 1;

var c2 = 2;



var rightbutton = {

   rightmove : function () {

      var rightstr1 = imgAR[a2].style.right;

      var indexofpx1r = rightstr1.indexOf('px');

      var num1r = rightstr1.substring( 0 , indexofpx1r);

      if (a2 === 2) {
         var rightpx1 = Number(num1r) + 480 + 'px';
      } 
      else if(a2 === 1) {
         var rightpx1 = Number(num1r) + 400 + 'px';
      }
      else {
         var rightpx1 = Number(num1r) + 480 + 'px';
      }


      imgAR[a2].style.left = rightpx1 ; // 이것을 잘못작성하면 aaa2가 img인걸 콘솔에서 인지못함
      imgAR[a2].style.height = small_height;
      imgAR[a2].style.width = small_width;
      imgAR[a2].style.transition = 'all 1.0s';
      imgAR[a2].style.zIndex = '-1';  

      if (a2 === 0) {
         a2=1;
      }

      else if (a2 === 1) {
         a2=2;
      } 
      
      else {
         a2=0;
      }





      var rightstr2 = imgAR[b2].style.right;

      var indexofpx2r = rightstr2.indexOf('px');

      var num2r = rightstr2.substring( 0 , indexofpx2r);

      if (b2 === 2) {
         var rightpx1 = Number(num2r) - 200 + 'px';
      } 
      else if(b2 === 1) {
         var rightpx1 = Number(num2r) - 200 + 'px';
      }
      else {
         var rightpx1 = Number(num2r) - 280 + 'px';
      }


      imgAR[b2].style.left = rightpx1; // 이것을 잘못작성하면 aab2가 img인걸 콘솔에서 인지못함
      imgAR[b2].style.height = small_height;
      imgAR[b2].style.width = small_width;
      imgAR[b2].style.transition = 'all 1.0s';
      imgAR[b2].style.zIndex = '0';  

      if (b2 === 1) {
         b2=2;
      }

      else if (b2 === 2) {
         b2=0;
      } 
      
      else {
         b2=1;
      }




      var rightstr3 = imgAR[c2].style.right;

      var indexofpx3r = rightstr3.indexOf('px');

      var num3r = rightstr3.substring( 0 , indexofpx3r);

      if (c2 === 2) {
         var rightpx3 = Number(num3r) - 280 + 'px';
      } 
      else if(c2 === 1) {
         var rightpx3 = Number(num3r) - 200 + 'px';
      }
      else {
         var rightpx3 = Number(num3r) - 200 + 'px';
      }


      imgAR[c2].style.left = rightpx3; // 이것을 잘못작성하면 aac2가 img인걸 콘솔에서 인지못함
      imgAR[c2].style.height = big_height;
      imgAR[c2].style.width = big_width;
      imgAR[c2].style.transition = 'all 1.0s';
      imgAR[c2].style.zIndex = '1';  

      if (c2 === 2) {
         c2=0;
      }

      else if (c2 === 0) {
         c2=1;
      } 
      
      else {
         c2=0;
      }

   }
}



function right_handler() {

   rightbutton.rightmove();

}

