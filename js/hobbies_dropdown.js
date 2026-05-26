window.onload = () => {
    class States {
         mtg_state = false;
         gaming_state = false;
         judo_state = false;
         kat_state = false;
         enigma_state = false;
         festival_state = false;
    }
    let states = new States();
    function AddAllEventListeners()
    {
        document.getElementById("mtg_button").addEventListener("click", () => {
            states.mtg_state = !states.mtg_state;
            if(states.mtg_state)
            {
                document.getElementById("mtg_wrapper").style.display = 'flex';
            }
            else
            {
                document.getElementById("mtg_wrapper").style.display = 'none';
            }
        })

        document.getElementById("gaming_button").addEventListener("click", () => {
            states.gaming_state = !states.gaming_state;
            if(states.gaming_state)
            {
                document.getElementById("gaming_wrapper").style.display = 'flex';
            }
            else {
                document.getElementById("gaming_wrapper").style.display = 'none';
            }
        })

        document.getElementById("judo_button").addEventListener("click", () => {
            states.judo_state = !states.judo_state;
            if(states.judo_state)
            {
                document.getElementById("judo_wrapper").style.display = 'flex';
            }
            else {
                document.getElementById("judo_wrapper").style.display = 'none';
            }
        })

        document.getElementById("kat_button").addEventListener("click", () => {
            states.kat_state = !states.kat_state;
            if(states.kat_state)
            {
                document.getElementById("kat_wrapper").style.display = 'flex';
            }
            else {
                document.getElementById("kat_wrapper").style.display = 'none';
            }
        })

        document.getElementById("enigma_button").addEventListener("click", () => {
            states.enigma_state = !states.enigma_state;
            if(states.enigma_state)
            {
                document.getElementById("enigma_wrapper").style.display = 'flex';
            }
            else {
                document.getElementById("enigma_wrapper").style.display = 'none';
            }
        })

        document.getElementById("festival_button").addEventListener("click", () => {
            states.festival_state = !states.festival_state;
            if(states.festival_state)
            {
                document.getElementById("festival_wrapper").style.display = 'flex';
            }
            else {
                document.getElementById("festival_wrapper").style.display = 'none';
            }
        })
    }

    AddAllEventListeners();
}