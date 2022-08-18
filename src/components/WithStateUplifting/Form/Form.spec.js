/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

describe('Form (WithStateUplifting)', () => {
	it('should add a todo', async () => {
		const handleSubmit = jest.fn();

		render(<Form onSubmit={handleSubmit} />);

		const todoInput = screen.getByLabelText(/todo:/i);
		const submitButton = screen.getByRole('button', {name: /add/i});

		await userEvent.type(todoInput, 'another task');
		await userEvent.click(submitButton);

		expect(handleSubmit).toHaveBeenCalledTimes(1);
		expect(handleSubmit).toHaveBeenCalledWith('another task');
	});
	it('should not add a todo when input is empty', async () => {
		const handleSubmit = jest.fn();

		const {container} = render(<Form onSubmit={handleSubmit} />);

		const submitButton = screen.getByRole('button', {name: /add/i});

		await userEvent.click(submitButton);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(handleSubmit).not.toHaveBeenCalled();
	});
});
