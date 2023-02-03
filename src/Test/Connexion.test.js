import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupPage from '../Components/Inscription';
import {Login} from "../Components/Connexion";

describe('Signin Page', () => {
    it('should submit ', () => {
        const { getByLabelText, getByText } = render(<Login />);
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const submitButton = getByText('Login');

        fireEvent.change(emailInput, { target: { value: 'myvalid@email.com' } });
        fireEvent.change(passwordInput, { target: { value: 'motdepasse' } });
        fireEvent.click(submitButton);

        expect(console.error).toHaveBeenCalledWith("Le mot de passe doit contenir au moins 8 caractères");
    });
});