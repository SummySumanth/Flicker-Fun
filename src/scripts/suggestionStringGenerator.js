export default {
  getHighlightText : (longString , shortString) =>{
    const startOfSubstring = longString.indexOf(shortString);
    const endOfSubstring = startOfSubstring + shortString.length;
    return [longString.slice(0, startOfSubstring),'<strong>', shortString,'</strong>', longString.slice(endOfSubstring)].join('');
  }
}