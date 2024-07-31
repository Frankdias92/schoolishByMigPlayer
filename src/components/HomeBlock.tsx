import Space from "./Space";

import "../styles/HomeBlock.css";

export default function HomeBlock({
  title,
  subtitle,
  text,
  image,
}: {
  title: {
    text: string;
    color: string;
    weight: string;
  };
  subtitle: {
    text: string;
    color: string | undefined;
    weight: string;
  };
  text: {
    text: string;
    color: string | undefined;
    weight: string;
  };
  image: {
    imageURL: string | undefined;
    imageAlt: string | undefined;
  };
}) {
  return (
    <div className="homeBlock">
      <div className="texts">
        <div
          className="subtitle"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: subtitle.color || "black",
              fontWeight: subtitle.weight,
              textTransform: "uppercase",
            }}
          >
            {subtitle.text}
          </span>
        </div>
        <Space height="10px" />
        <h1 style={{ color: title.color || "black", fontWeight: title.weight }}>
          {title.text}
        </h1>
        <Space height="5px" />
        <p style={{ color: text.color || "black", fontWeight: text.weight }}>
          {text.text}
        </p>
      </div>
      <div className="image">
        {image.imageURL && <img src={image.imageURL} alt={image.imageAlt} />}
      </div>
    </div>
  );
}
