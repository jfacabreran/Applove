/*
 * Archivo principal de funcionalidad de JS
 */
 var actual=undefined;
 for(var i=0;i<9;i++){
 	var divImg = document.getElementById("img-"+(i+1));
 	divImg.onclick = function(){
 		var div = document.createElement("div");
 		div.className = "max-img";
 		
 		actual = this.id.split('-')[1];//saco el numero del id
		var btnCerrar = document.createElement("div");
		btnCerrar.innerText= "x";
		btnCerrar.alt="Cerrar";
		btnCerrar.className="btn-cerrar";
		btnCerrar.onclick = function(){
			document.querySelector("body").removeChild(div);
			actual=undefined;
		};
		var btnNext = document.createElement("div");
		btnNext.innerText=">"
		btnNext.className="btn-nxt";
		btnNext.onclick = function(){
			actual++;
			if(actual>9)
				actual=1;
			if(actual !=undefined)
				div.removeChild(div.lastChild);
				ponerImg("img-"+actual,div);
		};
		div.appendChild(btnCerrar);
		div.appendChild(btnNext);
		ponerImg(this.id,div);
 		document.querySelector("body").appendChild(div);
 	};

 }
 function ponerImg(id,div){
 	console.log(id);
 	var img = document.createElement("img");
 	img.src = "assets/images/"+id +".jpg";
 	img.className = "maximize";
 	div.appendChild(img);
 }