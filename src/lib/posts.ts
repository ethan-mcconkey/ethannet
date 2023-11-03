/* eslint-disable @typescript-eslint/no-unsafe-argument */
import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export async function markdownToHtml(markdown: string) {
    const result = await remark().use(remarkHtml).process(markdown)
    return result.toString()
}

export class Post {
    id: string
    category: string
    title: string
    publishedDate: Date
    editedDate: Date
    content: string

    constructor(
        id: string,
        category: string,
        title: string,
        publishedDate: Date,
        editedDate: Date,
        content: string
    ) {
        this.id = id
        this.category = category
        this.title = title
        this.publishedDate = publishedDate
        this.editedDate = editedDate
        this.content = content
    }
}

const postsDirectory = path.join(process.cwd(), 'public/posts')
export const categories = fs.readdirSync(postsDirectory).sort((a, b) => {
    if (a > b) {
        return 1
    } else {
        return -1
    }
})

export function getPostIdsByCategory(category: string): string[] {
    const categoryDirectory = path.join(postsDirectory, category)
    const postFilenames = readdirSync(categoryDirectory)

    return postFilenames.map((postFilename: string): string => {
        return postFilename.replace(/\.md$/, '').toLowerCase().replace(' ', '-')
    })
}

export function getPost(id: string, category: string): Post {
    const currentDirectory = path.join(postsDirectory, category)

    const { data, content } = matter(
        fs.readFileSync(path.join(currentDirectory, id + '.md'), 'utf8')
    )

    return new Post(
        id,
        data.category,
        data.title,
        new Date(data.publishedDate),
        new Date(data.editedDate),
        content
    )
}

export function getPostsByCategory(category: string): Post[] {
    const currentDirectory = path.join(postsDirectory, category)

    const postFilenames = fs.readdirSync(currentDirectory)

    return postFilenames.map((postFilename: string): Post => {
        const { data, content } = matter(
            fs.readFileSync(path.join(currentDirectory, postFilename), 'utf8')
        )

        return new Post(
            postFilename.replace(/\.md$/, '').toLowerCase().replace(' ', '-'),
            category,
            data.title,
            new Date(data.publishedDate),
            new Date(data.editedDate),
            content
        )
    })
}
