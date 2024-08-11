export function parse_tags(tags: string): string[] {
    if (tags.trim() === '') {
        return []
    }

    return tags.split(',').map((tag: string) => tag.trim())
}
