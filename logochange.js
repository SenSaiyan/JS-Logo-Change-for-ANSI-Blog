function replaceLogo(){
	var ANABwebp = document.createElement("source");
	// ANABwebp[0].setAtrribute("srcset", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.webp");
	// ANABwebp[0].setAtrribute("type", "image/webp");
	ANABwebp["srcset"] = "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.webp";
	ANABwebp["type"] = "image/webp";

	var ANABjpg = document.createElement("source");
	// ANABjpg[0].setAtrribute("srcset", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg");
	ANABjpg["srcset"] = "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg";

	var image = document.createElement("img");
	// image[0].setAtrribute("src", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg");
	// image[0].setAtrribute("class", "size-full wp-image-162429 aligncenter sp-no-webp");
	// image[0].setAtrribute("alt", "ANAB ANSI National Accreditation Board Blog ISO/IEC 17025");
	// image[0].setAtrribute("height", "85");
	// image[0].setAtrribute("width", "400");
	// image[0].setAtrribute("srcset", "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg");
	image["src"] = "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg";
	image["class"] = "size-full wp-image-162429 aligncenter sp-no-webp";
	image["alt"] = "ANAB ANSI National Accreditation Board Blog ISO/IEC 17025";
	image["height"] = "85";
	image["width"] = "400";
	image["srcset"] = "https://blog.cachefly.net/wp-content/uploads/2019/10/ANAB-Logo.jpg";

	// console.log(document.getElementById("masthead"));
	// console.log(ANABwebp);
	// console.log(ANABjpg);
	// console.log(image);
	// console.log(document.getElementsByClassName("sp-no-webp"));
	var child1 = document.getElementsByClassName("sp-no-webp")[0].childNodes[0];
	var child2 = document.getElementsByClassName("sp-no-webp")[0].childNodes[1];
	var child3 = document.getElementsByClassName("sp-no-webp")[0].childNodes[2];

	// child1.replaceChild(ANABwebp, child1.childNodes[0]);
	// child2.replaceChild(ANABwebp, child1.childNodes[1]);
	// child3.replaceChild(ANABwebp, child1.childNodes[2]);
	document.getElementsByClassName("sp-no-webp")[0].replaceChild(ANABwebp, child1);
	document.getElementsByClassName("sp-no-webp")[0].replaceChild(ANABjpg, child2);
	document.getElementsByClassName("sp-no-webp")[0].replaceChild(image, child3);
}

replaceLogo();