//Make an element visible in HTML via an id
function ShowElem(HTMLid){
$('#'+HTMLid).css("display","block");
}
/*Example
*============JS==========
*USAGE: ShowElem('userId');
*============HTML========
*<div id="userId" style="display:none;">My Name</div>
*/


//Hide an element via an id
function HideElem(HTMLid){
$('#'+HTMLid).css("display","none");
}
/*Example
*============JS==========
*
*USAGE: HideElem('userId');
*============HTML========
*<div id="userId" style="display:block;">My Name</div>
*/


//Push content to an element that is associated with an id, preferably a textbox
function PushToInputView(HTMLid,content){
$('#'+HTMLid).val(content);
}
/*Example
*============JS==========
*var name = "Michael Oki";
*PushToInputView('userId',name);
*============HTML========
*<input type="text" id="userId" value="">
*/


//Push content to an element that is associated with an id, preferably a div or span
function PushToView(HTMLid,content){
$('#'+HTMLid).html(content);
}
/*Example
*============JS==========
*var name = "Michael Oki";
*PushToView('userId',name);
*============HTML========
*<div id="userId"></div>
*/


//Get content from an element that is associated with an id, preferably a textbox
function GetInputView(HTMLid){
var myContent = $('#'+HTMLid).val();
return myContent;
}
/*Example
*============JS==========
*var name = GetInputView('userId');
*============HTML========
*<input id="userId" type="text" value="Test">
*/


//Get content from an element that is associated with an id, preferably a div or span
function GetView(HTMLid){
var myContent = $('#'+HTMLid).html();
return myContent;
}
/*Example
*============JS==========
*var name = GetView('userId');
*============HTML========
*<div id="userId">Developer</div>
*/


//Clear Content in a div or span
function ClearView(HTMLid){
$('#'+HTMLid).html('');
}
//Clear Content in a textbox
function ClearInputView(HTMLid){
$('#'+HTMLid).val('');
}
/*Example
*=================JS=================
*ClearView('userId');
*ClearInputView('userId');
*=================HTML===============
*<div id="userId">Developer</div>
*<input id="userId" type="text">
*/
