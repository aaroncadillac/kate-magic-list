# Kate Magic List
A mutable list that provides the ability to interactively modify an array of objects based on Material Design

## Instalation
```
  bower i --save kate-magic-list
```


<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="kate-magic-list.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
## Usage
### Default
```html
    <kate-magic-list></kate-magic-list>
```
_By default the component creates an empty array and uses it to generalize the list_

### Working with data
```html
    <kate-magic-list data-list="{{your_data}}"></kate-magic-list>
```
_Use `two-way data binding` to interactively modify your data array_

## Styling
Cooming soon

## Properties
**data-list**: _Array_

Data array in format 
```js
    [
      {value: 'example'},
      ...
    ]
```
**emptyListMessage**: _String_

Message that is shown to the user when the list is empty

