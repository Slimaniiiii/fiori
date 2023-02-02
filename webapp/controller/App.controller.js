sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller) {
    "use strict"
    return Controller.extend("Quickstart.App", {
        onShowHello: function () {
            alert("from controller");
        }
    })
})