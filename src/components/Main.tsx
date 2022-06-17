import React from 'react';

import { About } from './About';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { Top } from './Top';
import { Works } from './Works';

export const Main: React.FC = () => (
  <>
    <Top />
    <About />
    <Skills />
    <Works />
    <Contact />
  </>
);
