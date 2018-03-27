let lis = document.querySelectorAll(".navBar a li");
let images = document.querySelectorAll(".navBar a li img");
let w = window.innerWidth;
let hamburgerBtn = document.querySelector("#hamburgerBtn");
let dropDownMenu = document.querySelector(".dropDownMenu");



for (let i=0; i<5; i++) {
	lis[i].addEventListener("click", function(){

		if (w > 767) {

			for (let i=0; i<5; i++) {
			
				if (lis[i].classList.contains("active")) {
					lis[i].classList.remove("active");
				}
			};

			this.classList.add("active");

			if (images[0].getAttribute("src").indexOf("active") != -1) {

				images[0].setAttribute("src", "img/shopping_cart.png");
			}

			if (images[1].getAttribute("src").indexOf("active") != -1) {
				
				images[1].setAttribute("src", "img/magnyfying.png");
			}
		};
	});
};	


for (let i=0; i<images.length; i++) {
	images[i].addEventListener("click", function(){

		if (w > 767) {

			for (let i=0; i<5; i++) {
				lis[i].classList.remove("active");
			}
			

			if (this.getAttribute("src") === "img/shopping_cart.png") {

				this.setAttribute("src", "img/shopping_cart_active.png");
				images[1].setAttribute("src", "img/magnyfying.png");

			} else if (this.getAttribute("src") === "img/magnyfying.png") {
				
				this.setAttribute("src", "img/magnyfying_active.png");
				images[0].setAttribute("src", "img/shopping_cart.png");
			};
		};

		
	});
};

hamburgerBtn.addEventListener("click", function(){
		dropDownMenu.classList.toggle("show");
});





		
