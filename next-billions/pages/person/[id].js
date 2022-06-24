import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Financial from "../../components/Financial";
import { getPerson } from "../../fetchAPI";

export default function Detail() {
  const router = useRouter();
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getPerson(router.query.id);
      setPerson(data);
      setIsLoading(false);
    })();
  }, [router.query.id]);

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="block">
            <span className="back" onClick={() => router.push("/")}>
              {" "}
              BACK{" "}
            </span>
            <div className="container">
              <img alt={router.query.id} src={person.squareImage} />
              <div className="text-container">
                <h2>{person.name}</h2>
                <h4>netWorth: {Math.floor(person.netWorth / 1000)} Billion</h4>
                <h4>Country: {person.country}</h4>
                <h4>
                  Industry:{" "}
                  {person.industries.map((industry, i) => (
                    <span key={i}>{industry}</span>
                  ))}
                </h4>
                <hr />
                <div>
                  {person.bio.map((data, i) => (
                    <p key={i}>{data}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="container">
              {person.financialAssets.map((asset, i) => (
                <Financial financial={asset} key={i} />
              ))}
            </div>
          </div>
          <style jsx>{`
            .back {
              z-index: 99;
              position: absolute;
              top: 25px;
              left: 25px;
            }
            .block {
              display: flex;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
            .block:hover {
              cursor: pointer;
            }
            .container {
              width: 50%;
              padding: 0 15px;
              padding-bottom: 20px;
            }
            .container:last-child {
              border-left: 0.5px solid;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 5px;
            }
            img {
              border-radius: 10px;
            }
            .text-container {
              display: flex;
              flex-direction: column;
              width: 100%;
              gap: 5px;
            }
            h2 {
              font-size: 24px;
              font-weight: bold;
            }
            h4 {
              font-size: 18px;
            }
            p {
              line-height: 20px;
            }
          `}</style>
        </>
      )}
    </>
  );
}
