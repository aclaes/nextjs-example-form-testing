/**
 * @jest-environment jsdom
 */
import {render, screen} from '@testing-library/react';

import TodoList from './TodoList';

describe('TodoList (WithGlobalState)', () => {
	it('should render a given list of todos', () => {
		render(<TodoList />);

		const list = screen.getByRole('list');

		expect(list.childElementCount).toBe(3);
	});
});
