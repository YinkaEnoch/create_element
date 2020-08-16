# CreateNewElement.js

A simple JavaScript utility library with zero dependencies for creating HTML elements. The library makes it easier to create elements and specify various attributes and properties alongside it.

## Example Usage

```
import createNewElement from 'createNewElement';
```

## Creating a simple HTML Element

```
createElement({
  elementType:'div'
});
```

**OUTPUT**

```
<div></div>
```

---

## Add an ID to the element

```
createElement({
  elementType:'div',
  elementId:'container'
});
```

**OUTPUT**

```
<div id="container"></div>
```

---

## Add a name to the element

```
createElement({
  elementType:'div',
  elementName:'container'
});
```

**OUTPUT**

```
<div name="container"></div>
```

---

## Add text to the element

```
createElement({
  elementType:'div',
  elementId:'container',
  elementText:'Hello World'
});
```

**OUTPUT**

```
<div id="container">Hello World</div>
```

---

## Add CSS classes to the element

```
createElement({
  elementType:'div',
  elementId:'container',
  elementText:'Hello World',
  elementClass:['container','col-sm-4','bg-primary']
});
```

**OUTPUT**

```
<div id="container" class="container col-sm-4 bg-primary">Hello World</div>
```

---

## Add an HTML element to the element

```
createElement({
  elementType:'div',
  innerHTML:'&copy; 2019, <a href="bit.ly/yinkaenoch">Yinka Enoch Adedokun</a>'
});
```

**OUTPUT**

```
<div>© 2019, <a href="bit.ly/yinkaenoch">Yinka Enoch Adedokun</a></div>
```

---

## Add attributes to the element

```
createElement({
  elementType:'div',
  elementId:'container',
  elementText:'Hello World',
  elementClass:['col-sm-4','bg-primary'],
  otherAttr:{
    contenteditable:'',
    'data-role':'navigation',
    'styles': 'background-color: red; font-size: 1em'
  }
});
```

**OUTPUT**

```
<div id="container" class="col-sm-4 bg-primary" contenteditable data-role="navigation" styles: "background-color: red; font-size: 1em">Hello World</div>
```

---

## Reference a created element using a variable

```
let submitBtn = createElement({
  elementType:'button',
  elementId:'submit-btn',
  elementText:'Submit'
});
```

---

## Creating an SVG Element

```
createElement({
  elementType:'svg',
  viewBox:'0 0 376.5 512',
  svgWidth:'1em',
  svgPath:'M314.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C59.3 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z',
  classes:['icons','icons-primary']
});
```

**OUTPUT**

```
<svg class="icons icons-primary" viewBox="0 0 376.5 512" width="1em"><path d="M314.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C59.3 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
</svg>
```

---

## Author

- [Yinka Enoch Adedokun](https://yinkaenoch.github.io)

## License

This library is released under the [ISC License](https://www.isc.org/downloads/software-support-policy/isc-license)
