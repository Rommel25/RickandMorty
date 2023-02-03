import { render, screen } from '@testing-library/react';
import App from './App';

import React from 'react';
import {Accueil} from './Components/Accueil';
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
