import { Metadata } from "next";

import Navbar from "@/components/NavBar";
import PostTile from "@/components/PostTile";
import { categories, getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
    title: "My Blog",
};

export default function Blog() {
    return (
        <>
            <Navbar />
            <main>
                <div>
                    {categories.map((category) => {
                        const posts = getPostsByCategory(category);

                        const sortedPosts = posts.sort((a, b) => {
                            if (a.publishedDate > b.publishedDate) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });

                        const limitedPosts = sortedPosts.slice(0, 3);

                        if (posts.length > 0) {
                            return (
                                <div key={category} className="category">
                                    <h1>{category.toUpperCase()}</h1>
                                    <div className="tiles">
                                        {limitedPosts.map((post) => {
                                            return (
                                                <PostTile
                                                    key={post.id}
                                                    {...post}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </main>
        </>
    );
}
