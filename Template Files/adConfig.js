var adConfig = {
    "banner_width": "300",
    "banner_height": "250"
};

////////Funciones comunes, NO ELIMINAR!!!!!!!!////////////////////

function checkIfAdKitReady(event) {
	adkit.onReady(startAd);
}

window.addEventListener("load", checkIfAdKitReady);

///////////////////////////////////////////////////////////////////