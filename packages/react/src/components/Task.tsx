/* eslint-disable prettier/prettier */
interface TaskProps {
    task: {
        title: string
    }
}

export function Task({ task: { title } }: TaskProps) {
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly={true} />
        </div>
    )
}
