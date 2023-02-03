import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Inscription from "../Components/Inscription";


describe('Assert Hello World composant render', () => {
    it("Should render without crash", () => {
        render(
            <MemoryRouter>
                <Inscription/>
            </MemoryRouter>
        )
    })
})
