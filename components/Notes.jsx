import { getUserNotes } from "@/lib/action"

const Notes = async () => {
  const notes = await getUserNotes()
  return (
    <>
      {notes?.map((note, i) => (
        <p key={note.id}>
          <span className="text-white/20">{i + 1}-</span> {note.title}
        </p>
      ))}
    </>
  )
}

export default Notes
