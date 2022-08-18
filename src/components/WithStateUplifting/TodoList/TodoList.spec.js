/**
 * @jest-environment jsdom
 */
import {render, screen} from '@testing-library/react';

import TodoList from './TodoList';

describe('TodoList (WithStateUplifting)', () => {
	it('should render a given list of todos', () => {
		const todos = [
			{id: '1', name: 'First Item'},
			{id: '2', name: 'Second Item'},
			{id: '3', name: 'Third Item'},
		];

		render(<TodoList todos={todos} />);

		const list = screen.getByRole('list');

		expect(list.childElementCount).toBe(3);
	});
});
