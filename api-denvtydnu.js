const dateFormat = require('dateformat');
const DNY_V_TYDNU = ["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"];

exports.apiDenVTydnu = function (req, res, obj) {
    let dt = new Date();
    if (req.parameters.d && req.parameters.m && req.parameters.r) {
        dt.setDate(req.parameters.d);
        dt.setMonth(req.parameters.m-1);
        dt.setFullYear(req.parameters.r);
    }
    let denVTydnu =
    obj.den = DNY_V_TYDNU[dt.getDay()];;
    obj.datum = dateFormat(dt, "dd.mm.yyyy");
    res.end(JSON.stringify(obj));
}
