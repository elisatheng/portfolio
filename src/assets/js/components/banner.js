import bannerImg from '@/assets/img/banner-grey.jpg'

export default {
    name: 'Banner',

    data: () => ({
        background: {
            src: bannerImg,
            height: 700,
        },
        title: 'Hello, je suis Elisa.',
        subtitle: 'Développeuse Web.',
    }),
}
