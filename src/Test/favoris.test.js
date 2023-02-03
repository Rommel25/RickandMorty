import {PersonnageFavoris} from '../Components/PersonnageFavoris'
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";


describe('Assert Hello World composant render', () => {
    it("Should render without crash", () => {
        render(
            <MemoryRouter>
                <PersonnageFavoris/>
            </MemoryRouter>
        )
    })
})
