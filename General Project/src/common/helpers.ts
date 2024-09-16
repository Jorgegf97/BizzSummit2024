namespace P365I.Common.Helpers {

    // Función que se ejecuta al cambiar el valor de Address1_Line1
    export function onAddress1Line1Change(executionContext: Xrm.Events.EventContext): void {
        // Obtenemos el contexto del formulario
        const formContext = executionContext.getFormContext();

        // Obtenemos el valor del campo Address1_Line1
        const address1Line1Value = formContext.getAttribute("address1_line1").getValue();

        // Verificamos si el campo tiene algún valor
        if (address1Line1Value) {
            // Si Address1_Line1 tiene un valor, hacemos que Address1_City sea obligatorio
            formContext.getAttribute("address1_city").setRequiredLevel("required");
        } else {
            // Si Address1_Line1 está vacío, hacemos que Address1_City no sea obligatorio
            formContext.getAttribute("address1_city").setRequiredLevel("none");
        }
    }

}
