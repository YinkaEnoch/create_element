# CreateNewElement.js

A simple JavaScript utility library with zero dependencies for creating HTML elements. The library makes it easier to create elements and specify various attributes and properties alongside it.

## Example Usage

```
import c from 'createNewElement';
```

## Creating a simple div element

```
c('div');
```

**OUTPUT**

```
<div></div>
```

---

## Add attributes to an element

```
c('div', {
  id:'banner-container',
  class: 'container text-primary',
  data-role: 'banner'
});
```

**OUTPUT**

```
<div id="banner-container" class='container text-primary'></div>
```

---

## Add text to an element

```
c('h1', {
  class: 'text-primary'
}, 'Hello World!');
```

**OUTPUT**

```
<p class="text-primary">Hello World!</p>
```

---

## Add an children element to an element

```
c('ul', {
  class: 'text-dark',
  id: 'nav-container'
}, [c('li',{class: 'nav-item'}, 'Home'), c('li',{class: 'nav-item'}, 'About'), c('li',{class: 'nav-item'}, 'Contact')]);
```

**OUTPUT**

```
<ul id='nav-container' class='text-dark'>
  <li class='nav-item'>Home</li>
  <li class='nav-item'>About</li>
  <li class='nav-item'>Contact</li>
</ul>
```

---

## Reference a created element using a variable

```
let submitBtn = c('button', {
  id:'submit-btn',
  class: 'btn-primary'
}, 'Submit');
```

---

## Add an event to an element

```
c('button', {onclick: ()=> alert('Yooo! You clicked me'), id: 'click-bait'}, 'Click Me!')

```

**OUTPUT**

```
<button id='click-bait'>Click Me!</button>
```

**NB:** All events that are to be added to an elememt must start with an 'on' prefix e.g. onclick, onsubmit, onmouseover etc. The convention must be strictly adhered to as all events are attached to an element as listeners.

## Creating an SVG Element

```
c('svg', {
  viewBox:'0 0 376.5 512',
  svgWidth:'1em',
  class: 'icons icons-primary'
  }, [c('path', {d: 'M314.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C59.3 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'})]
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
