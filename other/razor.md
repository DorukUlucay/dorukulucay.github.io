### Razor DropDownListFor
```
@Html.DropDownListFor(model => model.StuffId, new SelectList(ViewBag.StuffList, "Value", "Text"), "Please Select", new { required = "required" })
```

### Razor TextBoxFor
```
@Html.TextBoxFor(x => x.SomeStuff, "", new { @class = "form-control", placeholder = "Type in some stuff here" })
```

### Razor TextBoxFor Date
```
@Html.TextBoxFor(x => x.SomeDate, "{0:yyyy-MM-dd}", new { @id = "Some Date",  type = "date",  @class = "form-control"})
```