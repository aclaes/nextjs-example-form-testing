/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import TodoItem from './TodoItem';

describe('TodoItem', () => {
	it('should render a todo item', () => {
		render(<TodoItem name="My Todo" />);

		const item = screen.getByText(/My Todo/i);

		expect(item).toBeInTheDocument();
	});
});
