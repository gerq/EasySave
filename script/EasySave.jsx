var doc = app.activeDocument;
var Path = prompt("New Document  enter subfolder name", "kesz1");
var Name = doc.name.replace(/\.[^\.]+$/, '');
var Suffix = "";

var saveFolder = doc.path.toString() + "/" + Path;

var folder = Folder(saveFolder);
if(!folder.exists) folder.create();

var saveFile = File(saveFolder + "/" + Name + Suffix + ".jpg");

doc.convertProfile( 'ProPhoto RGB', Intent.RELATIVECOLORIMETRIC ); //, true, true );   

convertBitDepth(8);

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

function convertBitDepth(bitdepth)
{
   var id1 = charIDToTypeID( "CnvM" );
   var desc1 = new ActionDescriptor();
   var id2 = charIDToTypeID( "Dpth" );
   desc1.putInteger( id2, bitdepth );
   executeAction( id1, desc1, DialogModes.NO );
}