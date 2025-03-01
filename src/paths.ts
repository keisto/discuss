const paths = {
    home() {
        return '/'
    },
    topicsShow(topicSlug: string) {
        return `/topics/${topicSlug}`
    },
    postsCreate(topicSlug: string) {
        return `/topics/${topicSlug}/posts/create`
    },
    postsShow(topicsSlug: string, postId: string) {
        return `/topics/${topicsSlug}/posts/${postId}`
    }
}

export default paths
