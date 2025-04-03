'use client';

import { LogInIcon } from 'lucide-react';
import { AnimatedButton } from './animated-button';

const AnimatedButtonPreview = () => {
  return (
    <div className='flex gap-3'>
      <AnimatedButton
        showClickEffect={true}
        startContent={<LogInIcon className='size-4 mr-2' />}
      >
        User Login
      </AnimatedButton>
      <AnimatedButton isLoading={true}>Loading</AnimatedButton>
    </div>
  );
};

export default AnimatedButtonPreview;
