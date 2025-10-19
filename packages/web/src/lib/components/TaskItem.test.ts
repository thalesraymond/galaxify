import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import TaskItem from './TaskItem.svelte';

describe('TaskItem component', () => {
  it('renders the task text', () => {
    render(TaskItem, { props: { text: 'My Test Task' } });
    expect(screen.getByText('My Test Task')).toBeInTheDocument();
  });
});
