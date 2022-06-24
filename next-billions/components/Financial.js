const Financial = ({ financial }) => {
  console.log(financial);
  return (
    <>
      <div className="container">
        <span>Ticker: {financial.ticker}</span>
        <span>Shares: {financial.numberOfShares.toLocaleString("ko-KR")}</span>
        {financial.exerciseOptionPrice && (
          <span>Exercise Price: ${financial.exerciseOptionPrice}</span>
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Financial;
