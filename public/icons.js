window.onload=()=>
{
    const hovers= document.querySelectorAll("[data-hover-hide='true'");
    for(let i=0; i<hovers.length;i++)
    {
        const element= hovers[i]
        element.addEventListener('click', toggleButtons);
    }

    function toggleButtons(event)
    {
        const eventId = event.target.id;
        const prefix = eventId.match(/(\w+)_options/)[1];
        const hideableThing= document.getElementById(`${prefix}_extra`);
        const classes= Array.from(hideableThing.classList);

        if(classes.includes('d-none'))
        {
            hideableThing.classList.remove('d-none');
        }
        else
        {
            hideableThing.classList.add('d-none');
        }

        
    }

    colorInput= document.getElementById('exampleColorInput');
    function saveChange(event)
    {
        console.log(event);
            colorEle= document.getElementById("exampleColorInput").value;
            key=`${project}_color`;
            localStorage.setItem(`${project}_color`, colorEle);
            iconId= `${project}_icon`;
            changeColor();
    }
    
    function changeColor()
    {
        iconId=`${project}_icon`;
        key= key=`${project}_color`;
        color= localStorage.getItem(key);
        iconElement= document.getElementById(iconId);
        iconElement.style.color=color;
    }

    window.saveChange = saveChange;

    let saveUrl=undefined;
    let project=undefined;

    $('#changeColor').on('shown.bs.modal', function (event) 
    {
        var button = $(event.relatedTarget) ;
        var recipient = button.data('dir');
        project= recipient;
    })
}