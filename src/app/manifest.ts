import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Minh Thường Estate By Minh thuong',
    short_name: 'Minh Thường Estate',
    description: 'Ứng dụng Minh Thường Estate cho bất động sản',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-512x512.png?v=zX7n49rwEM',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
