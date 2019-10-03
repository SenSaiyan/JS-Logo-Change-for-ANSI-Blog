function replaceLogo(){
	var ANABwebp = document.createElement("source");
	ANABwebp.setAtrribute("srcset", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.webp");
	ANABwebp.setAtrribute("type", "image/webp");

	var ANABjpg = document.createElement("source");
	ANABjpg.setAtrribute("srcset", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg");

	var image = document.createElement("img");
	image.setAtrribute("src", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg");
	image.setAtrribute("class", "size-full wp-image-162429 aligncenter sp-no-webp");
	image.setAtrribute("alt", "ANAB ANSI National Accreditation Board Blog ISO/IEC 17025");
	image.setAtrribute("height", "85");
	image.setAtrribute("width", "400");
	image.setAtrribute("srcset", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg");

	var child1 = document.getElementById("sp-no-webp").childNodes[0];
	var child2 = document.getElementById("sp-no-webp").childNodes[1];
	var child3 = document.getElementById("sp-no-webp").childNodes[2];

	child1.replaceChild(ANABwebp, child1.childNodes[0]);
	child2.replaceChild(ANABwebp, child1.childNodes[1]);
	child3.replaceChild(ANABwebp, child1.childNodes[2]);
}