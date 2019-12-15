var qs=["кто создал таблицу химических элементов?","что такое валентность?"]

    var aq1=["Леонардо Давинчи","А.С.Пушкин","Менделев","Никола Тесла"]

    var aq2=["полярная связь между двумя атамами","не полярная связь между двумя атамами","связь между двумя атамами металов и неметаллов","связь между двумя атамами неметалов"]

    var aqs=[aq1,aq2];
function loading(){

    

for(var j=0;j<qs.length;j+=1){



    var card=document.getElementById('item'+j)
card.getElementsByClassName('q')[0].innerHTML=qs[j]
var ans=card.getElementsByClassName('otvet');

for(var i=0;i<ans.length;i+=1){
    
    ans[i].innerHTML=aqs[j][i];
}


}

}

function check(){
    var rs=0;
    var all=qs.length;
    var wrong=all;
    if(document.getElementById('r1').checked){
        rs++;
        wrong--;
    }
    if(document.getElementById('r2').checked){
        rs++;
        wrong--;
    }
    alert("количество верных ответов = "+rs)

}