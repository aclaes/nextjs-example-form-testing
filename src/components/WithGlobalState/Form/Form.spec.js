/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useStore from '../../../hooks/useStore';

import Form from './Form';

describe('Form (WithGlobalState)', () => {
	it('should add a todo', async () => {
		const store = renderHook(() => useStore());
		const {addTodo} = store.result.current;

		render(<Form />);

		const todoInput = screen.getByLabelText(/todo:/i);
		const submitButton = screen.getByRole('button', {name: /add/i});

		await userEvent.type(todoInput, 'another task');
		await userEvent.click(submitButton);

		expect(addTodo).toHaveBeenCalledTimes(1);
		expect(addTodo).toHaveBeenCalledWith('another task');
	});
	it('should not add a todo when input is empty', async () => {
		const store = renderHook(() => useStore());
		const {addTodo} = store.result.current;

		const {container} = render(<Form />);

		const submitButton = screen.getByRole('button', {name: /add/i});

		await userEvent.click(submitButton);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(addTodo).not.toHaveBeenCalled();
	});
});
