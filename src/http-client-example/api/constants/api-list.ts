export const apiList = {
    inner: {
        users: {
            get: {
                userProfile: '/users/{userId}/profile',
                userOrders: '/users/{userId}/orders/{orderId}',
                userSubscriptions: '/users/{userId}/subscriptions'
            }
        },
        posts: {
            get: {
                posts: '/posts/{postId}'
            }
        }
    },
    outer: {}
};
