function darkLight(){
    let inputTag = document.querySelector('input');
        
        if(inputTag.value=='다크모드'){
            // 다크모드코드
            document.querySelector('body').style.backgroundColor='#333333';
            document.querySelector('h1').style.color='#ffffff';
            document.querySelector('h2').style.color='lightblue';
            let liTag = document.querySelectorAll('li');
            let aTag = document.querySelectorAll('a');
            for(let cnt=0;cnt<=4;cnt++){
                liTag[cnt].style.color='#ffffff';
                aTag[cnt].style.color='#ffffff';
            }
            let pTag = document.querySelectorAll('p');
            for(let cnt=0;cnt<=2;cnt++){
                pTag[cnt].style.color='#ffffff';
            }
            liTag[0].style.color='lightblue';
            aTag[0].style.color='lightblue';
        
            document.querySelector('input').value='라이트모드';
            document.querySelector('input').style.backgroundColor='#ffffff';
            document.querySelector('input').style.color='#333333';
        }else{
            // 라이트모드코드
            document.querySelector('body').style.backgroundColor='#ffffff';
            document.querySelector('h1').style.color='#333333';
            document.querySelector('h2').style.color='#ff0000';
            let liTag = document.querySelectorAll('li');
            let aTag = document.querySelectorAll('a');
            for(let cnt=0;cnt<=4;cnt++){
                liTag[cnt].style.color='#333333';
                aTag[cnt].style.color='#333333';
            }
            let pTag = document.querySelectorAll('p');
            for(let cnt=0;cnt<=2;cnt++){
                pTag[cnt].style.color='#333333';
            }
            liTag[0].style.color='#ff0000';
            aTag[0].style.color='#ff0000';
        
            document.querySelector('input').value='다크모드';
            document.querySelector('input').style.backgroundColor='#000000';
            document.querySelector('input').style.color='#ffffff';
        }
}