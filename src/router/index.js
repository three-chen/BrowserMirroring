import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'default',
            component: () => import('@/views/progress/ConnectionSuccessful.vue'),
        },
        {
            path: '/break',
            name: 'break',
            component: () => import('@/views/progress/ConnectionBreak.vue'),
        },
        {
            path: '/connecting',
            name: 'connecting',
            component: () => import('@/views/progress/ConnectionConnecting.vue'),
        },
        {
            path: '/failed',
            name: 'failed',
            component: () => import('@/views/progress/ConnectionFailed.vue'),
        },
        {
            path: '/pairing',
            name: 'pairing',
            component: () => import('@/views/progress/ConnectionRequestPairing.vue'),
        },
        {
            path: '/successful',
            name: 'successful',
            component: () => import('@/views/progress/ConnectionSuccessful.vue'),
        },
        {
            path: '/stopped',
            name: 'stopped',
            component: () => import('@/views/progress/MirrorStopped.vue'),
        },
        {
            path: '/mirror',
            name: 'mirror',
            component: () => import('@/views/progress/MirrorVideo.vue'),
        },
        {
            path: '/version-low',
            name: 'versionLow',
            component: () => import('@/views/progress/VersionLow.vue'),
        },

    ]
})
export default router