'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { ConfigProvider } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const isServerInserted = React.useRef<boolean>(false);

  useServerInsertedHTML(() => {
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    // We need to use dangerouslySetInnerHTML here as we're directly injecting CSS
    // This is a special case for AntD's style injection
    return <style id='antd' dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />;
  });

  return (
    <ConfigProvider>
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </ConfigProvider>
  );
}
