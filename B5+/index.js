function buildWrapper(value) {

  function wrap(text) {
    let standardMnemonics = {
      '\'': '&apos;',
      '\"': '&quot;',
      '\&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    }

    for (let i = 0; i < text.length; i++) {
      if (text[i] in standardMnemonics) {
        text = text.split(text[i]).join(standardMnemonics[text[i]]);
      }
    }


    let left = `<${value}>`;
    let right = `</${value}>`;
    return `${left}${text}${right}`
  }

  return wrap;

}

let wrapH1 = buildWrapper("H1");
console.log(wrapH1("Вкусные M&M's"));