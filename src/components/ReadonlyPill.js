const ReadonlyPill = ({ children }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 10px',
      borderRadius: '999px',
      border: '1px solid #d0d7de',
      background: '#f6f8fa',
      color: '#24292f',
      fontSize: '16px',
      fontWeight: 500,
      userSelect: 'none',
    }}
  >
    {children}
  </span>
);

export default ReadonlyPill;
