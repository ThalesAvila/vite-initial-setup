import { useRef } from "react";

export default function DogFriends() {
  const firstDogRef = useRef(null);
  const secondDogRef = useRef(null);
  const thirdDogRef = useRef(null);

  function handleScrollToFirstDog() {
    firstDogRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondDog() {
    secondDogRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdDog() {
    thirdDogRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstDog}>Tom</button>
        <button onClick={handleScrollToSecondDog}>Maru</button>
        <button onClick={handleScrollToThirdDog}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placedog.net/1000/500?id=1"
              alt="Tom"
              ref={firstDogRef}
            />
          </li>
          <li>
            <img
              src="https://placedog.net/1000/500?id=2"
              alt="Maru"
              ref={secondDogRef}
            />
          </li>
          <li>
            <img
              src="https://placedog.net/1000/500?id=3"
              alt="Jellylorum"
              ref={thirdDogRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
