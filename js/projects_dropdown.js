window.onload = () => {
    class States {
         fermata_state = false;
         biomodd_state = false;
         artstation_state = false;
         itch_state = false;
    }
    let states = new States();
    function AddAllEventListeners()
    {
        document.getElementById("fermata_button").addEventListener("click", () => {
            states.fermata_state = !states.fermata_state;
            if(states.fermata_state)
            {
                document.getElementById("fermata_wrapper").style.display = 'block';
            }
            else
            {
                document.getElementById("fermata_wrapper").style.display = 'none';
            }
        })

        document.getElementById("biomodd_button").addEventListener("click", () => {
            states.biomodd_state = !states.biomodd_state;
            if(states.biomodd_state)
            {
                document.getElementById("biomodd_wrapper").style.display = 'block';
            }
            else {
                document.getElementById("biomodd_wrapper").style.display = 'none';
            }
        })

        document.getElementById("artstation_button").addEventListener("click", () => {
            states.artstation_state = !states.artstation_state;
            if(states.artstation_state)
            {
                document.getElementById("artstation_wrapper").style.display = 'block';
            }
            else {
                document.getElementById("artstation_wrapper").style.display = 'none';
            }
        })

        document.getElementById("itch_button").addEventListener("click", () => {
            states.itch_state = !states.itch_state;
            if(states.itch_state)
            {
                document.getElementById("itch_wrapper").style.display = 'block';
            }
            else {
                document.getElementById("itch_wrapper").style.display = 'none';
            }
        })
    }

    AddAllEventListeners();
}