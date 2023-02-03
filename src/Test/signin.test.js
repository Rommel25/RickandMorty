import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import SignupPage from "../Components/Inscription";
import {Login} from "../Components/Connexion";


describe('Assert Hello World composant render', () => {
    it("Should render without crash", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        )
    })
})
