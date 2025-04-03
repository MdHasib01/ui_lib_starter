import { Registry } from './schema';

export const ui: Registry = [
  {
    name: 'animated-button',
    type: 'registry:ui',
    registryDependencies: ['button'],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              ripple: 'ripple 0.6s ease-out',
            },
            keyframes: {
              ripple: {
                '0%': {
                  transform: 'scale(0)',
                  opacity: '1',
                },
                '100%': {
                  transform: 'scale(4)',
                  opacity: '0',
                },
              },
            },
          },
        },
      },
    },
    files: ['ui/animated-button.tsx'],
  },
];
