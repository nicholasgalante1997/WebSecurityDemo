import React, { useEffect, useRef } from 'react';
import { parse } from 'marked';
import dompurify from 'dompurify';

function FormBlogSite() {
  const [markup, setMarkup] = React.useState(`# Example Heading\n\nSome sample text`);
  const [parsed, setParsed] = React.useState(`# Example Heading\n\nSome sample text`);
  const editorMode = new window.URLSearchParams(window.location.search).get('editor');

  const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            const html = await parse(markup);
            setParsed(dompurify.sanitize(html));
        })()
    }, [markup])

    useEffect(() => {
        if (ref.current) {
            const script = document.createElement('script');
            script.textContent = `console.log('Hello from bad script');`;
            ref.current.append(script);
            console.log('injected bad executable');
        }
    }, [ref.current])

  return (
    <main>
      <h1>Call of Duty, Black Ops 6</h1>
      <small>A small personal blog dedicated to black ops 6!</small>
      {editorMode && <div>
        <textarea value={markup} onChange={(e) => setMarkup(e.target.value)}>
        
        </textarea>
    </div>}
      <div
        id="homepage"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
      <div ref={ref} id="entry"></div>
    </main>
  );
}

export default React.memo(FormBlogSite);
