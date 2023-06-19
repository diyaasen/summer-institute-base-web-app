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
        const eventId= target.event.id;
        hideableThing= document.getElementById(`${prefix}_extra`)
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
    // function toggleHover(event)
    // {
    //     const parentElement= event.target.closest("[data-hover-hide='true']");
    //     const hideableThing= parentElement.querySelector('[data-hideable="true"]');

    //     if(event.type=='mouseenter')
    //     {
    //         hideableThing.classList.remove('d-none');
    //     }
    //     else
    //     {
    //         hideableThing.classList.add('d-none');
    //     }
    // }
}