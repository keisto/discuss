import Link from 'next/link'
import PostShow from '@/components/posts/post-show'
import CommentList from '@/components/comments/comment-list'
import CommentCreateForm from '@/components/comments/comment-create-form'
import paths from '@/paths'
import { fetchCommentsByPostId } from '@/db/queries/comments'
import { Suspense } from 'react'

interface Props {
  params: Promise<{
    slug: string
    postId: string
  }>
}

export default async function PostShowPage({ params }: Props) {
  const { slug, postId } = await params

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicsShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      <Suspense fallback={<div>Loading ... </div>}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  )
}
