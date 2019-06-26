let activeImgMenu = false;
let activeSubMenu = false;

function imgMenu() {
	let imgMenu = document.getElementById("img_menu").classList;
	if (activeImgMenu){
		imgMenu.remove('img_menu_displayed');
		imgMenu.add('img_menu_hidden');
		activeImgMenu = false;
	} else {
		imgMenu.remove('img_menu_hidden');
		imgMenu.add('img_menu_displayed');
		activeImgMenu = true;
	}
}

function subMenu(){
	let imgSubMenu = document.getElementById("sub_menu").classList;
	if (activeSubMenu){
		imgSubMenu.remove('img_sub_list_display');
		imgSubMenu.add('img_sub_list_hidden');
		activeSubMenu = false;
		imgMenu();
	} else {
		imgSubMenu.remove('img_sub_list_hidden');
		imgSubMenu.add('img_sub_list_display');
		activeSubMenu = true;
		imgMenu();
	}
}
