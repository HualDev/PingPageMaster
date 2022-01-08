let email=''


function hover(){
    document.getElementById('face').style.background='hsl(223, 87%, 63%)'
    document.getElementById('face').style.color='white'
}

function notHover(){
    document.getElementById('face').style.background='white'
    document.getElementById('face').style.color='hsl(223, 87%, 63%)'
}

function hoverT(){
    document.getElementById('twitter').style.background='hsl(223, 87%, 63%)'
    document.getElementById('twitter').style.color='white'
}

function notHoverT(){
    document.getElementById('twitter').style.background='white'
    document.getElementById('ttwitter').style.color='hsl(223, 87%, 63%)'
}

function hoverI(){
    document.getElementById('insta').style.background='hsl(223, 87%, 63%)'
    document.getElementById('insta').style.color='white'
}

function notHoverI(){
    document.getElementById('insta').style.background='white'
    document.getElementById('insta').style.color='hsl(223, 87%, 63%)'
}

function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		
        document.getElementById('error').style.visibility='visible'
        document.getElementById('correo').style.borderColor='red'
        document.getElementById('correo').placeholder='example@email.com'
        
	}
	
	}