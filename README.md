# Validación de Formularios vía jQuery Validate:

## Requerimiento:

- Llamar la linbrería **jQuery**, **jQuery Validate** y los métodos adicionales **additional-methods.js** (los cuales incluyen validación de *RUT* y *RUT/Email* (y sus métodos asociados):

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/lib/jquery.validate.min.js"></script>
<script src="js/lib/additional-methods.js"></script>
```

-  Agregar la clase `"js-form-validate"` a la etiqueta `<form>`.
-  Invocar la función `validate`:

```
<script>
$(".js-form-validate").validate();
</script>
```

- Utilizar algunos de los siguientes formatos válidos según sea el tipo de campo a validarse.

## Tipos:

- Campo requerido: `data-rule-required="true"`
Ejemplo: `<input type="text" id="nombre" name="nombre" data-rule-required="true">`

- Texto de validación: `data-msg="Ingrese su nombre"`
Ejemplo: `<input type="text" id="nombre" name="nombre" data-rule-required="true" data-msg="Ingrese su nombre">`

- Email: `<input type="email"` y `data-rule-email="true"`
- Mínimo caracteres: `data-rule-minlength="7"`
- Máximo caracteres: `data-rule-maxlength="20"`
- RUT: `data-rule-rut="true"`
- RUT ó Email: `data-rule-rutmail="true"`
- Alfanumérico: `data-rule-alphanumeric="true"`
- Fecha: `<input type="date">`
- Sólo números: `data-rule-number="true"`
- Sólo letras: `data-rule-lettersonly="true"`
- URL: `<input type="url">` y `data-rule-url="true"`


## Ejemplos:

```
<form class="js-form-validate" method="get" action="">
  <fieldset>
    <div class="field-group">
      <label for="nombre" class="label">Nombre:</label>
      <div class="field">
        <input type="text" id="nombre" name="nombre" data-rule-required="true" data-msg="Ingrese su nombre">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="apellido-paterno" class="label">Apellido paterno:</label>
      <div class="field">
        <input type="text" id="apellido-paterno" name="apellido-paterno" data-rule-required="true" data-msg="Ingrese su apellido paterno">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="email" class="label">Email:</label>
      <div class="field">
        <input type="email" id="email" name="email" data-rule-required="true" data-rule-email="true" data-rule-minlength="7" data-msg="Ingrese su email" data-msg-email="Ingrese un email válido" data-msg-minlength="Ingrese al menos siete caracteres">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="email-confirmacion" class="label">Confirmación Email:</label>
      <div class="field">
        <input type="email-confirmacion" id="email-confirmacion" name="email-confirmacion" data-rule-required="true" data-rule-equalto="#email" data-rule-email="true" data-rule-minlength="7" data-msg="Reingrese su email" data-msg-equalto="No coinciden los emails" data-msg-email="Ingrese un email válido" data-msg-minlength="Ingrese al menos siete caracteres">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="rut" class="label">RUT:</label>
      <div class="field">
        <input type="text" id="rut" name="rut" data-rule-required="true" data-rule-rut="true" data-msg="Ingrese su RUT" data-msg-rut="Ingrese un RUT válido">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="rut-or-mail" class="label">RUT o Email:</label>
      <div class="field">
        <input type="text" id="rut-or-mail" name="rut-or-mail" data-rule-required="true" data-rule-rutmail="true" data-msg="Ingrese su RUT o email" data-msg-rutmail="Ingrese un RUT o email válido">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="password" class="label">Password:</label>
      <div class="field">
        <input type="password" id="password" name="password" maxlength="20" data-rule-required="true" data-rule-minlength="6" data-rule-maxlength="20" data-rule-alphanumeric="true" data-msg="Ingrese su clave" data-msg-minlength="Ingrese al menos seis caracteres" data-msg-maxlength="Ingrese a lo más 20 caracteres" data-msg-alphanumeric="Ingrese sólo número o letras">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="password-confirmacion" class="label">Confirmación Password:</label>
      <div class="field">
        <input type="password" id="password-confirmacion" name="password-confirmacion" maxlength="20" data-rule-required="true" data-rule-equalto="#password" data-rule-minlength="6" data-rule-maxlength="20" data-rule-alphanumeric="true" data-msg="Reingrese su clave" data-msg-equalto="No coinciden los passwords" data-msg-minlength="Ingrese al menos seis caracteres" data-msg-maxlength="Ingrese a lo más 20 caracteres" data-msg-alphanumeric="Ingrese sólo número o letras">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="fecha" class="label">Fecha:</label>
      <div class="field">
        <input type="date" id="fecha" name="fecha" data-rule-required="true" min="1940-01-01" data-msg="Seleccione una fecha">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="edad" class="label">Edad:</label>
      <div class="field">
        <input type="text" id="edad" name="edad" maxlength="2" data-rule-required="true" data-rule-number="true" data-rule-minlength="1" data-rule-maxlength="2" data-msg="Ingrese su edad" data-msg-minlength="Ingrese al menos un caracter" data-msg-maxlength="Ingrese a lo más dos caracteres" data-msg-number="Sólo números">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="url" class="label">URL:</label>
      <div class="field">
        <input type="url" id="url" name="url" data-rule-required="true" data-rule-url="true" data-msg="Ingrese su URL" data-msg-url="Ingrese una URL válida">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="ciudad" class="label">Ciudad:</label>
      <div class="field">
        <select name="ciudad" id="ciudad" data-rule-required="true" data-msg="Seleccione una ciudad">
          <option value="">Seleccione una ciudad</option>
          <option value="1">Santiago</option>
          <option value="2">Lima</option>
          <option value="3">Barranquilla</option>
        </select>
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <label for="razon-social" class="label">Razón Social:</label>
      <div class="field">
        <input type="text" id="razon-social" name="razon-social" data-rule-required="true" data-rule-lettersonly="true" data-rule-minlength="5" data-msg="Ingrese la razón social" data-msg-lettersonly="Ingrese sólo letras" data-msg-minlength="Razón social inválida. Razón social debe tener al menos 5 caracteres">
      </div>
      <a href="#" title="Ver código" class="view-code"></a>
    </div>
    <div class="field-group">
      <div class="field">
        <input id="enviar" name="enviar" type="submit" value="Enviar">
      </div>
    </div>
  </fieldset>
</form>

<script>
$(".js-form-validate").validate();
</script>
