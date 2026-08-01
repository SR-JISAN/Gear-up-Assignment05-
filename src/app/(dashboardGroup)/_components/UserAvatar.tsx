import Image from "next/image";

export default function UserAvatar({
  image,
  name,
}: {
  image: string | null;
  name: string;
}) {
  const validImage = image && image.startsWith("http") ? image : "/avatar.png";

  return (
    <div className="flex items-center gap-3">
      <Image
        src={validImage}
        alt={name}
        width={40}
        height={40}
        className="
rounded-full
border
object-cover
"
      />

      <div>
        <p className="font-medium">{name}</p>
      </div>
    </div>
  );
}
