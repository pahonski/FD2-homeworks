function buildWrapper(value) {

  function wrap(text, attrs) {
    let standardMnemonics = {
      '\'': '&apos;',
      '\"': '&quot;',
      '\&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    }

    let attrString = '';

    for (let k in attrs) {
      let attribute = ` ${k}="${attrs[k]}"`;
      attrString += attribute;
    }
    console.log(attrString);

    for (let i = 0; i < text.length; i++) {
      if (text[i] in standardMnemonics) {
        text = text.split(text[i]).join(standardMnemonics[text[i]]);
      }
    }


    let left = attrString ? `<${value}${attrString}>` : `<${value}>`;
    let right = `</${value}>`;
    return `${left}${text}${right}`
  }

  return wrap;

}

let wrapH1 = buildWrapper("H1");

console.log(wrapH1("Вкусные M&M's", {width: "150px", height: "120px"}));