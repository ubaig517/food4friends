import React from 'react';

const Post = () => {
  return (
    <article style={style.post}>
      <h3>Abhi&apos;s bacon breakfast</h3>
      <p>I made the most amazing meal oh my gosh</p>
    </article>
  );
};


const style = {
  content: {
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  h1: {
    marginBottom: '12px',
    marginTop: '0',
    textAlign: 'center',
    opacity: '0.75',
  },
  postContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '12px',
  },
  post: {
    backgroundColor: 'hsla(31, 2%, 92%, 1)',
    padding: '12px',
    borderRadius: '10px',
    border: 'solid hsla(31, 100%, 56%, 1)',
  },
};

export default Post;
