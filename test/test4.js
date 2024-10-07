"use strict";
var PaymentStatus4;
(function (PaymentStatus4) {
    PaymentStatus4["Success"] = "success";
    PaymentStatus4["Failed"] = "failed";
})(PaymentStatus4 || (PaymentStatus4 = {}));
//creem functia typeGuard
function isSucces(res) {
    if (res.status === PaymentStatus4.Success) {
        return true;
    }
    return false;
}
function getIdFromData(res) {
    if (isSucces(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
