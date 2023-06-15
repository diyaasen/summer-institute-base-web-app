/*
$( document ).ready(function() {
    console.log( "ready!" );
});
*/
// randomize icons and finish later
function all_icons() {
    return [...document.styleSheets].flatMap(styleSheet => {
      return [...styleSheet.cssRules]
        .map((rule) => {  
          const m = rule.cssText.match(/^\.fa-([\w-]+)/);
          if(m && m[1]) {
            let b = 'break!';
            $("#icon_test").append(`<p>${m[1]}</p>`);
            return m[1];
          }
        })
        .filter(r => r);
      });
    }

    const ALL_ICONS =
    [

    ]