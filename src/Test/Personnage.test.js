import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {Personnage} from "../Components/Personnage";


describe('Assert Hello World composant render', () => {
    it("Should render without crash", () => {
        render(
            <MemoryRouter>
                <Personnage/>
            </MemoryRouter>
        )
    })
})
