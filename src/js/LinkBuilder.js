const LinkBuilder = () => {
  let linkHtml = "";
  let linkContentHtml = "";
  let linkName = "";

  return {
    withLinkName(value) {
      linkHtml = `<button id=${value}><div id=${value}><p>${value}</p></div></button>`;
      linkName = value;
      return this;
    },
    withLinkContent(value) {
      linkContentHtml = `<div id="${linkName}" class="section">${value}<p></p></div>`;
      return this;
    },
    build(){
        return{
            linkHtml: linkHtml,
            linkContentHtml: linkContentHtml,
            linkName:linkName
        }
    }
  };
};

export default LinkBuilder;

//If user 