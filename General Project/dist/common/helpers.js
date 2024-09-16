"use strict";
var P365I;
(function (P365I) {
    var Common;
    (function (Common) {
        var Helpers;
        (function (Helpers) {
            function onAddress1Line1Change(executionContext) {
                const formContext = executionContext.getFormContext();
                const address1Line1Value = formContext.getAttribute("address1_line1").getValue();
                if (address1Line1Value) {
                    formContext.getAttribute("address1_city").setRequiredLevel("required");
                }
                else {
                    formContext.getAttribute("address1_city").setRequiredLevel("none");
                }
            }
            Helpers.onAddress1Line1Change = onAddress1Line1Change;
        })(Helpers = Common.Helpers || (Common.Helpers = {}));
    })(Common = P365I.Common || (P365I.Common = {}));
})(P365I || (P365I = {}));
//# sourceMappingURL=helpers.js.map