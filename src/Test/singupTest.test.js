import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupPage from '../Components/Inscription';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Style} from "../Utils";
import Inscription from "../Components/Inscription";

describe('Signup Page', () => {
    it('Not submit, mdp trop court', () => {
        const { getByLabelText, getByText } = render(<SignupPage />);
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const submitButton = getByText('Sign up');

        fireEvent.change(emailInput, { target: { value: 'myvalid@email.com' } });
        fireEvent.change(passwordInput, { target: { value: 'test' } });
        fireEvent.click(submitButton);

        expect(console.error).toHaveBeenCalledWith("Le mot de passe doit contenir au moins 8 caractères");
    });
    it('Not submit, mdp trop court', () => {

        const { getByLabelText, getByText } = render(
            <ThemeProvider theme={Style.mainTheme}>
                <RouterProvider router={createBrowserRouter([{path: '*', element: <Inscription/>, errorElement: <></>}])} />
            </ThemeProvider>
        );
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const submitButton = getByText('Sign up');

        fireEvent.change(emailInput, { target: { value: 'myvalid@email.com' } });
        fireEvent.change(passwordInput, { target: { value: 'test' } });
        fireEvent.click(submitButton);

        expect(console.error).toHaveBeenCalledWith("Le mot de passe doit contenir au moins 8 caractères");
    });
});