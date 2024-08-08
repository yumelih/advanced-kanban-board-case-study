import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Id, Task } from '@/types'
import PlusIcon from '@/assets/plusIcon'

interface Props {
  task: Task
  deleteTask: (id: Id) => void
  updateTask: (id: Id, content: string) => void
}

const TaskCard = ({ task, deleteTask, updateTask }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: { type: 'Task', task },
    disabled: editMode,
  })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  const toggleEditMode = () => {
    setEditMode((prev) => !prev)
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex-left relative flex h-[100px] min-h-[100px] cursor-grab items-center rounded-xl border-2 border-rose-500 bg-background p-2.5 opacity-30"
      />
    )
  }

  if (editMode) {
    return (
      <div
        {...attributes}
        {...listeners}
        ref={setNodeRef}
        style={style}
        className="flex-left task relative flex h-[100px] min-h-[100px] cursor-grab items-center rounded-xl bg-background p-2.5 hover:ring-2 hover:ring-inset hover:ring-rose-500"
      >
        <textarea
          className="h-[90%] w-full resize-none rounded border-none bg-transparent text-white focus:outline-none"
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.shiftKey && e.key == 'Enter') toggleEditMode()
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        ></textarea>
      </div>
    )
  }

  return (
    <div
      onClick={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true)
      }}
      onMouseLeave={() => {
        setMouseIsOver(false)
      }}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className="flex-left relative flex h-[100px] min-h-[100px] cursor-grab items-center rounded-xl bg-background p-2.5 hover:ring-2 hover:ring-inset hover:ring-rose-500"
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {' '}
        {task.content}
      </p>
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id)
          }}
          className="bg-columnBackgroundColor absolute right-4 top-1/2 -translate-y-1/2 rounded stroke-white p-2"
        >
          <PlusIcon />
        </button>
      )}
    </div>
  )
}

export default TaskCard
