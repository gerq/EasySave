var doc = app.activeDocument;
var Path = prompt("New Document  enter subfolder name", "kesz1");
var Name = doc.name.replace(/\.[^\.]+$/, '');
var Suffix = "";

var saveFolder = doc.path.toString() + "/" + Path;

var folder = Folder(saveFolder);
if(!folder.exists) folder.create();

var saveFile = File(saveFolder + "/" + Name + Suffix + ".jpg");

SaveJPEG(saveFile, 11);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

function SaveJPEG(saveFile, jpegQuality){
	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = jpegQuality;
	app.activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.LOWERCASE);
	alert("File saved: " + saveFile);
}
