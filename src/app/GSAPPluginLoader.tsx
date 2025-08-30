'use client';

import useGSAPPlugins from '@/hooks/useGSAPPlugins';

const GSAPPluginLoader = () => {
  useGSAPPlugins();
  return null; // This component only loads plugins, no UI
};

export default GSAPPluginLoader;
