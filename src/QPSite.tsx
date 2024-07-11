import React from 'react';

function QueryParamSite({ search }: { search: typeof window.location.search }) {
  return (
    <main>
      <h1>QP.me</h1>
      <small>A personal homepage powered by QueryParams!</small>
      <div
        id="homepage"
        dangerouslySetInnerHTML={{ __html: getContent(search) }}
      />
    </main>
  );
}

function getContent(search: typeof window.location.search) {
  console.log('getContentBasedOnQPs');

  const qps = new window.URLSearchParams(search);
  const header = qps.get('header') || 'Default Header';
  const owner = qps.get('owner') || 'Change this to your name!';
  const desc = qps.get('desc') || 'lorem ipsum';
  const style = qps.get('style') || '';

  return `
        <div style="${style}">
            <h1>${header}</h1>
            <em>${owner}</em>
            <p>${desc}</p>
        </div>
    `;
}

export default React.memo(QueryParamSite);
