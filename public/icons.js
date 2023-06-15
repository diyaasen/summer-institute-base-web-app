/*
$( document ).ready(function() {
    console.log( "ready!" );
});
*/

function allIcons()
{
    return [...document.styleSheets].flatMap(styleSheet=>
        {
            return[...styleSheet.cssRules]
            
        }
}