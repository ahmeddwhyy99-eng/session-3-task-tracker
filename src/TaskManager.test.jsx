import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import TaskManager from './TaskManager'

describe('TaskManager', () => {
  it('adds a trimmed task and clears the input', async () => {
    const user = userEvent.setup()
    render(<TaskManager />)

    const input = screen.getByRole('textbox', { name: /add a task/i })
    await user.type(input, '  Review pull request  ')
    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(screen.getByText('Review pull request')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('toggles a task between active and completed', async () => {
    const user = userEvent.setup()
    render(<TaskManager />)

    const checkbox = screen.getByRole('checkbox', {
      name: /mark learn react complete/i,
    })
    await user.click(checkbox)

    expect(checkbox).toBeChecked()
    expect(screen.getByText('1 of 3 completed')).toBeInTheDocument()
    expect(screen.getByText('Learn React').closest('li')).toHaveClass(
      'task-item--completed',
    )

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('deletes a task without removing the others', async () => {
    const user = userEvent.setup()
    render(<TaskManager />)

    const task = screen.getByText('Build a task app').closest('li')
    await user.click(
      within(task).getByRole('button', {
        name: /delete build a task app/i,
      }),
    )

    expect(screen.queryByText('Build a task app')).not.toBeInTheDocument()
    expect(screen.getByText('Learn React')).toBeInTheDocument()
  })

  it('shows the empty state after the final task is deleted', async () => {
    const user = userEvent.setup()
    render(<TaskManager />)

    for (const title of ['Learn React', 'Build a task app', 'Practice props']) {
      await user.click(
        screen.getByRole('button', { name: new RegExp(`delete ${title}`, 'i') }),
      )
    }

    expect(
      screen.getByRole('heading', { name: /your list is clear/i }),
    ).toBeInTheDocument()
  })
})
