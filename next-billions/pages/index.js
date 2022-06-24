import Link from "next/link";
import { useEffect, useState } from "react";
import { getPeople } from "../fetchAPI";
import { sliceArray } from "../utils";

export default function IndexPage() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoaing] = useState(true);
  useEffect(() => {
    (async () => {
      setIsLoaing(true);
      const data = await getPeople();
      setPeople(sliceArray(data, 50));
      setIsLoaing(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {people.map((person) => (
            <div key={person.id}>
              <Link href={`/person/${person.id}`}>
                <a>
                  <img alt={person.id} src={person.squareImage} />
                  <h3>{person.name}</h3>
                  <span>{Math.floor(person.netWorth / 1000)}Billion</span>
                  {person.industries.map((industry) => (
                    <span key={person.id + industry}>{industry}</span>
                  ))}
                </a>
              </Link>
            </div>
          ))}
        </ul>
      )}
      <style jsx>{`
        ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        h3 {
          font-size: 24px;
          font-weight: bold;
        }
        img {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
