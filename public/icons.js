window.onload=()=>
{
    const hovers= document.querySelectorAll("[data-hover-hide='true'");
    for(let i=0; i<hovers.length;i++)
    {
        const element= hovers[i]
        element.addEventListener('mouseenter', toggleHover);
        element.addEventListener('mouseleave', toggleHover);
    }

    function toggleHover(event)
    {
        const parentElement= event.target.closest("[data-hover-hide='true']");
        const hideableThing= parentElement.querySelector(']data-hideable="true"]');

        if(event.type=='mouseenter')
        {
            hideableThing.classList.remove('d-none');
        }
        else
        {
            hideableThing.classList.add('d-none');
        }
    }
}