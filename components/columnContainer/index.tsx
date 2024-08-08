import { useMemo, useState } from 'react'
import { useSortable, SortableContext } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Column, Id, Task } from '@/types'
import TaskCard from '../cardItem'
import PlusIcon from '@/assets/plusIcon'

interface Props {
  column: Column
  tasks: Task[]
  deleteColumn: (id: Id) => void
  updateColumn: (id: Id, title: string) => void
  createTask: (columnId: Id) => void
  deleteTask: (id: Id) => void
  updateTask: (id: Id, content: string) => void
}

const ColumnContainer = (props: Props) => {
  const [editMode, setEditMode] = useState(false)
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    deleteTask,
    updateTask,
  } = props
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id)
  }, [tasks])
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: { type: 'Column', column },
    disabled: editMode,
  })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex h-[500px] max-h-[500px] w-[350px] flex-col rounded-md border-2 border-rose-500 bg-white"
      ></div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex h-[500px] max-h-[500px] w-[350px] flex-col rounded-md bg-white"
    >
      {/* Column Title*/}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true)
        }}
        className="text-md border-columnBackgroundColor flex h-[60px] cursor-grab items-center justify-between rounded-b-none border-4 bg-white p-3 font-bold"
      >
        <div className="flex gap-2">
          <div className="flex items-center justify-center rounded-full bg-white px-2.5 py-1 text-sm">
            1
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              autoFocus
              className="rounded border bg-black px-2 outline-none focus:border-rose-500"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              onBlur={() => {
                setEditMode(false)
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return
                setEditMode(false)
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id)
          }}
          className="rounded stroke-gray-500 px-2 py-2 hover:bg-white hover:stroke-white"
        >
          <PlusIcon />
        </button>
      </div>

      {/* Column Task Container*/}
      <div className="flex flex-grow flex-col gap-4 overflow-y-auto overflow-x-hidden p-2">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>

      {/* Column Footer*/}
      <button
        onClick={() => {
          createTask(column.id)
        }}
        className="border-columnBackgroundColor border2 flex items-center gap-2 rounded-md border-x-gray-100 p-2 hover:bg-white hover:text-rose-500 active:bg-black"
      >
        <PlusIcon />
        Add Task
      </button>
    </div>
  )
}

export default ColumnContainer
