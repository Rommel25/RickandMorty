import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupPage from '../Components/Inscription';

describe('Signup Page', () => {
    it('should not submit form if email is invalid', () => {
        const { getByLabelText, getByText } = render(<SignupPage />);
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const submitButton = getByText('Sign up');

        fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(submitButton);

        expect(console.error).toHaveBeenCalledWith("L'email n'est pas valide");
    });

    it('should not submit form if password is too short', () => {
        const { getByLabelText, getByText } = render(<SignupPage />);
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const submitButton = getByText('Sign up');

        fireEvent.change(emailInput, { target: { value: 'valid@email.com' } });
        fireEvent.change(passwordInput, { target: { value: 'short' } });
        fireEvent.click(submitButton);

        expect(console.error).toHaveBeenCalledWith("Le mot de passe doit contenir au moins 8 caractères");
    });
});