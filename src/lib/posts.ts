import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'public/posts')

export const categories = readdirSync(postsDirectory).filter(
    (category) => category !== '__WIP__'
)

export const staticRoutes: Array<{ id: string; category: string }> = []

categories.forEach((category) => {
    readdirSync(path.join(postsDirectory, category)).forEach((filename) => {
        staticRoutes.push({ id: filename.replace('.md', ''), category })
    })
})

export const getPostMetadata = (id: string, category: string): Post => {
    const { data } = matter(
        readFileSync(
            path.join(postsDirectory, category, id.concat('.md')),
            'utf8'
        )
    )

    return {
        id,
        category,
        title: data.title as string,
        date: new Date(data.date as string),
    }
}

export const getPost = (id: string, category: string): Post => {
    const { data, content } = matter(
        readFileSync(path.join(postsDirectory, category, id.concat('.md')))
    )

    return {
        id,
        category,
        title: data.title as string,
        date: new Date(data.date as string),
        content,
    }
}

export const getPostIds = (category: string) => {
    return readdirSync(path.join(postsDirectory, category)).map((filename) => {
        return filename.replace('.md', '')
    })
}
