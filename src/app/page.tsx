import PostList from '@/components/posts/post-list'
import TopicCreateForm from '@/components/topics/topic-create-form'
import TopicList from '@/components/topics/topic-list'
import { fetchTopPosts } from '@/db/queries/posts'
import { Divider } from '@heroui/react'

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="flex flex-col gap-4 border shadow p-3 rounded-lg">
        <TopicCreateForm />
        <Divider />
        <div>
          <h3 className="text-lg mb-2">Topics</h3>
          <TopicList />
        </div>
      </div>
    </div>
  )
}
