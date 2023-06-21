window.onload=()=>
{
    const hovers= document.querySelectorAll("[data-hover-hide='true'");
    for(let i=0; i<hovers.length;i++)
    {
        const element= hovers[i]
        element.addEventListener('click', toggleButtons);
        //element.addEventListener('mouseenter', toggleHover);
        //element.addEventListener('mouseleave', toggleHover);
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
        colorEle= document.getElementById("exampleColorInput");
        colorEle= colorEle.value;
        console.log(event);
            key=`${project}_color`;
            const idk=localStorage.setItem(`${project}_color`, colorEle);
        // <i class='fas fa-fw fa-folder-open fa-5x' icon='colorEle'></i>
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