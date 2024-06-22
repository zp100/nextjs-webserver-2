export default function Track({ list_index, name, tag_list }: { list_index: number, name: string, tag_list: string[] }):
    React.ReactNode {
    return <>
        <button className="text-left rounded-md bg-red-100">
            { list_index }. { name } { tag_list }
        </button>
    </>
}
