export default {
  getHighlightText : (longString , shortString) =>{
    const startOfSubstring = longString.indexOf(shortString);
    const endOfSubstring = startOfSubstring + shortString.length;
    return [longString.slice(0, startOfSubstring),'<strong class="FF_searchbar-suggestion-item-highlighter">', shortString,'</strong>', longString.slice(endOfSubstring)].join('');
  }
}