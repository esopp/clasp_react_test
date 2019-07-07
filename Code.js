function doGet(e) {
  Logger.log(JSON.stringify(e));
  return HtmlService.createTemplateFromFile('react.html')
      .evaluate();
}

function doPost(e) {  
  if (e.pathInfo === "chat") {
  }
  else return HtmlService.createHtmlOutputFromFile('react.html');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
