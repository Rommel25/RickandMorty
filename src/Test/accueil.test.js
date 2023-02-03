import React from 'react';
import {Accueil} from '../Components/Accueil';
 import {render} from "@testing-library/react";
 import {MemoryRouter} from "react-router-dom";

 describe('Assert PersonnageFavoris composant render', () => {
    it("Should render without crash", () => {
        render(
            <MemoryRouter>
                <Accueil/>
            </MemoryRouter>
        )
    })
})