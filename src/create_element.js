(function(window){
  function createElement(){
    function htmlElement(params){
      let newElement;
      // Create HTML Element
      if(params.type && params.type.toLowerCase() !== 'svg'){
        newElement = (params.type instanceof HTMLElement) ? params.type : document.createElement(params.type);
      }
      // Create SVG Element
      if(params.type && params.type.toLowerCase() === 'svg'){
        newElement = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        if(params.svgPath){
          let _path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
          _path.setAttribute("d",params.svgPath);
          newElement.appendChild(_path);
        }
      }
      // Append Text to Element
      if(params.text){
        newElement.textContent = params.text;
      }
      // Append ID
      if(params.id){
        newElement.id = params.id;
      }
      // Append Classes
      if(params.classes){
        params['classes'].forEach(className => newElement.classList.add(className));
      }
      // Append other attributes
      if(params.otherAttr){
        for(let attr in params.otherAttr){
          if(params.otherAttr.hasOwnProperty(attr)) newElement.setAttribute(attr,params['otherAttr'][attr]);
        }
      }
      // Append Inline styles
      if(params.inlineStyles){
        for(let style in params.inlineStyles){
          if(params.inlineStyles.hasOwnProperty(style)){
            newElement.style[style] = params.inlineStyles[style];
          }
        }
      }
      // Append HTML entities
      if(params.html){
        newElement.innerHTML = params.html;
      }
      // Append to Element to a specified Node
      if(params.parent){
        if(params.parent instanceof HTMLElement){
          params['parent'].appendChild(newElement);
        }
        if(!(params.parent instanceof HTMLElement) && typeof params.parent === 'string'){
          let parent = document.querySelector(params['parent'].toLowerCase());
          parent.appendChild(newElement);
        }
      }
      
      return newElement;
    }
    return(function(params){
      return htmlElement(params);
    });
  }
  if(typeof window.createElement === 'undefined'){
    window.createElement = createElement();
  }
})(window);